# Chapter 16: Testing

## Learning Objectives

By the end of this chapter, you will be able to:
- Write unit tests with Vitest for functions and components
- Test React components with Testing Library
- Implement API integration tests
- Write end-to-end tests with Playwright
- Mock network requests with MSW
- Measure and enforce code coverage

## 16.1 Testing Pyramid

![Testing Flowchart](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/web-development/16-testing.png)

```
       /\
      /E2E\         Few: Critical user flows
     /------\
    /Integr. \      Some: API and component integration
   /----------\
  /  Unit      \    Many: Isolated functions and logic
 /--------------\
```

## 16.2 Unit Testing with Vitest

```typescript
// utils/format.test.ts
import { describe, it, expect } from "vitest";
import { formatDate, capitalize, truncate } from "./format";

describe("formatDate", () => {
  it("formats a date correctly", () => {
    const date = new Date("2024-01-15");
    expect(formatDate(date, "short")).toBe("Jan 15, 2024");
  });

  it("handles invalid dates", () => {
    expect(() => formatDate(new Date("invalid"))).toThrow("Invalid date");
  });
});

describe("capitalize", () => {
  it("capitalizes the first letter", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  it("handles empty strings", () => {
    expect(capitalize("")).toBe("");
  });

  it("handles already capitalized strings", () => {
    expect(capitalize("Hello")).toBe("Hello");
  });
});

describe("truncate", () => {
  it("truncates strings longer than max length", () => {
    expect(truncate("Hello world", 5)).toBe("Hello...");
  });

  it("returns the full string if under max length", () => {
    expect(truncate("Hi", 5)).toBe("Hi");
  });
});
```

## 16.3 React Component Testing

```typescript
// components/TaskCard.test.tsx
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { TaskCard } from "./TaskCard";

const mockTask = {
  id: "1",
  title: "Write tests",
  priority: "HIGH",
  dueDate: "2024-02-01T00:00:00Z",
  assignee: { name: "Alice", email: "alice@test.com" },
};

describe("TaskCard", () => {
  it("renders task title", () => {
    render(<TaskCard task={mockTask} />);
    expect(screen.getByText("Write tests")).toBeInTheDocument();
  });

  it("renders priority badge", () => {
    render(<TaskCard task={mockTask} />);
    expect(screen.getByText("HIGH")).toBeInTheDocument();
  });

  it("renders assignee name", () => {
    render(<TaskCard task={mockTask} />);
    expect(screen.getByText("Alice")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const onClick = vi.fn();
    render(<TaskCard task={mockTask} onClick={onClick} />);
    fireEvent.click(screen.getByText("Write tests"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
```

### Custom Hook Testing

```typescript
// hooks/useLocalStorage.test.ts
import { renderHook, act } from "@testing-library/react";
import { useLocalStorage } from "./useLocalStorage";

describe("useLocalStorage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("returns initial value when empty", () => {
    const { result } = renderHook(() => useLocalStorage("key", "default"));
    expect(result.current[0]).toBe("default");
  });

  it("stores and retrieves values", () => {
    const { result } = renderHook(() => useLocalStorage("key", ""));
    act(() => {
      result.current[1]("stored value");
    });
    expect(result.current[0]).toBe("stored value");
    expect(localStorage.getItem("key")).toBe('"stored value"');
  });

  it("reads existing localStorage values", () => {
    localStorage.setItem("key", '"existing"');
    const { result } = renderHook(() => useLocalStorage("key", "default"));
    expect(result.current[0]).toBe("existing");
  });
});
```

## 16.4 API Integration Tests

```typescript
// apps/api/src/__tests__/tasks.test.ts
import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { PrismaClient } from "@prisma/client";
import { app } from "../index";

const prisma = new PrismaClient();
let server: any;
let token: string;
let projectId: string;

beforeAll(async () => {
  server = app.listen(4001);

  // Register and get token
  const res = await fetch("http://localhost:4001/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: "test@test.com",
      password: "password123",
      name: "Test",
    }),
  });
  const { tokens } = await res.json();
  token = tokens.accessToken;
});

afterAll(async () => {
  await prisma.task.deleteMany();
  await prisma.project.deleteMany();
  await prisma.user.deleteMany();
  await prisma.$disconnect();
  server.close();
});

describe("Task API", () => {
  it("creates a task", async () => {
    const res = await fetch("http://localhost:4001/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title: "Integration test",
        priority: "HIGH",
      }),
    });
    expect(res.status).toBe(201);
    const { data } = await res.json();
    expect(data.title).toBe("Integration test");
  });
});
```

## 16.5 End-to-End Testing with Playwright

```typescript
// tests/e2e/auth.spec.ts
import { test, expect } from "@playwright/test";

test.describe("Authentication", () => {
  test("user can register and login", async ({ page }) => {
    const email = `user-${Date.now()}@test.com`;

    await page.goto("/register");
    await page.fill("[name=name]", "Test User");
    await page.fill("[name=email]", email);
    await page.fill("[name=password]", "SecurePass123!");
    await page.click("button[type=submit]");

    await expect(page).toHaveURL(/\/dashboard/);
    await expect(page.locator("h1")).toContainText("Task Board");
  });

  test("shows error on invalid login", async ({ page }) => {
    await page.goto("/login");
    await page.fill("[name=email]", "wrong@test.com");
    await page.fill("[name=password]", "wrong");
    await page.click("button[type=submit]");
    await expect(page.locator(".error-message")).toBeVisible();
  });
});

test.describe("Task Management", () => {
  test.beforeEach(async ({ page }) => {
    // Login before each test
    await page.goto("/login");
    await page.fill("[name=email]", "test@test.com");
    await page.fill("[name=password]", "SecurePass123!");
    await page.click("button[type=submit]");
    await expect(page).toHaveURL(/\/dashboard/);
  });

  test("create and complete a task", async ({ page }) => {
    await page.click("text=Add Task");
    await page.fill("[name=title]", "E2E test task");
    await page.click("text=Create Task");
    await expect(page.locator("text=E2E test task")).toBeVisible();

    // Drag task to Done column
    const taskCard = page.locator("text=E2E test task").first();
    const doneColumn = page.locator("text=Done").last();
    await taskCard.dragTo(doneColumn);
    await expect(page.locator("text=E2E test task")).toBeVisible();
  });
});
```

## 16.6 Mocking with MSW

```typescript
// mocks/handlers.ts
import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/tasks", () => {
    return HttpResponse.json({
      data: [
        { id: "1", title: "Mock task", status: "TODO", priority: "HIGH" },
      ],
      total: 1,
    });
  }),

  http.post("/api/tasks", async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json(
      { data: { id: "2", ...(body as object), status: "TODO" } },
      { status: 201 }
    );
  }),

  http.delete("/api/tasks/:id", () => {
    return new HttpResponse(null, { status: 204 });
  }),
];

// setup.ts
import { setupServer } from "msw/node";
import { handlers } from "./handlers";

export const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
```

## Summary

Testing follows the pyramid model: many unit tests for isolated logic, some integration tests for API behavior, and few E2E tests for critical user flows. Vitest provides fast unit testing, Testing Library tests React components by user interaction, Playwright automates browser testing, and MSW mocks HTTP requests for reliable test environments.

## Exercises

### Review Questions

1. Why is the testing pyramid structured the way it is?
2. What is the difference between unit and integration tests?
3. How does MSW improve test reliability over real API calls?

### Application Projects

1. Add snapshot testing for a React component
2. Write integration tests for all CRUD endpoints of an API
3. Set up visual regression tests with Playwright

### Challenge Project

Achieve 90%+ code coverage on a web application with unit tests for utility functions, component tests with all states (loading, empty, error, populated), integration tests for all API routes, and E2E tests covering the complete user journey from registration to task completion.
