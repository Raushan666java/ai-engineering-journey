# React Fundamentals

## Learning Objectives
After completing this section, you will be able to:
- Understand what React is and its core concepts
- Create and use React components
- Manage state and props in React applications
- Handle events and user interactions
- Implement basic routing in React applications
- Work with forms and user input in React

## What is React?

React is a JavaScript library for building user interfaces, particularly single-page applications. It was developed by Facebook and is now maintained by Facebook and a community of individual developers and companies.

### Key Features of React

- **Component-Based**: Build encapsulated components that manage their own state
- **Declarative**: Design simple views for each state in your application
- **Virtual DOM**: Efficiently update and render components when data changes
- **JSX**: JavaScript syntax extension that allows HTML-like code in JavaScript
- **Unidirectional Data Flow**: Data flows down from parent to child components
- **Rich Ecosystem**: Large community with extensive libraries and tools

### Why Use React?

- **Reusable Components**: Build components once and use them throughout your application
- **Efficient Updates**: Virtual DOM ensures minimal DOM operations for better performance
- **Strong Community**: Large ecosystem with solutions for common problems
- **Developer Experience**: Hot reloading, debugging tools, and component-based architecture
- **Mobile Development**: React Native allows building mobile apps with React

## Setting Up a React Environment

### Using Create React App

Create React App is the easiest way to start building a new React application:

```bash
# Install Create React App globally
npm install -g create-react-app

# Create a new React project
npx create-react-app my-app

# Navigate to project directory
cd my-app

# Start the development server
npm start
```

### Project Structure

A typical Create React App project structure:

```
my-app/
  ├── node_modules/
  ├── public/
  │   ├── favicon.ico
  │   ├── index.html
  │   └── manifest.json
  ├── src/
  │   ├── App.css
  │   ├── App.js
  │   ├── App.test.js
  │   ├── index.css
  │   ├── index.js
  │   └── logo.svg
  ├── package.json
  └── README.md
```

## JSX: JavaScript XML

JSX is a syntax extension for JavaScript that looks similar to HTML but allows you to write HTML elements in JavaScript and place them in the DOM.

### Basic JSX Syntax

```jsx
// Basic JSX element
const element = <h1>Hello, world!</h1>;

// JSX with JavaScript expressions
const name = "John";
const greeting = <h1>Hello, {name}!</h1>;

// JSX with attributes
const link = <a href="https://reactjs.org">React Website</a>;

// JSX with multiple elements needs a parent wrapper
const content = (
  <div>
    <h1>Title</h1>
    <p>Paragraph</p>
  </div>
);

// Self-closing tags
const image = <img src="logo.png" alt="Logo" />;
```

### JSX vs HTML Differences

```jsx
// className instead of class
const element = <div className="container">Content</div>;

// htmlFor instead of for
const label = <label htmlFor="username">Username</label>;

// camelCase attribute names
const input = <input tabIndex="1" onChange={handleChange} />;

// Style as object with camelCase properties
const styledDiv = (
  <div
    style={{
      backgroundColor: 'blue',
      fontSize: '16px',
      marginTop: '10px'
    }}
  >
    Styled content
  </div>
);
```

### Embedding JavaScript in JSX

```jsx
// Using JavaScript expressions in JSX
const count = 5;
const element = <h1>{count > 0 ? `You have ${count} items` : 'No items'}</h1>;

// Using JavaScript functions in JSX
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = { firstName: 'John', lastName: 'Doe' };
const greeting = <h1>Hello, {formatName(user)}!</h1>;

// Using map to render lists
const numbers = [1, 2, 3, 4, 5];
const listItems = (
  <ul>
    {numbers.map(number => (
      <li key={number}>{number}</li>
    ))}
  </ul>
);
```

## React Components

Components are the building blocks of React applications. They let you split the UI into independent, reusable pieces.

### Functional Components

```jsx
// Simple functional component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Arrow function component
const Welcome = (props) => {
  return <h1>Hello, {props.name}</h1>;
};

// Using the component
const element = <Welcome name="John" />;
```

### Class Components

```jsx
import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

// Using the component
const element = <Welcome name="John" />;
```

### Component Composition

```jsx
function Avatar(props) {
  return <img src={props.user.avatarUrl} alt={props.user.name} />;
}

function UserInfo(props) {
  return (
    <div className="user-info">
      <Avatar user={props.user} />
      <div className="user-name">{props.user.name}</div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="comment">
      <UserInfo user={props.author} />
      <div className="comment-text">{props.text}</div>
      <div className="comment-date">{props.date.toLocaleDateString()}</div>
    </div>
  );
}

// Usage
const comment = {
  author: {
    name: 'John',
    avatarUrl: 'https://example.com/avatar.jpg'
  },
  text: 'This is a comment',
  date: new Date()
};

const element = <Comment author={comment.author} text={comment.text} date={comment.date} />;
```

## Props

Props (short for properties) are inputs to React components. They are passed from parent to child components.

### Passing Props

```jsx
// Parent component passing props
function App() {
  return (
    <div>
      <Welcome name="John" age={30} isAdmin={true} />
    </div>
  );
}

// Child component receiving props
function Welcome(props) {
  return (
    <div>
      <h1>Hello, {props.name}</h1>
      <p>Age: {props.age}</p>
      <p>Admin: {props.isAdmin ? 'Yes' : 'No'}</p>
    </div>
  );
}
```

### Destructuring Props

```jsx
// Destructuring in the parameter
function Welcome({ name, age, isAdmin }) {
  return (
    <div>
      <h1>Hello, {name}</h1>
      <p>Age: {age}</p>
      <p>Admin: {isAdmin ? 'Yes' : 'No'}</p>
    </div>
  );
}

// Destructuring in the function body
function Welcome(props) {
  const { name, age, isAdmin } = props;
  return (
    <div>
      <h1>Hello, {name}</h1>
      <p>Age: {age}</p>
      <p>Admin: {isAdmin ? 'Yes' : 'No'}</p>
    </div>
  );
}
```

### Default Props

```jsx
function Welcome({ name = 'Guest', age = 0, isAdmin = false }) {
  return (
    <div>
      <h1>Hello, {name}</h1>
      <p>Age: {age}</p>
      <p>Admin: {isAdmin ? 'Yes' : 'No'}</p>
    </div>
  );
}

// Alternative way for class components
Welcome.defaultProps = {
  name: 'Guest',
  age: 0,
  isAdmin: false
};
```

### Props.children

```jsx
function Card(props) {
  return (
    <div className="card">
      <div className="card-header">{props.title}</div>
      <div className="card-body">
        {props.children}
      </div>
    </div>
  );
}

// Usage
function App() {
  return (
    <Card title="Welcome">
      <h1>Hello, World!</h1>
      <p>This content is passed as children.</p>
    </Card>
  );
}
```

## State

State is a JavaScript object that stores component data that may change over time.

### useState Hook (Functional Components)

```jsx
import React, { useState } from 'react';

function Counter() {
  // Declare a state variable 'count' with initial value 0
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

### Multiple State Variables

```jsx
function UserForm() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [isActive, setIsActive] = useState(false);
  
  return (
    <form>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(parseInt(e.target.value) || 0)}
        placeholder="Age"
      />
      <label>
        <input
          type="checkbox"
          checked={isActive}
          onChange={(e) => setIsActive(e.target.checked)}
        />
        Active
      </label>
    </form>
  );
}
```

### Object State

```jsx
function UserForm() {
  const [user, setUser] = useState({
    name: '',
    age: 0,
    isActive: false
  });
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUser({
      ...user, // Spread the existing user object
      [name]: type === 'checkbox' ? checked : value // Update the changed property
    });
  };
  
  return (
    <form>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="number"
        name="age"
        value={user.age}
        onChange={handleChange}
        placeholder="Age"
      />
      <label>
        <input
          type="checkbox"
          name="isActive"
          checked={user.isActive}
          onChange={handleChange}
        />
        Active
      </label>
    </form>
  );
}
```

### State in Class Components

```jsx
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }
  
  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={this.increment}>
          Click me
        </button>
      </div>
    );
  }
}
```

### State Updates May Be Asynchronous

```jsx
// Wrong way (may not update correctly)
increment = () => {
  this.setState({ count: this.state.count + 1 });
  console.log(this.state.count); // Might not reflect the updated value
}

// Correct way using function form
increment = () => {
  this.setState((prevState) => ({
    count: prevState.count + 1
  }));
}

// Callback after state update
increment = () => {
  this.setState((prevState) => ({
    count: prevState.count + 1
  }), () => {
    console.log('State updated:', this.state.count);
  });
}
```

## Handling Events

React events are named using camelCase and passed as functions rather than strings.

### Basic Event Handling

```jsx
function Button() {
  const handleClick = () => {
    console.log('Button clicked!');
  };
  
  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}
```

### Passing Arguments to Event Handlers

```jsx
function ItemList() {
  const handleDelete = (id) => {
    console.log(`Deleting item ${id}`);
  };
  
  return (
    <ul>
      <li>
        Item 1
        <button onClick={() => handleDelete(1)}>Delete</button>
      </li>
      <li>
        Item 2
        <button onClick={() => handleDelete(2)}>Delete</button>
      </li>
    </ul>
  );
}
```

### Event Object

```jsx
function Form() {
  const handleChange = (event) => {
    console.log(event.target.value);
  };
  
  return (
    <input
      type="text"
      onChange={handleChange}
      placeholder="Type something"
    />
  );
}
```

### Preventing Default Behavior

```jsx
function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" />
      <button type="submit">Submit</button>
    </form>
  );
}
```

### Binding in Class Components

```jsx
class Button extends Component {
  constructor(props) {
    super(props);
    // Binding in constructor
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    console.log('Button clicked!', this);
  }
  
  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}

// Alternative: Using class fields and arrow functions
class Button extends Component {
  // Arrow function automatically binds 'this'
  handleClick = () => {
    console.log('Button clicked!', this);
  }
  
  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}
```

## Conditional Rendering

React allows you to conditionally render components based on the state of your application.

### If Statements

```jsx
function UserGreeting(props) {
  if (props.isLoggedIn) {
    return <h1>Welcome back!</h1>;
  }
  return <h1>Please sign in.</h1>;
}
```

### Inline If with Logical && Operator

```jsx
function Notifications({ messages }) {
  return (
    <div>
      <h1>Notifications</h1>
      {messages.length > 0 && (
        <p>You have {messages.length} unread messages.</p>
      )}
    </div>
  );
}
```

### Conditional (Ternary) Operator

```jsx
function UserStatus({ isOnline }) {
  return (
    <div>
      The user is {isOnline ? 'online' : 'offline'}.
    </div>
  );
}
```

### Preventing Component from Rendering

```jsx
function WarningBanner({ warn }) {
  if (!warn) {
    return null;
  }
  
  return (
    <div className="warning">
      Warning!
    </div>
  );
}
```

### Switch Case

```jsx
function Notification({ type, message }) {
  let notification;
  
  switch (type) {
    case 'info':
      notification = <Info message={message} />;
      break;
    case 'success':
      notification = <Success message={message} />;
      break;
    case 'error':
      notification = <Error message={message} />;
      break;
    default:
      notification = null;
  }
  
  return <div className="notification">{notification}</div>;
}
```

### Object Mapping

```jsx
function Notification({ type, message }) {
  const notificationTypes = {
    info: <Info message={message} />,
    success: <Success message={message} />,
    error: <Error message={message} />
  };
  
  return (
    <div className="notification">
      {notificationTypes[type] || null}
    </div>
  );
}
```

## Lists and Keys

React uses keys to identify which items have changed, are added, or are removed in lists.

### Rendering Lists

```jsx
function NumberList({ numbers }) {
  const listItems = numbers.map((number) => (
    <li key={number.toString()}>
      {number}
    </li>
  ));
  
  return <ul>{listItems}</ul>;
}

// Usage
const numbers = [1, 2, 3, 4, 5];
<NumberList numbers={numbers} />
```

### Keys

```jsx
// Using IDs as keys (best practice)
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
        </li>
      ))}
    </ul>
  );
}

// Using index as keys (use only when items don't have stable IDs)
function GroceryList({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
}
```

### Extracting Components with Keys

```jsx
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

function TodoItem({ todo }) {
  return <li>{todo.text}</li>;
}
```

## Forms and Controlled Components

In React, form elements typically maintain their own state. Controlled components are form elements whose values are controlled by React state.

### Controlled Input

```jsx
function NameForm() {
  const [name, setName] = useState('');
  
  const handleChange = (event) => {
    setName(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('A name was submitted: ' + name);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
```

### Multiple Input Fields

```jsx
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form data:', formData);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
```

### Form Elements

```jsx
function FormElements() {
  const [formData, setFormData] = useState({
    text: '',
    textarea: '',
    select: 'option1',
    checkbox: false,
    radio: 'option1'
  });
  
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  return (
    <form>
      {/* Text input */}
      <div>
        <label>
          Text:
          <input
            type="text"
            name="text"
            value={formData.text}
            onChange={handleChange}
          />
        </label>
      </div>
      
      {/* Textarea */}
      <div>
        <label>
          Textarea:
          <textarea
            name="textarea"
            value={formData.textarea}
            onChange={handleChange}
          />
        </label>
      </div>
      
      {/* Select */}
      <div>
        <label>
          Select:
          <select
            name="select"
            value={formData.select}
            onChange={handleChange}
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </label>
      </div>
      
      {/* Checkbox */}
      <div>
        <label>
          <input
            type="checkbox"
            name="checkbox"
            checked={formData.checkbox}
            onChange={handleChange}
          />
          Checkbox
        </label>
      </div>
      
      {/* Radio buttons */}
      <div>
        <label>
          <input
            type="radio"
            name="radio"
            value="option1"
            checked={formData.radio === 'option1'}
            onChange={handleChange}
          />
          Option 1
        </label>
        <label>
          <input
            type="radio"
            name="radio"
            value="option2"
            checked={formData.radio === 'option2'}
            onChange={handleChange}
          />
          Option 2
        </label>
      </div>
    </form>
  );
}
```

### Uncontrolled Components

```jsx
import React, { useRef } from 'react';

function UncontrolledForm() {
  const nameInput = useRef(null);
  const fileInput = useRef(null);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', nameInput.current.value);
    console.log('File:', fileInput.current.files[0]);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          ref={nameInput}
          defaultValue="Default name"
        />
      </div>
      <div>
        <label htmlFor="file">File:</label>
        <input
          type="file"
          id="file"
          ref={fileInput}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
```

## Lifecycle and Effects

React components have a lifecycle of mounting, updating, and unmounting. In functional components, the `useEffect` hook handles side effects.

### useEffect Hook

```jsx
import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  
  // Runs after every render
  useEffect(() => {
    console.log('Component rendered');
  });
  
  // Runs only on mount (empty dependency array)
  useEffect(() => {
    console.log('Component mounted');
    
    // Cleanup function runs on unmount
    return () => {
      console.log('Component will unmount');
    };
  }, []);
  
  // Runs when 'seconds' changes
  useEffect(() => {
    console.log(`Seconds changed to: ${seconds}`);
  }, [seconds]);
  
  // Timer example
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);
    
    // Cleanup function to clear the interval
    return () => {
      clearInterval(timer);
    };
  }, []);
  
  return <div>Seconds: {seconds}</div>;
}
```

### Data Fetching with useEffect

```jsx
import React, { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        setUsers(data);
        setError(null);
      } catch (error) {
        setError(`Error fetching users: ${error.message}`);
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };
    
    fetchUsers();
  }, []);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

### Class Component Lifecycle Methods

```jsx
import React, { Component } from 'react';

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('Constructor');
  }
  
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    return null;
  }
  
  componentDidMount() {
    console.log('componentDidMount');
    // Good place for data fetching, subscriptions
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return true; // Return false to prevent update
  }
  
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    return null;
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
    // Good place to operate on the DOM when the component has been updated
  }
  
  componentWillUnmount() {
    console.log('componentWillUnmount');
    // Good place for cleanup (e.g., clearing timers, cancelling requests)
  }
  
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };
  
  render() {
    console.log('render');
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}
```

## React Router

React Router is the standard routing library for React applications.

### Basic Routing

```jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Components
function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function Contact() {
  return <h2>Contact Page</h2>;
}

function NotFound() {
  return <h2>404 - Page Not Found</h2>;
}

// App with routing
function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
```

### URL Parameters

```jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

// User component that uses URL parameters
function User() {
  const { userId } = useParams();
  return <h2>User Profile: {userId}</h2>;
}

// Product component with multiple parameters
function Product() {
  const { category, productId } = useParams();
  return (
    <h2>
      Product: {productId} (Category: {category})
    </h2>
  );
}

// App with parameterized routes
function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/users/1">User 1</Link></li>
            <li><Link to="/users/2">User 2</Link></li>
            <li><Link to="/products/electronics/123">Product 123</Link></li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:userId" element={<User />} />
          <Route path="/products/:category/:productId" element={<Product />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
```

### Nested Routes

```jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

// Layout component with nested routes
function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
      </nav>
      
      {/* Outlet renders the child route components */}
      <Outlet />
    </div>
  );
}

// Dashboard layout with its own navigation
function DashboardLayout() {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <ul>
          <li><Link to="/dashboard/stats">Stats</Link></li>
          <li><Link to="/dashboard/settings">Settings</Link></li>
        </ul>
      </nav>
      
      <Outlet />
    </div>
  );
}

// Dashboard pages
function DashboardStats() {
  return <h3>Dashboard Stats</h3>;
}

function DashboardSettings() {
  return <h3>Dashboard Settings</h3>;
}

// App with nested routes
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardStats />} />
            <Route path="stats" element={<DashboardStats />} />
            <Route path="settings" element={<DashboardSettings />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
```

### Navigation and Redirects

```jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';

// Login component with programmatic navigation
function Login() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  
  const handleLogin = () => {
    // Simulate authentication
    setIsAuthenticated(true);
    navigate('/dashboard');
  };
  
  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}

// Protected route component
function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  
  if (!isAuthenticated) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" replace />;
  }
  
  return children;
}

// App with protected routes
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
```

## Practical Applications

### Todo List Application

```jsx
import React, { useState } from 'react';
import './TodoApp.css';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all'); // all, active, completed
  
  const addTodo = () => {
    if (input.trim() === '') return;
    
    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false
    };
    
    setTodos([...todos, newTodo]);
    setInput('');
  };
  
  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };
  
  // Filter todos based on current filter
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true; // 'all'
  });
  
  // Count remaining active todos
  const activeTodoCount = todos.filter(todo => !todo.completed).length;
  
  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      
      {/* Todo input */}
      <div className="todo-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="What needs to be done?"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      
      {/* Todo list */}
      <ul className="todo-list">
        {filteredTodos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      
      {/* Footer */}
      {todos.length > 0 && (
        <div className="todo-footer">
          <span>{activeTodoCount} items left</span>
          
          <div className="filters">
            <button
              className={filter === 'all' ? 'active' : ''}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button
              className={filter === 'active' ? 'active' : ''}
              onClick={() => setFilter('active')}
            >
              Active
            </button>
            <button
              className={filter === 'completed' ? 'active' : ''}
              onClick={() => setFilter('completed')}
            >
              Completed
            </button>
          </div>
          
          <button onClick={clearCompleted}>Clear completed</button>
        </div>
      )}
    </div>
  );
}

export default TodoApp;
```

### Weather App with API Integration

```jsx
import React, { useState, useEffect } from 'react';
import './WeatherApp.css';

function WeatherApp() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const API_KEY = 'your_api_key'; // Replace with your actual API key
  const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
  
  const searchWeather = async () => {
    if (query.trim() === '') return;
    
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(
        `${API_URL}?q=${query}&units=metric&appid=${API_KEY}`
      );
      
      if (!response.ok) {
        throw new Error('City not found');
      }
      
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      setError(error.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };
  
  // Get user's location weather on initial load
  useEffect(() => {
    navigator.geolocation?.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      
      setLoading(true);
      try {
        const response = await fetch(
          `${API_URL}?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
        );
        
        if (!response.ok) {
          throw new Error('Could not fetch weather');
        }
        
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    });
  }, []);
  
  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      
      <div className="search-box">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && searchWeather()}
          placeholder="Search for a city..."
        />
        <button onClick={searchWeather}>Search</button>
      </div>
      
      {loading && <div className="loading">Loading...</div>}
      
      {error && <div className="error">{error}</div>}
      
      {weather && (
        <div className="weather-info">
          <h2>{weather.name}, {weather.sys.country}</h2>
          
          <div className="weather-main">
            <img
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <div className="temperature">
              {Math.round(weather.main.temp)}°C
            </div>
          </div>
          
          <div className="weather-description">
            {weather.weather[0].description}
          </div>
          
          <div className="weather-details">
            <div className="detail">
              <span>Feels like:</span>
              <span>{Math.round(weather.main.feels_like)}°C</span>
            </div>
            <div className="detail">
              <span>Humidity:</span>
              <span>{weather.main.humidity}%</span>
            </div>
            <div className="detail">
              <span>Wind:</span>
              <span>{weather.wind.speed} m/s</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
```

## Review Questions

1. **What are the key differences between props and state in React?**
   - How do props and state differ in terms of mutability?
   - When would you use props versus state?
   - How do you pass data from a parent to a child component?
   - How do you update state in a React component?

2. **Explain the concept of the Virtual DOM and why it's important.**
   - What is the Virtual DOM and how does it work?
   - How does React use the Virtual DOM to optimize rendering?
   - What are the performance benefits of the Virtual DOM?

3. **What are React hooks and how do they improve functional components?**
   - What problems do hooks solve in React?
   - Explain the rules of hooks.
   - Compare and contrast class components and functional components with hooks.

## Exercises

1. **Component Hierarchy**
   - Create a component hierarchy for a simple e-commerce product page
   - Implement the components with proper props passing
   - Add state management for product quantity and cart functionality

2. **Form Handling**
   - Create a multi-step registration form with validation
   - Implement form state management using React hooks
   - Add error handling and success feedback

3. **API Integration**
   - Build a component that fetches and displays data from a public API
   - Implement loading states and error handling
   - Add filtering or pagination functionality

## Additional Resources

- [React Official Documentation](https://reactjs.org/docs/getting-started.html)
- [Create React App](https://create-react-app.dev/)
- [React Router Documentation](https://reactrouter.com/)
- [React Hooks API Reference](https://reactjs.org/docs/hooks-reference.html)
- [React DevTools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

## Next Steps
After mastering React fundamentals, you might want to explore more advanced topics such as state management libraries (Redux, MobX), server-side rendering, testing React applications, or building mobile apps with React Native.