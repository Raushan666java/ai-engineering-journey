import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: React.JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Complete Curriculum',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        24 modules covering Core CS, Python, ML, Deep Learning, LLMs, RAG, AI Agents, System Design, and more.
      </>
    ),
  },
  {
    title: 'Placement Focused',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        2,440+ interview Q&A, 975+ quiz questions, mock interviews, and FAANG company deep dives.
      </>
    ),
  },
  {
    title: 'Learn by Doing',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Hands-on projects, code examples, capstone projects, and portfolio building guidance.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): React.JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
