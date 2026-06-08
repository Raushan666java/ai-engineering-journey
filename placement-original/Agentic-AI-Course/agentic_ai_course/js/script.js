const courseContent = [
    {
        id: "intro",
        title: "Module 0: The Foundation",
        content: `
            <h2>Phase 0: Prerequisites & Foundation</h2>
            <p>Before diving into complex agentic architectures, you must master the fundamental building blocks. This phase ensures you have the technical stack and conceptual clarity required for high-level AI engineering.</p>
            
            <div class="resource-box">
                <h4>🐍 Python for AI (1-2 Weeks)</h4>
                <p>Focus on: Async/Await, Classes, Type Hinting, and API interactions (REST/JSON).</p>
                <ul>
                    <li><a href="https://docs.python.org/3/tutorial/" target="_blank">Python Official Docs</a></li>
                    <li><a href="https://www.youtube.com/playlist?list=PLWKjhJtqVAbnqBxcdjVGgT3uVR10bz6Z6" target="_blank">freeCodeCamp Python Mastery</a></li>
                </ul>
            </div>

            <div class="resource-box">
                <h4>🧠 LLM Fundamentals</h4>
                <p>Understand the core mechanics: Tokens, Context Windows, Temperature, Top-P, and the difference between Tool Use and Autonomy.</p>
                <ul>
                    <li><a href="https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/" target="_blank">DeepLearning.AI - Prompt Engineering</a></li>
                    <li><a href="https://platform.openai.com/docs/guides/reasoning" target="_blank">OpenAI Reasoning Guides</a></li>
                </ul>
            </div>
        `
    },
    {
        id: "reasoning",
        title: "Module 1: LangChain Core",
        content: `
            <h2>Phase 1: Mastering LangChain</strong></h2>
            <p>LangChain is the industry-standard skeleton for LLM applications. In this module, we move beyond simple prompts into structured chains.</p>
            
            <h3>Core Concepts to Master:</h3>
            <div class="progression-stepper">
                <div class="step"><strong>LCEL (LangChain Expression Language)</strong> - The declarative way to compose chains.</div>
                <div class="step"><strong>PromptTemplates</strong> - Managing dynamic inputs.</div>
                <div class="step"><strong>Output Parsers</strong> - Converting raw text into structured JSON logic.</div>
                <div class="step"><strong>Memory Systems</strong> - Window-based vs. Summary-based memory.</div>
            </div>

            <div class="code-sim">
                <pre>// Basic LCEL Chain Example
const chain = prompt.pipe(model).pipe(new JsonOutputParser());</pre>
            </div>
            
            <p><strong>Practice Project:</strong> Build a PDF Q&A Bot using Retrieval-Augmented Generation (RAG).</p>
        `
    },
    {
        id: "tools",
        title: "Module 2: Advanced AI Agents",
        content: `
            <h2>Phase 2: Real Intelligence & Agency</h2>
            <p>This is where the AI begins to <em>act</em>. We implement patterns that allow the model to plan its own execution path.</p>
            
            <h3>The ReAct Pattern</h3>
            <p>Master the <strong>"Thought-Action-Observation"</strong> loop. Learn how to give models "Agency" by exposing them to external tools.</p>

            <div class="resource-box">
                <h4>🛠 Tools & Skills</h4>
                <ul>
                    <li><strong>Tool Calling:</strong> Writing clean Python functions the LLM can invoke.</li>
                    <li><strong>Self-Correction:</strong> Teaching the agent to retry when an API returns an error.</li>
                    <li><strong>Research Agents:</strong> Building systems that can browse the web and summarize findings.</li>
                </ul>
            </div>
        `
    },
    {
        id: "multi-agent",
        title: "Module 3: LangGraph Mastery",
        content: `
            <h2>Phase 3: Production-Grade Orchestration</h2>
            <p>Standard agents are unpredictable. <strong>LangGraph</strong> is the solution, providing stateful, graph-based control over agentic behavior.</p>
            
            <div class="comparison-grid">
                <div class="comp-item">
                    <h5>Standard Agents</h5>
                    <p>❌ Unpredictable<br>❌ Hard to debug<br>❌ Stateless</p>
                </div>
                <div class="comp-item highlight">
                    <h5>LangGraph Systems</h5>
                    <p>✅ State Persistence<br>✅ Cyclic Workflows<br>✅ Human-in-the-loop</p>
                </div>
            </div>

            <h3>Advanced Patterns:</h3>
            <ul>
                <li><strong>Supervisor Pattern:</strong> One lead agent managing multiple workers.</li>
                <li><strong>Hierarchical Teams:</strong> Complex nested agent structures.</li>
                <li><strong>Time Travel:</strong> Debugging by jumping back to previous graph states.</li>
            </ul>
        `
    },
    {
        id: "memory",
        title: "Module 4: Enterprise RAG",
        content: `
            <h2>Phase 4: Knowledge-Aware AI</h2>
            <p>RAG (Retrieval-Augmented Generation) is how you give agents access to private data. In this module, we go deep into vector operations.</p>
            
            <div class="resource-box">
                <h4>Vector Stack</h4>
                <p>Learn to implement and optimize:</p>
                <ul>
                    <li><strong>Chunking Strategies:</strong> RecursiveCharacterTextSplitter vs. Semantic Chunking.</li>
                    <li><strong>Embeddings:</strong> Using OpenAI or local HuggingFace models.</li>
                    <li><strong>Databases:</strong> Pinecone, Weaviate, or ChromaDB.</li>
                </ul>
            </div>
            
            <p><strong>Practice:</strong> Build a SaaS support agent that answers questions based on a 500-page technical manual.</p>
        `
    },
    {
        id: "automation",
        title: "Module 5: Automation & Tooling",
        content: `
            <h2>Phase 5: The Power Zone</h2>
            <p>Connect your agents to the real world using n8n and Zapier. Automate leads, reports, and CRM updates.</p>
            <div class="project-card">
                <h4>🎯 Lead Qualification Agent</h4>
                <p>A Justdial-style system that qualify leads and triggers outreach.</p>
            </div>
        `
    },
    {
        id: "deployment",
        title: "Module 6: Production Ops",
        content: `
            <h2>Phase 6: Scaling & Deployment</h2>
            <p>Moving to FastAPI, implementing LangSmith for observability, and enforcing security guardrails.</p>
        `
    },
    {
        id: "local",
        title: "Module 7: Local AI & Mastery",
        content: `
            <h2>Phase 7: Sovereignty & Strategy</h2>
            <p>Running local models with Ollama and mastering the ROI-focused Senior Engineering mindset.</p>
        `
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const tocList = document.getElementById('toc-list');
    const readerArticle = document.getElementById('reader-article');
    const startBtn = document.querySelector('.btn-primary[href="#start"]');
    const contentSection = document.getElementById('content-viewer');

    // Populate TOC
    courseContent.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item.title;
        li.addEventListener('click', () => loadChapter(item.id));
        tocList.appendChild(li);
    });

    function loadChapter(id) {
        const chapter = courseContent.find(c => c.id === id);
        if (chapter) {
            readerArticle.innerHTML = chapter.content;
            
            const items = tocList.querySelectorAll('li');
            items.forEach((li, idx) => {
                if (courseContent[idx].id === id) {
                    li.classList.add('active');
                } else {
                    li.classList.remove('active');
                }
            });

            contentSection.classList.remove('hidden');
            contentSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    if (startBtn) {
        startBtn.addEventListener('click', (e) => {
            e.preventDefault();
            loadChapter(courseContent[0].id);
        });
    }

    document.querySelectorAll('.card-link').forEach((link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const chapterIds = ["intro", "reasoning", "tools", "multi-agent", "memory", "automation", "deployment", "local"];
            const targetId = chapterIds[index];
            if (targetId) loadChapter(targetId);
        });
    });
});
