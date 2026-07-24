import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const modules = [
  { slug: '00-foundations', label: 'Core CS', n: 5 },
  { slug: '01-python', label: 'Python', n: 14 },
  { slug: '02-sql-databases', label: 'SQL & Databases', n: 10 },
  { slug: '03-dsa', label: 'DSA', n: 18 },
  { slug: '04-git-linux', label: 'Git & Linux', n: 6 },
  { slug: '05-fastapi', label: 'FastAPI', n: 10 },
  { slug: '06-docker-k8s-cloud', label: 'Docker/K8s/Cloud', n: 10 },
  { slug: '07-system-design', label: 'System Design', n: 12 },
  { slug: '08-ml', label: 'Machine Learning', n: 10 },
  { slug: '09-deep-learning', label: 'Deep Learning', n: 10 },
  { slug: '10-nlp', label: 'NLP', n: 8 },
  { slug: '11-llms-prompt', label: 'LLMs & Prompt', n: 8 },
  { slug: '12-rag', label: 'RAG', n: 10 },
  { slug: '13-ai-agents', label: 'AI Agents', n: 10 },
  { slug: '14-fine-tuning', label: 'Fine-Tuning', n: 8 },
  { slug: '15-evaluation', label: 'Evaluation', n: 6 },
  { slug: '16-mlops', label: 'MLOps', n: 8 },
  { slug: '17-security', label: 'AI Security', n: 6 },
  { slug: '18-multimodal', label: 'Multimodal', n: 6 },
  { slug: '19-capstone', label: 'Capstone Projects', n: 5 },
  { slug: '20-portfolio', label: 'Portfolio', n: 6 },
  { slug: '21-interview', label: 'Interview Prep', n: 19 },
  { slug: '22-advanced-agents', label: 'Advanced Agents', n: 10 },
  { slug: '23-trending', label: 'Trending Platforms', n: 4 },
];

export default function Home(): React.JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <header style={{background: 'linear-gradient(135deg, #0f1219, #1a2332)', color: '#fff', padding: '5rem 1.5rem 4rem', textAlign: 'center'}}>
        <div style={{maxWidth: 700, margin: '0 auto'}}>
          <div style={{display: 'inline-block', background: 'rgba(4,170,109,0.15)', border: '1px solid rgba(4,170,109,0.3)', borderRadius: 20, padding: '6px 16px', fontSize: 13, fontWeight: 600, color: '#04AA6D', marginBottom: '1.5rem'}}>
            Backend + AI Engineer
          </div>
          <h1 style={{fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, margin: '0 0 1rem', lineHeight: 1.1, letterSpacing: '-0.03em'}}>
            AI Engineering Placement Course
          </h1>
          <p style={{fontSize: '1.1rem', color: 'rgba(255,255,255,0.65)', marginBottom: '2rem'}}>
            Zero to job-ready. 24 modules, 224+ chapters, 2,440+ interview Q&A.
          </p>
          <div style={{display: 'flex', gap: 12, justifyContent: 'center'}}>
            <Link to="/placement" style={{background: '#04AA6D', color: '#fff', borderRadius: 8, padding: '12px 28px', fontWeight: 700, textDecoration: 'none'}}>
              Start Learning
            </Link>
            <a href="https://github.com/Raushan666java/ai-engineering-journey" style={{background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8, padding: '12px 28px', color: 'rgba(255,255,255,0.8)', fontWeight: 600, textDecoration: 'none'}}>
              GitHub
            </a>
          </div>
        </div>
      </header>

      <section style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, maxWidth: 700, margin: '-1.5rem auto 0', padding: '0 1.5rem', position: 'relative', zIndex: 1}}>
        {[['24', 'Modules'], ['224+', 'Chapters'], ['2,440+', 'Interview Q&A'], ['975+', 'Quiz Questions']].map(([v, l]) => (
          <div key={l} style={{background: 'var(--ifm-background-color)', border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: 8, padding: '1rem', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)'}}>
            <div style={{fontSize: '1.5rem', fontWeight: 800, color: '#04AA6D'}}>{v}</div>
            <div style={{fontSize: '0.75rem', color: 'var(--ifm-color-emphasis-600)', textTransform: 'uppercase', letterSpacing: '0.05em'}}>{l}</div>
          </div>
        ))}
      </section>

      <section style={{padding: '4rem 1.5rem', maxWidth: 1100, margin: '0 auto'}}>
        <h2 style={{fontSize: '1.5rem', fontWeight: 800, textAlign: 'center', marginBottom: '2rem'}}>All 24 Modules</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 10}}>
          {modules.map((m) => (
            <Link key={m.slug} to={`/${m.slug}`} style={{border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: 8, padding: '0.85rem 1rem', textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: 10}}>
              <div style={{width: 6, height: 6, borderRadius: '50%', background: '#04AA6D', flexShrink: 0}} />
              <div>
                <div style={{fontWeight: 600, fontSize: '0.85rem'}}>{m.label}</div>
                <div style={{fontSize: '0.7rem', color: 'var(--ifm-color-emphasis-600)', marginTop: 2}}>{m.n} chapters</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
