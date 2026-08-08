import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

const features = [
  {
    title: 'Complete Curriculum',
    description: '55 courses covering Core CS, Python, ML, Deep Learning, LLMs, RAG, AI Agents, System Design, and more.',
    link: '/courses',
  },
  {
    title: 'Placement Focused',
    description: '2,440+ interview Q&A, 975+ quiz questions, mock interviews, and FAANG company deep dives.',
    link: '/ai-engineering-placement',
  },
  {
    title: 'Learn by Doing',
    description: 'Hands-on projects, code examples, capstone projects, and portfolio building guidance.',
    link: '/courses',
  },
];

const featuredCourses = [
  { name: 'Python Programming', slug: 'python-programming' },
  { name: 'Machine Learning', slug: 'machine-learning' },
  { name: 'Applied AI', slug: 'applied-ai' },
  { name: 'LLMs & RAG', slug: 'modern-ai-engineering' },
  { name: 'System Design', slug: 'system-design' },
  { name: 'Data Structures', slug: 'data-structures' },
  { name: 'Interview Prep', slug: 'interview-preparation' },
  { name: 'AI Agent Engineer', slug: 'ai-agent-engineer' },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/ai-engineering-placement">
            Start Learning
          </Link>
        </div>
      </div>
    </header>
  );
}

function Feature({title, description, link}: {title: string; description: string; link: string}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md padding-vert--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link className="button button--primary button--sm" to={link}>Explore</Link>
      </div>
    </div>
  );
}

export default function Home(): React.JSX.Element {
  return (
    <Layout
      title="Home"
      description="AI Engineering Placement Course - Complete Preparation">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {features.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
        <section style={{padding: '2rem 0', maxWidth: 1000, margin: '0 auto'}}>
          <h2 style={{textAlign: 'center', marginBottom: '1rem'}}>Featured Courses</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.75rem', padding: '0 1rem'}}>
            {featuredCourses.map((course) => (
              <Link
                key={course.slug}
                to={`/${course.slug}`}
                style={{
                  display: 'block',
                  padding: '1rem',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: '#1a1a1a',
                  transition: 'border-color 0.2s, box-shadow 0.2s'
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.borderColor = '#059669';
                  (e.target as HTMLElement).style.boxShadow = '0 2px 8px rgba(5,150,105,0.15)';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.borderColor = '#e2e8f0';
                  (e.target as HTMLElement).style.boxShadow = 'none';
                }}
              >
                <strong>{course.name}</strong>
              </Link>
            ))}
          </div>
          <div style={{textAlign: 'center', marginTop: '1.5rem'}}>
            <Link className="button button--primary button--lg" to="/courses">
              Browse All 55 Courses
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
