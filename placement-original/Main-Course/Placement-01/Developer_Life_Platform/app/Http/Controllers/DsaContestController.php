<?php

namespace App\Http\Controllers;

use App\Models\DsaContest;
use App\Models\DsaProblem;
use Illuminate\Http\Request;
use Illuminate\View\View;
use Illuminate\Http\RedirectResponse;

class DsaContestController extends Controller
{
    public function index(Request $request): View
    {
        $query = DsaContest::query();

        // Filter by status
        if ($request->filled('status')) {
            switch ($request->status) {
                case 'upcoming':
                    $query->where('start_time', '>', now());
                    break;
                case 'active':
                    $query->where('start_time', '<=', now())
                          ->where('end_time', '>=', now())
                          ->where('is_active', true);
                    break;
                case 'finished':
                    $query->where('end_time', '<', now());
                    break;
            }
        }

        // Filter by type
        if ($request->filled('type')) {
            $query->where('type', $request->type);
        }

        $contests = $query->orderBy('start_time', 'desc')->paginate(10);

        return view('dsa.contests.index', compact('contests'));
    }

    public function show(DsaContest $dsaContest): View
    {
        $dsaContest->load(['problems', 'participants']);
        
        $userRegistered = false;
        if (auth()->check()) {
            $userRegistered = $dsaContest->participants()
                                        ->where('user_id', auth()->id())
                                        ->exists();
        }

        return view('dsa.contests.show', compact('dsaContest', 'userRegistered'));
    }

    public function create(): View
    {
        $problems = DsaProblem::orderBy('title')->get();
        return view('dsa.contests.create', compact('problems'));
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'start_time' => 'required|date|after:now',
            'duration_minutes' => 'required|integer|min:30|max:1440',
            'type' => 'required|in:public,private,rated,unrated',
            'difficulty' => 'required|in:beginner,intermediate,advanced',
            'max_participants' => 'nullable|integer|min:1',
            'registration_deadline' => 'required|date|before:start_time',
            'rules' => 'array',
            'prizes' => 'array',
            'problems' => 'required|array|min:1',
            'problems.*' => 'exists:dsa_problems,id',
        ]);

        // Calculate end time
        $validated['end_time'] = \Carbon\Carbon::parse($validated['start_time'])
                                               ->addMinutes($validated['duration_minutes']);

        $contest = DsaContest::create($validated);

        // Attach problems with order and points
        foreach ($request->problems as $index => $problemId) {
            $contest->problems()->attach($problemId, [
                'order' => $index + 1,
                'points' => $request->input("problem_points.{$problemId}", 100)
            ]);
        }

        return redirect()->route('dsa.contests.show', $contest)
                        ->with('success', 'Contest created successfully!');
    }

    public function edit(DsaContest $dsaContest): View
    {
        $problems = DsaProblem::orderBy('title')->get();
        $dsaContest->load('problems');
        
        return view('dsa.contests.edit', compact('dsaContest', 'problems'));
    }

    public function update(Request $request, DsaContest $dsaContest): RedirectResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'start_time' => 'required|date',
            'duration_minutes' => 'required|integer|min:30|max:1440',
            'type' => 'required|in:public,private,rated,unrated',
            'difficulty' => 'required|in:beginner,intermediate,advanced',
            'max_participants' => 'nullable|integer|min:1',
            'registration_deadline' => 'required|date|before:start_time',
            'rules' => 'array',
            'prizes' => 'array',
            'is_active' => 'boolean',
        ]);

        // Calculate end time
        $validated['end_time'] = \Carbon\Carbon::parse($validated['start_time'])
                                               ->addMinutes($validated['duration_minutes']);

        $dsaContest->update($validated);

        return redirect()->route('dsa.contests.show', $dsaContest)
                        ->with('success', 'Contest updated successfully!');
    }

    public function destroy(DsaContest $dsaContest): RedirectResponse
    {
        $dsaContest->delete();

        return redirect()->route('dsa.contests.index')
                        ->with('success', 'Contest deleted successfully!');
    }

    public function register(DsaContest $dsaContest): RedirectResponse
    {
        if (!$dsaContest->canRegister()) {
            return back()->with('error', 'Registration is not available for this contest.');
        }

        $user = auth()->user();
        
        if ($dsaContest->participants()->where('user_id', $user->id)->exists()) {
            return back()->with('info', 'You are already registered for this contest.');
        }

        $dsaContest->participants()->attach($user->id, [
            'registration_time' => now()
        ]);

        return back()->with('success', 'Successfully registered for the contest!');
    }

    public function unregister(DsaContest $dsaContest): RedirectResponse
    {
        $user = auth()->user();
        
        if (!$dsaContest->participants()->where('user_id', $user->id)->exists()) {
            return back()->with('error', 'You are not registered for this contest.');
        }

        if ($dsaContest->isActive() || $dsaContest->isFinished()) {
            return back()->with('error', 'Cannot unregister from an active or finished contest.');
        }

        $dsaContest->participants()->detach($user->id);

        return back()->with('success', 'Successfully unregistered from the contest.');
    }

    public function leaderboard(DsaContest $dsaContest): View
    {
        $participants = $dsaContest->participants()
                                  ->withPivot('score', 'rank')
                                  ->orderBy('pivot_rank')
                                  ->paginate(50);

        return view('dsa.contests.leaderboard', compact('dsaContest', 'participants'));
    }

    public function problems(DsaContest $dsaContest): View
    {
        if (!$dsaContest->isActive() && !auth()->user()->isAdmin()) {
            return redirect()->route('dsa.contests.show', $dsaContest)
                           ->with('error', 'Contest problems are only available during the contest.');
        }

        $problems = $dsaContest->problems()->orderBy('pivot_order')->get();

        return view('dsa.contests.problems', compact('dsaContest', 'problems'));
    }
}
