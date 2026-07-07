# Chapter 12: Capstone — AI Education Platform

> **Build a complete AI-powered education platform that combines everything you've learned: Genkit flows, LangGraph agents, RAG with LlamaIndex, Docker deployment, evaluation, and observability. This capstone integrates Flutter (mobile UI), Laravel (backend API), and Genkit (AI orchestration) with Gemini or Ollama for LLM inference.**

## Learning Objectives

After completing this chapter, you will be able to:

- Architect a full-stack AI application from concept through deployment
- Implement RAG over course PDFs using LlamaIndex and pgvector
- Generate structured quiz questions with Genkit flows
- Build an AI answer evaluation system with rubric-based scoring
- Create a conversational AI tutor with session memory
- Design a teacher analytics dashboard with AI-driven insights
- Deploy the entire platform with Docker and Kubernetes
- Implement monitoring and evaluation for all AI features
- Apply patterns from every preceding chapter in an integrated system

## Estimated Time: 10 hours

---

## 12.1 Project Overview: AI Tutor for Students

### The Concept

**AI Tutor** is an educational platform where students can:

1. Upload course PDFs and ask questions about them (RAG)
2. Take automatically generated quizzes on course material
3. Get AI-graded answers with detailed feedback
4. Chat with a conversational AI tutor that remembers context
5. Teachers can view analytics on student performance and content gaps

### System Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                        Flutter Mobile/Web App                       │
│  ┌─────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ │
│  │ PDF     │ │ Quiz     │ │ Answer   │ │ AI Chat  │ │ Teacher  │ │
│  │ Reader  │ │ Player   │ │ Submit   │ │ Interface│ │ Dashboard│ │
│  └─────────┘ └──────────┘ └──────────┘ └──────────┘ └──────────┘ │
└──────────────────────────────────┬──────────────────────────────────┘
                                   │ HTTP/JSON
                                   ▼
┌─────────────────────────────────────────────────────────────────────┐
│                          Laravel API Gateway                        │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ │
│  │ Auth     │ │ Courses  │ │ Quizzes  │ │ Students │ │Analytics │ │
│  │ API      │ │ API      │ │ API      │ │ API      │ │ API      │ │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘ └──────────┘ │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │  AI Service Proxy (HTTP calls to Genkit service)               │ │
│  └────────────────────────────────────────────────────────────────┘ │
└──────────────────────────────────┬──────────────────────────────────┘
                                   │ HTTP/gRPC
                                   ▼
┌─────────────────────────────────────────────────────────────────────┐
│                       Genkit AI Service                             │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ │
│  │ RAG Flow │ │ Quiz Gen │ │ Eval     │ │ Chat     │ │ Teacher  │ │
│  │          │ │ Flow     │ │ Flow     │ │ Flow     │ │ Flow     │ │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘ └──────────┘ │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │  LlamaIndex RAG Engine + pgvector                              │ │
│  └────────────────────────────────────────────────────────────────┘ │
└───────────────────────┬────────────────────────────────────────────┘
                        │
┌───────────────────────▼────────────────────────────────────────────┐
│                    LLM Provider (Gemini / Ollama)                   │
└────────────────────────────────────────────────────────────────────┘
```

### Technology Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Mobile/Web UI | Flutter | Cross-platform student and teacher interfaces |
| API Gateway | Laravel | REST API, authentication, business logic |
| AI Orchestration | Genkit (TypeScript) | AI flows for RAG, quiz generation, evaluation, chat |
| Vector Store | PostgreSQL + pgvector | Store and search document embeddings |
| Cache | Redis | Session memory, rate limiting, caching |
| LLM | Gemini / Ollama | Text generation and embedding |
| Containerization | Docker / Docker Compose | Local development and testing |
| Orchestration | Kubernetes | Production deployment |
| Monitoring | OpenTelemetry + Grafana | Tracing and metrics |

---

## 12.2 Feature 1: RAG over Course PDFs

### Architecture

The RAG system uses LlamaIndex to ingest PDFs, chunk them, create embeddings, and store them in pgvector. When a student asks a question, the system retrieves relevant chunks and augments the LLM prompt.

```mermaid
graph TB
    subgraph "Ingestion Pipeline"
        PDF[PDF Upload] --> PARSE[Parse with LlamaIndex]
        PARSE --> CHUNK[Chunk Documents]
        CHUNK --> EMBED[Create Embeddings<br/>Gemini Embedding]
        EMBED --> STORE[Store in pgvector]
    end

    subgraph "Query Pipeline"
        Q[Student Question] --> QEMBED[Embed Question]
        QEMBED --> SEARCH[pgvector Similarity Search]
        SEARCH --> RETRIEVE[Retrieve Top-K Chunks]
        RETRIEVE --> AUGMENT[Augment Prompt]
        AUGMENT --> GENERATE[LLM Generation]
        GENERATE --> ANSWER[Answer + Citations]
    end
```

### Genkit RAG Flow

```typescript
import { genkit, z } from 'genkit';
import { geminiPro, geminiEmbedding } from '@genkit-ai/google-genai';
import { createClient } from '@redis/client';

const ai = genkit({
  plugins: [geminiPro(), geminiEmbedding()],
});

// RAG Flow: Answer questions from course materials
export const ragFlow = ai.defineFlow(
  {
    name: 'ragQuery',
    inputSchema: z.object({
      question: z.string(),
      courseId: z.string(),
      sessionId: z.string().optional(),
    }),
    outputSchema: z.object({
      answer: z.string(),
      citations: z.array(
        z.object({
          chunkId: z.string(),
          text: z.string().max(500),
          score: z.number(),
          pageNumber: z.number().optional(),
        })
      ),
      confidence: z.number(),
    }),
  },
  async (input) => {
    // Step 1: Embed the question
    const embedding = await ai.embed({
      embedder: geminiEmbedding,
      content: input.question,
    });

    // Step 2: Search pgvector for similar chunks
    const relevantChunks = await searchSimilarChunks(
      embedding.embedding,
      input.courseId,
      5 // top-K
    );

    if (relevantChunks.length === 0) {
      return {
        answer: 'I couldn\'t find relevant information in the course materials for that question.',
        citations: [],
        confidence: 0,
      };
    }

    // Step 3: Augment prompt with retrieved context
    const context = relevantChunks
      .map((c) => `[${c.chunkId}] (page ${c.pageNumber ?? 'N/A'}): ${c.text}`)
      .join('\n\n');

    const result = await ai.generate({
      model: geminiPro,
      system: `You are an AI tutor. Answer questions based ONLY on the provided course materials.
If the materials don't contain the answer, say so. Cite specific chunks using [chunkId].
Do not make up information not found in the context.`,
      prompt: `Course Materials:\n${context}\n\nStudent Question: ${input.question}`,
      config: { temperature: 0.2 },
    });

    // Step 4: Extract confidence
    const confidenceEval = await ai.generate({
      model: geminiPro,
      prompt: `Rate confidence (0-1) that this answer is fully supported by the provided context:
Answer: "${result.text}"
Context: "${context.substring(0, 1000)}"
Score:`,
      output: {
        schema: z.object({ confidence: z.number() }),
      },
    });

    return {
      answer: result.text,
      citations: relevantChunks.map((c) => ({
        chunkId: c.chunkId,
        text: c.text.substring(0, 500),
        score: c.similarityScore,
        pageNumber: c.pageNumber,
      })),
      confidence: confidenceEval.output?.confidence ?? 0.5,
    };
  }
);
```

### pgvector Search Implementation

```typescript
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

interface SimilarChunk {
  chunkId: string;
  documentId: string;
  text: string;
  pageNumber?: number;
  similarityScore: number;
}

async function searchSimilarChunks(
  embedding: number[],
  courseId: string,
  topK: number = 5
): Promise<SimilarChunk[]> {
  const embeddingStr = `[${embedding.join(',')}]`;

  const result = await pool.query(
    `SELECT
      dc.id AS "chunkId",
      dc.document_id AS "documentId",
      dc.content AS "text",
      dc.page_number AS "pageNumber",
      1 - (dc.embedding <=> $1::vector) AS "similarityScore"
    FROM document_chunks dc
    JOIN course_documents cd ON dc.document_id = cd.id
    WHERE cd.course_id = $2
      AND dc.embedding IS NOT NULL
    ORDER BY dc.embedding <=> $1::vector
    LIMIT $3`,
    [embeddingStr, courseId, topK]
  );

  return result.rows;
}

// Document ingestion
async function ingestDocument(
  documentId: string,
  content: string,
  chunkSize: number = 1000,
  overlap: number = 200
): Promise<void> {
  const chunks = chunkText(content, chunkSize, overlap);

  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i];

    // Generate embedding
    const embedding = await ai.embed({
      embedder: geminiEmbedding,
      content: chunk.text,
    });

    // Store in pgvector
    await pool.query(
      `INSERT INTO document_chunks (document_id, content, page_number, chunk_index, embedding)
       VALUES ($1, $2, $3, $4, $5::vector)`,
      [
        documentId,
        chunk.text,
        chunk.pageNumber,
        i,
        `[${embedding.embedding.join(',')}]`,
      ]
    );
  }
}

function chunkText(
  text: string,
  chunkSize: number,
  overlap: number
): Array<{ text: string; pageNumber?: number }> {
  const chunks: Array<{ text: string; pageNumber?: number }> = [];
  let start = 0;

  while (start < text.length) {
    const end = Math.min(start + chunkSize, text.length);
    const chunkText = text.substring(start, end);

    chunks.push({
      text: chunkText,
      pageNumber: undefined, // extract from PDF metadata in real implementation
    });

    start += chunkSize - overlap;
  }

  return chunks;
}
```

---

## 12.3 Feature 2: Quiz Generation with Structured Output

### Architecture

The quiz generator uses structured output (Zod schemas) to produce well-formatted quizzes from course content.

```mermaid
graph LR
    subgraph "Quiz Generation"
        TOPIC[Course Topic] --> RETRIEVE[Retrieve Relevant Content]
        RETRIEVE --> GEN[Generate Questions]
        GEN --> VALIDATE[Validate Schema]
        VALIDATE --> QUIZ[Quiz Object]
    end

    subgraph "Quiz Structure"
        QUIZ --> Q1[Question 1]
        QUIZ --> Q2[Question 2]
        QUIZ --> Q3[Question N]
        Q1 --> O1[Options A-D]
        Q1 --> A1[Correct Answer]
        Q1 --> E1[Explanation]
    end
```

### Genkit Quiz Generation Flow

```typescript
// Zod schemas for quiz structure
const QuizSchema = z.object({
  title: z.string(),
  topic: z.string(),
  difficulty: z.enum(['easy', 'medium', 'hard']),
  questions: z.array(
    z.object({
      id: z.number(),
      type: z.enum(['multiple_choice', 'true_false', 'short_answer']),
      question: z.string(),
      options: z.array(z.string()).optional(),
      correctAnswer: z.string(),
      explanation: z.string(),
      points: z.number().default(1),
      bloomLevel: z.enum([
        'remember', 'understand', 'apply', 'analyze', 'evaluate', 'create',
      ]),
    })
  ).min(1).max(20),
  totalPoints: z.number(),
  timeLimitMinutes: z.number().optional(),
});

type Quiz = z.infer<typeof QuizSchema>;

export const quizGenerationFlow = ai.defineFlow(
  {
    name: 'generateQuiz',
    inputSchema: z.object({
      courseId: z.string(),
      topic: z.string(),
      difficulty: z.enum(['easy', 'medium', 'hard']),
      questionCount: z.number().min(3).max(20).default(10),
      includeAnswers: z.boolean().default(true),
    }),
    outputSchema: QuizSchema,
  },
  async (input) => {
    // Retrieve relevant content from the course
    const relevantContent = await retrieveCourseContent(
      input.courseId,
      input.topic
    );

    // Generate quiz using structured output
    const result = await ai.generate({
      model: geminiPro,
      system: `You are an expert educational assessment creator. Create a quiz based on the provided course materials.
Follow Bloom's Taxonomy: distribute questions across remember, understand, apply, analyze, evaluate, create.
For multiple choice, provide exactly 4 options (A-D). For true/false, provide statement only.
Ensure questions test understanding, not just recall.`,
      prompt: `Course Content: "${relevantContent.substring(0, 3000)}"
Topic: ${input.topic}
Difficulty: ${input.difficulty}
Number of Questions: ${input.questionCount}
${input.includeAnswers ? 'Include correct answers and explanations.' : 'Do NOT include answers (student-facing).'}`,
      output: {
        schema: QuizSchema,
      },
      config: {
        temperature: input.difficulty === 'hard' ? 0.7 : 0.3,
      },
    });

    // Calculate total points
    const totalPoints = result.output!.questions.reduce(
      (sum, q) => sum + q.points, 0
    );

    return {
      ...result.output!,
      totalPoints,
      timeLimitMinutes: calculateTimeLimit(input.questionCount, input.difficulty),
    };
  }
);

function calculateTimeLimit(questionCount: number, difficulty: string): number {
  const baseMinutes = questionCount * 1.5;
  const difficultyMultiplier = difficulty === 'hard' ? 1.5 : difficulty === 'medium' ? 1.2 : 1;
  return Math.ceil(baseMinutes * difficultyMultiplier);
}

async function retrieveCourseContent(
  courseId: string,
  topic: string
): Promise<string> {
  // Search pgvector for content related to the topic
  const embedding = await ai.embed({
    embedder: geminiEmbedding,
    content: topic,
  });

  const result = await pool.query(
    `SELECT content FROM document_chunks dc
     JOIN course_documents cd ON dc.document_id = cd.id
     WHERE cd.course_id = $1
     ORDER BY dc.embedding <=> $2::vector
     LIMIT 20`,
    [courseId, `[${embedding.embedding.join(',')}]`]
  );

  return result.rows.map((r) => r.content).join('\n\n');
}
```

### Quiz Generation Presets

```typescript
const quizPresets = [
  { name: 'Quick Check', difficulty: 'easy', questionCount: 5, bloomDistribution: { remember: 60, understand: 40 } },
  { name: 'Standard Quiz', difficulty: 'medium', questionCount: 10, bloomDistribution: { remember: 20, understand: 30, apply: 30, analyze: 20 } },
  { name: 'Deep Dive', difficulty: 'hard', questionCount: 15, bloomDistribution: { apply: 20, analyze: 40, evaluate: 30, create: 10 } },
  { name: 'Comprehensive Exam', difficulty: 'hard', questionCount: 20, bloomDistribution: { remember: 10, understand: 20, apply: 25, analyze: 25, evaluate: 15, create: 5 } },
];
```

---

## 12.4 Feature 3: Answer Evaluation with AI

### Architecture

When a student submits answers, the AI evaluator compares each answer against the correct answer and the course content, providing detailed feedback and scoring.

```mermaid
sequenceDiagram
    participant S as Student
    participant Q as Quiz System
    participant E as Evaluator Flow
    participant LLM as LLM

    S->>Q: Submit answers
    Q->>E: evaluateAnswers(answers, quiz, courseId)
    E->>E: For each answer:
    Note over E: Load question + correct answer
    Note over E: Load relevant course context
    E->>LLM: Evaluate answer
    LLM-->>E: Score + Feedback
    E->>E: Aggregate results
    E-->>Q: Evaluation Report
    Q-->>S: Results + Feedback
```

### Genkit Answer Evaluation Flow

```typescript
const AnswerEvaluationSchema = z.object({
  questionId: z.number(),
  studentAnswer: z.string(),
  correctAnswer: z.string(),
  score: z.number().min(0).max(1),
  pointsAwarded: z.number(),
  feedback: z.string(),
  strengths: z.array(z.string()),
  improvements: z.array(z.string()),
  conceptsMissed: z.array(z.string()).optional(),
});

const EvaluationReportSchema = z.object({
  quizId: z.string(),
  studentId: z.string(),
  totalScore: z.number(),
  totalPoints: z.number(),
  percentageScore: z.number(),
  questionEvaluations: z.array(AnswerEvaluationSchema),
  overallFeedback: z.string(),
  recommendedTopics: z.array(z.string()),
  timeSpentSeconds: z.number().optional(),
});

export const evaluateAnswersFlow = ai.defineFlow(
  {
    name: 'evaluateAnswers',
    inputSchema: z.object({
      quizId: z.string(),
      courseId: z.string(),
      studentId: z.string(),
      questions: z.array(
        z.object({
          id: z.number(),
          question: z.string(),
          correctAnswer: z.string(),
          studentAnswer: z.string(),
          points: z.number(),
          type: z.enum(['multiple_choice', 'true_false', 'short_answer']),
          bloomLevel: z.string(),
        })
      ),
      timeSpentSeconds: z.number().optional(),
    }),
    outputSchema: EvaluationReportSchema,
  },
  async (input) => {
    const evaluations: z.infer<typeof AnswerEvaluationSchema>[] = [];
    let totalScore = 0;
    const allMissedConcepts: string[] = [];

    for (const question of input.questions) {
      // For multiple choice, use exact match
      if (question.type === 'multiple_choice' || question.type === 'true_false') {
        const isCorrect = question.studentAnswer.trim().toUpperCase() ===
          question.correctAnswer.trim().toUpperCase();
        const score = isCorrect ? 1 : 0;

        evaluations.push({
          questionId: question.id,
          studentAnswer: question.studentAnswer,
          correctAnswer: question.correctAnswer,
          score,
          pointsAwarded: isCorrect ? question.points : 0,
          feedback: isCorrect
            ? 'Correct!'
            : `Incorrect. The correct answer is: ${question.correctAnswer}`,
          strengths: isCorrect ? ['Selected the correct answer'] : [],
          improvements: isCorrect ? [] : ['Review the correct answer'],
        });

        if (isCorrect) totalScore += question.points;
        continue;
      }

      // For short answer, use LLM evaluation
      const context = await retrieveCourseContent(
        input.courseId,
        question.question
      );

      const evalResult = await ai.generate({
        model: geminiPro,
        system: `You are an expert educational evaluator. Evaluate the student's answer against the correct answer.
Consider: correctness, completeness, clarity, and understanding.
Provide a score from 0.0 to 1.0, specific feedback, and concepts the student missed.`,
        prompt: `Question: ${question.question}
Correct Answer: ${question.correctAnswer}
Student Answer: ${question.studentAnswer}
Course Context: ${context.substring(0, 1000)}`,
        output: {
          schema: z.object({
            score: z.number().min(0).max(1),
            feedback: z.string(),
            strengths: z.array(z.string()),
            improvements: z.array(z.string()),
            conceptsMissed: z.array(z.string()),
          }),
        },
        config: { temperature: 0.2 },
      });

      const pointsAwarded = Math.round(evalResult.output!.score * question.points);
      totalScore += pointsAwarded;
      allMissedConcepts.push(...(evalResult.output!.conceptsMissed ?? []));

      evaluations.push({
        questionId: question.id,
        studentAnswer: question.studentAnswer,
        correctAnswer: question.correctAnswer,
        score: evalResult.output!.score,
        pointsAwarded,
        feedback: evalResult.output!.feedback,
        strengths: evalResult.output!.strengths,
        improvements: evalResult.output!.improvements,
        conceptsMissed: evalResult.output!.conceptsMissed,
      });
    }

    const totalPoints = input.questions.reduce((s, q) => s + q.points, 0);

    // Generate overall feedback
    const overallFeedbackResult = await ai.generate({
      model: geminiPro,
      prompt: `Generate overall feedback for a student who scored ${totalScore}/${totalPoints} (${((totalScore / totalPoints) * 100).toFixed(0)}%).
Their missed concepts include: ${[...new Set(allMissedConcepts)].join(', ')}.
Give encouraging but honest feedback and recommend 3 topics to review.`,
      output: {
        schema: z.object({
          overallFeedback: z.string(),
          recommendedTopics: z.array(z.string()),
        }),
      },
    });

    return {
      quizId: input.quizId,
      studentId: input.studentId,
      totalScore,
      totalPoints,
      percentageScore: (totalScore / totalPoints) * 100,
      questionEvaluations: evaluations,
      overallFeedback: overallFeedbackResult.output!.overallFeedback,
      recommendedTopics: overallFeedbackResult.output!.recommendedTopics,
      timeSpentSeconds: input.timeSpentSeconds,
    };
  }
);
```

---

## 12.5 Feature 4: Conversational AI Tutor with Memory

### Architecture

The conversational tutor maintains session memory using Redis, enabling context-aware conversations that build on previous exchanges.

```mermaid
graph TB
    subgraph "Chat Session"
        M[Message] --> C[Chat Flow]
        C --> MEM[Redis Memory<br/>Session History]
        C --> RAG[RAG Retrieval]
        C --> LLM[LLM Generation]
        LLM --> R[Response]
        R --> MEM
    end

    subgraph "Memory Structure"
        KEY[Session Key: chat:{id}] --> HIST[Conversation Array]
        HIST --> T1[{role, content, timestamp}]
        HIST --> T2[{role, content, timestamp}]
        HIST --> TN[{role, content, timestamp}]
        KEY --> CTX[Context Cache<br/>Recent Topics]
    end
```

### Genkit Chat Flow with Memory

```typescript
import { createClient } from 'redis';

const redisClient = createClient({ url: process.env.REDIS_URL });
redisClient.connect();

interface ChatMessage {
  role: 'student' | 'tutor';
  content: string;
  timestamp: number;
}

interface ChatSession {
  sessionId: string;
  studentId: string;
  courseId: string;
  messages: ChatMessage[];
  context: {
    currentTopic?: string;
    relevantChunks?: string[];
    confusionPoints?: string[];
  };
}

export const chatFlow = ai.defineFlow(
  {
    name: 'aiTutorChat',
    inputSchema: z.object({
      sessionId: z.string(),
      studentId: z.string(),
      courseId: z.string(),
      message: z.string(),
    }),
    outputSchema: z.object({
      reply: z.string(),
      sources: z.array(z.string()).optional(),
      suggestedFollowUps: z.array(z.string()).optional(),
    }),
  },
  async (input) => {
    // Step 1: Load session from Redis
    const sessionKey = `chat:${input.sessionId}`;
    const sessionData = await redisClient.get(sessionKey);
    const session: ChatSession = sessionData
      ? JSON.parse(sessionData)
      : {
          sessionId: input.sessionId,
          studentId: input.studentId,
          courseId: input.courseId,
          messages: [],
          context: {},
        };

    // Step 2: Store the new message
    session.messages.push({
      role: 'student',
      content: input.message,
      timestamp: Date.now(),
    });

    // Step 3: Retrieve relevant course content
    const relevantChunks = await searchSimilarChunks(
      (await ai.embed({
        embedder: geminiEmbedding,
        content: input.message,
      })).embedding,
      input.courseId,
      3
    );

    session.context.relevantChunks = relevantChunks.map((c) => c.chunkId);

    // Step 4: Build conversation context
    const recentMessages = session.messages.slice(-10);
    const conversationHistory = recentMessages
      .map((m) => `${m.role === 'student' ? 'Student' : 'Tutor'}: ${m.content}`)
      .join('\n');

    const contextText = relevantChunks
      .map((c) => c.text)
      .join('\n\n');

    // Step 5: Generate tutor response
    const result = await ai.generate({
      model: geminiPro,
      system: `You are a patient, encouraging AI tutor. Your role is to:
1. Help students understand concepts, not just give answers
2. Use the Socratic method — ask guiding questions
3. Reference course materials when relevant
4. Adapt to the student's demonstrated level of understanding
5. If the student is confused, try a different explanation
6. Be encouraging and acknowledge good insights

Course materials are provided for reference. If the student asks something outside the course, gently guide them back.`,
      prompt: `Conversation History:
${conversationHistory}

Relevant Course Materials:
${contextText}

Student's latest message: ${input.message}

Respond as a helpful tutor:`,
      config: {
        temperature: 0.5,
        maxOutputTokens: 500,
      },
    });

    // Step 6: Generate suggested follow-ups
    const followUpsResult = await ai.generate({
      model: geminiPro,
      prompt: `Based on this tutoring conversation, suggest 3 follow-up questions the student could ask:
Student: ${input.message}
Tutor: ${result.text}`,
      output: {
        schema: z.object({
          followUps: z.array(z.string()).length(3),
        }),
      },
    });

    // Step 7: Store tutor response in session
    session.messages.push({
      role: 'tutor',
      content: result.text,
      timestamp: Date.now(),
    });

    // Trim old messages (keep last 50)
    if (session.messages.length > 50) {
      session.messages = session.messages.slice(-50);
    }

    // Step 8: Save session (1 hour TTL)
    await redisClient.setEx(sessionKey, 3600, JSON.stringify(session));

    return {
      reply: result.text,
      sources: relevantChunks.map((c) => c.text.substring(0, 200)),
      suggestedFollowUps: followUpsResult.output?.followUps,
    };
  }
);

// Session cleanup: Remove stale sessions
async function cleanupStaleSessions(): Promise<void> {
  const keys = await redisClient.keys('chat:*');
  for (const key of keys) {
    const ttl = await redisClient.ttl(key);
    if (ttl < 0) {
      await redisClient.del(key);
    }
  }
}
```

---

## 12.6 Feature 5: Teacher Analytics Dashboard

### Analytics Architecture

The teacher dashboard provides insights into student performance, content gaps, and AI interaction patterns.

```mermaid
graph TB
    subgraph "Data Sources"
        QD[(Quiz Results<br/>PostgreSQL)]
        CD[(Chat Logs<br/>Redis)]
        ED[(Evaluation<br/>Scores)]
    end

    subgraph "Analytics Flows"
        AF1[Performance<br/>Aggregation]
        AF2[Concept Gap<br/>Detection]
        AF3[Engagement<br/>Analysis]
        AF4[Content Quality<br/>Assessment]
    end

    subgraph "Dashboard API"
        DAPI[Analytics API<br/>Laravel]
    end

    subgraph "Flutter Dashboard"
        CH1[Class Performance<br/>Charts]
        CH2[Concept Gap<br/>Heatmap]
        CH3[Student Progress<br/>Timeline]
        CH4[Content Coverage<br/>Report]
    end

    QD --> AF1
    QD --> AF2
    CD --> AF3
    ED --> AF4
    AF1 --> DAPI
    AF2 --> DAPI
    AF3 --> DAPI
    AF4 --> DAPI
    DAPI --> CH1
    DAPI --> CH2
    DAPI --> CH3
    DAPI --> CH4
```

### Genkit Analytics Flow

```typescript
const PerformanceAnalyticsSchema = z.object({
  courseId: z.string(),
  totalStudents: z.number(),
  averageScore: z.number(),
  scoreDistribution: z.object({
    '0-25%': z.number(),
    '25-50%': z.number(),
    '50-75%': z.number(),
    '75-100%': z.number(),
  }),
  conceptBreakdown: z.array(
    z.object({
      concept: z.string(),
      averageCorrectness: z.number(),
      studentCount: z.number(),
      trend: z.enum(['improving', 'stable', 'declining']),
    })
  ),
  atRiskStudents: z.array(
    z.object({
      studentId: z.string(),
      name: z.string(),
      averageScore: z.number(),
      missingConcepts: z.array(z.string()),
      recommendedAction: z.string(),
    })
  ),
  contentGaps: z.array(
    z.object({
      topic: z.string(),
      questionsAttempted: z.number(),
      averageScore: z.number(),
      recommendation: z.string(),
    })
  ),
  generatedAt: z.string(),
});

export const teacherAnalyticsFlow = ai.defineFlow(
  {
    name: 'teacherAnalytics',
    inputSchema: z.object({
      courseId: z.string(),
      teacherId: z.string(),
      timeframe: z.enum(['week', 'month', 'semester']).default('month'),
    }),
    outputSchema: PerformanceAnalyticsSchema,
  },
  async (input) => {
    // Step 1: Query raw data from database
    const quizResults = await pool.query(
      `SELECT qe.*, q.difficulty, qc.name as concept_name
       FROM quiz_evaluations qe
       JOIN quizzes q ON qe.quiz_id = q.id
       JOIN quiz_concepts qc ON q.id = qc.quiz_id
       WHERE q.course_id = $1
         AND qe.created_at >= NOW() - INTERVAL '1 $2'`,
      [input.courseId, input.timeframe]
    );

    const studentList = await pool.query(
      `SELECT DISTINCT s.id, s.name, s.email
       FROM students s
       JOIN quiz_evaluations qe ON s.id = qe.student_id
       WHERE qe.quiz_id IN (
         SELECT id FROM quizzes WHERE course_id = $1
       )`,
      [input.courseId]
    );

    // Step 2: Calculate basic statistics
    const scores = quizResults.rows.map((r) => r.percentage_score);
    const averageScore = scores.reduce((a, b) => a + b, 0) / scores.length;

    const scoreDistribution = {
      '0-25%': scores.filter((s) => s < 25).length,
      '25-50%': scores.filter((s) => s >= 25 && s < 50).length,
      '50-75%': scores.filter((s) => s >= 50 && s < 75).length,
      '75-100%': scores.filter((s) => s >= 75).length,
    };

    // Step 3: Use Genkit to identify concept gaps
    const conceptData = await pool.query(
      `SELECT qc.name as concept,
              AVG(qe.percentage_score) as avg_score,
              COUNT(*) as attempts
       FROM quiz_evaluations qe
       JOIN quizzes q ON qe.quiz_id = q.id
       JOIN quiz_concepts qc ON q.id = qc.quiz_id
       WHERE q.course_id = $1
       GROUP BY qc.name`,
      [input.courseId]
    );

    // Step 4: LLM generates insights from the data
    const analyticsResult = await ai.generate({
      model: geminiPro,
      system: 'You are an educational data analyst. Analyze student performance data and provide actionable insights for teachers.',
      prompt: `Course ID: ${input.courseId}
Timeframe: ${input.timeframe}
Total Students: ${studentList.rows.length}
Average Score: ${averageScore.toFixed(1)}%
Score Distribution: ${JSON.stringify(scoreDistribution)}
Concept Performance: ${JSON.stringify(conceptData.rows)}

Identify:
1. Concepts where students struggle most (average < 60%)
2. At-risk students (average < 50%, multiple attempts)
3. Content gaps needing attention
4. Actionable recommendations for the teacher`,
      output: {
        schema: z.object({
          conceptBreakdown: z.array(z.object({
            concept: z.string(),
            averageCorrectness: z.number(),
            studentCount: z.number(),
            trend: z.enum(['improving', 'stable', 'declining']),
          })),
          atRiskStudents: z.array(z.object({
            studentId: z.string(),
            name: z.string(),
            averageScore: z.number(),
            missingConcepts: z.array(z.string()),
            recommendedAction: z.string(),
          })),
          contentGaps: z.array(z.object({
            topic: z.string(),
            questionsAttempted: z.number(),
            averageScore: z.number(),
            recommendation: z.string(),
          })),
        }),
      },
    });

    return {
      courseId: input.courseId,
      totalStudents: studentList.rows.length,
      averageScore,
      scoreDistribution,
      conceptBreakdown: analyticsResult.output!.conceptBreakdown,
      atRiskStudents: analyticsResult.output!.atRiskStudents,
      contentGaps: analyticsResult.output!.contentGaps,
      generatedAt: new Date().toISOString(),
    };
  }
);
```

---

## 12.7 Laravel API Integration

### Laravel Routes Calling Genkit

```typescript
// Laravel routes/web.php (PHP reference — TypeScript equivalent below)
// The Laravel backend proxies AI requests to the Genkit service

// TypeScript: Genkit service client called by Laravel
class GenkitServiceClient {
  private baseUrl = process.env.GENKIT_SERVICE_URL ?? 'http://localhost:4000';
  private headers = { 'Content-Type': 'application/json', Authorization: `Bearer ${process.env.GENKIT_API_KEY}` };

  async callFlow<T>(flow: string, input: any): Promise<T> {
    const res = await fetch(`${this.baseUrl}/api/${flow}`, { method: 'POST', headers: this.headers, body: JSON.stringify({ data: input }) });
    if (!res.ok) throw new Error(`Genkit flow ${flow} failed: ${await res.text()}`);
    return res.json();
  }

  ragQuery = (question: string, courseId: string, sessionId?: string) =>
    this.callFlow('ragQuery', { question, courseId, sessionId });
  generateQuiz = (p: { courseId: string; topic: string; difficulty: string; questionCount: number; includeAnswers: boolean }) =>
    this.callFlow('generateQuiz', p);
  evaluateAnswers = (p: { quizId: string; courseId: string; studentId: string; questions: any[]; timeSpentSeconds?: number }) =>
    this.callFlow('evaluateAnswers', p);
  chat = (p: { sessionId: string; studentId: string; courseId: string; message: string }) =>
    this.callFlow('aiTutorChat', p);
  getAnalytics = (p: { courseId: string; teacherId: string; timeframe: string }) =>
    this.callFlow('teacherAnalytics', p);
}

// Express server that proxies to Genkit service
import express from 'express';
const app = express();
const genkitClient = new GenkitServiceClient();
app.use(express.json());

// Shared error handler
function asyncHandler(fn: (req: any, res: any) => Promise<void>) {
  return (req: any, res: any) => fn(req, res).catch((err: any) =>
    res.status(502).json({ error: 'AI service error', message: err.message }));
}

// Auth middleware (verify token with Laravel in production)
app.use((req: any, res: any, next: any) => {
  if (!req.headers.authorization) return res.status(401).json({ error: 'Unauthorized' });
  next();
});

app.post('/api/courses/:courseId/ask', asyncHandler(async (req, res) => {
  res.json(await genkitClient.ragQuery(req.body.question, req.params.courseId, req.body.sessionId));
}));

app.post('/api/courses/:courseId/quizzes/generate', asyncHandler(async (req, res) => {
  res.json(await genkitClient.generateQuiz({
    courseId: req.params.courseId, topic: req.body.topic, difficulty: req.body.difficulty,
    questionCount: req.body.questionCount ?? 10, includeAnswers: false,
  }));
}));

app.post('/api/quizzes/:quizId/evaluate', asyncHandler(async (req, res) => {
  res.json(await genkitClient.evaluateAnswers({
    quizId: req.params.quizId, courseId: req.body.courseId, studentId: req.body.studentId,
    questions: req.body.questions, timeSpentSeconds: req.body.timeSpentSeconds,
  }));
}));

app.post('/api/chat', asyncHandler(async (req, res) => {
  res.json(await genkitClient.chat({
    sessionId: req.body.sessionId ?? crypto.randomUUID(), studentId: req.body.studentId,
    courseId: req.body.courseId, message: req.body.message,
  }));
}));

app.get('/api/teacher/courses/:courseId/analytics', asyncHandler(async (req, res) => {
  res.json(await genkitClient.getAnalytics({
    courseId: req.params.courseId, teacherId: req.query.teacherId as string,
    timeframe: (req.query.timeframe as any) ?? 'month',
  }));
}));

app.listen(8080, () => console.log('AI Tutor API on port 8080'));
```

---

## 12.8 Docker Setup for the Full Platform

### Docker Compose for AI Tutor

```yaml
version: '3.9'
services:
  genkit-service:
    build: ./ai-services/genkit
    ports: ['4000:4000']
    environment:
      NODE_ENV: production
      GOOGLE_GENAI_API_KEY: ${GOOGLE_GENAI_API_KEY}
      DATABASE_URL: postgresql://app:secret@postgres:5432/ai_tutor
      REDIS_URL: redis://redis:6379
    depends_on:
      postgres: { condition: service_healthy }
      redis: { condition: service_healthy }
    healthcheck:
      test: ['CMD', 'node', '-e', 'require("http").get("http://localhost:4000/health",r=>process.exit(r.statusCode===200?0:1))']
      interval: 30s; timeout: 10s; retries: 3
    deploy: { resources: { limits: { memory: 2G }, reservations: { memory: 512M } } }

  laravel-api:
    build: ./laravel-api
    ports: ['8080:80']
    environment:
      APP_ENV: production; DB_CONNECTION: pgsql; DB_HOST: postgres
      DB_DATABASE: ai_tutor; DB_USERNAME: app; DB_PASSWORD: secret
      REDIS_HOST: redis; GENKIT_SERVICE_URL: http://genkit-service:4000
    depends_on:
      postgres: { condition: service_healthy }
      redis: { condition: service_healthy }

  laravel-worker:
    build: ./laravel-api
    command: php artisan queue:work --tries=3
    environment:
      APP_ENV: production; DB_CONNECTION: pgsql; DB_HOST: postgres
      DB_DATABASE: ai_tutor; DB_USERNAME: app; DB_PASSWORD: secret
      REDIS_HOST: redis; GENKIT_SERVICE_URL: http://genkit-service:4000

  postgres:
    image: pgvector/pgvector:pg16
    environment: { POSTGRES_DB: ai_tutor, POSTGRES_USER: app, POSTGRES_PASSWORD: secret }
    ports: ['5432:5432']
    volumes: [postgres-data:/var/lib/postgresql/data, ../database/schema.sql:/docker-entrypoint-initdb.d/01-schema.sql]
    healthcheck: { test: ['CMD-SHELL', 'pg_isready -U app -d ai_tutor'], interval: 10s, timeout: 5s, retries: 5 }

  redis:
    image: redis:7-alpine
    ports: ['6379:6379']
    volumes: [redis-data:/data]
    healthcheck: { test: ['CMD', 'redis-cli', 'ping'], interval: 10s, timeout: 5s, retries: 5 }

  otel-collector:
    image: otel/opentelemetry-collector-contrib:latest
    command: ['--config=/etc/otel-collector-config.yaml']
    volumes: [./otel-collector-config.yaml:/etc/otel-collector-config.yaml]
    ports: ['4318:4318', '8888:8888']

  jaeger: { image: jaegertracing/all-in-one:latest, ports: ['16686:16686'] }
  prometheus:
    image: prom/prometheus:latest
    volumes: [./prometheus.yml:/etc/prometheus/prometheus.yml, prometheus-data:/prometheus]
    ports: ['9090:9090']
  grafana:
  grafana:
    image: grafana/grafana:latest
    ports:
      - '3001:3000'
    volumes:
      - grafana-data:/var/lib/grafana
      - ./grafana-dashboards:/etc/grafana/provisioning/dashboards
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=admin
    depends_on:
      - prometheus

volumes:
  postgres-data:
  redis-data:
  prometheus-data:
  grafana-data:
```

### Database Schema (pgvector)

```sql
CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE courses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  teacher_id UUID NOT NULL, title VARCHAR(255) NOT NULL,
  description TEXT, created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE course_documents (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
  filename VARCHAR(255) NOT NULL, file_path TEXT NOT NULL,
  page_count INTEGER, uploaded_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE document_chunks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  document_id UUID REFERENCES course_documents(id) ON DELETE CASCADE,
  content TEXT NOT NULL, page_number INTEGER, chunk_index INTEGER,
  embedding vector(768), created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_chunks_embedding ON document_chunks
  USING ivfflat (embedding vector_cosine_ops) WITH (lists = 100);

CREATE TABLE quizzes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL, topic VARCHAR(255), difficulty VARCHAR(20),
  total_points INTEGER, time_limit_minutes INTEGER
);

CREATE TABLE quiz_questions (
  id SERIAL PRIMARY KEY,
  quiz_id UUID REFERENCES quizzes(id) ON DELETE CASCADE,
  type VARCHAR(20) NOT NULL, question TEXT NOT NULL,
  options JSONB, correct_answer TEXT NOT NULL, explanation TEXT,
  points INTEGER DEFAULT 1, bloom_level VARCHAR(20), sort_order INTEGER
);

CREATE TABLE quiz_concepts (
  id SERIAL PRIMARY KEY, quiz_id UUID REFERENCES quizzes(id) ON DELETE CASCADE,
  name VARCHAR(100) NOT NULL, weight FLOAT DEFAULT 1.0
);

CREATE TABLE students (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL, email VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE quiz_evaluations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  quiz_id UUID REFERENCES quizzes(id) ON DELETE CASCADE,
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  total_score FLOAT, total_points INTEGER, percentage_score FLOAT,
  overall_feedback TEXT, recommended_topics JSONB, time_spent_seconds INTEGER,
  submitted_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE question_evaluations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  evaluation_id UUID REFERENCES quiz_evaluations(id) ON DELETE CASCADE,
  question_id INTEGER REFERENCES quiz_questions(id),
  student_answer TEXT, score FLOAT, points_awarded FLOAT,
  feedback TEXT, strengths JSONB, improvements JSONB, concepts_missed JSONB
);
```

---

## 12.9 Full Architecture Diagrams

### Complete System Architecture

```mermaid
graph TB
    subgraph "Client Layer"
        FA[Flutter App<br/>Student UI]
        FT[Flutter App<br/>Teacher UI]
    end

    subgraph "API Layer"
        LA[Laravel API<br/>Port 8080]
        LW[Laravel Worker<br/>Queue Processing]
    end

    subgraph "AI Service Layer (Genkit)"
        GF1[RAG Flow<br/>Port 4000]
        GF2[Quiz Gen Flow]
        GF3[Eval Flow]
        GF4[Chat Flow]
        GF5[Analytics Flow]
    end

    subgraph "Data Layer"
        PG[PostgreSQL<br/>pgvector<br/>Port 5432]
        RD[Redis<br/>Chat Memory<br/>Port 6379]
    end

    subgraph "LLM Layer"
        GM[Gemini API]
        OL[Ollama<br/>Local]
    end

    subgraph "Observability"
        OT[OTel Collector]
        PR[Prometheus]
        GF[Grafana]
        JR[Jaeger]
    end

    FA -->|HTTPS| LA
    FT -->|HTTPS| LA
    LA -->|HTTP| GF1
    LA -->|HTTP| GF2
    LA -->|HTTP| GF3
    LA -->|HTTP| GF4
    LA -->|HTTP| GF5
    LA --> PG
    LA --> RD
    LW --> GF3
    LW --> GF5
    GF1 --> PG
    GF2 --> PG
    GF3 --> PG
    GF5 --> PG
    GF4 --> RD
    GF1 --> GM
    GF2 --> GM
    GF3 --> GM
    GF4 --> GM
    GF5 --> GM
    GF1 -.->|Optional| OL
    GF2 -.-> OL
    GF3 -.-> OL
    GF4 -.-> OL
    GF1 --> OT
    GF2 --> OT
    GF3 --> OT
    GF4 --> OT
    GF5 --> OT
    OT --> PR
    OT --> JR
    PR --> GF
    JR --> GF
```

### Request Flow: Flutter → Laravel → Genkit → LLM

```mermaid
sequenceDiagram
    participant F as Flutter App
    participant L as Laravel API
    participant G as Genkit Service
    participant V as pgvector
    participant M as LLM (Gemini)

    Note over F,M: Student asks a question

    F->>L: POST /api/courses/{id}/ask
    Note over F,L: { question, sessionId }

    L->>L: Authenticate & Validate
    L->>G: POST /api/ragQuery
    Note over L,G: { question, courseId }

    G->>G: Embed question
    G->>V: vector similarity search
    V-->>G: Top 5 relevant chunks

    G->>M: Generate with context
    Note over G,M: prompt = context + question
    M-->>G: Generated answer

    G->>G: Extract confidence
    G-->>L: { answer, citations, confidence }

    L->>L: Store interaction log
    L-->>F: { answer, citations }

    F->>F: Display answer with citations

    Note over F,M: Teacher requests analytics

    F->>L: GET /api/teacher/courses/{id}/analytics
    L->>G: POST /api/teacherAnalytics
    G->>V: Query performance data
    V-->>G: Aggregated scores
    G->>M: Generate insights
    M-->>G: Concept gaps, recommendations
    G-->>L: Performance report
    L-->>F: Dashboard data
```

---

## 12.10 Summary & Practical Takeaways

### What You Built

The AI Tutor platform demonstrates every major concept from the course:

1. **Genkit Flows**: All five features (RAG, quiz generation, evaluation, chat, analytics) are implemented as Genkit flows with structured outputs.

2. **RAG with LlamaIndex & pgvector**: Document ingestion, chunking, embedding, and semantic search are fully implemented.

3. **Structured Output**: Zod schemas ensure every AI response matches expected formats.

4. **Multi-Step Orchestration**: The evaluation flow iterates over questions, calling LLM for each short-answer evaluation.

5. **Memory & State**: Redis-backed session memory powers the conversational tutor.

6. **Evaluation**: The platform includes built-in evaluation (confidence scoring, answer correctness).

7. **Observability**: OpenTelemetry tracing, Prometheus metrics, and Grafana dashboards monitor all AI flows.

8. **Docker Deployment**: The complete stack runs in containers with Docker Compose.

9. **Full-Stack Integration**: Laravel proxies requests to Genkit services, demonstrating the Flutter → Laravel → Genkit → LLM architecture.

### Practical Takeaways

- **Start with one feature**: Build the RAG feature first, validate it, then add quiz generation.
- **Test Genkit flows in isolation**: Use `genkit flow:run` to test each flow before integrating with Laravel.
- **Use Redis for chat memory**: Session data with TTL prevents memory bloat.
- **Batch LLM calls**: For evaluation, batch questions into a single prompt to reduce API costs.
- **Cache embeddings**: Store computed embeddings to avoid re-computing for the same content.
- **Set up monitoring from day one**: Deploy the full OpenTelemetry stack before going to production.
- **Rate limit AI endpoints**: Students can't DOS the AI — use Redis-based rate limiting.

### Going Further

| Enhancement | Implementation |
|-------------|---------------|
| **Multi-language support** | Translate course content and generate quizzes in multiple languages |
| **Voice interface** | Add speech-to-text for student questions via Flutter |
| **Adaptive learning paths** | Use analytics to recommend personalized study sequences |
| **Plagiarism detection** | Compare student answers against course materials |
| **Peer review** | Add AI-moderated peer answer review |
| **Gamification** | Badges, streaks, and leaderboards based on quiz performance |
| **Offline mode** | Cache course materials and use on-device AI (Ollama) |

---

## Chapter Quiz

### Question 1
What is the role of Laravel in the AI Tutor architecture?

A) It is the AI orchestration layer
B) It serves as the API gateway handling authentication, business logic, and proxying AI requests
C) It stores vector embeddings
D) It runs the LLM models

**Answer**: B

### Question 2
Which component stores document embeddings for the RAG feature?

A) Redis
B) PostgreSQL with pgvector
C) In-memory cache
D) Flat JSON files

**Answer**: B

### Question 3
How does the conversational AI tutor maintain session memory?

A) It uses a global in-memory store
B) It stores chat history in Redis with a TTL for each session
C) It re-embeds the entire conversation each time
D) It uses browser localStorage

**Answer**: B

### Question 4
What is the purpose of structured output (Zod schemas) in quiz generation?

A) To make the code run faster
B) To ensure generated quizzes follow a predictable, validated format
C) To store quizzes in the database
D) To authenticate API requests

**Answer**: B

### Question 5
How does the answer evaluation flow handle multiple-choice questions differently from short-answer questions?

A) Multiple-choice uses exact string matching; short-answer uses LLM evaluation
B) Both use the same LLM evaluation
C) Short-answer uses exact matching; multiple-choice uses LLM
D) Both use exact matching

**Answer**: A

### Question 6
In the RAG flow, what happens if no relevant chunks are found for a student's question?

A) The system returns a hardcoded error message
B) The system returns a response indicating no relevant information was found, with confidence 0
C) The system asks the student to rephrase
D) The system falls back to a general web search

**Answer**: B

### Question 7
What is the purpose of the "bloomLevel" field in quiz questions?

A) To determine question difficulty
B) To categorize questions by cognitive complexity (Bloom's Taxonomy)
C) To set the time limit for the quiz
D) To calculate the question's point value

**Answer**: B

### Question 8
How does the teacher analytics flow identify at-risk students?

A) It uses a simple score threshold from the database
B) It queries quiz evaluations and uses Genkit to analyze patterns and generate recommendations
C) It manually flags students based on teacher input
D) It checks login frequency

**Answer**: B

### Question 9
In the Docker Compose setup, why does the Laravel worker service exist separately from the API?

A) To handle web requests in parallel
B) To process background jobs (like asynchronous evaluation) without blocking the web server
C) To run cron jobs
D) To serve static files

**Answer**: B

### Question 10
What is the recommended starting point when building an AI Tutor platform?

A) Build all five features at once
B) Start with the RAG feature, validate it, then add other features incrementally
C) Start with the teacher dashboard
D) Start with Docker deployment

**Answer**: B

---

## Exercises

### Exercise 1: Extend the RAG System (Easy)

Improve the RAG system by adding:

1. **Hybrid search**: Combine vector similarity with keyword matching using `tsvector` in PostgreSQL
2. **Metadata filtering**: Add filters for document type, date range, and page numbers
3. **Streaming response**: Modify the RAG flow to stream the answer token-by-token using Genkit's streaming API

**Deliverable**: Updated RAG flow with hybrid search, filtering, and streaming. Include a test showing the streaming response.

### Exercise 2: Build a Quiz Leaderboard (Medium)

Create an analytics feature that generates a weekly leaderboard:

1. `leaderboardFlow` that aggregates quiz scores for the past week
2. Returns top 10 students with their average score, quizzes completed, and improvement trend
3. Include badges based on performance tiers (Gold: >90%, Silver: >75%, Bronze: >60%)
4. Use Genkit to generate motivational messages for each tier

**Deliverable**: TypeScript implementation of the leaderboard flow, test data, and sample output.

### Exercise 3: Implement Adaptive Quiz Difficulty (Medium)

Build an adaptive quiz system:

1. Start with easy questions
2. Based on student performance, adjust difficulty using a Genkit flow
3. If student answers 3+ easy questions correctly → move to medium
4. If student answers 3+ medium correctly → move to hard
5. If student misses 2 in a row → move down a difficulty level
6. Track the student's "current level" in Redis

**Deliverable**: TypeScript implementation with the adaptive flow, Redis state management, and a test sequence.

### Exercise 4: Add Multi-Language Support (Hard)

Extend the platform to support multiple languages:

1. Create a `translateContent` Genkit flow that:
   - Detects the source language of course content
   - Translates to a target language (student's preference)
   - Preserves technical terms and formatting
2. Modify the RAG flow to:
   - Accept student questions in any language
   - Translate questions to course language for search
   - Translate answers back to student's language
3. Modify quiz generation to create bilingual quizzes

**Deliverable**: TypeScript flows for translation, modified RAG flow, and demonstration with at least 3 languages.

### Exercise 5: Full Production Deployment (Hard)

Deploy the AI Tutor platform to a production environment:

1. Create Kubernetes manifests for all services (Genkit, Laravel, PostgreSQL, Redis, OTel, Prometheus, Grafana)
2. Set up Ingress with TLS and rate limiting
3. Configure Horizontal Pod Autoscalers for:
   - Genkit service (scale on CPU at 70%)
   - Laravel API (scale on requests per second)
4. Implement a CI/CD pipeline (GitHub Actions) that:
   - Runs unit tests
   - Runs the evaluation suite with a test dataset
   - Builds and pushes Docker images
   - Deploys to a staging environment
   - Runs smoke tests
   - Deploys to production with a rolling update
5. Set up Grafana dashboards showing:
   - Request volume and latency per flow
   - Token usage and cost per model
   - Error rates per service
   - Student engagement metrics

**Deliverable**: Kubernetes YAML files, CI/CD pipeline config, Grafana dashboard JSON, and deployment documentation.

---

> **Congratulations! You've completed the Modern AI Engineering course. You now have the skills to architect, build, deploy, and monitor production AI applications using Genkit, LangGraph, LlamaIndex, and the full modern AI stack.**

---

## Course Wrap-Up

### What You've Learned

| Module | Chapters | Skills Acquired |
|--------|----------|-----------------|
| Foundation | 1-4 | Genkit flows, LangGraph agents, LlamaIndex RAG |
| Core Patterns | 5-8 | Vector databases, MCP protocol, prompt engineering, streaming |
| Production | 9-12 | Multi-agent systems, Docker/K8s deployment, evaluation, observability |

### Next Steps

- **Contribute**: Open-source your AI Tutor platform on GitHub
- **Specialize**: Dive deeper into MCP server development or fine-tuning
- **Teach**: Write tutorials sharing what you've learned
- **Build**: Apply these patterns to your own domain (healthcare, finance, legal, etc.)

---

> **Next**: [Index →](index.md)
