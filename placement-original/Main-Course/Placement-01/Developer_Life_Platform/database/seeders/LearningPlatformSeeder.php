<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;
use App\Models\User;
use App\Models\LearningCategory;
use App\Models\LearningCourse;

class LearningPlatformSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create instructor users first
        $instructors = [
            [
                'name' => 'Dr. Sarah Wilson',
                'email' => 'sarah.wilson@devlife.com',
                'password' => Hash::make('password123'),
                'email_verified_at' => now(),
            ],
            [
                'name' => 'Prof. Michael Chen',
                'email' => 'michael.chen@devlife.com',
                'password' => Hash::make('password123'),
                'email_verified_at' => now(),
            ],
            [
                'name' => 'Dr. Priya Sharma',
                'email' => 'priya.sharma@devlife.com',
                'password' => Hash::make('password123'),
                'email_verified_at' => now(),
            ],
        ];

        foreach ($instructors as $instructor) {
            User::create($instructor);
        }

        // Create learning categories
        $categories = [
            ['name' => 'Data Structures & Algorithms', 'description' => 'Learn core DSA concepts for coding interviews'],
            ['name' => 'Web Development', 'description' => 'Full-stack web development with modern frameworks'],
            ['name' => 'Machine Learning', 'description' => 'AI and ML fundamentals with practical applications'],
            ['name' => 'System Design', 'description' => 'Design scalable distributed systems'],
            ['name' => 'Database Management', 'description' => 'SQL, NoSQL, and database optimization techniques'],
            ['name' => 'Software Engineering', 'description' => 'Best practices, design patterns, and methodologies'],
        ];

        foreach ($categories as $category) {
            LearningCategory::create($category);
        }

        // Learning Courses
        $dsaCategoryId = DB::table('learning_categories')->where('name', 'Data Structures & Algorithms')->value('id');
        $webCategoryId = DB::table('learning_categories')->where('name', 'Web Development')->value('id');
        $aiCategoryId = DB::table('learning_categories')->where('name', 'AI & Machine Learning')->value('id');

        $courses = [
            [
                'title' => 'Complete Data Structures and Algorithms',
                'slug' => 'complete-dsa',
                'description' => 'Comprehensive course covering arrays, linked lists, trees, graphs, sorting, searching, and dynamic programming.',
                'short_description' => 'Master all important data structures and algorithms with hands-on practice',
                'instructor_id' => 1, // Assuming user ID 1 exists
                'category_id' => $dsaCategoryId,
                'level' => 'intermediate',
                'status' => 'published',
                'price' => 0.00,
                'is_free' => true,
                'duration_hours' => 80,
                'tags' => json_encode(['algorithms', 'data-structures', 'coding-interview', 'problem-solving']),
                'published_at' => now()
            ],
            [
                'title' => 'Full Stack Web Development with React',
                'slug' => 'fullstack-react',
                'description' => 'Learn to build complete web applications from frontend to backend.',
                'short_description' => 'Build modern web applications with React, Node.js, and MongoDB',
                'instructor_id' => 1,
                'category_id' => $webCategoryId,
                'level' => 'beginner',
                'status' => 'published',
                'price' => 0.00,
                'is_free' => true,
                'duration_hours' => 60,
                'tags' => json_encode(['react', 'nodejs', 'mongodb', 'javascript', 'fullstack']),
                'published_at' => now()
            ],
            [
                'title' => 'Machine Learning Fundamentals',
                'slug' => 'ml-fundamentals',
                'description' => 'Covers supervised and unsupervised learning, neural networks, and practical ML projects.',
                'short_description' => 'Introduction to machine learning concepts and practical implementation',
                'instructor_id' => 1,
                'category_id' => $aiCategoryId,
                'level' => 'intermediate',
                'status' => 'published',
                'price' => 0.00,
                'is_free' => true,
                'duration_hours' => 50,
                'tags' => json_encode(['machine-learning', 'python', 'tensorflow', 'data-science']),
                'published_at' => now()
            ]
        ];

        foreach ($courses as $course) {
            DB::table('learning_courses')->insert(array_merge($course, [
                'created_at' => now(),
                'updated_at' => now()
            ]));
        }

        // Coding Problems
        $problems = [
            [
                'title' => 'Two Sum',
                'description' => 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
                'input_format' => 'Array of integers and target integer',
                'output_format' => 'Array of two indices',
                'constraints' => '2 <= nums.length <= 10^4, -10^9 <= nums[i] <= 10^9',
                'difficulty' => 'easy',
                'difficulty_order' => 1,
                'category' => 'Arrays',
                'tags' => json_encode(['array', 'hash-table', 'two-pointers']),
                'acceptance_rate' => 89.5
            ],
            [
                'title' => 'Longest Substring Without Repeating Characters',
                'description' => 'Given a string s, find the length of the longest substring without repeating characters.',
                'input_format' => 'String s',
                'output_format' => 'Integer length',
                'constraints' => '0 <= s.length <= 5 * 10^4',
                'difficulty' => 'medium',
                'difficulty_order' => 2,
                'category' => 'Strings',
                'tags' => json_encode(['string', 'sliding-window', 'hash-table']),
                'acceptance_rate' => 73.2
            ],
            [
                'title' => 'Median of Two Sorted Arrays',
                'description' => 'Given two sorted arrays nums1 and nums2, return the median of the two sorted arrays.',
                'input_format' => 'Two sorted arrays',
                'output_format' => 'Double median value',
                'constraints' => 'nums1.length + nums2.length >= 1',
                'difficulty' => 'hard',
                'difficulty_order' => 3,
                'category' => 'Arrays',
                'tags' => json_encode(['array', 'binary-search', 'divide-and-conquer']),
                'acceptance_rate' => 45.8
            ]
        ];

        foreach ($problems as $problem) {
            DB::table('coding_problems')->insert(array_merge($problem, [
                'created_at' => now(),
                'updated_at' => now()
            ]));
        }

        // Problem Examples
        $twoSumProblemId = DB::table('coding_problems')->where('title', 'Two Sum')->value('id');
        
        DB::table('problem_examples')->insert([
            [
                'problem_id' => $twoSumProblemId,
                'example_number' => 1,
                'input' => 'nums = [2,7,11,15], target = 9',
                'output' => '[0,1]',
                'explanation' => 'Because nums[0] + nums[1] = 2 + 7 = 9, we return [0, 1].',
                'created_at' => now(),
                'updated_at' => now()
            ]
        ]);

        // Interview Topics
        $topics = [
            [
                'title' => 'Object-Oriented Programming',
                'description' => 'Understand OOP principles, inheritance, polymorphism, and encapsulation',
                'category' => 'Programming Fundamentals',
                'importance' => 'high',
                'resources' => json_encode(['books' => ['Clean Code'], 'videos' => ['OOP Fundamentals']])
            ],
            [
                'title' => 'System Design Basics',
                'description' => 'Learn how to design scalable systems and handle large-scale architecture',
                'category' => 'System Design',
                'importance' => 'critical',
                'resources' => json_encode(['books' => ['Designing Data-Intensive Applications'], 'courses' => ['System Design Interview']])
            ],
            [
                'title' => 'Database Design',
                'description' => 'Understand database normalization, indexing, and query optimization',
                'category' => 'Database',
                'importance' => 'high',
                'resources' => json_encode(['tutorials' => ['SQL fundamentals'], 'practice' => ['Database design exercises']])
            ]
        ];

        foreach ($topics as $topic) {
            DB::table('interview_topics')->insert(array_merge($topic, [
                'created_at' => now(),
                'updated_at' => now()
            ]));
        }

        // Companies
        $companies = [
            [
                'name' => 'Google',
                'slug' => 'google',
                'description' => 'Technology company specializing in Internet-related services and products',
                'website' => 'https://google.com',
                'locations' => json_encode(['Mountain View', 'New York', 'London', 'Bangalore']),
                'is_hiring' => true
            ],
            [
                'name' => 'Microsoft',
                'slug' => 'microsoft',
                'description' => 'Multinational technology corporation that develops software, services, and hardware',
                'website' => 'https://microsoft.com',
                'locations' => json_encode(['Redmond', 'San Francisco', 'Hyderabad', 'Dublin']),
                'is_hiring' => true
            ],
            [
                'name' => 'Amazon',
                'slug' => 'amazon',
                'description' => 'E-commerce and cloud computing company',
                'website' => 'https://amazon.com',
                'locations' => json_encode(['Seattle', 'Austin', 'Bangalore', 'London']),
                'is_hiring' => true
            ]
        ];

        foreach ($companies as $company) {
            DB::table('companies')->insert(array_merge($company, [
                'created_at' => now(),
                'updated_at' => now()
            ]));
        }

        // Company Questions
        $googleId = DB::table('companies')->where('slug', 'google')->value('id');
        $microsoftId = DB::table('companies')->where('slug', 'microsoft')->value('id');

        $companyQuestions = [
            [
                'company_id' => $googleId,
                'question' => 'Why do you want to work at Google?',
                'type' => 'behavioral',
                'category' => 'Company Culture',
                'frequency' => 10
            ],
            [
                'company_id' => $googleId,
                'question' => 'Design a web crawler',
                'type' => 'technical',
                'category' => 'System Design',
                'frequency' => 8
            ],
            [
                'company_id' => $microsoftId,
                'question' => 'Tell me about a time you had to work with a difficult team member',
                'type' => 'behavioral',
                'category' => 'Teamwork',
                'frequency' => 9
            ]
        ];

        foreach ($companyQuestions as $question) {
            DB::table('company_questions')->insert(array_merge($question, [
                'created_at' => now(),
                'updated_at' => now()
            ]));
        }

        // Company Interview Process
        $interviewProcesses = [
            [
                'company_id' => $googleId,
                'round_number' => 1,
                'round_name' => 'Phone Screen',
                'description' => 'Initial technical phone interview',
                'duration_minutes' => 45,
                'format' => 'phone'
            ],
            [
                'company_id' => $googleId,
                'round_number' => 2,
                'round_name' => 'Technical Interview 1',
                'description' => 'Data structures and algorithms',
                'duration_minutes' => 60,
                'format' => 'onsite'
            ],
            [
                'company_id' => $googleId,
                'round_number' => 3,
                'round_name' => 'Technical Interview 2',
                'description' => 'System design discussion',
                'duration_minutes' => 60,
                'format' => 'onsite'
            ]
        ];

        foreach ($interviewProcesses as $process) {
            DB::table('company_interview_process')->insert(array_merge($process, [
                'created_at' => now(),
                'updated_at' => now()
            ]));
        }

        echo "✅ Learning Platform data seeded successfully!\n";
        echo "📚 Categories: " . count($categories) . "\n";
        echo "🎓 Courses: " . count($courses) . "\n";
        echo "💻 Problems: " . count($problems) . "\n";
        echo "📝 Topics: " . count($topics) . "\n";
        echo "🏢 Companies: " . count($companies) . "\n";
    }
}
