# Module 9: Network Management

## Network Management Overview
Network management involves monitoring, controlling, and optimizing network resources to ensure reliable and efficient operation.

## Network Management Functions (FCAPS)

### 1. Fault Management
- **Detect**: Identify network problems
- **Isolate**: Locate fault source
- **Correct**: Fix or work around issues
- **Log**: Document incidents for analysis

### 2. Configuration Management
- **Inventory**: Track network devices and software
- **Provisioning**: Deploy and configure resources
- **Change Control**: Manage configuration changes
- **Backup**: Store configuration copies

### 3. Accounting Management
- **Usage Tracking**: Monitor resource utilization
- **Billing**: Generate usage reports
- **Quota Management**: Enforce usage limits
- **Cost Allocation**: Distribute network costs

### 4. Performance Management
- **Monitoring**: Collect performance metrics
- **Analysis**: Identify trends and bottlenecks
- **Tuning**: Optimize network performance
- **Capacity Planning**: Predict future needs

### 5. Security Management
- **Access Control**: Manage user permissions
- **Authentication**: Verify user identity
- **Encryption**: Protect data transmission
- **Audit**: Monitor security events

## SNMP (Simple Network Management Protocol)

### SNMP Architecture
```
Manager (NMS)  ←→  Agent (Managed Device)
     ↑                    ↑
   SNMP                  MIB
 Operations           Database
```

### SNMP Components
- **Manager**: Network Management System (NMS)
- **Agent**: Software on managed devices
- **MIB**: Management Information Base
- **OID**: Object Identifier

### SNMP Versions
**SNMPv1:**
- Original version (1988)
- Community-based security
- Limited error handling

**SNMPv2c:**
- Enhanced operations
- Better error handling
- Still uses community strings

**SNMPv3:**
- User-based security
- Authentication and encryption
- Access control

### SNMP Operations
```
GET         - Retrieve single value
GET-NEXT    - Get next object in MIB tree
GET-BULK    - Retrieve multiple values (v2c/v3)
SET         - Modify object value
TRAP        - Unsolicited notification
INFORM      - Acknowledged notification (v2c/v3)
```

### MIB Structure
```
iso(1)
└── org(3)
    └── dod(6)
        └── internet(1)
            ├── directory(1)
            ├── mgmt(2)
            │   └── mib-2(1)
            │       ├── system(1)
            │       ├── interfaces(2)
            │       ├── ip(4)
            │       └── snmp(11)
            ├── experimental(3)
            └── private(4)
                └── enterprises(1)
```

### Common OIDs
```
1.3.6.1.2.1.1.1.0    - System Description
1.3.6.1.2.1.1.3.0    - System Uptime
1.3.6.1.2.1.2.1.0    - Number of Interfaces
1.3.6.1.2.1.4.1.0    - IP Forwarding Status
1.3.6.1.2.1.6.9.0    - TCP Current Connections
```

### SNMP Configuration
```cisco
# Cisco SNMP Configuration
snmp-server community public ro
snmp-server community private rw
snmp-server location "Data Center A"
snmp-server contact "admin@company.com"
snmp-server enable traps
snmp-server host 192.168.1.100 public
```

```bash
# Linux SNMP Configuration (/etc/snmp/snmpd.conf)
rocommunity public 192.168.1.0/24
rwcommunity private 192.168.1.100
syslocation "Server Room B"
syscontact "admin@company.com"
```

## Network Monitoring Tools

### Open Source Tools
**Nagios:**
- Comprehensive monitoring platform
- Plugin architecture
- Web-based interface
- Alerting and reporting

**Zabbix:**
- Enterprise monitoring solution
- Auto-discovery
- Real-time monitoring
- Distributed monitoring

**LibreNMS:**
- Auto-discovering network monitoring
- SNMP-based
- Web interface
- Alerting system

**PRTG (Free version):**
- Windows-based monitoring
- Easy setup and configuration
- Multiple sensor types
- Mobile apps

### Commercial Tools
**SolarWinds NPM:**
- Network performance monitoring
- Topology mapping
- Capacity planning
- Custom dashboards

**PRTG Network Monitor:**
- All-in-one monitoring
- Easy deployment
- Comprehensive reporting
- Mobile monitoring

**ManageEngine OpManager:**
- Network and server monitoring
- Fault and performance management
- Configuration management
- Workflow automation

### Cloud-Based Monitoring
**Datadog:**
- Infrastructure monitoring
- APM and log management
- Machine learning insights
- Integrations

**New Relic:**
- Full-stack observability
- Real user monitoring
- Synthetic monitoring
- AI-powered insights

## Performance Monitoring

### Key Performance Indicators (KPIs)
```
Availability:     Uptime percentage
Response Time:    Round-trip delay
Throughput:       Data transfer rate
Utilization:      Resource usage percentage
Error Rate:       Packet loss/error percentage
```

### Network Metrics
**Interface Metrics:**
- Bandwidth utilization
- Packet counts (in/out)
- Error counts
- Discard counts

**Protocol Metrics:**
- TCP connections
- UDP traffic
- ICMP messages
- Routing table size

**Application Metrics:**
- Response times
- Transaction rates
- User experience
- Service availability

### Baseline Establishment
1. **Collect Data**: Gather metrics over time
2. **Analyze Patterns**: Identify normal behavior
3. **Set Thresholds**: Define alert levels
4. **Document Baselines**: Record normal ranges
5. **Regular Updates**: Adjust as network changes

## Network Troubleshooting

### Troubleshooting Methodology
1. **Define Problem**: Clearly identify symptoms
2. **Gather Information**: Collect relevant data
3. **Consider Possibilities**: List potential causes
4. **Create Action Plan**: Prioritize solutions
5. **Implement Solution**: Apply fixes systematically
6. **Test Results**: Verify problem resolution
7. **Document**: Record solution for future reference

### OSI Layer Troubleshooting
**Layer 1 (Physical):**
- Check cable connections
- Verify power status
- Test with cable tester
- Check interface status

**Layer 2 (Data Link):**
- Verify VLAN configuration
- Check MAC address tables
- Analyze spanning tree
- Monitor error counters

**Layer 3 (Network):**
- Verify IP configuration
- Check routing tables
- Test with ping/traceroute
- Analyze ARP tables

**Layer 4 (Transport):**
- Check port connectivity
- Verify firewall rules
- Monitor connection states
- Test with telnet/nc

### Common Network Problems

#### Connectivity Issues
```bash
# Test basic connectivity
ping 8.8.8.8
ping google.com

# Trace network path
traceroute google.com
mtr google.com

# Check DNS resolution
nslookup google.com
dig google.com
```

#### Performance Issues
```bash
# Bandwidth testing
iperf3 -s (server)
iperf3 -c server_ip (client)

# Network statistics
netstat -i
ss -s

# Interface utilization
cat /proc/net/dev
```

#### Configuration Issues
```cisco
# Cisco troubleshooting
show running-config
show ip interface brief
show ip route
show mac address-table
show spanning-tree
show log
```

## Network Documentation

### Documentation Types
1. **Network Diagrams**: Physical and logical topology
2. **IP Address Plans**: Subnet allocation and usage
3. **Configuration Files**: Device configurations
4. **Procedures**: Standard operating procedures
5. **Incident Reports**: Problem resolution history

### Network Diagram Tools
- **Visio**: Microsoft diagramming tool
- **Lucidchart**: Web-based diagramming
- **Draw.io**: Free online diagramming
- **Packet Tracer**: Cisco network simulator
- **GNS3**: Advanced network emulator

### Configuration Management
```bash
# Automated backup script
#!/bin/bash
DATE=$(date +%Y%m%d)
BACKUP_DIR="/backup/configs"

# Backup Cisco devices
for device in router1 switch1 switch2; do
    scp admin@$device:running-config $BACKUP_DIR/${device}_${DATE}.cfg
done

# Backup Linux configs
tar -czf $BACKUP_DIR/linux_configs_${DATE}.tar.gz /etc/network/ /etc/snmp/
```

## Capacity Planning

### Capacity Planning Process
1. **Current Assessment**: Analyze existing utilization
2. **Growth Projection**: Predict future requirements
3. **Scenario Planning**: Model different growth scenarios
4. **Resource Planning**: Determine upgrade needs
5. **Implementation**: Execute capacity improvements

### Traffic Analysis
```bash
# Monitor interface utilization
while true; do
    cat /proc/net/dev | grep eth0
    sleep 60
done

# SNMP-based monitoring
snmpwalk -v2c -c public router1 1.3.6.1.2.1.2.2.1.10
```

### Capacity Metrics
- **Peak Utilization**: Maximum usage periods
- **Average Utilization**: Typical usage levels
- **Growth Rate**: Percentage increase over time
- **Headroom**: Available capacity buffer

## Network Automation

### Automation Benefits
- **Consistency**: Reduce human errors
- **Efficiency**: Faster deployment and changes
- **Scalability**: Manage larger networks
- **Compliance**: Ensure policy adherence

### Automation Tools
**Ansible:**
```yaml
# Ansible playbook for network configuration
- name: Configure SNMP on routers
  hosts: routers
  tasks:
    - name: Set SNMP community
      ios_config:
        lines:
          - snmp-server community public ro
          - snmp-server location "{{ location }}"
```

**Python with Netmiko:**
```python
from netmiko import ConnectHandler

device = {
    'device_type': 'cisco_ios',
    'host': '192.168.1.1',
    'username': 'admin',
    'password': 'password'
}

connection = ConnectHandler(**device)
output = connection.send_command('show ip interface brief')
print(output)
connection.disconnect()
```

## Practical Exercises

### Exercise 1: SNMP Monitoring Setup
1. Configure SNMP on network devices
2. Set up monitoring with open-source tool
3. Create custom monitoring dashboards
4. Configure alerting for critical events

### Exercise 2: Network Troubleshooting
1. Simulate network problems
2. Use systematic troubleshooting approach
3. Document problem resolution steps
4. Create troubleshooting procedures

### Exercise 3: Performance Baseline
1. Collect network performance data
2. Analyze traffic patterns
3. Establish performance baselines
4. Set up automated monitoring

## Lab Assignment
1. Deploy comprehensive network monitoring solution
2. Configure SNMP on all network devices
3. Create network documentation and diagrams
4. Implement automated configuration backup
5. Develop capacity planning report

## Network Management Best Practices

### Monitoring Best Practices
1. **Monitor Proactively**: Don't wait for problems
2. **Set Appropriate Thresholds**: Avoid false alarms
3. **Use Multiple Metrics**: Comprehensive view
4. **Regular Reviews**: Update monitoring as needed
5. **Document Everything**: Maintain good records

### Change Management
1. **Change Control Process**: Formal approval process
2. **Testing**: Validate changes in lab environment
3. **Rollback Plan**: Prepare for quick recovery
4. **Communication**: Notify stakeholders
5. **Documentation**: Record all changes

## Quiz Questions
1. What are the five functional areas of network management (FCAPS)?
2. Explain the difference between SNMP GET and TRAP operations
3. What is the purpose of establishing network baselines?
4. How does SNMPv3 improve security over SNMPv2c?
5. What are the key steps in network troubleshooting methodology?

## Next Module
Module 10: Enterprise Networking - Campus and WAN Design