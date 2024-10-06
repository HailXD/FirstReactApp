## Why React?

- **Fast**: React applications can handle complex updates and still feel quick and responsive.
- **Modular**: Write modular and reusable code, which makes your codebase easier to maintain.
- **Scalable**: Ideal for large applications that display a lot of dynamic data.
- **Flexible**: Can be used for a variety of projects, including web, mobile, and even virtual reality applications.


# Creating a React App

To start building React applications, you can use the Create React App tool.

## Using Create React App

### Prerequisites

- **Node.js**: Ensure Node.js is installed on your machine.

### Creating a New App

```bash
npx create-react-app my-app
cd my-app
npm start
```

- **`npx`**: Runs the Create React App command without installing it globally.
- **`npm start`**: Runs the app in development mode.

## The Structure of a React App

### Key Directories and Files

- **`public/`**: Contains the HTML file and static assets.
  - `index.html`: The main HTML file. (Depends, sometimes in src or root directory)
- **`src/`**: Contains the React components and code.
  - `index.js`: Entry point of the application.
  - `App.js`: Main application component.

# JSX: JavaScript + HTML

JSX is a syntax extension for JavaScript that looks similar to HTML and is used with React to describe what the UI should look like.

## What is JSX?

- **Syntax Extension**: Allows you to write HTML-like syntax within JavaScript.
- **JavaScript Expressions**: JSX elements are treated as JavaScript expressions; they can be assigned to variables, passed as arguments, and returned from functions.

### Example:

```jsx
const element = <h1>Hello, world!</h1>;
```

## Why Use JSX?

- **Readability**: Makes it easier to visualize the UI structure.
- **Integration**: Combines markup and logic in the same file.

## JSX Rules

1. **One Parent Element**: A JSX expression must have exactly one outermost element.

   ```jsx
   // Correct
   const element = (
     <div>
       <h1>Hello</h1>
       <p>Welcome to React!</p>
     </div>
   );

   // Incorrect - Multiple root elements
   const element = (
     <h1>Hello</h1>
     <p>Welcome to React!</p>
   );
   ```

2. **Use `className` Instead of `class`**: Since `class` is a reserved keyword in JavaScript.

   ```jsx
   // Correct
   <div className="container"></div>

   // Incorrect
   <div class="container"></div>
   ```

3. **Self-Closing Tags**: For elements without children, you must include the closing slash.

   ```jsx
   // Correct
   <img src="image.jpg" alt="Description" />

   // Incorrect
   <img src="image.jpg" alt="Description">
   ```

4. **Curly Braces for JavaScript Expressions**: Embed JavaScript expressions inside JSX using `{}`.

   ```jsx
   const name = "John";
   const element = <h1>Hello, {name}!</h1>;
   ```

# Rendering Elements to the DOM

To display React elements on the web page, you need to render them to the DOM.

## The `createRoot` and `render` Methods

### Importing React and ReactDOM

```jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
```

- **`React`**: Contains the core React library.
- **`createRoot`**: Used to create a root for rendering React elements.

### Rendering an Element

```jsx
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<h1>Hello, world!</h1>);
```

- **`container`**: The DOM element where the React application will be rendered.
- **`root`**: A React Root, introduced in React 18, manages the rendering of the React application into the DOM.

## What is `createRoot`?

`createRoot` is part of the new Root API in React 18. It creates a root to render React components into the DOM and handles the lifecycle and rendering behavior of components within that container.

# The Virtual DOM

React uses a concept called the Virtual DOM to optimize UI updates.

## What is the Virtual DOM?

- **Virtual Representation**: A lightweight copy of the actual DOM.
- **Efficient Updates**: Manipulating the Virtual DOM is faster than the real DOM.

## How React Uses the Virtual DOM

1. **Rendering**: When a component's state or props change, React creates a new Virtual DOM tree.
2. **Diffing**: React compares the new Virtual DOM with the previous one to identify changes.
3. **Updating**: Only the parts of the real DOM that changed are updated, improving performance.

# Deep Dive into JSX

## Using `className` Instead of `class`

Since `class` is a reserved keyword in JavaScript, use `className` in JSX.

```jsx
<div className="header"></div>
```

## Self-Closing Tags

For elements that do not have children, you must use a self-closing tag.

```jsx
// Correct
<br />
<hr />
<img src="image.jpg" alt="Description" />

// Incorrect
<br>
<hr>
<img src="image.jpg" alt="Description">
```

## Embedding JavaScript in JSX with Curly Braces

You can embed any JavaScript expression in JSX by wrapping it in `{}`.

```jsx
const user = {
  firstName: 'John',
  lastName: 'Doe',
};

const element = <h1>Hello, {user.firstName} {user.lastName}!</h1>;
```

## Event Listeners in JSX

Attach event handlers to elements using camelCase syntax.

```jsx
function handleClick() {
  alert('Button clicked!');
}

const button = <button onClick={handleClick}>Click Me</button>;
```

- **Note**: Event handler functions should be defined or passed as functions, not called immediately.

# Conditional Rendering in JSX

React allows you to render different elements based on conditions.

## Using `if` Statements

You cannot use `if` statements inside JSX directly, but you can use them before the `return` statement.

```jsx
function Greeting(props) {
  if (props.isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please sign up.</h1>;
  }
}
```

## Using the Ternary Operator

For inline conditional rendering.

```jsx
const isLoggedIn = true;
const message = (
  <h1>{isLoggedIn ? 'Welcome back!' : 'Please sign up.'}</h1>
);
```

## Using Logical `&&` Operator

For rendering an element only if the condition is true.

```jsx
const messages = ['Message 1', 'Message 2'];
return (
  <div>
    {messages.length > 0 && <h2>You have {messages.length} unread messages.</h2>}
  </div>
);
```

# Lists and Keys in JSX

## Rendering Lists Using `.map()`

Use the JavaScript `.map()` method to create lists of elements.

```jsx
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>{number}</li>
);

return (
  <ul>{listItems}</ul>
);
```

## The Importance of `key` Prop

- **Unique Identifier**: Keys help React identify which items have changed, are added, or are removed.
- **Performance Optimization**: Helps in efficient re-rendering of lists.

**Note**: The `key` prop should be unique among siblings.

# React Components

Components let you split the UI into independent, reusable pieces.

## What are Components?

- **Building Blocks**: Small, reusable pieces responsible for rendering UI elements.
- **Types of Components**:
  - **Functional Components**: JavaScript functions that return JSX.
  - **Class Components**: ES6 classes that extend `React.Component` (less common in modern React).

## Functional Components

### Creating a Functional Component

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

### Using a Component

```jsx
<Welcome name="Alice" />
```

## Exporting and Importing Components

### Exporting a Component

```jsx
// Welcome.js
import React from 'react';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default Welcome;
```

### Importing a Component

```jsx
// App.js
import React from 'react';
import Welcome from './Welcome';

function App() {
  return (
    <div>
      <Welcome name="Alice" />
    </div>
  );
}

export default App;
```

## Nesting Components

Components can return other components.

```jsx
function App() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
      <Welcome name="Charlie" />
    </div>
  );
}
```

# Props: Passing Data to Components

## What are Props?

- **Short for "Properties"**: Props are inputs to components.
- **Read-Only**: Props are immutable; they should not be modified within the component.

### Accessing Props

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

### Destructuring Props

```jsx
function Welcome({ name }) {
  return <h1>Hello, {name}</h1>;
}
```

## Passing Event Handlers as Props

You can pass functions as props to handle events in child components.

```jsx
function Button(props) {
  return <button onClick={props.onClick}>Click Me</button>;
}

function App() {
  function handleClick() {
    alert('Button clicked!');
  }

  return <Button onClick={handleClick} />;
}
```

## `props.children`

Allows components to pass nested elements.

```jsx
function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

function App() {
  return (
    <Wrapper>
      <h1>Hello, world!</h1>
    </Wrapper>
  );
}
```

# State and Hooks

Hooks let you use state and other React features without writing a class.

## Introduction to Hooks

- **What are Hooks?** Functions that let you "hook into" React state and lifecycle features.
- **Common Hooks**:
  - `useState`
  - `useEffect`

## Using `useState`

### Importing `useState`

```jsx
import React, { useState } from 'react';
```

### Declaring State Variables

```jsx
function Counter() {
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

- **`useState`**: Initializes state variables.
- **State Update**: Call the updater function (`setCount`) to update the state.

### Updating State Based on Previous State

```jsx
setCount((prevCount) => prevCount + 1);
```

- **Functional Updates**: Use a function when the new state depends on the previous state.

# Side Effects with `useEffect`

## Introduction to `useEffect`

The `useEffect` Hook lets you perform side effects in function components.

### When to Use `useEffect`

- **Data Fetching**
- **Setting up a subscription**
- **Manually changing the DOM**

### Basic Usage

```jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Side effect: Update the document title
    document.title = `You clicked ${count} times`;
  });

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

- **Effect Runs After Every Render**: By default, `useEffect` runs after every render.

### Cleaning Up Effects

Some effects require cleanup to avoid memory leaks.

```jsx
useEffect(() => {
  function handleScroll() {
    // Handle scroll event
  }

  window.addEventListener('scroll', handleScroll);

  // Cleanup
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []); // Empty array ensures effect runs once on mount and cleanup on unmount
```

## Dependency Array

Control when the effect runs by passing a dependency array.

- **Run Only Once (on Mount and Unmount)**: Pass an empty array `[]`.
- **Run When Dependencies Change**: List variables that the effect depends on.

```jsx
useEffect(() => {
  // Effect logic
}, [count]); // Effect runs when 'count' changes
```

# Event Handling in Components

## Defining Event Handlers

Event handlers are functions that handle user interactions.

```jsx
function Button() {
  function handleClick() {
    alert('Button clicked!');
  }

  return <button onClick={handleClick}>Click Me</button>;
}
```

## Passing Event Handlers as Props

```jsx
function Button(props) {
  return <button onClick={props.onClick}>Click Me</button>;
}

function App() {
  function handleButtonClick() {
    alert('Button clicked in App!');
  }

  return <Button onClick={handleButtonClick} />;
}
```