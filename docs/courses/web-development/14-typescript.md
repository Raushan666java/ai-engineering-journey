# Chapter 14: TypeScript

## Learning Objectives

By the end of this chapter, you will be able to:
- Use TypeScript types, interfaces, and generics effectively
- Differentiate between types, interfaces, and type aliases
- Apply utility types and type narrowing patterns
- Write type-safe React components and API routes
- Configure TypeScript for strict mode

## 14.1 Basic Types

```typescript
// Primitive types
let name: string = "Alice";
let age: number = 30;
let isActive: boolean = true;
let id: string | number = "abc123"; // Union type

// Arrays and Tuples
let scores: number[] = [95, 87, 92];
let pair: [string, number] = ["Alice", 30]; // Tuple
let optional: [string, number?] = ["Alice"]; // Optional element

// Object types
interface User {
  readonly id: string; // Read-only property
  name: string;
  email: string;
  age?: number; // Optional property
}

// Type aliases
type Point = {
  x: number;
  y: number;
};
```

## 14.2 Interfaces vs Types

```typescript
// Interfaces - extendable, declaration merging
interface Animal {
  name: string;
}
interface Bear extends Animal {
  honey: boolean;
}
interface Animal {
  legs: number; // Declaration merging
}
// Result: Animal has name AND legs

// Types - closed, computed properties
type AnimalType = { name: string };
type BearType = AnimalType & { honey: boolean }; // Intersection
// Cannot reopen type: Type 'BearType' is already defined

// When to use each:
// Interface: Public API shapes, objects that will be extended
// Type: Union types, computed types, mapped types
type Status = "active" | "inactive" | "pending";
type Stringify<T> = { [K in keyof T]: string };
```

## 14.3 Generics

```typescript
// Generic function
function first<T>(arr: T[]): T | undefined {
  return arr[0];
}

const num = first([1, 2, 3]); // number
const str = first(["a", "b"]); // string

// Generic interface
interface Repository<T extends { id: string }> {
  getById(id: string): Promise<T | null>;
  create(data: Omit<T, "id">): Promise<T>;
  update(id: string, data: Partial<T>): Promise<T>;
  delete(id: string): Promise<void>;
}

// Generic constraints
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { name: "Alice", age: 30 };
getProperty(user, "name"); // string
getProperty(user, "age"); // number
```

## 14.4 Utility Types

```typescript
interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user";
  createdAt: Date;
}

// Partial - all properties optional
type UpdateUser = Partial<User>;

// Required - all properties required
type CompleteUser = Required<User>;

// Pick - select specific properties
type UserSummary = Pick<User, "id" | "name" | "email">;

// Omit - exclude properties
type CreateUser = Omit<User, "id" | "createdAt">;

// Record - key-value map
type UserMap = Record<string, User>;

// Extract - union member filtering
type AdminOnly = Extract<User["role"], "admin">;

// Exclude - remove from union
type NonAdmin = Exclude<User["role"], "admin">;

// Readonly
type ImmutableUser = Readonly<User>;

// ReturnType
type CreateUserReturn = ReturnType<typeof createUser>;

// Awaited - unwrap promises
type UserData = Awaited<ReturnType<typeof fetchUser>>;

// NonNullable
type Maybe = string | null | undefined;
type Definitely = NonNullable<Maybe>; // string
```

## 14.5 Type Narrowing

```typescript
// Type guards
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function process(value: string | number) {
  if (isString(value)) {
    return value.toUpperCase(); // TypeScript knows this is string
  }
  return value.toFixed(2); // TypeScript knows this is number
}

// Discriminated unions
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "rectangle"; width: number; height: number }
  | { kind: "triangle"; base: number; height: number };

function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "rectangle":
      return shape.width * shape.height;
    case "triangle":
      return (shape.base * shape.height) / 2;
  }
}

// Assertion functions
function assertIsDefined<T>(value: T): asserts value is NonNullable<T> {
  if (value === null || value === undefined) {
    throw new Error("Value must be defined");
  }
}
```

## 14.6 TypeScript with React

```typescript
import { useState, useCallback, FC, ReactNode } from "react";

// Component props
interface ButtonProps {
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  children: ReactNode;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  disabled = false,
  children,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-${variant} btn-${size}`}
    >
      {children}
    </button>
  );
};

// Generic component
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
}

function List<T>({ items, renderItem }: ListProps<T>) {
  return <ul>{items.map(renderItem)}</ul>;
}

// Usage
<List items={users} renderItem={(user) => <li>{user.name}</li>} />;

// Custom hook with types
function useLocalStorage<T>(key: string, initial: T): [T, (value: T) => void] {
  const [stored, setStored] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initial;
    } catch {
      return initial;
    }
  });

  const setValue = useCallback(
    (value: T) => {
      setStored(value);
      localStorage.setItem(key, JSON.stringify(value));
    },
    [key]
  );

  return [stored, setValue];
}
```

## 14.7 TypeScript with Express

```typescript
import express, { Request, Response, NextFunction, RequestHandler } from "express";
import { z } from "zod";

interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    role: "admin" | "user";
  };
}

// Typed request handler
type AsyncHandler = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => Promise<void>;

function asyncHandler(fn: AsyncHandler): RequestHandler {
  return (req, res, next) => Promise.resolve(fn(req as AuthenticatedRequest, res, next)).catch(next);
}

// Typed router
const router = express.Router();

const createUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
});

router.post(
  "/users",
  asyncHandler(async (req, res) => {
    const data = createUserSchema.parse(req.body);
    const user = await createUser(data);
    res.status(201).json({ data: user });
  })
);
```

## Summary

TypeScript adds static type checking to JavaScript, catching errors at compile time. Generics enable reusable, type-safe components. Utility types transform existing types. Type narrowing and discriminated unions make code safer. TypeScript integrates seamlessly with React and Express for end-to-end type safety.

## Exercises

### Review Questions

1. When should you use an interface instead of a type alias?
2. How do generics improve code reusability?
3. What is a discriminated union and when is it useful?

### Application Projects

1. Convert a JavaScript React project to TypeScript
2. Create a generic API client with typed responses
3. Build a type-safe event emitter using generics

### Challenge Project

Build a type-safe ORM-like query builder using TypeScript generics, template literal types, and mapped types. Support typed `where` clauses, `select` projections, `join` inference, and return types that match the query structure.
