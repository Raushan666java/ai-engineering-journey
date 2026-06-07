# Census 2011 Official Data Sync Guide

## Matching Real Blocks & Panchayats for All India

This guide explains how to sync your database with **real Census 2011 government data** for authentic block (sub-district) and panchayat (village) names across all Indian states.

---

## 📋 Overview

The Indian government provides official Census 2011 village directories at:
**https://www.data.gov.in/catalog/complete-villages-directory-indiastatedistrictsub-district-level-census-2011**

This contains:

- **State-wise data** for all 35 states/UTs
- **Official district names**
- **Real sub-district/block names** (Tehsil, Taluka, Mandal, Block)
- **Actual village/panchayat names** from Census 2011
- **~640,000 villages** across India

---

## 🚀 Quick Start

### Step 1: Download Census 2011 Data

#### Option A: Manual Download (Recommended)

1. Visit: https://www.data.gov.in/catalog/complete-villages-directory-indiastatedistrictsub-district-level-census-2011
2. Download XLS files for each state you need
3. Save to: `storage/app/census2011/` directory

**Example URLs:**

- Andhra Pradesh: https://www.data.gov.in/resource/complete-villages-directory-indiastatedistrictsub-district-level-census-2011-andhra
- Bihar: https://www.data.gov.in/resource/complete-villages-directory-indiastatedistrictsub-district-level-census-2011-bihar
- Karnataka: https://www.data.gov.in/resource/complete-villages-directory-indiastatedistrictsub-district-level-census-2011-karnataka
- Maharashtra: https://www.data.gov.in/resource/complete-villages-directory-indiastatedistrictsub-district-level-census-2011-maharashtra
- Tamil Nadu: https://www.data.gov.in/resource/complete-villages-directory-indiastatedistrictsub-district-level-census-2011-tamil-nadu
- Uttar Pradesh: https://www.data.gov.in/resource/complete-villages-directory-indiastatedistrictsub-district-level-census-2011-uttar
- West Bengal: https://www.data.gov.in/resource/complete-villages-directory-indiastatedistrictsub-district-level-census-2011-west-bengal

#### Option B: Using Data.gov.in API

```bash
# Register at data.gov.in and get API key
# Download using their API (requires authentication)
```

### Step 2: Convert XLS to CSV

Since the files are in Excel format, convert them to CSV:

```bash
# Create directory
mkdir -p storage/app/census2011

# Convert using LibreOffice (if installed)
cd storage/app/census2011
for file in *.xls; do
    libreoffice --headless --convert-to csv "$file"
done
```

**Or use online tools:**

- https://convertio.co/xls-csv/
- Microsoft Excel → Save As → CSV

### Step 3: Run the Sync Command

```bash
# Sync all states
php artisan census:sync-2011 --import-only

# Sync specific state
php artisan census:sync-2011 --state=KA --import-only

# Download instructions only
php artisan census:sync-2011 --download-only
```

---

## 📁 Expected CSV Format

The Census 2011 files typically have these columns:

| State Code | State Name     | District Code | District Name | Sub-District Code | Sub-District Name | Village Code | Village Name |
| ---------- | -------------- | ------------- | ------------- | ----------------- | ----------------- | ------------ | ------------ |
| 28         | Andhra Pradesh | 1             | Anantapur     | 001               | Anantapur         | 00001        | Amudala      |
| 28         | Andhra Pradesh | 1             | Anantapur     | 001               | Anantapur         | 00002        | Brahmanpalli |

**Column variations:**

- Sub-District = Block = Tehsil = Taluka = Mandal
- Village = Gram Panchayat = Panchayat

---

## 🔧 How It Works

### 1. **Block Matching**

The command finds blocks in your database and updates them with real Census names:

```php
// Finds blocks like "Anantapur City" or "South Anantapur"
// Updates with real name: "Anantapur Mandal"
```

### 2. **Panchayat Matching**

Updates panchayats with real village names from Census:

```php
// Finds panchayats like "Lakshmi wadi" or "Durga gram"
// Updates with real name: "Amudala" or "Brahmanpalli"
```

### 3. **Smart Matching Logic**

- Matches by district + block name similarity
- Updates existing generated names
- Creates new entries if not found
- Preserves foreign key relationships

---

## 🗂️ State-wise Data URLs

### All States and UTs

| State Code | State Name        | Census Data URL                                                                                                                        |
| ---------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| AP         | Andhra Pradesh    | [Download](https://www.data.gov.in/resource/complete-villages-directory-indiastatedistrictsub-district-level-census-2011-andhra)       |
| AR         | Arunachal Pradesh | [Download](https://www.data.gov.in/resource/complete-villages-directory-indiastatedistrictsub-district-level-census-2011-arunachal)    |
| AS         | Assam             | [Download](https://www.data.gov.in/resource/complete-villages-directory-indiastatedistrictsub-district-level-census-2011-assam)        |
| BR         | Bihar             | [Download](https://www.data.gov.in/resource/complete-villages-directory-indiastatedistrictsub-district-level-census-2011-bihar)        |
| CG         | Chhattisgarh      | [Download](https://www.data.gov.in/resource/complete-villages-directory-indiastatedistrictsub-district-level-census-2011-chhattisgarh) |
| GA         | Goa               | [Download](https://www.data.gov.in/resource/complete-villages-directory-indiastatedistrictsub-district-level-census-2011-goa)          |
| GJ         | Gujarat           | [Download](https://www.data.gov.in/resource/complete-villages-directory-indiastatedistrictsub-district-level-census-2011-gujarat)      |
| HR         | Haryana           | [Download](https://www.data.gov.in/resource/complete-villages-directory-indiastatedistrictsub-district-level-census-2011-haryana)      |
| HP         | Himachal Pradesh  | [Download](https://www.data.gov.in/resource/complete-villages-directory-indiastatedistrictsub-district-level-census-2011-himachal)     |
| JK         | Jammu & Kashmir   | [Download](https://www.data.gov.in/resource/complete-villages-directory-indiastatedistrictsub-district-level-census-2011-jammu-and)    |
| JH         | Jharkhand         | [Download](https://www.data.gov.in/resource/complete-villages-directory-indiastatedistrictsub-district-level-census-2011-jharkhand)    |
| KA         | Karnataka         | [Download](https://www.data.gov.in/resource/complete-villages-directory-indiastatedistrictsub-district-level-census-2011-karnataka)    |
| KL         | Kerala            | [Download](https://www.data.gov.in/resource/complete-villages-directory-indiastatedistrictsub-district-level-census-2011-kerala)       |
| MP         | Madhya Pradesh    | [Download](https://www.data.gov.in/resource/complete-villages-directory-indiastatedistrictsub-district-level-census-2011-madhya)       |
| MH         | Maharashtra       | [Download](https://www.data.gov.in/resource/complete-villages-directory-indiastatedistrictsub-district-level-census-2011-maharashtra)  |
| MN         | Manipur           | [Download](https://www.data.gov.in/resource/complete-villages-directory-indiastatedistrictsub-district-level-census-2011-manipur)      |
| ML         | Meghalaya         | [Download](https://www.data.gov.in/resource/complete-villages-directory-indiastatedistrictsub-district-level-census-2011-meghalaya)    |
| MZ         | Mizoram           | [Download](https://www.data.gov.in/resource/complete-villages-directory-indiastatedistrictsub-district-level-census-2011-mizoram)      |
| NL         | Nagaland          | [Download](https://www.data.gov.in/resource/complete-villages-directory-indiastatedistrictsub-district-level-census-2011-nagaland)     |
| OR         | Odisha            | [Download](https://www.data.gov.in/resource/complete-villages-directory-indiastatedistrictsub-district-level-census-2011-orissa)       |
| PB         | Punjab            | [Download](https://www.data.gov.in/resource/complete-villages-directory-indiastatedistrictsub-district-level-census-2011-punjab)       |
| RJ         | Rajasthan         | [Download](https://www.data.gov.in/resource/complete-villages-directory-indiastatedistrictsub-district-level-census-2011-rajasthan)    |
| SK         | Sikkim            | [Download](https://www.data.gov.in/resource/complete-villages-directory-indiastatedistrictsub-district-level-census-2011-sikkim)       |
| TN         | Tamil Nadu        | [Download](https://www.data.gov.in/resource/complete-villages-directory-indiastatedistrictsub-district-level-census-2011-tamil-nadu)   |
| TS         | Telangana         | [Download](https://www.data.gov.in/resource/complete-villages-directory-indiastatedistrictsub-district-level-census-2011-telangana)    |
| TR         | Tripura           | [Download](https://www.data.gov.in/resource/complete-villages-directory-indiastatedistrictsub-district-level-census-2011-tripura)      |
| UP         | Uttar Pradesh     | [Download](https://www.data.gov.in/resource/complete-villages-directory-indiastatedistrictsub-district-level-census-2011-uttar)        |
| UK         | Uttarakhand       | [Download](https://www.data.gov.in/resource/complete-villages-directory-indiastatedistrictsub-district-level-census-2011-uttarakhand)  |
| WB         | West Bengal       | [Download](https://www.data.gov.in/resource/complete-villages-directory-indiastatedistrictsub-district-level-census-2011-west-bengal)  |
| DL         | Delhi             | [Download](https://www.data.gov.in/resource/complete-villages-directory-indiastatedistrictsub-district-level-census-2011-delhi)        |

---

## 📊 Verification After Sync

Check updated data:

```sql
-- Check blocks with real names
SELECT d.name as district, b.name as block
FROM blocks b
JOIN districts d ON b.district_id = d.id
WHERE d.state_id = (SELECT id FROM states WHERE code = 'KA')
LIMIT 20;

-- Check panchayats with real names
SELECT b.name as block, p.name as panchayat
FROM panchayats p
JOIN blocks b ON p.block_id = b.id
JOIN districts d ON b.district_id = d.id
WHERE d.state_id = (SELECT id FROM states WHERE code = 'KA')
LIMIT 20;

-- Count by state
SELECT s.name,
       COUNT(DISTINCT b.id) as blocks,
       COUNT(p.id) as panchayats
FROM states s
LEFT JOIN districts d ON s.id = d.state_id
LEFT JOIN blocks b ON d.id = b.district_id
LEFT JOIN panchayats p ON b.id = p.block_id
GROUP BY s.id;
```

---

## 🎯 Example: Karnataka Sync

```bash
# 1. Download Karnataka data
wget "https://www.data.gov.in/resource/complete-villages-directory-indiastatedistrictsub-district-level-census-2011-karnataka" \
     -O storage/app/census2011/karnataka.xls

# 2. Convert to CSV
libreoffice --headless --convert-to csv storage/app/census2011/karnataka.xls \
            --outdir storage/app/census2011/

# 3. Import
php artisan census:sync-2011 --state=KA --import-only

# 4. Verify
mysql -u root -p aito -e "
SELECT b.name as block, COUNT(p.id) as panchayats
FROM blocks b
LEFT JOIN panchayats p ON b.id = p.block_id
WHERE b.district_id IN (SELECT id FROM districts WHERE state_id = (SELECT id FROM states WHERE code = 'KA'))
GROUP BY b.id
LIMIT 10;
"
```

---

## 🔍 Troubleshooting

### Issue: "No Census data files found"

**Solution:** Make sure CSV files are in `storage/app/census2011/`

### Issue: "Could not find required columns"

**Solution:** Check CSV headers match expected format:

- State/State Name
- District/District Name
- Sub-District/Block/Tehsil/Taluka
- Village/Village Name/Panchayat

### Issue: "Blocks not updating"

**Solution:** Check district names match. Adjust matching logic in command if needed.

### Issue: XLS files won't convert

**Solutions:**

- Install LibreOffice: `sudo apt-get install libreoffice`
- Use online converter: https://convertio.co/
- Use Microsoft Excel manually
- Use Python pandas: `pd.read_excel('file.xls').to_csv('file.csv')`

---

## 📝 Notes

1. **Census 2011 vs Current**: Some boundaries changed since 2011 (especially Telangana separation)
2. **File Sizes**: Some state files are large (UP ~52MB, Bihar ~45MB)
3. **Processing Time**: Expect 5-15 minutes per large state
4. **Encoding**: Watch for UTF-8 vs ISO encoding issues with special characters
5. **Matching**: Uses fuzzy matching - review results for accuracy

---

## 🚀 Batch Processing All States

```bash
#!/bin/bash
# Download and sync all states

STATES=(AP AR AS BR CG GA GJ HR HP JK JH KA KL MP MH MN ML MZ NL OR PB RJ SK TN TS TR UP UK WB DL)

for STATE in "${STATES[@]}"; do
    echo "Processing $STATE..."
    php artisan census:sync-2011 --state=$STATE --import-only
    sleep 2
done

echo "All states synced!"
```

---

## 📈 Expected Results

After sync completion:

| Level      | Count    | Data Source     |
| ---------- | -------- | --------------- |
| States     | 35       | Manual          |
| Districts  | 721      | Manual/Census   |
| Blocks     | 6,000+   | **Census 2011** |
| Panchayats | 260,000+ | **Census 2011** |

All block and panchayat names will be **official Census 2011 names** instead of generated names.

---

## 🔗 Additional Resources

- **Official Census Site**: https://censusindia.gov.in/
- **Data Portal**: https://www.data.gov.in/
- **Village Directory**: https://lgdirectory.gov.in/
- **API Documentation**: https://www.data.gov.in/apis

---

## ✅ Verification Checklist

- [ ] Downloaded Census data for required states
- [ ] Converted XLS to CSV format
- [ ] Ran sync command successfully
- [ ] Verified block names are real (not "City", "Town", "garh")
- [ ] Verified panchayat names are real (not "wadi", "gram", "palli")
- [ ] Checked sample data from multiple states
- [ ] No orphan records in database
- [ ] Foreign key relationships intact

---

**Last Updated**: January 22, 2026
**Census Year**: 2011
**Data Source**: Office of Registrar General & Census Commissioner, India
