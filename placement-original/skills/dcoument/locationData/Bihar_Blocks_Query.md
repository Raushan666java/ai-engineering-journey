# Bihar Blocks SQL Query

## Overview
This document contains the SQL query to retrieve all blocks in the state of Bihar from the database.

## SQL Query
```sql
SELECT
    b.id AS block_id,
    b.name AS block_name,
    b.code AS block_code,
    d.id AS district_id,
    d.name AS district_name,
    s.id AS state_id,
    s.name AS state_name
FROM
    blocks b
INNER JOIN
    districts d ON b.district_id = d.id
INNER JOIN
    states s ON d.state_id = s.id
WHERE
    s.name = 'Bihar'
ORDER BY
    d.name, b.name;
```

## To Get Total Count
Run this query to get the total number of blocks in Bihar:
```sql
SELECT COUNT(*) as total_blocks FROM blocks b
INNER JOIN districts d ON b.district_id = d.id
INNER JOIN states s ON d.state_id = s.id
WHERE s.name = 'Bihar';
```

## To Get the List
The main query above will provide the complete list of all blocks in Bihar, grouped by district.

## INSERT Commands for All 538 Blocks
To insert all 538 blocks in Bihar, use the following SQL INSERT template. You'll need to replace the placeholders with actual data for each block.

**Note:** This assumes you have the complete list of 538 blocks with their names, codes, district_ids, and state_id for Bihar. The state_id for Bihar should be the same for all.

```sql
-- Get Bihar's state_id first
SELECT id FROM states WHERE name = 'Bihar';

-- Then use that state_id (assume it's 5 for example) in the INSERT
INSERT INTO blocks (name, code, district_id, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Patna', 'PAT', 1, 5, 1, 1, 1, NOW(), NOW()),
('Dhanarua', 'DHA', 1, 5, 1, 1, 1, NOW(), NOW()),
('Phulwarisharif', 'PHU', 1, 5, 1, 1, 1, NOW(), NOW()),
-- Add all 538 blocks here with their respective district_ids
-- Example format: ('Block Name', 'CODE', district_id, state_id, 1, 1, 1, NOW(), NOW()),
-- Make sure district_id corresponds to the correct district in Bihar
;
```

**How to generate the full INSERT:**
1. Collect all 538 block names, codes, and their district names.
2. Map district names to district_ids from your districts table.
3. Use the Bihar state_id (from `SELECT id FROM states WHERE name = 'Bihar';`).
4. Format each block as a VALUES row in the INSERT statement.
5. Run the INSERT command in your database.

**Example with sample data:**
```sql
INSERT INTO blocks (name, code, district_id, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Patna', 'PAT', 1, 5, 1, 1, 1, NOW(), NOW()),
('Dhanarua', 'DHA', 1, 5, 1, 1, 1, NOW(), NOW()),
('Phulwarisharif', 'PHU', 1, 5, 1, 1, 1, NOW(), NOW()),
('Bihta', 'BIH', 1, 5, 1, 1, 1, NOW(), NOW()),
-- Continue for all 538 blocks...
;
```

**Important:** 
- Replace `district_id` with actual IDs from your districts table.
- Ensure no duplicates (unique name and code).
- Run in batches if the INSERT is too large.

## Explanation
- **Tables Involved**: `blocks`, `districts`, `states`
- **Joins**: Links blocks to districts and districts to states
- **Filter**: Only includes records where the state name is 'Bihar'
- **Sorting**: Results are ordered by district name, then block name
- **Columns Returned**:
  - `block_id`: Unique ID of the block
  - `block_name`: Name of the block
  - `block_code`: Code of the block
  - `district_id`: ID of the district
  - `district_name`: Name of the district
  - `state_id`: ID of the state
  - `state_name`: Name of the state

## Usage
1. Connect to your MySQL database using a client like phpMyAdmin, MySQL Workbench, or command line.
2. Execute the above query.
3. The results will show all blocks in Bihar along with their district and state information.
4. For the total count, run the separate COUNT query.

## Notes
- Ensure your database schema matches the table and column names used in the query.
- If you need to export the results, use your database client's export feature.
- For large datasets, consider adding LIMIT clauses for testing.
