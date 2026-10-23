"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[2404],{

/***/ 6642
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_computer_networks_16_cloud_networking_md_834_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-computer-networks-16-cloud-networking-md-834.json
const site_docs_courses_computer_networks_16_cloud_networking_md_834_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/computer-networks/16-cloud-networking","title":"Chapter 16: Cloud Networking","description":"Learning Objectives","source":"@site/docs/courses/computer-networks/16-cloud-networking.md","sourceDirName":"courses/computer-networks","slug":"/computer-networks/16-cloud-networking","permalink":"/ai-engineering-journey/computer-networks/16-cloud-networking","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":16,"frontMatter":{"id":"16-cloud-networking","slug":"/computer-networks/16-cloud-networking","title":"Chapter 16: Cloud Networking","sidebar_label":"Chapter 16: Cloud Networking","sidebar_position":16},"sidebar":"course-computer-networks","previous":{"title":"Chapter 15: Web APIs and Application Protocols","permalink":"/ai-engineering-journey/computer-networks/15-web-apis"},"next":{"title":"Chapter 17: Network Troubleshooting","permalink":"/ai-engineering-journey/computer-networks/17-troubleshooting"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/courses/computer-networks/16-cloud-networking.md


const frontMatter = {
	id: '16-cloud-networking',
	slug: '/computer-networks/16-cloud-networking',
	title: 'Chapter 16: Cloud Networking',
	sidebar_label: 'Chapter 16: Cloud Networking',
	sidebar_position: 16
};
const contentTitle = 'Chapter 16: Cloud Networking';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "16.1 Cloud Networking Basics",
  "id": "161-cloud-networking-basics",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy",
  "level": 3
}, {
  "value": "How Cloud Networking Works: Step-by-Step",
  "id": "how-cloud-networking-works-step-by-step",
  "level": 3
}, {
  "value": "Pseudocode: Cloud Network Packet Forwarding",
  "id": "pseudocode-cloud-network-packet-forwarding",
  "level": 3
}, {
  "value": "Dry Run Trace: VPC Route Table Lookup",
  "id": "dry-run-trace-vpc-route-table-lookup",
  "level": 3
}, {
  "value": "C++ Implementation: VPC Route Table with Longest Prefix Match",
  "id": "c-implementation-vpc-route-table-with-longest-prefix-match",
  "level": 3
}, {
  "value": "Python Implementation: VPC Network Simulator",
  "id": "python-implementation-vpc-network-simulator",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages of Cloud Networking",
  "id": "advantages--disadvantages-of-cloud-networking",
  "level": 3
}, {
  "value": "Edge Cases in Cloud Networking",
  "id": "edge-cases-in-cloud-networking",
  "level": 3
}, {
  "value": "Cloud Network Architecture",
  "id": "cloud-network-architecture",
  "level": 3
}, {
  "value": "16.2 Traditional vs Cloud Networking",
  "id": "162-traditional-vs-cloud-networking",
  "level": 2
}, {
  "value": "16.3 VPC and Subnets",
  "id": "163-vpc-and-subnets",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-1",
  "level": 3
}, {
  "value": "VPC Setup: Step-by-Step",
  "id": "vpc-setup-step-by-step",
  "level": 3
}, {
  "value": "16.3.1 VPC Components",
  "id": "1631-vpc-components",
  "level": 3
}, {
  "value": "16.3.2 VPC Peering",
  "id": "1632-vpc-peering",
  "level": 3
}, {
  "value": "Pseudocode: VPC and Subnet Allocation",
  "id": "pseudocode-vpc-and-subnet-allocation",
  "level": 3
}, {
  "value": "Dry Run Trace: VPC with Multi-AZ Subnets",
  "id": "dry-run-trace-vpc-with-multi-az-subnets",
  "level": 3
}, {
  "value": "C++ Implementation: VPC Subnet Allocator",
  "id": "c-implementation-vpc-subnet-allocator",
  "level": 3
}, {
  "value": "Python Implementation: VPC Subnet Planner",
  "id": "python-implementation-vpc-subnet-planner",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-1",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages of VPC",
  "id": "advantages--disadvantages-of-vpc",
  "level": 3
}, {
  "value": "Edge Cases in VPC",
  "id": "edge-cases-in-vpc",
  "level": 3
}, {
  "value": "16.4 Cloud Security Groups",
  "id": "164-cloud-security-groups",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-2",
  "level": 3
}, {
  "value": "How Security Groups Work: Step-by-Step",
  "id": "how-security-groups-work-step-by-step",
  "level": 3
}, {
  "value": "Pseudocode: Security Group Evaluation",
  "id": "pseudocode-security-group-evaluation",
  "level": 3
}, {
  "value": "Dry Run Trace: Security Group Evaluation",
  "id": "dry-run-trace-security-group-evaluation",
  "level": 3
}, {
  "value": "C++ Implementation: Security Group Evaluator",
  "id": "c-implementation-security-group-evaluator",
  "level": 3
}, {
  "value": "Python Implementation: Security Group Simulator",
  "id": "python-implementation-security-group-simulator",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-2",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages of Security Groups",
  "id": "advantages--disadvantages-of-security-groups",
  "level": 3
}, {
  "value": "Edge Cases for Security Groups",
  "id": "edge-cases-for-security-groups",
  "level": 3
}, {
  "value": "16.5 Load Balancers",
  "id": "165-load-balancers",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-3",
  "level": 3
}, {
  "value": "16.5.1 Application Load Balancer",
  "id": "1651-application-load-balancer",
  "level": 3
}, {
  "value": "16.5.2 Network Load Balancer",
  "id": "1652-network-load-balancer",
  "level": 3
}, {
  "value": "16.5.3 Gateway Load Balancer",
  "id": "1653-gateway-load-balancer",
  "level": 3
}, {
  "value": "16.5.4 Classic Load Balancer",
  "id": "1654-classic-load-balancer",
  "level": 3
}, {
  "value": "16.5.5 Health Checks",
  "id": "1655-health-checks",
  "level": 3
}, {
  "value": "Pseudocode: Load Balancer Request Dispatch",
  "id": "pseudocode-load-balancer-request-dispatch",
  "level": 3
}, {
  "value": "Dry Run Trace: ALB Path-Based Routing",
  "id": "dry-run-trace-alb-path-based-routing",
  "level": 3
}, {
  "value": "C++ Implementation: Load Balancer with Round-Robin and Least Connections",
  "id": "c-implementation-load-balancer-with-round-robin-and-least-connections",
  "level": 3
}, {
  "value": "Python Implementation: Load Balancer with Multiple Algorithms",
  "id": "python-implementation-load-balancer-with-multiple-algorithms",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-3",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages of Load Balancers",
  "id": "advantages--disadvantages-of-load-balancers",
  "level": 3
}, {
  "value": "Edge Cases for Load Balancers",
  "id": "edge-cases-for-load-balancers",
  "level": 3
}, {
  "value": "16.6 Load Balancer Types Comparison",
  "id": "166-load-balancer-types-comparison",
  "level": 2
}, {
  "value": "16.7 DNS in Cloud (Route53 / Cloud DNS)",
  "id": "167-dns-in-cloud-route53--cloud-dns",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-4",
  "level": 3
}, {
  "value": "How Cloud DNS Works: Step-by-Step",
  "id": "how-cloud-dns-works-step-by-step",
  "level": 3
}, {
  "value": "Pseudocode: DNS Resolution with Latency-Based Routing",
  "id": "pseudocode-dns-resolution-with-latency-based-routing",
  "level": 3
}, {
  "value": "Dry Run Trace: Route53 Latency-Based Routing",
  "id": "dry-run-trace-route53-latency-based-routing",
  "level": 3
}, {
  "value": "C++ Implementation: DNS Routing Simulator",
  "id": "c-implementation-dns-routing-simulator",
  "level": 3
}, {
  "value": "Python Implementation: Cloud DNS with All Routing Policies",
  "id": "python-implementation-cloud-dns-with-all-routing-policies",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-4",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages of Cloud DNS",
  "id": "advantages--disadvantages-of-cloud-dns",
  "level": 3
}, {
  "value": "Edge Cases in Cloud DNS",
  "id": "edge-cases-in-cloud-dns",
  "level": 3
}, {
  "value": "16.8 Content Delivery Networks",
  "id": "168-content-delivery-networks",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-5",
  "level": 3
}, {
  "value": "How CDN Works: Step-by-Step",
  "id": "how-cdn-works-step-by-step",
  "level": 3
}, {
  "value": "16.8.1 CDN Architecture",
  "id": "1681-cdn-architecture",
  "level": 3
}, {
  "value": "16.8.2 Key CDN Features",
  "id": "1682-key-cdn-features",
  "level": 3
}, {
  "value": "16.8.3 Major CDNs",
  "id": "1683-major-cdns",
  "level": 3
}, {
  "value": "Pseudocode: CDN Request Handling with Tiered Caching",
  "id": "pseudocode-cdn-request-handling-with-tiered-caching",
  "level": 3
}, {
  "value": "Dry Run Trace: CDN Request Lifecycle",
  "id": "dry-run-trace-cdn-request-lifecycle",
  "level": 3
}, {
  "value": "C++ Implementation: CDN Cache Simulator",
  "id": "c-implementation-cdn-cache-simulator",
  "level": 3
}, {
  "value": "Python Implementation: CDN with Cache Hit Ratio Analysis",
  "id": "python-implementation-cdn-with-cache-hit-ratio-analysis",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-5",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages of CDN",
  "id": "advantages--disadvantages-of-cdn",
  "level": 3
}, {
  "value": "Edge Cases for CDN",
  "id": "edge-cases-for-cdn",
  "level": 3
}, {
  "value": "16.9 CDN vs Direct Connection",
  "id": "169-cdn-vs-direct-connection",
  "level": 2
}, {
  "value": "16.10 VPN to Cloud",
  "id": "1610-vpn-to-cloud",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-6",
  "level": 3
}, {
  "value": "How Cloud VPN Works: Step-by-Step",
  "id": "how-cloud-vpn-works-step-by-step",
  "level": 3
}, {
  "value": "Pseudocode: IPSec VPN Tunnel Establishment",
  "id": "pseudocode-ipsec-vpn-tunnel-establishment",
  "level": 3
}, {
  "value": "Dry Run Trace: Cloud VPN Connectivity",
  "id": "dry-run-trace-cloud-vpn-connectivity",
  "level": 3
}, {
  "value": "C++ Implementation: VPN Tunnel Simulator",
  "id": "c-implementation-vpn-tunnel-simulator",
  "level": 3
}, {
  "value": "Python Implementation: Cloud VPN Simulator",
  "id": "python-implementation-cloud-vpn-simulator",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-6",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages of Cloud VPN",
  "id": "advantages--disadvantages-of-cloud-vpn",
  "level": 3
}, {
  "value": "Edge Cases for Cloud VPN",
  "id": "edge-cases-for-cloud-vpn",
  "level": 3
}, {
  "value": "16.11 Direct Connect / ExpressRoute",
  "id": "1611-direct-connect--expressroute",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-7",
  "level": 3
}, {
  "value": "How Direct Connect Works: Step-by-Step",
  "id": "how-direct-connect-works-step-by-step",
  "level": 3
}, {
  "value": "Pseudocode: Direct Connect BGP Session Setup",
  "id": "pseudocode-direct-connect-bgp-session-setup",
  "level": 3
}, {
  "value": "Dry Run Trace: Direct Connect Packet Flow",
  "id": "dry-run-trace-direct-connect-packet-flow",
  "level": 3
}, {
  "value": "C++ Implementation: Direct Connect Bandwidth Calculator",
  "id": "c-implementation-direct-connect-bandwidth-calculator",
  "level": 3
}, {
  "value": "Python Implementation: Direct Connect Cost vs VPN Analyzer",
  "id": "python-implementation-direct-connect-cost-vs-vpn-analyzer",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-7",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages",
  "level": 3
}, {
  "value": "Edge Cases for Direct Connect",
  "id": "edge-cases-for-direct-connect",
  "level": 3
}, {
  "value": "16.12 VPC Peering vs Transit Gateway vs Direct Connect",
  "id": "1612-vpc-peering-vs-transit-gateway-vs-direct-connect",
  "level": 2
}, {
  "value": "16.13 Multi-Cloud Networking",
  "id": "1613-multi-cloud-networking",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-8",
  "level": 3
}, {
  "value": "How Multi-Cloud Networking Works: Step-by-Step",
  "id": "how-multi-cloud-networking-works-step-by-step",
  "level": 3
}, {
  "value": "Pseudocode: Multi-Cloud Route Advertisement",
  "id": "pseudocode-multi-cloud-route-advertisement",
  "level": 3
}, {
  "value": "Dry Run Trace: Multi-Cloud Request Flow",
  "id": "dry-run-trace-multi-cloud-request-flow",
  "level": 3
}, {
  "value": "C++ Implementation: Multi-Cloud Route Table",
  "id": "c-implementation-multi-cloud-route-table",
  "level": 3
}, {
  "value": "Python Implementation: Multi-Cloud Latency Analyzer",
  "id": "python-implementation-multi-cloud-latency-analyzer",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-8",
  "level": 3
}, {
  "value": "Edge Cases in Multi-Cloud",
  "id": "edge-cases-in-multi-cloud",
  "level": 3
}, {
  "value": "16.14 Service Mesh (Istio / Linkerd)",
  "id": "1614-service-mesh-istio--linkerd",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-9",
  "level": 3
}, {
  "value": "How Service Mesh Works: Step-by-Step",
  "id": "how-service-mesh-works-step-by-step",
  "level": 3
}, {
  "value": "Pseudocode: Service Mesh Request with mTLS and Routing",
  "id": "pseudocode-service-mesh-request-with-mtls-and-routing",
  "level": 3
}, {
  "value": "Dry Run Trace: Istio Service Mesh Request",
  "id": "dry-run-trace-istio-service-mesh-request",
  "level": 3
}, {
  "value": "C++ Implementation: Service Mesh Sidecar Simulator",
  "id": "c-implementation-service-mesh-sidecar-simulator",
  "level": 3
}, {
  "value": "Python Implementation: Service Mesh Simulator",
  "id": "python-implementation-service-mesh-simulator",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-9",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages of Service Mesh",
  "id": "advantages--disadvantages-of-service-mesh",
  "level": 3
}, {
  "value": "Edge Cases for Service Mesh",
  "id": "edge-cases-for-service-mesh",
  "level": 3
}, {
  "value": "16.15 Service Mesh vs Traditional Networking",
  "id": "1615-service-mesh-vs-traditional-networking",
  "level": 2
}, {
  "value": "16.16 Anycast Networking",
  "id": "1616-anycast-networking",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-10",
  "level": 3
}, {
  "value": "How Anycast Works: Step-by-Step",
  "id": "how-anycast-works-step-by-step",
  "level": 3
}, {
  "value": "Pseudocode: Anycast Routing",
  "id": "pseudocode-anycast-routing",
  "level": 3
}, {
  "value": "Dry Run Trace: Anycast DNS Resolution",
  "id": "dry-run-trace-anycast-dns-resolution",
  "level": 3
}, {
  "value": "C++ Implementation: Anycast Route Simulator",
  "id": "c-implementation-anycast-route-simulator",
  "level": 3
}, {
  "value": "Python Implementation: Anycast Network Simulator",
  "id": "python-implementation-anycast-network-simulator",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-10",
  "level": 3
}, {
  "value": "Edge Cases for Anycast",
  "id": "edge-cases-for-anycast",
  "level": 3
}, {
  "value": "16.17 Service Mesh vs Traditional Networking Comparison",
  "id": "1617-service-mesh-vs-traditional-networking-comparison",
  "level": 2
}, {
  "value": "16.18 Interview Corner",
  "id": "1618-interview-corner",
  "level": 2
}, {
  "value": "Q1: How does cloud networking differ from on-premises networking?",
  "id": "q1-how-does-cloud-networking-differ-from-on-premises-networking",
  "level": 3
}, {
  "value": "Q2: Compare round-robin vs least-connections vs IP hash load balancing.",
  "id": "q2-compare-round-robin-vs-least-connections-vs-ip-hash-load-balancing",
  "level": 3
}, {
  "value": "Q3: What is DNS propagation and why does it matter?",
  "id": "q3-what-is-dns-propagation-and-why-does-it-matter",
  "level": 3
}, {
  "value": "Q4: What factors determine a multi-cloud strategy?",
  "id": "q4-what-factors-determine-a-multi-cloud-strategy",
  "level": 3
}, {
  "value": "Q5: What happens when a load balancer health check fails?",
  "id": "q5-what-happens-when-a-load-balancer-health-check-fails",
  "level": 3
}, {
  "value": "Q6: How does VXLAN isolate tenants in cloud networking?",
  "id": "q6-how-does-vxlan-isolate-tenants-in-cloud-networking",
  "level": 3
}, {
  "value": "16.19 Applications in Real Systems",
  "id": "1619-applications-in-real-systems",
  "level": 2
}, {
  "value": "AWS: VPC + ALB Architecture",
  "id": "aws-vpc--alb-architecture",
  "level": 3
}, {
  "value": "Google Cloud: VPC + Cloud CDN",
  "id": "google-cloud-vpc--cloud-cdn",
  "level": 3
}, {
  "value": "Azure: Virtual Network Architecture",
  "id": "azure-virtual-network-architecture",
  "level": 3
}, {
  "value": "Istio on Kubernetes",
  "id": "istio-on-kubernetes",
  "level": 3
}, {
  "value": "Retention: One-Sentence Takeaways",
  "id": "retention-one-sentence-takeaways",
  "level": 2
}, {
  "value": "Case Study: Global E-Commerce Platform Migration to AWS",
  "id": "case-study-global-e-commerce-platform-migration-to-aws",
  "level": 2
}, {
  "value": "Problem",
  "id": "problem",
  "level": 3
}, {
  "value": "Solution",
  "id": "solution",
  "level": 3
}, {
  "value": "Outcome",
  "id": "outcome",
  "level": 3
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Review Questions",
  "id": "review-questions",
  "level": 3
}, {
  "value": "Application Problems",
  "id": "application-problems",
  "level": 3
}, {
  "value": "Challenge Problem",
  "id": "challenge-problem",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    mermaid: "mermaid",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "chapter-16-cloud-networking",
        children: "Chapter 16: Cloud Networking"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/computer-networks/ch16-cloud-networking.png",
        alt: "Cloud Networking"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the architecture of Virtual Private Clouds and network isolation mechanisms."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare load balancer types: Application Load Balancer, Network Load Balancer, and Gateway Load Balancer."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain content delivery network operation and its impact on latency."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze cloud DNS management including routing policies."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate hybrid connectivity options including VPNs and Direct Connect."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand multi-cloud networking, service mesh, and anycast concepts."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "161-cloud-networking-basics",
      children: "16.1 Cloud Networking Basics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cloud networking replaces physical routers, switches, and firewalls with software-defined equivalents running on hypervisor-hosted virtual infrastructure. The cloud provider implements network functions in the hypervisor kernel or as distributed data-plane agents, exposing them through API calls."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A cloud network is like a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "customizable office building within a business park"
      }), ". The business park (cloud provider) provides the physical land, power, and security. Your lease defines your private space (VPC). You can build interior walls (subnets), install doors with keycard access (security groups), set up reception desks (load balancers), and connect to other buildings via private walkways (VPC peering) or public roads (Internet Gateway)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-cloud-networking-works-step-by-step",
      children: "How Cloud Networking Works: Step-by-Step"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Tenant isolation"
          }), " → The provider uses VXLAN (Virtual Extensible LAN) with 24-bit VNI (VXLAN Network Identifier) to encapsulate tenant traffic. Each tenant gets a unique VNI, allowing 16 million isolated networks over a shared physical fabric."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "SDN controller programming"
          }), " → When you create a VPC/subnet/route table via API, the SDN controller programs forwarding rules into virtual switches on each hypervisor host."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Packet encapsulation"
          }), " → When a VM sends a packet, the hypervisor's virtual switch encapsulates it with the tenant's VNI before forwarding over the physical network."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Distributed routing"
          }), " → Each hypervisor host runs a virtual router that evaluates route tables locally, avoiding centralized bottlenecks."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Security enforcement"
          }), " → Security groups are evaluated at the hypervisor level as stateful 5-tuple (protocol, source IP, source port, destination IP, destination port) rules."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Elastic scaling"
          }), " → Network capacity scales by adding more hypervisor hosts; no physical rack-and-stack required."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-cloud-network-packet-forwarding",
      children: "Pseudocode: Cloud Network Packet Forwarding"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE forward_packet(packet, vni, source_vm, route_table, security_groups):\r\n    // Step 1: Validate source security group\r\n    sg_rules = security_groups[source_vm.sg_id]\r\n    IF NOT match_egress_rule(packet, sg_rules):\r\n        DROP packet\r\n        LOG \"Dropped by egress SG rule\"\r\n        RETURN\r\n\r\n    // Step 2: Look up route\r\n    best_prefix = longest_prefix_match(packet.dst_ip, route_table.routes)\r\n\r\n    IF best_prefix == NULL:\r\n        DROP packet\r\n        LOG \"No route to destination\"\r\n        RETURN\r\n\r\n    // Step 3: Get next hop\r\n    next_hop = route_table.routes[best_prefix].target\r\n\r\n    // Step 4: VXLAN encapsulation\r\n    outer_header.prepend()\r\n    outer_header.vni = vni\r\n    outer_header.dst_mac = resolve_next_hop_mac(next_hop)\r\n    outer_header.src_mac = source_vm.hypervisor_mac\r\n\r\n    // Step 5: Validate destination security group\r\n    FOR each target_vm in destination_set(packet.dst_ip):\r\n        ingress_rules = security_groups[target_vm.sg_id]\r\n        IF match_ingress_rule(packet, ingress_rules):\r\n            FORWARD to target_vm.hypervisor\r\n        ELSE:\r\n            DROP\r\n\r\n    RETURN\r\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace-vpc-route-table-lookup",
      children: "Dry Run Trace: VPC Route Table Lookup"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "VPC Route Table:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Destination CIDR"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Target"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Priority"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10.0.0.0/16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "local"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (most specific)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10.0.1.0/24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "subnet-local"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.0.0.0/0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "igw-abc123"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "172.16.0.0/12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vpn-def456"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace: Packet from 10.0.1.5 to 8.8.8.8"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Input"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extract dst IP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8.8.8.8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Match 10.0.0.0/16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8.8.8.8 & 255.255.0.0 = 10.0.0.0?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Match 10.0.1.0/24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8.8.8.8 & 255.255.255.0 = 10.0.1.0?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Match 0.0.0.0/0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8.8.8.8 & 0.0.0.0 = 0.0.0.0?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resolve target"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "igw-abc123"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internet Gateway"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SNAT?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Source is private"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes → NAT to IGW EIP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IGW → Internet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delivered"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace: Packet from 10.0.1.5 to 10.0.0.22 (same VPC)"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Input"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extract dst IP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10.0.0.22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Match 10.0.0.0/16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10.0.0.22 & 255.255.0.0 = 10.0.0.0?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Target"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "local"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VXLAN direct to target hypervisor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VXLAN encapsulate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VNI = 10001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encapsulated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hypervisor-to-hypervisor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delivered"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation-vpc-route-table-with-longest-prefix-match",
      children: "C++ Implementation: VPC Route Table with Longest Prefix Match"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\n#include <vector>\r\n#include <string>\r\n#include <map>\r\n#include <sstream>\r\n#include <cstdint>\r\n#include <algorithm>\r\n#include <iomanip>\r\n\r\nstruct RouteEntry {\r\n    uint32_t network;\r\n    uint32_t netmask;\r\n    std::string target;\r\n    bool is_local;\r\n};\r\n\r\nuint32_t ip_to_uint(const std::string& ip) {\r\n    std::stringstream s(ip);\r\n    int a, b, c, d;\r\n    char ch;\r\n    s >> a >> ch >> b >> ch >> c >> ch >> d;\r\n    return (a << 24) | (b << 16) | (c << 8) | d;\r\n}\r\n\r\nuint32_t cidr_to_netmask(int prefix_len) {\r\n    return (prefix_len == 0) ? 0 : (0xFFFFFFFF << (32 - prefix_len));\r\n}\r\n\r\nstd::string uint_to_ip(uint32_t ip) {\r\n    return std::to_string((ip >> 24) & 0xFF) + \".\" +\r\n           std::to_string((ip >> 16) & 0xFF) + \".\" +\r\n           std::to_string((ip >> 8) & 0xFF) + \".\" +\r\n           std::to_string(ip & 0xFF);\r\n}\r\n\r\nclass VPCRouteTable {\r\nprivate:\r\n    std::vector<RouteEntry> routes;\r\n    std::string vpc_id;\r\n    uint32_t vpc_cidr_network;\r\n    uint32_t vpc_cidr_mask;\r\n\r\npublic:\r\n    VPCRouteTable(const std::string& id, const std::string& cidr)\r\n        : vpc_id(id) {\r\n        size_t slash = cidr.find('/');\r\n        std::string ip_part = cidr.substr(0, slash);\r\n        int prefix = std::stoi(cidr.substr(slash + 1));\r\n        vpc_cidr_network = ip_to_uint(ip_part) & cidr_to_netmask(prefix);\r\n        vpc_cidr_mask = cidr_to_netmask(prefix);\r\n    }\r\n\r\n    void add_route(const std::string& cidr, const std::string& target, bool local = false) {\r\n        size_t slash = cidr.find('/');\r\n        std::string ip_part = cidr.substr(0, slash);\r\n        int prefix = std::stoi(cidr.substr(slash + 1));\r\n        RouteEntry entry;\r\n        entry.network = ip_to_uint(ip_part) & cidr_to_netmask(prefix);\r\n        entry.netmask = cidr_to_netmask(prefix);\r\n        entry.target = target;\r\n        entry.is_local = local;\r\n        routes.push_back(entry);\r\n    }\r\n\r\n    std::pair<std::string, int> longest_prefix_match(uint32_t dst_ip) {\r\n        int best_prefix = -1;\r\n        std::string best_target;\r\n        for (size_t i = 0; i < routes.size(); i++) {\r\n            if ((dst_ip & routes[i].netmask) == routes[i].network) {\r\n                int prefix = __builtin_popcount(routes[i].netmask);\r\n                if (prefix > best_prefix) {\r\n                    best_prefix = prefix;\r\n                    best_target = routes[i].target;\r\n                }\r\n            }\r\n        }\r\n        if (best_prefix == -1) return {\"no-route\", -1};\r\n        return {best_target, best_prefix};\r\n    }\r\n\r\n    void trace_packet(const std::string& src_ip, const std::string& dst_ip) {\r\n        uint32_t dst = ip_to_uint(dst_ip);\r\n        uint32_t src = ip_to_uint(src_ip);\r\n        std::cout << \"\\n--- Route Trace ---\\n\";\r\n        std::cout << \"Source: \" << src_ip << \" (\" << vpc_id << \")\\n\";\r\n        std::cout << \"Destination: \" << dst_ip << \"\\n\";\r\n        std::cout << \"VPC CIDR: \" << uint_to_ip(vpc_cidr_network) + \"/\"\r\n                  << std::to_string(__builtin_popcount(vpc_cidr_mask)) << \"\\n\\n\";\r\n\r\n        auto [target, prefix_len] = longest_prefix_match(dst);\r\n        if (prefix_len == -1) {\r\n            std::cout << \"RESULT: No route → packet dropped\\n\";\r\n            return;\r\n        }\r\n\r\n        bool in_vpc = (dst & vpc_cidr_mask) == vpc_cidr_network;\r\n        std::cout << \"Matched prefix: /\" << prefix_len << \"\\n\";\r\n        std::cout << \"Next hop: \" << target << \"\\n\";\r\n        if (in_vpc) {\r\n            std::cout << \"Delivery: VXLAN direct (VNI encapsulated)\\n\";\r\n        } else if (target.find(\"igw\") != std::string::npos) {\r\n            std::cout << \"Delivery: Internet Gateway (with SNAT)\\n\";\r\n        } else if (target.find(\"vpn\") != std::string::npos) {\r\n            std::cout << \"Delivery: IPSec tunnel (encrypted)\\n\";\r\n        }\r\n        std::cout << \"--- Trace Complete ---\\n\\n\";\r\n    }\r\n\r\n    void print_table() {\r\n        std::cout << \"Route Table for \" << vpc_id << \"\\n\";\r\n        std::cout << std::left << std::setw(20) << \"Destination\"\r\n                  << std::setw(20) << \"Target\" << \"Type\\n\";\r\n        std::cout << std::string(55, '-') << \"\\n\";\r\n        for (const auto& r : routes) {\r\n            std::cout << std::left << std::setw(20) << uint_to_ip(r.network) + \"/\"\r\n                      + std::to_string(__builtin_popcount(r.netmask))\r\n                      << std::setw(20) << r.target\r\n                      << (r.is_local ? \"local\" : \"remote\") << \"\\n\";\r\n        }\r\n    }\r\n};\r\n\r\nint main() {\r\n    VPCRouteTable vpc(\"vpc-12345\", \"10.0.0.0/16\");\r\n    vpc.add_route(\"10.0.0.0/16\", \"local\", true);\r\n    vpc.add_route(\"10.0.1.0/24\", \"subnet-local\");\r\n    vpc.add_route(\"0.0.0.0/0\", \"igw-abc123\");\r\n    vpc.add_route(\"172.16.0.0/12\", \"vpn-def456\");\r\n\r\n    vpc.print_table();\r\n    vpc.trace_packet(\"10.0.1.5\", \"8.8.8.8\");\r\n    vpc.trace_packet(\"10.0.1.5\", \"10.0.0.22\");\r\n    vpc.trace_packet(\"10.0.1.5\", \"172.16.5.10\");\r\n    vpc.trace_packet(\"10.0.1.5\", \"192.168.1.1\");\r\n\r\n    return 0;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-vpc-network-simulator",
      children: "Python Implementation: VPC Network Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import ipaddress\r\nfrom dataclasses import dataclass\r\nfrom typing import Optional\r\n\r\n\r\n@dataclass\r\nclass RouteEntry:\r\n    network: ipaddress.IPv4Network\r\n    target: str\r\n    is_local: bool = False\r\n\r\n\r\nclass VPCRouteTable:\r\n    def __init__(self, vpc_id: str, vpc_cidr: str):\r\n        self.vpc_id = vpc_id\r\n        self.vpc_network = ipaddress.IPv4Network(vpc_cidr, strict=False)\r\n        self.routes: list[RouteEntry] = []\r\n\r\n    def add_route(self, cidr: str, target: str, local: bool = False):\r\n        network = ipaddress.IPv4Network(cidr, strict=False)\r\n        self.routes.append(RouteEntry(network=network, target=target, is_local=local))\r\n\r\n    def longest_prefix_match(self, ip_str: str) -> Optional[tuple[str, int]]:\r\n        dst_ip = ipaddress.IPv4Address(ip_str)\r\n        best_prefix = -1\r\n        best_target = None\r\n\r\n        for route in self.routes:\r\n            if dst_ip in route.network:\r\n                prefix = route.network.prefixlen\r\n                if prefix > best_prefix:\r\n                    best_prefix = prefix\r\n                    best_target = route.target\r\n\r\n        if best_target is None:\r\n            return None\r\n        return (best_target, best_prefix)\r\n\r\n    def trace_packet(self, src_ip: str, dst_ip: str):\r\n        print(f\"\\n--- Route Trace ---\")\r\n        print(f\"Source: {src_ip} ({self.vpc_id})\")\r\n        print(f\"Destination: {dst_ip}\")\r\n        print(f\"VPC CIDR: {self.vpc_network}\")\r\n\r\n        result = self.longest_prefix_match(dst_ip)\r\n        if result is None:\r\n            print(\"RESULT: No route → packet dropped\")\r\n            return\r\n\r\n        target, prefix_len = result\r\n        in_vpc = ipaddress.IPv4Address(dst_ip) in self.vpc_network\r\n\r\n        print(f\"Matched prefix: /{prefix_len}\")\r\n        print(f\"Next hop: {target}\")\r\n        if in_vpc:\r\n            print(\"Delivery: VXLAN direct (VNI encapsulated)\")\r\n        elif \"igw\" in target:\r\n            print(\"Delivery: Internet Gateway (with SNAT)\")\r\n        elif \"vpn\" in target:\r\n            print(\"Delivery: IPSec tunnel (encrypted)\")\r\n        print(\"--- Trace Complete ---\\n\")\r\n\r\n    def print_table(self):\r\n        print(f\"Route Table for {self.vpc_id}\")\r\n        print(f\"{'Destination':<20} {'Target':<20} Type\")\r\n        print(\"-\" * 55)\r\n        for r in self.routes:\r\n            print(f\"{str(r.network):<20} {r.target:<20} {'local' if r.is_local else 'remote'}\")\r\n\r\n\r\nclass VPCNetworkSimulator:\r\n    def __init__(self):\r\n        self.vpcs: dict[str, VPCRouteTable] = {}\r\n        self.security_groups: dict[str, list[dict]] = {}\r\n        self.vni_map: dict[str, int] = {}\r\n\r\n    def create_vpc(self, vpc_id: str, cidr: str):\r\n        self.vpcs[vpc_id] = VPCRouteTable(vpc_id, cidr)\r\n        self.vni_map[vpc_id] = hash(vpc_id) & 0xFFFFFF\r\n\r\n    def create_security_group(self, sg_id: str, rules: list[dict]):\r\n        self.security_groups[sg_id] = rules\r\n\r\n    def check_security_group(self, sg_id: str, src_ip: str, dst_port: int,\r\n                              protocol: str, direction: str) -> bool:\r\n        if sg_id not in self.security_groups:\r\n            return False\r\n        for rule in self.security_groups[sg_id]:\r\n            if rule.get(\"direction\") != direction:\r\n                continue\r\n            if rule.get(\"protocol\") not in (\"ALL\", protocol):\r\n                continue\r\n            if rule.get(\"port\") is not None and rule[\"port\"] != dst_port:\r\n                continue\r\n            if rule.get(\"cidr\") is not None:\r\n                src = ipaddress.IPv4Address(src_ip)\r\n                if src not in ipaddress.IPv4Network(rule[\"cidr\"]):\r\n                    continue\r\n            return True\r\n        return False\r\n\r\n    def simulate_packet_flow(self, src_vpc: str, src_ip: str,\r\n                              dst_ip: str, dst_port: int, protocol: str = \"TCP\"):\r\n        print(f\"\\n{'='*60}\")\r\n        print(f\"PACKET FLOW: {src_ip} -> {dst_ip}:{dst_port} ({protocol})\")\r\n        print(f\"{'='*60}\")\r\n\r\n        vpc = self.vpcs.get(src_vpc)\r\n        if not vpc:\r\n            print(\"ERROR: Source VPC not found\")\r\n            return\r\n\r\n        result = vpc.longest_prefix_match(dst_ip)\r\n        if result is None:\r\n            print(\"FAIL: No route to destination (packet dropped)\")\r\n            return\r\n\r\n        target, prefix = result\r\n        print(f\"Route resolved: prefix=/{prefix}, target={target}\")\r\n\r\n        print(f\"VXLAN VNI: {self.vni_map.get(src_vpc, 'N/A')}\")\r\n        print(\"PACKET DELIVERED SUCCESSFULLY\")\r\n\r\n\r\nif __name__ == \"__main__\":\r\n    sim = VPCNetworkSimulator()\r\n    sim.create_vpc(\"vpc-12345\", \"10.0.0.0/16\")\r\n    sim.vpcs[\"vpc-12345\"].add_route(\"10.0.0.0/16\", \"local\", True)\r\n    sim.vpcs[\"vpc-12345\"].add_route(\"0.0.0.0/0\", \"igw-abc123\")\r\n    sim.vpcs[\"vpc-12345\"].add_route(\"172.16.0.0/12\", \"vpn-def456\")\r\n\r\n    sim.vpcs[\"vpc-12345\"].print_table()\r\n    sim.simulate_packet_flow(\"vpc-12345\", \"10.0.1.5\", \"8.8.8.8\", 443)\r\n    sim.simulate_packet_flow(\"vpc-12345\", \"10.0.1.5\", \"10.0.0.22\", 80)\r\n    sim.simulate_packet_flow(\"vpc-12345\", \"10.0.1.5\", \"172.16.5.10\", 22)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Route table lookup (linear)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N routes; each requires prefix match check"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Route table lookup (binary trie)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(32)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(2^N worst)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed IPv4 bit-length; each bit is a trie node"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security group rule evaluation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(K)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(K)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K rules per SG; each rule checked independently"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VXLAN encapsulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed 50-byte header prepended to packet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Longest prefix match (LPM)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Using balanced BST on prefix length"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(32) for trie-based LPM:"
      }), " IPv4 addresses are 32 bits; a binary trie traverses at most 32 nodes regardless of how many routes exist. This makes hardware routers constant-time in practice."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-of-cloud-networking",
      children: "Advantages & Disadvantages of Cloud Networking"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Provisioning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minutes vs weeks for physical gear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vendor lock-in to provider APIs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scalability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Elastic → add capacity instantly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud provider API rate limits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pay-as-you-go, no CapEx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data transfer egress charges"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reliability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-AZ, automatic failover"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared fate with provider"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider-managed physical security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared security model complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Visibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CloudTrail/VPC Flow Logs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited by provider tooling"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-in-cloud-networking",
      children: "Edge Cases in Cloud Networking"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cross-region latency"
        }), ": Packets traversing regions incur 50-200ms RTT. Use inter-region VPC peering or Transit Gateway; avoid chatty cross-region protocols."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "VPC peering limits"
        }), ": Non-transitive → VPC A to VPC B to VPC C doesn't let A reach C. You must establish full mesh or use Transit Gateway (max 5000 attachments)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DNS propagation delay"
        }), ": Route53 TTL minimum is 0 for alias records, but non-alias records have 60s TTL minimum; global propagation takes 60-300s."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Security group capacity"
        }), ": Max 60 inbound + 60 outbound rules per SG. Use prefix lists for large CIDR sets."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Jumbo frames"
        }), ": Most cloud providers limit MTU to 1500 within VPC; some support 9001 but only within the same AZ."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ephemeral IPs"
        }), ": Stopping an instance releases its public IP; elastic IPs are needed for stable addressing."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cloud-network-architecture",
      children: "Cloud Network Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TB\r\n    subgraph ONPREM[On-Premises Data Center]\r\n        direction TB\r\n        R1[Router / Firewall]\r\n        SW1[Switch]\r\n        S1[Physical Server]\r\n        S2[Physical Server]\r\n    end\r\n\r\n    subgraph CLOUD[Cloud Provider Region]\r\n        direction TB\r\n        subgraph VPC[Virtual Private Cloud - 10.0.0.0/16]\r\n            direction TB\r\n            IGW[\"Internet Gateway<br/>0.0.0.0/0\"]\r\n            NAT[\"NAT Gateway<br/>10.0.0.0/16\"]\r\n\r\n            subgraph AZ1[Availability Zone A]\r\n                direction TB\r\n                PubSub1[\"Public Subnet<br/>10.0.1.0/24\"]\r\n                ALB1[ALB - app-lb-1]\r\n                Web1[\"Web Server<br/>t3.medium\"]\r\n                PrivSub1[\"Private Subnet<br/>10.0.2.0/24\"]\r\n                App1[\"App Server<br/>t3.large\"]\r\n                DBSub1[\"DB Subnet<br/>10.0.3.0/24\"]\r\n                DB1[\"RDS Primary<br/>db.r5.xlarge\"]\r\n            end\r\n\r\n            subgraph AZ2[Availability Zone B]\r\n                direction TB\r\n                PubSub2[\"Public Subnet<br/>10.0.4.0/24\"]\r\n                ALB2[ALB - app-lb-2]\r\n                Web2[\"Web Server<br/>t3.medium\"]\r\n                PrivSub2[\"Private Subnet<br/>10.0.5.0/24\"]\r\n                App2[\"App Server<br/>t3.large\"]\r\n                DBSub2[\"DB Subnet<br/>10.0.6.0/24\"]\r\n                DB2[\"RDS Standby<br/>db.r5.xlarge\"]\r\n            end\r\n\r\n            subgraph CDN[CloudFront CDN]\r\n                Edge1[\"Edge Node<br/>us-east-1\"]\r\n                Edge2[\"Edge Node<br/>eu-west-1\"]\r\n                Edge3[\"Edge Node<br/>ap-southeast-1\"]\r\n            end\r\n\r\n            RT_Public[\"Route Table: Public\"]\r\n            RT_Private[\"Route Table: Private\"]\r\n            SGs[\"Security Groups<br/>Web/App/DB tiers\"]\r\n        end\r\n\r\n        DX[\"Direct Connect<br/>1 Gbps\"]\r\n        VPN[\"VPN Gateway<br/>IPSec Tunnel\"]\r\n        DNS[\"Route53<br/>DNS + Health Checks\"]\r\n    end\r\n\r\n    subgraph USERS[Global Users]\r\n        U1[\"User: NYC\"]\r\n        U2[\"User: London\"]\r\n        U3[\"User: Tokyo\"]\r\n    end\r\n\r\n    USERS -->|HTTPS| DNS\r\n    DNS -->|Weighted/Latency Routing| IGW\r\n    USERS -->|Static Content| CDN\r\n    CDN -->|Origin Pull| ALB1 & ALB2\r\n    IGW -->|Port 80/443| ALB1 & ALB2\r\n    ALB1 & ALB2 -->|Port 8080| App1 & App2\r\n    App1 & App2 -->|Port 3306| DB1 & DB2\r\n    Web1 & Web2 -->|Outbound| NAT\r\n    NAT --> IGW\r\n    ONPREM -->|BGP| VPN\r\n    ONPREM -->|BGP| DX\r\n    VPN & DX -->|Private IP| App1 & App2\r\n    App1 & App2 -->|Replication| DB1\r\n    DB1 -.->|Synchronous Replica| DB2\r\n\r\n    PubSub1 & PubSub2 --> RT_Public\r\n    PrivSub1 & PrivSub2 --> RT_Private\r\n    DBSub1 & DBSub2 --> RT_Private\r\n    RT_Public --> IGW\r\n    RT_Private --> NAT\r\n\r\n    classDef aws fill:#FF9900,stroke:#232F3E,color:#232F3E,stroke-width:2px\r\n    classDef onprem fill:#E0E0E0,stroke:#333,color:#333,stroke-width:2px\r\n    classDef cdn fill:#8C4FFF,stroke:#232F3E,color:#fff,stroke-width:2px\r\n    classDef user fill:#2E86C1,stroke:#1B4F72,color:#fff,stroke-width:2px\r\n    classDef subnet fill:#D5E8D4,stroke:#82B366,color:#000,stroke-width:1px\r\n    classDef tier fill:#DAE8FC,stroke:#6C8EBF,color:#000,stroke-width:1px\r\n    classDef db fill:#F8CECC,stroke:#B85450,color:#000,stroke-width:1px\r\n\r\n    class IGW,NAT,DNS,VPN,CLOUD aws\r\n    class R1,SW1,S1,S2 onprem\r\n    class Edge1,Edge2,Edge3,CDN cdn\r\n    class U1,U2,U3 user\r\n    class PubSub1,PubSub2,PrivSub1,PrivSub2,DBSub1,DBSub2 subnet\r\n    class Web1,Web2,App1,App2 tier\r\n    class DB1,DB2 db"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "162-traditional-vs-cloud-networking",
      children: "16.2 Traditional vs Cloud Networking"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Dimension"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Traditional Networking"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cloud Networking"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Provisioning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weeks-months (rack, cable, configure)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minutes (API call)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Physical routers, switches, firewalls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual appliances, SDN controllers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buy and install new hardware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API-driven elastic scaling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Isolation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VLANs (4096 limit)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VXLAN (16M VNI limit)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Routing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static routes or BGP/OSPF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Route tables, Transit Gateway"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Load balancing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware LB (F5, Netscaler)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Software LB (ALB, NLB, GLB)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Physical firewall appliance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security groups + NACLs + WAF"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Monitoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SNMP, NetFlow, manual"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CloudWatch, VPC Flow Logs, dashboards"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "High availability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Active-passive, VIP failover"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-AZ, auto-scaling, health checks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cost model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capital expense + maintenance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operational expense (pay-per-use)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Traffic inspection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TAP ports, packet brokers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mirror sessions, traffic mirroring"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Change management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Change advisory board, ticket cycles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Infrastructure-as-Code (IaC) rollouts"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Insight:"
      }), " Cloud networking trades capital expense and hardware control for operational agility and software-defined flexibility. The trade-off is acceptable for most workloads but critical for latency-sensitive or compliance-heavy environments that require dedicated hardware."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "163-vpc-and-subnets",
      children: "16.3 VPC and Subnets"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A Virtual Private Cloud (VPC) provides logically isolated network segments within a public cloud provider. The VPC is a software-defined network that gives the customer control over IP addressing, subnets, routing, and security policies."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-1",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A VPC is like a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "gated community with customizable house lots"
      }), ". The community (VPC) has a boundary fence (CIDR block). Each lot (subnet) has a designated purpose: front yards visible to the street (public subnets with Internet Gateway), and backyards only accessible from inside (private subnets). The gatehouse (NAT Gateway) lets residents go out but prevents strangers from walking in. Security guards (security groups) check IDs at every door."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vpc-setup-step-by-step",
      children: "VPC Setup: Step-by-Step"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Define IP address space"
          }), " → Choose a CIDR block (e.g., 10.0.0.0/16) that doesn't overlap with on-premises or peered VPCs."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Create subnets"
          }), " → Divide the CIDR into subnets per Availability Zone. Each subnet maps to exactly one AZ for fault isolation."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Create Internet Gateway"
          }), " → Attach an IGW to the VPC for public internet access."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Create route tables"
          }), " → Associate each subnet with a route table. Public subnets route 0.0.0.0/0 → IGW; private subnets route 0.0.0.0/0 → NAT Gateway."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Create NAT Gateway"
          }), " → Place in a public subnet so private subnets can initiate outbound connections."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Configure security groups"
          }), " → Define instance-level firewall rules for web, app, and database tiers."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Launch instances"
          }), " → Place resources into appropriate subnets and associate security groups."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1631-vpc-components",
      children: "16.3.1 VPC Components"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Subnets."
      }), " A VPC's IP address range (CIDR block, e.g., 10.0.0.0/16) is divided into subnets. Public subnets have routes to the Internet via an Internet Gateway; private subnets do not. Subnets map to availability zones for fault isolation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Route tables."
      }), " Each subnet is associated with a route table that defines destination-to-target mappings:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Destination"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Target"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10.0.0.0/16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "local"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.0.0.0/0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "igw-12345"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "172.16.0.0/12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vpn-67890"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Internet Gateway (IGW)."
      }), " An IGW provides NAT between the VPC's private IPs and the public Internet. It is horizontally scaled and highly available."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "NAT Gateway / NAT Instance."
      }), " NAT Gateways allow instances in private subnets to initiate outbound Internet connections while preventing unsolicited inbound connections."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Security Groups."
      }), " Stateful virtual firewalls that control inbound and outbound traffic at the instance level. Rules specify protocol, port, and source/destination (by CIDR or security group ID). Stateful means the return traffic is automatically allowed regardless of outbound rules."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Network ACLs."
      }), " Stateless firewall rules at the subnet level. NACLs process rules in ascending order and both inbound and outbound rules must explicitly allow traffic."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1632-vpc-peering",
      children: "16.3.2 VPC Peering"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "VPC Peering connects two VPCs using private IP addresses. Peering is not transitive: if VPC A is peered with VPC B and VPC B with VPC C, VPC A cannot reach VPC C through VPC B. Transit Gateway solves this by acting as a hub for many VPCs and on-premises networks."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-vpc-and-subnet-allocation",
      children: "Pseudocode: VPC and Subnet Allocation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE allocate_vpc_cidr(desired_size, existing_vpcs):\r\n    // Pick a non-overlapping CIDR\r\n    FOR each /16 in 10.0.0.0/8:\r\n        candidate = 10.X.0.0/16\r\n        IF candidate overlaps_with ANY existing_vpcs:\r\n            CONTINUE\r\n        RETURN candidate\r\n    RETURN \"No space in 10.0.0.0/8\"\r\nEND PROCEDURE\r\n\r\nPROCEDURE divide_subnets(vpc_cidr, num_azs):\r\n    base_prefix = prefixlen(vpc_cidr)     // e.g., /16\r\n    subnet_prefix = base_prefix + 4       // e.g., /20\r\n    subnets = []\r\n    az_index = 0\r\n\r\n    FOR each /20 block in vpc_cidr:\r\n        az = AZ_LIST[az_index % num_azs]\r\n        IF block is for public tier:\r\n            route_table = \"rtb-public\"     // 0.0.0.0/0 -> IGW\r\n            is_public = True\r\n        ELSE:\r\n            route_table = \"rtb-private\"    // 0.0.0.0/0 -> NAT\r\n            is_public = False\r\n        subnets.append({\r\n            cidr: str(block),\r\n            az: az,\r\n            route_table: route_table,\r\n            is_public: is_public\r\n        })\r\n        az_index += 1\r\n\r\n    RETURN subnets\r\nEND PROCEDURE\r\n\r\nPROCEDURE create_security_group_rules(tier):\r\n    IF tier == \"web\":\r\n        rules = [\r\n            { direction: \"inbound\", protocol: \"TCP\", port: 80,  cidr: \"0.0.0.0/0\" },\r\n            { direction: \"inbound\", protocol: \"TCP\", port: 443, cidr: \"0.0.0.0/0\" },\r\n            { direction: \"outbound\", protocol: \"ALL\", cidr: \"0.0.0.0/0\" }\r\n        ]\r\n    ELSE IF tier == \"app\":\r\n        rules = [\r\n            { direction: \"inbound\", protocol: \"TCP\", port: 8080, sg_source: \"sg-web\" },\r\n            { direction: \"outbound\", protocol: \"ALL\", cidr: \"0.0.0.0/0\" }\r\n        ]\r\n    ELSE IF tier == \"db\":\r\n        rules = [\r\n            { direction: \"inbound\", protocol: \"TCP\", port: 3306, sg_source: \"sg-app\" }\r\n        ]\r\n    RETURN rules\r\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace-vpc-with-multi-az-subnets",
      children: "Dry Run Trace: VPC with Multi-AZ Subnets"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "VPC:"
      }), " 10.0.0.0/16 | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "AZs:"
      }), " us-east-1a, us-east-1b"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Subnet Allocation:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Subnet Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CIDR"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "AZ"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Route Table"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "web-a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10.0.0.0/20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "us-east-1a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "rtb-web-public"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Public"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "web-b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10.0.16.0/20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "us-east-1b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "rtb-web-public"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Public"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "app-a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10.0.32.0/20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "us-east-1a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "rtb-app-private"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Private"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "app-b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10.0.48.0/20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "us-east-1b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "rtb-app-private"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Private"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "db-a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10.0.64.0/20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "us-east-1a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "rtb-db-private"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Private"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "db-b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10.0.80.0/20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "us-east-1b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "rtb-db-private"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Private"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Packet Trace: User request to web tier"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Route53"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Resolves ", (0,jsx_runtime.jsx)(_components.a, {
              href: "http://www.example.com",
              children: "www.example.com"
            }), " → ALB DNS name"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ALB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receives request on 10.0.0.10:443"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ALB route table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Matches 10.0.0.0/20 → local (web-a subnet)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security Group (web)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inbound rule allows TCP/443 from 0.0.0.0/0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ALB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Selects target in app-a via round-robin"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ALB → app route"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Crosses to 10.0.32.0/20 via VPC internal routing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security Group (app)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inbound rule allows TCP/8080 from sg-web"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "App instance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Processes request, queries DB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "App → DB route"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10.0.64.0/20 via VPC internal routing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security Group (db)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inbound rule allows TCP/3306 from sg-app"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation-vpc-subnet-allocator",
      children: "C++ Implementation: VPC Subnet Allocator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\n#include <vector>\r\n#include <string>\r\n#include <cstdint>\r\n#include <sstream>\r\n#include <iomanip>\r\n\r\nstruct Subnet {\r\n    std::string cidr;\r\n    std::string az;\r\n    std::string route_table;\r\n    bool is_public;\r\n    std::string tier;\r\n};\r\n\r\nuint32_t ip_to_uint(const std::string& ip) {\r\n    std::stringstream s(ip);\r\n    int a, b, c, d; char ch;\r\n    s >> a >> ch >> b >> ch >> c >> ch >> d;\r\n    return (a << 24) | (b << 16) | (c << 8) | d;\r\n}\r\n\r\nstd::string uint_to_ip(uint32_t ip) {\r\n    return std::to_string((ip >> 24) & 0xFF) + \".\" +\r\n           std::to_string((ip >> 16) & 0xFF) + \".\" +\r\n           std::to_string((ip >> 8) & 0xFF) + \".\" +\r\n           std::to_string(ip & 0xFF);\r\n}\r\n\r\nint popcount(uint32_t x) {\r\n    int c = 0;\r\n    while (x) { c += x & 1; x >>= 1; }\r\n    return c;\r\n}\r\n\r\nclass VPCAllocator {\r\nprivate:\r\n    std::vector<Subnet> subnets;\r\n    std::string vpc_cidr;\r\n    std::vector<std::string> azs;\r\n\r\npublic:\r\n    VPCAllocator(const std::string& vpc, const std::vector<std::string>& availability_zones)\r\n        : vpc_cidr(vpc), azs(availability_zones) {}\r\n\r\n    void allocate_subnets(const std::vector<std::string>& tiers, int subnet_size_shift) {\r\n        size_t slash = vpc_cidr.find('/');\r\n        std::string ip_part = vpc_cidr.substr(0, slash);\r\n        int vpc_prefix = std::stoi(vpc_cidr.substr(slash + 1));\r\n        uint32_t base_ip = ip_to_uint(ip_part);\r\n        int subnet_prefix = vpc_prefix + subnet_size_shift;\r\n        int num_subnets = (1 << subnet_size_shift);\r\n\r\n        for (int i = 0; i < num_subnets && i < (int)tiers.size() * (int)azs.size(); i++) {\r\n            int tier_idx = i % tiers.size();\r\n            int az_idx = (i / tiers.size()) % azs.size();\r\n            uint32_t subnet_ip = base_ip + (i * (1 << (32 - subnet_prefix)));\r\n            std::string cidr = uint_to_ip(subnet_ip) + \"/\" + std::to_string(subnet_prefix);\r\n            std::string tier = tiers[tier_idx];\r\n            bool is_public = (tier == \"web\");\r\n\r\n            Subnet s;\r\n            s.cidr = cidr;\r\n            s.az = azs[az_idx];\r\n            s.tier = tier;\r\n            s.is_public = is_public;\r\n            s.route_table = is_public ? \"rtb-public\" : \"rtb-\" + tier + \"-private\";\r\n            subnets.push_back(s);\r\n        }\r\n    }\r\n\r\n    void print_allocation() {\r\n        std::cout << \"\\nVPC: \" << vpc_cidr << \"\\n\";\r\n        std::cout << std::left << std::setw(20) << \"Subnet\" << std::setw(12) << \"AZ\"\r\n                  << std::setw(20) << \"Route Table\" << std::setw(8) << \"Type\" << \"Tier\\n\";\r\n        std::cout << std::string(75, '-') << \"\\n\";\r\n        for (const auto& s : subnets) {\r\n            std::cout << std::left << std::setw(20) << s.cidr << std::setw(12) << s.az\r\n                      << std::setw(20) << s.route_table\r\n                      << std::setw(8) << (s.is_public ? \"Public\" : \"Private\") << s.tier << \"\\n\";\r\n        }\r\n    }\r\n\r\n    std::vector<Subnet> get_subnets() const { return subnets; }\r\n};\r\n\r\nint main() {\r\n    VPCAllocator vpc(\"10.0.0.0/16\", {\"us-east-1a\", \"us-east-1b\"});\r\n    vpc.allocate_subnets({\"web\", \"app\", \"db\"}, 4);\r\n    vpc.print_allocation();\r\n\r\n    return 0;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-vpc-subnet-planner",
      children: "Python Implementation: VPC Subnet Planner"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import ipaddress\r\nfrom dataclasses import dataclass\r\nfrom typing import Optional\r\n\r\n\r\n@dataclass\r\nclass SubnetPlan:\r\n    cidr: str\r\n    az: str\r\n    route_table: str\r\n    is_public: bool\r\n    tier: str\r\n\r\n\r\nclass VPCSubnetPlanner:\r\n    def __init__(self, vpc_cidr: str, availability_zones: list[str]):\r\n        self.vpc_network = ipaddress.IPv4Network(vpc_cidr, strict=False)\r\n        self.azs = availability_zones\r\n        self.subnets: list[SubnetPlan] = []\r\n\r\n    def allocate_subnets(self, tiers: list[str], subnet_prefix: int):\r\n        base_ip = int(self.vpc_network.network_address)\r\n        vpc_prefix = self.vpc_network.prefixlen\r\n        num_subnets = 2 ** (subnet_prefix - vpc_prefix)\r\n\r\n        for i in range(min(num_subnets, len(tiers) * len(self.azs))):\r\n            tier_idx = i % len(tiers)\r\n            az_idx = (i // len(tiers)) % len(self.azs)\r\n            subnet_ip = base_ip + (i * (1 << (32 - subnet_prefix)))\r\n            cidr = f\"{ipaddress.IPv4Address(subnet_ip)}/{subnet_prefix}\"\r\n            tier = tiers[tier_idx]\r\n            is_public = (tier in (\"web\", \"public\"))\r\n\r\n            route_table = \"rtb-public\" if is_public else f\"rtb-{tier}-private\"\r\n            self.subnets.append(SubnetPlan(\r\n                cidr=cidr,\r\n                az=self.azs[az_idx],\r\n                route_table=route_table,\r\n                is_public=is_public,\r\n                tier=tier\r\n            ))\r\n\r\n    def find_subnet_for_ip(self, ip_str: str) -> Optional[SubnetPlan]:\r\n        ip = ipaddress.IPv4Address(ip_str)\r\n        for subnet in self.subnets:\r\n            if ip in ipaddress.IPv4Network(subnet.cidr):\r\n                return subnet\r\n        return None\r\n\r\n    def print_allocation(self):\r\n        print(f\"VPC: {self.vpc_network}\")\r\n        print(f\"{'Subnet':<20} {'AZ':<12} {'Route Table':<20} {'Type':<8} Tier\")\r\n        print(\"-\" * 75)\r\n        for s in self.subnets:\r\n            print(f\"{s.cidr:<20} {s.az:<12} {s.route_table:<20} \"\r\n                  f\"{'Public' if s.is_public else 'Private':<8} {s.tier}\")\r\n\r\n\r\nplanner = VPCSubnetPlanner(\"10.0.0.0/16\", [\"us-east-1a\", \"us-east-1b\"])\r\nplanner.allocate_subnets([\"web\", \"app\", \"db\"], 20)\r\nplanner.print_allocation()\r\n\r\nsubnet = planner.find_subnet_for_ip(\"10.0.48.15\")\r\nif subnet:\r\n    print(f\"\\n10.0.48.15 belongs to: {subnet.tier} tier in {subnet.az}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-1",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Subnet allocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N = number of subnets; single pass to build"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IP-to-subnet lookup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear scan of subnet list; trie improves to O(32)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Route propagation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(R log R)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(R)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BGP route processing with prefix optimization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security group eval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(K)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(K)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K rules per group; each checked sequentially"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-of-vpc",
      children: "Advantages & Disadvantages of VPC"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Isolation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complete network isolation via VXLAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overlapping CIDRs can't be peered"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full control over IPs, routes, firewalls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex to manage at scale"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scalability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Works for 1 or 1000s of instances"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VPC per-account limits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Connectivity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Peering, VPN, Direct Connect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Peering is non-transitive"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-in-vpc",
      children: "Edge Cases in VPC"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CIDR overlap"
        }), ": Two VPCs with overlapping CIDRs cannot be peered. Choose non-overlapping ranges (e.g., 10.0.0.0/16 for prod, 10.1.0.0/16 for dev)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reserved IPs"
        }), ": AWS reserves 5 IPs per subnet (network, gateway, +2 reserved, broadcast). Always account for 5 unavailable addresses."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Subnet sizing"
        }), ": /28 (11 usable IPs) is minimum; /16 (65531 usable) is maximum. Size for future growth → expanding a subnet's CIDR is not possible after creation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transitive routing"
        }), ": VPC Peering is not transitive. Hub-and-spoke requires Transit Gateway (costs money per attachment)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cross-region peering"
        }), ": Adds $0.01-0.02/GB data transfer cost. Minimize cross-region traffic for chatty protocols."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "TypeScript Implementation: VPCNetworkDesigner"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface SubnetConfig {\r\n  name: string;\r\n  cidr: string;\r\n  az: string;\r\n  tier: 'public' | 'private' | 'isolated';\r\n}\r\n\r\ninterface RouteTableEntry {\r\n  destination: string;\r\n  target: string;\r\n  description: string;\r\n}\r\n\r\ninterface SecurityGroupRule {\r\n  direction: 'inbound' | 'outbound';\r\n  protocol: string;\r\n  port: number;\r\n  source: string; // CIDR or security group ID\r\n}\r\n\r\nclass VPCNetworkDesigner {\r\n  private vpcCidr: string;\r\n  private subnets: SubnetConfig[] = [];\r\n  private routeTables: Map<string, RouteTableEntry[]> = new Map();\r\n  private securityGroupRules: Map<string, SecurityGroupRule[]> = new Map();\r\n\r\n  constructor(vpcCidr: string) {\r\n    this.vpcCidr = vpcCidr;\r\n  }\r\n\r\n  // Calculate subnet CIDRs given a VPC CIDR, number of subnets, and tier names\r\n  static calculateSubnetCidrs(\r\n    vpcCidr: string,\r\n    tierNames: string[],\r\n    azCount: number,\r\n    subnetPrefix: number\r\n  ): SubnetConfig[] {\r\n    const [baseIp, existingPrefix] = vpcCidr.split('/');\r\n    const basePrefix = parseInt(existingPrefix);\r\n    const numSubnets = tierNames.length * azCount;\r\n    const subnetSize = Math.pow(2, 32 - subnetPrefix);\r\n    const vpcSize = Math.pow(2, 32 - basePrefix);\r\n\r\n    if (numSubnets * subnetSize > vpcSize) {\r\n      throw new Error('Subnet size exceeds VPC CIDR capacity');\r\n    }\r\n\r\n    const subnets: SubnetConfig[] = [];\r\n    const ipParts = baseIp.split('.').map(Number);\r\n    const baseIPnum = (ipParts[0] << 24) | (ipParts[1] << 16) | (ipParts[2] << 8) | ipParts[3];\r\n\r\n    const azs = Array.from({ length: azCount }, (_, i) => `us-east-1${String.fromCharCode(97 + i)}`);\r\n\r\n    let index = 0;\r\n    for (let azIdx = 0; azIdx < azCount; azIdx++) {\r\n      for (let tierIdx = 0; tierIdx < tierNames.length; tierIdx++) {\r\n        const subnetIPnum = baseIPnum + index * subnetSize;\r\n        const cidr = `${(subnetIPnum >>> 24) & 0xFF}.${(subnetIPnum >>> 16) & 0xFF}.${(subnetIPnum >>> 8) & 0xFF}.${subnetIPnum & 0xFF}/${subnetPrefix}`;\r\n        const tier = tierNames[tierIdx];\r\n        subnets.push({\r\n          name: `${tier}-${azs[azIdx]}`,\r\n          cidr,\r\n          az: azs[azIdx],\r\n          tier: tier === 'web' ? 'public' : 'private'\r\n        });\r\n        index++;\r\n      }\r\n    }\r\n    return subnets;\r\n  }\r\n\r\n  addSubnet(subnet: SubnetConfig): void {\r\n    this.subnets.push(subnet);\r\n  }\r\n\r\n  addRouteTableEntry(subnetName: string, entry: RouteTableEntry): void {\r\n    if (!this.routeTables.has(subnetName)) {\r\n      this.routeTables.set(subnetName, []);\r\n    }\r\n    this.routeTables.get(subnetName)!.push(entry);\r\n  }\r\n\r\n  addSecurityGroupRule(sgName: string, rule: SecurityGroupRule): void {\r\n    if (!this.securityGroupRules.has(sgName)) {\r\n      this.securityGroupRules.set(sgName, []);\r\n    }\r\n    this.securityGroupRules.get(sgName)!.push(rule);\r\n  }\r\n\r\n  // NAT Gateway vs Internet Gateway selection based on tier\r\n  configureGateways(): void {\r\n    for (const subnet of this.subnets) {\r\n      if (subnet.tier === 'public') {\r\n        this.addRouteTableEntry(subnet.name, {\r\n          destination: '0.0.0.0/0',\r\n          target: 'igw-12345',\r\n          description: 'Internet Gateway for public subnet'\r\n        });\r\n      } else if (subnet.tier === 'private') {\r\n        this.addRouteTableEntry(subnet.name, {\r\n          destination: '0.0.0.0/0',\r\n          target: 'natgw-67890',\r\n          description: 'NAT Gateway for private subnet outbound'\r\n        });\r\n      }\r\n      this.addRouteTableEntry(subnet.name, {\r\n        destination: this.vpcCidr,\r\n        target: 'local',\r\n        description: 'Local VPC routing'\r\n      });\r\n    }\r\n  }\r\n\r\n  printDesign(): void {\r\n    console.log(`VPC CIDR: ${this.vpcCidr}`);\r\n    console.log('\\n--- Subnets ---');\r\n    console.log(`${'Name':<20} ${'CIDR':<20} ${'AZ':<15} ${'Tier'}`);\r\n    console.log('-'.repeat(60));\r\n    for (const s of this.subnets) {\r\n      console.log(`${s.name.padEnd(20)} ${s.cidr.padEnd(20)} ${s.az.padEnd(15)} ${s.tier}`);\r\n    }\r\n\r\n    console.log('\\n--- Route Tables ---');\r\n    for (const [subnet, entries] of this.routeTables) {\r\n      console.log(`\\nRoute Table: ${subnet}`);\r\n      for (const e of entries) {\r\n        console.log(`  ${e.destination.padEnd(20)} → ${e.target.padEnd(20)} (${e.description})`);\r\n      }\r\n    }\r\n\r\n    console.log('\\n--- Security Groups ---');\r\n    for (const [sg, rules] of this.securityGroupRules) {\r\n      console.log(`\\nSecurity Group: ${sg}`);\r\n      for (const r of rules) {\r\n        console.log(`  ${r.direction.padEnd(10)} ${r.protocol.padEnd(8)} ${String(r.port).padEnd(8)} → ${r.source}`);\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n// Usage example\r\nfunction demoVPCDesign() {\r\n  // Calculate subnet CIDRs for a /16 VPC with 3 tiers × 2 AZs, each /20\r\n  const subnets = VPCNetworkDesigner.calculateSubnetCidrs('10.0.0.0/16', ['web', 'app', 'db'], 2, 20);\r\n  console.log('Generated Subnet CIDRs:');\r\n  for (const s of subnets) {\r\n    console.log(`  ${s.name.padEnd(15)} ${s.cidr.padEnd(18)} AZ: ${s.az.padEnd(12)} Tier: ${s.tier}`);\r\n  }\r\n  // Output:\r\n  // Generated Subnet CIDRs:\r\n  //   web-us-east-1a  10.0.0.0/20   AZ: us-east-1a  Tier: public\r\n  //   app-us-east-1a  10.0.16.0/20  AZ: us-east-1a  Tier: private\r\n  //   db-us-east-1a   10.0.32.0/20  AZ: us-east-1a  Tier: private\r\n  //   web-us-east-1b  10.0.48.0/20  AZ: us-east-1b  Tier: public\r\n  //   app-us-east-1b  10.0.64.0/20  AZ: us-east-1b  Tier: private\r\n  //   db-us-east-1b   10.0.80.0/20  AZ: us-east-1b  Tier: private\r\n\r\n  const designer = new VPCNetworkDesigner('10.0.0.0/16');\r\n  for (const s of subnets) designer.addSubnet(s);\r\n  designer.configureGateways();\r\n\r\n  // Web tier: HTTP/HTTPS from anywhere\r\n  designer.addSecurityGroupRule('sg-web', { direction: 'inbound', protocol: 'TCP', port: 443, source: '0.0.0.0/0' });\r\n  designer.addSecurityGroupRule('sg-web', { direction: 'inbound', protocol: 'TCP', port: 80, source: '0.0.0.0/0' });\r\n\r\n  // App tier: traffic from web SG only\r\n  designer.addSecurityGroupRule('sg-app', { direction: 'inbound', protocol: 'TCP', port: 8080, source: 'sg-web' });\r\n\r\n  // DB tier: traffic from app SG only\r\n  designer.addSecurityGroupRule('sg-db', { direction: 'inbound', protocol: 'TCP', port: 3306, source: 'sg-app' });\r\n\r\n  designer.printDesign();\r\n}\r\n\r\ndemoVPCDesign();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "164-cloud-security-groups",
      children: "16.4 Cloud Security Groups"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-2",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Security groups are like ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "VIP club door policies"
      }), ". Each club section (EC2 instance) has a bouncer (hypervisor firewall) that checks a guest list (security group rules). If your name is on the list, you enter freely. Once inside, you can move around without being checked again (stateful). If you leave and come back, you show ID again. NACLs, by contrast, are like metal detectors at the building entrance → every person is checked in both directions, and the rules are processed in order."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-security-groups-work-step-by-step",
      children: "How Security Groups Work: Step-by-Step"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Rule creation"
          }), " → You define inbound rules (source, protocol, port) and outbound rules (destination, protocol, port)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Attachment"
          }), " → The security group is attached to an Elastic Network Interface (ENI), not an instance directly."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "State tracking"
          }), " → The hypervisor creates a connection tracking entry when outbound traffic is sent. Return traffic matches the tracking entry and is allowed regardless of inbound rules."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Rule evaluation"
          }), " → All rules are evaluated in parallel (not in order). If any rule matches, traffic is allowed."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Default deny"
          }), " → Traffic that doesn't match any rule is implicitly denied. There is no explicit deny rule."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-security-group-evaluation",
      children: "Pseudocode: Security Group Evaluation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE evaluate_security_group(packet, sg_rules, connection_tracking):\r\n    // Step 1: Check connection tracking for existing flows\r\n    flow_key = hash(packet.src_ip, packet.dst_ip, packet.src_port,\r\n                    packet.dst_port, packet.protocol)\r\n\r\n    IF connection_tracking.contains(flow_key):\r\n        ALLOW  // Return traffic for established connections\r\n        RETURN\r\n\r\n    // Step 2: Determine direction\r\n    IF packet.direction == \"INBOUND\":\r\n        matching_rules = sg_rules.inbound\r\n    ELSE:\r\n        matching_rules = sg_rules.outbound\r\n\r\n    // Step 3: Evaluate all rules (parallel - any match = allow)\r\n    FOR each rule in matching_rules:\r\n        IF rule.protocol == \"ALL\" OR rule.protocol == packet.protocol:\r\n            IF rule.port == \"ALL\" OR rule.port == packet.dst_port:\r\n                IF ip_in_cidr(packet.src_ip, rule.cidr) OR\r\n                   sg_matches(rule.sg_source, packet.src_sg):\r\n                    connection_tracking.add(flow_key)\r\n                    ALLOW\r\n                    RETURN\r\n\r\n    // Step 4: No rule matched\r\n    DENY\r\n    LOG \"Security group \" + sg_rules.id + \" denied \" + packet.summary()\r\n    RETURN\r\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace-security-group-evaluation",
      children: "Dry Run Trace: Security Group Evaluation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security Group sg-web:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Rule"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Direction"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Protocol"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Port"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Source"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inbound"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "443"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.0.0.0/0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inbound"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.0.0.0/0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inbound"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10.0.0.0/16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Outbound"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ALL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ALL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.0.0.0/0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allow (default)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace: SSH from 203.0.113.5"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Check"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connection tracking lookup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No existing flow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direction = inbound"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluates inbound rules"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rule 1: TCP/443 from 0.0.0.0/0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Port 22 ≠ 443"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rule 2: TCP/80 from 0.0.0.0/0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Port 22 ≠ 80"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rule 3: TCP/22 from 10.0.0.0/16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "203.0.113.5 not in 10.0.0.0/16"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No rules matched"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DENY"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace: SSH from 10.0.1.5"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Check"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connection tracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No existing flow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direction = inbound"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluates inbound rules"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rule 1: TCP/443"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Port mismatch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rule 2: TCP/80"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Port mismatch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rule 3: TCP/22 from 10.0.0.0/16"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["10.0.1.5 in 10.0.0.0/16 → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALLOW"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connection tracking creates flow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Future return traffic auto-allowed"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation-security-group-evaluator",
      children: "C++ Implementation: Security Group Evaluator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\n#include <vector>\r\n#include <string>\r\n#include <cstdint>\r\n#include <unordered_map>\r\n#include <sstream>\r\n#include <iomanip>\r\n\r\nstruct SGRule {\r\n    bool is_inbound;\r\n    std::string protocol;\r\n    int port;\r\n    uint32_t cidr_network;\r\n    uint32_t cidr_mask;\r\n    bool cidr_all;\r\n};\r\n\r\nstruct FlowKey {\r\n    uint32_t src_ip, dst_ip;\r\n    int src_port, dst_port;\r\n    std::string protocol;\r\n\r\n    bool operator==(const FlowKey& o) const {\r\n        return src_ip == o.src_ip && dst_ip == o.dst_ip &&\r\n               src_port == o.src_port && dst_port == o.dst_port &&\r\n               protocol == o.protocol;\r\n    }\r\n};\r\n\r\nstruct FlowKeyHash {\r\n    size_t operator()(const FlowKey& k) const {\r\n        return std::hash<uint32_t>{}(k.src_ip) ^\r\n               std::hash<uint32_t>{}(k.dst_ip) ^\r\n               std::hash<int>{}(k.src_port) ^\r\n               std::hash<int>{}(k.dst_port);\r\n    }\r\n};\r\n\r\nuint32_t ip_to_uint(const std::string& ip) {\r\n    std::stringstream s(ip);\r\n    int a, b, c, d; char ch;\r\n    s >> a >> ch >> b >> ch >> c >> ch >> d;\r\n    return (a << 24) | (b << 16) | (c << 8) | d;\r\n}\r\n\r\nclass SecurityGroup {\r\nprivate:\r\n    std::vector<SGRule> rules;\r\n    std::string sg_id;\r\n    std::unordered_map<FlowKey, bool, FlowKeyHash> connection_tracking;\r\n\r\npublic:\r\n    SecurityGroup(const std::string& id) : sg_id(id) {}\r\n\r\n    void add_rule(bool inbound, const std::string& proto, int port,\r\n                  const std::string& cidr) {\r\n        SGRule r;\r\n        r.is_inbound = inbound;\r\n        r.protocol = proto;\r\n        r.port = port;\r\n        if (cidr == \"0.0.0.0/0\") {\r\n            r.cidr_all = true;\r\n            r.cidr_network = 0;\r\n            r.cidr_mask = 0;\r\n        } else {\r\n            r.cidr_all = false;\r\n            size_t slash = cidr.find('/');\r\n            std::string ip_part = cidr.substr(0, slash);\r\n            int prefix = std::stoi(cidr.substr(slash + 1));\r\n            r.cidr_network = ip_to_uint(ip_part);\r\n            r.cidr_mask = (prefix == 0) ? 0 : (0xFFFFFFFF << (32 - prefix));\r\n        }\r\n        rules.push_back(r);\r\n    }\r\n\r\n    bool evaluate(const std::string& src_ip, const std::string& dst_ip,\r\n                  int src_port, int dst_port, const std::string& protocol,\r\n                  bool inbound) {\r\n        FlowKey fk{ip_to_uint(src_ip), ip_to_uint(dst_ip), src_port, dst_port, protocol};\r\n\r\n        if (connection_tracking.find(fk) != connection_tracking.end()) {\r\n            std::cout << \"  [Tracking hit] Flow exists → auto-allow return\\n\";\r\n            return true;\r\n        }\r\n\r\n        uint32_t src = ip_to_uint(src_ip);\r\n        for (const auto& r : rules) {\r\n            if (r.is_inbound != inbound) continue;\r\n            if (r.protocol != \"ALL\" && r.protocol != protocol) continue;\r\n            if (r.port != 0 && r.port != dst_port) continue;\r\n            if (!r.cidr_all) {\r\n                if ((src & r.cidr_mask) != (r.cidr_network & r.cidr_mask)) continue;\r\n            }\r\n            connection_tracking[fk] = true;\r\n            return true;\r\n        }\r\n        return false;\r\n    }\r\n\r\n    void simulate_traffic(const std::string& src_ip, const std::string& dst_ip,\r\n                          int src_port, int dst_port, const std::string& protocol,\r\n                          bool inbound) {\r\n        bool allowed = evaluate(src_ip, dst_ip, src_port, dst_port, protocol, inbound);\r\n        std::cout << (inbound ? \"INBOUND\" : \"OUTBOUND\") << \" \"\r\n                  << src_ip << \":\" << src_port << \" → \"\r\n                  << dst_ip << \":\" << dst_port << \" \"\r\n                  << protocol << \" → \"\r\n                  << (allowed ? \"ALLOW\" : \"DENY\") << \"\\n\";\r\n    }\r\n};\r\n\r\nint main() {\r\n    SecurityGroup sg(\"sg-web\");\r\n\r\n    sg.add_rule(true, \"TCP\", 443, \"0.0.0.0/0\");\r\n    sg.add_rule(true, \"TCP\", 80, \"0.0.0.0/0\");\r\n    sg.add_rule(true, \"TCP\", 22, \"10.0.0.0/16\");\r\n\r\n    std::cout << \"Security Group: \" << \"sg-web\" << \"\\n\";\r\n    std::cout << \"Rules: TCP/443 from anywhere, TCP/80 from anywhere, TCP/22 from 10.0.0.0/16\\n\\n\";\r\n\r\n    sg.simulate_traffic(\"203.0.113.5\", \"10.0.1.10\", 50000, 22, \"TCP\", true);\r\n    sg.simulate_traffic(\"10.0.1.5\", \"10.0.1.10\", 40000, 22, \"TCP\", true);\r\n    sg.simulate_traffic(\"10.0.1.10\", \"203.0.113.5\", 22, 50000, \"TCP\", false);\r\n    sg.simulate_traffic(\"192.168.1.1\", \"10.0.1.10\", 30000, 443, \"TCP\", true);\r\n\r\n    return 0;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-security-group-simulator",
      children: "Python Implementation: Security Group Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import ipaddress\r\nfrom dataclasses import dataclass\r\nfrom typing import Optional\r\n\r\n\r\n@dataclass\r\nclass SGRule:\r\n    direction: str\r\n    protocol: str\r\n    port: Optional[int]\r\n    cidr: Optional[str]\r\n    sg_source: Optional[str] = None\r\n\r\n\r\nclass SecurityGroup:\r\n    def __init__(self, sg_id: str):\r\n        self.sg_id = sg_id\r\n        self.rules: list[SGRule] = []\r\n        self.connections: set[tuple] = set()\r\n\r\n    def add_rule(self, direction: str, protocol: str, port: Optional[int],\r\n                 cidr: Optional[str] = None, sg_source: Optional[str] = None):\r\n        self.rules.append(SGRule(\r\n            direction=direction, protocol=protocol,\r\n            port=port, cidr=cidr, sg_source=sg_source\r\n        ))\r\n\r\n    def evaluate(self, src_ip: str, dst_port: int, protocol: str,\r\n                 direction: str, src_sg_id: Optional[str] = None) -> bool:\r\n        flow_key = (src_ip, dst_port, protocol, direction)\r\n        if flow_key in self.connections:\r\n            return True\r\n\r\n        for rule in self.rules:\r\n            if rule.direction != direction:\r\n                continue\r\n            if rule.protocol not in (\"ALL\", protocol):\r\n                continue\r\n            if rule.port is not None and rule.port != dst_port:\r\n                continue\r\n            if rule.cidr is not None:\r\n                src = ipaddress.IPv4Address(src_ip)\r\n                if src not in ipaddress.IPv4Network(rule.cidr):\r\n                    continue\r\n            if rule.sg_source is not None and src_sg_id != rule.sg_source:\r\n                continue\r\n            self.connections.add(flow_key)\r\n            return True\r\n        return False\r\n\r\n    def simulate(self, src_ip: str, dst_port: int, protocol: str,\r\n                 direction: str, label: str = \"\"):\r\n        allowed = self.evaluate(src_ip, dst_port, protocol, direction)\r\n        tag = f\"[{label}] \" if label else \"\"\r\n        status = \"ALLOW\" if allowed else \"DENY\"\r\n        print(f\"{tag}{direction} {src_ip} → port {dst_port}/{protocol} → {status}\")\r\n\r\n\r\n# Simulate a multi-tier application\r\nsg_web = SecurityGroup(\"sg-web\")\r\nsg_web.add_rule(\"inbound\", \"TCP\", 443, \"0.0.0.0/0\")\r\nsg_web.add_rule(\"inbound\", \"TCP\", 80, \"0.0.0.0/0\")\r\nsg_web.add_rule(\"inbound\", \"TCP\", 22, \"10.0.0.0/16\")\r\n\r\nsg_app = SecurityGroup(\"sg-app\")\r\nsg_app.add_rule(\"inbound\", \"TCP\", 8080, sg_source=\"sg-web\")\r\n\r\nsg_db = SecurityGroup(\"sg-db\")\r\nsg_db.add_rule(\"inbound\", \"TCP\", 3306, sg_source=\"sg-app\")\r\n\r\nprint(\"=== Security Group Simulation ===\")\r\nsg_web.simulate(\"203.0.113.5\", 22, \"TCP\", \"inbound\", \"Internet→web:SSH\")\r\nsg_web.simulate(\"10.0.1.5\", 22, \"TCP\", \"inbound\", \"VPC-internal→web:SSH\")\r\nsg_app.simulate(\"10.0.0.10\", 8080, \"TCP\", \"inbound\", \"web→app:HTTP\")\r\nsg_db.simulate(\"10.0.32.10\", 3306, \"TCP\", \"inbound\", \"app→db:MySQL\")\r\nsg_db.simulate(\"10.0.1.5\", 3306, \"TCP\", \"inbound\", \"web→db:MySQL (should DENY)\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-2",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rule evaluation (linear)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(K)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(K)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K rules; each checked until first match"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rule evaluation (parallel)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) hardware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(K)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud hypervisors evaluate rules in parallel ASICs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Connection tracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) average"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N flows)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash table lookup; bounded by flow table size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SG attachment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(E)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "E = number of ENIs; each ENI stores SG pointer"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-of-security-groups",
      children: "Advantages & Disadvantages of Security Groups"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Statefulness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return traffic auto-allowed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot explicitly deny traffic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rule evaluation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All rules evaluated (no ordering)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No rule precedence control"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flexibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reference other SGs as sources"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Max 60 rules per SG"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Attachment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple SGs per ENI (up to 16)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex troubleshooting with many SGs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-for-security-groups",
      children: "Edge Cases for Security Groups"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Self-referencing rules"
        }), ": A SG can reference itself as source (", (0,jsx_runtime.jsx)(_components.code, {
          children: "sg-xxxxx"
        }), " as source). This allows instances within the same SG to communicate freely → useful for auto-scaling groups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ephemeral ports"
        }), ": For outbound connections to the internet, you must allow outbound ephemeral ports (1024-65535). AWS SG default outbound rule allows all traffic, but custom SGs may break outbound connectivity."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SG limits"
        }), ": Default limit of 60 inbound + 60 outbound rules per SG (500 with quota increase). Use prefix lists for CIDR collections."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Delay in propagation"
        }), ": SG rule changes take 2-10 seconds to propagate to all hypervisor hosts. Don't assume instant effect in automated testing."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "165-load-balancers",
      children: "16.5 Load Balancers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Load balancers distribute incoming traffic across multiple targets (EC2 instances, containers, Lambda functions) for fault tolerance and scalability."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-3",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A load balancer is like a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "hotel front desk with multiple check-in agents"
      }), ". Guests (requests) arrive at the front desk (load balancer DNS). The concierge (load balancing algorithm) directs each guest to the shortest line (least connections) or rotates between agents (round-robin). If an agent is on break (unhealthy target), the concierge skips them. VIP guests (sticky sessions) are always directed to the same agent."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1651-application-load-balancer",
      children: "16.5.1 Application Load Balancer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ALB operates at Layer 7 (HTTP/HTTPS). Features:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Path-based routing: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/api/*"
        }), " → target group A, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/static/*"
        }), " → target group B."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Host-based routing: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "api.example.com"
        }), " → target group A, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "www.example.com"
        }), " → target group B."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SNI support: multiple TLS certificates per listener."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "WebSocket and HTTP/2 support."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sticky sessions (cookie-based or duration-based)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Request tracing with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "X-Amzn-Trace-Id"
        }), " headers."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1652-network-load-balancer",
      children: "16.5.2 Network Load Balancer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NLB operates at Layer 4 (TCP/UDP). Features:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ultra-low latency (100-microsecond range)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Static IP addresses per availability zone."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TLS termination at scale."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Preservation of client IP addresses."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UDP and TCP traffic."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NLB is suitable for performance-critical applications and protocols that require direct client IP visibility."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1653-gateway-load-balancer",
      children: "16.5.3 Gateway Load Balancer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GLB operates at Layer 3 (IP) and is designed for deploying virtual appliances (firewalls, IDS/IPS, traffic analyzers). Features:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transparent inspection → traffic passes through appliances without changing the destination IP."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GENEVE encapsulation for appliance communication."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scaling of third-party virtual appliances."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Symmetric traffic routing (return traffic through the same appliance)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1654-classic-load-balancer",
      children: "16.5.4 Classic Load Balancer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CLB is the legacy load balancer supporting both Layer 4 and basic Layer 7 features. It is less flexible than ALB/NLB and is not recommended for new deployments."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1655-health-checks",
      children: "16.5.5 Health Checks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Load balancers periodically send health check requests to targets. A target is considered healthy if it responds with a success status code within the timeout. Targets failing health checks are removed from rotation; they rejoin when health checks succeed again."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-load-balancer-request-dispatch",
      children: "Pseudocode: Load Balancer Request Dispatch"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE dispatch_request(request, target_group, algorithm):\r\n    healthy_targets = [t for t in target_group if t.healthy]\r\n\r\n    IF healthy_targets is EMPTY:\r\n        RETURN 503 Service Unavailable\r\n\r\n    IF algorithm == \"ROUND_ROBIN\":\r\n        target = healthy_targets[rr_index % len(healthy_targets)]\r\n        rr_index += 1\r\n\r\n    ELSE IF algorithm == \"LEAST_CONNECTIONS\":\r\n        target = argmin(healthy_targets, key=lambda t: t.active_connections)\r\n        target.active_connections += 1\r\n\r\n    ELSE IF algorithm == \"LEAST_RESPONSE_TIME\":\r\n        target = argmin(healthy_targets, key=lambda t: t.moving_avg_response_time)\r\n\r\n    ELSE IF algorithm == \"IP_HASH\":\r\n        hash = consistent_hash(request.src_ip)\r\n        target = healthy_targets[hash % len(healthy_targets)]\r\n\r\n    target.active_connections += 1\r\n    async_send(request, target)\r\n    RETURN\r\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace-alb-path-based-routing",
      children: "Dry Run Trace: ALB Path-Based Routing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Listener:"
      }), " HTTP:80"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Target Groups:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Target Group"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rule Condition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Targets"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tg-api"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Path ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/api/*"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "app-1:8080, app-2:8080"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tg-static"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Path ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/static/*"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "s3-bucket"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tg-web"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Default (", (0,jsx_runtime.jsx)(_components.code, {
              children: "/*"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "web-1:80, web-2:80, web-3:80"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Initial RR Index: 0"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Request 1: GET /api/users"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Listener"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receives on port 80"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rule evaluation"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Path ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/api/users"
            }), " matches ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/api/*"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Target group"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tg-api selected"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Round-robin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RR index 0 → app-1:8080"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X-Forwarded-For header added"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RR index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Incremented to 1"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Request 2: GET /static/logo.png"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Listener"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receives on port 80"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rule evaluation"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Path ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/static/logo.png"
            }), " matches ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/static/*"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Target group"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tg-static selected"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct to S3 bucket origin"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RR index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unchanged (different TG)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Request 3: GET /index.html"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Listener"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receives on port 80"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rule evaluation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No specific rule matches → default"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Target group"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tg-web selected"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Round-robin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RR index 1 → web-2:80"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X-Forwarded-For, X-Forwarded-Proto added"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RR index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Incremented to 2"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Request 4: GET /api/config"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Listener"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receives on port 80"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rule evaluation"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Path matches ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/api/*"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Target group"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tg-api selected"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Round-robin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RR index 1 → app-2:8080"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sent to app-2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RR index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Incremented to 2 (next request goes to app-1 again)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Health Check Failure Scenario:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Event"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Health check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GET /health to app-1 → timeout"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2nd attempt → 503 response"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mark unhealthy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "app-1 removed from tg-api target list"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Next request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GET /api/orders → RR skips app-1, sends to app-2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "app-1 returns 200 → marked healthy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rejoin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "app-1 back in rotation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation-load-balancer-with-round-robin-and-least-connections",
      children: "C++ Implementation: Load Balancer with Round-Robin and Least Connections"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\n#include <vector>\r\n#include <string>\r\n#include <queue>\r\n#include <mutex>\r\n#include <random>\r\n#include <thread>\r\n#include <chrono>\r\n#include <iomanip>\r\n#include <sstream>\r\n#include <algorithm>\r\n\r\nstruct Target {\r\n    std::string id;\r\n    std::string address;\r\n    int port;\r\n    int active_connections;\r\n    int total_requests;\r\n    bool healthy;\r\n    double moving_avg_response_time;\r\n\r\n    Target(const std::string& i, const std::string& addr, int p)\r\n        : id(i), address(addr), port(p),\r\n          active_connections(0), total_requests(0),\r\n          healthy(true), moving_avg_response_time(0.0) {}\r\n};\r\n\r\nclass LoadBalancer {\r\nprotected:\r\n    std::vector<Target> targets;\r\n    size_t rr_index;\r\n    std::string lb_type;\r\n\r\npublic:\r\n    LoadBalancer(const std::string& type) : rr_index(0), lb_type(type) {}\r\n\r\n    void add_target(const std::string& id, const std::string& addr, int port) {\r\n        targets.emplace_back(id, addr, port);\r\n    }\r\n\r\n    void mark_health(const std::string& id, bool healthy) {\r\n        for (auto& t : targets) {\r\n            if (t.id == id) {\r\n                t.healthy = healthy;\r\n                std::cout << \"  Health: \" << id << \" → \"\r\n                          << (healthy ? \"HEALTHY\" : \"UNHEALTHY\") << \"\\n\";\r\n                return;\r\n            }\r\n        }\r\n    }\r\n\r\n    virtual std::string select_target(const std::string& client_ip,\r\n                                       const std::string& path) = 0;\r\n\r\n    void handle_request(const std::string& client_ip,\r\n                        const std::string& path, int request_id) {\r\n        std::string target_id = select_target(client_ip, path);\r\n        if (target_id.empty()) {\r\n            std::cout << \"Req#\" << request_id << \" [\" << client_ip\r\n                      << \" \" << path << \"] → 503 No healthy targets\\n\";\r\n            return;\r\n        }\r\n        for (auto& t : targets) {\r\n            if (t.id == target_id) {\r\n                t.active_connections++;\r\n                t.total_requests++;\r\n                double latency = 5 + (rand() % 20); // simulated ms\r\n                t.moving_avg_response_time = t.moving_avg_response_time * 0.9 + latency * 0.1;\r\n                std::this_thread::sleep_for(std::chrono::milliseconds((int)latency));\r\n                t.active_connections--;\r\n                std::cout << \"Req#\" << request_id << \" [\" << client_ip\r\n                          << \" \" << path << \"] → \" << target_id\r\n                          << \" (latency=\" << (int)latency\r\n                          << \"ms, conn=\" << t.active_connections\r\n                          << \", total=\" << t.total_requests << \")\\n\";\r\n                return;\r\n            }\r\n        }\r\n    }\r\n\r\n    void print_status() {\r\n        std::cout << \"\\n\" << lb_type << \" Status:\\n\";\r\n        std::cout << std::left << std::setw(12) << \"Target\"\r\n                  << std::setw(10) << \"ActiveConn\"\r\n                  << std::setw(10) << \"TotalReq\"\r\n                  << std::setw(10) << \"AvgLat\"\r\n                  << \"Healthy\\n\";\r\n        std::cout << std::string(55, '-') << \"\\n\";\r\n        for (const auto& t : targets) {\r\n            std::cout << std::left << std::setw(12) << t.id\r\n                      << std::setw(10) << t.active_connections\r\n                      << std::setw(10) << t.total_requests\r\n                      << std::setw(10) << std::fixed << std::setprecision(1)\r\n                      << t.moving_avg_response_time\r\n                      << (t.healthy ? \"YES\" : \"NO\") << \"\\n\";\r\n        }\r\n    }\r\n\r\n    std::vector<Target> healthy_targets() {\r\n        std::vector<Target*> healthy;\r\n        for (auto& t : targets) {\r\n            if (t.healthy) healthy.push_back(&t);\r\n        }\r\n        std::vector<Target> result;\r\n        for (auto* t : healthy) result.push_back(*t);\r\n        return result;\r\n    }\r\n};\r\n\r\nclass RoundRobinLB : public LoadBalancer {\r\npublic:\r\n    RoundRobinLB() : LoadBalancer(\"RoundRobin LB\") {}\r\n\r\n    std::string select_target(const std::string& client_ip,\r\n                               const std::string& path) override {\r\n        std::vector<Target> healthy = healthy_targets();\r\n        if (healthy.empty()) return \"\";\r\n\r\n        size_t idx = rr_index % healthy.size();\r\n        rr_index = (rr_index + 1) % healthy.size();\r\n        return healthy[idx].id;\r\n    }\r\n};\r\n\r\nclass LeastConnectionsLB : public LoadBalancer {\r\npublic:\r\n    LeastConnectionsLB() : LoadBalancer(\"LeastConnections LB\") {}\r\n\r\n    std::string select_target(const std::string& client_ip,\r\n                               const std::string& path) override {\r\n        int min_conn = INT_MAX;\r\n        std::string selected;\r\n        for (const auto& t : targets) {\r\n            if (!t.healthy) continue;\r\n            if (t.active_connections < min_conn) {\r\n                min_conn = t.active_connections;\r\n                selected = t.id;\r\n            }\r\n        }\r\n        return selected;\r\n    }\r\n};\r\n\r\nint main() {\r\n    std::cout << \"=== Round-Robin Load Balancer ===\\n\";\r\n    RoundRobinLB rr_lb;\r\n    rr_lb.add_target(\"web-1\", \"10.0.1.10\", 80);\r\n    rr_lb.add_target(\"web-2\", \"10.0.1.11\", 80);\r\n    rr_lb.add_target(\"web-3\", \"10.0.1.12\", 80);\r\n\r\n    for (int i = 1; i <= 8; i++) {\r\n        rr_lb.handle_request(\"203.0.113.\" + std::to_string(i),\r\n                             \"/index.html\", i);\r\n    }\r\n    rr_lb.print_status();\r\n\r\n    std::cout << \"\\n=== Least Connections Load Balancer ===\\n\";\r\n    LeastConnectionsLB lc_lb;\r\n    lc_lb.add_target(\"app-1\", \"10.0.2.10\", 8080);\r\n    lc_lb.add_target(\"app-2\", \"10.0.2.11\", 8080);\r\n\r\n    lc_lb.mark_health(\"app-2\", false); // Simulate failure\r\n    lc_lb.handle_request(\"203.0.113.1\", \"/api/orders\", 9);\r\n    lc_lb.handle_request(\"203.0.113.2\", \"/api/users\", 10);\r\n    lc_lb.mark_health(\"app-2\", true);  // Recovery\r\n    lc_lb.handle_request(\"203.0.113.3\", \"/api/config\", 11);\r\n    lc_lb.print_status();\r\n\r\n    return 0;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-load-balancer-with-multiple-algorithms",
      children: "Python Implementation: Load Balancer with Multiple Algorithms"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import time\r\nimport random\r\nfrom abc import ABC, abstractmethod\r\nfrom dataclasses import dataclass\r\nfrom typing import Optional\r\n\r\n\r\n@dataclass\r\nclass Target:\r\n    id: str\r\n    address: str\r\n    port: int\r\n    active_connections: int = 0\r\n    total_requests: int = 0\r\n    healthy: bool = True\r\n    avg_response_time: float = 0.0\r\n\r\n    def __repr__(self):\r\n        return f\"{self.id}({self.address}:{self.port})\"\r\n\r\n\r\nclass LoadBalancer(ABC):\r\n    def __init__(self, name: str):\r\n        self.name = name\r\n        self.targets: list[Target] = []\r\n        self.rr_index = 0\r\n\r\n    def add_target(self, target_id: str, address: str, port: int):\r\n        self.targets.append(Target(id=target_id, address=address, port=port))\r\n\r\n    def mark_health(self, target_id: str, healthy: bool):\r\n        for t in self.targets:\r\n            if t.id == target_id:\r\n                t.healthy = healthy\r\n                print(f\"  Health: {target_id} -> {'HEALTHY' if healthy else 'UNHEALTHY'}\")\r\n                return\r\n\r\n    def get_healthy_targets(self) -> list[Target]:\r\n        return [t for t in self.targets if t.healthy]\r\n\r\n    @abstractmethod\r\n    def select_target(self, client_ip: str, path: str = \"\") -> Optional[Target]:\r\n        pass\r\n\r\n    def handle_request(self, client_ip: str, path: str = \"\", request_id: int = 0):\r\n        target = self.select_target(client_ip, path)\r\n        if target is None:\r\n            print(f\"Req#{request_id} [{client_ip} {path}] -> 503 No healthy targets\")\r\n            return\r\n\r\n        target.active_connections += 1\r\n        target.total_requests += 1\r\n        latency = random.uniform(2, 30)\r\n        target.avg_response_time = target.avg_response_time * 0.9 + latency * 0.1\r\n        time.sleep(latency / 1000)\r\n        target.active_connections -= 1\r\n\r\n        print(f\"Req#{request_id} [{client_ip} {path}] -> {target.id} \"\r\n              f\"(latency={latency:.0f}ms, conn={target.active_connections}, \"\r\n              f\"total={target.total_requests})\")\r\n\r\n    def print_status(self):\r\n        print(f\"\\n{self.name} Status:\")\r\n        print(f\"{'Target':<12} {'ActiveConn':<10} {'TotalReq':<10} \"\r\n              f\"{'AvgLat':<8} Healthy\")\r\n        print(\"-\" * 55)\r\n        for t in self.targets:\r\n            print(f\"{t.id:<12} {t.active_connections:<10} {t.total_requests:<10} \"\r\n                  f\"{t.avg_response_time:<8.1f} {'YES' if t.healthy else 'NO'}\")\r\n\r\n\r\nclass RoundRobinLB(LoadBalancer):\r\n    def __init__(self):\r\n        super().__init__(\"RoundRobin LB\")\r\n\r\n    def select_target(self, client_ip: str, path: str = \"\") -> Optional[Target]:\r\n        healthy = self.get_healthy_targets()\r\n        if not healthy:\r\n            return None\r\n        idx = self.rr_index % len(healthy)\r\n        self.rr_index = (self.rr_index + 1) % len(healthy)\r\n        return healthy[idx]\r\n\r\n\r\nclass LeastConnectionsLB(LoadBalancer):\r\n    def __init__(self):\r\n        super().__init__(\"LeastConnections LB\")\r\n\r\n    def select_target(self, client_ip: str, path: str = \"\") -> Optional[Target]:\r\n        healthy = self.get_healthy_targets()\r\n        if not healthy:\r\n            return None\r\n        return min(healthy, key=lambda t: t.active_connections)\r\n\r\n\r\nclass IPHashLB(LoadBalancer):\r\n    def __init__(self):\r\n        super().__init__(\"IP Hash LB\")\r\n\r\n    def select_target(self, client_ip: str, path: str = \"\") -> Optional[Target]:\r\n        healthy = self.get_healthy_targets()\r\n        if not healthy:\r\n            return None\r\n        hash_val = sum(ord(c) for c in client_ip)\r\n        return healthy[hash_val % len(healthy)]\r\n\r\n\r\nclass LeastResponseTimeLB(LoadBalancer):\r\n    def __init__(self):\r\n        super().__init__(\"Least Response Time LB\")\r\n\r\n    def select_target(self, client_ip: str, path: str = \"\") -> Optional[Target]:\r\n        healthy = self.get_healthy_targets()\r\n        if not healthy:\r\n            return None\r\n        return min(healthy, key=lambda t: t.avg_response_time)\r\n\r\n\r\n# Simulation\r\nprint(\"=== Round-Robin ===\")\r\nrr = RoundRobinLB()\r\nfor i in range(1, 4):\r\n    rr.add_target(f\"web-{i}\", f\"10.0.1.{i+9}\", 80)\r\nfor i in range(1, 9):\r\n    rr.handle_request(f\"203.0.113.{i}\", \"/index.html\", i)\r\nrr.print_status()\r\n\r\nprint(\"\\n=== Least Connections with Failover ===\")\r\nlc = LeastConnectionsLB()\r\nfor i in range(1, 4):\r\n    lc.add_target(f\"app-{i}\", f\"10.0.2.{i+9}\", 8080)\r\nlc.mark_health(\"app-2\", False)\r\nlc.handle_request(\"203.0.113.1\", \"/api/orders\", 9)\r\nlc.mark_health(\"app-2\", True)\r\nlc.handle_request(\"203.0.113.2\", \"/api/users\", 10)\r\nlc.print_status()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-3",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Round-robin selection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index increment, modulo N targets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Least connections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear scan for min active connections"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IP hash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash computation + modulo"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Health check (per target)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(R)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R = health check result storage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Connection draining wait"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(K * t)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(K)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K active connections, t = drain timeout (300s max)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(N) for least connections is acceptable:"
      }), " Target groups typically have 2-20 targets. Linear scan is fine. For 1000+ targets, use a min-heap (O(log N) selection, O(log N) update)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-of-load-balancers",
      children: "Advantages & Disadvantages of Load Balancers"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Availability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic failover from unhealthy targets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single point of failure if not HA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scalability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distributes load across N targets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can become bottleneck at extreme scale"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flexibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Path/host-based routing (ALB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration complexity for many rules"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TLS termination offload"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adds proxy latency (1-5ms for ALB, ~100us for NLB)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-for-load-balancers",
      children: "Edge Cases for Load Balancers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Connection draining"
        }), ": When a target is deregistered, the LB waits for in-flight requests to complete (up to 300s). New requests are not forwarded. Set drain timeout appropriately for long-lived connections."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cross-zone load balancing"
        }), ": When enabled, traffic distributes evenly across all AZs. When disabled, each AZ routes only to its own targets, causing imbalance if targets per AZ differ."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sticky session imbalance"
        }), ": If sticky sessions are enabled and a popular session hashes to one target, that target gets disproportionate load. Use least-outstanding-requests algorithm mitigating this."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Slow clients"
        }), ": One slow client can occupy a connection on NLB (Layer 4). ALB handles this better since it buffers requests."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "WebSocket timeout"
        }), ": ALB idle timeout (default 60s) may close WebSocket connections. Increase to 3600s for long-lived WebSockets."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "TypeScript Implementation: CloudLoadBalancer"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface TargetConfig {\r\n  id: string;\r\n  address: string;\r\n  port: number;\r\n  weight: number;\r\n}\r\n\r\ninterface HealthCheckResult {\r\n  targetId: string;\r\n  healthy: boolean;\r\n  lastChecked: Date;\r\n  latencyMs: number;\r\n}\r\n\r\ntype LBAlgorithm = 'round-robin' | 'least-connections' | 'ip-hash' | 'weighted';\r\n\r\nclass CloudLoadBalancer {\r\n  private targets: Map<string, {\r\n    config: TargetConfig;\r\n    activeConnections: number;\r\n    totalRequests: number;\r\n    healthy: boolean;\r\n    draining: boolean;\r\n  }> = new Map();\r\n  private rrIndex: number = 0;\r\n  private algorithm: LBAlgorithm;\r\n\r\n  constructor(private name: string, algorithm: LBAlgorithm = 'round-robin') {\r\n    this.algorithm = algorithm;\r\n  }\r\n\r\n  registerTarget(config: TargetConfig): void {\r\n    this.targets.set(config.id, {\r\n      config,\r\n      activeConnections: 0,\r\n      totalRequests: 0,\r\n      healthy: true,\r\n      draining: false\r\n    });\r\n  }\r\n\r\n  deregisterTarget(id: string, drainTimeoutMs: number = 30000): Promise<void> {\r\n    const target = this.targets.get(id);\r\n    if (!target) return Promise.resolve();\r\n    target.draining = true;\r\n    target.healthy = false;\r\n\r\n    return new Promise((resolve) => {\r\n      const checkDrain = () => {\r\n        if (target.activeConnections === 0) {\r\n          this.targets.delete(id);\r\n          console.log(`[${this.name}] Target ${id} drained and removed`);\r\n          resolve();\r\n        } else {\r\n          console.log(`[${this.name}] Draining ${id}: ${target.activeConnections} active connections remain`);\r\n          setTimeout(checkDrain, 1000);\r\n        }\r\n      };\r\n      setTimeout(() => {\r\n        this.targets.delete(id);\r\n        console.log(`[${this.name}] Force-removed ${id} after drain timeout`);\r\n        resolve();\r\n      }, drainTimeoutMs);\r\n      checkDrain();\r\n    });\r\n  }\r\n\r\n  markHealth(id: string, healthy: boolean): void {\r\n    const target = this.targets.get(id);\r\n    if (target) {\r\n      target.healthy = healthy;\r\n      console.log(`[${this.name}] ${id} → ${healthy ? 'HEALTHY' : 'UNHEALTHY'}`);\r\n    }\r\n  }\r\n\r\n  private getHealthyTargets(): typeof this.targets extends Map<string, infer V> ? V[] : never {\r\n    const result: any[] = [];\r\n    for (const [, target] of this.targets) {\r\n      if (target.healthy && !target.draining) result.push(target);\r\n    }\r\n    return result as any;\r\n  }\r\n\r\n  private selectTarget(clientIp: string): typeof this.targets extends Map<string, infer V> ? V : never {\r\n    const healthy = this.getHealthyTargets();\r\n    if (healthy.length === 0) return null as any;\r\n\r\n    switch (this.algorithm) {\r\n      case 'round-robin': {\r\n        const idx = this.rrIndex % healthy.length;\r\n        this.rrIndex = (this.rrIndex + 1) % healthy.length;\r\n        return healthy[idx];\r\n      }\r\n      case 'least-connections': {\r\n        return healthy.reduce((min, t) => t.activeConnections < min.activeConnections ? t : min);\r\n      }\r\n      case 'ip-hash': {\r\n        const hash = clientIp.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);\r\n        return healthy[hash % healthy.length];\r\n      }\r\n      case 'weighted': {\r\n        const totalWeight = healthy.reduce((sum, t) => sum + t.config.weight, 0);\r\n        let random = Math.random() * totalWeight;\r\n        for (const t of healthy) {\r\n          random -= t.config.weight;\r\n          if (random <= 0) return t;\r\n        }\r\n        return healthy[healthy.length - 1];\r\n      }\r\n      default:\r\n        return healthy[0];\r\n    }\r\n  }\r\n\r\n  handleRequest(clientIp: string, path: string, requestId: number): void {\r\n    const target = this.selectTarget(clientIp);\r\n    if (!target) {\r\n      console.log(`[${requestId}] ${clientIp} ${path} → 503 No healthy targets`);\r\n      return;\r\n    }\r\n\r\n    target.activeConnections++;\r\n    target.totalRequests++;\r\n    const latency = Math.random() * 28 + 2; // 2-30ms\r\n\r\n    // Simulate request processing\r\n    setTimeout(() => {\r\n      target.activeConnections--;\r\n      console.log(`[${requestId}] ${clientIp.padEnd(15)} ${path.padEnd(20)} → ${target.config.id} ` +\r\n        `(${latency.toFixed(0)}ms, active=${target.activeConnections}, total=${target.totalRequests})`);\r\n    }, latency);\r\n  }\r\n\r\n  printStatus(): void {\r\n    console.log(`\\n${this.name} (${this.algorithm}) Status:`);\r\n    console.log(`${'Target':<12} ${'Addr':<18} ${'Conn':<8} ${'Total':<8} ${'Healthy':<8} ${'Draining':<8}`);\r\n    console.log('-'.repeat(62));\r\n    for (const [, t] of this.targets) {\r\n      console.log(\r\n        `${t.config.id.padEnd(12)} ${`${t.config.address}:${t.config.port}`.padEnd(18)} ` +\r\n        `${String(t.activeConnections).padEnd(8)} ${String(t.totalRequests).padEnd(8)} ` +\r\n        `${String(t.healthy).padEnd(8)} ${String(t.draining).padEnd(8)}`\r\n      );\r\n    }\r\n  }\r\n}\r\n\r\n// Usage example\r\nasync function demoLoadBalancer() {\r\n  // Weighted round-robin across 3 web servers\r\n  const lb = new CloudLoadBalancer('Web-LB', 'weighted');\r\n  lb.registerTarget({ id: 'web-1', address: '10.0.1.10', port: 80, weight: 5 });\r\n  lb.registerTarget({ id: 'web-2', address: '10.0.1.11', port: 80, weight: 3 });\r\n  lb.registerTarget({ id: 'web-3', address: '10.0.1.12', port: 80, weight: 2 });\r\n\r\n  for (let i = 1; i <= 6; i++) {\r\n    lb.handleRequest(`203.0.113.${i}`, '/index.html', i);\r\n  }\r\n\r\n  // Health check failure and recovery\r\n  setTimeout(() => {\r\n    lb.markHealth('web-3', false);\r\n    lb.handleRequest('203.0.113.7', '/api/data', 7);\r\n    lb.handleRequest('203.0.113.8', '/api/data', 8);\r\n\r\n    setTimeout(() => {\r\n      lb.markHealth('web-3', true);\r\n      lb.handleRequest('203.0.113.9', '/api/orders', 9);\r\n\r\n      // Show final status\r\n      setTimeout(() => lb.printStatus(), 50);\r\n    }, 50);\r\n  }, 50);\r\n\r\n  // Connection draining demo\r\n  // const drained = await lb.deregisterTarget('web-1', 5000);\r\n}\r\n\r\ndemoLoadBalancer();\r\n\r\n// --- Connection Draining Manager ---\r\nclass ConnectionDrainManager {\r\n  private drainingTargets: Map<string, {\r\n    activeConnections: number;\r\n    startTime: Date;\r\n    timeoutMs: number;\r\n  }> = new Map();\r\n\r\n  constructor(private maxDrainTimeMs: number = 300000) {}\r\n\r\n  startDrain(targetId: string, activeConnections: number): void {\r\n    this.drainingTargets.set(targetId, {\r\n      activeConnections,\r\n      startTime: new Date(),\r\n      timeoutMs: this.maxDrainTimeMs\r\n    });\r\n    console.log(`[Drain] ${targetId}: Starting drain with ${activeConnections} connections, timeout=${this.maxDrainTimeMs}ms`);\r\n  }\r\n\r\n  onConnectionClosed(targetId: string): void {\r\n    const entry = this.drainingTargets.get(targetId);\r\n    if (!entry) return;\r\n    entry.activeConnections--;\r\n    if (entry.activeConnections === 0) {\r\n      this.drainingTargets.delete(targetId);\r\n      console.log(`[Drain] ${targetId}: All connections drained, target can be removed`);\r\n    }\r\n  }\r\n\r\n  getStatus(): Array<{ id: string; remainingConn: number; elapsedMs: number; timedOut: boolean }> {\r\n    const now = Date.now();\r\n    return Array.from(this.drainingTargets.entries()).map(([id, entry]) => ({\r\n      id,\r\n      remainingConn: entry.activeConnections,\r\n      elapsedMs: now - entry.startTime.getTime(),\r\n      timedOut: (now - entry.startTime.getTime()) > entry.timeoutMs\r\n    }));\r\n  }\r\n\r\n  forceDrain(): string[] {\r\n    const forced = Array.from(this.drainingTargets.keys());\r\n    this.drainingTargets.clear();\r\n    return forced;\r\n  }\r\n}\r\n\r\n// Draining usage\r\nconst drainer = new ConnectionDrainManager(60000);\r\ndrainer.startDrain('web-old-1', 5);\r\ndrainer.onConnectionClosed('web-old-1');\r\ndrainer.onConnectionClosed('web-old-1');\r\nconsole.log(drainer.getStatus());\r\n// Output: [ { id: 'web-old-1', remainingConn: 3, elapsedMs: 0, timedOut: false } ]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "166-load-balancer-types-comparison",
      children: "16.6 Load Balancer Types Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ALB (Layer 7)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "NLB (Layer 4)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "GLB (Layer 3)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OSI Layer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7 (Application)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 (Transport)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 (Network)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Protocols"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP, HTTPS, gRPC, WebSocket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP, UDP, TLS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IP (GENEVE)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-5ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~100μs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~200μs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Path-based routing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Host-based routing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Static IP per AZ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗ (uses DNS name)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Client IP preservation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗ (X-Forwarded-For)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TLS termination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SNI support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sticky sessions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓ (cookie)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓ (flow hash)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WebSocket support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗ (raw TCP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "gRPC support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓ (HTTP/2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓ (TCP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Target types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IP, instance, Lambda, ALB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IP, instance, ALB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IP, instance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Health checks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP/HTTPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP, HTTP, HTTPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microservices, web apps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gaming, real-time, low-latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Firewall appliances, IDS/IPS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pricing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per LCU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per LCU (more expensive)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per appliance + data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-zone support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓ (can disable)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How to Choose:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "ALB"
        }), " for HTTP/HTTPS applications that need path/host routing, WebSocket, or Lambda targets."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "NLB"
        }), " for TCP/UDP workloads needing ultra-low latency, static IPs, or client IP preservation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "GLB"
        }), " for transparent traffic inspection through third-party virtual appliances."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "167-dns-in-cloud-route53--cloud-dns",
      children: "16.7 DNS in Cloud (Route53 / Cloud DNS)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-4",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Cloud DNS is like a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "national telephone directory service operating across multiple cities with call forwarding"
      }), ". Instead of a single phone book, you have directory assistants in every city (DNS resolvers at edge locations). When you dial a business (request a domain), the nearest assistant looks up the number. If the business operates in multiple cities, the assistant routes your call to the closest office (latency-based routing). If one office is closed, they forward to the next (failover routing). They also handle load balancing → \"press 1 for sales, press 2 for support\" (weighted routing)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-cloud-dns-works-step-by-step",
      children: "How Cloud DNS Works: Step-by-Step"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Domain registration"
          }), " → You register a domain (e.g., example.com) and delegate its DNS authority to the cloud DNS service by configuring NS records at the registrar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Zone creation"
          }), " → A hosted zone is created with authoritative nameservers. These NS records are published in the zone's parent domain (e.g., .com for example.com)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Record creation"
          }), " → You create resource records: A/AAAA (IPv4/IPv6 addresses), CNAME (aliases), MX (mail servers), TXT (verification), and alias records (Apex → AWS resource)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Routing policy configuration"
          }), " → You select routing behavior: simple, weighted, latency-based, geolocation, geoproximity, failover, or multivalue."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Health check integration"
          }), " → Health checks monitor endpoint availability. Unhealthy endpoints are automatically removed from DNS responses."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Query resolution"
          }), " → When a client queries, the resolver follows delegation chain from root → TLD → cloud DNS → answer, applying routing policy."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-dns-resolution-with-latency-based-routing",
      children: "Pseudocode: DNS Resolution with Latency-Based Routing"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE resolve_domain(domain, client_ip, resolver_cache):\r\n    // Step 1: Check cache\r\n    IF resolver_cache.contains(domain) AND NOT expired(resolver_cache[domain]):\r\n        RETURN resolver_cache[domain]\r\n\r\n    // Step 2: Follow delegation chain\r\n    root_servers = get_root_servers()\r\n    tld_servers = query_ns(root_servers, extract_tld(domain))\r\n    zone_servers = query_ns(tld_servers, domain)\r\n\r\n    // Step 3: Query authoritative DNS\r\n    FOR each ns in zone_servers:\r\n        records = query(ns, domain, TYPE_A)\r\n\r\n        IF routing_policy == \"SIMPLE\":\r\n            result = random_choice(records)\r\n            cache(domain, result, TTL)\r\n            RETURN result\r\n\r\n        ELSE IF routing_policy == \"WEIGHTED\":\r\n            total_weight = sum(r.weight for r in records)\r\n            roll = random(0, total_weight)\r\n            cumulative = 0\r\n            FOR each record sorted by weight:\r\n                cumulative += record.weight\r\n                IF roll <= cumulative:\r\n                    cache(domain, record, TTL)\r\n                    RETURN record\r\n\r\n        ELSE IF routing_policy == \"LATENCY_BASED\":\r\n            FOR each region:\r\n                latency[region] = measure_latency(client_ip, region_probe[region])\r\n            best_region = argmin(latency)\r\n            result = records[best_region]\r\n            cache(domain, result, min(TTL, 60))\r\n            RETURN result\r\n\r\n        ELSE IF routing_policy == \"FAILOVER\":\r\n            primary = records.primary\r\n            IF health_check.passing(primary):\r\n                result = primary\r\n            ELSE:\r\n                result = records.secondary\r\n            cache(domain, result, TTL)\r\n            RETURN result\r\n\r\n    RETURN NXDOMAIN\r\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace-route53-latency-based-routing",
      children: "Dry Run Trace: Route53 Latency-Based Routing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Records for api.example.com:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Region"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Endpoint"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Health"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "us-east-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "alb-ue1.example.com"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Healthy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "eu-west-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "alb-ew1.example.com"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Healthy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ap-southeast-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "alb-apse1.example.com"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Healthy"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Client: 203.0.113.5 (New York, USA)"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client queries api.example.com"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive resolver in NYC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lookup in resolver cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache miss"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query root servers for .com"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Get TLD NS records"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query .com TLD for example.com"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Get Route53 NS: ns-xxx.awsdns-xx.net"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query Route53 for api.example.com"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retrieve routing policy = latency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Measure latency to us-east-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Measure latency to eu-west-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "75ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Measure latency to ap-southeast-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "220ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Select best region"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "us-east-1 (5ms)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "alb-ue1.example.com → 10.0.1.10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TTL = 60s"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Client: 2a00:1450:4000:800::200e (London, UK)"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query resolver"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "London"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Measure latency to us-east-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "70ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Measure latency to eu-west-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Measure latency to ap-southeast-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "150ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Select best region"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "eu-west-1 (3ms)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "alb-ew1.example.com → 10.1.1.10"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Failover Scenario (us-east-1 health check fails):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Route53 health checker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP GET to us-east-1 ALB → 503"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consecutive failures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 of 3 failures → marked unhealthy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS update"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "us-east-1 record removed from response"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NYC client query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only eu-west-1 and ap-southeast-1 available"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Latency measurement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "eu-west-1 = 75ms, ap-southeast-1 = 220ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "eu-west-1 selected (75ms vs 220ms)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "us-east-1 health check passes → record reinstated"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation-dns-routing-simulator",
      children: "C++ Implementation: DNS Routing Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\n#include <vector>\r\n#include <string>\r\n#include <map>\r\n#include <random>\r\n#include <algorithm>\r\n#include <iomanip>\r\n#include <sstream>\r\n#include <chrono>\r\n#include <thread>\r\n\r\nstruct DNSRecord {\r\n    std::string name;\r\n    std::string value;\r\n    std::string region;\r\n    int weight;\r\n    bool healthy;\r\n    int latency_ms;\r\n};\r\n\r\nclass CloudDNS {\r\nprivate:\r\n    std::vector<DNSRecord> records;\r\n    std::string routing_policy;\r\n    std::map<std::string, std::pair<std::string, int>> cache;\r\n    std::mt19937 rng;\r\n\r\npublic:\r\n    CloudDNS(const std::string& policy) : routing_policy(policy), rng(std::random_device{}()) {}\r\n\r\n    void add_record(const std::string& name, const std::string& value,\r\n                    const std::string& region, int weight = 1, bool healthy = true) {\r\n        records.push_back({name, value, region, weight, healthy, 0});\r\n    }\r\n\r\n    void set_health(const std::string& value, bool healthy) {\r\n        for (auto& r : records) {\r\n            if (r.value == value) r.healthy = healthy;\r\n        }\r\n    }\r\n\r\n    int measure_latency(const std::string& client_ip, const std::string& region) {\r\n        std::map<std::string, int> region_latency = {\r\n            {\"us-east-1\", 5}, {\"us-west-2\", 25},\r\n            {\"eu-west-1\", 75}, {\"eu-central-1\", 85},\r\n            {\"ap-southeast-1\", 220}, {\"ap-northeast-1\", 150},\r\n            {\"sa-east-1\", 120}, {\"me-south-1\", 130}\r\n        };\r\n        auto it = region_latency.find(region);\r\n        if (it != region_latency.end()) return it->first.find(\"us-\") != std::string::npos ? it->second : it->second + 20;\r\n        return 100;\r\n    }\r\n\r\n    std::string resolve(const std::string& domain, const std::string& client_ip) {\r\n        // Check cache\r\n        auto cache_it = cache.find(domain);\r\n        if (cache_it != cache.end() && cache_it->second.second > 0) {\r\n            cache_it->second.second--;\r\n            std::cout << \"  [Cache HIT] \" << domain << \" → \"\r\n                      << cache_it->second.first << \"\\n\";\r\n            return cache_it->second.first;\r\n        }\r\n\r\n        std::vector<DNSRecord> healthy_records;\r\n        for (const auto& r : records) {\r\n            if (r.healthy && r.name == domain) healthy_records.push_back(r);\r\n        }\r\n        if (healthy_records.empty()) return \"NXDOMAIN\";\r\n\r\n        std::string result;\r\n        std::cout << \"  Routing policy: \" << routing_policy << \"\\n\";\r\n\r\n        if (routing_policy == \"SIMPLE\") {\r\n            std::uniform_int_distribution<int> dist(0, healthy_records.size() - 1);\r\n            result = healthy_records[dist(rng)].value;\r\n        }\r\n        else if (routing_policy == \"WEIGHTED\") {\r\n            int total_weight = 0;\r\n            for (const auto& r : healthy_records) total_weight += r.weight;\r\n            std::uniform_int_distribution<int> dist(0, total_weight);\r\n            int roll = dist(rng);\r\n            int cumulative = 0;\r\n            for (const auto& r : healthy_records) {\r\n                cumulative += r.weight;\r\n                if (roll <= cumulative) { result = r.value; break; }\r\n            }\r\n            std::cout << \"  Weight roll: \" << roll << \"/\" << total_weight << \"\\n\";\r\n        }\r\n        else if (routing_policy == \"LATENCY_BASED\") {\r\n            int best_latency = INT_MAX;\r\n            for (const auto& r : healthy_records) {\r\n                int lat = measure_latency(client_ip, r.region);\r\n                std::cout << \"  Latency to \" << r.region << \": \" << lat << \"ms\\n\";\r\n                if (lat < best_latency) {\r\n                    best_latency = lat;\r\n                    result = r.value;\r\n                }\r\n            }\r\n        }\r\n        else if (routing_policy == \"FAILOVER\") {\r\n            result = healthy_records[0].value;\r\n            std::cout << \"  Primary: \" << result\r\n                      << \" (healthy: \" << (healthy_records[0].healthy ? \"yes\" : \"no\") << \")\\n\";\r\n            if (!healthy_records[0].healthy && healthy_records.size() > 1) {\r\n                result = healthy_records[1].value;\r\n                std::cout << \"  Failing over to secondary: \" << result << \"\\n\";\r\n            }\r\n        }\r\n\r\n        // Cache with reduced TTL\r\n        cache[domain] = {result, 3};  // 3 queries\r\n        return result;\r\n    }\r\n\r\n    void trace_resolution(const std::string& domain, const std::string& client_ip,\r\n                          const std::string& client_label) {\r\n        std::cout << \"\\n\" << client_label << \" resolves \" << domain << \"\\n\";\r\n        std::cout << std::string(50, '-') << \"\\n\";\r\n        std::cout << \"  Root servers → TLD → Authoritative\\n\";\r\n        std::string ip = resolve(domain, client_ip);\r\n        std::cout << \"  Result: \" << ip << \"\\n\";\r\n    }\r\n};\r\n\r\nint main() {\r\n    std::cout << \"=== Route53 Latency-Based Routing ===\\n\";\r\n    CloudDNS dns(\"LATENCY_BASED\");\r\n    dns.add_record(\"api.example.com\", \"alb-ue1.example.com\", \"us-east-1\", 1, true);\r\n    dns.add_record(\"api.example.com\", \"alb-ew1.example.com\", \"eu-west-1\", 1, true);\r\n    dns.add_record(\"api.example.com\", \"alb-apse1.example.com\", \"ap-southeast-1\", 1, true);\r\n\r\n    dns.trace_resolution(\"api.example.com\", \"203.0.113.5\", \"New York Client\");\r\n    dns.trace_resolution(\"api.example.com\", \"2a00:1450:4000::200e\", \"London Client\");\r\n\r\n    std::cout << \"\\n=== Failover Scenario ===\\n\";\r\n    dns.set_health(\"alb-ue1.example.com\", false);\r\n    dns.trace_resolution(\"api.example.com\", \"203.0.113.5\", \"NYC (us-east-1 down)\");\r\n    dns.set_health(\"alb-ue1.example.com\", true);\r\n\r\n    std::cout << \"\\n=== Weighted Routing ===\\n\";\r\n    CloudDNS weighted(\"WEIGHTED\");\r\n    weighted.add_record(\"app.example.com\", \"v1-app.example.com\", \"us-east-1\", 90);\r\n    weighted.add_record(\"app.example.com\", \"v2-canary.example.com\", \"us-east-1\", 10);\r\n    for (int i = 0; i < 10; i++) {\r\n        std::cout << \"  Request \" << (i+1) << \": \"\r\n                  << weighted.resolve(\"app.example.com\", \"203.0.113.1\") << \"\\n\";\r\n    }\r\n\r\n    return 0;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-cloud-dns-with-all-routing-policies",
      children: "Python Implementation: Cloud DNS with All Routing Policies"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import random\r\nimport time\r\nfrom dataclasses import dataclass\r\nfrom typing import Optional\r\n\r\n\r\n@dataclass\r\nclass DNSRecord:\r\n    name: str\r\n    value: str\r\n    region: str = \"\"\r\n    weight: int = 1\r\n    healthy: bool = True\r\n\r\n\r\nclass CloudDNS:\r\n    def __init__(self):\r\n        self.records: list[DNSRecord] = []\r\n        self.cache: dict[str, tuple[str, int]] = {}\r\n        self.routing_policy = \"SIMPLE\"\r\n\r\n    def set_policy(self, policy: str):\r\n        valid = {\"SIMPLE\", \"WEIGHTED\", \"LATENCY_BASED\", \"GEOLOCATION\", \"FAILOVER\", \"MULTIVALUE\"}\r\n        assert policy in valid, f\"Invalid policy: {policy}\"\r\n        self.routing_policy = policy\r\n\r\n    def add_record(self, name: str, value: str, region: str = \"\",\r\n                   weight: int = 1, healthy: bool = True):\r\n        self.records.append(DNSRecord(name, value, region, weight, healthy))\r\n\r\n    def set_health(self, value: str, healthy: bool):\r\n        for r in self.records:\r\n            if r.value == value:\r\n                r.healthy = healthy\r\n\r\n    def _latency(self, client_ip: str, region: str) -> int:\r\n        latency_map = {\r\n            \"us-east-1\": 5, \"us-west-2\": 25,\r\n            \"eu-west-1\": 75, \"eu-central-1\": 85,\r\n            \"ap-southeast-1\": 220, \"ap-northeast-1\": 150,\r\n            \"sa-east-1\": 120, \"me-south-1\": 130\r\n        }\r\n        return latency_map.get(region, random.randint(50, 300))\r\n\r\n    def resolve(self, domain: str, client_ip: str = \"0.0.0.0\") -> Optional[str]:\r\n        # Check cache\r\n        if domain in self.cache:\r\n            ttl = self.cache[domain][1]\r\n            if ttl > 0:\r\n                self.cache[domain] = (self.cache[domain][0], ttl - 1)\r\n                print(f\"  [Cache HIT] {domain} -> {self.cache[domain][0]}\")\r\n                return self.cache[domain][0]\r\n\r\n        healthy = [r for r in self.records if r.healthy and r.name == domain]\r\n        if not healthy:\r\n            return None\r\n\r\n        result = None\r\n        if self.routing_policy == \"SIMPLE\":\r\n            result = random.choice(healthy).value\r\n\r\n        elif self.routing_policy == \"WEIGHTED\":\r\n            total = sum(r.weight for r in healthy)\r\n            roll = random.randint(0, total)\r\n            cumulative = 0\r\n            for r in sorted(healthy, key=lambda x: x.weight, reverse=True):\r\n                cumulative += r.weight\r\n                if roll <= cumulative:\r\n                    result = r.value\r\n                    break\r\n\r\n        elif self.routing_policy == \"LATENCY_BASED\":\r\n            best_lat = float('inf')\r\n            best_record = None\r\n            for r in healthy:\r\n                lat = self._latency(client_ip, r.region)\r\n                print(f\"  Latency to {r.region}: {lat}ms\")\r\n                if lat < best_lat:\r\n                    best_lat = lat\r\n                    best_record = r\r\n            result = best_record.value if best_record else None\r\n\r\n        elif self.routing_policy == \"FAILOVER\":\r\n            primary = healthy[0]\r\n            if primary.healthy:\r\n                result = primary.value\r\n            elif len(healthy) > 1:\r\n                print(f\"  Primary failed, failing over to {healthy[1].value}\")\r\n                result = healthy[1].value\r\n\r\n        elif self.routing_policy == \"MULTIVALUE\":\r\n            result = [r.value for r in healthy[:8]]\r\n            print(f\"  Returning {len(result)} A records for client-side LB\")\r\n\r\n        # Cache result\r\n        if result:\r\n            self.cache[domain] = (result, 3)\r\n        return result\r\n\r\n    def trace(self, domain: str, client_ip: str, label: str):\r\n        print(f\"\\n{label} resolves {domain}\")\r\n        print(\"-\" * 50)\r\n        print(\"  Root servers -> TLD -> Authoritative\")\r\n        ip = self.resolve(domain, client_ip)\r\n        print(f\"  Result: {ip}\")\r\n\r\n\r\n# Simulation\r\ndns = CloudDNS()\r\ndns.set_policy(\"LATENCY_BASED\")\r\ndns.add_record(\"api.example.com\", \"10.0.1.10\", \"us-east-1\")\r\ndns.add_record(\"api.example.com\", \"10.0.2.10\", \"eu-west-1\")\r\ndns.add_record(\"api.example.com\", \"10.0.3.10\", \"ap-southeast-1\")\r\n\r\ndns.trace(\"api.example.com\", \"203.0.113.5\", \"New York Client\")\r\ndns.trace(\"api.example.com\", \"2a00:1450:4000::200e\", \"London Client\")\r\n\r\nprint(\"\\n=== Weighted Canary Deployment ===\")\r\ndns2 = CloudDNS()\r\ndns2.set_policy(\"WEIGHTED\")\r\ndns2.add_record(\"app.example.com\", \"v1 (stable)\", weight=90)\r\ndns2.add_record(\"app.example.com\", \"v2 (canary)\", weight=10)\r\nfor i in range(15):\r\n    result = dns2.resolve(\"app.example.com\", \"203.0.113.1\")\r\n    print(f\"  Request {i+1}: {result}\")\r\n\r\nprint(\"\\n=== Cache Behavior ===\")\r\ndns3 = CloudDNS()\r\ndns3.set_policy(\"SIMPLE\")\r\ndns3.add_record(\"www.example.com\", \"10.0.1.100\")\r\nfor i in range(5):\r\n    result = dns3.resolve(\"www.example.com\", \"203.0.113.1\")\r\n    print(f\"  Query {i+1}: {result}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-4",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple DNS resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(R)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(R)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R = records; one random selection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Weighted routing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(R)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(R)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weighted random selection, sum + scan"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Latency-based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(R * P)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(R)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R records × P probe locations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DNS caching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(C)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash map; C = cache entries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Health check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(H)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(H)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "H = health check endpoints"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why DNS caching is critical:"
      }), " Each query avoided by cache saves 20-120ms of resolution time. At 1000 QPS, a 90% cache hit rate saves 90,000ms of total resolution time per second."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-of-cloud-dns",
      children: "Advantages & Disadvantages of Cloud DNS"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Global coverage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anycast network, edge locations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS propagation delay (60-300s)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Routing flexibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7+ routing policies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex to debug multi-policy setups"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Health integration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic failover"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Health check false positives possible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low cost per query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High query volume can increase cost"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edge resolvers reduce latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TTL tuning needed for balance"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-in-cloud-dns",
      children: "Edge Cases in Cloud DNS"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DNS propagation delay"
        }), ": Non-alias records have a 60s minimum TTL. Record changes take 60-300s to propagate globally. For disaster recovery, use alias records (0s TTL) with Route53."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TTL trade-offs"
        }), ": Short TTLs (60s) enable fast failover but increase query volume and cost. Long TTLs (86400s = 24h) reduce load but delay failover."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CNAME at apex"
        }), ": DNS spec forbids CNAME at the zone apex (example.com without www). Use ALIAS records (Route53) or A records with a static IP."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Health check frequency"
        }), ": Standard checks run every 30s. Fast (every 10s) adds cost. Set consecutive failure count to 3 to avoid flapping."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Weighted routing zero-weight"
        }), ": Records with weight 0 are not returned unless all records have weight 0 (then all are returned equally). Use for temporary traffic removal."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Geolocation vs Latency"
        }), ": Geolocation routes based on client IP location → useful for regional content restrictions. Latency-based routes based on actual measured latency → better for performance. They can conflict; choose based on primary goal."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "168-content-delivery-networks",
      children: "16.8 Content Delivery Networks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A Content Delivery Network (CDN) caches content at edge locations close to users, reducing latency and offloading origin servers."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-5",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A CDN is like a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "chain of local grocery warehouses serving a national restaurant chain"
      }), ". The central kitchen (origin server) in Chicago prepares all the food. Instead of every restaurant (user) receiving ingredients directly from Chicago, regional warehouses (edge nodes) in LA, NYC, Miami, and Denver stock popular items. A restaurant in LA gets most ingredients from the LA warehouse (cache hit) → 2ms delivery instead of 50ms from Chicago. If the LA warehouse is out of an ingredient (cache miss), it sends a refrigerated truck to Chicago, stocks it, then serves the restaurant. The restaurant doesn't know the difference."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-cdn-works-step-by-step",
      children: "How CDN Works: Step-by-Step"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "User requests content"
          }), " → Browser requests ", (0,jsx_runtime.jsx)(_components.code, {
            children: "https://cdn.example.com/images/logo.png"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "DNS resolution"
          }), " → The CDN's DNS returns the IP of the nearest edge node (based on client IP geolocation)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Edge node check"
          }), " → The edge node checks its local cache for the URL."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Cache hit"
          }), " → If cached and not expired, the edge serves the content directly. Latency: 1-10ms."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Cache miss"
          }), " → If not cached or expired, the edge node fetches from the origin server (or upstream regional cache)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Origin fetch"
          }), " → Origin returns the content with caching headers. Edge caches it."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Response"
          }), " → Edge serves the content to the user."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "TTL management"
          }), " → Content is kept for the TTL period, then considered stale. Stale content may be served during revalidation (stale-while-revalidate)."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1681-cdn-architecture",
      children: "16.8.1 CDN Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Origin servers store the definitive content. Edge nodes (points of presence, PoPs) cache content geographically near users. A user's request routes to the nearest edge node; if the content is cached (cache hit), the edge node serves it directly. On a cache miss, the edge node fetches from the origin, caches the response, and serves it."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1682-key-cdn-features",
      children: "16.8.2 Key CDN Features"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tiered caching."
      }), " Content flows from origin → regional cache → edge cache, reducing origin load on cache misses."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cache control."
      }), " HTTP headers (Cache-Control, Expires, ETag, Last-Modified) determine caching behavior. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Cache-Control: max-age=3600"
      }), " caches for one hour; ", (0,jsx_runtime.jsx)(_components.code, {
        children: "s-maxage"
      }), " applies to shared caches."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cache invalidation."
      }), " Removing cached content before TTL expiry. Methods: API-based purge, versioned URLs (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/static/main.v2.js"
      }), "), surrogate keys."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dynamic content acceleration."
      }), " Routes dynamic requests over optimized paths using TCP optimizations, keepalive, and route optimization."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge computing."
      }), " CloudFront Functions, Lambda@Edge, and Cloudflare Workers execute code at edge nodes for header manipulation, URL rewriting, A/B testing, and authentication."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1683-major-cdns",
      children: "16.8.3 Major CDNs"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "CDN"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Nodes"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CloudFront (AWS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "600+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tight AWS integration, Lambda@Edge"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cloudflare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "330+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anycast DNS, DDoS mitigation, Workers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Akamai"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4000+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise-focused, adaptive acceleration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fastly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VCL configuration, instant purge"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Azure CDN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microsoft integration, multiple providers"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-cdn-request-handling-with-tiered-caching",
      children: "Pseudocode: CDN Request Handling with Tiered Caching"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE handle_cdn_request(url, client_ip):\r\n    // Step 1: Route to nearest edge\r\n    edge_node = nearest_edge(client_ip)\r\n\r\n    // Step 2: Check edge cache\r\n    cache_key = hash(url)\r\n    edge_entry = edge_node.cache.get(cache_key)\r\n\r\n    IF edge_entry EXISTS AND NOT expired(edge_entry):\r\n        IF edge_entry.is_stale():\r\n            ASYNC revalidate(edge_entry, url)  // stale-while-revalidate\r\n        LOG \"Edge cache HIT\"\r\n        RETURN edge_entry.content\r\n\r\n    // Step 3: Edge cache miss → check regional cache\r\n    regional_node = parent_regional_cache(edge_node)\r\n    regional_entry = regional_node.cache.get(cache_key)\r\n\r\n    IF regional_entry EXISTS AND NOT expired(regional_entry):\r\n        edge_node.cache.set(cache_key, regional_entry)\r\n        LOG \"Regional cache HIT\"\r\n        RETURN regional_entry.content\r\n\r\n    // Step 4: Regional cache miss → fetch from origin\r\n    origin_response = fetch_from_origin(url)\r\n\r\n    IF origin_response.is_cacheable():\r\n        ttl = extract_ttl(origin_response.headers)\r\n        regional_node.cache.set(cache_key, origin_response, ttl)\r\n        edge_node.cache.set(cache_key, origin_response, ttl)\r\n        LOG \"Origin fetch → cache populated\"\r\n\r\n    RETURN origin_response.content\r\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace-cdn-request-lifecycle",
      children: "Dry Run Trace: CDN Request Lifecycle"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Setup:"
      }), " Origin in us-east-1, Edge in Tokyo, Regional cache in ap-northeast-1"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Request 1: GET /images/logo.png (first time, cache empty)"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Location"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Latency"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client (Tokyo)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS resolves cdn.example.com → Edge-Tokyo IP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edge-Tokyo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Cache lookup for ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/images/logo.png"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edge-Tokyo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache MISS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edge-Tokyo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request to Regional (ap-northeast-1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regional cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache MISS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regional cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward to Origin (us-east-1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Origin (us-east-1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read logo.png from S3, compute ETag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Origin → Regional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Response with Cache-Control: max-age=86400"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80ms (cross-Pacific)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regional → Edge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache at regional, forward to edge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edge → Client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache at edge, respond to client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Total latency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "~127ms"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Request 2: GET /images/logo.png (cache hit)"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Location"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Latency"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS → Edge-Tokyo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edge-Tokyo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache lookup → HIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edge-Tokyo → Client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Serve from cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Total latency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "~15ms"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Request 3: GET /api/user/profile (dynamic content, no cache)"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Location"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Latency"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS → Edge-Tokyo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache-Control: no-cache → bypass cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edge → Origin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP optimizations, keepalive connection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Origin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generate response (DB query)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Origin → Edge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return response"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edge → Client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward to client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Total latency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "~206ms"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Without CDN (direct origin):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Location"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Latency"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS resolves origin directly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client → Origin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP handshake to us-east-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80ms (3-way RTT)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Origin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TLS handshake"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Origin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generate response"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Origin → Client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Response"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Total latency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "~235ms"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CDN Benefit:"
      }), " 15ms vs 235ms for cached content → ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "93% latency reduction"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation-cdn-cache-simulator",
      children: "C++ Implementation: CDN Cache Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\n#include <string>\r\n#include <map>\r\n#include <chrono>\r\n#include <iomanip>\r\n#include <vector>\r\n#include <random>\r\n\r\nstruct CacheEntry {\r\n    std::string content;\r\n    std::chrono::steady_clock::time_point inserted_at;\r\n    int ttl_seconds;\r\n    bool is_stale_flag;\r\n\r\n    bool expired() const {\r\n        auto now = std::chrono::steady_clock::now();\r\n        return std::chrono::duration_cast<std::chrono::seconds>(now - inserted_at).count() >= ttl_seconds;\r\n    }\r\n};\r\n\r\nstruct EdgeNode {\r\n    std::string name;\r\n    std::string region;\r\n    std::map<std::string, CacheEntry> cache;\r\n    int cache_hits;\r\n    int cache_misses;\r\n\r\n    EdgeNode(const std::string& n, const std::string& r)\r\n        : name(n), region(r), cache_hits(0), cache_misses(0) {}\r\n};\r\n\r\nclass CDNSimulator {\r\nprivate:\r\n    std::vector<EdgeNode> edges;\r\n    std::map<std::string, std::string> origin;\r\n    std::map<std::string, int> origins_loaded;\r\n    std::map<std::string, EdgeNode*> regional_cache;\r\n    std::mt19937 rng;\r\n    int tiered_hits;\r\n\r\npublic:\r\n    CDNSimulator() : rng(std::random_device{}()), tiered_hits(0) {}\r\n\r\n    void add_edge(const std::string& name, const std::string& region) {\r\n        edges.emplace_back(name, region);\r\n    }\r\n\r\n    void set_origin_content(const std::string& url, const std::string& content) {\r\n        origin[url] = content;\r\n    }\r\n\r\n    EdgeNode* nearest_edge(const std::string& client_region) {\r\n        std::map<std::string, int> region_latency = {\r\n            {\"tokyo\", 0}, {\"singapore\", 20},\r\n            {\"london\", 30}, {\"new-york\", 50},\r\n            {\"frankfurt\", 35}, {\"sydney\", 40}\r\n        };\r\n\r\n        int best_lat = INT_MAX;\r\n        EdgeNode* best = nullptr;\r\n        for (auto& edge : edges) {\r\n            auto it = region_latency.find(edge.region);\r\n            int lat = (it != region_latency.end()) ? it->second : 100;\r\n            if (client_region == edge.region) lat = 0;\r\n            if (lat < best_lat) {\r\n                best_lat = lat;\r\n                best = &edge;\r\n            }\r\n        }\r\n        return best;\r\n    }\r\n\r\n    std::string handle_request(const std::string& url, const std::string& client_region,\r\n                               int request_id, bool force_miss = false) {\r\n        EdgeNode* edge = nearest_edge(client_region);\r\n        if (!edge) return \"ERROR: No edge node\";\r\n\r\n        std::cout << \"Req#\" << request_id << \" [\" << client_region << \" → \"\r\n                  << edge->region << \"] GET \" << url;\r\n\r\n        // Check edge cache\r\n        auto cache_it = edge->cache.find(url);\r\n        if (!force_miss && cache_it != edge->cache.end() && !cache_it->second.expired()) {\r\n            edge->cache_hits++;\r\n            if (cache_it->second.is_stale_flag) {\r\n                std::cout << \" → EDGE HIT (stale, revalidating async)\\n\";\r\n            } else {\r\n                std::cout << \" → EDGE HIT\\n\";\r\n            }\r\n            return cache_it->second.content;\r\n        }\r\n        edge->cache_misses++;\r\n\r\n        // Check regional cache\r\n        auto regional_it = regional_cache.find(url);\r\n        if (!force_miss && regional_it != regional_cache.end()\r\n            && !regional_it->second->cache[url].expired()) {\r\n            tiered_hits++;\r\n            // Populate edge cache\r\n            CacheEntry entry = regional_it->second->cache[url];\r\n            entry.inserted_at = std::chrono::steady_clock::now();\r\n            edge->cache[url] = entry;\r\n            std::cout << \" → REGIONAL HIT (edge now populated)\\n\";\r\n            return regional_it->second->cache[url].content;\r\n        }\r\n\r\n        // Fetch from origin\r\n        auto origin_it = origin.find(url);\r\n        if (origin_it == origin.end()) {\r\n            std::cout << \" → 404 NOT FOUND\\n\";\r\n            return \"404\";\r\n        }\r\n\r\n        // Simulate origin load\r\n        origins_loaded[url] = origins_loaded[url] + 1;\r\n        int fetch_latency = 50 + (rng() % 100);\r\n\r\n        CacheEntry entry;\r\n        entry.content = origin_it->second;\r\n        entry.inserted_at = std::chrono::steady_clock::now();\r\n        entry.ttl_seconds = 86400;\r\n        entry.is_stale_flag = false;\r\n\r\n        // Populate both caches\r\n        regional_cache[url] = edge;\r\n        edge->cache[url] = entry;\r\n\r\n        std::cout << \" → ORIGIN FETCH (\" << fetch_latency << \"ms, load=\"\r\n                  << origins_loaded[url] << \")\\n\";\r\n        return origin_it->second;\r\n    }\r\n\r\n    void print_stats() {\r\n        int total_hits = 0, total_misses = 0;\r\n        std::cout << \"\\n=== CDN Statistics ===\\n\";\r\n        std::cout << std::left << std::setw(15) << \"Edge\"\r\n                  << std::setw(10) << \"Hits\" << std::setw(10) << \"Misses\"\r\n                  << std::setw(10) << \"Hit Rate\\n\";\r\n        std::cout << std::string(45, '-') << \"\\n\";\r\n        for (const auto& e : edges) {\r\n            int total = e.cache_hits + e.cache_misses;\r\n            double rate = total ? (100.0 * e.cache_hits / total) : 0;\r\n            std::cout << std::left << std::setw(15) << e.name\r\n                      << std::setw(10) << e.cache_hits << std::setw(10) << e.cache_misses\r\n                      << std::fixed << std::setprecision(1) << std::setw(10) << rate << \"%\\n\";\r\n            total_hits += e.cache_hits;\r\n            total_misses += e.cache_misses;\r\n        }\r\n        int global_total = total_hits + total_misses;\r\n        if (global_total > 0) {\r\n            std::cout << \"Global hit rate: \" << std::fixed << std::setprecision(1)\r\n                      << (100.0 * total_hits / global_total) << \"%\\n\";\r\n            std::cout << \"Origin offload: \" << (100.0 * total_hits / global_total) << \"%\\n\";\r\n        }\r\n    }\r\n};\r\n\r\nint main() {\r\n    CDNSimulator cdn;\r\n    cdn.add_edge(\"Edge-Tokyo\", \"tokyo\");\r\n    cdn.add_edge(\"Edge-London\", \"london\");\r\n    cdn.add_edge(\"Edge-NYC\", \"new-york\");\r\n\r\n    cdn.set_origin_content(\"/images/logo.png\", \"PNG binary data\");\r\n    cdn.set_origin_content(\"/static/style.css\", \"body { color: red; }\");\r\n    cdn.set_origin_content(\"/api/config\", \"{ \\\"version\\\": \\\"1.0\\\" }\");\r\n\r\n    std::cout << \"=== CDN Simulator ===\\n\\n\";\r\n\r\n    // First request → cache miss\r\n    cdn.handle_request(\"/images/logo.png\", \"tokyo\", 1, false);\r\n    // Second request → cache hit\r\n    cdn.handle_request(\"/images/logo.png\", \"tokyo\", 2, false);\r\n    // Different region → regional cache hit\r\n    cdn.handle_request(\"/images/logo.png\", \"singapore\", 3, false);\r\n    // Different content\r\n    cdn.handle_request(\"/static/style.css\", \"london\", 4, false);\r\n    cdn.handle_request(\"/api/config\", \"tokyo\", 5, false);\r\n    cdn.handle_request(\"/static/style.css\", \"london\", 6, false);\r\n    // Multiple regions\r\n    cdn.handle_request(\"/images/logo.png\", \"new-york\", 7, false);\r\n    cdn.handle_request(\"/images/logo.png\", \"new-york\", 8, false);\r\n    // Forced miss (simulate cache invalidation)\r\n    cdn.handle_request(\"/images/logo.png\", \"tokyo\", 9, true);\r\n\r\n    cdn.print_stats();\r\n\r\n    return 0;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-cdn-with-cache-hit-ratio-analysis",
      children: "Python Implementation: CDN with Cache Hit Ratio Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import time\r\nimport random\r\nfrom dataclasses import dataclass\r\nfrom typing import Optional\r\n\r\n\r\n@dataclass\r\nclass CacheEntry:\r\n    content: str\r\n    inserted_at: float\r\n    ttl: int\r\n\r\n\r\n@dataclass\r\nclass EdgeNode:\r\n    name: str\r\n    region: str\r\n    cache: dict = None\r\n    hits: int = 0\r\n    misses: int = 0\r\n\r\n    def __post_init__(self):\r\n        self.cache = {} if self.cache is None else self.cache\r\n\r\n\r\nclass CDN:\r\n    def __init__(self):\r\n        self.edges: list[EdgeNode] = []\r\n        self.origin: dict[str, str] = {}\r\n        self.origin_load: dict[str, int] = {}\r\n        self.regional_cache: dict[str, tuple[str, float, int]] = {}\r\n\r\n    def add_edge(self, name: str, region: str):\r\n        self.edges.append(EdgeNode(name=name, region=region))\r\n\r\n    def add_origin_content(self, url: str, content: str):\r\n        self.origin[url] = content\r\n\r\n    def _nearest_edge(self, client_region: str) -> Optional[EdgeNode]:\r\n        latency = {\r\n            \"tokyo\": {\"tokyo\": 0, \"singapore\": 15, \"london\": 30, \"new-york\": 50},\r\n            \"singapore\": {\"tokyo\": 20, \"singapore\": 0, \"london\": 35, \"new-york\": 55},\r\n            \"london\": {\"tokyo\": 30, \"singapore\": 35, \"london\": 0, \"new-york\": 10},\r\n            \"new-york\": {\"tokyo\": 50, \"singapore\": 55, \"london\": 10, \"new-york\": 0},\r\n        }\r\n        best_lat = float('inf')\r\n        best_edge = None\r\n        for edge in self.edges:\r\n            lat = latency.get(client_region, {}).get(edge.region, 100)\r\n            if lat < best_lat:\r\n                best_lat = lat\r\n                best_edge = edge\r\n        return best_edge\r\n\r\n    def request(self, url: str, client_region: str, req_id: int,\r\n                force_miss: bool = False) -> Optional[str]:\r\n        edge = self._nearest_edge(client_region)\r\n        if edge is None:\r\n            return None\r\n\r\n        now = time.time()\r\n        print(f\"Req#{req_id} [{client_region} → {edge.region}] GET {url}\", end=\"\")\r\n\r\n        # Edge cache\r\n        if not force_miss and url in edge.cache:\r\n            entry = edge.cache[url]\r\n            if now - entry.inserted_at < entry.ttl:\r\n                edge.hits += 1\r\n                print(f\" → EDGE HIT\")\r\n                return entry.content\r\n        edge.misses += 1\r\n\r\n        # Regional cache\r\n        if not force_miss and url in self.regional_cache:\r\n            content, ts, ttl = self.regional_cache[url]\r\n            if now - ts < ttl:\r\n                edge.cache[url] = CacheEntry(content=content, inserted_at=now, ttl=ttl)\r\n                edge.hits += 1\r\n                print(f\" → REGIONAL HIT (edge populated)\")\r\n                return content\r\n\r\n        # Origin fetch\r\n        if url not in self.origin:\r\n            print(f\" → 404\")\r\n            return None\r\n\r\n        content = self.origin[url]\r\n        self.origin_load[url] = self.origin_load.get(url, 0) + 1\r\n        fetch_time = random.randint(30, 150)\r\n\r\n        ttl = 86400\r\n        self.regional_cache[url] = (content, now, ttl)\r\n        edge.cache[url] = CacheEntry(content=content, inserted_at=now, ttl=ttl)\r\n\r\n        print(f\" → ORIGIN FETCH ({fetch_time}ms, origin_load={self.origin_load[url]})\")\r\n        return content\r\n\r\n    def stats(self):\r\n        total_hits = sum(e.hits for e in self.edges)\r\n        total_misses = sum(e.misses for e in self.edges)\r\n        total = total_hits + total_misses\r\n\r\n        print(f\"\\n=== CDN Stats ===\")\r\n        print(f\"{'Edge':<15} {'Hits':<8} {'Misses':<8} {'Hit Rate':<10}\")\r\n        print(\"-\" * 45)\r\n        for e in self.edges:\r\n            t = e.hits + e.misses\r\n            rate = (100 * e.hits / t) if t > 0 else 0\r\n            print(f\"{e.name:<15} {e.hits:<8} {e.misses:<8} {rate:<10.1f}%\")\r\n\r\n        if total > 0:\r\n            print(f\"\\nGlobal hit rate: {100 * total_hits / total:.1f}%\")\r\n            print(f\"Origin offload: {100 * total_hits / total:.1f}%\")\r\n            for url, load in sorted(self.origin_load.items()):\r\n                print(f\"  Origin load for {url}: {load}x\")\r\n\r\n\r\ncdn = CDN()\r\ncdn.add_edge(\"Edge-Tokyo\", \"tokyo\")\r\ncdn.add_edge(\"Edge-London\", \"london\")\r\ncdn.add_edge(\"Edge-NYC\", \"new-york\")\r\n\r\ncdn.add_origin_content(\"/img/hero.png\", \"hero_image_binary\")\r\ncdn.add_origin_content(\"/js/app.js\", \"console.log('app')\")\r\ncdn.add_origin_content(\"/css/main.css\", \"body{margin:0}\")\r\n\r\nprint(\"=== CDN Request Simulation ===\\n\")\r\ncacheable_urls = [\"/img/hero.png\", \"/js/app.js\", \"/css/main.css\"]\r\nfor i in range(20):\r\n    url = random.choice(cacheable_urls)\r\n    region = random.choice([\"tokyo\", \"london\", \"new-york\", \"singapore\", \"sydney\"])\r\n    force = random.random() < 0.05  # 5% chance of forced miss\r\n    cdn.request(url, region, i + 1, force_miss=force)\r\n    time.sleep(0.001)\r\n\r\ncdn.stats()\r\n\r\n# Cache hit ratio analysis\r\nprint(\"\\n=== Cache Hit Ratio Analysis ===\")\r\nsimulation_rounds = 5\r\nfor round_num in range(1, simulation_rounds + 1):\r\n    cdn2 = CDN()\r\n    cdn2.add_edge(\"E-Tokyo\", \"tokyo\")\r\n    cdn2.add_edge(\"E-London\", \"london\")\r\n    cdn2.add_edge(\"E-NYC\", \"new-york\")\r\n    for u in cacheable_urls:\r\n        cdn2.add_origin_content(u, f\"content_{u}\")\r\n    for _ in range(50):\r\n        url = random.choice(cacheable_urls)\r\n        region = random.choice([\"tokyo\", \"london\", \"new-york\"])\r\n        cdn2.request(url, region, 0)\r\n    hits = sum(e.hits for e in cdn2.edges)\r\n    total = hits + sum(e.misses for e in cdn2.edges)\r\n    print(f\"Round {round_num}: {50} requests, hit rate = {100 * hits / total:.1f}%\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-5",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Edge cache lookup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(C)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash table; C = cache entries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Origin fetch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N = content size; network I/O bound"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache invalidation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(C)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can clear entire cache or specific keys"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tiered cache fill"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(C)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write-through to 2 cache layers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DNS edge routing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log E)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(E)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "E = edge nodes; geo-based lookup"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-of-cdn",
      children: "Advantages & Disadvantages of CDN"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Content served from nearest edge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cold starts have origin latency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Origin offload"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80-95% reduction in origin requests"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache stampede on TTL expiry"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DDoS protection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Absorb large attacks at edge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared IP reputation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Global reach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Serve 200+ locations worldwide"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration complexity for multiple behaviors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduced bandwidth costs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CDN data transfer + purge request costs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-for-cdn",
      children: "Edge Cases for CDN"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cache stampede (thundering herd)"
        }), ": When popular content's TTL expires, all edge nodes fetch from origin simultaneously. Mitigate with: stale-while-revalidate, request collapsing, or probabilistic cache purging."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dynamic content bypass"
        }), ": CDN cannot cache personalized content. Use Cache-Control: no-cache or cookie-based cache key variation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cache invalidation cost"
        }), ": CloudFront charges $0.005 per invalidation path (first 1000 free). Use versioned URLs (", (0,jsx_runtime.jsx)(_components.code, {
          children: "/static/main.v2.js"
        }), ") to avoid purge costs entirely."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SSL/TLS at edge"
        }), ": CDN terminates TLS at the edge, re-encrypts to origin. Ensure origin supports the re-encryption cipher or the connection is in a trusted network."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Geo-restriction"
        }), ": CDN can block content by country based on client IP GeoIP database. Accuracy is ~99% for country level but lower for city/region."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Upload handling"
        }), ": CDN typically optimizes for downloads. For uploads, route directly to origin or use edge computing with specific upload endpoints."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "TypeScript Implementation: CDNManager"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface CacheEntry {\r\n  content: string;\r\n  insertedAt: number;\r\n  ttlMs: number;\r\n}\r\n\r\ninterface EdgeNodeConfig {\r\n  name: string;\r\n  region: string;\r\n  capacityGbps: number;\r\n}\r\n\r\ninterface OriginGroup {\r\n  urls: string[];\r\n  loadBalance: 'round-robin' | 'least-connections';\r\n}\r\n\r\ntype CacheLevel = 'edge' | 'regional' | 'origin';\r\n\r\nclass CDNManager {\r\n  private edgeNodes: Map<string, {\r\n    config: EdgeNodeConfig;\r\n    cache: Map<string, CacheEntry>;\r\n    hits: number;\r\n    misses: number;\r\n    bytesServed: number;\r\n  }> = new Map();\r\n\r\n  private regionalCache: Map<string, { content: string; insertedAt: number; ttlMs: number; region: string }> = new Map();\r\n  private originContent: Map<string, string> = new Map();\r\n  private originLoad: Map<string, number> = new Map();\r\n  private originHealth: Map<string, boolean> = new Map();\r\n\r\n  // Latency matrix: region → region → latency in ms\r\n  private static readonly LATENCY_MATRIX: Record<string, Record<string, number>> = {\r\n    'us-east-1':  { 'us-east-1': 0, 'us-west-2': 65,  'eu-west-1': 75,  'ap-southeast-1': 190, 'ap-northeast-1': 150 },\r\n    'us-west-2':  { 'us-east-1': 65, 'us-west-2': 0,  'eu-west-1': 140, 'ap-southeast-1': 120, 'ap-northeast-1': 100 },\r\n    'eu-west-1':  { 'us-east-1': 75, 'us-west-2': 140, 'eu-west-1': 0,  'ap-southeast-1': 160, 'ap-northeast-1': 240 },\r\n    'ap-southeast-1': { 'us-east-1': 190, 'us-west-2': 120, 'eu-west-1': 160, 'ap-southeast-1': 0, 'ap-northeast-1': 70 },\r\n    'ap-northeast-1': { 'us-east-1': 150, 'us-west-2': 100, 'eu-west-1': 240, 'ap-southeast-1': 70, 'ap-northeast-1': 0 }\r\n  };\r\n\r\n  constructor(private name: string) {}\r\n\r\n  addEdgeNode(config: EdgeNodeConfig): void {\r\n    this.edgeNodes.set(config.name, {\r\n      config,\r\n      cache: new Map(),\r\n      hits: 0,\r\n      misses: 0,\r\n      bytesServed: 0\r\n    });\r\n  }\r\n\r\n  addOriginContent(url: string, content: string): void {\r\n    this.originContent.set(url, content);\r\n    this.originHealth.set(url, true);\r\n  }\r\n\r\n  markOriginHealth(url: string, healthy: boolean): void {\r\n    this.originHealth.set(url, healthy);\r\n  }\r\n\r\n  private findNearestEdge(clientRegion: string): typeof this.edgeNodes extends Map<string, infer V> ? V : never {\r\n    let bestLatency = Infinity;\r\n    let bestEdge: any = null;\r\n\r\n    for (const [, edge] of this.edgeNodes) {\r\n      const regionLatencies = CDNManager.LATENCY_MATRIX[clientRegion];\r\n      if (!regionLatencies) continue;\r\n      const lat = regionLatencies[edge.config.region] ?? 500;\r\n      if (lat < bestLatency) {\r\n        bestLatency = lat;\r\n        bestEdge = edge;\r\n      }\r\n    }\r\n    return bestEdge;\r\n  }\r\n\r\n  private getTieredCacheTTL(contentType: string): number {\r\n    if (contentType.startsWith('/static/')) return 7 * 86400 * 1000;  // 7 days\r\n    if (contentType.startsWith('/img/')) return 86400 * 1000;          // 1 day\r\n    if (contentType.startsWith('/js/') || contentType.startsWith('/css/')) return 86400 * 1000;\r\n    if (contentType.startsWith('/api/')) return 60 * 1000;            // 1 min\r\n    return 300 * 1000;                                                  // 5 min default\r\n  }\r\n\r\n  request(url: string, clientRegion: string, reqId: number, forceMiss: boolean = false): string | null {\r\n    const edge = this.findNearestEdge(clientRegion);\r\n    if (!edge) {\r\n      console.log(`[${reqId}] ${clientRegion} → NO EDGE AVAILABLE`);\r\n      return null;\r\n    }\r\n\r\n    const contentType = url.substring(0, url.lastIndexOf('/') + 1);\r\n    const ttlMs = this.getTieredCacheTTL(contentType);\r\n    const now = Date.now();\r\n    let cacheLevel: CacheLevel;\r\n\r\n    console.log(`[${reqId}] ${clientRegion.padEnd(15)} → ${edge.config.name.padEnd(15)} GET ${url}`);\r\n\r\n    // Level 1: Edge cache\r\n    if (!forceMiss && edge.cache.has(url)) {\r\n      const entry = edge.cache.get(url)!;\r\n      if (now - entry.insertedAt < entry.ttlMs) {\r\n        edge.hits++;\r\n        edge.bytesServed += entry.content.length;\r\n        cacheLevel = 'edge';\r\n        console.log(`  → EDGE HIT (ttl_remaining=${(entry.ttlMs - (now - entry.insertedAt)) / 1000}s)`);\r\n        return entry.content;\r\n      }\r\n    }\r\n    edge.misses++;\r\n\r\n    // Level 2: Regional cache (shared among edges in same region group)\r\n    if (!forceMiss && this.regionalCache.has(url)) {\r\n      const regional = this.regionalCache.get(url)!;\r\n      if (now - regional.insertedAt < regional.ttlMs) {\r\n        // Populate edge cache from regional\r\n        edge.cache.set(url, { content: regional.content, insertedAt: now, ttlMs: regional.ttlMs });\r\n        edge.hits++;\r\n        edge.bytesServed += regional.content.length;\r\n        cacheLevel = 'regional';\r\n        console.log(`  → REGIONAL HIT (edge cached from regional)`);\r\n        return regional.content;\r\n      }\r\n    }\r\n\r\n    // Level 3: Origin fetch\r\n    if (!this.originContent.has(url)) {\r\n      console.log(`  → 404 NOT FOUND`);\r\n      return null;\r\n    }\r\n\r\n    if (!this.originHealth.get(url)) {\r\n      console.log(`  → 503 ORIGIN UNHEALTHY`);\r\n      return null;\r\n    }\r\n\r\n    const content = this.originContent.get(url)!;\r\n    const fetchLatency = Math.floor(Math.random() * 120 + 30); // 30-150ms\r\n    this.originLoad.set(url, (this.originLoad.get(url) ?? 0) + 1);\r\n\r\n    // Populate both cache tiers\r\n    this.regionalCache.set(url, { content, insertedAt: now, ttlMs });\r\n    edge.cache.set(url, { content, insertedAt: now, ttlMs });\r\n\r\n    cacheLevel = 'origin';\r\n    console.log(`  → ORIGIN FETCH (${fetchLatency}ms, origin_hits=${this.originLoad.get(url)}, ttl=${ttlMs / 1000}s)`);\r\n    return content;\r\n  }\r\n\r\n  invalidate(urlPattern: string): number {\r\n    let count = 0;\r\n    for (const [, edge] of this.edgeNodes) {\r\n      for (const key of edge.cache.keys()) {\r\n        if (key.includes(urlPattern)) {\r\n          edge.cache.delete(key);\r\n          count++;\r\n        }\r\n      }\r\n    }\r\n    // Also clear regional cache\r\n    for (const key of this.regionalCache.keys()) {\r\n      if (key.includes(urlPattern)) {\r\n        this.regionalCache.delete(key);\r\n        count++;\r\n      }\r\n    }\r\n    console.log(`[Invalidate] Cleared ${count} cache entries matching \"${urlPattern}\"`);\r\n    return count;\r\n  }\r\n\r\n  printStats(): void {\r\n    console.log(`\\n=== ${this.name} CDN Stats ===`);\r\n    console.log(`${'Edge Node':<20} ${'Region':<20} ${'Hits':<8} ${'Misses':<8} ${'Hit Rate':<10} ${'Bytes Served'}`);\r\n    console.log('-'.repeat(75));\r\n\r\n    let totalHits = 0, totalMisses = 0, totalBytes = 0;\r\n\r\n    for (const [, edge] of this.edgeNodes) {\r\n      const total = edge.hits + edge.misses;\r\n      const rate = total > 0 ? (100 * edge.hits / total).toFixed(1) : '0.0';\r\n      totalHits += edge.hits;\r\n      totalMisses += edge.misses;\r\n      totalBytes += edge.bytesServed;\r\n      console.log(\r\n        `${edge.config.name.padEnd(20)} ${edge.config.region.padEnd(20)} ` +\r\n        `${String(edge.hits).padEnd(8)} ${String(edge.misses).padEnd(8)} ` +\r\n        `${rate.padEnd(10)} ${(edge.bytesServed / 1024).toFixed(1)} KB`\r\n      );\r\n    }\r\n\r\n    const allTotal = totalHits + totalMisses;\r\n    const globalRate = allTotal > 0 ? (100 * totalHits / allTotal).toFixed(1) : '0.0';\r\n    console.log('-'.repeat(75));\r\n    console.log(`GLOBAL: hit_rate=${globalRate}%, origin_offload=${globalRate}%, total_bytes=${(totalBytes / 1024).toFixed(1)} KB`);\r\n\r\n    console.log('\\nOrigin Load:');\r\n    for (const [url, load] of this.originLoad) {\r\n      console.log(`  ${url.padEnd(30)} ${load} requests`);\r\n    }\r\n  }\r\n}\r\n\r\n// Usage example\r\nfunction demoCDNManager() {\r\n  const cdn = new CDNManager('GlobalCache');\r\n  cdn.addEdgeNode({ name: 'Edge-NYC',    region: 'us-east-1',      capacityGbps: 100 });\r\n  cdn.addEdgeNode({ name: 'Edge-London', region: 'eu-west-1',      capacityGbps: 50 });\r\n  cdn.addEdgeNode({ name: 'Edge-Tokyo',  region: 'ap-northeast-1', capacityGbps: 40 });\r\n\r\n  cdn.addOriginContent('/static/logo.png', 'PNG_BINARY');\r\n  cdn.addOriginContent('/js/bundle.js', \"console.log('hello');\");\r\n  cdn.addOriginContent('/css/styles.css', 'body { font: 16px sans-serif; }');\r\n  cdn.addOriginContent('/api/health', '{\"status\":\"ok\"}');\r\n\r\n  // Simulate requests from different regions\r\n  const urls = ['/static/logo.png', '/js/bundle.js', '/css/styles.css', '/api/health'];\r\n  const regions = ['us-east-1', 'eu-west-1', 'ap-northeast-1', 'ap-southeast-1'];\r\n  let reqId = 1;\r\n\r\n  for (let round = 0; round < 3; round++) {\r\n    for (const url of urls) {\r\n      for (const region of regions) {\r\n        const force = Math.random() < 0.1; // 10% forced miss (simulate cache bust)\r\n        cdn.request(url, region, reqId++, force);\r\n      }\r\n    }\r\n  }\r\n\r\n  cdn.printStats();\r\n  // Output (will vary due to randomness):\r\n  // GlobalCache CDN Stats:\r\n  // Edge Node            Region               Hits     Misses   Hit Rate   Bytes Served\r\n  // -------------------------------------------------------------------------\r\n  // Edge-NYC             us-east-1            10       2        83.3%      3.2 KB\r\n  // Edge-London          eu-west-1            9        3        75.0%      2.9 KB\r\n  // Edge-Tokyo           ap-northeast-1       11       1        91.7%      3.5 KB\r\n  // -------------------------------------------------------------------------\r\n  // GLOBAL: hit_rate=83.3%, origin_offload=83.3%, total_bytes=9.6 KB\r\n\r\n  // Invalidate versioned content\r\n  cdn.invalidate('/js/');\r\n}\r\n\r\ndemoCDNManager();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "169-cdn-vs-direct-connection",
      children: "16.9 CDN vs Direct Connection"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Dimension"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CDN (Edge Caching)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Direct (Direct Connect / ExpressRoute)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Primary function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache static/dynamic content near users"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dedicated private link to cloud"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-10ms (cache hit), varies on miss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-5ms (consistent)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bandwidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scales with edge nodes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-100 Gbps per connection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Content type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mostly cacheable (static, semi-dynamic)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All traffic (raw data, DB replication)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Protocol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP/HTTPS, WebSocket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any IP-based protocol"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TLS termination, WAF at edge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Private, no internet transit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web content delivery, video streaming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Database sync, large data migration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cost model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per GB served, per request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Port hours + data transfer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Setup time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minutes (DNS change)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weeks-months (physical circuit)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Geographic scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global (200+ locations)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regional (per DX location, then cloud region)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache hit rate impact"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80-95% offload"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A (no caching)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use CDN:"
      }), " User-facing content delivery, media streaming, API acceleration. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use Direct Connect:"
      }), " Private back-end connectivity, large-scale data transfer, compliance requiring no internet transit."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1610-vpn-to-cloud",
      children: "16.10 VPN to Cloud"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-6",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A VPN to the cloud is like a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "secure armored tunnel through a public highway"
      }), ". Your office (on-premises network) needs to send sensitive documents to a bank's vault (cloud VPC). Rather than sending couriers on public roads (internet), you build a secure underground tunnel (IPSec tunnel) between your office basement and the bank's basement. Only authorized vehicles (encrypted packets) can enter. The tunnel itself is invisible to anyone on the surface, and any attempt to intercept the vehicles just reveals scrambled nonsense."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-cloud-vpn-works-step-by-step",
      children: "How Cloud VPN Works: Step-by-Step"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Gateway creation"
          }), " → Create a VPN gateway in the cloud VPC and configure a customer gateway (CGW) representing the on-premises VPN device."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Tunnel negotiation"
          }), " → The cloud gateway and on-premises device establish two IPSec tunnels (for high availability) using IKE (Internet Key Exchange) v1 or v2."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Authentication"
          }), " → Pre-shared keys (PSK) or certificates authenticate both endpoints. Phase 1 (IKE SA) establishes a secure management channel."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "IPSec child SA"
          }), " → Phase 2 establishes the actual data encryption parameters: AES-256 encryption, SHA-256 hashing, Diffie-Hellman group 14/16 key exchange."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Route propagation"
          }), " → The cloud VPC learns on-premises routes via BGP over the tunnel (dynamic VPN) or static route entries."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Traffic flow"
          }), " → Packets from on-premises to cloud are encrypted, encapsulated, sent over the internet, decrypted by the VPN gateway, and forwarded within the VPC."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "NAT traversal"
          }), " → If both ends use NAT devices, UDP encapsulation (4500) wraps ESP packets to traverse NAT."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-ipsec-vpn-tunnel-establishment",
      children: "Pseudocode: IPSec VPN Tunnel Establishment"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE establish_ipsec_tunnel(cloud_gw, onprem_gw, psk):\r\n    // Phase 1: IKE SA\r\n    LOG \"Starting IKE Phase 1 (Main Mode)\"\r\n\r\n    cloud_gw.send({ SA: proposals[encryption, hash, dh_group] })\r\n    onprem_gw.select_proposal()\r\n    onprem_gw.send({ SA: selected })\r\n\r\n    cloud_gw.send({ KE: dh_public_key, NONCE: random_nonce })\r\n    onprem_gw.send({ KE: dh_public_key, NONCE: random_nonce })\r\n\r\n    shared_secret = diffie_hellman(cloud_gw.dh_private, onprem_gw.dh_public)\r\n\r\n    cloud_gw.send({ ID: cloud_gw.ip, AUTH: hmac(psk, shared_secret) })\r\n    onprem_gw.send({ ID: onprem_gw.ip, AUTH: hmac(psk, shared_secret) })\r\n\r\n    // Phase 2: IPSec SA\r\n    LOG \"IKE Phase 1 complete. Starting Phase 2 (Quick Mode)\"\r\n\r\n    cloud_gw.send({ IPSEC_SA: proposals, NONCE: nonce2 })\r\n    onprem_gw.select_ipsec_proposal()\r\n    onprem_gw.send({ IPSEC_SA: selected, NONCE: nonce2_resp })\r\n\r\n    // Establish tunnel\r\n    spi_cloud = random_spi()\r\n    spi_onprem = random_spi()\r\n    encryption_key = derive_key(shared_secret, nonces)\r\n\r\n    LOG \"IPSec tunnel established\"\r\n    LOG \"Encryption: AES-256-GCM, Auth: SHA-256\"\r\n    LOG \"SPI (cloud→onprem): \" + spi_cloud\r\n    LOG \"SPI (onprem→cloud): \" + spi_onprem\r\n\r\n    RETURN { spi_cloud, spi_onprem, encryption_key }\r\nEND PROCEDURE\r\n\r\nPROCEDURE encrypt_and_send(packet, tunnel, route_table):\r\n    src_check = route_lookup(packet.dst_ip, route_table)\r\n\r\n    IF src_check.target != \"VPN_GATEWAY\":\r\n        ROUTE normally\r\n        RETURN\r\n\r\n    esp_header = create_esp_header(\r\n        spi: tunnel.spi_onprem,\r\n        sequence: tunnel.seq_counter++,\r\n        payload: ENCRYPT(packet, tunnel.encryption_key),\r\n        auth: HMAC(packet + esp_header, tunnel.auth_key)\r\n    )\r\n\r\n    // UDP encapsulation for NAT traversal\r\n    udp_wrap = udp_header(src_port: 4500, dst_port: 4500)\r\n    outer_ip = ip_header(src: cloud_gw.public_ip, dst: onprem_gw.public_ip)\r\n\r\n    SEND(outer_ip + udp_wrap + esp_header)\r\n    LOG \"Sent encrypted packet seq=\" + esp_header.sequence\r\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace-cloud-vpn-connectivity",
      children: "Dry Run Trace: Cloud VPN Connectivity"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "VPC:"
      }), " 10.0.0.0/16 (us-east-1)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "On-premises:"
      }), " 192.168.0.0/16\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tunnel:"
      }), " Two IPSec tunnels (primary and secondary)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Configuration:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AES-256-GCM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hashing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA-256"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DH Group"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "14 (2048-bit MODP)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IKE Version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BGP ASN (Cloud)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64512"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BGP ASN (On-prem)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "65000"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace: On-prem host (192.168.1.10) → Cloud instance (10.0.1.50)"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On-prem host"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sends packet: 192.168.1.10 → 10.0.1.50:443"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On-prem router"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Route lookup: 10.0.0.0/16 → tunnel interface"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VPN device"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encrypt packet with AES-256-GCM, SPI=0x1234ABCD"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VPN device"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add ESP header, UDP encapsulate (port 4500)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Outer IP: 203.0.113.5 → 72.21.210.10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud VPN GW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decrypt ESP packet, verify HMAC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud VPN GW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward decrypted packet: 10.0.1.50"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VPC route table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10.0.1.50 → subnet-local → instance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security group"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allow inbound TCP/443 from 192.168.0.0/16"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EC2 instance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process request"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace: Tunnel failover (primary tunnel disconnects)"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary tunnel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DPD (Dead Peer Detection) timeout after 30s"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VPN GW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Marks primary tunnel DOWN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VPN GW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BGP withdraws routes from primary tunnel"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VPN GW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Falls back to secondary tunnel"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BGP re-establish"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Routes advertised over secondary tunnel"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Traffic re-routed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All on-prem→VPC traffic via secondary"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failover time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~15-60 seconds total (DPD + BGP convergence)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation-vpn-tunnel-simulator",
      children: "C++ Implementation: VPN Tunnel Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\n#include <string>\r\n#include <vector>\r\n#include <map>\r\n#include <sstream>\r\n#include <iomanip>\r\n#include <random>\r\n#include <thread>\r\n#include <chrono>\r\n\r\nstruct IPSecPacket {\r\n    uint32_t spi;\r\n    uint32_t sequence;\r\n    std::string src_ip;\r\n    std::string dst_ip;\r\n    std::string encrypted_payload;\r\n    bool valid;\r\n};\r\n\r\nstruct Tunnel {\r\n    std::string id;\r\n    bool active;\r\n    uint32_t spi_in;\r\n    uint32_t spi_out;\r\n    uint32_t seq_counter;\r\n    std::string encryption_alg;\r\n    int latency_ms;\r\n};\r\n\r\nclass CloudVPN {\r\nprivate:\r\n    std::vector<Tunnel> tunnels;\r\n    std::map<std::string, std::string> route_table;\r\n    std::string vpc_cidr;\r\n    std::string onprem_cidr;\r\n    std::mt19937 rng;\r\n\r\npublic:\r\n    CloudVPN(const std::string& vpc, const std::string& onprem)\r\n        : vpc_cidr(vpc), onprem_cidr(onprem), rng(std::random_device{}()) {}\r\n\r\n    void add_tunnel(const std::string& id, uint32_t spi_in, uint32_t spi_out) {\r\n        Tunnel t;\r\n        t.id = id;\r\n        t.active = true;\r\n        t.spi_in = spi_in;\r\n        t.spi_out = spi_out;\r\n        t.seq_counter = 0;\r\n        t.encryption_alg = \"AES-256-GCM\";\r\n        t.latency_ms = 10 + (rng() % 20);\r\n        tunnels.push_back(t);\r\n    }\r\n\r\n    void set_active_tunnel(const std::string& id, bool active) {\r\n        for (auto& t : tunnels) {\r\n            if (t.id == id) {\r\n                t.active = active;\r\n                std::cout << \"Tunnel \" << id\r\n                          << (active ? \" activated\" : \" deactivated\") << \"\\n\";\r\n                return;\r\n            }\r\n        }\r\n    }\r\n\r\n    void add_route(const std::string& destination, const std::string& target) {\r\n        route_table[destination] = target;\r\n    }\r\n\r\n    bool in_cidr(const std::string& ip, const std::string& cidr) {\r\n        size_t slash = cidr.find('/');\r\n        std::string cidr_ip = cidr.substr(0, slash);\r\n        int prefix = std::stoi(cidr.substr(slash + 1));\r\n\r\n        auto parse = [](const std::string& s) -> uint32_t {\r\n            std::stringstream ss(s);\r\n            int a,b,c,d; char ch;\r\n            ss >> a >> ch >> b >> ch >> c >> ch >> d;\r\n            return (a << 24) | (b << 16) | (c << 8) | d;\r\n        };\r\n\r\n        uint32_t ip_val = parse(ip);\r\n        uint32_t cidr_val = parse(cidr_ip);\r\n        uint32_t mask = (prefix == 0) ? 0 : (0xFFFFFFFF << (32 - prefix));\r\n        return (ip_val & mask) == (cidr_val & mask);\r\n    }\r\n\r\n    void send_packet(const std::string& src, const std::string& dst,\r\n                     int port, const std::string& protocol, int packet_id) {\r\n        std::cout << \"\\nPacket#\" << packet_id << \": \" << src << \" → \"\r\n                  << dst << \":\" << port << \" \" << protocol;\r\n\r\n        // Determine direction\r\n        bool to_cloud = in_cidr(dst, vpc_cidr);\r\n\r\n        // Find active tunnel\r\n        Tunnel* active_tunnel = nullptr;\r\n        for (auto& t : tunnels) {\r\n            if (t.active) { active_tunnel = &t; break; }\r\n        }\r\n\r\n        if (!active_tunnel) {\r\n            std::cout << \" → DROPPED (no active tunnel)\\n\";\r\n            return;\r\n        }\r\n\r\n        if (to_cloud) {\r\n            std::cout << \" [on-prem→cloud]\";\r\n            // Encrypt\r\n            active_tunnel->seq_counter++;\r\n            std::cout << \" → Encrypt (SPI=0x\" << std::hex << active_tunnel->spi_out\r\n                      << std::dec << \", seq=\" << active_tunnel->seq_counter << \")\";\r\n            std::cout << \" → Tunnel \" << active_tunnel->id\r\n                      << \" (\" << active_tunnel->latency_ms << \"ms)\";\r\n            std::this_thread::sleep_for(std::chrono::milliseconds(5));\r\n\r\n            // Decrypt at cloud end\r\n            std::cout << \" → Decrypt → Forward to \" << dst;\r\n            std::cout << \" → DELIVERED\\n\";\r\n        } else {\r\n            std::cout << \" [cloud→on-prem]\";\r\n            active_tunnel->seq_counter++;\r\n            std::cout << \" → Encrypt\";\r\n            std::cout << \" → Tunnel \" << active_tunnel->id;\r\n            std::cout << \" → Decrypt → Forward to \" << dst;\r\n            std::cout << \" → DELIVERED\\n\";\r\n        }\r\n    }\r\n\r\n    void failover_test() {\r\n        std::cout << \"\\n=== TUNNEL FAILOVER TEST ===\\n\";\r\n        send_packet(\"192.168.1.10\", \"10.0.1.50\", 443, \"TCP\", 1);\r\n        send_packet(\"192.168.1.10\", \"10.0.1.50\", 443, \"TCP\", 2);\r\n\r\n        std::cout << \"\\n-- Primary tunnel failure --\\n\";\r\n        set_active_tunnel(\"tun-1\", false);\r\n\r\n        send_packet(\"192.168.1.10\", \"10.0.1.50\", 443, \"TCP\", 3);\r\n        send_packet(\"192.168.1.10\", \"10.0.1.50\", 443, \"TCP\", 4);\r\n\r\n        set_active_tunnel(\"tun-1\", true);\r\n    }\r\n\r\n    void print_status() {\r\n        std::cout << \"\\n=== VPN Status ===\\n\";\r\n        std::cout << \"VPC CIDR: \" << vpc_cidr << \"\\n\";\r\n        std::cout << \"On-prem CIDR: \" << onprem_cidr << \"\\n\\n\";\r\n        std::cout << std::left << std::setw(12) << \"Tunnel\"\r\n                  << std::setw(8) << \"Status\"\r\n                  << std::setw(12) << \"Encryption\"\r\n                  << std::setw(8) << \"Latency\"\r\n                  << std::setw(12) << \"SPI Out\"\r\n                  << \"Seq Count\\n\";\r\n        std::cout << std::string(65, '-') << \"\\n\";\r\n        for (const auto& t : tunnels) {\r\n            std::cout << std::left << std::setw(12) << t.id\r\n                      << std::setw(8) << (t.active ? \"UP\" : \"DOWN\")\r\n                      << std::setw(12) << t.encryption_alg\r\n                      << std::setw(8) << std::to_string(t.latency_ms) + \"ms\"\r\n                      << std::hex << std::setw(12) << t.spi_out\r\n                      << std::dec << std::to_string(t.seq_counter) << \"\\n\";\r\n        }\r\n    }\r\n};\r\n\r\nint main() {\r\n    CloudVPN vpn(\"10.0.0.0/16\", \"192.168.0.0/16\");\r\n    vpn.add_tunnel(\"tun-1\", 0xABCD1234, 0x1234ABCD);\r\n    vpn.add_tunnel(\"tun-2\", 0xEFGH5678, 0x5678EFGH);\r\n\r\n    vpn.print_status();\r\n    vpn.failover_test();\r\n    vpn.print_status();\r\n\r\n    return 0;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-cloud-vpn-simulator",
      children: "Python Implementation: Cloud VPN Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import time\r\nimport random\r\nfrom dataclasses import dataclass\r\nfrom typing import Optional\r\nimport ipaddress\r\n\r\n\r\n@dataclass\r\nclass Tunnel:\r\n    tunnel_id: str\r\n    active: bool\r\n    spi_in: int\r\n    spi_out: int\r\n    seq_counter: int = 0\r\n    encryption: str = \"AES-256-GCM\"\r\n    latency_ms: int = 15\r\n\r\n\r\nclass CloudVPN:\r\n    def __init__(self, vpc_cidr: str, onprem_cidr: str):\r\n        self.vpc_network = ipaddress.IPv4Network(vpc_cidr, strict=False)\r\n        self.onprem_network = ipaddress.IPv4Network(onprem_cidr, strict=False)\r\n        self.tunnels: list[Tunnel] = []\r\n\r\n    def add_tunnel(self, tunnel_id: str, spi_in: int, spi_out: int):\r\n        self.tunnels.append(Tunnel(\r\n            tunnel_id=tunnel_id, active=True,\r\n            spi_in=spi_in, spi_out=spi_out,\r\n            latency_ms=random.randint(5, 25)\r\n        ))\r\n\r\n    def set_tunnel_state(self, tunnel_id: str, active: bool):\r\n        for t in self.tunnels:\r\n            if t.tunnel_id == tunnel_id:\r\n                t.active = active\r\n                print(f\"  Tunnel {tunnel_id}: {'ACTIVE' if active else 'INACTIVE'}\")\r\n\r\n    def get_active_tunnel(self) -> Optional[Tunnel]:\r\n        for t in self.tunnels:\r\n            if t.active:\r\n                return t\r\n        return None\r\n\r\n    def send_packet(self, src: str, dst: str, port: int,\r\n                    protocol: str, packet_id: int):\r\n        dst_ip = ipaddress.IPv4Address(dst)\r\n        to_cloud = dst_ip in self.vpc_network\r\n        direction = \"on-prem→cloud\" if to_cloud else \"cloud→on-prem\"\r\n\r\n        print(f\"\\nPkt#{packet_id}: {src}→{dst}:{port} {protocol} [{direction}]\", end=\"\")\r\n\r\n        tunnel = self.get_active_tunnel()\r\n        if tunnel is None:\r\n            print(\" → DROPPED (no active tunnel)\", end=\"\")\r\n            return\r\n\r\n        tunnel.seq_counter += 1\r\n        time.sleep(0.01)\r\n\r\n        enc = tunnel.encryption\r\n        print(f\" → Encrypt({enc} SPI=0x{tunnel.spi_out:08X} seq={tunnel.seq_counter})\", end=\"\")\r\n        print(f\" → Tunnel({tunnel.tunnel_id} {tunnel.latency_ms}ms)\", end=\"\")\r\n        print(f\" → Decrypt → DELIVERED to {dst}\")\r\n\r\n    def failover_simulation(self):\r\n        print(\"\\n=== VPN TUNNEL FAILOVER SIMULATION ===\")\r\n        self.send_packet(\"192.168.1.10\", \"10.0.1.50\", 443, \"TCP\", 1)\r\n        self.send_packet(\"192.168.1.11\", \"10.0.1.51\", 80, \"TCP\", 2)\r\n        print(\"\\n-- Primary tunnel failure --\")\r\n        self.set_tunnel_state(\"tun-1\", False)\r\n        self.send_packet(\"192.168.1.10\", \"10.0.1.50\", 443, \"TCP\", 3)\r\n        print(\"\\n-- Primary tunnel restored --\")\r\n        self.set_tunnel_state(\"tun-1\", True)\r\n        self.send_packet(\"192.168.1.12\", \"10.0.1.52\", 22, \"TCP\", 4)\r\n\r\n    def status(self):\r\n        print(f\"\\n=== VPN Status ===\")\r\n        print(f\"VPC: {self.vpc_network}, On-prem: {self.onprem_network}\")\r\n        print(f\"{'Tunnel':<10} {'Status':<8} {'Encryption':<14} {'Latency':<8} {'SPI Out':<12} Seq\")\r\n        print(\"-\" * 65)\r\n        for t in self.tunnels:\r\n            print(f\"{t.tunnel_id:<10} {'UP' if t.active else 'DOWN':<8} \"\r\n                  f\"{t.encryption:<14} {t.latency_ms}ms    \"\r\n                  f\"0x{t.spi_out:<08X}  {t.seq_counter}\")\r\n\r\n\r\nvpn = CloudVPN(\"10.0.0.0/16\", \"192.168.0.0/16\")\r\nvpn.add_tunnel(\"tun-1\", 0xABCD1234, 0x1234ABCD)\r\nvpn.add_tunnel(\"tun-2\", 0x5678EFGH, 0xEFGH5678)\r\nvpn.status()\r\nvpn.failover_simulation()\r\nvpn.status()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-6",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IKE Phase 1 (4 messages)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed 4-message exchange with DH"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IKE Phase 2 (3 messages)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed 3-message quick mode"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AES-256 encryption (per packet)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N = packet size; block cipher per 16-byte block"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HMAC verification (per packet)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash entire payload once"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BGP route propagation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(R)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(R)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R = route prefixes; BGP update per prefix"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why AES-256 is O(N) and not O(1):"
      }), " Each 16-byte block must be encrypted sequentially. A 1500-byte packet requires ~94 AES block operations. Hardware AES-NI instructions make this ~1 CPU cycle per byte, which is 1.5μs for a 1500-byte packet at 1GHz."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-of-cloud-vpn",
      children: "Advantages & Disadvantages of Cloud VPN"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low cost vs dedicated circuits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internet transit adds latency (10-50ms)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AES-256 encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overhead (5-15% throughput reduction)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Availability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dual tunnels for HA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dependent on internet reliability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Setup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minutes to configure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity of IKE/IPSec parameters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bandwidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to 10 Gbps per tunnel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared internet, no guaranteed throughput"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-for-cloud-vpn",
      children: "Edge Cases for Cloud VPN"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NAT traversal"
        }), ": If both VPN endpoints are behind NAT, ESP packets are dropped. Use UDP encapsulation (port 4500) to wrap ESP in UDP. Enable \"Force UDP encapsulation\" on cloud VPN."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MTU issues"
        }), ": IPSec adds 50-70 bytes of overhead. With standard 1500 MTU, effective payload is 1430 bytes. Set MSS clamping (TCP MSS = 1430) to avoid fragmentation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DPD (Dead Peer Detection)"
        }), ": Both ends must agree on DPD interval (default 10-30s). Mismatched DPD causes false failover."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Route overlap"
        }), ": On-prem CIDR must not overlap with VPC CIDR. If overlap exists, you need NAT rules on the VPN gateway to translate overlapping addresses."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Asymmetric routing"
        }), ": With two tunnels, return traffic must use the same tunnel as forward traffic. BGP AS_PATH prepending or MED values control path selection."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1611-direct-connect--expressroute",
      children: "16.11 Direct Connect / ExpressRoute"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-7",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Direct Connect is like a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "private subway line between your office building and the bank's main vault"
      }), ". Unlike the VPN's armored truck on public roads (which can get stuck in traffic), the subway line is a dedicated tunnel that only your employees use. There's no traffic, no weather delays, and no chance of highway robbery. However, building the subway takes months of digging permits and construction contracts (physical circuit provisioning), while the armored truck can start running today."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-direct-connect-works-step-by-step",
      children: "How Direct Connect Works: Step-by-Step"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Request connection"
          }), " → Order a Direct Connect port from AWS/Azure/GCP at a supported DX location (colocation facility)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Cross-connect"
          }), " → Work with the facility to physically connect your cage to the provider's router. This is a single-mode fiber cross-connect."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "VLAN configuration"
          }), " → Create a VLAN on the physical connection. Each virtual interface (VIF) maps to a VLAN ID (802.1Q)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BGP peering"
          }), " → Run BGP (public or private VIF) between your router and the provider's router. Private VIF reaches VPCs; public VIF reaches public services."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Route propagation"
          }), " → Advertise on-premises prefixes via BGP. Cloud VPC learns routes and sends return traffic through the DX connection."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Traffic flow"
          }), " → On-premises → DX location → provider network → VPC. No internet transit at any point."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-direct-connect-bgp-session-setup",
      children: "Pseudocode: Direct Connect BGP Session Setup"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE setup_direct_connect(dx_location, vlan_id, bgp_asn, vpc_cidrs):\r\n    // Step 1: Order physical connection\r\n    dx_port = request_dx_port({\r\n        location: dx_location,\r\n        bandwidth: \"10Gbps\",\r\n        port_type: \"10GBASE-SR\"\r\n    })\r\n    LOG \"Direct Connect port provisioned: \" + dx_port.port_id\r\n\r\n    // Step 2: Create virtual interface\r\n    private_vif = create_virtual_interface({\r\n        vlan_id: vlan_id,\r\n        bgp_asn: bgp_asn,\r\n        auth_key: generate_md5_bgp_auth(),\r\n        type: \"private\"\r\n    })\r\n    LOG \"Private VIF created with VLAN \" + vlan_id\r\n\r\n    // Step 3: BGP session\r\n    bgp_session = create_bgp_session({\r\n        local_ip: dx_port.router_ip,\r\n        peer_ip: customer_router_ip,\r\n        local_asn: 64512,          // Cloud side\r\n        peer_asn: bgp_asn,         // Customer side\r\n        auth_md5: private_vif.auth_key,\r\n        hold_time: 90\r\n    })\r\n\r\n    // Step 4: Advertise prefixes\r\n    bgp_session.send_UPDATE({\r\n        network_layer_reachability: vpc_cidrs,  // Cloud → On-prem\r\n        next_hop: dx_port.router_ip,\r\n        as_path: [64512],\r\n        communities: [\"7224:9100\"]  // AWS direct connect\r\n    })\r\n\r\n    // Receive on-prem prefixes\r\n    received = bgp_session.receive_UPDATE()\r\n    FOR each prefix in received.nlri:\r\n        route_table.add(prefix, target: \"dx-vif-\" + vif_id)\r\n        LOG \"Learned route: \" + prefix + \" via Direct Connect\"\r\n\r\n    LOG \"BGP session established, \" + len(vpc_cidrs) + \" routes advertised\"\r\n    RETURN bgp_session\r\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace-direct-connect-packet-flow",
      children: "Dry Run Trace: Direct Connect Packet Flow"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Setup:"
      }), " On-prem (192.168.0.0/16) → DX Location (Equinix NY7) → AWS us-east-1 (10.0.0.0/16)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "BGP:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cloud ASN: 64512, Advertises: 10.0.0.0/16"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "On-prem ASN: 65000, Advertises: 192.168.0.0/16"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace: On-prem DB sync → VPC RDS"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Location"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Latency"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On-prem server (192.168.1.50)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sends DB replication data to 10.0.1.100:3306"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On-prem switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forwards to DX router"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.1ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DX router"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BGP lookup: 10.0.0.0/16 → Direct Connect VIF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.01ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-connect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Physical fiber to AWS DX location cage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.1ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWS Direct Connect router"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BGP lookup: VLAN 100 → VPC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.01ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWS backbone"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal routing to us-east-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transit Gateway"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Route: 10.0.1.100 → VPC attachment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.05ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VPC route table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10.0.1.100 → subnet-local"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.01ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security Group"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allow inbound TCP/3306 from 192.168.0.0/16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.01ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RDS instance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receive and process"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Total"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "~3.3ms"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace: VPN equivalent (for comparison)"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Latency"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1-2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as Direct Connect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.1ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VPN device encrypts packet (AES-256)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.5ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UDP encapsulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.1ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Packet travels over public internet (NY → Virginia)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "18ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud VPN GW decryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.5ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7-10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as Direct Connect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Total VPN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "~22ms"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Direct Connect vs VPN latency savings: ~85% reduction (3.3ms vs 22ms)."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation-direct-connect-bandwidth-calculator",
      children: "C++ Implementation: Direct Connect Bandwidth Calculator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\n#include <iomanip>\r\n#include <string>\r\n#include <cmath>\r\n\r\nint main() {\r\n    std::cout << \"=== Direct Connect Bandwidth Calculator ===\\n\\n\";\r\n\r\n    struct DXOption {\r\n        std::string speed;\r\n        double gbps;\r\n        double monthly_cost;\r\n        double per_gb_cost;\r\n    };\r\n\r\n    DXOption options[] = {\r\n        {\"1 Gbps\",  1.0,   200.0,  0.02},\r\n        {\"10 Gbps\", 10.0,  2000.0, 0.015},\r\n        {\"100 Gbps\", 100.0, 15000.0, 0.01}\r\n    };\r\n\r\n    double daily_data_gb;\r\n    std::cout << \"Enter daily data transfer (GB): \";\r\n    std::cin >> daily_data_gb;\r\n\r\n    double monthly_data_gb = daily_data_gb * 30;\r\n    double peak_gbps = (daily_data_gb * 8) / (24 * 3600);  // Average\r\n\r\n    std::cout << \"\\nMonthly transfer: \" << std::fixed << std::setprecision(1)\r\n              << monthly_data_gb << \" GB\\n\";\r\n    std::cout << \"Average throughput: \" << std::setprecision(2) << peak_gbps << \" Gbps\\n\\n\";\r\n\r\n    std::cout << std::left << std::setw(15) << \"DX Speed\"\r\n              << std::setw(12) << \"Port Cost\"\r\n              << std::setw(15) << \"Data Cost\"\r\n              << std::setw(15) << \"Total/Month\"\r\n              << \"Sufficient?\\n\";\r\n    std::cout << std::string(72, '-') << \"\\n\";\r\n\r\n    for (const auto& opt : options) {\r\n        double data_cost = monthly_data_gb * opt.per_gb_cost;\r\n        double total = opt.monthly_cost + data_cost;\r\n        bool sufficient = opt.gbps >= peak_gbps;\r\n        std::cout << std::left << std::setw(15) << opt.speed\r\n                  << \"$\" << std::setw(10) << std::fixed << std::setprecision(0) << opt.monthly_cost\r\n                  << \"$\" << std::setw(13) << std::setprecision(0) << data_cost\r\n                  << \"$\" << std::setw(13) << total\r\n                  << (sufficient ? \"YES\" : \"NO\") << \"\\n\";\r\n    }\r\n\r\n    // VPN comparison\r\n    double vpn_cost = 32.0 + (monthly_data_gb * 0.05);\r\n    std::cout << \"\\n--- VPN Comparison ---\\n\";\r\n    std::cout << \"Site-to-Site VPN monthly cost: $\" << std::setprecision(0) << vpn_cost << \"\\n\";\r\n    std::cout << \"VPN includes internet transit, no SLA on latency\\n\";\r\n    double dx_min = options[0].monthly_cost + monthly_data_gb * options[0].per_gb_cost;\r\n    double break_even_gb = (dx_min - vpn_cost) / (0.05 - options[0].per_gb_cost);\r\n    std::cout << \"Break-even: \" << std::setprecision(0) << break_even_gb\r\n              << \" GB/month to justify DX over VPN\\n\";\r\n\r\n    return 0;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-direct-connect-cost-vs-vpn-analyzer",
      children: "Python Implementation: Direct Connect Cost vs VPN Analyzer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def analyze_connectivity(daily_data_gb: float):\r\n    monthly_gb = daily_data_gb * 30\r\n    avg_gbps = (daily_data_gb * 8) / (24 * 3600)\r\n\r\n    options = [\r\n        (\"1 Gbps\", 1.0, 200, 0.02),\r\n        (\"10 Gbps\", 10.0, 2000, 0.015),\r\n        (\"100 Gbps\", 100.0, 15000, 0.01),\r\n    ]\r\n\r\n    print(f\"Daily transfer: {daily_data_gb} GB\")\r\n    print(f\"Monthly transfer: {monthly_gb:.0f} GB\")\r\n    print(f\"Average throughput: {avg_gbps:.3f} Gbps\\n\")\r\n\r\n    print(f\"{'Speed':<12} {'Port Cost':<12} {'Data Cost':<14} {'Total':<14} Sufficient\")\r\n    print(\"-\" * 65)\r\n\r\n    for speed, cap, port_cost, per_gb in options:\r\n        data_cost = monthly_gb * per_gb\r\n        total = port_cost + data_cost\r\n        sufficient = cap >= avg_gbps\r\n        print(f\"{speed:<12} ${port_cost:<9,.0f} ${data_cost:<11,.0f} \"\r\n              f\"${total:<11,.0f} {'YES' if sufficient else 'NO'}\")\r\n\r\n    # VPN\r\n    vpn_cost = 32.40 + (monthly_gb * 0.09)\r\n    print(f\"\\n  VPN monthly: ${vpn_cost:<,.2f}\")\r\n    print(f\"  DX 1G monthly: ${options[0][2] + monthly_gb * options[0][3]:<,.2f}\")\r\n\r\n    # Break-even\r\n    breakeven = (options[0][2] - 32.40) / (0.09 - options[0][3])\r\n    if breakeven > 0:\r\n        print(f\"\\n  Break-even: {breakeven:,.0f} GB/month to justify DX over VPN\")\r\n        print(f\"  ({breakeven / 30:,.0f} GB/day)\")\r\n\r\n    print(f\"\\n  Recommendation:\", end=\"\")\r\n    if monthly_gb < 1000:\r\n        print(\" VPN is sufficient and cost-effective\")\r\n    elif monthly_gb < 10000:\r\n        print(\" Evaluate: moderate traffic, consider 1G DX\")\r\n    elif monthly_gb < 100000:\r\n        print(\" 10G DX recommended\")\r\n    else:\r\n        print(\" 100G DX or multiple connections required\")\r\n\r\n\r\nanalyze_connectivity(daily_data_gb=500)\r\nprint()\r\nanalyze_connectivity(daily_data_gb=10000)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-7",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BGP session establishment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed 4-message OPEN/KEEPALIVE exchange"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BGP route processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(R^2) worst"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(R)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R = routes; full mesh iBGP requires each router processes all routes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Direct Connect forwarding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per packet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware forwarding; no packet inspection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VLAN tagging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4-byte 802.1Q tag inserted in Ethernet header"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consistent 1-5ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires colocation presence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bandwidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to 400 Gbps (multiple 100G connections)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long provisioning time (weeks-months)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No internet transit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared port in DX location"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reliability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "99.99% SLA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single point of failure without redundant connections"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predictable for high volume"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High minimum cost compared to VPN"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-for-direct-connect",
      children: "Edge Cases for Direct Connect"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Port speed upgrade"
        }), ": Requires new circuit. Cannot upgrade a 1G port to 10G; must order a new 10G port and migrate."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BGP community tags"
        }), ": AWS uses community ", (0,jsx_runtime.jsx)(_components.code, {
          children: "7224:9100"
        }), " to tag routes learned via Direct Connect. You can filter routes based on communities."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Private VIF limits"
        }), ": Max 50 private VIFs per Direct Connect. Use Transit Gateway with a single VIF for many VPCs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MACsec"
        }), ": 100G ports support MACsec encryption at Layer 2 for added security on the physical link."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Packet loss"
        }), ": Direct Connect circuits can experience packet loss if the cross-connect fiber is damaged or dirty. Monitor with Link Loss Forwarding (LLF)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1612-vpc-peering-vs-transit-gateway-vs-direct-connect",
      children: "16.12 VPC Peering vs Transit Gateway vs Direct Connect"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "VPC Peering"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Transit Gateway"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Direct Connect"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two VPCs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hub for many VPCs + on-prem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On-prem to cloud"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transitive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (requires full mesh)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (hub-and-spoke)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (via TGW)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Max connections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "125 peering per VPC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5000 attachments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50 VIFs per port"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-region"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (peering attachment)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (via TGW)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct VPC-to-VPC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+0.1-0.5ms hub overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+1-3ms to DX location"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bandwidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to VPC instance limits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to attachment limits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-100 Gbps dedicated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free (data transfer charges apply)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-hour per attachment + data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Port hours + data transfer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "On-prem connectivity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (VPN/DX attachments)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (native)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BGP support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (static routes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (dynamic with VPN/DX)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (BGP over VIF)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Route propagation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual route table entries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic via TGW route tables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BGP dynamic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SG and NACL apply"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SG and NACL apply"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SG and NACL apply"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple VPC-to-VPC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hub-and-spoke at scale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hybrid cloud"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Setup time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minutes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minutes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weeks-months"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Decision guide:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2-3 VPCs in same region"
        }), " → VPC Peering (simplest, free)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5+ VPCs or multiple regions"
        }), " → Transit Gateway (scalable hub)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "On-prem to cloud, <1 TB/month"
        }), " → VPN (cost-effective)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "On-prem to cloud, >1 TB/month or latency-sensitive"
        }), " → Direct Connect"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1613-multi-cloud-networking",
      children: "16.13 Multi-Cloud Networking"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-8",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Multi-cloud networking is like a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "company with offices in three different city business districts"
      }), ", each with its own internal mail system. To connect them, you build dedicated courier routes between offices (direct connects/VPNs to each cloud), set up a central mail sorting facility (centralized network hub), and ensure the mail format is compatible across all cities (standard protocols like BGP and IPSec). A mail piece from New York (AWS) to London (Azure) goes: NY office → NY courier → sorting facility → London courier → London office."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-multi-cloud-networking-works-step-by-step",
      children: "How Multi-Cloud Networking Works: Step-by-Step"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Establish connectivity"
          }), " → Set up VPN or Direct Connect from each cloud provider to a common hub (could be a colocation facility, Transit Gateway, or third-party SD-WAN)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Route orchestration"
          }), " → Advertise VPC CIDRs from each cloud via BGP. Avoid overlapping CIDRs across clouds."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Traffic inspection"
          }), " → Deploy centralized firewall/NAT appliances at the hub for traffic that crosses cloud boundaries."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "DNS strategy"
          }), " → Use a global DNS provider (Route53, Cloud DNS, Azure DNS) that spans all clouds and routes by latency/health."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Load balancing"
          }), " → Global load balancers distribute traffic across cloud regions. Each cloud's internal ALB/NLB handles regional distribution."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Monitoring"
          }), " → Unified observability across clouds using Datadog, Grafana, or cloud-agnostic tools."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-multi-cloud-route-advertisement",
      children: "Pseudocode: Multi-Cloud Route Advertisement"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE advertise_multi_cloud_routes():\r\n    clouds = [\"aws\", \"azure\", \"gcp\"]\r\n    hub_tgw = create_transit_gateway()\r\n    hubs = []\r\n\r\n    FOR each cloud in clouds:\r\n        // Connect cloud to hub\r\n        IF cloud == \"aws\":\r\n            connection = create_direct_connect(cloud.dx_location)\r\n            attach_tgw(connection, hub_tgw)\r\n        ELSE IF cloud == \"azure\":\r\n            connection = create_express_route(cloud.peering_location)\r\n            attach_to_hub(connection, hub_tgw)\r\n        ELSE IF cloud == \"gcp\":\r\n            connection = create_vpn(cloud.cloud_router)\r\n            attach_to_hub(connection, hub_tgw)\r\n\r\n        // Advertise cloud VPC CIDR\r\n        bgp_advertise(hub_tgw, cloud.vpc_cidr)\r\n        hubs.append(connection)\r\n\r\n    // Advertise on-premises\r\n    bgp_advertise(hub_tgw, \"10.0.0.0/8\")  // On-prem\r\n\r\n    // Set up route tables\r\n    FOR each cloud in clouds:\r\n        hub_tgw.create_route_table({\r\n            name: \"rtb-\" + cloud.name,\r\n            routes: [\r\n                { dest: cloud.vpc_cidr, target: hubs[cloud] },\r\n                { dest: \"0.0.0.0/0\", target: central_nat }\r\n            ]\r\n        })\r\n\r\n    LOG \"Multi-cloud network established with \" + len(clouds) + \" clouds\"\r\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace-multi-cloud-request-flow",
      children: "Dry Run Trace: Multi-Cloud Request Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Setup:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AWS us-east-1: 10.0.0.0/16 (web tier)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Azure eastus: 10.1.0.0/16 (ML inference)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GCP us-central1: 10.2.0.0/16 (analytics)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hub: Equinix colocation with Transit Gateway equivalent"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace: AWS web → Azure ML inference"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Location"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Latency"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWS us-east-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web app sends inference request to 10.1.1.50:443"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWS VPC router"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Route lookup: 10.1.0.0/16 → DX to colo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.01ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct Connect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWS → Equinix colocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Colo hub router"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BGP lookup: 10.1.0.0/16 → Azure ExpressRoute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.01ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ExpressRoute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equinix → Azure eastus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Azure VNet router"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Route: 10.1.1.50 → subnet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.01ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Azure NSG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allow TCP/443 from 10.0.0.0/16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.01ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ML instance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process inference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Azure → ExpressRoute → Colo → Direct Connect → AWS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Total"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "~58ms (including inference)"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation-multi-cloud-route-table",
      children: "C++ Implementation: Multi-Cloud Route Table"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\n#include <vector>\r\n#include <string>\r\n#include <map>\r\n#include <iomanip>\r\n#include <sstream>\r\n#include <cstdint>\r\n\r\nstruct CloudRoute {\r\n    std::string cloud;\r\n    std::string cidr;\r\n    std::string connection_type;\r\n    std::string status;\r\n};\r\n\r\nuint32_t ip_to_uint(const std::string& ip) {\r\n    std::stringstream s(ip);\r\n    int a, b, c, d; char ch;\r\n    s >> a >> ch >> b >> ch >> c >> ch >> d;\r\n    return (a << 24) | (b << 16) | (c << 8) | d;\r\n}\r\n\r\nclass MultiCloudNetwork {\r\nprivate:\r\n    std::vector<CloudRoute> routes;\r\n    std::map<std::string, int> cloud_latency;\r\n\r\npublic:\r\n    MultiCloudNetwork() {\r\n        cloud_latency[\"aws\"] = 0;\r\n        cloud_latency[\"azure\"] = 2;\r\n        cloud_latency[\"gcp\"] = 3;\r\n        cloud_latency[\"onprem\"] = 1;\r\n    }\r\n\r\n    void add_route(const std::string& cloud, const std::string& cidr,\r\n                   const std::string& connection) {\r\n        routes.push_back({cloud, cidr, connection, \"UP\"});\r\n    }\r\n\r\n    std::string find_cloud(const std::string& ip) {\r\n        uint32_t ip_val = ip_to_uint(ip);\r\n        int best_prefix = -1;\r\n        std::string best_cloud;\r\n\r\n        for (const auto& r : routes) {\r\n            size_t slash = r.cidr.find('/');\r\n            std::string ip_part = r.cidr.substr(0, slash);\r\n            int prefix = std::stoi(r.cidr.substr(slash + 1));\r\n            uint32_t net = ip_to_uint(ip_part);\r\n            uint32_t mask = (prefix == 0) ? 0 : (0xFFFFFFFF << (32 - prefix));\r\n\r\n            if ((ip_val & mask) == (net & mask) && prefix > best_prefix) {\r\n                best_prefix = prefix;\r\n                best_cloud = r.cloud;\r\n            }\r\n        }\r\n        return best_cloud;\r\n    }\r\n\r\n    void trace_request(const std::string& from_cloud, const std::string& dst_ip,\r\n                       int request_id) {\r\n        std::string to_cloud = find_cloud(dst_ip);\r\n        if (to_cloud.empty()) {\r\n            std::cout << \"Req#\" << request_id << \": \" << from_cloud\r\n                      << \" → \" << dst_ip << \" → NO ROUTE\\n\";\r\n            return;\r\n        }\r\n\r\n        int total_latency = 0;\r\n        std::vector<std::string> hops;\r\n        hops.push_back(from_cloud);\r\n\r\n        if (from_cloud != to_cloud) {\r\n            // Calculate cross-cloud path\r\n            int hub_latency = 0;\r\n            if (cloud_latency.count(from_cloud)) hub_latency += cloud_latency[from_cloud];\r\n            if (cloud_latency.count(to_cloud)) hub_latency += cloud_latency[to_cloud];\r\n\r\n            hops.push_back(\"colo-hub\");\r\n            hops.push_back(to_cloud);\r\n            total_latency = hub_latency + 2; // +2ms for hub processing\r\n        } else {\r\n            hops.push_back(to_cloud);\r\n            total_latency = 0;\r\n        }\r\n\r\n        std::cout << \"Req#\" << request_id << \": \";\r\n        for (size_t i = 0; i < hops.size(); i++) {\r\n            std::cout << hops[i];\r\n            if (i < hops.size() - 1) std::cout << \" → \";\r\n        }\r\n        std::cout << \" [\" << total_latency << \"ms]\" << \"\\n\";\r\n    }\r\n\r\n    void print_route_table() {\r\n        std::cout << \"\\nMulti-Cloud Route Table:\\n\";\r\n        std::cout << std::left << std::setw(12) << \"Cloud\"\r\n                  << std::setw(20) << \"CIDR\"\r\n                  << std::setw(20) << \"Connection\" << \"Status\\n\";\r\n        std::cout << std::string(65, '-') << \"\\n\";\r\n        for (const auto& r : routes) {\r\n            std::cout << std::left << std::setw(12) << r.cloud\r\n                      << std::setw(20) << r.cidr\r\n                      << std::setw(20) << r.connection_type\r\n                      << r.status << \"\\n\";\r\n        }\r\n    }\r\n};\r\n\r\nint main() {\r\n    MultiCloudNetwork mcn;\r\n    mcn.add_route(\"aws\", \"10.0.0.0/16\", \"Direct Connect\");\r\n    mcn.add_route(\"azure\", \"10.1.0.0/16\", \"ExpressRoute\");\r\n    mcn.add_route(\"gcp\", \"10.2.0.0/16\", \"VPN\");\r\n    mcn.add_route(\"onprem\", \"192.168.0.0/16\", \"Direct Connect\");\r\n\r\n    mcn.print_route_table();\r\n\r\n    std::cout << \"\\nCross-cloud traffic simulation:\\n\";\r\n    mcn.trace_request(\"aws\", \"10.1.1.50\", 1);    // AWS → Azure\r\n    mcn.trace_request(\"azure\", \"10.2.0.100\", 2); // Azure → GCP\r\n    mcn.trace_request(\"aws\", \"10.0.1.10\", 3);    // AWS → AWS (same cloud)\r\n    mcn.trace_request(\"gcp\", \"192.168.1.1\", 4);  // GCP → on-prem\r\n    mcn.trace_request(\"aws\", \"172.16.0.1\", 5);   // No route\r\n\r\n    return 0;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-multi-cloud-latency-analyzer",
      children: "Python Implementation: Multi-Cloud Latency Analyzer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass\r\nfrom typing import Optional\r\nimport ipaddress\r\n\r\n\r\n@dataclass\r\nclass CloudRoute:\r\n    cloud: str\r\n    cidr: str\r\n    connection: str\r\n    status: str = \"UP\"\r\n\r\n\r\nclass MultiCloudNetwork:\r\n    def __init__(self):\r\n        self.routes: list[CloudRoute] = []\r\n        self.latency_map = {\r\n            \"aws\": 0, \"azure\": 2, \"gcp\": 3, \"onprem\": 1,\r\n            \"aws→colo\": 1, \"azure→colo\": 2, \"gcp→colo\": 3, \"onprem→colo\": 1\r\n        }\r\n\r\n    def add_route(self, cloud: str, cidr: str, connection: str):\r\n        self.routes.append(CloudRoute(cloud, cidr, connection))\r\n\r\n    def find_cloud(self, ip_str: str) -> Optional[str]:\r\n        ip = ipaddress.IPv4Address(ip_str)\r\n        best_prefix = -1\r\n        best_cloud = None\r\n        for r in self.routes:\r\n            net = ipaddress.IPv4Network(r.cidr, strict=False)\r\n            if ip in net and net.prefixlen > best_prefix:\r\n                best_prefix = net.prefixlen\r\n                best_cloud = r.cloud\r\n        return best_cloud\r\n\r\n    def trace(self, from_cloud: str, dst_ip: str, req_id: int):\r\n        to_cloud = self.find_cloud(dst_ip)\r\n        if to_cloud is None:\r\n            print(f\"Req#{req_id}: {from_cloud} → {dst_ip} → NO ROUTE\")\r\n            return\r\n\r\n        path = [from_cloud]\r\n        latency = 0\r\n\r\n        if from_cloud != to_cloud:\r\n            path.append(\"colo-hub\")\r\n            path.append(to_cloud)\r\n            hub_key1 = f\"{from_cloud}→colo\"\r\n            hub_key2 = f\"{to_cloud}→colo\"\r\n            latency = self.latency_map.get(hub_key1, 2) + self.latency_map.get(hub_key2, 2) + 2\r\n\r\n        path_str = \" → \".join(path)\r\n        print(f\"Req#{req_id}: {path_str} [{latency}ms]\")\r\n\r\n    def print_routes(self):\r\n        print(f\"{'Cloud':<10} {'CIDR':<20} {'Connection':<18} Status\")\r\n        print(\"-\" * 60)\r\n        for r in self.routes:\r\n            print(f\"{r.cloud:<10} {r.cidr:<20} {r.connection:<18} {r.status}\")\r\n\r\n\r\nmcn = MultiCloudNetwork()\r\nmcn.add_route(\"AWS\", \"10.0.0.0/16\", \"Direct Connect\")\r\nmcn.add_route(\"Azure\", \"10.1.0.0/16\", \"ExpressRoute\")\r\nmcn.add_route(\"GCP\", \"10.2.0.0/16\", \"VPN\")\r\nmcn.add_route(\"On-prem\", \"192.168.0.0/16\", \"Direct Connect\")\r\n\r\nmcn.print_routes()\r\nprint(\"\\nMulti-Cloud Simulation:\")\r\nmcn.trace(\"AWS\", \"10.1.1.50\", 1)\r\nmcn.trace(\"Azure\", \"10.2.100.10\", 2)\r\nmcn.trace(\"AWS\", \"192.168.1.1\", 3)\r\nmcn.trace(\"GCP\", \"10.0.0.50\", 4)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-8",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-cloud route lookup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N = routes across all clouds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-cloud latency calc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(C)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(C)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C = clouds; each hub hop adds latency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BGP across clouds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(R^2) worst"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(R)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Different ASNs, iBGP mesh complexity"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-in-multi-cloud",
      children: "Edge Cases in Multi-Cloud"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CIDR overlap"
        }), ": Different clouds must not use overlapping CIDRs, or NAT must be applied at the hub. Plan IP space globally."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Latency asymmetry"
        }), ": AWS→Azure may differ from Azure→AWS. Always measure both directions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Provider NAT"
        }), ": Some cloud providers NAT traffic by default. Test and configure appropriately."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data sovereignty"
        }), ": Cross-cloud data transfer may violate data residency requirements. Route through compliant regions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1614-service-mesh-istio--linkerd",
      children: "16.14 Service Mesh (Istio / Linkerd)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-9",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A service mesh is like an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "air traffic control system for every courier in a city"
      }), ". Without air traffic control (traditional networking), each courier drives using paper maps (service discovery), calls ahead to check if the recipient is home (health checks), and negotiates delivery routes themselves (load balancing). With air traffic control (service mesh), every courier has a radio (sidecar proxy) that tells them exactly where to go, reroutes around traffic (circuit breaking), encrypts their cargo (mTLS), and logs every delivery (observability). The couriers don't need to think → the control tower handles it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-service-mesh-works-step-by-step",
      children: "How Service Mesh Works: Step-by-Step"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sidecar injection"
          }), " → An admission webhook automatically injects an Envoy (Istio) or Linkerd-proxy sidecar container into each pod at deployment time."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Service discovery"
          }), " → The sidecar connects to the control plane (Istiod or Linkerd controller) to learn about all services, endpoints, and routing rules."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Traffic interception"
          }), " → iptables rules redirect all inbound and outbound traffic through the sidecar proxy. Applications are unaware of the proxy."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "mTLS handshake"
          }), " → When service A calls service B, the sidecars establish mutual TLS (both sides present certificates). Traffic is encrypted end-to-end."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Routing decisions"
          }), " → The sidecar applies routing rules: canary routing, retries, timeouts, circuit breakers, fault injection."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Telemetry collection"
          }), " → Each sidecar emits metrics (request count, latency, errors), distributed tracing (OpenTelemetry), and access logs."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Control plane sync"
          }), " → The control plane distributes configuration updates to all sidecars via xDS (Istio) or gRPC streaming (Linkerd)."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-service-mesh-request-with-mtls-and-routing",
      children: "Pseudocode: Service Mesh Request with mTLS and Routing"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE service_mesh_request(src_svc, dst_svc, payload, mesh_config):\r\n    src_sidecar = get_sidecar(src_svc)\r\n    dst_sidecar = get_sidecar(dst_svc)\r\n\r\n    // Step 1: Retrieve routing rules from control plane\r\n    virtual_service = mesh_config.get_virtual_service(dst_svc)\r\n    destination_rules = mesh_config.get_destination_rule(dst_svc)\r\n\r\n    // Step 2: Determine subset (canary, stable, etc.)\r\n    IF virtual_service.has_weighted_routing:\r\n        subset = weighted_select(virtual_service.subsets)\r\n    ELSE:\r\n        subset = \"stable\"\r\n\r\n    // Step 3: mTLS handshake\r\n    src_cert = src_sidecar.certificate_manager.get_cert()\r\n    dst_cert_required = destination_rules.tls_mode == \"STRICT\"\r\n\r\n    tls_session = tls_handshake(\r\n        src_sidecar, dst_sidecar,\r\n        src_cert, dst_sidecar.trust_bundle,\r\n        alpn: \"h2\"\r\n    )\r\n\r\n    // Step 4: Apply mesh policies\r\n    IF circuit_breaker.is_open(dst_svc, subset):\r\n        IF virtual_service.has_fallback:\r\n            subset = \"fallback\"\r\n            LOG \"Circuit breaker open, routing to fallback\"\r\n        ELSE:\r\n            RETURN 503 Service Unavailable\r\n\r\n    IF destination_rules.timeout > 0:\r\n        SET deadline = now + destination_rules.timeout\r\n\r\n    // Step 5: Forward with retry\r\n    FOR retry in 0..destination_rules.retries:\r\n        response = async_send_over_mtls(tls_session, payload)\r\n        IF response.status < 500:\r\n            BREAK\r\n\r\n    // Step 6: Report telemetry\r\n    report_metric(\"request_count\", {src_svc, dst_svc, response.status})\r\n    report_trace_span(src_svc, dst_svc, latency)\r\n    LOG_ACCESS(src_svc, dst_svc, response.status)\r\n\r\n    RETURN response\r\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace-istio-service-mesh-request",
      children: "Dry Run Trace: Istio Service Mesh Request"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Setup:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Service: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "frontend"
        }), " (v1) → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "backend"
        }), " (v1=80%, v2=20% canary)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "mTLS: STRICT"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Circuit breaker: max 5 concurrent connections, 10s timeout"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Request 1: frontend → backend (normal path)"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "frontend pod"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Sends HTTP GET to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "http://backend/api/data",
              children: "http://backend/api/data"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "iptables (frontend)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redirects outbound port 80 to Envoy sidecar (15001)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Envoy (frontend)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Looks up VirtualService for \"backend\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Envoy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weighted routing: random(100) = 73 → 73 ≤ 80 → v1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Envoy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identifies backend-v1 endpoint: 10.0.1.20:8080"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Envoy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initiate mTLS with backend-v1 Envoy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mTLS handshake"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Certificate exchange, ALPN h2 negotiation (~3ms)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Envoy (frontend)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forwards over encrypted tunnel"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Envoy (backend)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decrypts, forwards to backend-v1 container on localhost"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "backend-v1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Processes request, returns response"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Envoy (backend)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encrypts response, adds trace headers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Envoy (frontend)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decrypts, returns to frontend container"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Total"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "~8ms (including mTLS)"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Request 2: Circuit breaker opens"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Envoy (frontend)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detects 5 consecutive 503s from backend-v1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Circuit breaker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trip counter = 5 → circuit OPEN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Next request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VirtualService → tries backend-v1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Envoy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Circuit breaker → immediate 503, does not forward"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No fallback defined → returns 503 to frontend"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reset timer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Envoy starts 30s reset timer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After 30s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Circuit HALF-OPEN → allows 1 probe request"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Probe succeeds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Circuit CLOSED → normal routing resumes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation-service-mesh-sidecar-simulator",
      children: "C++ Implementation: Service Mesh Sidecar Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\n#include <string>\r\n#include <vector>\r\n#include <map>\r\n#include <random>\r\n#include <chrono>\r\n#include <thread>\r\n#include <iomanip>\r\n#include <sstream>\r\n\r\nstruct ServiceEndpoint {\r\n    std::string service;\r\n    std::string version;\r\n    std::string address;\r\n    int port;\r\n    bool healthy;\r\n};\r\n\r\nstruct CircuitBreaker {\r\n    int failure_count;\r\n    int threshold;\r\n    std::string state;\r\n    std::chrono::steady_clock::time_point last_failure;\r\n    int reset_timeout_ms;\r\n};\r\n\r\nclass ServiceMesh {\r\nprivate:\r\n    std::map<std::string, std::vector<ServiceEndpoint>> services;\r\n    std::map<std::string, CircuitBreaker> circuit_breakers;\r\n    std::map<std::string, int> version_weights;\r\n    std::mt19937 rng;\r\n    int total_requests;\r\n    int failed_requests;\r\n\r\npublic:\r\n    ServiceMesh() : rng(std::random_device{}()), total_requests(0), failed_requests(0) {}\r\n\r\n    void register_service(const std::string& service, const std::string& version,\r\n                          const std::string& address, int port) {\r\n        services[service].push_back({service, version, address, port, true});\r\n    }\r\n\r\n    void set_version_weight(const std::string& service, const std::string& version, int weight) {\r\n        version_weights[service + \":\" + version] = weight;\r\n    }\r\n\r\n    void set_circuit_breaker(const std::string& service, int threshold, int reset_ms) {\r\n        circuit_breakers[service] = {0, threshold, \"CLOSED\",\r\n                                      std::chrono::steady_clock::now(), reset_ms};\r\n    }\r\n\r\n    std::string select_version(const std::string& service) {\r\n        auto it = version_weights.find(service + \":v1\");\r\n        auto it2 = version_weights.find(service + \":v2\");\r\n        int w1 = (it != version_weights.end()) ? it->second : 100;\r\n        int w2 = (it2 != version_weights.end()) ? it2->second : 0;\r\n\r\n        std::uniform_int_distribution<int> dist(0, w1 + w2);\r\n        int roll = dist(rng);\r\n        return (roll <= w1) ? \"v1\" : \"v2\";\r\n    }\r\n\r\n    bool check_circuit_breaker(const std::string& service) {\r\n        auto it = circuit_breakers.find(service);\r\n        if (it == circuit_breakers.end()) return true;\r\n\r\n        auto& cb = it->second;\r\n        if (cb.state == \"CLOSED\") return true;\r\n\r\n        if (cb.state == \"OPEN\") {\r\n            auto now = std::chrono::steady_clock::now();\r\n            auto elapsed = std::chrono::duration_cast<std::chrono::milliseconds>(\r\n                now - cb.last_failure).count();\r\n            if (elapsed > cb.reset_timeout_ms) {\r\n                cb.state = \"HALF_OPEN\";\r\n                std::cout << \"  [Circuit Breaker] OPEN → HALF_OPEN (probe allowed)\\n\";\r\n                return true;\r\n            }\r\n            return false;\r\n        }\r\n\r\n        // HALF_OPEN: allow one request\r\n        cb.state = \"OPEN\";  // Reset to OPEN, will succeed or fail\r\n        return true;\r\n    }\r\n\r\n    void record_failure(const std::string& service) {\r\n        auto it = circuit_breakers.find(service);\r\n        if (it == circuit_breakers.end()) return;\r\n\r\n        auto& cb = it->second;\r\n        cb.failure_count++;\r\n        cb.last_failure = std::chrono::steady_clock::now();\r\n\r\n        if (cb.failure_count >= cb.threshold && cb.state != \"OPEN\") {\r\n            cb.state = \"OPEN\";\r\n            std::cout << \"  [Circuit Breaker] TRIPPED (\" << cb.failure_count\r\n                      << \" failures) → OPEN (resets in \" << cb.reset_timeout_ms << \"ms)\\n\";\r\n        }\r\n    }\r\n\r\n    void record_success(const std::string& service) {\r\n        auto it = circuit_breakers.find(service);\r\n        if (it == circuit_breakers.end()) return;\r\n\r\n        auto& cb = it->second;\r\n        if (cb.state == \"HALF_OPEN\") {\r\n            cb.state = \"CLOSED\";\r\n            cb.failure_count = 0;\r\n            std::cout << \"  [Circuit Breaker] HALF_OPEN probe succeeded → CLOSED\\n\";\r\n        }\r\n    }\r\n\r\n    void request(const std::string& from, const std::string& to,\r\n                 const std::string& path, int req_id) {\r\n        total_requests++;\r\n        std::cout << \"\\nReq#\" << req_id << \": \" << from << \" → \" << to << path << \"\\n\";\r\n\r\n        // Check circuit breaker\r\n        if (!check_circuit_breaker(to)) {\r\n            std::cout << \"  [Envoy] Circuit breaker OPEN → immediate 503\\n\";\r\n            failed_requests++;\r\n            return;\r\n        }\r\n\r\n        // Select version\r\n        std::string version = select_version(to);\r\n        std::cout << \"  [Envoy] VirtualService rule: weight → \" << version << \"\\n\";\r\n\r\n        // Find endpoint\r\n        auto& eps = services[to];\r\n        std::string target;\r\n        for (const auto& ep : eps) {\r\n            if (ep.version == version && ep.healthy) {\r\n                target = ep.address + \":\" + std::to_string(ep.port);\r\n                break;\r\n            }\r\n        }\r\n        if (target.empty()) {\r\n            std::cout << \"  [Envoy] No healthy endpoint for \" << version << \"\\n\";\r\n            failed_requests++;\r\n            record_failure(to);\r\n            return;\r\n        }\r\n\r\n        // mTLS handshake\r\n        std::cout << \"  [Envoy] mTLS handshake with \" << target << \"\\n\";\r\n        std::this_thread::sleep_for(std::chrono::milliseconds(1));\r\n\r\n        // Forward\r\n        int latency = 2 + (rng() % 10);\r\n        std::this_thread::sleep_for(std::chrono::milliseconds(latency));\r\n\r\n        // Simulate occasional failure\r\n        bool success = (rng() % 100) < 85;\r\n        if (success) {\r\n            std::cout << \"  [Envoy] → \" << target << \" (\" << latency << \"ms) → 200 OK\\n\";\r\n            record_success(to);\r\n        } else {\r\n            std::cout << \"  [Envoy] → \" << target << \" → 503 Service Unavailable\\n\";\r\n            record_failure(to);\r\n            failed_requests++;\r\n        }\r\n    }\r\n\r\n    void print_stats() {\r\n        double success_rate = total_requests > 0\r\n            ? (100.0 * (total_requests - failed_requests) / total_requests) : 0;\r\n        std::cout << \"\\n=== Service Mesh Statistics ===\\n\";\r\n        std::cout << \"Total requests: \" << total_requests << \"\\n\";\r\n        std::cout << \"Failed: \" << failed_requests << \"\\n\";\r\n        std::cout << \"Success rate: \" << std::fixed << std::setprecision(1)\r\n                  << success_rate << \"%\\n\";\r\n\r\n        for (const auto& [svc, cb] : circuit_breakers) {\r\n            std::cout << svc << \" circuit breaker: \" << cb.state\r\n                      << \" (failures: \" << cb.failure_count << \"/\" << cb.threshold << \")\\n\";\r\n        }\r\n    }\r\n};\r\n\r\nint main() {\r\n    ServiceMesh mesh;\r\n\r\n    mesh.register_service(\"frontend\", \"v1\", \"10.0.1.10\", 8080);\r\n    mesh.register_service(\"backend\", \"v1\", \"10.0.2.10\", 8080);\r\n    mesh.register_service(\"backend\", \"v2\", \"10.0.2.20\", 8080);\r\n\r\n    mesh.set_version_weight(\"backend\", \"v1\", 80);\r\n    mesh.set_version_weight(\"backend\", \"v2\", 20);\r\n    mesh.set_circuit_breaker(\"backend\", 3, 5000);\r\n\r\n    for (int i = 1; i <= 12; i++) {\r\n        mesh.request(\"frontend\", \"backend\", \"/api/data\", i);\r\n    }\r\n\r\n    mesh.print_stats();\r\n\r\n    return 0;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-service-mesh-simulator",
      children: "Python Implementation: Service Mesh Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import random\r\nimport time\r\nfrom dataclasses import dataclass\r\nfrom typing import Optional\r\n\r\n\r\n@dataclass\r\nclass Endpoint:\r\n    service: str\r\n    version: str\r\n    address: str\r\n    port: int\r\n    healthy: bool = True\r\n\r\n\r\nclass CircuitBreaker:\r\n    def __init__(self, threshold: int = 5, reset_ms: int = 30000):\r\n        self.failure_count = 0\r\n        self.threshold = threshold\r\n        self.state = \"CLOSED\"\r\n        self.reset_ms = reset_ms\r\n        self.last_failure = 0.0\r\n\r\n    def allow_request(self) -> bool:\r\n        now = time.time() * 1000\r\n        if self.state == \"CLOSED\":\r\n            return True\r\n        if self.state == \"OPEN\":\r\n            if now - self.last_failure > self.reset_ms:\r\n                self.state = \"HALF_OPEN\"\r\n                print(f\"  [CB] OPEN -> HALF_OPEN (probe)\")\r\n                return True\r\n            return False\r\n        # HALF_OPEN\r\n        self.state = \"OPEN\"\r\n        return True\r\n\r\n    def record_failure(self):\r\n        self.failure_count += 1\r\n        self.last_failure = time.time() * 1000\r\n        if self.failure_count >= self.threshold and self.state != \"OPEN\":\r\n            self.state = \"OPEN\"\r\n            print(f\"  [CB] TRIPPED ({self.failure_count}/{self.threshold}) -> OPEN\")\r\n\r\n    def record_success(self):\r\n        if self.state == \"HALF_OPEN\":\r\n            self.state = \"CLOSED\"\r\n            self.failure_count = 0\r\n            print(f\"  [CB] Probe succeeded -> CLOSED\")\r\n\r\n\r\nclass ServiceMesh:\r\n    def __init__(self):\r\n        self.services: dict[str, list[Endpoint]] = {}\r\n        self.weights: dict[str, int] = {}\r\n        self.circuit_breakers: dict[str, CircuitBreaker] = {}\r\n        self.total = 0\r\n        self.failed = 0\r\n\r\n    def register(self, service: str, version: str, address: str, port: int):\r\n        self.services.setdefault(service, []).append(\r\n            Endpoint(service, version, address, port)\r\n        )\r\n\r\n    def set_weight(self, service: str, version: str, weight: int):\r\n        self.weights[f\"{service}:{version}\"] = weight\r\n\r\n    def set_circuit_breaker(self, service: str, threshold: int = 5, reset_ms: int = 30000):\r\n        self.circuit_breakers[service] = CircuitBreaker(threshold, reset_ms)\r\n\r\n    def select_version(self, service: str) -> str:\r\n        w1 = self.weights.get(f\"{service}:v1\", 100)\r\n        w2 = self.weights.get(f\"{service}:v2\", 0)\r\n        roll = random.randint(0, w1 + w2)\r\n        return \"v1\" if roll <= w1 else \"v2\"\r\n\r\n    def request(self, src: str, dst: str, path: str, req_id: int):\r\n        self.total += 1\r\n        print(f\"\\nReq#{req_id}: {src} -> {dst}{path}\")\r\n\r\n        cb = self.circuit_breakers.get(dst)\r\n        if cb and not cb.allow_request():\r\n            print(f\"  [Envoy] Circuit breaker OPEN -> 503\")\r\n            self.failed += 1\r\n            return\r\n\r\n        version = self.select_version(dst)\r\n        print(f\"  [Envoy] Selected: {dst}:{version}\")\r\n\r\n        ep = None\r\n        for e in self.services.get(dst, []):\r\n            if e.version == version and e.healthy:\r\n                ep = e\r\n                break\r\n\r\n        if ep is None:\r\n            print(f\"  [Envoy] No healthy {version} endpoint -> 503\")\r\n            self.failed += 1\r\n            if cb: cb.record_failure()\r\n            return\r\n\r\n        print(f\"  [Envoy] mTLS handshake with {ep.address}:{ep.port}\")\r\n        latency = random.randint(1, 10)\r\n\r\n        success = random.random() < 0.8\r\n        if success:\r\n            print(f\"  [Envoy] -> {ep.address}:{ep.port} ({latency}ms) -> 200 OK\")\r\n            if cb: cb.record_success()\r\n        else:\r\n            print(f\"  [Envoy] -> {ep.address}:{ep.port} -> 503\")\r\n            self.failed += 1\r\n            if cb: cb.record_failure()\r\n\r\n    def stats(self):\r\n        rate = 100 * (self.total - self.failed) / self.total if self.total > 0 else 0\r\n        print(f\"\\n=== Service Mesh Stats ===\")\r\n        print(f\"Total: {self.total}, Failed: {self.failed}, Success: {rate:.1f}%\")\r\n        for svc, cb in self.circuit_breakers.items():\r\n            print(f\"  {svc} CB: {cb.state} ({cb.failure_count}/{cb.threshold})\")\r\n\r\n\r\nmesh = ServiceMesh()\r\nmesh.register(\"frontend\", \"v1\", \"10.0.1.10\", 8080)\r\nmesh.register(\"backend\", \"v1\", \"10.0.2.10\", 8080)\r\nmesh.register(\"backend\", \"v2\", \"10.0.2.20\", 8080)\r\nmesh.set_weight(\"backend\", \"v1\", 80)\r\nmesh.set_weight(\"backend\", \"v2\", 20)\r\nmesh.set_circuit_breaker(\"backend\", 3, 5000)\r\n\r\nfor i in range(15):\r\n    mesh.request(\"frontend\", \"backend\", \"/api/data\", i + 1)\r\nmesh.stats()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-9",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sidecar injection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per pod"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(P)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Webhook intercepts pod create; P = pod count"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mTLS handshake"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~O(H * N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "H = handshake crypto (RSA/ECDSA), N = connections"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Envoy route match"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log R)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(R)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R = routes; radix tree matching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Circuit breaker check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer compare + state machine"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Telemetry collection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per req"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(T)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T = metrics; constant overhead per request"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why mTLS handshake is expensive:"
      }), " Each new connection requires certificate validation, key exchange (ECDHE), and cipher negotiation (~2-5ms). Use long-lived connections with HTTP/2 multiplexing to amortize the cost."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-of-service-mesh",
      children: "Advantages & Disadvantages of Service Mesh"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mTLS for all service-to-service traffic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Certificate rotation complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Observability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in metrics, tracing, logs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Increased data storage cost"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Traffic control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fine-grained routing, retries, timeouts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration learning curve"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Resilience"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Circuit breakers, bulkheading"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Added latency per hop (1-3ms sidecar)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-for-service-mesh",
      children: "Edge Cases for Service Mesh"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sidecar resource overhead"
        }), ": Each sidecar consumes ~50-100MB RAM and 0.5-1 vCPU. With 1000 pods, overhead is significant."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "mTLS bootstrapping"
        }), ": Certificates must be distributed before services can communicate. During rollout, mutual auth may fail until all sidecars have valid certs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TCP vs HTTP"
        }), ": Istio's L7 features (retries, timeouts, mirroring) work only for HTTP. TCP traffic gets L4 handling only."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Large header size"
        }), ": mTLS + distributed tracing headers + JWT tokens can exceed default Envoy max header size (60KB). Configure appropriately."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1615-service-mesh-vs-traditional-networking",
      children: "16.15 Service Mesh vs Traditional Networking"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Dimension"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Traditional Networking"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Service Mesh (Istio/Linkerd)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TLS optional, app-configured"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic mTLS, always encrypted"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Discovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS, hardcoded endpoints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Control plane service registry"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Load balancing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Round-robin DNS, NLB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weighted, least request, ring hash"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Retries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proxy auto-retry (configurable)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Timeouts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proxy timeouts (configurable)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Circuit breaking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application code or NLB health checks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proxy circuit breaker with state machine"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Observability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CloudWatch logs, manual tracing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zipkin/Jaeger integration, Envoy metrics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Traffic splitting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ALB weighted target groups"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VirtualService weight-based routing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fault injection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chaos engineering tools"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in (delays, aborts at proxy)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IaC (Terraform, CloudFormation)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CRDs (VirtualService, DestinationRule)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Latency overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~0ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-5ms per request hop"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower (OSI L3-L4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher (control plane, sidecars)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use Service Mesh:"
      }), " >10 microservices, need mTLS, canary deployments, fine-grained traffic control. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to avoid:"
      }), " <5 services, latency-critical (sub-ms), resource-constrained environments."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1616-anycast-networking",
      children: "16.16 Anycast Networking"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-10",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Anycast is like a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "nationwide pizza chain with one phone number"
      }), ". When you dial the number, your call is routed to the nearest store (not a central call center). The same phone number works in New York (routes to NY store) and Los Angeles (routes to LA store). If the NY store is busy, the call may route to the next closest store. Each store is advertising the same phone number → it's the network that decides which store answers based on location. This is exactly how anycast works: multiple servers advertise the same IP, and BGP routing sends each client to the nearest one."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-anycast-works-step-by-step",
      children: "How Anycast Works: Step-by-Step"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "IP prefix advertisement"
          }), " → Multiple locations (e.g., DNS servers in NY, London, Tokyo) advertise the same IP prefix (e.g., 1.1.1.1/32) via BGP to their upstream ISPs."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BGP propagation"
          }), " → Each ISP propagates the prefix to its peers. Multiple paths to the same prefix appear in global routing tables."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Best path selection"
          }), " → Each router on the internet selects the closest (by AS-path length or BGP metrics) origin for the prefix."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Traffic arrives at nearest node"
          }), " → A client in Tokyo has their request routed to the Tokyo node because its AS path is shorter."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Failover"
          }), " → If the Tokyo node fails, its BGP advertisement is withdrawn. The Tokyo client's traffic automatically routes to the next nearest node (e.g., Singapore)."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-anycast-routing",
      children: "Pseudocode: Anycast Routing"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE anycast_routing(client_ip, anycast_prefix, nodes):\r\n    // For each node, simulate BGP path propagation\r\n    FOR each node in nodes:\r\n        path_length = compute_bgp_path(client_ip, node)\r\n        node.bgp_path_length = path_length\r\n        LOG node.id + \" BGP path: \" + path_length + \" AS hops\"\r\n\r\n    // Select nearest node\r\n    nearest = argmin(nodes, key=lambda n: n.bgp_path_length)\r\n    LOG \"Anycast route: \" + client_ip + \" → \" + nearest.id\r\n\r\n    // Failover scenario\r\n    nearest_healthy = [n for n in nodes if n.healthy]\r\n    IF NOT nearest.healthy:\r\n        nearest = argmin(nearest_healthy, key=lambda n: n.bgp_path_length)\r\n        LOG \"Failover to: \" + nearest.id\r\n\r\n    RETURN nearest\r\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace-anycast-dns-resolution",
      children: "Dry Run Trace: Anycast DNS Resolution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Setup:"
      }), " DNS server 1.1.1.1 advertised from 5 locations"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Location"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "AS Path (from Tokyo client)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Latency"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tokyo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 AS hops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Singapore"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 AS hops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "London"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12 AS hops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "120ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "New York"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 AS hops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "110ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Frankfurt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11 AS hops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "130ms"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Client in Tokyo queries 1.1.1.1:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tokyo ISP router"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BGP table lookup for 1.1.1.1/32"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BGP best path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 paths found; shortest AS path = Tokyo (3 hops)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Route selection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Next hop = Cloudflare Tokyo PoP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Packet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client → Tokyo PoP (2ms)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Response"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.1.1.1 resolves the DNS query"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Total latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "2ms"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tokyo node fails:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tokyo PoP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard down → BGP session drops"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tokyo ISP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Withdraws 1.1.1.1/32 route from Tokyo"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BGP convergence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~30 seconds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ISP recalculates best path"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Singapore (5 AS hops) selected"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Latency impact"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2ms → 10ms (still acceptable for DNS)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation-anycast-route-simulator",
      children: "C++ Implementation: Anycast Route Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\n#include <vector>\r\n#include <string>\r\n#include <map>\r\n#include <algorithm>\r\n#include <iomanip>\r\n#include <random>\r\n\r\nstruct AnycastNode {\r\n    std::string id;\r\n    std::string location;\r\n    std::string ip;\r\n    int bgp_hops;\r\n    int latency_ms;\r\n    bool healthy;\r\n};\r\n\r\nclass AnycastNetwork {\r\nprivate:\r\n    std::vector<AnycastNode> nodes;\r\n    std::vector<std::pair<std::string, int>> client_infrastructure;\r\n\r\npublic:\r\n    void add_node(const std::string& id, const std::string& location,\r\n                  const std::string& ip, int hops, int latency) {\r\n        nodes.push_back({id, location, ip, hops, latency, true});\r\n    }\r\n\r\n    void set_health(const std::string& id, bool healthy) {\r\n        for (auto& n : nodes) {\r\n            if (n.id == id) { n.healthy = healthy; return; }\r\n        }\r\n    }\r\n\r\n    AnycastNode* route(const std::string& client_location) {\r\n        std::map<std::string, int> location_latency = {\r\n            {\"tokyo\", 0}, {\"singapore\", 5}, {\"london\", 10},\r\n            {\"new-york\", 8}, {\"sydney\", 12}\r\n        };\r\n\r\n        int base_lat = location_latency[client_location];\r\n        AnycastNode* best = nullptr;\r\n        int best_cost = INT_MAX;\r\n\r\n        for (auto& n : nodes) {\r\n            if (!n.healthy) continue;\r\n            int cost = n.bgp_hops * 10 + abs(base_lat - location_latency[n.location]);\r\n            if (cost < best_cost) {\r\n                best_cost = cost;\r\n                best = &n;\r\n            }\r\n        }\r\n        return best;\r\n    }\r\n\r\n    void trace_query(const std::string& client, const std::string& client_location) {\r\n        std::cout << \"\\nClient (\" << client_location << \") queries anycast IP\\n\";\r\n        std::cout << std::string(50, '-') << \"\\n\";\r\n\r\n        for (const auto& n : nodes) {\r\n            std::cout << \"  \" << n.location << \" node: AS path=\" << n.bgp_hops\r\n                      << \" hops, latency=\" << n.latency_ms << \"ms\"\r\n                      << (n.healthy ? \"\" : \" [DOWN]\") << \"\\n\";\r\n        }\r\n\r\n        AnycastNode* best = route(client_location);\r\n        if (best) {\r\n            std::cout << \"BGP best path: \" << best->location\r\n                      << \" (\" << best->latency_ms << \"ms, \"\r\n                      << best->bgp_hops << \" AS hops)\\n\";\r\n            std::cout << \"Packet delivered to \" << best->id\r\n                      << \" in \" << best->latency_ms << \"ms\\n\";\r\n        } else {\r\n            std::cout << \"No healthy anycast nodes available\\n\";\r\n        }\r\n    }\r\n};\r\n\r\nint main() {\r\n    AnycastNetwork anycast;\r\n    anycast.add_node(\"CDN-Tokyo\", \"tokyo\", \"1.1.1.1\", 3, 2);\r\n    anycast.add_node(\"CDN-Singapore\", \"singapore\", \"1.1.1.1\", 5, 10);\r\n    anycast.add_node(\"CDN-London\", \"london\", \"1.1.1.1\", 12, 120);\r\n    anycast.add_node(\"CDN-NYC\", \"new-york\", \"1.1.1.1\", 10, 110);\r\n\r\n    anycast.trace_query(\"User-A\", \"tokyo\");\r\n\r\n    std::cout << \"\\n--- Tokyo node failure ---\\n\";\r\n    anycast.set_health(\"CDN-Tokyo\", false);\r\n\r\n    anycast.trace_query(\"User-A\", \"tokyo\");\r\n\r\n    return 0;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-anycast-network-simulator",
      children: "Python Implementation: Anycast Network Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass\r\nfrom typing import Optional\r\n\r\n\r\n@dataclass\r\nclass AnycastNode:\r\n    node_id: str\r\n    location: str\r\n    anycast_ip: str\r\n    bgp_hops: int\r\n    latency_ms: int\r\n    healthy: bool = True\r\n\r\n\r\nclass AnycastNetwork:\r\n    def __init__(self):\r\n        self.nodes: list[AnycastNode] = []\r\n\r\n    def add_node(self, node_id: str, location: str, anycast_ip: str,\r\n                 bgp_hops: int, latency_ms: int):\r\n        self.nodes.append(AnycastNode(node_id, location, anycast_ip, bgp_hops, latency_ms))\r\n\r\n    def set_health(self, node_id: str, healthy: bool):\r\n        for n in self.nodes:\r\n            if n.node_id == node_id:\r\n                n.healthy = healthy\r\n\r\n    def route(self, client_location: str) -> Optional[AnycastNode]:\r\n        base_lat = {\r\n            \"tokyo\": 0, \"singapore\": 5, \"london\": 10,\r\n            \"new-york\": 8, \"sydney\": 12, \"mumbai\": 7\r\n        }.get(client_location, 10)\r\n\r\n        best = None\r\n        best_cost = float('inf')\r\n        for n in self.nodes:\r\n            if not n.healthy:\r\n                continue\r\n            cost = n.bgp_hops * 10 + abs(base_lat - n.latency_ms // 10)\r\n            if cost < best_cost:\r\n                best_cost = cost\r\n                best = n\r\n        return best\r\n\r\n    def trace(self, client_location: str, label: str = \"\"):\r\n        if label:\r\n            print(f\"\\n{label}\")\r\n        print(f\"Client ({client_location}) queries anycast IP\")\r\n        print(\"-\" * 50)\r\n        for n in self.nodes:\r\n            status = \"UP\" if n.healthy else \"DOWN\"\r\n            print(f\"  {n.location}: AS path={n.bgp_hops} hops, \"\r\n                  f\"{n.latency_ms}ms [{status}]\")\r\n\r\n        best = self.route(client_location)\r\n        if best:\r\n            print(f\"BGP best path: {best.location} ({best.latency_ms}ms)\")\r\n        else:\r\n            print(\"No healthy nodes\")\r\n\r\n\r\nanycast = AnycastNetwork()\r\nanycast.add_node(\"PoP-Tokyo\", \"tokyo\", \"1.1.1.1\", 3, 2)\r\nanycast.add_node(\"PoP-Singapore\", \"singapore\", \"1.1.1.1\", 5, 10)\r\nanycast.add_node(\"PoP-London\", \"london\", \"1.1.1.1\", 12, 120)\r\nanycast.add_node(\"PoP-NYC\", \"new-york\", \"1.1.1.1\", 10, 110)\r\n\r\nanycast.trace(\"tokyo\", \"=== Normal Operation ===\")\r\nanycast.set_health(\"PoP-Tokyo\", False)\r\nanycast.trace(\"tokyo\", \"=== Tokyo Failure ===\")\r\nanycast.set_health(\"PoP-Tokyo\", True)\r\n\r\nprint(\"\\n=== Global Query Distribution ===\")\r\nfor client in [\"tokyo\", \"singapore\", \"london\", \"new-york\", \"sydney\"]:\r\n    anycast.trace(client)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-10",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BGP path selection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N = paths; compare AS path length"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BGP convergence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N * E)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N nodes, E edges; full mesh propagation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Anycast routing decision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single BGP best path selected"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-for-anycast",
      children: "Edge Cases for Anycast"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BGP convergence delay"
        }), ": When a node fails, BGP withdrawal takes 15-60 seconds to propagate globally. Clients may hit dead nodes during this window."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TCP connection migration"
        }), ": Anycast nodes are different servers. A TCP connection to a dead anycast node cannot be transparently migrated. Clients must retry."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stateful anycast"
        }), ": Anycast works best for stateless protocols (DNS, HTTP). For stateful protocols, all nodes must share state or use consistent hashing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hot prefix withdrawal"
        }), ": If one node becomes overwhelmed, it can withdraw its BGP prefix to shed load. Other nodes absorb the traffic."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1617-service-mesh-vs-traditional-networking-comparison",
      children: "16.17 Service Mesh vs Traditional Networking Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Dimension"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Traditional Networking"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Service Mesh (Istio/Linkerd)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TLS optional, app-configured"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic mTLS, always encrypted"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Discovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS, hardcoded endpoints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Control plane service registry"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Load balancing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Round-robin DNS, NLB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weighted, least request, ring hash"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Retries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proxy auto-retry (configurable)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Timeouts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proxy timeouts (configurable)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Circuit breaking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application code or NLB health checks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proxy circuit breaker with state machine"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Observability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CloudWatch logs, manual tracing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zipkin/Jaeger integration, Envoy metrics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Traffic splitting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ALB weighted target groups"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VirtualService weight-based routing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fault injection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chaos engineering tools"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in (delays, aborts at proxy)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IaC (Terraform, CloudFormation)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CRDs (VirtualService, DestinationRule)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Latency overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~0ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-5ms per request hop"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower (OSI L3-L4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher (control plane, sidecars)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use Service Mesh:"
      }), " >10 microservices, need mTLS, canary deployments, fine-grained traffic control. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to avoid:"
      }), " <5 services, latency-critical (sub-ms), resource-constrained environments."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1618-interview-corner",
      children: "16.18 Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-how-does-cloud-networking-differ-from-on-premises-networking",
      children: "Q1: How does cloud networking differ from on-premises networking?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Cloud networking is software-defined and API-driven. In on-premises, you physically rack switches and configure them via CLI. In the cloud, a VPC is an API resource created in seconds. Routing tables, security groups, and load balancers are all programmable. The cloud provider handles physical redundancy (multi-AZ), and you pay per-use instead of CapEx. The trade-off is reduced control over the physical network and reliance on provider limits (e.g., VPC peering is non-transitive, security groups max at 60 rules)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-compare-round-robin-vs-least-connections-vs-ip-hash-load-balancing",
      children: "Q2: Compare round-robin vs least-connections vs IP hash load balancing."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Round-robin cycles through targets in order → O(1), works well when requests have similar cost, but causes imbalance for variable-length requests. Least-connections sends to the target with fewest active connections → O(N), ideal for variable workloads but requires connection tracking overhead. IP hash consistently maps a client IP to the same target → O(1), useful for session persistence without cookies, but can cause hot spots if a few IPs dominate traffic. ALB uses round-robin by default; NLB uses flow hashing."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-what-is-dns-propagation-and-why-does-it-matter",
      children: "Q3: What is DNS propagation and why does it matter?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " DNS propagation is the time for a DNS record change to reach all recursive resolvers worldwide. It depends on the TTL set on the record and the resolver's cache behavior. A record with TTL=300s propagates in ~5 minutes; TTL=86400s takes 24 hours. Propagation matters for disaster recovery → if you failover to a secondary region, clients with cached DNS may still hit the failed primary for up to the TTL. Use Route53 alias records (0s TTL) for instant failover."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-what-factors-determine-a-multi-cloud-strategy",
      children: "Q4: What factors determine a multi-cloud strategy?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Multi-cloud strategy depends on: (a) vendor lock-in risk → distributing workloads prevents dependency on one provider; (b) geographic coverage → some providers have better PoP coverage in specific regions; (c) service specialization → use GCP for BigQuery, AWS for Lambda, Azure for Active Directory integration; (d) compliance → some data must stay in specific jurisdictions; (e) cost optimization → spot pricing varies by provider and region. Downsides: increased complexity, data transfer costs between clouds, and needing expertise in multiple platforms."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-what-happens-when-a-load-balancer-health-check-fails",
      children: "Q5: What happens when a load balancer health check fails?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The load balancer stops routing traffic to the unhealthy target. ALB health checks are HTTP-based → if a target returns non-2xx/3xx or times out after N consecutive checks, it's marked unhealthy. The target is removed from rotation. The LB continues health checking at the configured interval. When the target returns success again for N consecutive checks, it's marked healthy and rejoins rotation. Connection draining allows in-flight requests to complete before full removal (up to 300s)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-how-does-vxlan-isolate-tenants-in-cloud-networking",
      children: "Q6: How does VXLAN isolate tenants in cloud networking?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " VXLAN (Virtual Extensible LAN) encapsulates Layer 2 frames in UDP packets with a 24-bit VXLAN Network Identifier (VNI). Each tenant gets a unique VNI, allowing 16 million isolated networks over a shared physical fabric. Standard VLANs only support 4096 IDs. The hypervisor's virtual switch tags every packet with the tenant's VNI. When a packet arrives at a different hypervisor, the VNI is checked → packets from different VNIs are never forwarded to each other, providing complete L2 isolation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1619-applications-in-real-systems",
      children: "16.19 Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "aws-vpc--alb-architecture",
      children: "AWS: VPC + ALB Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Internet → Route53 → CloudFront → ALB → Web Targets (public subnets)\r\n                                         → App Targets (private subnets, SG-restricted)\r\n                                              → RDS (private subnets, SG from app only)\r\n                → NAT Gateway (for private subnet outbound)\r\n                → S3 VPC Endpoint (private subnet → S3 without NAT)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real AWS setup:"
      }), " VPC 10.0.0.0/16, public subnets (10.0.1.0/24, 10.0.2.0/24 across 2 AZs), private app subnets (10.0.3.0/24, 10.0.4.0/24), private DB subnets (10.0.5.0/24, 10.0.6.0/24). ALB in public subnets with listener on 443, target group for app instances on port 8080. Security group sg-web allows 443 from 0.0.0.0/0; sg-app allows 8080 from sg-web; sg-db allows 3306 from sg-app."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "google-cloud-vpc--cloud-cdn",
      children: "Google Cloud: VPC + Cloud CDN"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Global HTTP(S) LB → Cloud CDN → Backend Buckets (static) → Cloud Storage\r\n                              → Backend Services (dynamic) → Cloud Run / GKE\r\n                              → Serverless NEG → Cloud Functions\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real GCP setup:"
      }), " VPC in auto-mode (10.128.0.0/20 default). Global HTTPS Load Balancer with Cloud CDN enabled. Backend bucket for static assets (pointing to Cloud Storage bucket). Backend service for dynamic APIs (NEG pointing to Cloud Run services). Cloud Armor WAF policy attached to the LB for OWASP rule set. IAP (Identity-Aware Proxy) for user authentication before traffic reaches services."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "azure-virtual-network-architecture",
      children: "Azure: Virtual Network Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Azure Front Door → Application Gateway (WAF) → VMSS (web tier, public subnet)\r\n                                               → VMSS (app tier, private subnet)\r\n                                                    → Azure SQL Database (private endpoint)\r\n                → Azure Bastion (management, public subnet)\r\n                → NAT Gateway (private subnet outbound)\r\n                → ExpressRoute → On-premises\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real Azure setup:"
      }), " VNet 10.0.0.0/16 with subnets: AzureBastionSubnet (10.0.0.0/27), web subnet (10.0.1.0/24) with NSG allowing 443 from Front Door, app subnet (10.0.2.0/24) with NSG allowing 8080 from web, data subnet (10.0.3.0/24) with private endpoint for Azure SQL. Application Gateway (WAF_v2) in front with TLS termination and path-based routing. Azure Front Door for global load balancing and CDN."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "istio-on-kubernetes",
      children: "Istio on Kubernetes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Ingress Gateway → VirtualService → DestinationRule → Pod (sidecar Envoy)\r\n                                                      → Pod (sidecar Envoy)\r\n                                                      → Pod (sidecar Envoy)\r\n                    → Pilot (control plane) → Mixer → Citadel (certificates)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real Istio setup:"
      }), " GKE cluster with Istio 1.18 installed via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "istioctl install --set profile=default"
      }), ". Automatic sidecar injection enabled via namespace label ", (0,jsx_runtime.jsx)(_components.code, {
        children: "istio-injection=enabled"
      }), ". Gateway resource for ingress, VirtualService routing to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "reviews"
      }), " service with weight split (v1=90%, v2=10% canary). DestinationRule with mTLS mode STRICT and circuit breaker (maxConnections=100, connectTimeout=5s). Kiali dashboard for observability, Jaeger for distributed tracing."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "retention-one-sentence-takeaways",
      children: "Retention: One-Sentence Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "VPCs provide logically isolated cloud networks with subnets, route tables, and security groups → all software-defined and provisioned via API."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Application Load Balancers (Layer 7) support path/host-based routing; Network Load Balancers (Layer 4) offer ultra-low latency; Gateway Load Balancers (Layer 3) handle virtual appliance traffic."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CDNs cache content at edge nodes, reducing latency by up to 93% and offloading origin servers by 80-95%."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cloud DNS routing policies include weighted (canary testing), latency-based (performance routing), geolocation (compliance), and failover (disaster recovery)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Site-to-Site VPN uses IPSec over public internet with AES-256 encryption; Direct Connect uses dedicated physical links for consistent 1-5ms latency."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Service mesh (Istio/Linkerd) adds automatic mTLS, traffic control, and observability via sidecar proxies → at the cost of 1-5ms added latency per hop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Anycast networking advertises the same IP from multiple locations, routing each client to the nearest healthy node via BGP."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "case-study-global-e-commerce-platform-migration-to-aws",
      children: "Case Study: Global E-Commerce Platform Migration to AWS"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem",
      children: "Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A rapidly growing e-commerce platform serving 5 million monthly visitors across North America, Europe, and Asia-Pacific was running on a single-region data center in Virginia. Users in Tokyo experienced 350ms+ page load times. Peak traffic (Black Friday) caused the origin servers to saturate at 12 Gbps, triggering 503 errors for 15% of requests. The platform used a single hardware load balancer (F5), manual failover procedures, and static DNS A records."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "solution",
      children: "Solution"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The engineering team migrated to a multi-region AWS architecture. Each region (us-east-1, eu-west-1, ap-southeast-1) received a full VPC stack: public subnets with ALBs for TLS termination and path-based routing, private subnets for application servers (ECS Fargate), and isolated database subnets with RDS Multi-AZ. CloudFront was deployed globally with tiered caching (edge → regional → origin), achieving a 92% cache hit rate. Route53 latency-based routing directed users to the nearest healthy region. A Transit Gateway connected all three VPCs to on-premises systems via Direct Connect (1 Gbps to us-east-1). AWS Global Accelerator provided static anycast IPs with endpoint failover under 30 seconds."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "outcome",
      children: "Outcome"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Page load times dropped from 350ms to 45ms for Tokyo users (87% improvement). The origin load reduced from 12 Gbps to under 1 Gbps (92% offload), eliminating the need for origin scaling during peak events. The 2023 Black Friday event handled 3× normal traffic with zero 503 errors and 99.99% availability. Infrastructure provisioning dropped from 3 weeks (data center) to 45 minutes (Terraform + CloudFormation). Annual infrastructure cost was reduced by 40% through reserved instances and CDN bandwidth savings."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Takeaway"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-region deployment reduces latency from 350ms to <100ms for global users"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Route53 latency routing + ALB per region with cross-region failover"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CDN tiered caching offloads 90%+ of origin traffic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CloudFront edge → regional cache → origin pull pattern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security groups provide stateful filtering at the hypervisor level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use SG rules instead of NACLs whenever possible (stateful = auto return traffic)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Connection draining prevents dropped requests during deployments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set ALB drain timeout to 300s and monitor active connections"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transit Gateway simplifies multi-VPC connectivity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replace VPC peering mesh with TGW when connecting 4+ VPCs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Anycast IPs with health checks provide sub-30s failover"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global Accelerator or CloudFront with origin failover"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Direct Connect is essential for predictable hybrid connectivity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-10 Gbps private links with BGP for on-premises to cloud routing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Question"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Answer"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What VXLAN component uniquely identifies a tenant network across the shared physical fabric?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VLAN ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VNI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GRE Key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subnet ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which load balancer type operates at Layer 4 (Transport) and provides static IP per Availability Zone?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ALB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NLB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GLB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What mechanism does a cloud VPC use to allow outbound internet access for instances in private subnets?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internet Gateway"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NAT Gateway"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VPC Peering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct Connect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which CDN cache layer is checked first when a request arrives at an edge location?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regional cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Origin server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edge node cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS resolver"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is the primary function of AWS Transit Gateway?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replace security groups"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connect multiple VPCs and on-premises networks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encrypt traffic between VPCs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monitor VPC traffic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What makes security groups stateful?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Rules apply to both directions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Return traffic is automatically allowed ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) They process rules in order"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) They support deny rules"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Which load balancer type provides a static IP per AZ?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) ALB"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) NLB ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) CLB"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) GLB"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What does VXLAN use to identify tenant segments?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) VLAN ID"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) VNI ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) GRE key"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Subnet ID"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Which CDN feature reduces origin load?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Edge computing"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Tiered caching ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Dynamic acceleration"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) DNS routing"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What AWS service acts as a hub for VPC and on-premises connectivity?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) VPC Peering"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Transit Gateway ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Direct Connect"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) VPN Gateway"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What is the time complexity of round-robin load balancer selection?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) O(N)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) O(1) ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) O(log N)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) O(N^2)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Which cloud DNS routing policy is best for canary deployments?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Simple"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Weighted ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Latency-based"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Geolocation"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "How many VNIs does VXLAN support?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) 4096"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) ~16 million ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) ~65,000"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) ~4 billion"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Which service mesh component handles certificate management for mTLS?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Pilot"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Citadel ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Envoy"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Mixer"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What happens when an anycast node fails?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) All clients lose connectivity"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) BGP withdraws the route, clients reroute"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) TCP connections migrate transparently"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) DNS resolves a different IP"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 1-b, 2-b, 3-b, 4-b, 5-b, 6-b, 7-b, 8-b, 9-b, 10-b"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cloud networking delivers software-defined network constructs → VPCs, subnets, route tables, and security groups → that isolate and control traffic. Load balancers distribute traffic across targets at Layers 4 and 7 (ALB, NLB, GLB). CDNs cache content at edge nodes for low-latency delivery. Cloud DNS offers policy-driven routing and health monitoring. Hybrid connectivity links cloud and on-premises networks via VPN (IPSec) or dedicated connections (Direct Connect/ExpressRoute). Multi-cloud networking extends connectivity across providers using BGP and central hubs. Service mesh (Istio/Linkerd) secures and observes microservice traffic via sidecar proxies. Anycast provides global load balancing and DDoS mitigation by announcing the same IP from multiple locations."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between a security group and a network ACL?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why is VPC peering not transitive?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between an ALB and an NLB?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does a CDN reduce latency for a user in Sydney accessing content hosted in London?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When would you choose Direct Connect over a VPN?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the purpose of a service mesh sidecar proxy?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does anycast differ from unicast?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Design a VPC architecture for a multi-tier web application with: public web servers, private application servers, and a private database. Include subnets, route tables, security groups, NAT Gateway, and load balancer placement. Support deployment in two availability zones."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A CDN receives 100 GB/s of traffic at peak. The cache hit ratio is 85%. The origin server can handle 10 GB/s. Is the origin capacity adequate? If not, propose two solutions."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Solution:"
            }), " Origin handles 15 GB/s (100 × 0.15). This exceeds 10 GB/s capacity. Solutions: (a) increase cache hit ratio to 90%+ by pre-warming cache and optimizing TTLs, (b) implement tiered caching with regional cache nodes, (c) increase origin bandwidth to 20 GB/s."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A company has on-premises data centers in New York and London, connected via MPLS. The company migrates applications to AWS in us-east-1 and eu-west-1. Design the hybrid connectivity: specify Direct Connect configuration, Transit Gateway routing, and DNS routing policy for active-active failover."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Compare the latency characteristics of: (a) VPC peering within the same region, (b) VPC peering across regions, (c) traffic through Transit Gateway, (d) traffic through a service mesh sidecar."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "12",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Design a global cloud network for a SaaS platform."
        }), " The platform serves users in North America, Europe, and Asia-Pacific. Requirements: (a) all user traffic is served with latency under 100 ms, (b) database is globally distributed with conflict-free replication, (c) static assets are cached at the edge, (d) API requests route to the nearest region with fallback, (e) the system tolerates the loss of one entire AWS region. Design the full architecture: VPC layout per region, CDN configuration, DNS routing policy, load balancing strategy, and inter-region connectivity. Compute the expected latency for a user in Tokyo reaching the nearest healthy region."]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ }

}]);