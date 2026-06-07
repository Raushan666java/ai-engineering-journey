<?php

namespace App\Http\Controllers;

use App\Models\MonitaskProject;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\View\View;
use Illuminate\Http\RedirectResponse;

class MonitaskProjectController extends Controller
{
    public function index(Request $request): View
    {
        $query = MonitaskProject::with(['client', 'owner']);

        // Filter by status
        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }

        // Filter by priority
        if ($request->filled('priority')) {
            $query->where('priority', $request->priority);
        }

        // Filter by client
        if ($request->filled('client')) {
            $query->where('client_id', $request->client);
        }

        // Search by name
        if ($request->filled('search')) {
            $query->where('name', 'like', '%' . $request->search . '%');
        }

        // Only show projects user is involved in
        $user = auth()->user();
        $query->where(function($q) use ($user) {
            $q->where('owner_id', $user->id)
              ->orWhere('client_id', $user->id)
              ->orWhereHas('members', function($memberQuery) use ($user) {
                  $memberQuery->where('user_id', $user->id);
              });
        });

        // Sort options
        $sortBy = $request->get('sort', 'created_at');
        $sortOrder = $request->get('order', 'desc');
        
        $allowedSorts = ['name', 'status', 'priority', 'deadline', 'created_at'];
        if (in_array($sortBy, $allowedSorts)) {
            $query->orderBy($sortBy, $sortOrder);
        }

        $projects = $query->paginate(12);
        
        // Get filter options
        $clients = User::whereHas('clientProjects')->orderBy('name')->get();
        $statuses = ['planning', 'active', 'on_hold', 'completed', 'cancelled'];
        $priorities = ['low', 'medium', 'high'];

        return view('monitask.projects.index', compact('projects', 'clients', 'statuses', 'priorities'));
    }

    public function show(MonitaskProject $monitaskProject): View
    {
        $this->authorize('view', $monitaskProject);
        
        $monitaskProject->load(['client', 'owner', 'tasks.assignedUser', 'timeEntries.user', 'members']);
        
        $recentTasks = $monitaskProject->tasks()
                                     ->with('assignedUser')
                                     ->orderBy('created_at', 'desc')
                                     ->limit(5)
                                     ->get();

        $recentTimeEntries = $monitaskProject->timeEntries()
                                           ->with(['user', 'task'])
                                           ->orderBy('start_time', 'desc')
                                           ->limit(10)
                                           ->get();

        return view('monitask.projects.show', compact('monitaskProject', 'recentTasks', 'recentTimeEntries'));
    }

    public function create(): View
    {
    $clients = User::where('role', 'client')->orderBy('name')->get();
    $owners = User::orderBy('name')->get(); // You can filter by role if needed
    return view('monitask.projects.create', compact('clients', 'owners'));
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'client_id' => 'nullable|exists:users,id',
            'status' => 'required|in:planning,active,on_hold,completed,cancelled',
            'priority' => 'required|in:low,medium,high',
            'start_date' => 'nullable|date',
            'end_date' => 'nullable|date|after_or_equal:start_date',
            'deadline' => 'nullable|date',
            'budget' => 'nullable|numeric|min:0',
            'hourly_rate' => 'nullable|numeric|min:0',
            'currency' => 'required|string|max:3',
            'estimated_hours' => 'nullable|numeric|min:0',
            'color' => 'nullable|string|max:7',
            'is_billable' => 'boolean',
        ]);

        $validated['owner_id'] = auth()->id();

        $project = MonitaskProject::create($validated);

        return redirect()->route('monitask.projects.show', $project)
                        ->with('success', 'Project created successfully!');
    }

    public function edit(MonitaskProject $monitaskProject): View
    {
        $this->authorize('update', $monitaskProject);
        
        $clients = User::where('role', 'client')->orderBy('name')->get();
        return view('monitask.projects.edit', compact('monitaskProject', 'clients'));
    }

    public function update(Request $request, MonitaskProject $monitaskProject): RedirectResponse
    {
        $this->authorize('update', $monitaskProject);

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'client_id' => 'nullable|exists:users,id',
            'status' => 'required|in:planning,active,on_hold,completed,cancelled',
            'priority' => 'required|in:low,medium,high',
            'start_date' => 'nullable|date',
            'end_date' => 'nullable|date|after_or_equal:start_date',
            'deadline' => 'nullable|date',
            'budget' => 'nullable|numeric|min:0',
            'hourly_rate' => 'nullable|numeric|min:0',
            'currency' => 'required|string|max:3',
            'estimated_hours' => 'nullable|numeric|min:0',
            'progress_percentage' => 'required|integer|min:0|max:100',
            'color' => 'nullable|string|max:7',
            'is_billable' => 'boolean',
            'is_active' => 'boolean',
        ]);

        $monitaskProject->update($validated);

        return redirect()->route('monitask.projects.show', $monitaskProject)
                        ->with('success', 'Project updated successfully!');
    }

    public function destroy(MonitaskProject $monitaskProject): RedirectResponse
    {
        $this->authorize('delete', $monitaskProject);

        $monitaskProject->update(['is_active' => false]);

        return redirect()->route('monitask.projects.index')
                        ->with('success', 'Project deactivated successfully!');
    }

    public function dashboard(): View
    {
        $user = auth()->user();
        
        $activeProjects = MonitaskProject::where('owner_id', $user->id)
                                       ->where('status', 'active')
                                       ->with(['client', 'tasks'])
                                       ->get();

        $overdueTasks = $user->assignedTasks()
                            ->where('due_date', '<', now())
                            ->whereNotIn('status', ['completed', 'cancelled'])
                            ->with('project')
                            ->limit(5)
                            ->get();

        $todayTimeEntries = $user->timeEntries()
                                ->whereDate('start_time', today())
                                ->with(['project', 'task'])
                                ->get();

        $weeklyStats = [
            'total_hours' => $user->timeEntries()
                                 ->whereBetween('start_time', [now()->startOfWeek(), now()->endOfWeek()])
                                 ->sum('duration_minutes') / 60,
            'billable_hours' => $user->timeEntries()
                                    ->whereBetween('start_time', [now()->startOfWeek(), now()->endOfWeek()])
                                    ->where('is_billable', true)
                                    ->sum('duration_minutes') / 60,
        ];

        return view('monitask.dashboard', compact('activeProjects', 'overdueTasks', 'todayTimeEntries', 'weeklyStats'));
    }

    public function addMember(Request $request, MonitaskProject $monitaskProject): RedirectResponse
    {
        $this->authorize('update', $monitaskProject);

        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'role' => 'required|string|max:50',
            'hourly_rate' => 'nullable|numeric|min:0',
        ]);

        if ($monitaskProject->members()->where('user_id', $validated['user_id'])->exists()) {
            return back()->with('error', 'User is already a member of this project.');
        }

        $monitaskProject->members()->attach($validated['user_id'], [
            'role' => $validated['role'],
            'hourly_rate' => $validated['hourly_rate'],
            'joined_at' => now()
        ]);

        return back()->with('success', 'Member added successfully!');
    }

    public function removeMember(MonitaskProject $monitaskProject, User $user): RedirectResponse
    {
        $this->authorize('update', $monitaskProject);

        $monitaskProject->members()->detach($user->id);

        return back()->with('success', 'Member removed successfully!');
    }
}
