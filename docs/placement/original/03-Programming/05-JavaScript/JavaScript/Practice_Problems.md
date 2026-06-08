# 💻 JavaScript Complete Practice Problems

## 🟢 Easy Problems (1-25)

### 1. Sum of Array
```javascript
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
// Alternative solutions
const sumArray2 = arr => arr.reduce((a, b) => a + b, 0);
const sumArray3 = arr => {
    let sum = 0;
    for (let num of arr) sum += num;
    return sum;
};
// Test: sumArray([1, 2, 3, 4, 5]) // 15
```

### 2. Find Maximum Number
```javascript
function findMax(arr) {
    return Math.max(...arr);
}
// Alternative solutions
const findMax2 = arr => arr.reduce((max, num) => num > max ? num : max, arr[0]);
const findMax3 = arr => {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max;
};
// Test: findMax([3, 7, 2, 9, 1]) // 9
```

### 3. Reverse String
```javascript
function reverseString(str) {
    return str.split('').reverse().join('');
}
// Alternative solutions
const reverseString2 = str => [...str].reverse().join('');
const reverseString3 = str => {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
};
// Test: reverseString("hello") // "olleh"
```

### 4. Palindrome Check
```javascript
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}
// Alternative solution
const isPalindrome2 = str => {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0, right = cleaned.length - 1;
    while (left < right) {
        if (cleaned[left] !== cleaned[right]) return false;
        left++;
        right--;
    }
    return true;
};
// Test: isPalindrome("A man a plan a canal Panama") // true
```

### 5. Factorial
```javascript
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
// Iterative solution
const factorial2 = n => {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
};
// Test: factorial(5) // 120
```

### 6. FizzBuzz
```javascript
function fizzBuzz(n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) result.push("FizzBuzz");
        else if (i % 3 === 0) result.push("Fizz");
        else if (i % 5 === 0) result.push("Buzz");
        else result.push(i);
    }
    return result;
}
// One-liner version
const fizzBuzz2 = n => Array.from({length: n}, (_, i) => 
    ++i % 15 === 0 ? "FizzBuzz" : i % 3 === 0 ? "Fizz" : i % 5 === 0 ? "Buzz" : i
);
// Test: fizzBuzz(15)
```

### 7. Count Vowels
```javascript
function countVowels(str) {
    return str.toLowerCase().match(/[aeiou]/g)?.length || 0;
}
// Alternative solutions
const countVowels2 = str => {
    const vowels = 'aeiou';
    return str.toLowerCase().split('').filter(char => vowels.includes(char)).length;
};
const countVowels3 = str => {
    let count = 0;
    const vowels = 'aeiou';
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) count++;
    }
    return count;
};
// Test: countVowels("hello world") // 3
```

### 8. Remove Duplicates
```javascript
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
// Alternative solutions
const removeDuplicates2 = arr => arr.filter((item, index) => arr.indexOf(item) === index);
const removeDuplicates3 = arr => {
    const unique = [];
    for (let item of arr) {
        if (!unique.includes(item)) {
            unique.push(item);
        }
    }
    return unique;
};
// Test: removeDuplicates([1, 2, 2, 3, 4, 4, 5]) // [1, 2, 3, 4, 5]
```

### 9. Capitalize Words
```javascript
function capitalizeWords(str) {
    return str.split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
}
// Alternative solution
const capitalizeWords2 = str => str.replace(/\b\w/g, char => char.toUpperCase());
// Test: capitalizeWords("hello world") // "Hello World"
```

### 10. Even Numbers Filter
```javascript
function getEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
// Alternative solution
const getEvenNumbers2 = arr => {
    const evens = [];
    for (let num of arr) {
        if (num % 2 === 0) evens.push(num);
    }
    return evens;
};
// Test: getEvenNumbers([1, 2, 3, 4, 5, 6]) // [2, 4, 6]
```

### 11. Find Missing Number
```javascript
function findMissingNumber(arr, n) {
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}
// Test: findMissingNumber([1, 2, 4, 5], 5) // 3
```

### 12. Two Sum
```javascript
function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}
// Test: twoSum([2, 7, 11, 15], 9) // [0, 1]
```

### 13. Valid Parentheses
```javascript
function isValidParentheses(s) {
    const stack = [];
    const pairs = {'(': ')', '[': ']', '{': '}'};
    
    for (let char of s) {
        if (pairs[char]) {
            stack.push(char);
        } else if (Object.values(pairs).includes(char)) {
            if (!stack.length || pairs[stack.pop()] !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
// Test: isValidParentheses("()[]{}") // true
```

### 14. Longest Common Prefix
```javascript
function longestCommonPrefix(strs) {
    if (!strs.length) return '';
    
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (!prefix) return '';
        }
    }
    return prefix;
}
// Test: longestCommonPrefix(["flower","flow","flight"]) // "fl"
```

### 15. Roman to Integer
```javascript
function romanToInt(s) {
    const romanMap = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50,
        'C': 100, 'D': 500, 'M': 1000
    };
    
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        const current = romanMap[s[i]];
        const next = romanMap[s[i + 1]];
        
        if (next && current < next) {
            result -= current;
        } else {
            result += current;
        }
    }
    return result;
}
// Test: romanToInt("MCMXC") // 1990
```

## 🟡 Medium Problems (26-50)

### 16. Fibonacci Sequence
```javascript
function fibonacci(n) {
    if (n <= 1) return n;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}
// Memoized version
const fibonacciMemo = (function() {
    const cache = {};
    return function fib(n) {
        if (n in cache) return cache[n];
        if (n <= 1) return n;
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
    };
})();
// Test: fibonacci(10) // 55
```

### 17. Prime Number Check
```javascript
function isPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}
// Sieve of Eratosthenes for multiple primes
function sieveOfEratosthenes(limit) {
    const primes = new Array(limit + 1).fill(true);
    primes[0] = primes[1] = false;
    
    for (let i = 2; i * i <= limit; i++) {
        if (primes[i]) {
            for (let j = i * i; j <= limit; j += i) {
                primes[j] = false;
            }
        }
    }
    
    return primes.map((isPrime, num) => isPrime ? num : null).filter(num => num !== null);
}
// Test: isPrime(17) // true
```

### 18. Anagram Check
```javascript
function areAnagrams(str1, str2) {
    const normalize = str => str.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
    return normalize(str1) === normalize(str2);
}
// Frequency count approach
const areAnagrams2 = (str1, str2) => {
    if (str1.length !== str2.length) return false;
    
    const freq = {};
    for (let char of str1.toLowerCase()) {
        freq[char] = (freq[char] || 0) + 1;
    }
    
    for (let char of str2.toLowerCase()) {
        if (!freq[char]) return false;
        freq[char]--;
    }
    
    return Object.values(freq).every(count => count === 0);
};
// Test: areAnagrams("listen", "silent") // true
```

### 19. Binary Search
```javascript
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
// Recursive version
const binarySearchRecursive = (arr, target, left = 0, right = arr.length - 1) => {
    if (left > right) return -1;
    
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) return binarySearchRecursive(arr, target, mid + 1, right);
    return binarySearchRecursive(arr, target, left, mid - 1);
};
// Test: binarySearch([1, 3, 5, 7, 9], 5) // 2
```

### 20. Flatten Array
```javascript
function flattenArray(arr) {
    return arr.reduce((flat, item) => 
        Array.isArray(item) ? flat.concat(flattenArray(item)) : flat.concat(item), []
    );
}
// Using built-in flat method
const flattenArray2 = arr => arr.flat(Infinity);
// Iterative approach
const flattenArray3 = arr => {
    const result = [];
    const stack = [...arr];
    
    while (stack.length) {
        const next = stack.pop();
        if (Array.isArray(next)) {
            stack.push(...next);
        } else {
            result.push(next);
        }
    }
    
    return result.reverse();
};
// Test: flattenArray([1, [2, 3], [4, [5, 6]]]) // [1, 2, 3, 4, 5, 6]
```

### 21. Merge Sorted Arrays
```javascript
function mergeSortedArrays(arr1, arr2) {
    const result = [];
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
// Test: mergeSortedArrays([1, 3, 5], [2, 4, 6]) // [1, 2, 3, 4, 5, 6]
```

### 22. Quick Sort Implementation
```javascript
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(x => x < pivot);
    const middle = arr.filter(x => x === pivot);
    const right = arr.filter(x => x > pivot);
    
    return [...quickSort(left), ...middle, ...quickSort(right)];
}
// In-place version
function quickSortInPlace(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        const pi = partition(arr, low, high);
        quickSortInPlace(arr, low, pi - 1);
        quickSortInPlace(arr, pi + 1, high);
    }
    return arr;
}

function partition(arr, low, high) {
    const pivot = arr[high];
    let i = low - 1;
    
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}
// Test: quickSort([3, 6, 8, 10, 1, 2, 1]) // [1, 1, 2, 3, 6, 8, 10]
```

### 23. Longest Substring Without Repeating Characters
```javascript
function lengthOfLongestSubstring(s) {
    const seen = new Set();
    let left = 0, maxLength = 0;
    
    for (let right = 0; right < s.length; right++) {
        while (seen.has(s[right])) {
            seen.delete(s[left]);
            left++;
        }
        seen.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
}
// Test: lengthOfLongestSubstring("abcabcbb") // 3
```

### 24. Group Anagrams
```javascript
function groupAnagrams(strs) {
    const groups = new Map();
    
    for (let str of strs) {
        const key = str.split('').sort().join('');
        if (!groups.has(key)) {
            groups.set(key, []);
        }
        groups.get(key).push(str);
    }
    
    return Array.from(groups.values());
}
// Test: groupAnagrams(["eat","tea","tan","ate","nat","bat"]) 
// [["eat","tea","ate"],["tan","nat"],["bat"]]
```

### 25. Valid Sudoku
```javascript
function isValidSudoku(board) {
    const seen = new Set();
    
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const value = board[i][j];
            if (value !== '.') {
                const row = `row${i}-${value}`;
                const col = `col${j}-${value}`;
                const box = `box${Math.floor(i/3)}-${Math.floor(j/3)}-${value}`;
                
                if (seen.has(row) || seen.has(col) || seen.has(box)) {
                    return false;
                }
                
                seen.add(row);
                seen.add(col);
                seen.add(box);
            }
        }
    }
    
    return true;
}
```

## 🔴 Hard Problems (51-75)

### 26. Debounce Function
```javascript
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}
// Advanced debounce with immediate execution option
function advancedDebounce(func, delay, immediate = false) {
    let timeoutId;
    return function(...args) {
        const callNow = immediate && !timeoutId;
        clearTimeout(timeoutId);
        
        timeoutId = setTimeout(() => {
            timeoutId = null;
            if (!immediate) func.apply(this, args);
        }, delay);
        
        if (callNow) func.apply(this, args);
    };
}
```

### 27. Throttle Function
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
// Advanced throttle with trailing execution
function advancedThrottle(func, limit, options = {}) {
    let timeout, previous = 0;
    
    return function(...args) {
        const now = Date.now();
        if (!previous && options.leading === false) previous = now;
        
        const remaining = limit - (now - previous);
        
        if (remaining <= 0 || remaining > limit) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            func.apply(this, args);
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(() => {
                previous = options.leading === false ? 0 : Date.now();
                timeout = null;
                func.apply(this, args);
            }, remaining);
        }
    };
}
```

### 28. Deep Clone Object
```javascript
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof Array) return obj.map(item => deepClone(item));
    if (obj instanceof RegExp) return new RegExp(obj);
    
    const cloned = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloned[key] = deepClone(obj[key]);
        }
    }
    return cloned;
}
// Handle circular references
function deepCloneWithCircular(obj, visited = new WeakMap()) {
    if (obj === null || typeof obj !== 'object') return obj;
    if (visited.has(obj)) return visited.get(obj);
    
    let cloned;
    if (obj instanceof Date) cloned = new Date(obj);
    else if (obj instanceof Array) cloned = [];
    else if (obj instanceof RegExp) cloned = new RegExp(obj);
    else cloned = {};
    
    visited.set(obj, cloned);
    
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloned[key] = deepCloneWithCircular(obj[key], visited);
        }
    }
    
    return cloned;
}
```

### 29. Custom Promise.all
```javascript
function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            reject(new TypeError('Argument must be an array'));
            return;
        }
        
        if (promises.length === 0) {
            resolve([]);
            return;
        }
        
        const results = [];
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
// Custom Promise.allSettled
function promiseAllSettled(promises) {
    return Promise.all(
        promises.map(promise =>
            Promise.resolve(promise)
                .then(value => ({ status: 'fulfilled', value }))
                .catch(reason => ({ status: 'rejected', reason }))
        )
    );
}
```

### 30. Curry Function
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
// Advanced curry with placeholder support
function advancedCurry(fn, arity = fn.length) {
    const placeholder = Symbol('placeholder');
    
    return function curried(...args) {
        const validArgs = args.slice(0, arity);
        
        if (validArgs.length >= arity && !validArgs.includes(placeholder)) {
            return fn.apply(this, validArgs);
        }
        
        return function(...nextArgs) {
            const newArgs = validArgs.map(arg => 
                arg === placeholder && nextArgs.length ? nextArgs.shift() : arg
            );
            return curried(...newArgs, ...nextArgs);
        };
    };
}
// Usage: const add = curry((a, b, c) => a + b + c);
// add(1)(2)(3) // 6
```

## 🎯 AJAX & jQuery Practice Problems

### 31. Weather App with AJAX
```javascript
class WeatherApp {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.openweathermap.org/data/2.5';
    }
    
    async getCurrentWeather(city) {
        try {
            const response = await fetch(
                `${this.baseUrl}/weather?q=${city}&appid=${this.apiKey}&units=metric`
            );
            
            if (!response.ok) {
                throw new Error(`Weather data not found for ${city}`);
            }
            
            const data = await response.json();
            return this.formatWeatherData(data);
        } catch (error) {
            throw new Error(`Failed to fetch weather: ${error.message}`);
        }
    }
    
    async getForecast(city, days = 5) {
        try {
            const response = await fetch(
                `${this.baseUrl}/forecast?q=${city}&appid=${this.apiKey}&units=metric&cnt=${days * 8}`
            );
            
            const data = await response.json();
            return this.formatForecastData(data);
        } catch (error) {
            throw new Error(`Failed to fetch forecast: ${error.message}`);
        }
    }
    
    formatWeatherData(data) {
        return {
            city: data.name,
            country: data.sys.country,
            temperature: Math.round(data.main.temp),
            description: data.weather[0].description,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            icon: data.weather[0].icon
        };
    }
    
    formatForecastData(data) {
        const dailyForecasts = {};
        
        data.list.forEach(item => {
            const date = new Date(item.dt * 1000).toDateString();
            if (!dailyForecasts[date]) {
                dailyForecasts[date] = {
                    date,
                    temps: [],
                    descriptions: [],
                    icons: []
                };
            }
            
            dailyForecasts[date].temps.push(item.main.temp);
            dailyForecasts[date].descriptions.push(item.weather[0].description);
            dailyForecasts[date].icons.push(item.weather[0].icon);
        });
        
        return Object.values(dailyForecasts).map(day => ({
            date: day.date,
            minTemp: Math.round(Math.min(...day.temps)),
            maxTemp: Math.round(Math.max(...day.temps)),
            description: day.descriptions[0],
            icon: day.icons[0]
        }));
    }
}
```

### 32. Dynamic Content Loader with jQuery
```javascript
$(document).ready(function() {
    class ContentLoader {
        constructor() {
            this.cache = new Map();
            this.loading = new Set();
        }
        
        async loadContent(url, container, options = {}) {
            const $container = $(container);
            
            // Show loading state
            if (options.showLoader !== false) {
                $container.html('<div class="loader">Loading...</div>');
            }
            
            try {
                // Check cache first
                if (this.cache.has(url) && !options.forceReload) {
                    $container.html(this.cache.get(url));
                    return;
                }
                
                // Prevent duplicate requests
                if (this.loading.has(url)) {
                    return;
                }
                
                this.loading.add(url);
                
                const response = await $.ajax({
                    url: url,
                    method: options.method || 'GET',
                    data: options.data || {},
                    dataType: options.dataType || 'html',
                    timeout: options.timeout || 10000
                });
                
                // Cache the response
                this.cache.set(url, response);
                
                // Load content with animation
                if (options.animate !== false) {
                    $container.fadeOut(200, function() {
                        $(this).html(response).fadeIn(200);
                    });
                } else {
                    $container.html(response);
                }
                
                // Trigger custom event
                $container.trigger('contentLoaded', [url, response]);
                
            } catch (error) {
                const errorMessage = options.errorMessage || 'Failed to load content';
                $container.html(`<div class="error">${errorMessage}</div>`);
                console.error('Content loading error:', error);
            } finally {
                this.loading.delete(url);
            }
        }
        
        preloadContent(urls) {
            return Promise.all(
                urls.map(url => 
                    $.ajax({url, method: 'GET'})
                        .then(response => this.cache.set(url, response))
                        .catch(error => console.warn(`Failed to preload ${url}:`, error))
                )
            );
        }
        
        clearCache(url = null) {
            if (url) {
                this.cache.delete(url);
            } else {
                this.cache.clear();
            }
        }
    }
    
    // Usage example
    const contentLoader = new ContentLoader();
    
    // Load content on navigation click
    $('.nav-link').click(function(e) {
        e.preventDefault();
        const url = $(this).attr('href');
        const target = $(this).data('target') || '#main-content';
        
        contentLoader.loadContent(url, target, {
            animate: true,
            showLoader: true
        });
        
        // Update active state
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
    });
    
    // Listen for content loaded event
    $('#main-content').on('contentLoaded', function(event, url, content) {
        console.log(`Content loaded from ${url}`);
        
        // Initialize any plugins for new content
        $(this).find('[data-toggle="tooltip"]').tooltip();
        $(this).find('.carousel').carousel();
    });
});
```

### 33. Real-time Chat Application
```javascript
class ChatApplication {
    constructor(options = {}) {
        this.apiUrl = options.apiUrl || '/api/chat';
        this.userId = options.userId;
        this.userName = options.userName;
        this.pollInterval = options.pollInterval || 2000;
        this.lastMessageId = 0;
        this.isPolling = false;
        
        this.initializeUI();
        this.startPolling();
    }
    
    initializeUI() {
        // Create chat interface
        const chatHTML = `
            <div id="chat-container">
                <div id="chat-messages"></div>
                <div id="chat-input-container">
                    <input type="text" id="chat-input" placeholder="Type a message...">
                    <button id="send-button">Send</button>
                </div>
                <div id="typing-indicator" style="display: none;">
                    <span>Someone is typing...</span>
                </div>
            </div>
        `;
        
        $('body').append(chatHTML);
        
        // Bind events
        $('#send-button').click(() => this.sendMessage());
        $('#chat-input').keypress((e) => {
            if (e.which === 13) {
                this.sendMessage();
            } else {
                this.handleTyping();
            }
        });
    }
    
    async sendMessage() {
        const message = $('#chat-input').val().trim();
        if (!message) return;
        
        try {
            const response = await $.ajax({
                url: `${this.apiUrl}/send`,
                method: 'POST',
                data: JSON.stringify({
                    userId: this.userId,
                    userName: this.userName,
                    message: message,
                    timestamp: new Date().toISOString()
                }),
                contentType: 'application/json'
            });
            
            $('#chat-input').val('');
            this.addMessageToUI(response);
            
        } catch (error) {
            console.error('Failed to send message:', error);
            this.showError('Failed to send message');
        }
    }
    
    async loadMessages() {
        try {
            const response = await $.ajax({
                url: `${this.apiUrl}/messages`,
                method: 'GET',
                data: { since: this.lastMessageId }
            });
            
            if (response.messages && response.messages.length > 0) {
                response.messages.forEach(message => {
                    this.addMessageToUI(message);
                    this.lastMessageId = Math.max(this.lastMessageId, message.id);
                });
                
                this.scrollToBottom();
            }
            
        } catch (error) {
            console.error('Failed to load messages:', error);
        }
    }
    
    addMessageToUI(message) {
        const isOwnMessage = message.userId === this.userId;
        const messageClass = isOwnMessage ? 'own-message' : 'other-message';
        const timestamp = new Date(message.timestamp).toLocaleTimeString();
        
        const messageHTML = `
            <div class="chat-message ${messageClass}" data-message-id="${message.id}">
                <div class="message-header">
                    <span class="user-name">${message.userName}</span>
                    <span class="timestamp">${timestamp}</span>
                </div>
                <div class="message-content">${this.escapeHtml(message.message)}</div>
            </div>
        `;
        
        $('#chat-messages').append(messageHTML);
        
        // Animate new message
        $(`[data-message-id="${message.id}"]`).hide().fadeIn(300);
    }
    
    handleTyping() {
        // Debounced typing indicator
        clearTimeout(this.typingTimeout);
        
        // Send typing indicator
        $.ajax({
            url: `${this.apiUrl}/typing`,
            method: 'POST',
            data: JSON.stringify({
                userId: this.userId,
                userName: this.userName
            }),
            contentType: 'application/json'
        });
        
        this.typingTimeout = setTimeout(() => {
            // Stop typing indicator
            $.ajax({
                url: `${this.apiUrl}/stop-typing`,
                method: 'POST',
                data: JSON.stringify({
                    userId: this.userId
                }),
                contentType: 'application/json'
            });
        }, 1000);
    }
    
    startPolling() {
        if (this.isPolling) return;
        
        this.isPolling = true;
        this.pollMessages();
    }
    
    async pollMessages() {
        if (!this.isPolling) return;
        
        await this.loadMessages();
        
        setTimeout(() => {
            this.pollMessages();
        }, this.pollInterval);
    }
    
    stopPolling() {
        this.isPolling = false;
    }
    
    scrollToBottom() {
        const $messages = $('#chat-messages');
        $messages.scrollTop($messages[0].scrollHeight);
    }
    
    escapeHtml(text) {
        return $('<div>').text(text).html();
    }
    
    showError(message) {
        const errorHTML = `
            <div class="chat-error">
                ${message}
            </div>
        `;
        
        $('#chat-messages').append(errorHTML);
        setTimeout(() => {
            $('.chat-error').fadeOut(300, function() {
                $(this).remove();
            });
        }, 3000);
    }
}

// Initialize chat application
$(document).ready(function() {
    const chat = new ChatApplication({
        apiUrl: '/api/chat',
        userId: 'user123',
        userName: 'John Doe',
        pollInterval: 1000
    });
});
```

## 📊 Practice Schedule & Progress Tracking

### Week 1-2: Easy Problems (1-25)
```javascript
const practiceSchedule = {
    week1: {
        day1: [1, 2, 3, 4, 5],      // Basic operations
        day2: [6, 7, 8, 9, 10],     // String/Array manipulation
        day3: [11, 12, 13, 14, 15], // Algorithm basics
        day4: [16, 17, 18, 19, 20], // Search/Sort
        day5: [21, 22, 23, 24, 25], // Advanced easy
        weekend: "Review and practice"
    },
    week2: {
        day1: [26, 27, 28, 29, 30], // Medium problems start
        day2: [31, 32, 33, 34, 35], // AJAX practice
        day3: [36, 37, 38, 39, 40], // jQuery projects
        day4: [41, 42, 43, 44, 45], // Advanced concepts
        day5: [46, 47, 48, 49, 50], // Hard problems
        weekend: "Build complete projects"
    }
};

// Progress tracking function
function trackProgress(problemNumber, timeSpent, difficulty) {
    const progress = JSON.parse(localStorage.getItem('jsProgress') || '{}');
    
    progress[problemNumber] = {
        completed: true,
        timeSpent: timeSpent,
        difficulty: difficulty,
        completedAt: new Date().toISOString()
    };
    
    localStorage.setItem('jsProgress', JSON.stringify(progress));
    
    // Update progress display
    updateProgressDisplay();
}

function updateProgressDisplay() {
    const progress = JSON.parse(localStorage.getItem('jsProgress') || '{}');
    const completed = Object.keys(progress).length;
    const total = 75; // Total problems
    
    console.log(`Progress: ${completed}/${total} problems completed (${Math.round(completed/total*100)}%)`);
}
```

## 🎯 Testing Your Solutions
```javascript
// Test runner for practice problems
class ProblemTester {
    constructor() {
        this.tests = [];
        this.results = [];
    }
    
    addTest(name, fn, inputs, expected) {
        this.tests.push({ name, fn, inputs, expected });
    }
    
    runTests() {
        console.log('🧪 Running JavaScript Practice Tests...\n');
        
        this.tests.forEach((test, index) => {
            try {
                const startTime = performance.now();
                const result = test.fn(...test.inputs);
                const endTime = performance.now();
                const executionTime = (endTime - startTime).toFixed(2);
                
                const passed = JSON.stringify(result) === JSON.stringify(test.expected);
                
                this.results.push({
                    name: test.name,
                    passed,
                    result,
                    expected: test.expected,
                    executionTime
                });
                
                console.log(`${passed ? '✅' : '❌'} ${test.name}`);
                console.log(`   Result: ${JSON.stringify(result)}`);
                console.log(`   Expected: ${JSON.stringify(test.expected)}`);
                console.log(`   Time: ${executionTime}ms\n`);
                
            } catch (error) {
                console.log(`❌ ${test.name} - Error: ${error.message}\n`);
                this.results.push({
                    name: test.name,
                    passed: false,
                    error: error.message
                });
            }
        });
        
        this.showSummary();
    }
    
    showSummary() {
        const passed = this.results.filter(r => r.passed).length;
        const total = this.results.length;
        
        console.log(`📊 Test Summary: ${passed}/${total} tests passed`);
        console.log(`Success Rate: ${Math.round(passed/total*100)}%`);
    }
}

// Example usage
const tester = new ProblemTester();

// Add tests for your solutions
tester.addTest('Sum Array', sumArray, [[1, 2, 3, 4, 5]], 15);
tester.addTest('Find Max', findMax, [[3, 7, 2, 9, 1]], 9);
tester.addTest('Reverse String', reverseString, ['hello'], 'olleh');
tester.addTest('Is Palindrome', isPalindrome, ['racecar'], true);
tester.addTest('Factorial', factorial, [5], 120);

// Run all tests
tester.runTests();
```

## 🏆 Final Project Challenges

### Challenge 1: Complete Todo Application
Build a full-featured todo app with AJAX persistence, drag-and-drop reordering, categories, due dates, and search functionality.

### Challenge 2: Real-time Dashboard
Create a dashboard that displays real-time data using AJAX polling, WebSockets, charts, and interactive widgets.

### Challenge 3: E-commerce Cart System
Implement a shopping cart with product filtering, AJAX cart updates, checkout process, and payment integration.

**Track your progress:**
```bash
python3 ../New/00_MASTER_TOOLS/track_problem.py
```

**🎯 Master all 75+ problems to become a JavaScript expert!**