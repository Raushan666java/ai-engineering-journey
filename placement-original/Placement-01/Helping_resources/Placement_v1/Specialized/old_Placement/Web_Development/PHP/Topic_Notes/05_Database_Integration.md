# Database Integration in PHP

PHP offers several ways to interact with databases, with the most common being MySQLi and PDO (PHP Data Objects). This guide covers how to connect to databases and perform CRUD operations using both approaches.

## Database Connection Methods

### MySQLi (Object-Oriented)

MySQLi (MySQL Improved) is a MySQL-specific extension that provides an object-oriented interface.

```php
<?php
// Connect to database
$mysqli = new mysqli('localhost', 'username', 'password', 'database');

// Check connection
if ($mysqli->connect_error) {
    die('Connection failed: ' . $mysqli->connect_error);
}

echo "Connected successfully";

// Close connection
$mysqli->close();
?>
```

### MySQLi (Procedural)

MySQLi also provides a procedural interface for those who prefer that style.

```php
<?php
// Connect to database
$conn = mysqli_connect('localhost', 'username', 'password', 'database');

// Check connection
if (!$conn) {
    die('Connection failed: ' . mysqli_connect_error());
}

echo "Connected successfully";

// Close connection
mysqli_close($conn);
?>
```

### PDO (PHP Data Objects)

PDO provides a database-agnostic interface that works with multiple database systems.

```php
<?php
try {
    // Connect to database
    $pdo = new PDO('mysql:host=localhost;dbname=database', 'username', 'password');
    
    // Set error mode
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    echo "Connected successfully";
    
    // Close connection (optional, PHP closes it automatically)
    $pdo = null;
} catch (PDOException $e) {
    die('Connection failed: ' . $e->getMessage());
}
?>
```

### Connection Comparison

| Feature | MySQLi | PDO |
|---------|--------|-----|
| Database support | MySQL only | Multiple databases (MySQL, PostgreSQL, SQLite, etc.) |
| API | Procedural & OO | Object-oriented only |
| Named parameters | No | Yes |
| Object mapping | No | Yes |
| Prepared statements | Yes | Yes |
| Error handling | Errors/Warnings | Exception-based |
| Connection pooling | No | No |

## CRUD Operations

### Create (INSERT)

#### MySQLi (Object-Oriented)

```php
<?php
// Simple insert
$sql = "INSERT INTO users (name, email, password) VALUES ('John', 'john@example.com', 'password123')";

if ($mysqli->query($sql) === TRUE) {
    echo "Record created successfully";
    $last_id = $mysqli->insert_id;
} else {
    echo "Error: " . $sql . "<br>" . $mysqli->error;
}

// Prepared statement
$stmt = $mysqli->prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $name, $email, $password);

$name = "John";
$email = "john@example.com";
$password = password_hash("password123", PASSWORD_DEFAULT);

$stmt->execute();
$last_id = $mysqli->insert_id;
$stmt->close();
?>
```

#### PDO

```php
<?php
// Simple insert
$sql = "INSERT INTO users (name, email, password) VALUES ('John', 'john@example.com', 'password123')";
$count = $pdo->exec($sql);
$last_id = $pdo->lastInsertId();

// Prepared statement with named parameters
$stmt = $pdo->prepare("INSERT INTO users (name, email, password) VALUES (:name, :email, :password)");

$stmt->bindParam(':name', $name);
$stmt->bindParam(':email', $email);
$stmt->bindParam(':password', $password);

$name = "John";
$email = "john@example.com";
$password = password_hash("password123", PASSWORD_DEFAULT);

$stmt->execute();
$last_id = $pdo->lastInsertId();

// Alternative with array
$stmt = $pdo->prepare("INSERT INTO users (name, email, password) VALUES (:name, :email, :password)");
$stmt->execute([
    ':name' => 'John',
    ':email' => 'john@example.com',
    ':password' => password_hash('password123', PASSWORD_DEFAULT)
]);
?>
```

### Read (SELECT)

#### MySQLi (Object-Oriented)

```php
<?php
// Simple query
$sql = "SELECT id, name, email FROM users";
$result = $mysqli->query($sql);

if ($result->num_rows > 0) {
    // Output data of each row
    while($row = $result->fetch_assoc()) {
        echo "ID: " . $row["id"] . " - Name: " . $row["name"] . " - Email: " . $row["email"] . "<br>";
    }
} else {
    echo "0 results";
}

// Prepared statement
$stmt = $mysqli->prepare("SELECT id, name, email FROM users WHERE id = ?");
$stmt->bind_param("i", $id);

$id = 1;
$stmt->execute();

$result = $stmt->get_result();
$user = $result->fetch_assoc();

$stmt->close();
?>
```

#### PDO

```php
<?php
// Simple query
$stmt = $pdo->query("SELECT id, name, email FROM users");
while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    echo "ID: " . $row["id"] . " - Name: " . $row["name"] . " - Email: " . $row["email"] . "<br>";
}

// Prepared statement
$stmt = $pdo->prepare("SELECT id, name, email FROM users WHERE id = :id");
$stmt->execute(['id' => 1]);
$user = $stmt->fetch(PDO::FETCH_ASSOC);

// Fetch modes
$stmt = $pdo->query("SELECT id, name, email FROM users");

// Associative array
$users = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Numeric array
$users = $stmt->fetchAll(PDO::FETCH_NUM);

// Both
$users = $stmt->fetchAll(PDO::FETCH_BOTH);

// Object
$users = $stmt->fetchAll(PDO::FETCH_OBJ);
echo $users[0]->name;

// Into class
class User {}
$users = $stmt->fetchAll(PDO::FETCH_CLASS, 'User');
?>
```

### Update (UPDATE)

#### MySQLi (Object-Oriented)

```php
<?php
// Simple update
$sql = "UPDATE users SET name='Jane', email='jane@example.com' WHERE id=1";

if ($mysqli->query($sql) === TRUE) {
    echo "Record updated successfully";
    $affected_rows = $mysqli->affected_rows;
} else {
    echo "Error updating record: " . $mysqli->error;
}

// Prepared statement
$stmt = $mysqli->prepare("UPDATE users SET name=?, email=? WHERE id=?");
$stmt->bind_param("ssi", $name, $email, $id);

$name = "Jane";
$email = "jane@example.com";
$id = 1;

$stmt->execute();
$affected_rows = $mysqli->affected_rows;
$stmt->close();
?>
```

#### PDO

```php
<?php
// Simple update
$sql = "UPDATE users SET name='Jane', email='jane@example.com' WHERE id=1";
$count = $pdo->exec($sql);

// Prepared statement
$stmt = $pdo->prepare("UPDATE users SET name=:name, email=:email WHERE id=:id");
$stmt->execute([
    ':name' => 'Jane',
    ':email' => 'jane@example.com',
    ':id' => 1
]);
$affected_rows = $stmt->rowCount();
?>
```

### Delete (DELETE)

#### MySQLi (Object-Oriented)

```php
<?php
// Simple delete
$sql = "DELETE FROM users WHERE id=1";

if ($mysqli->query($sql) === TRUE) {
    echo "Record deleted successfully";
    $affected_rows = $mysqli->affected_rows;
} else {
    echo "Error deleting record: " . $mysqli->error;
}

// Prepared statement
$stmt = $mysqli->prepare("DELETE FROM users WHERE id=?");
$stmt->bind_param("i", $id);

$id = 1;

$stmt->execute();
$affected_rows = $mysqli->affected_rows;
$stmt->close();
?>
```

#### PDO

```php
<?php
// Simple delete
$sql = "DELETE FROM users WHERE id=1";
$count = $pdo->exec($sql);

// Prepared statement
$stmt = $pdo->prepare("DELETE FROM users WHERE id=:id");
$stmt->execute([':id' => 1]);
$affected_rows = $stmt->rowCount();
?>
```

## Prepared Statements

Prepared statements help prevent SQL injection by separating SQL logic from data.

### Why Use Prepared Statements?

- **Security**: Prevents SQL injection attacks
- **Performance**: Can be reused for multiple executions
- **Convenience**: Handles data type conversion

### MySQLi Prepared Statement Types

- `i` - integer
- `d` - double
- `s` - string
- `b` - blob

```php
<?php
// Multiple parameters
$stmt = $mysqli->prepare("SELECT * FROM users WHERE name=? AND status=?");
$stmt->bind_param("si", $name, $status);

$name = "John";
$status = 1;
$stmt->execute();
?>
```

### PDO Parameter Binding

```php
<?php
// Named parameters
$stmt = $pdo->prepare("SELECT * FROM users WHERE name=:name AND status=:status");

// Method 1: bindParam
$stmt->bindParam(':name', $name);
$stmt->bindParam(':status', $status);
$name = "John";
$status = 1;
$stmt->execute();

// Method 2: bindValue
$stmt->bindValue(':name', "John");
$stmt->bindValue(':status', 1, PDO::PARAM_INT);
$stmt->execute();

// Method 3: execute with array
$stmt->execute([
    ':name' => "John",
    ':status' => 1
]);
?>
```

## Transactions

Transactions allow you to execute multiple operations as a single unit, ensuring data integrity.

### MySQLi Transactions

```php
<?php
// Start transaction
$mysqli->begin_transaction();

try {
    $mysqli->query("INSERT INTO accounts (user_id, balance) VALUES (1, 1000)");
    $mysqli->query("UPDATE users SET account_count = account_count + 1 WHERE id = 1");
    
    // Commit transaction
    $mysqli->commit();
    echo "Transaction completed successfully";
} catch (Exception $e) {
    // Rollback transaction on error
    $mysqli->rollback();
    echo "Transaction failed: " . $e->getMessage();
}
?>
```

### PDO Transactions

```php
<?php
try {
    // Start transaction
    $pdo->beginTransaction();
    
    $pdo->exec("INSERT INTO accounts (user_id, balance) VALUES (1, 1000)");
    $pdo->exec("UPDATE users SET account_count = account_count + 1 WHERE id = 1");
    
    // Commit transaction
    $pdo->commit();
    echo "Transaction completed successfully";
} catch (Exception $e) {
    // Rollback transaction on error
    $pdo->rollBack();
    echo "Transaction failed: " . $e->getMessage();
}
?>
```

## Error Handling

### MySQLi Error Handling

```php
<?php
// Check for connection errors
if ($mysqli->connect_error) {
    die('Connection failed: ' . $mysqli->connect_error);
}

// Check for query errors
if (!$result = $mysqli->query($sql)) {
    die('Query failed: ' . $mysqli->error);
}

// Get error information
echo "Error code: " . $mysqli->errno;
echo "Error message: " . $mysqli->error;
?>
```

### PDO Error Handling

```php
<?php
// Set error mode in constructor
$pdo = new PDO('mysql:host=localhost;dbname=database', 'username', 'password', [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
]);

// Or set after connection
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

// Using try-catch
try {
    $stmt = $pdo->prepare("SELECT * FROM non_existent_table");
    $stmt->execute();
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
    echo "SQL State: " . $e->getCode();
}
?>
```

## Database Design Patterns

### Data Access Object (DAO)

The DAO pattern separates database access logic from business logic.

```php
<?php
class UserDAO {
    private $pdo;
    
    public function __construct(PDO $pdo) {
        $this->pdo = $pdo;
    }
    
    public function findById($id) {
        $stmt = $this->pdo->prepare("SELECT * FROM users WHERE id = :id");
        $stmt->execute([':id' => $id]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }
    
    public function findAll() {
        $stmt = $this->pdo->query("SELECT * FROM users");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
    
    public function create($data) {
        $stmt = $this->pdo->prepare(
            "INSERT INTO users (name, email, password) VALUES (:name, :email, :password)"
        );
        $stmt->execute([
            ':name' => $data['name'],
            ':email' => $data['email'],
            ':password' => password_hash($data['password'], PASSWORD_DEFAULT)
        ]);
        return $this->pdo->lastInsertId();
    }
    
    public function update($id, $data) {
        $stmt = $this->pdo->prepare(
            "UPDATE users SET name = :name, email = :email WHERE id = :id"
        );
        $stmt->execute([
            ':name' => $data['name'],
            ':email' => $data['email'],
            ':id' => $id
        ]);
        return $stmt->rowCount();
    }
    
    public function delete($id) {
        $stmt = $this->pdo->prepare("DELETE FROM users WHERE id = :id");
        $stmt->execute([':id' => $id]);
        return $stmt->rowCount();
    }
}

// Usage
$pdo = new PDO('mysql:host=localhost;dbname=database', 'username', 'password');
$userDAO = new UserDAO($pdo);

$user = $userDAO->findById(1);
$users = $userDAO->findAll();
$newId = $userDAO->create(['name' => 'John', 'email' => 'john@example.com', 'password' => 'secret']);
?>
```

### Active Record Pattern

The Active Record pattern combines database access with domain logic in a single object.

```php
<?php
class User {
    private $pdo;
    public $id;
    public $name;
    public $email;
    private $password;
    
    public function __construct(PDO $pdo) {
        $this->pdo = $pdo;
    }
    
    public function findById($id) {
        $stmt = $this->pdo->prepare("SELECT * FROM users WHERE id = :id");
        $stmt->execute([':id' => $id]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if ($user) {
            $this->id = $user['id'];
            $this->name = $user['name'];
            $this->email = $user['email'];
            return true;
        }
        return false;
    }
    
    public function save() {
        if (isset($this->id)) {
            // Update
            $stmt = $this->pdo->prepare(
                "UPDATE users SET name = :name, email = :email WHERE id = :id"
            );
            $stmt->execute([
                ':name' => $this->name,
                ':email' => $this->email,
                ':id' => $this->id
            ]);
            return $stmt->rowCount();
        } else {
            // Insert
            $stmt = $this->pdo->prepare(
                "INSERT INTO users (name, email, password) VALUES (:name, :email, :password)"
            );
            $stmt->execute([
                ':name' => $this->name,
                ':email' => $this->email,
                ':password' => $this->password
            ]);
            $this->id = $this->pdo->lastInsertId();
            return $this->id;
        }
    }
    
    public function setPassword($password) {
        $this->password = password_hash($password, PASSWORD_DEFAULT);
    }
}

// Usage
$pdo = new PDO('mysql:host=localhost;dbname=database', 'username', 'password');

// Create new user
$user = new User($pdo);
$user->name = 'John';
$user->email = 'john@example.com';
$user->setPassword('secret');
$user->save();

// Update existing user
$user = new User($pdo);
$user->findById(1);
$user->name = 'John Updated';
$user->save();
?>
```

## Best Practices

1. **Always use prepared statements** to prevent SQL injection
2. **Use transactions** for operations that require multiple queries
3. **Handle errors properly** with try-catch blocks or error checking
4. **Close connections** when done (though PHP does this automatically at the end of the script)
5. **Use connection pooling** in high-traffic applications
6. **Validate input** before sending to the database
7. **Use appropriate indexes** for better performance
8. **Keep SQL logic separate** from presentation logic
9. **Use meaningful table and column names**
10. **Follow database normalization principles**

## Common Database Operations

### Pagination

```php
<?php
// MySQLi
$page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
$perPage = 10;
$offset = ($page - 1) * $perPage;

$stmt = $mysqli->prepare("SELECT * FROM users LIMIT ? OFFSET ?");
$stmt->bind_param("ii", $perPage, $offset);
$stmt->execute();
$result = $stmt->get_result();

// PDO
$page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
$perPage = 10;
$offset = ($page - 1) * $perPage;

$stmt = $pdo->prepare("SELECT * FROM users LIMIT :limit OFFSET :offset");
$stmt->bindValue(':limit', $perPage, PDO::PARAM_INT);
$stmt->bindValue(':offset', $offset, PDO::PARAM_INT);
$stmt->execute();
$users = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>
```

### Search

```php
<?php
// MySQLi
$search = "%{$_GET['search']}%";
$stmt = $mysqli->prepare("SELECT * FROM users WHERE name LIKE ? OR email LIKE ?");
$stmt->bind_param("ss", $search, $search);
$stmt->execute();
$result = $stmt->get_result();

// PDO
$search = "%{$_GET['search']}%";
$stmt = $pdo->prepare("SELECT * FROM users WHERE name LIKE :search OR email LIKE :search");
$stmt->bindParam(':search', $search);
$stmt->execute();
$users = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>
```

### Join Operations

```php
<?php
// MySQLi
$sql = "SELECT users.name, orders.order_date, orders.total 
        FROM users 
        INNER JOIN orders ON users.id = orders.user_id 
        WHERE users.id = ?";
$stmt = $mysqli->prepare($sql);
$stmt->bind_param("i", $userId);
$stmt->execute();
$result = $stmt->get_result();

// PDO
$sql = "SELECT users.name, orders.order_date, orders.total 
        FROM users 
        INNER JOIN orders ON users.id = orders.user_id 
        WHERE users.id = :user_id";
$stmt = $pdo->prepare($sql);
$stmt->execute([':user_id' => $userId]);
$orders = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>
```

## References

- [PHP MySQLi Documentation](https://www.php.net/manual/en/book.mysqli.php)
- [PHP PDO Documentation](https://www.php.net/manual/en/book.pdo.php)
- [SQL Injection Prevention](https://www.php.net/manual/en/security.database.sql-injection.php)