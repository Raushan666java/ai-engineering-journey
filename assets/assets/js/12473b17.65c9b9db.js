"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[462],{

/***/ 2015
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_computer_networks_06_network_layer_md_124_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-computer-networks-06-network-layer-md-124.json
const site_docs_courses_computer_networks_06_network_layer_md_124_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/computer-networks/06-network-layer","title":"Chapter 6: The Network Layer","description":"Prerequisites Ethernet Switching — L2 forwarding and VLANs | Next Routing — IP forwarding to path selection","source":"@site/docs/courses/computer-networks/06-network-layer.md","sourceDirName":"courses/computer-networks","slug":"/computer-networks/06-network-layer","permalink":"/ai-engineering-journey/computer-networks/06-network-layer","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"id":"06-network-layer","slug":"/computer-networks/06-network-layer","title":"Chapter 6: The Network Layer","sidebar_label":"Chapter 6: The Network Layer","sidebar_position":6},"sidebar":"course-computer-networks","previous":{"title":"Chapter 5: Ethernet Switching","permalink":"/ai-engineering-journey/computer-networks/05-ethernet-switching"},"next":{"title":"Chapter 7: Routing","permalink":"/ai-engineering-journey/computer-networks/07-routing"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/courses/computer-networks/06-network-layer.md


const frontMatter = {
	id: '06-network-layer',
	slug: '/computer-networks/06-network-layer',
	title: 'Chapter 6: The Network Layer',
	sidebar_label: 'Chapter 6: The Network Layer',
	sidebar_position: 6
};
const contentTitle = 'Chapter 6: The Network Layer';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance",
  "level": 3
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
  "level": 3
}, {
  "value": "IPv4 Packet Header Structure",
  "id": "ipv4-packet-header-structure",
  "level": 3
}, {
  "value": "6.0 Network Layer Services",
  "id": "60-network-layer-services",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy",
  "level": 3
}, {
  "value": "Services Provided",
  "id": "services-provided",
  "level": 3
}, {
  "value": "Numbered Steps: Network Layer Delivery",
  "id": "numbered-steps-network-layer-delivery",
  "level": 3
}, {
  "value": "Pseudocode: Network Layer Forwarding",
  "id": "pseudocode-network-layer-forwarding",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis",
  "level": 3
}, {
  "value": "6.1 IPv4 Datagram Format",
  "id": "61-ipv4-datagram-format",
  "level": 2
}, {
  "value": "6.1.1 Header Fields",
  "id": "611-header-fields",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-1",
  "level": 3
}, {
  "value": "Numbered Steps: Parsing an IPv4 Header",
  "id": "numbered-steps-parsing-an-ipv4-header",
  "level": 3
}, {
  "value": "Pseudocode: parse_ipv4_header",
  "id": "pseudocode-parse_ipv4_header",
  "level": 3
}, {
  "value": "Dry Run: Hex Dump Trace",
  "id": "dry-run-hex-dump-trace",
  "level": 3
}, {
  "value": "C++ Implementation: IPv4 Header Parser",
  "id": "c-implementation-ipv4-header-parser",
  "level": 3
}, {
  "value": "Python Implementation: IPv4 Header Parser",
  "id": "python-implementation-ipv4-header-parser",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-1",
  "level": 3
}, {
  "value": "A&amp;D Table",
  "id": "ad-table",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases",
  "level": 3
}, {
  "value": "6.2 Fragmentation",
  "id": "62-fragmentation",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-2",
  "level": 3
}, {
  "value": "Numbered Steps: Fragmentation Algorithm",
  "id": "numbered-steps-fragmentation-algorithm",
  "level": 3
}, {
  "value": "Pseudocode: fragment_datagram",
  "id": "pseudocode-fragment_datagram",
  "level": 3
}, {
  "value": "Dry Run: 4000-byte Datagram, MTU 1500",
  "id": "dry-run-4000-byte-datagram-mtu-1500",
  "level": 3
}, {
  "value": "C++ Implementation: Fragmentation Simulator",
  "id": "c-implementation-fragmentation-simulator",
  "level": 3
}, {
  "value": "Python Implementation: Fragmentation Simulator",
  "id": "python-implementation-fragmentation-simulator",
  "level": 3
}, {
  "value": "Path MTU Discovery (PMTUD)",
  "id": "path-mtu-discovery-pmtud",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-2",
  "level": 3
}, {
  "value": "A&amp;D Table",
  "id": "ad-table-1",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-1",
  "level": 3
}, {
  "value": "6.3 IP Addressing",
  "id": "63-ip-addressing",
  "level": 2
}, {
  "value": "6.3.1 Classful Addressing",
  "id": "631-classful-addressing",
  "level": 3
}, {
  "value": "6.3.2 Subnetting",
  "id": "632-subnetting",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-3",
  "level": 4
}, {
  "value": "Numbered Steps: Subnet Calculation",
  "id": "numbered-steps-subnet-calculation",
  "level": 4
}, {
  "value": "Pseudocode: calculate_subnets",
  "id": "pseudocode-calculate_subnets",
  "level": 4
}, {
  "value": "Dry Run: 200.100.20.0/24 into 4 Subnets (50 hosts each)",
  "id": "dry-run-20010020024-into-4-subnets-50-hosts-each",
  "level": 4
}, {
  "value": "C++ Implementation: Subnet Calculator",
  "id": "c-implementation-subnet-calculator",
  "level": 3
}, {
  "value": "Python Implementation: Subnet Calculator",
  "id": "python-implementation-subnet-calculator",
  "level": 3
}, {
  "value": "6.3.3 CIDR (Classless Inter-Domain Routing)",
  "id": "633-cidr-classless-inter-domain-routing",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-4",
  "level": 4
}, {
  "value": "Numbered Steps: Route Aggregation",
  "id": "numbered-steps-route-aggregation",
  "level": 4
}, {
  "value": "Classful vs CIDR: Comparison",
  "id": "classful-vs-cidr-comparison",
  "level": 4
}, {
  "value": "TypeScript Implementation: SubnetCalculator with VLSM",
  "id": "typescript-implementation-subnetcalculator-with-vlsm",
  "level": 3
}, {
  "value": "6.4 Network Address Translation (NAT)",
  "id": "64-network-address-translation-nat",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-5",
  "level": 3
}, {
  "value": "Private Address Ranges (RFC 1918)",
  "id": "private-address-ranges-rfc-1918",
  "level": 3
}, {
  "value": "NAT Types",
  "id": "nat-types",
  "level": 3
}, {
  "value": "Numbered Steps: PAT (Most Common Form)",
  "id": "numbered-steps-pat-most-common-form",
  "level": 3
}, {
  "value": "Pseudocode: nat_translate",
  "id": "pseudocode-nat_translate",
  "level": 3
}, {
  "value": "Dry Run: PAT Translation Table",
  "id": "dry-run-pat-translation-table",
  "level": 3
}, {
  "value": "C++ Implementation: NAT Table Simulator",
  "id": "c-implementation-nat-table-simulator",
  "level": 3
}, {
  "value": "Python Implementation: NAT Simulator",
  "id": "python-implementation-nat-simulator",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-3",
  "level": 3
}, {
  "value": "A&amp;D Table",
  "id": "ad-table-2",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-2",
  "level": 3
}, {
  "value": "6.5 IPv6",
  "id": "65-ipv6",
  "level": 2
}, {
  "value": "6.5.1 IPv6 Header Format",
  "id": "651-ipv6-header-format",
  "level": 3
}, {
  "value": "6.5.2 IPv6 Address Types",
  "id": "652-ipv6-address-types",
  "level": 3
}, {
  "value": "6.5.3 IPv6 Address Shortening Rules",
  "id": "653-ipv6-address-shortening-rules",
  "level": 3
}, {
  "value": "6.5.4 Transition Mechanisms",
  "id": "654-transition-mechanisms",
  "level": 3
}, {
  "value": "6.6 Tunneling (IP-in-IP, GRE)",
  "id": "66-tunneling-ip-in-ip-gre",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-6",
  "level": 3
}, {
  "value": "Numbered Steps: Tunneling",
  "id": "numbered-steps-tunneling",
  "level": 3
}, {
  "value": "Pseudocode: tunnel_encapsulate",
  "id": "pseudocode-tunnel_encapsulate",
  "level": 3
}, {
  "value": "Dry Run: IP-in-IP Tunneling",
  "id": "dry-run-ip-in-ip-tunneling",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-4",
  "level": 3
}, {
  "value": "A&amp;D Table",
  "id": "ad-table-3",
  "level": 3
}, {
  "value": "6.7 Supporting Protocols",
  "id": "67-supporting-protocols",
  "level": 2
}, {
  "value": "6.7.1 ARP (Address Resolution Protocol)",
  "id": "671-arp-address-resolution-protocol",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-7",
  "level": 4
}, {
  "value": "Full ARP Sequence (Numbered)",
  "id": "full-arp-sequence-numbered",
  "level": 4
}, {
  "value": "ARP Cache Behavior",
  "id": "arp-cache-behavior",
  "level": 4
}, {
  "value": "Dry Run: ARP Packet Format",
  "id": "dry-run-arp-packet-format",
  "level": 4
}, {
  "value": "Pseudocode: arp_resolve",
  "id": "pseudocode-arp_resolve",
  "level": 4
}, {
  "value": "C++ Implementation: ARP Cache",
  "id": "c-implementation-arp-cache",
  "level": 3
}, {
  "value": "Python Implementation: ARP Cache with Request/Reply Simulation",
  "id": "python-implementation-arp-cache-with-requestreply-simulation",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-5",
  "level": 3
}, {
  "value": "A&amp;D Table",
  "id": "ad-table-4",
  "level": 3
}, {
  "value": "Edge Cases: ARP Spoofing",
  "id": "edge-cases-arp-spoofing",
  "level": 3
}, {
  "value": "TypeScript Implementation: ARPSimulator",
  "id": "typescript-implementation-arpsimulator",
  "level": 3
}, {
  "value": "6.7.2 DHCP",
  "id": "672-dhcp",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-8",
  "level": 4
}, {
  "value": "DHCP DORA Steps (Numbered)",
  "id": "dhcp-dora-steps-numbered",
  "level": 4
}, {
  "value": "Dry Run: DHCP DORA",
  "id": "dry-run-dhcp-dora",
  "level": 4
}, {
  "value": "Pseudocode: dhcp_dora",
  "id": "pseudocode-dhcp_dora",
  "level": 4
}, {
  "value": "C++ Implementation: DHCP Lease Manager",
  "id": "c-implementation-dhcp-lease-manager",
  "level": 3
}, {
  "value": "Python Implementation: DHCP DORA Simulator",
  "id": "python-implementation-dhcp-dora-simulator",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-6",
  "level": 3
}, {
  "value": "A&amp;D Table",
  "id": "ad-table-5",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-3",
  "level": 3
}, {
  "value": "6.7.3 ICMP",
  "id": "673-icmp",
  "level": 3
}, {
  "value": "Important Message Types",
  "id": "important-message-types",
  "level": 4
}, {
  "value": "ping and traceroute",
  "id": "ping-and-traceroute",
  "level": 4
}, {
  "value": "Pseudocode: traceroute",
  "id": "pseudocode-traceroute",
  "level": 4
}, {
  "value": "Dry Run: traceroute to 8.8.8.8",
  "id": "dry-run-traceroute-to-8888",
  "level": 4
}, {
  "value": "ICMP Rate Limiting",
  "id": "icmp-rate-limiting",
  "level": 4
}, {
  "value": "ICMP Tunneling (Covert Channel)",
  "id": "icmp-tunneling-covert-channel",
  "level": 4
}, {
  "value": "Python ping helper",
  "id": "python-ping-helper",
  "level": 4
}, {
  "value": "TypeScript Implementation: ICMPPacketHandler",
  "id": "typescript-implementation-icmppackethandler",
  "level": 3
}, {
  "value": "GRE Encapsulation Details",
  "id": "gre-encapsulation-details",
  "level": 3
}, {
  "value": "Tunnel Overhead Comparison",
  "id": "tunnel-overhead-comparison",
  "level": 4
}, {
  "value": "Pseudocode: GRE Tunnel Encapsulation/Decapsulation",
  "id": "pseudocode-gre-tunnel-encapsulationdecapsulation",
  "level": 4
}, {
  "value": "6.8 IPv4 vs IPv6: Comprehensive Comparison",
  "id": "68-ipv4-vs-ipv6-comprehensive-comparison",
  "level": 2
}, {
  "value": "6.9 Five-Layer Model: Network Layer Context",
  "id": "69-five-layer-model-network-layer-context",
  "level": 2
}, {
  "value": "6.10 Complexities at a Glance",
  "id": "610-complexities-at-a-glance",
  "level": 2
}, {
  "value": "6.11 Interview Corner",
  "id": "611-interview-corner",
  "level": 2
}, {
  "value": "IPv4 Exhaustion",
  "id": "ipv4-exhaustion",
  "level": 3
}, {
  "value": "NAT Traversal",
  "id": "nat-traversal",
  "level": 3
}, {
  "value": "IPv6 Transition Mechanisms",
  "id": "ipv6-transition-mechanisms",
  "level": 3
}, {
  "value": "Subnetting Shortcuts",
  "id": "subnetting-shortcuts",
  "level": 3
}, {
  "value": "Quick VLSM Reference",
  "id": "quick-vlsm-reference",
  "level": 3
}, {
  "value": "NAT Traversal Deep Dive",
  "id": "nat-traversal-deep-dive",
  "level": 3
}, {
  "value": "Fragmentation Attack Details",
  "id": "fragmentation-attack-details",
  "level": 3
}, {
  "value": "DHCP Deep Dive",
  "id": "dhcp-deep-dive",
  "level": 3
}, {
  "value": "6.12 Applications in Real Systems",
  "id": "612-applications-in-real-systems",
  "level": 2
}, {
  "value": "Linux netfilter/iptables",
  "id": "linux-netfilteriptables",
  "level": 3
}, {
  "value": "Windows TCP/IP Stack",
  "id": "windows-tcpip-stack",
  "level": 3
}, {
  "value": "Router ACLs (Cisco IOS)",
  "id": "router-acls-cisco-ios",
  "level": 3
}, {
  "value": "macOS Network Stack",
  "id": "macos-network-stack",
  "level": 3
}, {
  "value": "AWS VPC Networking (Cloud Analogs)",
  "id": "aws-vpc-networking-cloud-analogs",
  "level": 3
}, {
  "value": "Windows netstat and Network Diagnostics",
  "id": "windows-netstat-and-network-diagnostics",
  "level": 3
}, {
  "value": "Linux sysctl Network Layer Tuning",
  "id": "linux-sysctl-network-layer-tuning",
  "level": 3
}, {
  "value": "Complete Network Layer Diagnostic Flow",
  "id": "complete-network-layer-diagnostic-flow",
  "level": 3
}, {
  "value": "Network Layer Troubleshooting Cheat Sheet",
  "id": "network-layer-troubleshooting-cheat-sheet",
  "level": 3
}, {
  "value": "6.14 Key Formulas Reference",
  "id": "614-key-formulas-reference",
  "level": 2
}, {
  "value": "Case Study: IP Addressing Design for a Growing Enterprise",
  "id": "case-study-ip-addressing-design-for-a-growing-enterprise",
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
  "value": "6.13 Chapter Quiz",
  "id": "613-chapter-quiz",
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
  "value": "Implementation Problems",
  "id": "implementation-problems",
  "level": 3
}, {
  "value": "Challenge Problem",
  "id": "challenge-problem",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    arpa: "arpa",
    blockquote: "blockquote",
    code: "code",
    cstdint: "cstdint",
    details: "details",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
    iostream: "iostream",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    summary: "summary",
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
        id: "chapter-6-the-network-layer",
        children: "Chapter 6: The Network Layer"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prerequisites:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/computer-networks/05-ethernet-switching",
          children: "Chapter 5: Ethernet Switching"
        }), " — L2 forwarding and VLANs | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/computer-networks/07-routing",
          children: "Chapter 7: Routing"
        }), " — IP forwarding to path selection"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the IPv4 datagram format and explain the function of each header field."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perform IP fragmentation and reassembly calculations."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design IP addressing schemes using classful addressing, subnetting, CIDR, and VLSM."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the operation of NAT and its implications for end-to-end connectivity."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare IPv4 and IPv6 header formats and describe IPv6 address types."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze the protocols that support IP: DHCP, ARP, and ICMP."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement IPv4 header parsing, subnet calculation, ARP cache, and fragmentation simulation in C++ and Python."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze time and space complexity of network layer algorithms with reasoning."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Insight"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Practical Takeaway"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IPv4 Datagram"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20-byte header with frag, TTL, checksum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fragmentation is best avoided — use path MTU discovery"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Addressing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32-bit address, classful→CIDR evolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CIDR enables route aggregation; VLSM minimizes wasted addresses"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Port multiplexing shares one public IP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Breaks end-to-end connectivity; IPv6 is the real fix"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IPv6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128-bit address, no checksum, no fragmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flow label enables per-flow QoS; extension headers replace options"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DHCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated address assignment (DORA)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduces manual configuration errors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARP/ICMP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAC resolution and diagnostic messaging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARP is local-link only; ICMP enables ping/traceroute"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\r\n    A[Network Layer] --> B[IPv4]\r\n    A --> C[IPv6]\r\n    A --> D[Supporting Protocols]\r\n    B --> B1[Datagram Format]\r\n    B --> B2[Fragmentation]\r\n    B --> B3[Addressing / CIDR]\r\n    B --> B4[NAT]\r\n    C --> C1[Header / Address Types]\r\n    C --> C2[Transition Mechanisms]\r\n    D --> D1[DHCP / ARP / ICMP]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ipv4-packet-header-structure",
      children: "IPv4 Packet Header Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\r\n    subgraph IPv4_Header[\"IPv4 Packet Header (20-60 bytes)\"]\r\n        direction TB\r\n        subgraph Row1[\"Row 1 (32 bits)\"]\r\n            V[\"Version (4)\"]\r\n            IHL[\"IHL (4)\"]\r\n            DSCP[\"DSCP/ECN (8)\"]\r\n            TL[\"Total Length (16)\"]\r\n        end\r\n        subgraph Row2[\"Row 2 (32 bits)\"]\r\n            ID[\"Identification (16)\"]\r\n            F[\"Flags (3)\"]\r\n            FO[\"Fragment Offset (13)\"]\r\n        end\r\n        subgraph Row3[\"Row 3 (32 bits)\"]\r\n            TTL[\"TTL (8)\"]\r\n            PROTO[\"Protocol (8)\"]\r\n            CHK[\"Header Checksum (16)\"]\r\n        end\r\n        subgraph Row4[\"Row 4 (32 bits)\"]\r\n            SA[\"Source IP Address (32)\"]\r\n        end\r\n        subgraph Row5[\"Row 5 (32 bits)\"]\r\n            DA[\"Destination IP Address (32)\"]\r\n        end\r\n        subgraph Row6[\"Options (0-320 bits)\"]\r\n            OPT[\"Options & Padding\"]\r\n        end\r\n    end\r\n\r\n    classDef version fill:#4CAF50,stroke:#388E3C,color:#fff\r\n    classDef ihl fill:#2196F3,stroke:#1976D2,color:#fff\r\n    classDef dscp fill:#FF9800,stroke:#F57C00,color:#fff\r\n    classDef totLen fill:#9C27B0,stroke:#7B1FA2,color:#fff\r\n    classDef id fill:#E91E63,stroke:#C2185B,color:#fff\r\n    classDef flags fill:#00BCD4,stroke:#0097A7,color:#fff\r\n    classDef frag fill:#795548,stroke:#5D4037,color:#fff\r\n    classDef ttl fill:#FF5722,stroke:#E64A19,color:#fff\r\n    classDef proto fill:#607D8B,stroke:#455A64,color:#fff\r\n    classDef chk fill:#3F51B5,stroke:#303F9F,color:#fff\r\n    classDef src fill:#009688,stroke:#00796B,color:#fff\r\n    classDef dst fill:#673AB7,stroke:#512DA8,color:#fff\r\n    classDef opt fill:#FFC107,stroke:#FFA000,color:#000\r\n    class V version\r\n    class IHL ihl\r\n    class DSCP dscp\r\n    class TL totLen\r\n    class ID id\r\n    class F flags\r\n    class FO frag\r\n    class TTL ttl\r\n    class PROTO proto\r\n    class CHK chk\r\n    class SA src\r\n    class DA dst\r\n    class OPT opt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "60-network-layer-services",
      children: "6.0 Network Layer Services"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The network layer provides host-to-host communication across multiple links. Its primary services include logical addressing, routing, fragmentation, and error reporting."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The network layer is like a country's postal system. The IP address is the street address (logical, hierarchical), the MAC address is the person's name (physical, flat). Routing is the postal sorting center deciding which truck to put the package on. Fragmentation is splitting a large document into multiple envelopes when one envelope isn't big enough."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "services-provided",
      children: "Services Provided"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Service"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Real-World Analogy"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Logical Addressing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assigns unique IP addresses to hosts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Street address on an envelope"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Routing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Determines path from source to destination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Postal sorting and truck routing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fragmentation & Reassembly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Splits packets to fit link MTU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Splitting a document into multiple envelopes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Error Reporting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ICMP messages for unreachable hosts, TTL expired"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return-to-sender notification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quality of Service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DSCP marking for prioritization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Priority mail / express delivery"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps-network-layer-delivery",
      children: "Numbered Steps: Network Layer Delivery"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Encapsulation"
        }), ": Source host encapsulates transport-layer segment into an IP datagram."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Addressing"
        }), ": Source fills in its IP as source, destination host's IP as destination."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Routing Decision"
        }), ": Host checks routing table; if destination is remote, forwards to default gateway."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fragmentation (if needed)"
        }), ": If datagram exceeds outgoing link MTU, router fragments."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hop-by-Hop Forwarding"
        }), ": Each router decrements TTL, checks header, looks up next hop."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reassembly"
        }), ": Destination host reassembles fragments before passing to transport layer."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-network-layer-forwarding",
      children: "Pseudocode: Network Layer Forwarding"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function forward_packet(datagram, routing_table):\r\n    decrement TTL\r\n    if TTL <= 0:\r\n        send ICMP TTL Expired to source\r\n        discard\r\n        return\r\n    dest_ip = get_destination(datagram)\r\n    prefix = lookup_longest_prefix_match(routing_table, dest_ip)\r\n    if prefix not found:\r\n        send ICMP Destination Unreachable to source\r\n        discard\r\n        return\r\n    next_hop = get_next_hop(prefix)\r\n    if MTU(outgoing_interface) < datagram.length:\r\n        fragments = fragment(datagram, MTU)\r\n        for each fragment in fragments:\r\n            send_frame(fragment, next_hop)\r\n    else:\r\n        send_frame(datagram, next_hop)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Longest Prefix Match"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log N) with trie, O(N) linear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N = number of routing table entries; tries give log-time lookups"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fragmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(P) where P = number of fragments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each fragment gets a new header — linear in fragment count"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Header Checksum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed 20-byte header; compute in constant time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TTL Decrement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single integer operation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "61-ipv4-datagram-format",
      children: "6.1 IPv4 Datagram Format"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The IPv4 header is 20 bytes (minimum) to 60 bytes (with options)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "611-header-fields",
      children: "6.1.1 Header Fields"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Field"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Size (bits)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IP version number (4)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IHL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Header length in 32-bit words (min 5)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DSCP/ECN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Differentiated services and congestion notification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Total Length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entire datagram length in bytes (max 65,535)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Identification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unique datagram identifier for fragmentation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flags"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DF (Don't Fragment), MF (More Fragments)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fragment Offset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Offset of this fragment in 8-byte units"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TTL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time to Live (hop count limit)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Protocol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transport protocol (TCP=6, UDP=17, ICMP=1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Header Checksum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Checksum of header only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Source Address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Source IP address"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Destination Address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Destination IP address"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "variable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security, record route, timestamp, source routing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-1",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An IPv4 header is like a shipping label on a package: Version = shipping company, IHL = size of the label itself, Total Length = total package weight, Identification/Flags/Offset = \"Box 1 of 3, Box 2 of 3, Box 3 of 3\", TTL = \"If not delivered in 5 days return to sender\", Protocol = handling instructions (fragile/perishable), Source/Destination = return and delivery address."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps-parsing-an-ipv4-header",
      children: "Numbered Steps: Parsing an IPv4 Header"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read first byte: upper nibble = Version (must be 4), lower nibble = IHL (minimum 5)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute header length = IHL x 4 bytes. If IHL > 5, options are present."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read bytes 2-3: Total Length. Subtract header length to get payload size."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read bytes 4-5: Identification for reassembly matching."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read byte 6: upper 2 bits = flags (bit 1 = DF, bit 2 = MF)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read bytes 6-7: lower 13 bits = Fragment Offset x 8 = byte offset in original datagram."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read byte 8: TTL. Each router decrements by 1."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read byte 9: Protocol (TCP=6, UDP=17, ICMP=1, OSPF=89)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read bytes 10-11: Header Checksum. Verify."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read bytes 12-15: Source IP. Read bytes 16-19: Destination IP."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-parse_ipv4_header",
      children: "Pseudocode: parse_ipv4_header"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function parse_ipv4_header(data):\r\n    version = (data[0] >> 4) & 0x0F\r\n    ihl = data[0] & 0x0F\r\n    header_length = ihl * 4\r\n    dscp_ecn = data[1]\r\n    total_length = (data[2] << 8) | data[3]\r\n    identification = (data[4] << 8) | data[5]\r\n    flags = (data[6] >> 5) & 0x07\r\n    fragment_offset = ((data[6] & 0x1F) << 8) | data[7]\r\n    ttl = data[8]\r\n    protocol = data[9]\r\n    checksum = (data[10] << 8) | data[11]\r\n    src_ip = format_ipv4(data[12:16])\r\n    dst_ip = format_ipv4(data[16:20])\r\n    if version != 4:\r\n        error(\"Not an IPv4 datagram\")\r\n    if total_length < header_length:\r\n        error(\"Invalid header length\")\r\n    return {version, header_length, total_length, identification,\r\n            flags, fragment_offset, ttl, protocol, checksum, src_ip, dst_ip}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-hex-dump-trace",
      children: "Dry Run: Hex Dump Trace"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Hex dump: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "45 00 00 3C 1A 2B 40 00 40 06 1E 2E C0 A8 01 01 C0 A8 01 02"
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Byte Offset"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hex"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Field Parsed"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value (Decimal/Meaning)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x45"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Version=4, IHL=5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "v4, 20-byte header"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x00"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DSCP/ECN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best-effort (0)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2-3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x003C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Total Length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60 bytes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4-5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x1A2B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6699"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flags"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "010 = DF=0, MF=0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6-7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x4000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fragment Offset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "offset 0 (first/only fragment)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TTL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64 hops"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x06"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Protocol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6 = TCP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10-11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x1E2E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Header Checksum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7726 (verify: pass)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12-15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0xC0A80101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Source IP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "192.168.1.1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16-19"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0xC0A80102"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dest IP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "192.168.1.2"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation-ipv4-header-parser",
      children: "C++ Implementation: IPv4 Header Parser"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\n#include <cstdint>\r\n#include <cstring>\r\n#include <arpa/inet.h>\r\n\r\nstruct ipv4_header {\r\n    uint8_t  version_ihl;\r\n    uint8_t  dscp_ecn;\r\n    uint16_t total_length;\r\n    uint16_t identification;\r\n    uint16_t flags_offset;\r\n    uint8_t  ttl;\r\n    uint8_t  protocol;\r\n    uint16_t header_checksum;\r\n    uint32_t src_addr;\r\n    uint32_t dst_addr;\r\n} __attribute__((packed));\r\n\r\nvoid parse_ipv4(const uint8_t* packet) {\r\n    const ipv4_header* hdr = reinterpret_cast<const ipv4_header*>(packet);\r\n    uint8_t version = (hdr->version_ihl >> 4) & 0x0F;\r\n    uint8_t ihl = hdr->version_ihl & 0x0F;\r\n    uint16_t total_len = ntohs(hdr->total_length);\r\n    uint16_t id = ntohs(hdr->identification);\r\n    uint16_t flags = (ntohs(hdr->flags_offset) >> 13) & 0x07;\r\n    uint16_t frag_off = ntohs(hdr->flags_offset) & 0x1FFF;\r\n    char src_str[16], dst_str[16];\r\n    inet_ntop(AF_INET, &hdr->src_addr, src_str, sizeof(src_str));\r\n    inet_ntop(AF_INET, &hdr->dst_addr, dst_str, sizeof(dst_str));\r\n    std::cout << \"IPv4 Datagram:\\n\"\r\n              << \"  Version: \" << (int)version << \"\\n\"\r\n              << \"  IHL: \" << (int)ihl << \" (\" << (ihl * 4) << \" bytes)\\n\"\r\n              << \"  Total Length: \" << total_len << \"\\n\"\r\n              << \"  ID: 0x\" << std::hex << id << std::dec << \"\\n\"\r\n              << \"  Flags: \" << (int)flags << \" (DF=\" << ((flags>>1)&1)\r\n              << \", MF=\" << (flags&1) << \")\\n\"\r\n              << \"  Fragment Offset: \" << (frag_off * 8) << \"\\n\"\r\n              << \"  TTL: \" << (int)hdr->ttl << \"\\n\"\r\n              << \"  Protocol: \" << (int)hdr->protocol << \"\\n\"\r\n              << \"  Checksum: 0x\" << std::hex << ntohs(hdr->header_checksum)\r\n              << std::dec << \"\\n\"\r\n              << \"  Src: \" << src_str << \"\\n\"\r\n              << \"  Dst: \" << dst_str << \"\\n\";\r\n}\r\n\r\nint main() {\r\n    uint8_t packet[] = {\r\n        0x45, 0x00, 0x00, 0x3C, 0x1A, 0x2B, 0x40, 0x00,\r\n        0x40, 0x06, 0x1E, 0x2E, 0xC0, 0xA8, 0x01, 0x01,\r\n        0xC0, 0xA8, 0x01, 0x02\r\n    };\r\n    parse_ipv4(packet);\r\n    return 0;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-ipv4-header-parser",
      children: "Python Implementation: IPv4 Header Parser"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import struct\r\nimport socket\r\n\r\ndef parse_ipv4_header(data: bytes) -> dict:\r\n    if len(data) < 20:\r\n        raise ValueError(f\"Packet too short: {len(data)} bytes, need at least 20\")\r\n    version_ihl = data[0]\r\n    version = version_ihl >> 4\r\n    ihl = version_ihl & 0x0F\r\n    header_length = ihl * 4\r\n    if version != 4:\r\n        raise ValueError(f\"Not IPv4: version={version}\")\r\n    dscp_ecn = data[1]\r\n    total_length = struct.unpack('!H', data[2:4])[0]\r\n    identification = struct.unpack('!H', data[4:6])[0]\r\n    flags_offset = struct.unpack('!H', data[6:8])[0]\r\n    flags = (flags_offset >> 13) & 0x07\r\n    fragment_offset = flags_offset & 0x1FFF\r\n    ttl = data[8]\r\n    protocol = data[9]\r\n    checksum = struct.unpack('!H', data[10:12])[0]\r\n    src_ip = socket.inet_ntoa(data[12:16])\r\n    dst_ip = socket.inet_ntoa(data[16:20])\r\n    if total_length < header_length:\r\n        raise ValueError(\"Total length < header length\")\r\n    return {\r\n        'version': version,\r\n        'header_length': header_length,\r\n        'dscp_ecn': dscp_ecn,\r\n        'total_length': total_length,\r\n        'identification': identification,\r\n        'flags': {'DF': (flags >> 1) & 1, 'MF': flags & 1},\r\n        'fragment_offset': fragment_offset * 8,\r\n        'ttl': ttl,\r\n        'protocol': {1: 'ICMP', 6: 'TCP', 17: 'UDP', 89: 'OSPF'}.get(protocol, str(protocol)),\r\n        'protocol_num': protocol,\r\n        'checksum': checksum,\r\n        'src_ip': src_ip,\r\n        'dst_ip': dst_ip,\r\n    }\r\n\r\npacket = bytes([\r\n    0x45, 0x00, 0x00, 0x3C, 0x1A, 0x2B, 0x40, 0x00,\r\n    0x40, 0x06, 0x1E, 0x2E, 0xC0, 0xA8, 0x01, 0x01,\r\n    0xC0, 0xA8, 0x01, 0x02\r\n])\r\nparsed = parse_ipv4_header(packet)\r\nfor key, val in parsed.items():\r\n    print(f\"{key:20s}: {val}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-1",
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
            children: "Header parsing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed 20-byte header; constant field extraction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Checksum verification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16-bit one's complement sum over 20 bytes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Option parsing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(O)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O = number of option bytes (0-40); rarely used"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ad-table",
      children: "A&D Table"
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
            children: "Fixed header start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple parsing, hardware-optimized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wastes bytes when no options used"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Variable options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flexibility for debugging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security risk (source routing attacks)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Header checksum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Catches header corruption in-flight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redundant with L2 + L4 checksums"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Protocol field"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiplexing demux"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8-bit limit = 256 protocols"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IHL < 5"
        }), ": Malformed packet, should be discarded."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Total Length < 20"
        }), ": Impossible header, discard."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Total Length > 65535"
        }), ": Exceeds 16-bit field; fragment or discard."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version != 4"
        }), ": Not IPv4; could be IPv6 (version field is same position)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "62-fragmentation",
      children: "6.2 Fragmentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When a datagram exceeds the Maximum Transmission Unit (MTU) of an outgoing link, the router fragments it."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-2",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fragmentation is like sending a large textbook through the mail. The post office has a weight limit per box (MTU). You split the book into chapters (fragments), number each box (identification + offset), mark \"more to come\" except the last one (MF flag), and the recipient reassembles them in order."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps-fragmentation-algorithm",
      children: "Numbered Steps: Fragmentation Algorithm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Check"
        }), ": If datagram length > outgoing MTU, proceed to fragment."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Calculate Payload per Fragment"
        }), ": Each fragment carries (MTU - 20) bytes of payload, aligned to 8-byte boundary: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "max_payload = ((MTU - 20) / 8) * 8"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Initialize Offset"
        }), ": Start at offset 0 (in bytes)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Create Fragments"
        }), ": For each piece, copy original header, set total length = 20 + payload_size, set fragment offset = current_offset/8, set MF=1 (except last)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Last Fragment"
        }), ": Set MF=0 to indicate end."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transmit"
        }), ": Send each fragment independently."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reassembly"
        }), ": Receiver uses {src_ip, dst_ip, protocol, identification} as reassembly key. Buffers fragments until all received or timeout."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-fragment_datagram",
      children: "Pseudocode: fragment_datagram"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function fragment_datagram(datagram, mtu):\r\n    header_size = 20\r\n    payload = datagram[header_size:]\r\n    max_payload = ((mtu - header_size) / 8) * 8\r\n    fragments = []\r\n    offset = 0\r\n    while offset < len(payload):\r\n        is_last = (offset + max_payload >= len(payload))\r\n        frag_payload_size = min(max_payload, len(payload) - offset)\r\n        frag_header = copy_header(datagram)\r\n        frag_header.total_length = header_size + frag_payload_size\r\n        frag_header.fragment_offset = offset / 8\r\n        frag_header.flags.MF = 0 if is_last else 1\r\n        fragment = frag_header + payload[offset:offset + frag_payload_size]\r\n        fragments.append(fragment)\r\n        offset += frag_payload_size\r\n    return fragments\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-4000-byte-datagram-mtu-1500",
      children: "Dry Run: 4000-byte Datagram, MTU 1500"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Original: 4000 bytes total (20 header + 3980 payload), ID=0x1A2B."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Per-fragment payload = ((1500 - 20) / 8) * 8 = (1480 / 8) * 8 = 185 * 8 = 1480 bytes."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Fragment"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Payload Range"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Offset (bytes)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Offset (8-byte units)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "MF"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Total Length"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-1479"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1500"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1480-2959"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1480"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "185"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1500"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2960-3979"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2960"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "370"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1040"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reassembly Check"
      }), ": Last offset (370) * 8 = 2960. Last payload = 1040 - 20 = 1020. Total = 2960 + 1020 = 3980. Matches original payload. ✓"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation-fragmentation-simulator",
      children: "C++ Implementation: Fragmentation Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\n#include <vector>\r\n#include <cstdint>\r\n#include <algorithm>\r\n\r\nstruct fragment {\r\n    uint16_t offset;\r\n    uint16_t length;\r\n    bool more_fragments;\r\n    uint16_t id;\r\n    std::vector<uint8_t> data;\r\n};\r\n\r\nstd::vector<fragment> fragment_datagram(\r\n    const std::vector<uint8_t>& datagram, uint16_t mtu, uint16_t identification\r\n) {\r\n    const int HEADER = 20;\r\n    std::vector<fragment> result;\r\n    int max_payload = ((mtu - HEADER) / 8) * 8;\r\n    if (max_payload <= 0) return result;\r\n    int payload_size = datagram.size() - HEADER;\r\n    int offset = 0;\r\n    while (offset < payload_size) {\r\n        bool is_last = (offset + max_payload >= payload_size);\r\n        int frag_payload = std::min(max_payload, payload_size - offset);\r\n        fragment f;\r\n        f.offset = offset;\r\n        f.length = HEADER + frag_payload;\r\n        f.more_fragments = !is_last;\r\n        f.id = identification;\r\n        f.data.assign(datagram.begin() + HEADER + offset,\r\n                      datagram.begin() + HEADER + offset + frag_payload);\r\n        result.push_back(f);\r\n        offset += frag_payload;\r\n    }\r\n    return result;\r\n}\r\n\r\nint main() {\r\n    std::vector<uint8_t> datagram(4000, 0xFF);\r\n    auto frags = fragment_datagram(datagram, 1500, 0x1A2B);\r\n    for (size_t i = 0; i < frags.size(); i++) {\r\n        auto& f = frags[i];\r\n        std::cout << \"Fragment \" << (i + 1)\r\n                  << \": offset=\" << f.offset\r\n                  << \", len=\" << f.length\r\n                  << \", MF=\" << f.more_fragments\r\n                  << \", ID=0x\" << std::hex << f.id << std::dec << \"\\n\";\r\n    }\r\n    return 0;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-fragmentation-simulator",
      children: "Python Implementation: Fragmentation Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass, field\r\n\r\n@dataclass\r\nclass Fragment:\r\n    offset: int\r\n    length: int\r\n    more_fragments: bool\r\n    id: int\r\n    data: bytes = field(repr=False)\r\n\r\n\r\ndef fragment_datagram(datagram: bytes, mtu: int, identification: int) -> list[Fragment]:\r\n    HEADER = 20\r\n    max_payload = ((mtu - HEADER) // 8) * 8\r\n    if max_payload <= 0:\r\n        raise ValueError(f\"MTU {mtu} too small, need at least {HEADER + 8}\")\r\n    payload = datagram[HEADER:]\r\n    fragments = []\r\n    offset = 0\r\n    while offset < len(payload):\r\n        frag_payload = min(max_payload, len(payload) - offset)\r\n        is_last = (offset + max_payload >= len(payload))\r\n        f = Fragment(\r\n            offset=offset,\r\n            length=HEADER + frag_payload,\r\n            more_fragments=not is_last,\r\n            id=identification,\r\n            data=payload[offset:offset + frag_payload]\r\n        )\r\n        fragments.append(f)\r\n        offset += frag_payload\r\n    return fragments\r\n\r\n\r\ndef reassemble(fragments: list[Fragment]) -> bytes:\r\n    sorted_frags = sorted(fragments, key=lambda f: f.offset)\r\n    payload = bytearray()\r\n    for f in sorted_frags:\r\n        payload.extend(f.data)\r\n    return bytes(payload)\r\n\r\n\r\ndatagram = b'\\x45' + b'\\x00' * 19 + b'A' * 3980\r\nfrags = fragment_datagram(datagram, 1500, 0x1A2B)\r\nfor i, f in enumerate(frags, 1):\r\n    print(f\"Fragment {i}: offset={f.offset}, len={f.length}, MF={f.more_fragments}, id=0x{f.id:04X}\")\r\nprint(f\"Reassembled payload size: {len(reassemble(frags))} (expected: 3980)\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "path-mtu-discovery-pmtud",
      children: "Path MTU Discovery (PMTUD)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Source sends datagrams with DF (Don't Fragment) flag set."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If a router cannot forward due to MTU, it drops the packet and sends ICMP \"Fragmentation Needed\" (Type 3, Code 4) with the next-hop MTU."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Source reduces its datagram size and retransmits."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Process repeats until packets reach destination without ICMP errors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Source caches the PMTU for the path (typically 10-minute timeout)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-2",
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
            children: "Fragmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N = payload bytes; each byte copied once into a fragment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reassembly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(F + P)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(P)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F = fragments, P = payload; sort F fragments, buffer P bytes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PMTUD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(H)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "H = path hops; at most one probe per hop"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ad-table-1",
      children: "A&D Table"
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
            children: "Router fragmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any router can fragment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Losing one fragment loses entire datagram"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PMTUD (IPv6)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Avoids fragmentation entirely"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires ICMP; some networks block ICMP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8-byte alignment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simplifies offset arithmetic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wastes up to 7 bytes per fragment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MF flag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signals end of fragments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single lost MF=1 fragment causes reassembly failure"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-1",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fragmentation Overlap Attack"
        }), ": Attacker sends overlapping fragment offsets to bypass firewall rules. Defense: firewalls reassemble before inspection or reject overlapping fragments."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fragmentation Flood"
        }), ": Attacker sends first fragment of many datagrams without last fragments, exhausting reassembly buffers. Defense: limit concurrent reassembly contexts (e.g., Linux ", (0,jsx_runtime.jsx)(_components.code, {
          children: "net.ipv4.ipfrag_max_dist"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Missing Fragment"
        }), ": Reassembly times out after 60 seconds. Receiver drops all fragments for that datagram. Sender retransmits (handled by TCP)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MTU < 68"
        }), ": Minimum IPv4 datagram is 68 bytes (20 header + minimum 48 bytes payload). A link with MTU < 68 cannot carry IP."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "63-ip-addressing",
      children: "6.3 IP Addressing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every IPv4 interface has a 32-bit address, typically written in dotted-decimal notation."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "631-classful-addressing",
      children: "6.3.1 Classful Addressing"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Class"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Prefix"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Network Bits"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Host Bits"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Address Range"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hosts/Network"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.0.0.0 - 127.255.255.255"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16,777,214"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128.0.0.0 - 191.255.255.255"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "65,534"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "110"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "192.0.0.0 - 223.255.255.255"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "254"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1110"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "multicast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "224.0.0.0 - 239.255.255.255"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1111"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "reserved"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "240.0.0.0 - 255.255.255.255"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "632-subnetting",
      children: "6.3.2 Subnetting"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Subnetting borrows host bits to create a subnet number, improving address utilization."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-3",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Classful addressing is like assigning every building a block of 100 mailboxes even if it only needs 5. Subnetting is like subdividing those mailboxes into smaller sets per floor — you use what you need and waste less."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "numbered-steps-subnet-calculation",
      children: "Numbered Steps: Subnet Calculation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Determine Requirements"
        }), ": N subnets, each with at least H hosts."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Calculate Host Bits"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "h = ceil(log2(H + 2))"
        }), " (2 reserved: network + broadcast)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Calculate Subnet Bits"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "s = ceil(log2(N))"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ensure s + h <= available host bits"
        }), " (32 - original prefix)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "New Prefix Length"
        }), ": original_prefix + s."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Subnet Size"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "2^(32 - new_prefix)"
        }), " addresses per subnet."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Usable Hosts"
        }), ": subnet_size - 2."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Enumerate Subnets"
        }), ": Increment the subnet portion by 1 each time."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-calculate_subnets",
      children: "Pseudocode: calculate_subnets"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function calculate_subnets(base_network, prefix_len, num_subnets, min_hosts):\r\n    host_bits_per_subnet = 32 - prefix_len\r\n    needed_host_bits = ceil(log2(min_hosts + 2))\r\n    needed_subnet_bits = ceil(log2(num_subnets))\r\n    if needed_host_bits + needed_subnet_bits > host_bits_per_subnet:\r\n        error(\"Not enough bits\")\r\n    new_prefix = prefix_len + needed_subnet_bits\r\n    subnet_size = 2 ^ (32 - new_prefix)\r\n    subnets = []\r\n    base_int = ip_to_int(base_network)\r\n    for i in 0 to num_subnets - 1:\r\n        subnet_int = base_int + (i << (32 - new_prefix))\r\n        subnet_addr = int_to_ip(subnet_int)\r\n        broadcast_int = subnet_int + subnet_size - 1\r\n        subnets.append({\r\n            subnet: subnet_addr,\r\n            first_host: int_to_ip(subnet_int + 1),\r\n            last_host: int_to_ip(broadcast_int - 1),\r\n            broadcast: int_to_ip(broadcast_int),\r\n            mask: new_prefix\r\n        })\r\n    return subnets\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-20010020024-into-4-subnets-50-hosts-each",
      children: "Dry Run: 200.100.20.0/24 into 4 Subnets (50 hosts each)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Available host bits: 32 - 24 = 8."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Needed host bits: ceil(log2(50 + 2)) = ceil(log2(52)) = 6 bits (64 addresses, 62 usable)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Needed subnet bits: ceil(log2(4)) = 2 bits."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check: 6 + 2 = 8 <= 8. OK."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New prefix: 24 + 2 = /26."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Subnet size: 2^(32-26) = 64 addresses. Usable: 62."
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Subnet"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Network Address"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "First Host"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Last Host"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Broadcast"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CIDR"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200.100.20.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200.100.20.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200.100.20.62"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200.100.20.63"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/26"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200.100.20.64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200.100.20.65"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200.100.20.126"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200.100.20.127"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/26"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200.100.20.128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200.100.20.129"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200.100.20.190"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200.100.20.191"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/26"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200.100.20.192"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200.100.20.193"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200.100.20.254"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200.100.20.255"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/26"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Check"
      }), ": Subnet 1 = base + 1 x 64 = 200.100.20.64. ✓"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation-subnet-calculator",
      children: "C++ Implementation: Subnet Calculator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\n#include <vector>\r\n#include <cmath>\r\n#include <string>\r\n#include <cstdint>\r\n\r\nuint32_t ip_to_int(const std::string& ip) {\r\n    uint8_t a, b, c, d;\r\n    sscanf(ip.c_str(), \"%hhu.%hhu.%hhu.%hhu\", &a, &b, &c, &d);\r\n    return (a << 24) | (b << 16) | (c << 8) | d;\r\n}\r\n\r\nstd::string int_to_ip(uint32_t ip) {\r\n    return std::to_string((ip >> 24) & 0xFF) + \".\" +\r\n           std::to_string((ip >> 16) & 0xFF) + \".\" +\r\n           std::to_string((ip >> 8) & 0xFF) + \".\" +\r\n           std::to_string(ip & 0xFF);\r\n}\r\n\r\nstruct subnet_info {\r\n    std::string network;\r\n    std::string first_host;\r\n    std::string last_host;\r\n    std::string broadcast;\r\n    int prefix;\r\n    int size;\r\n};\r\n\r\nstd::vector<subnet_info> calculate_subnets(\r\n    const std::string& base, int orig_pfx, int num, int min_h\r\n) {\r\n    int avail = 32 - orig_pfx;\r\n    int need_h = std::ceil(std::log2(min_h + 2));\r\n    int need_s = std::ceil(std::log2(num));\r\n    if (need_h + need_s > avail) return {};\r\n    int new_pfx = orig_pfx + need_s;\r\n    int sz = 1 << (32 - new_pfx);\r\n    uint32_t base_int = ip_to_int(base);\r\n    std::vector<subnet_info> r;\r\n    for (int i = 0; i < num; i++) {\r\n        uint32_t net = base_int + (i * sz);\r\n        uint32_t bcast = net + sz - 1;\r\n        r.push_back({int_to_ip(net), int_to_ip(net + 1),\r\n                     int_to_ip(bcast - 1), int_to_ip(bcast), new_pfx, sz});\r\n    }\r\n    return r;\r\n}\r\n\r\nint main() {\r\n    auto s = calculate_subnets(\"200.100.20.0\", 24, 4, 50);\r\n    for (size_t i = 0; i < s.size(); i++)\r\n        std::cout << \"Subnet \" << i << \": \" << s[i].network << \"/\" << s[i].prefix\r\n                  << \" [\" << s[i].first_host << \" - \" << s[i].last_host\r\n                  << \"] bcast=\" << s[i].broadcast << \"\\n\";\r\n    return 0;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-subnet-calculator",
      children: "Python Implementation: Subnet Calculator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import ipaddress, math\r\n\r\ndef calculate_subnets(base: str, prefix: int, count: int, min_hosts: int) -> list[dict]:\r\n    avail = 32 - prefix\r\n    need_h = math.ceil(math.log2(min_hosts + 2))\r\n    need_s = math.ceil(math.log2(count))\r\n    if need_h + need_s > avail:\r\n        raise ValueError(f\"Need {need_h + need_s} bits, {avail} available\")\r\n    new_pfx = prefix + need_s\r\n    sz = 1 << (32 - new_pfx)\r\n    base_int = int(ipaddress.IPv4Address(base))\r\n    result = []\r\n    for i in range(count):\r\n        net_int = base_int + i * sz\r\n        bcast = net_int + sz - 1\r\n        result.append({\r\n            'subnet': str(ipaddress.IPv4Address(net_int)),\r\n            'first': str(ipaddress.IPv4Address(net_int + 1)),\r\n            'last': str(ipaddress.IPv4Address(bcast - 1)),\r\n            'bcast': str(ipaddress.IPv4Address(bcast)),\r\n            'prefix': f\"/{new_pfx}\",\r\n            'size': sz,\r\n            'usable': sz - 2,\r\n        })\r\n    return result\r\n\r\nsubnets = calculate_subnets(\"200.100.20.0\", 24, 4, 50)\r\nfor i, s in enumerate(subnets):\r\n    print(f\"Subnet {i}: {s['subnet']:15s} {s['first']:15s} - {s['last']:15s} bcast={s['bcast']:15s} mask={s['prefix']} size={s['size']} usable={s['usable']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "633-cidr-classless-inter-domain-routing",
      children: "6.3.3 CIDR (Classless Inter-Domain Routing)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CIDR (RFC 1519) eliminates the class concept. A prefix-length notation (e.g., /20) specifies the network portion. CIDR enables route aggregation."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-4",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Instead of allocating entire /8 or /16 blocks (like giving every organization an entire zip code), CIDR allocates exactly the prefix length needed (like assigning just enough zip+4 codes). Aggregation combines 16 small zip codes into one regional sorting center entry."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "numbered-steps-route-aggregation",
      children: "Numbered Steps: Route Aggregation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "List prefixes"
        }), " to aggregate."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sort by prefix length"
        }), ", shortest first."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Check contiguity"
        }), ": All addresses must form a contiguous block aligned to the new prefix boundary."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "New prefix"
        }), ": If 2^k contiguous /N networks, aggregate to /(N-k)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Verify"
        }), ": Base address must be divisible by 2^(32 - new_prefix)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "classful-vs-cidr-comparison",
      children: "Classful vs CIDR: Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Classful"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CIDR"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Allocation unit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed /8, /16, /24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arbitrary prefix length"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Wasted addresses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~50-70% (Class B)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Near zero (VLSM)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Routing table size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~100K+ (1994 peak)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~20K after aggregation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Subnet mask"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implied by class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explicitly carried with route"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Aggregation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not possible across classes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prefix aggregation (supernetting)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Notation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "By class (A, B, C)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/N notation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VLSM support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Year introduced"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1981 (RFC 791)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1993 (RFC 1519)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-implementation-subnetcalculator-with-vlsm",
      children: "TypeScript Implementation: SubnetCalculator with VLSM"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface SubnetConfig {\r\n  baseNetwork: string;\r\n  prefixLength: number;\r\n  numSubnets: number;\r\n  minHosts: number;\r\n}\r\n\r\ninterface SubnetInfo {\r\n  networkAddress: string;\r\n  firstHost: string;\r\n  lastHost: string;\r\n  broadcastAddress: string;\r\n  prefix: number;\r\n  totalAddresses: number;\r\n  usableHosts: number;\r\n  subnetMask: string;\r\n}\r\n\r\nclass SubnetCalculator {\r\n  private ipToNumber(ip: string): number {\r\n    const octets = ip.split('.').map(Number);\r\n    return (octets[0] << 24) | (octets[1] << 16) | (octets[2] << 8) | octets[3];\r\n  }\r\n\r\n  private numberToIp(num: number): string {\r\n    return [\r\n      (num >>> 24) & 0xFF,\r\n      (num >>> 16) & 0xFF,\r\n      (num >>> 8) & 0xFF,\r\n      num & 0xFF\r\n    ].join('.');\r\n  }\r\n\r\n  public cidrToMask(prefix: number): string {\r\n    const mask = ~0 << (32 - prefix);\r\n    return this.numberToIp(mask >>> 0);\r\n  }\r\n\r\n  public calculateSubnets(config: SubnetConfig): SubnetInfo[] {\r\n    const { baseNetwork, prefixLength, numSubnets, minHosts } = config;\r\n    const availableBits = 32 - prefixLength;\r\n    const neededHostBits = Math.ceil(Math.log2(minHosts + 2));\r\n    const neededSubnetBits = Math.ceil(Math.log2(numSubnets));\r\n\r\n    if (neededHostBits + neededSubnetBits > availableBits) {\r\n      throw new Error(`Insufficient bits: need ${neededHostBits + neededSubnetBits}, available ${availableBits}`);\r\n    }\r\n\r\n    const newPrefix = prefixLength + neededSubnetBits;\r\n    const subnetSize = 1 << (32 - newPrefix);\r\n    const baseInt = this.ipToNumber(baseNetwork);\r\n    const result: SubnetInfo[] = [];\r\n\r\n    for (let i = 0; i < numSubnets; i++) {\r\n      const netAddr = baseInt + (i * subnetSize);\r\n      const bcastAddr = netAddr + subnetSize - 1;\r\n      result.push({\r\n        networkAddress: this.numberToIp(netAddr),\r\n        firstHost: this.numberToIp(netAddr + 1),\r\n        lastHost: this.numberToIp(bcastAddr - 1),\r\n        broadcastAddress: this.numberToIp(bcastAddr),\r\n        prefix: newPrefix,\r\n        totalAddresses: subnetSize,\r\n        usableHosts: subnetSize - 2,\r\n        subnetMask: this.cidrToMask(newPrefix),\r\n      });\r\n    }\r\n    return result;\r\n  }\r\n\r\n  public calculateVLSM(baseNetwork: string, hostsRequired: number[]): SubnetInfo[] {\r\n    let currentBase = this.ipToNumber(baseNetwork);\r\n    const results: SubnetInfo[] = [];\r\n\r\n    const sorted = [...hostsRequired].sort((a, b) => b - a);\r\n\r\n    for (const hosts of sorted) {\r\n      const hostBits = Math.ceil(Math.log2(hosts + 2));\r\n      const prefix = 32 - hostBits;\r\n      const size = 1 << hostBits;\r\n\r\n      results.push({\r\n        networkAddress: this.numberToIp(currentBase),\r\n        firstHost: this.numberToIp(currentBase + 1),\r\n        lastHost: this.numberToIp(currentBase + size - 2),\r\n        broadcastAddress: this.numberToIp(currentBase + size - 1),\r\n        prefix,\r\n        totalAddresses: size,\r\n        usableHosts: size - 2,\r\n        subnetMask: this.cidrToMask(prefix),\r\n      });\r\n\r\n      currentBase += size;\r\n    }\r\n    return results;\r\n  }\r\n}\r\n\r\n// Usage example\r\nconst calc = new SubnetCalculator();\r\nconst subnets = calc.calculateSubnets({\r\n  baseNetwork: '200.100.20.0',\r\n  prefixLength: 24,\r\n  numSubnets: 4,\r\n  minHosts: 50,\r\n});\r\nconsole.log('Subnets:');\r\nsubnets.forEach((s, i) => {\r\n  console.log(`Subnet ${i}: ${s.networkAddress}/${s.prefix} [${s.firstHost} - ${s.lastHost}] bcast=${s.broadcastAddress} mask=${s.subnetMask}`);\r\n});\r\n// Output:\r\n// Subnet 0: 200.100.20.0/26 [200.100.20.1 - 200.100.20.62] bcast=200.100.20.63 mask=255.255.255.192\r\n// Subnet 1: 200.100.20.64/26 [200.100.20.65 - 200.100.20.126] bcast=200.100.20.127 mask=255.255.255.192\r\n// Subnet 2: 200.100.20.128/26 [200.100.20.129 - 200.100.20.190] bcast=200.100.20.191 mask=255.255.255.192\r\n// Subnet 3: 200.100.20.192/26 [200.100.20.193 - 200.100.20.254] bcast=200.100.20.255 mask=255.255.255.192\r\n\r\nconst vlsmSubnets = calc.calculateVLSM('10.0.0.0', [100, 50, 30, 10]);\r\nconsole.log('\\nVLSM Subnets:');\r\nvlsmSubnets.forEach((s, i) => {\r\n  console.log(`VLSM ${i}: ${s.networkAddress}/${s.prefix} (${s.usableHosts} usable hosts)`);\r\n});\r\n// Output:\r\n// VLSM 0: 10.0.0.0/25 (126 usable hosts)\r\n// VLSM 1: 10.0.0.128/26 (62 usable hosts)\r\n// VLSM 2: 10.0.0.192/27 (30 usable hosts)\r\n// VLSM 3: 10.0.0.224/28 (14 usable hosts)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "64-network-address-translation-nat",
      children: "6.4 Network Address Translation (NAT)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NAT (RFC 3022) maps private IP addresses to a public IP address using port multiplexing."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-5",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NAT is like a company switchboard operator (PBX). Everyone inside has an extension number (private IP). When someone calls out, the operator connects them using one of the company's outside lines (public IPs), remembering which extension is on which line."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "private-address-ranges-rfc-1918",
      children: "Private Address Ranges (RFC 1918)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "10.0.0.0/8 (16,777,216 addresses)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "172.16.0.0/12 (1,048,576 addresses)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "192.168.0.0/16 (65,536 addresses)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nat-types",
      children: "NAT Types"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Acronym"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Direction"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Source NAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SNAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Translates source IP:port of outbound packets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Private→Public"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Destination NAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Translates destination IP:port of inbound packets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Public→Private"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Port Address Translation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Many private IPs → one public IP using unique ports"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiplexing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Static NAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1:1 NAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One private IP permanently mapped to one public IP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bidirectional"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic NAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pool NAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Private IP mapped from a pool of public IPs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Outbound"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps-pat-most-common-form",
      children: "Numbered Steps: PAT (Most Common Form)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Internal host (192.168.1.10:3345) sends packet to web server (203.0.113.5:80)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NAT router receives packet on its internal interface."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Router checks NAT table: is there a mapping for (192.168.1.10, 3345)?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If no: router allocates a new public port (e.g., 50001) from the pool."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Router rewrites source IP to its public IP (198.51.100.1) and source port to 50001."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Entry added: (192.168.1.10:3345) ↔ (198.51.100.1:50001)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Response arrives at 198.51.100.1:50001. Router looks up port 50001 in NAT table."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Router rewrites destination IP:port to 192.168.1.10:3345 and forwards internally."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If no activity for timeout period (60-300s), entry removed."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-nat_translate",
      children: "Pseudocode: nat_translate"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function nat_translate(packet, nat_table, public_ip):\r\n    if packet.direction == INBOUND:\r\n        entry = nat_table.lookup_by_public(packet.dst_port)\r\n        if entry not found:\r\n            drop packet (unsolicited inbound)\r\n            return\r\n        rewrite_destination(packet, entry.private_ip, entry.private_port)\r\n    else:\r\n        key = (packet.src_ip, packet.src_port)\r\n        entry = nat_table.lookup_by_private(key)\r\n        if entry not found:\r\n            public_port = allocate_port()\r\n            nat_table.add(key, (public_ip, public_port))\r\n            entry = nat_table.lookup_by_private(key)\r\n        rewrite_source(packet, public_ip, entry.public_port)\r\n    forward(packet)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-pat-translation-table",
      children: "Dry Run: PAT Translation Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Private (src)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Private (dst)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "After SNAT (src)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "After DNAT response (dst)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "192.168.1.10:3345"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "203.0.113.5:80"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "198.51.100.1:50001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "192.168.1.20:4422"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "203.0.113.5:80"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "198.51.100.1:50002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "192.168.1.10:3346"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8.8.8.8:53"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "198.51.100.1:50003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Response for 50001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "192.168.1.10:3345"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Response for 50002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "192.168.1.20:4422"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Response for 50003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "192.168.1.10:3346"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NAT Table after steps 1-3:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Private"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Public"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "State"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "192.168.1.10:3345"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "198.51.100.1:50001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP EST"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "192.168.1.20:4422"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "198.51.100.1:50002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP EST"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "192.168.1.10:3346"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "198.51.100.1:50003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UDP (60s)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation-nat-table-simulator",
      children: "C++ Implementation: NAT Table Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\n#include <unordered_map>\r\n#include <string>\r\n#include <cstdint>\r\n\r\nstruct nat_entry {\r\n    std::string private_ip;\r\n    uint16_t    private_port;\r\n    std::string public_ip;\r\n    uint16_t    public_port;\r\n    bool        established;\r\n};\r\n\r\nclass nat_table {\r\n    std::unordered_map<std::string, nat_entry> priv_map;\r\n    std::unordered_map<uint16_t, nat_entry>    port_map;\r\n    uint16_t next_port;\r\n    std::string pub_ip;\r\n\r\n    std::string key(const std::string& ip, uint16_t p) {\r\n        return ip + \":\" + std::to_string(p);\r\n    }\r\n\r\npublic:\r\n    nat_table(const std::string& pub) : next_port(50000), pub_ip(pub) {}\r\n\r\n    nat_entry translate_out(const std::string& ip, uint16_t port) {\r\n        auto it = priv_map.find(key(ip, port));\r\n        if (it != priv_map.end()) return it->second;\r\n        nat_entry e{ip, port, pub_ip, next_port++, true};\r\n        priv_map[key(ip, port)] = e;\r\n        port_map[e.public_port] = e;\r\n        return e;\r\n    }\r\n\r\n    nat_entry* translate_in(uint16_t dst_port) {\r\n        auto it = port_map.find(dst_port);\r\n        return (it != port_map.end()) ? &it->second : nullptr;\r\n    }\r\n\r\n    void print() {\r\n        std::cout << \"\\nNAT Table:\\n\";\r\n        for (auto& [_, e] : priv_map)\r\n            std::cout << \"  \" << e.private_ip << \":\" << e.private_port\r\n                      << \" <-> \" << e.public_ip << \":\" << e.public_port << \"\\n\";\r\n    }\r\n};\r\n\r\nint main() {\r\n    nat_table nat(\"198.51.100.1\");\r\n    auto e1 = nat.translate_out(\"192.168.1.10\", 3345);\r\n    auto e2 = nat.translate_out(\"192.168.1.20\", 4422);\r\n    auto e3 = nat.translate_out(\"192.168.1.10\", 3346);\r\n    auto* rev = nat.translate_in(e1.public_port);\r\n    if (rev) std::cout << \"Response -> \" << rev->private_ip << \":\" << rev->private_port << \"\\n\";\r\n    nat.print();\r\n    return 0;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-nat-simulator",
      children: "Python Implementation: NAT Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass, field\r\n\r\n@dataclass\r\nclass NATEntry:\r\n    private_ip: str\r\n    private_port: int\r\n    public_ip: str\r\n    public_port: int\r\n\r\nclass NATTable:\r\n    def __init__(self, public_ip: str = \"198.51.100.1\"):\r\n        self.public_ip = public_ip\r\n        self._priv: dict[tuple[str, int], NATEntry] = {}\r\n        self._pub: dict[int, NATEntry] = {}\r\n        self._next = 50000\r\n\r\n    def translate_out(self, src_ip: str, src_port: int) -> NATEntry:\r\n        key = (src_ip, src_port)\r\n        if key in self._priv:\r\n            return self._priv[key]\r\n        e = NATEntry(src_ip, src_port, self.public_ip, self._next)\r\n        self._next += 1\r\n        self._priv[key] = e\r\n        self._pub[e.public_port] = e\r\n        return e\r\n\r\n    def translate_in(self, dst_port: int) -> NATEntry | None:\r\n        return self._pub.get(dst_port)\r\n\r\n    def size(self) -> int:\r\n        return len(self._priv)\r\n\r\n    def print_table(self):\r\n        print(\"\\nNAT Translation Table:\")\r\n        for e in self._priv.values():\r\n            print(f\"  {e.private_ip}:{e.private_port} <-> {e.public_ip}:{e.public_port}\")\r\n\r\nnat = NATTable(\"198.51.100.1\")\r\nh1 = nat.translate_out(\"192.168.1.10\", 3345)\r\nh2 = nat.translate_out(\"192.168.1.20\", 4422)\r\nh3 = nat.translate_out(\"192.168.1.10\", 3346)\r\nfor p in [h1.public_port, h3.public_port]:\r\n    e = nat.translate_in(p)\r\n    if e:\r\n        print(f\"Response on {p} -> {e.private_ip}:{e.private_port}\")\r\nnat.print_table()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-3",
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
            children: "NAT lookup (outbound)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(E)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash table on (IP, port); E = active entries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NAT lookup (inbound)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(E)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash table on public port"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Port allocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(E)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Incrementing counter"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NAT table cleanup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(E)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Timer sweep linear in active entries"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ad-table-2",
      children: "A&D Table"
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
            children: "Address conservation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shares one IP among thousands"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only 65,535 ports per IP limit concurrent connections"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hides internal topology"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "False sense of security; not a firewall"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transparency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Works for outbound connections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Breaks peer-to-peer, VoIP, IPSec"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cheap, universal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Port forwarding complexity, hairpinning issues"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-2",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NAT Exhaustion"
        }), ": All 65,535 ports consumed. Mitigation: multiple public IPs, increase ", (0,jsx_runtime.jsx)(_components.code, {
          children: "net.ipv4.ip_local_port_range"
        }), ", use Carrier-Grade NAT (RFC 6598)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NAT Hairpinning"
        }), ": Host behind NAT can't reach another host behind same NAT using public IP. Some NATs don't support loopback."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NAT and IPSec"
        }), ": ESP (Protocol 50) has no ports. Requires NAT-Traversal (UDP encapsulation, RFC 3948)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ALG Dependency"
        }), ": FTP, SIP embed IPs in payload. NAT must rewrite payload (Application Layer Gateway)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Port Preservation"
        }), ": Some NATs preserve source port; others don't. Affects DNS and other well-known port protocols."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "65-ipv6",
      children: "6.5 IPv6"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IPv6 (RFC 2460) solves IPv4 address exhaustion with 128-bit addresses."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "651-ipv6-header-format",
      children: "6.5.1 IPv6 Header Format"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The simplified IPv6 header is 40 bytes:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Field"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Size (bits)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Traffic Class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DSCP/ECN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flow Label"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identifies flows for QoS (NEW)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Payload Length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Length of payload in bytes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Next Header"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identifies next header (extension or transport)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hop Limit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replaces TTL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Source Address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Source IPv6 address"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Destination Address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Destination IPv6 address"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Features removed from IPv4"
      }), ": IHL (fixed 40-byte header), Header checksum (L2 and L4 handle integrity), Identification/Flags/Fragment Offset (PMTUD by source), Options (moved to extension headers)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "652-ipv6-address-types",
      children: "6.5.2 IPv6 Address Types"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unicast"
        }), ": Single interface. Global (2000::/3), Link-local (FE80::/10), Unique Local (FC00::/7)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Anycast"
        }), ": Nearest member of a group. Used for DNS root servers, CDN."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multicast"
        }), ": All members of a group. Prefix FF00::/8. Replaces broadcast."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "653-ipv6-address-shortening-rules",
      children: "6.5.3 IPv6 Address Shortening Rules"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Omit leading zeros in each 16-bit group."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Replace the longest single run of zero groups with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "::"
        }), " (can only use once)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Examples:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "2001:0db8:0000:0000:0000:8a2e:0370:7334"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "2001:db8::8a2e:370:7334"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "FF02:0000:0000:0000:0000:0000:0000:0001"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FF02::1"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "::1"
        }), " = loopback, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "::"
        }), " = unspecified"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "654-transition-mechanisms",
      children: "6.5.4 Transition Mechanisms"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Mechanism"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How It Works"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dual Stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both IPv4 and IPv6 stacks on same host"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gradual migration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6in4 Tunneling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPv6 packet encapsulated in IPv4 header (Protocol 41)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connect IPv6 islands over IPv4 backbone"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Teredo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPv6 over UDP through NATs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hosts behind NAT without native IPv6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NAT64/DNS64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Translate IPv6→IPv4 headers + synthesize AAAA records"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPv6-only clients accessing IPv4 internet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "464XLAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PLAT (provider-side) + CLAT (client-side) translation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mobile carriers (LTE/5G)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "66-tunneling-ip-in-ip-gre",
      children: "6.6 Tunneling (IP-in-IP, GRE)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-6",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tunneling is like putting a letter in an envelope (inner packet), then putting that envelope inside a larger envelope (outer packet) with a different address. The postal system delivers based on the outer envelope; the recipient opens it and finds the original letter inside."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps-tunneling",
      children: "Numbered Steps: Tunneling"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Router A"
        }), " receives packet destined for 10.0.2.5 (network behind Router B)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Router A"
        }), " looks up route: destination reachable via tunnel to Router B."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Router A"
        }), " prepends outer IP header with src=A's public IP, dst=B's public IP, protocol=4 (or 47 for GRE)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Router A"
        }), " forwards encapsulated packet across the internet."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Router B"
        }), " receives packet, sees protocol = 4 (IP-in-IP) or 47 (GRE)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Router B"
        }), " strips outer IP header (and GRE header if present)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Router B"
        }), " forwards original packet to 10.0.2.5."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-tunnel_encapsulate",
      children: "Pseudocode: tunnel_encapsulate"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function tunnel_encapsulate(packet, tunnel_endpoint, tunnel_type):\r\n    outer = create_ip_header()\r\n    outer.src_ip = this_router_ip\r\n    outer.dst_ip = tunnel_endpoint\r\n    outer.protocol = 4 if tunnel_type == IP_IN_IP else 47\r\n    outer.ttl = 64\r\n    outer.total_length = 20 + len(packet)\r\n    outer.checksum = compute_checksum(outer)\r\n    if tunnel_type == GRE:\r\n        gre = create_gre_header()\r\n        gre.protocol_type = 0x0800\r\n        return outer + gre + packet\r\n    return outer + packet\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-ip-in-ip-tunneling",
      children: "Dry Run: IP-in-IP Tunneling"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Source IP"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dest IP"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Payload"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Original"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inner packet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10.0.1.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10.0.2.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Encapsulate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Outer header"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "203.0.113.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "198.51.100.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inner packet (Proto 4)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Wire"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On internet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "203.0.113.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "198.51.100.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full outer datagram"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Decapsulate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inner packet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10.0.1.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10.0.2.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP data"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-4",
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
            children: "Encapsulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N+P)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prepend fixed header; copy original packet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Decapsulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strip outer header; modify pointer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GRE header"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed 4-byte overhead"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ad-table-3",
      children: "A&D Table"
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
            children: "IP-in-IP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple, 20-byte overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unicast only; no non-IP protocol support"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GRE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiprotocol, multicast support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4-8 byte overhead; no encryption by default"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Carries private addresses over public"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduces effective MTU"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can combine with IPSec"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adds CPU overhead"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "67-supporting-protocols",
      children: "6.7 Supporting Protocols"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "671-arp-address-resolution-protocol",
      children: "6.7.1 ARP (Address Resolution Protocol)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ARP maps IP addresses to MAC addresses on a local link."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-7",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ARP is like calling someone's name in a crowded room. You shout \"Who is John Smith?\" (broadcast ARP request). John replies \"I am John Smith, here's my hand\" (unicast ARP reply). You now know John's hand (MAC) to shake (send frames)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "full-arp-sequence-numbered",
      children: "Full ARP Sequence (Numbered)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cache Check"
        }), ": Host A checks ARP cache for 192.168.1.2. Cache miss."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Broadcast Request"
        }), ": Host A broadcasts Ethernet frame with:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Dest MAC: FF:FF:FF:FF:FF:FF (broadcast)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "ARP opcode: 1 (request)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Sender MAC: AA:AA:AA:AA:AA:AA, Sender IP: 192.168.1.1"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Target MAC: 00:00:00:00:00:00 (unknown), Target IP: 192.168.1.2"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Switch Flooding"
        }), ": Switch floods broadcast to all ports."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Host B Response"
        }), ": Host B recognizes its IP. Sends unicast ARP reply:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Dest MAC: AA:AA:AA:AA:AA:AA (unicast)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "ARP opcode: 2 (reply)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Sender MAC: BB:BB:BB:BB:BB:BB, Sender IP: 192.168.1.2"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Target MAC: AA:AA:AA:AA:AA:AA, Target IP: 192.168.1.1"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cache Update"
        }), ": Host A updates ARP cache: 192.168.1.2 → BB:BB:BB:BB:BB:BB (TTL: 120s)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frame Transmission"
        }), ": Host A sends the IP packet in an Ethernet frame to BB:BB:BB:BB:BB:BB."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "arp-cache-behavior",
      children: "ARP Cache Behavior"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cache Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Typical Timeout"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "New entry learned"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add to cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "120-300 seconds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Entry used"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Refresh timeout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reset to full timeout"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Entry idle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove after timeout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60-300 seconds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Static entry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual, never times out"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permanent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gratuitous ARP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Update if entry exists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-arp-packet-format",
      children: "Dry Run: ARP Packet Format"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "ARP Request (Broadcast):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Field"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware Type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (Ethernet)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Protocol Type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0800 (IPv4)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware Size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Protocol Size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Opcode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (Request)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sender MAC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AA:AA:AA:AA:AA:AA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sender IP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "192.168.1.1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Target MAC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "00:00:00:00:00:00"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Target IP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "192.168.1.2"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "ARP Reply (Unicast):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Field"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Opcode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 (Reply)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sender MAC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BB:BB:BB:BB:BB:BB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sender IP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "192.168.1.2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Target MAC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AA:AA:AA:AA:AA:AA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Target IP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "192.168.1.1"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-arp_resolve",
      children: "Pseudocode: arp_resolve"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function arp_resolve(target_ip, arp_cache, interface):\r\n    if arp_cache.has(target_ip) and not arp_cache.is_expired(target_ip):\r\n        return arp_cache.get(target_ip)\r\n    request = create_arp_packet(\r\n        opcode=REQUEST, sender_mac=interface.mac, sender_ip=interface.ip,\r\n        target_mac=0, target_ip=target_ip)\r\n    broadcast_frame(request, dest_mac=FF:FF:FF:FF:FF:FF)\r\n    reply = wait_for_arp_reply(target_ip, timeout=1_000ms)\r\n    if reply is None: return TIMEOUT_ERROR\r\n    arp_cache.update(target_ip, reply.sender_mac, ttl=120_000ms)\r\n    return reply.sender_mac\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation-arp-cache",
      children: "C++ Implementation: ARP Cache"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\n#include <unordered_map>\r\n#include <string>\r\n#include <chrono>\r\n\r\nstruct arp_entry {\r\n    std::string mac;\r\n    std::chrono::steady_clock::time_point ts;\r\n    int ttl;\r\n    bool expired() const {\r\n        auto now = std::chrono::steady_clock::now();\r\n        return std::chrono::duration_cast<std::chrono::seconds>(now - ts).count() >= ttl;\r\n    }\r\n};\r\n\r\nclass arp_cache {\r\n    std::unordered_map<std::string, arp_entry> cache;\r\npublic:\r\n    void update(const std::string& ip, const std::string& mac, int ttl_s = 120) {\r\n        cache[ip] = {mac, std::chrono::steady_clock::now(), ttl_s};\r\n    }\r\n    std::string resolve(const std::string& ip) {\r\n        auto it = cache.find(ip);\r\n        if (it == cache.end() || it->second.expired()) {\r\n            if (it != cache.end()) cache.erase(it);\r\n            return \"\";\r\n        }\r\n        it->second.ts = std::chrono::steady_clock::now();\r\n        return it->second.mac;\r\n    }\r\n    void print() {\r\n        std::cout << \"ARP Cache (\" << cache.size() << \"):\\n\";\r\n        for (auto& [ip, e] : cache)\r\n            std::cout << \"  \" << ip << \" -> \" << e.mac << \" [TTL:\" << e.ttl << \"s]\\n\";\r\n    }\r\n};\r\n\r\nint main() {\r\n    arp_cache c;\r\n    c.update(\"192.168.1.1\", \"AA:BB:CC:DD:EE:FF\");\r\n    c.update(\"192.168.1.2\", \"11:22:33:44:55:66\");\r\n    auto mac = c.resolve(\"192.168.1.1\");\r\n    if (!mac.empty()) std::cout << \"Send to \" << mac << \"\\n\";\r\n    c.print();\r\n    return 0;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-arp-cache-with-requestreply-simulation",
      children: "Python Implementation: ARP Cache with Request/Reply Simulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import time\r\nfrom dataclasses import dataclass\r\n\r\n@dataclass\r\nclass ARPEntry:\r\n    mac: str\r\n    timestamp: float\r\n    ttl: int = 120\r\n    def expired(self) -> bool:\r\n        return (time.time() - self.timestamp) >= self.ttl\r\n\r\nclass ARPCache:\r\n    def __init__(self):\r\n        self._cache: dict[str, ARPEntry] = {}\r\n\r\n    def update(self, ip: str, mac: str, ttl: int = 120):\r\n        self._cache[ip] = ARPEntry(mac, time.time(), ttl)\r\n\r\n    def resolve(self, ip: str) -> str | None:\r\n        entry = self._cache.get(ip)\r\n        if entry is None or entry.expired():\r\n            if entry: del self._cache[ip]\r\n            return None\r\n        entry.timestamp = time.time()\r\n        return entry.mac\r\n\r\n    def print_cache(self):\r\n        print(f\"\\nARP Cache ({len(self._cache)}):\")\r\n        for ip, e in sorted(self._cache.items()):\r\n            rem = max(0, e.ttl - int(time.time() - e.timestamp))\r\n            print(f\"  {ip:20s} -> {e.mac} [TTL: {rem}s]\")\r\n\r\n\r\ndef simulate_arp(cache: ARPCache, target_ip: str) -> str | None:\r\n    mac = cache.resolve(target_ip)\r\n    if mac:\r\n        print(f\"[HIT] {target_ip} -> {mac}\")\r\n        return mac\r\n    print(f\"[MISS] Broadcasting ARP request for {target_ip}...\")\r\n    time.sleep(0.02)\r\n    table = {\r\n        \"192.168.1.1\": \"AA:BB:CC:DD:EE:01\",\r\n        \"192.168.1.2\": \"AA:BB:CC:DD:EE:02\",\r\n    }\r\n    if target_ip in table:\r\n        mac = table[target_ip]\r\n        print(f\"[REPLY] {target_ip} is at {mac}\")\r\n        cache.update(target_ip, mac)\r\n        return mac\r\n    print(f\"[TIMEOUT] No reply for {target_ip}\")\r\n    return None\r\n\r\ncache = ARPCache()\r\nsimulate_arp(cache, \"192.168.1.2\")\r\nsimulate_arp(cache, \"192.168.1.2\")  # hit\r\nsimulate_arp(cache, \"192.168.1.3\")  # miss, no reply\r\ncache.print_cache()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-5",
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
            children: "ARP cache lookup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash table on IP; N = active neighbors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARP request broadcast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N = hosts on subnet; all receive, one replies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache update"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insert/update hash table"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ad-table-4",
      children: "A&D Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Locality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only on local link; no routing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Doesn't scale across subnets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Caching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduces broadcast traffic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stale entries cause reachability issues"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simplicity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request + reply, no state machine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No authentication; vulnerable to spoofing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-arp-spoofing",
      children: "Edge Cases: ARP Spoofing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Attack"
        }), ": Attacker sends forged ARP replies claiming to be the default gateway. Victim's cache is poisoned; all outbound traffic goes to attacker."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Detection"
        }), ": Monitor for multiple ARP replies with same IP mapping to different MACs. Tools: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "arpwatch"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "arp-scan"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Defense"
        }), ": Static ARP entries, Dynamic ARP Inspection (DAI) on managed switches, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "arptables"
        }), " on Linux."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-implementation-arpsimulator",
      children: "TypeScript Implementation: ARPSimulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface ARPEntry {\r\n  mac: string;\r\n  timestamp: number;\r\n  ttl: number;\r\n}\r\n\r\ninterface ARPPacket {\r\n  opcode: number; // 1=request, 2=reply\r\n  senderMac: string;\r\n  senderIp: string;\r\n  targetMac: string;\r\n  targetIp: string;\r\n}\r\n\r\nclass ARPSimulator {\r\n  private cache: Map<string, ARPEntry> = new Map();\r\n  private readonly defaultTTL = 120_000; // 120 seconds\r\n\r\n  private now(): number {\r\n    return Date.now();\r\n  }\r\n\r\n  public update(ip: string, mac: string, ttl?: number): void {\r\n    this.cache.set(ip, {\r\n      mac,\r\n      timestamp: this.now(),\r\n      ttl: ttl ?? this.defaultTTL,\r\n    });\r\n  }\r\n\r\n  public resolve(ip: string): string | null {\r\n    const entry = this.cache.get(ip);\r\n    if (!entry) return null;\r\n    if (this.now() - entry.timestamp > entry.ttl) {\r\n      this.cache.delete(ip);\r\n      return null;\r\n    }\r\n    entry.timestamp = this.now(); // refresh on use\r\n    return entry.mac;\r\n  }\r\n\r\n  public sendRequest(targetIp: string, senderIp: string, senderMac: string): ARPPacket {\r\n    return {\r\n      opcode: 1,\r\n      senderMac,\r\n      senderIp,\r\n      targetMac: '00:00:00:00:00:00',\r\n      targetIp,\r\n    };\r\n  }\r\n\r\n  public sendReply(request: ARPPacket, responderMac: string): ARPPacket {\r\n    return {\r\n      opcode: 2,\r\n      senderMac: responderMac,\r\n      senderIp: request.targetIp,\r\n      targetMac: request.senderMac,\r\n      targetIp: request.senderIp,\r\n    };\r\n  }\r\n\r\n  public processReply(reply: ARPPacket): void {\r\n    this.update(reply.senderIp, reply.senderMac);\r\n  }\r\n\r\n  public sendGratuitousArp(ip: string, mac: string): ARPPacket {\r\n    return {\r\n      opcode: 1,\r\n      senderMac: mac,\r\n      senderIp: ip,\r\n      targetMac: '00:00:00:00:00:00',\r\n      targetIp: ip,\r\n    };\r\n  }\r\n\r\n  public getCacheSnapshot(): Map<string, ARPEntry> {\r\n    return new Map(this.cache);\r\n  }\r\n}\r\n\r\n// Usage example\r\nconst arp = new ARPSimulator();\r\narp.update('192.168.1.1', 'AA:BB:CC:DD:EE:01');\r\narp.update('192.168.1.2', 'AA:BB:CC:DD:EE:02');\r\n\r\nconst mac1 = arp.resolve('192.168.1.1');\r\nconsole.log(`192.168.1.1 is at ${mac1}`); // \"192.168.1.1 is at AA:BB:CC:DD:EE:01\"\r\n\r\nconst req = arp.sendRequest('192.168.1.100', '192.168.1.10', '11:22:33:44:55:66');\r\nconsole.log(`ARP request: who-has ${req.targetIp}? tell ${req.senderIp}`);\r\n// \"ARP request: who-has 192.168.1.100? tell 192.168.1.10\"\r\n\r\nconst reply = arp.sendReply(req, 'AB:CD:EF:01:02:03');\r\narp.processReply(reply);\r\nconsole.log(`Cache now has ${arp.getCacheSnapshot().size} entries`);\r\n// \"Cache now has 3 entries\"\r\n\r\nconst gratuitous = arp.sendGratuitousArp('192.168.1.1', 'AA:BB:CC:DD:EE:01');\r\nconsole.log(`Gratuitous ARP: ${gratuitous.senderIp} is at ${gratuitous.senderMac}`);\r\n// \"Gratuitous ARP: 192.168.1.1 is at AA:BB:CC:DD:EE:01\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "672-dhcp",
      children: "6.7.2 DHCP"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DHCP automates IP address assignment."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-8",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DHCP is like a hotel front desk. You ask for a room (Discover). The desk says \"Room 204\" (Offer). You say \"I'll take Room 204\" (Request). They confirm \"Room 204 is yours until checkout\" (Acknowledge). At checkout (lease expiry), you return the room."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dhcp-dora-steps-numbered",
      children: "DHCP DORA Steps (Numbered)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DISCOVER"
        }), ": Client broadcasts DHCPDISCOVER (UDP src=68, dst=67, dest IP=255.255.255.255, src IP=0.0.0.0)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "OFFER"
        }), ": Each DHCP server responds with DHCPOFFER containing offered IP, subnet mask, default gateway, DNS, lease time."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "REQUEST"
        }), ": Client broadcasts DHCPREQUEST selecting one server's offer (informing all servers)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ACKNOWLEDGE"
        }), ": Selected server sends DHCPACK confirming the lease. Client applies configuration."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lease Renewal"
      }), ": At 50% lease time, client unicasts DHCPREQUEST to renew. Server responds with DHCPACK. At 87.5% (rebinding), client broadcasts to any server."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-dhcp-dora",
      children: "Dry Run: DHCP DORA"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Packet"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Src IP"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dst IP"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Fields"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DISCOVER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.0.0.0:68"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "255.255.255.255:67"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XID=0x1234, Client MAC=AA:BB:CC:DD:EE:01"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OFFER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "192.168.1.1:67"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "255.255.255.255:68"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yiaddr=192.168.1.100, Mask=/24, GW=192.168.1.1, DNS=8.8.8.8, Lease=86400s"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REQUEST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.0.0.0:68"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "255.255.255.255:67"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requested IP=192.168.1.100, Server ID=192.168.1.1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "192.168.1.1:67"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "255.255.255.255:68"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yiaddr=192.168.1.100, lease confirmed"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-dhcp_dora",
      children: "Pseudocode: dhcp_dora"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function dhcp_dora(client_mac, server_ip, subnet):\r\n    xid = random()\r\n    broadcast(DHCPDISCOVER{chaddr: client_mac, xid: xid})\r\n    offers = wait_for_dhcpoffer(xid, timeout=2s)\r\n    if offers is empty: return TIMEOUT_ERROR\r\n    best = select_offer(offers)\r\n    broadcast(DHCPREQUEST{chaddr: client_mac, xid: xid,\r\n        options: [RequestedIP: best.yiaddr, ServerID: best.server_id]})\r\n    ack = wait_for_dhcpack(xid, timeout=2s)\r\n    if ack is None: return NAK_ERROR\r\n    apply_config(ack.yiaddr, ack.mask, ack.gateway, ack.dns)\r\n    schedule_renewal(ack.lease_time / 2)\r\n    return SUCCESS\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation-dhcp-lease-manager",
      children: "C++ Implementation: DHCP Lease Manager"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\n#include <string>\r\n#include <unordered_map>\r\n#include <chrono>\r\n\r\nstruct dhcp_lease {\r\n    std::string mac;\r\n    std::string ip;\r\n    std::chrono::steady_clock::time_point leased_at;\r\n    int duration;\r\n};\r\n\r\nclass dhcp_server {\r\n    std::unordered_map<std::string, dhcp_lease> leases;\r\n    int next_ip;\r\n    int pool_end;\r\npublic:\r\n    dhcp_server(int start, int end) : next_ip(start), pool_end(end) {}\r\n\r\n    std::string handle_discover(const std::string& mac) {\r\n        auto it = leases.find(mac);\r\n        if (it != leases.end()) {\r\n            auto& l = it->second;\r\n            auto elapsed = std::chrono::duration_cast<std::chrono::seconds>(\r\n                std::chrono::steady_clock::now() - l.leased_at).count();\r\n            if (elapsed < l.duration) return l.ip;\r\n            leases.erase(it);\r\n        }\r\n        if (next_ip > pool_end) return \"\";\r\n        std::string ip = \"192.168.1.\" + std::to_string(next_ip++);\r\n        leases[mac] = {mac, ip, std::chrono::steady_clock::now(), 86400};\r\n        return ip;\r\n    }\r\n\r\n    void print() {\r\n        std::cout << \"DHCP Leases (\" << leases.size() << \"):\\n\";\r\n        for (auto& [m, l] : leases)\r\n            std::cout << \"  \" << l.ip << \" -> \" << m << \"\\n\";\r\n    }\r\n};\r\n\r\nint main() {\r\n    dhcp_server dhcp(100, 200);\r\n    auto ip1 = dhcp.handle_discover(\"AA:BB:CC:DD:EE:01\");\r\n    auto ip2 = dhcp.handle_discover(\"11:22:33:44:55:66\");\r\n    auto ip3 = dhcp.handle_discover(\"AA:BB:CC:DD:EE:01\");  // renewal\r\n    std::cout << \"Client 1: \" << ip1 << \"\\nClient 2: \" << ip2 << \"\\nClient 1 (renew): \" << ip3 << \"\\n\";\r\n    dhcp.print();\r\n    return 0;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-dhcp-dora-simulator",
      children: "Python Implementation: DHCP DORA Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import time, random\r\nfrom dataclasses import dataclass, field\r\n\r\n@dataclass\r\nclass DHCPOffer:\r\n    yiaddr: str\r\n    mask: str = \"255.255.255.0\"\r\n    router: str = \"192.168.1.1\"\r\n    dns: list = field(default_factory=lambda: [\"8.8.8.8\"])\r\n    lease: int = 86400\r\n\r\nclass DHCPServer:\r\n    def __init__(self, ip: str, start: int, end: int):\r\n        self.server_ip = ip\r\n        self.start = start\r\n        self.end = end\r\n        self._leases: dict[str, str] = {}\r\n        self._next = start\r\n\r\n    def handle_discover(self, mac: str) -> DHCPOffer | None:\r\n        if mac in self._leases:\r\n            return DHCPOffer(yiaddr=self._leases[mac])\r\n        if self._next > self.end:\r\n            return None\r\n        ip = f\"192.168.1.{self._next}\"\r\n        self._next += 1\r\n        self._leases[mac] = ip\r\n        return DHCPOffer(yiaddr=ip)\r\n\r\ndef dora(mac: str, servers: list[DHCPServer]) -> str | None:\r\n    xid = random.randint(0, 0xFFFFFFFF)\r\n    print(f\"\\n[DORA] Client {mac} (XID=0x{xid:08X})\")\r\n    print(\"[1] DISCOVER -> broadcast\")\r\n    offers = [s.handle_discover(mac) for s in servers]\r\n    offers = [o for o in offers if o]\r\n    if not offers: print(\"    No offers\"); return None\r\n    sel = offers[0]\r\n    print(f\"[2] REQUEST -> {sel.yiaddr}\")\r\n    print(f\"[3] ACK from servers[0]: {sel.yiaddr}\")\r\n    print(f\"    Config: mask={sel.mask}, gw={sel.router}, dns={sel.dns}\")\r\n    return sel.yiaddr\r\n\r\nservers = [DHCPServer(\"192.168.1.1\", 100, 200)]\r\ndora(\"AA:BB:CC:DD:EE:01\", servers)\r\ndora(\"11:22:33:44:55:66\", servers)\r\ndora(\"AA:BB:CC:DD:EE:01\", servers)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-6",
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
            children: "DHCP Discover/Offer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N = servers on subnet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lease table lookup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash table on MAC; L = leases"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IP allocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L) worst"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May scan for free IP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lease expiry sweep"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Periodic timer sweep"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ad-table-5",
      children: "A&D Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Automation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero-touch configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single point of failure (need redundant servers)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lease management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPs reclaimed on disconnect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lease tuning critical (too short = churn, too long = waste)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Broadcast-based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No prior config needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Doesn't cross subnets without DHCP relay (RFC 1542)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-3",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DHCP Starvation Attack"
        }), ": Attacker sends many DISCOVER messages with forged MACs, exhausting the pool. Defense: DHCP snooping (switch validates DHCP messages), port security."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rogue DHCP Server"
        }), ": Attacker sets up unauthorized DHCP server offering malicious gateway/DNS. Defense: DHCP snooping with trusted/untrusted port designations."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lease Mismanagement"
        }), ": Client disappears without DHCPRELEASE. IP remains allocated until lease expires."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "673-icmp",
      children: "6.7.3 ICMP"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ICMP conveys error messages and operational information."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "important-message-types",
      children: "Important Message Types"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Echo Reply"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ping response"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dest Network Unreachable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No route to network"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dest Host Unreachable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No route to host"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Port Unreachable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Port not listening"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fragmentation Needed (DF set)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PMTUD signal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Echo Request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ping"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TTL Expired"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "traceroute"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ping-and-traceroute",
      children: "ping and traceroute"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ping"
      }), " utility sends ICMP Echo Requests and measures RTT. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "traceroute"
      }), " sends datagrams with increasing TTL values and reads ICMP TTL Exceeded messages from each hop router."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-traceroute",
      children: "Pseudocode: traceroute"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function traceroute(destination, max_hops=30, probes_per_hop=3):\r\n    for ttl = 1 to max_hops:\r\n        for probe = 1 to probes_per_hop:\r\n            start_time = now()\r\n            send_probe(destination, ttl, protocol=UDP, port=33434+ttl)\r\n            reply = wait_for_icmp(timeout=5s)\r\n            rtt = now() - start_time\r\n            if reply is None:\r\n                print(\"* * *\")\r\n            else if reply.type == 11:         // TTL Exceeded\r\n                print(\"hop ttl: reply.src_ip  rtt\")\r\n            else if reply.type == 3:          // Destination Unreachable\r\n                print(\"hop ttl: reply.src_ip  rtt  (arrived)\")\r\n                return\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-traceroute-to-8888",
      children: "Dry Run: traceroute to 8.8.8.8"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Probe"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TTL"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Destination"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ICMP Response"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Source IP"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "RTT"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8.8.8.8:33435"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type 11 (TTL Exceeded)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "192.168.1.1 (gateway)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8.8.8.8:33436"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type 11 (TTL Exceeded)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "203.0.113.1 (ISP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8.8.8.8:33437"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type 11 (TTL Exceeded)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "72.14.238.4 (transit)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8.8.8.8:33446"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type 3 (Port Unreachable)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8.8.8.8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "45ms"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "icmp-rate-limiting",
      children: "ICMP Rate Limiting"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Routers rate-limit ICMP generation to prevent resource exhaustion. Linux default: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "net.ipv4.icmp_ratelimit = 1000"
      }), " (1 second). Excess ICMP errors are dropped silently. This can cause PMTUD black holes when ICMP \"Fragmentation Needed\" messages are rate-limited."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "icmp-tunneling-covert-channel",
      children: "ICMP Tunneling (Covert Channel)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Attackers can encode data in ICMP Echo Request/Reply payload fields. Detection: abnormal payload size, unusual frequency, non-standard payload content (not ASCII letters). ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ping -p <pattern>"
      }), " on Linux sends custom payload bytes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-ping-helper",
      children: "Python ping helper"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import subprocess, platform\r\n\r\ndef ping(host: str, count: int = 4) -> dict:\r\n    flag = \"-n\" if platform.system().lower() == \"windows\" else \"-c\"\r\n    r = subprocess.run([\"ping\", flag, str(count), host], capture_output=True, text=True)\r\n    return {\"host\": host, \"output\": r.stdout, \"ok\": r.returncode == 0}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-implementation-icmppackethandler",
      children: "TypeScript Implementation: ICMPPacketHandler"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface ICMPPacket {\r\n  type: number;\r\n  code: number;\r\n  checksum: number;\r\n  restOfHeader: number;\r\n  payload: Buffer;\r\n}\r\n\r\nenum ICMPType {\r\n  EchoReply = 0,\r\n  DestUnreachable = 3,\r\n  EchoRequest = 8,\r\n  TTLExceeded = 11,\r\n}\r\n\r\nclass ICMPPacketHandler {\r\n  private computeChecksum(data: Buffer): number {\r\n    let sum = 0;\r\n    for (let i = 0; i < data.length; i += 2) {\r\n      const word = (data[i] << 8) | (i + 1 < data.length ? data[i + 1] : 0);\r\n      sum += word;\r\n      if (sum > 0xFFFF) sum = (sum & 0xFFFF) + 1;\r\n    }\r\n    return (~sum >>> 0) & 0xFFFF;\r\n  }\r\n\r\n  public createEchoRequest(identifier: number, sequence: number, payload?: Buffer): ICMPPacket {\r\n    const data = Buffer.alloc(8 + (payload?.length ?? 0));\r\n    data.writeUInt16BE(identifier, 4);\r\n    data.writeUInt16BE(sequence, 6);\r\n    if (payload) payload.copy(data, 8);\r\n\r\n    const checksum = this.computeChecksum(data);\r\n    data.writeUInt16BE(checksum, 2);\r\n\r\n    return {\r\n      type: ICMPType.EchoRequest,\r\n      code: 0,\r\n      checksum,\r\n      restOfHeader: (identifier << 16) | sequence,\r\n      payload: payload ?? Buffer.alloc(0),\r\n    };\r\n  }\r\n\r\n  public createEchoReply(request: ICMPPacket): ICMPPacket {\r\n    const identifier = (request.restOfHeader >>> 16) & 0xFFFF;\r\n    const sequence = request.restOfHeader & 0xFFFF;\r\n    const data = Buffer.alloc(8 + request.payload.length);\r\n    data.writeUInt16BE(identifier, 4);\r\n    data.writeUInt16BE(sequence, 6);\r\n    request.payload.copy(data, 8);\r\n\r\n    const checksum = this.computeChecksum(data);\r\n    data.writeUInt16BE(checksum, 2);\r\n\r\n    return {\r\n      type: ICMPType.EchoReply,\r\n      code: 0,\r\n      checksum,\r\n      restOfHeader: (identifier << 16) | sequence,\r\n      payload: request.payload,\r\n    };\r\n  }\r\n\r\n  public createDestUnreachable(originalPacket: Buffer, reason: string): ICMPPacket {\r\n    const codeMap: Record<string, number> = {\r\n      'network-unreachable': 0,\r\n      'host-unreachable': 1,\r\n      'protocol-unreachable': 2,\r\n      'port-unreachable': 3,\r\n      'fragmentation-needed': 4,\r\n    };\r\n    const code = codeMap[reason] ?? 1;\r\n    const payload = originalPacket.subarray(0, 28);\r\n    return {\r\n      type: ICMPType.DestUnreachable,\r\n      code,\r\n      checksum: 0,\r\n      restOfHeader: 0,\r\n      payload,\r\n    };\r\n  }\r\n\r\n  public createTTLExceeded(originalPacket: Buffer): ICMPPacket {\r\n    const payload = originalPacket.subarray(0, 28);\r\n    return {\r\n      type: ICMPType.TTLExceeded,\r\n      code: 0,\r\n      checksum: 0,\r\n      restOfHeader: 0,\r\n      payload,\r\n    };\r\n  }\r\n\r\n  public packetTypeName(packet: ICMPPacket): string {\r\n    const names: Record<number, string> = {\r\n      0: 'Echo Reply',\r\n      3: 'Destination Unreachable',\r\n      8: 'Echo Request',\r\n      11: 'TTL Exceeded',\r\n    };\r\n    return names[packet.type] ?? 'Unknown';\r\n  }\r\n\r\n  public simulatePing(targetIp: string, count: number): string[] {\r\n    const results: string[] = [];\r\n    for (let i = 0; i < count; i++) {\r\n      const req = this.createEchoRequest(1, i + 1, Buffer.from('abcdefghijklmnop'));\r\n      const reply = this.createEchoReply(req);\r\n      const rtt = Math.floor(Math.random() * 20 + 1);\r\n      results.push(\r\n        `Reply from ${targetIp}: seq=${i + 1} ttl=64 time=${rtt}ms type=${this.packetTypeName(reply)}`\r\n      );\r\n    }\r\n    return results;\r\n  }\r\n}\r\n\r\n// Usage example\r\nconst icmp = new ICMPPacketHandler();\r\n\r\nconst echoReq = icmp.createEchoRequest(0x1234, 1, Buffer.from('hello'));\r\nconsole.log(`Created ${icmp.packetTypeName(echoReq)}: type=${echoReq.type}, code=${echoReq.code}`);\r\n// \"Created Echo Request: type=8, code=0\"\r\n\r\nconst echoReply = icmp.createEchoReply(echoReq);\r\nconsole.log(`Created ${icmp.packetTypeName(echoReply)}: checksum=0x${echoReply.checksum.toString(16)}`);\r\n// \"Created Echo Reply: checksum=0x...\"\r\n\r\nconst unreachable = icmp.createDestUnreachable(Buffer.alloc(28), 'port-unreachable');\r\nconsole.log(`Unreachable: type=${unreachable.type}, code=${unreachable.code} (port-unreachable)`);\r\n// \"Unreachable: type=3, code=3 (port-unreachable)\"\r\n\r\nconst ttlExceeded = icmp.createTTLExceeded(Buffer.alloc(28));\r\nconsole.log(`TTL Exceeded: type=${ttlExceeded.type}, code=${ttlExceeded.code}`);\r\n// \"TTL Exceeded: type=11, code=0\"\r\n\r\nconst pings = icmp.simulatePing('8.8.8.8', 3);\r\npings.forEach(p => console.log(p));\r\n// \"Reply from 8.8.8.8: seq=1 ttl=64 time=12ms type=Echo Reply\"\r\n// \"Reply from 8.8.8.8: seq=2 ttl=64 time=5ms type=Echo Reply\"\r\n// \"Reply from 8.8.8.8: seq=3 ttl=64 time=18ms type=Echo Reply\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gre-encapsulation-details",
      children: "GRE Encapsulation Details"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GRE adds a 4-byte (minimum) header between the outer and inner packet:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: " 0                   1                   2                   3\r\n 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1\r\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\r\n|C| |K| |S| |Reserved|       Version (0)       |  Protocol Type |\r\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\r\n|      Checksum (optional, present if C=1)      |       Reserved |\r\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Protocol Type: 0x0800 = IPv4, 0x86DD = IPv6, 0x8847 = MPLS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GRE can carry multicast (IP-in-IP cannot)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["GRE tunnels appear as interfaces in router configs (", (0,jsx_runtime.jsx)(_components.code, {
          children: "tunnel source"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tunnel destination"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tunnel mode gre ip"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "tunnel-overhead-comparison",
      children: "Tunnel Overhead Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tunnel Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Overhead"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Max Payload (MTU 1500)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Protocol Field"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IP-in-IP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1480 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GRE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24-28 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1476-1472 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "47"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GRE + IPSec (ESP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24 + 16-32 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1456 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ESP (50)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6in4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1480 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "41"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Teredo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20 + 8 (UDP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1472 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UDP (17)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-gre-tunnel-encapsulationdecapsulation",
      children: "Pseudocode: GRE Tunnel Encapsulation/Decapsulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function gre_encapsulate(inner_packet, tunnel):\r\n    outer = IP_header()\r\n    outer.src = tunnel.source_ip\r\n    outer.dst = tunnel.dest_ip\r\n    outer.protocol = 47\r\n    outer.ttl = 64\r\n    gre = GRE_header()\r\n    gre.protocol_type = 0x0800  // IPv4\r\n    gre.checksum = 0\r\n    combined = outer + gre + inner_packet\r\n    combined.ip.total_length = len(combined)\r\n    combined.ip.checksum = ip_checksum(combined.ip)\r\n    return combined\r\n\r\nfunction gre_decapsulate(packet):\r\n    if packet.ip.protocol != 47:\r\n        error(\"Not a GRE packet\")\r\n    gre_offset = 20  // after IP header\r\n    gre = parse_gre(packet[gre_offset:gre_offset+4])\r\n    inner_offset = gre_offset + 4\r\n    if gre.checksum_present:\r\n        inner_offset += 4  // skip checksum + reserved\r\n    inner_packet = packet[inner_offset:]\r\n    return inner_packet\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "68-ipv4-vs-ipv6-comprehensive-comparison",
      children: "6.8 IPv4 vs IPv6: Comprehensive Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "IPv4"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "IPv6"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Address length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128 bits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Address count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~4.3 x 10^9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~3.4 x 10^38"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Header size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20-60 bytes (variable)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40 bytes (fixed)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fragmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Routers and source"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Source-only via PMTUD"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Checksum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Header checksum (16-bit)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not present"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In main header"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extension headers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARP (broadcast)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NDP (ICMPv6)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multicast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IGMP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MLD"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Broadcast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not supported (multicast)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flow labeling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not supported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flow Label field (20 bits)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IPSec"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mandatory (basic)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Minimum MTU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "68 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1280 bytes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DHCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DHCPv4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SLAAC or DHCPv6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Private addressing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RFC 1918 (NAT)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ULA (FC00::/7)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Loopback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "127.0.0.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "::1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DNS record"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A record"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AAAA record"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DHCP required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SLAAC + NDP (no server)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Route aggregation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CIDR (/n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CIDR (/n), typically /32 or /48"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NAT prevalence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ubiquitous"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rare (not needed)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "69-five-layer-model-network-layer-context",
      children: "6.9 Five-Layer Model: Network Layer Context"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Layer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Role"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Protocols"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Address"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User-facing services"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP, DNS, SMTP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "URL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transport"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process-to-process"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP, UDP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Port"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Network"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Host-to-host"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "IP, ICMP, ARP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "IP address"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data Link"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hop-to-hop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ethernet, WiFi"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Physical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bit transmission"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cables, radio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "610-complexities-at-a-glance",
      children: "6.10 Complexities at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bottleneck"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Longest Prefix Match"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log N) with trie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N x W)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory for trie nodes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fragmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(P)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(P)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fragment count"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reassembly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(F log F) sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(P)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Missing fragment timeout"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NAT translation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(E)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Port exhaustion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARP cache lookup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Broadcast storms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DHCP lease table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Address pool exhaustion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ICMP error generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rate limiting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IP-in-IP encap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MTU overhead"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "N = routing entries, P = payload bytes, F = fragments, E = NAT entries, L = DHCP leases"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "611-interview-corner",
      children: "6.11 Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ipv4-exhaustion",
      children: "IPv4 Exhaustion"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q"
      }), ": Why did we exhaust IPv4 addresses?\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": The 32-bit address space (4.3 billion) was designed for the ARPANET, not the global internet. Classful allocation wasted vast ranges (a Class A /8 had 16.7M addresses). IANA allocated the last /8 in 2011."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nat-traversal",
      children: "NAT Traversal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q"
      }), ": How do applications behind NAT establish peer-to-peer connections?\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": Techniques:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "STUN (RFC 5389)"
        }), ": Client discovers public IP:port from a public STUN server. Works for full-cone and address-restricted NATs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TURN (RFC 5766)"
        }), ": Relays traffic through a public server for symmetric NATs. Used by WebRTC as fallback."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ICE (RFC 8445)"
        }), ": Combines STUN + TURN candidates, tests connectivity, picks the best working pair."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "UPnP/NAT-PMP"
        }), ": Programmatic port mappings on consumer NATs. Security risk — malware can open ports."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ipv6-transition-mechanisms",
      children: "IPv6 Transition Mechanisms"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q"
      }), ": How is the internet transitioning from IPv4 to IPv6?\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": Three main approaches:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dual Stack"
        }), " (dominant): Both stacks run simultaneously."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tunneling"
        }), ": 6in4, Teredo, 6to4 encapsulate IPv6 in IPv4."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Translation"
        }), ": NAT64/DNS64 for IPv6-only clients accessing IPv4."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "subnetting-shortcuts",
      children: "Subnetting Shortcuts"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Need"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Shortcut"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "/24 → /26"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 subnets, 64 addresses (62 usable) each"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "/24 → /27"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 subnets, 32 addresses (30 usable) each"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "/24 → /28"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16 subnets, 16 addresses (14 usable) each"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "/24 → /29"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32 subnets, 8 addresses (6 usable) each"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "/24 → /30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64 subnets, 4 addresses (2 usable, pt-to-pt)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Number of hosts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2^(32-prefix) - 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Next network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add 2^(32-prefix) to network address"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Wildcard mask"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2^(32-prefix) - 1 (for ACLs)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quick-vlsm-reference",
      children: "Quick VLSM Reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Given a base /24, to fit N hosts: find smallest S where 2^S - 2 >= N (S = host bits). New mask = 32 - S.\r\nExample: need 100 hosts → 2^7 - 2 = 126 >= 100 → /25 (128 addresses)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nat-traversal-deep-dive",
      children: "NAT Traversal Deep Dive"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q"
      }), ": How do STUN, TURN, and ICE work together?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": These three protocols form a layered approach:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "STUN (Session Traversal Utilities for NAT, RFC 5389)"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client sends STUN Binding Request to a public STUN server."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Server responds with the source IP:port it observed (the NAT-mapped public address)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client now knows its public IP:port. Sends this in SDP to the peer."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Peer tries to connect directly to this public IP:port."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "NAT Behavioral Classification by STUN"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Full Cone"
        }), ": Any external host can reach the client at the mapped address."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Address-Restricted Cone"
        }), ": Only hosts the client has sent packets to can reach back."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Port-Restricted Cone"
        }), ": Like above, but also restricts to the same source port."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Symmetric"
        }), ": Each destination gets a different mapped port. STUN alone fails here."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "TURN (Traversal Using Relays around NAT, RFC 5766)"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client gets a relayed address from TURN server."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All traffic goes through the relay (high latency, server cost)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Used only when STUN+ICE fail (symmetric NAT both sides)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "WebRTC always provisions TURN as the last-resort candidate."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "ICE (Interactive Connectivity Establishment, RFC 8445)"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Gather candidates: host (local IP), server-reflexive (STUN), relayed (TURN)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prioritize candidates (host > STUN > TURN)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test each pair (local vs remote candidate) using STUN connectivity checks."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pick the best working pair (lowest priority that works)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function ice_connectivity_check(local_candidates, remote_candidates):\r\n    pairs = [(l, r) for l in local_candidates for r in remote_candidates]\r\n    sort pairs by (priority(l) + priority(r))\r\n    for pair in pairs:\r\n        if connectivity_check(pair.local, pair.remote, timeout=500ms):\r\n            return pair  // first working pair\r\n    return FAILURE  // fall back to TURN\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fragmentation-attack-details",
      children: "Fragmentation Attack Details"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tiny Fragment Attack"
      }), ": First fragment is very small (e.g., 24 bytes), just enough to contain TCP headers. The firewall sees a TCP SYN to port 80 (allowed). But the second fragment overlaps the first, overwriting the destination port to 23 (telnet). The reassembled packet has dest port 23 but the firewall only saw port 80."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Overlapping Fragment Attack (BONK / Teardrop)"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fragments are crafted with overlapping offsets (sentinel overlap attack)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Early Windows/Linux kernels crashed on malformed overlap reassembly."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Modern OS: discard overlapping fragments by default (", (0,jsx_runtime.jsx)(_components.code, {
          children: "net.ipv4.ipfrag_ok"
        }), " = 0)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Atomic Fragment Attack"
      }), ": A single fragment with MF=0 but non-zero offset is treated as a complete datagram but the firewall's fragment inspection logic may not apply (expects at least 2 fragments for a fragmented packet). Used to bypass stateful firewall rules."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Defense Summary"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Attack"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Detection"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Prevention"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tiny fragment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fragment size < protocol header"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ip fw frag-check"
            }), " on routers"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Overlap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Negative/overlapping offsets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "net.ipv4.conf.all.secure_redirects = 1"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fragment flood"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reassembly buffer utilization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "net.ipv4.ipfrag_max_dist = 128"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Atomic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-zero offset, MF=0, DF=0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ensure firewall inspects ALL fragments"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dhcp-deep-dive",
      children: "DHCP Deep Dive"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "DHCP Options"
      }), ": Beyond IP and mask, DHCP delivers:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Option Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subnet Mask"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client's subnet mask"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Router"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default gateway"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Domain Name Server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS servers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Host Name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client's hostname"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Domain Name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS suffix"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "42"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NTP Server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network time servers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "43"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vendor-Specific Info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vendor-defined options"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "51"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IP Address Lease Time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lease duration in seconds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "53"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DHCP Message Type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1=Discover, 2=Offer, 3=Request, 4=Ack, 5=Nak"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "54"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server Identifier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server's IP"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "DHCP Relay (RFC 1542)"
      }), ": Since DHCP is broadcast-based, it doesn't cross subnets. A DHCP relay agent (helper address) on the router forwards broadcasts as unicasts to a designated DHCP server, adding the original subnet via Option 82 (Agent Information)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Cisco router DHCP relay configuration:\r\n interface GigabitEthernet0/1\r\n  ip helper-address 10.0.0.5\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "DHCPv6"
      }), ": Two modes:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SLAAC (Stateless Address Autoconfiguration)"
        }), ": Client generates its own address from the prefix advertised by routers (ICMPv6 Router Advertisement). No DHCP server needed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stateful DHCPv6"
        }), ": Like DHCPv4, managed by DHCPv6 server. Clients receive addresses from the server."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stateless DHCPv6"
        }), ": Client uses SLAAC for addressing, but queries DHCPv6 for DNS and other options."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "DHCP Security"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Attack"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mechanism"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Starvation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spoofed MACs, many DISCOVERs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DHCP snooping + port security"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rogue server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unauthorized DHCP server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trusted port designations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Option 82 spoofing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "False VLAN/port info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validate Option 82 source"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DHCP snooping bypass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forged DHCPRELEASE/DECLINE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rate-limit per-client DECLINE"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "612-applications-in-real-systems",
      children: "6.12 Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "linux-netfilteriptables",
      children: "Linux netfilter/iptables"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Linux kernel implements NAT, packet filtering, and connection tracking:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NAT"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Filtering"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "iptables -A FORWARD -s 10.0.0.0/8 -j DROP"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Connection Tracking"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/proc/net/nf_conntrack"
        }), " shows active NAT entries."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ARP"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/proc/net/arp"
        }), " shows the ARP cache. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "arp -a"
        }), " to view, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "arp -d"
        }), " to clear."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "cat /proc/net/arp\r\ncat /proc/net/nf_conntrack | head -5\r\narp -s 192.168.1.100 00:11:22:33:44:55  # static ARP\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "windows-tcpip-stack",
      children: "Windows TCP/IP Stack"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Windows implements the network layer through ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tcpip.sys"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ARP"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "arp -a"
        }), " shows cache. Windows maintains neighbor reachability states (REACHABLE, STALE, DELAY, PROBE)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Routing"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "route print"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Get-NetRoute"
        }), " (PowerShell)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NAT"
        }), ": Windows ICS and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "New-NetNat"
        }), " (Server)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DHCP"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ipconfig /renew"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ipconfig /release"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-powershell",
        children: "route print\r\narp -a\r\nGet-NetIPAddress | Select-Object InterfaceAlias, IPAddress, PrefixLength\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "router-acls-cisco-ios",
      children: "Router ACLs (Cisco IOS)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Standard ACL (by source IP):\r\n access-list 1 permit 192.168.1.0 0.0.0.255\r\n access-list 1 deny any\r\n\r\nExtended ACL (by src/dst IP, protocol, port):\r\n access-list 100 permit tcp 10.0.0.0 0.255.255.255 any eq 80\r\n access-list 100 deny icmp any any echo-request\r\n access-list 100 permit ip any any\r\n\r\nApply: interface GigabitEthernet0/0\r\n ip access-group 100 in\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "ACL Rules"
      }), ": (1) Top-down; first match wins (implicit deny at end). (2) Standard ACLs near destination. (3) Extended ACLs near source. (4) Wildcard mask: 0.0.0.255 = check first 24 bits."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "macos-network-stack",
      children: "macOS Network Stack"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "macOS (XNU kernel) network layer implementation:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ARP"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "arp -a"
        }), " shows the ARP cache. macOS uses a per-interface ARP table and maintains ARP probe states."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Routing"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "netstat -rn"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "route -n get <destination>"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interface config"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ifconfig"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "networksetup"
        }), " for IP/DHCP configuration."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Packet filter"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pfctl -s rules"
        }), " shows pf firewall rules. pf is the BSD Packet Filter."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NAT"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "natd"
        }), " or pf's ", (0,jsx_runtime.jsx)(_components.code, {
          children: "nat-anchor"
        }), " for address translation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IPv6"
        }), ": Enabled by default. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sysctl net.inet6.ip6"
        }), " for tuning."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# View ARP table\r\narp -a\r\n# View routing table\r\nnetstat -rn -f inet\r\n# Show interface IPs\r\nifconfig en0 | grep inet\r\n# PF firewall rules\r\nsudo pfctl -s rules\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "aws-vpc-networking-cloud-analogs",
      children: "AWS VPC Networking (Cloud Analogs)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Classic (On-Prem)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "AWS Equivalent"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Router"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VPC Route Tables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Subnet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VPC Subnet (CIDR block)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NAT device"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NAT Gateway / NAT Instance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DHCP server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VPC DHCP Options Set"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network ACL (stateless)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Firewall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security Group (stateful)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VPN tunnel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWS VPN Connection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Direct connection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWS Direct Connect"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IP allocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Elastic IP (static public IP)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A (overlay network, no ARP needed)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AWS VPCs use an overlay network (Geneve encapsulation) where traditional ARP does not apply. The hypervisor maps instance IPs directly to the underlying physical host's virtual interface."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "windows-netstat-and-network-diagnostics",
      children: "Windows netstat and Network Diagnostics"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-powershell",
        children: "# Show active TCP connections and listening ports\r\nnetstat -ano\r\n\r\n# Show routing table\r\nroute print -4\r\n\r\n# Show ARP cache\r\narp -a\r\n\r\n# Show DNS cache\r\nipconfig /displaydns\r\n\r\n# Flush DNS\r\nipconfig /flushdns\r\n\r\n# Set static IP\r\nNew-NetIPAddress -InterfaceAlias \"Ethernet0\" `\r\n  -IPAddress \"192.168.1.100\" `\r\n  -PrefixLength 24 `\r\n  -DefaultGateway \"192.168.1.1\"\r\n\r\n# Set DNS\r\nSet-DnsClientServerAddress -InterfaceAlias \"Ethernet0\" `\r\n  -ServerAddresses (\"8.8.8.8\", \"8.8.4.4\")\r\n\r\n# Enable packet capture\r\n netsh trace start capture=yes\r\n netsh trace stop\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "linux-sysctl-network-layer-tuning",
      children: "Linux sysctl Network Layer Tuning"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# IP forwarding (enable as router)\r\nsysctl -w net.ipv4.ip_forward=1\r\n\r\n# Disable ICMP redirects (security)\r\nsysctl -w net.ipv4.conf.all.accept_redirects=0\r\nsysctl -w net.ipv4.conf.all.send_redirects=0\r\n\r\n# Increase NAT conntrack table size\r\nsysctl -w net.netfilter.nf_conntrack_max=262144\r\n\r\n# Set local port range for NAT clients\r\nsysctl -w net.ipv4.ip_local_port_range=\"1024 65535\"\r\n\r\n# Enable reverse path filtering (anti-spoof)\r\nsysctl -w net.ipv4.conf.all.rp_filter=1\r\n\r\n# Set reassembly limits\r\nsysctl -w net.ipv4.ipfrag_time=30\r\nsysctl -w net.ipv4.ipfrag_high_thresh=524288\r\n\r\n# TCP timestamps + PMTUD\r\nsysctl -w net.ipv4.tcp_mtu_probing=1\r\n\r\n# ARP table sizing\r\nsysctl -w net.ipv4.neigh.default.gc_thresh1=128\r\nsysctl -w net.ipv4.neigh.default.gc_thresh2=512\r\nsysctl -w net.ipv4.neigh.default.gc_thresh3=1024\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complete-network-layer-diagnostic-flow",
      children: "Complete Network Layer Diagnostic Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When troubleshooting network layer issues, follow this systematic approach:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Check local configuration"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ipconfig/ifconfig"
        }), " → correct IP, mask, gateway?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Verify link"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ping 127.0.0.1"
        }), " (loopback) → stack working?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Verify local network"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ping <gateway>"
        }), " → L3 to router working?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Check ARP"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "arp -a"
        }), " → gateway MAC resolved?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Trace path"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tracert/traceroute <destination>"
        }), " → where does it fail?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Check routing"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "route print/netstat -rn"
        }), " → default route present?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Check NAT"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cat /proc/net/nf_conntrack"
        }), " | ", (0,jsx_runtime.jsx)(_components.code, {
          children: "show ip nat translations"
        }), " → translation entries?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Check firewall"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "iptables -L"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "netsh advfirewall show allprofiles"
        }), " → blocking traffic?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PMTUD test"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ping -f -l 1472 <destination>"
        }), " → DF flag successful?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DNS resolution"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "nslookup <hostname>"
        }), " → name to IP resolution working?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "network-layer-troubleshooting-cheat-sheet",
      children: "Network Layer Troubleshooting Cheat Sheet"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Symptom"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Likely Cause"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Diagnostic Command"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No internet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default gateway missing/unreachable"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "route print"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ip route show"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intermittent connectivity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARP cache poisoning"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "arp -a"
            }), " check for duplicate MACs"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can ping IPs but not names"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS configuration issue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "nslookup google.com"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HTTPS fails, HTTP works"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MTU/PMTUD issue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ping -f -l 1472 google.com"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Home server unreachable from outside"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No port forwarding / NAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "show ip nat translations"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Slow first connection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARP resolution delay"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "arp -d"
            }), " and retest latency"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DHCP obtaining IP for too long"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DHCP server unreachable / pool full"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "dhcp server lease"
            }), " on server"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Subnet mask mismatch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can't reach hosts on same subnet"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ipconfig"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ifconfig"
            }), " compare"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TTL exceeded in traceroute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Routing loop"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "traceroute"
            }), " shows repeated IP"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "614-key-formulas-reference",
      children: "6.14 Key Formulas Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Formula"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2^(32 - prefix)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Total addresses in subnet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/24 = 256"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2^(32 - prefix) - 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Usable host addresses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/24 = 254"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2^(32 - new_prefix)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subnet size after subnetting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/26 = 64"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ceil(log2(N))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bits needed for N subnets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 subnets = 2 bits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ceil(log2(H + 2))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bits needed for H hosts per subnet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50 hosts = 6 bits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(MTU - 20) / 8 * 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Max payload per fragment (8-byte aligned)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MTU 1500 = 1480"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "offset_8byte * 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Byte offset from fragment offset field"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "offset=185 → 1480 bytes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TTL * (initial - 1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum path length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TTL=255 allows 254 hops"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "65535 - 2 * ephemeral_range"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Max concurrent NAT entries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "65535 - 2 * 16384 = 32767"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "case-study-ip-addressing-design-for-a-growing-enterprise",
      children: "Case Study: IP Addressing Design for a Growing Enterprise"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem",
      children: "Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A mid-sized company with 500 employees is expanding from a single office to 12 regional offices. The company owns the 172.16.0.0/16 private network and needs an IP addressing plan that supports 12 subnets (one per office), each with at least 50 hosts. the network engineering team must deal with ARP broadcast storms during network scans and plan for future growth."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "solution",
      children: "Solution"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Using VLSM (Variable Length Subnet Masking) from the /16 base, the team designs a hierarchical addressing scheme. Each office gets a /20 subnet (4096 addresses), providing ample room for growth. For the 50-host requirement, /26 subnets (62 usable hosts) are allocated within each office's /20 block. This creates a two-level hierarchy: the backbone routers see only 12 aggregated /20 routes instead of hundreds of smaller routes. The team deploys Dynamic ARP Inspection (DAI) on all access switches to prevent ARP spoofing and implements ARP rate-limiting to reduce broadcast storm impact during automated network scans. They configure DHCP scopes per subnet with 8-hour leases and add DHCP snooping to guard against rogue DHCP servers."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "outcome",
      children: "Outcome"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The hierarchical addressing plan reduces the core routing table from 500+ entries to 12 aggregated routes. ARP broadcast traffic decreases by 60% after implementing ARP caching and DAI. The VLSM design accommodates unexpected growth — one office expands to 200 hosts without renumbering. Annual network downtime drops from 12 hours to under 1 hour due to automated DHCP configuration and ARP attack prevention."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
            children: "VLSM minimizes wasted address space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allocate subnets based on actual host counts, not fixed sizes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Route aggregation reduces routing table size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Summarize contiguous subnets into larger prefixes at backbone routers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARP caching is essential for LAN performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tune ARP cache timeouts to balance freshness vs. broadcast reduction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DHCP automates IP management at scale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use DHCP scopes per subnet with appropriate lease times"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DAI and DHCP snooping prevent L2 attacks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enable on all managed switch ports, especially edge ports"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Plan for growth with hierarchical addressing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reserve address blocks for future subnets in the allocation plan"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PMTUD and fragmentation avoidance improve reliability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set DF bit and use path MTU discovery rather than router fragmentation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "613-chapter-quiz",
      children: "6.13 Chapter Quiz"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Question"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Answer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explanation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q1: What does CIDR solve that classful addressing could not?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CIDR eliminates fixed class boundaries, enabling subnetting of any size through variable prefix lengths and route aggregation."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q2: Why was the IPv4 header checksum removed in IPv6?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L2 (CRC) and L4 (TCP/UDP checksum) already provide integrity; the IP header checksum was redundant overhead."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q3: A 4000-byte datagram traverses an Ethernet link (MTU 1500). How many fragments?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3980 bytes payload / 1480 per fragment = 2 full + 1 partial = 3 fragments."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q4: What problem does NAT introduce for peer-to-peer applications?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NAT maps private IPs to a single public IP; unsolicited inbound packets cannot reach the correct internal host without port forwarding."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q5: What is the primary defense against ARP spoofing on a switched network?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DAI on managed switches validates ARP packets against the DHCP snooping binding table, dropping forged replies."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The network layer provides host-to-host delivery through logical addressing and routing. IPv4 uses 32-bit addresses with fragmentation and checksum support; IPv6 uses 128-bit addresses with a streamlined header. Subnetting and CIDR enable efficient address allocation. NAT extends IPv4 address space at the cost of end-to-end transparency. ARP resolves IP addresses to MAC addresses on local links via broadcast request/unicast reply. DHCP automates configuration through DORA (Discover-Offer-Request-Acknowledge). ICMP provides diagnostic (ping) and error-reporting (Destination Unreachable, TTL Exceeded) capabilities. Tunneling (IP-in-IP, GRE) encapsulates one protocol inside another for virtual connectivity across incompatible networks."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What fields are present in the IPv4 header but absent from the IPv6 header?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nIHL, Identification, Flags, Fragment Offset, Header Checksum, and Options (moved to extension headers in IPv6). IPv6 has a fixed 40-byte header with no checksum and no fragmentation fields.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why was the IPv4 header checksum not carried forward to IPv6?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nIt was redundant. L2 (Ethernet CRC) already provides per-hop integrity, and L4 (TCP/UDP checksum) provides end-to-end integrity. Removing it improved router forwarding performance since every router had to recompute the checksum after decrementing TTL.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between subnetting and supernetting?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nSubnetting divides a larger network into smaller sub-networks (borrowing host bits for the network portion). Supernetting (route aggregation) combines multiple contiguous smaller networks into a larger prefix (borrowing network bits for the host portion). Subnetting reduces broadcast domains; supernetting reduces routing table size.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does NAT enable multiple internal hosts to share a single public IP address?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nNAT with PAT (Port Address Translation) maps each internal (private IP:port) to a unique (public IP:port) pair. The NAT router maintains a translation table. When an internal host sends outbound traffic, the router rewrites the source IP:port to the public IP:an ephemeral port. Responses are demultiplexed by looking up the destination port in the translation table to find the original internal host.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What problem does Path MTU Discovery solve, and how does it differ from IPv4 fragmentation?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nPMTUD avoids router fragmentation by having the source discover the smallest MTU along the path. The source sets the DF bit and reduces packet size when receiving ICMP \"Fragmentation Needed\" messages. Unlike IPv4 fragmentation (where any router can fragment), PMTUD ensures the source controls packet sizing, eliminating the issue where losing one fragment causes the entire datagram to be lost.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why must the DHCP REQUEST message be broadcast?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nTwo reasons: (1) The client typically doesn't have an IP address yet (still using 0.0.0.0), so unicast is not possible. (2) Broadcasting the REQUEST informs all DHCP servers which offer was accepted, allowing non-selected servers to return their offered IP to the available pool immediately.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "7",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What are the three main IPv6 transition mechanisms?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n(1) Dual Stack — running IPv4 and IPv6 simultaneously on the same interface. (2) Tunneling — encapsulating IPv6 packets inside IPv4 (6in4, Teredo, 6to4). (3) Translation — NAT64/DNS64 converts between IPv6 and IPv4 headers for IPv6-only clients accessing IPv4-only servers.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the difference between SNAT, DNAT, and PAT."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nSNAT (Source NAT) translates the source IP of outbound packets (private→public). DNAT (Destination NAT) translates the destination IP of inbound packets (public→private), used for port forwarding. PAT (Port Address Translation) is a form of SNAT that maps many private IPs to one public IP using unique source ports. SNAT hides internal hosts; DNAT exposes internal services; PAT maximizes address utilization.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "9",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "An organization is assigned the CIDR block 200.100.20.0/24. It needs four subnets with at least 50 hosts each. Design the subnet scheme."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nAvailable host bits: 32 - 24 = 8. Needed host bits: ceil(log2(50 + 2)) = 6 bits (64 addresses, 62 usable). Needed subnet bits: ceil(log2(4)) = 2 bits. Check: 6 + 2 = 8 ≤ 8. New prefix: 24 + 2 = /26. Subnet size: 2^(32-26) = 64 addresses (62 usable). Subnets: Subnet 0: 200.100.20.0/26, Subnet 1: 200.100.20.64/26, Subnet 2: 200.100.20.128/26, Subnet 3: 200.100.20.192/26.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "10",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A 3000-byte IP datagram (including 20-byte header) traverses a link with MTU 620 bytes. How many fragments? Provide offset, MF, and total length for each."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nPayload = 2980 bytes. Max payload per fragment = ((620 - 20) / 8) * 8 = (600 / 8) * 8 = 75 * 8 = 600 bytes. Fragment 1: offset=0, MF=1, total=620; Fragment 2: offset=600, MF=1, total=620; Fragment 3: offset=1200, MF=1, total=620; Fragment 4: offset=1800, MF=1, total=620; Fragment 5: offset=2400, MF=0, total=420 (2980 - 2400 = 580 payload + 20 = 600... wait). Let me recalculate: 2980 / 600 = 4 full (2400 bytes) + 580 remainder. Fragment 5: offset=2400, MF=0, total=20+580=600. So 5 fragments total.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "An ARP request is broadcast on an Ethernet LAN with 50 hosts. Each host generates 10 ARP requests per minute. What is the broadcast rate (per second)? How does this change with full ARP caches?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nEach host sends 10 requests/min = 10/60 ≈ 0.167 requests/sec. With 50 hosts: 50 × 0.167 ≈ 8.33 broadcast ARP requests per second. Each broadcast is received by all 50 hosts, so total processed ARP frames = 8.33 × 50 ≈ 416.7 frames/sec. With full ARP caches, most requests would be cache hits (no broadcast needed). If hit rate is 90%, only 10% of requests generate broadcasts → ~0.833 broadcasts/sec.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "12",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A NAT router has one public IP and 500 internal hosts, each with 40 concurrent TCP connections. Is port exhaustion possible? Show calculations."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nTotal concurrent connections: 500 × 40 = 20,000. Available ports per public IP: 65,535 - 1024 (well-known reserved) = 64,511 usable ports. Since 20,000 < 64,511, theoretical exhaustion is not reached. However, practical factors matter: ephemeral port range default on Linux is 32768-60999 (28,232 ports), and each connection consumes one port for the NAT translation. With 20,000 connections, 20,000/28,232 ≈ 71% of the ephemeral range is used. Exhaustion is unlikely but possible during peak bursts. Mitigation: use multiple public IPs or increase the local port range.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementation-problems",
      children: "Implementation Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "13",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a Python function ", (0,jsx_runtime.jsx)(_components.code, {
          children: "calculate_subnet(base_ip, prefix, num_subnets, min_hosts)"
        }), " returning subnet dictionaries."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n```python\nimport ipaddress, math\ndef calculate_subnet(base, prefix, count, min_hosts):\n    avail = 32 - prefix\n    need_h = math.ceil(math.log2(min_hosts + 2))\n    need_s = math.ceil(math.log2(count))\n    if need_h + need_s > avail:\n        raise ValueError(\"Insufficient bits\")\n    new_pfx = prefix + need_s\n    sz = 1 << (32 - new_pfx)\n    base_int = int(ipaddress.IPv4Address(base))\n    result = []\n    for i in range(count):\n        net_int = base_int + i * sz\n        result.append({\n            'subnet': str(ipaddress.IPv4Address(net_int)),\n            'first': str(ipaddress.IPv4Address(net_int + 1)),\n            'last': str(ipaddress.IPv4Address(net_int + sz - 2)),\n            'bcast': str(ipaddress.IPv4Address(net_int + sz - 1)),\n            'prefix': f\"/{new_pfx}\",\n            'usable': sz - 2\n        })\n    return result\n```\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "14",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a C++ function parsing an IPv4 hex dump into field printouts."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n```cpp\n#include ", (0,jsx_runtime.jsxs)(_components.iostream, {
        children: ["\n#include ", (0,jsx_runtime.jsxs)(_components.cstdint, {
          children: ["\n#include ", (0,jsx_runtime.jsx)(_components.arpa, {
            "inet.h": "",
            children: "\nvoid parse_ipv4(const uint8_t* p) {\n    uint8_t ver = (p[0] >> 4) & 0x0F, ihl = p[0] & 0x0F;\n    uint16_t len = (p[2] << 8) | p[3];\n    uint16_t id = (p[4] << 8) | p[5];\n    uint8_t flags = (p[6] >> 5) & 0x07;\n    uint16_t offset = ((p[6] & 0x1F) << 8) | p[7];\n    char src[16], dst[16];\n    inet_ntop(AF_INET, &p[12], src, 16);\n    inet_ntop(AF_INET, &p[16], dst, 16);\n    printf(\"Ver=%d IHL=%d Len=%d ID=0x%04X Flags=%d Offset=%d TTL=%d Proto=%d Src=%s Dst=%s\\n\",\n           ver, ihl, len, id, flags, offset * 8, p[8], p[9], src, dst);\n}\n```\n"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "15",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a Python class ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FragmentationSimulator"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fragment()"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "reassemble()"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n```python\nfrom dataclasses import dataclass\n@dataclass\nclass Fragment:\n    offset: int; length: int; mf: bool; data: bytes\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "class FragmentationSimulator:\r\ndef fragment(self, datagram: bytes, mtu: int, id: int) -> list:\r\nHEADER = 20\r\nmax_payload = ((mtu - HEADER) // 8) * 8\r\npayload = datagram[HEADER:]\r\nfrags, offset = [], 0\r\nwhile offset < len(payload):\r\nfrag_payload = min(max_payload, len(payload) - offset)\r\nfrags.append(Fragment(offset, HEADER + frag_payload,\r\noffset + max_payload < len(payload),\r\npayload[offset:offset + frag_payload]))\r\noffset += frag_payload\r\nreturn frags"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "def reassemble(self, fragments: list) -> bytes:\r\n    payload = bytearray()\r\n    for f in sorted(fragments, key=lambda x: x.offset):\r\n        payload.extend(f.data)\r\n    return bytes(payload)\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "</details>\r\n\r\n16. Write a Python function `simulate_nat(internal_hosts, public_ip)` simulating 100 connections. Report unique ports used.\r\n\r\n<details>\r\n<summary>Solution</summary>\r\n```python\r\ndef simulate_nat(internal_hosts, public_ip):\r\n    used_ports, entries = set(), {}\r\n    next_port = 50000\r\n    for host in range(internal_hosts):\r\n        for conn in range(100):\r\n            private = f\"10.0.{host // 256}.{host % 256}:{30000 + conn}\"\r\n            public_port = next_port; next_port += 1\r\n            used_ports.add(public_port)\r\n            entries[private] = f\"{public_ip}:{public_port}\"\r\n    return {\r\n        'total_connections': len(entries),\r\n        'unique_ports_used': len(used_ports),\r\n        'port_range': f\"50000-{next_port - 1}\",\r\n        'entries': entries\r\n    }\r\nresult = simulate_nat(10, \"203.0.113.1\")\r\nprint(f\"Connections: {result['total_connections']}, Ports: {result['unique_ports_used']}\")\r\n# Connections: 1000, Ports: 1000\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "17",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Design an addressing plan for a multinational corporation."
        }), " A company has 50 countries, 3-20 departments each with 10-500 devices. HQ needs 5000 addresses; each country needs 1000 with growth room. Design hierarchical CIDR/VLSM. Show 5 representative countries. Explain route aggregation at each level. Provide a validation function in C++ or Python."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nUse 10.0.0.0/8 as base. Allocate /16 per country (65,536 addresses each, enough for 50 countries × 65,536 = 3,276,800). Within each /16, allocate /20 per department (4096 addresses, enough for up to 16 departments per country). HQ gets 10.0.0.0/16. Countries: USA = 10.1.0.0/16, UK = 10.2.0.0/16, JP = 10.3.0.0/16, DE = 10.4.0.0/16, BR = 10.5.0.0/16. Route aggregation: core routers see only /16 prefixes (50 routes). Country routers see /20 prefixes per department. Validation function:\n```python\nimport ipaddress\ndef validate_plan(country_nets):\n    seen = set()\n    for cidr in country_nets:\n        net = ipaddress.IPv4Network(cidr, strict=False)\n        for s in seen:\n            if net.overlaps(s):\n                return False, f\"Overlap: {cidr} overlaps {s}\"\n        seen.add(net)\n    return True, f\"Valid: {len(seen)} non-overlapping networks\"\ncountries = [\"10.0.0.0/16\",\"10.1.0.0/16\",\"10.2.0.0/16\",\"10.3.0.0/16\",\"10.4.0.0/16\"]\nprint(validate_plan(countries))\n```\n"]
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

/***/ 8453
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
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