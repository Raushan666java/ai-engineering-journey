<?php

namespace App\Http\Controllers;

use App\Models\MonitaskAgent;
use App\Models\MonitaskKeystroke;
use App\Models\MonitaskLocation;
use App\Models\MonitaskActivityLog;
use App\Models\MonitaskScreenshot;
use App\Models\MonitaskTimeEntry;
use App\Models\MonitaskProject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;
use Carbon\Carbon;

class MonitaskAgentController extends Controller
{
    /**
     * Agent Registration & Heartbeat
     */
    public function registerAgent(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'device_name' => 'required|string|max:255',
            'device_type' => 'required|in:desktop,mobile,tablet',
            'os_version' => 'required|string|max:100',
            'agent_version' => 'required|string|max:50',
            'mac_address' => 'nullable|string|max:17'
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $user = Auth::user();
        
        $agent = MonitaskAgent::updateOrCreate(
            [
                'user_id' => $user->id,
                'device_name' => $request->device_name,
                'device_type' => $request->device_type
            ],
            [
                'os_version' => $request->os_version,
                'agent_version' => $request->agent_version,
                'ip_address' => $request->ip(),
                'mac_address' => $request->mac_address,
                'last_seen' => now(),
                'is_online' => true,
                'settings' => $request->get('settings', [])
            ]
        );

        return response()->json([
            'success' => true,
            'agent_id' => $agent->id,
            'settings' => $agent->settings,
            'message' => 'Agent registered successfully'
        ]);
    }

    public function heartbeat(Request $request)
    {
        $agent = MonitaskAgent::where('user_id', Auth::id())
            ->where('id', $request->agent_id)
            ->first();

        if (!$agent) {
            return response()->json(['error' => 'Agent not found'], 404);
        }

        $agent->updateHeartbeat();

        return response()->json([
            'success' => true,
            'monitoring_enabled' => $agent->monitoring_enabled,
            'settings' => $agent->settings,
            'timestamp' => now()->toISOString()
        ]);
    }

    public function updateSettings(Request $request)
    {
        $agent = MonitaskAgent::where('user_id', Auth::id())
            ->where('id', $request->agent_id)
            ->first();

        if (!$agent) {
            return response()->json(['error' => 'Agent not found'], 404);
        }

        $agent->update([
            'stealth_mode' => $request->boolean('stealth_mode'),
            'screenshot_frequency' => $request->get('screenshot_frequency', 300),
            'activity_threshold' => $request->get('activity_threshold', 60),
            'settings' => array_merge($agent->settings ?? [], $request->get('settings', []))
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Settings updated successfully'
        ]);
    }

    /**
     * Activity Data Collection
     */
    public function submitKeystrokeData(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'agent_id' => 'required|exists:monitask_agents,id',
            'project_id' => 'nullable|exists:monitask_projects,id',
            'time_entry_id' => 'nullable|exists:monitask_time_entries,id',
            'application_name' => 'required|string|max:255',
            'window_title' => 'nullable|string|max:500',
            'keystroke_count' => 'required|integer|min:0',
            'mouse_clicks' => 'required|integer|min:0',
            'mouse_movements' => 'required|integer|min:0',
            'scroll_events' => 'required|integer|min:0',
            'idle_time_seconds' => 'required|integer|min:0',
            'active_time_seconds' => 'required|integer|min:0'
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $keystrokeData = MonitaskKeystroke::create([
            'user_id' => Auth::id(),
            'project_id' => $request->project_id,
            'time_entry_id' => $request->time_entry_id,
            'application_name' => $request->application_name,
            'window_title' => $request->window_title,
            'keystroke_count' => $request->keystroke_count,
            'mouse_clicks' => $request->mouse_clicks,
            'mouse_movements' => $request->mouse_movements,
            'scroll_events' => $request->scroll_events,
            'idle_time_seconds' => $request->idle_time_seconds,
            'active_time_seconds' => $request->active_time_seconds,
            'recorded_at' => now()
        ]);

        // Detect mouse jiggler
        $isMouseJiggler = $keystrokeData->detectMouseJiggler();
        
        if ($isMouseJiggler) {
            // Log suspicious activity
            Log::warning('Mouse jiggler detected', [
                'user_id' => Auth::id(),
                'keystroke_data_id' => $keystrokeData->id,
                'mouse_movements' => $request->mouse_movements,
                'active_time' => $request->active_time_seconds
            ]);
        }

        return response()->json([
            'success' => true,
            'productivity_score' => $keystrokeData->productivity_score,
            'mouse_jiggler_detected' => $isMouseJiggler,
            'message' => 'Keystroke data submitted successfully'
        ]);
    }

    public function submitScreenshot(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'agent_id' => 'required|exists:monitask_agents,id',
            'project_id' => 'nullable|exists:monitask_projects,id',
            'time_entry_id' => 'nullable|exists:monitask_time_entries,id',
            'screenshot' => 'required|image|max:5120', // 5MB max
            'blur_level' => 'integer|min:0|max:10',
            'activity_score' => 'integer|min:0|max:100'
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $user = Auth::user();
        $screenshot = $request->file('screenshot');
        
        // Generate unique filename
        $filename = 'screenshots/' . $user->id . '/' . date('Y/m/d') . '/' . uniqid() . '.' . $screenshot->getClientOriginalExtension();
        
        // Store screenshot
        $path = Storage::disk('public')->put($filename, file_get_contents($screenshot));
        
        // Generate thumbnail
        $thumbnailPath = $this->generateThumbnail($path);

        $screenshotRecord = MonitaskScreenshot::create([
            'user_id' => $user->id,
            'project_id' => $request->project_id,
            'time_entry_id' => $request->time_entry_id,
            'file_path' => $path,
            'thumbnail_path' => $thumbnailPath,
            'captured_at' => now(),
            'blur_level' => $request->get('blur_level', 0),
            'activity_score' => $request->get('activity_score', 0)
        ]);

        return response()->json([
            'success' => true,
            'screenshot_id' => $screenshotRecord->id,
            'message' => 'Screenshot uploaded successfully'
        ]);
    }

    public function submitLocationData(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'agent_id' => 'required|exists:monitask_agents,id',
            'project_id' => 'nullable|exists:monitask_projects,id',
            'time_entry_id' => 'nullable|exists:monitask_time_entries,id',
            'latitude' => 'required|numeric|between:-90,90',
            'longitude' => 'required|numeric|between:-180,180',
            'accuracy' => 'nullable|numeric|min:0',
            'altitude' => 'nullable|numeric',
            'speed' => 'nullable|numeric|min:0',
            'address' => 'nullable|string|max:500'
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $location = MonitaskLocation::create([
            'user_id' => Auth::id(),
            'project_id' => $request->project_id,
            'time_entry_id' => $request->time_entry_id,
            'latitude' => $request->latitude,
            'longitude' => $request->longitude,
            'accuracy' => $request->accuracy,
            'altitude' => $request->altitude,
            'speed' => $request->speed,
            'address' => $request->address,
            'recorded_at' => now(),
            'device_type' => $request->get('device_type', 'mobile')
        ]);

        return response()->json([
            'success' => true,
            'location_id' => $location->id,
            'message' => 'Location data submitted successfully'
        ]);
    }

    public function submitActivityLog(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'agent_id' => 'required|exists:monitask_agents,id',
            'project_id' => 'nullable|exists:monitask_projects,id',
            'time_entry_id' => 'nullable|exists:monitask_time_entries,id',
            'application_name' => 'nullable|string|max:255',
            'window_title' => 'nullable|string|max:500',
            'url' => 'nullable|url|max:1000',
            'category' => 'required|in:productive,neutral,unproductive,unknown',
            'duration_seconds' => 'required|integer|min:1',
            'keystroke_count' => 'integer|min:0',
            'mouse_click_count' => 'integer|min:0',
            'scroll_count' => 'integer|min:0'
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $activityLog = MonitaskActivityLog::create([
            'user_id' => Auth::id(),
            'project_id' => $request->project_id,
            'time_entry_id' => $request->time_entry_id,
            'application_name' => $request->application_name,
            'window_title' => $request->window_title,
            'url' => $request->url,
            'category' => $request->category,
            'productivity_level' => $this->determineProductivityLevel($request->category, $request->application_name, $request->url),
            'duration_seconds' => $request->duration_seconds,
            'keystroke_count' => $request->get('keystroke_count', 0),
            'mouse_click_count' => $request->get('mouse_click_count', 0),
            'scroll_count' => $request->get('scroll_count', 0),
            'recorded_at' => now()
        ]);

        return response()->json([
            'success' => true,
            'activity_id' => $activityLog->id,
            'productivity_level' => $activityLog->productivity_level,
            'message' => 'Activity log submitted successfully'
        ]);
    }

    /**
     * Agent Management
     */
    public function getAgentConfig(Request $request)
    {
        $agent = MonitaskAgent::where('user_id', Auth::id())
            ->where('id', $request->agent_id)
            ->first();

        if (!$agent) {
            return response()->json(['error' => 'Agent not found'], 404);
        }

        // Get user's active projects
        $projects = MonitaskProject::where(function($q) {
                $q->where('owner_id', Auth::id())
                  ->orWhere('client_id', Auth::id())
                  ->orWhereHas('members', fn($q2) => $q2->where('user_id', Auth::id()));
            })
            ->where('status', 'active')
            ->select('id', 'name', 'screenshot_frequency', 'activity_monitoring')
            ->get();

        return response()->json([
            'success' => true,
            'config' => [
                'stealth_mode' => $agent->stealth_mode,
                'screenshot_frequency' => $agent->screenshot_frequency,
                'activity_threshold' => $agent->activity_threshold,
                'monitoring_enabled' => $agent->monitoring_enabled,
                'projects' => $projects,
                'productivity_categories' => $this->getProductivityCategories()
            ]
        ]);
    }

    public function startMonitoring(Request $request)
    {
        $agent = MonitaskAgent::where('user_id', Auth::id())
            ->where('id', $request->agent_id)
            ->first();

        if (!$agent) {
            return response()->json(['error' => 'Agent not found'], 404);
        }

        $agent->update(['monitoring_enabled' => true]);

        return response()->json([
            'success' => true,
            'message' => 'Monitoring started successfully'
        ]);
    }

    public function stopMonitoring(Request $request)
    {
        $agent = MonitaskAgent::where('user_id', Auth::id())
            ->where('id', $request->agent_id)
            ->first();

        if (!$agent) {
            return response()->json(['error' => 'Agent not found'], 404);
        }

        $agent->update(['monitoring_enabled' => false]);

        return response()->json([
            'success' => true,
            'message' => 'Monitoring stopped successfully'
        ]);
    }

    public function getAgentStatus()
    {
        $agents = MonitaskAgent::where('user_id', Auth::id())
            ->orderBy('last_seen', 'desc')
            ->get();

        return response()->json([
            'success' => true,
            'agents' => $agents->map(function($agent) {
                return [
                    'id' => $agent->id,
                    'device_name' => $agent->device_name,
                    'device_type' => $agent->device_type,
                    'status' => $agent->status,
                    'last_seen' => $agent->last_seen_formatted,
                    'monitoring_enabled' => $agent->monitoring_enabled,
                    'stealth_mode' => $agent->stealth_mode
                ];
            })
        ]);
    }

    /**
     * Utility Methods
     */
    private function generateThumbnail($imagePath): string
    {
        // This would generate a thumbnail version of the screenshot
        // For now, return the same path - in production use image manipulation library
        return $imagePath;
    }

    private function determineProductivityLevel($category, $applicationName, $url): string
    {
        // Productivity determination logic
        $productiveApps = ['vscode', 'visual studio', 'phpstorm', 'sublime', 'notepad++', 'excel', 'word', 'powerpoint'];
        $neutralApps = ['explorer', 'finder', 'chrome', 'firefox', 'edge', 'safari'];
        $unproductiveApps = ['game', 'steam', 'discord', 'facebook', 'youtube', 'twitter', 'instagram'];

        $appLower = strtolower($applicationName ?? '');
        $urlLower = strtolower($url ?? '');

        // Check productive applications
        foreach ($productiveApps as $app) {
            if (str_contains($appLower, $app)) {
                return 'productive';
            }
        }

        // Check unproductive applications/websites
        foreach ($unproductiveApps as $app) {
            if (str_contains($appLower, $app) || str_contains($urlLower, $app)) {
                return 'unproductive';
            }
        }

        // Check neutral applications
        foreach ($neutralApps as $app) {
            if (str_contains($appLower, $app)) {
                return 'neutral';
            }
        }

        return $category;
    }

    private function getProductivityCategories(): array
    {
        return [
            'productive' => [
                'applications' => ['Visual Studio Code', 'PHPStorm', 'Sublime Text', 'Notepad++', 'Excel', 'Word', 'PowerPoint'],
                'websites' => ['github.com', 'stackoverflow.com', 'docs.microsoft.com', 'developer.mozilla.org']
            ],
            'neutral' => [
                'applications' => ['Chrome', 'Firefox', 'Edge', 'Safari', 'Windows Explorer', 'Finder'],
                'websites' => ['google.com', 'wikipedia.org', 'linkedin.com']
            ],
            'unproductive' => [
                'applications' => ['Steam', 'Discord', 'Spotify', 'Games'],
                'websites' => ['facebook.com', 'twitter.com', 'youtube.com', 'instagram.com', 'tiktok.com']
            ]
        ];
    }
}
