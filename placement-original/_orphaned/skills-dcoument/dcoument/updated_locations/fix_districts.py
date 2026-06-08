import re

# Read original file
with open('india_districts_insert.sql', 'r', encoding='utf-8') as f:
    lines = f.readlines()

used_codes = set()
output = []
current_state = None
current_state_var = None
districts_for_state = []

def generate_unique_code(district_name, state_abbr, used_codes):
    """Generate a unique 2-4 char code"""
    # Remove special characters
    clean_name = district_name.upper().replace('.', '').replace('-', ' ').replace('&', 'AND')
    words = [w for w in clean_name.split() if w]
    
    # State abbreviation map for common conflicts
    state_prefixes = {
        'ANDHRA PRADESH': 'AP',
        'ARUNACHAL PRADESH': 'AR',
        'ASSAM': 'AS',
        'BIHAR': 'BR',
        'CHHATTISGARH': 'CG',
        'GOA': 'GA',
        'GUJARAT': 'GJ',
        'HARYANA': 'HR',
        'HIMACHAL PRADESH': 'HP',
        'JHARKHAND': 'JH',
        'KARNATAKA': 'KA',
        'KERALA': 'KL',
        'MADHYA PRADESH': 'MP',
        'MAHARASHTRA': 'MH',
        'MANIPUR': 'MN',
        'MEGHALAYA': 'ML',
        'MIZORAM': 'MZ',
        'NAGALAND': 'NL',
        'ODISHA': 'OD',
        'PUNJAB': 'PB',
        'RAJASTHAN': 'RJ',
        'SIKKIM': 'SK',
        'TAMIL NADU': 'TN',
        'TELANGANA': 'TG',
        'TRIPURA': 'TR',
        'UTTAR PRADESH': 'UP',
        'UTTARAKHAND': 'UK',
        'WEST BENGAL': 'WB',
    }
    
    state_code = state_prefixes.get(state_abbr, state_abbr[:2])
    
    # Strategy 1: First letters of each word (max 4)
    if len(words) > 1:
        code = ''.join([w[0] for w in words])[:4]
        if code not in used_codes:
            used_codes.add(code)
            return code
    
    # Strategy 2: First 3-4 letters
    code = clean_name.replace(' ', '')[:4]
    if code not in used_codes:
        used_codes.add(code)
        return code
    
    # Strategy 3: First 3 letters
    code = clean_name.replace(' ', '')[:3]
    if code not in used_codes:
        used_codes.add(code)
        return code
    
    # Strategy 4: State prefix + district initial
    code = state_code + district_name[0]
    if code not in used_codes:
        used_codes.add(code)
        return code
    
    # Strategy 5: State prefix + first 2 letters
    code = state_code + clean_name.replace(' ', '')[:2]
    if code not in used_codes:
        used_codes.add(code)
        return code
    
    # Strategy 6: Add numbers
    base = clean_name.replace(' ', '')[:2]
    for i in range(1, 100):
        code = f"{base}{i}"
        if code not in used_codes:
            used_codes.add(code)
            return code
    
    return "XXXX"  # Should never reach here

# Process file
for line in lines:
    # Detect state header
    state_match = re.match(r'^-- (.*?) \((\d+) districts\)', line)
    if state_match:
        # Output previous state if exists
        if current_state and districts_for_state:
            output.append(f"-- {current_state} ({len(districts_for_state)} districts)\n")
            output.append(f"SET @{current_state_var}_id = (SELECT id FROM states WHERE name = '{current_state}');\n")
            output.append("\n")
            output.append("INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES\n")
            for idx, (dist_name, code) in enumerate(districts_for_state):
                comma = ',' if idx < len(districts_for_state) - 1 else ';'
                output.append(f"('{dist_name}', '{code}', @{current_state_var}_id, 1, 1, 1, NOW(), NOW()){comma}\n")
            output.append("\n")
        
        current_state = state_match.group(1)
        districts_for_state = []
        continue
    
    # Detect state variable
    var_match = re.match(r'^SET @(\w+)_id = \(SELECT id FROM states WHERE name = \'([^\']+)\'\);', line)
    if var_match:
        current_state_var = var_match.group(1)
        current_state = var_match.group(2)
        continue
    
    # Detect district
    dist_match = re.match(r"^\('([^']+)', '[^']+', @", line)
    if dist_match and current_state:
        dist_name = dist_match.group(1)
        code = generate_unique_code(dist_name, current_state, used_codes)
        districts_for_state.append((dist_name, code))

# Output last state
if current_state and districts_for_state:
    output.append(f"-- {current_state} ({len(districts_for_state)} districts)\n")
    output.append(f"SET @{current_state_var}_id = (SELECT id FROM states WHERE name = '{current_state}');\n")
    output.append("\n")
    output.append("INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES\n")
    for idx, (dist_name, code) in enumerate(districts_for_state):
        comma = ',' if idx < len(districts_for_state) - 1 else ';'
        output.append(f"('{dist_name}', '{code}', @{current_state_var}_id, 1, 1, 1, NOW(), NOW()){comma}\n")
    output.append("\n")

# Write output
header = [
    "-- SQL INSERT Commands for All Indian Districts\n",
    "-- This file contains INSERT statements to populate the districts table with all districts of India\n",
    "-- state_id is looked up by name\n",
    "\n",
    "SET @india_id = (SELECT id FROM countries WHERE name = 'India');\n",
    "\n"
]

with open('india_districts_insert_fixed.sql', 'w', encoding='utf-8') as f:
    f.writelines(header + output)

print(f"✓ Fixed SQL file created")
print(f"✓ Total unique codes: {len(used_codes)}")
print(f"✓ Total states processed: {len(set([d[0] for d in districts_for_state]))}")
