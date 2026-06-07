<?php

namespace App\Http\Controllers;

use App\Models\DsaProblem;
use App\Models\DsaSubmission;
use Illuminate\Http\Request;
use Illuminate\View\View;
use Illuminate\Http\RedirectResponse;

class DsaProblemController extends Controller
{
    public function index(Request $request): View
    {
        $query = DsaProblem::query();

        // Filter by difficulty
        if ($request->filled('difficulty')) {
            $query->where('difficulty', $request->difficulty);
        }

        // Filter by company
        if ($request->filled('company')) {
            $query->whereJsonContains('companies', $request->company);
        }

        // Filter by topic/tag
        if ($request->filled('topic')) {
            $query->whereJsonContains('tags', $request->topic);
        }

        // Search by title
        if ($request->filled('search')) {
            $query->where('title', 'like', '%' . $request->search . '%');
        }

        // Sort options
        $sortBy = $request->get('sort', 'created_at');
        $sortOrder = $request->get('order', 'desc');
        
        $allowedSorts = ['title', 'difficulty', 'acceptance_rate', 'created_at'];
        if (in_array($sortBy, $allowedSorts)) {
            $query->orderBy($sortBy, $sortOrder);
        }

        $problems = $query->paginate(20);
        
        // Get filter options
        $difficulties = ['Easy', 'Medium', 'Hard'];
        $allTags = DsaProblem::pluck('tags')->flatten()->unique()->values();
        $allCompanies = DsaProblem::pluck('companies')->flatten()->unique()->values();

        return view('dsa.problems.index', compact('problems', 'difficulties', 'allTags', 'allCompanies'));
    }

    public function show(DsaProblem $dsaProblem): View
    {
        $userSubmissions = [];
        if (auth()->check()) {
            $userSubmissions = DsaSubmission::where('user_id', auth()->id())
                                          ->where('problem_id', $dsaProblem->id)
                                          ->orderBy('created_at', 'desc')
                                          ->limit(10)
                                          ->get();
        }

        return view('dsa.problems.show', compact('dsaProblem', 'userSubmissions'));
    }

    public function create(): View
    {
        return view('dsa.problems.create');
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'difficulty' => 'required|in:Easy,Medium,Hard',
            'tags' => 'array',
            'companies' => 'array',
            'acceptance_rate' => 'numeric|min:0|max:100',
            'time_limit' => 'integer|min:1',
            'memory_limit' => 'integer|min:1',
            'test_cases' => 'required|array',
            'solution_template' => 'string',
        ]);

        $problem = DsaProblem::create($validated);

        return redirect()->route('dsa.problems.show', $problem)
                        ->with('success', 'Problem created successfully!');
    }

    public function edit(DsaProblem $dsaProblem): View
    {
        return view('dsa.problems.edit', compact('dsaProblem'));
    }

    public function update(Request $request, DsaProblem $dsaProblem): RedirectResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'difficulty' => 'required|in:Easy,Medium,Hard',
            'tags' => 'array',
            'companies' => 'array',
            'acceptance_rate' => 'numeric|min:0|max:100',
            'time_limit' => 'integer|min:1',
            'memory_limit' => 'integer|min:1',
            'test_cases' => 'required|array',
            'solution_template' => 'string',
        ]);

        $dsaProblem->update($validated);

        return redirect()->route('dsa.problems.show', $dsaProblem)
                        ->with('success', 'Problem updated successfully!');
    }

    public function destroy(DsaProblem $dsaProblem): RedirectResponse
    {
        $dsaProblem->delete();

        return redirect()->route('dsa.problems.index')
                        ->with('success', 'Problem deleted successfully!');
    }

    public function submit(Request $request, DsaProblem $dsaProblem): RedirectResponse
    {
        $validated = $request->validate([
            'code' => 'required|string',
            'language' => 'required|string|in:python,java,cpp,javascript,c',
        ]);

        $submission = DsaSubmission::create([
            'user_id' => auth()->id(),
            'problem_id' => $dsaProblem->id,
            'code' => $validated['code'],
            'language' => $validated['language'],
            'status' => 'pending',
        ]);

        // Here you would typically queue a job to execute the code
        // For now, we'll just mark it as accepted
        $submission->update(['status' => 'accepted']);

        return redirect()->route('dsa.problems.show', $dsaProblem)
                        ->with('success', 'Solution submitted successfully!');
    }

    public function leaderboard(DsaProblem $dsaProblem): View
    {
        $submissions = DsaSubmission::where('problem_id', $dsaProblem->id)
                                  ->where('status', 'accepted')
                                  ->with('user')
                                  ->orderBy('execution_time')
                                  ->limit(50)
                                  ->get();

        return view('dsa.problems.leaderboard', compact('dsaProblem', 'submissions'));
    }
}
