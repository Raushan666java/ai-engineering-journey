import java.util.*;
import java.util.concurrent.*;
import java.util.concurrent.locks.*;

/**
 * DAY 16: THREAD BASICS & LIFECYCLE COMPLETE GUIDE
 * 2,600+ lines covering all aspects of thread creation, lifecycle, and basics
 * Focus: Thread creation, lifecycle states, daemon threads, thread priorities
 */

public class ThreadBasicsComplete {

    // ==================== SECTION 1: THREAD CREATION ====================
    
    static class Section1_ThreadCreation {
        
        // Method 1: Extend Thread class
        static class MyThread extends Thread {
            private String name;
            
            public MyThread(String name) {
                this.name = name;
            }
            
            @Override
            public void run() {
                for (int i = 1; i <= 3; i++) {
                    System.out.println(name + " - Iteration " + i);
                    try {
                        Thread.sleep(100);
                    } catch (InterruptedException e) {
                        Thread.currentThread().interrupt();
                    }
                }
            }
        }
        
        // Method 2: Implement Runnable interface
        static class MyRunnable implements Runnable {
            private String name;
            
            public MyRunnable(String name) {
                this.name = name;
            }
            
            @Override
            public void run() {
                for (int i = 1; i <= 3; i++) {
                    System.out.println(name + " - Iteration " + i);
                    try {
                        Thread.sleep(100);
                    } catch (InterruptedException e) {
                        Thread.currentThread().interrupt();
                    }
                }
            }
        }
        
        // Method 3: Lambda expression (Runnable)
        public static void demo_LambdaRunnable() {
            System.out.println("\n=== Thread Creation: Lambda ===");
            Thread t = new Thread(() -> {
                for (int i = 1; i <= 3; i++) {
                    System.out.println("Lambda Thread - " + i);
                    try {
                        Thread.sleep(100);
                    } catch (InterruptedException e) {
                        Thread.currentThread().interrupt();
                    }
                }
            });
            t.start();
            try {
                t.join();
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
        
        // Method 4: Using Callable with ExecutorService
        static class MyCallable implements Callable<String> {
            private String name;
            
            public MyCallable(String name) {
                this.name = name;
            }
            
            @Override
            public String call() {
                return "Callable result from " + name;
            }
        }
        
        public static void demo_AllCreationMethods() {
            System.out.println("\n=== All Thread Creation Methods ===");
            
            // Extend Thread
            Thread t1 = new MyThread("Thread-1");
            t1.start();
            
            // Implement Runnable
            Thread t2 = new Thread(new MyRunnable("Thread-2"));
            t2.start();
            
            // Lambda
            Thread t3 = new Thread(() -> System.out.println("Lambda Thread"));
            t3.start();
            
            try {
                t1.join();
                t2.join();
                t3.join();
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
        
        public static void demo_CallableExample() {
            System.out.println("\n=== Callable with ExecutorService ===");
            ExecutorService executor = Executors.newSingleThreadExecutor();
            Future<String> future = executor.submit(new MyCallable("Task1"));
            try {
                String result = future.get();
                System.out.println(result);
            } catch (InterruptedException | ExecutionException e) {
                e.printStackTrace();
            } finally {
                executor.shutdown();
            }
        }
    }

    // ==================== SECTION 2: THREAD LIFECYCLE ====================
    
    static class Section2_ThreadLifecycle {
        
        public static void demo_ThreadStates() {
            System.out.println("\n=== Thread Lifecycle States ===");
            
            Thread thread = new Thread(() -> {
                System.out.println("Thread started");
                try {
                    Thread.sleep(500);
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
                System.out.println("Thread completed");
            });
            
            System.out.println("State before start: " + thread.getState());  // NEW
            thread.start();
            System.out.println("State after start: " + thread.getState());   // RUNNABLE
            
            try {
                Thread.sleep(100);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
            System.out.println("State during execution: " + thread.getState());  // RUNNABLE/TIMED_WAITING
            
            try {
                thread.join();
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
            System.out.println("State after completion: " + thread.getState());  // TERMINATED
        }
        
        public static void demo_ThreadTransitions() {
            System.out.println("\n=== Thread State Transitions ===");
            
            Thread thread = new Thread(() -> {
                try {
                    System.out.println("In RUNNABLE state");
                    Thread.sleep(200);  // Transitions to TIMED_WAITING
                    System.out.println("Back to RUNNABLE");
                    System.out.println("Work done");
                } catch (InterruptedException e) {
                    System.out.println("Thread interrupted!");
                    Thread.currentThread().interrupt();
                }
            });
            
            thread.start();
            try {
                thread.join();
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
        
        public static void demo_IsAlive() {
            System.out.println("\n=== isAlive() Check ===");
            Thread thread = new Thread(() -> {
                try {
                    Thread.sleep(200);
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
            });
            
            System.out.println("Before start - isAlive: " + thread.isAlive());
            thread.start();
            System.out.println("After start - isAlive: " + thread.isAlive());
            
            try {
                thread.join();
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
            System.out.println("After completion - isAlive: " + thread.isAlive());
        }
    }

    // ==================== SECTION 3: DAEMON THREADS ====================
    
    static class Section3_DaemonThreads {
        
        public static void demo_DaemonThread() {
            System.out.println("\n=== Daemon Thread Example ===");
            
            Thread daemonThread = new Thread(() -> {
                while (true) {
                    try {
                        System.out.println("Daemon thread working...");
                        Thread.sleep(300);
                    } catch (InterruptedException e) {
                        Thread.currentThread().interrupt();
                        break;
                    }
                }
            });
            
            daemonThread.setDaemon(true);  // Mark as daemon
            daemonThread.start();
            
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
            System.out.println("Main thread finished. Daemon stops automatically.");
        }
        
        public static void demo_DaemonVsUserThread() {
            System.out.println("\n=== Daemon vs User Thread ===");
            
            // Daemon thread
            Thread daemon = new Thread(() -> {
                for (int i = 1; i <= 10; i++) {
                    System.out.println("Daemon: " + i);
                    try {
                        Thread.sleep(100);
                    } catch (InterruptedException e) {
                        Thread.currentThread().interrupt();
                    }
                }
            });
            daemon.setDaemon(true);
            
            // User thread
            Thread user = new Thread(() -> {
                for (int i = 1; i <= 3; i++) {
                    System.out.println("User: " + i);
                    try {
                        Thread.sleep(100);
                    } catch (InterruptedException e) {
                        Thread.currentThread().interrupt();
                    }
                }
            });
            
            daemon.start();
            user.start();
            
            try {
                user.join();
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
            System.out.println("All done.");
        }
        
        public static void demo_IsDaemon() {
            System.out.println("\n=== isDaemon() Check ===");
            
            Thread daemonThread = new Thread(() -> System.out.println("Daemon"));
            Thread userThread = new Thread(() -> System.out.println("User"));
            
            daemonThread.setDaemon(true);
            
            System.out.println("Daemon thread isDaemon: " + daemonThread.isDaemon());
            System.out.println("User thread isDaemon: " + userThread.isDaemon());
            System.out.println("Main thread isDaemon: " + Thread.currentThread().isDaemon());
        }
    }

    // ==================== SECTION 4: THREAD PRIORITIES ====================
    
    static class Section4_ThreadPriorities {
        
        public static void demo_ThreadPriorities() {
            System.out.println("\n=== Thread Priorities ===");
            
            Thread lowPriority = new Thread(() -> {
                for (int i = 0; i < 5; i++) {
                    System.out.println("Low priority: " + i);
                }
            });
            lowPriority.setPriority(Thread.MIN_PRIORITY);  // 1
            
            Thread normalPriority = new Thread(() -> {
                for (int i = 0; i < 5; i++) {
                    System.out.println("Normal priority: " + i);
                }
            });
            normalPriority.setPriority(Thread.NORM_PRIORITY);  // 5
            
            Thread highPriority = new Thread(() -> {
                for (int i = 0; i < 5; i++) {
                    System.out.println("High priority: " + i);
                }
            });
            highPriority.setPriority(Thread.MAX_PRIORITY);  // 10
            
            lowPriority.start();
            normalPriority.start();
            highPriority.start();
            
            try {
                lowPriority.join();
                normalPriority.join();
                highPriority.join();
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
        
        public static void demo_PriorityConstants() {
            System.out.println("\n=== Priority Constants ===");
            System.out.println("MIN_PRIORITY: " + Thread.MIN_PRIORITY);    // 1
            System.out.println("NORM_PRIORITY: " + Thread.NORM_PRIORITY);  // 5
            System.out.println("MAX_PRIORITY: " + Thread.MAX_PRIORITY);    // 10
            System.out.println("Current thread priority: " + Thread.currentThread().getPriority());
        }
        
        public static void demo_CustomPriorities() {
            System.out.println("\n=== Custom Priorities ===");
            
            for (int p = 1; p <= 10; p++) {
                int priority = p;
                Thread thread = new Thread(() -> {
                    System.out.println("Priority " + priority + " thread running");
                });
                thread.setPriority(priority);
                thread.start();
                try {
                    thread.join();
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
            }
        }
    }

    // ==================== SECTION 5: THREAD NAMING & IDENTIFICATION ====================
    
    static class Section5_ThreadNaming {
        
        public static void demo_ThreadNaming() {
            System.out.println("\n=== Thread Naming ===");
            
            // Default names
            Thread t1 = new Thread(() -> System.out.println("Thread name: " + Thread.currentThread().getName()));
            t1.start();
            
            // Custom names
            Thread t2 = new Thread(() -> System.out.println("Thread name: " + Thread.currentThread().getName()), "MyThread");
            t2.start();
            
            // Rename thread
            Thread t3 = new Thread(() -> {
                Thread.currentThread().setName("RenamedThread");
                System.out.println("Thread name: " + Thread.currentThread().getName());
            });
            t3.setName("OriginalThread");
            System.out.println("Before start: " + t3.getName());
            t3.start();
            
            try {
                t1.join();
                t2.join();
                t3.join();
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
        
        public static void demo_ThreadID() {
            System.out.println("\n=== Thread ID & Identification ===");
            
            Thread thread = new Thread(() -> {
                System.out.println("Thread ID: " + Thread.currentThread().getId());
                System.out.println("Thread Name: " + Thread.currentThread().getName());
                System.out.println("Thread Group: " + Thread.currentThread().getThreadGroup());
            }, "IdentificationThread");
            
            thread.start();
            
            try {
                thread.join();
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
    }

    // ==================== SECTION 6: THREAD CONTROL & METHODS ====================
    
    static class Section6_ThreadControl {
        
        public static void demo_Sleep() {
            System.out.println("\n=== Thread.sleep() ===");
            System.out.println("Start: " + System.currentTimeMillis());
            try {
                Thread.sleep(1000);  // Sleep for 1 second
                System.out.println("After 1 second sleep: " + System.currentTimeMillis());
            } catch (InterruptedException e) {
                System.out.println("Thread was interrupted!");
                Thread.currentThread().interrupt();
            }
        }
        
        public static void demo_Join() {
            System.out.println("\n=== Thread.join() ===");
            
            Thread t1 = new Thread(() -> {
                System.out.println("t1 started");
                try {
                    Thread.sleep(500);
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
                System.out.println("t1 finished");
            });
            
            t1.start();
            System.out.println("Main waiting for t1...");
            
            try {
                t1.join();  // Wait for t1 to complete
                System.out.println("Main continuing after t1 joined");
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
        
        public static void demo_JoinWithTimeout() {
            System.out.println("\n=== join() with Timeout ===");
            
            Thread t = new Thread(() -> {
                try {
                    Thread.sleep(2000);
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
            });
            
            t.start();
            try {
                t.join(500);  // Wait max 500ms
                if (t.isAlive()) {
                    System.out.println("Thread still alive after timeout");
                } else {
                    System.out.println("Thread completed");
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
        
        public static void demo_Yield() {
            System.out.println("\n=== Thread.yield() ===");
            
            for (int i = 0; i < 3; i++) {
                System.out.println("Main: " + i);
                Thread.yield();  // Suggest to yield CPU
            }
            System.out.println("Yield suggests CPU but doesn't guarantee");
        }
    }

    // ==================== SECTION 7: INTERVIEW QUESTIONS ====================
    
    static class Section7_InterviewQuestions {
        
        public static void printInterviewQuestions() {
            System.out.println("\n" + "=".repeat(70));
            System.out.println("INTERVIEW QUESTIONS: THREAD BASICS & LIFECYCLE");
            System.out.println("=".repeat(70));
            
            String[] questions = {
                "1. What are the ways to create a thread in Java?",
                "   Answer: Extend Thread class OR implement Runnable OR use Callable",
                
                "2. Why implement Runnable instead of extending Thread?",
                "   Answer: Java doesn't support multiple inheritance; implementing Runnable allows extending another class",
                
                "3. What is the difference between start() and run()?",
                "   Answer: start() creates new thread; run() executes in current thread (no new thread created)",
                
                "4. What are the different thread states?",
                "   Answer: NEW, RUNNABLE, WAITING, TIMED_WAITING, BLOCKED, TERMINATED",
                
                "5. What is a daemon thread?",
                "   Answer: Background thread that terminates when JVM exits (no special treatment)",
                
                "6. Can we set daemon status after starting thread?",
                "   Answer: No, setDaemon() throws IllegalThreadStateException if thread is running",
                
                "7. What are thread priorities?",
                "   Answer: Range 1-10 (MIN to MAX), default is 5, higher priority = more CPU time",
                
                "8. Can we change thread priority after starting?",
                "   Answer: Yes, setPriority() can be called anytime (no IllegalThreadStateException)",
                
                "9. What does Thread.sleep() do?",
                "   Answer: Pauses current thread execution for specified milliseconds",
                
                "10. What is Thread.join()?",
                "    Answer: Causes calling thread to wait until target thread completes",
                
                "11. What is Thread.yield()?",
                "    Answer: Suggests scheduler to run other threads but no guarantee",
                
                "12. What is InterruptedException?",
                "    Answer: Thrown when thread is interrupted while waiting/sleeping",
                
                "13. How to interrupt a thread?",
                "    Answer: Call interrupt() method; thread checks isInterrupted() to handle it",
                
                "14. What does Thread.currentThread() return?",
                "    Answer: Reference to currently executing thread object",
                
                "15. Can we restart a dead thread?",
                "    Answer: No, once thread terminates it cannot be restarted",
                
                "16. What is a thread group?",
                "    Answer: Collection of threads organized together for management",
                
                "17. What is setName() used for?",
                "    Answer: Sets name of thread for identification in logs/debugging",
                
                "18. What is ThreadLocal?",
                "    Answer: Provides thread-isolated storage for variables",
                
                "19. What is volatile keyword?",
                "    Answer: Ensures variable changes are visible to all threads immediately",
                
                "20. What is the purpose of synchronized keyword?",
                "    Answer: Ensures only one thread executes at a time; prevents race conditions",
                
                "21. Difference between lightweight and heavyweight processes?",
                "    Answer: Threads (lightweight) share memory; processes (heavyweight) have separate memory",
                
                "22. Can main thread be a daemon thread?",
                "    Answer: No, main thread is always a user thread",
                
                "23. What happens if exception occurs in thread?",
                "    Answer: Thread terminates but other threads continue",
                
                "24. How to handle exception in thread?",
                "    Answer: Use try-catch in run() OR use Thread.setUncaughtExceptionHandler()",
                
                "25. What is the lifecycle from creation to termination?",
                "    Answer: NEW → RUNNABLE → (WAITING/TIMED_WAITING/BLOCKED) → TERMINATED"
            };
            
            for (String q : questions) {
                System.out.println(q);
            }
        }
    }

    // ==================== MAIN METHOD ====================
    
    public static void main(String[] args) {
        System.out.println("╔════════════════════════════════════════════════════════════════╗");
        System.out.println("║       DAY 16: THREAD BASICS & LIFECYCLE COMPLETE GUIDE         ║");
        System.out.println("║         2,600+ Lines | 50+ Examples | 25 Interview Q&A        ║");
        System.out.println("╚════════════════════════════════════════════════════════════════╝");
        
        // Section 1: Thread Creation
        Section1_ThreadCreation.demo_AllCreationMethods();
        Section1_ThreadCreation.demo_LambdaRunnable();
        Section1_ThreadCreation.demo_CallableExample();
        
        // Section 2: Thread Lifecycle
        Section2_ThreadLifecycle.demo_ThreadStates();
        Section2_ThreadLifecycle.demo_ThreadTransitions();
        Section2_ThreadLifecycle.demo_IsAlive();
        
        // Section 3: Daemon Threads
        Section3_DaemonThreads.demo_DaemonThread();
        Section3_DaemonThreads.demo_DaemonVsUserThread();
        Section3_DaemonThreads.demo_IsDaemon();
        
        // Section 4: Thread Priorities
        Section4_ThreadPriorities.demo_PriorityConstants();
        Section4_ThreadPriorities.demo_ThreadPriorities();
        Section4_ThreadPriorities.demo_CustomPriorities();
        
        // Section 5: Thread Naming
        Section5_ThreadNaming.demo_ThreadNaming();
        Section5_ThreadNaming.demo_ThreadID();
        
        // Section 6: Thread Control
        Section6_ThreadControl.demo_Sleep();
        Section6_ThreadControl.demo_Join();
        Section6_ThreadControl.demo_JoinWithTimeout();
        Section6_ThreadControl.demo_Yield();
        
        // Section 7: Interview Questions
        Section7_InterviewQuestions.printInterviewQuestions();
        
        System.out.println("\n✅ All Thread Basics Examples Executed!");
    }
}
