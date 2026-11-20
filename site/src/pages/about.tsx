import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './about.module.css';
import {profile, proof} from '../data/profile';

function ContactRow({
  label,
  value,
  href,
}: {
  label: string;
  value?: string;
  href?: string;
}) {
  if (!value) return null;
  return (
    <div className={styles.contactRow}>
      <span className={styles.contactLabel}>{label}</span>
      {href ? (
        <a href={href} target="_blank" rel="noreferrer">
          {value}
        </a>
      ) : (
        <span>{value}</span>
      )}
    </div>
  );
}

export default function About(): React.JSX.Element {
  return (
    <Layout
      title="About Raushan Kumar"
      description={`${profile.name} - ${profile.role}. Three years of production backend engineering, now building and measuring LLM systems.`}>
      <main className={styles.page}>
        <header className={styles.hero}>
          <p className={styles.eyebrow}>About</p>
          <h1 className={styles.name}>{profile.name}</h1>
          <p className={styles.role}>{profile.role}</p>
          <p className={styles.location}>
            {profile.location} · open to {profile.relocation}
          </p>
        </header>

        <section className={styles.section}>
          <h2>What I actually do</h2>
          <p>
            I have spent {profile.experienceYears} years writing production PHP and
            Laravel at a small product company in Patna — payment integrations,
            WhatsApp Business APIs, queue workers, MySQL that had to stay fast under
            real traffic.
          </p>
          <p>
            Then I started building LLM systems, and the interesting part was not the
            prompt. It was the engineering around it: chunking that survives contact
            with a real document, retrieval you can measure, refusal behaviour when
            the context does not contain the answer, and a cost number per
            conversation that a finance team would accept.
          </p>
          <p>
            That is the work I want to be hired for — not &ldquo;I used an LLM&rdquo;,
            but <em>I built one, measured it, and can tell you what it costs</em>.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Numbers, because claims are cheap</h2>
          <div className={styles.statGrid}>
            {proof.map((item) => (
              <div key={item.label} className={styles.stat}>
                <div className={styles.statValue}>{item.value}</div>
                <div className={styles.statLabel}>{item.label}</div>
                <div className={styles.statDetail}>{item.detail}</div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>Why this site exists</h2>
          <p>
            Every chapter here was written while learning the thing it explains.
            Nothing was generated and left unchecked — the chapters carry worked
            examples, quizzes and exercises because that is how the material
            survived in my own head.
          </p>
          <p>
            It started as private notes for a placement switch and turned into
            59 courses covering core CS, Python, SQL, machine learning, RAG, LLM
            applications, agents and system design. If it helps you get an offer,
            that is the point.
          </p>
          <p>
            <Link to="/ai-engineering-placement">Start with the placement course</Link>{' '}
            or{' '}
            <Link to="/courses">browse all 59 courses</Link>.
          </p>
        </section>

        <section className={styles.section}>
          <h2>What I am looking for</h2>
          <p>
            {profile.openTo} at product companies, BFSI technology teams or bank GCCs.
            Relocation: {profile.relocation}. Available immediately.
          </p>
        </section>

        <section className={styles.section} id="contact">
          <h2>Contact</h2>
          <p>
            The fastest route is GitHub — every project mentioned above is public
            and runnable.
          </p>
          <div className={styles.contactCard}>
            <ContactRow
              label="GitHub"
              value={`github.com/${profile.githubHandle}`}
              href={profile.github}
            />
            <ContactRow label="Email" value={profile.email} href={profile.email ? `mailto:${profile.email}` : undefined} />
            <ContactRow label="LinkedIn" value={profile.linkedin?.replace('https://www.', '')} href={profile.linkedin || undefined} />
            <ContactRow label="Location" value={profile.location} />
          </div>
        </section>
      </main>
    </Layout>
  );
}
