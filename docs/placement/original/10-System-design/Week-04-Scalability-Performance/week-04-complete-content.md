# Week 4: Scalability & Performance Optimization

## Course Information
- **Week**: 4 of 10
- **Duration**: 7 days
- **Difficulty**: Intermediate to Advanced
- **Prerequisites**: Week 1-3 (Fundamentals, Building Blocks, API Design)

---

## 📋 Week Overview

This week focuses on designing systems that can handle massive scale while maintaining excellent performance. You'll learn horizontal and vertical scaling strategies, database optimization techniques, and how to leverage CDNs.

### Learning Objectives

By the end of this week, you will be able to:

1. ✅ Understand horizontal vs vertical scaling trade-offs
2. ✅ Implement database sharding strategies
3. ✅ Design replication architectures
4. ✅ Optimize database queries and indexing
5. ✅ Implement Content Delivery Networks (CDN)
6. ✅ Apply performance optimization techniques
7. ✅ Conduct load testing and benchmarking
8. ✅ Design auto-scaling systems

---

## 📚 Daily Breakdown

### Day 1: Scaling Fundamentals
- Horizontal vs Vertical Scaling
- When to scale and how
- Capacity planning
- Cost considerations
- **Hands-on**: Design scaling strategy for e-commerce

### Day 2: Database Sharding
- Sharding strategies (Range, Hash, Directory)
- Consistent hashing
- Cross-shard queries
- Rebalancing shards
- **Hands-on**: Implement database sharding

### Day 3: Replication & High Availability
- Master-slave replication
- Master-master replication
- Read replicas
- Failover strategies
- **Hands-on**: Set up database replication

### Day 4: Performance Optimization
- Query optimization
- Database indexing strategies
- Connection pooling
- Query caching
- **Hands-on**: Optimize slow queries

### Day 5: Content Delivery Networks
- CDN architecture
- Edge caching
- Cache invalidation
- Static vs dynamic content
- **Hands-on**: Implement CDN strategy

### Day 6: Load Testing
- Performance benchmarking
- Load testing tools
- Stress testing
- Capacity planning
- **Hands-on**: Load test your application

### Day 7: Auto-scaling
- Horizontal auto-scaling
- Scaling policies
- Cloud auto-scaling (AWS, GCP)
- Container orchestration
- **Hands-on**: Implement auto-scaling

---

## 🎯 Day 1: Scaling Fundamentals

### 1.1 Horizontal vs Vertical Scaling

#### Vertical Scaling (Scale Up)
Add more power to existing machine (CPU, RAM, Disk)

```
Before:                    After:
┌──────────┐              ┌──────────┐
│ 4 CPU    │              │ 16 CPU   │
│ 8GB RAM  │  ──────►     │ 32GB RAM │
│ 100GB    │              │ 1TB SSD  │
└──────────┘              └──────────┘
```

**Pros:**
- ✅ Simple implementation
- ✅ No code changes needed
- ✅ Maintains data consistency
- ✅ Lower latency (single machine)

**Cons:**
- ❌ Hardware limits (physical ceiling)
- ❌ Expensive at scale
- ❌ Single point of failure
- ❌ Downtime during upgrade

#### Horizontal Scaling (Scale Out)
Add more machines to distribute load

```
Before:                    After:
┌──────────┐              ┌──────────┐  ┌──────────┐  ┌──────────┐
│ Server   │              │ Server 1 │  │ Server 2 │  │ Server 3 │
│          │  ──────►     │          │  │          │  │          │
│          │              │          │  │          │  │          │
└──────────┘              └──────────┘  └──────────┘  └──────────┘
                                 │           │           │
                          ┌──────┴───────────┴──────────┘
                          │    Load Balancer
```

**Pros:**
- ✅ No hardware limits (infinite scaling)
- ✅ Cost-effective (commodity hardware)
- ✅ High availability (redundancy)
- ✅ No downtime (rolling updates)

**Cons:**
- ❌ Complex architecture
- ❌ Requires code changes
- ❌ Data consistency challenges
- ❌ Higher latency (network overhead)

### 1.2 When to Choose Which?

#### Choose Vertical Scaling When:
- Starting out (simple is better)
- Tight coupling requirements
- Single database transactions needed
- Budget allows expensive hardware
- Predictable growth patterns

#### Choose Horizontal Scaling When:
- Need unlimited growth potential
- Want high availability
- Cost-sensitive at scale
- Stateless applications
- Modern cloud-native architecture

### 1.3 Hybrid Approach

Most systems use both:

```
┌─────────────────────────────────────────┐
│           Load Balancer                 │
└───┬─────────┬─────────┬─────────────┬───┘
    │         │         │             │
┌───▼──────┐ ┌▼────────┐ ┌──▼───────┐ ┌▼──────────┐
│ Server 1 │ │Server 2 │ │ Server 3 │ │ Server N  │
│ (Scaled) │ │(Scaled) │ │(Scaled)  │ │ (Scaled)  │
│ 8 CPU    │ │8 CPU    │ │8 CPU     │ │ 8 CPU     │
│ 16GB RAM │ │16GB RAM │ │16GB RAM  │ │ 16GB RAM  │
└──────────┘ └─────────┘ └──────────┘ └───────────┘
```

### 1.4 Capacity Planning

#### Traffic Estimation

```python
from dataclasses import dataclass
from typing import Dict

@dataclass
class TrafficMetrics:
    daily_active_users: int
    requests_per_user_per_day: int
    peak_to_average_ratio: float = 3.0
    
    def calculate_capacity(self) -> Dict[str, float]:
        # Average requests per second
        total_daily_requests = self.daily_active_users * self.requests_per_user_per_day
        avg_rps = total_daily_requests / (24 * 3600)
        
        # Peak requests per second
        peak_rps = avg_rps * self.peak_to_average_ratio
        
        # Add 50% buffer for growth
        required_capacity = peak_rps * 1.5
        
        return {
            "average_rps": avg_rps,
            "peak_rps": peak_rps,
            "required_capacity": required_capacity,
            "servers_needed": self._calculate_servers(required_capacity)
        }
    
    def _calculate_servers(self, required_rps: float) -> int:
        # Assume each server can handle 1000 RPS
        rps_per_server = 1000
        return int(required_rps / rps_per_server) + 1

# Example: Social media application
metrics = TrafficMetrics(
    daily_active_users=10_000_000,  # 10M DAU
    requests_per_user_per_day=100
)

capacity = metrics.calculate_capacity()
print(f"Average RPS: {capacity['average_rps']:.2f}")
print(f"Peak RPS: {capacity['peak_rps']:.2f}")
print(f"Required Capacity: {capacity['required_capacity']:.2f}")
print(f"Servers Needed: {capacity['servers_needed']}")

# Output:
# Average RPS: 11574.07
# Peak RPS: 34722.22
# Required Capacity: 52083.33
# Servers Needed: 53
```

### 1.5 Cost Analysis

#### Vertical Scaling Cost

```python
class VerticalScalingCost:
    def __init__(self):
        # AWS EC2 pricing (simplified)
        self.pricing = {
            't3.medium': {'cpu': 2, 'ram': 4, 'cost': 38},      # per month
            't3.large': {'cpu': 2, 'ram': 8, 'cost': 75},
            't3.xlarge': {'cpu': 4, 'ram': 16, 'cost': 150},
            't3.2xlarge': {'cpu': 8, 'ram': 32, 'cost': 301},
            'r5.4xlarge': {'cpu': 16, 'ram': 128, 'cost': 1008}
        }
    
    def calculate_cost(self, instance_type: str, count: int = 1) -> float:
        return self.pricing[instance_type]['cost'] * count

# Example
vs = VerticalScalingCost()
print(f"1x r5.4xlarge: ${vs.calculate_cost('r5.4xlarge')}/month")
print(f"Total: ${vs.calculate_cost('r5.4xlarge')}/month")
```

#### Horizontal Scaling Cost

```python
class HorizontalScalingCost:
    def __init__(self):
        self.pricing = {
            't3.medium': {'cpu': 2, 'ram': 4, 'cost': 38},
            'load_balancer': 23,  # Application Load Balancer
        }
    
    def calculate_cost(self, servers: int) -> Dict[str, float]:
        server_cost = self.pricing['t3.medium']['cost'] * servers
        lb_cost = self.pricing['load_balancer']
        total = server_cost + lb_cost
        
        return {
            'servers': server_cost,
            'load_balancer': lb_cost,
            'total': total,
            'per_server': total / servers
        }

# Example: 10 smaller servers
hs = HorizontalScalingCost()
cost = hs.calculate_cost(10)
print(f"10x t3.medium: ${cost['servers']}/month")
print(f"Load Balancer: ${cost['load_balancer']}/month")
print(f"Total: ${cost['total']}/month")
print(f"Cost per server: ${cost['per_server']:.2f}/month")
```

---

## 🎯 Day 2: Database Sharding

### 2.1 What is Sharding?

Sharding is partitioning data across multiple database instances to distribute load.

```
Before Sharding:                  After Sharding:
┌─────────────────┐              ┌──────────┐ ┌──────────┐ ┌──────────┐
│   All Users     │              │ Users    │ │ Users    │ │ Users    │
│   (10M records) │  ────────►   │ A-H      │ │ I-P      │ │ Q-Z      │
│                 │              │ (3.3M)   │ │ (3.3M)   │ │ (3.4M)   │
└─────────────────┘              └──────────┘ └──────────┘ └──────────┘
  Single Database                  Shard 1      Shard 2      Shard 3
```

### 2.2 Sharding Strategies

#### 1. Range-Based Sharding

Partition by value ranges

```python
class RangeBasedSharding:
    def __init__(self):
        self.shards = {
            'shard_1': {'range': ('A', 'H'), 'db': 'db1.example.com'},
            'shard_2': {'range': ('I', 'P'), 'db': 'db2.example.com'},
            'shard_3': {'range': ('Q', 'Z'), 'db': 'db3.example.com'}
        }
    
    def get_shard(self, key: str) -> str:
        """Determine which shard to use based on first letter"""
        first_letter = key[0].upper()
        
        for shard_name, config in self.shards.items():
            start, end = config['range']
            if start <= first_letter <= end:
                return config['db']
        
        raise ValueError(f"No shard found for key: {key}")

# Usage
sharding = RangeBasedSharding()
print(f"User 'Alice' -> {sharding.get_shard('Alice')}")    # db1
print(f"User 'John' -> {sharding.get_shard('John')}")      # db2
print(f"User 'Zoe' -> {sharding.get_shard('Zoe')}")        # db3
```

**Pros:**
- ✅ Simple to implement
- ✅ Range queries are efficient
- ✅ Easy to add new shards

**Cons:**
- ❌ Uneven data distribution
- ❌ Hotspots (popular ranges overloaded)

#### 2. Hash-Based Sharding

Partition using hash function

```python
import hashlib

class HashBasedSharding:
    def __init__(self, num_shards: int = 3):
        self.num_shards = num_shards
        self.shards = {
            0: 'db1.example.com',
            1: 'db2.example.com',
            2: 'db3.example.com'
        }
    
    def get_shard(self, key: str) -> str:
        """Hash key and determine shard"""
        # Hash the key
        hash_value = int(hashlib.md5(key.encode()).hexdigest(), 16)
        
        # Modulo to get shard number
        shard_num = hash_value % self.num_shards
        
        return self.shards[shard_num]
    
    def get_all_shards_for_scan(self) -> list:
        """For queries that need to check all shards"""
        return list(self.shards.values())

# Usage
sharding = HashBasedSharding(num_shards=3)
print(f"User 'Alice' -> {sharding.get_shard('Alice')}")
print(f"User 'Bob' -> {sharding.get_shard('Bob')}")
print(f"User 'Charlie' -> {sharding.get_shard('Charlie')}")
```

**Pros:**
- ✅ Even data distribution
- ✅ No hotspots
- ✅ Scalable

**Cons:**
- ❌ Range queries require checking all shards
- ❌ Resharding is complex

#### 3. Consistent Hashing

Advanced hashing that minimizes data movement

```python
import hashlib
from typing import List, Dict
from bisect import bisect_right

class ConsistentHashing:
    def __init__(self, nodes: List[str], virtual_nodes: int = 150):
        self.virtual_nodes = virtual_nodes
        self.ring: Dict[int, str] = {}
        self.sorted_keys: List[int] = []
        
        for node in nodes:
            self.add_node(node)
    
    def _hash(self, key: str) -> int:
        """Generate hash for a key"""
        return int(hashlib.md5(key.encode()).hexdigest(), 16)
    
    def add_node(self, node: str):
        """Add a node with virtual nodes to the ring"""
        for i in range(self.virtual_nodes):
            virtual_key = f"{node}:{i}"
            hash_value = self._hash(virtual_key)
            self.ring[hash_value] = node
            self.sorted_keys.append(hash_value)
        
        self.sorted_keys.sort()
    
    def remove_node(self, node: str):
        """Remove a node from the ring"""
        for i in range(self.virtual_nodes):
            virtual_key = f"{node}:{i}"
            hash_value = self._hash(virtual_key)
            if hash_value in self.ring:
                del self.ring[hash_value]
                self.sorted_keys.remove(hash_value)
    
    def get_node(self, key: str) -> str:
        """Get the node responsible for a key"""
        if not self.ring:
            return None
        
        hash_value = self._hash(key)
        
        # Find the first node clockwise on the ring
        idx = bisect_right(self.sorted_keys, hash_value)
        
        # Wrap around if necessary
        if idx == len(self.sorted_keys):
            idx = 0
        
        return self.ring[self.sorted_keys[idx]]

# Usage
nodes = ['shard1.db.com', 'shard2.db.com', 'shard3.db.com']
ch = ConsistentHashing(nodes)

# Test distribution
keys = [f"user_{i}" for i in range(100)]
distribution = {}

for key in keys:
    node = ch.get_node(key)
    distribution[node] = distribution.get(node, 0) + 1

print("Distribution:")
for node, count in distribution.items():
    print(f"{node}: {count} keys")

# Add a new node
ch.add_node('shard4.db.com')
print("\nAfter adding shard4:")
distribution = {}
for key in keys:
    node = ch.get_node(key)
    distribution[node] = distribution.get(node, 0) + 1

for node, count in distribution.items():
    print(f"{node}: {count} keys")
```

**Pros:**
- ✅ Minimal data movement when adding/removing nodes
- ✅ Even distribution
- ✅ Fault tolerance

**Cons:**
- ❌ More complex implementation
- ❌ Requires careful tuning

### 2.3 Handling Cross-Shard Queries

```python
import asyncio
from typing import List, Dict, Any

class ShardedDatabase:
    def __init__(self, shards: List[str]):
        self.sharding = HashBasedSharding(len(shards))
        self.connections = {i: shard for i, shard in enumerate(shards)}
    
    async def get_by_id(self, user_id: str) -> Dict[str, Any]:
        """Single shard query"""
        shard = self.sharding.get_shard(user_id)
        # Simulate database query
        return await self._query_shard(shard, f"SELECT * FROM users WHERE id = '{user_id}'")
    
    async def search_all_shards(self, query: str) -> List[Dict[str, Any]]:
        """Query that requires checking all shards"""
        all_shards = self.sharding.get_all_shards_for_scan()
        
        # Query all shards in parallel
        tasks = [
            self._query_shard(shard, f"SELECT * FROM users WHERE {query}")
            for shard in all_shards
        ]
        
        results = await asyncio.gather(*tasks)
        
        # Merge results
        merged = []
        for result in results:
            merged.extend(result)
        
        return merged
    
    async def _query_shard(self, shard: str, query: str) -> List[Dict[str, Any]]:
        """Simulate querying a shard"""
        # In real implementation, this would use actual database connection
        await asyncio.sleep(0.1)  # Simulate network latency
        return [{"shard": shard, "data": "sample"}]
    
    async def aggregate_query(self, metric: str) -> Dict[str, Any]:
        """Aggregate query across all shards"""
        all_shards = self.sharding.get_all_shards_for_scan()
        
        # Get metrics from each shard
        tasks = [
            self._get_metric_from_shard(shard, metric)
            for shard in all_shards
        ]
        
        shard_metrics = await asyncio.gather(*tasks)
        
        # Aggregate results
        return {
            "total": sum(m["count"] for m in shard_metrics),
            "per_shard": shard_metrics
        }
    
    async def _get_metric_from_shard(self, shard: str, metric: str) -> Dict[str, Any]:
        """Get metric from a specific shard"""
        await asyncio.sleep(0.1)
        return {"shard": shard, "count": 1000}  # Simulated

# Usage
async def main():
    db = ShardedDatabase([
        'shard1.db.com',
        'shard2.db.com',
        'shard3.db.com'
    ])
    
    # Single shard query
    user = await db.get_by_id('user_12345')
    print(f"User: {user}")
    
    # Cross-shard search
    results = await db.search_all_shards("name LIKE '%John%'")
    print(f"Search results: {len(results)} found")
    
    # Aggregate query
    stats = await db.aggregate_query('user_count')
    print(f"Total users: {stats['total']}")

# Run
# asyncio.run(main())
```

### 2.4 Resharding Strategy

```python
class ReshardingManager:
    """Manage resharding with minimal downtime"""
    
    def __init__(self, old_shards: int, new_shards: int):
        self.old_shards = old_shards
        self.new_shards = new_shards
    
    def calculate_migration_plan(self) -> List[Dict[str, Any]]:
        """Calculate which data needs to move"""
        migrations = []
        
        # For each piece of data, check if it needs to move
        for old_shard in range(self.old_shards):
            for data_key in range(1000):  # Simplified
                old_location = data_key % self.old_shards
                new_location = data_key % self.new_shards
                
                if old_location != new_location:
                    migrations.append({
                        'key': data_key,
                        'from_shard': old_location,
                        'to_shard': new_location
                    })
        
        return migrations
    
    async def execute_resharding(self):
        """Execute resharding with dual writes"""
        # Phase 1: Start dual writes (write to both old and new)
        print("Phase 1: Starting dual writes...")
        
        # Phase 2: Migrate existing data
        print("Phase 2: Migrating data...")
        migrations = self.calculate_migration_plan()
        for migration in migrations:
            await self._migrate_data(migration)
        
        # Phase 3: Switch reads to new shards
        print("Phase 3: Switching reads to new shards...")
        
        # Phase 4: Stop writes to old shards
        print("Phase 4: Stopping writes to old shards...")
        
        print("Resharding complete!")
    
    async def _migrate_data(self, migration: Dict[str, Any]):
        """Migrate a single piece of data"""
        # Simulate data migration
        await asyncio.sleep(0.001)

# Usage
# manager = ReshardingManager(old_shards=3, new_shards=5)
# asyncio.run(manager.execute_resharding())
```

---

## 🎯 Day 3: Database Replication

### 3.1 Master-Slave Replication

```
Write            Read       Read       Read
  ↓               ↑          ↑          ↑
┌─────────┐   ┌─────────┐ ┌─────────┐ ┌─────────┐
│ Master  │──→│ Slave 1 │ │ Slave 2 │ │ Slave 3 │
│ (Write) │   │ (Read)  │ │ (Read)  │ │ (Read)  │
└─────────┘   └─────────┘ └─────────┘ └─────────┘
```

**Implementation:**

```python
from enum import Enum
from typing import Optional
import asyncio

class ReplicaType(Enum):
    MASTER = "master"
    SLAVE = "slave"

class DatabaseReplica:
    def __init__(self, host: str, replica_type: ReplicaType):
        self.host = host
        self.replica_type = replica_type
        self.is_healthy = True
        self.replication_lag = 0  # seconds
    
    async def execute_write(self, query: str) -> bool:
        """Execute write query"""
        if self.replica_type != ReplicaType.MASTER:
            raise Exception("Writes only allowed on master")
        
        # Simulate write
        await asyncio.sleep(0.01)
        return True
    
    async def execute_read(self, query: str) -> dict:
        """Execute read query"""
        # Simulate read
        await asyncio.sleep(0.005)
        return {"data": "result"}

class ReplicationManager:
    def __init__(self):
        self.master: Optional[DatabaseReplica] = None
        self.slaves: List[DatabaseReplica] = []
        self.current_slave_index = 0
    
    def add_master(self, host: str):
        """Add master database"""
        self.master = DatabaseReplica(host, ReplicaType.MASTER)
    
    def add_slave(self, host: str):
        """Add slave database"""
        slave = DatabaseReplica(host, ReplicaType.SLAVE)
        self.slaves.append(slave)
    
    async def write(self, query: str) -> bool:
        """Execute write on master"""
        if not self.master:
            raise Exception("No master configured")
        
        # Write to master
        success = await self.master.execute_write(query)
        
        if success:
            # Replicate to slaves asynchronously
            asyncio.create_task(self._replicate_to_slaves(query))
        
        return success
    
    async def read(self, query: str, read_from_master: bool = False) -> dict:
        """Execute read from slave (or master if specified)"""
        if read_from_master or not self.slaves:
            return await self.master.execute_read(query)
        
        # Round-robin load balancing across slaves
        slave = self._get_next_healthy_slave()
        
        if not slave:
            # Fallback to master if no healthy slaves
            return await self.master.execute_read(query)
        
        return await slave.execute_read(query)
    
    def _get_next_healthy_slave(self) -> Optional[DatabaseReplica]:
        """Get next healthy slave using round-robin"""
        attempts = 0
        
        while attempts < len(self.slaves):
            slave = self.slaves[self.current_slave_index]
            self.current_slave_index = (self.current_slave_index + 1) % len(self.slaves)
            
            if slave.is_healthy and slave.replication_lag < 5:
                return slave
            
            attempts += 1
        
        return None
    
    async def _replicate_to_slaves(self, query: str):
        """Replicate write to all slaves"""
        tasks = [
            slave.execute_write(query)
            for slave in self.slaves
            if slave.is_healthy
        ]
        
        if tasks:
            await asyncio.gather(*tasks, return_exceptions=True)

# Usage
async def main():
    replication = ReplicationManager()
    
    # Configure topology
    replication.add_master("master.db.com")
    replication.add_slave("slave1.db.com")
    replication.add_slave("slave2.db.com")
    replication.add_slave("slave3.db.com")
    
    # Write operation
    await replication.write("INSERT INTO users VALUES (...)")
    
    # Read operations (from slaves)
    result1 = await replication.read("SELECT * FROM users WHERE id = 1")
    result2 = await replication.read("SELECT * FROM users WHERE id = 2")
    
    # Read from master (for strong consistency)
    result3 = await replication.read(
        "SELECT * FROM users WHERE id = 3",
        read_from_master=True
    )

# asyncio.run(main())
```

### 3.2 Master-Master Replication

```
Write ←→ Write
  ↓       ↓
┌─────────┐ ←→ ┌─────────┐
│Master 1 │    │Master 2 │
│(R/W)    │    │(R/W)    │
└─────────┘    └─────────┘
```

**Conflict Resolution:**

```python
from datetime import datetime
from enum import Enum

class ConflictResolutionStrategy(Enum):
    LAST_WRITE_WINS = "last_write_wins"
    FIRST_WRITE_WINS = "first_write_wins"
    CUSTOM = "custom"

class MasterMasterReplication:
    def __init__(self, strategy: ConflictResolutionStrategy):
        self.strategy = strategy
        self.masters = []
    
    def resolve_conflict(self, write1: dict, write2: dict) -> dict:
        """Resolve conflict between two writes"""
        if self.strategy == ConflictResolutionStrategy.LAST_WRITE_WINS:
            return write1 if write1['timestamp'] > write2['timestamp'] else write2
        
        elif self.strategy == ConflictResolutionStrategy.FIRST_WRITE_WINS:
            return write1 if write1['timestamp'] < write2['timestamp'] else write2
        
        else:
            # Custom logic
            return self._custom_resolution(write1, write2)
    
    def _custom_resolution(self, write1: dict, write2: dict) -> dict:
        """Custom conflict resolution logic"""
        # Example: Merge conflicting writes
        return {
            'timestamp': max(write1['timestamp'], write2['timestamp']),
            'data': {**write1['data'], **write2['data']}
        }
```

---

## 🎯 Day 4: Performance Optimization & Caching

### Learning Objectives
- Master query optimization techniques
- Implement database indexing strategies
- Learn connection pooling patterns
- Understand multi-level caching

---

### 4.1 Query Optimization Fundamentals

**N+1 Query Problem:**

```python
from typing import List, Dict
import asyncio
import time

class QueryOptimizer:
    # ❌ BAD: N+1 Query Problem
    async def get_users_with_posts_slow(self, user_ids: List[int]) -> List[Dict]:
        """100 users = 101 database queries!"""
        results = []
        
        for user_id in user_ids:
            # Query 1: Get user
            user = await self.db.query(f"SELECT * FROM users WHERE id = {user_id}")
            
            # Query N: Get each user's posts
            posts = await self.db.query(f"SELECT * FROM posts WHERE user_id = {user_id}")
            
            results.append({"user": user, "posts": posts})
        
        return results  # Total: 1 + N queries
    
    # ✅ GOOD: Single JOIN Query
    async def get_users_with_posts_fast(self, user_ids: List[int]) -> List[Dict]:
        """100 users = 1 database query!"""
        query = """
            SELECT 
                u.id, u.name, u.email,
                p.id as post_id, p.title, p.content
            FROM users u
            LEFT JOIN posts p ON u.id = p.user_id
            WHERE u.id IN ({})
        """.format(','.join(map(str, user_ids)))
        
        rows = await self.db.query(query)
        
        # Group by user
        users_map = {}
        for row in rows:
            user_id = row['id']
            if user_id not in users_map:
                users_map[user_id] = {
                    "user": {"id": row['id'], "name": row['name']},
                    "posts": []
                }
            if row['post_id']:
                users_map[user_id]['posts'].append({
                    "id": row['post_id'],
                    "title": row['title']
                })
        
        return list(users_map.values())  # Total: 1 query

# Performance: 100x faster for 100 users!
```

**SELECT * Optimization:**

```python
# ❌ BAD: Fetches all columns (wasteful)
SELECT * FROM users WHERE id = 123

# ✅ GOOD: Only fetch what you need
SELECT id, name, email FROM users WHERE id = 123

# Benefits:
# - Less network bandwidth
# - Faster serialization
# - Better cache efficiency
# - Clearer intent
```

### 4.2 Database Indexing Strategy

**Index Types & Use Cases:**

```sql
-- 1. B-Tree Index (Default) - Most common
CREATE INDEX idx_users_email ON users(email);
-- Use for: =, <, >, <=, >=, BETWEEN, LIKE 'prefix%'

-- 2. Hash Index - Exact matches only
CREATE INDEX idx_sessions_token ON sessions USING HASH(token);
-- Use for: = (equality only)

-- 3. Composite Index - Multiple columns (ORDER MATTERS!)
CREATE INDEX idx_posts_user_date ON posts(user_id, created_at DESC);
-- Supports: user_id alone, OR user_id + created_at
-- Does NOT support: created_at alone

-- 4. Partial Index - Condition-based
CREATE INDEX idx_active_users ON users(email) WHERE is_active = true;
-- Use for: Frequently queried subset

-- 5. Full-Text Search
CREATE INDEX idx_posts_content_fts ON posts USING GIN(to_tsvector('english', content));
-- Use for: Text search queries
```

**Indexing Decision Tree:**

```python
from dataclasses import dataclass
from typing import List
from enum import Enum

class IndexType(Enum):
    BTREE = "btree"
    HASH = "hash"
    GIN = "gin"
    PARTIAL = "partial"

@dataclass
class IndexRecommendation:
    table: str
    columns: List[str]
    type: IndexType
    reason: str
    impact: str

class IndexAdvisor:
    def analyze_query(self, query: str, execution_time_ms: float) -> List[IndexRecommendation]:
        """Analyze slow query and recommend indexes"""
        recommendations = []
        
        # Parse query (simplified)
        query_lower = query.lower()
        
        # WHERE clause analysis
        if "where user_id =" in query_lower:
            recommendations.append(IndexRecommendation(
                table="posts",
                columns=["user_id"],
                type=IndexType.BTREE,
                reason="Frequent filtering by user_id",
                impact="10-100x speedup"
            ))
        
        # JOIN analysis
        if "join" in query_lower and "on user_id" in query_lower:
            recommendations.append(IndexRecommendation(
                table="posts",
                columns=["user_id"],
                type=IndexType.BTREE,
                reason="JOIN condition needs index",
                impact="100-1000x speedup"
            ))
        
        # ORDER BY + WHERE analysis
        if "where user_id" in query_lower and "order by created_at" in query_lower:
            recommendations.append(IndexRecommendation(
                table="posts",
                columns=["user_id", "created_at"],
                type=IndexType.BTREE,
                reason="Composite index for filter + sort",
                impact="50-500x speedup"
            ))
        
        # LIKE with prefix
        if "like 'john%'" in query_lower:
            recommendations.append(IndexRecommendation(
                table="users",
                columns=["name"],
                type=IndexType.BTREE,
                reason="Prefix search can use B-tree",
                impact="10-50x speedup"
            ))
        
        # Status column with few values
        if "where status = 'pending'" in query_lower:
            recommendations.append(IndexRecommendation(
                table="orders",
                columns=["id"],
                type=IndexType.PARTIAL,
                reason="Partial index for specific status",
                impact="5-20x speedup"
            ))
        
        return recommendations

# Example usage
advisor = IndexAdvisor()
slow_query = """
    SELECT * FROM posts 
    WHERE user_id = 123 
    ORDER BY created_at DESC 
    LIMIT 10
"""
recommendations = advisor.analyze_query(slow_query, execution_time_ms=2500)

for rec in recommendations:
    print(f"📊 {rec.table}.{','.join(rec.columns)}")
    print(f"   Type: {rec.type.value}")
    print(f"   Reason: {rec.reason}")
    print(f"   Impact: {rec.impact}\n")
```

**When NOT to Index:**

```python
# ❌ DON'T Index These Cases:

# 1. Small tables (< 1000 rows)
#    Full table scan is faster than index lookup

# 2. High-cardinality columns with frequent writes
#    Index maintenance cost > query benefit

# 3. Columns with few unique values (< 5)
#    Example: boolean, status with 3 values
#    Better: Use partial indexes

# 4. Rarely queried columns
#    Index takes space and slows down writes

# 5. Columns in SELECT but not WHERE/JOIN/ORDER BY
#    Indexes don't help fetching, only finding

# Example: Boolean column
# BAD: CREATE INDEX idx_active ON users(is_active);
# GOOD: CREATE INDEX idx_active_emails ON users(email) WHERE is_active = true;
```

### 4.3 Connection Pooling

**Implementation:**

```python
import asyncio
from queue import Queue, Empty
from typing import Optional, Set
import time

class DatabaseConnection:
    def __init__(self, conn_id: int):
        self.id = conn_id
        self.created_at = time.time()
        self.last_used = time.time()
        self.query_count = 0
    
    async def execute(self, query: str):
        """Execute query"""
        self.last_used = time.time()
        self.query_count += 1
        await asyncio.sleep(0.01)  # Simulate query
        return f"Result from connection {self.id}"

class ConnectionPool:
    def __init__(self, min_size: int = 5, max_size: int = 20, max_idle_time: int = 300):
        self.min_size = min_size
        self.max_size = max_size
        self.max_idle_time = max_idle_time
        
        self.available: Queue = Queue()
        self.in_use: Set[DatabaseConnection] = set()
        self.total_created = 0
        
        # Statistics
        self.stats = {
            "total_requests": 0,
            "cache_hits": 0,
            "cache_misses": 0,
            "wait_time_ms": 0,
            "timeouts": 0
        }
        
        # Create minimum connections
        for _ in range(min_size):
            self._create_connection()
    
    def _create_connection(self) -> DatabaseConnection:
        """Create new database connection"""
        self.total_created += 1
        conn = DatabaseConnection(self.total_created)
        self.available.put(conn)
        print(f"🔌 Created connection #{self.total_created}")
        return conn
    
    async def acquire(self, timeout: float = 5.0) -> Optional[DatabaseConnection]:
        """Get connection from pool"""
        self.stats["total_requests"] += 1
        start_time = time.time()
        
        # Try to get available connection
        try:
            conn = self.available.get(block=False)
            self.stats["cache_hits"] += 1
            self.in_use.add(conn)
            return conn
        except Empty:
            # No available connection
            if len(self.in_use) + self.available.qsize() < self.max_size:
                # Create new connection
                self.stats["cache_misses"] += 1
                conn = self._create_connection()
                conn = self.available.get()
                self.in_use.add(conn)
                return conn
            else:
                # Wait for available connection
                wait_start = time.time()
                while time.time() - wait_start < timeout:
                    try:
                        conn = self.available.get(timeout=0.1)
                        wait_ms = (time.time() - start_time) * 1000
                        self.stats["wait_time_ms"] += wait_ms
                        self.in_use.add(conn)
                        return conn
                    except Empty:
                        await asyncio.sleep(0.05)
                
                # Timeout
                self.stats["timeouts"] += 1
                return None
    
    def release(self, conn: DatabaseConnection):
        """Return connection to pool"""
        if conn in self.in_use:
            self.in_use.remove(conn)
            self.available.put(conn)
    
    async def cleanup_idle(self):
        """Remove idle connections beyond min_size"""
        current_time = time.time()
        removed = 0
        
        temp_conns = []
        while not self.available.empty() and len(self.in_use) + self.available.qsize() > self.min_size:
            try:
                conn = self.available.get(block=False)
                if current_time - conn.last_used > self.max_idle_time:
                    removed += 1
                    print(f"🗑️  Removed idle connection #{conn.id}")
                else:
                    temp_conns.append(conn)
            except Empty:
                break
        
        # Put back non-idle connections
        for conn in temp_conns:
            self.available.put(conn)
        
        return removed
    
    def get_stats(self) -> dict:
        """Get pool statistics"""
        total_conns = len(self.in_use) + self.available.qsize()
        hit_rate = (self.stats["cache_hits"] / self.stats["total_requests"] * 100 
                   if self.stats["total_requests"] > 0 else 0)
        avg_wait = (self.stats["wait_time_ms"] / self.stats["total_requests"] 
                   if self.stats["total_requests"] > 0 else 0)
        
        return {
            "total_connections": total_conns,
            "available": self.available.qsize(),
            "in_use": len(self.in_use),
            "total_requests": self.stats["total_requests"],
            "hit_rate": f"{hit_rate:.1f}%",
            "avg_wait_ms": f"{avg_wait:.2f}",
            "timeouts": self.stats["timeouts"]
        }

# Demo: Connection pool under load
async def demo_connection_pool():
    pool = ConnectionPool(min_size=5, max_size=10)
    
    async def worker(worker_id: int, num_queries: int):
        for i in range(num_queries):
            conn = await pool.acquire(timeout=2.0)
            if conn:
                try:
                    await conn.execute(f"SELECT * FROM table WHERE id = {i}")
                finally:
                    pool.release(conn)
            else:
                print(f"❌ Worker {worker_id}: Connection timeout!")
            await asyncio.sleep(0.01)
    
    # Simulate 20 concurrent workers
    print("🚀 Starting load test...\n")
    workers = [worker(i, 10) for i in range(20)]
    await asyncio.gather(*workers)
    
    print("\n📊 Connection Pool Statistics:")
    stats = pool.get_stats()
    for key, value in stats.items():
        print(f"   {key}: {value}")

# asyncio.run(demo_connection_pool())
```

### 4.4 Multi-Level Caching

**L1 (Application) + L2 (Redis) Cache:**

```python
import hashlib
import json
from typing import Optional, Any, List
from dataclasses import dataclass
from datetime import datetime, timedelta

@dataclass
class CacheEntry:
    value: Any
    expires_at: datetime
    hits: int = 0

class MultiLevelCache:
    def __init__(self, l1_max_size: int = 1000, l2_max_size: int = 10000):
        self.l1_cache = {}  # In-memory (application level)
        self.l2_cache = {}  # Simulated Redis (distributed)
        self.l1_max_size = l1_max_size
        self.l2_max_size = l2_max_size
        
        self.stats = {
            "l1_hits": 0,
            "l2_hits": 0,
            "misses": 0,
            "evictions": 0
        }
    
    def _generate_key(self, query: str, params: tuple) -> str:
        """Generate cache key"""
        cache_str = f"{query}:{json.dumps(params, sort_keys=True)}"
        return hashlib.md5(cache_str.encode()).hexdigest()
    
    async def get(self, query: str, params: tuple = ()) -> Optional[Any]:
        """Get from cache (L1 → L2 → Miss)"""
        cache_key = self._generate_key(query, params)
        current_time = datetime.now()
        
        # Check L1 cache
        if cache_key in self.l1_cache:
            entry = self.l1_cache[cache_key]
            if entry.expires_at > current_time:
                self.stats["l1_hits"] += 1
                entry.hits += 1
                return entry.value
            else:
                del self.l1_cache[cache_key]
        
        # Check L2 cache
        if cache_key in self.l2_cache:
            entry = self.l2_cache[cache_key]
            if entry.expires_at > current_time:
                self.stats["l2_hits"] += 1
                entry.hits += 1
                # Promote to L1
                self._set_l1(cache_key, entry.value, entry.expires_at)
                return entry.value
            else:
                del self.l2_cache[cache_key]
        
        # Cache miss
        self.stats["misses"] += 1
        return None
    
    async def set(self, query: str, params: tuple, value: Any, ttl_seconds: int = 300):
        """Set in both L1 and L2 caches"""
        cache_key = self._generate_key(query, params)
        expires_at = datetime.now() + timedelta(seconds=ttl_seconds)
        
        # Set in L1
        self._set_l1(cache_key, value, expires_at)
        
        # Set in L2
        self._set_l2(cache_key, value, expires_at)
    
    def _set_l1(self, key: str, value: Any, expires_at: datetime):
        """Set in L1 with LRU eviction"""
        if len(self.l1_cache) >= self.l1_max_size:
            # Evict least recently used (lowest hits)
            lru_key = min(self.l1_cache.keys(), key=lambda k: self.l1_cache[k].hits)
            del self.l1_cache[lru_key]
            self.stats["evictions"] += 1
        
        self.l1_cache[key] = CacheEntry(value, expires_at)
    
    def _set_l2(self, key: str, value: Any, expires_at: datetime):
        """Set in L2 with LRU eviction"""
        if len(self.l2_cache) >= self.l2_max_size:
            lru_key = min(self.l2_cache.keys(), key=lambda k: self.l2_cache[k].hits)
            del self.l2_cache[lru_key]
        
        self.l2_cache[key] = CacheEntry(value, expires_at)
    
    def invalidate(self, patterns: List[str]):
        """Invalidate entries matching patterns"""
        for pattern in patterns:
            # L1 invalidation
            keys_to_remove = [k for k in self.l1_cache.keys() if pattern in k]
            for key in keys_to_remove:
                del self.l1_cache[key]
            
            # L2 invalidation
            keys_to_remove = [k for k in self.l2_cache.keys() if pattern in k]
            for key in keys_to_remove:
                del self.l2_cache[key]
    
    def get_stats(self) -> dict:
        """Cache statistics"""
        total_requests = sum([self.stats["l1_hits"], self.stats["l2_hits"], self.stats["misses"]])
        hit_rate = ((self.stats["l1_hits"] + self.stats["l2_hits"]) / total_requests * 100 
                   if total_requests > 0 else 0)
        
        return {
            **self.stats,
            "total_requests": total_requests,
            "hit_rate": f"{hit_rate:.1f}%",
            "l1_size": len(self.l1_cache),
            "l2_size": len(self.l2_cache)
        }

# Database with cache
class CachedDatabase:
    def __init__(self):
        self.cache = MultiLevelCache(l1_max_size=100, l2_max_size=1000)
        self.db_queries = 0
    
    async def query(self, sql: str, params: tuple = (), use_cache: bool = True) -> Any:
        """Execute query with caching"""
        if use_cache:
            cached = await self.cache.get(sql, params)
            if cached is not None:
                return cached
        
        # Cache miss - query database
        self.db_queries += 1
        result = await self._execute_query(sql, params)
        
        # Cache result
        if use_cache:
            await self.cache.set(sql, params, result, ttl_seconds=300)
        
        return result
    
    async def _execute_query(self, sql: str, params: tuple) -> Any:
        """Simulate database query"""
        await asyncio.sleep(0.1)  # 100ms DB latency
        return {"data": f"Result for {sql}"}
    
    def invalidate_user_cache(self, user_id: int):
        """Invalidate all cache for a user"""
        self.cache.invalidate([f"user:{user_id}", f"user_{user_id}"])

# Demo
async def demo_multilevel_cache():
    db = CachedDatabase()
    
    query = "SELECT * FROM users WHERE id = ?"
    params = (123,)
    
    print("🔍 Query 1 (Cache Miss):")
    start = time.time()
    result = await db.query(query, params)
    print(f"   Time: {(time.time()-start)*1000:.0f}ms\n")
    
    print("🔍 Query 2 (L1 Hit):")
    start = time.time()
    result = await db.query(query, params)
    print(f"   Time: {(time.time()-start)*1000:.0f}ms\n")
    
    # Clear L1, check L2
    db.cache.l1_cache.clear()
    
    print("🔍 Query 3 (L2 Hit):")
    start = time.time()
    result = await db.query(query, params)
    print(f"   Time: {(time.time()-start)*1000:.0f}ms\n")
    
    print("📊 Cache Statistics:")
    stats = db.cache.get_stats()
    for key, value in stats.items():
        print(f"   {key}: {value}")
    print(f"\n   DB Queries: {db.db_queries}")

# asyncio.run(demo_multilevel_cache())
```

---

## 🎯 Day 5: Content Delivery Networks (CDN)

### Learning Objectives
- Understand CDN architecture
- Learn edge caching strategies
- Implement cache invalidation
- Master static vs dynamic content delivery

---

### 5.1 CDN Architecture

**How CDN Works:**

```
User Request Flow:
┌─────────┐
│  User   │ (Location: India)
└────┬────┘
     │ 1. Request image.jpg
     ▼
┌──────────────┐
│  Edge Server │ (Mumbai)
│  (CDN PoP)   │
└──────┬───────┘
       │ 2. Cache Miss?
       ▼
┌──────────────┐
│ Origin Server│ (US West)
│ (Your Server)│
└──────────────┘

Latency Comparison:
- Direct to origin: 200-300ms
- Via CDN edge: 10-50ms
- Improvement: 4-20x faster!
```

**CDN Implementation:**

```python
from typing import Optional, Dict
from datetime import datetime, timedelta
from dataclasses import dataclass
import hashlib

@dataclass
class CachedResource:
    content: bytes
    content_type: str
    etag: str
    expires_at: datetime
    cache_control: str

class CDNEdgeServer:
    def __init__(self, location: str, origin_url: str):
        self.location = location
        self.origin_url = origin_url
        self.cache: Dict[str, CachedResource] = {}
        self.stats = {
            "hits": 0,
            "misses": 0,
            "bytes_served": 0
        }
    
    async def get_resource(self, path: str, headers: dict) -> Optional[CachedResource]:
        """Get resource from edge or origin"""
        cache_key = self._generate_cache_key(path)
        
        # Check if cached
        if cache_key in self.cache:
            resource = self.cache[cache_key]
            
            # Check if still valid
            if datetime.now() < resource.expires_at:
                # Check ETag for conditional request
                if headers.get('If-None-Match') == resource.etag:
                    self.stats["hits"] += 1
                    return None  # 304 Not Modified
                
                self.stats["hits"] += 1
                self.stats["bytes_served"] += len(resource.content)
                return resource
            else:
                # Expired, remove from cache
                del self.cache[cache_key]
        
        # Cache miss - fetch from origin
        self.stats["misses"] += 1
        resource = await self._fetch_from_origin(path)
        
        # Cache the resource
        if resource:
            self.cache[cache_key] = resource
            self.stats["bytes_served"] += len(resource.content)
        
        return resource
    
    async def _fetch_from_origin(self, path: str) -> Optional[CachedResource]:
        """Fetch resource from origin server"""
        # Simulate origin fetch
        await asyncio.sleep(0.2)  # 200ms origin latency
        
        content = b"<html>Hello World</html>"
        etag = hashlib.md5(content).hexdigest()
        
        return CachedResource(
            content=content,
            content_type="text/html",
            etag=etag,
            expires_at=datetime.now() + timedelta(hours=1),
            cache_control="public, max-age=3600"
        )
    
    def _generate_cache_key(self, path: str) -> str:
        """Generate cache key for resource"""
        return hashlib.md5(path.encode()).hexdigest()
    
    def purge_cache(self, pattern: Optional[str] = None):
        """Purge cache entries"""
        if pattern is None:
            # Purge all
            count = len(self.cache)
            self.cache.clear()
            return count
        else:
            # Purge matching pattern
            keys_to_remove = [k for k in self.cache.keys() if pattern in k]
            for key in keys_to_remove:
                del self.cache[key]
            return len(keys_to_remove)
    
    def get_stats(self) -> dict:
        """Get CDN statistics"""
        total_requests = self.stats["hits"] + self.stats["misses"]
        hit_rate = (self.stats["hits"] / total_requests * 100 if total_requests > 0 else 0)
        
        return {
            "location": self.location,
            "cache_size": len(self.cache),
            "hit_rate": f"{hit_rate:.1f}%",
            "bytes_served": f"{self.stats['bytes_served'] / 1024 / 1024:.2f} MB",
            **self.stats
        }

# Multi-region CDN network
class CDNNetwork:
    def __init__(self, origin_url: str):
        self.origin_url = origin_url
        self.edge_servers = {
            "us-east": CDNEdgeServer("US East", origin_url),
            "us-west": CDNEdgeServer("US West", origin_url),
            "eu-west": CDNEdgeServer("EU West", origin_url),
            "ap-south": CDNEdgeServer("Asia Pacific South", origin_url),
        }
    
    def get_nearest_edge(self, user_location: str) -> CDNEdgeServer:
        """Get nearest edge server based on user location"""
        # Simplified geo-routing
        location_map = {
            "india": "ap-south",
            "singapore": "ap-south",
            "uk": "eu-west",
            "germany": "eu-west",
            "usa": "us-east",
            "canada": "us-east",
        }
        
        edge_key = location_map.get(user_location.lower(), "us-east")
        return self.edge_servers[edge_key]
    
    async def serve_request(self, user_location: str, path: str, headers: dict = {}):
        """Serve request via nearest edge"""
        edge = self.get_nearest_edge(user_location)
        resource = await edge.get_resource(path, headers)
        return resource, edge.location
    
    def global_purge(self, pattern: Optional[str] = None):
        """Purge cache across all edges"""
        total_purged = 0
        for edge in self.edge_servers.values():
            total_purged += edge.purge_cache(pattern)
        return total_purged

# Demo
async def demo_cdn():
    cdn = CDNNetwork(origin_url="https://origin.example.com")
    
    # User from India requests resource
    print("🌏 User in India requests /index.html")
    resource, edge = await cdn.serve_request("india", "/index.html")
    print(f"   Served from: {edge}\n")
    
    # Same user requests again (cache hit)
    print("🌏 User in India requests /index.html again")
    resource, edge = await cdn.serve_request("india", "/index.html")
    print(f"   Served from: {edge} (cached)\n")
    
    # User from UK requests same resource
    print("🌏 User in UK requests /index.html")
    resource, edge = await cdn.serve_request("uk", "/index.html")
    print(f"   Served from: {edge}\n")
    
    # Show stats for all edges
    print("📊 CDN Statistics:")
    for location, edge in cdn.edge_servers.items():
        stats = edge.get_stats()
        if stats["hits"] + stats["misses"] > 0:
            print(f"\n   {location}:")
            for key, value in stats.items():
                if key != "location":
                    print(f"      {key}: {value}")

# asyncio.run(demo_cdn())
```

### 5.2 Cache Invalidation Strategies

```python
from enum import Enum
from typing import List, Set
from datetime import datetime

class InvalidationStrategy(Enum):
    PURGE = "purge"  # Immediate removal
    BAN = "ban"  # Mark as invalid, lazy removal
    TTL_EXPIRE = "ttl"  # Wait for natural expiration
    SURROGATE_KEY = "surrogate"  # Group invalidation

class CacheInvalidationManager:
    def __init__(self):
        self.surrogate_keys: Dict[str, Set[str]] = {}  # surrogate_key -> cache_keys
        self.banned_patterns: Set[str] = set()
    
    def add_surrogate_key(self, cache_key: str, surrogate_key: str):
        """Associate cache entry with surrogate key"""
        if surrogate_key not in self.surrogate_keys:
            self.surrogate_keys[surrogate_key] = set()
        self.surrogate_keys[surrogate_key].add(cache_key)
    
    def invalidate_by_surrogate(self, surrogate_key: str) -> int:
        """Invalidate all entries with this surrogate key"""
        if surrogate_key in self.surrogate_keys:
            cache_keys = self.surrogate_keys[surrogate_key]
            count = len(cache_keys)
            # Purge all associated cache entries
            for cache_key in cache_keys:
                self._purge_cache_entry(cache_key)
            del self.surrogate_keys[surrogate_key]
            return count
        return 0
    
    def ban_pattern(self, pattern: str):
        """Ban all entries matching pattern"""
        self.banned_patterns.add(pattern)
    
    def is_banned(self, cache_key: str) -> bool:
        """Check if cache key matches any banned pattern"""
        for pattern in self.banned_patterns:
            if pattern in cache_key:
                return True
        return False
    
    def _purge_cache_entry(self, cache_key: str):
        """Actually remove from cache"""
        pass  # Implementation depends on cache backend

# Example: Product page cache invalidation
class ProductCacheManager:
    def __init__(self):
        self.invalidation = CacheInvalidationManager()
    
    def cache_product_page(self, product_id: int, html: str):
        """Cache product page with surrogate keys"""
        cache_key = f"product:{product_id}"
        
        # Add multiple surrogate keys
        self.invalidation.add_surrogate_key(cache_key, f"product_{product_id}")
        self.invalidation.add_surrogate_key(cache_key, f"category_{product_id % 10}")
        
        # Actually cache the content
        # cache.set(cache_key, html, ttl=3600)
    
    def update_product(self, product_id: int):
        """Invalidate product cache when updated"""
        # Invalidate specific product
        count = self.invalidation.invalidate_by_surrogate(f"product_{product_id}")
        print(f"Invalidated {count} cache entries for product {product_id}")
    
    def update_category(self, category_id: int):
        """Invalidate all products in category"""
        count = self.invalidation.invalidate_by_surrogate(f"category_{category_id}")
        print(f"Invalidated {count} cache entries for category {category_id}")

# Demo
manager = ProductCacheManager()

# Cache some product pages
manager.cache_product_page(101, "<html>Product 101</html>")
manager.cache_product_page(102, "<html>Product 102</html>")
manager.cache_product_page(111, "<html>Product 111</html>")

# Update single product
manager.update_product(101)

# Update category (affects multiple products)
manager.update_category(1)  # Products ending in 1
```

---

## 🎯 Day 6: Load Testing & Benchmarking

### Learning Objectives
- Master load testing tools and techniques
- Understand different types of performance tests
- Learn to interpret performance metrics
- Implement stress testing strategies

---

### 6.1 Load Testing Types

```python
from dataclasses import dataclass
from typing import List
from enum import Enum

class LoadTestType(Enum):
    SMOKE = "smoke"  # Minimal load to verify system works
    LOAD = "load"  # Expected load
    STRESS = "stress"  # Beyond expected load
    SPIKE = "spike"  # Sudden traffic surge
    SOAK = "soak"  # Sustained load over time

@dataclass
class LoadTestConfig:
    test_type: LoadTestType
    duration_seconds: int
    virtual_users: int
    requests_per_second: int
    ramp_up_time: int  # seconds to reach target load

# Load test scenarios
LOAD_TEST_SCENARIOS = {
    LoadTestType.SMOKE: LoadTestConfig(
        test_type=LoadTestType.SMOKE,
        duration_seconds=60,
        virtual_users=1,
        requests_per_second=1,
        ramp_up_time=0
    ),
    LoadTestType.LOAD: LoadTestConfig(
        test_type=LoadTestType.LOAD,
        duration_seconds=600,
        virtual_users=100,
        requests_per_second=1000,
        ramp_up_time=60
    ),
    LoadTestType.STRESS: LoadTestConfig(
        test_type=LoadTestType.STRESS,
        duration_seconds=300,
        virtual_users=500,
        requests_per_second=5000,
        ramp_up_time=120
    ),
    LoadTestType.SPIKE: LoadTestConfig(
        test_type=LoadTestType.SPIKE,
        duration_seconds=180,
        virtual_users=1000,
        requests_per_second=10000,
        ramp_up_time=10  # Sudden spike!
    ),
    LoadTestType.SOAK: LoadTestConfig(
        test_type=LoadTestType.SOAK,
        duration_seconds=7200,  # 2 hours
        virtual_users=200,
        requests_per_second=2000,
        ramp_up_time=300
    ),
}
```

### 6.2 Load Testing with k6

**k6 Script Example:**

```javascript
// load-test.js
import http from 'k6/http';
import { check, sleep } from 'k6';
import { Rate, Trend } from 'k6/metrics';

// Custom metrics
const errorRate = new Rate('errors');
const apiLatency = new Trend('api_latency');

// Test configuration
export const options = {
    stages: [
        { duration: '1m', target: 50 },   // Ramp up to 50 users
        { duration: '3m', target: 50 },   // Stay at 50 users
        { duration: '1m', target: 100 },  // Ramp up to 100 users
        { duration: '3m', target: 100 },  // Stay at 100 users
        { duration: '1m', target: 0 },    // Ramp down
    ],
    thresholds: {
        'http_req_duration': ['p(95)<500'],  // 95% requests < 500ms
        'http_req_failed': ['rate<0.01'],    // Error rate < 1%
        'errors': ['rate<0.05'],             // Custom error rate < 5%
    },
};

// Test scenario
export default function () {
    // Test homepage
    let response = http.get('https://api.example.com/');
    
    // Check response
    let checkResult = check(response, {
        'status is 200': (r) => r.status === 200,
        'response time < 500ms': (r) => r.timings.duration < 500,
        'has content': (r) => r.body.length > 0,
    });
    
    errorRate.add(!checkResult);
    apiLatency.add(response.timings.duration);
    
    // Test API endpoint
    response = http.post('https://api.example.com/posts', JSON.stringify({
        title: 'Load Test Post',
        content: 'This is a test'
    }), {
        headers: { 'Content-Type': 'application/json' },
    });
    
    check(response, {
        'post status is 201': (r) => r.status === 201,
    });
    
    sleep(1);  // Wait 1 second between iterations
}
```

**Run k6:**

```bash
# Install k6
# Windows: choco install k6
# Mac: brew install k6

# Run load test
k6 run load-test.js

# Run with output to InfluxDB
k6 run --out influxdb=http://localhost:8086/k6 load-test.js

# Run with custom duration
k6 run --duration 10m --vus 100 load-test.js
```

### 6.3 Performance Metrics Analysis

```python
from dataclasses import dataclass
from typing import List
import statistics

@dataclass
class PerformanceMetrics:
    total_requests: int
    successful_requests: int
    failed_requests: int
    response_times_ms: List[float]
    
    @property
    def error_rate(self) -> float:
        return (self.failed_requests / self.total_requests * 100 
                if self.total_requests > 0 else 0)
    
    @property
    def success_rate(self) -> float:
        return 100 - self.error_rate
    
    @property
    def avg_response_time(self) -> float:
        return statistics.mean(self.response_times_ms) if self.response_times_ms else 0
    
    @property
    def median_response_time(self) -> float:
        return statistics.median(self.response_times_ms) if self.response_times_ms else 0
    
    @property
    def p95_response_time(self) -> float:
        """95th percentile"""
        if not self.response_times_ms:
            return 0
        sorted_times = sorted(self.response_times_ms)
        index = int(len(sorted_times) * 0.95)
        return sorted_times[index]
    
    @property
    def p99_response_time(self) -> float:
        """99th percentile"""
        if not self.response_times_ms:
            return 0
        sorted_times = sorted(self.response_times_ms)
        index = int(len(sorted_times) * 0.99)
        return sorted_times[index]
    
    def print_report(self):
        """Print performance report"""
        print("=" * 60)
        print("PERFORMANCE TEST REPORT")
        print("=" * 60)
        print(f"Total Requests:        {self.total_requests:,}")
        print(f"Successful:            {self.successful_requests:,} ({self.success_rate:.1f}%)")
        print(f"Failed:                {self.failed_requests:,} ({self.error_rate:.1f}%)")
        print()
        print("Response Time Metrics:")
        print(f"  Average:             {self.avg_response_time:.2f}ms")
        print(f"  Median (p50):        {self.median_response_time:.2f}ms")
        print(f"  95th Percentile:     {self.p95_response_time:.2f}ms")
        print(f"  99th Percentile:     {self.p99_response_time:.2f}ms")
        print("=" * 60)

# Example usage
metrics = PerformanceMetrics(
    total_requests=10000,
    successful_requests=9950,
    failed_requests=50,
    response_times_ms=[45, 52, 48, 150, 62, 58, 70, 55, 900, 48] * 1000
)

metrics.print_report()
```

---

## 🎯 Day 7: Auto-Scaling Strategies

### Learning Objectives
- Implement horizontal auto-scaling
- Learn vertical scaling strategies
- Master cloud auto-scaling (AWS, GCP)
- Understand container orchestration scaling

---

### 7.1 Auto-Scaling Logic

```python
from dataclasses import dataclass
from typing import List
from datetime import datetime
import asyncio

@dataclass
class ServerMetrics:
    server_id: str
    cpu_percent: float
    memory_percent: float
    active_connections: int
    requests_per_second: float
    timestamp: datetime

class AutoScaler:
    def __init__(self, min_servers: int = 2, max_servers: int = 10):
        self.min_servers = min_servers
        self.max_servers = max_servers
        self.current_servers = min_servers
        
        # Scaling thresholds
        self.scale_up_cpu_threshold = 70  # %
        self.scale_down_cpu_threshold = 30  # %
        self.scale_up_memory_threshold = 80  # %
        self.scale_down_memory_threshold = 40  # %
        
        # Cool-down periods (prevent flapping)
        self.scale_up_cooldown = 300  # 5 minutes
        self.scale_down_cooldown = 600  # 10 minutes
        self.last_scale_up = None
        self.last_scale_down = None
    
    async def evaluate_scaling(self, metrics: List[ServerMetrics]) -> dict:
        """Evaluate if scaling is needed"""
        if not metrics:
            return {"action": "none", "reason": "no metrics"}
        
        # Calculate average metrics
        avg_cpu = sum(m.cpu_percent for m in metrics) / len(metrics)
        avg_memory = sum(m.memory_percent for m in metrics) / len(metrics)
        avg_rps = sum(m.requests_per_second for m in metrics) / len(metrics)
        
        current_time = datetime.now()
        
        # Check scale UP conditions
        if (avg_cpu > self.scale_up_cpu_threshold or 
            avg_memory > self.scale_up_memory_threshold):
            
            # Check cool-down
            if (self.last_scale_up and 
                (current_time - self.last_scale_up).seconds < self.scale_up_cooldown):
                return {
                    "action": "none",
                    "reason": f"scale-up cooldown ({self.scale_up_cooldown}s)"
                }
            
            # Check if we can scale up
            if self.current_servers < self.max_servers:
                new_count = min(self.current_servers + 1, self.max_servers)
                await self._scale_up(new_count)
                self.last_scale_up = current_time
                return {
                    "action": "scale_up",
                    "from": self.current_servers,
                    "to": new_count,
                    "reason": f"CPU: {avg_cpu:.1f}%, Memory: {avg_memory:.1f}%"
                }
        
        # Check scale DOWN conditions
        if (avg_cpu < self.scale_down_cpu_threshold and 
            avg_memory < self.scale_down_memory_threshold):
            
            # Check cool-down
            if (self.last_scale_down and 
                (current_time - self.last_scale_down).seconds < self.scale_down_cooldown):
                return {
                    "action": "none",
                    "reason": f"scale-down cooldown ({self.scale_down_cooldown}s)"
                }
            
            # Check if we can scale down
            if self.current_servers > self.min_servers:
                new_count = max(self.current_servers - 1, self.min_servers)
                await self._scale_down(new_count)
                self.last_scale_down = current_time
                return {
                    "action": "scale_down",
                    "from": self.current_servers,
                    "to": new_count,
                    "reason": f"CPU: {avg_cpu:.1f}%, Memory: {avg_memory:.1f}%"
                }
        
        return {
            "action": "none",
            "reason": "metrics within normal range",
            "metrics": {
                "cpu": f"{avg_cpu:.1f}%",
                "memory": f"{avg_memory:.1f}%",
                "rps": f"{avg_rps:.0f}"
            }
        }
    
    async def _scale_up(self, new_count: int):
        """Add servers"""
        servers_to_add = new_count - self.current_servers
        print(f"🚀 Scaling UP: Adding {servers_to_add} server(s)")
        # In real implementation:
        # - Launch EC2 instances (AWS)
        # - Increase replica count (Kubernetes)
        # - Add to load balancer
        await asyncio.sleep(1)  # Simulate provisioning time
        self.current_servers = new_count
    
    async def _scale_down(self, new_count: int):
        """Remove servers"""
        servers_to_remove = self.current_servers - new_count
        print(f"📉 Scaling DOWN: Removing {servers_to_remove} server(s)")
        # In real implementation:
        # - Drain connections from servers
        # - Remove from load balancer
        # - Terminate instances
        await asyncio.sleep(1)
        self.current_servers = new_count

# Demo: Auto-scaling in action
async def demo_autoscaling():
    scaler = AutoScaler(min_servers=2, max_servers=5)
    
    # Simulate high load
    print("📊 Scenario 1: High Load")
    high_load_metrics = [
        ServerMetrics("server-1", 85.0, 75.0, 500, 1000, datetime.now()),
        ServerMetrics("server-2", 80.0, 70.0, 480, 950, datetime.now()),
    ]
    result = await scaler.evaluate_scaling(high_load_metrics)
    print(f"   Action: {result['action']}")
    print(f"   Reason: {result['reason']}\n")
    
    await asyncio.sleep(2)
    
    # Simulate normal load
    print("📊 Scenario 2: Normal Load")
    normal_load_metrics = [
        ServerMetrics("server-1", 50.0, 55.0, 300, 600, datetime.now()),
        ServerMetrics("server-2", 45.0, 50.0, 280, 580, datetime.now()),
        ServerMetrics("server-3", 48.0, 52.0, 290, 590, datetime.now()),
    ]
    result = await scaler.evaluate_scaling(normal_load_metrics)
    print(f"   Action: {result['action']}")
    print(f"   Reason: {result['reason']}\n")
    
    # Simulate low load (after cooldown)
    scaler.last_scale_down = None  # Reset cooldown for demo
    print("📊 Scenario 3: Low Load")
    low_load_metrics = [
        ServerMetrics("server-1", 20.0, 30.0, 100, 200, datetime.now()),
        ServerMetrics("server-2", 25.0, 35.0, 120, 220, datetime.now()),
        ServerMetrics("server-3", 22.0, 32.0, 110, 210, datetime.now()),
    ]
    result = await scaler.evaluate_scaling(low_load_metrics)
    print(f"   Action: {result['action']}")
    print(f"   Reason: {result['reason']}")

# asyncio.run(demo_autoscaling())
```

### 7.2 Kubernetes Auto-Scaling

**Horizontal Pod Autoscaler (HPA):**

```yaml
# hpa.yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: api-server-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: api-server
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
  - type: Resource
    resource:
      name: memory
      target:
        type: Utilization
        averageUtilization: 80
  behavior:
    scaleDown:
      stabilizationWindowSeconds: 300
      policies:
      - type: Percent
        value: 50
        periodSeconds: 60
    scaleUp:
      stabilizationWindowSeconds: 0
      policies:
      - type: Percent
        value: 100
        periodSeconds: 30
      - type: Pods
        value: 2
        periodSeconds: 30
```

**Apply:**

```bash
kubectl apply -f hpa.yaml

# Check HPA status
kubectl get hpa api-server-hpa

# Watch auto-scaling in action
kubectl get hpa api-server-hpa --watch
```

---

## 📊 Week 4 Summary

### Key Concepts Mastered

✅ **Horizontal vs Vertical Scaling**
- When to scale up vs scale out
- Cost-benefit analysis
- Capacity planning

✅ **Database Sharding**
- Range-based sharding
- Hash-based sharding
- Consistent hashing
- Cross-shard queries

✅ **Database Replication**
- Master-slave architecture
- Master-master replication
- Conflict resolution
- Replication lag handling

✅ **Performance Optimization**
- Query optimization (N+1 problem)
- Database indexing strategies
- Connection pooling
- Multi-level caching

✅ **CDN Architecture**
- Edge caching
- Cache invalidation
- Geo-routing
- Static vs dynamic content

✅ **Load Testing**
- Different test types (smoke, load, stress, spike, soak)
- Performance metrics analysis
- Using k6 for load testing

✅ **Auto-Scaling**
- Horizontal pod autoscaling
- Scaling policies and thresholds
- Cool-down periods
- Container orchestration

### Projects Completed
- ✅ Sharding implementation
- ✅ Replication manager
- ✅ Connection pool
- ✅ Multi-level cache
- ✅ CDN edge server
- ✅ Auto-scaler

### Next Week Preview

**Week 5: Data Storage & Processing**
- Message Queues (RabbitMQ, Kafka)
- Event-Driven Architecture
- Stream Processing
- Data Pipelines
- Batch Processing

---

**Continue to Week 5**: [Data Storage & Processing →](../Week-05-Data-Storage-Processing/week-05-complete-content.md)