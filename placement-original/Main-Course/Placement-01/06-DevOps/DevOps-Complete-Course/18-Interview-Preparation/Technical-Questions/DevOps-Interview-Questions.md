# 🎯 DevOps Interview Questions - Technical

## 🔧 Git & Version Control

### Q1: Explain Git workflow and branching strategies
**Answer**: Git workflow involves working directory → staging area → repository. Common branching strategies include:
- **Git Flow**: main, develop, feature, release, hotfix branches
- **GitHub Flow**: main branch with feature branches and pull requests
- **GitLab Flow**: main → pre-production → production

### Q2: How do you resolve merge conflicts?
**Answer**: 
1. Identify conflicted files using `git status`
2. Open files and resolve conflicts between `<<<<<<< HEAD` and `>>>>>>> branch`
3. Stage resolved files with `git add`
4. Complete merge with `git commit`

### Q3: Difference between git merge and git rebase?
**Answer**:
- **Merge**: Creates merge commit, preserves history
- **Rebase**: Replays commits on top of target branch, linear history

## 🐳 Docker & Containerization

### Q4: What are the benefits of containerization?
**Answer**:
- **Portability**: Run anywhere consistently
- **Isolation**: Separate application dependencies
- **Efficiency**: Lightweight compared to VMs
- **Scalability**: Easy horizontal scaling
- **DevOps**: Streamlined CI/CD pipelines

### Q5: Explain Docker architecture
**Answer**: Docker uses client-server architecture:
- **Docker Client**: CLI interface
- **Docker Daemon**: Manages containers, images, networks
- **Docker Registry**: Stores images (Docker Hub)
- **Docker Images**: Read-only templates
- **Docker Containers**: Running instances

### Q6: How do you optimize Docker images?
**Answer**:
- Use multi-stage builds
- Choose minimal base images (alpine)
- Minimize layers
- Use .dockerignore
- Run as non-root user
- Remove unnecessary packages

## ☸️ Kubernetes

### Q7: Explain Kubernetes architecture
**Answer**: Kubernetes has master-worker architecture:
- **Master**: API Server, etcd, Scheduler, Controller Manager
- **Worker**: kubelet, kube-proxy, Container Runtime
- **Objects**: Pods, Services, Deployments, ConfigMaps

### Q8: What is the difference between Deployment and StatefulSet?
**Answer**:
- **Deployment**: Stateless applications, random pod names, any order scaling
- **StatefulSet**: Stateful applications, ordered pod names, sequential scaling

### Q9: How does Kubernetes networking work?
**Answer**:
- Each pod gets unique IP
- Services provide stable endpoints
- Ingress manages external access
- Network policies control traffic flow

## 🔄 CI/CD

### Q10: Explain CI/CD pipeline stages
**Answer**: Typical pipeline stages:
1. **Source**: Code commit triggers pipeline
2. **Build**: Compile and create artifacts
3. **Test**: Unit, integration, security tests
4. **Package**: Create deployable artifacts
5. **Deploy**: Deploy to environments
6. **Monitor**: Track performance and issues

### Q11: What are different deployment strategies?
**Answer**:
- **Blue-Green**: Two identical environments, instant switch
- **Canary**: Gradual rollout to subset of users
- **Rolling**: Replace instances gradually
- **A/B Testing**: Compare different versions

### Q12: How do you handle secrets in CI/CD?
**Answer**:
- Use secret management tools (Vault, AWS Secrets Manager)
- Environment variables for runtime
- Encrypted storage in CI/CD platforms
- Never commit secrets to code

## ☁️ Cloud Platforms

### Q13: What are the benefits of cloud computing?
**Answer**:
- **Scalability**: Scale resources on demand
- **Cost**: Pay-as-you-use model
- **Reliability**: High availability and redundancy
- **Security**: Enterprise-grade security
- **Innovation**: Access to latest technologies

### Q14: Explain AWS VPC components
**Answer**:
- **Subnets**: Network segments
- **Route Tables**: Traffic routing rules
- **Internet Gateway**: Internet connectivity
- **NAT Gateway**: Outbound internet for private subnets
- **Security Groups**: Instance-level firewall

### Q15: What is Infrastructure as Code?
**Answer**: Managing infrastructure through code:
- **Benefits**: Version control, reproducibility, automation
- **Tools**: Terraform, CloudFormation, Ansible
- **Practices**: Declarative configuration, state management

## 📊 Monitoring & Logging

### Q16: What are the three pillars of observability?
**Answer**:
- **Metrics**: Numerical data over time
- **Logs**: Discrete events and messages
- **Traces**: Request flow through distributed systems

### Q17: Explain Prometheus architecture
**Answer**:
- **Prometheus Server**: Scrapes and stores metrics
- **Targets**: Applications exposing metrics
- **Alertmanager**: Handles alerts
- **Grafana**: Visualization and dashboards

### Q18: How do you design effective alerts?
**Answer**:
- Focus on symptoms, not causes
- Reduce alert fatigue
- Use SLI/SLO-based alerting
- Implement escalation policies
- Include runbooks for response

## 🔒 Security

### Q19: What is DevSecOps?
**Answer**: Integration of security practices into DevOps:
- **Shift-left**: Security from design phase
- **Automation**: Security tests in CI/CD
- **Continuous**: Ongoing security monitoring
- **Culture**: Shared security responsibility

### Q20: How do you secure containers?
**Answer**:
- Use minimal base images
- Run as non-root user
- Scan for vulnerabilities
- Implement resource limits
- Use secrets management
- Apply network policies

## 🚀 Scenario-Based Questions

### Q21: How would you troubleshoot a failing deployment?
**Answer**:
1. Check deployment status and events
2. Examine pod logs and describe output
3. Verify resource availability
4. Check configuration and secrets
5. Review network connectivity
6. Validate image and registry access

### Q22: How do you handle a production outage?
**Answer**:
1. **Immediate**: Acknowledge and assess impact
2. **Communicate**: Notify stakeholders
3. **Mitigate**: Quick fixes or rollback
4. **Investigate**: Root cause analysis
5. **Resolve**: Permanent fix
6. **Learn**: Post-mortem and improvements

### Q23: How would you migrate from monolith to microservices?
**Answer**:
1. **Assessment**: Analyze current architecture
2. **Strategy**: Strangler fig pattern
3. **Decomposition**: Identify service boundaries
4. **Infrastructure**: Container orchestration
5. **Data**: Database per service
6. **Monitoring**: Distributed tracing
7. **Gradual**: Incremental migration

## 💡 Best Practices Questions

### Q24: What are DevOps best practices?
**Answer**:
- **Automation**: Automate repetitive tasks
- **Collaboration**: Break down silos
- **Monitoring**: Comprehensive observability
- **Security**: Integrate security throughout
- **Continuous**: Continuous improvement
- **Culture**: Embrace failure and learning

### Q25: How do you ensure high availability?
**Answer**:
- **Redundancy**: Multiple instances and zones
- **Load Balancing**: Distribute traffic
- **Health Checks**: Automated failure detection
- **Auto-scaling**: Scale based on demand
- **Disaster Recovery**: Backup and restore procedures
- **Monitoring**: Proactive issue detection