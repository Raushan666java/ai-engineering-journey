# 🏛️ JavaScript Object-Oriented Programming

## Constructor Functions
```javascript
// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding methods to prototype
Person.prototype.greet = function() {
    return `Hello, I'm ${this.name}`;
};

Person.prototype.getAge = function() {
    return this.age;
};

// Creating instances
let john = new Person('John', 30);
let jane = new Person('Jane', 25);

console.log(john.greet()); // "Hello, I'm John"
```

## Prototypes and Inheritance
```javascript
// Prototype chain
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    return `${this.name} makes a sound`;
};

function Dog(name, breed) {
    Animal.call(this, name); // Call parent constructor
    this.breed = breed;
}

// Set up inheritance
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Add Dog-specific methods
Dog.prototype.bark = function() {
    return `${this.name} barks!`;
};

// Override parent method
Dog.prototype.speak = function() {
    return `${this.name} barks loudly!`;
};

let dog = new Dog('Buddy', 'Golden Retriever');
console.log(dog.speak()); // "Buddy barks loudly!"
```

## ES6 Classes
```javascript
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    
    speak() {
        return `${this.name} makes a sound`;
    }
    
    static getKingdom() {
        return 'Animalia';
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name, 'Canine');
        this.breed = breed;
    }
    
    speak() {
        return `${this.name} barks!`;
    }
    
    wagTail() {
        return `${this.name} wags tail happily!`;
    }
}

let dog = new Dog('Buddy', 'Labrador');
console.log(dog.speak());    // "Buddy barks!"
console.log(Animal.getKingdom()); // "Animalia"
```

## Encapsulation
```javascript
// Private variables using closures
function BankAccount(initialBalance) {
    let balance = initialBalance;
    
    return {
        deposit: function(amount) {
            if (amount > 0) {
                balance += amount;
                return balance;
            }
        },
        withdraw: function(amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                return balance;
            }
        },
        getBalance: function() {
            return balance;
        }
    };
}

let account = BankAccount(1000);
console.log(account.getBalance()); // 1000

// Private fields in ES2022
class ModernBankAccount {
    #balance;
    
    constructor(initialBalance) {
        this.#balance = initialBalance;
    }
    
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }
    
    getBalance() {
        return this.#balance;
    }
}
```

## Polymorphism
```javascript
class Shape {
    area() {
        throw new Error('Area method must be implemented');
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    
    area() {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    
    area() {
        return Math.PI * this.radius * this.radius;
    }
}

// Polymorphic behavior
let shapes = [
    new Rectangle(5, 10),
    new Circle(3),
    new Rectangle(8, 6)
];

shapes.forEach(shape => {
    console.log(`Area: ${shape.area()}`);
});
```

## Abstract Classes (Simulation)
```javascript
class AbstractVehicle {
    constructor(brand) {
        if (this.constructor === AbstractVehicle) {
            throw new Error('Cannot instantiate abstract class');
        }
        this.brand = brand;
    }
    
    // Abstract method
    start() {
        throw new Error('start() method must be implemented');
    }
    
    // Concrete method
    getBrand() {
        return this.brand;
    }
}

class Car extends AbstractVehicle {
    constructor(brand, model) {
        super(brand);
        this.model = model;
    }
    
    start() {
        return `${this.brand} ${this.model} engine started`;
    }
}

class Motorcycle extends AbstractVehicle {
    constructor(brand, type) {
        super(brand);
        this.type = type;
    }
    
    start() {
        return `${this.brand} ${this.type} bike started`;
    }
}
```

## Mixins
```javascript
// Mixin pattern
let CanFly = {
    fly() {
        return `${this.name} is flying`;
    }
};

let CanSwim = {
    swim() {
        return `${this.name} is swimming`;
    }
};

// Apply mixins to class
class Bird {
    constructor(name) {
        this.name = name;
    }
}

Object.assign(Bird.prototype, CanFly);

class Duck extends Bird {
    constructor(name) {
        super(name);
    }
}

Object.assign(Duck.prototype, CanSwim);

let duck = new Duck('Donald');
console.log(duck.fly());  // "Donald is flying"
console.log(duck.swim()); // "Donald is swimming"
```

## Design Patterns

### Singleton Pattern
```javascript
class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        Singleton.instance = this;
    }
    
    getData() {
        return 'Singleton data';
    }
}

let instance1 = new Singleton();
let instance2 = new Singleton();
console.log(instance1 === instance2); // true
```

### Factory Pattern
```javascript
class VehicleFactory {
    static createVehicle(type, brand) {
        switch (type) {
            case 'car':
                return new Car(brand);
            case 'motorcycle':
                return new Motorcycle(brand);
            default:
                throw new Error('Unknown vehicle type');
        }
    }
}

let car = VehicleFactory.createVehicle('car', 'Toyota');
let bike = VehicleFactory.createVehicle('motorcycle', 'Honda');
```

### Observer Pattern
```javascript
class Subject {
    constructor() {
        this.observers = [];
    }
    
    addObserver(observer) {
        this.observers.push(observer);
    }
    
    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
    
    notify(data) {
        this.observers.forEach(observer => observer.update(data));
    }
}

class Observer {
    constructor(name) {
        this.name = name;
    }
    
    update(data) {
        console.log(`${this.name} received: ${data}`);
    }
}

let subject = new Subject();
let observer1 = new Observer('Observer 1');
let observer2 = new Observer('Observer 2');

subject.addObserver(observer1);
subject.addObserver(observer2);
subject.notify('Hello Observers!');
```