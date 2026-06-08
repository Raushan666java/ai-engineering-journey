# Day 52 Notes: Task Management System

## Purpose
These notes complement `TaskManagementSystem.java` and explain design decisions, API surface, test strategy, and recommended next steps when converting the demo into a production Spring Boot project.

## Project Layout (Recommended for Spring Boot)
- src/main/java/com/placement/taskmanager
  - model/ (User, Project, Task)
  - repository/ (interfaces + JPA implementations)
  - service/ (UserService, ProjectService, TaskService)
  - controller/ (AuthController, ProjectController, TaskController)
  - dto/ (request/response DTOs)
  - config/ (security, cors)
- src/test/java/com/placement/taskmanager
  - unit/ (service tests with Mockito)
  - integration/ (web layer with @SpringBootTest)

## API Endpoints (Design)
- POST /api/auth/register
  - Body: { username, email, password, role }
  - Response: { token }
- POST /api/auth/login
  - Body: { usernameOrEmail, password }
  - Response: { token }
- GET /api/projects
  - Returns projects for authenticated user (or all for admin)
- POST /api/projects
  - Body: { name, description }
- GET /api/projects/{id}/tasks
  - List tasks for project
- POST /api/tasks
  - Body: { title, description, projectId, priority, dueDate }
- PATCH /api/tasks/{id}/assign
  - Body: { assignedTo }
- PATCH /api/tasks/{id}/status
  - Body: { status }

## DTO Examples
```json
// Create Task
{
  "title": "Design API",
  "description": "Design REST API for project",
  "projectId": 1,
  "priority": "HIGH",
  "dueDate": "2025-12-20T12:00:00"
}
```

## Security Notes
- Use BCrypt with a work factor of 10-12 for password hashing
- Use JWT with RS256 (asymmetric) in production to allow key rotation
- Store JWT expiry and refresh tokens securely (HTTP-only cookie recommended)
- Validate input using Bean Validation annotations (@NotBlank, @Email, @Size, @Future)

## Testing Strategy
1. Unit tests with Mockito for services
2. Integration tests with @SpringBootTest and TestContainers for Postgres
3. E2E tests via Postman/Newman using the included collection
4. Coverage goal: ≥80% for business logic, ≥60% overall

## CI Recommendations
- Run `mvn test` and generate coverage reports with JaCoCo
- Static code analysis with SpotBugs and PMD
- Run integration tests with TestContainers in CI
- Build and push Docker image only when all checks pass

## Quick Commands (local dev)
- Run demo: `java -cp . dsa.day52.TaskManagementSystem`
- Compile: `javac -d out src/main/java/dsa/day52/TaskManagementSystem.java`
- Create Spring Boot skeleton (recommended): `spring init --dependencies=web,data-jpa,postgresql,security,validation task-manager`

## Next Steps
- Split the single-file demo into modules
- Implement JPA repositories and database migrations (Flyway/Liquibase)
- Add integration tests with TestContainers
- Add Swagger/OpenAPI documentation

---
*Author: Placement Preparation*
