/**
 * Module 33 (`campus-placement`) is the one module in the placement course that
 * breaks the house rule: objectives, summary, takeaways, quiz and exercises are
 * missing from its teaching chapters. The content itself is solid - 16 quant
 * topics with formula boxes, 12 reasoning types, 10 verbal sections, 40 speed
 * rules - it just has no on-ramp and no way to check yourself.
 *
 * This adds the five sections to the five teaching chapters. Objectives go above
 * the first topic; the rest go at the end. Every quiz answer is checkable by
 * hand, and the answers sit behind a <details> block so the page does not spoil
 * itself.
 *
 * The mock papers (18-28) and the drill banks (15-17) are deliberately not given
 * a quiz: the paper is the quiz. `rule-gaps.mjs` exempts them with that reason.
 *
 *   node scripts/add-campus-placement-sections.mjs           # report
 *   node scripts/add-campus-placement-sections.mjs --write
 */
import fs from 'node:fs';
import path from 'node:path';

const WRITE = process.argv.includes('--write');
const SUB = path.join('docs', 'courses', 'ai-engineering-placement', '33-campus-placement');
const TREES = [
  {root: path.resolve('..'), label: 'source'},
  {root: path.resolve('.'), label: 'site'},
];

const CONTENT = {
  '10-aptitude-master-plan.md': {
    objectives: `## Learning Objectives

By the end of this plan you should be able to:

- Place your current preparation on the skill pyramid and name the layer you are actually stuck in, instead of "I am weak at aptitude".
- Run a 28-day schedule that covers quant, logical and verbal without deciding topic order every morning.
- Keep an error log that turns a wrong answer into a named cause, so the same mistake does not survive two mocks.
- Pick the next mock by company cut-off rather than by whatever looks interesting.
- Say what "ready" means for a specific company, in numbers, before you sit its test.
`,
    summary: `## Summary

This module is one 28-day plan, not a pile of tips. Work moves in a fixed order: formula recall first, then accuracy under no clock, then speed under a clock, then company-specific mocks. The error log is the engine - every wrong answer gets a cause, and the next day starts with the two or three causes that repeat. Cut-off tables in this chapter are approximate by design; the company portal is the only authority on its own band.`,
    takeaways: `## Practical Takeaways

- Do not study a topic you have not first tested. Take a 20-question mixed set, log the failures, then study only what failed.
- Recite the formula cards out loud before each session. Recall that takes effort is the recall that sticks.
- One mock per week for the first two weeks, two per week after that. More than that and you are practising the test, not the skill.
- Keep the error log on paper you can see, not in a file you have to open.
- Trust the cut-off table only until you have the company's own notification in hand.
`,
    quiz: `## Chapter Quiz

Five questions. Answer from memory.

1. You score 14/30 on a mixed set. What is the correct next action?
   - a) Re-read all three theory chapters cover to cover
   - b) Log the 16 failures by cause, then study the two causes that repeat most
   - c) Take another mixed set to see if it was a bad day
   - d) Start company-specific mocks immediately

2. In the four-week schedule, what changes in weeks 3 and 4?
   - a) The plan drops verbal entirely
   - b) Daily time doubles
   - c) Work shifts to speed under a clock plus company mocks
   - d) Theory is re-read from the start

3. The cut-off benchmarks in this chapter should be treated as…
   - a) Guaranteed pass marks
   - b) Approximate, and verified against each company's own notification
   - c) The same for every company
   - d) Irrelevant once you finish the syllabus

4. A topic feels weak but your error log shows only two mistakes in it across three mocks. What does the log imply?
   - a) The topic is your biggest risk and needs a week
   - b) The feeling is the bigger problem than the topic; keep it in rotation and do not rebuild it
   - c) Stop logging that topic
   - d) Take a full mock on that topic alone

5. "Ready" for a specific company means…
   - a) You have finished every chapter in this module
   - b) You scored above that company's approximate cut-off on a full-length timed paper, twice
   - c) You feel confident
   - d) You have memorised the cut-off table

<details>
<summary>Answers</summary>

1. **(b)** — 14/30 is a measurement, not a verdict. The log converts 16 failures into a small number of named causes; studying those is the only part that changes the next score.
2. **(c)** — Weeks 1-2 build the skill, weeks 3-4 buy speed and company familiarity.
3. **(b)** — They are planning targets. Any table of cut-offs drifts every cycle.
4. **(b)** — Feelings and evidence disagree; the log is the evidence. Rotate the topic, do not rebuild it.
5. **(b)** — Two timed full-length papers above the band, not one lucky run.

</details>
`,
    exercises: `## Exercises

1. Take a 20-question mixed set today, cold, no notes. Score it and write the count.
2. Build the error log this week from that set: one line per wrong answer, with a cause from a fixed list you invent (formula forgotten, misread, guessed, ran out of time).
3. List the three companies you will actually apply to, and copy their current cut-off from the company's own page next to each name.
4. Schedule 28 days on a calendar. Write the topic for each day, not "aptitude".
5. At the end of week 1, re-take an equivalent 20-question set and compare both the score and the causes. If the causes are the same, the plan is not being followed.
`,
  },

  '11-quantitative-all-topics.md': {
    objectives: `## Learning Objectives

- Recite the formula box for all sixteen quant topics without looking.
- Choose the shortcut a question is built for, and say why it is faster than the long method.
- Name the standard trap attached to each topic before answering.
- Convert a word problem into one equation, not three.
- Decide within fifteen seconds whether a question is worth attempting under time pressure.
`,
    summary: `## Summary

Sixteen topics, one formula box each. Percentages and ratios are the base layer: profit/loss, interest, mixtures and partnership are all expressed through them, so an hour spent on percentages pays back in four other topics. Speed-distance and time-work are the same rate equation read in different directions. Permutations and combinations differ only in whether order matters, and probability is counting done carefully. The traps are consistent: successive percentage changes do not add, average speed is not the average of speeds, and "at least one" is always computed as one minus none.`,
    takeaways: `## Practical Takeaways

- Never add successive percentages - use \`a + b + ab/100\`.
- Work and pipes are one equation: rates add, and a pipe that empties is a negative rate.
- Average speed over equal distances is the harmonic mean, never the arithmetic mean.
- For "at least one", compute \`1 - P(none)\`.
- Alligation gives the mixing ratio directly: \`(mean - cheaper) : (dearer - mean)\`.
- If a question needs more than two lines of algebra, there is a shortcut you have not recalled yet.
`,
    quiz: `## Chapter Quiz

Five questions, no calculator, six minutes.

1. A price rises 20% and then falls 20%. The net change is:
   - a) 0%
   - b) +4%
   - c) −4%
   - d) −2%

2. Twelve men finish a job in 8 days. How long do 8 men take, at the same rate?
   - a) 10 days
   - b) 12 days
   - c) 14 days
   - d) 16 days

3. Simple interest on ₹5,000 at 8% per annum for 3 years is:
   - a) ₹1,000
   - b) ₹1,200
   - c) ₹1,400
   - d) ₹1,500

4. Two varieties costing ₹30/kg and ₹45/kg are mixed to sell at ₹35/kg. The mixing ratio is:
   - a) 1 : 2
   - b) 2 : 1
   - c) 3 : 1
   - d) 1 : 3

5. A sum doubles in 8 years at simple interest. The rate per annum is:
   - a) 8%
   - b) 10%
   - c) 12.5%
   - d) 15%

<details>
<summary>Answers</summary>

1. **(c)** — \`20 + (−20) + (20 × −20)/100 = −4%\`. The two changes are taken on different bases, which is exactly the trap.
2. **(b)** — Work is constant: \`12 × 8 = 8 × d\`, so \`d = 12\` days.
3. **(b)** — \`SI = 5000 × 8 × 3 / 100 = 1200\`.
4. **(b)** — Alligation: \`(45 − 35) : (35 − 30) = 10 : 5 = 2 : 1\`.
5. **(c)** — Doubling means interest equals the principal: \`100 = r × 8\`, so \`r = 12.5%\`.

</details>
`,
    exercises: `## Exercises

1. Write all sixteen formula boxes from memory on one sheet. Anything you cannot reproduce is tomorrow's first task.
2. Take ten consecutive questions from one topic only and time them. Record minutes per question, not just the score.
3. For any question you got wrong, write the trap name (successive change, base change, equal-distance average, order-matters) next to it.
4. Solve five mixture questions with alligation only, no equations, then check with equations.
5. Take one "at least one" probability question and solve it twice: directly, and as \`1 − P(none)\`. Confirm both agree.
`,
  },

  '12-logical-all-types.md': {
    objectives: `## Learning Objectives

- Identify the reasoning type from the question stem in under ten seconds.
- Apply the standard method for each of the twelve types instead of improvising.
- Separate what a statement guarantees from what it merely allows.
- Draw the diagram before answering any seating, direction or blood-relation question.
- Recognise when a question cannot be answered from the data given, and say why.
`,
    summary: `## Summary

Twelve reasoning types, each with one method. Series and analogies are pattern recognition - find the rule on the first three terms before looking at the options. Syllogisms are set containment: a conclusion follows only if every arrangement satisfying the premises also satisfies it. Coding-decoding and blood relations are translation exercises, and translation is done on paper. Seating and direction questions are decided by the diagram, never by memory of the sentences. Data sufficiency asks whether the information is enough, not what the answer is - so never solve further than necessary.`,
    takeaways: `## Practical Takeaways

- Draw first. A seating or direction question answered without a sketch is a guess with formatting.
- In syllogisms, a conclusion using "some" cannot follow from premises that never connect the two terms.
- Extreme words in a conclusion or assumption - all, always, never, only - are usually wrong.
- For data sufficiency, stop the moment both statements together are enough; do not compute the number.
- In input-output and series questions, apply one transformation per step, then confirm it on the next step.
- Blood relations: convert every phrase into a family tree before answering.
`,
    quiz: `## Chapter Quiz

Five questions, eight minutes.

1. Premises: All roses are flowers. Some flowers fade quickly. Which conclusion follows?
   - a) Some roses fade quickly
   - b) All roses fade quickly
   - c) No rose fades quickly
   - d) None of these necessarily follows

2. In a code, PEN is written as RGP. How is CAP written?
   - a) ECR
   - b) DBR
   - c) FDS
   - d) BDP

3. Ravi said, "She is the daughter of my grandfather's only son." How is she related to Ravi?
   - a) Cousin
   - b) Aunt
   - c) Sister
   - d) Niece

4. Series: 2, 6, 12, 20, 30, ?
   - a) 36
   - b) 40
   - c) 42
   - d) 44

5. A man walks 5 km north, turns right and walks 3 km, then turns right and walks 5 km. How far is he from the start?
   - a) 3 km east
   - b) 3 km west
   - c) 5 km north
   - d) 8 km east

<details>
<summary>Answers</summary>

1. **(d)** — "Some flowers" need not include any rose. The two statements never connect roses to fading, so nothing follows.
2. **(a)** — Each letter moves two forward: P→R, E→G, N→P, so C→E, A→C, P→R.
3. **(c)** — Grandfather's only son is Ravi's father; his daughter is Ravi's sister.
4. **(c)** — Differences are 4, 6, 8, 10, so the next difference is 12; 30 + 12 = 42. Equivalently \`n(n+1)\`.
5. **(a)** — North 5 then south 5 cancels; the only surviving displacement is 3 km east.

</details>
`,
    exercises: `## Exercises

1. Draw the family tree for ten blood-relation questions from the drill bank before answering any of them.
2. Take five syllogisms and, for each, try to draw a case where the premises hold but the conclusion fails. That attempt is the answer.
3. Write the transformation rule for five number series, then verify each rule predicts the term after the last one given.
4. Do ten seating-arrangement questions using a grid on paper. Note how many you would have got wrong without the grid.
5. Take three data-sufficiency questions and time how long you spend computing an answer you did not need.
`,
  },

  '13-verbal-all-sections.md': {
    objectives: `## Learning Objectives

- Apply the high-frequency grammar rules that account for most error-spotting questions.
- Choose a synonym or antonym by meaning, not by how familiar the word looks.
- Rebuild a para jumble from its opening sentence and its connectors.
- Answer reading-comprehension questions from the passage, not from prior knowledge.
- Recognise the idioms that are asked repeatedly and their figurative meanings.
`,
    summary: `## Summary

Ten sections, one habit each. Grammar questions are decided by a small set of rules - subject-verb agreement with intervening phrases, pronoun reference, comparison completeness, and tense consistency - so learn the rules rather than the sentences. Vocabulary and synonym questions reward knowing the word's register, not just its dictionary gloss. Para jumbles are solved by finding the opener (no pronoun referring back) and the connectors (however, therefore). Reading comprehension is a search task: the answer is in the passage, and an option that needs outside knowledge is a distractor.`,
    takeaways: `## Practical Takeaways

- In error spotting, first ignore the phrase between the subject and its verb, then check agreement.
- "One of my friends is" - plural noun, singular verb. This shape is asked constantly.
- Double comparatives ("more better") and double negatives are always wrong.
- i before e except after c.
- In para jumbles, the sentence with no backward reference is the opener.
- For idioms, the figurative meaning is the answer; the literal reading is the trap.
`,
    quiz: `## Chapter Quiz

Five questions, six minutes.

1. Find the error: "One of my friend is coming to the interview."
   - a) One of
   - b) my friend
   - c) is coming
   - d) no error

2. Choose the word closest in meaning to **ubiquitous**:
   - a) Rare
   - b) Present everywhere
   - c) Temporary
   - d) Ambiguous

3. Which spelling is correct?
   - a) Acommodate
   - b) Accomodate
   - c) Accommodate
   - d) Acomodate

4. "To bite the bullet" means:
   - a) To speak rudely
   - b) To endure a painful situation bravely
   - c) To waste an opportunity
   - d) To eat quickly

5. In a para jumble, the sentence most likely to open the paragraph is the one that:
   - a) Contains "however"
   - b) Contains a pronoun referring to a previous noun
   - c) Introduces the subject with no backward reference
   - d) Is the longest

<details>
<summary>Answers</summary>

1. **(b)** — "One of" takes a plural noun: "one of my friends".
2. **(b)** — Ubiquitous means present everywhere.
3. **(c)** — Accommodate: double c, double m.
4. **(b)** — The idiom means enduring something painful with resolve.
5. **(c)** — An opener cannot refer backwards; connectors and pronouns mark later sentences.

</details>
`,
    exercises: `## Exercises

1. Take twenty error-spotting sentences and label each error with the rule it breaks. If a sentence has no label, you have not found the error.
2. Write ten words you did not know from the drill bank, with a sentence of your own for each.
3. Rebuild three para jumbles by first marking which sentences cannot be first, and why.
4. Do one reading-comprehension passage and, for every wrong option you were tempted by, write which line of the passage refutes it.
5. Recite the ten most-asked idioms from memory, then check.
`,
  },

  '14-speed-tricks-cheatsheet.md': {
    objectives: `## Learning Objectives

- Recall all forty speed rules without notes.
- Match a question to its rule in under five seconds.
- Use a rule only where it is valid, and fall back to the long method when it is not.
- Convert units (km/h to m/s, minutes to hours) without hesitating.
- Decide to skip a question that has no rule and would cost more than ninety seconds.
`,
    summary: `## Summary

Forty rules, grouped by topic. Their value is recall speed: each one removes a line of algebra from a question you already know how to solve, so the gain is time, not understanding. The risky ones are conditional - successive percentage change needs signed values, relative speed needs the same direction check, and alligation needs a common unit. Used correctly, they convert a sixty-question paper from "attempted 60%" to "attempted 95%"; used on the wrong shape, they produce confident wrong answers.`,
    takeaways: `## Practical Takeaways

- \`a\` then \`b\` percent is \`a + b + ab/100\`, with signs.
- \`36 km/h = 10 m/s\`. Halve-and-add for km/h to m/s: multiply by 5/18.
- Two people working together: \`1/a + 1/b\`, then invert. Never average the days.
- Alligation ratio: \`(dearer − mean) : (mean − cheaper)\`.
- Clock angle at \`h:m\` is \`|30h − 5.5m|\`.
- If no rule applies within five seconds, skip. A skipped question costs nothing; a half-solved one costs ninety seconds.
`,
    quiz: `## Chapter Quiz

Five questions, four minutes. Use the rules, not full algebra.

1. A value increases by 10% twice. The total increase is:
   - a) 20%
   - b) 21%
   - c) 22%
   - d) 19%

2. A 120 m train at 36 km/h passes a pole in:
   - a) 8 s
   - b) 10 s
   - c) 12 s
   - d) 15 s

3. A finishes a job in 10 days and B in 15 days. Working together they take:
   - a) 5 days
   - b) 6 days
   - c) 7 days
   - d) 12.5 days

4. LCM of two numbers is 12 and HCF is 2. If one number is 4, the other is:
   - a) 3
   - b) 6
   - c) 8
   - d) 24

5. The angle between the hands of a clock at 3:30 is:
   - a) 75°
   - b) 80°
   - c) 85°
   - d) 90°

<details>
<summary>Answers</summary>

1. **(b)** — \`10 + 10 + (10 × 10)/100 = 21%\`.
2. **(c)** — 36 km/h = 10 m/s, so \`120 / 10 = 12\` s.
3. **(b)** — \`1/10 + 1/15 = 1/6\`, so 6 days.
4. **(b)** — \`LCM × HCF = 12 × 2 = 24\`, and \`4 × other = 24\`, so 6.
5. **(a)** — \`|30 × 3 − 5.5 × 30| = |90 − 165| = 75°\`.

</details>
`,
    exercises: `## Exercises

1. Recite all forty rules in eight minutes, aloud, from memory. Note where you stall.
2. Take one question per rule group and solve it with the rule only; then verify with the long method.
3. Time yourself on twenty questions you have already solved. Speed on known questions is the only honest speed measure.
4. Write the three rules you misapplied most often, with the condition that makes them valid.
5. Sit one full paper applying the "skip after five seconds" rule strictly, and compare the attempted count to your previous attempt.
`,
  },
};

const headingAfterIntro = (body) => {
  // First "## " heading that is not inside a fence.
  let fence = null;
  const lines = body.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const fenceMatch = /^\s*(```|~~~)/.exec(lines[i]);
    if (fenceMatch) {
      if (!fence) fence = fenceMatch[1];
      else if (fenceMatch[1] === fence) fence = null;
      continue;
    }
    if (fence && /^##\s+/.test(lines[i])) continue;
    if (/^##\s+/.test(lines[i])) return i;
  }
  return -1;
};

let done = 0;

for (const tree of TREES) {
  const dir = path.join(tree.root, SUB);
  if (!fs.existsSync(dir)) continue;

  for (const [name, sections] of Object.entries(CONTENT)) {
    const file = path.join(dir, name);
    if (!fs.existsSync(file)) {
      console.log(`missing: ${file}`);
      continue;
    }
    const text = fs.readFileSync(file, 'utf8');
    if (text.includes('## Learning Objectives')) {
      console.log(`${tree.label.padEnd(6)} ${name.padEnd(34)} already has the sections`);
      continue;
    }

    const fm = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(text);
    if (!fm) continue;
    const head = fm[0];
    const body = text.slice(head.length);

    const at = headingAfterIntro(body);
    if (at === -1) {
      console.log(`${tree.label.padEnd(6)} ${name.padEnd(34)} no '## ' heading found, skipped`);
      continue;
    }

    const lines = body.split('\n');
    lines.splice(at, 0, sections.objectives.trimEnd(), '');

    let next = `${head}${lines.join('\n')}`.trimEnd();
    next += `\n\n${sections.summary.trimEnd()}\n\n${sections.takeaways.trimEnd()}\n\n${sections.quiz.trimEnd()}\n\n${sections.exercises.trimEnd()}\n`;

    done++;
    console.log(`${tree.label.padEnd(6)} ${name.padEnd(34)} objectives + summary + takeaways + quiz + exercises`);
    if (WRITE) fs.writeFileSync(file, next, 'utf8');
  }
}

console.log(`\nfiles updated: ${done}   mode: ${WRITE ? 'WRITE' : 'report'}`);
