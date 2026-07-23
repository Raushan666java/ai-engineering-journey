<!-- Clear Language: Keep sentences under 50 words -->
# Kubernetes Configuration — ConfigMaps, Secrets, and Helm

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Manage application configuration with ConfigMaps and Secrets |
| LO2 | Inject configuration into Pods via env vars and volumes |
| LO3 | Understand Helm charts for package management |
| LO4 | Use Kustomize for environment-specific overlays |
| LO5 | Implement RBAC, service accounts, network policies |
| LO6 | Manage TLS certificates and Ingress resources |

## Introduction

Containers and cloud platforms are where AI models live in production. Docker packages your model, Kubernetes orchestrates it, and cloud platforms scale it. This module covers the full deployment stack.




## Prerequisites

- Basic programming knowledge
- Understanding of data structures

## Key Terminology

**Key Terms**: Core vocabulary and concepts for this topic.

**Definition**: Essential terms you must know for interviews and production work.

## Theory

Understanding kubernetes config is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how kubernetes config works in practice.



## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 5.1 | ConfigMaps in Depth | Create, consume, update strategies |
| 5.2 | Secrets Management | Encryption, external stores |
| 5.3 | Helm Package Manager | Charts, releases, repositories |
| 5.4 | Kustomize | Base/overlay, patches |
| 5.5 | RBAC and Service Accounts | Roles, bindings |
| 5.6 | Network Policies | Ingress/egress rules |
| 5.7 | Ingress and TLS | Ingress controller, cert-manager |
| 5.8 | Resource Quotas | LimitRange, ResourceQuota |

## Chapter Roadmap

```mermaid
flowchart LR
    A[ConfigMaps] --> B[Secrets]
    B --> C[Helm]
    C --> D[Kustomize]
    D --> E[RBAC]
    E --> F[Network Polices]
    F --> G[Ingress/TLS]
    G --> H[Quotas]
```text

## 5.1 ConfigMaps in Depth

ConfigMaps decouple configuration from container images.

```bash
kubectl create configmap app-config --from-literal=APP_ENV=production
kubectl create configmap app-config --from-file=config.json
kubectl create configmap app-config --from-env-file=.env
```text

**Consumption**:

```yaml
spec:
  containers:
    - name: app
      envFrom:
        - configMapRef:
            name: app-config
      volumeMounts:
        - name: config
          mountPath: /etc/config
  volumes:
    - name: config
      configMap:
        name: app-config
```text

Updates: env vars require Pod restart; volume mounts sync within ~2 minutes.

## 5.2 Secrets Management

Secrets are base64 encoded. Use encryption at rest for production.

```bash
kubectl create secret generic db-secret --from-literal=password=secret
kubectl create secret docker-registry regcred --docker-server=registry.example.com --docker-username=user --docker-password=pass
```text

**External Secrets Operator**:

```yaml
apiVersion: external-secrets.io/v1beta1
kind: ExternalSecret
spec:
  secretStoreRef:
    name: aws-parameter-store
  target:
    name: app-secret
  data:
    - secretKey: DB_PASSWORD
      remoteRef:
        key: /production/db/password
```text

**Sealed Secrets**: Encrypt with kubeseal for safe Git storage.

## 5.3 Helm Package Manager

```bash
helm repo add bitnami https://charts.bitnami.com/bitnami
helm install my-release bitnami/nginx --set service.type=LoadBalancer
helm list
helm upgrade my-release -f values-prod.yaml
helm rollback my-release 1
helm uninstall my-release
```text

**Chart structure**: Chart.yaml, values.yaml, templates/, charts/.

## 5.4 Kustomize

```yaml

## base/kustomization.yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization
resources:
  - deployment.yaml
commonLabels:
  app: my-app
```text

```bash
kubectl apply -k overlays/production/
```text

## 5.5 RBAC and Service Accounts

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: pod-reader
rules:
  - apiGroups: [""]
    resources: ["pods"]
    verbs: ["get", "list", "watch"]
---
apiVersion: v1
kind: ServiceAccount
metadata:
  name: my-app-sa
```text

## 5.6 Network Policies

```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: api-policy
spec:
  podSelector:
    matchLabels:
      app: api
  ingress:
    - from:
        - podSelector:
            matchLabels:
              app: frontend
      ports:
        - port: 8000
```text

## 5.7 Ingress and TLS

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    cert-manager.io/cluster-issuer: letsencrypt-prod
spec:
  ingressClassName: nginx
  tls:
    - hosts:
        - app.example.com
      secretName: app-tls
  rules:
    - host: app.example.com
      http:
        paths:
          - path: /api
            pathType: Prefix
            backend:
              service:
                name: api-service
                port:
                  number: 8000
```text

## 5.8 Resource Quotas and Limits

```yaml
apiVersion: v1
kind: LimitRange
metadata:
  name: resource-limits
spec:
  limits:
    - default:
        cpu: 500m
        memory: 512Mi
      defaultRequest:
        cpu: 200m
        memory: 256Mi
---
apiVersion: v1
kind: ResourceQuota
metadata:
  name: compute-quota
spec:
  hard:
    requests.cpu: "4"
    requests.memory: 8Gi
    pods: "10"
```text

---

## TypeScript Parallel

```typescript
function generateDeployment(name: string, image: string, replicas: number): string {
  const lines = [
    "apiVersion: apps/v1",
    "kind: Deployment",
    "metadata:",
    "  name: " + name,
    "spec:",
    "  replicas: " + replicas,
  ];
  return lines.join("\n");
}
```text

---

## Summary

- ConfigMaps store non-sensitive config; consumed as env vars or volume mounts
- Secrets are base64-encoded; use encryption at rest and external stores
- Helm packages resources into versioned charts with templates
- Kustomize customizes YAML through overlays/patches without templating
- RBAC uses Roles/RoleBindings and ClusterRoles/ClusterRoleBindings
- ServiceAccounts provide Pod identity for API auth
- Network Policies control traffic based on selectors and ports
- Ingress routes HTTP/HTTPS; cert-manager automates TLS
- ResourceQuota caps namespace usage; LimitRange sets per-container defaults
- PriorityClass determines scheduling priority

## Practical Takeaways

| Scenario | Do This | Avoid This |
|----------|---------|------------|
| Configuration | ConfigMap + Volume Mount | Hardcoding in image |
| Secrets in Git | Sealed Secrets | Plain text in repo |
| Multi-env | Kustomize overlays | Copy-pasted manifests |
| Distribution | Helm chart repo | Raw YAML |
| Permissions | Dedicated ServiceAccount | Default SA |
| TLS | cert-manager | Manual certs |
| Resources | ResourceQuota + LimitRange | No limits |
| Traffic | Network Policies | Default allow-all |

## Interview Q&A

<details class="tp-qa-card" data-qid="docker-s05-q1">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q1: ConfigMap vs Secret?</summary>
  <div class="tp-qa-answer"><p>ConfigMap: non-sensitive plain text. Secret: base64-encoded sensitive data with encryption at rest and stricter RBAC.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="docker-s05-q2">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q2: Helm chart structure?</summary>
  <div class="tp-qa-answer"><p>Chart.yaml, values.yaml, templates/ (Go templates), charts/ (sub-charts). Installed as releases with version history.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="docker-s05-q3">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q3: Kustomize vs Helm?</summary>
  <div class="tp-qa-answer"><p>Helm: Go templating, logic, sub-charts. Kustomize: pure YAML patches, base/overlay pattern. Kustomize built into kubectl.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="docker-s05-q4">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q4: RBAC resource types?</summary>
  <div class="tp-qa-answer"><p>Role (namespace), ClusterRole (cluster-wide), RoleBinding, ClusterRoleBinding.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="docker-s05-q5">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q5: ServiceAccount purpose?</summary>
  <div class="tp-qa-answer"><p>Pod identity for Kubernetes API authentication. Used by CI/CD, operators, apps.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="docker-s05-q6">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q6: Network Policies?</summary>
  <div class="tp-qa-answer"><p>Firewall rules for Pods using podSelector, policyTypes, ingress/egress rules. Adding a policy denies unallowed traffic.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="docker-s05-q7">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q7: cert-manager workflow?</summary>
  <div class="tp-qa-answer"><p>ClusterIssuer -> watch Ingress annotations -> solve ACME challenge -> store cert as Secret -> Ingress uses Secret.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="docker-s05-q8">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q8: ResourceQuota vs LimitRange?</summary>
  <div class="tp-qa-answer"><p>ResourceQuota: namespace aggregate caps. LimitRange: per-container defaults and min/max.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="docker-s05-q9">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q9: Secrets in GitOps?</summary>
  <div class="tp-qa-answer"><p>Sealed Secrets (encrypt with kubeseal), External Secrets Operator, SOPS with Flux/ArgoCD. Never raw secrets in Git.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="docker-s05-q10">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q10: How does Ingress work?</summary>
  <div class="tp-qa-answer"><p>Ingress resource defines routing rules. Ingress controller configures proxy. Traffic routes to correct Service based on host/path.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

## Chapter Quiz

**Q1**: Which stores non-sensitive config?

a) Secret
b) ConfigMap
c) EnvironmentConfig
d) ConfigResource

<details class="tp-qa-card" data-qid="docker-s05-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) ConfigMap</strong></p></div></details>

**Q2**: What encrypts Secrets for Git?

a) Helm
b) Kustomize
c) Sealed Secrets
d) cert-manager

<details class="tp-qa-card" data-qid="docker-s05-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) Sealed Secrets</strong></p></div></details>

**Q3**: Which command installs a Helm chart?

a) helm deploy
b) helm install
c) helm apply
d) helm create

<details class="tp-qa-card" data-qid="docker-s05-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) helm install</strong></p></div></details>

**Q4**: What does a ServiceAccount provide?

a) Store credentials
b) Pod identity for API auth
c) Create users
d) Manage traffic

<details class="tp-qa-card" data-qid="docker-s05-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Pod identity for API auth</strong></p></div></details>

**Q5**: What controls Pod-to-Pod traffic?

a) Ingress
b) NetworkPolicy
c) Service
d) Gateway

<details class="tp-qa-card" data-qid="docker-s05-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) NetworkPolicy</strong></p></div></details>

## Exercises

**Easy** — Create a ConfigMap with 3 env vars. Mount into a Pod. Verify readable.

**Medium** — Write a Helm chart for a web app with configurable replica count and image tag. Install and upgrade.

**Medium** — Create Kustomize base + two overlays (dev, prod). Prod has more replicas and different config.

**Hard** — Set up: ServiceAccount with RBAC, NetworkPolicy, Ingress with TLS, ResourceQuota on namespace.

**Hard** — Migrate raw YAML manifests to Helm charts. Add DB dependency. Create CI pipeline.

## Advanced Helm Patterns

**Dependency management**: Helm charts can depend on other charts using the `dependencies` field in Chart.yaml.

```yaml

## Chart.yaml
dependencies:
  - name: postgresql
    version: "12.x"
    repository: "https://charts.bitnami.com/bitnami"
    condition: postgresql.enabled
    alias: db

## Install with dependencies

## helm dependency update

## helm install my-release . --set db.postgresql.enabled=true
```text

**Go template functions in Helm templates**:

```yaml

## templates/configmap.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: {{ .Release.Name }}-config
  labels:
    app.kubernetes.io/managed-by: {{ .Release.Service }}
    app.kubernetes.io/instance: {{ .Release.Name }}
data:
  APP_ENV: {{ .Values.environment | default "production" | quote }}
  APP_VERSION: {{ .Chart.AppVersion | quote }}
  REPLICA_COUNT: {{ .Values.replicaCount | toString | quote }}
  {{- if .Values.features.metrics }}
  METRICS_ENABLED: "true"
  {{- end }}
```text

**Helm hooks** for lifecycle management:

```yaml

## templates/migration-job.yaml
apiVersion: batch/v1
kind: Job
metadata:
  name: {{ .Release.Name }}-db-migrate
  annotations:
    "helm.sh/hook": pre-upgrade,pre-install
    "helm.sh/hook-weight": "-5"
    "helm.sh/hook-delete-policy": hook-succeeded
spec:
  template:
    spec:
      restartPolicy: Never
      containers:
        - name: migrate
          image: "{{ .Values.image.repository }}:{{ .Values.image.tag }}"
          command: ["python", "manage.py", "migrate"]
```text

## Pod Security Standards

**Pod Security Admission** (replaces PSP in K8s 1.25+):

```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: secure-ns
  labels:
    pod-security.kubernetes.io/enforce: restricted
    pod-security.kubernetes.io/audit: restricted
    pod-security.kubernetes.io/warn: baseline
```text

**Security context best practices**:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: secure-pod
spec:
  securityContext:
    runAsNonRoot: true
    runAsUser: 1000
    fsGroup: 2000
    seccompProfile:
      type: RuntimeDefault
  containers:
    - name: app
      image: myapp:latest
      securityContext:
        allowPrivilegeEscalation: false
        capabilities:
          drop: ["ALL"]
        readOnlyRootFilesystem: true
```text

## Common Troubleshooting Commands

| Command | Purpose |
|---------|---------|
| `kubectl describe pod <name>` | Detailed pod status and events |
| `kubectl logs <pod> -c <container>` | View container logs |
| `kubectl exec -it <pod> -- sh` | Shell into container |
| `kubectl get events --sort-by=.lastTimestamp` | View cluster events |
| `kubectl top pod` | Resource usage metrics |
| `kubectl get all -n <ns>` | All resources in namespace |

---


## Common Mistakes

1. Not understanding the fundamental concepts before applying them
2. Skipping edge cases in implementation
3. Not analyzing time/space complexity
4. Forgetting to handle null/empty inputs
5. Not practicing enough problems to build pattern recognition

## Revision Notes

- - Core principle: Understand the fundamental concepts thoroughly
- - Implementation pattern: Practice with real code examples
- - Complexity: Know the time and space complexity
- - Application: Know when to use this in production systems
- - Interview: Frequently asked in technical interviews
- - Edge cases: Consider common failure scenarios
- - Related concepts: Connect to broader system design

## Placement Section

### Top 10 Interview Questions

#### Google Style
1. Explain the time and space trade-offs of 06-docker-kubernetes-cloud. When would you choose one approach over another?
2. Design a system that efficiently handles 06-docker-kubernetes-cloud at scale (millions of requests/second).

#### Amazon Style
1. Tell me about a time you had to optimize a system related to 06-docker-kubernetes-cloud. What was your approach and what was the result?
2. How would you explain 06-docker-kubernetes-cloud to a non-technical stakeholder?

#### Microsoft Style
1. How does 06-docker-kubernetes-cloud integrate with enterprise systems and cloud architectures?
2. What are the security implications of 06-docker-kubernetes-cloud?

#### NVIDIA Style
1. How would you optimize 06-docker-kubernetes-cloud for GPU-accelerated computing?
2. What parallel processing patterns apply to 06-docker-kubernetes-cloud?

#### AI Startup Style
1. How would you implement 06-docker-kubernetes-cloud in a cost-effective, scalable way for a startup?
2. What's the fastest way to prototype a solution using 06-docker-kubernetes-cloud?

### Resume Tips
- **Technical Skills**: List 06-docker-kubernetes-cloud under relevant technical skills
- **Project Description**: "Implemented 06-docker-kubernetes-cloud to [specific outcome], reducing [metric] by [X]%"
- **Keywords**: Include 06-docker-kubernetes-cloud in your skills section for ATS optimization

### Interview Day Checklist
- [ ] Review core concepts of 06-docker-kubernetes-cloud
- [ ] Practice 3-5 problems related to 06-docker-kubernetes-cloud
- [ ] Prepare 2 real-world examples of using 06-docker-kubernetes-cloud
- [ ] Know the time/space complexity of common 06-docker-kubernetes-cloud operations
- [ ] Have questions ready about how the company uses 06-docker-kubernetes-cloud> **Next**: [Kubernetes Scaling](06-kubernetes-scaling.md)


## Difficulty Level

**Level**: Intermediate
**Estimated Study Time**: 30-45 minutes
**Prerequisites**: Complete understanding of previous modules recommended

## Tips & Tricks

**Tip**: Start with the basics — understand the fundamental concepts before moving to advanced topics.

**Tip**: Practice actively — don't just read, implement the code examples yourself.

**Tip**: Connect to prior knowledge — relate new concepts to what you learned in previous modules.

**Pro Tip**: Focus on understanding, not memorizing — understand why things work, not just how.

**Pro Tip**: Review regularly — revisit key concepts after a few days to reinforce learning.

## Memory Tricks

- **Acronym Method**: Create acronyms for lists of concepts
- **Visualization**: Draw diagrams to visualize abstract concepts
- **Teach someone else**: Explaining concepts to others reinforces your understanding
- **Connect to real-world**: Relate technical concepts to everyday experiences
- **Chunking**: Break complex topics into smaller, manageable pieces

## Further Reading

- Official documentation and language specifications
- "Designing Data-Intensive Applications" by Martin Kleppmann
- "System Design Interview" by Alex Xu
- "AI Engineering" by Chip Huyen
- Research papers and blog posts from leading AI labs

## Related Topics

- How this connects to Docker, Kubernetes & Cloud fundamentals
- Prerequisites for advanced topics in this module
- Real-world applications in AI engineering systems
- Interview questions that test deep understanding

## FAQs

**Q: How long does it take to master kubernetes config?
**A**: With consistent practice, 2-4 weeks for basic proficiency, 2-3 months for advanced mastery.

**Q: Do I need to memorize all the details?
**A**: Focus on understanding the core principles. Details can be looked up, but understanding cannot.

**Q: What's the best way to practice?
**A**: Implement the code examples, then modify them to solve different problems. Build small projects.

**Q: How often should I review this material?
**A**: Review after 1 day, 3 days, 1 week, and 1 month for long-term retention.

## Important Notes

> **Note**: Understanding the fundamentals is more important than memorizing syntax.

> **Note**: Don't skip the exercises — they reinforce critical concepts.

> **Note**: This topic frequently appears in technical interviews at top companies.

> **Note**: In real systems, these concepts are used daily by AI engineers.

## Historical Context

The Evolution of this technology reflects decades of research and practical engineering experience.

Understanding the evolution of kubernetes config helps appreciate why current approaches exist. These concepts have been developed over decades of computer science research and practical engineering experience.

## Coding Standards

- Follow consistent naming conventions (camelCase for variables, PascalCase for types)
- Add clear comments explaining complex logic
- Keep functions focused on a single responsibility
- Write self-documenting code with meaningful names
- Handle errors gracefully and provide informative messages

**Best Practice**: Follow language-specific style guides (PEP 8 for Python, ESLint for TypeScript).

## Security Considerations

- **Input Validation**: Always validate and sanitize inputs
- **Error Handling**: Don't expose internal details in error messages
- **Resource Limits**: Set appropriate limits to prevent denial of service
- **Authentication**: Ensure proper authentication and authorization
- **Data Protection**: Handle sensitive data according to security best practices

## ML Intuition

For AI engineering, understanding kubernetes config at an intuitive level is crucial. Think of it as building mental models that help you reason about system behavior, debug issues, and make architectural decisions.

## Analogies

Think of kubernetes config like learning a new language — start with basic vocabulary (fundamentals), then learn grammar (rules), and finally practice conversation (application). The more you practice, the more natural it becomes.

## Capstone Project Link

**Project**: Apply kubernetes config concepts in a mini-project
**Goal**: Build a small application that demonstrates understanding of core principles
**Duration**: 2-4 hours
**Outcome**: Working implementation with documentation

## Flashcards

**Card 1**: What is the core concept of kubernetes config?
**Answer**: The fundamental principle that enables efficient and scalable systems.

**Card 2**: When would you apply kubernetes config in real systems?
**Answer**: When building production AI systems that require reliability, scalability, and maintainability.

**Card 3**: What are the common pitfalls to avoid?
**Answer**: Over-engineering, ignoring edge cases, and not considering production requirements.

## Study Plan

**Day 1**: Read theory and review examples (12 minutes)
**Day 2**: Complete exercises and practice (12 minutes)
**Day 3**: Review flashcards and take quiz (6 minutes)

## Research References

- Academic papers and conference proceedings (NeurIPS, ICML, ICLR)
- Industry whitepapers from leading AI companies
- Technical blogs from Google, Meta, OpenAI, Anthropic
- Open-source implementations and documentation

## Fine-Tuning Notes

When applying this topic to production, consider:
- Fine-tuning with LoRA or Adapters for domain adaptation
- Adapting general principles to your specific use cases
- Performance optimization for target hardware
- Cost considerations for deployment


## Open-Source Tools

- **LangChain**: Framework for building LLM-powered applications
- **LlamaIndex**: Data framework for connecting LLMs with external data
- **Hugging Face Transformers**: State-of-the-art ML models and datasets
- **Weights & Biases**: Experiment tracking and model evaluation
- **MLflow**: Open-source platform for ML lifecycle management
- **Prometheus + Grafana**: Monitoring and observability stack

## Debugging Guide

**Common Issues**:
- Check input validation and data types
- Verify API keys and authentication
- Monitor resource usage (CPU, memory, GPU)
- Review error logs for stack traces

**Debugging Steps**:
1. Reproduce the issue with minimal input
2. Add logging at key points
3. Check external dependencies
4. Verify configuration settings
5. Test with known-good inputs

## Mock Interview Section

**Quick Fire Questions**:
1. What is the core concept of Docker, Kubernetes & Cloud?
2. When would you use this in production?
3. What are the trade-offs?
4. How does this scale?
5. What are common pitfalls?

**Follow-up Questions**:
- How would you optimize this for 10x scale?
- What monitoring would you add?
- How would you test this in production?

## References

- Official documentation and language specifications
- "Designing Data-Intensive Applications" by Martin Kleppmann
- "System Design Interview" by Alex Xu
- "AI Engineering" by Chip Huyen
- Research papers from NeurIPS, ICML, ICLR
- Industry blogs from Google, Meta, OpenAI, Anthropic

## Evaluation Metrics

**Model Evaluation**:
- Accuracy, Precision, Recall, F1-Score
- BLEU, ROUGE for text generation
- Latency, Throughput, Cost per inference

**System Evaluation**:
- End-to-end latency (p50, p95, p99)
- Error rate and availability
- Resource utilization (CPU, memory, GPU)

## Real-World Examples

**Industry Applications**:
- Google: Search ranking, translation, autocomplete
- Amazon: Product recommendations, Alexa, fraud detection
- Netflix: Content recommendations, personalization
- Tesla: Autonomous driving, computer vision
- OpenAI: ChatGPT, DALL-E, Codex

## Next Topic

After mastering Docker, Kubernetes & Cloud, continue to the next module in the curriculum to build upon these foundations and deepen your AI engineering expertise.

## Inference Workflow

1. **Input Validation**: Sanitize and validate incoming requests
2. **Preprocessing**: Transform input to model-ready format
3. **Model Execution**: Run inference with optimized runtime
4. **Postprocessing**: Format model output for consumption
5. **Response**: Return results with metadata and timing
6. **Monitoring**: Log requests, responses, and latency

## Limitations

Every approach has trade-offs. Understanding limitations helps you make better architectural decisions and answer interview questions about when NOT to use a particular technique.
