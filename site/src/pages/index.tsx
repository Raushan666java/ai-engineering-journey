import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const modules = [
  { slug: '00-foundations', label: 'Core CS', chapters: 5, color: '#3b82f6' },
  { slug: '01-python', label: 'Python', chapters: 14, color: '#3b82f6' },
  { slug: '02-sql-databases', label: 'SQL & DB', chapters: 10, color: '#3b82f6' },
  { slug: '03-dsa', label: 'DSA', chapters: 18, color: '#3b82f6' },
  { slug: '04-git-linux', label: 'Git & Linux', chapters: 6, color: '#3b82f6' },
  { slug: '05-fastapi', label: 'FastAPI', chapters: 10, color: '#8b5cf6' },
  { slug: '06-docker-k8s-cloud', label: 'Docker/K8s/Cloud', chapters: 10, color: '#8b5cf6' },
  { slug: '07-system-design', label: 'System Design', chapters: 12, color: '#8b5cf6' },
  { slug: '08-ml', label: 'Machine Learning', chapters: 10, color: '#f59e0b' },
  { slug: '09-deep-learning', label: 'Deep Learning', chapters: 10, color: '#f59e0b' },
  { slug: '10-nlp', label: 'NLP', chapters: 8, color: '#f59e0b' },
  { slug: '11-llms-prompt', label: 'LLMs & Prompt', chapters: 8, color: '#ef4444' },
  { slug: '12-rag', label: 'RAG', chapters: 10, color: '#ef4444' },
  { slug: '13-ai-agents', label: 'AI Agents', chapters: 10, color: '#ef4444' },
  { slug: '14-fine-tuning', label: 'Fine-Tuning', chapters: 8, color: '#ef4444' },
  { slug: '15-evaluation', label: 'Eval & Observability', chapters: 6, color: '#10b981' },
  { slug: '16-mlops', label: 'MLOps', chapters: 8, color: '#10b981' },
  { slug: '17-security', label: 'AI Security', chapters: 6, color: '#10b981' },
  { slug: '18-multimodal', label: 'Multimodal AI', chapters: 6, color: '#10b981' },
  { slug: '19-capstone', label: 'Capstone Projects', chapters: 5, color: '#6366f1' },
  { slug: '20-portfolio', label: 'Portfolio', chapters: 6, color: '#6366f1' },
  { slug: '21-interview', label: 'Interview Prep', chapters: 19, color: '#6366f1' },
  { slug: '22-advanced-agents', label: 'Advanced Agents', chapters: 10, color: '#ec4899' },
  { slug: '23-trending', label: 'Trending Platforms', chapters: 4, color: '#ec4899' },
];

const stats = [
  { value: '24', label: 'Modules' },
  { value: '224+', label: 'Chapters' },
  { value: '2,440+', label: 'Interview Q&A' },
  { value: '975+', label: 'Quiz Questions' },
];

const phases = [
  { label: 'Foundations', modules: ['Core CS', 'Python', 'SQL', 'DSA', 'Git'], color: '#3b82f6', weeks: '1-14' },
  { label: 'Backend', modules: ['FastAPI', 'Docker/K8s', 'System Design'], color: '#8b5cf6', weeks: '15-24' },
  { label: 'ML & DL', modules: ['ML', 'Deep Learning', 'NLP'], color: '#f59e0b', weeks: '25-34' },
  { label: 'GenAI', modules: ['LLMs', 'RAG', 'Agents', 'Fine-Tuning'], color: '#ef4444', weeks: '35-54' },
  { label: 'Production', modules: ['Eval', 'MLOps', 'Security', 'Multimodal'], color: '#10b981', weeks: '55-62' },
  { label: 'Career', modules: ['Capstones', 'Portfolio', 'Interview'], color: '#6366f1', weeks: '63-70' },
];

export default function Home(): React.JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <main>
        {/* Hero */}
        <section style={{
          background: 'linear-gradient(135deg, #0f1219 0%, #1a1f2e 50%, #162d1f 100%)',
          color: '#fff',
          padding: '6rem 1.5rem 5rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
            background: 'radial-gradient(circle at 30% 50%, rgba(4,170,109,0.08) 0%, transparent 60%), radial-gradient(circle at 70% 50%, rgba(59,130,246,0.06) 0%, transparent 60%)',
          }} />
          <div style={{maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1}}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(4,170,109,0.12)', border: '1px solid rgba(4,170,109,0.25)',
              borderRadius: 20, padding: '6px 16px', fontSize: 13, fontWeight: 600, color: '#04AA6D',
              marginBottom: '1.5rem',
            }}>
              <span style={{width: 6, height: 6, borderRadius: '50%', background: '#04AA6D', display: 'inline-block'}} />
              Backend + AI Engineer
            </div>
            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, lineHeight: 1.1,
              margin: '0 0 1.25rem', letterSpacing: '-0.03em', color: '#fff', border: 'none', padding: 0,
            }}>
              Complete Placement<br />Course
            </h1>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'rgba(255,255,255,0.65)',
              lineHeight: 1.7, marginBottom: '2rem', maxWidth: 580, margin: '0 auto 2.5rem',
            }}>
              Zero to job-ready in 12 months. 24 subjects, 224+ chapters, 2,440+ interview Q&A.
            </p>
            <div style={{display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap'}}>
              <Link to="/placement" style={{
                background: '#04AA6D', color: '#fff', borderRadius: 8,
                padding: '12px 32px', fontSize: 15, fontWeight: 700, textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}>
                Start Learning
              </Link>
              <a href="https://github.com/Raushan666java/ai-engineering-journey" style={{
                background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.8)',
                border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8,
                padding: '12px 32px', fontSize: 15, fontWeight: 600, textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}>
                GitHub
              </a>
            </div>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16,
              marginTop: '3rem', maxWidth: 600, margin: '3rem auto 0',
            }}>
              {stats.map((s) => (
                <div key={s.label} style={{
                  background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 8, padding: '1rem 0.5rem', textAlign: 'center',
                }}>
                  <div style={{fontSize: '1.5rem', fontWeight: 800, color: '#fff', lineHeight: 1.2}}>{s.value}</div>
                  <div style={{fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginTop: 4, textTransform: 'uppercase', letterSpacing: '0.05em'}}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Phases */}
        <section style={{padding: '4rem 1.5rem', maxWidth: 1100, margin: '0 auto'}}>
          <h2 style={{
            fontSize: '1.75rem', fontWeight: 800, textAlign: 'center',
            marginBottom: '0.5rem', letterSpacing: '-0.02em',
          }}>
            70-Week Learning Path
          </h2>
          <p style={{
            textAlign: 'center', color: 'var(--ifm-color-emphasis-600)',
            marginBottom: '2.5rem', fontSize: '1rem',
          }}>
            Structured progression from foundations to production AI.
          </p>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 12,
          }}>
            {phases.map((p) => (
              <div key={p.label} style={{
                border: `1px solid ${p.color}20`, borderRadius: 10, padding: '1rem',
                background: `${p.color}06`, transition: 'all 0.2s ease',
              }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 8, background: p.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontSize: 14, fontWeight: 700, marginBottom: '0.75rem',
                }}>
                  {p.weeks}
                </div>
                <div style={{fontWeight: 700, fontSize: '0.9rem', marginBottom: 4}}>{p.label}</div>
                <div style={{fontSize: '0.75rem', color: 'var(--ifm-color-emphasis-600)', lineHeight: 1.6}}>
                  {p.modules.join(' / ')}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Module Grid */}
        <section style={{
          padding: '4rem 1.5rem', maxWidth: 1100, margin: '0 auto',
          background: 'var(--ifm-color-emphasis-100)', borderRadius: 16, margin: '0 auto',
          maxWidth: 1100,
        }}>
          <h2 style={{
            fontSize: '1.75rem', fontWeight: 800, textAlign: 'center',
            marginBottom: '0.5rem', letterSpacing: '-0.02em',
          }}>
            24 Modules
          </h2>
          <p style={{
            textAlign: 'center', color: 'var(--ifm-color-emphasis-600)',
            marginBottom: '2rem', fontSize: '1rem',
          }}>
            Click any module to begin.
          </p>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 10,
          }}>
            {modules.map((m) => (
              <Link
                key={m.slug}
                to={`/${m.slug}`}
                style={{
                  border: '1px solid var(--ifm-color-emphasis-300)',
                  borderRadius: 8, padding: '0.85rem 1rem', textDecoration: 'none',
                  color: 'inherit', transition: 'all 0.15s ease',
                  background: 'var(--ifm-background-color)',
                  display: 'flex', alignItems: 'center', gap: 10,
                }}
              >
                <div style={{
                  width: 6, height: 6, borderRadius: '50%', background: m.color,
                  flexShrink: 0,
                }} />
                <div>
                  <div style={{fontWeight: 600, fontSize: '0.85rem', lineHeight: 1.3}}>
                    {m.label}
                  </div>
                  <div style={{fontSize: '0.7rem', color: 'var(--ifm-color-emphasis-600)', marginTop: 2}}>
                    {m.chapters} chapters
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{
          padding: '4rem 1.5rem', textAlign: 'center',
        }}>
          <h2 style={{fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.75rem', letterSpacing: '-0.02em'}}>
            Ready to Start?
          </h2>
          <p style={{
            color: 'var(--ifm-color-emphasis-600)', maxWidth: 500,
            margin: '0 auto 2rem', fontSize: '1rem',
          }}>
            Begin with Core Computer Science and work through all 24 modules.
          </p>
          <Link to="/00-foundations" style={{
            background: '#04AA6D', color: '#fff', borderRadius: 8,
            padding: '12px 32px', fontSize: 15, fontWeight: 700, textDecoration: 'none',
            transition: 'all 0.2s ease', display: 'inline-block',
          }}>
            Begin Module 00
          </Link>
        </section>
      </main>
    </Layout>
  );
}
