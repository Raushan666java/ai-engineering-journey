import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import {courses} from '../data/courses';
import {profile, proof} from '../data/profile';
import styles from './index.module.css';

const startHere = [
  {
    step: '01',
    title: 'Core CS foundation',
    detail: 'Architecture, OS, networks, DB internals — the vocabulary every interview assumes.',
    to: '/ai-engineering-placement/00-core-computer-science/',
  },
  {
    step: '02',
    title: 'Python for engineers',
    detail: 'Types, generators, decorators, concurrency, pandas. Not a beginner tutorial.',
    to: '/ai-engineering-placement/01-python-programming/',
  },
  {
    step: '03',
    title: 'SQL that survives the test',
    detail: 'Joins, CTEs, window functions, indexes. This is the round that filters most people.',
    to: '/ai-engineering-placement/02-sql-and-databases/',
  },
  {
    step: '04',
    title: 'LLMs, RAG, agents',
    detail: 'Embeddings and chunking through to evaluated retrieval and cost-per-request.',
    to: '/ai-engineering-placement/12-rag-vector-databases/',
  },
];

const featured = [
  {
    name: 'AI Engineering Placement',
    slug: 'ai-engineering-placement',
    blurb: 'The full 24-module path: CS core to production LLM systems, with interview banks.',
  },
  {
    name: 'Python Programming',
    slug: 'python-programming',
    blurb: 'From syntax to numpy, pandas and concurrency, with runnable examples.',
  },
  {
    name: 'Machine Learning',
    slug: 'machine-learning',
    blurb: 'Regression to ensembles, evaluated properly. The maths interviewers actually ask.',
  },
  {
    name: 'System Design',
    slug: 'system-design',
    blurb: 'Caching, queues, CAP, and five worked designs from URL shortener to ChatGPT.',
  },
  {
    name: 'AI Agent Engineer',
    slug: 'ai-agent-engineer',
    blurb: 'A 12-week build plan: FastAPI, LangGraph, MCP, evaluation, deployment.',
  },
  {
    name: 'Laravel',
    slug: 'laravel',
    blurb: 'The backend stack I ship in production — queues, testing, deployment.',
  },
];

function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroInner}>
        <p className={styles.eyebrow}>
          By {profile.name} · Backend + AI engineer
        </p>
        <h1 className={styles.heroTitle}>AI Engineering Journey</h1>
        <p className={styles.heroSubtitle}>
          {courses.length} courses and 1,400+ chapters on the path from backend
          developer to AI engineer. Written while learning the material, published
          as I go.
        </p>
        <div className={styles.heroActions}>
          <Link className={styles.primaryCta} to="/ai-engineering-placement">
            Start with week 1
          </Link>
          <Link className={styles.secondaryCta} to="/courses">
            All {courses.length} courses
          </Link>
          <Link className={styles.textCta} to="/about">
            About me →
          </Link>
        </div>
      </div>
    </header>
  );
}

function ProofStrip() {
  return (
    <div className={styles.proofStrip}>
      {proof.map((item) => (
        <div key={item.label} className={styles.proofItem}>
          <span className={styles.proofValue}>{item.value}</span>
          <span className={styles.proofLabel}>{item.label}</span>
        </div>
      ))}
    </div>
  );
}

function StartHere() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHead}>
        <h2>Where to begin</h2>
        <p>
          Four steps, in this order. Skipping step 3 is the most common reason people
          fail the technical round.
        </p>
      </div>
      <div className={styles.pathGrid}>
        {startHere.map((item) => (
          <Link key={item.step} to={item.to} className={styles.pathCard}>
            <span className={styles.pathStep}>{item.step}</span>
            <span className={styles.pathTitle}>{item.title}</span>
            <span className={styles.pathDetail}>{item.detail}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Featured() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHead}>
        <h2>Featured courses</h2>
        <p>
          The six that get used most. The rest are on{' '}
          <Link to="/courses">the course index</Link>.
        </p>
      </div>
      <div className={styles.featuredGrid}>
        {featured.map((course) => (
          <Link key={course.slug} to={`/${course.slug}`} className={styles.featuredCard}>
            <span className={styles.featuredName}>{course.name}</span>
            <span className={styles.featuredBlurb}>{course.blurb}</span>
            <span className={styles.featuredArrow}>→</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function HireBand() {
  return (
    <section className={styles.hireBand}>
      <div>
        <h2>Hiring for an AI or backend role?</h2>
        <p>
          {profile.experienceYears} years of production Laravel, and LLM systems I can
          measure. Every project mentioned here is public and runnable.
        </p>
      </div>
      <Link className={styles.hireCta} to="/about#contact">
        See what I built →
      </Link>
    </section>
  );
}

export default function Home(): React.JSX.Element {
  return (
    <Layout
      title="AI Engineering Journey — 1,400+ chapters on backend + AI engineering"
      description={`${profile.name}: ${courses.length} courses and 1,400+ chapters covering Python, SQL, machine learning, RAG, LLM applications, agents and system design.`}>
      <Hero />
      <main className={styles.main}>
        <ProofStrip />
        <StartHere />
        <Featured />
      </main>
      <HireBand />
    </Layout>
  );
}
