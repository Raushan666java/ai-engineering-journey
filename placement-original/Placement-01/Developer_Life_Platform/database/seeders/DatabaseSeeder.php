<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\UserProfile;
use App\Models\Subject;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // Create sample subjects
        $subjects = [
            [
                'name' => 'Programming & Web Development',
                'slug' => 'programming-web-development',
                'description' => 'Master programming languages, web development frameworks, and build real-world applications.',
                'icon' => 'fas fa-laptop-code',
                'color' => '#6366f1',
                'category' => 'programming',
                'difficulty_level' => 'beginner',
                'estimated_hours' => 120,
                'learning_outcomes' => json_encode([
                    'Build full-stack web applications',
                    'Master JavaScript and modern frameworks',
                    'Understand backend development with APIs'
                ]),
                'prerequisites' => json_encode(['Basic computer knowledge']),
                'tags' => json_encode(['JavaScript', 'React', 'Node.js', 'HTML', 'CSS']),
                'is_featured' => true,
                'is_active' => true,
                'course_count' => 15,
                'enrollment_count' => 2450,
                'rating' => 4.8,
                'rating_count' => 324
            ],
            [
                'name' => 'Data Structures & Algorithms',
                'slug' => 'data-structures-algorithms',
                'description' => 'Master fundamental computer science concepts essential for technical interviews and efficient programming.',
                'icon' => 'fas fa-project-diagram',
                'color' => '#10b981',
                'category' => 'programming',
                'difficulty_level' => 'intermediate',
                'estimated_hours' => 80,
                'learning_outcomes' => json_encode([
                    'Implement efficient algorithms',
                    'Solve complex coding problems',
                    'Ace technical interviews'
                ]),
                'prerequisites' => json_encode(['Basic programming in any language']),
                'tags' => json_encode(['Algorithms', 'Data Structures', 'Problem Solving', 'Interview Prep']),
                'is_featured' => true,
                'is_active' => true,
                'course_count' => 8,
                'enrollment_count' => 1890,
                'rating' => 4.9,
                'rating_count' => 267
            ],
            [
                'name' => 'System Design',
                'slug' => 'system-design',
                'description' => 'Learn to design scalable, distributed systems and architecture patterns used by tech giants.',
                'icon' => 'fas fa-server',
                'color' => '#f59e0b',
                'category' => 'engineering',
                'difficulty_level' => 'advanced',
                'estimated_hours' => 60,
                'learning_outcomes' => json_encode([
                    'Design scalable architectures',
                    'Understand distributed systems',
                    'Handle high-scale challenges'
                ]),
                'prerequisites' => json_encode(['Backend development experience', 'Database knowledge']),
                'tags' => json_encode(['System Design', 'Architecture', 'Scalability', 'Microservices']),
                'is_featured' => true,
                'is_active' => true,
                'course_count' => 6,
                'enrollment_count' => 1234,
                'rating' => 4.7,
                'rating_count' => 156
            ],
            [
                'name' => 'Machine Learning & AI',
                'slug' => 'machine-learning-ai',
                'description' => 'Dive into artificial intelligence, machine learning algorithms, and build intelligent systems.',
                'icon' => 'fas fa-brain',
                'color' => '#8b5cf6',
                'category' => 'science',
                'difficulty_level' => 'advanced',
                'estimated_hours' => 100,
                'learning_outcomes' => json_encode([
                    'Build ML models from scratch',
                    'Understand neural networks',
                    'Deploy AI applications'
                ]),
                'prerequisites' => json_encode(['Python programming', 'Statistics basics', 'Linear algebra']),
                'tags' => json_encode(['Machine Learning', 'AI', 'Python', 'TensorFlow', 'Data Science']),
                'is_featured' => true,
                'is_active' => true,
                'course_count' => 12,
                'enrollment_count' => 1567,
                'rating' => 4.6,
                'rating_count' => 198
            ],
            [
                'name' => 'Mobile Development',
                'slug' => 'mobile-development',
                'description' => 'Create native and cross-platform mobile applications for iOS and Android.',
                'icon' => 'fas fa-mobile-alt',
                'color' => '#ef4444',
                'category' => 'programming',
                'difficulty_level' => 'intermediate',
                'estimated_hours' => 90,
                'learning_outcomes' => json_encode([
                    'Build native mobile apps',
                    'Cross-platform development',
                    'App store deployment'
                ]),
                'prerequisites' => json_encode(['Programming fundamentals', 'Object-oriented concepts']),
                'tags' => json_encode(['React Native', 'Flutter', 'iOS', 'Android', 'Mobile']),
                'is_featured' => false,
                'is_active' => true,
                'course_count' => 10,
                'enrollment_count' => 987,
                'rating' => 4.5,
                'rating_count' => 134
            ],
            [
                'name' => 'DevOps & Cloud Computing',
                'slug' => 'devops-cloud-computing',
                'description' => 'Master modern deployment practices, cloud platforms, and infrastructure automation.',
                'icon' => 'fas fa-cloud',
                'color' => '#06b6d4',
                'category' => 'engineering',
                'difficulty_level' => 'intermediate',
                'estimated_hours' => 75,
                'learning_outcomes' => json_encode([
                    'Deploy applications to cloud',
                    'Automate infrastructure',
                    'Implement CI/CD pipelines'
                ]),
                'prerequisites' => json_encode(['Basic programming', 'Command line familiarity']),
                'tags' => json_encode(['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'DevOps']),
                'is_featured' => false,
                'is_active' => true,
                'course_count' => 9,
                'enrollment_count' => 756,
                'rating' => 4.4,
                'rating_count' => 89
            ]
        ];

        foreach ($subjects as $subjectData) {
            Subject::create($subjectData);
        }

        // Create a demo user
        $user = User::create([
            'name' => 'Demo Developer',
            'email' => 'demo@developer.com',
            'email_verified_at' => now(),
            'password' => bcrypt('password123'),
        ]);

        // Create user profile
        UserProfile::create([
            'user_id' => $user->id,
            'bio' => 'Passionate full-stack developer learning new technologies and building amazing projects.',
            'github_username' => 'demo-developer',
            'linkedin_url' => 'https://linkedin.com/in/demo-developer',
            'location' => 'San Francisco, CA',
            'timezone' => 'America/Los_Angeles',
            'experience_level' => 'intermediate',
            'primary_role' => 'Full Stack Developer',
            'career_goals' => 'Become a senior software engineer at a top tech company',
            'learning_preferences' => json_encode([
                'preferred_pace' => 'moderate',
                'learning_style' => 'hands-on',
                'notification_frequency' => 'daily'
            ]),
            'skills' => json_encode([
                'JavaScript' => 85,
                'React' => 80,
                'Node.js' => 75,
                'Python' => 70,
                'SQL' => 65
            ]),
            'coding_streak' => 7,
            'last_activity_date' => now(),
            'total_points' => 1250
        ]);

        $this->command->info('Database seeded successfully! Demo user created:');
        $this->command->info('Email: demo@developer.com');
        $this->command->info('Password: password123');
    }
}
