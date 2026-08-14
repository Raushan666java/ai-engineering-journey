import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';
import {courses, coursesByCategory, categoryColors} from '../data/courses';

const features = [
  {
    title: 'Complete Curriculum',
    description: '56 courses covering Core CS, Python, ML, Deep Learning, LLMs, RAG, AI Agents, System Design, and more.',
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

function AllCoursesSection() {
  const grouped = coursesByCategory();
  return (
    <section style={{padding: '2rem 0', maxWidth: 1100, margin: '0 auto'}}>
      <h2 style={{textAlign: 'center', marginBottom: '0.5rem'}}>All Courses</h2>
      <p style={{textAlign: 'center'}} className="course-page-subtitle">
        {courses.length} courses across {grouped.length} categories
      </p>
      {grouped.map(({category, items}) => (
        <div key={category} className="course-section">
          <h3 className="course-category-title">{category}</h3>
          <div className="course-grid">
            {items.map((course) => (
              <Link
                key={course.slug}
                to={`/${course.slug}`}
                className="course-card"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    categoryColors[category] || 'var(--ifm-color-primary)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    'var(--ifm-color-emphasis-300)';
                }}
              >
                {course.name}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </section>
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
        <AllCoursesSection />
      </main>
    </Layout>
  );
}
