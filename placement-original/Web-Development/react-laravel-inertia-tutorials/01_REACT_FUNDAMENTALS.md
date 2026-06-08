# React Fundamentals — Complete Guide with Examples

## 1. Introduction to React

### What is React?

React is a JavaScript library for building user interfaces. Created by Facebook (Meta), it allows developers to create reusable UI components that efficiently update and render when data changes.

**Key Principles:**

- **Declarative**: Describe what the UI should look like, React handles the updates
- **Component-Based**: Build encapsulated components that manage their own state
- **Learn Once, Write Anywhere**: Use React for web, mobile (React Native), desktop

---

## 2. JSX — The React Syntax

### What is JSX?

JSX (JavaScript XML) is a syntax extension that looks like HTML but is actually JavaScript.

### Basic JSX Example

```tsx
// Simple JSX
const element = <h1>Hello, World!</h1>;

// JSX with expressions
const name = "John";
const greeting = <h1>Hello, {name}!</h1>;

// Multi-line JSX (wrap in parentheses)
const card = (
    <div className="card">
        <h2>Title</h2>
        <p>Description</p>
    </div>
);
```

### JSX Compilation

```tsx
// JSX
const element = <h1 className="title">Hello</h1>;

// Compiles to
const element = React.createElement("h1", { className: "title" }, "Hello");
```

### JSX Rules

1. **Use className instead of class**

```tsx
<div className="container">Content</div>
```

2. **Use camelCase for attributes**

```tsx
<div onClick={handleClick} tabIndex={0}>
    Click me
</div>
```

3. **Close all tags (self-closing for empty elements)**

```tsx
<img src="photo.jpg" />
<input type="text" />
```

4. **Wrap multiple elements in a parent or fragment**

```tsx
// With parent div
<div>
    <h1>Title</h1>
    <p>Content</p>
</div>

// With fragment (no extra DOM node)
<>
    <h1>Title</h1>
    <p>Content</p>
</>
```

5. **JavaScript expressions in curly braces**

```tsx
const price = 100;
const tax = 0.1;

<div>
    <p>Price: ${price}</p>
    <p>Total: ${price * (1 + tax)}</p>
    <p>Status: {price > 50 ? "Expensive" : "Cheap"}</p>
</div>;
```

### Advanced JSX Patterns

**Conditional Rendering**

```tsx
function UserGreeting({ isLoggedIn, username }) {
    return (
        <div>
            {/* Using ternary operator */}
            {isLoggedIn ? (
                <h1>Welcome back, {username}!</h1>
            ) : (
                <h1>Please sign in.</h1>
            )}

            {/* Using && for single condition */}
            {isLoggedIn && <button>Logout</button>}

            {/* Using nullish coalescing */}
            <p>User: {username ?? "Guest"}</p>
        </div>
    );
}
```

**Lists and Keys**

```tsx
function TodoList({ todos }) {
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    {todo.text}
                    {todo.completed && <span> ✓</span>}
                </li>
            ))}
        </ul>
    );
}
```

**Inline Styles**

```tsx
const divStyle = {
    color: 'blue',
    backgroundColor: 'lightgray',
    padding: '10px',
    borderRadius: '5px'
};

<div style={divStyle}>Styled content</div>

// Or inline
<div style={{ color: 'red', fontSize: '20px' }}>Red text</div>
```

---

## 3. Components — Building Blocks

### Function Components (Modern, Preferred)

**Basic Component**

```tsx
function Welcome() {
    return <h1>Hello, World!</h1>;
}

// Arrow function syntax
const Welcome = () => {
    return <h1>Hello, World!</h1>;
};

// Implicit return (single expression)
const Welcome = () => <h1>Hello, World!</h1>;
```

**Component with Props**

```tsx
function Greeting({ name, age }) {
    return (
        <div>
            <h1>Hello, {name}!</h1>
            <p>You are {age} years old.</p>
        </div>
    );
}

// Usage
<Greeting name="Alice" age={25} />;
```

**TypeScript Component**

```tsx
interface GreetingProps {
    name: string;
    age: number;
    isAdmin?: boolean; // optional
}

function Greeting({ name, age, isAdmin = false }: GreetingProps) {
    return (
        <div>
            <h1>Hello, {name}!</h1>
            <p>Age: {age}</p>
            {isAdmin && <span className="badge">Admin</span>}
        </div>
    );
}
```

### Component Composition

**Children Prop**

```tsx
function Card({ children }) {
    return (
        <div className="card">
            <div className="card-body">{children}</div>
        </div>
    );
}

// Usage
<Card>
    <h3>Card Title</h3>
    <p>Card content goes here</p>
</Card>;
```

**Slots Pattern**

```tsx
interface ModalProps {
    header: React.ReactNode;
    body: React.ReactNode;
    footer: React.ReactNode;
}

function Modal({ header, body, footer }: ModalProps) {
    return (
        <div className="modal">
            <div className="modal-header">{header}</div>
            <div className="modal-body">{body}</div>
            <div className="modal-footer">{footer}</div>
        </div>
    );
}

// Usage
<Modal
    header={<h2>Confirm Action</h2>}
    body={<p>Are you sure?</p>}
    footer={
        <>
            <button>Cancel</button>
            <button>Confirm</button>
        </>
    }
/>;
```

**Compound Components**

```tsx
function Tabs({ children }) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="tabs">
            {React.Children.map(children, (child, index) =>
                React.cloneElement(child, {
                    isActive: index === activeTab,
                    onClick: () => setActiveTab(index),
                }),
            )}
        </div>
    );
}

Tabs.Tab = function Tab({ label, isActive, onClick, children }) {
    return (
        <div>
            <button className={isActive ? "active" : ""} onClick={onClick}>
                {label}
            </button>
            {isActive && <div>{children}</div>}
        </div>
    );
};

// Usage
<Tabs>
    <Tabs.Tab label="Tab 1">Content 1</Tabs.Tab>
    <Tabs.Tab label="Tab 2">Content 2</Tabs.Tab>
</Tabs>;
```

---

## 4. Props — Passing Data

### Props Basics

**Simple Props**

```tsx
function Button({ label, onClick }) {
    return <button onClick={onClick}>{label}</button>;
}

<Button label="Click me" onClick={() => alert("Clicked!")} />;
```

**Default Props**

```tsx
function Button({ label = 'Submit', variant = 'primary' }) {
    return <button className={`btn btn-${variant}`}>{label}</button>;
}

// These are equivalent
<Button label="Save" variant="success" />
<Button label="Save" /> // variant defaults to 'primary'
<Button /> // label defaults to 'Submit', variant to 'primary'
```

**Destructuring Props**

```tsx
// Without destructuring
function UserCard(props) {
    return (
        <div>
            {props.name} - {props.email}
        </div>
    );
}

// With destructuring (cleaner)
function UserCard({ name, email }) {
    return (
        <div>
            {name} - {email}
        </div>
    );
}

// Rest props
function Button({ label, onClick, ...rest }) {
    return (
        <button onClick={onClick} {...rest}>
            {label}
        </button>
    );
}

<Button label="Save" className="btn-primary" disabled />;
```

### Props Validation with TypeScript

```tsx
interface UserCardProps {
    id: number;
    name: string;
    email: string;
    avatar?: string; // optional
    role: "admin" | "user" | "vendor"; // union type
    metadata?: Record<string, any>; // object with any keys
}

function UserCard({ id, name, email, avatar, role, metadata }: UserCardProps) {
    return (
        <div className="user-card">
            {avatar && <img src={avatar} alt={name} />}
            <h3>{name}</h3>
            <p>{email}</p>
            <span className={`badge-${role}`}>{role}</span>
            {metadata && <pre>{JSON.stringify(metadata, null, 2)}</pre>}
        </div>
    );
}
```

### Passing Functions as Props

```tsx
interface TodoItemProps {
    todo: {
        id: number;
        text: string;
        completed: boolean;
    };
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
            />
            <span>{todo.text}</span>
            <button onClick={() => onDelete(todo.id)}>Delete</button>
        </div>
    );
}

// Parent component
function TodoList() {
    const handleToggle = (id: number) => {
        console.log("Toggle", id);
    };

    const handleDelete = (id: number) => {
        console.log("Delete", id);
    };

    return (
        <TodoItem
            todo={{ id: 1, text: "Learn React", completed: false }}
            onToggle={handleToggle}
            onDelete={handleDelete}
        />
    );
}
```

---

## 5. State — Managing Component Data

### useState Hook

**Basic Usage**

```tsx
import { useState } from "react";

function Counter() {
    // Declare state variable
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}
```

**Multiple State Variables**

```tsx
function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState(0);
    const [agreed, setAgreed] = useState(false);

    return (
        <form>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
            <input
                type="number"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
            />
            <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
            />
        </form>
    );
}
```

**Object State**

```tsx
function UserProfile() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        age: 0,
        address: {
            city: "",
            country: "",
        },
    });

    // Update name
    const updateName = (name: string) => {
        setUser((prev) => ({ ...prev, name }));
    };

    // Update nested property
    const updateCity = (city: string) => {
        setUser((prev) => ({
            ...prev,
            address: {
                ...prev.address,
                city,
            },
        }));
    };

    return (
        <div>
            <input
                value={user.name}
                onChange={(e) => updateName(e.target.value)}
            />
            <input
                value={user.address.city}
                onChange={(e) => updateCity(e.target.value)}
            />
        </div>
    );
}
```

**Array State**

```tsx
function TodoList() {
    const [todos, setTodos] = useState([]);

    // Add todo
    const addTodo = (text: string) => {
        setTodos((prev) => [
            ...prev,
            { id: Date.now(), text, completed: false },
        ]);
    };

    // Remove todo
    const removeTodo = (id: number) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    // Update todo
    const toggleTodo = (id: number) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo,
            ),
        );
    };

    return (
        <div>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleTodo(todo.id)}
                    />
                    <span>{todo.text}</span>
                    <button onClick={() => removeTodo(todo.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}
```

**Functional Updates**

```tsx
function Counter() {
    const [count, setCount] = useState(0);

    // Bad: May not work correctly with async updates
    const incrementBad = () => {
        setCount(count + 1);
        setCount(count + 1); // Still adds 1, not 2!
    };

    // Good: Use functional update
    const incrementGood = () => {
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1); // Correctly adds 2
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={incrementGood}>Add 2</button>
        </div>
    );
}
```

**Lazy Initialization**

```tsx
function ExpensiveComponent() {
    // Bad: computeExpensiveValue runs on every render
    const [value, setValue] = useState(computeExpensiveValue());

    // Good: Only runs once
    const [value, setValue] = useState(() => computeExpensiveValue());

    return <div>{value}</div>;
}
```

---

## 6. Events — Handling User Interactions

### Event Handling Basics

```tsx
function ButtonExample() {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log("Button clicked", e.target);
    };

    const handleDoubleClick = () => {
        console.log("Double clicked");
    };

    return (
        <div>
            <button onClick={handleClick}>Click me</button>
            <button onDoubleClick={handleDoubleClick}>Double click</button>
            <button onClick={() => console.log("Inline handler")}>
                Inline
            </button>
        </div>
    );
}
```

### Form Events

```tsx
function FormEvents() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted", formData);
    };

    const handleReset = () => {
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
            />
            <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
            />
            <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
            />
            <button type="submit">Submit</button>
            <button type="button" onClick={handleReset}>
                Reset
            </button>
        </form>
    );
}
```

### Keyboard Events

```tsx
function SearchBox() {
    const [query, setQuery] = useState("");

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            console.log("Search:", query);
        }

        if (e.key === "Escape") {
            setQuery("");
        }

        // Ctrl+K to focus
        if (e.ctrlKey && e.key === "k") {
            e.preventDefault();
            e.currentTarget.focus();
        }
    };

    return (
        <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search (Press Ctrl+K)"
        />
    );
}
```

### Event Delegation Pattern

```tsx
function ListWithDelegation() {
    const [items] = useState([1, 2, 3, 4, 5]);

    // Single handler for all buttons
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement;
        if (target.matches("button")) {
            const id = target.dataset.id;
            console.log("Clicked item", id);
        }
    };

    return (
        <div onClick={handleClick}>
            {items.map((item) => (
                <button key={item} data-id={item}>
                    Item {item}
                </button>
            ))}
        </div>
    );
}
```

---

## 7. Conditional Rendering

### If-Else with Ternary

```tsx
function UserStatus({ isLoggedIn, isPremium, username }) {
    return (
        <div>
            {isLoggedIn ? (
                <div>
                    <h2>Welcome back, {username}!</h2>
                    {isPremium ? (
                        <span className="badge-gold">Premium Member</span>
                    ) : (
                        <button>Upgrade to Premium</button>
                    )}
                </div>
            ) : (
                <div>
                    <h2>Welcome, Guest</h2>
                    <button>Sign In</button>
                </div>
            )}
        </div>
    );
}
```

### Logical AND (&&)

```tsx
function Notifications({ count }) {
    return (
        <div>
            <h2>Notifications</h2>
            {count > 0 && <span className="badge">{count}</span>}
            {count === 0 && <p>No new notifications</p>}
        </div>
    );
}
```

### Early Return

```tsx
function UserProfile({ user }) {
    // Guard clause
    if (!user) {
        return <div>Loading...</div>;
    }

    if (user.isBlocked) {
        return <div>User is blocked</div>;
    }

    // Main render
    return (
        <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
        </div>
    );
}
```

### Switch-Like Pattern

```tsx
function StatusMessage({ status }) {
    const messages = {
        loading: <div>Loading...</div>,
        success: <div className="alert-success">Success!</div>,
        error: <div className="alert-error">Error occurred</div>,
        idle: null,
    };

    return messages[status] || <div>Unknown status</div>;
}
```

---

## 8. Lists and Keys

### Basic List Rendering

```tsx
function UserList({ users }) {
    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.email}
                </li>
            ))}
        </ul>
    );
}
```

### Why Keys Matter

```tsx
// Bad: Using index as key
{
    items.map((item, index) => <div key={index}>{item}</div>);
}

// Good: Using stable identifier
{
    items.map((item) => <div key={item.id}>{item.name}</div>);
}
```

### Complex List Example

```tsx
interface Product {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
}

function ProductList({ products }: { products: Product[] }) {
    const [filter, setFilter] = useState<"all" | "inStock">("all");

    const filteredProducts = products.filter(
        (p) => filter === "all" || p.inStock,
    );

    return (
        <div>
            <button onClick={() => setFilter("all")}>All</button>
            <button onClick={() => setFilter("inStock")}>In Stock</button>

            <div className="product-grid">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="product-card">
                        <h3>{product.name}</h3>
                        <p>${product.price}</p>
                        {product.inStock ? (
                            <span className="in-stock">In Stock</span>
                        ) : (
                            <span className="out-of-stock">Out of Stock</span>
                        )}
                    </div>
                ))}
            </div>

            {filteredProducts.length === 0 && <p>No products found</p>}
        </div>
    );
}
```

---

## Practice Exercises

### Exercise 1: Counter with History

Build a counter that tracks all values it has been set to.

Requirements:

- Increment, decrement, reset buttons
- Show history of all values
- TypeScript types for state

### Exercise 2: Todo List

Build a complete todo application.

Requirements:

- Add todos
- Toggle completion
- Delete todos
- Filter (all, active, completed)
- Count remaining todos

### Exercise 3: Form with Validation

Create a registration form with validation.

Requirements:

- Name, email, password fields
- Validate on blur and submit
- Show error messages
- Disable submit if invalid

### Exercise 4: Searchable Product List

Build a product listing with search.

Requirements:

- Display products with name, price, category
- Search by name
- Filter by category
- Sort by price

---

## Next Steps

- Continue to [React Hooks Deep Dive](./02_REACT_HOOKS.md)
- Learn [TypeScript with React](./03_TYPESCRIPT_REACT.md)
- Explore [State Management](./04_STATE_MANAGEMENT.md)
