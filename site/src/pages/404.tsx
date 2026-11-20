import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import {courses, type Course} from '../data/courses';

/**
 * 404 page.
 *
 * The stock Docusaurus 404 is a dead end: one line of text and no way forward.
 * Every route on this site is a document, so the useful thing to offer is the
 * four entry points that most links actually target, plus a sample of course
 * roots — plus the note that the navbar search covers the full text of all
 * 1,419 pages.
 */

const ENTRIES = [
  {
    to: '/ai-engineering-placement/',
    title: 'Placement Course',
    detail: '24 modules, 224 chapters, interview drills',
  },
  {
    to: '/courses/',
    title: 'All Courses',
    detail: 'Every course on the site, grouped by category',
  },
  {
    to: '/',
    title: 'Home',
    detail: 'What this site is and where to start',
  },
  {
    to: '/about/',
    title: 'About',
    detail: 'Who maintains this and how to reach him',
  },
];

const POPULAR = [
  'ai-engineering-placement',
  'machine-learning',
  'artificial-intelligence',
  'data-structures',
  'algorithms',
  'system-design',
  'database-management-systems',
  'computer-networks',
];

export default function NotFound(): React.JSX.Element {
  const bySlug = new Map(courses.map((c) => [c.slug, c]));
  const popular = POPULAR.map((slug) => bySlug.get(slug)).filter(
    (course): course is Course => Boolean(course),
  );

  return (
    <Layout
      title="Page not found"
      description="This URL does not exist. Here are the entry points that do.">
      <main style={{maxWidth: 880, margin: '0 auto', padding: '3rem 1.25rem 4rem'}}>
        <p
          style={{
            fontFamily: 'var(--ifm-font-family-monospace)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontSize: '0.75rem',
            color: 'var(--ifm-color-emphasis-600)',
            marginBottom: '0.5rem',
          }}>
          404
        </p>
        <h1 style={{marginBottom: '0.75rem'}}>That page is not here</h1>
        <p style={{fontSize: '1.05rem', color: 'var(--ifm-color-emphasis-800)'}}>
          The URL may have changed when the site was reorganised. Every chapter
          now lives under its course route, for example{' '}
          <code>/ai-engineering-placement/03-data-structures-algorithms/…</code>.
        </p>
        <p style={{color: 'var(--ifm-color-emphasis-700)'}}>
          Press <kbd>Ctrl</kbd> + <kbd>K</kbd> (or click the search box in the
          navbar) to search the full text of all {courses.length} courses.
        </p>

        <h2 style={{marginTop: '2.5rem', fontSize: '1.15rem'}}>Start from a known page</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: '0.75rem',
            marginTop: '1rem',
          }}>
          {ENTRIES.map((entry) => (
            <Link
              key={entry.to}
              to={entry.to}
              style={{
                display: 'block',
                padding: '0.9rem 1rem',
                border: '1px solid var(--ifm-color-emphasis-300)',
                borderRadius: 8,
                textDecoration: 'none',
                color: 'inherit',
              }}>
              <strong style={{display: 'block', color: 'var(--ifm-color-primary)'}}>
                {entry.title}
              </strong>
              <span style={{fontSize: '0.85rem', color: 'var(--ifm-color-emphasis-700)'}}>
                {entry.detail}
              </span>
            </Link>
          ))}
        </div>

        <h2 style={{marginTop: '2.5rem', fontSize: '1.15rem'}}>Popular courses</h2>
        <ul style={{columns: '2 220px', marginTop: '0.75rem'}}>
          {popular.map((course) => (
            <li key={course.slug} style={{marginBottom: '0.35rem'}}>
              <Link to={`/${course.slug}/`}>{course.name}</Link>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}
