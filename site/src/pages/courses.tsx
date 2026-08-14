import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import {courses, coursesByCategory, categoryColors} from '../data/courses';

export default function Courses(): React.JSX.Element {
  const grouped = coursesByCategory();
  return (
    <Layout
      title="All Courses"
      description={`Browse all ${courses.length} AI Engineering courses`}>
      <main style={{maxWidth: 1200, margin: '0 auto', padding: '2rem 1rem'}}>
        <h1 style={{textAlign: 'center', marginBottom: '0.5rem'}}>All Courses</h1>
        <p className="course-page-subtitle">
          {courses.length} courses across {grouped.length} categories
        </p>
        {grouped.map(({category, items}) => (
          <section key={category} className="course-section">
            <h2 className="course-category-title">{category}</h2>
            <div className="course-grid">
              {items.map(course => (
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
          </section>
        ))}
      </main>
    </Layout>
  );
}
