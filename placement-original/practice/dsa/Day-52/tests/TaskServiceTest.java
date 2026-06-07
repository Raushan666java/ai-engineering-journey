package dsa.day52.tests;

import dsa.day52.TaskManagementSystem.*;
import org.junit.jupiter.api.*;
import java.time.LocalDateTime;
import java.util.Optional;
import static org.junit.jupiter.api.Assertions.*;

/**
 * Simple unit tests for TaskService and UserService using in-memory repositories.
 * These tests are intended as scaffolding — expand them with Mockito and integration tests.
 */
public class TaskServiceTest {

    InMemoryUserRepository userRepo;
    InMemoryProjectRepository projectRepo;
    InMemoryTaskRepository taskRepo;
    PasswordService passwordService;
    JwtService jwtService;
    EventBus eventBus;

    UserService userService;
    ProjectService projectService;
    TaskService taskService;

    @BeforeEach
    public void setup() {
        userRepo = new InMemoryUserRepository();
        projectRepo = new InMemoryProjectRepository();
        taskRepo = new InMemoryTaskRepository();
        passwordService = new PasswordService();
        jwtService = new JwtService();
        eventBus = new EventBus();

        userService = new UserService(userRepo, passwordService);
        projectService = new ProjectService(projectRepo);
        taskService = new TaskService(taskRepo, eventBus);

        // Prep users
        userRepo.create("alice", "alice@test.com", passwordService.hash("pwd"), Role.MANAGER);
        userRepo.create("bob", "bob@test.com", passwordService.hash("pwd2"), Role.USER);
    }

    @Test
    public void testRegisterAndLogin() {
        User u = userService.register("charlie", "charlie@test.com", "secret", Role.USER);
        assertNotNull(u);
        Optional<User> login = userService.login("charlie", "secret");
        assertTrue(login.isPresent());
        assertEquals("charlie", login.get().getUsername());
    }

    @Test
    public void testProjectAndTaskLifecycle() {
        User alice = userRepo.findByUsername("alice").get();
        Project p = projectService.createProject("Test", "desc", alice.getId());
        assertNotNull(p);

        Task t = taskService.createTask("T1", "desc", p.getId(), Priority.MEDIUM, LocalDateTime.now().plusDays(1));
        assertNotNull(t);

        taskService.assignTask(t.getId(), userRepo.findByUsername("bob").get().getId());
        assertNotNull(taskRepo.findById(t.getId()).get().getAssignedTo());

        taskService.updateStatus(t.getId(), TaskStatus.COMPLETED);
        assertEquals(TaskStatus.COMPLETED, taskRepo.findById(t.getId()).get().getStatus());

        taskService.deleteTask(t.getId());
        assertFalse(taskRepo.findById(t.getId()).isPresent());
    }

    @Test
    public void testOverdueTaskDetection() {
        User alice = userRepo.findByUsername("alice").get();
        Project p = projectService.createProject("Proj2", "desc", alice.getId());
        taskService.createTask("Old", "overdue", p.getId(), Priority.LOW, LocalDateTime.now().minusDays(2));
        assertTrue(taskService.getOverdueTasks(p.getId()).size() >= 1);
    }

    @Test
    public void testAssignNonExistentTaskThrows() {
        Exception ex = assertThrows(RuntimeException.class, () -> taskService.assignTask(9999L, 1L));
        assertNotNull(ex);
    }
}
