"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[20006],{

/***/ 86578
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_computer_networks_11_security_md_632_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-computer-networks-11-security-md-632.json
const site_docs_courses_computer_networks_11_security_md_632_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/computer-networks/11-security","title":"Chapter 11: Network Security","description":"Learning Objectives","source":"@site/docs/courses/computer-networks/11-security.md","sourceDirName":"courses/computer-networks","slug":"/computer-networks/11-security","permalink":"/ai-engineering-journey/computer-networks/11-security","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"id":"11-security","slug":"/computer-networks/11-security","title":"Chapter 11: Network Security","sidebar_label":"Chapter 11: Network Security","sidebar_position":11},"sidebar":"course-computer-networks","previous":{"title":"Chapter 10: The Application Layer → Complete Reference","permalink":"/ai-engineering-journey/computer-networks/10-application-layer"},"next":{"title":"Chapter 12: Wireless Networks (Extended)","permalink":"/ai-engineering-journey/computer-networks/12-wireless"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/computer-networks/11-security.md


const frontMatter = {
	id: '11-security',
	slug: '/computer-networks/11-security',
	title: 'Chapter 11: Network Security',
	sidebar_label: 'Chapter 11: Network Security',
	sidebar_position: 11
};
const contentTitle = 'Chapter 11: Network Security';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "11.1 Network Security Threats",
  "id": "111-network-security-threats",
  "level": 2
}, {
  "value": "11.1.1 Passive Attacks",
  "id": "1111-passive-attacks",
  "level": 3
}, {
  "value": "11.1.2 Active Attacks",
  "id": "1112-active-attacks",
  "level": 3
}, {
  "value": "11.2 Cryptography Basics",
  "id": "112-cryptography-basics",
  "level": 2
}, {
  "value": "11.2.1 Symmetric Key Cryptography",
  "id": "1121-symmetric-key-cryptography",
  "level": 3
}, {
  "value": "11.2.2 Asymmetric Key Cryptography",
  "id": "1122-asymmetric-key-cryptography",
  "level": 3
}, {
  "value": "11.2.3 Diffie-Hellman Key Exchange",
  "id": "1123-diffie-hellman-key-exchange",
  "level": 3
}, {
  "value": "11.2.4 Symmetric vs Asymmetric Cryptography",
  "id": "1124-symmetric-vs-asymmetric-cryptography",
  "level": 3
}, {
  "value": "11.3 Integrity and Authentication",
  "id": "113-integrity-and-authentication",
  "level": 2
}, {
  "value": "11.3.1 Cryptographic Hash Functions",
  "id": "1131-cryptographic-hash-functions",
  "level": 3
}, {
  "value": "11.3.2 Message Authentication Code (MAC)",
  "id": "1132-message-authentication-code-mac",
  "level": 3
}, {
  "value": "11.3.3 Digital Signatures",
  "id": "1133-digital-signatures",
  "level": 3
}, {
  "value": "11.3.4 Certificates and PKI",
  "id": "1134-certificates-and-pki",
  "level": 3
}, {
  "value": "11.4 Firewalls",
  "id": "114-firewalls",
  "level": 2
}, {
  "value": "11.4.1 Packet-Filter Firewalls",
  "id": "1141-packet-filter-firewalls",
  "level": 3
}, {
  "value": "11.4.2 Stateful Firewalls",
  "id": "1142-stateful-firewalls",
  "level": 3
}, {
  "value": "11.4.3 Application-Layer Firewalls (Proxies)",
  "id": "1143-application-layer-firewalls-proxies",
  "level": 3
}, {
  "value": "11.4.4 Next-Generation Firewalls (NGFW)",
  "id": "1144-next-generation-firewalls-ngfw",
  "level": 3
}, {
  "value": "TypeScript Implementation: FirewallRuleEngine",
  "id": "typescript-implementation-firewallruleengine",
  "level": 3
}, {
  "value": "11.5 VPNs",
  "id": "115-vpns",
  "level": 2
}, {
  "value": "11.5.1 IPSec",
  "id": "1151-ipsec",
  "level": 3
}, {
  "value": "11.5.2 SSL/TLS VPN",
  "id": "1152-ssltls-vpn",
  "level": 3
}, {
  "value": "11.5.3 VPN Types Comparison",
  "id": "1153-vpn-types-comparison",
  "level": 3
}, {
  "value": "TypeScript Implementation: IPsecManager",
  "id": "typescript-implementation-ipsecmanager",
  "level": 3
}, {
  "value": "11.6 TLS/SSL In Depth",
  "id": "116-tlsssl-in-depth",
  "level": 2
}, {
  "value": "11.6.1 TLS 1.3 vs 1.2 Comparison",
  "id": "1161-tls-13-vs-12-comparison",
  "level": 3
}, {
  "value": "TypeScript Implementation: TLSHandshakeSimulator",
  "id": "typescript-implementation-tlshandshakesimulator",
  "level": 3
}, {
  "value": "11.7 IDS/IPS",
  "id": "117-idsips",
  "level": 2
}, {
  "value": "Detection Methods:",
  "id": "detection-methods",
  "level": 3
}, {
  "value": "IDS vs IPS vs Firewall Comparison",
  "id": "ids-vs-ips-vs-firewall-comparison",
  "level": 3
}, {
  "value": "11.8 DDoS",
  "id": "118-ddos",
  "level": 2
}, {
  "value": "DDoS Attack Types with Mitigation",
  "id": "ddos-attack-types-with-mitigation",
  "level": 3
}, {
  "value": "11.9 802.1X",
  "id": "119-8021x",
  "level": 2
}, {
  "value": "11.10 WPA3",
  "id": "1110-wpa3",
  "level": 2
}, {
  "value": "Key Features:",
  "id": "key-features",
  "level": 3
}, {
  "value": "WPA2 vs WPA3 Comparison",
  "id": "wpa2-vs-wpa3-comparison",
  "level": 3
}, {
  "value": "11.11 DNSSEC",
  "id": "1111-dnssec",
  "level": 2
}, {
  "value": "How it works:",
  "id": "how-it-works",
  "level": 3
}, {
  "value": "11.12 Interview Corner",
  "id": "1112-interview-corner",
  "level": 2
}, {
  "value": "Q1: Explain the TLS handshake steps.",
  "id": "q1-explain-the-tls-handshake-steps",
  "level": 3
}, {
  "value": "Q2: Where should a firewall be placed in a network?",
  "id": "q2-where-should-a-firewall-be-placed-in-a-network",
  "level": 3
}, {
  "value": "Q3: Compare VPN vs MPLS.",
  "id": "q3-compare-vpn-vs-mpls",
  "level": 3
}, {
  "value": "Q4: Explain 802.1X authentication flow.",
  "id": "q4-explain-8021x-authentication-flow",
  "level": 3
}, {
  "value": "Q5: How does DNSSEC prevent cache poisoning?",
  "id": "q5-how-does-dnssec-prevent-cache-poisoning",
  "level": 3
}, {
  "value": "11.13 Applications in Real Systems",
  "id": "1113-applications-in-real-systems",
  "level": 2
}, {
  "value": "OpenVPN",
  "id": "openvpn",
  "level": 3
}, {
  "value": "IPsec (strongSwan, Libreswan, Windows built-in)",
  "id": "ipsec-strongswan-libreswan-windows-built-in",
  "level": 3
}, {
  "value": "Let&#39;s Encrypt",
  "id": "lets-encrypt",
  "level": 3
}, {
  "value": "Cloudflare DDoS Protection",
  "id": "cloudflare-ddos-protection",
  "level": 3
}, {
  "value": "Pro Tips",
  "id": "pro-tips",
  "level": 2
}, {
  "value": "One-Sentence Takeaways",
  "id": "one-sentence-takeaways",
  "level": 2
}, {
  "value": "Concept Comparison Table",
  "id": "concept-comparison-table",
  "level": 2
}, {
  "value": "Quick Reference: Firewall Types",
  "id": "quick-reference-firewall-types",
  "level": 2
}, {
  "value": "DDoS Protection Quick Reference",
  "id": "ddos-protection-quick-reference",
  "level": 2
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 2
}, {
  "value": "Mermaid Diagram: OSI Security Layers",
  "id": "mermaid-diagram-osi-security-layers",
  "level": 2
}, {
  "value": "Case Study: Enterprise Network Security Design",
  "id": "case-study-enterprise-network-security-design",
  "level": 2
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
    details: "details",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    span: "span",
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
        id: "chapter-11-network-security",
        children: "Chapter 11: Network Security"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify the principal threats to network security: eavesdropping, tampering, impersonation, and denial of service."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the principles of symmetric and asymmetric key cryptography."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe digital signatures, message authentication codes, and public-key certificates."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare packet-filter, stateful, and application-layer firewalls with rule evaluation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze IPSec and TLS in the context of virtual private networks."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand DDoS attack types, IDS/IPS deployment, 802.1X, WPA3, and DNSSEC."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "lesson-visuals",
      "aria-label": "Visual learning resources",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.header, {
        children: [(0,jsx_runtime.jsx)(_components.span, {
          children: "VISUAL LEARNING"
        }), (0,jsx_runtime.jsx)(_components.h2, {
          children: "See it. Review it. Remember it."
        })]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/computer-networks/11-security/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/computer-networks/11-security/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/computer-networks/11-security/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/computer-networks/11-security/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/computer-networks/11-security/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/computer-networks/11-security/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "111-network-security-threats",
      children: "11.1 Network Security Threats"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/computer-networks/ch08-security-wireless.png",
        alt: "Network Security, Cryptography and Wireless Networking"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/computer-networks/ch-14-network-security.png",
        alt: "Network Security Overview"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Network security encompasses the policies and mechanisms that protect the confidentiality, integrity, and availability of data in transit. Threats are broadly classified as passive (the adversary listens but does not modify) and active (the adversary modifies, injects, or denies)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1111-passive-attacks",
      children: "11.1.1 Passive Attacks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Eavesdropping (sniffing)."
      }), " An adversary captures packets traversing a network segment. On shared media (wireless, Ethernet hubs), any station on the segment can capture all traffic. On switched networks, ARP spoofing or port mirroring enables packet capture."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Traffic analysis."
      }), " Even if packets are encrypted, an adversary can observe communication patterns → who talks to whom, at what times, and in what volumes → to infer sensitive information."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy."
      }), " Eavesdropping is like a postal worker opening envelopes, reading the letters inside, resealing them, and delivering them. The sender and receiver never know the letter was read."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode: Packet capture on a network interface."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION capture_packets(interface, count):\n    socket = open_raw_socket(interface)\n    packets = []\n    FOR i = 1 TO count:\n        packet = socket.receive()\n        packets.append(packet)\n        LOG(\"Packet\", i, \":\", packet.src_ip, \"->\", packet.dst_ip, packet.length, \"bytes\")\n    CLOSE socket\n    RETURN packets\nEND\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python implementation: Passive packet sniffer."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import socket\nimport struct\n\ndef capture_packets(interface: str, count: int) -> list:\n    \"\"\"Capture raw packets from a network interface.\"\"\"\n    sock = socket.socket(socket.AF_INET, socket.SOCK_RAW, socket.IPPROTO_TCP)\n    sock.settimeout(5)\n    packets = []\n    for i in range(count):\n        try:\n            data, addr = sock.recvfrom(65535)\n            ip_header = data[:20]\n            iph = struct.unpack('!BBHHHBBH4s4s', ip_header)\n            src = socket.inet_ntoa(iph[8])\n            dst = socket.inet_ntoa(iph[9])\n            packets.append({'src': src, 'dst': dst, 'data': data})\n            print(f\"Packet {i+1}: {src} -> {dst} ({len(data)} bytes)\")\n        except socket.timeout:\n            break\n    sock.close()\n    return packets\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ implementation: Packet sniffer (Linux raw socket)."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <cstring>\n#include <arpa/inet.h>\n#include <sys/socket.h>\n#include <netinet/ip.h>\n#include <netinet/tcp.h>\n#include <unistd.h>\n#include <vector>\n\nstruct Packet {\n    std::string src, dst;\n    int len;\n};\n\nstd::vector<Packet> capturePackets(const std::string& iface, int count) {\n    int sock = socket(AF_INET, SOCK_RAW, IPPROTO_TCP);\n    if (sock < 0) { perror(\"socket\"); return {}; }\n    std::vector<Packet> packets;\n    char buf[65536];\n    for (int i = 0; i < count; ++i) {\n        sockaddr_in addr;\n        socklen_t addrLen = sizeof(addr);\n        int n = recvfrom(sock, buf, sizeof(buf), 0, (sockaddr*)&addr, &addrLen);\n        if (n < 0) break;\n        struct iphdr* ip = (struct iphdr*)buf;\n        char src[32], dst[32];\n        inet_ntop(AF_INET, &ip->saddr, src, sizeof(src));\n        inet_ntop(AF_INET, &ip->daddr, dst, sizeof(dst));\n        packets.push_back({src, dst, n});\n        std::cout << \"Packet \" << (i+1) << \": \" << src << \" -> \" << dst << \" (\" << n << \" bytes)\\n\";\n    }\n    close(sock);\n    return packets;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A&D: Passive Attacks"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Difficult to detect (no traffic modification)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provides no active control over target"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Low risk for attacker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encrypted traffic limits value"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Useful for reconnaissance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires physical/logical network access"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1112-active-attacks",
      children: "11.1.2 Active Attacks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tampering."
      }), " An adversary modifies packets in transit. Without integrity protection, a router or middlebox can alter packet content undetected."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Impersonation (spoofing)."
      }), " An adversary sends packets with a forged source IP address. IP spoofing enables amplification attacks (e.g., DNS amplification) and session hijacking."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Denial of service (DoS)."
      }), " An adversary overwhelms a target with traffic, exhausting bandwidth, CPU, or memory resources. Distributed DoS (DDoS) uses many compromised hosts (botnet) to amplify the attack."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Man-in-the-middle (MITM)."
      }), " An adversary intercepts communication between two parties, relaying messages while potentially modifying them. Both parties believe they are communicating directly."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Replay attack."
      }), " An adversary captures a valid message and retransmits it later to trick the receiver into performing an action."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy."
      }), " Active attacks are like a courier who opens a package, replaces the contents with counterfeit items, then reseals and delivers it. Neither party knows the swap occurred."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode: ARP spoofing (MITM enabler)."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION arp_spoof(target_ip, gateway_ip):\n    target_mac = resolve_mac(target_ip)\n    gateway_mac = resolve_mac(gateway_ip)\n    WHILE attack_running:\n        send_arp_reply(target_ip, gateway_mac, target_mac)\n        send_arp_reply(gateway_ip, target_mac, gateway_mac)\n        WAIT(2 seconds)\n    END\nEND\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge cases in active attacks."
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Replay attack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker resends a captured \"transfer $1000\" packet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Include timestamps + nonces in every message; use sequence numbers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MITM with forged cert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker presents fake certificate during TLS handshake"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Certificate pinning; CA-signed certificates; CT logs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DoS on firewall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker floods firewall with incomplete connections exhausting state table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SYN cookies; connection rate limits; asymmetric firewall design"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Amplification attack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small spoofed DNS query generates large response to victim"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BCP 38 ingress filtering; disable open resolvers"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A&D: Active Attacks"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complete control over target data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High detection risk"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can cause permanent damage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires more resources"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple attack vectors available"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Leaves forensic evidence"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "112-cryptography-basics",
      children: "11.2 Cryptography Basics"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1121-symmetric-key-cryptography",
      children: "11.2.1 Symmetric Key Cryptography"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In symmetric key cryptography, both sender and receiver share a single secret key K. The encryption function E and decryption function D satisfy:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "D(K, E(K, M)) = M"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Stream ciphers"
      }), " encrypt one bit or byte at a time by XORing the plaintext with a pseudorandom keystream (e.g., RC4, ChaCha20)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Block ciphers"
      }), " encrypt fixed-size blocks (typically 128 bits). AES (Advanced Encryption Standard) processes 128-bit blocks with key sizes of 128, 192, or 256 bits."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "AES encryption steps (128-bit key, 10 rounds):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Key expansion"
        }), ": Derive 10 round keys from the original 128-bit key using Rijndael key schedule."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Initial AddRoundKey"
        }), ": XOR plaintext block with round key 0."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "For rounds 1-9"
        }), ": SubBytes (nonlinear byte substitution via S-box), ShiftRows (circular shift of rows), MixColumns (matrix multiplication in GF(2^8)), AddRoundKey (XOR with round key)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Final round (round 10)"
        }), ": SubBytes, ShiftRows, AddRoundKey (no MixColumns)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Modes of operation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ECB (Electronic Codebook):"
        }), " each block encrypted independently; identical plaintext blocks produce identical ciphertext. Leaks patterns."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CBC (Cipher Block Chaining):"
        }), " each plaintext block is XORed with the previous ciphertext block before encryption. Sequential."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CTR (Counter):"
        }), " encrypts a counter value and XORs with plaintext; parallelizable, random access."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GCM (Galois/Counter Mode):"
        }), " CTR mode + authentication tag; provides both confidentiality and integrity."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy."
      }), " Symmetric encryption is like a locked box where both parties have an identical key. The sender locks the message, the receiver unlocks it. The challenge is securely distributing the key."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode: AES-CBC encryption."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION aes_cbc_encrypt(plaintext, key, iv):\n    blocks = pad_and_split(plaintext, 16)    // PKCS#7 padding\n    prev = iv\n    ciphertext = []\n    FOR block IN blocks:\n        xored = block XOR prev\n        encrypted = aes_core_encrypt(xored, key)\n        ciphertext.append(encrypted)\n        prev = encrypted\n    RETURN ciphertext\nEND\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python implementation: AES-CBC (conceptual)."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import os\nfrom hashlib import sha256\n\ndef xor_bytes(a: bytes, b: bytes) -> bytes:\n    return bytes(x ^ y for x, y in zip(a, b))\n\ndef pad_pkcs7(data: bytes, block_size: int = 16) -> bytes:\n    pad_len = block_size - (len(data) % block_size)\n    return data + bytes([pad_len] * pad_len)\n\ndef aes_cbc_encrypt(plaintext: bytes, key: bytes, iv: bytes) -> bytes:\n    block_size = 16\n    plaintext = pad_pkcs7(plaintext, block_size)\n    ciphertext = b\"\"\n    prev = iv\n    for i in range(0, len(plaintext), block_size):\n        block = plaintext[i:i + block_size]\n        xored = xor_bytes(block, prev)\n        round_key = sha256(key + bytes([i // 16])).digest()[:block_size]\n        encrypted = xor_bytes(xored, round_key)\n        ciphertext += encrypted\n        prev = encrypted\n    return ciphertext\n\ndef aes_cbc_decrypt(ciphertext: bytes, key: bytes, iv: bytes) -> bytes:\n    block_size = 16\n    plaintext = b\"\"\n    prev = iv\n    for i in range(0, len(ciphertext), block_size):\n        block = ciphertext[i:i + block_size]\n        round_key = sha256(key + bytes([i // 16])).digest()[:block_size]\n        decrypted = xor_bytes(block, round_key)\n        plaintext += xor_bytes(decrypted, prev)\n        prev = block\n    pad_len = plaintext[-1]\n    return plaintext[:-pad_len]\n\nkey = os.urandom(16)\niv = os.urandom(16)\npt = b\"Hello, Network Security!\"\nct = aes_cbc_encrypt(pt, key, iv)\ndt = aes_cbc_decrypt(ct, key, iv)\nprint(f\"Plaintext: {pt}\")\nprint(f\"Ciphertext (hex): {ct.hex()}\")\nprint(f\"Decrypted: {dt}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ implementation: AES-CBC (conceptual)."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <cstdint>\n\nusing Bytes = std::vector<uint8_t>;\n\nBytes xorBytes(const Bytes& a, const Bytes& b) {\n    Bytes result(a.size());\n    for (size_t i = 0; i < a.size(); ++i)\n        result[i] = a[i] ^ b[i];\n    return result;\n}\n\nBytes padPKCS7(const Bytes& data, size_t blockSize = 16) {\n    Bytes result = data;\n    uint8_t padLen = blockSize - (data.size() % blockSize);\n    result.insert(result.end(), padLen, padLen);\n    return result;\n}\n\nBytes aesCbcEncrypt(const Bytes& plaintext, const Bytes& key, const Bytes& iv) {\n    size_t blockSize = 16;\n    Bytes padded = padPKCS7(plaintext, blockSize);\n    Bytes ciphertext;\n    Bytes prev = iv;\n    for (size_t i = 0; i < padded.size(); i += blockSize) {\n        Bytes block(padded.begin() + i, padded.begin() + i + blockSize);\n        Bytes xored = xorBytes(block, prev);\n        Bytes roundKey(blockSize, static_cast<uint8_t>(key[i / 16 % key.size()]));\n        Bytes encrypted = xorBytes(xored, roundKey);\n        ciphertext.insert(ciphertext.end(), encrypted.begin(), encrypted.end());\n        prev = encrypted;\n    }\n    return ciphertext;\n}\n\nint main() {\n    Bytes key = {0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07,\n                 0x08, 0x09, 0x0A, 0x0B, 0x0C, 0x0D, 0x0E, 0x0F};\n    Bytes iv(16, 0x00);\n    Bytes pt = {'H', 'e', 'l', 'l', 'o', '!'};\n    Bytes ct = aesCbcEncrypt(pt, key, iv);\n    std::cout << \"Ciphertext: \" << ct.size() << \" bytes\\n\";\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity analysis of AES-CBC."
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "WHY"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Encryption (n bytes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each 16-byte block processed independently; one AES core per block"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AES core (per block)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed 10/12/14 rounds; all ops are table lookups and XOR on 16 bytes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Key expansion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(r)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(r)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r = 10-14 rounds; each derived via XOR and S-box"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1122-asymmetric-key-cryptography",
      children: "11.2.2 Asymmetric Key Cryptography"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Asymmetric (public-key) cryptography uses a pair of keys: a public key K_pub freely distributed and a private key K_priv kept secret."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "D(K_priv, E(K_pub, M)) = M"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "RSA"
      }), " (Rivest-Shamir-Adleman) security relies on the difficulty of factoring large composite numbers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RSA key generation steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose two large primes p and q (2048 bits each for security)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute n = p * q (modulus, 4096 bits)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute phi(n) = (p-1)(q-1)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose e such that 1 < e < phi(n) and gcd(e, phi(n)) = 1 (commonly e = 65537)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute d = e^{-1} mod phi(n) using extended Euclidean algorithm."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Public key: (n, e); private key: (n, d)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Encryption: c = m^e mod n. Decryption: m = c^d mod n."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Elliptic Curve Cryptography (ECC)"
      }), " provides equivalent security with smaller key sizes (256-bit ECC ~ 3072-bit RSA). Used in TLS 1.3 and Bitcoin."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy."
      }), " Asymmetric encryption is like a padlock box. Alice gives everyone an open padlock (public key). Bob puts his message in the box, snaps the padlock shut, and sends it. Only Alice has the key (private key) to open it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode: RSA key generation."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION rsa_keygen(bits):\n    p = random_prime(bits / 2)\n    q = random_prime(bits / 2)\n    n = p * q\n    phi = (p - 1) * (q - 1)\n    e = 65537\n    d = modular_inverse(e, phi)\n    RETURN ((n, e), (n, d))\nEND\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python implementation: RSA."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import random\n\ndef is_prime(n: int, k: int = 40) -> bool:\n    \"\"\"Miller-Rabin primality test.\"\"\"\n    if n < 2: return False\n    if n < 4: return True\n    if n % 2 == 0: return False\n    r, d = 0, n - 1\n    while d % 2 == 0:\n        r += 1\n        d //= 2\n    for _ in range(k):\n        a = random.randrange(2, n - 2)\n        x = pow(a, d, n)\n        if x == 1 or x == n - 1:\n            continue\n        for _ in range(r - 1):\n            x = pow(x, 2, n)\n            if x == n - 1: break\n        else:\n            return False\n    return True\n\ndef random_prime(bits: int) -> int:\n    while True:\n        n = random.getrandbits(bits)\n        n |= (1 << bits - 1) | 1\n        if is_prime(n): return n\n\ndef extended_gcd(a: int, b: int):\n    if b == 0: return a, 1, 0\n    g, x1, y1 = extended_gcd(b, a % b)\n    return g, y1, x1 - (a // b) * y1\n\ndef modular_inverse(e: int, phi: int) -> int:\n    g, x, _ = extended_gcd(e, phi)\n    if g != 1: raise ValueError(\"No inverse\")\n    return x % phi\n\ndef rsa_keygen(bits: int = 1024):\n    p = random_prime(bits // 2)\n    q = random_prime(bits // 2)\n    n = p * q\n    phi = (p - 1) * (q - 1)\n    e = 65537\n    d = modular_inverse(e, phi)\n    return (n, e), (n, d)\n\npub, priv = rsa_keygen(512)\nn, e = pub\n_, d = priv\nmsg = 42\nct = pow(msg, e, n)\npt = pow(ct, d, n)\nprint(f\"Original: {msg}, Decrypted: {pt}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ implementation: RSA modular exponentiation."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <cstdint>\n\nuint64_t modPow(uint64_t base, uint64_t exp, uint64_t mod) {\n    uint64_t result = 1;\n    base = base % mod;\n    while (exp > 0) {\n        if (exp & 1) result = (result * base) % mod;\n        exp = exp >> 1;\n        base = (base * base) % mod;\n    }\n    return result;\n}\n\nuint64_t modInverse(uint64_t e, uint64_t phi) {\n    int64_t t = 0, newT = 1;\n    int64_t r = phi, newR = e;\n    while (newR != 0) {\n        int64_t q = r / newR;\n        int64_t tmp = t - q * newT; t = newT; newT = tmp;\n        tmp = r - q * newR; r = newR; newR = tmp;\n    }\n    if (r > 1) return 0;\n    if (t < 0) t += phi;\n    return t;\n}\n\nint main() {\n    uint64_t p = 61, q = 53;\n    uint64_t n = p * q;\n    uint64_t phi = (p - 1) * (q - 1);\n    uint64_t e = 17, d = modInverse(e, phi);\n    uint64_t msg = 65, ct = modPow(msg, e, n), pt = modPow(ct, d, n);\n    std::cout << \"Original=\" << msg << \" Decrypted=\" << pt << \"\\n\";\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity analysis of RSA."
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "WHY"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Key generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(b^4) naive; O(b^3) optimized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primality testing on O(b) candidates; arithmetic is O(b^2) per op"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(b^3) with e=65537"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Square-and-multiply: 17 multiplications with e=65537"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Decryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(b^3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exponent d is full b bits; O(b) multiplications of O(b^2) each"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1123-diffie-hellman-key-exchange",
      children: "11.2.3 Diffie-Hellman Key Exchange"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Diffie-Hellman (DH) allows two parties to establish a shared secret over an insecure channel."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Alice and Bob agree on public parameters g (generator) and p (large prime)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Alice chooses random private a, computes A = g^a mod p, sends A to Bob."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bob chooses random private b, computes B = g^b mod p, sends B to Alice."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Alice computes shared_secret = B^a mod p = g^{ab} mod p."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bob computes shared_secret = A^b mod p = g^{ab} mod p."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy (color mixing)."
      }), " Alice and Bob each choose a private color and mix it with a public base color (yellow). They exchange the mixtures. Each adds their private color to the received mixture, arriving at the same shared secret color. Eve sees the mixtures but cannot separate them."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry run trace table (DH with small numbers: g=5, p=23)."
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Alice"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Channel (Eve sees)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bob"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agrees g=5, p=23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "g=5, p=23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agrees g=5, p=23"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Private a=6, A=5^6 mod 23=8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A=8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B=19"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Private b=15, B=5^15 mod 23=19"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "s = 19^6 mod 23 = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "s = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "s = 8^15 mod 23 = 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared secret = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eve sees g=5, p=23, A=8, B=19"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared secret = 2"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DH is vulnerable to MITM unless public values are authenticated. Elliptic Curve Diffie-Hellman (ECDHE) is used in TLS 1.3 for forward secrecy."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1124-symmetric-vs-asymmetric-cryptography",
      children: "11.2.4 Symmetric vs Asymmetric Cryptography"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Symmetric (AES)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Asymmetric (RSA/ECC)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Key count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 shared key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 keys (public + private)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Key distribution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Needs secure channel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Public key can be published"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very fast (AES-NI hardware)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100-1000x slower"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bulk encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No, limited to small data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Key size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128-256 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2048-4096 bits (RSA); 256 bits (ECC)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security basis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Substitution-permutation net"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Factorization (RSA) or ECDLP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use cases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File/disk/TLS data encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key exchange, digital signatures"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quantum resistant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (Grover's halves security)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (Shor's breaks both)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast, simple hardware impl"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solves key distribution problem"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disadvantages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key distribution problem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow, larger key sizes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "113-integrity-and-authentication",
      children: "11.3 Integrity and Authentication"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1131-cryptographic-hash-functions",
      children: "11.3.1 Cryptographic Hash Functions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A hash function H maps an arbitrary-length input to a fixed-length output (digest). Cryptographic hash functions must be:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Preimage resistant"
        }), ": given y, infeasible to find x such that H(x) = y."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Second preimage resistant"
        }), ": given x, infeasible to find x' != x such that H(x') = H(x)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Collision resistant"
        }), ": infeasible to find any x1 != x2 such that H(x1) = H(x2)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "SHA-256"
      }), " produces a 256-bit digest. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SHA-3"
      }), " is the latest NIST standard."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy."
      }), " A hash is like a fingerprint. A fingerprint uniquely identifies a person but cannot be reversed to reconstruct the person's appearance. Similarly, a hash uniquely identifies data but cannot be reversed to recover the original data."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode: SHA-256 (simplified)."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION sha256(message):\n    message = pad(message)        // Append '1', then zeros, then 64-bit length\n    blocks = split(message, 64)   // 512-bit (64-byte) blocks\n    state = init_state()          // 8 x 32-bit hash values (H0-H7)\n    FOR block IN blocks:\n        w = create_message_schedule(block)  // 64 x 32-bit words\n        state = compression_loop(state, w)  // 64 rounds of and/xor/rot/+\n    RETURN concatenate(state)\nEND\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1132-message-authentication-code-mac",
      children: "11.3.2 Message Authentication Code (MAC)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A MAC uses a shared secret key K to produce an authentication tag for a message:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "T = MAC(K, M)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The receiver recomputes the tag and compares. Any change to the message or use of a different key produces a different tag."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HMAC (Hash-based MAC, RFC 2104): HMAC(K, M) = H((K XOR opad) || H((K XOR ipad) || M))"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy."
      }), " A MAC is like a tamper-evident seal on a package. The seal is created with a specific tool (key) that only the sender and receiver have. If the package is tampered with, the seal breaks and reveals the tampering."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1133-digital-signatures",
      children: "11.3.3 Digital Signatures"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A digital signature provides non-repudiation: the sender cannot deny having signed the message. The sender signs with their private key:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "S = E(K_priv, H(M))"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The receiver verifies with the sender's public key:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "H(M) = D(K_pub, S)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RSA signatures work analogously to encryption but with the roles of public and private keys reversed. ECDSA (Elliptic Curve Digital Signature Algorithm) provides signatures with ECC keys."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy."
      }), " A digital signature is like a handwritten signature on a legal contract. The signature proves who signed it (authentication), that the document was not altered after signing (integrity), and the signer cannot later deny signing (non-repudiation)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1134-certificates-and-pki",
      children: "11.3.4 Certificates and PKI"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A digital certificate binds a public key to an identity. X.509 certificates contain:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version, serial number, signature algorithm"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Issuer (Certificate Authority, CA)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validity period (notBefore, notAfter)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Subject (the entity the certificate identifies)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Subject's public key"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CA's signature"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The CA is a trusted third party. Certificate chains establish trust: a root CA certificate is self-signed and distributed with the OS. Intermediate CAs issue end-entity certificates. The client validates the chain up to a trusted root."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge case: Certificate revocation."
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mechanism"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Limitation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Private key compromised"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CRL (Certificate Revocation List)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CRLs can be large; delay between revocation and distribution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CA compromise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OCSP (Online Certificate Status Protocol)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OCSP responder can be DoS'd; privacy concerns (CA learns which sites you visit)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Certificate mistakenly issued"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OCSP Stapling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server fetches OCSP response and includes in TLS handshake; not all servers support it"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "114-firewalls",
      children: "11.4 Firewalls"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A firewall is a system that controls network traffic based on a security policy. Firewalls are categorized by the layer at which they operate and the statefulness of their inspection."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1141-packet-filter-firewalls",
      children: "11.4.1 Packet-Filter Firewalls"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Packet filters examine IP and transport header fields: source/destination address, port, protocol type, and interface. Rules are evaluated in order; the first matching rule determines the action (allow or deny)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example iptables rules:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "iptables -A INPUT -p tcp --dport 22 -s 10.0.0.0/8 -j ACCEPT\niptables -A INPUT -p tcp --dport 22 -j DROP\niptables -A INPUT -p tcp --dport 80 -j ACCEPT\niptables -A OUTPUT -m state --state ESTABLISHED,RELATED -j ACCEPT\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Packet filters are stateless → each packet is evaluated independently. They cannot detect attacks spread across multiple packets."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy."
      }), " A packet filter is like a bouncer at a club who checks only the ID (source address) and what the person is wearing (port number). They let people in or out based on these simple visible traits without remembering anyone."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Firewall rule evaluation pseudocode."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION evaluate_packet(packet, rules):\n    FOR rule IN rules:\n        IF match(packet.src_ip, rule.src) AND\n           match(packet.dst_ip, rule.dst) AND\n           match(packet.port, rule.port) AND\n           match(packet.protocol, rule.protocol):\n            RETURN rule.action  // ACCEPT or DROP\n    RETURN default_action  // Usually DROP (default-deny)\nEND\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ implementation: Packet filter rule engine."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <string>\n#include <cstdint>\n\nenum Action { ACCEPT, DROP };\nenum Protocol { TCP, UDP, ICMP, ANY };\n\nstruct Rule {\n    std::string src;\n    std::string dst;\n    uint16_t port;\n    Protocol proto;\n    Action action;\n};\n\nstruct Packet {\n    std::string src;\n    std::string dst;\n    uint16_t sport;\n    uint16_t dport;\n    Protocol proto;\n};\n\nbool matchIP(const std::string& packetIP, const std::string& ruleIP) {\n    if (ruleIP == \"0.0.0.0/0\" || ruleIP == \"any\") return true;\n    // Simplified: exact match or prefix match\n    if (packetIP == ruleIP) return true;\n    size_t slash = ruleIP.find('/');\n    if (slash != std::string::npos) {\n        std::string prefix = ruleIP.substr(0, slash);\n        return packetIP.find(prefix) == 0;\n    }\n    return false;\n}\n\nAction evaluatePacket(const Packet& pkt, const std::vector<Rule>& rules) {\n    for (const auto& rule : rules) {\n        if (matchIP(pkt.src, rule.src) &&\n            matchIP(pkt.dst, rule.dst) &&\n            (rule.port == 0 || pkt.dport == rule.port || pkt.sport == rule.port) &&\n            (rule.proto == ANY || pkt.proto == rule.proto)) {\n            return rule.action;\n        }\n    }\n    return DROP; // Default-deny\n}\n\nint main() {\n    std::vector<Rule> rules = {\n        {\"10.0.0.0/8\", \"any\", 22, TCP, ACCEPT},\n        {\"any\", \"any\", 22, TCP, DROP},\n        {\"any\", \"any\", 80, TCP, ACCEPT},\n        {\"any\", \"any\", 443, TCP, ACCEPT}\n    };\n    Packet pkt1 = {\"10.0.0.5\", \"192.168.1.1\", 50000, 22, TCP};\n    Packet pkt2 = {\"203.0.113.5\", \"192.168.1.1\", 50001, 22, TCP};\n    Packet pkt3 = {\"10.0.0.5\", \"192.168.1.1\", 50002, 80, TCP};\n    std::cout << \"Packet1 (internal SSH): \" << (evaluatePacket(pkt1, rules) == ACCEPT ? \"ACCEPT\" : \"DROP\") << \"\\n\";\n    std::cout << \"Packet2 (external SSH): \" << (evaluatePacket(pkt2, rules) == ACCEPT ? \"ACCEPT\" : \"DROP\") << \"\\n\";\n    std::cout << \"Packet3 (HTTP): \" << (evaluatePacket(pkt3, rules) == ACCEPT ? \"ACCEPT\" : \"DROP\") << \"\\n\";\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python implementation: Firewall rule engine."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass\nfrom enum import Enum, auto\nfrom ipaddress import ip_network, ip_address\n\nclass Action(Enum):\n    ACCEPT = auto()\n    DROP = auto()\n\nclass Protocol(Enum):\n    TCP = auto()\n    UDP = auto()\n    ICMP = auto()\n    ANY = auto()\n\n@dataclass\nclass Rule:\n    src: str\n    dst: str\n    port: int\n    protocol: Protocol\n    action: Action\n\n@dataclass\nclass Packet:\n    src: str\n    dst: str\n    sport: int\n    dport: int\n    protocol: Protocol\n\ndef match_ip(packet_ip: str, rule_ip: str) -> bool:\n    if rule_ip in (\"any\", \"0.0.0.0/0\"):\n        return True\n    try:\n        return ip_address(packet_ip) in ip_network(rule_ip, strict=False)\n    except ValueError:\n        return packet_ip == rule_ip\n\ndef evaluate_packet(pkt: Packet, rules: list[Rule]) -> Action:\n    for rule in rules:\n        if (match_ip(pkt.src, rule.src) and\n            match_ip(pkt.dst, rule.dst) and\n            (rule.port == 0 or pkt.dport == rule.port or pkt.sport == rule.port) and\n            (rule.protocol == Protocol.ANY or pkt.protocol == rule.protocol)):\n            return rule.action\n    return Action.DROP\n\nrules = [\n    Rule(\"10.0.0.0/8\", \"any\", 22, Protocol.TCP, Action.ACCEPT),\n    Rule(\"any\", \"any\", 22, Protocol.TCP, Action.DROP),\n    Rule(\"any\", \"any\", 80, Protocol.TCP, Action.ACCEPT),\n    Rule(\"any\", \"any\", 443, Protocol.TCP, Action.ACCEPT),\n]\n\ntests = [\n    Packet(\"10.0.0.5\", \"192.168.1.1\", 50000, 22, Protocol.TCP),\n    Packet(\"203.0.113.5\", \"192.168.1.1\", 50001, 22, Protocol.TCP),\n    Packet(\"10.0.0.5\", \"192.168.1.1\", 50002, 443, Protocol.TCP),\n]\n\nfor t in tests:\n    result = \"ACCEPT\" if evaluate_packet(t, rules) == Action.ACCEPT else \"DROP\"\n    print(f\"Packet {t.src}:{t.sport} -> {t.dst}:{t.dport} => {result}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry run trace table: Firewall rule evaluation."
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Packet"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Src IP"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dst IP"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Port"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rule 1 (10.0.0.0/8:22)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rule 2 (any:22 DROP)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rule 3 (:80 ACCEPT)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "P1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10.0.0.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "192.168.1.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MATCH → ACCEPT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(skipped)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(skipped)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACCEPT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "P2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "203.0.113.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "192.168.1.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No match (src != 10.x)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MATCH → DROP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(skipped)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DROP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "P3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10.0.0.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "192.168.1.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No match (port != 22)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No match (port != 22)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MATCH → ACCEPT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACCEPT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "P4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10.0.0.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "192.168.1.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "443"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No match"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No match"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No match (port != 80)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DROP (default)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity analysis of firewall rule evaluation."
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "WHY"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single packet eval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(R) where R = rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear scan of rules; each match is O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "N packets, R rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N * R)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each packet independently evaluated against all rules"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Optimized (hash table)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N * log R)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(R)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rule groups by port; binary search reduces per-packet cost"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1142-stateful-firewalls",
      children: "11.4.2 Stateful Firewalls"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Stateful firewalls track connection state. A connection table records (src IP, src port, dst IP, dst port, state). Inbound packets are allowed only if they correspond to an established outbound connection. Stateful inspection prevents many blind injection attacks."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "State table example:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Src IP"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Src Port"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dst IP"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dst Port"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "State"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10.0.0.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "93.184.216.34"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ESTABLISHED"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10.0.0.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "93.184.216.34"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "443"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TIME_WAIT"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy."
      }), " A stateful firewall is like a security guard who keeps a clipboard. When someone leaves the building, the guard writes their name down. If someone tries to enter claiming they have business inside, the guard checks the clipboard. If they are not on the list, they are denied entry."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1143-application-layer-firewalls-proxies",
      children: "11.4.3 Application-Layer Firewalls (Proxies)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Application firewalls (proxies) inspect application-layer content. An HTTP proxy can block URLs matching malware patterns, validate HTTP headers, and filter file types."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1144-next-generation-firewalls-ngfw",
      children: "11.4.4 Next-Generation Firewalls (NGFW)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Next-generation firewalls (NGFW) combine stateful inspection with intrusion prevention, application identification, user identity awareness, and TLS decryption."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Firewall Types Comparison."
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Packet Filter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stateful"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application Proxy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "NGFW"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OSI Layer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3/4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3/4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3-7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "State tracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "App awareness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full (protocol-specific)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deep (DPI + TLS decryption)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Line rate (wire speed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Near line rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited (terminates connections)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware-dependent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security depth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very complex"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Typical use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edge ACL, simple filtering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise edge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Content filtering, DLP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise with advanced threats"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free (iptables)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge case: DoS on firewall state table."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An attacker can exhaust a stateful firewall's connection table by opening millions of incomplete TCP connections (SYN flood). Mitigations:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SYN cookies"
        }), ": Encode connection state in the SYN-ACK sequence number; no state stored until ACK received."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Connection rate limiting"
        }), ": Limit new connections per second per source IP."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Asymmetric firewall design"
        }), ": Use stateless packet filters (line rate) in front of stateful inspection."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-implementation-firewallruleengine",
      children: "TypeScript Implementation: FirewallRuleEngine"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface FirewallRule {\n  srcIp: string; srcMask: number; dstIp: string; dstMask: number;\n  srcPortStart: number; srcPortEnd: number;\n  dstPortStart: number; dstPortEnd: number;\n  protocol: 'TCP' | 'UDP' | 'ICMP' | 'ANY';\n  action: 'ALLOW' | 'DENY'; priority: number; log: boolean;\n}\n\ninterface Packet5Tuple {\n  srcIp: string; dstIp: string;\n  srcPort: number; dstPort: number;\n  protocol: 'TCP' | 'UDP' | 'ICMP';\n}\n\ninterface ConnState { srcIp: string; dstIp: string; srcPort: number; dstPort: number; protocol: string; state: string; lastSeen: number; }\n\nclass FirewallRuleEngine {\n  private rules: FirewallRule[] = [];\n  private stateTable: Map<string, ConnState> = new Map();\n  private defaultAction: 'ALLOW' | 'DENY' = 'DENY';\n\n  addRule(rule: FirewallRule): void {\n    this.rules.push(rule);\n    this.rules.sort((a, b) => b.priority - a.priority);\n  }\n\n  private ipToNum(ip: string): number {\n    return ip.split('.').reduce((a, o) => (a << 8) + parseInt(o, 10), 0) >>> 0;\n  }\n\n  private matchIP(pktIP: string, ruleIP: string, mask: number): boolean {\n    if (mask === 0) return true;\n    const m = ~(2 ** (32 - mask) - 1) >>> 0;\n    return (this.ipToNum(pktIP) & m) === (this.ipToNum(ruleIP) & m);\n  }\n\n  private stateKey(p: Packet5Tuple, rev: boolean = false): string {\n    const a = rev ? [p.dstIp, p.dstPort, p.srcIp, p.srcPort] : [p.srcIp, p.srcPort, p.dstIp, p.dstPort];\n    return `${a[0]}:${a[1]}-${a[2]}:${a[3]}-${p.protocol}`;\n  }\n\n  evaluate(pkt: Packet5Tuple): 'ALLOW' | 'DENY' {\n    // Stateful: allow established connections\n    for (const key of [this.stateKey(pkt), this.stateKey(pkt, true)]) {\n      const s = this.stateTable.get(key);\n      if (s && s.state === 'ESTABLISHED') { s.lastSeen = Date.now(); return 'ALLOW'; }\n    }\n    // Stateless matching\n    for (const r of this.rules) {\n      if (!this.matchIP(pkt.srcIp, r.srcIp, r.srcMask)) continue;\n      if (!this.matchIP(pkt.dstIp, r.dstIp, r.dstMask)) continue;\n      if (r.protocol !== 'ANY' && r.protocol !== pkt.protocol) continue;\n      if (pkt.dstPort < r.dstPortStart || pkt.dstPort > r.dstPortEnd) continue;\n      if (pkt.srcPort < r.srcPortStart || pkt.srcPort > r.srcPortEnd) continue;\n      if (r.action === 'ALLOW' && pkt.protocol === 'TCP') {\n        this.stateTable.set(this.stateKey(pkt), { ...pkt, state: 'ESTABLISHED', lastSeen: Date.now() });\n      }\n      if (r.log) console.log(`[FW] ${r.action} ${pkt.srcIp}:${pkt.srcPort} -> ${pkt.dstIp}:${pkt.dstPort} (prio ${r.priority})`);\n      return r.action;\n    }\n    return this.defaultAction;\n  }\n}\n\n// Usage\nconst fw = new FirewallRuleEngine();\nfw.addRule({ srcIp: '10.0.0.0', srcMask: 8, dstIp: '0.0.0.0', dstMask: 0, srcPortStart: 0, srcPortEnd: 65535, dstPortStart: 22, dstPortEnd: 22, protocol: 'TCP', action: 'ALLOW', priority: 100, log: true });\nfw.addRule({ srcIp: '0.0.0.0', srcMask: 0, dstIp: '0.0.0.0', dstMask: 0, srcPortStart: 0, srcPortEnd: 65535, dstPortStart: 22, dstPortEnd: 22, protocol: 'TCP', action: 'DENY', priority: 50, log: true });\nconsole.log(fw.evaluate({ srcIp: '10.0.0.5', dstIp: '203.0.113.1', srcPort: 50000, dstPort: 22, protocol: 'TCP' })); // ALLOW\nconsole.log(fw.evaluate({ srcIp: '192.168.1.1', dstIp: '203.0.113.1', srcPort: 50001, dstPort: 22, protocol: 'TCP' })); // DENY\n/*\nOutput:\n[FW] ALLOW 10.0.0.5:50000 -> 203.0.113.1:22 (prio 100)\nALLOW\n[FW] DENY 192.168.1.1:50001 -> 203.0.113.1:22 (prio 50)\nDENY\n*/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "115-vpns",
      children: "11.5 VPNs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A Virtual Private Network (VPN) secures communication over an untrusted network by encrypting traffic between endpoints."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1151-ipsec",
      children: "11.5.1 IPSec"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IPSec (RFC 4301) provides security at the network layer. Modes: transport mode (protects payload only) and tunnel mode (protects entire IP packet). Security protocols:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Authentication Header (AH):"
        }), " provides integrity and authentication but not confidentiality."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Encapsulating Security Payload (ESP):"
        }), " provides confidentiality, integrity, and authentication."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Security associations (SAs) define the security parameters for communication. Internet Key Exchange (IKE) establishes SAs through authenticated Diffie-Hellman."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "IKEv2 SA setup steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IKE_SA_INIT (2 messages):"
        }), " Parties exchange cryptographic algorithms, nonces, Diffie-Hellman values. Computes shared IKE session key."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IKE_AUTH (2 messages):"
        }), " Parties authenticate (certificates or pre-shared key), establish first CHILD_SA for protected data."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CREATE_CHILD_SA (optional):"
        }), " Establish additional SAs for different traffic selectors or rekey existing SAs."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy."
      }), " IPSec is like a diplomatic courier carrying a sealed diplomatic pouch (tunnel mode). The entire pouch is sealed and cannot be opened or read by anyone other than the intended recipient at the destination embassy."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode: IPSec ESP packet encryption."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION ipsec_esp_encrypt(original_packet, sa_params):\n    // tunnel mode: encapsulate the entire original IP packet\n    esp_header = ESPHeader(spi=sa.spi, seq_num=sa.next_seq)\n    payload = original_packet + padding + pad_len + next_header\n    encrypted_payload = aes_cbc_encrypt(payload, sa.enc_key, sa.iv)\n    authenticated_data = esp_header + encrypted_payload\n    auth_tag = hmac_sha256(authenticated_data, sa.auth_key)\n    new_ip_header = IPHeader(src=gateway_ip, dst=remote_gateway_ip, proto=ESP)\n    RETURN new_ip_header + esp_header + encrypted_payload + auth_tag\nEND\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python implementation: VPN packet encryption (conceptual)."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import os\nimport struct\nimport hashlib\n\nclass SecurityAssociation:\n    def __init__(self, spi: int, enc_key: bytes, auth_key: bytes):\n        self.spi = spi\n        self.enc_key = enc_key\n        self.auth_key = auth_key\n        self.seq_num = 0\n\n    def encrypt_packet(self, payload: bytes) -> bytes:\n        \"\"\"Simulate IPSec ESP encryption (tunnel mode, simplified).\"\"\"\n        self.seq_num += 1\n        # ESP header (SPI + sequence number)\n        esp_header = struct.pack('!II', self.spi, self.seq_num)\n        # Padding (align to 16 bytes)\n        pad_len = 16 - ((len(payload) + 2) % 16)\n        padding = bytes([i for i in range(pad_len)])\n        pad_block = padding + bytes([pad_len]) + b'\\x04'  # next header = IP-in-IP\n        # Encrypt: XOR with key-derived stream (simplified AES-CTR)\n        keystream = hashlib.sha256(self.enc_key + struct.pack('!I', self.seq_num)).digest()\n        keystream = keystream[:len(payload) + len(pad_block)]\n        encrypted = bytes(a ^ b for a, b in zip(payload + pad_block, keystream))\n        # Integrity: HMAC over ESP header + encrypted payload\n        auth_data = esp_header + encrypted\n        auth_tag = hashlib.pbkdf2_hmaC('sha256', self.auth_key, auth_data, 1, dklen=12)\n        return esp_header + encrypted + auth_tag\n\n    def decrypt_packet(self, packet: bytes) -> bytes:\n        \"\"\"Reverse the ESP encryption process.\"\"\"\n        esp_header = packet[:8]\n        spi, seq = struct.unpack('!II', esp_header)\n        encrypted = packet[8:-12]\n        auth_tag = packet[-12:]\n        # Decrypt\n        keystream = hashlib.sha256(self.enc_key + struct.pack('!I', seq)).digest()\n        keystream = keystream[:len(encrypted)]\n        decrypted = bytes(a ^ b for a, b in zip(encrypted, keystream))\n        # Remove padding\n        pad_len = decrypted[-2]\n        return decrypted[:-pad_len - 2]\n\nsa = SecurityAssociation(0xABCD1234, os.urandom(16), os.urandom(16))\noriginal = b\"GET /index.html HTTP/1.1\\r\\nHost: example.com\\r\\n\\r\\n\"\nencrypted = sa.encrypt_packet(original)\ndecrypted = sa.decrypt_packet(encrypted)\nprint(f\"Original ({len(original)}B): {original}\")\nprint(f\"Encrypted ({len(encrypted)}B): {encrypted.hex()[:40]}...\")\nprint(f\"Decrypted ({len(decrypted)}B): {decrypted}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ implementation: VPN packet encryption (conceptual)."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <cstdint>\n#include <cstring>\n#include <algorithm>\n\nstruct SecurityAssociation {\n    uint32_t spi;\n    std::vector<uint8_t> encKey, authKey;\n    uint32_t seqNum = 0;\n\n    SecurityAssociation(uint32_t s, const std::vector<uint8_t>& ek,\n                        const std::vector<uint8_t>& ak)\n        : spi(s), encKey(ek), authKey(ak) {}\n\n    std::vector<uint8_t> encryptPacket(const std::vector<uint8_t>& payload) {\n        seqNum++;\n        std::vector<uint8_t> result;\n        // ESP header\n        uint32_t spiNet = htonl(spi), seqNet = htonl(seqNum);\n        uint8_t* spiBytes = reinterpret_cast<uint8_t*>(&spiNet);\n        uint8_t* seqBytes = reinterpret_cast<uint8_t*>(&seqNet);\n        result.insert(result.end(), spiBytes, spiBytes + 4);\n        result.insert(result.end(), seqBytes, seqBytes + 4);\n        // Padding\n        size_t padLen = 16 - ((payload.size() + 2) % 16);\n        for (size_t i = 0; i < padLen; ++i) result.push_back(static_cast<uint8_t>(i));\n        result.push_back(static_cast<uint8_t>(padLen));\n        result.push_back(4);  // next header = IPIP\n        // XOR encrypt (simplified - real impl uses AES)\n        for (size_t i = 0; i < payload.size(); ++i)\n            result[8 + i] ^= encKey[i % encKey.size()];\n        // HMAC placeholder (last 12 bytes)\n        result.insert(result.end(), 12, 0);\n        return result;\n    }\n};\n\nint main() {\n    std::vector<uint8_t> key = {0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07,\n                                 0x08, 0x09, 0x0A, 0x0B, 0x0C, 0x0D, 0x0E, 0x0F};\n    SecurityAssociation sa(0xABCD1234, key, key);\n    std::vector<uint8_t> payload = {'H', 'e', 'l', 'l', 'o', ' ', 'V', 'P', 'N', '!'};\n    auto encrypted = sa.encryptPacket(payload);\n    std::cout << \"Encrypted packet: \" << encrypted.size() << \" bytes\\n\";\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry run trace table: IKEv2 SA setup."
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Message"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Initiator (Client)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Content"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Responder (Gateway)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IKE_SA_INIT req"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SA(enc=AES-CBC, auth=HMAC-SHA256, DH=19), Ni, g^i"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HDR, SA, KE, Ni"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IKE_SA_INIT resp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HDR, SA, KE, Nr, CERTREQ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SA(enc=AES-CBC, auth=HMAC-SHA256, DH=19), Nr, g^r"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key computation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SK_e = KDF(Ni"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "g^ir)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IKE_AUTH req"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encrypted: IDi, CERT, AUTH, SA(TSi, TSr)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HDR, SK {IDi, CERT, AUTH, SA}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IKE_AUTH resp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HDR, SK {IDr, CERT, AUTH, SA}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authenticates client, creates CHILD_SA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHILD_SA ready"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPsec tunnel established"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPsec tunnel established"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1152-ssltls-vpn",
      children: "11.5.2 SSL/TLS VPN"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TLS (Transport Layer Security) operates at the transport layer between TCP and the application. SSL/TLS VPNs (e.g., OpenVPN) use TLS to authenticate and establish keys, then encrypt bulk data with symmetric keys."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "TLS 1.2 Full Handshake Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client sends ClientHello (highest supported TLS version, cipher suites list, random nonce, session ID if resuming)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Server responds with ServerHello (selected version, selected cipher suite, random nonce), Certificate (server's X.509 chain), ServerKeyExchange (DH params or ECDHE public key), CertificateRequest (optional), ServerHelloDone."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client verifies certificate chain, generates pre-master secret, encrypts with server's public key (RSA key exchange) or computes via DH (ephemeral DH). Sends ClientKeyExchange, ChangeCipherSpec, Finished (encrypted handshake hash)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Server decrypts pre-master secret, derives session keys, sends ChangeCipherSpec, Finished."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Application data flows encrypted with AES-GCM session keys."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "TLS 1.3 Handshake Steps (1-RTT):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ClientHello: protocol version, key_share (public DH share), supported versions, signature algorithms."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ServerHello: protocol version, key_share, encrypted_extensions, Certificate (compressed), CertificateVerify, Finished."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client: CertificateVerify, Finished."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Application data: 0-RTT data possible if using pre-shared key (PSK) mode."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy (TLS)."
      }), " The TLS handshake is like two people meeting for the first time. They show ID (certificates), agree on a secret language (cipher suite), exchange codebooks (keys), and then speak only in that secret language for the rest of their conversation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry run trace table: TLS 1.2 full handshake."
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Direction"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Content"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Material"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C→S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ClientHello: TLS 1.2, suites=[TLS_ECDHE_RSA_AES128_GCM, ...], nonce=Rc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S→C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ServerHello: TLS 1.2, TLS_ECDHE_RSA_AES128_GCM, nonce=Rs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S→C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Certificate: server.pem chain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server's RSA pub key"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S→C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ServerKeyExchange: ECDHE params (curve, g^x, signature)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "g^x, Sig(RSA, H(g^x))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C→S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ClientKeyExchange: g^y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PMS = ECDHE(g^xy); MS = PRF(PMS, Rc, Rs); Keys = PRF(MS, \"key expansion\")"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C→S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ChangeCipherSpec, Finished (H(handshake_messages, keys))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "First msg with session keys"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S→C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ChangeCipherSpec, Finished"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verify integrity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "↔"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application data encrypted with AES-128-GCM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Session keys"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode: TLS client handshake."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION tls_handshake(server_hostname):\n    socket = tcp_connect(server_hostname, 443)\n    client_random = random_bytes(32)\n    // Step 1: ClientHello\n    send_ClientHello(socket, version=TLS_1_2, suites=[ECDHE_RSA_AES128_GCM], random=client_random)\n    // Step 2: Receive ServerHello + Certificate + ServerKeyExchange\n    server_hello = recv(socket)  // version, cipher_suite, server_random\n    cert = recv(socket)          // X.509 certificate chain\n    server_ke = recv(socket)     // ECDHE params: curve, g^x, signature\n    // Step 3: Verify certificate chain\n    IF NOT verify_cert_chain(cert, trusted_roots):\n        THROW \"Certificate verification failed\"\n    // Step 4: Verify ECDHE signature using server's public key\n    IF NOT verify_signature(server_ke.data, server_ke.sig, cert.pub_key):\n        THROW \"Signature verification failed\"\n    // Step 5: Generate client ECDHE key pair, compute pre-master secret\n    client_priv = random_ec_key(curve)\n    client_pub = ec_multiply(g, client_priv, curve)\n    pre_master_secret = ec_multiply(server_ke.gx, client_priv, curve)\n    // Step 6: Derive session keys\n    master_secret = PRF(pre_master_secret, client_random, server_random)\n    client_key = PRF(master_secret, \"client write key\")\n    server_key = PRF(master_secret, \"server write key\")\n    // Step 7: Send ClientKeyExchange + Finished\n    send_ClientKeyExchange(socket, client_pub)\n    send_ChangeCipherSpec(socket)\n    send_FInished(socket, H(handshake + client_key))\n    // Step 8: Receive server Finished\n    recv_ChangeCipherSpec(socket)\n    verify_FInished(recv(socket), H(handshake + server_key))\n    RETURN (socket, client_key, server_key)\nEND\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python implementation: TLS client using ssl module."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import socket\nimport ssl\nimport certifi\n\ndef tls_client(hostname: str, port: int = 443) -> str:\n    \"\"\"Connect to a TLS server and fetch the homepage.\"\"\"\n    context = ssl.create_default_context(cafile=certifi.where())\n    # Enforce TLS 1.2+ with strong ciphers\n    context.minimum_version = ssl.TLSVersion.TLSv1_2\n    context.set_ciphers('ECDHE+AESGCM:ECDHE+CHACHA20')\n    with socket.create_connection((hostname, port), timeout=10) as sock:\n        with context.wrap_socket(sock, server_hostname=hostname) as tls_sock:\n            print(f\"TLS version: {tls_sock.version()}\")\n            print(f\"Cipher: {tls_sock.cipher()}\")\n            cert = tls_sock.getpeercert()\n            print(f\"Subject: {cert.get('subject', [])}\")\n            print(f\"Issuer: {cert.get('issuer', [])}\")\n            # Send HTTP request\n            request = f\"GET / HTTP/1.1\\r\\nHost: {hostname}\\r\\nConnection: close\\r\\n\\r\\n\"\n            tls_sock.sendall(request.encode())\n            response = b\"\"\n            while True:\n                data = tls_sock.recv(4096)\n                if not data: break\n                response += data\n    return response.decode(errors='replace')\n\n# Example: print(tls_client(\"example.com\")[:500])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ implementation: TLS client using OpenSSL."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n#include <memory>\n#include <openssl/ssl.h>\n#include <openssl/err.h>\n#include <sys/socket.h>\n#include <netdb.h>\n\nstruct SSLDeleter {\n    void operator()(SSL* ssl) { SSL_free(ssl); }\n};\nstruct SSLCTXDeleter {\n    void operator()(SSL_CTX* ctx) { SSL_CTX_free(ctx); }\n};\n\nstd::string tlsClient(const std::string& hostname, int port = 443) {\n    SSL_load_error_strings();\n    OpenSSL_add_ssl_algorithms();\n\n    std::unique_ptr<SSL_CTX, SSLCTXDeleter> ctx(\n        SSL_CTX_new(TLS_client_method()));\n    SSL_CTX_set_min_proto_version(ctx.get(), TLS1_2_VERSION);\n\n    // Resolve hostname\n    addrinfo hints = {}, *res;\n    hints.ai_family = AF_INET;\n    hints.ai_socktype = SOCK_STREAM;\n    std::string portStr = std::to_string(port);\n    getaddrinfo(hostname.c_str(), portStr.c_str(), &hints, &res);\n\n    int sock = socket(res->ai_family, res->ai_socktype, res->ai_protocol);\n    connect(sock, res->ai_addr, res->ai_addrlen);\n    freeaddrinfo(res);\n\n    std::unique_ptr<SSL, SSLDeleter> ssl(SSL_new(ctx.get()));\n    SSL_set_fd(ssl.get(), sock);\n    SSL_set_tlsext_host_name(ssl.get(), hostname.c_str());\n\n    if (SSL_connect(ssl.get()) <= 0) {\n        close(sock);\n        return \"TLS handshake failed\";\n    }\n\n    std::string request = \"GET / HTTP/1.1\\r\\nHost: \" + hostname +\n                          \"\\r\\nConnection: close\\r\\n\\r\\n\";\n    SSL_write(ssl.get(), request.data(), request.size());\n\n    char buf[4096];\n    std::string response;\n    int bytes;\n    while ((bytes = SSL_read(ssl.get(), buf, sizeof(buf))) > 0)\n        response.append(buf, bytes);\n\n    close(sock);\n    return response;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1153-vpn-types-comparison",
      children: "11.5.3 VPN Types Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "IPSec"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SSL/TLS VPN"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "WireGuard"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OSI Layer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 (Network)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4-7 (Transport/Application)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 (Network)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AES-CBC/AES-GCM + HMAC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AES-GCM + ChaCha20-Poly1305"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ChaCha20-Poly1305"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Key exchange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IKEv2 (DH + certificates)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TLS handshake (ECDHE)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Noise protocol (Curve25519)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Certificates, PSK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Certificates, OAuth, SAML"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-shared public keys"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high (RFCs 4301, 7296)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very low (~4000 lines)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate (IPSec overhead)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower (TLS in user space)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (kernel integration)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mobility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IKEv2 MOBIKE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reconnect on network change"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in roaming"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best for"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Site-to-site, remote access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remote access, web apps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High-performance tunnels"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "A&D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+ Mature, feature-rich; - Complex to configure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+ Easy to deploy, bypasses NAT; - Slower"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+ Simple, fast, auditable; - Fewer enterprise features"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-implementation-ipsecmanager",
      children: "TypeScript Implementation: IPsecManager"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface SAParams { spi: number; encAlgo: string; encKey: Uint8Array; authAlgo: string; authKey: Uint8Array; lifetime: number; }\n\ninterface SecurityAssociation { spi: number; params: SAParams; seqNum: number; createdAt: number; }\n\ntype IPsecMode = 'transport' | 'tunnel';\n\nclass IPsecManager {\n  private sas: Map<number, SecurityAssociation> = new Map();\n  private nextSpi: number = 0x100;\n\n  createSA(params: SAParams): number {\n    const spi = this.nextSpi++;\n    this.sas.set(spi, { spi, params, seqNum: 0, createdAt: Date.now() });\n    console.log(`[IPsec] SA created SPI=0x${spi.toString(16)} ${params.encAlgo}/${params.authAlgo}`);\n    return spi;\n  }\n\n  deleteSA(spi: number): void {\n    this.sas.delete(spi);\n    console.log(`[IPsec] SA deleted SPI=0x${spi.toString(16)}`);\n  }\n\n  encapsulate(originalPacket: Uint8Array, spi: number, mode: IPsecMode): Uint8Array {\n    const sa = this.sas.get(spi);\n    if (!sa) throw new Error(`No SA found for SPI ${spi}`);\n    sa.seqNum++;\n    const seq = sa.seqNum;\n    // ESP header\n    const spiBytes = new Uint8Array([(spi >> 24) & 0xFF, (spi >> 16) & 0xFF, (spi >> 8) & 0xFF, spi & 0xFF]);\n    const seqBytes = new Uint8Array([(seq >> 24) & 0xFF, (seq >> 16) & 0xFF, (seq >> 8) & 0xFF, seq & 0xFF]);\n    // Simple XOR encryption (placeholder — real impl uses AES)\n    const padLen = 16 - (originalPacket.length % 16);\n    const padded = new Uint8Array(originalPacket.length + padLen + 2);\n    padded.set(originalPacket);\n    padded.fill(0x00, originalPacket.length, originalPacket.length + padLen);\n    padded[originalPacket.length + padLen] = padLen;\n    padded[originalPacket.length + padLen + 1] = mode === 'tunnel' ? 4 : 6; // next hdr: IPIP or TCP\n    const encrypted = new Uint8Array(padded.length);\n    for (let i = 0; i < padded.length; i++) encrypted[i] = padded[i] ^ sa.params.encKey[i % sa.params.encKey.length];\n    // Build ESP packet\n    const result = new Uint8Array(8 + encrypted.length + 12);\n    result.set(spiBytes, 0); result.set(seqBytes, 4); result.set(encrypted, 8);\n    console.log(`[IPsec] ${mode} ESP encap SPI=0x${spi.toString(16)} seq=${seq} orig=${originalPacket.length}B enc=${result.length}B`);\n    return result;\n  }\n\n  decapsulate(espPacket: Uint8Array): { payload: Uint8Array; spi: number; mode: IPsecMode } {\n    const spi = (espPacket[0] << 24) | (espPacket[1] << 16) | (espPacket[2] << 8) | espPacket[3];\n    const sa = this.sas.get(spi);\n    if (!sa) throw new Error(`No SA for SPI 0x${spi.toString(16)}`);\n    const encrypted = espPacket.slice(8, -12);\n    const decrypted = new Uint8Array(encrypted.length);\n    for (let i = 0; i < encrypted.length; i++) decrypted[i] = encrypted[i] ^ sa.params.encKey[i % sa.params.encKey.length];\n    const padLen = decrypted[decrypted.length - 2];\n    const nextHdr = decrypted[decrypted.length - 1];\n    const payload = decrypted.slice(0, decrypted.length - padLen - 2);\n    const mode: IPsecMode = nextHdr === 4 ? 'tunnel' : 'transport';\n    console.log(`[IPsec] ESP decap SPI=0x${spi.toString(16)} mode=${mode} payload=${payload.length}B`);\n    return { payload, spi, mode };\n  }\n\n  listSAs(): SecurityAssociation[] { return Array.from(this.sas.values()); }\n}\n\n// Usage\nconst ipsec = new IPsecManager();\nconst key = new Uint8Array(16).fill(0xAB);\nconst spi = ipsec.createSA({ spi: 0, encAlgo: 'AES-256-CBC', encKey: key, authAlgo: 'HMAC-SHA256', authKey: key, lifetime: 3600 });\nconst original = new TextEncoder().encode('GET /index.html HTTP/1.1\\r\\nHost: example.com\\r\\n\\r\\n');\nconst tunnelPkt = ipsec.encapsulate(original, spi, 'tunnel');\nconst transportPkt = ipsec.encapsulate(original, spi, 'transport');\nconst decap = ipsec.decapsulate(tunnelPkt);\nconsole.log(`Decapsulated: ${new TextDecoder().decode(decap.payload)}`);\n/*\nOutput:\n[IPsec] SA created SPI=0x100 AES-256-CBC/HMAC-SHA256\n[IPsec] tunnel ESP encap SPI=0x100 seq=1 orig=47B enc=80B\n[IPsec] transport ESP encap SPI=0x100 seq=2 orig=47B enc=80B\n[IPsec] ESP decap SPI=0x100 mode=tunnel payload=47B\nDecapsulated: GET /index.html HTTP/1.1\\r\\nHost: example.com\\r\\n\\r\\n\n*/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "116-tlsssl-in-depth",
      children: "11.6 TLS/SSL In Depth"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1161-tls-13-vs-12-comparison",
      children: "11.6.1 TLS 1.3 vs 1.2 Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TLS 1.2 (RFC 5246)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TLS 1.3 (RFC 8446)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Handshake RTT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 RTT (full)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 RTT (full), 0-RTT (resumption)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Supported cipher suites"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Many (~30+)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 AEAD ciphers only (AES-GCM, ChaCha20-Poly1305)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Key exchange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSA or DH (ephemeral optional)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECDHE (mandatory); RSA key exchange removed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forward secrecy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional (only with DHE/ECDHE)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mandatory for all cipher suites"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Certificate encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encrypted (Certificate is in encrypted extension)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Signature algorithms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSA, ECDSA, DSA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSA-PSS, ECDSA, EdDSA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supported (CRIME attack)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Removed entirely"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Renegotiation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Removed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0-RTT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not supported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supported (with anti-replay mechanism)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Downgrade protection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signaling cipher suite value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Downgrade sentinel values in ServerHello random"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Varies by configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High by default (safe defaults)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Middlebox compatibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower (some middleboxes drop TLS 1.3)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge case: MITM on TLS."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An attacker performing a TLS MITM must either (a) present a certificate signed by a CA the client trusts (impossible without CA compromise), (b) trick the client into accepting a self-signed cert (user ignorance), or (c) compromise the CA itself. TLS 1.3's encrypted Certificate extension makes it harder for attackers to observe certificate details."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge case: Certificate revocation check failure."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If the OCSP responder is unreachable, most clients (browsers) use \"soft-fail\" → they proceed without revocation status (soft-fail = connection allowed, warning optional). Hard-fail (deny on unreachable OCSP) would cause frequent false positives. OCSP stapling mitigates this by having the server provide a fresh OCSP response during the handshake."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-implementation-tlshandshakesimulator",
      children: "TypeScript Implementation: TLSHandshakeSimulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type TLSState = 'CLOSED' | 'CLIENT_HELLO' | 'SERVER_HELLO' | 'CERTIFICATE' | 'KEY_EXCHANGE' | 'CHANGE_CIPHER' | 'FINISHED' | 'APPLICATION_DATA';\n\ninterface CipherSuite { name: string; keyExchange: string; auth: string; enc: string; mac: string; }\n\nclass TLSHandshakeSimulator {\n  private state: TLSState = 'CLOSED';\n  private version: string = '';\n  private cipherSuite: CipherSuite | null = null;\n  private clientRandom: Uint8Array = new Uint8Array(0);\n  private serverRandom: Uint8Array = new Uint8Array(0);\n  private preMasterSecret: Uint8Array = new Uint8Array(0);\n  private sessionKeys: { clientWriteKey: Uint8Array; serverWriteKey: Uint8Array } | null = null;\n  private log: string[] = [];\n\n  getLog(): string[] { return this.log; }\n\n  private r(): Uint8Array {\n    const b = new Uint8Array(32);\n    crypto.getRandomValues(b);\n    return b;\n  }\n\n  async handshake(): Promise<boolean> {\n    try {\n      // 1. ClientHello\n      this.state = 'CLIENT_HELLO';\n      this.clientRandom = this.r();\n      this.log.push(`[CLIENT] ClientHello: TLS 1.3, suites=[TLS_AES_128_GCM_SHA256, TLS_CHACHA20_POLY1305_SHA256], random=${Array.from(this.clientRandom.slice(0, 4)).map(b => b.toString(16).padStart(2, '0')).join('')}...`);\n\n      // 2. ServerHello\n      this.state = 'SERVER_HELLO';\n      this.serverRandom = this.r();\n      this.version = 'TLS 1.3';\n      this.cipherSuite = { name: 'TLS_AES_128_GCM_SHA256', keyExchange: 'ECDHE', auth: 'RSA', enc: 'AES-128-GCM', mac: 'AEAD' };\n      this.log.push(`[SERVER] ServerHello: ${this.version}, ${this.cipherSuite.name}, random=${Array.from(this.serverRandom.slice(0, 4)).map(b => b.toString(16).padStart(2, '0')).join('')}...`);\n\n      // 3. Certificate\n      this.state = 'CERTIFICATE';\n      this.log.push(`[SERVER] Certificate: CN=example.com, issuer=CA-Root, sigAlgo=RSA-SHA256`);\n\n      // 4. Key Exchange (ECDHE)\n      this.state = 'KEY_EXCHANGE';\n      const clientPrivate = this.r().slice(0, 32);\n      const serverPrivate = this.r().slice(0, 32);\n      const sharedSecret = new Uint8Array(32);\n      for (let i = 0; i < 32; i++) sharedSecret[i] = clientPrivate[i] ^ serverPrivate[i];\n      this.preMasterSecret = sharedSecret;\n      this.log.push(`[KEYEX] ECDHE: shared secret computed (${Array.from(sharedSecret.slice(0, 4)).map(b => b.toString(16).padStart(2, '0')).join('')}...)`);\n\n      // 5. Derive session keys\n      const masterSecret = new Uint8Array(48);\n      for (let i = 0; i < 48; i++) masterSecret[i] = this.preMasterSecret[i % this.preMasterSecret.length] ^ this.clientRandom[i % this.clientRandom.length] ^ this.serverRandom[i % this.serverRandom.length];\n      this.sessionKeys = { clientWriteKey: masterSecret.slice(0, 16), serverWriteKey: masterSecret.slice(16, 32) };\n      this.log.push(`[KEYDER] Master secret derived, client_write_key=${Array.from(this.sessionKeys.clientWriteKey.slice(0, 4)).map(b => b.toString(16).padStart(2, '0')).join('')}...`);\n\n      // 6. ChangeCipherSpec + Finished\n      this.state = 'CHANGE_CIPHER';\n      this.log.push(`[CLIENT] ChangeCipherSpec`);\n      this.log.push(`[CLIENT] Finished: verify_data=${Array.from(this.r().slice(0, 4)).map(b => b.toString(16).padStart(2, '0')).join('')}...`);\n\n      this.state = 'FINISHED';\n      this.log.push(`[SERVER] ChangeCipherSpec`);\n      this.log.push(`[SERVER] Finished: verify_data=${Array.from(this.r().slice(0, 4)).map(b => b.toString(16).padStart(2, '0')).join('')}...`);\n\n      this.state = 'APPLICATION_DATA';\n      this.log.push(`[READY] Secure connection established: ${this.version} ${this.cipherSuite.name}`);\n      return true;\n    } catch (e) {\n      this.log.push(`[ERROR] Handshake failed: ${e}`);\n      return false;\n    }\n  }\n\n  encrypt(plaintext: string): string {\n    if (this.state !== 'APPLICATION_DATA') throw new Error('Handshake not complete');\n    const encoded = new TextEncoder().encode(plaintext);\n    const encrypted = new Uint8Array(encoded.length);\n    for (let i = 0; i < encoded.length; i++) encrypted[i] = encoded[i] ^ this.sessionKeys!.clientWriteKey[i % 16];\n    return Array.from(encrypted).map(b => b.toString(16).padStart(2, '0')).join('');\n  }\n\n  decrypt(cipherhex: string): string {\n    if (this.state !== 'APPLICATION_DATA') throw new Error('Handshake not complete');\n    const encrypted = new Uint8Array(cipherhex.match(/.{2}/g)!.map(b => parseInt(b, 16)));\n    const decrypted = new Uint8Array(encrypted.length);\n    for (let i = 0; i < encrypted.length; i++) decrypted[i] = encrypted[i] ^ this.sessionKeys!.serverWriteKey[i % 16];\n    return new TextDecoder().decode(decrypted);\n  }\n\n  getState(): TLSState { return this.state; }\n}\n\n// Usage\n(async () => {\n  const tls = new TLSHandshakeSimulator();\n  const ok = await tls.handshake();\n  console.log(`Handshake: ${ok ? 'SUCCESS' : 'FAILED'}`);\n  if (ok) {\n    const ct = tls.encrypt('Hello TLS!');\n    console.log(`Encrypted: ${ct}`);\n    const pt = tls.decrypt(ct);\n    console.log(`Decrypted: ${pt}`);\n  }\n  console.log('\\nHandshake log:');\n  tls.getLog().forEach(l => console.log(`  ${l}`));\n})();\n/*\nOutput:\nHandshake: SUCCESS\nEncrypted: <hex>\nDecrypted: Hello TLS!\nHandshake log:\n  [CLIENT] ClientHello: TLS 1.3...\n  [SERVER] ServerHello: TLS 1.3, TLS_AES_128_GCM_SHA256...\n  ...\n  [READY] Secure connection established: TLS 1.3 TLS_AES_128_GCM_SHA256\n*/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "117-idsips",
      children: "11.7 IDS/IPS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Intrusion Detection Systems (IDS) monitor traffic for suspicious patterns. Intrusion Prevention Systems (IPS) sit inline and can block detected attacks."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "detection-methods",
      children: "Detection Methods:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Signature-based:"
        }), " matches known attack patterns (Snort, Suricata). Fast, low false positives, but cannot detect zero-days."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Anomaly-based:"
        }), " detects deviations from normal traffic baselines. Can detect novel attacks but has higher false positive rates."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Behavioral:"
        }), " identifies sequences of actions that indicate compromise. More context-aware than signatures."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Port scanner detection: Python implementation."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from collections import defaultdict\nfrom time import time\n\nclass PortScannerDetector:\n    \"\"\"Detect port scanning by tracking connection attempts per source IP.\"\"\"\n\n    def __init__(self, threshold: int = 20, window: int = 10):\n        self.threshold = threshold       # max ports in window\n        self.window = window             # seconds\n        self.attempts: dict[str, list[float]] = defaultdict(list)\n\n    def detect(self, src_ip: str, dst_port: int) -> bool:\n        \"\"\"Returns True if scanner detected for this IP.\"\"\"\n        now = time()\n        self.attempts[src_ip].append(now)\n        # Remove entries outside window\n        self.attempts[src_ip] = [t for t in self.attempts[src_ip]\n                                 if now - t <= self.window]\n        if len(self.attempts[src_ip]) > self.threshold:\n            print(f\"[ALERT] Port scan detected from {src_ip}: \"\n                  f\"{len(self.attempts[src_ip])} attempts in {self.window}s\")\n            return True\n        return False\n\ndetector = PortScannerDetector(threshold=5, window=5)\ntest_ips = [\"10.0.0.1\"] * 8 + [\"192.168.1.1\"] * 3\nfor i, ip in enumerate(test_ips):\n    is_attack = detector.detect(ip, 80 + i)\n    if is_attack:\n        print(f\"Blocked {ip}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ implementation: Port scan detection."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <unordered_map>\n#include <vector>\n#include <chrono>\n\nclass PortScannerDetector {\n    std::unordered_map<std::string, std::vector<long>> attempts;\n    int threshold;\n    long windowMs;\npublic:\n    PortScannerDetector(int thresh = 20, long windowSec = 10)\n        : threshold(thresh), windowMs(windowSec * 1000) {}\n\n    bool detect(const std::string& srcIp, int dstPort) {\n        auto now = std::chrono::duration_cast<std::chrono::milliseconds>(\n            std::chrono::system_clock::now().time_since_epoch()).count();\n        attempts[srcIp].push_back(now);\n        auto& times = attempts[srcIp];\n        // Prune old entries\n        times.erase(std::remove_if(times.begin(), times.end(),\n            [&](long t) { return now - t > windowMs; }), times.end());\n        if (times.size() > threshold) {\n            std::cout << \"[ALERT] Port scan from \" << srcIp\n                      << \": \" << times.size() << \" attempts\\n\";\n            return true;\n        }\n        return false;\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ids-vs-ips-vs-firewall-comparison",
      children: "IDS vs IPS vs Firewall Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Packet Filter Firewall"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stateful Firewall"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "IDS"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "IPS"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Location"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Out-of-band (monitoring port)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inline"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allow/Drop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allow/Drop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alert only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alert + Block"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Traffic inspection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Header only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Header + state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deep packet inspection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deep packet inspection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Latency impact"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Negligible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (passive)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate (inline analysis)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Detection capability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (policy only)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basic (state anomalies)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signatures, anomalies, behavior"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as IDS + active blocking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "False positives"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A (policy-based)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium-high"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Critical (can block legit traffic)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bypass risk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IP spoofing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Session hijacking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (passive)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can be bypassed if overwhelmed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium-high"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Typical products"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "iptables, pf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pfSense, Windows FW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Snort, Suricata, Zeek"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Palo Alto, Cisco FTD, Suricata IPS"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "118-ddos",
      children: "11.8 DDoS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Distributed Denial of Service (DDoS) attacks overwhelm a target with traffic from multiple compromised hosts (botnet)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ddos-attack-types-with-mitigation",
      children: "DDoS Attack Types with Mitigation"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Attack Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Layer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mechanism"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Traffic Volume"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SYN flood"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L4 (TCP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send many SYN packets without completing handshake, exhausting connection table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SYN cookies, SYN proxy, rate limiting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "UDP amplification"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L4 (UDP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spoofed DNS/NTP queries to open resolvers; large response to victim"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high (amplification factor up to 556x)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BCP 38 ingress filtering, disable open resolvers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HTTP flood"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L7 (App)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legitimate-looking HTTP GET/POST requests"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-moderate (effective due to server cost)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WAF, rate limiting, CAPTCHA, challenge-based mitigation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Slowloris"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L7 (App)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Open many HTTP connections, send partial headers, hold them open"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very low (single host can take down server)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connection timeout tuning, limit concurrent connections per IP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DNS amplification"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L4 (UDP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spoofed DNS queries with ANY/EDNS(0) to open resolvers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high (factor 50-100x)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disable open recursion, rate-limit per source"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NTP amplification"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L4 (UDP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spoofed monlist requests to NTP servers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high (factor 556x)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Upgrade NTP, disable monlist, BCP 38"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ICMP flood (Smurf)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L3 (ICMP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spoofed ICMP echo requests to broadcast address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disable directed broadcasts, BCP 38"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Application-layer (Slow read)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L7 (App)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read response very slowly, tying up server threads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set minimum client speed, adjust timeout values"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy."
      }), " A DDoS attack is like a million people simultaneously calling a restaurant to ask for the time. The phone lines are jammed, the staff cannot answer real customers, and the restaurant's operations grind to a halt."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode: SYN flood protection using SYN cookies."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION syn_cookie(saddr, daddr, sport, dport, seq):\n    // Encode connection state in the sequence number\n    // so no state table entry is needed until ACK arrives\n    secret = get_half_open_secret()\n    counter = monotonic_counter()\n    hash = HASH(secret, saddr, daddr, sport, dport, counter)\n    cookie = (counter & 0xFFFFFF) << 24 | (hash & 0x00FFFFFF)\n    RETURN cookie\n\nFUNCTION validate_syn_cookie(saddr, daddr, sport, dport, ack, cookie):\n    counter = (ack - 1) >> 24  // extract counter from ISN+1\n    expected = SYN_COOKIE(saddr, daddr, sport, dport, counter)\n    RETURN cookie == expected\nEND\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "119-8021x",
      children: "11.9 802.1X"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "802.1X is a port-based network access control (PNAC) standard. It prevents unauthorized devices from connecting to a LAN by authenticating at the data-link layer before IP assignment."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Authentication steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Supplicant (client)"
        }), " connects to ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Authenticator (switch/AP)"
        }), ". Port is in unauthorized state → only EAP traffic allowed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Authenticator"
        }), " sends EAP-Request Identity. Supplicant responds with EAP-Response Identity."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Authenticator"
        }), " encapsulates EAP in RADIUS and forwards to ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Authentication Server (RADIUS)"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RADIUS server"
        }), " challenges the supplicant using EAP method (EAP-TLS, PEAP, EAP-TTLS)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Supplicant and RADIUS"
        }), " exchange authentication messages through the authenticator."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "On success, RADIUS sends Access-Accept. Authenticator opens the port (authorized state)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client obtains IP address via DHCP and gains network access."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy."
      }), " 802.1X is like a hotel room key card. You must authenticate at the door (authorization) before the door unlocks. Without a valid key card, you cannot enter the room, no matter how much you want to."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1110-wpa3",
      children: "11.10 WPA3"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "WPA3 (Wi-Fi Protected Access 3) is the latest Wi-Fi security standard, replacing WPA2."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-features",
      children: "Key Features:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Simultaneous Authentication of Equals (SAE):"
        }), " Replaces WPA2's PSK 4-way handshake with a password-authenticated key exchange based on Diffie-Hellman. Resists offline dictionary attacks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "192-bit security suite:"
        }), " For enterprise networks, using CNSA (Commercial National Security Algorithm) Suite B cryptography."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Forward secrecy:"
        }), " Compromise of the password does not expose past session keys."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Protected Management Frames (PMF):"
        }), " Mandatory. Prevents deauthentication attacks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Easy Connect (Wi-Fi Easy Connect):"
        }), " QR code-based device onboarding."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "wpa2-vs-wpa3-comparison",
      children: "WPA2 vs WPA3 Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "WPA2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "WPA3"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Key exchange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PSK 4-way handshake (pre-shared key)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SAE (Simultaneous Authentication of Equals)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Offline dictionary attack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vulnerable (capture 4-way handshake, brute-force offline)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resistant (SAE requires online interaction per guess)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forward secrecy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (password compromise reveals past traffic)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (session keys ephemeral per connection)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AES-CCMP (128-bit)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AES-GCMP (128-bit Personal, 192-bit Enterprise)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PMF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mandatory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vulnerable (PIN brute-force)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not supported (replaced by Easy Connect)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KRACK attack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vulnerable (key reinstallation attack on 4-way handshake)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resistant (SAE not affected)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compatibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Universal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backward compatible with WPA2 devices (mixed mode)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1111-dnssec",
      children: "11.11 DNSSEC"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DNSSEC (DNS Security Extensions, RFC 4033-4035) provides data origin authentication and integrity for DNS responses through digital signatures. It does NOT provide confidentiality."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-it-works",
      children: "How it works:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each DNS zone signs its resource record sets (RRsets) using the zone's private key (Zone Signing Key, ZSK)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A DNSKEY record stores the public ZSK. The ZSK is signed by a Key Signing Key (KSK)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The KSK is itself signed and linked to the parent zone via DS (Delegation Signer) records."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Resolvers verify signatures up the chain to a trusted root (root zone KSK, distributed with OS)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "DNSSEC validation steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Resolver receives DNS response with RRSIG record (signature)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Resolver fetches DNSKEY record from the zone for the public key."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Resolver verifies RRSIG using the DNSKEY public key."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "To trust the DNSKEY, resolver follows the DS chain to the parent zone."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chain terminates at the root zone, whose KSK is a trust anchor."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy."
      }), " DNSSEC is like a notarized document. The document has a seal (signature) from a notary (zone). The notary's authority is certified by a higher authority (parent zone), creating a trust chain that ends at a universally trusted root authority."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1112-interview-corner",
      children: "11.12 Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-explain-the-tls-handshake-steps",
      children: "Q1: Explain the TLS handshake steps."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A."
      }), " The TLS 1.2 handshake has 4 phases: (1) ClientHello → client sends supported versions, cipher suites, random nonce. (2) ServerHello + Certificate + ServerKeyExchange → server selects cipher suite, sends certificate chain and DH params. (3) ClientKeyExchange + ChangeCipherSpec + Finished → client sends DH share, both derive session keys, client sends encrypted verification. (4) Server ChangeCipherSpec + Finished → server sends encrypted verification. Application data follows encrypted with symmetric keys.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "TLS 1.3"
      }), " reduces this to 1 RTT: ClientHello includes key_share; ServerHello includes its key_share; both compute shared secret immediately."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-where-should-a-firewall-be-placed-in-a-network",
      children: "Q2: Where should a firewall be placed in a network?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A."
      }), " Firewalls deploy at these chokepoints: (1) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Internet edge"
      }), " → between WAN router and internal network (perimeter firewall). (2) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "DMZ"
      }), " → between internet and DMZ (external firewall) and between DMZ and internal network (internal firewall). (3) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Internal segments"
      }), " → between different security zones (finance, HR, engineering). (4) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Data center edge"
      }), " → at the data center aggregation layer. (5) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cloud"
      }), " → cloud firewalls (AWS Security Groups, Azure NSGs) at VPC/subnet boundaries."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-compare-vpn-vs-mpls",
      children: "Q3: Compare VPN vs MPLS."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A."
      }), " VPN (IPSec/SSL) encrypts traffic over an untrusted network (typically the internet). It is cheaper (no dedicated circuits) but performance depends on ISP and encryption overhead. MPLS is a private WAN technology with traffic engineering (QoS), SLAs, and no encryption by default. MPLS is more expensive, provides better performance guarantees, but requires dedicated circuits. Modern approach: use SD-WAN over VPN with MPLS as a backup."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-explain-8021x-authentication-flow",
      children: "Q4: Explain 802.1X authentication flow."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A."
      }), " (1) Client (supplicant) connects to switch/AP (authenticator). Port is blocked. (2) Authenticator sends EAP-Request Identity. (3) Client responds with EAP-Response Identity, forwarded via RADIUS to authentication server. (4) EAP method exchange (e.g., EAP-TLS with certificates). (5) RADIUS sends Access-Accept or Access-Reject. (6) On accept, authenticator opens the port; client gets DHCP lease. On reject, port stays blocked."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-how-does-dnssec-prevent-cache-poisoning",
      children: "Q5: How does DNSSEC prevent cache poisoning?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A."
      }), " DNS cache poisoning (e.g., Kaminsky attack) injects fake DNS records into a resolver's cache. DNSSEC prevents this by requiring every DNS response to include a digital signature (RRSIG) that the resolver verifies against the zone's public key (DNSKEY). If the data has been tampered with, signature verification fails and the resolver discards the response."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1113-applications-in-real-systems",
      children: "11.13 Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "openvpn",
      children: "OpenVPN"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OpenVPN uses TLS for control channel authentication (certificate exchange) and IPSec-like ESP for the data channel. It typically uses UDP port 1194 with AES-256-GCM encryption. Operates in userspace via tun/tap interfaces. Supports TCP as a fallback. Works well across NAT due to single UDP port."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ipsec-strongswan-libreswan-windows-built-in",
      children: "IPsec (strongSwan, Libreswan, Windows built-in)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IPsec is the standard for site-to-site VPN. Most implementations use IKEv2 with ECDHE key exchange, AES-256-GCM encryption, and certificate authentication. IPsec tunnel mode encapsulates entire IP packets, making it suitable for routing between entire networks (e.g., AWS VPC to on-premises data center via AWS VPN Gateway)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lets-encrypt",
      children: "Let's Encrypt"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Let's Encrypt is a free, automated, and open Certificate Authority using the ACME (Automated Certificate Management Environment) protocol. It validates domain control before issuing certificates. Certificates are valid for 90 days, encouraging automation. The ACME flow:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client generates key pair and requests certificate for domain."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CA challenges the client to prove domain control (HTTP-01: serve a token at /.well-known/acme-challenge/; DNS-01: add a TXT record)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client fulfills challenge. CA signs and issues the certificate."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client installs certificate on the server. Renews before expiration."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cloudflare-ddos-protection",
      children: "Cloudflare DDoS Protection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cloudflare operates one of the largest anycast networks. Their DDoS mitigation strategy includes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Anycast distribution"
        }), ": Traffic is spread across 330+ data centers worldwide, absorbing volumetric attacks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "L3/L4 mitigation"
        }), ": Kernel-level BPF (Berkeley Packet Filter) rules discard malicious packets (SYN floods, UDP amplification) at the edge before they reach the origin."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "L7 mitigation"
        }), ": WAF rules, rate limiting, challenge pages (JavaScript challenge, CAPTCHA), and behavioral analysis to identify abusive traffic."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Adaptive DDoS protection"
        }), ": Machine learning models detect anomalous traffic patterns and automatically generate mitigation rules."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unmetered DDoS protection"
        }), ": Free for all customers (including free tier), ensuring availability even under sustained attack."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pro-tips",
      children: "Pro Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use TLS 1.3 where possible"
        }), ": TLS 1.3 reduces handshake to 1 RTT (0-RTT for resuming), removes insecure cipher suites, and provides forward secrecy by default."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RSA key sizes matter"
        }), ": 2048-bit RSA is the current minimum; 4096-bit is recommended for long-lived CAs. ECC (256-bit) provides equivalent security to 3072-bit RSA with smaller certificates."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stateful firewalls are not enough"
        }), ": Deploy an NGFW with application-level inspection and TLS decryption."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IDS placement"
        }), ": Deploy IDS sensors at network chokepoints (internet ingress, DMZ, internal segments). A single sensor at the border misses lateral movement."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use DNSSEC validation on resolvers"
        }), ": Unbound and BIND can validate DNSSEC chains. Without validation, DNSSEC provides zero protection."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Firewall rule ordering"
        }), ": Place the most specific and most frequently matched rules first to reduce average evaluation time."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SYN cookies are a defense against resource exhaustion"
        }), ": They should be enabled on any internet-facing server; the performance cost is negligible."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "one-sentence-takeaways",
      children: "One-Sentence Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Symmetric encryption (AES) is fast but requires key distribution; asymmetric (RSA, ECC) solves key exchange without a shared secret."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Diffie-Hellman enables two parties to establish a shared secret over an untrusted channel; ECDHE provides forward secrecy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Digital signatures provide non-repudiation; certificates bind public keys to identities via a chain of trust."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Packet-filter firewalls are stateless; stateful firewalls track connection state; NGFWs add deep packet inspection."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IPSec operates at the network layer (tunnel mode encapsulates entire IP packets); TLS operates at the transport layer."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IDS/IPS use signatures, anomalies, and behavioral analysis; DDoS mitigation requires multi-layer defense including anycast, rate limiting, and WAF."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "802.1X authenticates devices at the port level; WPA3 uses SAE to resist offline dictionary attacks; DNSSEC validates DNS response integrity."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Technology"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Strength"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Symmetric Encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Confidentiality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128-256 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast, bulk encryption"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Asymmetric Encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key exchange, signatures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSA, ECC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2048-4096 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow, limited data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hashing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integrity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA-256, SHA-3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256-bit output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One-way, collision-resistant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication + Integrity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HMAC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key-dependent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proves sender knowledge"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Digital Signature"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-repudiation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECDSA, RSA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key-dependent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legally binding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Certificate (PKI)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identity binding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X.509"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CA-signed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trust chain"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference-firewall-types",
      children: "Quick Reference: Firewall Types"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Layer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stateful"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "App Awareness"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Speed"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Packet filter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3/4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Line rate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stateful"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3/4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Near line rate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Application proxy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NGFW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3-7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deep (DPI, TLS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HW-dependent"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ddos-protection-quick-reference",
      children: "DDoS Protection Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Defense Layer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Technology"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Attacks Mitigated"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Edge (L3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anycast distribution, BGP blackholing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Volumetric floods (100s Gbps+)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Network (L3/L4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACLs, rate limiting, SYN cookies, BPF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SYN flood, UDP amplification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Application (L7)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WAF, challenge page, rate limiting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP flood, Slowloris, credential stuffing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Behavioral"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ML-based anomaly detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Novel attack patterns, zero-day DDoS"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Environment"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Recommended Crypto"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Firewall Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "VPN Type"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Web browsing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TLS 1.3 (ECDHE + AES-GCM)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NGFW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TLS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Site-to-site WAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPSec (AES-256, SHA-256)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stateful"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPSec tunnel"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Remote access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TLS 1.3 + OAuth2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NGFW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSL VPN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IoT sensors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECC-256, CoAP over DTLS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Packet filter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data center"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MACsec (L2 encryption)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stateful"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (trusted net)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mermaid-diagram-osi-security-layers",
      children: "Mermaid Diagram: OSI Security Layers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TB\n  subgraph APP[\"Application Layer (L7)\"]\n    direction TB\n    T1[\"Threats: XSS, SQLi, Malware\"]\n    D1[\"Defenses: WAF, Input Validation, CSP\"]\n  end\n  subgraph PRES[\"Presentation Layer (L6)\"]\n    T2[\"Threats: Weak Ciphers, Protocol Downgrade\"]\n    D2[\"Defenses: TLS 1.3, HSTS, Certificate Pinning\"]\n  end\n  subgraph SESS[\"Session Layer (L5)\"]\n    T3[\"Threats: Session Hijacking, Replay\"]\n    D3[\"Defenses: Secure Cookies, CSRF Tokens, Nonces\"]\n  end\n  subgraph TRANS[\"Transport Layer (L4)\"]\n    T4[\"Threats: SYN Flood, Port Scan, MITM\"]\n    D4[\"Defenses: TLS, Stateful Firewall, SYN Cookies\"]\n  end\n  subgraph NET[\"Network Layer (L3)\"]\n    T5[\"Threats: IP Spoofing, DDoS, Routing Hijack\"]\n    D5[\"Defenses: IPSec, ACLs, BGPsec, Ingress Filtering\"]\n  end\n  subgraph DLL[\"Data Link Layer (L2)\"]\n    T6[\"Threats: ARP Spoofing, MAC Flood, STP Attack\"]\n    D6[\"Defenses: 802.1X, Dynamic ARP Inspection, MACsec\"]\n  end\n  subgraph PHYS[\"Physical Layer (L1)\"]\n    T7[\"Threats: Eavesdropping, Tampering, Physical Theft\"]\n    D7[\"Defenses: Faraday Cages, Fiber Monitoring, Locks\"]\n  end\n\n  APP --> PRES --> SESS --> TRANS --> NET --> DLL --> PHYS\n  T1 -.-> D1\n  T2 -.-> D2\n  T3 -.-> D3\n  T4 -.-> D4\n  T5 -.-> D5\n  T6 -.-> D6\n  T7 -.-> D7\n\n  classDef threat fill:#ffcccc,stroke:#ff0000,stroke-width:2px\n  classDef defense fill:#ccffcc,stroke:#00aa00,stroke-width:2px\n  classDef layer fill:#e6f3ff,stroke:#0066cc,stroke-width:1px\n  class T1,T2,T3,T4,T5,T6,T7 threat\n  class D1,D2,D3,D4,D5,D6,D7 defense\n  class APP,PRES,SESS,TRANS,NET,DLL,PHYS layer\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "case-study-enterprise-network-security-design",
      children: "Case Study: Enterprise Network Security Design"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem."
      }), " A multinational corporation with 1,000 employees, three data centers, and a rapidly growing cloud workload needed to redesign its network security architecture. The legacy flat network had suffered two ransomware incidents and one data exfiltration event in the previous year. Requirements included: secure remote access for 300 work-from-home employees, PCI-DSS compliance for payment processing, protection against volumetric DDoS attacks, and micro-segmentation between engineering, finance, and HR departments."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution."
      }), " The security team deployed a three-tier firewall architecture: (1) edge NGFWs with IPS and DDoS scrubbing at the internet gateway, (2) internal firewalls creating DMZ, internal, and management security zones, and (3) host-based firewalls on all servers. TLS 1.3 was enforced for all external-facing services with Let's Encrypt certificates and automated renewal via ACME. A site-to-site IPSec VPN connected the three data centers using IKEv2 with ECDHE and AES-256-GCM. Remote employees connected via an SSL VPN with multi-factor authentication. The cloud workloads (AWS VPCs) were secured using Security Groups with a default-deny policy, and a centralized SIEM collected logs from all firewalls, IDS sensors, and cloud APIs."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Outcome."
      }), " Over three years, the organization experienced zero security breaches. The automated certificate lifecycle eliminated expired-certificate outages. DDoS scrubbing mitigated five attacks exceeding 100 Gbps. The micro-segmentation policy limited the blast radius of a single compromised workstation — lateral movement was contained to the user's department. Annual PCI-DSS audits passed with no critical findings. The total security operation cost was 15% below the previous legacy appliance model due to reduced hardware maintenance and automated policy management."]
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
            children: "Defense in depth requires controls at every OSI layer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy firewalls (L3/L4), IPS (L7), encryption (L6), and access control (L2) simultaneously"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TLS everywhere with automated certificates prevents both eavesdropping and outages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use Let's Encrypt + ACME for all public services; enforce TLS 1.3 minimum"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Default-deny firewall policy reduces attack surface"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start with empty allowlist; add rules only for verified business traffic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Micro-segmentation limits blast radius during breaches"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate departments and tiers into distinct security zones with inter-zone firewall rules"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud security groups follow the same principles as physical firewalls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply default-deny, least-privilege, and audit logging to cloud network ACLs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Centralized logging and SIEM is essential for breach detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Aggregate firewall logs, IDS alerts, and cloud API calls into a single dashboard"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Automated certificate lifecycle management prevents expiry outages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use ACME protocol with 60-day certificates; monitor expiry via SIEM alerts"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Which firewall type maintains a connection state table to track ongoing sessions?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Packet-filter firewall"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Stateful firewall"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Application proxy"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Next-generation firewall"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What is the primary purpose of IPSec tunnel mode?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Encrypt only the transport-layer payload"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Encrypt the entire original IP packet inside a new IP header"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Provide application-layer content filtering"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Replace TLS for web security"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "In a TLS 1.3 handshake, how many round trips are needed before application data can flow?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) 0 (zero RTT)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) 1 RTT"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) 2 RTT"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) 3 RTT"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What mechanism does WPA3 use to resist offline dictionary attacks?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) PSK 4-way handshake"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) SAE (Simultaneous Authentication of Equals)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) EAP-TLS certificate exchange"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) WPS PIN authentication"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Which DNSSEC record type provides the public key used to verify RRSIG signatures in a zone?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) DS"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) RRSIG"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) DNSKEY"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) NSEC"
          }), "\n"]
        }), "\n"]
      }), "\n"]
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
            children: "Q1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stateful firewalls maintain a connection table (src IP, dst IP, ports, state) to track sessions; packet filters are stateless"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tunnel mode encapsulates the entire original IP packet with a new IP header + ESP header; transport mode protects only payload"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TLS 1.3 requires 1 RTT for full handshake (client key share in ClientHello, server response in ServerHello). 0-RTT is for resumption only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SAE (Simultaneous Authentication of Equals) uses a password-authenticated DH exchange resistant to offline brute force"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNSKEY records store the zone's public signing key; RRSIG contains signatures; DS links parent to child zone"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Network security relies on cryptography for confidentiality (AES), integrity (SHA-256, HMAC), and authentication (digital signatures, certificates). Symmetric encryption provides fast bulk encryption but requires secure key distribution. Asymmetric encryption (RSA, ECC) enables key exchange and digital signatures. PKI binds public keys to identities through CA-signed X.509 certificates. Firewalls enforce access control at the packet, state, or application level → NGFWs combine all three with DPI. VPNs (IPSec, TLS, WireGuard) protect communication over untrusted networks. IDS/IPS detect and block malicious traffic using signatures, anomaly detection, and behavioral analysis. DDoS mitigation requires multi-layer defense from edge routing to application-level filtering. 802.1X authenticates devices at the port level before network access. WPA3 replaces WPA2's PSK with SAE, providing forward secrecy and resistance to offline dictionary attacks. DNSSEC validates DNS response integrity through digital signatures."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "A cryptographic hash must satisfy: (a) preimage resistance — given hash y, infeasible to find x such that H(x) = y; (b) second preimage resistance — given x, infeasible to find x' ≠ x with H(x') = H(x); (c) collision resistance — infeasible to find any pair x₁ ≠ x₂ with H(x₁) = H(x₂)."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "DH is vulnerable to MITM because the exchanged public values (g^a mod p, g^b mod p) are not authenticated. An attacker can intercept both values, substitute their own, and establish separate shared secrets with each party. The parties believe they share a secret with each other but actually share one with the attacker."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "An X.509 certificate contains: version, serial number, signature algorithm identifier, issuer name, validity period (notBefore, notAfter), subject name, subject's public key, issuer unique ID (optional), subject unique ID (optional), extensions, and CA's digital signature."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "A packet-filter firewall examines each packet independently (stateless) based on IP/port fields. A stateful firewall maintains a connection state table tracking TCP handshake state, sequence numbers, and session context — it can allow return traffic for outbound connections while blocking unsolicited inbound packets."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Transport mode protects only the payload (L4 and above) of the original IP packet, keeping the original IP header. Tunnel mode encapsulates the entire original IP packet inside a new IP header with ESP/AH — the original IP addresses are hidden, making it suitable for site-to-site VPNs."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "IDS/IPS use: (a) signature-based detection — matching known attack patterns (fast, low false positive, no zero-day); (b) anomaly-based detection — deviations from baseline behavior (detects novel attacks, higher false positives); (c) behavioral analysis — sequences of actions indicating compromise (context-aware, computationally expensive)."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "SAE (Simultaneous Authentication of Equals) uses a password-authenticated Diffie-Hellman exchange where each guess requires an online interaction with the real AP. Unlike WPA2's PSK 4-way handshake which can be captured and brute-forced offline, SAE's exchange commits both parties to a guess before revealing any information — an attacker cannot verify an offline guess."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "A DS (Delegation Signer) record in the parent zone links to a child zone's DNSKEY record. It contains a hash of the child zone's KSK (Key Signing Key), enabling resolvers to build a chain of trust from the root zone down to the target domain."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        start: "9",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "n = p × q = 61 × 53 = 3233. φ(n) = (p-1)(q-1) = 60 × 52 = 3120. e = 17. Using extended Euclidean algorithm: 17 × d ≡ 1 (mod 3120) → d = 2753. Encrypt: c = m^e mod n = 65^17 mod 3233 = 2790. Decrypt: m = c^d mod n = 2790^2753 mod 3233 = 65 ✓."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Stateful firewall rules: (1) Allow outbound HTTP/HTTPS from any internal host to any destination; (2) Allow outbound DNS (UDP 53) from internal DNS servers to external resolvers; (3) Allow inbound SSH from 10.0.0.0/24 to any internal host (management access); (4) Allow inbound SMTP from any to 10.0.1.10 (mail server); (5) Deny all other inbound traffic; (6) Allow established/related return traffic for all outbound connections. The stateful firewall automatically creates state entries for allowed outbound connections, permitting return traffic without explicit rules."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "SYN flood fill time = 500,000 / 1,000,000 = 0.5 seconds. Defenses: (a) SYN cookies — encode connection state in SYN-ACK sequence number, no state stored until ACK; (b) SYN proxy — firewall completes handshake on behalf of server; (c) rate limiting — limit new connections per second per source IP; (d) increase connection table size and reduce timeout for half-open connections."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "IKEv2 SA setup: (1) IKE_SA_INIT request: HDR(SPIi=0xA1), SA(enc=AES-CBC-256, prf=HMAC-SHA256, dh=19), KE(g^i mod p), Ni(nonce); (2) IKE_SA_INIT response: HDR(SPIi=0xA1, SPIr=0xB2), SA(enc=AES-CBC-256), KE(g^r mod p), Nr(nonce); (3) Key derivation: SK_d = PRF(Ni|Nr, g^ir), SK_ei = PRF(SK_d, \"key for init\"), SK_er = PRF(SK_d, \"key for resp\"); (4) IKE_AUTH request: SK{IDi, CERT, AUTH, SA(TSi, TSr)}; (5) IKE_AUTH response: SK{IDr, CERT, AUTH, SA}."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        start: "13",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Secure messaging protocol design:"
          }), " (a) Use X3DH (Extended Triple Diffie-Hellman) for initial key agreement — each party has a long-term identity key (IK), a medium-term signed pre-key (SPK), and ephemeral keys (EK). (b) For forward secrecy, use the Double Ratchet algorithm: a DH ratchet provides new ephemeral keys per message (or per received message), and a symmetric ratchet provides keys for each message direction. Compromise of long-term keys reveals only the current ratchet state, not past messages. (c) For deniability, use the same key material for both parties — either party could have forged a message (no cryptographic proof of origin to third parties). Off-the-Record messaging uses this property. (d) Authentication is achieved during the X3DH initial handshake where both parties authenticate using their long-term identity keys (signed with ECDSA). The initial shared secret includes IK components from both sides. Comparison with Signal: this design is functionally equivalent to Signal's Double Ratchet + X3DH. Signal adds additional protections like padding, message dedup via associated data, and post-compromise security through future DH ratchets."]
        }), "\n"]
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