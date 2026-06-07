# Phase 2: AI Agents (Decision & Action)

⏱️ **Time:** 2 Weeks
🎯 **Goal:** Build systems that use LLMs to decide *which* code to run and *how* to solve problems.

---

## 🔄 1. The ReAct Architecture
**ReAct = Reason + Act.** This is the logic loop that defines an agent.
1.  **Question:** User asks "What is the weather in Delhi and send it to my email?"
2.  **Thought:** The agent realizes it needs the weather first.
3.  **Action:** Calls `get_weather(location="Delhi")`.
4.  **Observation:** Receives "24°C, Sunny".
5.  **Thought:** Now I need to send the email.
6.  **Action:** Calls `send_email(to="user@example.com", text="It's 24°C in Delhi")`.
7.  **Final Response:** "I have found the weather and sent the email."

---

## 🛠️ 2. Tool Integration (The "Hands" of AI)
Agents are useless without tools.
*   **Defining Tools:** Using the `@tool` decorator in LangChain.
*   **Docstrings as Instructions:** The LLM reads your function's docstring to know when to use it. *If your docstring is bad, the agent will fail.*
*   **Tool Calling:** Understanding how the model outputs a JSON "request" to call a function.

---

## 🧠 3. Advanced Agent Techniques
### A. Self-Correction & Reflection
Teaching an agent to check its own work.
*   **Pattern:** Agent outputs an answer -> A "Grader" prompt checks the answer -> If incorrect, the agent retries.

### B. Plan-and-Execute
For very long tasks, the agent first writes a 10-step plan, then executes them one by one. This prevents the agent from getting "lost" in a loop.

---

## 🧪 Real-world Project: "The Autonomous Web Researcher"
**Goal:** Build an agent that takes a topic, searches Google, scrapes the top 3 websites, and writes a comparison table.
*   **Tools:** TavilySearch (API) or BeautifulSoup (Scraper).
*   **Agent Type:** OpenAI Functions Agent or ReAct Agent.

---

## 📚 Essential Resources
*   [**LangChain: Agents Overview**](https://python.langchain.com/docs/concepts/agents/)
*   [**DeepLearning.AI: AI Agents in LangChain**](https://www.deeplearning.ai/short-courses/ai-agents-in-langchain/)
*   [**AlphaSignal: The 2024 AI Agent Landscape**](https://alphasignal.ai/)
