# 🔥 JavaScript Advanced Topics

## Closures Deep Dive
```javascript
// Closure with private variables
function createCounter(initialValue = 0) {
    let count = initialValue;
    
    return {
        increment: () => ++count,
        decrement: () => --count,
        getValue: () => count,
        reset: () => count = initialValue
    };
}

// Closure in loops (common gotcha)
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100); // Prints 3, 3, 3
}

// Right way with closure
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100); // Prints 0, 1, 2
}
```

## Generators
```javascript
// Generator function
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
    return 'Done';
}

const gen = numberGenerator();
console.log(gen.next()); // {value: 1, done: false}

// Infinite generator
function* fibonacci() {
    let a = 0, b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}
```

## Proxy and Reflect
```javascript
// Proxy for property access
const user = {name: 'John', age: 30};

const userProxy = new Proxy(user, {
    get(target, property) {
        console.log(`Getting ${property}`);
        return target[property];
    },
    
    set(target, property, value) {
        console.log(`Setting ${property} to ${value}`);
        if (property === 'age' && value < 0) {
            throw new Error('Age cannot be negative');
        }
        target[property] = value;
        return true;
    }
});

// Reflect API
const obj = {x: 1, y: 2};
console.log(Reflect.has(obj, 'x'));
Reflect.set(obj, 'z', 3);
```

## Performance Optimization
```javascript
// Debounce function
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// Throttle function
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Memoization
function memoize(fn) {
    const cache = new Map();
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    };
}
```

## Memory Management
```javascript
// Avoiding memory leaks
function setupEventListener() {
    const button = document.getElementById('myButton');
    const handler = () => console.log('Clicked');
    
    button.addEventListener('click', handler);
    
    // Clean up
    return () => {
        button.removeEventListener('click', handler);
    };
}

// Clear timers
const timerId = setTimeout(() => {
    console.log('Timer executed');
}, 1000);

clearTimeout(timerId);
```