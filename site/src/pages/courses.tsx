import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import {courses, coursesByCategory} from '../data/courses';
import {courseSizes, corpusSize} from '../data/chapter-counts';

export default function Courses(): React.JSX.Element {
  const grouped = coursesByCategory();
  return (
    <Layout
      title="All Courses"
      description={`All ${courses.length} courses and ${corpusSize.chapters.toLocaleString('en-US')} chapters in the AI Engineering Journey`}>
      <main style={{maxWidth: 1200, margin: '0 auto', padding: '2rem 1rem'}}>
        <h1 style={{textAlign: 'center', marginBottom: '0.5rem'}}>All Courses</h1>
        <p className="course-page-subtitle">
          {corpusSize.chapters.toLocaleString('en-US')} chapters across{' '}
          {courses.length} courses in {grouped.length} categories. Every chapter
          states what you should be able to do at the end of it.
        </p>
        {grouped.map(({category, items}) => (
          <section key={category} className="course-section">
            <h2 className="course-category-title">
              {category} <span className="course-category-count">{items.length}</span>
            </h2>
            <div className="course-grid">
              {items.map((course) => {
                const size = courseSizes[course.slug];
                return (
                  <Link
                    key={course.slug}
                    to={`/${course.slug}`}
                    className="course-card"
                    title={
                      size
                        ? `${size.chapters} chapters, about ${Math.round(size.words / 250).toLocaleString('en-US')} minutes of reading`
                        : course.name
                    }>
                    <span className="course-card-name">{course.name}</span>
                    {size ? (
                      <span className="course-card-meta">
                        {size.chapters} chapters
                      </span>
                    ) : null}
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </main>
    </Layout>
  );
}
