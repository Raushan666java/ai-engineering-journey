/**
 * Single source of truth for who this site belongs to.
 *
 * Fill in `email` and `linkedin` before sharing the link with a recruiter.
 * Any field left as an empty string is simply not rendered, so the page can
 * never ship a broken mailto: or a 404 social profile.
 */
export const profile = {
  name: 'Raushan Kumar',
  role: 'Backend engineer building measured LLM systems',
  location: 'Patna, Bihar, India',
  openTo: 'AI engineering, LLM application and backend roles',
  relocation: 'Bengaluru, Hyderabad, Pune, Delhi NCR, or remote',
  experienceYears: 3,
  github: 'https://github.com/Raushan666java',
  githubHandle: 'Raushan666java',

  // TODO: fill these two in. Nothing renders until you do.
  email: '',
  linkedin: '',

  resume: 'https://github.com/Raushan666java/ai-engineering-journey',
};

export const proof = [
  {
    value: '0.93',
    label: 'Recall@4',
    detail: 'Evaluated retrieval pipeline, 35 passing tests',
  },
  {
    value: '0.89',
    label: 'MRR',
    detail: 'Ranked retrieval, measured not guessed',
  },
  {
    value: '37x',
    label: 'cost reduction',
    detail: 'Per-conversation LLM spend, state machine rewrite',
  },
  {
    // Filled at render time from the measured corpus size (see ProofStrip).
    value: '',
    label: 'chapters',
    detail: 'Written while learning, published here',
  },
];
