"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[62915],{

/***/ 96482
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_artificial_intelligence_14_robotics_md_4c1_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-artificial-intelligence-14-robotics-md-4c1.json
const site_docs_courses_artificial_intelligence_14_robotics_md_4c1_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/artificial-intelligence/14-robotics","title":"Chapter 14: Robotics","description":"Previous Computer Vision | Next Ethics of AI","source":"@site/docs/courses/artificial-intelligence/14-robotics.md","sourceDirName":"courses/artificial-intelligence","slug":"/artificial-intelligence/14-robotics","permalink":"/ai-engineering-journey/artificial-intelligence/14-robotics","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":22,"frontMatter":{"id":"14-robotics","slug":"/artificial-intelligence/14-robotics","title":"Chapter 14: Robotics","sidebar_label":"Chapter 14: Robotics","sidebar_position":22},"sidebar":"course-artificial-intelligence","previous":{"title":"Chapter 13: Computer Vision","permalink":"/ai-engineering-journey/artificial-intelligence/13-computer-vision"},"next":{"title":"Chapter 15: Ethics of Artificial Intelligence","permalink":"/ai-engineering-journey/artificial-intelligence/15-ethics-ai"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/artificial-intelligence/14-robotics.md


const frontMatter = {
	id: '14-robotics',
	slug: '/artificial-intelligence/14-robotics',
	title: 'Chapter 14: Robotics',
	sidebar_label: 'Chapter 14: Robotics',
	sidebar_position: 22
};
const contentTitle = 'Chapter 14: Robotics';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Why Robotics Matters",
  "id": "why-robotics-matters",
  "level": 2
}, {
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
  "level": 2
}, {
  "value": "14.1 Robot Definition and Architecture",
  "id": "141-robot-definition-and-architecture",
  "level": 2
}, {
  "value": "14.1.1 The Sense-Plan-Act Loop",
  "id": "1411-the-sense-plan-act-loop",
  "level": 3
}, {
  "value": "14.1.2 Algorithm — Sense-Plan-Act Loop",
  "id": "1412-algorithm--sense-plan-act-loop",
  "level": 3
}, {
  "value": "14.1.3 Dry Run — Sense-Plan-Act for a Line-Following Robot",
  "id": "1413-dry-run--sense-plan-act-for-a-line-following-robot",
  "level": 3
}, {
  "value": "14.1.4 Python — Sense-Plan-Act Loop",
  "id": "1414-python--sense-plan-act-loop",
  "level": 3
}, {
  "value": "14.1.5 Complexity Analysis",
  "id": "1415-complexity-analysis",
  "level": 3
}, {
  "value": "14.1.6 Advantages &amp; Disadvantages",
  "id": "1416-advantages--disadvantages",
  "level": 3
}, {
  "value": "14.1.7 Edge Cases",
  "id": "1417-edge-cases",
  "level": 3
}, {
  "value": "14.2 Robot Types",
  "id": "142-robot-types",
  "level": 2
}, {
  "value": "14.3 Sensors",
  "id": "143-sensors",
  "level": 2
}, {
  "value": "14.3.1 Sensor Taxonomy",
  "id": "1431-sensor-taxonomy",
  "level": 3
}, {
  "value": "14.3.2 Sensor Fusion Pipeline",
  "id": "1432-sensor-fusion-pipeline",
  "level": 3
}, {
  "value": "14.3.3 Algorithm — IMU + GPS Sensor Fusion (Complementary Filter)",
  "id": "1433-algorithm--imu--gps-sensor-fusion-complementary-filter",
  "level": 3
}, {
  "value": "14.3.4 Dry Run — Sensor Fusion for a Drone",
  "id": "1434-dry-run--sensor-fusion-for-a-drone",
  "level": 3
}, {
  "value": "14.3.5 Python — IMU + GPS Sensor Fusion",
  "id": "1435-python--imu--gps-sensor-fusion",
  "level": 3
}, {
  "value": "14.3.6 Complexity Analysis",
  "id": "1436-complexity-analysis",
  "level": 3
}, {
  "value": "14.3.7 Advantages &amp; Disadvantages",
  "id": "1437-advantages--disadvantages",
  "level": 3
}, {
  "value": "14.3.8 Edge Cases",
  "id": "1438-edge-cases",
  "level": 3
}, {
  "value": "14.4 Actuators",
  "id": "144-actuators",
  "level": 2
}, {
  "value": "14.4.1 Actuator Taxonomy",
  "id": "1441-actuator-taxonomy",
  "level": 3
}, {
  "value": "14.4.2 Algorithm — DC Motor Speed Control (Open-Loop + Closed-Loop)",
  "id": "1442-algorithm--dc-motor-speed-control-open-loop--closed-loop",
  "level": 3
}, {
  "value": "14.4.3 Dry Run — DC Motor Speed Regulation",
  "id": "1443-dry-run--dc-motor-speed-regulation",
  "level": 3
}, {
  "value": "14.4.4 Python — DC Motor PID Controller",
  "id": "1444-python--dc-motor-pid-controller",
  "level": 3
}, {
  "value": "14.4.5 Complexity Analysis",
  "id": "1445-complexity-analysis",
  "level": 3
}, {
  "value": "14.4.6 Advantages &amp; Disadvantages",
  "id": "1446-advantages--disadvantages",
  "level": 3
}, {
  "value": "14.4.7 Edge Cases",
  "id": "1447-edge-cases",
  "level": 3
}, {
  "value": "14.5 Localization",
  "id": "145-localization",
  "level": 2
}, {
  "value": "14.5.1 The Localization Pipeline",
  "id": "1451-the-localization-pipeline",
  "level": 3
}, {
  "value": "14.5.2 Algorithm — Monte Carlo Localization (Particle Filter)",
  "id": "1452-algorithm--monte-carlo-localization-particle-filter",
  "level": 3
}, {
  "value": "14.5.3 Dry Run — MCL in a 1D Corridor",
  "id": "1453-dry-run--mcl-in-a-1d-corridor",
  "level": 3
}, {
  "value": "14.5.4 Python — Monte Carlo Localization (1D)",
  "id": "1454-python--monte-carlo-localization-1d",
  "level": 3
}, {
  "value": "14.5.5 Complexity Analysis",
  "id": "1455-complexity-analysis",
  "level": 3
}, {
  "value": "14.5.6 Advantages &amp; Disadvantages",
  "id": "1456-advantages--disadvantages",
  "level": 3
}, {
  "value": "14.5.7 Edge Cases",
  "id": "1457-edge-cases",
  "level": 3
}, {
  "value": "14.5.8 Localization Methods Comparison",
  "id": "1458-localization-methods-comparison",
  "level": 3
}, {
  "value": "14.6 Mapping and SLAM",
  "id": "146-mapping-and-slam",
  "level": 2
}, {
  "value": "14.6.1 The SLAM Pipeline",
  "id": "1461-the-slam-pipeline",
  "level": 3
}, {
  "value": "14.6.2 Algorithm — EKF-SLAM",
  "id": "1462-algorithm--ekf-slam",
  "level": 3
}, {
  "value": "14.6.3 Dry Run — EKF-SLAM with 2 Landmarks",
  "id": "1463-dry-run--ekf-slam-with-2-landmarks",
  "level": 3
}, {
  "value": "14.6.4 Python — EKF-SLAM (1D, 1 Landmark)",
  "id": "1464-python--ekf-slam-1d-1-landmark",
  "level": 3
}, {
  "value": "14.6.5 Complexity Analysis",
  "id": "1465-complexity-analysis",
  "level": 3
}, {
  "value": "14.6.6 EKF-SLAM vs GraphSLAM",
  "id": "1466-ekf-slam-vs-graphslam",
  "level": 3
}, {
  "value": "14.6.7 Advantages &amp; Disadvantages",
  "id": "1467-advantages--disadvantages",
  "level": 3
}, {
  "value": "14.6.8 Edge Cases",
  "id": "1468-edge-cases",
  "level": 3
}, {
  "value": "14.7 Motion Planning",
  "id": "147-motion-planning",
  "level": 2
}, {
  "value": "14.7.1 Motion Planning Pipeline",
  "id": "1471-motion-planning-pipeline",
  "level": 3
}, {
  "value": "14.7.2 Algorithm — RRT (Rapidly-Exploring Random Tree)",
  "id": "1472-algorithm--rrt-rapidly-exploring-random-tree",
  "level": 3
}, {
  "value": "14.7.3 Dry Run — RRT in a 2D Square World",
  "id": "1473-dry-run--rrt-in-a-2d-square-world",
  "level": 3
}, {
  "value": "14.7.4 Python — RRT for 2D Configuration Space",
  "id": "1474-python--rrt-for-2d-configuration-space",
  "level": 3
}, {
  "value": "14.7.5 RRT* — Optimal Extension with Rewiring",
  "id": "1475-rrt--optimal-extension-with-rewiring",
  "level": 3
}, {
  "value": "14.7.6 Complexity Analysis",
  "id": "1476-complexity-analysis",
  "level": 3
}, {
  "value": "14.7.7 Advantages &amp; Disadvantages",
  "id": "1477-advantages--disadvantages",
  "level": 3
}, {
  "value": "14.7.8 Edge Cases",
  "id": "1478-edge-cases",
  "level": 3
}, {
  "value": "14.8 Control",
  "id": "148-control",
  "level": 2
}, {
  "value": "14.8.1 The Control Pipeline",
  "id": "1481-the-control-pipeline",
  "level": 3
}, {
  "value": "14.8.2 PID Control",
  "id": "1482-pid-control",
  "level": 3
}, {
  "value": "14.8.3 Algorithm — PID with Anti-Windup",
  "id": "1483-algorithm--pid-with-anti-windup",
  "level": 3
}, {
  "value": "14.8.4 Dry Run — PID for Ball Balancing on a Beam",
  "id": "1484-dry-run--pid-for-ball-balancing-on-a-beam",
  "level": 3
}, {
  "value": "14.8.5 Python — PID Controller",
  "id": "1485-python--pid-controller",
  "level": 3
}, {
  "value": "14.8.6 Model Predictive Control (MPC)",
  "id": "1486-model-predictive-control-mpc",
  "level": 3
}, {
  "value": "14.8.7 Complexity Analysis",
  "id": "1487-complexity-analysis",
  "level": 3
}, {
  "value": "14.8.8 Advantages &amp; Disadvantages",
  "id": "1488-advantages--disadvantages",
  "level": 3
}, {
  "value": "14.8.9 Edge Cases",
  "id": "1489-edge-cases",
  "level": 3
}, {
  "value": "14.9 Robot Operating System (ROS)",
  "id": "149-robot-operating-system-ros",
  "level": 2
}, {
  "value": "14.9.1 ROS Communication Patterns",
  "id": "1491-ros-communication-patterns",
  "level": 3
}, {
  "value": "14.9.2 ROS 2 vs ROS 1",
  "id": "1492-ros-2-vs-ros-1",
  "level": 3
}, {
  "value": "14.10 Interview Corner",
  "id": "1410-interview-corner",
  "level": 2
}, {
  "value": "Q1: Explain the SLAM problem. Why can&#39;t you solve localization and mapping separately?",
  "id": "q1-explain-the-slam-problem-why-cant-you-solve-localization-and-mapping-separately",
  "level": 3
}, {
  "value": "Q2: How does a Kalman filter fuse multiple sensors? Walk through the math.",
  "id": "q2-how-does-a-kalman-filter-fuse-multiple-sensors-walk-through-the-math",
  "level": 3
}, {
  "value": "Q3: Compare PID and MPC. When would you use each?",
  "id": "q3-compare-pid-and-mpc-when-would-you-use-each",
  "level": 3
}, {
  "value": "Q4: What is the kidnapped robot problem and how does MCL handle it?",
  "id": "q4-what-is-the-kidnapped-robot-problem-and-how-does-mcl-handle-it",
  "level": 3
}, {
  "value": "Q5: Explain data association in SLAM and why it&#39;s hard.",
  "id": "q5-explain-data-association-in-slam-and-why-its-hard",
  "level": 3
}, {
  "value": "Q6: What is the difference between odometry and localization?",
  "id": "q6-what-is-the-difference-between-odometry-and-localization",
  "level": 3
}, {
  "value": "14.11 Applications in Real Systems",
  "id": "1411-applications-in-real-systems",
  "level": 2
}, {
  "value": "14.11.1 Roomba (iRobot) — Consumer Cleaning Robot",
  "id": "14111-roomba-irobot--consumer-cleaning-robot",
  "level": 3
}, {
  "value": "14.11.2 Boston Dynamics — Atlas and Spot",
  "id": "14112-boston-dynamics--atlas-and-spot",
  "level": 3
}, {
  "value": "14.11.3 Self-Driving Cars (Waymo, Cruise)",
  "id": "14113-self-driving-cars-waymo-cruise",
  "level": 3
}, {
  "value": "14.11.4 Industrial Robot Arms (KUKA, Fanuc, ABB)",
  "id": "14114-industrial-robot-arms-kuka-fanuc-abb",
  "level": 3
}, {
  "value": "14.11.5 Comparing Real Systems",
  "id": "14115-comparing-real-systems",
  "level": 3
}, {
  "value": "Concept Comparison",
  "id": "concept-comparison",
  "level": 2
}, {
  "value": "Quick Reference — PID Control",
  "id": "quick-reference--pid-control",
  "level": 2
}, {
  "value": "PID Tuning Heuristics",
  "id": "pid-tuning-heuristics",
  "level": 3
}, {
  "value": "Common PID Gains by Application",
  "id": "common-pid-gains-by-application",
  "level": 3
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
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
  "value": "Challenge Problems",
  "id": "challenge-problems",
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
    hr: "hr",
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
        id: "chapter-14-robotics",
        children: "Chapter 14: Robotics"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Previous:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/artificial-intelligence/13-computer-vision",
        children: "Chapter 13: Computer Vision"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/artificial-intelligence/15-ethics-ai",
        children: "Chapter 15: Ethics of AI"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the conclusion of this chapter, the student will be able to: (1) describe the hardware components of a robotic system; (2) implement Monte Carlo localization; (3) explain the SLAM problem and its solution approaches; (4) apply motion planning algorithms including RRT; (5) understand control theory fundamentals; (6) compare localization methods and select appropriate techniques; (7) analyze real-world robotics systems from Roomba to Boston Dynamics; (8) answer interview questions on SLAM, sensor fusion, and control theory."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-robotics-matters",
      children: "Why Robotics Matters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Imagine your ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "own arm"
      }), " reaching for a glass of water. Your eyes (sensors) see the glass. Your brain (controller) estimates its position, plans a trajectory, and sends signals through your nervous system (communication bus). Your muscles (actuators) contract to move your arm. Your sense of touch (proprioception) confirms you've grasped it. If someone bumps you, your arm automatically compensates — that's a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "feedback control loop"
      }), " running at subconscious speed."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A robot is the same architecture built from silicon and steel. Sensors collect data, a control loop estimates state and plans actions, actuators execute motion, and the cycle repeats hundreds of times per second. Every autonomous system — from a Roomba vacuuming your floor to a self-driving car navigating highways — runs this ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "sense-plan-act"
      }), " loop. Robotics is where AI meets the physical world, and understanding it is essential for any engineer building systems that move."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Topics"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Terms"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Robot Architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sensing, estimation, planning, control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Embodied agent, actuators"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Robot Types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manipulator, mobile, humanoid, swarm, soft"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DOF, end effector, chassis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sensors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera, LIDAR, IMU, GPS, encoders"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Point cloud, odometry, noise model"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Actuators"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DC motor, servo, stepper, hydraulic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Torque, PWM, PID output"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Localization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MCL (particle filter), Kalman filter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Belief, kidnapped robot, pose"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SLAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EKF-SLAM, GraphSLAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Landmarks, loop closure, graph optimization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Motion Planning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C-space, RRT, RRT*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Collision-free, asymptotic optimality"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PID, MPC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feedback, proportional gain, horizon"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ROS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nodes, topics, services, actions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Middleware, tf, launch files"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Robot Architecture] --> B[Sensors]\n    A --> C[Actuators]\n    B --> D[Localization]\n    C --> D\n    D --> E[MCL / Particle Filter]\n    D --> F[Kalman Filter]\n    B --> G[SLAM]\n    D --> G\n    G --> H[EKF-SLAM]\n    G --> I[GraphSLAM]\n    A --> J[Motion Planning]\n    J --> K[RRT / RRT*]\n    A --> L[Control]\n    L --> M[PID]\n    L --> N[MPC]\n    A --> O[ROS]\n    P[Real-World Systems] --> Q[Roomba]\n    P --> R[Boston Dynamics]\n    P --> S[Self-Driving Cars]\n    P --> T[Industrial Arms]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "141-robot-definition-and-architecture",
      children: "14.1 Robot Definition and Architecture"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " A robot is like a human body. The skeleton provides structure (kinematic chain), the nervous system carries signals (communication bus), the brain processes and decides (control computer), the eyes and skin sense the world (sensors), and the muscles generate force (actuators)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "robot"
      }), " is a physically embodied agent that perceives its environment through sensors and acts upon it through actuators. The robotic system integrates perception, planning, and control within a physical platform."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1411-the-sense-plan-act-loop",
      children: "14.1.1 The Sense-Plan-Act Loop"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every robotic system follows a cyclic pipeline:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sense:"
        }), " Read raw sensor data (camera image, LIDAR scan, IMU reading)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Process:"
        }), " Filter noise, extract features, estimate state (pose, velocity)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Plan:"
        }), " Decide what action to take (path to follow, joint to move)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Act:"
        }), " Send commands to actuators (motor PWM, gripper close)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Repeat:"
        }), " Loop back to Sense, typically at 10–1000 Hz."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1412-algorithm--sense-plan-act-loop",
      children: "14.1.2 Algorithm — Sense-Plan-Act Loop"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Algorithm: SENSE-PLAN-ACT\nInput:  sensor_stream (continuous sensor data)\nOutput: actuator_commands (motor/throttle/gripper signals)\n1.  INITIALIZE robot state s = (x, y, theta, velocity)\n2.  INITIALIZE control parameters (PID gains, planning horizon)\n3.  while RUNNING do\n4.      raw_data ← READ_ALL_SENSORS()\n5.      filtered_data ← APPLY_FILTER(raw_data)   // e.g., median, Kalman\n6.      s ← ESTIMATE_STATE(filtered_data, s)     // update belief\n7.      goal ← GET_CURRENT_GOAL()                // target pose or task\n8.      path ← PLAN_PATH(s, goal)                // e.g., RRT, A*\n9.      control_signal ← COMPUTE_CONTROL(s, path) // e.g., PID\n10.     SEND_ACTUATOR_COMMANDS(control_signal)\n11.     WAIT(TIMESTEP)                           // maintain loop rate\n12. end while\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1413-dry-run--sense-plan-act-for-a-line-following-robot",
      children: "14.1.3 Dry Run — Sense-Plan-Act for a Line-Following Robot"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Robot follows a black line on a white surface. Goal: stay centered."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "State (x, error)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Sensor Raw"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Filtered"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Plan"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Act"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Init"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(0, 0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "t=1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(0, +15 px)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 IR readings [0,0,1,1,1,1,0,0]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "line offset = +15px"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "turn left 10°"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "left motor PWM=150, right=200"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "t=2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(0.5, +5 px)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0,1,1,1,1,1,1,0]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "offset = +5px"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "slight left 3°"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "left=180, right=200"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "t=3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1.0, −2 px)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0,0,1,1,1,1,0,0]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "offset = −2px"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "slight right 2°"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "left=200, right=190"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "t=4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1.5, 0 px)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0,0,1,1,1,1,0,0]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "offset = 0px"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "straight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "left=200, right=200"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Observation:"
      }), " At t=1, error is large → aggressive correction. By t=4, the steady-state error approaches zero. PID gains determine how quickly the robot converges without overshooting."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1414-python--sense-plan-act-loop",
      children: "14.1.4 Python — Sense-Plan-Act Loop"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import time\nimport random\nfrom dataclasses import dataclass, field\nfrom typing import List, Tuple\n\n@dataclass\nclass RobotState:\n    x: float = 0.0\n    y: float = 0.0\n    theta: float = 0.0\n    velocity: float = 0.0\n\nclass SensorSuite:\n    \"\"\"Simulated sensor suite returning noisy readings.\"\"\"\n    def read_all(self) -> dict:\n        return {\n            \"ir\": [random.gauss(0, 1) for _ in range(8)],\n            \"encoder\": random.gauss(0, 0.1),\n            \"imu_gyro\": random.gauss(0, 0.05),\n        }\n\nclass SimpleController:\n    def __init__(self, kp: float = 1.0, ki: float = 0.1, kd: float = 0.05):\n        self.kp, self.ki, self.kd = kp, ki, kd\n        self.integral = 0.0\n        self.prev_error = 0.0\n\n    def compute(self, error: float, dt: float = 0.1) -> float:\n        self.integral += error * dt\n        derivative = (error - self.prev_error) / dt if dt > 0 else 0.0\n        output = self.kp * error + self.ki * self.integral + self.kd * derivative\n        self.prev_error = error\n        return output\n\ndef sense_plan_act_loop(runtime: float = 5.0, dt: float = 0.1):\n    state = RobotState()\n    sensors = SensorSuite()\n    controller = SimpleController(kp=2.0, ki=0.5, kd=0.1)\n    goal_heading = 0.0\n    t = 0.0\n\n    while t < runtime:\n        # Sense\n        raw = sensors.read_all()\n        ir_center = raw[\"ir\"][3] - raw[\"ir\"][4]  # line offset estimate\n\n        # Plan — compute heading error\n        heading_error = goal_heading - state.theta + ir_center * 0.1\n\n        # Act — compute motor correction\n        correction = controller.compute(heading_error, dt)\n        left_pwm = 150 - int(correction)\n        right_pwm = 150 + int(correction)\n\n        # Simulate state update\n        state.theta += correction * dt * 0.5\n        state.x += state.velocity * dt\n\n        print(f\"t={t:.1f} error={heading_error:.3f} correction={correction:.3f} \"\n              f\"L={left_pwm} R={right_pwm} pose=({state.x:.2f},{state.y:.2f},{state.theta:.2f})\")\n        t += dt\n        time.sleep(dt)\n\nif __name__ == \"__main__\":\n    sense_plan_act_loop(runtime=1.0)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1415-complexity-analysis",
      children: "14.1.5 Complexity Analysis"
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
            children: "Sensor read"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(S) where S = sensor count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(S)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each sensor produces one reading; S is typically 5–20"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kalman prediction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²) for n-D state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Covariance matrix multiplication dominates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Path planning (RRT)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(K log N) for K iterations, N tree nodes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nearest-neighbor search in KD-tree"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PID control law"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple arithmetic; no state beyond integral/derivative"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Actuator write"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(A) where A = actuator count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(A)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One command per actuator channel"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(n²) for Kalman?"
      }), " The covariance matrix P is n×n; the prediction step performs P = F P Fᵀ + Q, which is two matrix multiplications of O(n³) naively, but optimized BLAS routines bring it to O(n²·⁸). For SLAM with thousands of landmarks, n² becomes prohibitive — that's why GraphSLAM uses sparse solvers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1416-advantages--disadvantages",
      children: "14.1.6 Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sense-Plan-Act"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple, modular, widely understood"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequential bottleneck; planning blocks sensing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reactive (subsumption)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast, robust to failures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No global reasoning; can get stuck"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hybrid (deliberative + reactive)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combines planning with fast reflexes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex to design and debug"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Behavior-based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good for multi-task robots"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scaling to many behaviors is hard"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1417-edge-cases",
      children: "14.1.7 Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sensor dropout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No readings for a control cycle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use IMU dead-reckoning as fallback"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Actuator saturation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Motor cannot reach commanded speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clamp control output; anti-windup for integral term"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Communication latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ROS topic messages arrive late"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Timestamp every message; use transform lookup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Power failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Robot stops mid-task"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Watchdog timer; safe-state controller"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Thermal drift"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMU bias shifts with temperature"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Periodic bias calibration; temperature compensation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "142-robot-types",
      children: "14.2 Robot Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robots are classified by their morphology, mobility, and application domain. The following table compares the major categories."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "DOF"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Mobility"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Environment"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Challenge"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Manipulator"
            }), " (industrial arm)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KUKA KR 6, Fanuc R-2000iB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "6–7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Fixed base"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Factory floor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Precision, payload, cycle time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mobile (wheeled)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Roomba, TurtleBot, Clearpath Jackal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "2–3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "2D planar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Indoor/outdoor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Odometry drift, slip"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mobile (legged)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spot, Atlas, ANYmal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "12–20+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Rough terrain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unstructured"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Balance, gait generation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Aerial (UAV)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DJI Phantom, Crazyflie, PX4-based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "4 (quad)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "3D flight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Open air/high-alt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Battery life, wind rejection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Underwater (ROV/AUV)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BlueROV, REMUS, Slocum glider"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "4–6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "3D underwater"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subsea"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pressure, acoustic comms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Humanoid"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Atlas, ASIMO, Pepper"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "26–32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Bipedal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Human spaces"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Balance, whole-body control"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Swarm"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kilobot, Crazyflie swarm, Ant bots"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "2–4 each"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Collective"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Varied"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Coordination, comms range"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Soft robot"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Octopus gripper, fish-bot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "∞ (continuous)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Variable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Confined spaces"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modeling, control"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key takeaway:"
      }), " The number of degrees of freedom (DOF), environment type, and task constraints determine the robot class. Most AI algorithms (localization, planning, control) apply across types with appropriate adaptations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "143-sensors",
      children: "14.3 Sensors"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " Your eyes, fingertips, and inner ear are biological sensors. Eyes provide rich visual data (camera), fingertips detect contact and texture (tactile), and the inner ear senses rotation and acceleration (IMU). Your brain fuses these into a stable perception of the world."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1431-sensor-taxonomy",
      children: "14.3.1 Sensor Taxonomy"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Sensor"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Measures"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Rate"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Noise Model"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Exteroceptive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RGB/D intensity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "30–90 Hz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gaussian + shot noise"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Exteroceptive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LIDAR (2D/3D)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distance to surfaces"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "5–40 Hz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gaussian range + outliers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Exteroceptive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ultrasonic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distance (wide cone)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "20–50 Hz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Speckle noise, multipath"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Exteroceptive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lat/Lon/Alt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1–10 Hz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gaussian ~1–5m stddev"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Proprioceptive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMU (accel + gyro)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Acceleration, rotation rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "100–1000 Hz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bias + white noise, drift"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Proprioceptive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wheel encoder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rotations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "100–1000 Hz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quantization, slip"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Proprioceptive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Joint angle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Angular position"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "100–1000 Hz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encoder quantization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Proprioceptive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Force/torque"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contact forces"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "100–1000 Hz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bias, thermal drift"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1432-sensor-fusion-pipeline",
      children: "14.3.2 Sensor Fusion Pipeline"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acquire:"
        }), " Read raw sensor values at native rates."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Timestamp:"
        }), " Assign synchronized timestamps to each reading."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Filter:"
        }), " Apply noise reduction (median filter for LIDAR, low-pass for IMU)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transform:"
        }), " Project measurements into a common coordinate frame via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tf"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fuse:"
        }), " Combine measurements using Kalman filter or complementary filter."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Publish:"
        }), " Output fused estimate (pose, velocity) to other ROS nodes."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1433-algorithm--imu--gps-sensor-fusion-complementary-filter",
      children: "14.3.3 Algorithm — IMU + GPS Sensor Fusion (Complementary Filter)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Algorithm: COMPLEMENTARY-FUSION\nInput:  accel (ax, ay, az), gyro (gx, gy, gz), gps (lat, lon, heading)\n        alpha = 0.98  (weight for gyro integration)\nOutput: roll, pitch, yaw (fused orientation)\n1.  accel_roll ← ATAN2(-ay, -az)\n2.  accel_pitch ← ATAN2(ax, SQRT(ay² + az²))\n3.  gps_yaw ← ATAN2(dy, dx) from GPS displacement\n4.  // complementary filter: gyro dominates high frequencies, accel/GPS low\n5.  fused_roll ← alpha * (prev_roll + gyro_x * dt) + (1 - alpha) * accel_roll\n6.  fused_pitch ← alpha * (prev_pitch + gyro_y * dt) + (1 - alpha) * accel_pitch\n7.  fused_yaw ← alpha * (prev_yaw + gyro_z * dt) + (1 - alpha) * gps_yaw\n8.  return fused_roll, fused_pitch, fused_yaw\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1434-dry-run--sensor-fusion-for-a-drone",
      children: "14.3.4 Dry Run — Sensor Fusion for a Drone"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Drone hovering at 10m altitude. GPS gives periodic fixes; IMU runs at 200 Hz."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "t (s)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Gyro (rad/s)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Accel (m/s²)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "GPS heading"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Raw roll (°)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Fused roll (°)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.00"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.0, 0.0, 0.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0, 0, 9.81"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initialized"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.05"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.02, 0.0, 0.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "−0.01, 0.0, 9.82"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.06"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.057"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gyro integration dominates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.01, 0.0, 0.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "−0.005, 0.0, 9.80"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.03"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.084"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accumulating drift"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.0, 0.0, 0.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.0, 0.0, 9.81"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.1°"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.089"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPS update pulls toward 0.1°"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.00"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.0, 0.0, 0.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.0, 0.0, 9.81"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.08°"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.067"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPS slowly corrects bias"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Observation:"
      }), " The complementary filter lets the high-rate gyro track fast motions (t=0.05-0.10) while the low-rate GPS/accel slowly corrects gyro drift (t=0.50-1.00). Alpha=0.98 means 98% weight on gyro, 2% on absolute reference."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1435-python--imu--gps-sensor-fusion",
      children: "14.3.5 Python — IMU + GPS Sensor Fusion"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import math\n\nclass ComplementaryFilter:\n    def __init__(self, alpha: float = 0.98):\n        self.alpha = alpha\n        self.roll = 0.0\n        self.pitch = 0.0\n        self.yaw = 0.0\n\n    def predict(self, gyro: tuple, dt: float):\n        \"\"\"Predict step: integrate gyro rates.\"\"\"\n        gx, gy, gz = gyro\n        self.roll += gx * dt\n        self.pitch += gy * dt\n        self.yaw += gz * dt\n\n    def update_accel(self, accel: tuple):\n        \"\"\"Correct roll/pitch from accelerometer.\"\"\"\n        ax, ay, az = accel\n        accel_roll = math.atan2(-ay, -az)\n        accel_pitch = math.atan2(ax, math.sqrt(ay**2 + az**2))\n        self.roll = self.alpha * self.roll + (1 - self.alpha) * accel_roll\n        self.pitch = self.alpha * self.pitch + (1 - self.alpha) * accel_pitch\n\n    def update_gps(self, gps_heading: float):\n        \"\"\"Correct yaw from GPS heading.\"\"\"\n        self.yaw = self.alpha * self.yaw + (1 - self.alpha) * gps_heading\n\n    def get_orientation(self) -> tuple:\n        return (self.roll, self.pitch, self.yaw)\n\n\n# Simulation: 2 seconds of flight\nfilt = ComplementaryFilter(alpha=0.98)\ndt = 0.01  # 100 Hz\nfor step in range(200):\n    t = step * dt\n    # Simulate small oscillations\n    gyro = (0.1 * math.sin(2 * math.pi * t), 0.05 * math.cos(4 * math.pi * t), 0.0)\n    accel = (0.0, 0.0, 9.81)\n    filt.predict(gyro, dt)\n    filt.update_accel(accel)\n    if step % 50 == 0:  # GPS at 2 Hz\n        filt.update_gps(gps_heading=0.0)\n    if step % 20 == 0:\n        r, p, y = filt.get_orientation()\n        print(f\"t={t:.2f} roll={math.degrees(r):.2f}° pitch={math.degrees(p):.2f}° \"\n              f\"yaw={math.degrees(y):.2f}°\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1436-complexity-analysis",
      children: "14.3.6 Complexity Analysis"
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
            children: "Sensor read"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per sensor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware register read"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Median filter (LIDAR)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n) per scan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorting n range measurements"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complementary filter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 arithmetic operations per axis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kalman fusion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²) state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Covariance matrix operations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Coordinate transform"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) via precomputed matrix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4×4 homogeneous transform"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why complementary filter over Kalman for simple fusion?"
      }), " The complementary filter is O(1) vs Kalman's O(n²), requires no noise model tuning, and works well when sensor frequency separation is clear (gyro handles high frequencies, accel/GPS handle low). Use Kalman when accurate covariance propagation is needed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1437-advantages--disadvantages",
      children: "14.3.7 Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Sensor"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Camera"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rich semantic info, cheap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lighting dependent, high data volume"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LIDAR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accurate range, works in dark"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expensive, degraded in fog/rain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High rate, no external ref"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Drifts, needs bias calibration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global, absolute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unreliable indoors, low rate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ultrasonic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very cheap, simple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wide beam, specular reflections"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Wheel encoder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple, accurate at low speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slip causes unbounded drift"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1438-edge-cases",
      children: "14.3.8 Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LIDAR in rain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Raindrops create false returns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Outlier filter, drop intensity threshold"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Camera low light"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High noise, low contrast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-exposure, IR illumination"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GPS urban canyon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multipath, signal loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dead-reckoning fallback, lane-level maps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMU saturation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High-g maneuvers clip sensors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sensor fusion with multiple IMUs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Encoder slip on ice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wheel spins without moving"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visual odometry cross-check"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "144-actuators",
      children: "14.4 Actuators"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " Your bicep and triceps work as an antagonistic pair — one contracts while the other relaxes to move your forearm. A robotic arm's DC motor and gearbox play the same role: electrical energy converts to mechanical torque, amplified through gearing to lift a load."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1441-actuator-taxonomy",
      children: "14.4.1 Actuator Taxonomy"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Actuator"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Principle"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Torque"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Speed"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Precision"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DC motor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lorentz force (magnetic)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Low-med"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wheel drive, fans"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Servo motor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DC + encoder + feedback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Med"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Med"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Robot joints, steering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stepper motor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Electromagnetic steps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Med"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Low-med"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Very high"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3D printer axes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Brushless DC (BLDC)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Electronic commutation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Med"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Drones, e-bikes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hydraulic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pressurized fluid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Very high"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Slow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excavators, Atlas robot"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pneumatic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compressed air"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Med"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grippers, soft actuators"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Piezoelectric"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Crystal deformation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Very low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Very fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Sub-nm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Micropositioning, AFM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shape-memory alloy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thermal phase change"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Med"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Slow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Med"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Soft robotics, grippers"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1442-algorithm--dc-motor-speed-control-open-loop--closed-loop",
      children: "14.4.2 Algorithm — DC Motor Speed Control (Open-Loop + Closed-Loop)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Algorithm: DC-MOTOR-CONTROL\nInput:  target_rpm, current_rpm (from encoder), Kp, Ki, Kd\nOutput: pwm_duty_cycle (0-255)\n// Open-loop feedforward\n1.  ff_pwm ← TARGET_RPM * RPM_TO_PWM_SCALE\n// Closed-loop PID correction\n2.  error ← target_rpm - current_rpm\n3.  integral ← integral + error * dt\n4.  derivative ← (error - prev_error) / dt\n5.  fb_pwm ← Kp * error + Ki * integral + Kd * derivative\n// Combine\n6.  pwm_out ← CLAMP(ff_pwm + fb_pwm, 0, 255)\n7.  prev_error ← error\n8.  return pwm_out\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1443-dry-run--dc-motor-speed-regulation",
      children: "14.4.3 Dry Run — DC Motor Speed Regulation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Target 1000 RPM, motor with encoder, P=0.5, I=0.1, D=0.01."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "t (s)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Target"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Actual"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Error"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Integral"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Derivative"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "FF"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "FB"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "PWM"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.00"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "255"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Saturated — max acceleration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.05"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "800"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "−4000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "350"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "255"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Still saturated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "75"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "−6000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "175"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "255"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Approaching target"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "750"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "250"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "87.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "−5000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "75"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "203"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Leaving saturation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "920"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "80"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "91.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "−3400"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "−6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "122"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slight overshoot"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1050"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "−50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "89.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "−2600"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "−71"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "57"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overshoot correction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "980"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "90.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1400"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "34"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "162"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Convergence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "−5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "88.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "−500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "−9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "119"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Steady state"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Observation:"
      }), " The combination of feedforward (FF=128 provides ~500 RPM open-loop) and feedback allows quick convergence. Without integral term, steady-state error of ~20 RPM would persist."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1444-python--dc-motor-pid-controller",
      children: "14.4.4 Python — DC Motor PID Controller"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import time\n\nclass DCMotorController:\n    def __init__(self, kp=0.5, ki=0.1, kd=0.01, ff_scale=0.128):\n        self.kp, self.ki, self.kd = kp, ki, kd\n        self.ff_scale = ff_scale\n        self.integral = 0.0\n        self.prev_error = 0.0\n\n    def compute(self, target_rpm: float, current_rpm: float, dt: float) -> int:\n        ff_pwm = int(target_rpm * self.ff_scale)\n        error = target_rpm - current_rpm\n        self.integral += error * dt\n        derivative = (error - self.prev_error) / dt if dt > 0 else 0.0\n        fb_pwm = self.kp * error + self.ki * self.integral + self.kd * derivative\n        pwm_out = max(0, min(255, int(ff_pwm + fb_pwm)))\n        self.prev_error = error\n        return pwm_out\n\n\n# Simulate motor with inertia\nclass MotorPlant:\n    def __init__(self, inertia=0.1, damping=0.01):\n        self.rpm = 0.0\n        self.inertia = inertia\n        self.damping = damping\n\n    def step(self, pwm: int, dt: float):\n        torque = pwm / 255.0 * 2000  # 2000 RPM max\n        acceleration = (torque - self.damping * self.rpm) / self.inertia\n        self.rpm += acceleration * dt\n        self.rpm = max(0, self.rpm)\n        return self.rpm\n\n\nctrl = DCMotorController()\nmotor = MotorPlant()\ndt = 0.01\nfor i in range(100):\n    t = i * dt\n    current = motor.rpm\n    pwm = ctrl.compute(1000, current, dt)\n    current = motor.step(pwm, dt)\n    if i % 10 == 0:\n        print(f\"t={t:.2f} target=1000 rpm={current:.1f} pwm={pwm}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1445-complexity-analysis",
      children: "14.4.5 Complexity Analysis"
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
            children: "PID compute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Three terms + clamping; fixed registers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Feedforward + feedback sum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single addition"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Encoder read + decode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware counter register"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PWM generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Timer register write"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gear ratio transform"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single multiplication"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why PID is O(1):"
      }), " Every computation is a simple arithmetic operation on scalar values. No loops, no allocation. This is critical for real-time control running at 1–10 kHz where every microsecond matters."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1446-advantages--disadvantages",
      children: "14.4.6 Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Actuator"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DC motor + encoder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cheap, simple, well-understood"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Brushes wear, low torque at low speed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Servo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integrated feedback, precise angle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited rotation range, lower speed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stepper"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Position holding without encoder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loses steps under load, noisy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BLDC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High efficiency, long life"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires electronic speed controller"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hydraulic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Massive force, rugged"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heavy, leaks, requires pump"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pneumatic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast, simple, safe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Noisy, poor precision"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1447-edge-cases",
      children: "14.4.7 Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Motor stall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Current spike, overheating"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Current limiting, stall detection timeout"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Backlash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gear train play causes oscillation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anti-backlash gears, dither signal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cogging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Magnetic detent at low speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sinusoidal commutation, higher PWM frequency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Overheating"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Winding insulation failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Temperature sensor, thermal rollback"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lost steps (stepper)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Position error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encoder feedback on final load"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "145-localization",
      children: "14.5 Localization"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " Imagine you wake up in a dark room you've never seen. You shuffle to a wall (range sensor), feel along it (odometry), find a corner (feature). You've built a mental map while tracking your position — that's localization. If someone suddenly picks you up and spins you around (kidnapped robot problem), you must reorient by re-exploring."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Localization"
      }), " is the problem of estimating the robot's pose (position and orientation) given sensor data and a map. The core challenge: sensors are noisy, actuators slip, and the world is ambiguous."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1451-the-localization-pipeline",
      children: "14.5.1 The Localization Pipeline"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Initialize belief:"
        }), " Start with a known pose or uniform distribution."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Predict:"
        }), " Apply motion model to propagate belief forward in time."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Observe:"
        }), " Receive sensor measurement (LIDAR scan, camera image)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Correct:"
        }), " Weight belief by measurement likelihood."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Resample"
        }), " (particle filter only): Draw new samples proportional to weight."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Repeat:"
        }), " Cycle at the sensor update rate."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1452-algorithm--monte-carlo-localization-particle-filter",
      children: "14.5.2 Algorithm — Monte Carlo Localization (Particle Filter)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Algorithm: MONTE-CARLO-LOCALIZATION\nInput:  X_{t-1} (previous particles), u_t (control), z_t (observation), m (map)\nOutput: X_t (updated particles)\n1.  X_t ← empty set\n2.  for each particle x in X_{t-1}:\n3.      // Motion model: apply control + noise\n4.      x' ← SAMPLE_MOTION_MODEL(x, u_t)\n5.      // Measurement model: compute importance weight\n6.      w ← MEASUREMENT_PROB(z_t, x', m)\n7.      add (x', w) to temporary set\n8.  // Normalize weights\n9.  total ← SUM(weights of temporary set)\n10. for each (x', w) in temporary set:\n11.     w ← w / total\n12. // Resample N particles with replacement proportional to weight\n13. X_t ← RESAMPLE(temporary_set, N)\n14. // Inject random particles for kidnapped robot recovery\n15. if ROBUST_MODE:\n16.     replace 5% of X_t with uniform random poses\n17. return X_t\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1453-dry-run--mcl-in-a-1d-corridor",
      children: "14.5.3 Dry Run — MCL in a 1D Corridor"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Robot in a 1D hallway of length 10m. Three particles. Robot receives control \"move +1m\" then observes \"I am at distance 7m from left wall.\""]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Particle"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Pose (m)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Weight"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Init"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p₁, p₂, p₃"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "2.0, 5.0, 8.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0.33, 0.33, 0.33"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uniform initial belief"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Predict (move +1m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p₁', p₂', p₃'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "3.1, 5.9, 8.9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Added Gaussian noise σ=0.2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Observe (z=7.0m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p₁'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "3.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0.01"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Far from 7m — low weight"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "p₂'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "5.9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0.12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "p₃'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "8.9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0.02"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Close-ish"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Normalize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p₁', p₂', p₃'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0.07, 0.80, 0.13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p₂ dominates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Resample"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p₁'', p₂'', p₃''"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "5.8, 6.1, 6.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0.33, 0.33, 0.33"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Particles cluster near truth"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Observation:"
      }), " After one observation, the particle cloud collapses around the true pose (~6m). With more particles, the convergence is smoother and more robust."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1454-python--monte-carlo-localization-1d",
      children: "14.5.4 Python — Monte Carlo Localization (1D)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import random\nimport math\nimport numpy as np\n\nclass Particle:\n    def __init__(self, x: float, weight: float = 1.0):\n        self.x = x\n        self.weight = weight\n\nclass MCL1D:\n    def __init__(self, num_particles: int = 100, map_size: float = 10.0):\n        self.particles = [Particle(random.uniform(0, map_size))\n                          for _ in range(num_particles)]\n        self.map_size = map_size\n\n    def predict(self, control: float, noise_std: float = 0.2):\n        for p in self.particles:\n            p.x += control + random.gauss(0, noise_std)\n            p.x = max(0, min(self.map_size, p.x))\n\n    def update_weights(self, observation: float, sensor_std: float = 0.5):\n        for p in self.particles:\n            # Gaussian measurement likelihood\n            diff = observation - p.x\n            p.weight = math.exp(-0.5 * (diff / sensor_std) ** 2)\n        total = sum(p.weight for p in self.particles)\n        if total > 0:\n            for p in self.particles:\n                p.weight /= total\n\n    def resample(self):\n        weights = [p.weight for p in self.particles]\n        indices = np.random.choice(\n            len(self.particles), size=len(self.particles),\n            replace=True, p=weights\n        )\n        self.particles = [Particle(self.particles[i].x) for i in indices]\n\n    def estimate(self) -> float:\n        return sum(p.x * p.weight for p in self.particles)\n\n    def inject_random(self, fraction: float = 0.05):\n        n = int(len(self.particles) * fraction)\n        for i in range(n):\n            self.particles[i] = Particle(random.uniform(0, self.map_size))\n\n\n# Simulation\nmcl = MCL1D(num_particles=100)\ntrue_pose = 3.0\nprint(f\"True pose: {true_pose}m\")\nprint(f\"Initial estimate: {mcl.estimate():.2f}m\")\n\nfor step in range(10):\n    control = 0.5  # move right 0.5m each step\n    true_pose += control\n    mcl.predict(control)\n    # Simulate noisy observation\n    observation = true_pose + random.gauss(0, 0.3)\n    mcl.update_weights(observation)\n    mcl.resample()\n    mcl.inject_random(0.05)\n    print(f\"Step {step}: true={true_pose:.2f} est={mcl.estimate():.2f} \"\n          f\"obs={observation:.2f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1455-complexity-analysis",
      children: "14.5.5 Complexity Analysis"
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
            children: "Motion model (N particles)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each particle sampled independently"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Measurement update (N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N × M)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each particle compares against M map features"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Weight normalization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single sum + division loop"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Resampling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multinomial or systematic sampling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Random injection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replace k = fraction × N particles"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(N × M) for measurement?"
      }), " Each of N particles must compute likelihood against M measurements (e.g., 360 LIDAR beams). At N=1000, M=360, that's 360,000 likelihood evaluations per update. Reducing N via adaptive resampling is critical for real-time operation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1456-advantages--disadvantages",
      children: "14.5.6 Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MCL (Particle Filter)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-modal beliefs; robust to kidnapping; any sensor model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large N needed for high-dim state; particle deprivation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kalman Filter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimal for linear-Gaussian; O(n²) efficient"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unimodal Gaussian; fails on non-Gaussian noise"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Grid/Markov Localization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Globally convergent; discrete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resolution-limited; exponential in state dim"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Histogram filter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple; bounded memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Coarse discretization error"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1457-edge-cases",
      children: "14.5.7 Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kidnapped robot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Particles stuck on wrong mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inject random particles (5–10%) each iteration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Perceptual aliasing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two places look identical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use multiple sensor types; add odometry memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Particle deprivation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Too few particles near true pose"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adaptive resampling; increase N in high-likelihood regions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sudden sensor failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All weights go to zero"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detection heuristic: if max weight < threshold, reinitialize"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cyclic environment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Symmetry causes ambiguity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Incorporate distinctive features (visual landmarks)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1458-localization-methods-comparison",
      children: "14.5.8 Localization Methods Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Criterion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Monte Carlo (Particle Filter)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Extended Kalman Filter (EKF)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Grid/Histogram"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "State representation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Weighted samples"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Gaussian (mean + covariance)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Discrete grid"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Belief type"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Multi-modal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Uni-modal (Gaussian)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Discrete distribution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Computational cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(N × M)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(n²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(∏ G_i) per grid dim"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Accuracy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "High with enough particles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "High for approx. linear systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Resolution-limited"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Robust to kidnapping"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ (with random injection)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌ (single Gaussian)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ (global search)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sensor model"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Any (arbitrary likelihood)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Gaussian"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Any (discrete lookup)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(n²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(G^d) exponential"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Real-time on embedded"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Moderate (N=500–2000)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ Efficient"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌ High-dim maps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Typical use case"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Indoor mobile robots"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Drone/auto state estimation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Known map, small space"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use which:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MCL:"
        }), " Indoor navigation with ambiguous environments. Need multi-modal belief. Robot may be kidnapped."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "EKF:"
        }), " GPS-denied navigation with smooth motion. State dimension moderate (<50). Sensors have well-characterized noise."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Grid:"
        }), " Small known environments (office, warehouse) where exhaustive search is feasible."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "146-mapping-and-slam",
      children: "14.6 Mapping and SLAM"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " You're exploring a dark, unfamiliar house with a blindfold. Every step forward (odometry) accumulates small errors. Every time you touch a wall (range sensor), you update your mental map. When you recognize a previously visited room by its shape (loop closure), you suddenly correct all accumulated drift. This is SLAM — Simultaneous Localization and Mapping."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Simultaneous Localization and Mapping (SLAM)"
      }), " addresses the chicken-and-egg problem: the robot needs a map to localize and its pose to build a map. The two must be solved jointly."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1461-the-slam-pipeline",
      children: "14.6.1 The SLAM Pipeline"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Initialize:"
        }), " Start with zero map and known initial pose (or unknown)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Motion update:"
        }), " Apply odometry/control to predict new pose (with uncertainty)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data association:"
        }), " Match observed landmarks to map landmarks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Map update:"
        }), " Insert new landmarks or update existing ones."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pose correction:"
        }), " Adjust pose estimate based on landmark re-observations."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Loop closure detection:"
        }), " Detect revisiting a known location and optimize the graph."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Repeat:"
        }), " Every sensor cycle."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1462-algorithm--ekf-slam",
      children: "14.6.2 Algorithm — EKF-SLAM"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Algorithm: EKF-SLAM\nInput:  mu_{t-1} (mean), Sigma_{t-1} (covariance), u_t (control), z_t (obs)\nOutput: mu_t, Sigma_t (updated mean and covariance)\n1.  // Predict step\n2.  mu_t ← g(mu_{t-1}, u_t)           // motion model\n3.  G_t ← JACOBIAN_G(mu_{t-1}, u_t)  // Jacobian of motion\n4.  Sigma_t ← G_t * Sigma_{t-1} * G_t^T + R_t  // motion noise\n5.\n6.  // Update step for each observed landmark z_i in z_t\n7.  for each z_i in z_t:\n8.      j ← DATA_ASSOCIATION(z_i, mu_t, map)\n9.      if j == NEW_LANDMARK:\n10.         INITIALIZE_LANDMARK(mu_t, Sigma_t, z_i)\n11.     else:\n12.         z_pred ← h(mu_t, landmark_j)     // predicted measurement\n13.         H_t ← JACOBIAN_H(mu_t, landmark_j)\n14.         K ← Sigma_t * H_t^T * (H_t * Sigma_t * H_t^T + Q_t)^{-1}\n15.         mu_t ← mu_t + K * (z_i - z_pred)\n16.         Sigma_t ← (I - K * H_t) * Sigma_t\n17. return mu_t, Sigma_t\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1463-dry-run--ekf-slam-with-2-landmarks",
      children: "14.6.3 Dry Run — EKF-SLAM with 2 Landmarks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Robot moves in 1D with two landmarks at positions 3m and 7m. Robot starts at 0m."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Robot pose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Landmark 1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Landmark 2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Covariance diag"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Init"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "[0.01, 0.01, 0.01]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small initial uncertainty"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "t=1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Move +2m → observe L1 at range 1.2m"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "2.0 → 2.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "3.0 → 3.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "[0.05, 0.02, 0.01]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pose and L1 uncertainty coupled"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "t=2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Move +2m → observe L2 at range 1.1m"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "4.0 → 3.9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "3.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "7.0 → 5.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "[0.08, 0.03, 0.03]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L2 initialized"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "t=3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Observe L1 again at range 0.9m"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "3.9 → 3.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "3.3 → 3.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "5.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "[0.04, 0.01, 0.02]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Correction: pose snaps back to match L1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "t=4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Observe L2 again at range 2.1m"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "3.0 → 3.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "3.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "5.0 → 5.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "[0.03, 0.01, 0.01]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both landmarks converge"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key insight:"
      }), " At t=3, re-observing L1 corrects all accumulated pose drift from t=1–2. The covariance shrinks because two independent measurements of the same landmark reduce uncertainty."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1464-python--ekf-slam-1d-1-landmark",
      children: "14.6.4 Python — EKF-SLAM (1D, 1 Landmark)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\n\nclass EKFSLAM1D:\n    def __init__(self):\n        # State: [pose_x, landmark_x]\n        self.mu = np.array([0.0, 0.0])\n        self.Sigma = np.eye(2) * 0.01\n        self.landmark_initialized = False\n\n    def predict(self, control: float, motion_noise: float = 0.1):\n        self.mu[0] += control\n        G = np.array([[1.0, 0.0], [0.0, 1.0]])\n        R = np.eye(2) * motion_noise\n        self.Sigma = G @ self.Sigma @ G.T + R\n\n    def update(self, observation: float, sensor_noise: float = 0.3):\n        if not self.landmark_initialized:\n            # Initialize landmark from first observation\n            # landmark = pose + observed_range\n            self.mu[1] = self.mu[0] + observation\n            self.landmark_initialized = True\n            return\n\n        # Predicted measurement\n        z_pred = self.mu[1] - self.mu[0]\n        # Jacobian of measurement model\n        H = np.array([[-1.0, 1.0]])\n        # Innovation covariance\n        S = H @ self.Sigma @ H.T + sensor_noise\n        # Kalman gain\n        K = self.Sigma @ H.T @ np.linalg.inv(S)\n        # Update\n        innovation = observation - z_pred\n        self.mu = self.mu + (K @ np.array([innovation])).flatten()\n        self.Sigma = (np.eye(2) - K @ H) @ self.Sigma\n\n\nslam = EKFSLAM1D()\ntrue_pose = 0.0\ntrue_landmark = 5.0\nprint(f\"True landmark at {true_landmark}m\")\n\nfor step in range(6):\n    control = 0.5\n    true_pose += control\n    slam.predict(control)\n    observation = true_landmark - true_pose + np.random.normal(0, 0.1)\n    slam.update(observation)\n    print(f\"Step {step}: pose_est={slam.mu[0]:.2f} \"\n          f\"lmk_est={slam.mu[1]:.2f} true_pose={true_pose:.2f} \"\n          f\"obs={observation:.2f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1465-complexity-analysis",
      children: "14.6.5 Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
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
            children: "EKF-SLAM predict"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Covariance multiplication; n = 3 + 2L for L landmarks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EKF-SLAM update"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kalman gain computation inverts n×n innovation matrix"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GraphSLAM build"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N + M)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N + M)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N poses, M constraints; edges stored sparsely"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GraphSLAM solve"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N³) → O(N log N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N + M)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sparse Cholesky factorization exploits graph structure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Loop closure detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(F²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(F)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F features compared pairwise for geometric verification"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why n² kills EKF-SLAM at scale:"
      }), " With L=1000 landmarks, state vector is 2003-dimensional. The covariance matrix has ~4M entries, and the Kalman gain computation inverts a matrix of similar size. GraphSLAM's sparse structure reduces this to O(N log N) for N poses."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1466-ekf-slam-vs-graphslam",
      children: "14.6.6 EKF-SLAM vs GraphSLAM"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Criterion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "EKF-SLAM"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "GraphSLAM"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Formulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Online (recursive filter)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Batch (full trajectory)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "State"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Current pose + all landmarks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All poses + all landmarks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Representation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dense covariance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sparse graph (nodes = poses, edges = constraints)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²) per step"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N log N) for sparse solve"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Loop closure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Corrects current estimate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Re-optimizes full trajectory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²) dense matrix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N + M) sparse"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ Batch (offline loop closure)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Accuracy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Drifts between corrections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Globally consistent after optimization"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1467-advantages--disadvantages",
      children: "14.6.7 Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EKF-SLAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Online, real-time; proven in many systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quadratic in landmarks; linearization errors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GraphSLAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Globally consistent; exploits sparsity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Batch — not real-time; memory grows with trajectory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Visual SLAM (ORB-SLAM)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rich features; relocalization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Computationally intensive; lighting dependent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LIDAR SLAM (Cartographer)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accurate range; works in dark"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LIDAR cost; poor in featureless environments"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1468-edge-cases",
      children: "14.6.8 Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Perceptual aliasing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data association mistakes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RANSAC-based geometric verification; multiple hypothesis tracking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kidnapped robot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SLAM diverges"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reset particle filter; detect odometry inconsistency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic objects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moving people create false landmarks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moving-object removal; filter points by velocity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Large-scale drift"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error accumulates on long paths"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Periodic loop closure; use GPS as weak prior"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unobservable modes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Some states cannot be observed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use information filter; marginalize unobservable dimensions"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "147-motion-planning",
      children: "14.7 Motion Planning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " You need to cross a crowded room to reach the exit. Your brain evaluates multiple paths: go around the sofa (collision check), squeeze between two people (narrow passage), wait for someone to move (dynamic obstacle). You don't plan every step in advance — you explore promising routes and commit once you see a clear path. RRT does exactly this."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1471-motion-planning-pipeline",
      children: "14.7.1 Motion Planning Pipeline"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Define configuration space (C-space):"
        }), " Map the robot's DOF to a mathematical space."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compute obstacles:"
        }), " Determine which configurations collide with obstacles (C_obs)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Free space:"
        }), " C_free = C \\ C_obs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Search:"
        }), " Find a continuous path through C_free from start to goal."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Smooth:"
        }), " Optimize the path for shorter distance or smoother curvature."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Execute:"
        }), " Feed the path to the controller for tracking."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1472-algorithm--rrt-rapidly-exploring-random-tree",
      children: "14.7.2 Algorithm — RRT (Rapidly-Exploring Random Tree)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Algorithm: RRT-PLAN\nInput:  q_start, q_goal (configurations), max_iter (iterations),\n        step_size (extension length), threshold (goal radius)\nOutput: path (list of configurations), or failure\n1.  tree ← {q_start}          // vertex set\n2.  edges ← {}                // edge set\n3.  for i = 1 to max_iter:\n4.      q_rand ← SAMPLE_UNIFORM(C_free)   // random configuration\n5.      q_near ← NEAREST(tree, q_rand)     // nearest vertex by distance\n6.      q_new ← EXTEND(q_near, q_rand, step_size)\n7.      if COLLISION_FREE(q_near, q_new):\n8.          tree ← tree ∪ {q_new}\n9.          edges ← edges ∪ {(q_near, q_new)}\n10.         if DISTANCE(q_new, q_goal) < threshold:\n11.             path ← EXTRACT_PATH(tree, q_start, q_new)\n12.             path ← APPEND(path, q_goal)\n13.             return path\n14. return FAILURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1473-dry-run--rrt-in-a-2d-square-world",
      children: "14.7.3 Dry Run — RRT in a 2D Square World"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " 10×10 world with one rectangular obstacle (3,3)–(7,7). Start at (1,1), goal at (9,9). Step size = 1.0."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Iter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "q_rand"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "q_near"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "q_new"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Collision?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Tree size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "(8, 3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "(1, 1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "(2.2, 1.8)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extends toward top-right"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "(4, 2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "(2.2, 1.8)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "(3.0, 2.3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Growing toward open space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "(2, 9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "(3.0, 2.3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "(3.7, 3.0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "(5, 5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "(3.7, 3.0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "(4.7, 3.8)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "(6, 6)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "(4.7, 3.8)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "(5.5, 4.6)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "(7, 7)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "(5.5, 4.6)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "(6.3, 5.4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "(8, 8)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "(6.3, 5.4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "(7.1, 6.2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Yes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blocked by obstacle — rejected"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "(9, 5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "(6.3, 5.4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "(7.1, 5.8)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grows above obstacle"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "⋮"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "⋮"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "⋮"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "⋮"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "⋮"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "⋮"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⋮"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "(9, 9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "(8.0, 8.5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "(9.0, 9.0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reached goal!"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Observation:"
      }), " RRT rapidly explores the free space through random sampling. The tree naturally avoids the central obstacle because samples inside it are rejected. After ~18 iterations, the tree reaches the goal region."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1474-python--rrt-for-2d-configuration-space",
      children: "14.7.4 Python — RRT for 2D Configuration Space"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import random\nimport math\nfrom dataclasses import dataclass\nfrom typing import List, Optional, Tuple\n\n@dataclass\nclass Node:\n    x: float\n    y: float\n    parent: Optional['Node'] = None\n\n    def distance_to(self, other: 'Node') -> float:\n        return math.hypot(self.x - other.x, self.y - other.y)\n\nclass Obstacle:\n    def __init__(self, x1, y1, x2, y2):\n        self.x1, self.y1 = x1, y1\n        self.x2, self.y2 = x2, y2\n\n    def contains(self, x: float, y: float) -> bool:\n        return self.x1 <= x <= self.x2 and self.y1 <= y <= self.y2\n\nclass RRT:\n    def __init__(self, start: Node, goal: Node,\n                 obstacles: List[Obstacle],\n                 bounds: Tuple[float, float, float, float],\n                 step_size: float = 1.0,\n                 max_iter: int = 1000,\n                 goal_threshold: float = 0.5):\n        self.start = start\n        self.goal = goal\n        self.obstacles = obstacles\n        self.bounds = bounds  # (xmin, xmax, ymin, ymax)\n        self.step_size = step_size\n        self.max_iter = max_iter\n        self.goal_threshold = goal_threshold\n        self.tree: List[Node] = [start]\n\n    def sample(self) -> Node:\n        return Node(\n            random.uniform(self.bounds[0], self.bounds[1]),\n            random.uniform(self.bounds[2], self.bounds[3])\n        )\n\n    def nearest(self, target: Node) -> Node:\n        return min(self.tree, key=lambda n: n.distance_to(target))\n\n    def extend(self, near: Node, toward: Node) -> Node:\n        dist = near.distance_to(toward)\n        if dist < self.step_size:\n            return toward\n        ratio = self.step_size / dist\n        return Node(\n            near.x + ratio * (toward.x - near.x),\n            near.y + ratio * (toward.y - near.y),\n            parent=near\n        )\n\n    def collision_free(self, a: Node, b: Node) -> bool:\n        # Check multiple points along the segment\n        steps = int(a.distance_to(b) / 0.1) + 1\n        for i in range(steps + 1):\n            t = i / steps\n            x = a.x + t * (b.x - a.x)\n            y = a.y + t * (b.y - a.y)\n            for obs in self.obstacles:\n                if obs.contains(x, y):\n                    return False\n        return True\n\n    def plan(self) -> Optional[List[Node]]:\n        for _ in range(self.max_iter):\n            q_rand = self.sample()\n            q_near = self.nearest(q_rand)\n            q_new = self.extend(q_near, q_rand)\n            if self.collision_free(q_near, q_new):\n                self.tree.append(q_new)\n                if q_new.distance_to(self.goal) < self.goal_threshold:\n                    # Reconstruct path\n                    path = []\n                    node = q_new\n                    while node:\n                        path.append(node)\n                        node = node.parent\n                    path.reverse()\n                    path.append(self.goal)\n                    return path\n        return None\n\n    def bias_toward_goal(self, bias_prob: float = 0.1):\n        \"\"\"Override sample with goal-biased sampling.\"\"\"\n        if random.random() < bias_prob:\n            return self.goal\n        return self.sample()\n\n\n# Example usage\nif __name__ == \"__main__\":\n    start = Node(1, 1)\n    goal = Node(9, 9)\n    obs = [Obstacle(3, 3, 7, 7)]\n    rrt = RRT(start, goal, obs, bounds=(0, 10, 0, 10),\n              step_size=1.0, max_iter=500)\n    path = rrt.plan()\n    if path:\n        print(f\"Path found with {len(path)} waypoints:\")\n        for i, node in enumerate(path):\n            print(f\"  {i}: ({node.x:.2f}, {node.y:.2f})\")\n    else:\n        print(\"No path found\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1475-rrt--optimal-extension-with-rewiring",
      children: "14.7.5 RRT* — Optimal Extension with Rewiring"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["RRT* adds a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "rewiring"
      }), " step that reconnects the tree when a better path to a node is found, providing ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "asymptotic optimality"
      }), " — the path converges to the optimal (shortest) as samples → ∞."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Algorithm: RRT*-EXTEND (additional steps)\n1.  q_new ← EXTEND(q_near, q_rand, step_size)\n2.  if COLLISION_FREE(q_near, q_new):\n3.      q_min ← q_near\n4.      // Find all nearby nodes within radius r\n5.      near_nodes ← NEAR(tree, q_new, r)\n6.      for q_n in near_nodes:\n7.          if COLLISION_FREE(q_n, q_new):\n8.              // Choose cheapest connection\n9.              if COST(q_n) + DIST(q_n, q_new) < COST(q_min) + DIST(q_min, q_new):\n10.                 q_min ← q_n\n11.     // Insert q_new with cheapest parent\n12.     tree ← tree ∪ {q_new}\n13.     edges ← edges ∪ {(q_min, q_new)}\n14.     // Rewire: check if q_new provides cheaper path to any near node\n15.     for q_n in near_nodes:\n16.         if COLLISION_FREE(q_new, q_n):\n17.             if COST(q_new) + DIST(q_new, q_n) < COST(q_n):\n18.                 REWIRE(q_n, q_new)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " RRT* rewiring radius r ≈ γ (log n/n)^{1/d} for d-dimensional space. This ensures O(n log n) amortized cost versus RRT's O(n) per iteration."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1476-complexity-analysis",
      children: "14.7.6 Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
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
            children: "RRT (per iteration)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nearest-neighbor search in N-node tree (naive)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RRT with KD-tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KD-tree reduces nearest-neighbor to O(log N)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RRT* (per iteration)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N log N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rewiring queries near neighbors within radius r"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Path smoothing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(K)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K path nodes; shortcut short-cutting iterations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Collision checking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(M × L)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "M obstacles, L interpolation points along segment"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why nearest-neighbor matters:"
      }), " With N=10,000 nodes, naive O(N) search means 10,000 distance computations per iteration. A KD-tree drops this to O(log N) ≈ 14 comparisons. For real-time planning at 10+ Hz, KD-tree or R-tree acceleration is mandatory."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1477-advantages--disadvantages",
      children: "14.7.7 Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RRT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast exploration; probabilistic completeness; simple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not optimal; jagged paths; non-deterministic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RRT*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Asymptotically optimal; smoother paths"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower per iteration; rewiring overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "A* (discrete)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimal on grid; deterministic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires discretization; exponential in dim"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PRM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-query (reuse roadmap)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two-phase (build + query); less suitable for dynamic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CHOMP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smooth trajectory optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires good initial guess; local minima"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1478-edge-cases",
      children: "14.7.8 Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Narrow passages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tree rarely samples inside"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bridge-test sampling; Gaussian sampling near obstacles"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Goal in obstacle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No path exists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-check goal is in C_free; inflate obstacles"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "High-dimensional space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Curse of dimensionality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task-space planning; dimensionality reduction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic obstacles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Path invalidated mid-execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replan with RRT*; D* Lite for incremental replanning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cluttered environment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exploration dominated by narrow gaps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adaptive step size; potential-field biasing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "148-control",
      children: "14.8 Control"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " Cruise control in your car. You set a target speed (setpoint). The system measures current speed (feedback), computes the difference (error), and adjusts the throttle (control output). Going uphill? Error increases → more throttle. Going downhill? Error decreases → less throttle or brake. This ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "feedback loop"
      }), " runs continuously, rejecting disturbances without knowing they exist."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1481-the-control-pipeline",
      children: "14.8.1 The Control Pipeline"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Measure:"
        }), " Read sensor feedback (encoder, IMU, camera)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compare:"
        }), " Compute error = desired − actual."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compute control:"
        }), " Apply control law (PID, MPC)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Output:"
        }), " Send command to actuator (PWM, torque, voltage)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Wait:"
        }), " Timestep (typically 1–100 ms)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Repeat:"
        }), " Feedback loop continues indefinitely."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1482-pid-control",
      children: "14.8.2 PID Control"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PID (Proportional-Integral-Derivative) control is the most widely used feedback control law:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$u(t) = K_p e(t) + K_i \\int_0^t e(\\tau) d\\tau + K_d \\frac{de(t)}{dt}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "where $e(t)$ is the error."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Term"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Role"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Proportional"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Responds to current error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High K_p = fast response but overshoot"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Integral"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accumulates past error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eliminates steady-state error; causes windup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Derivative"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predicts future error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dampens oscillations; amplifies sensor noise"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1483-algorithm--pid-with-anti-windup",
      children: "14.8.3 Algorithm — PID with Anti-Windup"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Algorithm: PID-CONTROL\nInput:  setpoint, measurement, Kp, Ki, Kd, dt, integral_limit\nOutput: control_signal\n1.  error ← setpoint - measurement\n2.  proportional ← Kp * error\n3.  integral ← integral + Ki * error * dt\n4.  integral ← CLAMP(integral, -integral_limit, integral_limit)  // anti-windup\n5.  derivative ← Kd * (error - prev_error) / dt\n6.  output ← proportional + integral + derivative\n7.  output ← CLAMP(output, -output_limit, output_limit)\n8.  prev_error ← error\n9.  return output\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1484-dry-run--pid-for-ball-balancing-on-a-beam",
      children: "14.8.4 Dry Run — PID for Ball Balancing on a Beam"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Balance a ball at position 0. Beam angle is controlled by a servo. Kp=2.0, Ki=0.5, Kd=0.1."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "t (s)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Setpoint"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Ball pos"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Error"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "P"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "I"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Output"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Beam angle (°)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "−0.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "−1.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "−1.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0 → tilt left 10°"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "−0.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "−0.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "−0.25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "2.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1.15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "+11.5° tilt right"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "−0.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "−0.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "−0.30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "2.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1.50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "+15° (overshoot correction)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "−0.05"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "+0.05"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "+0.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "−0.28"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "−1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "−1.68"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "−16.8° braking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "−0.02"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "+0.02"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "+0.04"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "−0.27"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "−0.7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "−0.93"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "−9.3° settling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "−0.27"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "−0.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "−0.47"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "−4.7°"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0.01"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "−0.01"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "−0.02"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "−0.28"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "−0.20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "−2.0° near steady state"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Observation:"
      }), " The ball converges to setpoint within ~0.5s. Without derivative, the ball would oscillate several times. Without integral, a small steady-state error would persist due to gravity bias."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1485-python--pid-controller",
      children: "14.8.5 Python — PID Controller"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import time\n\nclass PID:\n    def __init__(self, Kp: float, Ki: float, Kd: float,\n                 integral_limit: float = 10.0, output_limit: float = 100.0):\n        self.Kp, self.Ki, self.Kd = Kp, Ki, Kd\n        self.integral_limit = integral_limit\n        self.output_limit = output_limit\n        self.integral = 0.0\n        self.prev_error = 0.0\n\n    def compute(self, setpoint: float, measurement: float, dt: float) -> float:\n        error = setpoint - measurement\n        P = self.Kp * error\n        self.integral += error * dt\n        self.integral = max(-self.integral_limit,\n                            min(self.integral_limit, self.integral))\n        I = self.Ki * self.integral\n        D = self.Kd * (error - self.prev_error) / dt if dt > 0 else 0.0\n        output = P + I + D\n        output = max(-self.output_limit, min(self.output_limit, output))\n        self.prev_error = error\n        return output\n\n    def reset(self):\n        self.integral = 0.0\n        self.prev_error = 0.0\n\n# Simulate ball-beam system\nclass BallBeamSystem:\n    def __init__(self):\n        self.position = 0.5  # starting at 0.5m\n        self.velocity = 0.0\n\n    def step(self, angle_deg: float, dt: float):\n        # Acceleration proportional to angle (gravity component)\n        accel = -9.81 * math.sin(math.radians(angle_deg)) * 0.1\n        self.velocity += accel * dt\n        self.velocity *= 0.99  # friction\n        self.position += self.velocity * dt\n        return self.position\n\n\nimport math\npid = PID(Kp=2.0, Ki=0.5, Kd=0.1)\nsystem = BallBeamSystem()\ndt = 0.02\nprint(\"Time(s)  Pos(m)  Error   P       I       D       Output  Angle(°)\")\nfor i in range(50):\n    t = i * dt\n    pos = system.position\n    ctrl = pid.compute(0.0, pos, dt)  # setpoint = 0\n    angle = ctrl * 10  # map output to beam angle\n    angle = max(-30, min(30, angle))\n    system.step(angle, dt)\n    if i % 5 == 0:\n        print(f\"{t:.2f}   {pos:.3f}  {0-pos:.3f}  {pid.Kp*(0-pos):.3f}  \"\n              f\"{pid.Ki*pid.integral:.3f}  {pid.Kd*(pid.prev_error-(0-pos))/dt:.3f}  \"\n              f\"{ctrl:.3f}  {angle:.1f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1486-model-predictive-control-mpc",
      children: "14.8.6 Model Predictive Control (MPC)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MPC solves a finite-horizon optimal control problem at each time step:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$u_{t:t+H}^* = \\arg\\min_u \\sum_{k=t}^{t+H} \\left( |x_k - x_k^{\\text{ref}}|_Q + |u_k|_R \\right)$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\text{subject to } x_{k+1} = f(x_k, u_k), \\quad x_k \\in \\mathcal{X}, \\quad u_k \\in \\mathcal{U}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Only the first control $u_t^*$ is applied; then the horizon recedes."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key advantage over PID:"
      }), " MPC handles ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "constraints"
      }), " natively (joint limits, maximum torque, obstacle avoidance). ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Disadvantage:"
      }), " requires solving an optimization problem at each step — orders of magnitude more computation than PID."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1487-complexity-analysis",
      children: "14.8.7 Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Controller"
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
            children: "PID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Three terms, two state variables (integral, prev_error)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LQR (linear)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n³) once"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Algebraic Riccati equation solved offline"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LQR (time-varying)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²) per step"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backward Riccati propagation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MPC (linear, QP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(H³ n³)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(H² n²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "H-step horizon, n-D state — quadratic program"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MPC (nonlinear)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(H N_iter n³)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(H² n²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Iterative SQP solves per step"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why PID dominates industry:"
      }), " At a 1 kHz control rate (1 ms budget), a PID controller consumes ~1 μs. An MPC may consume 10–100 ms, limiting loop rate to 10–100 Hz. For fast systems (drones, motor drives), PID's simplicity is a feature."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1488-advantages--disadvantages",
      children: "14.8.8 Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Controller"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple, fast, well-understood, no model needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No constraint handling; single-input-single-output"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LQR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimal for linear systems; full state feedback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires linear model and all states measurable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MPC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handles constraints; preview capability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Computationally expensive; requires good model"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Feedforward"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Instant response to known disturbances"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot compensate for unknown errors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Adaptive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tunes itself online"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex stability analysis; slow convergence"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1489-edge-cases",
      children: "14.8.9 Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Integral windup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large sustained error → integral saturates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clamp integral; conditional integration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Derivative kick"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Step change in setpoint causes spike"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Setpoint filtering; derivative on measurement only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Actuator saturation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Control signal exceeds hardware limits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anti-windup integrator clamping"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sensor noise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Derivative amplifies high-frequency noise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-pass filter on D term; use measurement derivative"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delay"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Actuator response lag causes instability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smith predictor; delay-compensated control"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Non-minimum phase"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inverse response (wrong initial direction)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reconfigure control structure; zero cancellation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "149-robot-operating-system-ros",
      children: "14.9 Robot Operating System (ROS)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "ROS"
      }), " (Robot Operating System) is the de-facto standard middleware for robot software development. It provides:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Analogy"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Nodes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Executable processes for specific functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Like microservices — one node for camera, one for planner"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Topics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Named buses for asynchronous pub/sub message passing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Like a message queue — publisher sends, any subscriber receives"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Services"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Synchronous request-response (call + wait + reply)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Like an RPC call — \"get_map\" returns the map"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Actions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Goal-oriented async tasks with feedback and cancellation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Like a background job — \"go_to_pose\" reports progress"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "tf (transform)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Coordinate frame tree with time-stamped transforms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Like a global coordinate registry — \"where is the camera relative to base?\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Launch files"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XML/JSON/YAML files that start multiple nodes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Like docker-compose for robot processes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bags"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recorded ROS message logs for debugging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Like a flight data recorder — replay sensor data offline"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1491-ros-communication-patterns",
      children: "14.9.1 ROS Communication Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Publisher (sensor node)\nnode camera_node:\n    pub = create_publisher(\"camera/image\", Image, queue_size=10)\n    loop rate 30 Hz:\n        img = Camera.read()\n        pub.publish(img)\n\n// Subscriber (processing node)\nnode object_detector:\n    sub = create_subscription(\"camera/image\", Image, callback)\n    def callback(img):\n        detections = YOLO.detect(img)\n        pub.publish(detections)\n\n// Service (request-response)\nnode map_server:\n    srv = create_service(\"get_map\", GetMap, handle_get_map)\n    def handle_get_map(request):\n        return map_data\n\n// Action (goal with feedback)\nnode navigation:\n    action = create_action_server(\"navigate\", NavigateAction)\n    def execute(goal):\n        while not at_goal:\n            plan = rrt.plan(current_pose, goal.pose)\n            controller.follow(plan)\n            action.publish_feedback(distance_remaining)\n        action.succeed()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1492-ros-2-vs-ros-1",
      children: "14.9.2 ROS 2 vs ROS 1"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ROS 1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ROS 2"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transport"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom TCPROS/UDPROS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DDS (RTPS)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Discovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Centralized (roscore)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed (DDS discovery)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ Not supported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Supported via DDS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ SROS2 (DDS security)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-robot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Difficult"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native via DDS partitions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Python version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Python 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Python 3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lifecycle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Managed nodes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Target"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Research"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Production"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stage (2D, lightweight)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gazebo (3D, full physics)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "ROS simulation tools:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gazebo:"
        }), " Full 3D robot simulator with physics (ODE/Bullet), sensor models (LIDAR, camera, IMU), and ROS 2 integration via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "gazebo_ros_pkgs"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RViz:"
        }), " Visualization tool for sensor data (point clouds, camera images, robot models)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Webots:"
        }), " Alternative simulator with built-in robot models and easier setup."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "ROS 2 command-line basics:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "ros2 run pkg_name node_name       # Run a node\nros2 topic list                   # List all topics\nros2 topic echo /topic_name       # Print topic messages\nros2 service list                 # List all services\nros2 action list                  # List all actions\nros2 bag record -a                # Record all topics to bag\nros2 node info /node_name         # Get node info\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1410-interview-corner",
      children: "14.10 Interview Corner"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Robotics interview questions typically span three pillars: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SLAM"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "sensor fusion"
      }), ", and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "control theory"
      }), ". Below are high-frequency questions with structured answers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-explain-the-slam-problem-why-cant-you-solve-localization-and-mapping-separately",
      children: "Q1: Explain the SLAM problem. Why can't you solve localization and mapping separately?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " SLAM is the joint estimation problem of a robot's trajectory and the map of its environment given noisy sensor data. The two are coupled — to build a map you need to know where you are (localization), and to know where you are you need a map. This creates a chicken-and-egg dependency."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Solving them separately fails because:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "If you guess the map first:"
        }), " Errors in the assumed map cause systematic localization bias."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "If you localize first:"
        }), " Odometry drift grows unboundedly without map corrections."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Only the joint posterior"
        }), " $P(x_{1:t}, m \\mid z_{1:t}, u_{1:t})$ correctly captures the mutual uncertainty."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Approaches: EKF-SLAM (online, O(n²) in landmarks) and GraphSLAM (batch, exploits sparsity). Modern visual SLAM (ORB-SLAM3) operates in real-time with loop closure correcting long-term drift."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-how-does-a-kalman-filter-fuse-multiple-sensors-walk-through-the-math",
      children: "Q2: How does a Kalman filter fuse multiple sensors? Walk through the math."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The Kalman filter fuses sensors through the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "measurement update"
      }), " step, which combines prediction (from motion model) with observation (from sensors) via the Kalman gain $K$:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$K = P_t^- H^T (H P_t^- H^T + R)^{-1}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$x_t = x_t^- + K (z_t - H x_t^-)$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$P_t = (I - K H) P_t^-$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For sensor fusion with heterogeneous sensors:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each sensor contributes a measurement equation: $z_i = H_i x + v_i$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sensors with low noise $R_i$ → high Kalman gain → more weight"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sensors with high noise $R_i$ → low Kalman gain → less weight"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sensors can run at different rates — process each as it arrives"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Example: GPS (R ≈ 25 m², 5 Hz) + IMU (R ≈ 0.01 m²/s², 200 Hz). At 200 Hz, IMU predicts forward. When GPS arrives every 0.2s, the filter corrects accumulated IMU drift. The effective noise of the fused estimate is lower than either sensor alone — this is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "sensor fusion advantage"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-compare-pid-and-mpc-when-would-you-use-each",
      children: "Q3: Compare PID and MPC. When would you use each?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Criterion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "PID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "MPC"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Model required"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (model-free)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (dynamic model)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Constraints"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot handle natively"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handles input/state/output constraints"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Multi-variable"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SISO (single-input, single-output)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MIMO (multi-input, multi-output)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Horizon"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Instantaneous"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predictive (looks ahead H steps)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Computation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1), ~1 μs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(H³ n³), ~1–100 ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Tuning parameters"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 (Kp, Ki, Kd)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Many (Q, R, horizon, constraints)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Use PID when:"
      }), " The system is SISO, linear-ish, and you need very high loop rates (1–10 kHz). Example: motor speed control, quadcopter rate control."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Use MPC when:"
      }), " The system has constraints (joint limits, torque bounds), multiple coupled inputs, or you need preview capability. Example: autonomous driving (steering + throttle + brake coordinated with lookahead)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Real systems often ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "cascade"
      }), " them: MPC plans a trajectory at 10–50 Hz, and a low-level PID tracks it at 1 kHz."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-what-is-the-kidnapped-robot-problem-and-how-does-mcl-handle-it",
      children: "Q4: What is the kidnapped robot problem and how does MCL handle it?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The kidnapped robot problem occurs when a robot is suddenly teleported to a new location without being told. The true pose diverges discontinuously from the filter's belief. MCL handles this by:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Random injection:"
        }), " Each resampling step replaces a small fraction (1–10%) of particles with uniform random poses across the state space."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multi-modal belief:"
        }), " Unlike the Kalman filter's single Gaussian, MCL maintains multiple hypotheses. If the robot was in one mode and gets teleported, particles in the new mode gain weight."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recovery:"
        }), " When enough random particles land near the true pose and accumulate high weight, the cloud converges to the correct mode."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Without random injection, particles trapped in the wrong mode never recover — MCL becomes effectively uni-modal and behaves like a failed Kalman filter."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-explain-data-association-in-slam-and-why-its-hard",
      children: "Q5: Explain data association in SLAM and why it's hard."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Data association is the problem of determining which observed landmark corresponds to which map landmark. It's the perceptual aliasing problem — two different places can look identical through the sensor."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why it's hard:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ambiguity:"
        }), " In a hallway, every door looks identical from 5m away."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Noise:"
        }), " Sensor noise makes the same landmark look different at different times."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dynamic objects:"
        }), " A person standing where a landmark was last seen."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Spurious measurements:"
        }), " LIDAR reflections, camera artifacts."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nearest-neighbor gating:"
        }), " Match if Mahalanobis distance < χ² threshold."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "JCBB (Joint Compatibility Branch and Bound):"
        }), " Checks joint compatibility of all matches."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RANSAC:"
        }), " Random sampling to find geometrically consistent matches."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Appearance-based:"
        }), " Use visual features (SIFT, SuperPoint) that are more distinctive than geometry alone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Interview tip:"
      }), " The most common SLAM failure mode is incorrect data association leading to catastrophic divergence. Robust data association is the hardest practical problem in SLAM."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-what-is-the-difference-between-odometry-and-localization",
      children: "Q6: What is the difference between odometry and localization?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Odometry"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Localization"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Definition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Estimating pose change from motion sensors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Estimating absolute pose in a known frame"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Drift"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unbounded (error accumulates)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bounded (corrected by map observations)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Map required"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sensors"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wheel encoders, IMU, visual flow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LIDAR, camera, GPS (absolute ref)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Example"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"I moved 1.2m forward\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"I am at (5.3, 2.1) on the office map\""
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Integration: Odometry feeds the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "motion model"
      }), " of a localization filter (MCL, EKF). The filter corrects odometry drift using absolute sensor readings against the map."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1411-applications-in-real-systems",
      children: "14.11 Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14111-roomba-irobot--consumer-cleaning-robot",
      children: "14.11.1 Roomba (iRobot) — Consumer Cleaning Robot"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Implementation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sensors"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IR cliff sensors (drop detection), bump switches, optical encoders, dirt detection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Localization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-cost: dead-reckoning + IR wall tracking (no full SLAM)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Planning"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random bounce + spiral + wall-follow (no explicit path planning)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Control"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple threshold-based: if bumper → reverse and turn"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Why it works"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In small homes, random coverage is sufficient and much cheaper than SLAM"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "AI lesson:"
      }), " Roomba proves that clever dumb algorithms often beat complex intelligent ones in practice. A full SLAM-enabled vacuum would cost 10× more but clean only marginally better."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14112-boston-dynamics--atlas-and-spot",
      children: "14.11.2 Boston Dynamics — Atlas and Spot"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Capability"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Technique"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Balance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model Predictive Control at 50 Hz with full-body dynamics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Locomotion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hybrid zero dynamics (HZD) for gait generation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Perception"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stereo cameras + LIDAR for terrain mapping"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Planning"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Convex optimization over footstep placements"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "State estimation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMU + leg kinematics + visual inertial odometry (VIO)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why no SLAM?"
      }), " Spot's localization uses VIO (visual-inertial odometry) for short-term and GPS for long-term. Full SLAM is unnecessary because Spot operates in semi-structured environments where visual features are abundant."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14113-self-driving-cars-waymo-cruise",
      children: "14.11.3 Self-Driving Cars (Waymo, Cruise)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Module"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Technology"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Localization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPS + IMU + wheel odometry fused via EKF at 100 Hz; LIDAR map matching at 10 Hz"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Map"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-built HD maps (5–10 cm accuracy) with lane markings, poles, curbs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SLAM"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not real-time — HD maps are built offline by survey vehicles. Live SLAM only for construction zones"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Planning"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hybrid A* (search) + optimization (smoothing) + MPC (trajectory tracking)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Control"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cascaded PID (steering servo) + MPC (speed/longitudinal)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "AI lesson:"
      }), " Self-driving cars separate mapping (offline, precise) from localization (online, efficient). Full online SLAM is too risky for safety-critical applications."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14114-industrial-robot-arms-kuka-fanuc-abb",
      children: "14.11.4 Industrial Robot Arms (KUKA, Fanuc, ABB)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Implementation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Control"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cascaded: position loop → velocity loop → current loop, each PID, at 1–8 kHz"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Planning"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cartesian space via inverse kinematics + smoothing splines"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sensors"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Joint encoders (17–24 bit) + torque sensors in collaborative versions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "AI component"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pick-and-place uses computer vision for object detection and grasp pose estimation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Safety"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Force limiting (cobot) via current monitoring + torque sensors"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why not RRT?"
      }), " Industrial arms operate in structured, repetitive environments with known obstacle layouts. Pre-programmed paths are faster and more reliable than online planning."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14115-comparing-real-systems",
      children: "14.11.5 Comparing Real Systems"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "System"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Localization"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Planning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Control"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "AI Level"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Roomba"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (random bounce)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Threshold"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Minimal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Spot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VIO + GPS + leg odometry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MPC footsteps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MPC whole-body"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Waymo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EKF (GPS+IMU+map)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hybrid A* + optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MPC + PID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Very high"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KUKA arm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Joint encoders only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-programmed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cascaded PID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Low (in arm)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tesla Optimus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-camera vision + neural net"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Learned neural net"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Learned + PID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Very high"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Task"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Sensor"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Online?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Localization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MCL (Particle Filter)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "x, y, θ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Range finder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Localization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extended Kalman Filter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "x, y, θ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Various"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SLAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EKF-SLAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Pose + landmarks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Camera/LIDAR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SLAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GraphSLAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Full trajectory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Camera/LIDAR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌ (batch)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Planning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RRT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Configuration space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Planning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RRT*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Configuration space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ (asymp. opt.)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Error state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Feedback sensor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MPC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Full state + horizon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Model prediction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fusion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complementary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Orientation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "IMU + absolute ref"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fusion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kalman filter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Linear state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Multiple sensors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference--pid-control",
      children: "Quick Reference — PID Control"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Term"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Effect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Formula"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "P"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proportional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Corrects current error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K_p e(t)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "I"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integral"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eliminates steady-state error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K_i ∫e(t)dt"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Derivative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dampens oscillations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K_d de/dt"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pid-tuning-heuristics",
      children: "PID Tuning Heuristics"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Approach"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pros"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cons"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ziegler-Nichols"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Increase K_p until oscillation, then set K_i, K_d"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Systematic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Oscillatory during tuning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Trial-and-error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adjust one term at a time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intuitive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time-consuming"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-tuning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relay feedback or step response"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires system perturbation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cohen-Coon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process reaction curve"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good for self-regulating"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires step test"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-pid-gains-by-application",
      children: "Common PID Gains by Application"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "K_p"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "K_i"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "K_d"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DC motor speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0.5–2.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0.1–0.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0.01–0.1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quadcopter angle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "4.0–8.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0.0–0.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0.1–0.5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Line-follower"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1.0–3.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0.0–0.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0.1–0.3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Temperature"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "5.0–20.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0.5–5.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0.0 (noise sensitive)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Joint position"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "10.0–50.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0.0–1.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1.0–10.0"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "ML"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "CV"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "NLP"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Robotics"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Research"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MCL (Particle Filter)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "↔"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "↔"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kalman Filter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "↔"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SLAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "↔"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "↔"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RRT Planning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "↔"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "↔"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "↔"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PID Control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "↔"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "↔"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "↔"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ROS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "↔"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "↔"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "↔"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sensor Fusion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "↔"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Model Predictive Control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "↔"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "↔"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1:"
      }), " What problem does SLAM solve that localization alone does not?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) SLAM determines the robot's absolute position; localization determines relative position"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) SLAM simultaneously builds a map and localizes within it, handling the mutual dependency"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) SLAM is faster than localization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) SLAM requires GPS; localization does not"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) SLAM addresses the chicken-and-egg problem: to build a map you need to know where you are, and to know where you are you need a map. SLAM solves both simultaneously."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2:"
      }), " RRT* improves on RRT by providing what guarantee?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Faster convergence"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Asymptotic optimality — the solution converges to the optimal path as samples → ∞"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Deterministic paths"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Guaranteed collision avoidance"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) RRT* reconnects the tree when better paths are found, providing asymptotic optimality. RRT only guarantees probabilistic completeness, not optimality."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3:"
      }), " The PID term that eliminates steady-state error is:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Proportional"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Integral"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Derivative"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Feedforward"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) The integral term accumulates past error over time, driving the system toward the setpoint even when the proportional term alone leaves residual error."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4:"
      }), " In the complementary filter for IMU + GPS fusion, what does the alpha parameter (typically ~0.98) control?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) The frequency cutoff between gyro and GPS/accel corrections"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) The overall gain of the filter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) The GPS update rate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) The accelerometer bias"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>A) Alpha = 0.98 means 98% weight on gyro integration (high-frequency motion) and 2% on absolute reference (low-frequency correction). This filters out gyro drift while preserving fast dynamics."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5:"
      }), " Why does EKF-SLAM scale poorly to large environments?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) The robot runs out of battery"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) The covariance matrix grows as O(n²) for n landmarks, making updates quadratic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) LIDAR has limited range"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) GPS is unavailable indoors"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) EKF-SLAM maintains a dense covariance matrix over the robot pose and all landmark positions. With L=10,000 landmarks, the state is ~20,003-dimensional and the covariance matrix has ~400M entries. Update complexity O(n²) becomes prohibitive."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q6:"
      }), " Which robot type uses MPC for whole-body control including balance?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Roomba"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) KUKA industrial arm"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Boston Dynamics Atlas"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Parrot AR Drone"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>C) Atlas uses model predictive control (MPC) that solves a full-body dynamics optimization at 50 Hz to maintain balance during dynamic locomotion. This is far beyond the simple threshold or PID controllers used in other platforms."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q7:"
      }), " Place the following steps in the correct sense-plan-act order:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Send PWM to motors → read LIDAR scan → compute path → filter noise"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Read LIDAR scan → filter noise → compute path → send PWM to motors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Compute path → filter noise → read LIDAR scan → send PWM"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Send PWM → compute path → filter noise → read LIDAR"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) The correct order is: sense (read LIDAR), process (filter noise), plan (compute path), act (send PWM). This is the fundamental sense-plan-act cycle."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q8:"
      }), " What is the primary limitation of the complementary filter compared to the Kalman filter?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) It requires more computation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) It cannot optimally weight sensors by their noise covariance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) It only works with GPS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) It is unstable for most systems"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) The complementary filter uses a fixed alpha parameter instead of optimally computing the Kalman gain from sensor noise covariances. This means noisier sensors are not downweighted appropriately. However, its O(1) computation makes it ideal for low-power embedded systems."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robotics integrates sensing, state estimation, planning, and control to create physically embodied autonomous systems. This chapter covered:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Architecture:"
        }), " The sense-plan-act loop forms the core of every robotic system."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sensors:"
        }), " Cameras, LIDAR, IMU, GPS, and encoders provide noisy measurements that must be fused."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Actuators:"
        }), " DC motors, servos, steppers, hydraulics, and pneumatics convert electrical signals to physical motion."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Localization:"
        }), " MCL (particle filter) handles multi-modal beliefs; Kalman filters provide optimal linear estimation; complementary filters trade optimality for simplicity."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SLAM:"
        }), " EKF-SLAM and GraphSLAM solve the joint mapping-localization problem, with trade-offs between online operation and global consistency."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Motion planning:"
        }), " RRT and RRT* explore configuration space through random sampling; RRT* provides asymptotic optimality through rewiring."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Control:"
        }), " PID dominates for simple, fast systems; MPC enables constraint-aware optimal control for complex systems."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ROS:"
        }), " The Robot Operating System provides the middleware layer — nodes, topics, services, actions, and tf."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real systems:"
        }), " Roomba (random coverage), Boston Dynamics (MPC whole-body control), self-driving cars (HD maps + EKF), and industrial arms (cascaded PID) demonstrate the spectrum of robotics AI."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Probabilistic reasoning is the thread connecting all these components — from the particle filter's weighted samples to the Kalman filter's covariance propagation to SLAM's joint posterior over pose and map. The robot's fundamental challenge is acting reliably despite uncertainty, and these algorithms provide the mathematical tools to do so."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the sensor-fusion trade-off between IMU and GPS for localization. Why is a complementary filter appropriate?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why is SLAM fundamentally harder than localization with a known map? Focus on the dependency between the two sub-problems."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare RRT and RRT* in terms of path quality, computational cost, and guarantees."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Walk through the Kalman filter equations for a 1D robot with noisy velocity control and range observations. What happens if the sensor fails?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain how integral windup occurs in PID control and describe three mitigation strategies."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement Monte Carlo localization for a robot in a 2D grid world with range sensors. Evaluate localization accuracy with 100, 500, and 1000 particles. Plot convergence time vs. particle count."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement PID control for simulated line-following. Tune gains for minimum settling time without overshoot using Ziegler-Nichols rules."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a ROS 2 node that subscribes to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/scan"
        }), " (LIDAR) and publishes velocity commands to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/cmd_vel"
        }), " for obstacle avoidance. Use a simple potential field approach."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement RRT for a 6-DOF robotic arm in simulation. Compare planning time and path length with RRT*."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problems",
      children: "Challenge Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "10",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a 2D SLAM system using GraphSLAM. Generate a simulated environment with 20 landmarks. Evaluate map accuracy against ground truth as trajectory length increases from 10m to 100m."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design and simulate a controller for a quadcopter hovering at 1m altitude. Start with cascaded PID (outer position → middle velocity → inner attitude), then replace the inner loop with MPC. Compare disturbance rejection."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement sensor fusion for a mobile robot using an EKF that combines wheel odometry (100 Hz), IMU (200 Hz), and LIDAR scan matching (10 Hz). Measure drift reduction compared to odometry-only."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {})]
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