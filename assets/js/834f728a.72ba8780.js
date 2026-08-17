"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[32404],{

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
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
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
        children: "PROCEDURE forward_packet(packet, vni, source_vm, route_table, security_groups):\n    // Step 1: Validate source security group\n    sg_rules = security_groups[source_vm.sg_id]\n    IF NOT match_egress_rule(packet, sg_rules):\n        DROP packet\n        LOG \"Dropped by egress SG rule\"\n        RETURN\n\n    // Step 2: Look up route\n    best_prefix = longest_prefix_match(packet.dst_ip, route_table.routes)\n\n    IF best_prefix == NULL:\n        DROP packet\n        LOG \"No route to destination\"\n        RETURN\n\n    // Step 3: Get next hop\n    next_hop = route_table.routes[best_prefix].target\n\n    // Step 4: VXLAN encapsulation\n    outer_header.prepend()\n    outer_header.vni = vni\n    outer_header.dst_mac = resolve_next_hop_mac(next_hop)\n    outer_header.src_mac = source_vm.hypervisor_mac\n\n    // Step 5: Validate destination security group\n    FOR each target_vm in destination_set(packet.dst_ip):\n        ingress_rules = security_groups[target_vm.sg_id]\n        IF match_ingress_rule(packet, ingress_rules):\n            FORWARD to target_vm.hypervisor\n        ELSE:\n            DROP\n\n    RETURN\nEND PROCEDURE\n"
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
        children: "#include <iostream>\n#include <vector>\n#include <string>\n#include <map>\n#include <sstream>\n#include <cstdint>\n#include <algorithm>\n#include <iomanip>\n\nstruct RouteEntry {\n    uint32_t network;\n    uint32_t netmask;\n    std::string target;\n    bool is_local;\n};\n\nuint32_t ip_to_uint(const std::string& ip) {\n    std::stringstream s(ip);\n    int a, b, c, d;\n    char ch;\n    s >> a >> ch >> b >> ch >> c >> ch >> d;\n    return (a << 24) | (b << 16) | (c << 8) | d;\n}\n\nuint32_t cidr_to_netmask(int prefix_len) {\n    return (prefix_len == 0) ? 0 : (0xFFFFFFFF << (32 - prefix_len));\n}\n\nstd::string uint_to_ip(uint32_t ip) {\n    return std::to_string((ip >> 24) & 0xFF) + \".\" +\n           std::to_string((ip >> 16) & 0xFF) + \".\" +\n           std::to_string((ip >> 8) & 0xFF) + \".\" +\n           std::to_string(ip & 0xFF);\n}\n\nclass VPCRouteTable {\nprivate:\n    std::vector<RouteEntry> routes;\n    std::string vpc_id;\n    uint32_t vpc_cidr_network;\n    uint32_t vpc_cidr_mask;\n\npublic:\n    VPCRouteTable(const std::string& id, const std::string& cidr)\n        : vpc_id(id) {\n        size_t slash = cidr.find('/');\n        std::string ip_part = cidr.substr(0, slash);\n        int prefix = std::stoi(cidr.substr(slash + 1));\n        vpc_cidr_network = ip_to_uint(ip_part) & cidr_to_netmask(prefix);\n        vpc_cidr_mask = cidr_to_netmask(prefix);\n    }\n\n    void add_route(const std::string& cidr, const std::string& target, bool local = false) {\n        size_t slash = cidr.find('/');\n        std::string ip_part = cidr.substr(0, slash);\n        int prefix = std::stoi(cidr.substr(slash + 1));\n        RouteEntry entry;\n        entry.network = ip_to_uint(ip_part) & cidr_to_netmask(prefix);\n        entry.netmask = cidr_to_netmask(prefix);\n        entry.target = target;\n        entry.is_local = local;\n        routes.push_back(entry);\n    }\n\n    std::pair<std::string, int> longest_prefix_match(uint32_t dst_ip) {\n        int best_prefix = -1;\n        std::string best_target;\n        for (size_t i = 0; i < routes.size(); i++) {\n            if ((dst_ip & routes[i].netmask) == routes[i].network) {\n                int prefix = __builtin_popcount(routes[i].netmask);\n                if (prefix > best_prefix) {\n                    best_prefix = prefix;\n                    best_target = routes[i].target;\n                }\n            }\n        }\n        if (best_prefix == -1) return {\"no-route\", -1};\n        return {best_target, best_prefix};\n    }\n\n    void trace_packet(const std::string& src_ip, const std::string& dst_ip) {\n        uint32_t dst = ip_to_uint(dst_ip);\n        uint32_t src = ip_to_uint(src_ip);\n        std::cout << \"\\n--- Route Trace ---\\n\";\n        std::cout << \"Source: \" << src_ip << \" (\" << vpc_id << \")\\n\";\n        std::cout << \"Destination: \" << dst_ip << \"\\n\";\n        std::cout << \"VPC CIDR: \" << uint_to_ip(vpc_cidr_network) + \"/\"\n                  << std::to_string(__builtin_popcount(vpc_cidr_mask)) << \"\\n\\n\";\n\n        auto [target, prefix_len] = longest_prefix_match(dst);\n        if (prefix_len == -1) {\n            std::cout << \"RESULT: No route → packet dropped\\n\";\n            return;\n        }\n\n        bool in_vpc = (dst & vpc_cidr_mask) == vpc_cidr_network;\n        std::cout << \"Matched prefix: /\" << prefix_len << \"\\n\";\n        std::cout << \"Next hop: \" << target << \"\\n\";\n        if (in_vpc) {\n            std::cout << \"Delivery: VXLAN direct (VNI encapsulated)\\n\";\n        } else if (target.find(\"igw\") != std::string::npos) {\n            std::cout << \"Delivery: Internet Gateway (with SNAT)\\n\";\n        } else if (target.find(\"vpn\") != std::string::npos) {\n            std::cout << \"Delivery: IPSec tunnel (encrypted)\\n\";\n        }\n        std::cout << \"--- Trace Complete ---\\n\\n\";\n    }\n\n    void print_table() {\n        std::cout << \"Route Table for \" << vpc_id << \"\\n\";\n        std::cout << std::left << std::setw(20) << \"Destination\"\n                  << std::setw(20) << \"Target\" << \"Type\\n\";\n        std::cout << std::string(55, '-') << \"\\n\";\n        for (const auto& r : routes) {\n            std::cout << std::left << std::setw(20) << uint_to_ip(r.network) + \"/\"\n                      + std::to_string(__builtin_popcount(r.netmask))\n                      << std::setw(20) << r.target\n                      << (r.is_local ? \"local\" : \"remote\") << \"\\n\";\n        }\n    }\n};\n\nint main() {\n    VPCRouteTable vpc(\"vpc-12345\", \"10.0.0.0/16\");\n    vpc.add_route(\"10.0.0.0/16\", \"local\", true);\n    vpc.add_route(\"10.0.1.0/24\", \"subnet-local\");\n    vpc.add_route(\"0.0.0.0/0\", \"igw-abc123\");\n    vpc.add_route(\"172.16.0.0/12\", \"vpn-def456\");\n\n    vpc.print_table();\n    vpc.trace_packet(\"10.0.1.5\", \"8.8.8.8\");\n    vpc.trace_packet(\"10.0.1.5\", \"10.0.0.22\");\n    vpc.trace_packet(\"10.0.1.5\", \"172.16.5.10\");\n    vpc.trace_packet(\"10.0.1.5\", \"192.168.1.1\");\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-vpc-network-simulator",
      children: "Python Implementation: VPC Network Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import ipaddress\nfrom dataclasses import dataclass\nfrom typing import Optional\n\n\n@dataclass\nclass RouteEntry:\n    network: ipaddress.IPv4Network\n    target: str\n    is_local: bool = False\n\n\nclass VPCRouteTable:\n    def __init__(self, vpc_id: str, vpc_cidr: str):\n        self.vpc_id = vpc_id\n        self.vpc_network = ipaddress.IPv4Network(vpc_cidr, strict=False)\n        self.routes: list[RouteEntry] = []\n\n    def add_route(self, cidr: str, target: str, local: bool = False):\n        network = ipaddress.IPv4Network(cidr, strict=False)\n        self.routes.append(RouteEntry(network=network, target=target, is_local=local))\n\n    def longest_prefix_match(self, ip_str: str) -> Optional[tuple[str, int]]:\n        dst_ip = ipaddress.IPv4Address(ip_str)\n        best_prefix = -1\n        best_target = None\n\n        for route in self.routes:\n            if dst_ip in route.network:\n                prefix = route.network.prefixlen\n                if prefix > best_prefix:\n                    best_prefix = prefix\n                    best_target = route.target\n\n        if best_target is None:\n            return None\n        return (best_target, best_prefix)\n\n    def trace_packet(self, src_ip: str, dst_ip: str):\n        print(f\"\\n--- Route Trace ---\")\n        print(f\"Source: {src_ip} ({self.vpc_id})\")\n        print(f\"Destination: {dst_ip}\")\n        print(f\"VPC CIDR: {self.vpc_network}\")\n\n        result = self.longest_prefix_match(dst_ip)\n        if result is None:\n            print(\"RESULT: No route → packet dropped\")\n            return\n\n        target, prefix_len = result\n        in_vpc = ipaddress.IPv4Address(dst_ip) in self.vpc_network\n\n        print(f\"Matched prefix: /{prefix_len}\")\n        print(f\"Next hop: {target}\")\n        if in_vpc:\n            print(\"Delivery: VXLAN direct (VNI encapsulated)\")\n        elif \"igw\" in target:\n            print(\"Delivery: Internet Gateway (with SNAT)\")\n        elif \"vpn\" in target:\n            print(\"Delivery: IPSec tunnel (encrypted)\")\n        print(\"--- Trace Complete ---\\n\")\n\n    def print_table(self):\n        print(f\"Route Table for {self.vpc_id}\")\n        print(f\"{'Destination':<20} {'Target':<20} Type\")\n        print(\"-\" * 55)\n        for r in self.routes:\n            print(f\"{str(r.network):<20} {r.target:<20} {'local' if r.is_local else 'remote'}\")\n\n\nclass VPCNetworkSimulator:\n    def __init__(self):\n        self.vpcs: dict[str, VPCRouteTable] = {}\n        self.security_groups: dict[str, list[dict]] = {}\n        self.vni_map: dict[str, int] = {}\n\n    def create_vpc(self, vpc_id: str, cidr: str):\n        self.vpcs[vpc_id] = VPCRouteTable(vpc_id, cidr)\n        self.vni_map[vpc_id] = hash(vpc_id) & 0xFFFFFF\n\n    def create_security_group(self, sg_id: str, rules: list[dict]):\n        self.security_groups[sg_id] = rules\n\n    def check_security_group(self, sg_id: str, src_ip: str, dst_port: int,\n                              protocol: str, direction: str) -> bool:\n        if sg_id not in self.security_groups:\n            return False\n        for rule in self.security_groups[sg_id]:\n            if rule.get(\"direction\") != direction:\n                continue\n            if rule.get(\"protocol\") not in (\"ALL\", protocol):\n                continue\n            if rule.get(\"port\") is not None and rule[\"port\"] != dst_port:\n                continue\n            if rule.get(\"cidr\") is not None:\n                src = ipaddress.IPv4Address(src_ip)\n                if src not in ipaddress.IPv4Network(rule[\"cidr\"]):\n                    continue\n            return True\n        return False\n\n    def simulate_packet_flow(self, src_vpc: str, src_ip: str,\n                              dst_ip: str, dst_port: int, protocol: str = \"TCP\"):\n        print(f\"\\n{'='*60}\")\n        print(f\"PACKET FLOW: {src_ip} -> {dst_ip}:{dst_port} ({protocol})\")\n        print(f\"{'='*60}\")\n\n        vpc = self.vpcs.get(src_vpc)\n        if not vpc:\n            print(\"ERROR: Source VPC not found\")\n            return\n\n        result = vpc.longest_prefix_match(dst_ip)\n        if result is None:\n            print(\"FAIL: No route to destination (packet dropped)\")\n            return\n\n        target, prefix = result\n        print(f\"Route resolved: prefix=/{prefix}, target={target}\")\n\n        print(f\"VXLAN VNI: {self.vni_map.get(src_vpc, 'N/A')}\")\n        print(\"PACKET DELIVERED SUCCESSFULLY\")\n\n\nif __name__ == \"__main__\":\n    sim = VPCNetworkSimulator()\n    sim.create_vpc(\"vpc-12345\", \"10.0.0.0/16\")\n    sim.vpcs[\"vpc-12345\"].add_route(\"10.0.0.0/16\", \"local\", True)\n    sim.vpcs[\"vpc-12345\"].add_route(\"0.0.0.0/0\", \"igw-abc123\")\n    sim.vpcs[\"vpc-12345\"].add_route(\"172.16.0.0/12\", \"vpn-def456\")\n\n    sim.vpcs[\"vpc-12345\"].print_table()\n    sim.simulate_packet_flow(\"vpc-12345\", \"10.0.1.5\", \"8.8.8.8\", 443)\n    sim.simulate_packet_flow(\"vpc-12345\", \"10.0.1.5\", \"10.0.0.22\", 80)\n    sim.simulate_packet_flow(\"vpc-12345\", \"10.0.1.5\", \"172.16.5.10\", 22)\n"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph ONPREM[On-Premises Data Center]\n        direction TB\n        R1[Router / Firewall]\n        SW1[Switch]\n        S1[Physical Server]\n        S2[Physical Server]\n    end\n\n    subgraph CLOUD[Cloud Provider Region]\n        direction TB\n        subgraph VPC[Virtual Private Cloud - 10.0.0.0/16]\n            direction TB\n            IGW[Internet Gateway<br/>0.0.0.0/0]\n            NAT[NAT Gateway<br/>10.0.0.0/16]\n\n            subgraph AZ1[Availability Zone A]\n                direction TB\n                PubSub1[Public Subnet<br/>10.0.1.0/24]\n                ALB1[ALB - app-lb-1]\n                Web1[Web Server<br/>t3.medium]\n                PrivSub1[Private Subnet<br/>10.0.2.0/24]\n                App1[App Server<br/>t3.large]\n                DBSub1[DB Subnet<br/>10.0.3.0/24]\n                DB1[RDS Primary<br/>db.r5.xlarge]\n            end\n\n            subgraph AZ2[Availability Zone B]\n                direction TB\n                PubSub2[Public Subnet<br/>10.0.4.0/24]\n                ALB2[ALB - app-lb-2]\n                Web2[Web Server<br/>t3.medium]\n                PrivSub2[Private Subnet<br/>10.0.5.0/24]\n                App2[App Server<br/>t3.large]\n                DBSub2[DB Subnet<br/>10.0.6.0/24]\n                DB2[RDS Standby<br/>db.r5.xlarge]\n            end\n\n            subgraph CDN[CloudFront CDN]\n                Edge1[Edge Node<br/>us-east-1]\n                Edge2[Edge Node<br/>eu-west-1]\n                Edge3[Edge Node<br/>ap-southeast-1]\n            end\n\n            RT_Public[Route Table: Public]\n            RT_Private[Route Table: Private]\n            SGs[Security Groups<br/>Web/App/DB tiers]\n        end\n\n        DX[Direct Connect<br/>1 Gbps]\n        VPN[VPN Gateway<br/>IPSec Tunnel]\n        DNS[Route53<br/>DNS + Health Checks]\n    end\n\n    subgraph USERS[Global Users]\n        U1[User: NYC]\n        U2[User: London]\n        U3[User: Tokyo]\n    end\n\n    USERS -->|HTTPS| DNS\n    DNS -->|Weighted/Latency Routing| IGW\n    USERS -->|Static Content| CDN\n    CDN -->|Origin Pull| ALB1 & ALB2\n    IGW -->|Port 80/443| ALB1 & ALB2\n    ALB1 & ALB2 -->|Port 8080| App1 & App2\n    App1 & App2 -->|Port 3306| DB1 & DB2\n    Web1 & Web2 -->|Outbound| NAT\n    NAT --> IGW\n    ONPREM -->|BGP| VPN\n    ONPREM -->|BGP| DX\n    VPN & DX -->|Private IP| App1 & App2\n    App1 & App2 -->|Replication| DB1\n    DB1 -.->|Synchronous Replica| DB2\n\n    PubSub1 & PubSub2 --> RT_Public\n    PrivSub1 & PrivSub2 --> RT_Private\n    DBSub1 & DBSub2 --> RT_Private\n    RT_Public --> IGW\n    RT_Private --> NAT\n\n    classDef aws fill:#FF9900,stroke:#232F3E,color:#232F3E,stroke-width:2px\n    classDef onprem fill:#E0E0E0,stroke:#333,color:#333,stroke-width:2px\n    classDef cdn fill:#8C4FFF,stroke:#232F3E,color:#fff,stroke-width:2px\n    classDef user fill:#2E86C1,stroke:#1B4F72,color:#fff,stroke-width:2px\n    classDef subnet fill:#D5E8D4,stroke:#82B366,color:#000,stroke-width:1px\n    classDef tier fill:#DAE8FC,stroke:#6C8EBF,color:#000,stroke-width:1px\n    classDef db fill:#F8CECC,stroke:#B85450,color:#000,stroke-width:1px\n\n    class IGW,NAT,DNS,R VPN,CLOUD aws\n    class R1,SW1,S1,S2 onprem\n    class Edge1,Edge2,Edge3,CDN cdn\n    class U1,U2,U3 user\n    class PubSub1,PubSub2,PrivSub1,PrivSub2,DBSub1,DBSub2 subnet\n    class Web1,Web2,App1,App2 tier\n    class DB1,DB2 db\n"
      })
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
        children: "PROCEDURE allocate_vpc_cidr(desired_size, existing_vpcs):\n    // Pick a non-overlapping CIDR\n    FOR each /16 in 10.0.0.0/8:\n        candidate = 10.X.0.0/16\n        IF candidate overlaps_with ANY existing_vpcs:\n            CONTINUE\n        RETURN candidate\n    RETURN \"No space in 10.0.0.0/8\"\nEND PROCEDURE\n\nPROCEDURE divide_subnets(vpc_cidr, num_azs):\n    base_prefix = prefixlen(vpc_cidr)     // e.g., /16\n    subnet_prefix = base_prefix + 4       // e.g., /20\n    subnets = []\n    az_index = 0\n\n    FOR each /20 block in vpc_cidr:\n        az = AZ_LIST[az_index % num_azs]\n        IF block is for public tier:\n            route_table = \"rtb-public\"     // 0.0.0.0/0 -> IGW\n            is_public = True\n        ELSE:\n            route_table = \"rtb-private\"    // 0.0.0.0/0 -> NAT\n            is_public = False\n        subnets.append({\n            cidr: str(block),\n            az: az,\n            route_table: route_table,\n            is_public: is_public\n        })\n        az_index += 1\n\n    RETURN subnets\nEND PROCEDURE\n\nPROCEDURE create_security_group_rules(tier):\n    IF tier == \"web\":\n        rules = [\n            { direction: \"inbound\", protocol: \"TCP\", port: 80,  cidr: \"0.0.0.0/0\" },\n            { direction: \"inbound\", protocol: \"TCP\", port: 443, cidr: \"0.0.0.0/0\" },\n            { direction: \"outbound\", protocol: \"ALL\", cidr: \"0.0.0.0/0\" }\n        ]\n    ELSE IF tier == \"app\":\n        rules = [\n            { direction: \"inbound\", protocol: \"TCP\", port: 8080, sg_source: \"sg-web\" },\n            { direction: \"outbound\", protocol: \"ALL\", cidr: \"0.0.0.0/0\" }\n        ]\n    ELSE IF tier == \"db\":\n        rules = [\n            { direction: \"inbound\", protocol: \"TCP\", port: 3306, sg_source: \"sg-app\" }\n        ]\n    RETURN rules\nEND PROCEDURE\n"
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
        children: "#include <iostream>\n#include <vector>\n#include <string>\n#include <cstdint>\n#include <sstream>\n#include <iomanip>\n\nstruct Subnet {\n    std::string cidr;\n    std::string az;\n    std::string route_table;\n    bool is_public;\n    std::string tier;\n};\n\nuint32_t ip_to_uint(const std::string& ip) {\n    std::stringstream s(ip);\n    int a, b, c, d; char ch;\n    s >> a >> ch >> b >> ch >> c >> ch >> d;\n    return (a << 24) | (b << 16) | (c << 8) | d;\n}\n\nstd::string uint_to_ip(uint32_t ip) {\n    return std::to_string((ip >> 24) & 0xFF) + \".\" +\n           std::to_string((ip >> 16) & 0xFF) + \".\" +\n           std::to_string((ip >> 8) & 0xFF) + \".\" +\n           std::to_string(ip & 0xFF);\n}\n\nint popcount(uint32_t x) {\n    int c = 0;\n    while (x) { c += x & 1; x >>= 1; }\n    return c;\n}\n\nclass VPCAllocator {\nprivate:\n    std::vector<Subnet> subnets;\n    std::string vpc_cidr;\n    std::vector<std::string> azs;\n\npublic:\n    VPCAllocator(const std::string& vpc, const std::vector<std::string>& availability_zones)\n        : vpc_cidr(vpc), azs(availability_zones) {}\n\n    void allocate_subnets(const std::vector<std::string>& tiers, int subnet_size_shift) {\n        size_t slash = vpc_cidr.find('/');\n        std::string ip_part = vpc_cidr.substr(0, slash);\n        int vpc_prefix = std::stoi(vpc_cidr.substr(slash + 1));\n        uint32_t base_ip = ip_to_uint(ip_part);\n        int subnet_prefix = vpc_prefix + subnet_size_shift;\n        int num_subnets = (1 << subnet_size_shift);\n\n        for (int i = 0; i < num_subnets && i < (int)tiers.size() * (int)azs.size(); i++) {\n            int tier_idx = i % tiers.size();\n            int az_idx = (i / tiers.size()) % azs.size();\n            uint32_t subnet_ip = base_ip + (i * (1 << (32 - subnet_prefix)));\n            std::string cidr = uint_to_ip(subnet_ip) + \"/\" + std::to_string(subnet_prefix);\n            std::string tier = tiers[tier_idx];\n            bool is_public = (tier == \"web\");\n\n            Subnet s;\n            s.cidr = cidr;\n            s.az = azs[az_idx];\n            s.tier = tier;\n            s.is_public = is_public;\n            s.route_table = is_public ? \"rtb-public\" : \"rtb-\" + tier + \"-private\";\n            subnets.push_back(s);\n        }\n    }\n\n    void print_allocation() {\n        std::cout << \"\\nVPC: \" << vpc_cidr << \"\\n\";\n        std::cout << std::left << std::setw(20) << \"Subnet\" << std::setw(12) << \"AZ\"\n                  << std::setw(20) << \"Route Table\" << std::setw(8) << \"Type\" << \"Tier\\n\";\n        std::cout << std::string(75, '-') << \"\\n\";\n        for (const auto& s : subnets) {\n            std::cout << std::left << std::setw(20) << s.cidr << std::setw(12) << s.az\n                      << std::setw(20) << s.route_table\n                      << std::setw(8) << (s.is_public ? \"Public\" : \"Private\") << s.tier << \"\\n\";\n        }\n    }\n\n    std::vector<Subnet> get_subnets() const { return subnets; }\n};\n\nint main() {\n    VPCAllocator vpc(\"10.0.0.0/16\", {\"us-east-1a\", \"us-east-1b\"});\n    vpc.allocate_subnets({\"web\", \"app\", \"db\"}, 4);\n    vpc.print_allocation();\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-vpc-subnet-planner",
      children: "Python Implementation: VPC Subnet Planner"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import ipaddress\nfrom dataclasses import dataclass\nfrom typing import Optional\n\n\n@dataclass\nclass SubnetPlan:\n    cidr: str\n    az: str\n    route_table: str\n    is_public: bool\n    tier: str\n\n\nclass VPCSubnetPlanner:\n    def __init__(self, vpc_cidr: str, availability_zones: list[str]):\n        self.vpc_network = ipaddress.IPv4Network(vpc_cidr, strict=False)\n        self.azs = availability_zones\n        self.subnets: list[SubnetPlan] = []\n\n    def allocate_subnets(self, tiers: list[str], subnet_prefix: int):\n        base_ip = int(self.vpc_network.network_address)\n        vpc_prefix = self.vpc_network.prefixlen\n        num_subnets = 2 ** (subnet_prefix - vpc_prefix)\n\n        for i in range(min(num_subnets, len(tiers) * len(self.azs))):\n            tier_idx = i % len(tiers)\n            az_idx = (i // len(tiers)) % len(self.azs)\n            subnet_ip = base_ip + (i * (1 << (32 - subnet_prefix)))\n            cidr = f\"{ipaddress.IPv4Address(subnet_ip)}/{subnet_prefix}\"\n            tier = tiers[tier_idx]\n            is_public = (tier in (\"web\", \"public\"))\n\n            route_table = \"rtb-public\" if is_public else f\"rtb-{tier}-private\"\n            self.subnets.append(SubnetPlan(\n                cidr=cidr,\n                az=self.azs[az_idx],\n                route_table=route_table,\n                is_public=is_public,\n                tier=tier\n            ))\n\n    def find_subnet_for_ip(self, ip_str: str) -> Optional[SubnetPlan]:\n        ip = ipaddress.IPv4Address(ip_str)\n        for subnet in self.subnets:\n            if ip in ipaddress.IPv4Network(subnet.cidr):\n                return subnet\n        return None\n\n    def print_allocation(self):\n        print(f\"VPC: {self.vpc_network}\")\n        print(f\"{'Subnet':<20} {'AZ':<12} {'Route Table':<20} {'Type':<8} Tier\")\n        print(\"-\" * 75)\n        for s in self.subnets:\n            print(f\"{s.cidr:<20} {s.az:<12} {s.route_table:<20} \"\n                  f\"{'Public' if s.is_public else 'Private':<8} {s.tier}\")\n\n\nplanner = VPCSubnetPlanner(\"10.0.0.0/16\", [\"us-east-1a\", \"us-east-1b\"])\nplanner.allocate_subnets([\"web\", \"app\", \"db\"], 20)\nplanner.print_allocation()\n\nsubnet = planner.find_subnet_for_ip(\"10.0.48.15\")\nif subnet:\n    print(f\"\\n10.0.48.15 belongs to: {subnet.tier} tier in {subnet.az}\")\n"
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
        children: "interface SubnetConfig {\n  name: string;\n  cidr: string;\n  az: string;\n  tier: 'public' | 'private' | 'isolated';\n}\n\ninterface RouteTableEntry {\n  destination: string;\n  target: string;\n  description: string;\n}\n\ninterface SecurityGroupRule {\n  direction: 'inbound' | 'outbound';\n  protocol: string;\n  port: number;\n  source: string; // CIDR or security group ID\n}\n\nclass VPCNetworkDesigner {\n  private vpcCidr: string;\n  private subnets: SubnetConfig[] = [];\n  private routeTables: Map<string, RouteTableEntry[]> = new Map();\n  private securityGroupRules: Map<string, SecurityGroupRule[]> = new Map();\n\n  constructor(vpcCidr: string) {\n    this.vpcCidr = vpcCidr;\n  }\n\n  // Calculate subnet CIDRs given a VPC CIDR, number of subnets, and tier names\n  static calculateSubnetCidrs(\n    vpcCidr: string,\n    tierNames: string[],\n    azCount: number,\n    subnetPrefix: number\n  ): SubnetConfig[] {\n    const [baseIp, existingPrefix] = vpcCidr.split('/');\n    const basePrefix = parseInt(existingPrefix);\n    const numSubnets = tierNames.length * azCount;\n    const subnetSize = Math.pow(2, 32 - subnetPrefix);\n    const vpcSize = Math.pow(2, 32 - basePrefix);\n\n    if (numSubnets * subnetSize > vpcSize) {\n      throw new Error('Subnet size exceeds VPC CIDR capacity');\n    }\n\n    const subnets: SubnetConfig[] = [];\n    const ipParts = baseIp.split('.').map(Number);\n    const baseIPnum = (ipParts[0] << 24) | (ipParts[1] << 16) | (ipParts[2] << 8) | ipParts[3];\n\n    const azs = Array.from({ length: azCount }, (_, i) => `us-east-1${String.fromCharCode(97 + i)}`);\n\n    let index = 0;\n    for (let azIdx = 0; azIdx < azCount; azIdx++) {\n      for (let tierIdx = 0; tierIdx < tierNames.length; tierIdx++) {\n        const subnetIPnum = baseIPnum + index * subnetSize;\n        const cidr = `${(subnetIPnum >>> 24) & 0xFF}.${(subnetIPnum >>> 16) & 0xFF}.${(subnetIPnum >>> 8) & 0xFF}.${subnetIPnum & 0xFF}/${subnetPrefix}`;\n        const tier = tierNames[tierIdx];\n        subnets.push({\n          name: `${tier}-${azs[azIdx]}`,\n          cidr,\n          az: azs[azIdx],\n          tier: tier === 'web' ? 'public' : 'private'\n        });\n        index++;\n      }\n    }\n    return subnets;\n  }\n\n  addSubnet(subnet: SubnetConfig): void {\n    this.subnets.push(subnet);\n  }\n\n  addRouteTableEntry(subnetName: string, entry: RouteTableEntry): void {\n    if (!this.routeTables.has(subnetName)) {\n      this.routeTables.set(subnetName, []);\n    }\n    this.routeTables.get(subnetName)!.push(entry);\n  }\n\n  addSecurityGroupRule(sgName: string, rule: SecurityGroupRule): void {\n    if (!this.securityGroupRules.has(sgName)) {\n      this.securityGroupRules.set(sgName, []);\n    }\n    this.securityGroupRules.get(sgName)!.push(rule);\n  }\n\n  // NAT Gateway vs Internet Gateway selection based on tier\n  configureGateways(): void {\n    for (const subnet of this.subnets) {\n      if (subnet.tier === 'public') {\n        this.addRouteTableEntry(subnet.name, {\n          destination: '0.0.0.0/0',\n          target: 'igw-12345',\n          description: 'Internet Gateway for public subnet'\n        });\n      } else if (subnet.tier === 'private') {\n        this.addRouteTableEntry(subnet.name, {\n          destination: '0.0.0.0/0',\n          target: 'natgw-67890',\n          description: 'NAT Gateway for private subnet outbound'\n        });\n      }\n      this.addRouteTableEntry(subnet.name, {\n        destination: this.vpcCidr,\n        target: 'local',\n        description: 'Local VPC routing'\n      });\n    }\n  }\n\n  printDesign(): void {\n    console.log(`VPC CIDR: ${this.vpcCidr}`);\n    console.log('\\n--- Subnets ---');\n    console.log(`${'Name':<20} ${'CIDR':<20} ${'AZ':<15} ${'Tier'}`);\n    console.log('-'.repeat(60));\n    for (const s of this.subnets) {\n      console.log(`${s.name.padEnd(20)} ${s.cidr.padEnd(20)} ${s.az.padEnd(15)} ${s.tier}`);\n    }\n\n    console.log('\\n--- Route Tables ---');\n    for (const [subnet, entries] of this.routeTables) {\n      console.log(`\\nRoute Table: ${subnet}`);\n      for (const e of entries) {\n        console.log(`  ${e.destination.padEnd(20)} → ${e.target.padEnd(20)} (${e.description})`);\n      }\n    }\n\n    console.log('\\n--- Security Groups ---');\n    for (const [sg, rules] of this.securityGroupRules) {\n      console.log(`\\nSecurity Group: ${sg}`);\n      for (const r of rules) {\n        console.log(`  ${r.direction.padEnd(10)} ${r.protocol.padEnd(8)} ${String(r.port).padEnd(8)} → ${r.source}`);\n      }\n    }\n  }\n}\n\n// Usage example\nfunction demoVPCDesign() {\n  // Calculate subnet CIDRs for a /16 VPC with 3 tiers × 2 AZs, each /20\n  const subnets = VPCNetworkDesigner.calculateSubnetCidrs('10.0.0.0/16', ['web', 'app', 'db'], 2, 20);\n  console.log('Generated Subnet CIDRs:');\n  for (const s of subnets) {\n    console.log(`  ${s.name.padEnd(15)} ${s.cidr.padEnd(18)} AZ: ${s.az.padEnd(12)} Tier: ${s.tier}`);\n  }\n  // Output:\n  // Generated Subnet CIDRs:\n  //   web-us-east-1a  10.0.0.0/20   AZ: us-east-1a  Tier: public\n  //   app-us-east-1a  10.0.16.0/20  AZ: us-east-1a  Tier: private\n  //   db-us-east-1a   10.0.32.0/20  AZ: us-east-1a  Tier: private\n  //   web-us-east-1b  10.0.48.0/20  AZ: us-east-1b  Tier: public\n  //   app-us-east-1b  10.0.64.0/20  AZ: us-east-1b  Tier: private\n  //   db-us-east-1b   10.0.80.0/20  AZ: us-east-1b  Tier: private\n\n  const designer = new VPCNetworkDesigner('10.0.0.0/16');\n  for (const s of subnets) designer.addSubnet(s);\n  designer.configureGateways();\n\n  // Web tier: HTTP/HTTPS from anywhere\n  designer.addSecurityGroupRule('sg-web', { direction: 'inbound', protocol: 'TCP', port: 443, source: '0.0.0.0/0' });\n  designer.addSecurityGroupRule('sg-web', { direction: 'inbound', protocol: 'TCP', port: 80, source: '0.0.0.0/0' });\n\n  // App tier: traffic from web SG only\n  designer.addSecurityGroupRule('sg-app', { direction: 'inbound', protocol: 'TCP', port: 8080, source: 'sg-web' });\n\n  // DB tier: traffic from app SG only\n  designer.addSecurityGroupRule('sg-db', { direction: 'inbound', protocol: 'TCP', port: 3306, source: 'sg-app' });\n\n  designer.printDesign();\n}\n\ndemoVPCDesign();\n"
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
        children: "PROCEDURE evaluate_security_group(packet, sg_rules, connection_tracking):\n    // Step 1: Check connection tracking for existing flows\n    flow_key = hash(packet.src_ip, packet.dst_ip, packet.src_port,\n                    packet.dst_port, packet.protocol)\n\n    IF connection_tracking.contains(flow_key):\n        ALLOW  // Return traffic for established connections\n        RETURN\n\n    // Step 2: Determine direction\n    IF packet.direction == \"INBOUND\":\n        matching_rules = sg_rules.inbound\n    ELSE:\n        matching_rules = sg_rules.outbound\n\n    // Step 3: Evaluate all rules (parallel - any match = allow)\n    FOR each rule in matching_rules:\n        IF rule.protocol == \"ALL\" OR rule.protocol == packet.protocol:\n            IF rule.port == \"ALL\" OR rule.port == packet.dst_port:\n                IF ip_in_cidr(packet.src_ip, rule.cidr) OR\n                   sg_matches(rule.sg_source, packet.src_sg):\n                    connection_tracking.add(flow_key)\n                    ALLOW\n                    RETURN\n\n    // Step 4: No rule matched\n    DENY\n    LOG \"Security group \" + sg_rules.id + \" denied \" + packet.summary()\n    RETURN\nEND PROCEDURE\n"
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
        children: "#include <iostream>\n#include <vector>\n#include <string>\n#include <cstdint>\n#include <unordered_map>\n#include <sstream>\n#include <iomanip>\n\nstruct SGRule {\n    bool is_inbound;\n    std::string protocol;\n    int port;\n    uint32_t cidr_network;\n    uint32_t cidr_mask;\n    bool cidr_all;\n};\n\nstruct FlowKey {\n    uint32_t src_ip, dst_ip;\n    int src_port, dst_port;\n    std::string protocol;\n\n    bool operator==(const FlowKey& o) const {\n        return src_ip == o.src_ip && dst_ip == o.dst_ip &&\n               src_port == o.src_port && dst_port == o.dst_port &&\n               protocol == o.protocol;\n    }\n};\n\nstruct FlowKeyHash {\n    size_t operator()(const FlowKey& k) const {\n        return std::hash<uint32_t>{}(k.src_ip) ^\n               std::hash<uint32_t>{}(k.dst_ip) ^\n               std::hash<int>{}(k.src_port) ^\n               std::hash<int>{}(k.dst_port);\n    }\n};\n\nuint32_t ip_to_uint(const std::string& ip) {\n    std::stringstream s(ip);\n    int a, b, c, d; char ch;\n    s >> a >> ch >> b >> ch >> c >> ch >> d;\n    return (a << 24) | (b << 16) | (c << 8) | d;\n}\n\nclass SecurityGroup {\nprivate:\n    std::vector<SGRule> rules;\n    std::string sg_id;\n    std::unordered_map<FlowKey, bool, FlowKeyHash> connection_tracking;\n\npublic:\n    SecurityGroup(const std::string& id) : sg_id(id) {}\n\n    void add_rule(bool inbound, const std::string& proto, int port,\n                  const std::string& cidr) {\n        SGRule r;\n        r.is_inbound = inbound;\n        r.protocol = proto;\n        r.port = port;\n        if (cidr == \"0.0.0.0/0\") {\n            r.cidr_all = true;\n            r.cidr_network = 0;\n            r.cidr_mask = 0;\n        } else {\n            r.cidr_all = false;\n            size_t slash = cidr.find('/');\n            std::string ip_part = cidr.substr(0, slash);\n            int prefix = std::stoi(cidr.substr(slash + 1));\n            r.cidr_network = ip_to_uint(ip_part);\n            r.cidr_mask = (prefix == 0) ? 0 : (0xFFFFFFFF << (32 - prefix));\n        }\n        rules.push_back(r);\n    }\n\n    bool evaluate(const std::string& src_ip, const std::string& dst_ip,\n                  int src_port, int dst_port, const std::string& protocol,\n                  bool inbound) {\n        FlowKey fk{ip_to_uint(src_ip), ip_to_uint(dst_ip), src_port, dst_port, protocol};\n\n        if (connection_tracking.find(fk) != connection_tracking.end()) {\n            std::cout << \"  [Tracking hit] Flow exists → auto-allow return\\n\";\n            return true;\n        }\n\n        uint32_t src = ip_to_uint(src_ip);\n        for (const auto& r : rules) {\n            if (r.is_inbound != inbound) continue;\n            if (r.protocol != \"ALL\" && r.protocol != protocol) continue;\n            if (r.port != 0 && r.port != dst_port) continue;\n            if (!r.cidr_all) {\n                if ((src & r.cidr_mask) != (r.cidr_network & r.cidr_mask)) continue;\n            }\n            connection_tracking[fk] = true;\n            return true;\n        }\n        return false;\n    }\n\n    void simulate_traffic(const std::string& src_ip, const std::string& dst_ip,\n                          int src_port, int dst_port, const std::string& protocol,\n                          bool inbound) {\n        bool allowed = evaluate(src_ip, dst_ip, src_port, dst_port, protocol, inbound);\n        std::cout << (inbound ? \"INBOUND\" : \"OUTBOUND\") << \" \"\n                  << src_ip << \":\" << src_port << \" → \"\n                  << dst_ip << \":\" << dst_port << \" \"\n                  << protocol << \" → \"\n                  << (allowed ? \"ALLOW\" : \"DENY\") << \"\\n\";\n    }\n};\n\nint main() {\n    SecurityGroup sg(\"sg-web\");\n\n    sg.add_rule(true, \"TCP\", 443, \"0.0.0.0/0\");\n    sg.add_rule(true, \"TCP\", 80, \"0.0.0.0/0\");\n    sg.add_rule(true, \"TCP\", 22, \"10.0.0.0/16\");\n\n    std::cout << \"Security Group: \" << \"sg-web\" << \"\\n\";\n    std::cout << \"Rules: TCP/443 from anywhere, TCP/80 from anywhere, TCP/22 from 10.0.0.0/16\\n\\n\";\n\n    sg.simulate_traffic(\"203.0.113.5\", \"10.0.1.10\", 50000, 22, \"TCP\", true);\n    sg.simulate_traffic(\"10.0.1.5\", \"10.0.1.10\", 40000, 22, \"TCP\", true);\n    sg.simulate_traffic(\"10.0.1.10\", \"203.0.113.5\", 22, 50000, \"TCP\", false);\n    sg.simulate_traffic(\"192.168.1.1\", \"10.0.1.10\", 30000, 443, \"TCP\", true);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-security-group-simulator",
      children: "Python Implementation: Security Group Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import ipaddress\nfrom dataclasses import dataclass\nfrom typing import Optional\n\n\n@dataclass\nclass SGRule:\n    direction: str\n    protocol: str\n    port: Optional[int]\n    cidr: Optional[str]\n    sg_source: Optional[str] = None\n\n\nclass SecurityGroup:\n    def __init__(self, sg_id: str):\n        self.sg_id = sg_id\n        self.rules: list[SGRule] = []\n        self.connections: set[tuple] = set()\n\n    def add_rule(self, direction: str, protocol: str, port: Optional[int],\n                 cidr: Optional[str] = None, sg_source: Optional[str] = None):\n        self.rules.append(SGRule(\n            direction=direction, protocol=protocol,\n            port=port, cidr=cidr, sg_source=sg_source\n        ))\n\n    def evaluate(self, src_ip: str, dst_port: int, protocol: str,\n                 direction: str, src_sg_id: Optional[str] = None) -> bool:\n        flow_key = (src_ip, dst_port, protocol, direction)\n        if flow_key in self.connections:\n            return True\n\n        for rule in self.rules:\n            if rule.direction != direction:\n                continue\n            if rule.protocol not in (\"ALL\", protocol):\n                continue\n            if rule.port is not None and rule.port != dst_port:\n                continue\n            if rule.cidr is not None:\n                src = ipaddress.IPv4Address(src_ip)\n                if src not in ipaddress.IPv4Network(rule.cidr):\n                    continue\n            if rule.sg_source is not None and src_sg_id != rule.sg_source:\n                continue\n            self.connections.add(flow_key)\n            return True\n        return False\n\n    def simulate(self, src_ip: str, dst_port: int, protocol: str,\n                 direction: str, label: str = \"\"):\n        allowed = self.evaluate(src_ip, dst_port, protocol, direction)\n        tag = f\"[{label}] \" if label else \"\"\n        status = \"ALLOW\" if allowed else \"DENY\"\n        print(f\"{tag}{direction} {src_ip} → port {dst_port}/{protocol} → {status}\")\n\n\n# Simulate a multi-tier application\nsg_web = SecurityGroup(\"sg-web\")\nsg_web.add_rule(\"inbound\", \"TCP\", 443, \"0.0.0.0/0\")\nsg_web.add_rule(\"inbound\", \"TCP\", 80, \"0.0.0.0/0\")\nsg_web.add_rule(\"inbound\", \"TCP\", 22, \"10.0.0.0/16\")\n\nsg_app = SecurityGroup(\"sg-app\")\nsg_app.add_rule(\"inbound\", \"TCP\", 8080, sg_source=\"sg-web\")\n\nsg_db = SecurityGroup(\"sg-db\")\nsg_db.add_rule(\"inbound\", \"TCP\", 3306, sg_source=\"sg-app\")\n\nprint(\"=== Security Group Simulation ===\")\nsg_web.simulate(\"203.0.113.5\", 22, \"TCP\", \"inbound\", \"Internet→web:SSH\")\nsg_web.simulate(\"10.0.1.5\", 22, \"TCP\", \"inbound\", \"VPC-internal→web:SSH\")\nsg_app.simulate(\"10.0.0.10\", 8080, \"TCP\", \"inbound\", \"web→app:HTTP\")\nsg_db.simulate(\"10.0.32.10\", 3306, \"TCP\", \"inbound\", \"app→db:MySQL\")\nsg_db.simulate(\"10.0.1.5\", 3306, \"TCP\", \"inbound\", \"web→db:MySQL (should DENY)\")\n"
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
        children: "PROCEDURE dispatch_request(request, target_group, algorithm):\n    healthy_targets = [t for t in target_group if t.healthy]\n\n    IF healthy_targets is EMPTY:\n        RETURN 503 Service Unavailable\n\n    IF algorithm == \"ROUND_ROBIN\":\n        target = healthy_targets[rr_index % len(healthy_targets)]\n        rr_index += 1\n\n    ELSE IF algorithm == \"LEAST_CONNECTIONS\":\n        target = argmin(healthy_targets, key=lambda t: t.active_connections)\n        target.active_connections += 1\n\n    ELSE IF algorithm == \"LEAST_RESPONSE_TIME\":\n        target = argmin(healthy_targets, key=lambda t: t.moving_avg_response_time)\n\n    ELSE IF algorithm == \"IP_HASH\":\n        hash = consistent_hash(request.src_ip)\n        target = healthy_targets[hash % len(healthy_targets)]\n\n    target.active_connections += 1\n    async_send(request, target)\n    RETURN\nEND PROCEDURE\n"
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
        children: "#include <iostream>\n#include <vector>\n#include <string>\n#include <queue>\n#include <mutex>\n#include <random>\n#include <thread>\n#include <chrono>\n#include <iomanip>\n#include <sstream>\n#include <algorithm>\n\nstruct Target {\n    std::string id;\n    std::string address;\n    int port;\n    int active_connections;\n    int total_requests;\n    bool healthy;\n    double moving_avg_response_time;\n\n    Target(const std::string& i, const std::string& addr, int p)\n        : id(i), address(addr), port(p),\n          active_connections(0), total_requests(0),\n          healthy(true), moving_avg_response_time(0.0) {}\n};\n\nclass LoadBalancer {\nprotected:\n    std::vector<Target> targets;\n    size_t rr_index;\n    std::string lb_type;\n\npublic:\n    LoadBalancer(const std::string& type) : rr_index(0), lb_type(type) {}\n\n    void add_target(const std::string& id, const std::string& addr, int port) {\n        targets.emplace_back(id, addr, port);\n    }\n\n    void mark_health(const std::string& id, bool healthy) {\n        for (auto& t : targets) {\n            if (t.id == id) {\n                t.healthy = healthy;\n                std::cout << \"  Health: \" << id << \" → \"\n                          << (healthy ? \"HEALTHY\" : \"UNHEALTHY\") << \"\\n\";\n                return;\n            }\n        }\n    }\n\n    virtual std::string select_target(const std::string& client_ip,\n                                       const std::string& path) = 0;\n\n    void handle_request(const std::string& client_ip,\n                        const std::string& path, int request_id) {\n        std::string target_id = select_target(client_ip, path);\n        if (target_id.empty()) {\n            std::cout << \"Req#\" << request_id << \" [\" << client_ip\n                      << \" \" << path << \"] → 503 No healthy targets\\n\";\n            return;\n        }\n        for (auto& t : targets) {\n            if (t.id == target_id) {\n                t.active_connections++;\n                t.total_requests++;\n                double latency = 5 + (rand() % 20); // simulated ms\n                t.moving_avg_response_time = t.moving_avg_response_time * 0.9 + latency * 0.1;\n                std::this_thread::sleep_for(std::chrono::milliseconds((int)latency));\n                t.active_connections--;\n                std::cout << \"Req#\" << request_id << \" [\" << client_ip\n                          << \" \" << path << \"] → \" << target_id\n                          << \" (latency=\" << (int)latency\n                          << \"ms, conn=\" << t.active_connections\n                          << \", total=\" << t.total_requests << \")\\n\";\n                return;\n            }\n        }\n    }\n\n    void print_status() {\n        std::cout << \"\\n\" << lb_type << \" Status:\\n\";\n        std::cout << std::left << std::setw(12) << \"Target\"\n                  << std::setw(10) << \"ActiveConn\"\n                  << std::setw(10) << \"TotalReq\"\n                  << std::setw(10) << \"AvgLat\"\n                  << \"Healthy\\n\";\n        std::cout << std::string(55, '-') << \"\\n\";\n        for (const auto& t : targets) {\n            std::cout << std::left << std::setw(12) << t.id\n                      << std::setw(10) << t.active_connections\n                      << std::setw(10) << t.total_requests\n                      << std::setw(10) << std::fixed << std::setprecision(1)\n                      << t.moving_avg_response_time\n                      << (t.healthy ? \"YES\" : \"NO\") << \"\\n\";\n        }\n    }\n\n    std::vector<Target> healthy_targets() {\n        std::vector<Target*> healthy;\n        for (auto& t : targets) {\n            if (t.healthy) healthy.push_back(&t);\n        }\n        std::vector<Target> result;\n        for (auto* t : healthy) result.push_back(*t);\n        return result;\n    }\n};\n\nclass RoundRobinLB : public LoadBalancer {\npublic:\n    RoundRobinLB() : LoadBalancer(\"RoundRobin LB\") {}\n\n    std::string select_target(const std::string& client_ip,\n                               const std::string& path) override {\n        std::vector<Target> healthy = healthy_targets();\n        if (healthy.empty()) return \"\";\n\n        size_t idx = rr_index % healthy.size();\n        rr_index = (rr_index + 1) % healthy.size();\n        return healthy[idx].id;\n    }\n};\n\nclass LeastConnectionsLB : public LoadBalancer {\npublic:\n    LeastConnectionsLB() : LoadBalancer(\"LeastConnections LB\") {}\n\n    std::string select_target(const std::string& client_ip,\n                               const std::string& path) override {\n        int min_conn = INT_MAX;\n        std::string selected;\n        for (const auto& t : targets) {\n            if (!t.healthy) continue;\n            if (t.active_connections < min_conn) {\n                min_conn = t.active_connections;\n                selected = t.id;\n            }\n        }\n        return selected;\n    }\n};\n\nint main() {\n    std::cout << \"=== Round-Robin Load Balancer ===\\n\";\n    RoundRobinLB rr_lb;\n    rr_lb.add_target(\"web-1\", \"10.0.1.10\", 80);\n    rr_lb.add_target(\"web-2\", \"10.0.1.11\", 80);\n    rr_lb.add_target(\"web-3\", \"10.0.1.12\", 80);\n\n    for (int i = 1; i <= 8; i++) {\n        rr_lb.handle_request(\"203.0.113.\" + std::to_string(i),\n                             \"/index.html\", i);\n    }\n    rr_lb.print_status();\n\n    std::cout << \"\\n=== Least Connections Load Balancer ===\\n\";\n    LeastConnectionsLB lc_lb;\n    lc_lb.add_target(\"app-1\", \"10.0.2.10\", 8080);\n    lc_lb.add_target(\"app-2\", \"10.0.2.11\", 8080);\n\n    lc_lb.mark_health(\"app-2\", false); // Simulate failure\n    lc_lb.handle_request(\"203.0.113.1\", \"/api/orders\", 9);\n    lc_lb.handle_request(\"203.0.113.2\", \"/api/users\", 10);\n    lc_lb.mark_health(\"app-2\", true);  // Recovery\n    lc_lb.handle_request(\"203.0.113.3\", \"/api/config\", 11);\n    lc_lb.print_status();\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-load-balancer-with-multiple-algorithms",
      children: "Python Implementation: Load Balancer with Multiple Algorithms"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import time\nimport random\nfrom abc import ABC, abstractmethod\nfrom dataclasses import dataclass\nfrom typing import Optional\n\n\n@dataclass\nclass Target:\n    id: str\n    address: str\n    port: int\n    active_connections: int = 0\n    total_requests: int = 0\n    healthy: bool = True\n    avg_response_time: float = 0.0\n\n    def __repr__(self):\n        return f\"{self.id}({self.address}:{self.port})\"\n\n\nclass LoadBalancer(ABC):\n    def __init__(self, name: str):\n        self.name = name\n        self.targets: list[Target] = []\n        self.rr_index = 0\n\n    def add_target(self, target_id: str, address: str, port: int):\n        self.targets.append(Target(id=target_id, address=address, port=port))\n\n    def mark_health(self, target_id: str, healthy: bool):\n        for t in self.targets:\n            if t.id == target_id:\n                t.healthy = healthy\n                print(f\"  Health: {target_id} -> {'HEALTHY' if healthy else 'UNHEALTHY'}\")\n                return\n\n    def get_healthy_targets(self) -> list[Target]:\n        return [t for t in self.targets if t.healthy]\n\n    @abstractmethod\n    def select_target(self, client_ip: str, path: str = \"\") -> Optional[Target]:\n        pass\n\n    def handle_request(self, client_ip: str, path: str = \"\", request_id: int = 0):\n        target = self.select_target(client_ip, path)\n        if target is None:\n            print(f\"Req#{request_id} [{client_ip} {path}] -> 503 No healthy targets\")\n            return\n\n        target.active_connections += 1\n        target.total_requests += 1\n        latency = random.uniform(2, 30)\n        target.avg_response_time = target.avg_response_time * 0.9 + latency * 0.1\n        time.sleep(latency / 1000)\n        target.active_connections -= 1\n\n        print(f\"Req#{request_id} [{client_ip} {path}] -> {target.id} \"\n              f\"(latency={latency:.0f}ms, conn={target.active_connections}, \"\n              f\"total={target.total_requests})\")\n\n    def print_status(self):\n        print(f\"\\n{self.name} Status:\")\n        print(f\"{'Target':<12} {'ActiveConn':<10} {'TotalReq':<10} \"\n              f\"{'AvgLat':<8} Healthy\")\n        print(\"-\" * 55)\n        for t in self.targets:\n            print(f\"{t.id:<12} {t.active_connections:<10} {t.total_requests:<10} \"\n                  f\"{t.avg_response_time:<8.1f} {'YES' if t.healthy else 'NO'}\")\n\n\nclass RoundRobinLB(LoadBalancer):\n    def __init__(self):\n        super().__init__(\"RoundRobin LB\")\n\n    def select_target(self, client_ip: str, path: str = \"\") -> Optional[Target]:\n        healthy = self.get_healthy_targets()\n        if not healthy:\n            return None\n        idx = self.rr_index % len(healthy)\n        self.rr_index = (self.rr_index + 1) % len(healthy)\n        return healthy[idx]\n\n\nclass LeastConnectionsLB(LoadBalancer):\n    def __init__(self):\n        super().__init__(\"LeastConnections LB\")\n\n    def select_target(self, client_ip: str, path: str = \"\") -> Optional[Target]:\n        healthy = self.get_healthy_targets()\n        if not healthy:\n            return None\n        return min(healthy, key=lambda t: t.active_connections)\n\n\nclass IPHashLB(LoadBalancer):\n    def __init__(self):\n        super().__init__(\"IP Hash LB\")\n\n    def select_target(self, client_ip: str, path: str = \"\") -> Optional[Target]:\n        healthy = self.get_healthy_targets()\n        if not healthy:\n            return None\n        hash_val = sum(ord(c) for c in client_ip)\n        return healthy[hash_val % len(healthy)]\n\n\nclass LeastResponseTimeLB(LoadBalancer):\n    def __init__(self):\n        super().__init__(\"Least Response Time LB\")\n\n    def select_target(self, client_ip: str, path: str = \"\") -> Optional[Target]:\n        healthy = self.get_healthy_targets()\n        if not healthy:\n            return None\n        return min(healthy, key=lambda t: t.avg_response_time)\n\n\n# Simulation\nprint(\"=== Round-Robin ===\")\nrr = RoundRobinLB()\nfor i in range(1, 4):\n    rr.add_target(f\"web-{i}\", f\"10.0.1.{i+9}\", 80)\nfor i in range(1, 9):\n    rr.handle_request(f\"203.0.113.{i}\", \"/index.html\", i)\nrr.print_status()\n\nprint(\"\\n=== Least Connections with Failover ===\")\nlc = LeastConnectionsLB()\nfor i in range(1, 4):\n    lc.add_target(f\"app-{i}\", f\"10.0.2.{i+9}\", 8080)\nlc.mark_health(\"app-2\", False)\nlc.handle_request(\"203.0.113.1\", \"/api/orders\", 9)\nlc.mark_health(\"app-2\", True)\nlc.handle_request(\"203.0.113.2\", \"/api/users\", 10)\nlc.print_status()\n"
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
        children: "interface TargetConfig {\n  id: string;\n  address: string;\n  port: number;\n  weight: number;\n}\n\ninterface HealthCheckResult {\n  targetId: string;\n  healthy: boolean;\n  lastChecked: Date;\n  latencyMs: number;\n}\n\ntype LBAlgorithm = 'round-robin' | 'least-connections' | 'ip-hash' | 'weighted';\n\nclass CloudLoadBalancer {\n  private targets: Map<string, {\n    config: TargetConfig;\n    activeConnections: number;\n    totalRequests: number;\n    healthy: boolean;\n    draining: boolean;\n  }> = new Map();\n  private rrIndex: number = 0;\n  private algorithm: LBAlgorithm;\n\n  constructor(private name: string, algorithm: LBAlgorithm = 'round-robin') {\n    this.algorithm = algorithm;\n  }\n\n  registerTarget(config: TargetConfig): void {\n    this.targets.set(config.id, {\n      config,\n      activeConnections: 0,\n      totalRequests: 0,\n      healthy: true,\n      draining: false\n    });\n  }\n\n  deregisterTarget(id: string, drainTimeoutMs: number = 30000): Promise<void> {\n    const target = this.targets.get(id);\n    if (!target) return Promise.resolve();\n    target.draining = true;\n    target.healthy = false;\n\n    return new Promise((resolve) => {\n      const checkDrain = () => {\n        if (target.activeConnections === 0) {\n          this.targets.delete(id);\n          console.log(`[${this.name}] Target ${id} drained and removed`);\n          resolve();\n        } else {\n          console.log(`[${this.name}] Draining ${id}: ${target.activeConnections} active connections remain`);\n          setTimeout(checkDrain, 1000);\n        }\n      };\n      setTimeout(() => {\n        this.targets.delete(id);\n        console.log(`[${this.name}] Force-removed ${id} after drain timeout`);\n        resolve();\n      }, drainTimeoutMs);\n      checkDrain();\n    });\n  }\n\n  markHealth(id: string, healthy: boolean): void {\n    const target = this.targets.get(id);\n    if (target) {\n      target.healthy = healthy;\n      console.log(`[${this.name}] ${id} → ${healthy ? 'HEALTHY' : 'UNHEALTHY'}`);\n    }\n  }\n\n  private getHealthyTargets(): typeof this.targets extends Map<string, infer V> ? V[] : never {\n    const result: any[] = [];\n    for (const [, target] of this.targets) {\n      if (target.healthy && !target.draining) result.push(target);\n    }\n    return result as any;\n  }\n\n  private selectTarget(clientIp: string): typeof this.targets extends Map<string, infer V> ? V : never {\n    const healthy = this.getHealthyTargets();\n    if (healthy.length === 0) return null as any;\n\n    switch (this.algorithm) {\n      case 'round-robin': {\n        const idx = this.rrIndex % healthy.length;\n        this.rrIndex = (this.rrIndex + 1) % healthy.length;\n        return healthy[idx];\n      }\n      case 'least-connections': {\n        return healthy.reduce((min, t) => t.activeConnections < min.activeConnections ? t : min);\n      }\n      case 'ip-hash': {\n        const hash = clientIp.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);\n        return healthy[hash % healthy.length];\n      }\n      case 'weighted': {\n        const totalWeight = healthy.reduce((sum, t) => sum + t.config.weight, 0);\n        let random = Math.random() * totalWeight;\n        for (const t of healthy) {\n          random -= t.config.weight;\n          if (random <= 0) return t;\n        }\n        return healthy[healthy.length - 1];\n      }\n      default:\n        return healthy[0];\n    }\n  }\n\n  handleRequest(clientIp: string, path: string, requestId: number): void {\n    const target = this.selectTarget(clientIp);\n    if (!target) {\n      console.log(`[${requestId}] ${clientIp} ${path} → 503 No healthy targets`);\n      return;\n    }\n\n    target.activeConnections++;\n    target.totalRequests++;\n    const latency = Math.random() * 28 + 2; // 2-30ms\n\n    // Simulate request processing\n    setTimeout(() => {\n      target.activeConnections--;\n      console.log(`[${requestId}] ${clientIp.padEnd(15)} ${path.padEnd(20)} → ${target.config.id} ` +\n        `(${latency.toFixed(0)}ms, active=${target.activeConnections}, total=${target.totalRequests})`);\n    }, latency);\n  }\n\n  printStatus(): void {\n    console.log(`\\n${this.name} (${this.algorithm}) Status:`);\n    console.log(`${'Target':<12} ${'Addr':<18} ${'Conn':<8} ${'Total':<8} ${'Healthy':<8} ${'Draining':<8}`);\n    console.log('-'.repeat(62));\n    for (const [, t] of this.targets) {\n      console.log(\n        `${t.config.id.padEnd(12)} ${`${t.config.address}:${t.config.port}`.padEnd(18)} ` +\n        `${String(t.activeConnections).padEnd(8)} ${String(t.totalRequests).padEnd(8)} ` +\n        `${String(t.healthy).padEnd(8)} ${String(t.draining).padEnd(8)}`\n      );\n    }\n  }\n}\n\n// Usage example\nasync function demoLoadBalancer() {\n  // Weighted round-robin across 3 web servers\n  const lb = new CloudLoadBalancer('Web-LB', 'weighted');\n  lb.registerTarget({ id: 'web-1', address: '10.0.1.10', port: 80, weight: 5 });\n  lb.registerTarget({ id: 'web-2', address: '10.0.1.11', port: 80, weight: 3 });\n  lb.registerTarget({ id: 'web-3', address: '10.0.1.12', port: 80, weight: 2 });\n\n  for (let i = 1; i <= 6; i++) {\n    lb.handleRequest(`203.0.113.${i}`, '/index.html', i);\n  }\n\n  // Health check failure and recovery\n  setTimeout(() => {\n    lb.markHealth('web-3', false);\n    lb.handleRequest('203.0.113.7', '/api/data', 7);\n    lb.handleRequest('203.0.113.8', '/api/data', 8);\n\n    setTimeout(() => {\n      lb.markHealth('web-3', true);\n      lb.handleRequest('203.0.113.9', '/api/orders', 9);\n\n      // Show final status\n      setTimeout(() => lb.printStatus(), 50);\n    }, 50);\n  }, 50);\n\n  // Connection draining demo\n  // const drained = await lb.deregisterTarget('web-1', 5000);\n}\n\ndemoLoadBalancer();\n\n// --- Connection Draining Manager ---\nclass ConnectionDrainManager {\n  private drainingTargets: Map<string, {\n    activeConnections: number;\n    startTime: Date;\n    timeoutMs: number;\n  }> = new Map();\n\n  constructor(private maxDrainTimeMs: number = 300000) {}\n\n  startDrain(targetId: string, activeConnections: number): void {\n    this.drainingTargets.set(targetId, {\n      activeConnections,\n      startTime: new Date(),\n      timeoutMs: this.maxDrainTimeMs\n    });\n    console.log(`[Drain] ${targetId}: Starting drain with ${activeConnections} connections, timeout=${this.maxDrainTimeMs}ms`);\n  }\n\n  onConnectionClosed(targetId: string): void {\n    const entry = this.drainingTargets.get(targetId);\n    if (!entry) return;\n    entry.activeConnections--;\n    if (entry.activeConnections === 0) {\n      this.drainingTargets.delete(targetId);\n      console.log(`[Drain] ${targetId}: All connections drained, target can be removed`);\n    }\n  }\n\n  getStatus(): Array<{ id: string; remainingConn: number; elapsedMs: number; timedOut: boolean }> {\n    const now = Date.now();\n    return Array.from(this.drainingTargets.entries()).map(([id, entry]) => ({\n      id,\n      remainingConn: entry.activeConnections,\n      elapsedMs: now - entry.startTime.getTime(),\n      timedOut: (now - entry.startTime.getTime()) > entry.timeoutMs\n    }));\n  }\n\n  forceDrain(): string[] {\n    const forced = Array.from(this.drainingTargets.keys());\n    this.drainingTargets.clear();\n    return forced;\n  }\n}\n\n// Draining usage\nconst drainer = new ConnectionDrainManager(60000);\ndrainer.startDrain('web-old-1', 5);\ndrainer.onConnectionClosed('web-old-1');\ndrainer.onConnectionClosed('web-old-1');\nconsole.log(drainer.getStatus());\n// Output: [ { id: 'web-old-1', remainingConn: 3, elapsedMs: 0, timedOut: false } ]\n"
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
        children: "PROCEDURE resolve_domain(domain, client_ip, resolver_cache):\n    // Step 1: Check cache\n    IF resolver_cache.contains(domain) AND NOT expired(resolver_cache[domain]):\n        RETURN resolver_cache[domain]\n\n    // Step 2: Follow delegation chain\n    root_servers = get_root_servers()\n    tld_servers = query_ns(root_servers, extract_tld(domain))\n    zone_servers = query_ns(tld_servers, domain)\n\n    // Step 3: Query authoritative DNS\n    FOR each ns in zone_servers:\n        records = query(ns, domain, TYPE_A)\n\n        IF routing_policy == \"SIMPLE\":\n            result = random_choice(records)\n            cache(domain, result, TTL)\n            RETURN result\n\n        ELSE IF routing_policy == \"WEIGHTED\":\n            total_weight = sum(r.weight for r in records)\n            roll = random(0, total_weight)\n            cumulative = 0\n            FOR each record sorted by weight:\n                cumulative += record.weight\n                IF roll <= cumulative:\n                    cache(domain, record, TTL)\n                    RETURN record\n\n        ELSE IF routing_policy == \"LATENCY_BASED\":\n            FOR each region:\n                latency[region] = measure_latency(client_ip, region_probe[region])\n            best_region = argmin(latency)\n            result = records[best_region]\n            cache(domain, result, min(TTL, 60))\n            RETURN result\n\n        ELSE IF routing_policy == \"FAILOVER\":\n            primary = records.primary\n            IF health_check.passing(primary):\n                result = primary\n            ELSE:\n                result = records.secondary\n            cache(domain, result, TTL)\n            RETURN result\n\n    RETURN NXDOMAIN\nEND PROCEDURE\n"
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
        children: "#include <iostream>\n#include <vector>\n#include <string>\n#include <map>\n#include <random>\n#include <algorithm>\n#include <iomanip>\n#include <sstream>\n#include <chrono>\n#include <thread>\n\nstruct DNSRecord {\n    std::string name;\n    std::string value;\n    std::string region;\n    int weight;\n    bool healthy;\n    int latency_ms;\n};\n\nclass CloudDNS {\nprivate:\n    std::vector<DNSRecord> records;\n    std::string routing_policy;\n    std::map<std::string, std::pair<std::string, int>> cache;\n    std::mt19937 rng;\n\npublic:\n    CloudDNS(const std::string& policy) : routing_policy(policy), rng(std::random_device{}()) {}\n\n    void add_record(const std::string& name, const std::string& value,\n                    const std::string& region, int weight = 1, bool healthy = true) {\n        records.push_back({name, value, region, weight, healthy, 0});\n    }\n\n    void set_health(const std::string& value, bool healthy) {\n        for (auto& r : records) {\n            if (r.value == value) r.healthy = healthy;\n        }\n    }\n\n    int measure_latency(const std::string& client_ip, const std::string& region) {\n        std::map<std::string, int> region_latency = {\n            {\"us-east-1\", 5}, {\"us-west-2\", 25},\n            {\"eu-west-1\", 75}, {\"eu-central-1\", 85},\n            {\"ap-southeast-1\", 220}, {\"ap-northeast-1\", 150},\n            {\"sa-east-1\", 120}, {\"me-south-1\", 130}\n        };\n        auto it = region_latency.find(region);\n        if (it != region_latency.end()) return it->first.find(\"us-\") != std::string::npos ? it->second : it->second + 20;\n        return 100;\n    }\n\n    std::string resolve(const std::string& domain, const std::string& client_ip) {\n        // Check cache\n        auto cache_it = cache.find(domain);\n        if (cache_it != cache.end() && cache_it->second.second > 0) {\n            cache_it->second.second--;\n            std::cout << \"  [Cache HIT] \" << domain << \" → \"\n                      << cache_it->second.first << \"\\n\";\n            return cache_it->second.first;\n        }\n\n        std::vector<DNSRecord> healthy_records;\n        for (const auto& r : records) {\n            if (r.healthy && r.name == domain) healthy_records.push_back(r);\n        }\n        if (healthy_records.empty()) return \"NXDOMAIN\";\n\n        std::string result;\n        std::cout << \"  Routing policy: \" << routing_policy << \"\\n\";\n\n        if (routing_policy == \"SIMPLE\") {\n            std::uniform_int_distribution<int> dist(0, healthy_records.size() - 1);\n            result = healthy_records[dist(rng)].value;\n        }\n        else if (routing_policy == \"WEIGHTED\") {\n            int total_weight = 0;\n            for (const auto& r : healthy_records) total_weight += r.weight;\n            std::uniform_int_distribution<int> dist(0, total_weight);\n            int roll = dist(rng);\n            int cumulative = 0;\n            for (const auto& r : healthy_records) {\n                cumulative += r.weight;\n                if (roll <= cumulative) { result = r.value; break; }\n            }\n            std::cout << \"  Weight roll: \" << roll << \"/\" << total_weight << \"\\n\";\n        }\n        else if (routing_policy == \"LATENCY_BASED\") {\n            int best_latency = INT_MAX;\n            for (const auto& r : healthy_records) {\n                int lat = measure_latency(client_ip, r.region);\n                std::cout << \"  Latency to \" << r.region << \": \" << lat << \"ms\\n\";\n                if (lat < best_latency) {\n                    best_latency = lat;\n                    result = r.value;\n                }\n            }\n        }\n        else if (routing_policy == \"FAILOVER\") {\n            result = healthy_records[0].value;\n            std::cout << \"  Primary: \" << result\n                      << \" (healthy: \" << (healthy_records[0].healthy ? \"yes\" : \"no\") << \")\\n\";\n            if (!healthy_records[0].healthy && healthy_records.size() > 1) {\n                result = healthy_records[1].value;\n                std::cout << \"  Failing over to secondary: \" << result << \"\\n\";\n            }\n        }\n\n        // Cache with reduced TTL\n        cache[domain] = {result, 3};  // 3 queries\n        return result;\n    }\n\n    void trace_resolution(const std::string& domain, const std::string& client_ip,\n                          const std::string& client_label) {\n        std::cout << \"\\n\" << client_label << \" resolves \" << domain << \"\\n\";\n        std::cout << std::string(50, '-') << \"\\n\";\n        std::cout << \"  Root servers → TLD → Authoritative\\n\";\n        std::string ip = resolve(domain, client_ip);\n        std::cout << \"  Result: \" << ip << \"\\n\";\n    }\n};\n\nint main() {\n    std::cout << \"=== Route53 Latency-Based Routing ===\\n\";\n    CloudDNS dns(\"LATENCY_BASED\");\n    dns.add_record(\"api.example.com\", \"alb-ue1.example.com\", \"us-east-1\", 1, true);\n    dns.add_record(\"api.example.com\", \"alb-ew1.example.com\", \"eu-west-1\", 1, true);\n    dns.add_record(\"api.example.com\", \"alb-apse1.example.com\", \"ap-southeast-1\", 1, true);\n\n    dns.trace_resolution(\"api.example.com\", \"203.0.113.5\", \"New York Client\");\n    dns.trace_resolution(\"api.example.com\", \"2a00:1450:4000::200e\", \"London Client\");\n\n    std::cout << \"\\n=== Failover Scenario ===\\n\";\n    dns.set_health(\"alb-ue1.example.com\", false);\n    dns.trace_resolution(\"api.example.com\", \"203.0.113.5\", \"NYC (us-east-1 down)\");\n    dns.set_health(\"alb-ue1.example.com\", true);\n\n    std::cout << \"\\n=== Weighted Routing ===\\n\";\n    CloudDNS weighted(\"WEIGHTED\");\n    weighted.add_record(\"app.example.com\", \"v1-app.example.com\", \"us-east-1\", 90);\n    weighted.add_record(\"app.example.com\", \"v2-canary.example.com\", \"us-east-1\", 10);\n    for (int i = 0; i < 10; i++) {\n        std::cout << \"  Request \" << (i+1) << \": \"\n                  << weighted.resolve(\"app.example.com\", \"203.0.113.1\") << \"\\n\";\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-cloud-dns-with-all-routing-policies",
      children: "Python Implementation: Cloud DNS with All Routing Policies"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import random\nimport time\nfrom dataclasses import dataclass\nfrom typing import Optional\n\n\n@dataclass\nclass DNSRecord:\n    name: str\n    value: str\n    region: str = \"\"\n    weight: int = 1\n    healthy: bool = True\n\n\nclass CloudDNS:\n    def __init__(self):\n        self.records: list[DNSRecord] = []\n        self.cache: dict[str, tuple[str, int]] = {}\n        self.routing_policy = \"SIMPLE\"\n\n    def set_policy(self, policy: str):\n        valid = {\"SIMPLE\", \"WEIGHTED\", \"LATENCY_BASED\", \"GEOLOCATION\", \"FAILOVER\", \"MULTIVALUE\"}\n        assert policy in valid, f\"Invalid policy: {policy}\"\n        self.routing_policy = policy\n\n    def add_record(self, name: str, value: str, region: str = \"\",\n                   weight: int = 1, healthy: bool = True):\n        self.records.append(DNSRecord(name, value, region, weight, healthy))\n\n    def set_health(self, value: str, healthy: bool):\n        for r in self.records:\n            if r.value == value:\n                r.healthy = healthy\n\n    def _latency(self, client_ip: str, region: str) -> int:\n        latency_map = {\n            \"us-east-1\": 5, \"us-west-2\": 25,\n            \"eu-west-1\": 75, \"eu-central-1\": 85,\n            \"ap-southeast-1\": 220, \"ap-northeast-1\": 150,\n            \"sa-east-1\": 120, \"me-south-1\": 130\n        }\n        return latency_map.get(region, random.randint(50, 300))\n\n    def resolve(self, domain: str, client_ip: str = \"0.0.0.0\") -> Optional[str]:\n        # Check cache\n        if domain in self.cache:\n            ttl = self.cache[domain][1]\n            if ttl > 0:\n                self.cache[domain] = (self.cache[domain][0], ttl - 1)\n                print(f\"  [Cache HIT] {domain} -> {self.cache[domain][0]}\")\n                return self.cache[domain][0]\n\n        healthy = [r for r in self.records if r.healthy and r.name == domain]\n        if not healthy:\n            return None\n\n        result = None\n        if self.routing_policy == \"SIMPLE\":\n            result = random.choice(healthy).value\n\n        elif self.routing_policy == \"WEIGHTED\":\n            total = sum(r.weight for r in healthy)\n            roll = random.randint(0, total)\n            cumulative = 0\n            for r in sorted(healthy, key=lambda x: x.weight, reverse=True):\n                cumulative += r.weight\n                if roll <= cumulative:\n                    result = r.value\n                    break\n\n        elif self.routing_policy == \"LATENCY_BASED\":\n            best_lat = float('inf')\n            best_record = None\n            for r in healthy:\n                lat = self._latency(client_ip, r.region)\n                print(f\"  Latency to {r.region}: {lat}ms\")\n                if lat < best_lat:\n                    best_lat = lat\n                    best_record = r\n            result = best_record.value if best_record else None\n\n        elif self.routing_policy == \"FAILOVER\":\n            primary = healthy[0]\n            if primary.healthy:\n                result = primary.value\n            elif len(healthy) > 1:\n                print(f\"  Primary failed, failing over to {healthy[1].value}\")\n                result = healthy[1].value\n\n        elif self.routing_policy == \"MULTIVALUE\":\n            result = [r.value for r in healthy[:8]]\n            print(f\"  Returning {len(result)} A records for client-side LB\")\n\n        # Cache result\n        if result:\n            self.cache[domain] = (result, 3)\n        return result\n\n    def trace(self, domain: str, client_ip: str, label: str):\n        print(f\"\\n{label} resolves {domain}\")\n        print(\"-\" * 50)\n        print(\"  Root servers -> TLD -> Authoritative\")\n        ip = self.resolve(domain, client_ip)\n        print(f\"  Result: {ip}\")\n\n\n# Simulation\ndns = CloudDNS()\ndns.set_policy(\"LATENCY_BASED\")\ndns.add_record(\"api.example.com\", \"10.0.1.10\", \"us-east-1\")\ndns.add_record(\"api.example.com\", \"10.0.2.10\", \"eu-west-1\")\ndns.add_record(\"api.example.com\", \"10.0.3.10\", \"ap-southeast-1\")\n\ndns.trace(\"api.example.com\", \"203.0.113.5\", \"New York Client\")\ndns.trace(\"api.example.com\", \"2a00:1450:4000::200e\", \"London Client\")\n\nprint(\"\\n=== Weighted Canary Deployment ===\")\ndns2 = CloudDNS()\ndns2.set_policy(\"WEIGHTED\")\ndns2.add_record(\"app.example.com\", \"v1 (stable)\", weight=90)\ndns2.add_record(\"app.example.com\", \"v2 (canary)\", weight=10)\nfor i in range(15):\n    result = dns2.resolve(\"app.example.com\", \"203.0.113.1\")\n    print(f\"  Request {i+1}: {result}\")\n\nprint(\"\\n=== Cache Behavior ===\")\ndns3 = CloudDNS()\ndns3.set_policy(\"SIMPLE\")\ndns3.add_record(\"www.example.com\", \"10.0.1.100\")\nfor i in range(5):\n    result = dns3.resolve(\"www.example.com\", \"203.0.113.1\")\n    print(f\"  Query {i+1}: {result}\")\n"
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
        children: "PROCEDURE handle_cdn_request(url, client_ip):\n    // Step 1: Route to nearest edge\n    edge_node = nearest_edge(client_ip)\n\n    // Step 2: Check edge cache\n    cache_key = hash(url)\n    edge_entry = edge_node.cache.get(cache_key)\n\n    IF edge_entry EXISTS AND NOT expired(edge_entry):\n        IF edge_entry.is_stale():\n            ASYNC revalidate(edge_entry, url)  // stale-while-revalidate\n        LOG \"Edge cache HIT\"\n        RETURN edge_entry.content\n\n    // Step 3: Edge cache miss → check regional cache\n    regional_node = parent_regional_cache(edge_node)\n    regional_entry = regional_node.cache.get(cache_key)\n\n    IF regional_entry EXISTS AND NOT expired(regional_entry):\n        edge_node.cache.set(cache_key, regional_entry)\n        LOG \"Regional cache HIT\"\n        RETURN regional_entry.content\n\n    // Step 4: Regional cache miss → fetch from origin\n    origin_response = fetch_from_origin(url)\n\n    IF origin_response.is_cacheable():\n        ttl = extract_ttl(origin_response.headers)\n        regional_node.cache.set(cache_key, origin_response, ttl)\n        edge_node.cache.set(cache_key, origin_response, ttl)\n        LOG \"Origin fetch → cache populated\"\n\n    RETURN origin_response.content\nEND PROCEDURE\n"
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
        children: "#include <iostream>\n#include <string>\n#include <map>\n#include <chrono>\n#include <iomanip>\n#include <vector>\n#include <random>\n\nstruct CacheEntry {\n    std::string content;\n    std::chrono::steady_clock::time_point inserted_at;\n    int ttl_seconds;\n    bool is_stale_flag;\n\n    bool expired() const {\n        auto now = std::chrono::steady_clock::now();\n        return std::chrono::duration_cast<std::chrono::seconds>(now - inserted_at).count() >= ttl_seconds;\n    }\n};\n\nstruct EdgeNode {\n    std::string name;\n    std::string region;\n    std::map<std::string, CacheEntry> cache;\n    int cache_hits;\n    int cache_misses;\n\n    EdgeNode(const std::string& n, const std::string& r)\n        : name(n), region(r), cache_hits(0), cache_misses(0) {}\n};\n\nclass CDNSimulator {\nprivate:\n    std::vector<EdgeNode> edges;\n    std::map<std::string, std::string> origin;\n    std::map<std::string, int> origins_loaded;\n    std::map<std::string, EdgeNode*> regional_cache;\n    std::mt19937 rng;\n    int tiered_hits;\n\npublic:\n    CDNSimulator() : rng(std::random_device{}()), tiered_hits(0) {}\n\n    void add_edge(const std::string& name, const std::string& region) {\n        edges.emplace_back(name, region);\n    }\n\n    void set_origin_content(const std::string& url, const std::string& content) {\n        origin[url] = content;\n    }\n\n    EdgeNode* nearest_edge(const std::string& client_region) {\n        std::map<std::string, int> region_latency = {\n            {\"tokyo\", 0}, {\"singapore\", 20},\n            {\"london\", 30}, {\"new-york\", 50},\n            {\"frankfurt\", 35}, {\"sydney\", 40}\n        };\n\n        int best_lat = INT_MAX;\n        EdgeNode* best = nullptr;\n        for (auto& edge : edges) {\n            auto it = region_latency.find(edge.region);\n            int lat = (it != region_latency.end()) ? it->second : 100;\n            if (client_region == edge.region) lat = 0;\n            if (lat < best_lat) {\n                best_lat = lat;\n                best = &edge;\n            }\n        }\n        return best;\n    }\n\n    std::string handle_request(const std::string& url, const std::string& client_region,\n                               int request_id, bool force_miss = false) {\n        EdgeNode* edge = nearest_edge(client_region);\n        if (!edge) return \"ERROR: No edge node\";\n\n        std::cout << \"Req#\" << request_id << \" [\" << client_region << \" → \"\n                  << edge->region << \"] GET \" << url;\n\n        // Check edge cache\n        auto cache_it = edge->cache.find(url);\n        if (!force_miss && cache_it != edge->cache.end() && !cache_it->second.expired()) {\n            edge->cache_hits++;\n            if (cache_it->second.is_stale_flag) {\n                std::cout << \" → EDGE HIT (stale, revalidating async)\\n\";\n            } else {\n                std::cout << \" → EDGE HIT\\n\";\n            }\n            return cache_it->second.content;\n        }\n        edge->cache_misses++;\n\n        // Check regional cache\n        auto regional_it = regional_cache.find(url);\n        if (!force_miss && regional_it != regional_cache.end()\n            && !regional_it->second->cache[url].expired()) {\n            tiered_hits++;\n            // Populate edge cache\n            CacheEntry entry = regional_it->second->cache[url];\n            entry.inserted_at = std::chrono::steady_clock::now();\n            edge->cache[url] = entry;\n            std::cout << \" → REGIONAL HIT (edge now populated)\\n\";\n            return regional_it->second->cache[url].content;\n        }\n\n        // Fetch from origin\n        auto origin_it = origin.find(url);\n        if (origin_it == origin.end()) {\n            std::cout << \" → 404 NOT FOUND\\n\";\n            return \"404\";\n        }\n\n        // Simulate origin load\n        origins_loaded[url] = origins_loaded[url] + 1;\n        int fetch_latency = 50 + (rng() % 100);\n\n        CacheEntry entry;\n        entry.content = origin_it->second;\n        entry.inserted_at = std::chrono::steady_clock::now();\n        entry.ttl_seconds = 86400;\n        entry.is_stale_flag = false;\n\n        // Populate both caches\n        regional_cache[url] = edge;\n        edge->cache[url] = entry;\n\n        std::cout << \" → ORIGIN FETCH (\" << fetch_latency << \"ms, load=\"\n                  << origins_loaded[url] << \")\\n\";\n        return origin_it->second;\n    }\n\n    void print_stats() {\n        int total_hits = 0, total_misses = 0;\n        std::cout << \"\\n=== CDN Statistics ===\\n\";\n        std::cout << std::left << std::setw(15) << \"Edge\"\n                  << std::setw(10) << \"Hits\" << std::setw(10) << \"Misses\"\n                  << std::setw(10) << \"Hit Rate\\n\";\n        std::cout << std::string(45, '-') << \"\\n\";\n        for (const auto& e : edges) {\n            int total = e.cache_hits + e.cache_misses;\n            double rate = total ? (100.0 * e.cache_hits / total) : 0;\n            std::cout << std::left << std::setw(15) << e.name\n                      << std::setw(10) << e.cache_hits << std::setw(10) << e.cache_misses\n                      << std::fixed << std::setprecision(1) << std::setw(10) << rate << \"%\\n\";\n            total_hits += e.cache_hits;\n            total_misses += e.cache_misses;\n        }\n        int global_total = total_hits + total_misses;\n        if (global_total > 0) {\n            std::cout << \"Global hit rate: \" << std::fixed << std::setprecision(1)\n                      << (100.0 * total_hits / global_total) << \"%\\n\";\n            std::cout << \"Origin offload: \" << (100.0 * total_hits / global_total) << \"%\\n\";\n        }\n    }\n};\n\nint main() {\n    CDNSimulator cdn;\n    cdn.add_edge(\"Edge-Tokyo\", \"tokyo\");\n    cdn.add_edge(\"Edge-London\", \"london\");\n    cdn.add_edge(\"Edge-NYC\", \"new-york\");\n\n    cdn.set_origin_content(\"/images/logo.png\", \"PNG binary data\");\n    cdn.set_origin_content(\"/static/style.css\", \"body { color: red; }\");\n    cdn.set_origin_content(\"/api/config\", \"{ \\\"version\\\": \\\"1.0\\\" }\");\n\n    std::cout << \"=== CDN Simulator ===\\n\\n\";\n\n    // First request → cache miss\n    cdn.handle_request(\"/images/logo.png\", \"tokyo\", 1, false);\n    // Second request → cache hit\n    cdn.handle_request(\"/images/logo.png\", \"tokyo\", 2, false);\n    // Different region → regional cache hit\n    cdn.handle_request(\"/images/logo.png\", \"singapore\", 3, false);\n    // Different content\n    cdn.handle_request(\"/static/style.css\", \"london\", 4, false);\n    cdn.handle_request(\"/api/config\", \"tokyo\", 5, false);\n    cdn.handle_request(\"/static/style.css\", \"london\", 6, false);\n    // Multiple regions\n    cdn.handle_request(\"/images/logo.png\", \"new-york\", 7, false);\n    cdn.handle_request(\"/images/logo.png\", \"new-york\", 8, false);\n    // Forced miss (simulate cache invalidation)\n    cdn.handle_request(\"/images/logo.png\", \"tokyo\", 9, true);\n\n    cdn.print_stats();\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-cdn-with-cache-hit-ratio-analysis",
      children: "Python Implementation: CDN with Cache Hit Ratio Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import time\nimport random\nfrom dataclasses import dataclass\nfrom typing import Optional\n\n\n@dataclass\nclass CacheEntry:\n    content: str\n    inserted_at: float\n    ttl: int\n\n\n@dataclass\nclass EdgeNode:\n    name: str\n    region: str\n    cache: dict = None\n    hits: int = 0\n    misses: int = 0\n\n    def __post_init__(self):\n        self.cache = {} if self.cache is None else self.cache\n\n\nclass CDN:\n    def __init__(self):\n        self.edges: list[EdgeNode] = []\n        self.origin: dict[str, str] = {}\n        self.origin_load: dict[str, int] = {}\n        self.regional_cache: dict[str, tuple[str, float, int]] = {}\n\n    def add_edge(self, name: str, region: str):\n        self.edges.append(EdgeNode(name=name, region=region))\n\n    def add_origin_content(self, url: str, content: str):\n        self.origin[url] = content\n\n    def _nearest_edge(self, client_region: str) -> Optional[EdgeNode]:\n        latency = {\n            \"tokyo\": {\"tokyo\": 0, \"singapore\": 15, \"london\": 30, \"new-york\": 50},\n            \"singapore\": {\"tokyo\": 20, \"singapore\": 0, \"london\": 35, \"new-york\": 55},\n            \"london\": {\"tokyo\": 30, \"singapore\": 35, \"london\": 0, \"new-york\": 10},\n            \"new-york\": {\"tokyo\": 50, \"singapore\": 55, \"london\": 10, \"new-york\": 0},\n        }\n        best_lat = float('inf')\n        best_edge = None\n        for edge in self.edges:\n            lat = latency.get(client_region, {}).get(edge.region, 100)\n            if lat < best_lat:\n                best_lat = lat\n                best_edge = edge\n        return best_edge\n\n    def request(self, url: str, client_region: str, req_id: int,\n                force_miss: bool = False) -> Optional[str]:\n        edge = self._nearest_edge(client_region)\n        if edge is None:\n            return None\n\n        now = time.time()\n        print(f\"Req#{req_id} [{client_region} → {edge.region}] GET {url}\", end=\"\")\n\n        # Edge cache\n        if not force_miss and url in edge.cache:\n            entry = edge.cache[url]\n            if now - entry.inserted_at < entry.ttl:\n                edge.hits += 1\n                print(f\" → EDGE HIT\")\n                return entry.content\n        edge.misses += 1\n\n        # Regional cache\n        if not force_miss and url in self.regional_cache:\n            content, ts, ttl = self.regional_cache[url]\n            if now - ts < ttl:\n                edge.cache[url] = CacheEntry(content=content, inserted_at=now, ttl=ttl)\n                edge.hits += 1\n                print(f\" → REGIONAL HIT (edge populated)\")\n                return content\n\n        # Origin fetch\n        if url not in self.origin:\n            print(f\" → 404\")\n            return None\n\n        content = self.origin[url]\n        self.origin_load[url] = self.origin_load.get(url, 0) + 1\n        fetch_time = random.randint(30, 150)\n\n        ttl = 86400\n        self.regional_cache[url] = (content, now, ttl)\n        edge.cache[url] = CacheEntry(content=content, inserted_at=now, ttl=ttl)\n\n        print(f\" → ORIGIN FETCH ({fetch_time}ms, origin_load={self.origin_load[url]})\")\n        return content\n\n    def stats(self):\n        total_hits = sum(e.hits for e in self.edges)\n        total_misses = sum(e.misses for e in self.edges)\n        total = total_hits + total_misses\n\n        print(f\"\\n=== CDN Stats ===\")\n        print(f\"{'Edge':<15} {'Hits':<8} {'Misses':<8} {'Hit Rate':<10}\")\n        print(\"-\" * 45)\n        for e in self.edges:\n            t = e.hits + e.misses\n            rate = (100 * e.hits / t) if t > 0 else 0\n            print(f\"{e.name:<15} {e.hits:<8} {e.misses:<8} {rate:<10.1f}%\")\n\n        if total > 0:\n            print(f\"\\nGlobal hit rate: {100 * total_hits / total:.1f}%\")\n            print(f\"Origin offload: {100 * total_hits / total:.1f}%\")\n            for url, load in sorted(self.origin_load.items()):\n                print(f\"  Origin load for {url}: {load}x\")\n\n\ncdn = CDN()\ncdn.add_edge(\"Edge-Tokyo\", \"tokyo\")\ncdn.add_edge(\"Edge-London\", \"london\")\ncdn.add_edge(\"Edge-NYC\", \"new-york\")\n\ncdn.add_origin_content(\"/img/hero.png\", \"hero_image_binary\")\ncdn.add_origin_content(\"/js/app.js\", \"console.log('app')\")\ncdn.add_origin_content(\"/css/main.css\", \"body{margin:0}\")\n\nprint(\"=== CDN Request Simulation ===\\n\")\ncacheable_urls = [\"/img/hero.png\", \"/js/app.js\", \"/css/main.css\"]\nfor i in range(20):\n    url = random.choice(cacheable_urls)\n    region = random.choice([\"tokyo\", \"london\", \"new-york\", \"singapore\", \"sydney\"])\n    force = random.random() < 0.05  # 5% chance of forced miss\n    cdn.request(url, region, i + 1, force_miss=force)\n    time.sleep(0.001)\n\ncdn.stats()\n\n# Cache hit ratio analysis\nprint(\"\\n=== Cache Hit Ratio Analysis ===\")\nsimulation_rounds = 5\nfor round_num in range(1, simulation_rounds + 1):\n    cdn2 = CDN()\n    cdn2.add_edge(\"E-Tokyo\", \"tokyo\")\n    cdn2.add_edge(\"E-London\", \"london\")\n    cdn2.add_edge(\"E-NYC\", \"new-york\")\n    for u in cacheable_urls:\n        cdn2.add_origin_content(u, f\"content_{u}\")\n    for _ in range(50):\n        url = random.choice(cacheable_urls)\n        region = random.choice([\"tokyo\", \"london\", \"new-york\"])\n        cdn2.request(url, region, 0)\n    hits = sum(e.hits for e in cdn2.edges)\n    total = hits + sum(e.misses for e in cdn2.edges)\n    print(f\"Round {round_num}: {50} requests, hit rate = {100 * hits / total:.1f}%\")\n"
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
        children: "interface CacheEntry {\n  content: string;\n  insertedAt: number;\n  ttlMs: number;\n}\n\ninterface EdgeNodeConfig {\n  name: string;\n  region: string;\n  capacityGbps: number;\n}\n\ninterface OriginGroup {\n  urls: string[];\n  loadBalance: 'round-robin' | 'least-connections';\n}\n\ntype CacheLevel = 'edge' | 'regional' | 'origin';\n\nclass CDNManager {\n  private edgeNodes: Map<string, {\n    config: EdgeNodeConfig;\n    cache: Map<string, CacheEntry>;\n    hits: number;\n    misses: number;\n    bytesServed: number;\n  }> = new Map();\n\n  private regionalCache: Map<string, { content: string; insertedAt: number; ttlMs: number; region: string }> = new Map();\n  private originContent: Map<string, string> = new Map();\n  private originLoad: Map<string, number> = new Map();\n  private originHealth: Map<string, boolean> = new Map();\n\n  // Latency matrix: region → region → latency in ms\n  private static readonly LATENCY_MATRIX: Record<string, Record<string, number>> = {\n    'us-east-1':  { 'us-east-1': 0, 'us-west-2': 65,  'eu-west-1': 75,  'ap-southeast-1': 190, 'ap-northeast-1': 150 },\n    'us-west-2':  { 'us-east-1': 65, 'us-west-2': 0,  'eu-west-1': 140, 'ap-southeast-1': 120, 'ap-northeast-1': 100 },\n    'eu-west-1':  { 'us-east-1': 75, 'us-west-2': 140, 'eu-west-1': 0,  'ap-southeast-1': 160, 'ap-northeast-1': 240 },\n    'ap-southeast-1': { 'us-east-1': 190, 'us-west-2': 120, 'eu-west-1': 160, 'ap-southeast-1': 0, 'ap-northeast-1': 70 },\n    'ap-northeast-1': { 'us-east-1': 150, 'us-west-2': 100, 'eu-west-1': 240, 'ap-southeast-1': 70, 'ap-northeast-1': 0 }\n  };\n\n  constructor(private name: string) {}\n\n  addEdgeNode(config: EdgeNodeConfig): void {\n    this.edgeNodes.set(config.name, {\n      config,\n      cache: new Map(),\n      hits: 0,\n      misses: 0,\n      bytesServed: 0\n    });\n  }\n\n  addOriginContent(url: string, content: string): void {\n    this.originContent.set(url, content);\n    this.originHealth.set(url, true);\n  }\n\n  markOriginHealth(url: string, healthy: boolean): void {\n    this.originHealth.set(url, healthy);\n  }\n\n  private findNearestEdge(clientRegion: string): typeof this.edgeNodes extends Map<string, infer V> ? V : never {\n    let bestLatency = Infinity;\n    let bestEdge: any = null;\n\n    for (const [, edge] of this.edgeNodes) {\n      const regionLatencies = CDNManager.LATENCY_MATRIX[clientRegion];\n      if (!regionLatencies) continue;\n      const lat = regionLatencies[edge.config.region] ?? 500;\n      if (lat < bestLatency) {\n        bestLatency = lat;\n        bestEdge = edge;\n      }\n    }\n    return bestEdge;\n  }\n\n  private getTieredCacheTTL(contentType: string): number {\n    if (contentType.startsWith('/static/')) return 7 * 86400 * 1000;  // 7 days\n    if (contentType.startsWith('/img/')) return 86400 * 1000;          // 1 day\n    if (contentType.startsWith('/js/') || contentType.startsWith('/css/')) return 86400 * 1000;\n    if (contentType.startsWith('/api/')) return 60 * 1000;            // 1 min\n    return 300 * 1000;                                                  // 5 min default\n  }\n\n  request(url: string, clientRegion: string, reqId: number, forceMiss: boolean = false): string | null {\n    const edge = this.findNearestEdge(clientRegion);\n    if (!edge) {\n      console.log(`[${reqId}] ${clientRegion} → NO EDGE AVAILABLE`);\n      return null;\n    }\n\n    const contentType = url.substring(0, url.lastIndexOf('/') + 1);\n    const ttlMs = this.getTieredCacheTTL(contentType);\n    const now = Date.now();\n    let cacheLevel: CacheLevel;\n\n    console.log(`[${reqId}] ${clientRegion.padEnd(15)} → ${edge.config.name.padEnd(15)} GET ${url}`);\n\n    // Level 1: Edge cache\n    if (!forceMiss && edge.cache.has(url)) {\n      const entry = edge.cache.get(url)!;\n      if (now - entry.insertedAt < entry.ttlMs) {\n        edge.hits++;\n        edge.bytesServed += entry.content.length;\n        cacheLevel = 'edge';\n        console.log(`  → EDGE HIT (ttl_remaining=${(entry.ttlMs - (now - entry.insertedAt)) / 1000}s)`);\n        return entry.content;\n      }\n    }\n    edge.misses++;\n\n    // Level 2: Regional cache (shared among edges in same region group)\n    if (!forceMiss && this.regionalCache.has(url)) {\n      const regional = this.regionalCache.get(url)!;\n      if (now - regional.insertedAt < regional.ttlMs) {\n        // Populate edge cache from regional\n        edge.cache.set(url, { content: regional.content, insertedAt: now, ttlMs: regional.ttlMs });\n        edge.hits++;\n        edge.bytesServed += regional.content.length;\n        cacheLevel = 'regional';\n        console.log(`  → REGIONAL HIT (edge cached from regional)`);\n        return regional.content;\n      }\n    }\n\n    // Level 3: Origin fetch\n    if (!this.originContent.has(url)) {\n      console.log(`  → 404 NOT FOUND`);\n      return null;\n    }\n\n    if (!this.originHealth.get(url)) {\n      console.log(`  → 503 ORIGIN UNHEALTHY`);\n      return null;\n    }\n\n    const content = this.originContent.get(url)!;\n    const fetchLatency = Math.floor(Math.random() * 120 + 30); // 30-150ms\n    this.originLoad.set(url, (this.originLoad.get(url) ?? 0) + 1);\n\n    // Populate both cache tiers\n    this.regionalCache.set(url, { content, insertedAt: now, ttlMs });\n    edge.cache.set(url, { content, insertedAt: now, ttlMs });\n\n    cacheLevel = 'origin';\n    console.log(`  → ORIGIN FETCH (${fetchLatency}ms, origin_hits=${this.originLoad.get(url)}, ttl=${ttlMs / 1000}s)`);\n    return content;\n  }\n\n  invalidate(urlPattern: string): number {\n    let count = 0;\n    for (const [, edge] of this.edgeNodes) {\n      for (const key of edge.cache.keys()) {\n        if (key.includes(urlPattern)) {\n          edge.cache.delete(key);\n          count++;\n        }\n      }\n    }\n    // Also clear regional cache\n    for (const key of this.regionalCache.keys()) {\n      if (key.includes(urlPattern)) {\n        this.regionalCache.delete(key);\n        count++;\n      }\n    }\n    console.log(`[Invalidate] Cleared ${count} cache entries matching \"${urlPattern}\"`);\n    return count;\n  }\n\n  printStats(): void {\n    console.log(`\\n=== ${this.name} CDN Stats ===`);\n    console.log(`${'Edge Node':<20} ${'Region':<20} ${'Hits':<8} ${'Misses':<8} ${'Hit Rate':<10} ${'Bytes Served'}`);\n    console.log('-'.repeat(75));\n\n    let totalHits = 0, totalMisses = 0, totalBytes = 0;\n\n    for (const [, edge] of this.edgeNodes) {\n      const total = edge.hits + edge.misses;\n      const rate = total > 0 ? (100 * edge.hits / total).toFixed(1) : '0.0';\n      totalHits += edge.hits;\n      totalMisses += edge.misses;\n      totalBytes += edge.bytesServed;\n      console.log(\n        `${edge.config.name.padEnd(20)} ${edge.config.region.padEnd(20)} ` +\n        `${String(edge.hits).padEnd(8)} ${String(edge.misses).padEnd(8)} ` +\n        `${rate.padEnd(10)} ${(edge.bytesServed / 1024).toFixed(1)} KB`\n      );\n    }\n\n    const allTotal = totalHits + totalMisses;\n    const globalRate = allTotal > 0 ? (100 * totalHits / allTotal).toFixed(1) : '0.0';\n    console.log('-'.repeat(75));\n    console.log(`GLOBAL: hit_rate=${globalRate}%, origin_offload=${globalRate}%, total_bytes=${(totalBytes / 1024).toFixed(1)} KB`);\n\n    console.log('\\nOrigin Load:');\n    for (const [url, load] of this.originLoad) {\n      console.log(`  ${url.padEnd(30)} ${load} requests`);\n    }\n  }\n}\n\n// Usage example\nfunction demoCDNManager() {\n  const cdn = new CDNManager('GlobalCache');\n  cdn.addEdgeNode({ name: 'Edge-NYC',    region: 'us-east-1',      capacityGbps: 100 });\n  cdn.addEdgeNode({ name: 'Edge-London', region: 'eu-west-1',      capacityGbps: 50 });\n  cdn.addEdgeNode({ name: 'Edge-Tokyo',  region: 'ap-northeast-1', capacityGbps: 40 });\n\n  cdn.addOriginContent('/static/logo.png', 'PNG_BINARY');\n  cdn.addOriginContent('/js/bundle.js', \"console.log('hello');\");\n  cdn.addOriginContent('/css/styles.css', 'body { font: 16px sans-serif; }');\n  cdn.addOriginContent('/api/health', '{\"status\":\"ok\"}');\n\n  // Simulate requests from different regions\n  const urls = ['/static/logo.png', '/js/bundle.js', '/css/styles.css', '/api/health'];\n  const regions = ['us-east-1', 'eu-west-1', 'ap-northeast-1', 'ap-southeast-1'];\n  let reqId = 1;\n\n  for (let round = 0; round < 3; round++) {\n    for (const url of urls) {\n      for (const region of regions) {\n        const force = Math.random() < 0.1; // 10% forced miss (simulate cache bust)\n        cdn.request(url, region, reqId++, force);\n      }\n    }\n  }\n\n  cdn.printStats();\n  // Output (will vary due to randomness):\n  // GlobalCache CDN Stats:\n  // Edge Node            Region               Hits     Misses   Hit Rate   Bytes Served\n  // -------------------------------------------------------------------------\n  // Edge-NYC             us-east-1            10       2        83.3%      3.2 KB\n  // Edge-London          eu-west-1            9        3        75.0%      2.9 KB\n  // Edge-Tokyo           ap-northeast-1       11       1        91.7%      3.5 KB\n  // -------------------------------------------------------------------------\n  // GLOBAL: hit_rate=83.3%, origin_offload=83.3%, total_bytes=9.6 KB\n\n  // Invalidate versioned content\n  cdn.invalidate('/js/');\n}\n\ndemoCDNManager();\n"
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
        children: "PROCEDURE establish_ipsec_tunnel(cloud_gw, onprem_gw, psk):\n    // Phase 1: IKE SA\n    LOG \"Starting IKE Phase 1 (Main Mode)\"\n\n    cloud_gw.send({ SA: proposals[encryption, hash, dh_group] })\n    onprem_gw.select_proposal()\n    onprem_gw.send({ SA: selected })\n\n    cloud_gw.send({ KE: dh_public_key, NONCE: random_nonce })\n    onprem_gw.send({ KE: dh_public_key, NONCE: random_nonce })\n\n    shared_secret = diffie_hellman(cloud_gw.dh_private, onprem_gw.dh_public)\n\n    cloud_gw.send({ ID: cloud_gw.ip, AUTH: hmac(psk, shared_secret) })\n    onprem_gw.send({ ID: onprem_gw.ip, AUTH: hmac(psk, shared_secret) })\n\n    // Phase 2: IPSec SA\n    LOG \"IKE Phase 1 complete. Starting Phase 2 (Quick Mode)\"\n\n    cloud_gw.send({ IPSEC_SA: proposals, NONCE: nonce2 })\n    onprem_gw.select_ipsec_proposal()\n    onprem_gw.send({ IPSEC_SA: selected, NONCE: nonce2_resp })\n\n    // Establish tunnel\n    spi_cloud = random_spi()\n    spi_onprem = random_spi()\n    encryption_key = derive_key(shared_secret, nonces)\n\n    LOG \"IPSec tunnel established\"\n    LOG \"Encryption: AES-256-GCM, Auth: SHA-256\"\n    LOG \"SPI (cloud→onprem): \" + spi_cloud\n    LOG \"SPI (onprem→cloud): \" + spi_onprem\n\n    RETURN { spi_cloud, spi_onprem, encryption_key }\nEND PROCEDURE\n\nPROCEDURE encrypt_and_send(packet, tunnel, route_table):\n    src_check = route_lookup(packet.dst_ip, route_table)\n\n    IF src_check.target != \"VPN_GATEWAY\":\n        ROUTE normally\n        RETURN\n\n    esp_header = create_esp_header(\n        spi: tunnel.spi_onprem,\n        sequence: tunnel.seq_counter++,\n        payload: ENCRYPT(packet, tunnel.encryption_key),\n        auth: HMAC(packet + esp_header, tunnel.auth_key)\n    )\n\n    // UDP encapsulation for NAT traversal\n    udp_wrap = udp_header(src_port: 4500, dst_port: 4500)\n    outer_ip = ip_header(src: cloud_gw.public_ip, dst: onprem_gw.public_ip)\n\n    SEND(outer_ip + udp_wrap + esp_header)\n    LOG \"Sent encrypted packet seq=\" + esp_header.sequence\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace-cloud-vpn-connectivity",
      children: "Dry Run Trace: Cloud VPN Connectivity"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "VPC:"
      }), " 10.0.0.0/16 (us-east-1)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "On-premises:"
      }), " 192.168.0.0/16\n", (0,jsx_runtime.jsx)(_components.strong, {
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
        children: "#include <iostream>\n#include <string>\n#include <vector>\n#include <map>\n#include <sstream>\n#include <iomanip>\n#include <random>\n#include <thread>\n#include <chrono>\n\nstruct IPSecPacket {\n    uint32_t spi;\n    uint32_t sequence;\n    std::string src_ip;\n    std::string dst_ip;\n    std::string encrypted_payload;\n    bool valid;\n};\n\nstruct Tunnel {\n    std::string id;\n    bool active;\n    uint32_t spi_in;\n    uint32_t spi_out;\n    uint32_t seq_counter;\n    std::string encryption_alg;\n    int latency_ms;\n};\n\nclass CloudVPN {\nprivate:\n    std::vector<Tunnel> tunnels;\n    std::map<std::string, std::string> route_table;\n    std::string vpc_cidr;\n    std::string onprem_cidr;\n    std::mt19937 rng;\n\npublic:\n    CloudVPN(const std::string& vpc, const std::string& onprem)\n        : vpc_cidr(vpc), onprem_cidr(onprem), rng(std::random_device{}()) {}\n\n    void add_tunnel(const std::string& id, uint32_t spi_in, uint32_t spi_out) {\n        Tunnel t;\n        t.id = id;\n        t.active = true;\n        t.spi_in = spi_in;\n        t.spi_out = spi_out;\n        t.seq_counter = 0;\n        t.encryption_alg = \"AES-256-GCM\";\n        t.latency_ms = 10 + (rng() % 20);\n        tunnels.push_back(t);\n    }\n\n    void set_active_tunnel(const std::string& id, bool active) {\n        for (auto& t : tunnels) {\n            if (t.id == id) {\n                t.active = active;\n                std::cout << \"Tunnel \" << id\n                          << (active ? \" activated\" : \" deactivated\") << \"\\n\";\n                return;\n            }\n        }\n    }\n\n    void add_route(const std::string& destination, const std::string& target) {\n        route_table[destination] = target;\n    }\n\n    bool in_cidr(const std::string& ip, const std::string& cidr) {\n        size_t slash = cidr.find('/');\n        std::string cidr_ip = cidr.substr(0, slash);\n        int prefix = std::stoi(cidr.substr(slash + 1));\n\n        auto parse = [](const std::string& s) -> uint32_t {\n            std::stringstream ss(s);\n            int a,b,c,d; char ch;\n            ss >> a >> ch >> b >> ch >> c >> ch >> d;\n            return (a << 24) | (b << 16) | (c << 8) | d;\n        };\n\n        uint32_t ip_val = parse(ip);\n        uint32_t cidr_val = parse(cidr_ip);\n        uint32_t mask = (prefix == 0) ? 0 : (0xFFFFFFFF << (32 - prefix));\n        return (ip_val & mask) == (cidr_val & mask);\n    }\n\n    void send_packet(const std::string& src, const std::string& dst,\n                     int port, const std::string& protocol, int packet_id) {\n        std::cout << \"\\nPacket#\" << packet_id << \": \" << src << \" → \"\n                  << dst << \":\" << port << \" \" << protocol;\n\n        // Determine direction\n        bool to_cloud = in_cidr(dst, vpc_cidr);\n\n        // Find active tunnel\n        Tunnel* active_tunnel = nullptr;\n        for (auto& t : tunnels) {\n            if (t.active) { active_tunnel = &t; break; }\n        }\n\n        if (!active_tunnel) {\n            std::cout << \" → DROPPED (no active tunnel)\\n\";\n            return;\n        }\n\n        if (to_cloud) {\n            std::cout << \" [on-prem→cloud]\";\n            // Encrypt\n            active_tunnel->seq_counter++;\n            std::cout << \" → Encrypt (SPI=0x\" << std::hex << active_tunnel->spi_out\n                      << std::dec << \", seq=\" << active_tunnel->seq_counter << \")\";\n            std::cout << \" → Tunnel \" << active_tunnel->id\n                      << \" (\" << active_tunnel->latency_ms << \"ms)\";\n            std::this_thread::sleep_for(std::chrono::milliseconds(5));\n\n            // Decrypt at cloud end\n            std::cout << \" → Decrypt → Forward to \" << dst;\n            std::cout << \" → DELIVERED\\n\";\n        } else {\n            std::cout << \" [cloud→on-prem]\";\n            active_tunnel->seq_counter++;\n            std::cout << \" → Encrypt\";\n            std::cout << \" → Tunnel \" << active_tunnel->id;\n            std::cout << \" → Decrypt → Forward to \" << dst;\n            std::cout << \" → DELIVERED\\n\";\n        }\n    }\n\n    void failover_test() {\n        std::cout << \"\\n=== TUNNEL FAILOVER TEST ===\\n\";\n        send_packet(\"192.168.1.10\", \"10.0.1.50\", 443, \"TCP\", 1);\n        send_packet(\"192.168.1.10\", \"10.0.1.50\", 443, \"TCP\", 2);\n\n        std::cout << \"\\n-- Primary tunnel failure --\\n\";\n        set_active_tunnel(\"tun-1\", false);\n\n        send_packet(\"192.168.1.10\", \"10.0.1.50\", 443, \"TCP\", 3);\n        send_packet(\"192.168.1.10\", \"10.0.1.50\", 443, \"TCP\", 4);\n\n        set_active_tunnel(\"tun-1\", true);\n    }\n\n    void print_status() {\n        std::cout << \"\\n=== VPN Status ===\\n\";\n        std::cout << \"VPC CIDR: \" << vpc_cidr << \"\\n\";\n        std::cout << \"On-prem CIDR: \" << onprem_cidr << \"\\n\\n\";\n        std::cout << std::left << std::setw(12) << \"Tunnel\"\n                  << std::setw(8) << \"Status\"\n                  << std::setw(12) << \"Encryption\"\n                  << std::setw(8) << \"Latency\"\n                  << std::setw(12) << \"SPI Out\"\n                  << \"Seq Count\\n\";\n        std::cout << std::string(65, '-') << \"\\n\";\n        for (const auto& t : tunnels) {\n            std::cout << std::left << std::setw(12) << t.id\n                      << std::setw(8) << (t.active ? \"UP\" : \"DOWN\")\n                      << std::setw(12) << t.encryption_alg\n                      << std::setw(8) << std::to_string(t.latency_ms) + \"ms\"\n                      << std::hex << std::setw(12) << t.spi_out\n                      << std::dec << std::to_string(t.seq_counter) << \"\\n\";\n        }\n    }\n};\n\nint main() {\n    CloudVPN vpn(\"10.0.0.0/16\", \"192.168.0.0/16\");\n    vpn.add_tunnel(\"tun-1\", 0xABCD1234, 0x1234ABCD);\n    vpn.add_tunnel(\"tun-2\", 0xEFGH5678, 0x5678EFGH);\n\n    vpn.print_status();\n    vpn.failover_test();\n    vpn.print_status();\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-cloud-vpn-simulator",
      children: "Python Implementation: Cloud VPN Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import time\nimport random\nfrom dataclasses import dataclass\nfrom typing import Optional\nimport ipaddress\n\n\n@dataclass\nclass Tunnel:\n    tunnel_id: str\n    active: bool\n    spi_in: int\n    spi_out: int\n    seq_counter: int = 0\n    encryption: str = \"AES-256-GCM\"\n    latency_ms: int = 15\n\n\nclass CloudVPN:\n    def __init__(self, vpc_cidr: str, onprem_cidr: str):\n        self.vpc_network = ipaddress.IPv4Network(vpc_cidr, strict=False)\n        self.onprem_network = ipaddress.IPv4Network(onprem_cidr, strict=False)\n        self.tunnels: list[Tunnel] = []\n\n    def add_tunnel(self, tunnel_id: str, spi_in: int, spi_out: int):\n        self.tunnels.append(Tunnel(\n            tunnel_id=tunnel_id, active=True,\n            spi_in=spi_in, spi_out=spi_out,\n            latency_ms=random.randint(5, 25)\n        ))\n\n    def set_tunnel_state(self, tunnel_id: str, active: bool):\n        for t in self.tunnels:\n            if t.tunnel_id == tunnel_id:\n                t.active = active\n                print(f\"  Tunnel {tunnel_id}: {'ACTIVE' if active else 'INACTIVE'}\")\n\n    def get_active_tunnel(self) -> Optional[Tunnel]:\n        for t in self.tunnels:\n            if t.active:\n                return t\n        return None\n\n    def send_packet(self, src: str, dst: str, port: int,\n                    protocol: str, packet_id: int):\n        dst_ip = ipaddress.IPv4Address(dst)\n        to_cloud = dst_ip in self.vpc_network\n        direction = \"on-prem→cloud\" if to_cloud else \"cloud→on-prem\"\n\n        print(f\"\\nPkt#{packet_id}: {src}→{dst}:{port} {protocol} [{direction}]\", end=\"\")\n\n        tunnel = self.get_active_tunnel()\n        if tunnel is None:\n            print(\" → DROPPED (no active tunnel)\", end=\"\")\n            return\n\n        tunnel.seq_counter += 1\n        time.sleep(0.01)\n\n        enc = tunnel.encryption\n        print(f\" → Encrypt({enc} SPI=0x{tunnel.spi_out:08X} seq={tunnel.seq_counter})\", end=\"\")\n        print(f\" → Tunnel({tunnel.tunnel_id} {tunnel.latency_ms}ms)\", end=\"\")\n        print(f\" → Decrypt → DELIVERED to {dst}\")\n\n    def failover_simulation(self):\n        print(\"\\n=== VPN TUNNEL FAILOVER SIMULATION ===\")\n        self.send_packet(\"192.168.1.10\", \"10.0.1.50\", 443, \"TCP\", 1)\n        self.send_packet(\"192.168.1.11\", \"10.0.1.51\", 80, \"TCP\", 2)\n        print(\"\\n-- Primary tunnel failure --\")\n        self.set_tunnel_state(\"tun-1\", False)\n        self.send_packet(\"192.168.1.10\", \"10.0.1.50\", 443, \"TCP\", 3)\n        print(\"\\n-- Primary tunnel restored --\")\n        self.set_tunnel_state(\"tun-1\", True)\n        self.send_packet(\"192.168.1.12\", \"10.0.1.52\", 22, \"TCP\", 4)\n\n    def status(self):\n        print(f\"\\n=== VPN Status ===\")\n        print(f\"VPC: {self.vpc_network}, On-prem: {self.onprem_network}\")\n        print(f\"{'Tunnel':<10} {'Status':<8} {'Encryption':<14} {'Latency':<8} {'SPI Out':<12} Seq\")\n        print(\"-\" * 65)\n        for t in self.tunnels:\n            print(f\"{t.tunnel_id:<10} {'UP' if t.active else 'DOWN':<8} \"\n                  f\"{t.encryption:<14} {t.latency_ms}ms    \"\n                  f\"0x{t.spi_out:<08X}  {t.seq_counter}\")\n\n\nvpn = CloudVPN(\"10.0.0.0/16\", \"192.168.0.0/16\")\nvpn.add_tunnel(\"tun-1\", 0xABCD1234, 0x1234ABCD)\nvpn.add_tunnel(\"tun-2\", 0x5678EFGH, 0xEFGH5678)\nvpn.status()\nvpn.failover_simulation()\nvpn.status()\n"
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
        children: "PROCEDURE setup_direct_connect(dx_location, vlan_id, bgp_asn, vpc_cidrs):\n    // Step 1: Order physical connection\n    dx_port = request_dx_port({\n        location: dx_location,\n        bandwidth: \"10Gbps\",\n        port_type: \"10GBASE-SR\"\n    })\n    LOG \"Direct Connect port provisioned: \" + dx_port.port_id\n\n    // Step 2: Create virtual interface\n    private_vif = create_virtual_interface({\n        vlan_id: vlan_id,\n        bgp_asn: bgp_asn,\n        auth_key: generate_md5_bgp_auth(),\n        type: \"private\"\n    })\n    LOG \"Private VIF created with VLAN \" + vlan_id\n\n    // Step 3: BGP session\n    bgp_session = create_bgp_session({\n        local_ip: dx_port.router_ip,\n        peer_ip: customer_router_ip,\n        local_asn: 64512,          // Cloud side\n        peer_asn: bgp_asn,         // Customer side\n        auth_md5: private_vif.auth_key,\n        hold_time: 90\n    })\n\n    // Step 4: Advertise prefixes\n    bgp_session.send_UPDATE({\n        network_layer_reachability: vpc_cidrs,  // Cloud → On-prem\n        next_hop: dx_port.router_ip,\n        as_path: [64512],\n        communities: [\"7224:9100\"]  // AWS direct connect\n    })\n\n    // Receive on-prem prefixes\n    received = bgp_session.receive_UPDATE()\n    FOR each prefix in received.nlri:\n        route_table.add(prefix, target: \"dx-vif-\" + vif_id)\n        LOG \"Learned route: \" + prefix + \" via Direct Connect\"\n\n    LOG \"BGP session established, \" + len(vpc_cidrs) + \" routes advertised\"\n    RETURN bgp_session\nEND PROCEDURE\n"
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
        children: "#include <iostream>\n#include <iomanip>\n#include <string>\n#include <cmath>\n\nint main() {\n    std::cout << \"=== Direct Connect Bandwidth Calculator ===\\n\\n\";\n\n    struct DXOption {\n        std::string speed;\n        double gbps;\n        double monthly_cost;\n        double per_gb_cost;\n    };\n\n    DXOption options[] = {\n        {\"1 Gbps\",  1.0,   200.0,  0.02},\n        {\"10 Gbps\", 10.0,  2000.0, 0.015},\n        {\"100 Gbps\", 100.0, 15000.0, 0.01}\n    };\n\n    double daily_data_gb;\n    std::cout << \"Enter daily data transfer (GB): \";\n    std::cin >> daily_data_gb;\n\n    double monthly_data_gb = daily_data_gb * 30;\n    double peak_gbps = (daily_data_gb * 8) / (24 * 3600);  // Average\n\n    std::cout << \"\\nMonthly transfer: \" << std::fixed << std::setprecision(1)\n              << monthly_data_gb << \" GB\\n\";\n    std::cout << \"Average throughput: \" << std::setprecision(2) << peak_gbps << \" Gbps\\n\\n\";\n\n    std::cout << std::left << std::setw(15) << \"DX Speed\"\n              << std::setw(12) << \"Port Cost\"\n              << std::setw(15) << \"Data Cost\"\n              << std::setw(15) << \"Total/Month\"\n              << \"Sufficient?\\n\";\n    std::cout << std::string(72, '-') << \"\\n\";\n\n    for (const auto& opt : options) {\n        double data_cost = monthly_data_gb * opt.per_gb_cost;\n        double total = opt.monthly_cost + data_cost;\n        bool sufficient = opt.gbps >= peak_gbps;\n        std::cout << std::left << std::setw(15) << opt.speed\n                  << \"$\" << std::setw(10) << std::fixed << std::setprecision(0) << opt.monthly_cost\n                  << \"$\" << std::setw(13) << std::setprecision(0) << data_cost\n                  << \"$\" << std::setw(13) << total\n                  << (sufficient ? \"YES\" : \"NO\") << \"\\n\";\n    }\n\n    // VPN comparison\n    double vpn_cost = 32.0 + (monthly_data_gb * 0.05);\n    std::cout << \"\\n--- VPN Comparison ---\\n\";\n    std::cout << \"Site-to-Site VPN monthly cost: $\" << std::setprecision(0) << vpn_cost << \"\\n\";\n    std::cout << \"VPN includes internet transit, no SLA on latency\\n\";\n    double dx_min = options[0].monthly_cost + monthly_data_gb * options[0].per_gb_cost;\n    double break_even_gb = (dx_min - vpn_cost) / (0.05 - options[0].per_gb_cost);\n    std::cout << \"Break-even: \" << std::setprecision(0) << break_even_gb\n              << \" GB/month to justify DX over VPN\\n\";\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-direct-connect-cost-vs-vpn-analyzer",
      children: "Python Implementation: Direct Connect Cost vs VPN Analyzer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def analyze_connectivity(daily_data_gb: float):\n    monthly_gb = daily_data_gb * 30\n    avg_gbps = (daily_data_gb * 8) / (24 * 3600)\n\n    options = [\n        (\"1 Gbps\", 1.0, 200, 0.02),\n        (\"10 Gbps\", 10.0, 2000, 0.015),\n        (\"100 Gbps\", 100.0, 15000, 0.01),\n    ]\n\n    print(f\"Daily transfer: {daily_data_gb} GB\")\n    print(f\"Monthly transfer: {monthly_gb:.0f} GB\")\n    print(f\"Average throughput: {avg_gbps:.3f} Gbps\\n\")\n\n    print(f\"{'Speed':<12} {'Port Cost':<12} {'Data Cost':<14} {'Total':<14} Sufficient\")\n    print(\"-\" * 65)\n\n    for speed, cap, port_cost, per_gb in options:\n        data_cost = monthly_gb * per_gb\n        total = port_cost + data_cost\n        sufficient = cap >= avg_gbps\n        print(f\"{speed:<12} ${port_cost:<9,.0f} ${data_cost:<11,.0f} \"\n              f\"${total:<11,.0f} {'YES' if sufficient else 'NO'}\")\n\n    # VPN\n    vpn_cost = 32.40 + (monthly_gb * 0.09)\n    print(f\"\\n  VPN monthly: ${vpn_cost:<,.2f}\")\n    print(f\"  DX 1G monthly: ${options[0][2] + monthly_gb * options[0][3]:<,.2f}\")\n\n    # Break-even\n    breakeven = (options[0][2] - 32.40) / (0.09 - options[0][3])\n    if breakeven > 0:\n        print(f\"\\n  Break-even: {breakeven:,.0f} GB/month to justify DX over VPN\")\n        print(f\"  ({breakeven / 30:,.0f} GB/day)\")\n\n    print(f\"\\n  Recommendation:\", end=\"\")\n    if monthly_gb < 1000:\n        print(\" VPN is sufficient and cost-effective\")\n    elif monthly_gb < 10000:\n        print(\" Evaluate: moderate traffic, consider 1G DX\")\n    elif monthly_gb < 100000:\n        print(\" 10G DX recommended\")\n    else:\n        print(\" 100G DX or multiple connections required\")\n\n\nanalyze_connectivity(daily_data_gb=500)\nprint()\nanalyze_connectivity(daily_data_gb=10000)\n"
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
        children: "PROCEDURE advertise_multi_cloud_routes():\n    clouds = [\"aws\", \"azure\", \"gcp\"]\n    hub_tgw = create_transit_gateway()\n    hubs = []\n\n    FOR each cloud in clouds:\n        // Connect cloud to hub\n        IF cloud == \"aws\":\n            connection = create_direct_connect(cloud.dx_location)\n            attach_tgw(connection, hub_tgw)\n        ELSE IF cloud == \"azure\":\n            connection = create_express_route(cloud.peering_location)\n            attach_to_hub(connection, hub_tgw)\n        ELSE IF cloud == \"gcp\":\n            connection = create_vpn(cloud.cloud_router)\n            attach_to_hub(connection, hub_tgw)\n\n        // Advertise cloud VPC CIDR\n        bgp_advertise(hub_tgw, cloud.vpc_cidr)\n        hubs.append(connection)\n\n    // Advertise on-premises\n    bgp_advertise(hub_tgw, \"10.0.0.0/8\")  // On-prem\n\n    // Set up route tables\n    FOR each cloud in clouds:\n        hub_tgw.create_route_table({\n            name: \"rtb-\" + cloud.name,\n            routes: [\n                { dest: cloud.vpc_cidr, target: hubs[cloud] },\n                { dest: \"0.0.0.0/0\", target: central_nat }\n            ]\n        })\n\n    LOG \"Multi-cloud network established with \" + len(clouds) + \" clouds\"\nEND PROCEDURE\n"
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
        children: "#include <iostream>\n#include <vector>\n#include <string>\n#include <map>\n#include <iomanip>\n#include <sstream>\n#include <cstdint>\n\nstruct CloudRoute {\n    std::string cloud;\n    std::string cidr;\n    std::string connection_type;\n    std::string status;\n};\n\nuint32_t ip_to_uint(const std::string& ip) {\n    std::stringstream s(ip);\n    int a, b, c, d; char ch;\n    s >> a >> ch >> b >> ch >> c >> ch >> d;\n    return (a << 24) | (b << 16) | (c << 8) | d;\n}\n\nclass MultiCloudNetwork {\nprivate:\n    std::vector<CloudRoute> routes;\n    std::map<std::string, int> cloud_latency;\n\npublic:\n    MultiCloudNetwork() {\n        cloud_latency[\"aws\"] = 0;\n        cloud_latency[\"azure\"] = 2;\n        cloud_latency[\"gcp\"] = 3;\n        cloud_latency[\"onprem\"] = 1;\n    }\n\n    void add_route(const std::string& cloud, const std::string& cidr,\n                   const std::string& connection) {\n        routes.push_back({cloud, cidr, connection, \"UP\"});\n    }\n\n    std::string find_cloud(const std::string& ip) {\n        uint32_t ip_val = ip_to_uint(ip);\n        int best_prefix = -1;\n        std::string best_cloud;\n\n        for (const auto& r : routes) {\n            size_t slash = r.cidr.find('/');\n            std::string ip_part = r.cidr.substr(0, slash);\n            int prefix = std::stoi(r.cidr.substr(slash + 1));\n            uint32_t net = ip_to_uint(ip_part);\n            uint32_t mask = (prefix == 0) ? 0 : (0xFFFFFFFF << (32 - prefix));\n\n            if ((ip_val & mask) == (net & mask) && prefix > best_prefix) {\n                best_prefix = prefix;\n                best_cloud = r.cloud;\n            }\n        }\n        return best_cloud;\n    }\n\n    void trace_request(const std::string& from_cloud, const std::string& dst_ip,\n                       int request_id) {\n        std::string to_cloud = find_cloud(dst_ip);\n        if (to_cloud.empty()) {\n            std::cout << \"Req#\" << request_id << \": \" << from_cloud\n                      << \" → \" << dst_ip << \" → NO ROUTE\\n\";\n            return;\n        }\n\n        int total_latency = 0;\n        std::vector<std::string> hops;\n        hops.push_back(from_cloud);\n\n        if (from_cloud != to_cloud) {\n            // Calculate cross-cloud path\n            int hub_latency = 0;\n            if (cloud_latency.count(from_cloud)) hub_latency += cloud_latency[from_cloud];\n            if (cloud_latency.count(to_cloud)) hub_latency += cloud_latency[to_cloud];\n\n            hops.push_back(\"colo-hub\");\n            hops.push_back(to_cloud);\n            total_latency = hub_latency + 2; // +2ms for hub processing\n        } else {\n            hops.push_back(to_cloud);\n            total_latency = 0;\n        }\n\n        std::cout << \"Req#\" << request_id << \": \";\n        for (size_t i = 0; i < hops.size(); i++) {\n            std::cout << hops[i];\n            if (i < hops.size() - 1) std::cout << \" → \";\n        }\n        std::cout << \" [\" << total_latency << \"ms]\" << \"\\n\";\n    }\n\n    void print_route_table() {\n        std::cout << \"\\nMulti-Cloud Route Table:\\n\";\n        std::cout << std::left << std::setw(12) << \"Cloud\"\n                  << std::setw(20) << \"CIDR\"\n                  << std::setw(20) << \"Connection\" << \"Status\\n\";\n        std::cout << std::string(65, '-') << \"\\n\";\n        for (const auto& r : routes) {\n            std::cout << std::left << std::setw(12) << r.cloud\n                      << std::setw(20) << r.cidr\n                      << std::setw(20) << r.connection_type\n                      << r.status << \"\\n\";\n        }\n    }\n};\n\nint main() {\n    MultiCloudNetwork mcn;\n    mcn.add_route(\"aws\", \"10.0.0.0/16\", \"Direct Connect\");\n    mcn.add_route(\"azure\", \"10.1.0.0/16\", \"ExpressRoute\");\n    mcn.add_route(\"gcp\", \"10.2.0.0/16\", \"VPN\");\n    mcn.add_route(\"onprem\", \"192.168.0.0/16\", \"Direct Connect\");\n\n    mcn.print_route_table();\n\n    std::cout << \"\\nCross-cloud traffic simulation:\\n\";\n    mcn.trace_request(\"aws\", \"10.1.1.50\", 1);    // AWS → Azure\n    mcn.trace_request(\"azure\", \"10.2.0.100\", 2); // Azure → GCP\n    mcn.trace_request(\"aws\", \"10.0.1.10\", 3);    // AWS → AWS (same cloud)\n    mcn.trace_request(\"gcp\", \"192.168.1.1\", 4);  // GCP → on-prem\n    mcn.trace_request(\"aws\", \"172.16.0.1\", 5);   // No route\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-multi-cloud-latency-analyzer",
      children: "Python Implementation: Multi-Cloud Latency Analyzer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass\nfrom typing import Optional\nimport ipaddress\n\n\n@dataclass\nclass CloudRoute:\n    cloud: str\n    cidr: str\n    connection: str\n    status: str = \"UP\"\n\n\nclass MultiCloudNetwork:\n    def __init__(self):\n        self.routes: list[CloudRoute] = []\n        self.latency_map = {\n            \"aws\": 0, \"azure\": 2, \"gcp\": 3, \"onprem\": 1,\n            \"aws→colo\": 1, \"azure→colo\": 2, \"gcp→colo\": 3, \"onprem→colo\": 1\n        }\n\n    def add_route(self, cloud: str, cidr: str, connection: str):\n        self.routes.append(CloudRoute(cloud, cidr, connection))\n\n    def find_cloud(self, ip_str: str) -> Optional[str]:\n        ip = ipaddress.IPv4Address(ip_str)\n        best_prefix = -1\n        best_cloud = None\n        for r in self.routes:\n            net = ipaddress.IPv4Network(r.cidr, strict=False)\n            if ip in net and net.prefixlen > best_prefix:\n                best_prefix = net.prefixlen\n                best_cloud = r.cloud\n        return best_cloud\n\n    def trace(self, from_cloud: str, dst_ip: str, req_id: int):\n        to_cloud = self.find_cloud(dst_ip)\n        if to_cloud is None:\n            print(f\"Req#{req_id}: {from_cloud} → {dst_ip} → NO ROUTE\")\n            return\n\n        path = [from_cloud]\n        latency = 0\n\n        if from_cloud != to_cloud:\n            path.append(\"colo-hub\")\n            path.append(to_cloud)\n            hub_key1 = f\"{from_cloud}→colo\"\n            hub_key2 = f\"{to_cloud}→colo\"\n            latency = self.latency_map.get(hub_key1, 2) + self.latency_map.get(hub_key2, 2) + 2\n\n        path_str = \" → \".join(path)\n        print(f\"Req#{req_id}: {path_str} [{latency}ms]\")\n\n    def print_routes(self):\n        print(f\"{'Cloud':<10} {'CIDR':<20} {'Connection':<18} Status\")\n        print(\"-\" * 60)\n        for r in self.routes:\n            print(f\"{r.cloud:<10} {r.cidr:<20} {r.connection:<18} {r.status}\")\n\n\nmcn = MultiCloudNetwork()\nmcn.add_route(\"AWS\", \"10.0.0.0/16\", \"Direct Connect\")\nmcn.add_route(\"Azure\", \"10.1.0.0/16\", \"ExpressRoute\")\nmcn.add_route(\"GCP\", \"10.2.0.0/16\", \"VPN\")\nmcn.add_route(\"On-prem\", \"192.168.0.0/16\", \"Direct Connect\")\n\nmcn.print_routes()\nprint(\"\\nMulti-Cloud Simulation:\")\nmcn.trace(\"AWS\", \"10.1.1.50\", 1)\nmcn.trace(\"Azure\", \"10.2.100.10\", 2)\nmcn.trace(\"AWS\", \"192.168.1.1\", 3)\nmcn.trace(\"GCP\", \"10.0.0.50\", 4)\n"
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
        children: "PROCEDURE service_mesh_request(src_svc, dst_svc, payload, mesh_config):\n    src_sidecar = get_sidecar(src_svc)\n    dst_sidecar = get_sidecar(dst_svc)\n\n    // Step 1: Retrieve routing rules from control plane\n    virtual_service = mesh_config.get_virtual_service(dst_svc)\n    destination_rules = mesh_config.get_destination_rule(dst_svc)\n\n    // Step 2: Determine subset (canary, stable, etc.)\n    IF virtual_service.has_weighted_routing:\n        subset = weighted_select(virtual_service.subsets)\n    ELSE:\n        subset = \"stable\"\n\n    // Step 3: mTLS handshake\n    src_cert = src_sidecar.certificate_manager.get_cert()\n    dst_cert_required = destination_rules.tls_mode == \"STRICT\"\n\n    tls_session = tls_handshake(\n        src_sidecar, dst_sidecar,\n        src_cert, dst_sidecar.trust_bundle,\n        alpn: \"h2\"\n    )\n\n    // Step 4: Apply mesh policies\n    IF circuit_breaker.is_open(dst_svc, subset):\n        IF virtual_service.has_fallback:\n            subset = \"fallback\"\n            LOG \"Circuit breaker open, routing to fallback\"\n        ELSE:\n            RETURN 503 Service Unavailable\n\n    IF destination_rules.timeout > 0:\n        SET deadline = now + destination_rules.timeout\n\n    // Step 5: Forward with retry\n    FOR retry in 0..destination_rules.retries:\n        response = async_send_over_mtls(tls_session, payload)\n        IF response.status < 500:\n            BREAK\n\n    // Step 6: Report telemetry\n    report_metric(\"request_count\", {src_svc, dst_svc, response.status})\n    report_trace_span(src_svc, dst_svc, latency)\n    LOG_ACCESS(src_svc, dst_svc, response.status)\n\n    RETURN response\nEND PROCEDURE\n"
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
        children: "#include <iostream>\n#include <string>\n#include <vector>\n#include <map>\n#include <random>\n#include <chrono>\n#include <thread>\n#include <iomanip>\n#include <sstream>\n\nstruct ServiceEndpoint {\n    std::string service;\n    std::string version;\n    std::string address;\n    int port;\n    bool healthy;\n};\n\nstruct CircuitBreaker {\n    int failure_count;\n    int threshold;\n    std::string state;\n    std::chrono::steady_clock::time_point last_failure;\n    int reset_timeout_ms;\n};\n\nclass ServiceMesh {\nprivate:\n    std::map<std::string, std::vector<ServiceEndpoint>> services;\n    std::map<std::string, CircuitBreaker> circuit_breakers;\n    std::map<std::string, int> version_weights;\n    std::mt19937 rng;\n    int total_requests;\n    int failed_requests;\n\npublic:\n    ServiceMesh() : rng(std::random_device{}()), total_requests(0), failed_requests(0) {}\n\n    void register_service(const std::string& service, const std::string& version,\n                          const std::string& address, int port) {\n        services[service].push_back({service, version, address, port, true});\n    }\n\n    void set_version_weight(const std::string& service, const std::string& version, int weight) {\n        version_weights[service + \":\" + version] = weight;\n    }\n\n    void set_circuit_breaker(const std::string& service, int threshold, int reset_ms) {\n        circuit_breakers[service] = {0, threshold, \"CLOSED\",\n                                      std::chrono::steady_clock::now(), reset_ms};\n    }\n\n    std::string select_version(const std::string& service) {\n        auto it = version_weights.find(service + \":v1\");\n        auto it2 = version_weights.find(service + \":v2\");\n        int w1 = (it != version_weights.end()) ? it->second : 100;\n        int w2 = (it2 != version_weights.end()) ? it2->second : 0;\n\n        std::uniform_int_distribution<int> dist(0, w1 + w2);\n        int roll = dist(rng);\n        return (roll <= w1) ? \"v1\" : \"v2\";\n    }\n\n    bool check_circuit_breaker(const std::string& service) {\n        auto it = circuit_breakers.find(service);\n        if (it == circuit_breakers.end()) return true;\n\n        auto& cb = it->second;\n        if (cb.state == \"CLOSED\") return true;\n\n        if (cb.state == \"OPEN\") {\n            auto now = std::chrono::steady_clock::now();\n            auto elapsed = std::chrono::duration_cast<std::chrono::milliseconds>(\n                now - cb.last_failure).count();\n            if (elapsed > cb.reset_timeout_ms) {\n                cb.state = \"HALF_OPEN\";\n                std::cout << \"  [Circuit Breaker] OPEN → HALF_OPEN (probe allowed)\\n\";\n                return true;\n            }\n            return false;\n        }\n\n        // HALF_OPEN: allow one request\n        cb.state = \"OPEN\";  // Reset to OPEN, will succeed or fail\n        return true;\n    }\n\n    void record_failure(const std::string& service) {\n        auto it = circuit_breakers.find(service);\n        if (it == circuit_breakers.end()) return;\n\n        auto& cb = it->second;\n        cb.failure_count++;\n        cb.last_failure = std::chrono::steady_clock::now();\n\n        if (cb.failure_count >= cb.threshold && cb.state != \"OPEN\") {\n            cb.state = \"OPEN\";\n            std::cout << \"  [Circuit Breaker] TRIPPED (\" << cb.failure_count\n                      << \" failures) → OPEN (resets in \" << cb.reset_timeout_ms << \"ms)\\n\";\n        }\n    }\n\n    void record_success(const std::string& service) {\n        auto it = circuit_breakers.find(service);\n        if (it == circuit_breakers.end()) return;\n\n        auto& cb = it->second;\n        if (cb.state == \"HALF_OPEN\") {\n            cb.state = \"CLOSED\";\n            cb.failure_count = 0;\n            std::cout << \"  [Circuit Breaker] HALF_OPEN probe succeeded → CLOSED\\n\";\n        }\n    }\n\n    void request(const std::string& from, const std::string& to,\n                 const std::string& path, int req_id) {\n        total_requests++;\n        std::cout << \"\\nReq#\" << req_id << \": \" << from << \" → \" << to << path << \"\\n\";\n\n        // Check circuit breaker\n        if (!check_circuit_breaker(to)) {\n            std::cout << \"  [Envoy] Circuit breaker OPEN → immediate 503\\n\";\n            failed_requests++;\n            return;\n        }\n\n        // Select version\n        std::string version = select_version(to);\n        std::cout << \"  [Envoy] VirtualService rule: weight → \" << version << \"\\n\";\n\n        // Find endpoint\n        auto& eps = services[to];\n        std::string target;\n        for (const auto& ep : eps) {\n            if (ep.version == version && ep.healthy) {\n                target = ep.address + \":\" + std::to_string(ep.port);\n                break;\n            }\n        }\n        if (target.empty()) {\n            std::cout << \"  [Envoy] No healthy endpoint for \" << version << \"\\n\";\n            failed_requests++;\n            record_failure(to);\n            return;\n        }\n\n        // mTLS handshake\n        std::cout << \"  [Envoy] mTLS handshake with \" << target << \"\\n\";\n        std::this_thread::sleep_for(std::chrono::milliseconds(1));\n\n        // Forward\n        int latency = 2 + (rng() % 10);\n        std::this_thread::sleep_for(std::chrono::milliseconds(latency));\n\n        // Simulate occasional failure\n        bool success = (rng() % 100) < 85;\n        if (success) {\n            std::cout << \"  [Envoy] → \" << target << \" (\" << latency << \"ms) → 200 OK\\n\";\n            record_success(to);\n        } else {\n            std::cout << \"  [Envoy] → \" << target << \" → 503 Service Unavailable\\n\";\n            record_failure(to);\n            failed_requests++;\n        }\n    }\n\n    void print_stats() {\n        double success_rate = total_requests > 0\n            ? (100.0 * (total_requests - failed_requests) / total_requests) : 0;\n        std::cout << \"\\n=== Service Mesh Statistics ===\\n\";\n        std::cout << \"Total requests: \" << total_requests << \"\\n\";\n        std::cout << \"Failed: \" << failed_requests << \"\\n\";\n        std::cout << \"Success rate: \" << std::fixed << std::setprecision(1)\n                  << success_rate << \"%\\n\";\n\n        for (const auto& [svc, cb] : circuit_breakers) {\n            std::cout << svc << \" circuit breaker: \" << cb.state\n                      << \" (failures: \" << cb.failure_count << \"/\" << cb.threshold << \")\\n\";\n        }\n    }\n};\n\nint main() {\n    ServiceMesh mesh;\n\n    mesh.register_service(\"frontend\", \"v1\", \"10.0.1.10\", 8080);\n    mesh.register_service(\"backend\", \"v1\", \"10.0.2.10\", 8080);\n    mesh.register_service(\"backend\", \"v2\", \"10.0.2.20\", 8080);\n\n    mesh.set_version_weight(\"backend\", \"v1\", 80);\n    mesh.set_version_weight(\"backend\", \"v2\", 20);\n    mesh.set_circuit_breaker(\"backend\", 3, 5000);\n\n    for (int i = 1; i <= 12; i++) {\n        mesh.request(\"frontend\", \"backend\", \"/api/data\", i);\n    }\n\n    mesh.print_stats();\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-service-mesh-simulator",
      children: "Python Implementation: Service Mesh Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import random\nimport time\nfrom dataclasses import dataclass\nfrom typing import Optional\n\n\n@dataclass\nclass Endpoint:\n    service: str\n    version: str\n    address: str\n    port: int\n    healthy: bool = True\n\n\nclass CircuitBreaker:\n    def __init__(self, threshold: int = 5, reset_ms: int = 30000):\n        self.failure_count = 0\n        self.threshold = threshold\n        self.state = \"CLOSED\"\n        self.reset_ms = reset_ms\n        self.last_failure = 0.0\n\n    def allow_request(self) -> bool:\n        now = time.time() * 1000\n        if self.state == \"CLOSED\":\n            return True\n        if self.state == \"OPEN\":\n            if now - self.last_failure > self.reset_ms:\n                self.state = \"HALF_OPEN\"\n                print(f\"  [CB] OPEN -> HALF_OPEN (probe)\")\n                return True\n            return False\n        # HALF_OPEN\n        self.state = \"OPEN\"\n        return True\n\n    def record_failure(self):\n        self.failure_count += 1\n        self.last_failure = time.time() * 1000\n        if self.failure_count >= self.threshold and self.state != \"OPEN\":\n            self.state = \"OPEN\"\n            print(f\"  [CB] TRIPPED ({self.failure_count}/{self.threshold}) -> OPEN\")\n\n    def record_success(self):\n        if self.state == \"HALF_OPEN\":\n            self.state = \"CLOSED\"\n            self.failure_count = 0\n            print(f\"  [CB] Probe succeeded -> CLOSED\")\n\n\nclass ServiceMesh:\n    def __init__(self):\n        self.services: dict[str, list[Endpoint]] = {}\n        self.weights: dict[str, int] = {}\n        self.circuit_breakers: dict[str, CircuitBreaker] = {}\n        self.total = 0\n        self.failed = 0\n\n    def register(self, service: str, version: str, address: str, port: int):\n        self.services.setdefault(service, []).append(\n            Endpoint(service, version, address, port)\n        )\n\n    def set_weight(self, service: str, version: str, weight: int):\n        self.weights[f\"{service}:{version}\"] = weight\n\n    def set_circuit_breaker(self, service: str, threshold: int = 5, reset_ms: int = 30000):\n        self.circuit_breakers[service] = CircuitBreaker(threshold, reset_ms)\n\n    def select_version(self, service: str) -> str:\n        w1 = self.weights.get(f\"{service}:v1\", 100)\n        w2 = self.weights.get(f\"{service}:v2\", 0)\n        roll = random.randint(0, w1 + w2)\n        return \"v1\" if roll <= w1 else \"v2\"\n\n    def request(self, src: str, dst: str, path: str, req_id: int):\n        self.total += 1\n        print(f\"\\nReq#{req_id}: {src} -> {dst}{path}\")\n\n        cb = self.circuit_breakers.get(dst)\n        if cb and not cb.allow_request():\n            print(f\"  [Envoy] Circuit breaker OPEN -> 503\")\n            self.failed += 1\n            return\n\n        version = self.select_version(dst)\n        print(f\"  [Envoy] Selected: {dst}:{version}\")\n\n        ep = None\n        for e in self.services.get(dst, []):\n            if e.version == version and e.healthy:\n                ep = e\n                break\n\n        if ep is None:\n            print(f\"  [Envoy] No healthy {version} endpoint -> 503\")\n            self.failed += 1\n            if cb: cb.record_failure()\n            return\n\n        print(f\"  [Envoy] mTLS handshake with {ep.address}:{ep.port}\")\n        latency = random.randint(1, 10)\n\n        success = random.random() < 0.8\n        if success:\n            print(f\"  [Envoy] -> {ep.address}:{ep.port} ({latency}ms) -> 200 OK\")\n            if cb: cb.record_success()\n        else:\n            print(f\"  [Envoy] -> {ep.address}:{ep.port} -> 503\")\n            self.failed += 1\n            if cb: cb.record_failure()\n\n    def stats(self):\n        rate = 100 * (self.total - self.failed) / self.total if self.total > 0 else 0\n        print(f\"\\n=== Service Mesh Stats ===\")\n        print(f\"Total: {self.total}, Failed: {self.failed}, Success: {rate:.1f}%\")\n        for svc, cb in self.circuit_breakers.items():\n            print(f\"  {svc} CB: {cb.state} ({cb.failure_count}/{cb.threshold})\")\n\n\nmesh = ServiceMesh()\nmesh.register(\"frontend\", \"v1\", \"10.0.1.10\", 8080)\nmesh.register(\"backend\", \"v1\", \"10.0.2.10\", 8080)\nmesh.register(\"backend\", \"v2\", \"10.0.2.20\", 8080)\nmesh.set_weight(\"backend\", \"v1\", 80)\nmesh.set_weight(\"backend\", \"v2\", 20)\nmesh.set_circuit_breaker(\"backend\", 3, 5000)\n\nfor i in range(15):\n    mesh.request(\"frontend\", \"backend\", \"/api/data\", i + 1)\nmesh.stats()\n"
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
        children: "PROCEDURE anycast_routing(client_ip, anycast_prefix, nodes):\n    // For each node, simulate BGP path propagation\n    FOR each node in nodes:\n        path_length = compute_bgp_path(client_ip, node)\n        node.bgp_path_length = path_length\n        LOG node.id + \" BGP path: \" + path_length + \" AS hops\"\n\n    // Select nearest node\n    nearest = argmin(nodes, key=lambda n: n.bgp_path_length)\n    LOG \"Anycast route: \" + client_ip + \" → \" + nearest.id\n\n    // Failover scenario\n    nearest_healthy = [n for n in nodes if n.healthy]\n    IF NOT nearest.healthy:\n        nearest = argmin(nearest_healthy, key=lambda n: n.bgp_path_length)\n        LOG \"Failover to: \" + nearest.id\n\n    RETURN nearest\nEND PROCEDURE\n"
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
        children: "#include <iostream>\n#include <vector>\n#include <string>\n#include <map>\n#include <algorithm>\n#include <iomanip>\n#include <random>\n\nstruct AnycastNode {\n    std::string id;\n    std::string location;\n    std::string ip;\n    int bgp_hops;\n    int latency_ms;\n    bool healthy;\n};\n\nclass AnycastNetwork {\nprivate:\n    std::vector<AnycastNode> nodes;\n    std::vector<std::pair<std::string, int>> client_infrastructure;\n\npublic:\n    void add_node(const std::string& id, const std::string& location,\n                  const std::string& ip, int hops, int latency) {\n        nodes.push_back({id, location, ip, hops, latency, true});\n    }\n\n    void set_health(const std::string& id, bool healthy) {\n        for (auto& n : nodes) {\n            if (n.id == id) { n.healthy = healthy; return; }\n        }\n    }\n\n    AnycastNode* route(const std::string& client_location) {\n        std::map<std::string, int> location_latency = {\n            {\"tokyo\", 0}, {\"singapore\", 5}, {\"london\", 10},\n            {\"new-york\", 8}, {\"sydney\", 12}\n        };\n\n        int base_lat = location_latency[client_location];\n        AnycastNode* best = nullptr;\n        int best_cost = INT_MAX;\n\n        for (auto& n : nodes) {\n            if (!n.healthy) continue;\n            int cost = n.bgp_hops * 10 + abs(base_lat - location_latency[n.location]);\n            if (cost < best_cost) {\n                best_cost = cost;\n                best = &n;\n            }\n        }\n        return best;\n    }\n\n    void trace_query(const std::string& client, const std::string& client_location) {\n        std::cout << \"\\nClient (\" << client_location << \") queries anycast IP\\n\";\n        std::cout << std::string(50, '-') << \"\\n\";\n\n        for (const auto& n : nodes) {\n            std::cout << \"  \" << n.location << \" node: AS path=\" << n.bgp_hops\n                      << \" hops, latency=\" << n.latency_ms << \"ms\"\n                      << (n.healthy ? \"\" : \" [DOWN]\") << \"\\n\";\n        }\n\n        AnycastNode* best = route(client_location);\n        if (best) {\n            std::cout << \"BGP best path: \" << best->location\n                      << \" (\" << best->latency_ms << \"ms, \"\n                      << best->bgp_hops << \" AS hops)\\n\";\n            std::cout << \"Packet delivered to \" << best->id\n                      << \" in \" << best->latency_ms << \"ms\\n\";\n        } else {\n            std::cout << \"No healthy anycast nodes available\\n\";\n        }\n    }\n};\n\nint main() {\n    AnycastNetwork anycast;\n    anycast.add_node(\"CDN-Tokyo\", \"tokyo\", \"1.1.1.1\", 3, 2);\n    anycast.add_node(\"CDN-Singapore\", \"singapore\", \"1.1.1.1\", 5, 10);\n    anycast.add_node(\"CDN-London\", \"london\", \"1.1.1.1\", 12, 120);\n    anycast.add_node(\"CDN-NYC\", \"new-york\", \"1.1.1.1\", 10, 110);\n\n    anycast.trace_query(\"User-A\", \"tokyo\");\n\n    std::cout << \"\\n--- Tokyo node failure ---\\n\";\n    anycast.set_health(\"CDN-Tokyo\", false);\n\n    anycast.trace_query(\"User-A\", \"tokyo\");\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-anycast-network-simulator",
      children: "Python Implementation: Anycast Network Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass\nfrom typing import Optional\n\n\n@dataclass\nclass AnycastNode:\n    node_id: str\n    location: str\n    anycast_ip: str\n    bgp_hops: int\n    latency_ms: int\n    healthy: bool = True\n\n\nclass AnycastNetwork:\n    def __init__(self):\n        self.nodes: list[AnycastNode] = []\n\n    def add_node(self, node_id: str, location: str, anycast_ip: str,\n                 bgp_hops: int, latency_ms: int):\n        self.nodes.append(AnycastNode(node_id, location, anycast_ip, bgp_hops, latency_ms))\n\n    def set_health(self, node_id: str, healthy: bool):\n        for n in self.nodes:\n            if n.node_id == node_id:\n                n.healthy = healthy\n\n    def route(self, client_location: str) -> Optional[AnycastNode]:\n        base_lat = {\n            \"tokyo\": 0, \"singapore\": 5, \"london\": 10,\n            \"new-york\": 8, \"sydney\": 12, \"mumbai\": 7\n        }.get(client_location, 10)\n\n        best = None\n        best_cost = float('inf')\n        for n in self.nodes:\n            if not n.healthy:\n                continue\n            cost = n.bgp_hops * 10 + abs(base_lat - n.latency_ms // 10)\n            if cost < best_cost:\n                best_cost = cost\n                best = n\n        return best\n\n    def trace(self, client_location: str, label: str = \"\"):\n        if label:\n            print(f\"\\n{label}\")\n        print(f\"Client ({client_location}) queries anycast IP\")\n        print(\"-\" * 50)\n        for n in self.nodes:\n            status = \"UP\" if n.healthy else \"DOWN\"\n            print(f\"  {n.location}: AS path={n.bgp_hops} hops, \"\n                  f\"{n.latency_ms}ms [{status}]\")\n\n        best = self.route(client_location)\n        if best:\n            print(f\"BGP best path: {best.location} ({best.latency_ms}ms)\")\n        else:\n            print(\"No healthy nodes\")\n\n\nanycast = AnycastNetwork()\nanycast.add_node(\"PoP-Tokyo\", \"tokyo\", \"1.1.1.1\", 3, 2)\nanycast.add_node(\"PoP-Singapore\", \"singapore\", \"1.1.1.1\", 5, 10)\nanycast.add_node(\"PoP-London\", \"london\", \"1.1.1.1\", 12, 120)\nanycast.add_node(\"PoP-NYC\", \"new-york\", \"1.1.1.1\", 10, 110)\n\nanycast.trace(\"tokyo\", \"=== Normal Operation ===\")\nanycast.set_health(\"PoP-Tokyo\", False)\nanycast.trace(\"tokyo\", \"=== Tokyo Failure ===\")\nanycast.set_health(\"PoP-Tokyo\", True)\n\nprint(\"\\n=== Global Query Distribution ===\")\nfor client in [\"tokyo\", \"singapore\", \"london\", \"new-york\", \"sydney\"]:\n    anycast.trace(client)\n"
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
        children: "Internet → Route53 → CloudFront → ALB → Web Targets (public subnets)\n                                         → App Targets (private subnets, SG-restricted)\n                                              → RDS (private subnets, SG from app only)\n                → NAT Gateway (for private subnet outbound)\n                → S3 VPC Endpoint (private subnet → S3 without NAT)\n"
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
        children: "Global HTTP(S) LB → Cloud CDN → Backend Buckets (static) → Cloud Storage\n                              → Backend Services (dynamic) → Cloud Run / GKE\n                              → Serverless NEG → Cloud Functions\n"
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
        children: "Azure Front Door → Application Gateway (WAF) → VMSS (web tier, public subnet)\n                                               → VMSS (app tier, private subnet)\n                                                    → Azure SQL Database (private endpoint)\n                → Azure Bastion (management, public subnet)\n                → NAT Gateway (private subnet outbound)\n                → ExpressRoute → On-premises\n"
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
        children: "Ingress Gateway → VirtualService → DestinationRule → Pod (sidecar Envoy)\n                                                      → Pod (sidecar Envoy)\n                                                      → Pod (sidecar Envoy)\n                    → Pilot (control plane) → Mixer → Citadel (certificates)\n"
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



/***/ },

/***/ 28453
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ }

}]);