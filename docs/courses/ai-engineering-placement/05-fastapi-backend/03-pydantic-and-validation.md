# Pydantic and Validation — Data Modeling and Schema Management

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Define Pydantic models with field types, defaults, and validators |
| LO2 | Implement field validation with constraints, regex, and custom validators |
| LO3 | Handle nested models, inheritance, and model configuration |
| LO4 | Use JSON Schema generation and custom serialization |
| LO5 | Manage model parsing, dumping, and error handling |
| LO6 | Apply Pydantic in FastAPI for request/response validation |

## Introduction

Understanding pydantic and validation is essential for AI engineers building production systems. This chapter covers the core principles, practical implementations, and interview preparation for mastering pydantic and validation.

## Prerequisites

- Basic programming knowledge
- Understanding of data structures

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 3.1 | Pydantic Models | BaseModel, field types, defaults |
| 3.2 | Field Validation | Constraints, regex, custom validators |
| 3.3 | Nested Models | Sub-models, lists, unions |
| 3.4 | Model Configuration | ConfigDict, immutable, extra fields |
| 3.5 | Serialization | model_dump, model_dump_json, custom encoders |
| 3.6 | Error Handling | ValidationError, custom error messages |
| 3.7 | Advanced Types | EmailStr, AnyUrl, SecretStr, conint, constr |
| 3.8 | FastAPI Integration | Request validation, response models |

## Chapter Roadmap

```mermaid
flowchart LR
    A[BaseModel] --> B[Field Validation]
    B --> C[Nested Models]
    C --> D[Config]
    D --> E[Serialization]
    E --> F[Error Handling]
    F --> G[Advanced Types]
    G --> H[FastAPI Integration]
```text

## 3.1 Pydantic Models

Pydantic provides runtime data validation using Python type annotations.

```python
from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class User(BaseModel):
    id: int
    name: str
    email: str
    age: int = 0
    is_active: bool = True
    created_at: Optional[datetime] = None

## Automatic validation and parsing
user = User(
    id="42",              # int from string — coerced
    name="Alice",
    email="alice@example.com",
    age="25",             # int from string — coerced
    created_at="2024-01-15T10:30:00Z"  # string to datetime
)
print(user.model_dump())
## {'id': 42, 'name': 'Alice', 'email': 'alice@example.com',
##  'age': 25, 'is_active': True, 'created_at': datetime(...)}

## Access as attributes
print(user.name)   # Alice
print(user.id)     # 42
```text

**Type coercion**: Pydantic coerces types by default (int from string, float from int). Use `strict=True` to disable coercion.

```python
from pydantic import BaseModel, Field

class StrictUser(BaseModel):
    model_config = {"strict": True}
    id: int
    name: str

## This will raise ValidationError
## StrictUser(id="42", name="Alice")  # id must be int, not str
```text

## 3.2 Field Validation

Use `Field()` for constraints and `@field_validator` for custom logic.

```python
from pydantic import BaseModel, Field, field_validator
from typing import Optional
import re

class Product(BaseModel):
    name: str = Field(..., min_length=2, max_length=100, description="Product name")
    price: float = Field(..., gt=0, le=10000, description="Product price")
    sku: str = Field(..., pattern=r"^[A-Z]{3}-\d{4}$", description="SKU format: ABC-1234")
    quantity: int = Field(ge=0, default=0, description="Stock quantity")
    rating: Optional[float] = Field(None, ge=0, le=5)

    @field_validator("name")
    @classmethod
    def name_must_be_title_case(cls, v: str) -> str:
        if not v.istitle():
            raise ValueError("Name must be title case")
        return v.strip()

    @field_validator("price")
    @classmethod
    def round_price(cls, v: float) -> float:
        return round(v, 2)

## Validation examples
try:
    product = Product(name="Widget", price=9.999, sku="ABC-1234")
except ValueError as e:
    print(e)

## Model with multiple-field validation
class Order(BaseModel):
    items: list[str] = Field(..., min_length=1)
    discount_code: Optional[str] = None
    total: float = Field(..., gt=0)

    @field_validator("discount_code")
    @classmethod
    def validate_discount(cls, v: Optional[str]) -> Optional[str]:
        if v and not v.startswith("DISC-"):
            raise ValueError("Discount code must start with DISC-")
        return v

    @field_validator("items")
    @classmethod
    def no_duplicate_items(cls, v: list[str]) -> list[str]:
        if len(v) != len(set(v)):
            raise ValueError("Duplicate items not allowed")
        return v
```text

**Field function parameters**:

| Parameter | Type | Description |
|-----------|------|-------------|
| `default` | Any | Default value |
| `default_factory` | Callable | Default factory function |
| `alias` | str | Alternative field name for serialization |
| `title` | str | Human-readable title |
| `description` | str | Field description |
| `gt`, `ge`, `lt`, `le` | numbers | Numeric constraints |
| `min_length`, `max_length` | int | String length constraints |
| `pattern` | str | Regex pattern |
| `examples` | list | Example values |
| `frozen` | bool | Makes field immutable |

## 3.3 Nested Models

Models can contain other models, lists, and unions.

```python
from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class Address(BaseModel):
    street: str
    city: str
    state: str = Field(..., pattern=r"^[A-Z]{2}$")
    zip_code: str = Field(..., pattern=r"^\d{5}(-\d{4})?$")

class Profile(BaseModel):
    bio: Optional[str] = None
    avatar_url: Optional[str] = None
    social_links: dict[str, str] = {}

class User(BaseModel):
    id: int
    name: str
    email: str
    address: Optional[Address] = None  # Optional nested model
    profile: Profile = Profile()        # Nested model with default
    tags: list[str] = []                 # List of strings
    scores: dict[str, float] = {}       # Dict field

## Creating with nested data
user = User(
    id=1,
    name="Alice",
    email="alice@example.com",
    address={
        "street": "123 Main St",
        "city": "Portland",
        "state": "OR",
        "zip_code": "97201"
    },
    tags=["premium", "vip"],
    scores={"math": 95.5, "science": 88.0}
)

print(user.address.city)       # Portland
print(user.profile.bio)        # None (default)
print(user.tags)               # ['premium', 'vip']

## Recursive models (JSON-style trees)
class TreeNode(BaseModel):
    value: str
    children: list["TreeNode"] = []

TreeNode.model_rebuild()  # Rebuild after definition for recursive types
```text

## 3.4 Model Configuration

Control model behavior with `model_config`.

```python
from pydantic import BaseModel, ConfigDict
from typing import Optional

## Immutable model (all fields frozen)
class Config(BaseModel):
    model_config = ConfigDict(frozen=True)
    api_key: str
    max_connections: int = 10

config = Config(api_key="secret", max_connections=20)
## config.max_connections = 30  # ValidationError: frozen field

## Allow extra fields (ignore or populate)
class FlexibleModel(BaseModel):
    model_config = ConfigDict(extra="ignore")  # or "forbid" or "allow"
    name: str

m = FlexibleModel(name="Test", extra_field="ignored")
print(m.model_dump())  # {"name": "Test"} — extra_field ignored

## Populate by name or alias
class UserAlias(BaseModel):
    model_config = ConfigDict(populate_by_name=True)
    full_name: str = Field(..., alias="fullName")

u = UserAlias(fullName="Alice Smith")  # Alias in init
print(u.full_name)  # Alice Smith
print(u.model_dump(by_alias=True))  # {"fullName": "Alice Smith"}

## Arbitrary types allowed
class ArbitraryModel(BaseModel):
    model_config = ConfigDict(arbitrary_types_allowed=True)
    custom_obj: object
```text

**ConfigDict options**:

| Option | Values | Description |
|--------|--------|-------------|
| `strict` | `bool` | Disable type coercion |
| `frozen` | `bool` | Make model immutable |
| `extra` | `"ignore"`, `"forbid"`, `"allow"` | Handle extra fields |
| `populate_by_name` | `bool` | Allow init by field name |
| `arbitrary_types_allowed` | `bool` | Allow non-standard types |
| `use_enum_values` | `bool` | Use enum values, not names |
| `validate_default` | `bool` | Validate default values |

## 3.5 Serialization

Convert models to dicts, JSON, or custom formats.

```python
from pydantic import BaseModel, field_serializer
from datetime import datetime, date
from typing import Optional
import json

class Event(BaseModel):
    id: int
    name: str
    date: date
    created_at: datetime
    metadata: Optional[dict] = None

    @field_serializer("date")
    def serialize_date(self, d: date) -> str:
        return d.isoformat()

    @field_serializer("created_at")
    def serialize_datetime(self, dt: datetime) -> str:
        return dt.isoformat()

event = Event(
    id=1,
    name="Conference",
    date="2025-06-15",
    created_at="2025-01-01T00:00:00Z",
    metadata={"attendees": 500}
)

## Serialize to dict
data = event.model_dump()
print(data)
## {'id': 1, 'name': 'Conference', 'date': '2025-06-15',
##  'created_at': '2025-01-01T00:00:00+00:00', 'metadata': {'attendees': 500}}

## Serialize to JSON
json_str = event.model_dump_json(indent=2)
print(json_str)

## Exclude or include specific fields
subset = event.model_dump(include={"id", "name"})
## {'id': 1, 'name': 'Conference'}

## Exclude unset or defaults
class User(BaseModel):
    id: int
    name: str
    nickname: Optional[str] = None
    is_active: bool = True

user = User(id=1, name="Alice")
print(user.model_dump(exclude_unset=True))
## {'id': 1, 'name': 'Alice'}  — excludes defaults

## Custom encoder for non-JSON types
from pydantic import BaseModel
from decimal import Decimal

class PriceModel(BaseModel):
    amount: Decimal
    currency: str = "USD"

    model_config = {
        "ser_json_timedelta": "iso8601",
        "ser_json_bytes": "base64",
    }

pm = PriceModel(amount=Decimal("19.99"))
print(pm.model_dump_json())
## {"amount": 19.99, "currency": "USD"}
```text

## 3.6 Error Handling

Pydantic provides detailed validation errors.

```python
from pydantic import BaseModel, Field, ValidationError

class UserRegistration(BaseModel):
    username: str = Field(min_length=3, max_length=20, pattern=r"^[a-zA-Z0-9_]+$")
    email: str
    password: str = Field(min_length=8)
    age: int = Field(ge=13, le=120)

try:
    user = UserRegistration(
        username="ab",           # too short
        email="not-an-email",    # invalid email
        password="short",        # too short
        age=10                   # under 13
    )
except ValidationError as e:
    print(e.errors())
    # [
    #   {'type': 'string_too_short', 'loc': ('username',), 'msg': 'String should have at least 3 characters', ...},
    #   {'type': 'value_error', 'loc': ('email',), 'msg': 'value is not a valid email address', ...},
    #   ...
    # ]

## Custom error messages
from pydantic import field_validator

class ProductReview(BaseModel):
    rating: int = Field(ge=1, le=5)
    comment: str = Field(max_length=1000)

    @field_validator("rating")
    @classmethod
    def validate_rating(cls, v: int) -> int:
        if v < 1 or v > 5:
            raise ValueError("Rating must be between 1 and 5")
        return v

    @field_validator("comment")
    @classmethod
    def validate_comment(cls, v: str) -> str:
        if "spam" in v.lower():
            raise ValueError("Comment contains prohibited content")
        return v

## In FastAPI — automatic 422 response
from fastapi import FastAPI, HTTPException

app = FastAPI()

@app.post("/reviews")
async def create_review(review: ProductReview):
    # If validation fails, FastAPI returns 422 with Pydantic errors
    return {"message": "Review created", "rating": review.rating}
```text

## 3.7 Advanced Types

Pydantic integrates with various specialized types.

```python
from pydantic import BaseModel, Field
from pydantic.types import (
    EmailStr,
    SecretStr,
    SecretBytes,
    AnyUrl,
    HttpUrl,
    FilePath,
    DirectoryPath,
    Color,
    PaymentCardNumber,
    IPvAnyAddress,
)
from typing import Annotated
from decimal import Decimal
from enum import Enum

class ColorEnum(str, Enum):
    RED = "red"
    GREEN = "green"
    BLUE = "blue"

class AdvancedModel(BaseModel):
    email: EmailStr                                          # Validated email
    password: SecretStr                                      # Hidden in repr/print
    website: HttpUrl                                         # Must be http/https URL
    card: PaymentCardNumber                                  # Luhn algorithm validation
    color: Color                                             # CSS color validation
    ip_address: IPvAnyAddress                                # IPv4 or IPv6
    price: Decimal = Field(max_digits=10, decimal_places=2)  # Decimal with precision
    color_enum: ColorEnum                                    # Enum validation

model = AdvancedModel(
    email="user@example.com",
    password="secret123",
    website="https://example.com",
    card="4242424242424242",
    color="#ff0000",
    ip_address="192.168.1.1",
    price=Decimal("29.99"),
    color_enum="red",
)

print(model.password)       # SecretStr('**********')
print(model.password.get_secret_value())  # 'secret123'

## Constrained types
from typing import Annotated
from pydantic import StringConstraints, Field

NameStr = Annotated[str, StringConstraints(min_length=2, max_length=50, pattern=r"^[A-Za-z\s]+$")]
PositiveFloat = Annotated[float, Field(gt=0)]
NonEmptyList = Annotated[list, Field(min_length=1)]

class ConstrainedModel(BaseModel):
    full_name: NameStr
    score: PositiveFloat
    items: NonEmptyList
```text

## 3.8 FastAPI Integration

Pydantic models are the primary way FastAPI handles data.

```python
from fastapi import FastAPI, HTTPException, Query
from pydantic import BaseModel, Field, EmailStr
from typing import Optional
from datetime import datetime

app = FastAPI()

class UserCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    email: EmailStr
    password: str = Field(..., min_length=8)
    age: int = Field(ge=0, le=150)

class UserResponse(BaseModel):
    id: int
    name: str
    email: EmailStr
    created_at: datetime
    is_active: bool = True

class PaginatedResponse(BaseModel):
    data: list[UserResponse]
    total: int
    page: int
    page_size: int

## Request body validation
@app.post("/users", response_model=UserResponse, status_code=201)
async def create_user(user: UserCreate):
    # Pydantic validates automatically — 422 on failure
    user_dict = user.model_dump(exclude={"password"})
    user_dict["id"] = 1
    user_dict["created_at"] = datetime.now()
    return user_dict

## Query parameter validation
@app.get("/users", response_model=PaginatedResponse)
async def list_users(
    page: int = Query(1, ge=1),
    page_size: int = Query(20, ge=1, le=100),
):
    users = [
        UserResponse(
            id=i, name=f"User {i}", email=f"user{i}@example.com",
            created_at=datetime.now()
        ) for i in range(page_size)
    ]
    return PaginatedResponse(data=users, total=1000, page=page, page_size=page_size)

## Union types for different responses
from typing import Union

class SuccessResponse(BaseModel):
    status: str = "success"
    data: dict

class ErrorResponse(BaseModel):
    status: str = "error"
    message: str
    errors: Optional[list[dict]] = None

@app.get("/items/{item_id}")
async def get_item(item_id: int) -> Union[SuccessResponse, ErrorResponse]:
    item = find_item(item_id)
    if not item:
        return ErrorResponse(message="Item not found")
    return SuccessResponse(data={"id": item_id, "name": item.name})
```text

---

## TypeScript Parallel

```typescript
import { z } from "zod";

const UserSchema = z.object({
  id: z.number(),
  name: z.string().min(1).max(100),
  email: z.string().email(),
  age: z.number().min(0).max(150).optional().default(0),
  isActive: z.boolean().default(true),
});

type User = z.infer<typeof UserSchema>;

// Validation
const result = UserSchema.safeParse({
  id: "42",
  name: "Alice",
  email: "alice@example.com",
});
if (result.success) {
  console.log(result.data.name);
} else {
  console.error(result.error.errors);
}

// TypeScript equivalent of Pydantic's discriminated union
const SuccessResponseSchema = z.object({
  status: z.literal("success"),
  data: z.record(z.unknown()),
});
```text

---

## Summary

- Pydantic BaseModel classes define data schemas with automatic type validation
- Field() provides constraints: min/max length, numeric ranges, regex patterns
- @field_validator decorators enable custom validation logic per field
- Nested models create complex hierarchical data structures
- Model configuration controls immutability, extra fields, alias handling
- Serialization methods (model_dump, model_dump_json) convert models to dicts/JSON
- Pydantic produces detailed ValidationError messages with field-level error info
- Advanced types include EmailStr, SecretStr, HttpUrl, PaymentCardNumber
- FastAPI integrates Pydantic automatically for request validation and response models
- Union types and discriminated unions handle multiple response shapes

## Practical Takeaways

| Scenario | Do This | Avoid This |
|----------|---------|------------|
| Input validation | Pydantic BaseModel with Field constraints | Manual if/else validation |
| Sensitive data | SecretStr for passwords/keys | Plain str |
| Complex structures | Nested models | Flat dicts |
| API responses | response_model in decorator | Returning raw dicts |
| Custom logic | @field_validator | Validation in route handler |
| Configuration | ConfigDict for model behavior | Multiple BaseModel subclasses |
| JSON serialization | model_dump_json with custom encoders | Manual json.dumps |
| Error messages | Specific error types | Generic exception messages |

## Interview Q&A

<details class="tp-qa-card" data-qid="fastapi-s03-q1">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q1: What is Pydantic and why is it used with FastAPI?</summary>
  <div class="tp-qa-answer"><p>Pydantic is a data validation library using Python type annotations. It provides runtime validation, JSON Schema generation, and serialization. FastAPI uses Pydantic models for automatic request body validation, response serialization, and OpenAPI schema generation. This eliminates manual parsing and validation code.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s03-q2">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q2: How do you create a custom validator in Pydantic?</summary>
  <div class="tp-qa-answer"><p>Use @field_validator decorator on a classmethod that takes the field value as parameter and returns the validated value. Raise ValueError with a message if validation fails. For multiple fields, use @model_validator which receives the entire model and can validate relationships between fields.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s03-q3">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q3: What is the difference between SecretStr and str?</summary>
  <div class="tp-qa-answer"><p>SecretStr stores the value securely — repr() and print() show '**********' instead of the actual value. The actual value is accessible via .get_secret_value(). This prevents accidental exposure in logs, error messages, and debug output. Use SecretStr for passwords, API keys, and tokens.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s03-q4">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q4: How does Pydantic handle extra fields not in the model?</summary>
  <div class="tp-qa-answer"><p>By default, extra fields are ignored. You can set model_config = ConfigDict(extra="forbid") to reject extra fields with a validation error, or extra="allow" to include them in the model and model_dump(). Choose "forbid" for strict API schemas, "ignore" for flexible inputs, and "allow" when you need to preserve unknown fields.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s03-q5">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q5: How do you exclude sensitive fields from serialization?</summary>
  <div class="tp-qa-answer"><p>Use model_dump(exclude={"password"}) or model_dump_json(exclude={"password"}). Alternatively, define a separate response model (e.g., UserResponse without the password field) and use response_model in the FastAPI decorator. Use SecretStr for automatic protection in repr/print.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s03-q6">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q6: What is the difference between model_dump and model_dump_json?</summary>
  <div class="tp-qa-answer"><p>model_dump() returns a Python dict with Python native types (datetime objects, Decimal, etc.). model_dump_json() returns a JSON string with all types serialized to JSON-compatible formats (ISO datetime strings, numeric decimals). model_dump_json also accepts indent, exclude, include, and by_alias parameters.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s03-q7">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q7: How do you make a Pydantic model immutable?</summary>
  <div class="tp-qa-answer"><p>Set model_config = ConfigDict(frozen=True). This makes all fields immutable after creation — attempting to set an attribute raises a ValidationError. Frozen models are hashable and can be used in sets and as dict keys. Useful for configuration objects and value objects.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s03-q8">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q8: What is the Annotated type pattern in Pydantic?</summary>
  <div class="tp-qa-answer"><p>Annotated allows attaching metadata to type hints without subclassing. Example: NameStr = Annotated[str, StringConstraints(min_length=2, max_length=50)]. This creates reusable constrained types that can be used across multiple models. Reduces code duplication compared to Field() in every model.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s03-q9">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q9: How do you create recursive models in Pydantic?</summary>
  <div class="tp-qa-answer"><p>Use forward references (string type annotation) and call model_rebuild() after the class definition. Example: class TreeNode(BaseModel): value: str; children: list["TreeNode"] = []. Then TreeNode.model_rebuild(). This allows self-referential structures for trees, graphs, and nested comments.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s03-q10">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q10: How does Pydantic handle type coercion?</summary>
  <div class="tp-qa-answer"><p>By default, Pydantic coerces types: "42" (str) to 42 (int), 3.14 (float) to 3 (int) if target is int, True (bool) to 1 (int). This is lenient by design for flexibility. Set strict=True in ConfigDict to disable all coercion. Use Annotated types with Field(strict=True) for per-field strict mode.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

## Chapter Quiz

**Q1**: What does Pydantic's Field(ge=0, le=100) constrain?

a) String length
b) Numeric range (0 to 100)
c) List length
d) Regex pattern

<details class="tp-qa-card" data-qid="fastapi-s03-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Numeric range (0 to 100)</strong></p></div></details>

**Q2**: How do you prevent extra fields from being accepted?

a) extra="ignore"
b) extra="forbid"
c) extra="reject"
d) extra="strict"

<details class="tp-qa-card" data-qid="fastapi-s03-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) extra="forbid"</strong></p></div></details>

**Q3**: Which method serializes a model to a JSON string?

a) model_dict()
b) model_serialize()
c) model_dump_json()
d) to_json()

<details class="tp-qa-card" data-qid="fastapi-s03-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) model_dump_json()</strong></p></div></details>

**Q4**: What type is best for an API key field?

a) str
b) SecretStr
c) PasswordStr
d) HiddenStr

<details class="tp-qa-card" data-qid="fastapi-s03-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) SecretStr</strong></p></div></details>

**Q5**: What decorator validates a single field in Pydantic?

a) @validator
b) @field_validator
c) @validate_field
d) @check_field

<details class="tp-qa-card" data-qid="fastapi-s03-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) @field_validator</strong></p></div></details>

## Exercises

**Easy** — Define a Pydantic model for a blog post with title, content, author, tags, and published_date. Add Field constraints (min_length for title, pattern for tags). Test validation with valid and invalid data.

**Medium** — Create a UserRegistration model with username (alphanumeric, 3-20 chars), email (valid email), password (min 8 chars, must contain number and uppercase), and confirm_password (must match). Use field_validator for password rules and model_validator for password matching.

**Medium** — Build a nested model structure for an e-commerce order: Order contains Customer (nested) and list of OrderItems (nested). Each OrderItem has product_id, quantity, and unit_price. Calculate total dynamically using model_validator.

**Hard** — Implement a polymorphic API response system: create a base Response model, then extend it for SuccessResponse (data), ErrorResponse (message, errors), PaginatedResponse (data, total, page). Use discriminated unions in FastAPI endpoints.

**Hard** — Build a configuration validation system using Pydantic: load config from YAML/JSON, validate with nested models, support environment variable overrides, and generate a default config file. Include SecretStr for sensitive values.

---


## Common Mistakes

1. Not understanding the fundamental concepts before applying them
2. Skipping edge cases in implementation
3. Not analyzing time/space complexity
4. Forgetting to handle null/empty inputs
5. Not practicing enough problems to build pattern recognition

## Revision Notes

- Key concept 1: Core principle of 05-fastapi-backend
- Key concept 2: Common implementation pattern
- Key concept 3: Time/space complexity to remember
- Key concept 4: When to apply this technique
- Key concept 5: Common interview pattern
- Key concept 6: Edge cases to handle
- Key concept 7: Related concepts for deeper understanding

## Placement Section

### Top 10 Interview Questions

#### Google Style
1. Explain the time and space trade-offs of 05-fastapi-backend. When would you choose one approach over another?
2. Design a system that efficiently handles 05-fastapi-backend at scale (millions of requests/second).

#### Amazon Style
1. Tell me about a time you had to optimize a system related to 05-fastapi-backend. What was your approach and what was the result?
2. How would you explain 05-fastapi-backend to a non-technical stakeholder?

#### Microsoft Style
1. How does 05-fastapi-backend integrate with enterprise systems and cloud architectures?
2. What are the security implications of 05-fastapi-backend?

#### NVIDIA Style
1. How would you optimize 05-fastapi-backend for GPU-accelerated computing?
2. What parallel processing patterns apply to 05-fastapi-backend?

#### AI Startup Style
1. How would you implement 05-fastapi-backend in a cost-effective, scalable way for a startup?
2. What's the fastest way to prototype a solution using 05-fastapi-backend?

### Resume Tips
- **Technical Skills**: List 05-fastapi-backend under relevant technical skills
- **Project Description**: "Implemented 05-fastapi-backend to [specific outcome], reducing [metric] by [X]%"
- **Keywords**: Include 05-fastapi-backend in your skills section for ATS optimization

### Interview Day Checklist
- [ ] Review core concepts of 05-fastapi-backend
- [ ] Practice 3-5 problems related to 05-fastapi-backend
- [ ] Prepare 2 real-world examples of using 05-fastapi-backend
- [ ] Know the time/space complexity of common 05-fastapi-backend operations
- [ ] Have questions ready about how the company uses 05-fastapi-backend> **Next**: [Dependency Injection](04-dependency-injection.md)
