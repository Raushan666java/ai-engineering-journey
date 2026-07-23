import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const modules = [
  { slug: '00-foundations', label: 'Core Computer Science', icon: '...', chapters: 5 },
  { slug: '01-python', label: 'Python Programming', icon: '...', chapters: 14 },
  { slug: '02-sql-databases', label: 'SQL & Databases', icon: '...', chapters: 10 },
  { slug: '03-dsa', label: 'Data Structures & Algorithms', icon: '...', chapters: 18 },
  { slug: '04-git-linux', label: 'Git, Linux & CLI', icon: '...', chapters: 6 },
  { slug: '05-fastapi', label: 'FastAPI Backend', icon: '...', chapters: 10 },
  { slug: '06-docker-k8s-cloud', label: 'Docker, Kubernetes & Cloud', icon: '...', chapters: 10 },
  { slug: '07-system-design', label: 'System Design', icon: '...', chapters: 12 },
  { slug: '08-ml', label: 'Machine Learning', icon: '...', chapters: 10 },
  { slug: '09-deep-learning', label: 'Deep Learning & PyTorch', icon: '...', chapters: 10 },
  { slug: '10-nlp', label: 'NLP & Transformers', icon: '...', chapters: 8 },
  { slug: '11-llms-prompt', label: 'LLMs & Prompt Engineering', icon: '...', chapters: 8 },
  { slug: '12-rag', label: 'RAG & Vector Databases', icon: '...', chapters: 10 },
  { slug: '13-ai-agents', label: 'AI Agents & LangGraph', icon: '...', chapters: 10 },
  { slug: '14-fine-tuning', label: 'Fine-Tuning & PEFT', icon: '...', chapters: 8 },
  { slug: '15-evaluation', label: 'AI Evaluation & Observability', icon: '...', chapters: 6 },
  { slug: '16-mlops', label: 'MLOps & Production', icon: '...', chapters: 8 },
  { slug: '17-security', label: 'AI Security & Guardrails', icon: '...', chapters: 6 },
  { slug: '18-multimodal', label: 'Multimodal AI & Voice', icon: '...', chapters: 6 },
  { slug: '19-capstone', label: 'Capstone Projects', icon: '...', chapters: 5 },
  { slug: '20-portfolio', label: 'Portfolio & Branding', icon: '...', chapters: 6 },
  { slug: '21-interview', label: 'Interview Preparation', icon: '...', chapters: 19 },
  { slug: '22-advanced-agents', label: 'Advanced AI Agents', icon: '...', chapters: 10 },
  { slug: '23-trending', label: 'Trending AI/ML Platforms', icon: '...', chapters: 4 },
];

const stats = [
  { value: '24', label: 'Modules' },
  { value: '224+', label: 'Chapters' },
  { value: '2,440+', label: 'Interview Q&A' },
  { value: '975+', label: 'Quiz Questions' },
];

export default function Home(): React.JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <main>
        {/* Hero */}
        <section style={{
          background: 'linear-gradient(135deg, #161b22 0%, #282A35 100%)',
          color: '#fff',
          padding: '80px 20px',
          textAlign: 'center',
        }}>
          <div style={{maxWidth: 900, margin: '0 auto'}}>
            <span style={{
              background: 'rgba(4, 170, 109, 0.2)',
              color: '#04AA6D',
              border: '1px solid rgba(4, 170, 109, 0.3)',
              borderRadius: 20,
              padding: '6px 16px',
              fontSize: 14,
              fontWeight: 600,
            }}>
              Backend + AI Engineer
            </span>
            <h1 style={{
              fontSize: '3.5rem',
              fontWeight: 700,
              marginTop: '1.5rem',
              marginBottom: '1rem',
              lineHeight: 1.1,
              color: '#fff',
              border: 'none',
            }}>
              Complete Placement Course
            </h1>
            <p style={{
              fontSize: '1.3rem',
              color: 'rgba(255,255,255,0.8)',
              lineHeight: 1.6,
              marginBottom: '2rem',
            }}>
              Zero to job-ready in 12 months. 24 subjects, 224+ chapters, 2,440+ interview Q&A.
              All in browser localStorage — zero backend.
            </p>
            <div style={{display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap'}}>
              <Link to="/placement" style={{
                background: '#04AA6D',
                color: '#fff',
                borderRadius: 25,
                padding: '14px 44px',
                fontSize: '1.1rem',
                fontWeight: 600,
                textDecoration: 'none',
              }}>
                Start Learning
              </Link>
              <a href="https://github.com/Raushan666java/ai-engineering-journey" style={{
                background: 'transparent',
                color: '#fff',
                border: '2px solid rgba(255,255,255,0.3)',
                borderRadius: 25,
                padding: '14px 44px',
                fontSize: '1.1rem',
                fontWeight: 600,
                textDecoration: 'none',
              }}>
                View on GitHub
              </a>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 20,
              marginTop: '3rem',
              maxWidth: 700,
              margin: '3rem auto 0',
            }}>
              {stats.map((s) => (
                <div key={s.label} style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: 8,
                  padding: '1rem',
                }}>
                  <div style={{fontSize: '2rem', fontWeight: 700, color: '#fff'}}>{s.value}</div>
                  <div style={{fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)'}}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Module Grid */}
        <section style={{padding: '4rem 20px', maxWidth: 1200, margin: '0 auto'}}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: '0.5rem',
          }}>
            24 Modules — From Fundamentals to Production AI
          </h2>
          <p style={{
            textAlign: 'center',
            color: 'var(--ifm-color-emphasis-600)',
            marginBottom: '2.5rem',
            fontSize: '1.1rem',
          }}>
            Each module covers a complete subject with theory, code examples, and interview questions.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 20,
          }}>
            {modules.map((m) => (
              <Link
                key={m.slug}
                to={`/${m.slug}`}
                style={{
                  border: '1px solid var(--ifm-color-emphasis-300)',
                  borderRadius: 8,
                  padding: '1.25rem',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'all 0.2s ease',
                }}
                className="card"
              >
                <div style={{fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--ifm-font-color-base)'}}>
                  {m.label}
                </div>
                <div style={{fontSize: '0.85rem', color: 'var(--ifm-color-emphasis-600)'}}>
                  {m.chapters} chapters
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{
          background: 'var(--ifm-color-emphasis-100)',
          padding: '4rem 20px',
          textAlign: 'center',
        }}>
          <h2 style={{fontSize: '2rem', fontWeight: 700, marginBottom: '1rem'}}>
            Ready to Start?
          </h2>
          <p style={{
            color: 'var(--ifm-color-emphasis-600)',
            maxWidth: 600,
            margin: '0 auto 2rem',
            fontSize: '1.1rem',
          }}>
            Begin with Core Computer Science and work your way through all 24 modules.
          </p>
          <Link to="/00-foundations" style={{
            background: '#04AA6D',
            color: '#fff',
            borderRadius: 25,
            padding: '14px 44px',
            fontSize: '1.1rem',
            fontWeight: 600,
            textDecoration: 'none',
          }}>
            Begin Module 00
          </Link>
        </section>
      </main>
    </Layout>
  );
}
