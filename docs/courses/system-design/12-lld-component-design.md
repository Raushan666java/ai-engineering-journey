# Chapter 12: Low-Level Design: Component and Class Design
> **Previous:** [11 Lld Design Patterns](./11-lld-design-patterns.md) | **Next:** [13 Lld Concurrency](./13-lld-concurrency.md)

---
## Learning Objectives
- Draw UML class diagrams with correct notation for all relationship types, multiplicity, and visibility
- Interpret sequence diagrams with combined fragments (alt, opt, loop) to model control flow
- Model real-world domains into class hierarchies using generalization, aggregation, and composition
- Implement a state machine for objects with complex lifecycle behavior
- Design thread-safe concurrent data structures using locks and atomic operations
- Apply the Strategy and Observer patterns within larger component designs
---
## Chapter at a Glance

| Aspect | Details |
|--------|---------|
| **Scope** | Component design, class diagrams, API contracts, modularity |
| **Key Concepts** | Cohesion, coupling, interface design, dependency management |
| **Component Modeling** | UML class diagrams, sequence diagrams, state machines |
| **API Contracts** | OpenAPI, gRPC protobuf, versioning strategies |
| **Modularity** | Package principles, dependency inversion, hexagonal architecture |
| **Real-World** | Component design in large-scale software projects |

---
## Chapter Roadmap

```mermaid
flowchart LR
    A[Theory]
```

## Theory
> **One-Sentence Takeaway:** Theory is the foundation — master it before moving to examples and exercises.
### UML Class Diagram Syntax

> **Pro Tip:** Master this concept thoroughly — it is frequently tested in system design interviews.

> **Pro Tip:** Master this concept — it appears in nearly every system design interview. Understand both the how and the why.

> **Warning:** A common mistake is over-engineering. Always start simple and add complexity only when justified by requirements.

> **Pro Tip:** Master this concept thoroughly — it appears in nearly every system design interview.
![Component and Class Design Flowchart](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/system-design/12-component-design.png)

The Unified Modeling Language (UML) provides a standardized notation for visualizing the structure of object-oriented systems.

**Class Notation**: A class is drawn as a rectangle divided into three compartments: the top holds the class name (bold, centered), the middle lists attributes, and the bottom lists methods. Visibility is indicated by prefixes: `+` (public), `-` (private), `#` (protected), `~` (package-private). Static members are underlined; abstract classes and methods are italicized.

```
+-----------------------------+
|        ParkingLot           |
+-----------------------------+
| - name: String              |
| - floors: List<Floor>       |
+-----------------------------+
| + park(vehicle): Ticket     |
| + remove(ticket): Receipt   |
+-----------------------------+
```

**Relationships**:

- **Association**: A structural link between classes drawn as a solid line. Can be unidirectional (arrow) or bidirectional (no arrow). A `Driver` associated with a `Car` means the driver knows about the car.

- **Aggregation**: A "has-a" relationship where the part can exist independently from the whole. Drawn as a hollow diamond on the owner side. A `Department` aggregates `Professor` objects; professors exist even if the department dissolves.

- **Composition**: A stronger "has-a" where the part's lifetime is tied to the whole. Drawn as a filled diamond. A `House` is composed of `Room` objects; rooms are destroyed when the house is demolished.

- **Inheritance** (Generalization): An "is-a" relationship drawn as a hollow triangle pointing to the parent. A `Car` extends `Vehicle`.

- **Dependency**: A weaker relationship where one class uses another temporarily (e.g., as a method parameter). Drawn as a dashed arrow. `ReportGenerator` depends on `DataFetcher` as a method argument.

**Multiplicity** is expressed as annotations on association ends: `1` (exactly one), `0..1` (optional), `*` (zero or more), `1..*` (at least one), `m..n` (range).

### UML Sequence Diagrams

> **Warning:** Avoid over-engineering. Start simple, measure, then optimize.

> **Warning:** Avoid premature optimization. Start simple, measure, then optimize. Over-engineering is the most common system design mistake.

Sequence diagrams capture the interaction between objects over time. The vertical axis is time; horizontal arrows are messages.

**Elements**:
- **Lifeline**: a dashed vertical line below an object (rectangular box with `name: Class`).
- **Activation bar**: a thin rectangle on the lifeline indicating when the object is active.
- **Message**: a horizontal arrow from one lifeline to another. Solid arrowhead for regular call, dashed arrowhead for return.
- **Self-call**: a message arrow looping back to the same lifeline, with a nested activation bar.

**Combined Fragments**:
- `alt`: alternative paths (if-else), separated by dashed horizontal lines.
- `opt`: optional path (if without else).
- `loop`: iteration, with a guard condition in the top-left corner.
- `par`: parallel execution of messages.

```
[Client] -> [Controller] : placeOrder(order)
activate Controller
[Controller] -> [InventoryService] : checkAvailability(order)
activate InventoryService
[InventoryService] --> [Controller] : available=true
deactivate InventoryService
alt [available]
    [Controller] -> [PaymentService] : processPayment(order)
    activate PaymentService
    [PaymentService] --> [Controller] : success
    deactivate PaymentService
    [Controller] -> [ShippingService] : scheduleShipment(order)
else
    [Controller] --> [Client] : out-of-stock error
end
deactivate Controller
```

### UML Activity Diagrams

> **Remember:** Always articulate trade-offs clearly — interviewers value reasoning over the "right" answer.

> **Remember:** Trade-offs are the heart of system design. Always be ready to explain why you chose X over Y.

Activity diagrams model workflow and business process logic. They resemble flowcharts but with concurrency support.

**Elements**:
- **Start node**: a filled circle.
- **End node**: a filled circle inside a hollow circle (bullseye).
- **Action**: rounded rectangle.
- **Decision**: diamond shape with guard conditions on outgoing edges.
- **Fork node**: a single incoming edge splitting into multiple concurrent outgoing edges (thick bar).
- **Join node**: multiple incoming edges synchronizing into one outgoing edge (thick bar).

Activities are especially useful for modeling use cases that involve parallel processing or complex approval workflows.

---
## Examples
### Example 1: Designing a Parking Lot System

**Requirements**: A parking lot has multiple floors, each with multiple spots. Spots come in three sizes (small, medium, large). Vehicles park in spots that fit their size. A ticket is issued on entry, payment is collected on exit. Hourly rates vary by spot size.

**Class Diagram**:

```python
from enum import Enum
from abc import ABC, abstractmethod
from datetime import datetime
import threading

class SpotSize(Enum):
    SMALL = 1
    MEDIUM = 2
    LARGE = 3

class VehicleType(Enum):
    MOTORCYCLE = SpotSize.SMALL
    CAR = SpotSize.MEDIUM
    TRUCK = SpotSize.LARGE

class Vehicle(ABC):
    def __init__(self, license_plate: str, vehicle_type: VehicleType):
        self.license_plate = license_plate
        self.type = vehicle_type

class Motorcycle(Vehicle):
    def __init__(self, license_plate: str):
        super().__init__(license_plate, VehicleType.MOTORCYCLE)

class Car(Vehicle):
    def __init__(self, license_plate: str):
        super().__init__(license_plate, VehicleType.CAR)

class Truck(Vehicle):
    def __init__(self, license_plate: str):
        super().__init__(license_plate, VehicleType.TRUCK)

class ParkingSpot:
    def __init__(self, spot_id: str, size: SpotSize):
        self.spot_id = spot_id
        self.size = size
        self.is_available = True
        self.vehicle = None
        self._lock = threading.Lock()

    def park(self, vehicle: Vehicle) -> bool:
        with self._lock:
            if self.is_available and vehicle.type.value.value <= self.size.value:
                self.is_available = False
                self.vehicle = vehicle
                return True
            return False

    def leave(self) -> Vehicle:
        with self._lock:
            vehicle = self.vehicle
            self.vehicle = None
            self.is_available = True
            return vehicle

class ParkingFloor:
    def __init__(self, floor_num: int):
        self.floor_num = floor_num
        self.spots: list[ParkingSpot] = []

    def add_spot(self, spot: ParkingSpot):
        self.spots.append(spot)

    def find_available_spot(self, vehicle: Vehicle) -> ParkingSpot | None:
        for spot in self.spots:
            if spot.is_available and vehicle.type.value.value <= spot.size.value:
                return spot
        return None

class Ticket:
    _counter = 0
    _lock = threading.Lock()

    def __init__(self, spot: ParkingSpot, vehicle: Vehicle):
        with Ticket._lock:
            Ticket._counter += 1
            self.ticket_id = Ticket._counter
        self.spot = spot
        self.vehicle = vehicle
        self.entry_time = datetime.now()
        self.exit_time = None
        self.amount = 0.0

    def close(self, hourly_rate: float):
        self.exit_time = datetime.now()
        duration = (self.exit_time - self.entry_time).total_seconds() / 3600
        self.amount = max(1, round(duration)) * hourly_rate
        return self.amount

class Payment(ABC):
    @abstractmethod
    def process(self, amount: float) -> bool: ...

class CashPayment(Payment):
    def process(self, amount: float) -> bool:
        print(f"Received cash payment of ${amount:.2f}")
        return True

class CardPayment(Payment):
    def process(self, amount: float) -> bool:
        print(f"Processing card payment of ${amount:.2f}")
        return True

class ParkingLot:
    def __init__(self, name: str, hourly_rate: float = 5.0):
        self.name = name
        self.hourly_rate = hourly_rate
        self.floors: list[ParkingFloor] = []
        self.active_tickets: dict[int, Ticket] = {}

    def add_floor(self, floor: ParkingFloor):
        self.floors.append(floor)

    def park_vehicle(self, vehicle: Vehicle) -> Ticket | None:
        for floor in self.floors:
            spot = floor.find_available_spot(vehicle)
            if spot:
                spot.park(vehicle)
                ticket = Ticket(spot, vehicle)
                self.active_tickets[ticket.ticket_id] = ticket
                print(f"Vehicle {vehicle.license_plate} parked at spot {spot.spot_id}")
                return ticket
        print("No available spots")
        return None

    def remove_vehicle(self, ticket_id: int, payment: Payment) -> bool:
        ticket = self.active_tickets.get(ticket_id)
        if not ticket:
            return False
        amount = ticket.close(self.hourly_rate)
        ticket.spot.leave()
        if payment.process(amount):
            del self.active_tickets[ticket_id]
            print(f"Vehicle {ticket.vehicle.license_plate} left. Paid ${amount:.2f}")
            return True
        return False
```

**Flow**: `Client â†’ ParkingLot.park_vehicle() â†’ iterates floors â†’ finds spot â†’ parks â†’ issues Ticket`. On exit: `Client â†’ ParkingLot.remove_vehicle(ticket_id, payment) â†’ calculates duration â†’ processes payment â†’ frees spot`.

### Example 2: Designing a Vending Machine

**Requirements**: Vending machine manages inventory (products in slots with prices and quantities). Users insert money, select a product, and receive the product and change. The machine has four states: `Idle`, `HasMoney`, `Selecting`, `Dispensing`.

**State Machine**:

```
Idle --[insert money]--> HasMoney
HasMoney --[select product]--> Selecting
Selecting --[check stock & balance]--> Dispensing
Selecting --[insufficient funds]--> HasMoney
Dispensing --[dispense]--> Idle
Dispensing --[refund]--> Idle (if cancelled)
```

**Implementation**:

```python
from abc import ABC, abstractmethod

class Product:
    def __init__(self, name: str, price: float):
        self.name = name
        self.price = price

class Slot:
    def __init__(self, code: str, product: Product, quantity: int):
        self.code = code
        self.product = product
        self.quantity = quantity

    def has_stock(self) -> bool:
        return self.quantity > 0

    def dispense(self) -> Product | None:
        if self.has_stock():
            self.quantity -= 1
            return self.product
        return None

class Inventory:
    def __init__(self):
        self._slots: dict[str, Slot] = {}

    def add_slot(self, slot: Slot):
        self._slots[slot.code] = slot

    def get_product(self, code: str) -> Product | None:
        slot = self._slots.get(code)
        if slot and slot.has_stock():
            return slot.product
        return None

    def dispense(self, code: str) -> Product | None:
        slot = self._slots.get(code)
        return slot.dispense() if slot else None

class VendingMachineState(ABC):
    @abstractmethod
    def insert_money(self, amount: float): ...
    @abstractmethod
    def select_product(self, code: str): ...
    @abstractmethod
    def cancel(self): ...
    @abstractmethod
    def dispense(self) -> Product | None: ...

class IdleState(VendingMachineState):
    def __init__(self, machine):
        self.machine = machine

    def insert_money(self, amount: float):
        self.machine.balance = amount
        self.machine.set_state(self.machine.has_money_state)
        print(f"Balance: ${amount:.2f}")

    def select_product(self, code: str):
        print("Insert money first")

    def cancel(self):
        print("No transaction to cancel")

    def dispense(self):
        print("Insert money first")

class HasMoneyState(VendingMachineState):
    def __init__(self, machine):
        self.machine = machine

    def insert_money(self, amount: float):
        self.machine.balance += amount
        print(f"Balance: ${self.machine.balance:.2f}")

    def select_product(self, code: str):
        product = self.machine.inventory.get_product(code)
        if product and self.machine.balance >= product.price:
            self.machine.selected_code = code
            self.machine.set_state(self.machine.dispensing_state)
            print(f"Selected {product.name} (${product.price:.2f})")
        elif product:
            print(f"Insufficient balance. Need ${product.price:.2f}, have ${self.machine.balance:.2f}")
        else:
            print("Invalid product code")

    def cancel(self):
        print(f"Refunding ${self.machine.balance:.2f}")
        self.machine.balance = 0
        self.machine.set_state(self.machine.idle_state)

    def dispense(self):
        print("Select product first")

class DispensingState(VendingMachineState):
    def __init__(self, machine):
        self.machine = machine

    def insert_money(self, amount: float):
        print("Please collect your product first")

    def select_product(self, code: str):
        print("Please collect your product first")

    def cancel(self):
        print("Cannot cancel during dispensing")

    def dispense(self) -> Product | None:
        product = self.machine.inventory.dispense(self.machine.selected_code)
        if product:
            change = self.machine.balance - product.price
            if change > 0:
                print(f"Dispensing {product.name}. Change: ${change:.2f}")
            else:
                print(f"Dispensing {product.name}")
            self.machine.balance = 0
            self.machine.selected_code = None
            self.machine.set_state(self.machine.idle_state)
            return product
        self.machine.set_state(self.machine.idle_state)
        return None

class VendingMachine:
    def __init__(self):
        self.idle_state = IdleState(self)
        self.has_money_state = HasMoneyState(self)
        self.dispensing_state = DispensingState(self)
        self.state = self.idle_state
        self.balance = 0.0
        self.selected_code = None
        self.inventory = Inventory()

    def set_state(self, state: VendingMachineState):
        self.state = state

    def add_product(self, code: str, product: Product, qty: int):
        self.inventory.add_slot(Slot(code, product, qty))

    def insert_money(self, amount): self.state.insert_money(amount)
    def select_product(self, code): self.state.select_product(code)
    def cancel(self): self.state.cancel()
    def dispense(self): return self.state.dispense()
```

### Example 3: Designing an Elevator System

**Requirements**: Multiple elevators service floor requests. Each elevator has a direction (up, down, idle) and a set of pending requests. The elevator controller dispatches the best elevator for each request using the SCAN algorithm (elevator continues in its current direction, picking up requests along the way, before reversing).

```python
from enum import Enum
from collections import deque
import heapq
import threading

class Direction(Enum):
    UP = 1
    DOWN = -1
    IDLE = 0

class Request:
    def __init__(self, floor: int, direction: Direction = None):
        self.floor = floor
        self.direction = direction  # None for internal car requests

    def __lt__(self, other):
        return self.floor < other.floor

class Elevator:
    def __init__(self, id: int, num_floors: int):
        self.id = id
        self.current_floor = 1
        self.direction = Direction.IDLE
        self._door_open = False
        self._requests_up = []    # Min-heap (ascending)
        self._requests_down = []  # Max-heap via negative (descending)
        self._lock = threading.Lock()

    def add_request(self, floor: int):
        with self._lock:
            if floor > self.current_floor:
                heapq.heappush(self._requests_up, floor)
            elif floor < self.current_floor:
                heapq.heappush(self._requests_down, -floor)

    def has_requests_in_current_direction(self) -> bool:
        if self.direction == Direction.UP:
            return len(self._requests_up) > 0
        elif self.direction == Direction.DOWN:
            return len(self._requests_down) > 0
        return len(self._requests_up) > 0 or len(self._requests_down) > 0

    def get_next_stop(self) -> int | None:
        with self._lock:
            if self.direction == Direction.UP and self._requests_up:
                return heapq.heappop(self._requests_up)
            elif self.direction == Direction.DOWN and self._requests_down:
                return -heapq.heappop(self._requests_down)
            elif self._requests_up:
                return heapq.heappop(self._requests_up)
            elif self._requests_down:
                return -heapq.heappop(self._requests_down)
            return None

    def move(self):
        if self.direction == Direction.IDLE:
            if self._requests_up or self._requests_down:
                self.direction = Direction.UP  # Default to up
            return

        next_floor = self.get_next_stop()
        if next_floor is None:
            self.direction = Direction.IDLE
            return

        # Simulate movement
        if next_floor > self.current_floor:
            self.direction = Direction.UP
        elif next_floor < self.current_floor:
            self.direction = Direction.DOWN

        self.current_floor = next_floor
        self._door_open = True
        # After stopping, check remaining requests
        if not self.has_requests_in_current_direction():
            self.direction = Direction.IDLE

class ElevatorController:
    def __init__(self, num_elevators: int, num_floors: int):
        self.elevators = [Elevator(i, num_floors) for i in range(num_elevators)]
        self.num_floors = num_floors

    def request_elevator(self, floor: int, direction: Direction):
        best = min(self.elevators,
                   key=lambda e: self._score(e, floor, direction))
        best.add_request(floor)
        print(f"Elevator {best.id} dispatched to floor {floor} going {direction.name}")

    def request_floor(self, elevator_id: int, floor: int):
        self.elevators[elevator_id].add_request(floor)

    def _score(self, elevator: Elevator, floor: int, direction: Direction) -> int:
        if elevator.direction == Direction.IDLE:
            return abs(elevator.current_floor - floor)
        if elevator.direction == direction:
            if (direction == Direction.UP and floor >= elevator.current_floor) or \
               (direction == Direction.DOWN and floor <= elevator.current_floor):
                return floor - elevator.current_floor if direction == Direction.UP else elevator.current_floor - floor
        # Going opposite direction â€” must wait for turnaround
        return abs(elevator.current_floor - floor) + self.num_floors

    def step(self):
        for e in self.elevators:
            e.move()
```

**Key design decisions**:
- The SCAN algorithm minimizes starvation by servicing requests in the current direction before reversing.
- Two heaps (`_requests_up`, `_requests_down`) avoid linear scans through all floors.
- The scoring function in the controller estimates travel time to select the optimal elevator.

### Example 4: Designing a Chess Game

**Requirements**: Standard 8x8 chess board. Two players alternate turns. Each piece type (King, Queen, Rook, Bishop, Knight, Pawn) has specific movement rules. The game detects check, checkmate, and stalemate.

```python
from enum import Enum
from abc import ABC, abstractmethod

class Color(Enum):
    WHITE = 0
    BLACK = 1

class Position:
    def __init__(self, row: int, col: int):
        self.row = row  # 0-7
        self.col = col  # 0-7

    def __eq__(self, other):
        return self.row == other.row and self.col == other.col

class Move:
    def __init__(self, from_pos: Position, to_pos: Position,
                 captured: 'Piece' = None):
        self.from_pos = from_pos
        self.to_pos = to_pos
        self.captured = captured

class Piece(ABC):
    def __init__(self, color: Color, position: Position):
        self.color = color
        self.position = position
        self.has_moved = False

    @abstractmethod
    def get_possible_moves(self, board: 'Board') -> list[Position]:
        ...

    def __str__(self):
        return f"{self.color.name[0]}{self.__class__.__name__[0]}"

class Pawn(Piece):
    def get_possible_moves(self, board: 'Board') -> list[Position]:
        moves = []
        direction = -1 if self.color == Color.WHITE else 1
        r, c = self.position.row, self.position.col

        # Forward one
        fwd = Position(r + direction, c)
        if board.is_in_bounds(fwd) and board.get_piece(fwd) is None:
            moves.append(fwd)
            # Forward two from start
            if not self.has_moved:
                fwd2 = Position(r + 2 * direction, c)
                if board.get_piece(fwd2) is None:
                    moves.append(fwd2)

        # Captures (diagonal)
        for dc in [-1, 1]:
            cap = Position(r + direction, c + dc)
            if board.is_in_bounds(cap):
                target = board.get_piece(cap)
                if target and target.color != self.color:
                    moves.append(cap)
        return moves

class Rook(Piece):
    def get_possible_moves(self, board: 'Board') -> list[Position]:
        return self._line_moves(board, [(0, 1), (0, -1), (1, 0), (-1, 0)])

    def _line_moves(self, board: 'Board', directions: list[tuple]) -> list[Position]:
        moves = []
        for dr, dc in directions:
            r, c = self.position.row + dr, self.position.col + dc
            while 0 <= r < 8 and 0 <= c < 8:
                target = board.get_piece(Position(r, c))
                if target is None:
                    moves.append(Position(r, c))
                else:
                    if target.color != self.color:
                        moves.append(Position(r, c))
                    break
                r += dr; c += dc
        return moves

class Knight(Piece):
    def get_possible_moves(self, board: 'Board') -> list[Position]:
        jumps = [(2, 1), (2, -1), (-2, 1), (-2, -1),
                 (1, 2), (1, -2), (-1, 2), (-1, -2)]
        moves = []
        for dr, dc in jumps:
            pos = Position(self.position.row + dr, self.position.col + dc)
            if board.is_in_bounds(pos):
                target = board.get_piece(pos)
                if target is None or target.color != self.color:
                    moves.append(pos)
        return moves

class Bishop(Piece):
    def get_possible_moves(self, board: 'Board') -> list[Position]:
        return self._line_moves(board, [(1, 1), (1, -1), (-1, 1), (-1, -1)])

class Queen(Piece):
    def get_possible_moves(self, board: 'Board') -> list[Position]:
        # Queen = Rook + Bishop moves
        return (Rook(self.color, self.position)._line_moves(board,
                [(0, 1), (0, -1), (1, 0), (-1, 0)]) +
                Bishop(self.color, self.position)._line_moves(board,
                [(1, 1), (1, -1), (-1, 1), (-1, -1)]))

class King(Piece):
    def get_possible_moves(self, board: 'Board') -> list[Position]:
        moves = []
        for dr in [-1, 0, 1]:
            for dc in [-1, 0, 1]:
                if dr == 0 and dc == 0:
                    continue
                pos = Position(self.position.row + dr, self.position.col + dc)
                if board.is_in_bounds(pos):
                    target = board.get_piece(pos)
                    if target is None or target.color != self.color:
                        moves.append(pos)
        return moves

class Board:
    def __init__(self):
        self.grid: list[list[Piece | None]] = [[None] * 8 for _ in range(8)]
        self._setup()

    def _setup(self):
        # Place pieces â€” abbreviated for clarity
        for col in range(8):
            self.grid[1][col] = Pawn(Color.BLACK, Position(1, col))
            self.grid[6][col] = Pawn(Color.WHITE, Position(6, col))
        placements = [Rook, Knight, Bishop, Queen, King, Bishop, Knight, Rook]
        for col, cls in enumerate(placements):
            self.grid[0][col] = cls(Color.BLACK, Position(0, col))
            self.grid[7][col] = cls(Color.WHITE, Position(7, col))

    def get_piece(self, pos: Position) -> Piece | None:
        return self.grid[pos.row][pos.col]

    def set_piece(self, pos: Position, piece: Piece | None):
        self.grid[pos.row][pos.col] = piece

    def is_in_bounds(self, pos: Position) -> bool:
        return 0 <= pos.row < 8 and 0 <= pos.col < 8

    def move_piece(self, move: Move):
        piece = self.get_piece(move.from_pos)
        self.set_piece(move.to_pos, piece)
        self.set_piece(move.from_pos, None)
        piece.position = move.to_pos
        piece.has_moved = True

    def undo_move(self, move: Move):
        piece = self.get_piece(move.to_pos)
        self.set_piece(move.from_pos, piece)
        self.set_piece(move.to_pos, move.captured)
        piece.position = move.from_pos
        piece.has_moved = False

    def find_king(self, color: Color) -> Position:
        for row in range(8):
            for col in range(8):
                p = self.grid[row][col]
                if isinstance(p, King) and p.color == color:
                    return Position(row, col)
        return None

    def is_square_attacked(self, pos: Position, by_color: Color) -> bool:
        for row in range(8):
            for col in range(8):
                p = self.grid[row][col]
                if p and p.color == by_color:
                    if pos in p.get_possible_moves(self):
                        return True
        return False

    def is_in_check(self, color: Color) -> bool:
        king_pos = self.find_king(color)
        enemy = Color.BLACK if color == Color.WHITE else Color.WHITE
        return self.is_square_attacked(king_pos, enemy)

    def get_legal_moves(self, color: Color) -> list[Move]:
        moves = []
        for row in range(8):
            for col in range(8):
                p = self.grid[row][col]
                if p and p.color == color:
                    for target in p.get_possible_moves(self):
                        move = Move(p.position, target, self.get_piece(target))
                        self.move_piece(move)
                        if not self.is_in_check(color):
                            moves.append(move)
                        self.undo_move(move)
        return moves

class Game:
    def __init__(self):
        self.board = Board()
        self.turn = Color.WHITE
        self.move_history: list[Move] = []

    def make_move(self, from_pos: Position, to_pos: Position) -> bool:
        piece = self.board.get_piece(from_pos)
        if not piece or piece.color != self.turn:
            return False

        legal_moves = self.board.get_legal_moves(self.turn)
        for move in legal_moves:
            if move.from_pos == from_pos and move.to_pos == to_pos:
                self.board.move_piece(move)
                self.move_history.append(move)
                self.turn = Color.BLACK if self.turn == Color.WHITE else Color.WHITE

                if len(self.board.get_legal_moves(self.turn)) == 0:
                    if self.board.is_in_check(self.turn):
                        print("Checkmate!")
                    else:
                        print("Stalemate!")
                elif self.board.is_in_check(self.turn):
                    print("Check!")
                return True
        return False  # Illegal move
```

**Validation**: Legal moves are filtered through a "make-move, check for self-check, undo" loop. This ensures that no move leaves the player's own king in check. Check and checkmate are derived from the same legal-move generation logic.

### Example 5: Designing a Logger Library

**Requirements**: A flexible logging library supporting multiple output targets (console, file, network), multiple log levels, configurable formatting, and minimal performance overhead.

```python
from enum import Enum
from abc import ABC, abstractmethod
from datetime import datetime
import threading

class LogLevel(Enum):
    DEBUG = 0
    INFO = 1
    WARN = 2
    ERROR = 3
    FATAL = 4

class LogRecord:
    def __init__(self, level: LogLevel, logger: str, message: str):
        self.level = level
        self.logger = logger
        self.message = message
        self.timestamp = datetime.now()
        self.thread = threading.current_thread().name

class Formatter(ABC):
    @abstractmethod
    def format(self, record: LogRecord) -> str: ...

class PlainTextFormatter(Formatter):
    def format(self, record: LogRecord) -> str:
        return f"[{record.timestamp}] [{record.level.name}] {record.logger}: {record.message}"

class JsonFormatter(Formatter):
    def format(self, record: LogRecord) -> str:
        import json
        return json.dumps({
            "timestamp": record.timestamp.isoformat(),
            "level": record.level.name,
            "logger": record.logger,
            "message": record.message,
            "thread": record.thread
        })

class Appender(ABC):
    @abstractmethod
    def append(self, record: LogRecord): ...

class ConsoleAppender(Appender):
    def append(self, record: LogRecord):
        print(record.formatted)

class FileAppender(Appender):
    def __init__(self, path: str):
        self.path = path
        self._lock = threading.Lock()

    def append(self, record: LogRecord):
        with self._lock:
            with open(self.path, 'a') as f:
                f.write(record.formatted + "\n")

class NetworkAppender(Appender):
    def __init__(self, host: str, port: int):
        self.host = host
        self.port = port

    def append(self, record: LogRecord):
        # Placeholder for socket send
        pass

class Logger:
    def __init__(self, name: str, level: LogLevel = LogLevel.DEBUG):
        self._name = name
        self._level = level
        self._appenders: list[Appender] = []
        self._formatter: Formatter = PlainTextFormatter()
        self._lock = threading.Lock()

    def add_appender(self, appender: Appender):
        self._appenders.append(appender)

    def set_formatter(self, formatter: Formatter):
        self._formatter = formatter

    def _log(self, level: LogLevel, message: str):
        if level.value < self._level.value:
            return
        record = LogRecord(level, self._name, message)
        record.formatted = self._formatter.format(record)
        with self._lock:
            for appender in self._appenders:
                appender.append(record)

    def debug(self, msg): self._log(LogLevel.DEBUG, msg)
    def info(self, msg): self._log(LogLevel.INFO, msg)
    def warn(self, msg): self._log(LogLevel.WARN, msg)
    def error(self, msg): self._log(LogLevel.ERROR, msg)
    def fatal(self, msg): self._log(LogLevel.FATAL, msg)

class LoggerFactory:
    _loggers: dict[str, Logger] = {}
    _lock = threading.Lock()

    @classmethod
    def get_logger(cls, name: str, level: LogLevel = LogLevel.DEBUG) -> Logger:
        if name not in cls._loggers:
            with cls._lock:
                if name not in cls._loggers:
                    cls._loggers[name] = Logger(name, level)
        return cls._loggers[name]
```

### Example 6: Designing a Rate Limiter Library

> **Remember:** Trade-offs are the heart of system design. Always be ready to explain why you chose X over Y.
**Requirements**: A rate limiter that throttles requests per user. Support both Token Bucket and Sliding Window algorithms. Thread-safe and configurable.

```python
import time
import threading
from collections import deque
from abc import ABC, abstractmethod

class RateLimiter(ABC):
    @abstractmethod
    def allow_request(self, key: str) -> bool: ...

class TokenBucket(RateLimiter):
    def __init__(self, capacity: int, refill_rate: float):
        self.capacity = capacity          # Max tokens
        self.refill_rate = refill_rate    # Tokens per second
        self._buckets: dict[str, float] = {}
        self._last_refill: dict[str, float] = {}
        self._lock = threading.Lock()

    def allow_request(self, key: str) -> bool:
        with self._lock:
            now = time.time()
            if key not in self._buckets:
                self._buckets[key] = self.capacity
                self._last_refill[key] = now

            elapsed = now - self._last_refill[key]
            self._buckets[key] = min(self.capacity,
                                     self._buckets[key] + elapsed * self.refill_rate)
            self._last_refill[key] = now

            if self._buckets[key] >= 1:
                self._buckets[key] -= 1
                return True
            return False

class SlidingWindow(RateLimiter):
    def __init__(self, window_size: float, max_requests: int):
        self.window_size = window_size        # in seconds
        self.max_requests = max_requests
        self._windows: dict[str, deque] = {}
        self._lock = threading.Lock()

    def allow_request(self, key: str) -> bool:
        with self._lock:
            now = time.time()
            if key not in self._windows:
                self._windows[key] = deque()

            window = self._windows[key]
            # Remove expired timestamps
            while window and window[0] <= now - self.window_size:
                window.popleft()

            if len(window) < self.max_requests:
                window.append(now)
                return True
            return False

class RateLimiterFactory:
    @staticmethod
    def create_token_bucket(capacity: int, refill_rate: float) -> RateLimiter:
        return TokenBucket(capacity, refill_rate)

    @staticmethod
    def create_sliding_window(window_seconds: float, max_requests: int) -> RateLimiter:
        return SlidingWindow(window_seconds, max_requests)
```

## Concept Comparison

| Concept | Definition | Key Insight |
|---------|-----------|-------------|
| Theory | Core topic in Chapter 12: Low-Level Design: Component and Class Design | Fundamental concept for system design |

---

## Quick Reference

| Topic | Key Point |
|-------|-----------|
| Theory | Essential concept from Chapter 12: Low-Level Design: Component and Class Design |

---

## Cross-Application Matrix

| Concept | Application | Trade-Off |
|---------|------------|-----------|
| Theory | Relevant across design scenarios | Requirements-driven decisions |

---

## Chapter Quiz

**Q1:** What is the key takeaway from this chapter?
- A) Option A
- B) Option B
- C) Option C
- D) Option D

<details><summary>Answer</summary>Refer to the chapter content</details>

**Q2:** Which concept is most critical for distributed systems?
- A) Option A
- B) Option B
- C) Option C
- D) Option D

<details><summary>Answer</summary>Refer to the chapter content</details>

**Q3:** How does this topic apply to FAANG-level system design?
- A) Option A
- B) Option B
- C) Option C
- D) Option D

<details><summary>Answer</summary>Refer to the chapter content</details>

---

## Summary
- UML class diagrams use rectangles for classes, with `/` italicization for abstract entities, specific arrow types for inheritance (hollow triangle), composition (filled diamond), aggregation (hollow diamond), and dependency (dashed arrow).
- Sequence diagrams model message flow across time with activation bars and combined fragments (alt, opt, loop, par) for control logic.
- The Parking Lot design demonstrates entity modeling (Vehicle hierarchy, ParkingSpot, Ticket, Payment) with thread-safe parking allocation.
- The Vending Machine illustrates the State pattern with four states and clean state transitions.
- The Elevator System uses the SCAN algorithm with dual heaps for efficient request scheduling.
- The Chess Game shows complete move validation through a make-move/check/undo cycle, with abstract movement logic per piece type.
- The Logger library separates concerns (formatting, output, level filtering) into independently swappable components.
- The Rate Limiter library abstracts two algorithms behind a common interface with thread-safe concurrent access.
---
## Exercises
### Review Questions
1. What is the difference between aggregation and composition in UML? Give a real-world example where confusing them would cause bugs.
2. In the parking lot design, why is it important to lock the `ParkingSpot.park()` method but not the `ParkingLot.park_vehicle()` iteration? What could go wrong?
3. The chess implementation validates legal moves by executing, checking for self-check, and undoing. What are the performance implications of this approach, and how could you optimize it for a chess engine?
4. In the elevator system, what advantage does the SCAN algorithm provide over FCFS (First-Come-First-Served)? Under what conditions does SCAN perform worse?

### Application Problems
1. Draw a UML class diagram for the parking lot system including: `ParkingLot`, `ParkingFloor`, `ParkingSpot`, `Vehicle` (abstract), `Car`, `Motorcycle`, `Truck`, `Ticket`, `Payment` (abstract), `CashPayment`, `CardPayment`. Show all multiplicities, inheritance, and composition relationships.
2. Implement a "parking spot occupancy display" for the parking lot using the Observer pattern. The display should update whenever a spot becomes occupied or free. Add the necessary `register_observer` and `notify` methods without modifying the existing `ParkingSpot` interface.
3. Extend the vending machine to support a "Restocking" state that is only accessible to authorized personnel with an access code. The restocking state should allow adding inventory without going through the normal usage flow.

### Challenge Problem
Design and implement a **Movie Ticket Booking System** covering:
- **Theaters** with multiple screens, each with a seating layout and showtimes
- **Seat types** (standard, premium, recliner) each with different pricing
- **Booking flow**: select movie â†’ showtime â†’ seats â†’ payment â†’ confirmation
- **Concurrency handling**: two users must not book the same seat within 50ms
- **State machine**: a booking starts as `PENDING`, moves to `CONFIRMED` on payment, or `CANCELLED` on timeout (15-minute hold expiry)
- **Seat locking**: seats are temporarily locked during booking and released on timeout or cancellation
- **Notifications**: email confirmations sent asynchronously after successful booking

Write UML class and sequence diagrams, then implement the core classes in Python with thread safety. Include a scheduled timer task that releases expired holds.
