# 🟨 JavaScript Practice Problems

## Easy Problems (1-20)

### 1. Sum of Array
```javascript
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
// Test: sumArray([1, 2, 3, 4, 5]) // 15
```

### 2. Find Maximum
```javascript
function findMax(arr) {
    return Math.max(...arr);
}
// Test: findMax([3, 7, 2, 9, 1]) // 9
```

### 3. Reverse String
```javascript
function reverseString(str) {
    return str.split('').reverse().join('');
}
// Test: reverseString("hello") // "olleh"
```

### 4. Palindrome Check
```javascript
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}
// Test: isPalindrome("A man a plan a canal Panama") // true
```

### 5. Factorial
```javascript
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
// Test: factorial(5) // 120
```

### 6. FizzBuzz
```javascript
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) console.log("FizzBuzz");
        else if (i % 3 === 0) console.log("Fizz");
        else if (i % 5 === 0) console.log("Buzz");
        else console.log(i);
    }
}
```

### 7. Count Vowels
```javascript
function countVowels(str) {
    return str.toLowerCase().match(/[aeiou]/g)?.length || 0;
}
// Test: countVowels("hello world") // 3
```

### 8. Remove Duplicates
```javascript
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
// Test: removeDuplicates([1, 2, 2, 3, 4, 4, 5]) // [1, 2, 3, 4, 5]
```

### 9. Capitalize Words
```javascript
function capitalizeWords(str) {
    return str.split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
}
// Test: capitalizeWords("hello world") // "Hello World"
```

### 10. Even Numbers
```javascript
function getEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
// Test: getEvenNumbers([1, 2, 3, 4, 5, 6]) // [2, 4, 6]
```

## Medium Problems (21-40)

### 11. Fibonacci Sequence
```javascript
function fibonacci(n) {
    if (n <= 1) return n;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}
// Test: fibonacci(10) // 55
```

### 12. Prime Number Check
```javascript
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
// Test: isPrime(17) // true
```

### 13. Anagram Check
```javascript
function areAnagrams(str1, str2) {
    const normalize = str => str.toLowerCase().split('').sort().join('');
    return normalize(str1) === normalize(str2);
}
// Test: areAnagrams("listen", "silent") // true
```

### 14. Binary Search
```javascript
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
// Test: binarySearch([1, 3, 5, 7, 9], 5) // 2
```

### 15. Flatten Array
```javascript
function flattenArray(arr) {
    return arr.reduce((flat, item) => 
        Array.isArray(item) ? flat.concat(flattenArray(item)) : flat.concat(item), []
    );
}
// Test: flattenArray([1, [2, 3], [4, [5, 6]]]) // [1, 2, 3, 4, 5, 6]
```

### 16. Debounce Function
```javascript
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}
```

### 17. Group By Property
```javascript
function groupBy(arr, key) {
    return arr.reduce((groups, item) => {
        const group = item[key];
        groups[group] = groups[group] || [];
        groups[group].push(item);
        return groups;
    }, {});
}
```

### 18. Deep Clone Object
```javascript
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof Array) return obj.map(item => deepClone(item));
    
    const cloned = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloned[key] = deepClone(obj[key]);
        }
    }
    return cloned;
}
```

### 19. Throttle Function
```javascript
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
```

### 20. Merge Sorted Arrays
```javascript
function mergeSortedArrays(arr1, arr2) {
    let result = [];
    let i = 0, j = 0;
    
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            result.push(arr1[i++]);
        } else {
            result.push(arr2[j++]);
        }
    }
    
    return result.concat(arr1.slice(i)).concat(arr2.slice(j));
}
```

## Hard Problems (41-50)

### 21. Custom Promise.all
```javascript
function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        if (promises.length === 0) resolve([]);
        
        let results = [];
        let completed = 0;
        
        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(value => {
                    results[index] = value;
                    completed++;
                    if (completed === promises.length) {
                        resolve(results);
                    }
                })
                .catch(reject);
        });
    });
}
```

### 22. Event Emitter
```javascript
class EventEmitter {
    constructor() {
        this.events = {};
    }
    
    on(event, listener) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(listener);
    }
    
    emit(event, ...args) {
        if (this.events[event]) {
            this.events[event].forEach(listener => listener(...args));
        }
    }
    
    off(event, listenerToRemove) {
        if (this.events[event]) {
            this.events[event] = this.events[event].filter(
                listener => listener !== listenerToRemove
            );
        }
    }
}
```

### 23. Curry Function
```javascript
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function(...nextArgs) {
                return curried(...args, ...nextArgs);
            };
        }
    };
}

// Usage: const add = curry((a, b, c) => a + b + c);
// add(1)(2)(3) // 6
```

### 24. Memoization
```javascript
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

### 25. Virtual DOM (Simple)
```javascript
class VNode {
    constructor(tag, props = {}, children = []) {
        this.tag = tag;
        this.props = props;
        this.children = children;
    }
}

function createElement(tag, props, ...children) {
    return new VNode(tag, props, children);
}

function render(vnode) {
    if (typeof vnode === 'string') {
        return document.createTextNode(vnode);
    }
    
    const element = document.createElement(vnode.tag);
    
    Object.keys(vnode.props).forEach(key => {
        element.setAttribute(key, vnode.props[key]);
    });
    
    vnode.children.forEach(child => {
        element.appendChild(render(child));
    });
    
    return element;
}
```

## Practice Schedule

### Week 1: Easy Problems (1-10)
- Day 1-2: Problems 1-5
- Day 3-4: Problems 6-10
- Day 5-7: Review and practice

### Week 2: Medium Problems (11-20)
- Day 1-2: Problems 11-15
- Day 3-4: Problems 16-20
- Day 5-7: Review and optimization

### Week 3: Hard Problems (21-25)
- Day 1-2: Problems 21-23
- Day 3-4: Problems 24-25
- Day 5-7: Build projects using concepts

## Testing Your Solutions
```javascript
// Use console.log for testing
console.log(sumArray([1, 2, 3, 4, 5])); // Expected: 15
console.log(isPalindrome("racecar")); // Expected: true
console.log(fibonacci(10)); // Expected: 55
```

## Track Progress
```bash
# After solving problems
python3 New/00_MASTER_TOOLS/track_problem.py
```