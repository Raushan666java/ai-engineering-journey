import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useColorMode} from '@docusaurus/theme-common';

const modules = [
  { slug: '00-foundations', label: 'Core CS', chapters: 5 },
  { slug: '01-python', label: 'Python', chapters: 14 },
  { slug: '02-sql-databases', label: 'SQL & Databases', chapters: 10 },
  { slug: '03-dsa', label: 'Data Structures & Algorithms', chapters: 18 },
  { slug: '04-git-linux', label: 'Git & Linux', chapters: 6 },
  { slug: '05-fastapi', label: 'FastAPI & APIs', chapters: 10 },
  { slug: '06-docker-k8s-cloud', label: 'Docker, K8s & Cloud', chapters: 10 },
  { slug: '07-system-design', label: 'System Design', chapters: 12 },
  { slug: '08-ml', label: 'Machine Learning', chapters: 10 },
  { slug: '09-deep-learning', label: 'Deep Learning', chapters: 10 },
  { slug: '10-nlp', label: 'Natural Language Processing', chapters: 8 },
  { slug: '11-llms-prompt', label: 'LLMs & Prompt Engineering', chapters: 8 },
  { slug: '12-rag', label: 'Retrieval-Augmented Generation', chapters: 10 },
  { slug: '13-ai-agents', label: 'AI Agents', chapters: 10 },
  { slug: '14-fine-tuning', label: 'Fine-Tuning & LoRA', chapters: 8 },
  { slug: '15-evaluation', label: 'Evaluation & Observability', chapters: 6 },
  { slug: '16-mlops', label: 'MLOps', chapters: 8 },
  { slug: '17-security', label: 'AI Security & Guardrails', chapters: 6 },
  { slug: '18-multimodal', label: 'Multimodal AI', chapters: 6 },
  { slug: '19-capstone', label: 'Capstone Projects', chapters: 5 },
  { slug: '20-portfolio', label: 'Portfolio & Blog', chapters: 6 },
  { slug: '21-interview', label: 'Interview Mastery', chapters: 19 },
  { slug: '22-advanced-agents', label: 'Advanced AI Agents', chapters: 10 },
  { slug: '23-trending', label: 'Trending Platforms', chapters: 4 },
];

const stats = [
  { value: '24', label: 'Modules' },
  { value: '224+', label: 'Chapters' },
  { value: '2,440+', label: 'Interview Q&A' },
  { value: '975+', label: 'Quiz Questions' },
];

export default function Home(): React.JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  const {colorMode} = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <main>
        {/* Hero */}
        <section style={{
          background: isDark
            ? 'linear-gradient(135deg, #0d1117 0%, #161b22 100%)'
            : 'linear-gradient(135deg, #f8faf9 0%, #e8f5e9 100%)',
          padding: '5rem 1.5rem 4rem',
          textAlign: 'center',
        }}>
          <div style={{maxWidth: 720, margin: '0 auto'}}>
            <div style={{
              display: 'inline-block',
              background: 'rgba(4,170,109,0.1)',
              border: '1px solid rgba(4,170,109,0.2)',
              borderRadius: 20,
              padding: '6px 16px',
              fontSize: 13,
              fontWeight: 600,
              color: '#04AA6D',
              marginBottom: '1.5rem',
            }}>
              Backend + AI Engineer
            </div>
            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              margin: '0 0 1rem',
              letterSpacing: '-0.03em',
              border: 'none',
              padding: 0,
            }}>
              AI Engineering Placement Course
            </h1>
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--ifm-color-emphasis-600)',
              lineHeight: 1.7,
              marginBottom: '2rem',
            }}>
              Zero to job-ready in 12 months. 24 subjects, 224+ chapters, 2,440+ interview questions.
            </p>
            <div style={{display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap'}}>
              <Link to="/placement" style={{
                background: '#04AA6D',
                color: '#fff',
                borderRadius: 8,
                padding: '12px 32px',
                fontSize: 15,
                fontWeight: 700,
                textDecoration: 'none',
              }}>
                Start Learning
              </Link>
              <a href="https://github.com/Raushan666java/ai-engineering-journey" style={{
                background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)',
                color: isDark ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.7)',
                border: `1px solid ${isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)'}`,
                borderRadius: 8,
                padding: '12px 32px',
                fontSize: 15,
                fontWeight: 600,
                textDecoration: 'none',
              }}>
                GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section style={{
          padding: '3rem 1.5rem',
          maxWidth: 800,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 16,
        }}>
          {stats.map((s) => (
            <div key={s.label} style={{textAlign: 'center'}}>
              <div style={{fontSize: '1.75rem', fontWeight: 800, color: '#04AA6D'}}>{s.value}</div>
              <div style={{
                fontSize: '0.8rem',
                color: 'var(--ifm-color-emphasis-600)',
                marginTop: 4,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}>{s.label}</div>
            </div>
          ))}
        </section>

        {/* Module Grid */}
        <section style={{
          padding: '3rem 1.5rem 4rem',
          maxWidth: 1100,
          margin: '0 auto',
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 800,
            textAlign: 'center',
            marginBottom: '0.5rem',
          }}>
            All 24 Modules
          </h2>
          <p style={{
            textAlign: 'center',
            color: 'var(--ifm-color-emphasis-600)',
            marginBottom: '2rem',
          }}>
            Click any module to begin.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: 10,
          }}>
            {modules.map((m) => (
              <Link
                key={m.slug}
                to={`/${m.slug}`}
                style={{
                  border: '1px solid var(--ifm-color-emphasis-300)',
                  borderRadius: 8,
                  padding: '0.85rem 1rem',
                  textDecoration: 'none',
                  color: 'inherit',
                  background: 'var(--ifm-background-color)',
                  transition: 'border-color 0.15s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                }}
              >
                <div style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: '#04AA6D',
                  flexShrink: 0,
                }} />
                <div>
                  <div style={{fontWeight: 600, fontSize: '0.85rem'}}>
                    {m.label}
                  </div>
                  <div style={{
                    fontSize: '0.7rem',
                    color: 'var(--ifm-color-emphasis-600)',
                    marginTop: 2,
                  }}>
                    {m.chapters} chapters
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
