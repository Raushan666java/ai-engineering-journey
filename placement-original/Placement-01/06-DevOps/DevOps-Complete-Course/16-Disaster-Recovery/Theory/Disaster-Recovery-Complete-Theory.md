# 🔄 Disaster Recovery - Complete Theory

## 📋 Disaster Recovery Fundamentals

### What is Disaster Recovery?
Disaster Recovery (DR) is the process of preparing for and recovering from events that negatively affect business operations, including natural disasters, cyber attacks, hardware failures, and human errors.

### Key Concepts
- **RTO (Recovery Time Objective)**: Maximum acceptable downtime
- **RPO (Recovery Point Objective)**: Maximum acceptable data loss
- **MTTR (Mean Time To Recovery)**: Average time to restore service
- **MTBF (Mean Time Between Failures)**: Average time between system failures

### Disaster Types
- **Natural Disasters**: Earthquakes, floods, fires, hurricanes
- **Technical Failures**: Hardware failures, software bugs, network outages
- **Human Errors**: Accidental deletions, misconfigurations
- **Security Incidents**: Cyber attacks, data breaches, ransomware
- **Operational Issues**: Power outages, facility problems

## 🎯 DR Planning Strategy

### Business Impact Analysis
```bash
# Critical System Assessment
System Priority | RTO Target | RPO Target | Impact Level
Core Database   | 1 hour     | 15 minutes | Critical
Web Application | 2 hours    | 30 minutes | High
Reporting       | 8 hours    | 4 hours    | Medium
Analytics       | 24 hours   | 12 hours   | Low
```

### DR Strategies
```bash
# Backup and Restore (Cold DR)
- RTO: 12-24 hours
- RPO: 1-24 hours
- Cost: Low
- Use Case: Non-critical systems

# Pilot Light (Warm DR)
- RTO: 1-4 hours
- RPO: 15 minutes - 1 hour
- Cost: Medium
- Use Case: Important systems

# Warm Standby
- RTO: 15 minutes - 1 hour
- RPO: 5-15 minutes
- Cost: High
- Use Case: Critical systems

# Hot Standby (Active-Active)
- RTO: 0-15 minutes
- RPO: 0-5 minutes
- Cost: Very High
- Use Case: Mission-critical systems
```

## 💾 Backup Strategies

### Backup Types
```bash
# Full Backup
- Complete copy of all data
- Longest backup time
- Fastest restore time
- Highest storage requirements

# Incremental Backup
- Only changed data since last backup
- Fastest backup time
- Slower restore (needs full + all incrementals)
- Lowest storage requirements

# Differential Backup
- Changed data since last full backup
- Medium backup time
- Medium restore time (needs full + latest differential)
- Medium storage requirements
```

### Automated Backup Scripts
```bash
#!/bin/bash
# Comprehensive backup script

# Configuration
BACKUP_ROOT="/backups"
DATE=$(date +%Y%m%d_%H%M%S)
RETENTION_DAYS=30
LOG_FILE="/var/log/backup.log"

# Logging function
log() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" | tee -a "$LOG_FILE"
}

# Database backup function
backup_database() {
    local db_type=$1
    local db_name=$2
    local backup_dir="$BACKUP_ROOT/databases/$db_type"
    
    mkdir -p "$backup_dir"
    
    case $db_type in
        "postgresql")
            pg_dump "$db_name" | gzip > "$backup_dir/${db_name}_${DATE}.sql.gz"
            ;;
        "mysql")
            mysqldump "$db_name" | gzip > "$backup_dir/${db_name}_${DATE}.sql.gz"
            ;;
        "mongodb")
            mongodump --db "$db_name" --out "$backup_dir/$DATE"
            tar -czf "$backup_dir/${db_name}_${DATE}.tar.gz" -C "$backup_dir" "$DATE"
            rm -rf "$backup_dir/$DATE"
            ;;
    esac
    
    log "Database backup completed: $db_type/$db_name"
}

# File system backup function
backup_filesystem() {
    local source_path=$1
    local backup_name=$2
    local backup_dir="$BACKUP_ROOT/filesystem"
    
    mkdir -p "$backup_dir"
    
    # Create incremental backup using rsync
    rsync -av --delete --link-dest="$backup_dir/latest" \
          "$source_path" "$backup_dir/$DATE"
    
    # Update latest symlink
    rm -f "$backup_dir/latest"
    ln -s "$DATE" "$backup_dir/latest"
    
    log "Filesystem backup completed: $backup_name"
}

# Configuration backup function
backup_configurations() {
    local config_dir="$BACKUP_ROOT/configurations"
    mkdir -p "$config_dir"
    
    # System configurations
    tar -czf "$config_dir/system_config_${DATE}.tar.gz" \
        /etc/nginx \
        /etc/apache2 \
        /etc/mysql \
        /etc/postgresql \
        /etc/redis \
        /etc/systemd/system
    
    # Application configurations
    tar -czf "$config_dir/app_config_${DATE}.tar.gz" \
        /opt/myapp/config \
        /var/www/html/.env \
        /home/user/.ssh
    
    log "Configuration backup completed"
}

# Cloud sync function
sync_to_cloud() {
    local backup_path=$1
    local cloud_bucket="s3://my-backup-bucket"
    
    # Sync to AWS S3
    aws s3 sync "$backup_path" "$cloud_bucket/$(basename $backup_path)/" \
        --storage-class STANDARD_IA \
        --exclude "*.tmp"
    
    log "Cloud sync completed: $backup_path"
}

# Cleanup old backups
cleanup_old_backups() {
    find "$BACKUP_ROOT" -type f -mtime +$RETENTION_DAYS -delete
    find "$BACKUP_ROOT" -type d -empty -delete
    
    log "Cleanup completed: removed backups older than $RETENTION_DAYS days"
}

# Verify backup integrity
verify_backups() {
    local backup_dir=$1
    local errors=0
    
    # Check database backups
    for backup_file in "$backup_dir"/databases/*/*.gz; do
        if [ -f "$backup_file" ]; then
            if ! gzip -t "$backup_file" 2>/dev/null; then
                log "ERROR: Corrupted backup file: $backup_file"
                ((errors++))
            fi
        fi
    done
    
    # Check filesystem backups
    for backup_dir in "$backup_dir"/filesystem/*/; do
        if [ -d "$backup_dir" ]; then
            if [ ! -f "$backup_dir/.backup_complete" ]; then
                log "ERROR: Incomplete backup: $backup_dir"
                ((errors++))
            fi
        fi
    done
    
    if [ $errors -eq 0 ]; then
        log "Backup verification completed: All backups are valid"
    else
        log "Backup verification completed: $errors errors found"
        return 1
    fi
}

# Main execution
main() {
    log "Starting backup process"
    
    # Database backups
    backup_database "postgresql" "myapp_prod"
    backup_database "mysql" "analytics"
    backup_database "mongodb" "logs"
    
    # Filesystem backups
    backup_filesystem "/var/www/html" "web_content"
    backup_filesystem "/opt/myapp" "application"
    backup_filesystem "/home/users" "user_data"
    
    # Configuration backups
    backup_configurations
    
    # Mark backup as complete
    touch "$BACKUP_ROOT/.backup_complete_$DATE"
    
    # Verify backups
    if verify_backups "$BACKUP_ROOT"; then
        # Sync to cloud if verification passes
        sync_to_cloud "$BACKUP_ROOT"
    else
        log "ERROR: Backup verification failed, skipping cloud sync"
        exit 1
    fi
    
    # Cleanup old backups
    cleanup_old_backups
    
    log "Backup process completed successfully"
}

# Execute main function
main "$@"
```

## 🌐 Multi-Region DR Setup

### AWS Multi-Region Architecture
```yaml
# CloudFormation template for multi-region DR
AWSTemplateFormatVersion: '2010-09-09'
Description: 'Multi-region disaster recovery setup'

Parameters:
  PrimaryRegion:
    Type: String
    Default: 'us-east-1'
  
  DRRegion:
    Type: String
    Default: 'us-west-2'

Resources:
  # Primary region resources
  PrimaryVPC:
    Type: AWS::EC2::VPC
    Properties:
      CidrBlock: 10.0.0.0/16
      EnableDnsHostnames: true
      Tags:
        - Key: Name
          Value: Primary-VPC

  # RDS with cross-region backup
  PrimaryDatabase:
    Type: AWS::RDS::DBInstance
    Properties:
      DBInstanceIdentifier: primary-db
      DBInstanceClass: db.t3.medium
      Engine: postgres
      MasterUsername: admin
      MasterUserPassword: !Ref DBPassword
      AllocatedStorage: 100
      BackupRetentionPeriod: 7
      DeleteAutomatedBackups: false
      DeletionProtection: true
      
  # Cross-region read replica
  DRReadReplica:
    Type: AWS::RDS::DBInstance
    Properties:
      SourceDBInstanceIdentifier: !Sub 
        - arn:aws:rds:${PrimaryRegion}:${AWS::AccountId}:db:${SourceDBInstanceIdentifier}
        - SourceDBInstanceIdentifier: !Ref PrimaryDatabase
      DBInstanceClass: db.t3.medium
      PubliclyAccessible: false

  # S3 cross-region replication
  PrimaryBucket:
    Type: AWS::S3::Bucket
    Properties:
      BucketName: !Sub 'primary-data-${AWS::AccountId}'
      VersioningConfiguration:
        Status: Enabled
      ReplicationConfiguration:
        Role: !GetAtt ReplicationRole.Arn
        Rules:
          - Id: ReplicateToDR
            Status: Enabled
            Prefix: ''
            Destination:
              Bucket: !Sub 'arn:aws:s3:::dr-data-${AWS::AccountId}'
              StorageClass: STANDARD_IA

  # Route 53 health checks and failover
  PrimaryHealthCheck:
    Type: AWS::Route53::HealthCheck
    Properties:
      Type: HTTPS
      ResourcePath: /health
      FullyQualifiedDomainName: !GetAtt PrimaryALB.DNSName
      RequestInterval: 30
      FailureThreshold: 3

  DNSRecord:
    Type: AWS::Route53::RecordSet
    Properties:
      HostedZoneId: !Ref HostedZone
      Name: myapp.example.com
      Type: A
      SetIdentifier: Primary
      Failover: PRIMARY
      AliasTarget:
        DNSName: !GetAtt PrimaryALB.DNSName
        HostedZoneId: !GetAtt PrimaryALB.CanonicalHostedZoneID
      HealthCheckId: !Ref PrimaryHealthCheck

  DRDNSRecord:
    Type: AWS::Route53::RecordSet
    Properties:
      HostedZoneId: !Ref HostedZone
      Name: myapp.example.com
      Type: A
      SetIdentifier: DR
      Failover: SECONDARY
      AliasTarget:
        DNSName: !GetAtt DRALB.DNSName
        HostedZoneId: !GetAtt DRALB.CanonicalHostedZoneID
```

### Kubernetes Multi-Cluster DR
```yaml
# Primary cluster configuration
apiVersion: v1
kind: ConfigMap
metadata:
  name: dr-config
  namespace: kube-system
data:
  primary-cluster: "true"
  dr-cluster-endpoint: "https://dr-cluster.example.com"
  replication-enabled: "true"

---
# Velero backup configuration
apiVersion: velero.io/v1
kind: Schedule
metadata:
  name: daily-backup
  namespace: velero
spec:
  schedule: "0 2 * * *"
  template:
    includedNamespaces:
    - production
    - staging
    storageLocation: aws-s3
    ttl: 720h0m0s

---
# Cross-cluster service mirror
apiVersion: networking.istio.io/v1alpha3
kind: ServiceEntry
metadata:
  name: dr-cluster-service
spec:
  hosts:
  - myapp-dr.example.com
  ports:
  - number: 443
    name: https
    protocol: HTTPS
  location: MESH_EXTERNAL
  resolution: DNS

---
# Disaster recovery deployment
apiVersion: apps/v1
kind: Deployment
metadata:
  name: dr-controller
  namespace: kube-system
spec:
  replicas: 1
  selector:
    matchLabels:
      app: dr-controller
  template:
    metadata:
      labels:
        app: dr-controller
    spec:
      containers:
      - name: controller
        image: dr-controller:latest
        env:
        - name: PRIMARY_CLUSTER
          value: "true"
        - name: DR_CLUSTER_ENDPOINT
          valueFrom:
            configMapKeyRef:
              name: dr-config
              key: dr-cluster-endpoint
        command:
        - /bin/sh
        - -c
        - |
          while true; do
            # Monitor primary cluster health
            if ! curl -f http://localhost:8080/health; then
              echo "Primary cluster unhealthy, initiating failover"
              kubectl --kubeconfig=/etc/dr/kubeconfig apply -f /etc/dr/failover.yaml
            fi
            sleep 30
          done
```

## 🔧 DR Automation Scripts

### Automated Failover Script
```python
#!/usr/bin/env python3
import boto3
import time
import logging
import json
import requests
from datetime import datetime

class DisasterRecoveryManager:
    def __init__(self, config_file):
        with open(config_file, 'r') as f:
            self.config = json.load(f)
        
        self.logger = logging.getLogger('dr_manager')
        self.setup_logging()
        
        # AWS clients
        self.route53 = boto3.client('route53')
        self.rds = boto3.client('rds')
        self.ec2 = boto3.client('ec2')
        self.elbv2 = boto3.client('elbv2')
    
    def setup_logging(self):
        logging.basicConfig(
            level=logging.INFO,
            format='%(asctime)s - %(levelname)s - %(message)s',
            handlers=[
                logging.FileHandler('/var/log/dr_manager.log'),
                logging.StreamHandler()
            ]
        )
    
    def check_primary_health(self):
        """Check if primary region is healthy"""
        try:
            # Check application health endpoint
            response = requests.get(
                f"https://{self.config['primary_endpoint']}/health",
                timeout=10
            )
            
            if response.status_code == 200:
                health_data = response.json()
                return health_data.get('status') == 'healthy'
            
            return False
        
        except Exception as e:
            self.logger.error(f"Health check failed: {e}")
            return False
    
    def promote_read_replica(self):
        """Promote RDS read replica to primary"""
        try:
            self.logger.info("Promoting read replica to primary")
            
            response = self.rds.promote_read_replica(
                DBInstanceIdentifier=self.config['dr_db_instance']
            )
            
            # Wait for promotion to complete
            waiter = self.rds.get_waiter('db_instance_available')
            waiter.wait(
                DBInstanceIdentifier=self.config['dr_db_instance'],
                WaiterConfig={'Delay': 30, 'MaxAttempts': 40}
            )
            
            self.logger.info("Read replica promoted successfully")
            return True
        
        except Exception as e:
            self.logger.error(f"Failed to promote read replica: {e}")
            return False
    
    def update_dns_records(self):
        """Update DNS to point to DR region"""
        try:
            self.logger.info("Updating DNS records for failover")
            
            # Update A record to point to DR load balancer
            response = self.route53.change_resource_record_sets(
                HostedZoneId=self.config['hosted_zone_id'],
                ChangeBatch={
                    'Changes': [{
                        'Action': 'UPSERT',
                        'ResourceRecordSet': {
                            'Name': self.config['domain_name'],
                            'Type': 'A',
                            'AliasTarget': {
                                'DNSName': self.config['dr_load_balancer_dns'],
                                'EvaluateTargetHealth': True,
                                'HostedZoneId': self.config['dr_load_balancer_zone']
                            }
                        }
                    }]
                }
            )
            
            self.logger.info("DNS records updated successfully")
            return True
        
        except Exception as e:
            self.logger.error(f"Failed to update DNS records: {e}")
            return False
    
    def scale_dr_infrastructure(self):
        """Scale up DR region infrastructure"""
        try:
            self.logger.info("Scaling up DR infrastructure")
            
            # Update Auto Scaling Group
            autoscaling = boto3.client('autoscaling', region_name=self.config['dr_region'])
            
            autoscaling.update_auto_scaling_group(
                AutoScalingGroupName=self.config['dr_asg_name'],
                MinSize=self.config['dr_min_capacity'],
                MaxSize=self.config['dr_max_capacity'],
                DesiredCapacity=self.config['dr_desired_capacity']
            )
            
            # Wait for instances to be ready
            time.sleep(300)  # Wait 5 minutes for scaling
            
            self.logger.info("DR infrastructure scaled successfully")
            return True
        
        except Exception as e:
            self.logger.error(f"Failed to scale DR infrastructure: {e}")
            return False
    
    def send_notifications(self, message):
        """Send notifications about DR events"""
        try:
            # Send to Slack
            slack_webhook = self.config.get('slack_webhook')
            if slack_webhook:
                requests.post(slack_webhook, json={
                    'text': f"🚨 DR Event: {message}",
                    'username': 'DR Manager',
                    'icon_emoji': ':warning:'
                })
            
            # Send email via SNS
            sns = boto3.client('sns')
            sns.publish(
                TopicArn=self.config['sns_topic_arn'],
                Subject='Disaster Recovery Event',
                Message=message
            )
            
            self.logger.info("Notifications sent successfully")
        
        except Exception as e:
            self.logger.error(f"Failed to send notifications: {e}")
    
    def initiate_failover(self):
        """Initiate complete failover to DR region"""
        self.logger.info("Initiating disaster recovery failover")
        
        try:
            # Step 1: Promote database
            if not self.promote_read_replica():
                raise Exception("Database promotion failed")
            
            # Step 2: Scale up DR infrastructure
            if not self.scale_dr_infrastructure():
                raise Exception("Infrastructure scaling failed")
            
            # Step 3: Update DNS
            if not self.update_dns_records():
                raise Exception("DNS update failed")
            
            # Step 4: Send notifications
            self.send_notifications("Failover to DR region completed successfully")
            
            self.logger.info("Disaster recovery failover completed successfully")
            return True
        
        except Exception as e:
            error_msg = f"Disaster recovery failover failed: {e}"
            self.logger.error(error_msg)
            self.send_notifications(error_msg)
            return False
    
    def monitor_and_failover(self):
        """Continuous monitoring with automatic failover"""
        consecutive_failures = 0
        max_failures = self.config.get('max_consecutive_failures', 3)
        
        while True:
            try:
                if self.check_primary_health():
                    consecutive_failures = 0
                    self.logger.debug("Primary region is healthy")
                else:
                    consecutive_failures += 1
                    self.logger.warning(f"Primary region unhealthy ({consecutive_failures}/{max_failures})")
                    
                    if consecutive_failures >= max_failures:
                        self.logger.critical("Maximum failures reached, initiating failover")
                        if self.initiate_failover():
                            break  # Stop monitoring after successful failover
                        else:
                            consecutive_failures = 0  # Reset counter if failover fails
                
                time.sleep(self.config.get('check_interval', 60))
            
            except KeyboardInterrupt:
                self.logger.info("Monitoring stopped by user")
                break
            except Exception as e:
                self.logger.error(f"Monitoring error: {e}")
                time.sleep(60)

# Usage
if __name__ == "__main__":
    dr_manager = DisasterRecoveryManager('/etc/dr/config.json')
    dr_manager.monitor_and_failover()
```

## 📋 DR Testing and Validation

### DR Test Plan Template
```bash
# Disaster Recovery Test Plan

## Test Objectives
- Validate RTO/RPO targets
- Test backup and restore procedures
- Verify failover mechanisms
- Validate communication procedures

## Test Scenarios

### Scenario 1: Database Failure
1. Simulate primary database failure
2. Promote read replica
3. Update application configuration
4. Verify data integrity
5. Measure recovery time

### Scenario 2: Complete Region Failure
1. Simulate primary region outage
2. Activate DR region
3. Update DNS records
4. Scale DR infrastructure
5. Verify full functionality

### Scenario 3: Ransomware Attack
1. Simulate data encryption/corruption
2. Restore from clean backups
3. Verify data integrity
4. Update security measures
5. Document lessons learned

## Success Criteria
- RTO < 2 hours for critical systems
- RPO < 15 minutes for transactional data
- 100% data integrity maintained
- All stakeholders notified within 15 minutes
- Full functionality restored in DR environment
```

### Automated DR Testing
```python
#!/usr/bin/env python3
import subprocess
import time
import json
import logging
from datetime import datetime

class DRTester:
    def __init__(self):
        self.logger = logging.getLogger('dr_tester')
        self.test_results = []
    
    def test_backup_integrity(self):
        """Test backup file integrity"""
        test_start = time.time()
        
        try:
            # Test database backup
            result = subprocess.run([
                'pg_restore', '--list', '/backups/latest/myapp.dump'
            ], capture_output=True, text=True)
            
            if result.returncode == 0:
                self.logger.info("Database backup integrity: PASS")
                status = "PASS"
            else:
                self.logger.error("Database backup integrity: FAIL")
                status = "FAIL"
        
        except Exception as e:
            self.logger.error(f"Backup integrity test failed: {e}")
            status = "ERROR"
        
        test_duration = time.time() - test_start
        self.test_results.append({
            'test': 'backup_integrity',
            'status': status,
            'duration': test_duration,
            'timestamp': datetime.now().isoformat()
        })
    
    def test_restore_procedure(self):
        """Test restore procedure on test environment"""
        test_start = time.time()
        
        try:
            # Create test database
            subprocess.run([
                'createdb', 'test_restore_db'
            ], check=True)
            
            # Restore from backup
            result = subprocess.run([
                'pg_restore', '-d', 'test_restore_db', '/backups/latest/myapp.dump'
            ], capture_output=True, text=True)
            
            if result.returncode == 0:
                # Verify data
                verify_result = subprocess.run([
                    'psql', '-d', 'test_restore_db', '-c', 
                    'SELECT COUNT(*) FROM users;'
                ], capture_output=True, text=True)
                
                if verify_result.returncode == 0:
                    self.logger.info("Restore procedure: PASS")
                    status = "PASS"
                else:
                    self.logger.error("Restore verification: FAIL")
                    status = "FAIL"
            else:
                self.logger.error("Restore procedure: FAIL")
                status = "FAIL"
            
            # Cleanup
            subprocess.run(['dropdb', 'test_restore_db'])
        
        except Exception as e:
            self.logger.error(f"Restore test failed: {e}")
            status = "ERROR"
        
        test_duration = time.time() - test_start
        self.test_results.append({
            'test': 'restore_procedure',
            'status': status,
            'duration': test_duration,
            'timestamp': datetime.now().isoformat()
        })
    
    def test_failover_mechanism(self):
        """Test automated failover mechanism"""
        test_start = time.time()
        
        try:
            # Simulate primary failure by blocking health endpoint
            subprocess.run([
                'iptables', '-A', 'OUTPUT', '-p', 'tcp', 
                '--dport', '8080', '-j', 'DROP'
            ], check=True)
            
            # Wait for failover to trigger
            time.sleep(120)
            
            # Check if DR endpoint is active
            result = subprocess.run([
                'curl', '-f', 'https://dr.example.com/health'
            ], capture_output=True, text=True)
            
            if result.returncode == 0:
                self.logger.info("Failover mechanism: PASS")
                status = "PASS"
            else:
                self.logger.error("Failover mechanism: FAIL")
                status = "FAIL"
            
            # Restore connectivity
            subprocess.run([
                'iptables', '-D', 'OUTPUT', '-p', 'tcp', 
                '--dport', '8080', '-j', 'DROP'
            ])
        
        except Exception as e:
            self.logger.error(f"Failover test failed: {e}")
            status = "ERROR"
        
        test_duration = time.time() - test_start
        self.test_results.append({
            'test': 'failover_mechanism',
            'status': status,
            'duration': test_duration,
            'timestamp': datetime.now().isoformat()
        })
    
    def generate_report(self):
        """Generate DR test report"""
        report = {
            'test_date': datetime.now().isoformat(),
            'total_tests': len(self.test_results),
            'passed_tests': len([t for t in self.test_results if t['status'] == 'PASS']),
            'failed_tests': len([t for t in self.test_results if t['status'] == 'FAIL']),
            'error_tests': len([t for t in self.test_results if t['status'] == 'ERROR']),
            'results': self.test_results
        }
        
        with open(f'/var/log/dr_test_report_{datetime.now().strftime("%Y%m%d_%H%M%S")}.json', 'w') as f:
            json.dump(report, f, indent=2)
        
        return report
    
    def run_all_tests(self):
        """Run complete DR test suite"""
        self.logger.info("Starting DR test suite")
        
        self.test_backup_integrity()
        self.test_restore_procedure()
        self.test_failover_mechanism()
        
        report = self.generate_report()
        
        self.logger.info(f"DR tests completed: {report['passed_tests']}/{report['total_tests']} passed")
        
        return report

# Usage
if __name__ == "__main__":
    tester = DRTester()
    tester.run_all_tests()
```

## 🎯 Best Practices

### DR Planning
- Regular risk assessments
- Clear RTO/RPO definitions
- Documented procedures
- Regular testing and updates
- Staff training and awareness

### Implementation
- Automated backup verification
- Multi-region redundancy
- Infrastructure as code
- Monitoring and alerting
- Regular DR drills

### Communication
- Clear escalation procedures
- Stakeholder notification lists
- Status page updates
- Post-incident reviews
- Lessons learned documentation