# Bihar Location Data - Complete SQL Import Guide

## 📁 Files Generated

All location data SQL files are organized in the `locationData` folder:

### 1. **india_country_insert.sql**
- Contains: India country record
- Records: 1
- Size: ~0.3 KB

### 2. **india_states_insert.sql**
- Contains: All 36 Indian states and union territories
- Records: 36 (28 states + 8 UTs)
- Size: ~2.5 KB

### 3. **bihar_districts_insert.sql**
- Contains: All 38 Bihar districts
- Records: 38
- Size: ~2.1 KB

### 4. **bihar_blocks_insert.sql**
- Contains: All 538 Bihar blocks
- Records: 538
- Size: ~61.22 KB

### 5. **bihar_panchayats_insert.sql**
- Contains: All Bihar gram panchayats
- Records: 6,575
- Size: ~1,153.38 KB

### 6. **master_import.sql**
- Master script to import all files in correct order
- Includes verification queries

---

## 🗂️ Database Hierarchy

```
countries (1)
    └── India
        └── states (36)
            └── Bihar
                └── districts (38)
                    └── blocks (538)
                        └── panchayats (6,575)
```

---

## 📊 Data Summary

| Level | Table | Records | Example |
|-------|-------|---------|---------|
| 1 | countries | 1 | India |
| 2 | states | 36 | Bihar, Uttar Pradesh, etc. |
| 3 | districts | 38 | Patna, Gaya, Muzaffarpur, etc. |
| 4 | blocks | 538 | Patna, Dhanarua, Phulwarisharif, etc. |
| 5 | panchayats | 6,575 | Ramgarh, Bhagwanganj, etc. |

**Total Records: 7,188**

---

## 🚀 Import Instructions

### Method 1: Using Master Script (Recommended)

```bash
# Navigate to AITO directory
cd C:\xampp\htdocs\AITO

# Import using MySQL command line
mysql -u root -padmin aito_test < dcoument/locationData/master_import.sql
```

### Method 2: Using MySQL Source Command

```sql
-- Login to MySQL
mysql -u root -padmin

-- Select database
USE aito_test;

-- Execute master import
SOURCE C:/xampp/htdocs/AITO/dcoument/locationData/master_import.sql;
```

### Method 3: Import Files Individually (In Order)

**Important: Follow this exact order due to foreign key constraints**

```bash
cd C:\xampp\htdocs\AITO\dcoument\locationData

# Step 1: Import country
mysql -u root -padmin aito_test < india_country_insert.sql

# Step 2: Import states
mysql -u root -padmin aito_test < india_states_insert.sql

# Step 3: Import Bihar districts
mysql -u root -padmin aito_test < bihar_districts_insert.sql

# Step 4: Import Bihar blocks
mysql -u root -padmin aito_test < bihar_blocks_insert.sql

# Step 5: Import Bihar panchayats
mysql -u root -padmin aito_test < bihar_panchayats_insert.sql
```

---

## ✅ Verification Queries

After import, verify the data:

```sql
-- Check country
SELECT * FROM countries WHERE name = 'India';

-- Check all states
SELECT COUNT(*) as total_states FROM states;
-- Expected: 36

-- Check Bihar
SELECT * FROM states WHERE name = 'Bihar';

-- Check Bihar districts
SELECT COUNT(*) as total_districts 
FROM districts 
WHERE state_id = (SELECT id FROM states WHERE name = 'Bihar');
-- Expected: 38

-- Check Bihar blocks
SELECT COUNT(*) as total_blocks 
FROM blocks 
WHERE state_id = (SELECT id FROM states WHERE name = 'Bihar');
-- Expected: 538

-- Check Bihar panchayats
SELECT COUNT(*) as total_panchayats 
FROM panchayats p
INNER JOIN blocks b ON p.block_id = b.id
WHERE b.state_id = (SELECT id FROM states WHERE name = 'Bihar');
-- Expected: 6575

-- Complete hierarchy view
SELECT 
    s.name as state,
    d.name as district,
    COUNT(DISTINCT b.id) as blocks,
    COUNT(p.id) as panchayats
FROM states s
LEFT JOIN districts d ON d.state_id = s.id
LEFT JOIN blocks b ON b.district_id = d.id
LEFT JOIN panchayats p ON p.block_id = b.id
WHERE s.name = 'Bihar'
GROUP BY s.id, d.id
ORDER BY d.name;
```

---

## 📋 Indian States List (36 Total)

### States (28)
1. Andhra Pradesh (AP)
2. Arunachal Pradesh (AR)
3. Assam (AS)
4. Bihar (BR)
5. Chhattisgarh (CT)
6. Goa (GA)
7. Gujarat (GJ)
8. Haryana (HR)
9. Himachal Pradesh (HP)
10. Jharkhand (JH)
11. Karnataka (KA)
12. Kerala (KL)
13. Madhya Pradesh (MP)
14. Maharashtra (MH)
15. Manipur (MN)
16. Meghalaya (ML)
17. Mizoram (MZ)
18. Nagaland (NL)
19. Odisha (OR)
20. Punjab (PB)
21. Rajasthan (RJ)
22. Sikkim (SK)
23. Tamil Nadu (TN)
24. Telangana (TG)
25. Tripura (TR)
26. Uttar Pradesh (UP)
27. Uttarakhand (UT)
28. West Bengal (WB)

### Union Territories (8)
1. Andaman and Nicobar Islands (AN)
2. Chandigarh (CH)
3. Dadra and Nagar Haveli and Daman and Diu (DN)
4. Delhi (DL)
5. Jammu and Kashmir (JK)
6. Ladakh (LA)
7. Lakshadweep (LD)
8. Puducherry (PY)

---

## 📋 Bihar Districts List (38 Total)

1. Araria
2. Arwal
3. Aurangabad
4. Banka
5. Begusarai
6. Bhabhua
7. Bhagalpur
8. Bhojpur
9. Buxar
10. Darbhanga
11. E.Champaran
12. Gaya
13. Gopalganj
14. Jamui
15. Jehanabad
16. Katihar
17. Khagaria
18. Kishanganj
19. Lakhisarai
20. Madhepura
21. Madhubani
22. Munger
23. Muzaffarpur
24. Nalanda
25. Nawadah
26. Patna
27. Purnia
28. Rohtas
29. Saharsa
30. Samastipur
31. Saran
32. Sheikhpura
33. Sheohar
34. Sitamarhi
35. Siwan
36. Supaul
37. Vaishali
38. W.Champaran

---

## 🗄️ Database Schema

### countries table
```sql
id, name, code, phone_code, currency, currency_symbol, status, created_by, updated_by, created_at, updated_at
```

### states table
```sql
id, name, code, country_id (FK), status, created_by, updated_by, created_at, updated_at
```

### districts table
```sql
id, name, code, state_id (FK), status, created_by, updated_by, created_at, updated_at
```

### blocks table
```sql
id, name, code, district_id (FK), state_id (FK), status, created_by, updated_by, created_at, updated_at
```

### panchayats table
```sql
id, name, code, block_id (FK), status, created_by, updated_by, created_at, updated_at
```

---

## ⚡ Performance Optimization

For faster imports:

```sql
-- Before import
SET FOREIGN_KEY_CHECKS=0;
SET UNIQUE_CHECKS=0;
SET AUTOCOMMIT=0;

-- Run imports here

-- After import
COMMIT;
SET FOREIGN_KEY_CHECKS=1;
SET UNIQUE_CHECKS=1;
SET AUTOCOMMIT=1;
```

---

## 🔧 Troubleshooting

### Error: "Cannot add foreign key constraint"
**Solution:** Import files in the correct order (country → states → districts → blocks → panchayats)

### Error: "Duplicate entry"
**Solution:** Truncate tables before re-importing:
```sql
TRUNCATE TABLE panchayats;
TRUNCATE TABLE blocks;
TRUNCATE TABLE districts;
TRUNCATE TABLE states;
TRUNCATE TABLE countries;
```

### Slow import
**Solution:** Use performance optimization commands above

---

## 📝 Notes

- All codes are uppercase abbreviations
- Status is set to 1 (active) for all records
- created_by and updated_by are set to 1 (admin user)
- Timestamps use NOW() for current date/time
- Foreign keys use subqueries for flexibility across different database instances

---

## 🔄 Updating Data

To update official data while maintaining structure:

1. Edit individual SQL files
2. Keep the same column structure
3. Maintain foreign key relationships
4. Re-import in correct order

---

**Generated:** December 10, 2025  
**Database:** aito_test (MySQL)  
**For:** AITO Location Management System
