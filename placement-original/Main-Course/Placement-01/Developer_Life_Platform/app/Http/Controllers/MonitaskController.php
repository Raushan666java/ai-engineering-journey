<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Models\Project;
use App\Models\TimeSession;
use App\Models\MonitaskTask;
use App\Models\MonitaskProject;
use App\Models\MonitaskTimeEntry;
use App\Models\MonitaskScreenshot;
use App\Models\MonitaskActivityLog;
use App\Models\MonitaskReport;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class MonitaskController extends Controller
{
    private function getUserCompany(User $user): ?Company
    {
        // First try to get from team_members table
        $companyMember = DB::table('team_members')
            ->where('user_id', $user->id)
            ->first();
            
        if ($companyMember) {
            return Company::find($companyMember->company_id);
        }
        
        // Then try owned companies
        return Company::where('owner_id', $user->id)->first();
    }
    public function dashboard(Request $request)
    {
        $user = Auth::user();
        $company = $this->getUserCompany($user);
        
        if (!$company) {
            return redirect()->route('companies.create')
                ->with('warning', 'Please create or join a company to access Monitask features.');
        }

        $period = $request->get('period', 'week');
        $projectId = $request->get('project_id');

        // Get active time session
        $activeSession = TimeSession::where('user_id', $user->id)
            ->whereNull('ended_at')
            ->with(['project', 'task'])
            ->first();

        // Get recent time sessions
        $recentSessions = TimeSession::where('user_id', $user->id)
            ->where('company_id', $company->id)
            ->when($projectId, fn($q) => $q->where('project_id', $projectId))
            ->with(['project', 'task'])
            ->orderBy('started_at', 'desc')
            ->limit(10)
            ->get();

        // Get time analytics
        $timeAnalytics = $this->getTimeAnalytics($user, $company, $period, $projectId);

        // Get productivity data
        $productivityData = $this->getProductivityData($user, $company, $period, $projectId);

        // Get projects
        $projects = Project::where('company_id', $company->id)
            ->where(function ($query) use ($user) {
                $query->whereHas('members', fn($q) => $q->where('user_id', $user->id))
                    ->orWhere('manager_id', $user->id);
            })
            ->get();

        // Get pending tasks
        $pendingTasks = MonitaskTask::whereHas('project', function($q) use ($user) {
                $q->where('owner_id', $user->id)
                  ->orWhere('client_id', $user->id)
                  ->orWhereHas('members', fn($q2) => $q2->where('user_id', $user->id));
            })
            ->where('assigned_to', $user->id)
            ->whereIn('status', ['pending', 'in_progress'])
            ->orderBy('due_date')
            ->limit(5)
            ->get();

        return view('monitask.dashboard', compact(
            'user',
            'company',
            'activeSession',
            'recentSessions',
            'timeAnalytics',
            'productivityData',
            'projects',
            'pendingTasks',
            'period',
            'projectId'
        ));
    }

    public function timeTracking(Request $request)
    {
        $user = Auth::user();
        
        $period = $request->get('period', 'week');
        $projectId = $request->get('project_id');
        $status = $request->get('status');

        // Get time sessions with filters - using MonitaskTimeEntry instead of TimeSession
        $query = MonitaskTimeEntry::where('user_id', $user->id)
            ->with(['project', 'task', 'user']);

        if ($projectId) {
            $query->where('project_id', $projectId);
        }

        if ($status) {
            if ($status === 'pending') {
                $query->whereNull('is_approved');
            } elseif ($status === 'approved') {
                $query->where('is_approved', true);
            } elseif ($status === 'rejected') {
                $query->where('is_approved', false);
            }
        }

        $days = match($period) {
            'today' => 1,
            'week' => 7,
            'month' => 30,
            'quarter' => 90,
            default => 7
        };

        $sessions = $query->where('start_time', '>=', now()->subDays($days))
            ->orderBy('start_time', 'desc')
            ->paginate(20);

        // Get summary data
        $summary = [
            'total_hours' => $sessions->sum('duration_minutes') / 60,
            'sessions_count' => $sessions->count(),
            'average_session' => $sessions->count() > 0 ? ($sessions->sum('duration_minutes') / $sessions->count()) / 60 : 0,
        ];

        // Get projects for filter
        $projects = MonitaskProject::where(function($q) use ($user) {
                $q->where('owner_id', $user->id)
                  ->orWhere('client_id', $user->id)
                  ->orWhereHas('members', fn($q2) => $q2->where('user_id', $user->id));
            })->get();

        return view('monitask.time-tracking', compact(
            'sessions',
            'summary',
            'projects',
            'period',
            'projectId',
            'status'
        ));
    }

    public function startTimer(Request $request)
    {
        $request->validate([
            'project_id' => 'required|exists:projects,id',
            'task_id' => 'nullable|exists:tasks,id',
            'description' => 'nullable|string|max:255',
        ]);

        $user = Auth::user();
        $company = $this->getUserCompany($user);

        // Stop any active session
        $activeSession = TimeSession::where('user_id', $user->id)
            ->whereNull('ended_at')
            ->first();

        if ($activeSession) {
            $activeSession->stop();
        }

        $project = Project::findOrFail($request->project_id);
        
        // Check if user can access this project
        if (!$project->canUserAccess($user)) {
            return response()->json(['error' => 'Access denied'], 403);
        }

        $session = TimeSession::create([
            'user_id' => $user->id,
            'project_id' => $request->project_id,
            'task_id' => $request->task_id,
            'company_id' => $company->id,
            'description' => $request->description,
            'started_at' => now(),
            'is_billable' => $project->billable,
            'hourly_rate' => $project->hourly_rate,
            'screenshot_enabled' => $project->screenshot_enabled,
            'screenshot_frequency' => $project->screenshot_frequency,
            'activity_enabled' => $project->activity_monitoring,
        ]);

        return response()->json([
            'success' => true,
            'session' => $session->load(['project', 'task']),
            'message' => 'Timer started successfully'
        ]);
    }

    public function stopTimer(Request $request)
    {
        $user = Auth::user();
        
        $session = TimeSession::where('user_id', $user->id)
            ->whereNull('ended_at')
            ->first();

        if (!$session) {
            return response()->json(['error' => 'No active timer found'], 404);
        }

        $session->stop();

        return response()->json([
            'success' => true,
            'session' => $session->load(['project', 'task']),
            'message' => 'Timer stopped successfully'
        ]);
    }

    public function addManualEntry(Request $request)
    {
        $request->validate([
            'project_id' => 'required|exists:projects,id',
            'task_id' => 'nullable|exists:tasks,id',
            'date' => 'required|date',
            'duration' => 'required|numeric|min:0.25',
            'start_time' => 'nullable|date_format:H:i',
            'end_time' => 'nullable|date_format:H:i',
            'description' => 'nullable|string|max:500',
            'is_billable' => 'boolean'
        ]);

        $user = Auth::user();
        $company = $this->getUserCompany($user);
        $project = Project::findOrFail($request->project_id);

        if (!$project->canUserAccess($user)) {
            return response()->json(['error' => 'Access denied'], 403);
        }

        $startedAt = Carbon::parse($request->date);
        if ($request->start_time) {
            $startedAt = $startedAt->setTimeFromTimeString($request->start_time);
        }

        $duration = $request->duration * 3600; // Convert hours to seconds
        $endedAt = $startedAt->copy()->addSeconds($duration);

        $session = TimeSession::create([
            'user_id' => $user->id,
            'project_id' => $request->project_id,
            'task_id' => $request->task_id,
            'company_id' => $company->id,
            'description' => $request->description,
            'started_at' => $startedAt,
            'ended_at' => $endedAt,
            'duration' => $duration,
            'is_billable' => $request->boolean('is_billable', $project->billable),
            'hourly_rate' => $project->hourly_rate,
            'manual_entry' => true,
        ]);

        return response()->json([
            'success' => true,
            'session' => $session->load(['project', 'task']),
            'message' => 'Manual entry added successfully'
        ]);
    }

    public function projects(Request $request)
    {
        $user = Auth::user();
        $company = $this->getUserCompany($user);
        
        $status = $request->get('status', 'active');
        
        $query = Project::where('company_id', $company->id)
            ->where(function ($query) use ($user) {
                $query->whereHas('members', fn($q) => $q->where('user_id', $user->id))
                    ->orWhere('manager_id', $user->id)
                    ->orWhere('client_id', $user->id);
            });

        if ($status === 'archived') {
            $query->where('is_archived', true);
        } else {
            $query->where('is_archived', false);
            if ($status !== 'all') {
                $query->where('status', $status);
            }
        }

        $projects = $query->withCount(['tasks', 'timeSessions'])
            ->with(['client', 'manager'])
            ->paginate(12);

        // Add analytics for each project
        $projects->getCollection()->transform(function ($project) {
            $project->analytics = [
                'total_hours' => $project->getTotalHoursWorked(),
                'budget_used' => $project->getBudgetUsed(),
                'budget_remaining' => $project->getBudgetRemaining(),
                'progress_percentage' => $project->getProgressPercentage(),
                'task_completion' => $project->getTaskCompletionPercentage(),
                'productivity_score' => $project->getProductivityScore(),
            ];
            return $project;
        });

        return view('monitask.projects', compact('projects', 'status', 'company'));
    }

    public function tasks(Request $request)
    {
        $user = Auth::user();
        
        $status = $request->get('status');
        $priority = $request->get('priority');
        $projectId = $request->get('project_id');
        $assignedTo = $request->get('assigned_to');

        $query = MonitaskTask::whereHas('project', function($q) use ($user) {
                $q->where('owner_id', $user->id)
                  ->orWhere('client_id', $user->id)
                  ->orWhereHas('members', fn($q2) => $q2->where('user_id', $user->id));
            })
            ->where(function ($query) use ($user) {
                $query->where('assigned_to', $user->id)
                    ->orWhere('created_by', $user->id)
                    ->orWhereHas('project', function ($q) use ($user) {
                        $q->where('owner_id', $user->id)
                            ->orWhereHas('members', fn($q2) => $q2->where('user_id', $user->id));
                    });
            });

        if ($status) {
            $query->where('status', $status);
        }

        if ($priority) {
            $query->where('priority', $priority);
        }

        if ($projectId) {
            $query->where('project_id', $projectId);
        }

        if ($assignedTo) {
            $query->where('assigned_to', $assignedTo);
        }

        $tasks = $query->with(['project', 'assignedTo', 'createdBy'])
            ->orderBy('due_date')
            ->orderBy('priority', 'desc')
            ->paginate(20);

        // Get filter options
        $projects = MonitaskProject::where(function($q) use ($user) {
                $q->where('owner_id', $user->id)
                  ->orWhere('client_id', $user->id)
                  ->orWhereHas('members', fn($q2) => $q2->where('user_id', $user->id));
            })->get();
        
        $teamMembers = User::whereHas('monitaskProjects', function($q) use ($user) {
                $q->where('owner_id', $user->id)
                  ->orWhere('client_id', $user->id)
                  ->orWhereHas('members', fn($q2) => $q2->where('user_id', $user->id));
            })
            ->orWhereHas('clientProjects', function($q) use ($user) {
                $q->where('owner_id', $user->id)
                  ->orWhereHas('members', fn($q2) => $q2->where('user_id', $user->id));
            })
            ->select('id', 'name', 'email')
            ->get();

        // Calculate task statistics
        $allUserTasks = MonitaskTask::whereHas('project', function($q) use ($user) {
                $q->where('owner_id', $user->id)
                  ->orWhere('client_id', $user->id)
                  ->orWhereHas('members', fn($q2) => $q2->where('user_id', $user->id));
            })
            ->where(function ($query) use ($user) {
                $query->where('assigned_to', $user->id)
                    ->orWhere('created_by', $user->id);
            });

        $taskStats = [
            'total' => $allUserTasks->count(),
            'pending' => $allUserTasks->clone()->where('status', 'pending')->count(),
            'in_progress' => $allUserTasks->clone()->where('status', 'in_progress')->count(),
            'completed' => $allUserTasks->clone()->where('status', 'completed')->count(),
            'overdue' => $allUserTasks->clone()->where('due_date', '<', now())->whereNotIn('status', ['completed', 'cancelled'])->count(),
            'this_week' => $allUserTasks->clone()->whereBetween('created_at', [now()->startOfWeek(), now()->endOfWeek()])->count(),
        ];

        return view('monitask.tasks', compact(
            'tasks',
            'projects',
            'teamMembers',
            'taskStats',
            'status',
            'priority',
            'projectId',
            'assignedTo'
        ));
    }

    public function screenshots(Request $request)
    {
        $user = Auth::user();
        $company = $this->getUserCompany($user);
        
        $projectId = $request->get('project_id');
        $date = $request->get('date', today()->format('Y-m-d'));
        $userId = $request->get('user_id', $user->id);

        $query = MonitaskScreenshot::where('user_id', $userId)
            ->whereDate('captured_at', $date)
            ->whereHas('project', function($q) use ($user) {
                $q->where('owner_id', $user->id)
                  ->orWhere('client_id', $user->id)
                  ->orWhereHas('members', fn($q2) => $q2->where('user_id', $user->id));
            });

        if ($projectId) {
            $query->where('project_id', $projectId);
        }

        // Get screenshots for filter
        $screenshots = MonitaskScreenshot::where('user_id', $userId)
            ->when($projectId, fn($q) => $q->where('project_id', $projectId))
            ->whereDate('captured_at', $date)
            ->with(['project', 'timeEntry'])
            ->orderBy('captured_at', 'desc')
            ->paginate(24);

        // Get projects for filter
        $projects = MonitaskProject::where(function($q) use ($user) {
                $q->where('owner_id', $user->id)
                  ->orWhere('client_id', $user->id)
                  ->orWhereHas('members', fn($q2) => $q2->where('user_id', $user->id));
            })->get();
        
        // Get team members (if user is manager/owner)
        $teamMembers = collect();
        $userProjects = MonitaskProject::where(function($q) use ($user) {
                $q->where('owner_id', $user->id)
                  ->orWhere('client_id', $user->id);
            })->get();

        if ($userProjects->isNotEmpty()) {
            $teamMembers = User::whereHas('monitaskProjects', function($q) use ($user) {
                $q->where('owner_id', $user->id)
                  ->orWhere('client_id', $user->id);
            })
            ->select('id', 'name', 'email')
            ->get();
        }

        return view('monitask.screenshots', compact(
            'screenshots',
            'projects',
            'teamMembers',
            'projectId',
            'date',
            'userId'
        ));
    }

    public function activityLogs(Request $request)
    {
        $user = Auth::user();
        
        $projectId = $request->get('project_id');
        $date = $request->get('date', today()->format('Y-m-d'));
        $userId = $request->get('user_id', $user->id);
        $category = $request->get('category');

        $query = MonitaskActivityLog::where('user_id', $userId)
            ->whereDate('recorded_at', $date)
            ->whereHas('project', function($q) use ($user) {
                $q->where('owner_id', $user->id)
                  ->orWhere('client_id', $user->id)
                  ->orWhereHas('members', fn($q2) => $q2->where('user_id', $user->id));
            });

        if ($projectId) {
            $query->where('project_id', $projectId);
        }

        if ($category) {
            $query->where('category', $category);
        }

        $activities = $query->with(['project', 'timeEntry'])
            ->orderBy('recorded_at', 'desc')
            ->paginate(50);

        // Get summary data
        $summary = [
            'total_activities' => $activities->total(),
            'productive_time' => $activities->where('productivity_level', 'productive')->sum('duration_seconds'),
            'neutral_time' => $activities->where('productivity_level', 'neutral')->sum('duration_seconds'),
            'unproductive_time' => $activities->where('productivity_level', 'unproductive')->sum('duration_seconds'),
            'keystroke_count' => $activities->sum('keystroke_count'),
            'mouse_clicks' => $activities->sum('mouse_click_count'),
            'scroll_count' => $activities->sum('scroll_count')
        ];

        // Get projects for filter
        $projects = MonitaskProject::where(function($q) use ($user) {
                $q->where('owner_id', $user->id)
                  ->orWhere('client_id', $user->id)
                  ->orWhereHas('members', fn($q2) => $q2->where('user_id', $user->id));
            })->get();

        // Get team members
        $teamMembers = User::whereHas('monitaskProjects', function($q) use ($user) {
                $q->where('owner_id', $user->id)
                  ->orWhere('client_id', $user->id)
                  ->orWhereHas('members', fn($q2) => $q2->where('user_id', $user->id));
            })
            ->select('id', 'name', 'email')
            ->get();

        return view('monitask.activity-logs', compact(
            'activities',
            'summary',
            'projects',
            'teamMembers',
            'projectId',
            'date',
            'userId',
            'category'
        ));
    }

    public function teamDashboard(Request $request)
    {
        $user = Auth::user();
        
        $period = $request->get('period', 'week');
        $projectId = $request->get('project_id');

        // Get user's projects where they are owner or client
        $projects = MonitaskProject::where(function($q) use ($user) {
                $q->where('owner_id', $user->id)
                  ->orWhere('client_id', $user->id);
            })->get();

        if ($projects->isEmpty()) {
            return redirect()->route('monitask.projects.create')
                ->with('warning', 'Please create a project first to access team dashboard.');
        }

        // Get team members from all user's projects
        $teamMembers = User::whereHas('monitaskProjects', function($q) use ($user) {
                $q->where('owner_id', $user->id)
                  ->orWhere('client_id', $user->id);
            })
            ->orWhereHas('clientProjects', function($q) use ($user) {
                $q->where('owner_id', $user->id);
            })
            ->with(['monitaskTimeEntries' => function($q) use ($period, $projectId) {
                $days = match($period) {
                    'today' => 1,
                    'week' => 7,
                    'month' => 30,
                    'quarter' => 90,
                    default => 7
                };
                
                $q->where('start_time', '>=', now()->subDays($days));
                if ($projectId) {
                    $q->where('project_id', $projectId);
                }
            }])
            ->get();

        // Calculate team analytics
        $teamAnalytics = [
            'total_members' => $teamMembers->count(),
            'active_members' => $teamMembers->filter(function($member) {
                return $member->monitaskTimeEntries->isNotEmpty();
            })->count(),
            'total_hours' => $teamMembers->sum(function($member) {
                return $member->monitaskTimeEntries->sum('duration_minutes') / 60;
            }),
            'billable_hours' => $teamMembers->sum(function($member) {
                return $member->monitaskTimeEntries->where('is_billable', true)->sum('duration_minutes') / 60;
            }),
            'productivity_score' => $teamMembers->avg(function($member) {
                $productive = MonitaskActivityLog::where('user_id', $member->id)
                    ->where('productivity_level', 'productive')
                    ->sum('duration_seconds');
                $total = MonitaskActivityLog::where('user_id', $member->id)
                    ->sum('duration_seconds');
                return $total > 0 ? ($productive / $total) * 100 : 0;
            })
        ];

        // Get project performance
        $projectPerformance = $projects->map(function($project) use ($period) {
            $days = match($period) {
                'today' => 1,
                'week' => 7,
                'month' => 30,
                'quarter' => 90,
                default => 7
            };

            $timeEntries = $project->timeEntries()
                ->where('start_time', '>=', now()->subDays($days))
                ->get();

            return [
                'project' => $project,
                'hours_worked' => $timeEntries->sum('duration_minutes') / 60,
                'members_count' => $project->members()->count(),
                'completion_rate' => $project->tasks()->where('status', 'completed')->count() / max($project->tasks()->count(), 1) * 100,
                'budget_used' => $project->budget > 0 ? ($timeEntries->where('is_billable', true)->sum(function($entry) {
                    return ($entry->duration_minutes / 60) * ($entry->hourly_rate ?: 0);
                }) / $project->budget) * 100 : 0
            ];
        });

        return view('monitask.team-dashboard', compact(
            'teamMembers',
            'projects',
            'teamAnalytics',
            'projectPerformance',
            'period',
            'projectId'
        ));
    }

    public function productivityAnalytics(Request $request)
    {
        $user = Auth::user();
        
        $period = $request->get('period', 'week');
        $projectId = $request->get('project_id');
        $userId = $request->get('user_id', $user->id);

        $days = match($period) {
            'today' => 1,
            'week' => 7,
            'month' => 30,
            'quarter' => 90,
            default => 7
        };

        // Get productivity breakdown
        $productivityData = MonitaskActivityLog::getProductivityBreakdown($userId, $projectId, $period);

        // Get application usage
        $applicationUsage = MonitaskActivityLog::where('user_id', $userId)
            ->when($projectId, fn($q) => $q->where('project_id', $projectId))
            ->where('recorded_at', '>=', now()->subDays($days))
            ->selectRaw('application_name, SUM(duration_seconds) as total_duration, COUNT(*) as usage_count')
            ->groupBy('application_name')
            ->orderBy('total_duration', 'desc')
            ->limit(10)
            ->get();

        // Get website usage
        $websiteUsage = MonitaskActivityLog::where('user_id', $userId)
            ->when($projectId, fn($q) => $q->where('project_id', $projectId))
            ->where('recorded_at', '>=', now()->subDays($days))
            ->whereNotNull('url')
            ->selectRaw('url, SUM(duration_seconds) as total_duration, COUNT(*) as usage_count')
            ->groupBy('url')
            ->orderBy('total_duration', 'desc')
            ->limit(10)
            ->get();

        // Get hourly productivity pattern
        $hourlyProductivity = MonitaskActivityLog::where('user_id', $userId)
            ->when($projectId, fn($q) => $q->where('project_id', $projectId))
            ->where('recorded_at', '>=', now()->subDays($days))
            ->selectRaw('HOUR(recorded_at) as hour, productivity_level, SUM(duration_seconds) as total_duration')
            ->groupBy('hour', 'productivity_level')
            ->orderBy('hour')
            ->get()
            ->groupBy('hour');

        // Get projects for filter
        $projects = MonitaskProject::where(function($q) use ($user) {
                $q->where('owner_id', $user->id)
                  ->orWhere('client_id', $user->id)
                  ->orWhereHas('members', fn($q2) => $q2->where('user_id', $user->id));
            })->get();

        // Get team members
        $teamMembers = User::whereHas('monitaskProjects', function($q) use ($user) {
                $q->where('owner_id', $user->id)
                  ->orWhere('client_id', $user->id)
                  ->orWhereHas('members', fn($q2) => $q2->where('user_id', $user->id));
            })
            ->select('id', 'name', 'email')
            ->get();

        return view('monitask.productivity-analytics', compact(
            'productivityData',
            'applicationUsage',
            'websiteUsage',
            'hourlyProductivity',
            'projects',
            'teamMembers',
            'period',
            'projectId',
            'userId'
        ));
    }

    public function landing()
    {
        return view('monitask.landing');
    }

    public function agents()
    {
        return view('monitask.agents');
    }

    public function generateReport(Request $request)
    {
        $request->validate([
            'type' => 'required|in:time_tracking,productivity,project_summary,team_performance,detailed_activity,invoice',
            'period' => 'required|in:today,week,month,quarter,year,custom',
            'start_date' => 'nullable|required_if:period,custom|date',
            'end_date' => 'nullable|required_if:period,custom|date|after_or_equal:start_date',
            'project_id' => 'nullable|exists:monitask_projects,id',
            'user_id' => 'nullable|exists:users,id'
        ]);

        $user = Auth::user();
        
        $report = MonitaskReport::create([
            'user_id' => $user->id,
            'project_id' => $request->project_id,
            'title' => $this->generateReportTitle($request->type, $request->period),
            'type' => $request->type,
            'period' => $request->period,
            'start_date' => $request->period === 'custom' ? $request->start_date : $this->getPeriodStartDate($request->period),
            'end_date' => $request->period === 'custom' ? $request->end_date : now(),
            'filters' => $request->only(['project_id', 'user_id']),
            'status' => 'generating'
        ]);

        // Generate report data based on type
        $reportData = $this->generateReportData($report);
        
        $report->update([
            'data' => $reportData,
            'generated_at' => now(),
            'status' => 'completed'
        ]);

        return response()->json([
            'success' => true,
            'report' => $report,
            'message' => 'Report generated successfully'
        ]);
    }

    private function generateReportTitle($type, $period): string
    {
        $typeNames = [
            'time_tracking' => 'Time Tracking Report',
            'productivity' => 'Productivity Report',
            'project_summary' => 'Project Summary',
            'team_performance' => 'Team Performance Report',
            'detailed_activity' => 'Detailed Activity Report',
            'invoice' => 'Invoice Report'
        ];

        $periodNames = [
            'today' => 'Today',
            'week' => 'This Week',
            'month' => 'This Month',
            'quarter' => 'This Quarter',
            'year' => 'This Year',
            'custom' => 'Custom Period'
        ];

        return $typeNames[$type] . ' - ' . $periodNames[$period];
    }

    private function getPeriodStartDate($period)
    {
        return match($period) {
            'today' => now()->startOfDay(),
            'week' => now()->startOfWeek(),
            'month' => now()->startOfMonth(),
            'quarter' => now()->startOfQuarter(),
            'year' => now()->startOfYear(),
            default => now()->subDays(7)
        };
    }

    private function generateReportData($report)
    {
        return match($report->type) {
            'time_tracking' => $this->generateTimeTrackingReportData($report),
            'productivity' => $this->generateProductivityReportData($report),
            'project_summary' => $this->generateProjectSummaryReportData($report),
            'team_performance' => $this->generateTeamPerformanceReportData($report),
            'detailed_activity' => $this->generateDetailedActivityReportData($report),
            'invoice' => $this->generateInvoiceReportData($report),
            default => []
        };
    }

    private function generateTimeTrackingReportData($report)
    {
        $query = MonitaskTimeEntry::whereBetween('start_time', [$report->start_date, $report->end_date]);
        
        if ($report->filters['project_id']) {
            $query->where('project_id', $report->filters['project_id']);
        }
        
        if ($report->filters['user_id']) {
            $query->where('user_id', $report->filters['user_id']);
        }

        $timeEntries = $query->with(['user', 'project', 'task'])->get();

        return [
            'summary' => [
                'total_entries' => $timeEntries->count(),
                'total_hours' => round($timeEntries->sum('duration_minutes') / 60, 2),
                'billable_hours' => round($timeEntries->where('is_billable', true)->sum('duration_minutes') / 60, 2),
                'total_earnings' => $timeEntries->where('is_billable', true)->sum(function($entry) {
                    return ($entry->duration_minutes / 60) * ($entry->hourly_rate ?: 0);
                })
            ],
            'entries' => $timeEntries->map(function($entry) {
                return [
                    'id' => $entry->id,
                    'user' => $entry->user->name,
                    'project' => $entry->project->name,
                    'task' => $entry->task?->name,
                    'start_time' => $entry->start_time,
                    'end_time' => $entry->end_time,
                    'duration_hours' => round($entry->duration_minutes / 60, 2),
                    'is_billable' => $entry->is_billable,
                    'hourly_rate' => $entry->hourly_rate,
                    'earnings' => $entry->is_billable ? ($entry->duration_minutes / 60) * ($entry->hourly_rate ?: 0) : 0,
                    'description' => $entry->description
                ];
            })
        ];
    }

    private function generateProductivityReportData($report)
    {
        $activities = MonitaskActivityLog::whereBetween('recorded_at', [$report->start_date, $report->end_date]);
        
        if ($report->filters['project_id']) {
            $activities->where('project_id', $report->filters['project_id']);
        }
        
        if ($report->filters['user_id']) {
            $activities->where('user_id', $report->filters['user_id']);
        }

        $activities = $activities->get();

        $totalDuration = $activities->sum('duration_seconds');
        $productive = $activities->where('productivity_level', 'productive')->sum('duration_seconds');
        $neutral = $activities->where('productivity_level', 'neutral')->sum('duration_seconds');
        $unproductive = $activities->where('productivity_level', 'unproductive')->sum('duration_seconds');

        return [
            'summary' => [
                'total_duration' => $totalDuration,
                'productivity_score' => $totalDuration > 0 ? round(($productive / $totalDuration) * 100, 1) : 0,
                'productive_time' => $productive,
                'neutral_time' => $neutral,
                'unproductive_time' => $unproductive
            ],
            'applications' => $activities->groupBy('application_name')->map(function($group, $app) {
                return [
                    'name' => $app,
                    'duration' => $group->sum('duration_seconds'),
                    'usage_count' => $group->count(),
                    'productivity_level' => $group->first()->productivity_level
                ];
            })->sortByDesc('duration')->values()
        ];
    }

    private function generateProjectSummaryReportData($report)
    {
        if (!$report->filters['project_id']) {
            return ['error' => 'Project ID is required for project summary report'];
        }

        $project = MonitaskProject::find($report->filters['project_id']);
        
        $timeEntries = $project->timeEntries()
            ->whereBetween('start_time', [$report->start_date, $report->end_date])
            ->with(['user', 'task'])
            ->get();

        $tasks = $project->tasks()
            ->whereBetween('created_at', [$report->start_date, $report->end_date])
            ->with(['assignedTo', 'createdBy'])
            ->get();

        return [
            'project' => [
                'name' => $project->name,
                'description' => $project->description,
                'status' => $project->status,
                'budget' => $project->budget,
                'hourly_rate' => $project->hourly_rate,
                'progress_percentage' => $project->progress_percentage
            ],
            'summary' => [
                'total_hours' => round($timeEntries->sum('duration_minutes') / 60, 2),
                'billable_hours' => round($timeEntries->where('is_billable', true)->sum('duration_minutes') / 60, 2),
                'total_earnings' => $timeEntries->where('is_billable', true)->sum(function($entry) {
                    return ($entry->duration_minutes / 60) * ($entry->hourly_rate ?: 0);
                }),
                'tasks_completed' => $tasks->where('status', 'completed')->count(),
                'total_tasks' => $tasks->count(),
                'team_members' => $project->members()->count()
            ],
            'time_entries' => $timeEntries->groupBy('user.name')->map(function($entries, $userName) {
                return [
                    'user' => $userName,
                    'total_hours' => round($entries->sum('duration_minutes') / 60, 2),
                    'billable_hours' => round($entries->where('is_billable', true)->sum('duration_minutes') / 60, 2),
                    'entries_count' => $entries->count()
                ];
            })->values()
        ];
    }

    private function generateTeamPerformanceReportData($report)
    {
        $teamMembers = User::whereHas('monitaskProjects', function($q) use ($report) {
                if ($report->filters['project_id']) {
                    $q->where('id', $report->filters['project_id']);
                }
            })
            ->with(['monitaskTimeEntries' => function($q) use ($report) {
                $q->whereBetween('start_time', [$report->start_date, $report->end_date]);
                if ($report->filters['project_id']) {
                    $q->where('project_id', $report->filters['project_id']);
                }
            }])
            ->get();

        return [
            'summary' => [
                'total_members' => $teamMembers->count(),
                'active_members' => $teamMembers->filter(fn($member) => $member->monitaskTimeEntries->isNotEmpty())->count(),
                'total_hours' => round($teamMembers->sum(fn($member) => $member->monitaskTimeEntries->sum('duration_minutes')) / 60, 2),
                'average_hours_per_member' => round($teamMembers->avg(fn($member) => $member->monitaskTimeEntries->sum('duration_minutes')) / 60, 2)
            ],
            'members' => $teamMembers->map(function($member) use ($report) {
                $productivity = MonitaskActivityLog::where('user_id', $member->id)
                    ->whereBetween('recorded_at', [$report->start_date, $report->end_date])
                    ->get();
                
                $totalActivity = $productivity->sum('duration_seconds');
                $productiveActivity = $productivity->where('productivity_level', 'productive')->sum('duration_seconds');

                return [
                    'name' => $member->name,
                    'email' => $member->email,
                    'total_hours' => round($member->monitaskTimeEntries->sum('duration_minutes') / 60, 2),
                    'billable_hours' => round($member->monitaskTimeEntries->where('is_billable', true)->sum('duration_minutes') / 60, 2),
                    'productivity_score' => $totalActivity > 0 ? round(($productiveActivity / $totalActivity) * 100, 1) : 0,
                    'sessions_count' => $member->monitaskTimeEntries->count()
                ];
            })
        ];
    }

    private function generateDetailedActivityReportData($report)
    {
        $activities = MonitaskActivityLog::whereBetween('recorded_at', [$report->start_date, $report->end_date]);
        
        if ($report->filters['project_id']) {
            $activities->where('project_id', $report->filters['project_id']);
        }
        
        if ($report->filters['user_id']) {
            $activities->where('user_id', $report->filters['user_id']);
        }

        $activities = $activities->with(['user', 'project'])->get();

        return [
            'summary' => [
                'total_activities' => $activities->count(),
                'total_duration' => $activities->sum('duration_seconds'),
                'keystroke_count' => $activities->sum('keystroke_count'),
                'mouse_clicks' => $activities->sum('mouse_click_count'),
                'scroll_count' => $activities->sum('scroll_count')
            ],
            'activities' => $activities->map(function($activity) {
                return [
                    'user' => $activity->user->name,
                    'project' => $activity->project->name,
                    'application' => $activity->application_name,
                    'window_title' => $activity->window_title,
                    'url' => $activity->url,
                    'category' => $activity->category,
                    'productivity_level' => $activity->productivity_level,
                    'duration' => $activity->duration_seconds,
                    'keystroke_count' => $activity->keystroke_count,
                    'mouse_clicks' => $activity->mouse_click_count,
                    'recorded_at' => $activity->recorded_at
                ];
            })
        ];
    }

    private function generateInvoiceReportData($report)
    {
        $timeEntries = MonitaskTimeEntry::whereBetween('start_time', [$report->start_date, $report->end_date])
            ->where('is_billable', true)
            ->where('is_approved', true);
            
        if ($report->filters['project_id']) {
            $timeEntries->where('project_id', $report->filters['project_id']);
        }
        
        if ($report->filters['user_id']) {
            $timeEntries->where('user_id', $report->filters['user_id']);
        }

        $timeEntries = $timeEntries->with(['user', 'project', 'task'])->get();

        $totalHours = $timeEntries->sum('duration_minutes') / 60;
        $totalAmount = $timeEntries->sum(function($entry) {
            return ($entry->duration_minutes / 60) * ($entry->hourly_rate ?: 0);
        });

        return [
            'invoice_details' => [
                'invoice_number' => 'INV-' . now()->format('Ymd') . '-' . $report->id,
                'invoice_date' => now()->format('Y-m-d'),
                'period' => $report->start_date->format('M j, Y') . ' - ' . $report->end_date->format('M j, Y'),
                'total_hours' => round($totalHours, 2),
                'total_amount' => round($totalAmount, 2)
            ],
            'line_items' => $timeEntries->groupBy(['project_id', 'task_id'])->map(function($projectEntries, $projectId) {
                return $projectEntries->map(function($taskEntries, $taskId) {
                    $duration = $taskEntries->sum('duration_minutes') / 60;
                    $rate = $taskEntries->first()->hourly_rate ?: 0;
                    
                    return [
                        'project' => $taskEntries->first()->project->name,
                        'task' => $taskEntries->first()->task?->name ?: 'General work',
                        'hours' => round($duration, 2),
                        'rate' => $rate,
                        'amount' => round($duration * $rate, 2)
                    ];
                });
            })->flatten(1)->values()
        ];
    }

    public function downloadReport($reportId)
    {
        $report = MonitaskReport::findOrFail($reportId);
        
        // Check if user can access this report
        if ($report->user_id !== Auth::id()) {
            abort(403);
        }

        // Generate PDF or Excel file based on report type
        // This would typically use a package like dompdf or Laravel Excel
        
        return response()->json([
            'success' => true,
            'download_url' => route('monitask.reports.download', $report->id),
            'message' => 'Report ready for download'
        ]);
    }

    public function reports(Request $request)
    {
        $user = Auth::user();
        $company = $this->getUserCompany($user);
        
        $type = $request->get('type', 'time');
        $period = $request->get('period', 'week');
        $projectId = $request->get('project_id');
        $userId = $request->get('user_id');

        $reportData = match($type) {
            'time' => $this->generateTimeReport($company, $period, $projectId, $userId),
            'productivity' => $this->generateProductivityReport($company, $period, $projectId, $userId),
            'project' => $this->generateProjectReport($company, $period, $projectId),
            'team' => $this->generateTeamReport($company, $period, $projectId),
            'activity' => $this->generateActivityReport($company, $period, $projectId, $userId),
            default => $this->generateTimeReport($company, $period, $projectId, $userId)
        };

        // Get filter options
        $projects = Project::where('company_id', $company->id)->get();
        $teamMembers = DB::table('team_members')
            ->join('users', 'team_members.user_id', '=', 'users.id')
            ->where('team_members.company_id', $company->id)
            ->select('users.id', 'users.name', 'users.email')
            ->get();

        return view('monitask.reports', compact(
            'reportData',
            'projects',
            'teamMembers',
            'type',
            'period',
            'projectId',
            'userId',
            'company'
        ));
    }

    private function getTimeAnalytics($user, $company, $period, $projectId = null)
    {
        $days = match($period) {
            'today' => 1,
            'week' => 7,
            'month' => 30,
            'quarter' => 90,
            default => 7
        };

        $query = TimeSession::where('user_id', $user->id)
            ->where('company_id', $company->id)
            ->where('started_at', '>=', now()->subDays($days));

        if ($projectId) {
            $query->where('project_id', $projectId);
        }

        $sessions = $query->get();

        $totalHours = $sessions->sum('duration') / 3600;
        $billableHours = $sessions->where('is_billable', true)->sum('duration') / 3600;
        $earnings = $sessions->where('is_billable', true)->sum(function ($session) {
            return ($session->duration / 3600) * ($session->hourly_rate ?: 0);
        });

        return [
            'total_hours' => round($totalHours, 2),
            'billable_hours' => round($billableHours, 2),
            'non_billable_hours' => round($totalHours - $billableHours, 2),
            'earnings' => round($earnings, 2),
            'sessions_count' => $sessions->count(),
            'average_session' => $sessions->isNotEmpty() ? round($sessions->avg('duration') / 3600, 2) : 0,
        ];
    }

    private function getProductivityData($user, $company, $period, $projectId = null)
    {
        return MonitaskActivityLog::getProductivityBreakdown($user->id, $projectId, $period);
    }

    private function getTimeTrackingSummary($user, $company, $period, $projectId = null)
    {
        $days = match($period) {
            'today' => 1,
            'week' => 7,
            'month' => 30,
            'quarter' => 90,
            default => 7
        };

        $query = TimeSession::where('user_id', $user->id)
            ->where('company_id', $company->id)
            ->where('started_at', '>=', now()->subDays($days));

        if ($projectId) {
            $query->where('project_id', $projectId);
        }

        $sessions = $query->get();

        return [
            'total_sessions' => $sessions->count(),
            'total_hours' => round($sessions->sum('duration') / 3600, 2),
            'billable_hours' => round($sessions->where('is_billable', true)->sum('duration') / 3600, 2),
            'pending_approval' => $sessions->whereNull('is_approved')->count(),
            'approved' => $sessions->where('is_approved', true)->count(),
            'rejected' => $sessions->where('is_approved', false)->count(),
            'total_earnings' => round($sessions->where('is_billable', true)->sum(function ($session) {
                return ($session->duration / 3600) * ($session->hourly_rate ?: 0);
            }), 2),
        ];
    }

    private function generateTimeReport($company, $period, $projectId = null, $userId = null)
    {
        // Implementation for time report generation
        return [];
    }

    private function generateProductivityReport($company, $period, $projectId = null, $userId = null)
    {
        // Implementation for productivity report generation
        return [];
    }

    private function generateProjectReport($company, $period, $projectId = null)
    {
        // Implementation for project report generation
        return [];
    }

    private function generateTeamReport($company, $period, $projectId = null)
    {
        // Implementation for team report generation
        return [];
    }

    private function generateActivityReport($company, $period, $projectId = null, $userId = null)
    {
        // Implementation for activity report generation
        return [];
    }
}
