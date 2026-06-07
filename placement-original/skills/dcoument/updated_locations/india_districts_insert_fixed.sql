-- SQL INSERT Commands for All Indian Districts
-- This file contains INSERT statements to populate the districts table with all districts of India
-- state_id is looked up by name

SET @india_id = (SELECT id FROM countries WHERE name = 'India');

-- Andhra Pradesh (26 districts)
SET @andhra_pradesh_id = (SELECT id FROM states WHERE name = 'Andhra Pradesh');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Alluri Sitharama Raju', 'ASR', @andhra_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Anakapalli', 'ANAK', @andhra_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Ananthapuramu', 'ANAN', @andhra_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Annamayya', 'ANNA', @andhra_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Bapatla', 'BAPA', @andhra_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Chittoor', 'CHIT', @andhra_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Dr. B.R. Ambedkar Konaseema', 'DBAK', @andhra_pradesh_id, 1, 1, 1, NOW(), NOW()),
('East Godavari', 'EG', @andhra_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Eluru', 'ELUR', @andhra_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Guntur', 'GUNT', @andhra_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Kakinada', 'KAKI', @andhra_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Krishna', 'KRIS', @andhra_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Kurnool', 'KURN', @andhra_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Nandyal', 'NAND', @andhra_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Nellore', 'NELL', @andhra_pradesh_id, 1, 1, 1, NOW(), NOW()),
('NTR', 'NTR', @andhra_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Palnadu', 'PALN', @andhra_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Parvathipuram Manyam', 'PM', @andhra_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Prakasam', 'PRAK', @andhra_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Srikakulam', 'SRIK', @andhra_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Sri Sathya Sai', 'SSS', @andhra_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Tirupati', 'TIRU', @andhra_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Visakhapatnam', 'VISA', @andhra_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Vizianagaram', 'VIZI', @andhra_pradesh_id, 1, 1, 1, NOW(), NOW()),
('West Godavari', 'WG', @andhra_pradesh_id, 1, 1, 1, NOW(), NOW()),
('YSR Kadapa', 'YK', @andhra_pradesh_id, 1, 1, 1, NOW(), NOW());

-- Arunachal Pradesh (27 districts)
SET @arunachal_pradesh_id = (SELECT id FROM states WHERE name = 'Arunachal Pradesh');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Anjaw', 'ANJA', @arunachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Changlang', 'CHAN', @arunachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('East Kameng', 'EK', @arunachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('East Siang', 'ES', @arunachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Kamle', 'KAML', @arunachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Kra Daadi', 'KD', @arunachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Kurung Kumey', 'KK', @arunachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Lepa Rada', 'LR', @arunachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Lohit', 'LOHI', @arunachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Longding', 'LONG', @arunachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Lower Dibang Valley', 'LDV', @arunachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Lower Siang', 'LS', @arunachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Lower Subansiri', 'LOWE', @arunachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Namsai', 'NAMS', @arunachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Pakke-Kessang', 'PK', @arunachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Papum Pare', 'PP', @arunachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Shi Yomi', 'SY', @arunachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Siang', 'SIAN', @arunachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Tawang', 'TAWA', @arunachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Tirap', 'TIRA', @arunachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Upper Dibang Valley', 'UDV', @arunachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Upper Siang', 'US', @arunachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Upper Subansiri', 'UPPE', @arunachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('West Kameng', 'WK', @arunachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('West Siang', 'WS', @arunachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Keyi Panyor', 'KP', @arunachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Bichom', 'BICH', @arunachal_pradesh_id, 1, 1, 1, NOW(), NOW());

-- Assam (35 districts)
SET @assam_id = (SELECT id FROM states WHERE name = 'Assam');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Baksa', 'BAKS', @assam_id, 1, 1, 1, NOW(), NOW()),
('Bajali', 'BAJA', @assam_id, 1, 1, 1, NOW(), NOW()),
('Barpeta', 'BARP', @assam_id, 1, 1, 1, NOW(), NOW()),
('Biswanath', 'BISW', @assam_id, 1, 1, 1, NOW(), NOW()),
('Bongaigaon', 'BONG', @assam_id, 1, 1, 1, NOW(), NOW()),
('Cachar', 'CACH', @assam_id, 1, 1, 1, NOW(), NOW()),
('Charaideo', 'CHAR', @assam_id, 1, 1, 1, NOW(), NOW()),
('Chirang', 'CHIR', @assam_id, 1, 1, 1, NOW(), NOW()),
('Darrang', 'DARR', @assam_id, 1, 1, 1, NOW(), NOW()),
('Dhemaji', 'DHEM', @assam_id, 1, 1, 1, NOW(), NOW()),
('Dhubri', 'DHUB', @assam_id, 1, 1, 1, NOW(), NOW()),
('Dibrugarh', 'DIBR', @assam_id, 1, 1, 1, NOW(), NOW()),
('Dima Hasao', 'DH', @assam_id, 1, 1, 1, NOW(), NOW()),
('Goalpara', 'GOAL', @assam_id, 1, 1, 1, NOW(), NOW()),
('Golaghat', 'GOLA', @assam_id, 1, 1, 1, NOW(), NOW()),
('Hailakandi', 'HAIL', @assam_id, 1, 1, 1, NOW(), NOW()),
('Hojai', 'HOJA', @assam_id, 1, 1, 1, NOW(), NOW()),
('Jorhat', 'JORH', @assam_id, 1, 1, 1, NOW(), NOW()),
('Kamrup', 'KAMR', @assam_id, 1, 1, 1, NOW(), NOW()),
('Kamrup Metropolitan', 'KM', @assam_id, 1, 1, 1, NOW(), NOW()),
('Karbi Anglong', 'KA', @assam_id, 1, 1, 1, NOW(), NOW()),
('Karimganj', 'KARI', @assam_id, 1, 1, 1, NOW(), NOW()),
('Kokrajhar', 'KOKR', @assam_id, 1, 1, 1, NOW(), NOW()),
('Lakhimpur', 'LAKH', @assam_id, 1, 1, 1, NOW(), NOW()),
('Majuli', 'MAJU', @assam_id, 1, 1, 1, NOW(), NOW()),
('Morigaon', 'MORI', @assam_id, 1, 1, 1, NOW(), NOW()),
('Nagaon', 'NAGA', @assam_id, 1, 1, 1, NOW(), NOW()),
('Nalbari', 'NALB', @assam_id, 1, 1, 1, NOW(), NOW()),
('Sivasagar', 'SIVA', @assam_id, 1, 1, 1, NOW(), NOW()),
('Sonitpur', 'SONI', @assam_id, 1, 1, 1, NOW(), NOW()),
('South Salmara-Mankachar', 'SSM', @assam_id, 1, 1, 1, NOW(), NOW()),
('Tamulpur', 'TAMU', @assam_id, 1, 1, 1, NOW(), NOW()),
('Tinsukia', 'TINS', @assam_id, 1, 1, 1, NOW(), NOW()),
('Udalguri', 'UDAL', @assam_id, 1, 1, 1, NOW(), NOW()),
('West Karbi Anglong', 'WKA', @assam_id, 1, 1, 1, NOW(), NOW());

-- Bihar (38 districts)
SET @bihar_id = (SELECT id FROM states WHERE name = 'Bihar');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Araria', 'ARAR', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Arwal', 'ARWA', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Aurangabad', 'AURA', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Banka', 'BANK', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Begusarai', 'BEGU', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Bhabhua', 'BHAB', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Bhagalpur', 'BHAG', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Bhojpur', 'BHOJ', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Buxar', 'BUXA', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Darbhanga', 'DARB', @bihar_id, 1, 1, 1, NOW(), NOW()),
('E.Champaran', 'ECHA', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Gaya', 'GAYA', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Gopalganj', 'GOPA', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Jamui', 'JAMU', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Jehanabad', 'JEHA', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Katihar', 'KATI', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Khagaria', 'KHAG', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Kishanganj', 'KISH', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Lakhisarai', 'LAK', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Madhepura', 'MADH', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Madhubani', 'MAD', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Munger', 'MUNG', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Muzaffarpur', 'MUZA', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Nalanda', 'NALA', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Nawada', 'NAWA', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Patna', 'PATN', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Purnia', 'PURN', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Rohtas', 'ROHT', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Saharsa', 'SAHA', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Samastipur', 'SAMA', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Saran', 'SARA', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Sheikhpura', 'SHEI', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Sheohar', 'SHEO', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Sitamarhi', 'SITA', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Siwan', 'SIWA', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Supaul', 'SUPA', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Vaishali', 'VAIS', @bihar_id, 1, 1, 1, NOW(), NOW()),
('W.Champaran', 'WCHA', @bihar_id, 1, 1, 1, NOW(), NOW());

-- Chhattisgarh (33 districts)
SET @chhattisgarh_id = (SELECT id FROM states WHERE name = 'Chhattisgarh');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Balod', 'BALO', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Baloda Bazar', 'BB', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Balrampur-Ramanujganj', 'BR', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Bastar', 'BAST', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Bemetara', 'BEME', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Bijapur', 'BIJA', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Bilaspur', 'BILA', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Dantewada', 'DANT', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Dhamtari', 'DHAM', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Durg', 'DURG', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Gariaband', 'GARI', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Gaurela-Pendra-Marwahi', 'GPM', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Janjgir-Champa', 'JC', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Jashpur', 'JASH', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Kabirdham', 'KABI', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Kanker', 'KANK', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Khairagarh-Chhuikhadan-Gandai', 'KCG', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Kondagaon', 'KOND', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Korba', 'KORB', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Korea', 'KORE', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Mahasamund', 'MAHA', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Manendragarh-Chirmiri-Bharatpur', 'MCB', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Mohla-Manpur-Ambagarh Chowki', 'MMAC', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Mungeli', 'MUN', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Narayanpur', 'NARA', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Raigarh', 'RAIG', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Raipur', 'RAIP', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Rajnandgaon', 'RAJN', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Sarangarh-Bilaigarh', 'SB', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Sakti', 'SAKT', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Sukma', 'SUKM', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Surajpur', 'SURA', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Surguja', 'SURG', @chhattisgarh_id, 1, 1, 1, NOW(), NOW());

-- Goa (2 districts)
SET @goa_id = (SELECT id FROM states WHERE name = 'Goa');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('North Goa', 'NG', @goa_id, 1, 1, 1, NOW(), NOW()),
('South Goa', 'SG', @goa_id, 1, 1, 1, NOW(), NOW());

-- Gujarat (34 districts)
SET @gujarat_id = (SELECT id FROM states WHERE name = 'Gujarat');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Ahmedabad', 'AHME', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Amreli', 'AMRE', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Anand', 'ANA', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Aravalli', 'ARAV', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Banaskantha', 'BANA', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Bharuch', 'BHAR', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Bhavnagar', 'BHAV', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Botad', 'BOTA', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Chhota Udaipur', 'CU', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Dahod', 'DAHO', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Dang', 'DANG', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Devbhumi Dwarka', 'DD', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Gandhinagar', 'GAND', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Gir Somnath', 'GS', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Jamnagar', 'JAMN', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Junagadh', 'JUNA', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Kheda', 'KHED', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Kutch', 'KUTC', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Mahisagar', 'MAHI', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Mehsana', 'MEHS', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Morbi', 'MORB', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Narmada', 'NARM', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Navsari', 'NAVS', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Panchmahal', 'PANC', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Patan', 'PATA', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Porbandar', 'PORB', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Rajkot', 'RAJK', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Sabarkantha', 'SABA', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Surat', 'SUR', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Surendranagar', 'SURE', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Tapi', 'TAPI', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Vadodara', 'VADO', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Valsad', 'VALS', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Vav-Tharad', 'VT', @gujarat_id, 1, 1, 1, NOW(), NOW());

-- Haryana (22 districts)
SET @haryana_id = (SELECT id FROM states WHERE name = 'Haryana');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Ambala', 'AMBA', @haryana_id, 1, 1, 1, NOW(), NOW()),
('Bhiwani', 'BHIW', @haryana_id, 1, 1, 1, NOW(), NOW()),
('Charkhi Dadri', 'CD', @haryana_id, 1, 1, 1, NOW(), NOW()),
('Faridabad', 'FARI', @haryana_id, 1, 1, 1, NOW(), NOW()),
('Fatehabad', 'FATE', @haryana_id, 1, 1, 1, NOW(), NOW()),
('Gurugram', 'GURU', @haryana_id, 1, 1, 1, NOW(), NOW()),
('Hisar', 'HISA', @haryana_id, 1, 1, 1, NOW(), NOW()),
('Jhajjar', 'JHAJ', @haryana_id, 1, 1, 1, NOW(), NOW()),
('Jind', 'JIND', @haryana_id, 1, 1, 1, NOW(), NOW()),
('Kaithal', 'KAIT', @haryana_id, 1, 1, 1, NOW(), NOW()),
('Karnal', 'KARN', @haryana_id, 1, 1, 1, NOW(), NOW()),
('Kurukshetra', 'KURU', @haryana_id, 1, 1, 1, NOW(), NOW()),
('Mahendragarh', 'MAHE', @haryana_id, 1, 1, 1, NOW(), NOW()),
('Nuh', 'NUH', @haryana_id, 1, 1, 1, NOW(), NOW()),
('Palwal', 'PALW', @haryana_id, 1, 1, 1, NOW(), NOW()),
('Panchkula', 'PAN', @haryana_id, 1, 1, 1, NOW(), NOW()),
('Panipat', 'PANI', @haryana_id, 1, 1, 1, NOW(), NOW()),
('Rewari', 'REWA', @haryana_id, 1, 1, 1, NOW(), NOW()),
('Rohtak', 'ROH', @haryana_id, 1, 1, 1, NOW(), NOW()),
('Sirsa', 'SIRS', @haryana_id, 1, 1, 1, NOW(), NOW()),
('Sonipat', 'SON', @haryana_id, 1, 1, 1, NOW(), NOW()),
('Yamunanagar', 'YAMU', @haryana_id, 1, 1, 1, NOW(), NOW());

-- Himachal Pradesh (12 districts)
SET @himachal_pradesh_id = (SELECT id FROM states WHERE name = 'Himachal Pradesh');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Bilaspur', 'BIL', @himachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Chamba', 'CHAM', @himachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Hamirpur', 'HAMI', @himachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Kangra', 'KANG', @himachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Kinnaur', 'KINN', @himachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Kullu', 'KULL', @himachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Lahaul and Spiti', 'LAS', @himachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Mandi', 'MAND', @himachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Shimla', 'SHIM', @himachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Sirmaur', 'SIRM', @himachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Solan', 'SOLA', @himachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Una', 'UNA', @himachal_pradesh_id, 1, 1, 1, NOW(), NOW());

-- Jharkhand (24 districts)
SET @jharkhand_id = (SELECT id FROM states WHERE name = 'Jharkhand');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Bokaro', 'BOKA', @jharkhand_id, 1, 1, 1, NOW(), NOW()),
('Chatra', 'CHAT', @jharkhand_id, 1, 1, 1, NOW(), NOW()),
('Deoghar', 'DEOG', @jharkhand_id, 1, 1, 1, NOW(), NOW()),
('Dhanbad', 'DHAN', @jharkhand_id, 1, 1, 1, NOW(), NOW()),
('Dumka', 'DUMK', @jharkhand_id, 1, 1, 1, NOW(), NOW()),
('East Singhbhum', 'EAST', @jharkhand_id, 1, 1, 1, NOW(), NOW()),
('Garhwa', 'GARH', @jharkhand_id, 1, 1, 1, NOW(), NOW()),
('Giridih', 'GIRI', @jharkhand_id, 1, 1, 1, NOW(), NOW()),
('Godda', 'GODD', @jharkhand_id, 1, 1, 1, NOW(), NOW()),
('Gumla', 'GUML', @jharkhand_id, 1, 1, 1, NOW(), NOW()),
('Hazaribag', 'HAZA', @jharkhand_id, 1, 1, 1, NOW(), NOW()),
('Jamtara', 'JAMT', @jharkhand_id, 1, 1, 1, NOW(), NOW()),
('Khunti', 'KHUN', @jharkhand_id, 1, 1, 1, NOW(), NOW()),
('Koderma', 'KODE', @jharkhand_id, 1, 1, 1, NOW(), NOW()),
('Latehar', 'LATE', @jharkhand_id, 1, 1, 1, NOW(), NOW()),
('Lohardaga', 'LOHA', @jharkhand_id, 1, 1, 1, NOW(), NOW()),
('Pakur', 'PAKU', @jharkhand_id, 1, 1, 1, NOW(), NOW()),
('Palamu', 'PALA', @jharkhand_id, 1, 1, 1, NOW(), NOW()),
('Ramgarh', 'RAMG', @jharkhand_id, 1, 1, 1, NOW(), NOW()),
('Ranchi', 'RANC', @jharkhand_id, 1, 1, 1, NOW(), NOW()),
('Sahibganj', 'SAHI', @jharkhand_id, 1, 1, 1, NOW(), NOW()),
('Seraikela-Kharsawan', 'SK', @jharkhand_id, 1, 1, 1, NOW(), NOW()),
('Simdega', 'SIMD', @jharkhand_id, 1, 1, 1, NOW(), NOW()),
('West Singhbhum', 'WEST', @jharkhand_id, 1, 1, 1, NOW(), NOW());

-- Karnataka (31 districts)
SET @karnataka_id = (SELECT id FROM states WHERE name = 'Karnataka');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Bagalkot', 'BAGA', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Ballari', 'BALL', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Belagavi', 'BELA', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Bangalore Rural', 'BANG', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Bangalore Urban', 'BU', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Bidar', 'BIDA', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Chamarajanagar', 'CHA', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Chikkaballapur', 'CHIK', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Chikmagalur', 'CHI', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Chitradurga', 'KaC', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Dakshina Kannada', 'DK', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Davanagere', 'DAVA', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Dharwad', 'DHAR', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Gadag', 'GADA', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Kalaburagi', 'KALA', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Hassan', 'HASS', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Haveri', 'HAVE', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Kodagu', 'KODA', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Kolar', 'KOLA', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Koppal', 'KOPP', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Mandya', 'MAN', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Mysore', 'MYSO', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Raichur', 'RAIC', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Ramanagara', 'RAMA', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Shimoga', 'SHI', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Tumakuru', 'TUMA', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Udupi', 'UDUP', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Uttara Kannada', 'UK', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Vijayanagara', 'VIJA', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Bijapur', 'BIJ', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Yadgir', 'YADG', @karnataka_id, 1, 1, 1, NOW(), NOW());

-- Kerala (14 districts)
SET @kerala_id = (SELECT id FROM states WHERE name = 'Kerala');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Alappuzha', 'ALAP', @kerala_id, 1, 1, 1, NOW(), NOW()),
('Ernakulam', 'ERNA', @kerala_id, 1, 1, 1, NOW(), NOW()),
('Idukki', 'IDUK', @kerala_id, 1, 1, 1, NOW(), NOW()),
('Kannur', 'KANN', @kerala_id, 1, 1, 1, NOW(), NOW()),
('Kasaragod', 'KASA', @kerala_id, 1, 1, 1, NOW(), NOW()),
('Kollam', 'KOLL', @kerala_id, 1, 1, 1, NOW(), NOW()),
('Kottayam', 'KOTT', @kerala_id, 1, 1, 1, NOW(), NOW()),
('Kozhikode', 'KOZH', @kerala_id, 1, 1, 1, NOW(), NOW()),
('Malappuram', 'MALA', @kerala_id, 1, 1, 1, NOW(), NOW()),
('Palakkad', 'PAL', @kerala_id, 1, 1, 1, NOW(), NOW()),
('Pathanamthitta', 'PATH', @kerala_id, 1, 1, 1, NOW(), NOW()),
('Thiruvananthapuram', 'THIR', @kerala_id, 1, 1, 1, NOW(), NOW()),
('Thrissur', 'THRI', @kerala_id, 1, 1, 1, NOW(), NOW()),
('Wayanad', 'WAYA', @kerala_id, 1, 1, 1, NOW(), NOW());

-- Madhya Pradesh (55 districts)
SET @madhya_pradesh_id = (SELECT id FROM states WHERE name = 'Madhya Pradesh');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Agar Malwa', 'AM', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Alirajpur', 'ALIR', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Anuppur', 'ANUP', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Ashoknagar', 'ASHO', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Balaghat', 'BALA', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Barwani', 'BARW', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Betul', 'BETU', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Bhind', 'BHIN', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Bhopal', 'BHOP', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Burhanpur', 'BURH', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Chhatarpur', 'CHHA', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Chhindwara', 'CHHI', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Damoh', 'DAMO', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Datia', 'DATI', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Dewas', 'DEWA', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Dhar', 'DHA', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Dindori', 'DIND', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Guna', 'GUNA', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Gwalior', 'GWAL', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Harda', 'HARD', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Hoshangabad', 'HOSH', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Indore', 'INDO', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Jabalpur', 'JABA', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Jhabua', 'JHAB', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Katni', 'KATN', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Khandwa', 'KHAN', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Khargone', 'KHAR', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Maihar', 'MAIH', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Mandla', 'MaM', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Mandsaur', 'MaMA', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Mauganj', 'MAUG', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Morena', 'MORE', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Narsinghpur', 'NARS', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Neemuch', 'NEEM', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Niwari', 'NIWA', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Panna', 'PANN', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Pandhurna', 'PAND', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Raisen', 'RAIS', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Rajgarh', 'RAJG', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Ratlam', 'RATL', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Rewa', 'REW', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Sagar', 'SAGA', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Satna', 'SATN', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Sehore', 'SEHO', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Seoni', 'SEON', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Shahdol', 'SHAH', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Shajapur', 'SHAJ', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Sheopur', 'SHE', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Shivpuri', 'SHIV', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Sidhi', 'SIDH', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Singrauli', 'SING', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Tikamgarh', 'TIKA', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Ujjain', 'UJJA', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Umaria', 'UMAR', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Vidisha', 'VIDI', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW());

-- Maharashtra (36 districts)
SET @maharashtra_id = (SELECT id FROM states WHERE name = 'Maharashtra');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Ahmednagar', 'AHM', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Akola', 'AKOL', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Amravati', 'AMRA', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Aurangabad', 'AUR', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Beed', 'BEED', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Bhandara', 'BHAN', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Buldhana', 'BULD', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Chandrapur', 'MaC', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Osmanabad', 'OSMA', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Dhule', 'DHUL', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Gadchiroli', 'GADC', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Gondia', 'GOND', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Hingoli', 'HING', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Jalgaon', 'JALG', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Jalna', 'JALN', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Kolhapur', 'KOLH', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Latur', 'LATU', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Mumbai City', 'MC', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Mumbai Suburban', 'MS', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Nanded', 'NAN', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Nandurbar', 'NDUR', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Nagpur', 'NAGP', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Nashik', 'NASH', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Palghar', 'PALG', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Parbhani', 'PARB', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Pune', 'PUNE', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Raigad', 'RAI', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Ratnagiri', 'RATN', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Sangli', 'SANG', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Satara', 'SATA', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Sindhudurg', 'SIND', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Solapur', 'SOL', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Thane', 'THAN', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Wardha', 'WARD', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Washim', 'WASH', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Yavatmal', 'YAVA', @maharashtra_id, 1, 1, 1, NOW(), NOW());

-- Manipur (16 districts)
SET @manipur_id = (SELECT id FROM states WHERE name = 'Manipur');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Bishnupur', 'BISH', @manipur_id, 1, 1, 1, NOW(), NOW()),
('Chandel', 'MaCH', @manipur_id, 1, 1, 1, NOW(), NOW()),
('Churachandpur', 'CHUR', @manipur_id, 1, 1, 1, NOW(), NOW()),
('Imphal East', 'IE', @manipur_id, 1, 1, 1, NOW(), NOW()),
('Imphal West', 'IW', @manipur_id, 1, 1, 1, NOW(), NOW()),
('Jiribam', 'JIRI', @manipur_id, 1, 1, 1, NOW(), NOW()),
('Kakching', 'KAKC', @manipur_id, 1, 1, 1, NOW(), NOW()),
('Kamjong', 'KAMJ', @manipur_id, 1, 1, 1, NOW(), NOW()),
('Kangpokpi', 'KAN', @manipur_id, 1, 1, 1, NOW(), NOW()),
('Noney', 'NONE', @manipur_id, 1, 1, 1, NOW(), NOW()),
('Pherzawl', 'PHER', @manipur_id, 1, 1, 1, NOW(), NOW()),
('Senapati', 'SENA', @manipur_id, 1, 1, 1, NOW(), NOW()),
('Tamenglong', 'TAME', @manipur_id, 1, 1, 1, NOW(), NOW()),
('Tengnoupal', 'TENG', @manipur_id, 1, 1, 1, NOW(), NOW()),
('Thoubal', 'THOU', @manipur_id, 1, 1, 1, NOW(), NOW()),
('Ukhrul', 'UKHR', @manipur_id, 1, 1, 1, NOW(), NOW());

-- Meghalaya (12 districts)
SET @meghalaya_id = (SELECT id FROM states WHERE name = 'Meghalaya');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('East Garo Hills', 'EGH', @meghalaya_id, 1, 1, 1, NOW(), NOW()),
('East Jaintia Hills', 'EJH', @meghalaya_id, 1, 1, 1, NOW(), NOW()),
('East Khasi Hills', 'EKH', @meghalaya_id, 1, 1, 1, NOW(), NOW()),
('Eastern West Khasi Hills', 'EWKH', @meghalaya_id, 1, 1, 1, NOW(), NOW()),
('North Garo Hills', 'NGH', @meghalaya_id, 1, 1, 1, NOW(), NOW()),
('Ri Bhoi', 'RB', @meghalaya_id, 1, 1, 1, NOW(), NOW()),
('South Garo Hills', 'SGH', @meghalaya_id, 1, 1, 1, NOW(), NOW()),
('South West Garo Hills', 'SWGH', @meghalaya_id, 1, 1, 1, NOW(), NOW()),
('South West Khasi Hills', 'SWKH', @meghalaya_id, 1, 1, 1, NOW(), NOW()),
('West Garo Hills', 'WGH', @meghalaya_id, 1, 1, 1, NOW(), NOW()),
('West Jaintia Hills', 'WJH', @meghalaya_id, 1, 1, 1, NOW(), NOW()),
('West Khasi Hills', 'WKH', @meghalaya_id, 1, 1, 1, NOW(), NOW());

-- Mizoram (11 districts)
SET @mizoram_id = (SELECT id FROM states WHERE name = 'Mizoram');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Aizawl', 'AIZA', @mizoram_id, 1, 1, 1, NOW(), NOW()),
('Champhai', 'MiC', @mizoram_id, 1, 1, 1, NOW(), NOW()),
('Hnahthial', 'HNAH', @mizoram_id, 1, 1, 1, NOW(), NOW()),
('Khawzawl', 'KHAW', @mizoram_id, 1, 1, 1, NOW(), NOW()),
('Kolasib', 'KOL', @mizoram_id, 1, 1, 1, NOW(), NOW()),
('Lawngtlai', 'LAWN', @mizoram_id, 1, 1, 1, NOW(), NOW()),
('Lunglei', 'LUNG', @mizoram_id, 1, 1, 1, NOW(), NOW()),
('Mamit', 'MAMI', @mizoram_id, 1, 1, 1, NOW(), NOW()),
('Saiha', 'SAIH', @mizoram_id, 1, 1, 1, NOW(), NOW()),
('Saitual', 'SAIT', @mizoram_id, 1, 1, 1, NOW(), NOW()),
('Serchhip', 'SERC', @mizoram_id, 1, 1, 1, NOW(), NOW());

-- Nagaland (16 districts)
SET @nagaland_id = (SELECT id FROM states WHERE name = 'Nagaland');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Chümoukedima', 'CHÜM', @nagaland_id, 1, 1, 1, NOW(), NOW()),
('Dimapur', 'DIMA', @nagaland_id, 1, 1, 1, NOW(), NOW()),
('Kiphire', 'KIPH', @nagaland_id, 1, 1, 1, NOW(), NOW()),
('Kohima', 'KOHI', @nagaland_id, 1, 1, 1, NOW(), NOW()),
('Longleng', 'LON', @nagaland_id, 1, 1, 1, NOW(), NOW()),
('Mokokchung', 'MOKO', @nagaland_id, 1, 1, 1, NOW(), NOW()),
('Mon', 'MON', @nagaland_id, 1, 1, 1, NOW(), NOW()),
('Niuland', 'NIUL', @nagaland_id, 1, 1, 1, NOW(), NOW()),
('Noklak', 'NOKL', @nagaland_id, 1, 1, 1, NOW(), NOW()),
('Peren', 'PERE', @nagaland_id, 1, 1, 1, NOW(), NOW()),
('Phek', 'PHEK', @nagaland_id, 1, 1, 1, NOW(), NOW()),
('Shamator', 'SHAM', @nagaland_id, 1, 1, 1, NOW(), NOW()),
('Tseminyü', 'TSEM', @nagaland_id, 1, 1, 1, NOW(), NOW()),
('Tuensang', 'TUEN', @nagaland_id, 1, 1, 1, NOW(), NOW()),
('Wokha', 'WOKH', @nagaland_id, 1, 1, 1, NOW(), NOW()),
('Zunheboto', 'ZUNH', @nagaland_id, 1, 1, 1, NOW(), NOW());

-- Odisha (30 districts)
SET @odisha_id = (SELECT id FROM states WHERE name = 'Odisha');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Angul', 'ANGU', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Boudh', 'BOUD', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Bhadrak', 'BHAD', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Balangir', 'BAL', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Bargarh', 'BARG', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Balasore', 'OdB', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Cuttack', 'CUTT', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Debagarh', 'DEBA', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Dhenkanal', 'DHEN', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Ganjam', 'GANJ', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Gajapati', 'GAJA', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Jharsuguda', 'JHAR', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Jajpur', 'JAJP', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Jagatsinghpur', 'JAGA', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Khordha', 'KHOR', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Kendujhar', 'KEND', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Kalahandi', 'KAL', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Kandhamal', 'KAND', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Koraput', 'KORA', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Kendrapara', 'KEN', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Malkangiri', 'MALK', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Mayurbhanj', 'MAYU', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Nabarangpur', 'NABA', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Nuapada', 'NUAP', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Nayagarh', 'NAYA', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Puri', 'PURI', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Rayagada', 'RAYA', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Sambalpur', 'SAMB', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Subarnapur', 'SUBA', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Sundargarh', 'SUND', @odisha_id, 1, 1, 1, NOW(), NOW());

-- Punjab (23 districts)
SET @punjab_id = (SELECT id FROM states WHERE name = 'Punjab');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Amritsar', 'AMRI', @punjab_id, 1, 1, 1, NOW(), NOW()),
('Barnala', 'BARN', @punjab_id, 1, 1, 1, NOW(), NOW()),
('Bathinda', 'BATH', @punjab_id, 1, 1, 1, NOW(), NOW()),
('Faridkot', 'FAR', @punjab_id, 1, 1, 1, NOW(), NOW()),
('Fatehgarh Sahib', 'FS', @punjab_id, 1, 1, 1, NOW(), NOW()),
('Fazilka', 'FAZI', @punjab_id, 1, 1, 1, NOW(), NOW()),
('Firozpur', 'FIRO', @punjab_id, 1, 1, 1, NOW(), NOW()),
('Gurdaspur', 'GURD', @punjab_id, 1, 1, 1, NOW(), NOW()),
('Hoshiarpur', 'HOS', @punjab_id, 1, 1, 1, NOW(), NOW()),
('Jalandhar', 'JALA', @punjab_id, 1, 1, 1, NOW(), NOW()),
('Kapurthala', 'KAPU', @punjab_id, 1, 1, 1, NOW(), NOW()),
('Ludhiana', 'LUDH', @punjab_id, 1, 1, 1, NOW(), NOW()),
('Malerkotla', 'MALE', @punjab_id, 1, 1, 1, NOW(), NOW()),
('Mansa', 'MANS', @punjab_id, 1, 1, 1, NOW(), NOW()),
('Moga', 'MOGA', @punjab_id, 1, 1, 1, NOW(), NOW()),
('Pathankot', 'PAT', @punjab_id, 1, 1, 1, NOW(), NOW()),
('Patiala', 'PATI', @punjab_id, 1, 1, 1, NOW(), NOW()),
('Rupnagar', 'RUPN', @punjab_id, 1, 1, 1, NOW(), NOW()),
('Sahibzada Ajit Singh Nagar', 'SASN', @punjab_id, 1, 1, 1, NOW(), NOW()),
('Sangrur', 'SAN', @punjab_id, 1, 1, 1, NOW(), NOW()),
('Shahid Bhagat Singh Nagar', 'SBSN', @punjab_id, 1, 1, 1, NOW(), NOW()),
('Sri Muktsar Sahib', 'SMS', @punjab_id, 1, 1, 1, NOW(), NOW()),
('Tarn Taran', 'TT', @punjab_id, 1, 1, 1, NOW(), NOW());

-- Rajasthan (41 districts)
SET @rajasthan_id = (SELECT id FROM states WHERE name = 'Rajasthan');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Ajmer', 'AJME', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Alwar', 'ALWA', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Balotra', 'RaB', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Banswara', 'BANS', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Baran', 'BARA', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Barmer', 'BARM', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Beawar', 'BEAW', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Bharatpur', 'BHA', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Bhilwara', 'BHIL', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Bikaner', 'BIKA', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Bundi', 'BUND', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Chittorgarh', 'RaC', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Churu', 'CHU', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Dausa', 'DAUS', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Deeg', 'DEEG', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Dholpur', 'DHOL', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Didwana Kuchaman', 'DIDW', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Dungarpur', 'DUNG', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Hanumangarh', 'HANU', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Jaipur', 'JAIP', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Jaisalmer', 'JAIS', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Jalore', 'JALO', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Jhalawar', 'JHAL', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Jhunjhunu', 'JHUN', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Jodhpur', 'JODH', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Karauli', 'KARA', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Khairthal-Tijara', 'KT', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Kota', 'KOTA', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Kotputli-Behror', 'KB', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Nagaur', 'NAG', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Pali', 'PALI', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Phalodi', 'PHAL', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Pratapgarh', 'PRAT', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Rajsamand', 'RAJS', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Salumbar', 'SALU', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Sawai Madhopur', 'SM', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Sikar', 'SIKA', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Sirohi', 'SIRO', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Sri Ganganagar', 'SRIG', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Tonk', 'TONK', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Udaipur', 'UDAI', @rajasthan_id, 1, 1, 1, NOW(), NOW());

-- Sikkim (6 districts)
SET @sikkim_id = (SELECT id FROM states WHERE name = 'Sikkim');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Gangtok', 'GANG', @sikkim_id, 1, 1, 1, NOW(), NOW()),
('Gyalshing', 'GYAL', @sikkim_id, 1, 1, 1, NOW(), NOW()),
('Mangan', 'MANG', @sikkim_id, 1, 1, 1, NOW(), NOW()),
('Namchi', 'NAMC', @sikkim_id, 1, 1, 1, NOW(), NOW()),
('Pakyong', 'PAKY', @sikkim_id, 1, 1, 1, NOW(), NOW()),
('Soreng', 'SORE', @sikkim_id, 1, 1, 1, NOW(), NOW());

-- Tamil Nadu (38 districts)
SET @tamil_nadu_id = (SELECT id FROM states WHERE name = 'Tamil Nadu');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Ariyalur', 'ARIY', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Chengalpattu', 'CHEN', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Chennai', 'CHE', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Coimbatore', 'COIM', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Cuddalore', 'CUDD', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Dharmapuri', 'TaD', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Dindigul', 'DIN', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Erode', 'EROD', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Kallakurichi', 'KALL', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Kanchipuram', 'KANC', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Kanyakumari', 'KANY', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Karur', 'KARU', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Krishnagiri', 'KRI', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Madurai', 'MADU', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Mayiladuthurai', 'MAYI', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Nagapattinam', 'TaN', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Nilgiris', 'NILG', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Namakkal', 'NAMA', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Perambalur', 'PERA', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Pudukkottai', 'PUDU', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Ramanathapuram', 'RAM', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Ranipet', 'RANI', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Salem', 'SALE', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Sivaganga', 'SIV', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Tenkasi', 'TENK', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Tiruppur', 'TIR', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Tiruchirappalli', 'TaT', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Theni', 'THEN', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Tirunelveli', 'TaTI', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Thanjavur', 'THA', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Thoothukudi', 'THOO', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Tirupattur', 'TI1', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Tiruvallur', 'TI2', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Tiruvarur', 'TI3', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Tiruvannamalai', 'TI4', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Vellore', 'VELL', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Viluppuram', 'VILU', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Virudhunagar', 'VIRU', @tamil_nadu_id, 1, 1, 1, NOW(), NOW());

-- Telangana (33 districts)
SET @telangana_id = (SELECT id FROM states WHERE name = 'Telangana');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Adilabad', 'ADIL', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Bhadradri Kothagudem', 'BK', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Hanamkonda', 'HANA', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Hyderabad', 'HYDE', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Jagtial', 'JAGT', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Jangaon', 'JANG', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Jayashankar Bhupalpally', 'JB', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Jogulamba Gadwal', 'JG', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Kamareddy', 'KAMA', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Karimnagar', 'KAR', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Khammam', 'KHAM', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Kumuram Bheem Asifabad', 'KBA', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Mahabubabad', 'MAH', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Mahbubnagar', 'MAHB', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Mancherial', 'MANC', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Medak', 'MEDA', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Medchal–Malkajgiri', 'MEDC', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Mulugu', 'MULU', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Nalgonda', 'NALG', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Nagarkurnool', 'TeN', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Narayanpet', 'NAR', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Nirmal', 'NIRM', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Nizamabad', 'NIZA', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Peddapalli', 'PEDD', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Rajanna Sircilla', 'RS', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Ranga Reddy', 'RR', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Sangareddy', 'TeS', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Siddipet', 'SIDD', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Suryapet', 'SURY', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Vikarabad', 'VIKA', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Wanaparthy', 'WANA', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Warangal', 'WARA', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Yadadri Bhuvanagiri', 'YB', @telangana_id, 1, 1, 1, NOW(), NOW());

-- Tripura (8 districts)
SET @tripura_id = (SELECT id FROM states WHERE name = 'Tripura');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Dhalai', 'DHAL', @tripura_id, 1, 1, 1, NOW(), NOW()),
('Gomati', 'GOMA', @tripura_id, 1, 1, 1, NOW(), NOW()),
('Khowai', 'KHOW', @tripura_id, 1, 1, 1, NOW(), NOW()),
('North Tripura', 'NT', @tripura_id, 1, 1, 1, NOW(), NOW()),
('Sepahijala', 'SEPA', @tripura_id, 1, 1, 1, NOW(), NOW()),
('South Tripura', 'ST', @tripura_id, 1, 1, 1, NOW(), NOW()),
('Unakoti', 'UNAK', @tripura_id, 1, 1, 1, NOW(), NOW()),
('West Tripura', 'WT', @tripura_id, 1, 1, 1, NOW(), NOW());

-- Uttar Pradesh (75 districts)
SET @uttar_pradesh_id = (SELECT id FROM states WHERE name = 'Uttar Pradesh');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Agra', 'AGRA', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Aligarh', 'ALIG', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Ambedkar Nagar', 'AN', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Amethi', 'AMET', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Amroha', 'AMRO', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Auraiya', 'UtA', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Ayodhya', 'AYOD', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Azamgarh', 'AZAM', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Bagpat', 'BAGP', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Bahraich', 'BAHR', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Ballia', 'UtB', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Balrampur', 'BALR', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Banda', 'BAND', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Barabanki', 'BAR', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Bareilly', 'BARE', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Basti', 'BAS', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Bhadohi', 'UtBH', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Bijnor', 'BIJN', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Budaun', 'BUDA', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Bulandshahr', 'BULA', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Chandauli', 'UtC', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Chitrakoot', 'UtCH', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Deoria', 'DEOR', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Etah', 'ETAH', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Etawah', 'ETAW', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Farrukhabad', 'FARR', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Fatehpur', 'FAT', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Firozabad', 'FIR', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Gautam Buddha Nagar', 'GBN', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Ghaziabad', 'GHAZ', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Ghazipur', 'GHA', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Gonda', 'GON', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Gorakhpur', 'GORA', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Hamirpur', 'HAM', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Hapur', 'HAPU', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Hardoi', 'HAR', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Hathras', 'HATH', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Jalaun', 'JAL', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Jaunpur', 'JAUN', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Jhansi', 'JHAN', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Kannauj', 'UtK', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Kanpur Dehat', 'KANP', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Kanpur Nagar', 'KN', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Kasganj', 'KASG', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Kaushambi', 'KAUS', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Kushinagar', 'KUSH', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Lakhimpur Kheri', 'LK', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Lalitpur', 'LALI', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Lucknow', 'LUCK', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Maharajganj', 'UtM', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Mahoba', 'MAHO', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Mainpuri', 'MAIN', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Mathura', 'MATH', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Mau', 'MAU', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Meerut', 'MEER', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Mirzapur', 'MIRZ', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Moradabad', 'MORA', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Muzaffarnagar', 'MUZ', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Pilibhit', 'PILI', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Pratapgarh', 'PRA', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Prayagraj', 'PRAY', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Raebareli', 'RAEB', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Rampur', 'RAMP', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Saharanpur', 'SAH', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Sambhal', 'SAM', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Sant Kabir Nagar', 'SKN', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Shahjahanpur', 'SHA', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Shamli', 'UtS', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Shravasti', 'SHRA', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Siddharthnagar', 'SID', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Sitapur', 'SIT', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Sonbhadra', 'SONB', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Sultanpur', 'SULT', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Unnao', 'UNNA', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Varanasi', 'VARA', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW());

-- Uttarakhand (13 districts)
SET @uttarakhand_id = (SELECT id FROM states WHERE name = 'Uttarakhand');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Almora', 'ALMO', @uttarakhand_id, 1, 1, 1, NOW(), NOW()),
('Bageshwar', 'BAGE', @uttarakhand_id, 1, 1, 1, NOW(), NOW()),
('Chamoli', 'CH1', @uttarakhand_id, 1, 1, 1, NOW(), NOW()),
('Champawat', 'CH2', @uttarakhand_id, 1, 1, 1, NOW(), NOW()),
('Dehradun', 'DEHR', @uttarakhand_id, 1, 1, 1, NOW(), NOW()),
('Haridwar', 'HARI', @uttarakhand_id, 1, 1, 1, NOW(), NOW()),
('Nainital', 'NAIN', @uttarakhand_id, 1, 1, 1, NOW(), NOW()),
('Pauri Garhwal', 'PG', @uttarakhand_id, 1, 1, 1, NOW(), NOW()),
('Pithoragarh', 'PITH', @uttarakhand_id, 1, 1, 1, NOW(), NOW()),
('Rudraprayag', 'RUDR', @uttarakhand_id, 1, 1, 1, NOW(), NOW()),
('Tehri Garhwal', 'TG', @uttarakhand_id, 1, 1, 1, NOW(), NOW()),
('Udham Singh Nagar', 'USN', @uttarakhand_id, 1, 1, 1, NOW(), NOW()),
('Uttarkashi', 'UTTA', @uttarakhand_id, 1, 1, 1, NOW(), NOW());

-- West Bengal (23 districts)
SET @west_bengal_id = (SELECT id FROM states WHERE name = 'West Bengal');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Alipurduar', 'ALIP', @west_bengal_id, 1, 1, 1, NOW(), NOW()),
('Bankura', 'BAN', @west_bengal_id, 1, 1, 1, NOW(), NOW()),
('Birbhum', 'BIRB', @west_bengal_id, 1, 1, 1, NOW(), NOW()),
('Cooch Behar', 'CB', @west_bengal_id, 1, 1, 1, NOW(), NOW()),
('Dakshin Dinajpur', 'DAKS', @west_bengal_id, 1, 1, 1, NOW(), NOW()),
('Darjeeling', 'DARJ', @west_bengal_id, 1, 1, 1, NOW(), NOW()),
('Hooghly', 'HOOG', @west_bengal_id, 1, 1, 1, NOW(), NOW()),
('Howrah', 'HOWR', @west_bengal_id, 1, 1, 1, NOW(), NOW()),
('Jalpaiguri', 'JALP', @west_bengal_id, 1, 1, 1, NOW(), NOW()),
('Jhargram', 'JHA', @west_bengal_id, 1, 1, 1, NOW(), NOW()),
('Kalimpong', 'KALI', @west_bengal_id, 1, 1, 1, NOW(), NOW()),
('Kolkata', 'KOLK', @west_bengal_id, 1, 1, 1, NOW(), NOW()),
('Maldah', 'MALD', @west_bengal_id, 1, 1, 1, NOW(), NOW()),
('Murshidabad', 'MURS', @west_bengal_id, 1, 1, 1, NOW(), NOW()),
('Nadia', 'NADI', @west_bengal_id, 1, 1, 1, NOW(), NOW()),
('North 24 Parganas', 'N2P', @west_bengal_id, 1, 1, 1, NOW(), NOW()),
('Paschim Bardhaman', 'PB', @west_bengal_id, 1, 1, 1, NOW(), NOW()),
('Paschim Medinipur', 'PASC', @west_bengal_id, 1, 1, 1, NOW(), NOW()),
('Purba Bardhaman', 'PURB', @west_bengal_id, 1, 1, 1, NOW(), NOW()),
('Purba Medinipur', 'PUR', @west_bengal_id, 1, 1, 1, NOW(), NOW()),
('Purulia', 'PURU', @west_bengal_id, 1, 1, 1, NOW(), NOW()),
('South 24 Parganas', 'S2P', @west_bengal_id, 1, 1, 1, NOW(), NOW()),
('Uttar Dinajpur', 'UD', @west_bengal_id, 1, 1, 1, NOW(), NOW());

-- Chandigarh (4 districts)
SET @chandigarh_id = (SELECT id FROM states WHERE name = 'Chandigarh');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Nicobar', 'NICO', @chandigarh_id, 1, 1, 1, NOW(), NOW()),
('North and Middle Andaman', 'NORT', @chandigarh_id, 1, 1, 1, NOW(), NOW()),
('South Andaman', 'SA', @chandigarh_id, 1, 1, 1, NOW(), NOW()),
('Chandigarh', 'ChC', @chandigarh_id, 1, 1, 1, NOW(), NOW());

-- Dadra and Nagar Haveli and Daman and Diu (3 districts)
SET @dadra_and_nagar_haveli_and_daman_and_diu_id = (SELECT id FROM states WHERE name = 'Dadra and Nagar Haveli and Daman and Diu');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Dadra and Nagar Haveli', 'DANH', @dadra_and_nagar_haveli_and_daman_and_diu_id, 1, 1, 1, NOW(), NOW()),
('Daman', 'DAMA', @dadra_and_nagar_haveli_and_daman_and_diu_id, 1, 1, 1, NOW(), NOW()),
('Diu', 'DIU', @dadra_and_nagar_haveli_and_daman_and_diu_id, 1, 1, 1, NOW(), NOW());

-- Jammu and Kashmir (20 districts)
SET @jammu_and_kashmir_id = (SELECT id FROM states WHERE name = 'Jammu and Kashmir');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Anantnag', 'JaA', @jammu_and_kashmir_id, 1, 1, 1, NOW(), NOW()),
('Budgam', 'BUDG', @jammu_and_kashmir_id, 1, 1, 1, NOW(), NOW()),
('Bandipore', 'JaB', @jammu_and_kashmir_id, 1, 1, 1, NOW(), NOW()),
('Baramulla', 'BMLA', @jammu_and_kashmir_id, 1, 1, 1, NOW(), NOW()),
('Doda', 'DODA', @jammu_and_kashmir_id, 1, 1, 1, NOW(), NOW()),
('Ganderbal', 'GAN', @jammu_and_kashmir_id, 1, 1, 1, NOW(), NOW()),
('Jammu', 'JAMM', @jammu_and_kashmir_id, 1, 1, 1, NOW(), NOW()),
('Kathua', 'KATH', @jammu_and_kashmir_id, 1, 1, 1, NOW(), NOW()),
('Kishtwar', 'KIS', @jammu_and_kashmir_id, 1, 1, 1, NOW(), NOW()),
('Kulgam', 'KULG', @jammu_and_kashmir_id, 1, 1, 1, NOW(), NOW()),
('Kupwara', 'KUPW', @jammu_and_kashmir_id, 1, 1, 1, NOW(), NOW()),
('Poonch', 'POON', @jammu_and_kashmir_id, 1, 1, 1, NOW(), NOW()),
('Pulwama', 'PULW', @jammu_and_kashmir_id, 1, 1, 1, NOW(), NOW()),
('Rajouri', 'RAJO', @jammu_and_kashmir_id, 1, 1, 1, NOW(), NOW()),
('Ramban', 'RAMB', @jammu_and_kashmir_id, 1, 1, 1, NOW(), NOW()),
('Reasi', 'REAS', @jammu_and_kashmir_id, 1, 1, 1, NOW(), NOW()),
('Samba', 'JaS', @jammu_and_kashmir_id, 1, 1, 1, NOW(), NOW()),
('Shopian', 'SHOP', @jammu_and_kashmir_id, 1, 1, 1, NOW(), NOW()),
('Srinagar', 'SRIN', @jammu_and_kashmir_id, 1, 1, 1, NOW(), NOW()),
('Udhampur', 'UDHA', @jammu_and_kashmir_id, 1, 1, 1, NOW(), NOW());

-- Lakshadweep (3 districts)
SET @lakshadweep_id = (SELECT id FROM states WHERE name = 'Lakshadweep');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Kargil', 'KARG', @lakshadweep_id, 1, 1, 1, NOW(), NOW()),
('Leh', 'LEH', @lakshadweep_id, 1, 1, 1, NOW(), NOW()),
('Lakshadweep', 'LAKS', @lakshadweep_id, 1, 1, 1, NOW(), NOW());

-- Delhi (11 districts)
SET @delhi_id = (SELECT id FROM states WHERE name = 'Delhi');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Central Delhi', 'CENT', @delhi_id, 1, 1, 1, NOW(), NOW()),
('East Delhi', 'ED', @delhi_id, 1, 1, 1, NOW(), NOW()),
('New Delhi', 'ND', @delhi_id, 1, 1, 1, NOW(), NOW()),
('North Delhi', 'NOR', @delhi_id, 1, 1, 1, NOW(), NOW()),
('North East Delhi', 'NED', @delhi_id, 1, 1, 1, NOW(), NOW()),
('North West Delhi', 'NWD', @delhi_id, 1, 1, 1, NOW(), NOW()),
('Shahdara', 'DeS', @delhi_id, 1, 1, 1, NOW(), NOW()),
('South Delhi', 'SD', @delhi_id, 1, 1, 1, NOW(), NOW()),
('South East Delhi', 'SED', @delhi_id, 1, 1, 1, NOW(), NOW()),
('South West Delhi', 'SWD', @delhi_id, 1, 1, 1, NOW(), NOW()),
('West Delhi', 'WD', @delhi_id, 1, 1, 1, NOW(), NOW());

-- Puducherry (4 districts)
SET @puducherry_id = (SELECT id FROM states WHERE name = 'Puducherry');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Karaikal', 'PuK', @puducherry_id, 1, 1, 1, NOW(), NOW()),
('Mahé', 'MAHÉ', @puducherry_id, 1, 1, 1, NOW(), NOW()),
('Puducherry', 'PUD', @puducherry_id, 1, 1, 1, NOW(), NOW()),
('Yanam', 'YANA', @puducherry_id, 1, 1, 1, NOW(), NOW());

