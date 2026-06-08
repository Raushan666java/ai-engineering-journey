-- Master SQL Import Script for All Indian Location Data
-- This file imports all location data in the correct order
-- Execute this file to populate the entire location hierarchy

-- ============================================
-- STEP 1: Import Country (India)
-- ============================================
SOURCE locationData/india_country_insert.sql;

-- ============================================
-- STEP 2: Import All Indian States
-- ============================================
SOURCE locationData/india_states_insert.sql;

-- ============================================
-- STEP 3: Import All Indian Districts
-- ============================================
SOURCE locationData/india_districts_insert.sql;

-- ============================================
-- STEP 4: Import Bihar Blocks
-- ============================================
SOURCE locationData/bihar_blocks_insert.sql;

-- ============================================
-- STEP 5: Import Bihar Gram Panchayats
-- ============================================
SOURCE locationData/bihar_panchayats_insert.sql;

-- ============================================
-- VERIFICATION QUERIES
-- ============================================

-- Verify countries
SELECT COUNT(*) as total_countries FROM countries;
-- Expected: 1

-- Verify states
SELECT COUNT(*) as total_states FROM states WHERE country_id = (SELECT id FROM countries WHERE name = 'India');
-- Expected: 36

-- Verify all districts
SELECT COUNT(*) as total_districts FROM districts WHERE state_id IN (SELECT id FROM states WHERE country_id = (SELECT id FROM countries WHERE name = 'India'));
-- Expected: 780+

-- Verify Bihar districts
SELECT COUNT(*) as total_bihar_districts FROM districts WHERE state_id = (SELECT id FROM states WHERE name = 'Bihar');
-- Expected: 38

-- Verify Bihar blocks
SELECT COUNT(*) as total_blocks FROM blocks WHERE state_id = (SELECT id FROM states WHERE name = 'Bihar');
-- Expected: 538

-- Verify Bihar panchayats
SELECT COUNT(*) as total_panchayats FROM panchayats WHERE block_id IN (SELECT id FROM blocks WHERE state_id = (SELECT id FROM states WHERE name = 'Bihar'));
-- Expected: 6575

-- ============================================
-- COMPLETE HIERARCHY VIEW
-- ============================================
SELECT
    c.name as country,
    s.name as state,
    COUNT(d.id) as district_count,
    COUNT(b.id) as block_count,
    COUNT(p.id) as panchayat_count
FROM countries c
LEFT JOIN states s ON s.country_id = c.id
LEFT JOIN districts d ON d.state_id = s.id
LEFT JOIN blocks b ON b.district_id = d.id
LEFT JOIN panchayats p ON p.block_id = b.id
WHERE c.name = 'India'
GROUP BY c.id, s.id
ORDER BY s.name;
