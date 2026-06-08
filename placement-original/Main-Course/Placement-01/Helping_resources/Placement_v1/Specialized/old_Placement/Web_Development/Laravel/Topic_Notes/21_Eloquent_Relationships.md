# Eloquent Relationships in Laravel

Database tables are often related to one another. For example, a blog post may have many comments, or an order may be related to the user who placed it. Eloquent makes managing and working with these relationships easy.

## Introduction to Relationships

Laravel's Eloquent ORM provides powerful relationship capabilities that make it easy to work with related models. Eloquent supports several types of relationships:

1. One To One
2. One To Many
3. Many To Many
4. Has One Through
5. Has Many Through
6. One To One (Polymorphic)
7. One To Many (Polymorphic)
8. Many To Many (Polymorphic)

## Defining Relationships

### One To One

A one-to-one relationship is a very basic relation. For example, a `User` model might be associated with one `Phone` model:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    /**
     * Get the phone associated with the user.
     */
    public function phone()
    {
        return $this->hasOne(Phone::class);
    }
}
```

The inverse of the relationship:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Phone extends Model
{
    /**
     * Get the user that owns the phone.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
```

#### Custom Keys

```php
// Custom foreign key
public function phone()
{
    return $this->hasOne(Phone::class, 'foreign_key');
}

// Custom local key
public function phone()
{
    return $this->hasOne(Phone::class, 'foreign_key', 'local_key');
}
```

### One To Many

A one-to-many relationship is used to define relationships where a single model owns any amount of other models. For example, a blog post may have an infinite number of comments:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    /**
     * Get the comments for the blog post.
     */
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
}
```

The inverse of the relationship:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    /**
     * Get the post that owns the comment.
     */
    public function post()
    {
        return $this->belongsTo(Post::class);
    }
}
```

#### Custom Keys

```php
// Custom foreign key
public function comments()
{
    return $this->hasMany(Comment::class, 'foreign_key');
}

// Custom local key
public function comments()
{
    return $this->hasMany(Comment::class, 'foreign_key', 'local_key');
}
```

### Many To Many

Many-to-many relations are slightly more complicated than one-to-one and one-to-many relationships. An example of such a relationship is a user with many roles, where the roles are also shared by other users:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    /**
     * The roles that belong to the user.
     */
    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }
}
```

The inverse of the relationship:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    /**
     * The users that belong to the role.
     */
    public function users()
    {
        return $this->belongsToMany(User::class);
    }
}
```

#### Custom Table & Column Names

```php
// Custom pivot table
public function roles()
{
    return $this->belongsToMany(Role::class, 'role_user');
}

// Custom keys
public function roles()
{
    return $this->belongsToMany(
        Role::class,
        'role_user',
        'user_id',
        'role_id'
    );
}
```

#### Pivot Table With Additional Attributes

```php
public function roles()
{
    return $this->belongsToMany(Role::class)->withPivot('active', 'created_by');
}
```

#### Pivot Table With Timestamps

```php
public function roles()
{
    return $this->belongsToMany(Role::class)->withTimestamps();
}
```

#### Custom Pivot Model

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class RoleUser extends Pivot
{
    // Custom pivot model logic...
}
```

```php
public function roles()
{
    return $this->belongsToMany(Role::class)
                ->using(RoleUser::class);
}
```

### Has One Through

The "has-one-through" relationship links models through a single intermediate relation:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Mechanic extends Model
{
    /**
     * Get the car's owner.
     */
    public function carOwner()
    {
        return $this->hasOneThrough(
            Owner::class,
            Car::class,
            'mechanic_id', // Foreign key on the cars table...
            'car_id',      // Foreign key on the owners table...
            'id',          // Local key on the mechanics table...
            'id'           // Local key on the cars table...
        );
    }
}
```

### Has Many Through

The "has-many-through" relationship provides a convenient shortcut for accessing distant relations via an intermediate relation:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    /**
     * Get all of the posts for the country.
     */
    public function posts()
    {
        return $this->hasManyThrough(
            Post::class,
            User::class,
            'country_id', // Foreign key on users table...
            'user_id',    // Foreign key on posts table...
            'id',         // Local key on countries table...
            'id'          // Local key on users table...
        );
    }
}
```

### Polymorphic Relationships

Polymorphic relationships allow a model to belong to more than one type of model using a single association.

#### One To One (Polymorphic)

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    /**
     * Get the parent imageable model (user or post).
     */
    public function imageable()
    {
        return $this->morphTo();
    }
}

class User extends Model
{
    /**
     * Get the user's image.
     */
    public function image()
    {
        return $this->morphOne(Image::class, 'imageable');
    }
}

class Post extends Model
{
    /**
     * Get the post's image.
     */
    public function image()
    {
        return $this->morphOne(Image::class, 'imageable');
    }
}
```

#### One To Many (Polymorphic)

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    /**
     * Get the parent commentable model (post or video).
     */
    public function commentable()
    {
        return $this->morphTo();
    }
}

class Post extends Model
{
    /**
     * Get all of the post's comments.
     */
    public function comments()
    {
        return $this->morphMany(Comment::class, 'commentable');
    }
}

class Video extends Model
{
    /**
     * Get all of the video's comments.
     */
    public function comments()
    {
        return $this->morphMany(Comment::class, 'commentable');
    }
}
```

#### Many To Many (Polymorphic)

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    /**
     * Get all of the posts that are assigned this tag.
     */
    public function posts()
    {
        return $this->morphedByMany(Post::class, 'taggable');
    }

    /**
     * Get all of the videos that are assigned this tag.
     */
    public function videos()
    {
        return $this->morphedByMany(Video::class, 'taggable');
    }
}

class Post extends Model
{
    /**
     * Get all of the tags for the post.
     */
    public function tags()
    {
        return $this->morphToMany(Tag::class, 'taggable');
    }
}

class Video extends Model
{
    /**
     * Get all of the tags for the video.
     */
    public function tags()
    {
        return $this->morphToMany(Tag::class, 'taggable');
    }
}
```

## Querying Relations

### Eager Loading

Eager loading alleviates the N+1 query problem by loading all related models in a single query:

```php
// Without eager loading (N+1 problem)
$books = Book::all();
foreach ($books as $book) {
    echo $book->author->name;
}

// With eager loading
$books = Book::with('author')->get();
foreach ($books as $book) {
    echo $book->author->name;
}

// Eager load multiple relationships
$books = Book::with(['author', 'publisher'])->get();

// Nested eager loading
$books = Book::with('author.contacts')->get();
```

### Constraining Eager Loads

```php
// Eager load with constraints
$users = User::with(['posts' => function ($query) {
    $query->where('published', true);
}])->get();

// Eager load with ordering
$users = User::with(['posts' => function ($query) {
    $query->orderBy('created_at', 'desc');
}])->get();
```

### Lazy Eager Loading

```php
// Get users
$users = User::all();

// Later decide to load relationships
if ($someCondition) {
    $users->load('posts');
}

// Load with constraints
$users->load(['posts' => function ($query) {
    $query->where('published', true);
}]);
```

### Relationship Existence

```php
// Has relationship
$users = User::has('posts')->get();

// Has relationship with count
$users = User::has('posts', '>=', 3)->get();

// With specific conditions
$users = User::whereHas('posts', function ($query) {
    $query->where('published', true);
})->get();

// Without relationship
$users = User::doesntHave('posts')->get();

// Without specific conditions
$users = User::whereDoesntHave('posts', function ($query) {
    $query->where('published', true);
})->get();
```

### Counting Related Models

```php
// With counts
$users = User::withCount('posts')->get();
foreach ($users as $user) {
    echo $user->posts_count;
}

// Multiple relationship counts
$users = User::withCount(['posts', 'comments'])->get();

// With constraints
$users = User::withCount(['posts' => function ($query) {
    $query->where('published', true);
}])->get();
```

## Inserting & Updating Related Models

### Save Method

```php
$comment = new Comment(['message' => 'A new comment.']);
$post->comments()->save($comment);

// Save multiple related models
$post->comments()->saveMany([
    new Comment(['message' => 'A new comment.']),
    new Comment(['message' => 'Another comment.']),
]);
```

### Create Method

```php
$comment = $post->comments()->create([
    'message' => 'A new comment.',
]);

// Create multiple related models
$post->comments()->createMany([
    ['message' => 'A new comment.'],
    ['message' => 'Another comment.'],
]);
```

### Belongs To Relationships

```php
$comment->post()->associate($post);
$comment->save();

// Disassociate
$comment->post()->dissociate();
$comment->save();
```

### Many To Many Relationships

```php
// Attach
$user->roles()->attach($roleId);

// Attach with pivot data
$user->roles()->attach($roleId, ['active' => true]);

// Attach multiple
$user->roles()->attach([
    1 => ['active' => true],
    2 => ['active' => false],
]);

// Detach
$user->roles()->detach($roleId);

// Detach all
$user->roles()->detach();

// Sync (remove existing, add new)
$user->roles()->sync([1, 2, 3]);

// Sync with pivot data
$user->roles()->sync([
    1 => ['active' => true],
    2 => ['active' => false],
]);

// Sync without detaching
$user->roles()->syncWithoutDetaching([1, 2, 3]);

// Toggle (attach if not exists, detach if exists)
$user->roles()->toggle([1, 2, 3]);
```

### Touching Parent Timestamps

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    /**
     * All of the relationships to be touched.
     *
     * @var array
     */
    protected $touches = ['post'];

    /**
     * Get the post that owns the comment.
     */
    public function post()
    {
        return $this->belongsTo(Post::class);
    }
}
```

## Advanced Relationship Features

### Default Models

```php
/**
 * Get the user's photo.
 */
public function photo()
{
    return $this->hasOne(Photo::class)->withDefault([
        'url' => 'path/to/default.jpg',
    ]);
}
```

### Querying Relationship Existence

```php
// Retrieve posts with at least one comment
$posts = Post::has('comments')->get();

// Retrieve posts with at least three comments
$posts = Post::has('comments', '>=', 3)->get();

// Retrieve posts with comments containing words like foo%
$posts = Post::whereHas('comments', function ($query) {
    $query->where('content', 'like', 'foo%');
})->get();

// Retrieve posts without comments
$posts = Post::doesntHave('comments')->get();

// Retrieve posts without comments containing words like foo%
$posts = Post::whereDoesntHave('comments', function ($query) {
    $query->where('content', 'like', 'foo%');
})->get();
```

### Nested Relationship Existence

```php
// Retrieve posts with comments that have likes
$posts = Post::has('comments.likes')->get();

// Retrieve posts with comments that have at least one like
$posts = Post::whereHas('comments.likes', function ($query) {
    $query->where('count', '>=', 1);
})->get();
```

### Aggregating Related Models

```php
// Count related models
$posts = Post::withCount('comments')->get();
foreach ($posts as $post) {
    echo $post->comments_count;
}

// Count multiple relationships
$posts = Post::withCount(['comments', 'likes'])->get();

// Count with constraints
$posts = Post::withCount(['comments' => function ($query) {
    $query->where('content', 'like', 'foo%');
}])->get();

// Other aggregates
$posts = Post::withSum('comments', 'votes')->get();
$posts = Post::withAvg('comments', 'rating')->get();
$posts = Post::withMin('comments', 'rating')->get();
$posts = Post::withMax('comments', 'rating')->get();
```

## Best Practices

1. **Use eager loading**: Avoid N+1 query problems by using eager loading
2. **Define relationships in both models**: Define both sides of a relationship for clarity
3. **Use appropriate relationship types**: Choose the right relationship type for your data model
4. **Use constraints**: Add constraints to relationship queries for better performance
5. **Use relationship methods**: Use relationship methods like `save()`, `create()`, etc. instead of manually setting foreign keys
6. **Use relationship existence queries**: Use `has()` and `whereHas()` for filtering based on relationships
7. **Use relationship counts**: Use `withCount()` for counting related models
8. **Use relationship aggregates**: Use `withSum()`, `withAvg()`, etc. for aggregating related models
9. **Use eager loading constraints**: Add constraints to eager loading for better performance
10. **Use lazy eager loading**: Use `load()` when you need to load relationships after the initial query

## References

- [Laravel Eloquent Relationships Documentation](https://laravel.com/docs/12.x/eloquent-relationships)
- [Laravel Eager Loading Documentation](https://laravel.com/docs/12.x/eloquent-relationships#eager-loading)
- [Laravel Relationship Methods Documentation](https://laravel.com/docs/12.x/eloquent-relationships#inserting-and-updating-related-models)