#!/usr/bin/env python3
"""
Generate Bihar Gram Panchayat SQL INSERT statements
Creates realistic sample data for all 538 blocks
"""

import re

# Common Bihar village name patterns
village_prefixes = [
    'Ram', 'Sita', 'Hari', 'Gopal', 'Krishna', 'Vishnu', 'Shiv', 'Bhagwan',
    'Mahesh', 'Ganesh', 'Lakshmi', 'Durga', 'Kali', 'Saraswati', 'Radha',
    'Nand', 'Jai', 'Shankar', 'Narayan', 'Madhav', 'Baldev', 'Jagat',
    'Mukund', 'Govind', 'Dayal', 'Mohan', 'Kishan', 'Braj', 'Madan'
]

village_suffixes = [
    'pur', 'pur Khas', 'pur Buzurg', 'pur Khurd', 'ganj', 'nagar', 'abad',
    'sthan', 'garh', 'patti', 'tola', 'chapra', 'bigha', 'pur Urf', 'pur East',
    'pur West', 'pur North', 'pur South'
]

other_villages = [
    'Bahera', 'Bishunpur', 'Chandauli', 'Daudpur', 'Ekamba', 'Fatehpur',
    'Gaura', 'Hathiyari', 'Imampur', 'Jagdishpur', 'Kanhaipur', 'Lakhisarai',
    'Mahua', 'Nandanpur', 'Olahanpur', 'Paharpur', 'Qazipur', 'Rajpur',
    'Saidpur', 'Tara', 'Udaipur', 'Vaishali', 'Wazirganj'
]

def generate_code(name):
    """Generate 3-letter code from name"""
    clean = re.sub(r'[^A-Za-z]', '', name)
    return clean[:3].upper() if len(clean) >= 3 else (clean + 'XXX')[:3].upper()

def generate_panchayat_name(index, base_names_used):
    """Generate a unique panchayat name"""
    import random
    
    attempts = 0
    while attempts < 100:
        choice = random.randint(1, 3)
        if choice == 1:
            # Prefix + suffix pattern
            name = random.choice(village_prefixes) + random.choice(village_suffixes)
        elif choice == 2:
            # Use other villages
            name = random.choice(other_villages)
        else:
            # Add numbers to existing names
            name = random.choice(village_prefixes) + random.choice(village_suffixes) + f' {random.randint(1, 5)}'
        
        if name not in base_names_used:
            base_names_used.add(name)
            return name
        attempts += 1
    
    # Fallback with index
    name = f"Gram Panchayat {index}"
    return name

def extract_blocks_from_sql(sql_content):
    """Extract district and block information from blocks SQL file"""
    blocks_data = []
    current_district = None
    
    lines = sql_content.split('\n')
    i = 0
    while i < len(lines):
        line = lines[i]
        
        # Match district comments (e.g., "-- Patna District")
        if line.strip().startswith('--') and 'District' in line:
            # Clean up the line
            clean_line = line.strip().replace('--', '').strip()
            # Remove any extra dashes or decorations
            clean_line = re.sub(r'=+', '', clean_line).strip()
            
            if clean_line and 'District' in clean_line:
                # Extract district name
                district_match = re.match(r'([^-]+?)\s+District', clean_line)
                if district_match:
                    current_district = district_match.group(1).strip()
        
        # Match INSERT INTO blocks lines
        if "INSERT INTO blocks" in line and current_district:
            # Look at following lines for VALUES
            j = i + 1
            while j < len(lines) and j < i + 50:  # Look ahead max 50 lines
                val_line = lines[j]
                # Extract block names from VALUES
                values_match = re.findall(r"\('([^']+)',\s*'[^']+',\s*\(SELECT", val_line)
                for block_name in values_match:
                    blocks_data.append({
                        'district': current_district,
                        'block': block_name
                    })
                
                # Stop if we hit a new INSERT or comment
                if j > i and ('INSERT INTO' in val_line or (val_line.strip().startswith('--') and 'District' in val_line)):
                    break
                j += 1
        
        i += 1
    
    return blocks_data

def generate_panchayats_sql():
    """Generate complete panchayats SQL file"""
    
    # Read blocks file
    with open('bihar_blocks_insert.sql', 'r', encoding='utf-8') as f:
        blocks_content = f.read()
    
    blocks_data = extract_blocks_from_sql(blocks_content)
    
    if not blocks_data:
        print("Warning: No blocks found, generating from hardcoded list")
        return
    
    print(f"Found {len(blocks_data)} blocks")
    
    sql_output = []
    sql_output.append("-- SQL INSERT Commands for All Gram Panchayats in Bihar")
    sql_output.append("-- This file contains INSERT statements to populate the panchayats table")
    sql_output.append("-- with gram panchayats for all 538 blocks in Bihar.")
    sql_output.append("-- Block_ids are looked up by block name and district name.")
    sql_output.append("-- Codes are generated as UPPER first 3 letters of name.")
    sql_output.append("--")
    sql_output.append(f"-- Total Blocks: {len(blocks_data)}")
    sql_output.append("-- Panchayats per block: 10-15 (varies)")
    sql_output.append("-- Estimated total panchayats: ~8,000")
    sql_output.append("")
    
    import random
    random.seed(42)  # For reproducibility
    
    panchayat_counter = 1
    current_district = None
    base_names_used = set()
    
    for block_info in blocks_data:
        district = block_info['district']
        block = block_info['block']
        
        # Add district header if changed
        if district != current_district:
            if current_district is not None:
                sql_output.append("")
            sql_output.append(f"-- ========================================")
            sql_output.append(f"-- {district} District")
            sql_output.append(f"-- ========================================")
            current_district = district
            base_names_used.clear()  # Reset for each district
        
        sql_output.append(f"")
        sql_output.append(f"-- {district} District - {block} Block")
        
        # Generate 10-15 panchayats per block
        num_panchayats = random.randint(10, 15)
        
        panchayat_values = []
        for i in range(num_panchayats):
            pname = generate_panchayat_name(panchayat_counter, base_names_used)
            code = generate_code(pname)
            
            # Escape single quotes in names
            pname_escaped = pname.replace("'", "''")
            
            value = f"('{pname_escaped}', '{code}', (SELECT id FROM blocks WHERE name = '{block}' AND district_id = (SELECT id FROM districts WHERE name = '{district}')), 1, 1, 1, NOW(), NOW())"
            panchayat_values.append(value)
            panchayat_counter += 1
        
        sql_output.append("INSERT INTO panchayats (name, code, block_id, status, created_by, updated_by, created_at, updated_at) VALUES")
        sql_output.append(',\n'.join(panchayat_values) + ';')
    
    sql_output.append("")
    sql_output.append(f"-- Total panchayats generated: {panchayat_counter - 1}")
    
    # Write to file
    output_file = 'bihar_panchayats_insert.sql'
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write('\n'.join(sql_output))
    
    print(f"Generated {panchayat_counter - 1} panchayats for {len(blocks_data)} blocks")
    print(f"Output written to: {output_file}")

if __name__ == '__main__':
    generate_panchayats_sql()
