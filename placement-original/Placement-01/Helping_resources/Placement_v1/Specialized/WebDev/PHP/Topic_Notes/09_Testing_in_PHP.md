# Testing in PHP

Testing is a crucial part of software development that helps ensure your code works as expected and continues to work as you make changes. This guide covers various testing approaches and tools for PHP applications.

## Introduction to Testing

### Types of Tests

1. **Unit Tests**: Test individual components in isolation
2. **Integration Tests**: Test how components work together
3. **Functional Tests**: Test complete features from a user's perspective
4. **Acceptance Tests**: Test the application as a whole from an end-user perspective

### Testing Pyramid

```
    /\
   /  \
  /    \  E2E/Acceptance Tests (Slow, Brittle, but High Confidence)
 /      \
/        \
----------
\        /
 \      /  Integration Tests (Medium Speed, Medium Confidence)
  \    /
   \  /
    \/
    ||
    ||  Unit Tests (Fast, Stable, but Lower Confidence)
    ||
```

## PHPUnit

PHPUnit is the most widely used testing framework for PHP.

### Installation

```bash
# Install PHPUnit via Composer
composer require --dev phpunit/phpunit

# Or globally
composer global require phpunit/phpunit
```

### Basic Configuration

Create a `phpunit.xml` file in your project root:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<phpunit xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:noNamespaceSchemaLocation="https://schema.phpunit.de/9.5/phpunit.xsd"
         bootstrap="vendor/autoload.php"
         colors="true">
    <testsuites>
        <testsuite name="Unit">
            <directory>tests/Unit</directory>
        </testsuite>
        <testsuite name="Feature">
            <directory>tests/Feature</directory>
        </testsuite>
    </testsuites>
    <coverage>
        <include>
            <directory suffix=".php">src</directory>
        </include>
    </coverage>
    <php>
        <env name="APP_ENV" value="testing"/>
    </php>
</phpunit>
```

### Writing Unit Tests

```php
<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;
use App\Calculator;

class CalculatorTest extends TestCase
{
    public function testAddition()
    {
        $calculator = new Calculator();
        $result = $calculator->add(2, 3);
        $this->assertEquals(5, $result);
    }
    
    public function testSubtraction()
    {
        $calculator = new Calculator();
        $result = $calculator->subtract(5, 2);
        $this->assertEquals(3, $result);
    }
}
```

### Test Methods

Test methods should:
- Be public
- Start with "test" or use the `@test` annotation
- Describe what they're testing

```php
public function testUserCanBeCreated()
{
    // Test code
}

/**
 * @test
 */
public function user_can_be_created()
{
    // Test code
}
```

### Assertions

PHPUnit provides many assertion methods:

```php
// Basic assertions
$this->assertTrue($value);
$this->assertFalse($value);
$this->assertEquals($expected, $actual);
$this->assertSame($expected, $actual); // Strict comparison (===)
$this->assertNotEquals($expected, $actual);
$this->assertNotSame($expected, $actual);

// Null/empty assertions
$this->assertNull($value);
$this->assertNotNull($value);
$this->assertEmpty($value);
$this->assertNotEmpty($value);

// Array assertions
$this->assertCount($expectedCount, $array);
$this->assertContains($needle, $haystack);
$this->assertArrayHasKey($key, $array);

// String assertions
$this->assertStringContainsString($needle, $haystack);
$this->assertStringStartsWith($prefix, $string);
$this->assertStringEndsWith($suffix, $string);
$this->assertMatchesRegularExpression($pattern, $string);

// File/directory assertions
$this->assertFileExists($path);
$this->assertDirectoryExists($path);

// Object assertions
$this->assertInstanceOf(ExpectedClass::class, $object);
$this->assertObjectHasAttribute($attributeName, $object);

// Exception assertions
$this->expectException(ExceptionClass::class);
$this->expectExceptionMessage('Error message');
$this->expectExceptionCode(404);
```

### Test Setup and Teardown

```php
<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;
use App\Models\User;

class UserTest extends TestCase
{
    protected $user;
    
    // Runs before each test
    protected function setUp(): void
    {
        parent::setUp();
        $this->user = new User('John Doe', 'john@example.com');
    }
    
    // Runs after each test
    protected function tearDown(): void
    {
        $this->user = null;
        parent::tearDown();
    }
    
    // Runs once before all tests in the class
    public static function setUpBeforeClass(): void
    {
        // Setup shared resources
    }
    
    // Runs once after all tests in the class
    public static function tearDownAfterClass(): void
    {
        // Clean up shared resources
    }
    
    public function testUserHasName()
    {
        $this->assertEquals('John Doe', $this->user->getName());
    }
    
    public function testUserHasEmail()
    {
        $this->assertEquals('john@example.com', $this->user->getEmail());
    }
}
```

### Data Providers

Data providers allow you to run the same test with different sets of data:

```php
<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;
use App\Calculator;

class CalculatorTest extends TestCase
{
    /**
     * @dataProvider additionProvider
     */
    public function testAddition($a, $b, $expected)
    {
        $calculator = new Calculator();
        $result = $calculator->add($a, $b);
        $this->assertEquals($expected, $result);
    }
    
    public function additionProvider()
    {
        return [
            [1, 1, 2],
            [0, 0, 0],
            [-1, 1, 0],
            [1.5, 2.5, 4],
        ];
    }
}
```

### Test Doubles (Mocks, Stubs, Spies)

Test doubles allow you to isolate the code being tested by replacing dependencies with objects that simulate the behavior of real dependencies.

#### Stubs

Stubs provide canned answers to calls made during the test:

```php
public function testUserRepositoryFindById()
{
    // Create a stub for the UserRepository interface
    $userRepository = $this->createStub(UserRepository::class);
    
    // Configure the stub
    $userRepository->method('findById')
                  ->willReturn(new User(1, 'John Doe'));
    
    // Use the stub
    $userService = new UserService($userRepository);
    $user = $userService->getUserById(1);
    
    $this->assertEquals('John Doe', $user->getName());
}
```

#### Mocks

Mocks are objects that expect specific method calls and can throw exceptions when unexpected calls are made:

```php
public function testEmailIsSentOnUserRegistration()
{
    // Create a mock for the Mailer class
    $mailer = $this->createMock(Mailer::class);
    
    // Set up expectations
    $mailer->expects($this->once())
           ->method('sendWelcomeEmail')
           ->with($this->equalTo('john@example.com'));
    
    // Use the mock
    $userRegistration = new UserRegistration($mailer);
    $userRegistration->register('John Doe', 'john@example.com');
}
```

#### Method Call Expectations

```php
// Expect a method to be called exactly once
$mock->expects($this->once())->method('someMethod');

// Expect a method to be called exactly twice
$mock->expects($this->exactly(2))->method('someMethod');

// Expect a method to never be called
$mock->expects($this->never())->method('someMethod');

// Expect a method to be called at least once
$mock->expects($this->atLeastOnce())->method('someMethod');

// Expect a method to be called with specific parameters
$mock->expects($this->once())
     ->method('someMethod')
     ->with($this->equalTo('expected value'));
```

### Testing Exceptions

```php
public function testDivisionByZeroThrowsException()
{
    $calculator = new Calculator();
    
    $this->expectException(\InvalidArgumentException::class);
    $this->expectExceptionMessage('Division by zero');
    
    $calculator->divide(10, 0);
}
```

### Running Tests

```bash
# Run all tests
./vendor/bin/phpunit

# Run a specific test file
./vendor/bin/phpunit tests/Unit/CalculatorTest.php

# Run a specific test method
./vendor/bin/phpunit --filter testAddition

# Run tests with coverage report
./vendor/bin/phpunit --coverage-html coverage
```

## Pest PHP

Pest is a testing framework built on top of PHPUnit with a focus on simplicity and readability.

### Installation

```bash
composer require --dev pestphp/pest
./vendor/bin/pest --init
```

### Writing Tests with Pest

```php
<?php

// tests/Unit/CalculatorTest.php

test('addition works', function () {
    $calculator = new Calculator();
    $result = $calculator->add(2, 3);
    expect($result)->toBe(5);
});

test('subtraction works', function () {
    $calculator = new Calculator();
    $result = $calculator->subtract(5, 2);
    expect($result)->toBe(3);
});

// Using datasets
test('addition works with different numbers', function ($a, $b, $expected) {
    $calculator = new Calculator();
    $result = $calculator->add($a, $b);
    expect($result)->toBe($expected);
})->with([
    [1, 1, 2],
    [0, 0, 0],
    [-1, 1, 0],
    [1.5, 2.5, 4],
]);
```

### Pest Expectations

```php
expect($value)->toBe(5);                // Strict equality (===)
expect($value)->toEqual(5);             // Loose equality (==)
expect($value)->toBeTrue();             // Is true
expect($value)->toBeFalse();            // Is false
expect($value)->toBeNull();             // Is null
expect($value)->toBeEmpty();            // Is empty
expect($array)->toHaveCount(3);         // Count is 3
expect($array)->toContain('value');     // Contains value
expect($array)->toHaveKey('key');       // Has key
expect($string)->toContain('substring'); // Contains substring
expect($string)->toStartWith('prefix'); // Starts with prefix
expect($string)->toEndWith('suffix');   // Ends with suffix
expect($string)->toMatch('/pattern/');  // Matches regex
expect($object)->toBeInstanceOf(Class::class); // Is instance of class
expect($callable)->toThrow(Exception::class); // Throws exception
```

### Pest Hooks

```php
// tests/Pest.php

uses()->beforeEach(function () {
    // Setup before each test
})->afterEach(function () {
    // Teardown after each test
})->in('Unit');

// Group-specific setup
uses()->group('api')->beforeEach(function () {
    // Setup for API tests
});
```

## Integration Testing

Integration tests verify that different parts of your application work together correctly.

### Database Testing

```php
<?php

namespace Tests\Integration;

use PHPUnit\Framework\TestCase;
use App\Models\User;
use App\Repositories\UserRepository;

class UserRepositoryTest extends TestCase
{
    protected $pdo;
    protected $repository;
    
    protected function setUp(): void
    {
        parent::setUp();
        
        // Setup test database
        $this->pdo = new \PDO('sqlite::memory:');
        $this->pdo->exec('
            CREATE TABLE users (
                id INTEGER PRIMARY KEY,
                name TEXT,
                email TEXT UNIQUE
            )
        ');
        
        $this->repository = new UserRepository($this->pdo);
    }
    
    protected function tearDown(): void
    {
        $this->pdo = null;
        parent::tearDown();
    }
    
    public function testCreateUser()
    {
        $user = new User(null, 'John Doe', 'john@example.com');
        $createdUser = $this->repository->create($user);
        
        $this->assertNotNull($createdUser->getId());
        $this->assertEquals('John Doe', $createdUser->getName());
        $this->assertEquals('john@example.com', $createdUser->getEmail());
        
        // Verify the user was actually saved to the database
        $stmt = $this->pdo->prepare('SELECT * FROM users WHERE id = ?');
        $stmt->execute([$createdUser->getId()]);
        $userData = $stmt->fetch(\PDO::FETCH_ASSOC);
        
        $this->assertEquals('John Doe', $userData['name']);
        $this->assertEquals('john@example.com', $userData['email']);
    }
}
```

### API Testing

```php
<?php

namespace Tests\Integration;

use PHPUnit\Framework\TestCase;
use GuzzleHttp\Client;

class ApiTest extends TestCase
{
    protected $client;
    
    protected function setUp(): void
    {
        parent::setUp();
        $this->client = new Client([
            'base_uri' => 'http://api.example.com',
            'http_errors' => false,
        ]);
    }
    
    public function testGetUsers()
    {
        $response = $this->client->get('/users');
        
        $this->assertEquals(200, $response->getStatusCode());
        
        $data = json_decode($response->getBody(), true);
        $this->assertIsArray($data);
        $this->assertArrayHasKey('data', $data);
    }
    
    public function testCreateUser()
    {
        $response = $this->client->post('/users', [
            'json' => [
                'name' => 'John Doe',
                'email' => 'john@example.com',
                'password' => 'password123',
            ],
        ]);
        
        $this->assertEquals(201, $response->getStatusCode());
        
        $data = json_decode($response->getBody(), true);
        $this->assertArrayHasKey('id', $data);
        $this->assertEquals('John Doe', $data['name']);
    }
}
```

## Functional Testing

Functional tests verify that your application works as expected from a user's perspective.

### Browser Testing with PHP-Browser

```php
<?php

namespace Tests\Functional;

use PHPUnit\Framework\TestCase;
use Buzz\Browser;
use Buzz\Client\FileGetContents;
use Nyholm\Psr7\Factory\Psr17Factory;

class WebsiteTest extends TestCase
{
    protected $browser;
    
    protected function setUp(): void
    {
        parent::setUp();
        
        $client = new FileGetContents(new Psr17Factory());
        $this->browser = new Browser($client, new Psr17Factory());
    }
    
    public function testHomePage()
    {
        $response = $this->browser->get('https://example.com');
        
        $this->assertEquals(200, $response->getStatusCode());
        $this->assertStringContainsString('<title>Example Domain</title>', $response->getBody()->__toString());
    }
}
```

### Acceptance Testing with Codeception

Codeception is a full-stack testing framework that includes tools for unit, functional, and acceptance testing.

#### Installation

```bash
composer require --dev codeception/codeception
./vendor/bin/codecept bootstrap
```

#### Writing Acceptance Tests

```php
<?php

// tests/Acceptance/LoginCest.php

class LoginCest
{
    public function _before(AcceptanceTester $I)
    {
        $I->amOnPage('/login');
    }

    public function loginSuccessfully(AcceptanceTester $I)
    {
        $I->fillField('email', 'user@example.com');
        $I->fillField('password', 'password');
        $I->click('Login');
        $I->see('Welcome back');
        $I->seeCurrentUrlEquals('/dashboard');
    }

    public function loginWithInvalidCredentials(AcceptanceTester $I)
    {
        $I->fillField('email', 'user@example.com');
        $I->fillField('password', 'wrong-password');
        $I->click('Login');
        $I->see('These credentials do not match our records');
        $I->seeCurrentUrlEquals('/login');
    }
}
```

## Test-Driven Development (TDD)

Test-Driven Development is a software development process that relies on the repetition of a very short development cycle:

1. Write a failing test that defines a function or improvements
2. Write the minimum amount of code to make the test pass
3. Refactor the code to meet standards

### TDD Example

```php
<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;
use App\StringCalculator;

class StringCalculatorTest extends TestCase
{
    public function testEmptyStringReturnsZero()
    {
        $calculator = new StringCalculator();
        $this->assertEquals(0, $calculator->add(''));
    }
}
```

Now implement the class to make the test pass:

```php
<?php

namespace App;

class StringCalculator
{
    public function add(string $numbers): int
    {
        return 0;
    }
}
```

Add more tests and implement the functionality:

```php
public function testSingleNumberReturnsValue()
{
    $calculator = new StringCalculator();
    $this->assertEquals(1, $calculator->add('1'));
}

public function testTwoNumbersCommaDelimitedReturnsSum()
{
    $calculator = new StringCalculator();
    $this->assertEquals(3, $calculator->add('1,2'));
}
```

Update the implementation:

```php
<?php

namespace App;

class StringCalculator
{
    public function add(string $numbers): int
    {
        if (empty($numbers)) {
            return 0;
        }
        
        $values = explode(',', $numbers);
        return array_sum($values);
    }
}
```

## Behavior-Driven Development (BDD)

BDD is an extension of TDD that emphasizes collaboration between developers, QA, and non-technical stakeholders.

### Behat

Behat is a PHP framework for BDD.

#### Installation

```bash
composer require --dev behat/behat
./vendor/bin/behat --init
```

#### Writing Feature Files

```gherkin
# features/login.feature
Feature: User login
  In order to access my account
  As a registered user
  I need to be able to log in

  Scenario: Successful login
    Given I am on the login page
    When I fill in "email" with "user@example.com"
    And I fill in "password" with "password"
    And I press "Login"
    Then I should see "Welcome back"
    And I should be on the dashboard page

  Scenario: Failed login
    Given I am on the login page
    When I fill in "email" with "user@example.com"
    And I fill in "password" with "wrong-password"
    And I press "Login"
    Then I should see "These credentials do not match our records"
    And I should be on the login page
```

#### Implementing Step Definitions

```php
<?php

// features/bootstrap/FeatureContext.php

use Behat\Behat\Context\Context;
use Behat\MinkExtension\Context\MinkContext;

class FeatureContext extends MinkContext implements Context
{
    /**
     * @Given I am on the login page
     */
    public function iAmOnTheLoginPage()
    {
        $this->visit('/login');
    }
    
    /**
     * @Then I should be on the dashboard page
     */
    public function iShouldBeOnTheDashboardPage()
    {
        $this->assertPageAddress('/dashboard');
    }
}
```

## Code Coverage

Code coverage measures how much of your code is executed during tests.

### Generating Coverage Reports with PHPUnit

```bash
# Generate HTML coverage report
./vendor/bin/phpunit --coverage-html coverage

# Generate text coverage report
./vendor/bin/phpunit --coverage-text

# Generate Clover XML coverage report
./vendor/bin/phpunit --coverage-clover coverage.xml
```

### Xdebug Configuration

To generate code coverage reports, you need Xdebug installed and configured:

```ini
; php.ini
[xdebug]
xdebug.mode=coverage
```

## Continuous Integration

Continuous Integration (CI) is the practice of automating the integration of code changes from multiple contributors into a single software project.

### GitHub Actions Example

```yaml
# .github/workflows/php.yml
name: PHP Tests

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2

    - name: Setup PHP
      uses: shivammathur/setup-php@v2
      with:
        php-version: '8.1'
        extensions: mbstring, intl, pdo_sqlite
        coverage: xdebug

    - name: Validate composer.json and composer.lock
      run: composer validate --strict

    - name: Cache Composer packages
      id: composer-cache
      uses: actions/cache@v2
      with:
        path: vendor
        key: ${{ runner.os }}-php-${{ hashFiles('**/composer.lock') }}
        restore-keys: |
          ${{ runner.os }}-php-

    - name: Install dependencies
      run: composer install --prefer-dist --no-progress

    - name: Run test suite
      run: vendor/bin/phpunit --coverage-clover coverage.xml

    - name: Upload coverage to Codecov
      uses: codecov/codecov-action@v1
      with:
        file: ./coverage.xml
```

## Best Practices

1. **Write testable code**: Small, focused functions with clear responsibilities
2. **Test behavior, not implementation**: Focus on what the code does, not how it does it
3. **Follow the AAA pattern**: Arrange, Act, Assert
4. **Use descriptive test names**: Clearly describe what is being tested
5. **Keep tests independent**: Tests should not depend on each other
6. **Test edge cases**: Null values, empty strings, boundary conditions
7. **Avoid test duplication**: Use data providers for similar tests
8. **Mock external dependencies**: Don't rely on external services in unit tests
9. **Aim for high coverage**: But don't sacrifice test quality for coverage
10. **Run tests frequently**: Ideally on every code change

## References

- [PHPUnit Documentation](https://phpunit.de/documentation.html)
- [Pest PHP Documentation](https://pestphp.com/docs)
- [Codeception Documentation](https://codeception.com/docs)
- [Behat Documentation](https://docs.behat.org/en/latest/)
- [PHP Testing with Spatie](https://spatie.be/courses/testing-php-packages)