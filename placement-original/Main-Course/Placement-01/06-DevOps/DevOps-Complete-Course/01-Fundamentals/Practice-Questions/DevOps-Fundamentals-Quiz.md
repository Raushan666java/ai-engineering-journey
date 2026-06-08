# 📝 DevOps Fundamentals - Practice Questions

## 🎯 Multiple Choice Questions

### **Question 1**
What does DevOps primarily aim to achieve?
- A) Faster development only
- B) Better operations only  
- C) Collaboration between development and operations teams
- D) Cost reduction only

**Answer: C**

### **Question 2**
Which of the following is NOT a core DevOps principle?
- A) Automation
- B) Collaboration
- C) Manual testing
- D) Continuous improvement

**Answer: C**

### **Question 3**
What does CI/CD stand for?
- A) Continuous Integration/Continuous Deployment
- B) Code Integration/Code Deployment
- C) Continuous Improvement/Continuous Development
- D) Central Integration/Central Deployment

**Answer: A**

### **Question 4**
Which metric is most important for measuring DevOps success?
- A) Lines of code written
- B) Number of deployments
- C) Mean Time to Recovery (MTTR)
- D) Team size

**Answer: C**

### **Question 5**
What is the primary benefit of Infrastructure as Code (IaC)?
- A) Faster servers
- B) Reproducible and version-controlled infrastructure
- C) Cheaper hardware
- D) Better user interfaces

**Answer: B**

## 🧠 Short Answer Questions

### **Question 6**
Explain the DevOps lifecycle and its key stages.

**Sample Answer:**
The DevOps lifecycle consists of 8 key stages:
1. **Plan** - Requirements and sprint planning
2. **Code** - Development with version control
3. **Build** - Compilation and artifact creation
4. **Test** - Automated testing (unit, integration, security)
5. **Release** - Release preparation and approval
6. **Deploy** - Automated deployment to environments
7. **Operate** - System administration and monitoring
8. **Monitor** - Performance monitoring and feedback

### **Question 7**
What are the key cultural changes required for successful DevOps adoption?

**Sample Answer:**
- **Shared ownership** of product success
- **Collaboration** over silos
- **Fail fast** mentality for quick learning
- **Continuous learning** and improvement
- **Customer focus** and value delivery
- **Blameless culture** for post-mortems
- **Automation first** approach

## 🔧 Practical Scenarios

### **Scenario 1**
Your organization has separate development and operations teams that rarely communicate. Deployments take weeks and often fail. How would you introduce DevOps practices?

**Sample Solution:**
1. **Assessment**: Evaluate current processes and pain points
2. **Culture**: Start with cross-functional collaboration sessions
3. **Automation**: Implement basic CI/CD pipeline
4. **Tools**: Introduce shared tools and dashboards
5. **Metrics**: Establish deployment frequency and MTTR metrics
6. **Training**: Provide DevOps training to both teams
7. **Gradual adoption**: Start with non-critical applications

### **Scenario 2**
A company wants to reduce deployment time from 2 weeks to 2 hours. What DevOps practices would you recommend?

**Sample Solution:**
1. **Automated CI/CD pipeline** with automated testing
2. **Infrastructure as Code** for consistent environments
3. **Containerization** for portable applications
4. **Blue-green deployment** for zero-downtime releases
5. **Automated monitoring** and rollback capabilities
6. **Feature flags** for controlled releases
7. **Microservices architecture** for independent deployments

## 📊 Case Study Questions

### **Case Study 1: E-commerce Platform**
An e-commerce company experiences frequent outages during peak shopping seasons. Their current deployment process involves manual steps and takes 6 hours. They want to implement DevOps practices.

**Questions:**
1. What are the main problems with their current approach?
2. Which DevOps practices would address these issues?
3. What tools would you recommend for their CI/CD pipeline?
4. How would you measure the success of DevOps implementation?

**Sample Answers:**
1. **Problems**: Manual processes, long deployment time, lack of automation, no rollback strategy
2. **Practices**: Automated CI/CD, infrastructure as code, monitoring, blue-green deployment
3. **Tools**: Jenkins/GitHub Actions, Docker, Kubernetes, Terraform, Prometheus
4. **Metrics**: Deployment frequency, lead time, MTTR, change failure rate