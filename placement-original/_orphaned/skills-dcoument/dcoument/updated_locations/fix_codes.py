import re
from collections import defaultdict

# Read the original file
with open('india_districts_insert.sql', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract all districts with their states - improved pattern
pattern = r"-- ([\w\s&.-]+?) \((\d+) districts\)\s+SET @(\w+)_id = \(SELECT id FROM states WHERE name = '([^']+)'\);\s+INSERT INTO districts[^V]+VALUES\s+((?:\([^)]+\)[,;]\s*)+)"
matches = re.finditer(pattern, content, re.MULTILINE | re.DOTALL)

districts_by_state = {}
used_codes = set()

# Parse existing districts
for match in matches:
    state_name = match.group(4)  # Actual state name from WHERE clause
    district_count = int(match.group(2))
    state_var = match.group(3)
    districts_text = match.group(5)
    
    # Extract individual districts - improved pattern
    district_pattern = r"\('([^']+)',\s*'[^']+',\s*@" + re.escape(state_var)
    districts = re.findall(district_pattern, districts_text)
    districts_by_state[state_name] = {'var': state_var, 'districts': districts, 'count': district_count}

# Generate unique codes
def generate_code(district_name, state_name, used_codes):
    """Generate a unique code for a district"""
    # Clean district name
    name = district_name.upper().replace('.', '').replace('-', ' ')
    words = name.split()
    
    # Try different strategies
    strategies = [
        # Strategy 1: First 3 letters
        lambda: ''.join([w[0] for w in words])[:3] if len(words) > 1 else name[:3],
        # Strategy 2: First 4 letters
        lambda: name.replace(' ', '')[:4],
        # Strategy 3: Add state prefix (2 letters)
        lambda: state_name[:2].upper() + ''.join([w[0] for w in words])[:2],
        # Strategy 4: First letter of each word + number
        lambda: ''.join([w[0] for w in words])[:2] + str(len(used_codes) % 100),
        # Strategy 5: Unique with state + sequential
        lambda: state_name[:2].upper() + f"{len(used_codes):02d}"
    ]
    
    for strategy in strategies:
        code = strategy().upper().replace(' ', '')[:4]
        if code not in used_codes:
            used_codes.add(code)
            return code
    
    # Fallback: add numbers
    base = name.replace(' ', '')[:2]
    counter = 1
    while f"{base}{counter}" in used_codes:
        counter += 1
    code = f"{base}{counter}"
    used_codes.add(code)
    return code

# Build the new SQL file
output_lines = [
    "-- SQL INSERT Commands for All Indian Districts",
    "-- This file contains INSERT statements to populate the districts table with all districts of India",
    "-- state_id is looked up by name",
    "",
    "SET @india_id = (SELECT id FROM countries WHERE name = 'India');",
    ""
]

for state_name, data in districts_by_state.items():
    state_var = data['var']
    districts = data['districts']
    
    output_lines.append(f"-- {state_name} ({len(districts)} districts)")
    output_lines.append(f"SET @{state_var}_id = (SELECT id FROM states WHERE name = '{state_name}');")
    output_lines.append("")
    output_lines.append("INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES")
    
    district_lines = []
    for district in districts:
        code = generate_code(district, state_name, used_codes)
        district_lines.append(f"('{district}', '{code}', @{state_var}_id, 1, 1, 1, NOW(), NOW())")
    
    output_lines.append(',\n'.join(district_lines) + ';')
    output_lines.append("")

# Write the output
with open('india_districts_insert_fixed.sql', 'w', encoding='utf-8') as f:
    f.write('\n'.join(output_lines))

print(f"Fixed SQL file created with {len(used_codes)} unique codes")
print(f"Total states processed: {len(districts_by_state)}")
