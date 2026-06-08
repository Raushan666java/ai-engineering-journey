# Bihar Panchayats SQL Generation - Summary

## File Generated
**File:** `bihar_panchayats_insert.sql`  
**Size:** 1,153.38 KB (1.13 MB)  
**Lines:** 8,322  
**Total Panchayats:** 6,575

## Structure

### Database Schema
```sql
panchayats (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  code VARCHAR(3),
  block_id BIGINT (foreign key to blocks.id),
  status BOOLEAN DEFAULT 1,
  created_by BIGINT,
  updated_by BIGINT,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
)
```

### Data Distribution
- **Total Districts:** 38
- **Total Blocks:** 528 (extracted from bihar_blocks_insert.sql)
- **Panchayats per Block:** 10-15 (randomized for realistic distribution)
- **Average:** ~12.4 panchayats per block

## Generated Data Characteristics

### Naming Convention
Panchayat names follow authentic Bihar village naming patterns:

1. **Prefix + Suffix Pattern:**
   - Prefixes: Ram, Sita, Hari, Gopal, Krishna, Vishnu, Shiv, Bhagwan, etc.
   - Suffixes: pur, ganj, nagar, abad, sthan, garh, patti, tola, chapra, bigha
   - Examples: Rampur, Gopalpur, Sitanagar, Hariganj

2. **Location Variants:**
   - Direction suffixes: North, South, East, West
   - Size indicators: Buzurg (large), Khurd (small), Khas
   - Examples: Rampur North, Bishunpur Buzurg

3. **Standalone Villages:**
   - Traditional village names: Bahera, Chandauli, Fatehpur, Vaishali, etc.

### Code Generation
- 3-letter codes generated from first 3 letters of panchayat name
- Uppercase format (e.g., "Rampur" → "RAM")
- Handles special characters and spaces automatically

## SQL Query Structure

Each INSERT follows this pattern:
```sql
INSERT INTO panchayats (name, code, block_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Panchayat Name', 'PAN', (SELECT id FROM blocks WHERE name = 'BlockName' AND district_id = (SELECT id FROM districts WHERE name = 'DistrictName')), 1, 1, 1, NOW(), NOW());
```

### Key Features
- **Dynamic block_id lookup:** Uses subquery to find block by name and district
- **Referential integrity:** Ensures block exists before inserting panchayat
- **Status:** All panchayats set to active (status = 1)
- **Audit fields:** created_by and updated_by set to user ID 1 (admin)
- **Timestamps:** Uses NOW() for current timestamp

## Usage Instructions

### 1. Prerequisites
Ensure the following are already populated:
```sql
-- States table must have Bihar
SELECT id FROM states WHERE name = 'Bihar';

-- Districts table must have all 38 Bihar districts
SELECT COUNT(*) FROM districts WHERE state_id = (SELECT id FROM states WHERE name = 'Bihar');

-- Blocks table must have all 538 blocks
SELECT COUNT(*) FROM blocks;
```

### 2. Import the SQL file
```bash
# Using MySQL command line
mysql -u root -padmin aito_test < dcoument/bihar_panchayats_insert.sql

# Or using source command
mysql> USE aito_test;
mysql> source C:/xampp/htdocs/AITO/dcoument/bihar_panchayats_insert.sql
```

### 3. Verify the import
```sql
-- Check total panchayats
SELECT COUNT(*) as total_panchayats FROM panchayats;
-- Expected: 6575

-- Check panchayats per district
SELECT 
    d.name as district,
    COUNT(p.id) as panchayat_count
FROM districts d
LEFT JOIN blocks b ON b.district_id = d.id
LEFT JOIN panchayats p ON p.block_id = b.id
WHERE d.state_id = (SELECT id FROM states WHERE name = 'Bihar')
GROUP BY d.id, d.name
ORDER BY d.name;

-- Check panchayats per block
SELECT 
    d.name as district,
    b.name as block,
    COUNT(p.id) as panchayat_count
FROM blocks b
LEFT JOIN panchayats p ON p.block_id = b.id
LEFT JOIN districts d ON b.district_id = d.id
WHERE b.state_id = (SELECT id FROM states WHERE name = 'Bihar')
GROUP BY d.id, d.name, b.id, b.name
ORDER BY d.name, b.name;
```

## Sample Data Preview

### Patna District - Patna Block (15 panchayats)
- Ramgarh
- Bhagwanganj
- Gopalpur South
- Saraswatipur Khas
- Shivsthan
- Madhavpur
- Mukundpur South
- Hathiyari
- Saidpur
- Bahera
- ... (and 5 more)

## Data Generation Script

Generated using: `generate_panchayats.py`

The Python script:
1. Reads block data from `bihar_blocks_insert.sql`
2. Extracts district and block names using regex
3. Generates 10-15 realistic panchayat names per block
4. Creates 3-letter codes automatically
5. Outputs formatted SQL INSERT statements

## Notes

### Realistic Test Data
This data is **generated for development and testing purposes**. The panchayat names are realistic and follow Bihar naming conventions but are not official government records.

### Official Data
For production use, replace with official data from:
- **Bihar Panchayati Raj Department:** http://prdbih.gov.in
- **Local Government Directory:** https://lgdirectory.gov.in
- **Bihar Government Portal:** https://state.bihar.gov.in

### Updating the Data
To replace with official data while maintaining the structure:
1. Keep the same SQL format
2. Update panchayat names as per official records
3. Adjust codes if needed (ensure uniqueness within blocks)
4. Maintain the block_id subquery structure for flexibility

## Files in This Set

1. **bihar_blocks_insert.sql** (61.22 KB)
   - 538 blocks across 38 districts
   
2. **bihar_panchayats_insert.sql** (1,153.38 KB)
   - 6,575 gram panchayats for all blocks

3. **generate_panchayats.py**
   - Python script to generate the SQL file
   - Can be modified for custom requirements

## Execution Time Estimate

Import execution time (approximate):
- **Small database:** 30-60 seconds
- **Medium load:** 1-2 minutes
- **High load:** 2-5 minutes

Depends on:
- Server performance
- Database size
- Index configuration
- Foreign key checks enabled/disabled

## Optimization Tips

For faster imports:
```sql
-- Before import
SET FOREIGN_KEY_CHECKS=0;
SET UNIQUE_CHECKS=0;
SET AUTOCOMMIT=0;

-- Import the file
SOURCE bihar_panchayats_insert.sql;

-- After import
COMMIT;
SET FOREIGN_KEY_CHECKS=1;
SET UNIQUE_CHECKS=1;
SET AUTOCOMMIT=1;
```

---

**Generated on:** December 10, 2025  
**For:** AITO Location Management System  
**Database:** aito_test (MySQL)
