# ❓ The Socratic Dialogue Prompting

### 🗣️ Extracting True Understanding

The Socratic method is a form of cooperative argumentative dialogue that stimulates critical thinking and draws out underlying presumptions. 

When you encounter code you do not understand, or when you are stuck on a deeply confusing architectural bug, you should use Socratic prompting to force the AI to teach you, rather than just solving the problem for you.

---

### ❌ The Cop-Out Prompt

*   **You:** *"Why is my React component rendering twice?"*
*   **AI:** *"Because of Strict Mode in React 18. Here is the fixed code. [Provides code block]"*

You paste the code. It works. But you fundamentally do not understand the React component lifecycle any better than you did 5 minutes ago. 

### ✅ The Socratic Prompts

To grow, you must use specific prompt sequences that dissect the "Why".

#### 1. The "Explain It Like I'm Five" (ELI5)
When documentation is too dense or filled with academic computer-science jargon, break it down.
*   *Prompt:* *"I am reading about Laravel's Service Container, but I am extremely confused by terms like 'IoC', 'Binding', and 'Resolution'. Explain the Service Container to me using an analogy of a busy restaurant kitchen. Do not use code snippets."*

#### 2. The "What is the Worst Case?" (Pessimistic Check)
When AI or a tutorial suggests a design pattern, force it to debate itself.
*   *Prompt:* *"You suggested I use the Repository Pattern here to abstract my Eloquent queries. Play devil's advocate. What are the three biggest downsides of the Repository Pattern in a modern Laravel application? When is it a terrible idea to use it?"*

#### 3. The "Find My False Assumption" (Debugging Loop)
When you are debugging and completely lost, your primary issue is that one of your foundational assumptions is wrong. 
*   *Prompt:* *"I have a bug. I am passing a User ID to my Job class. The Job runs on the queue, but it keeps failing saying the User cannot be found. I assume the ID is correct because I dumped it right before dispatching the job. Act as a senior debugger. Tell me 3 assumptions I might be making about how Laravel serializes data for queues that could be completely wrong."*

---

### 🧠 Building Mental Models

The ultimate goal of Socratic Dialogue with an LLM is to build a robust **Mental Model** of the system. 

You don't want to memorize that `useEffect` needs a dependency array. You want to build a mental model of *how React paints the screen and tracks state changes over time.* Once the generic mental model is built, the specific syntax quirks of a framework become trivial to figure out.

**Summary:** Never accept "The Answer" out of context. Interrogate the AI. Ask it to explain the trade-offs, identify the theoretical weaknesses in its own suggestions, and simplify the jargon. Turn the bot into an unyielding, Socratic mentor.
