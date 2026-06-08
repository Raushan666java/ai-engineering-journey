# 🔴 Module 24: Red Team Operations

## 📋 Module Overview

**Duration:** 4 weeks  
**Difficulty:** Expert  
**Prerequisites:** Modules 1-12, 17, 18, 23

Master advanced adversary simulation! Learn red team methodologies, infrastructure setup, C2 frameworks, OPSEC principles, and how to conduct realistic attack simulations that test organizational defenses.

---

## 🎯 Learning Objectives

By the end of this module, you will be able to:
- ✅ Plan and execute red team campaigns
- ✅ Build C2 infrastructure with redirectors
- ✅ Deploy and operate C2 frameworks (Cobalt Strike, Sliver)
- ✅ Maintain operational security (OPSEC)
- ✅ Simulate advanced persistent threats (APTs)
- ✅ Select appropriate tactics, techniques, and procedures (TTPs)
- ✅ Evade detection and monitoring systems
- ✅ Write professional red team reports

---

## 📚 Module Content

### Concepts/
1. **01_Red_Team_Fundamentals.md** - Red team vs penetration testing
2. **02_Campaign_Planning.md** - Planning realistic operations
3. **03_Rules_of_Engagement.md** - Legal and ethical boundaries
4. **04_Infrastructure_Setup.md** - C2 servers and redirectors
5. **05_C2_Frameworks.md** - Cobalt Strike, Sliver, Empire, Covenant
6. **06_OPSEC_Principles.md** - Operational security best practices
7. **07_TTPs_Selection.md** - MITRE ATT&CK for red teams
8. **08_Initial_Access.md** - Phishing, exploitation, physical access
9. **09_Persistence_Mechanisms.md** - Maintaining access
10. **10_Lateral_Movement.md** - Moving through networks
11. **11_Data_Exfiltration.md** - Stealing data covertly
12. **12_Evasion_Techniques.md** - Bypassing EDR, AV, SIEM
13. **13_Red_Team_Reporting.md** - Professional deliverables

### Labs/
1. **Lab_01_Infrastructure_Build.md** - Setup cloud C2 infrastructure
2. **Lab_02_Redirector_Config.md** - Configure Apache mod_rewrite redirectors
3. **Lab_03_Sliver_Setup.md** - Deploy Sliver C2 framework
4. **Lab_04_Malleable_Profiles.md** - Create custom C2 profiles
5. **Lab_05_Phishing_Campaign.md** - Execute spear-phishing operation
6. **Lab_06_Initial_Compromise.md** - Gain initial access
7. **Lab_07_Privilege_Escalation.md** - Escalate to Domain Admin
8. **Lab_08_Lateral_Movement.md** - Move laterally using WMI/SMB
9. **Lab_09_Data_Exfiltration.md** - Exfiltrate data via DNS
10. **Lab_10_Full_Campaign.md** - Complete red team operation

### Code_Examples/
1. **campaign_planner.py** - Red team campaign planning tool
2. **roe_generator.py** - Generate rules of engagement documents
3. **infrastructure_manager.py** - Manage cloud infrastructure
4. **c2_automation.py** - Automate C2 operations
5. **payload_generator.py** - Generate obfuscated payloads
6. **phishing_framework.py** - Automated phishing campaigns
7. **credential_harvester.py** - Harvest credentials
8. **persistence_installer.py** - Install persistence mechanisms
9. **lateral_movement.py** - Automate lateral movement
10. **exfiltration_tool.py** - Data exfiltration via multiple channels
11. **opsec_checker.py** - Check OPSEC compliance
12. **report_generator.py** - Generate red team reports

### Tools/
- **Cobalt Strike** - Commercial C2 framework (trial/licensed)
- **Sliver** - Open-source C2 framework
- **Empire/Starkiller** - PowerShell C2 framework
- **Covenant** - .NET C2 framework
- **Havoc** - Modern C2 framework
- **Gophish** - Phishing framework
- **evilginx2** - Phishing with 2FA bypass
- **CrackMapExec** - Network pentesting swiss army knife
- **BloodHound** - Active Directory attack path analysis
- **Impacket** - Python SMB/MSRPC library

### Resources/
- **red_team_cheat_sheet.md** - Quick command reference
- **c2_comparison.md** - Compare C2 frameworks
- **opsec_checklist.md** - OPSEC verification checklist
- **ttps_library.md** - Common TTPs catalog
- **infrastructure_templates.md** - Infrastructure designs
- **report_templates.md** - Professional report templates

### Assessments/
- **quiz.md** - 25 red team questions
- **scenario_planning.md** - Plan a red team operation
- **capstone_project.md** - Execute full red team campaign

### Case_Studies/
- **case_study_01_apt29.md** - APT29 tactics analysis
- **case_study_02_corporate_breach.md** - Simulated breach
- **case_study_03_ransomware_sim.md** - Ransomware simulation
- **case_study_04_supply_chain.md** - Supply chain attack

---

## 🔧 Tools and Setup

### Infrastructure Requirements
```bash
# Cloud Providers (choose one or more)
- AWS Account (t2.micro for C2)
- Digital Ocean Droplet
- Vultr VPS
- Azure VM

# Domain Setup
- Aged domain (6+ months old)
- Categorized domain (via Bluecoat/Fortinet)
- Valid SSL certificate (Let's Encrypt)
```

### C2 Framework Installation
```bash
# Install Sliver
curl https://sliver.sh/install | sudo bash

# Install Covenant
git clone https://github.com/cobbr/Covenant
cd Covenant/Covenant
dotnet run

# Install Empire
git clone https://github.com/BC-SECURITY/Empire
cd Empire
./setup/install.sh
```

### Python Environment
```bash
pip3 install boto3 paramiko requests pycryptodome
```

---

## ⏱️ Study Schedule

### Week 1: Fundamentals and Planning
- **Day 1-2:** Red team fundamentals, campaign planning
- **Day 3-4:** Rules of engagement, legal considerations
- **Day 5-6:** Infrastructure design and setup
- **Day 7:** Labs 1-2 (Infrastructure, redirectors)

### Week 2: C2 Operations
- **Day 8-9:** C2 frameworks overview
- **Day 10-11:** OPSEC principles and implementation
- **Day 12-13:** Labs 3-4 (Sliver setup, malleable profiles)
- **Day 14:** Practice and review

### Week 3: Offensive Tactics
- **Day 15-16:** Initial access and persistence
- **Day 17-18:** Lateral movement and privilege escalation
- **Day 19-20:** Labs 5-8 (Phishing through lateral movement)
- **Day 21:** Practice and review

### Week 4: Advanced Techniques and Campaign
- **Day 22-23:** Data exfiltration and evasion
- **Day 24-25:** Red team reporting
- **Day 26-27:** Lab 10 (Full red team campaign)
- **Day 28:** Complete capstone and review

---

## 📝 Key Concepts

### Red Team vs Penetration Testing
| Aspect | Penetration Testing | Red Team |
|--------|-------------------|----------|
| **Scope** | Specific systems/apps | Entire organization |
| **Duration** | Days to weeks | Weeks to months |
| **Goal** | Find vulnerabilities | Test detection/response |
| **Approach** | Comprehensive scanning | Stealthy, targeted |
| **Notification** | IT team aware | Only senior leadership |

### OPSEC Principles
1. **Blending In:** Mimic normal user behavior
2. **Limiting Noise:** Avoid detection signatures
3. **Infrastructure Security:** Protect C2 infrastructure
4. **Communication Security:** Encrypted team communications
5. **Evidence Removal:** Clean up artifacts

### C2 Infrastructure Layers
```
[Target] <-- [HTTPS] --> [CDN/Cloudflare] <-- [Redirector] <-- [C2 Server]
                                   ↓
                              [Backup C2]
```

---

## 💻 Code Highlights

### Red Team Campaign Planner
```python
from campaign_planner import RedTeamCampaign

campaign = RedTeamCampaign("Operation Northern Lights")
campaign.define_roe()
campaign.build_infrastructure()
campaign.select_ttps()
campaign.plan_timeline()
```

### C2 Automation
```python
from c2_automation import C2Manager

c2 = C2Manager(framework='sliver')
listener = c2.create_listener('https', port=443)
payload = c2.generate_payload('exe', obfuscation=True)
sessions = c2.manage_sessions()
```

### OPSEC Checker
```python
from opsec_checker import OPSECValidator

validator = OPSECValidator()
validator.check_infrastructure()
validator.check_payloads()
validator.check_communications()
validator.generate_report()
```

---

## ✅ Completion Checklist

- [ ] Read all 13 concept files
- [ ] Complete all 10 labs
- [ ] Run all 12 code examples
- [ ] Setup C2 infrastructure
- [ ] Execute practice campaign
- [ ] Pass the quiz (85%+ score)
- [ ] Complete capstone project
- [ ] Write professional red team report

**Estimated Time:** 120-150 hours

---

## 🔗 Related Modules

**Prerequisites:**
- Module 01-12: Foundation through Mobile Security
- Module 17: Digital Forensics (understanding artifacts)
- Module 18: Malware Analysis (custom malware)
- Module 23: Advanced Exploitation

**Complementary Modules:**
- Module 25: Blue Team Operations (know your enemy)
- Module 26: Purple Team Operations (collaboration)

---

## 📖 Additional Resources

### Books
- "Red Team Development and Operations" by Joe Vest
- "The Hacker Playbook 3" by Peter Kim
- "RTFM: Red Team Field Manual" by Ben Clark

### Certifications
- **OSCP** - Offensive Security Certified Professional
- **OSEP** - Offensive Security Experienced Penetration Tester
- **GXPN** - GIAC Exploit Researcher and Advanced Penetration Tester
- **CRTO** - Certified Red Team Operator

### Communities
- Red Team Village Discord
- SpecterOps Blog
- Red Team Journal

---

## 🎓 Career Applications

### Job Roles
- Red Team Operator
- Adversary Simulation Specialist
- Offensive Security Consultant
- APT Simulation Engineer

### Salary Range
- Entry Level: $90k-$120k
- Mid Level: $120k-$160k
- Senior Level: $160k-$220k
- Lead/Principal: $220k-$300k+

---

## 💡 Pro Tips

1. **Think Like APT:** Study real threat actor TTPs
2. **OPSEC First:** Don't get caught early
3. **Document Everything:** Detailed logs for reports
4. **Stay Legal:** Always have written authorization
5. **Collaborate with Blue:** Share findings responsibly
6. **Customize Tools:** Avoid default configurations
7. **Test Detections:** Help improve security posture
8. **Continuous Learning:** Techniques evolve rapidly

---

## ⚖️ Legal and Ethical Considerations

### Critical Requirements
- ✅ **Written Authorization:** Get ROE signed by executives
- ✅ **Scope Boundaries:** Clearly define in/out of scope
- ✅ **Communication Plan:** Who to contact in emergencies
- ✅ **Data Handling:** How to handle sensitive data discovered
- ✅ **Reporting Critical Findings:** Report critical vulns immediately
- ✅ **Cleanup Obligation:** Remove all tools and artifacts
- ✅ **Confidentiality:** NDA and secure communication

### Never Do
- ❌ Exceed authorized scope
- ❌ Cause denial of service
- ❌ Destroy or modify production data
- ❌ Disclose findings publicly without permission
- ❌ Keep copies of sensitive data
- ❌ Attack without written authorization

---

## 🚨 Emergency Procedures

### If Things Go Wrong
1. **Stop Operations Immediately**
2. **Contact Designated POC**
3. **Document What Happened**
4. **Preserve Evidence**
5. **Assist in Remediation**
6. **Update Report with Incident**

---

## 📊 Red Team Metrics

### Measure Success By:
- Time to initial compromise
- Time to privilege escalation
- Time to data exfiltration
- Detection rate by blue team
- Mean time to detection (MTTD)
- Mean time to response (MTTR)
- Number of security controls bypassed

---

## 📞 Support

**Questions about red teaming?**
- Review SpecterOps blog posts
- Study APT reports from Mandiant/CrowdStrike
- Join Red Team Village Discord
- Practice on HackTheBox Pro Labs

**Ready to become a red teamer? Open `Concepts/01_Red_Team_Fundamentals.md`!**

---

**Module Created:** October 31, 2025  
**Last Updated:** October 31, 2025  
**Difficulty:** ⭐⭐⭐⭐⭐ (Expert)  
**Authorization Required:** ✅ YES - NEVER practice without written permission  
**Status:** 📚 Advanced Content Ready
