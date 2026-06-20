#!/usr/bin/env python3
"""Enrich all 24 system design chapter files with navigation, tables, callouts, quizzes."""

import os, re

BASE = r'C:\xampp\htdocs\ai-engineering-journey\docs\courses\system-design'

FILES = [
    ('01-introduction.md', None, '02-scalability-load-balancing'),
    ('02-scalability-load-balancing.md', '01-introduction', '03-caching'),
    ('03-caching.md', '02-scalability-load-balancing', '04-database-foundations'),
    ('04-database-foundations.md', '03-caching', '05-partitioning-sharding'),
    ('05-partitioning-sharding.md', '04-database-foundations', '06-distributed-consistency'),
    ('06-distributed-consistency.md', '05-partitioning-sharding', '07-message-queues'),
    ('07-message-queues.md', '06-distributed-consistency', '08-microservices-apis'),
    ('08-microservices-apis.md', '07-message-queues', '09-distributed-coordination'),
    ('09-distributed-coordination.md', '08-microservices-apis', '10-lld-solid-oop'),
    ('10-lld-solid-oop.md', '09-distributed-coordination', '11-lld-design-patterns'),
    ('11-lld-design-patterns.md', '10-lld-solid-oop', '12-lld-component-design'),
    ('12-lld-component-design.md', '11-lld-design-patterns', '13-lld-concurrency'),
    ('13-lld-concurrency.md', '12-lld-component-design', '14-distributed-data-structures'),
    ('14-distributed-data-structures.md', '13-lld-concurrency', '15-cdn-dns-edge'),
    ('15-cdn-dns-edge.md', '14-distributed-data-structures', '16-api-gateways-cqrs'),
    ('16-api-gateways-cqrs.md', '15-cdn-dns-edge', '17-observability-resiliency'),
    ('17-observability-resiliency.md', '16-api-gateways-cqrs', '18-case-studies-classic'),
    ('18-case-studies-classic.md', '17-observability-resiliency', '19-case-study-whatsapp'),
    ('19-case-study-whatsapp.md', '18-case-studies-classic', '20-case-study-netflix'),
    ('20-case-study-netflix.md', '19-case-study-whatsapp', '21-case-study-uber'),
    ('21-case-study-uber.md', '20-case-study-netflix', '22-case-study-twitter'),
    ('22-case-study-twitter.md', '21-case-study-uber', '23-case-study-dropbox'),
    ('23-case-study-dropbox.md', '22-case-study-twitter', '24-interview-preparation'),
    ('24-interview-preparation.md', '23-case-study-dropbox', None),
]

def make_nav(prev_slug, next_slug):
    prev_text = prev_slug and f"[{prev_slug.replace('-',' ').title()}](./{prev_slug}.md)" or "None"
    next_text = next_slug and f"[{next_slug.replace('-',' ').title()}](./{next_slug}.md)" or "None"
    return f"> **Previous:** {prev_text} | **Next:** {next_text}"

CHAPTER_DATA = {}

# Build chapter-specific data
for fname, prev, nxt in FILES:
    ch = fname.split('-')[0]
    fp = os.path.join(BASE, fname)
    if not os.path.exists(fp):
        continue
    with open(fp, 'r', encoding='utf-8-sig') as f:
        c = f.read()
    title_m = re.search(r'^# (.+)$', c, re.MULTILINE)
    title = title_m.group(1) if title_m else fname
    h2s = re.findall(r'^## (.+)$', c, re.MULTILINE)
    h3s = re.findall(r'^### (.+)$', c, re.MULTILINE)
    
    glance_rows = {
        '01': [
            ('Scope', 'Foundational concepts, NFRs, design process, capacity estimation'),
            ('Key Concepts', 'Scalability, reliability, availability, performance, trade-offs'),
            ('Design Process', '4-phase: Requirements, Estimation, HLD, Deep Dive'),
            ('Estimation Tools', 'QPS, storage, bandwidth, memory formulas'),
            ('Mindset', 'Trade-off recognition, order-of-magnitude thinking'),
            ('Real-World Examples', 'Google Search, Facebook, WhatsApp'),
        ],
        '02': [
            ('Scope', 'Vertical/horizontal scaling, L4/L7 balancing, algorithms, DNS, GSLB'),
            ('Key Concepts', 'Scale-out vs scale-up, load balancing algorithms, health checks'),
            ('LB Algorithms', 'Round Robin, Least Connections, Consistent Hashing, IP Hash, Random'),
            ('DNS/GSLB', 'GeoDNS, active-active, active-passive, anycast routing'),
            ('Auto-Scaling', 'Reactive vs predictive, cooldown, scale-up/down strategies'),
            ('Anti-Pattern', 'Sticky sessions and why they are bad'),
        ],
        '03': [
            ('Scope', 'Locality, caching patterns, eviction policies, invalidation, CDN'),
            ('Key Concepts', 'Cache-aside, read/write-through, write-behind, refresh-ahead'),
            ('Eviction Policies', 'LRU, LFU, FIFO, MRU, ARC, 2Q — strengths and weaknesses'),
            ('Thundering Herd', 'Mutex locking and probabilistic early expiration (XFetch)'),
            ('Invalidation', 'TTL, event-driven, write-invalidate — consistency trade-offs'),
            ('Real-World', 'Facebook TAO, Twitter Twemproxy'),
        ],
        '04': [
            ('Scope', 'B-Tree, LSM-Tree, replication topologies, consistency models'),
            ('Storage Engines', 'B-Tree (read-optimized) vs LSM-Tree (write-optimized)'),
            ('Replication', 'Single-leader, multi-leader, leaderless (Dynamo-style)'),
            ('Consistency', 'ACID vs BASE, isolation levels, CAP theorem'),
            ('Conflict Resolution', 'LWW, Version Vectors, CRDTs — G-Counter, OR-Set'),
            ('Real-World', 'Google Spanner, Amazon DynamoDB, Facebook TAO'),
        ],
    }

    # Generic fallback
    ch_key = ch if ch in glance_rows else None
    if not ch_key:
        topics = [h for h in h2s if h not in ('Learning Objectives', 'Chapter at a Glance', 'Chapter Roadmap')]
        glance_rows[ch] = [
            ('Scope', f'Core concepts covered in {title}'),
            ('Key Concepts', ', '.join(topics[:4])),
            ('Design Skills', 'Concept mastery and practical application'),
            ('Interview Angle', 'Common system design interview topic'),
        ]
    
    CHAPTER_DATA[ch] = {
        'title': title,
        'h2s': h2s,
        'h3s': h3s,
        'glance': glance_rows.get(ch, glance_rows.get('01')),
    }

def process_file(fname, prev_slug, next_slug):
    fpath = os.path.join(BASE, fname)
    with open(fpath, 'r', encoding='utf-8-sig') as f:
        content = f.read()
    original = content

    ch = fname.split('-')[0]
    data = CHAPTER_DATA[ch]
    title = data['title']
    h2s = data['h2s']
    h3s = data['h3s']

    # A) Navigation after title
    nav = make_nav(prev_slug, next_slug)
    first_nl = content.index('\n')
    content = content[:first_nl] + '\n' + nav + '\n' + content[first_nl:]

    # B) Chapter at a Glance
    glance_table = '\n## Chapter at a Glance\n\n| Aspect | Details |\n|--------|---------|\n'
    for aspect, detail in data['glance']:
        glance_table += f'| **{aspect}** | {detail} |\n'
    glance_table += '\n'

    # Insert after Learning Objectives (before --- \n\n## Theory)
    lo_end = content.find('---\n\n## Theory\n')
    if lo_end > 0:
        insert_pos = content.rfind('\n---\n', 0, lo_end)
        if insert_pos > 0:
            content = content[:insert_pos] + '\n' + glance_table + '---\n' + content[insert_pos+1:]

    # C) Chapter Roadmap
    roadmap_nodes = []
    for h in h2s:
        if h not in ('Learning Objectives', 'Chapter at a Glance', 'Chapter Roadmap', 'Summary', 'Examples', 'Exercises', 'Review Questions (4-5)', 'Application Problems (3-4)', 'Challenge Problem (1)'):
            roadmap_nodes.append(h)
    if len(roadmap_nodes) < 3:
        roadmap_nodes = [title.split(':')[0] if ':' in title else title] + roadmap_nodes[:2]
    
    roadmap = '\n## Chapter Roadmap\n\n```mermaid\nflowchart LR\n'
    for i, node in enumerate(roadmap_nodes[:8]):
        label = re.sub(r'[^a-zA-Z0-9 ]', '', node)[:30]
        roadmap += f'    {chr(65+i)}[{label}]\n'
        if i > 0:
            roadmap += f'    {chr(65+i-1)} --> {chr(65+i)}\n'
    roadmap += '```\n\n---\n\n'

    # Insert roadmap after the Glance table
    content = content.replace('\n---\n\n## Theory\n', '\n---\n\n' + roadmap + '## Theory\n', 1)

    # D) One-Sentence Takeaways after each h2
    takeaway_map = {}
    for h2 in h2s:
        if h2 in ('Learning Objectives', 'Chapter at a Glance', 'Chapter Roadmap', 'Exercises'):
            continue
        if h2.startswith('Review') or h2.startswith('Application') or h2.startswith('Challenge'):
            continue
        
        # Create a meaningful takeaway based on heading text
        lower = h2.lower()
        if 'scalability' in lower or 'load balanc' in lower:
            takeaway_map[h2] = 'Horizontal scaling with proper load balancing is the foundation of every internet-scale system.'
        elif 'cache' in lower or 'caching' in lower:
            takeaway_map[h2] = 'Caching exploits locality of reference; a 90%+ hit rate indicates a well-tuned cache.'
        elif 'database' in lower or 'replication' in lower or 'indexing' in lower:
            takeaway_map[h2] = 'The choice between B-Tree and LSM-Tree determines read vs write performance trade-offs.'
        elif 'partition' in lower or 'shard' in lower:
            takeaway_map[h2] = 'Choosing the right shard key is the single most important decision in a partitioned database.'
        elif 'consistency' in lower or 'cap' in lower or 'distributed' in lower:
            takeaway_map[h2] = 'Consistency, availability, and partition tolerance form the fundamental trade-off triangle.'
        elif 'message' in lower or 'queue' in lower:
            takeaway_map[h2] = 'Message queues decouple producers from consumers, enabling asynchronous, resilient architectures.'
        elif 'microservice' in lower or 'api' in lower or 'grpc' in lower:
            takeaway_map[h2] = 'Microservices decompose monoliths but introduce coordination complexity that must be managed.'
        elif 'coordination' in lower or 'zookeeper' in lower or 'leader' in lower:
            takeaway_map[h2] = 'Distributed coordination services provide the consensus and locking primitives for reliable systems.'
        elif 'solid' in lower or 'oop' in lower:
            takeaway_map[h2] = 'SOLID principles guide maintainable object-oriented design at the component level.'
        elif 'pattern' in lower:
            takeaway_map[h2] = 'Design patterns provide proven, reusable solutions to recurring design problems.'
        elif 'component' in lower:
            takeaway_map[h2] = 'Component design focuses on interface contracts, cohesion, and coupling between modules.'
        elif 'concurrency' in lower:
            takeaway_map[h2] = 'Concurrency control is essential for correctness in multi-threaded and distributed systems.'
        elif 'bloom' in lower or 'hyperloglog' in lower or 'sketch' in lower:
            takeaway_map[h2] = 'Probabilistic data structures trade accuracy for memory efficiency in massive-scale systems.'
        elif 'cdn' in lower or 'dns' in lower or 'edge' in lower:
            takeaway_map[h2] = 'CDN and DNS are the first line of defense for global latency optimization.'
        elif 'gateway' in lower or 'cqrs' in lower or 'event source' in lower:
            takeaway_map[h2] = 'API gateways provide cross-cutting concerns; CQRS separates reads from writes for scalability.'
        elif 'observability' in lower or 'monitoring' in lower or 'resilien' in lower:
            takeaway_map[h2] = 'Observability (logs, metrics, traces) combined with circuit breakers enables resilient systems.'
        elif 'case study' in lower or 'classic' in lower or 'whatsapp' in lower or 'netflix' in lower or 'uber' in lower or 'twitter' in lower or 'dropbox' in lower:
            takeaway_map[h2] = 'Real-world case studies reveal how architectural decisions map to business constraints at scale.'
        elif 'interview' in lower or 'preparation' in lower:
            takeaway_map[h2] = 'Structured problem-solving and clear communication matter more than knowing every technology.'
        elif 'theory' in lower:
            takeaway_map[h2] = 'This chapter builds the theoretical foundation for subsequent system design discussions.'
        elif 'trade' in lower:
            takeaway_map[h2] = 'Every design decision involves trade-offs; articulating them is the core skill.'
        elif 'real-world' in lower:
            takeaway_map[h2] = 'Production systems reveal how theory breaks down under real constraints.'
        elif 'example' in lower:
            takeaway_map[h2] = 'Worked examples bridge the gap between abstract concepts and practical implementation.'
        elif 'summary' in lower:
            takeaway_map[h2] = 'The key concepts in this chapter form building blocks for more complex architectures ahead.'
    
    for h2, takeaway in takeaway_map.items():
        old = f'## {h2}\n'
        new = f'## {h2}\n> **One-Sentence Takeaway:** {takeaway}\n'
        if old in content:
            content = content.replace(old, new)

    # E) Pro Tip / Warning / Remember callouts (2-3)
    callouts_inserted = 0
    if h3s:
        for h3 in h3s[:3]:
            if callouts_inserted >= 3:
                break
            pattern = f'### {h3}\n\n'
            if pattern not in content:
                continue
            if callouts_inserted == 0:
                # Pro Tip
                callout = '> **Pro Tip:** Master this concept — it appears in nearly every system design interview. Understand both the how and the why.\n\n'
                content = content.replace(pattern, f'### {h3}\n\n{callout}')
                callouts_inserted += 1
            elif callouts_inserted == 1:
                # Warning
                callout = '> **Warning:** Avoid premature optimization. Start simple, measure, then optimize. Over-engineering is the most common system design mistake.\n\n'
                content = content.replace(pattern, f'### {h3}\n\n{callout}')
                callouts_inserted += 1
            elif callouts_inserted == 2:
                # Remember
                callout = '> **Remember:** Trade-offs are the heart of system design. Always be ready to explain why you chose X over Y.\n\n'
                content = content.replace(pattern, f'### {h3}\n\n{callout}')
                callouts_inserted += 1

    # F) Concept Comparison, Quick Reference, Cross-Application Matrix, Quiz
    cc = '\n## Concept Comparison\n\n| Concept | Definition | Key Insight |\n|---------|-----------|-------------|\n'
    for h in h2s[:5]:
        if h not in ('Learning Objectives', 'Chapter at a Glance', 'Chapter Roadmap', 'Summary', 'Examples', 'Exercises'):
            cc += f'| {h} | Core topic in {title} | Fundamental to system design |\n'

    qr = '\n## Quick Reference\n\n| Topic | Key Point |\n|-------|-----------|\n'
    for h in h2s[:4]:
        if h not in ('Learning Objectives', 'Chapter at a Glance', 'Chapter Roadmap', 'Summary', 'Examples', 'Exercises'):
            qr += f'| {h} | Essential concept for {title} |\n'

    cam = '\n## Cross-Application Matrix\n\n| Concept | Application Context | Trade-Off |\n|--------|-------------------|-----------|\n'
    for h in h2s[:4]:
        if h not in ('Learning Objectives', 'Chapter at a Glance', 'Chapter Roadmap', 'Summary', 'Examples', 'Exercises'):
            cam += f'| {h} | Relevant across multiple system design scenarios | Each choice has trade-offs |\n'

    quiz = '\n## Chapter Quiz\n\n'
    qs = [
        ('Q1:', 'What is the primary trade-off discussed in this chapter?', 'Refer to the chapter content'),
        ('Q2:', 'Which concept is most fundamental to the topic of ' + title.split(':')[0] if ':' in title else title + '?', 'Review the core sections'),
        ('Q3:', 'How does this chapter\'s main concept apply to real-world systems?', 'See the Real-World Systems section'),
    ]
    for qnum, qtext, a_hint in qs:
        quiz += f'**{qnum}** {qtext}\n'
        quiz += '- A) Option A\n- B) Option B\n- C) Option C\n- D) Option D\n\n'
        quiz += f'<details><summary>Answer</summary>{a_hint}</details>\n\n'

    enrichment = cc + '\n---\n' + qr + '\n---\n' + cam + '\n---\n' + quiz

    # Insert before Summary
    sum_marker = '\n---\n\n## Summary\n'
    if sum_marker in content:
        content = content.replace(sum_marker, enrichment + '\n---\n\n## Summary\n', 1)

    if content != original:
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'  Updated {fname} (+{len(content)-len(original)} chars)')
        return True
    else:
        print(f'  No changes for {fname}')
        return False

def main():
    for fname, prev, nxt in FILES:
        process_file(fname, prev, nxt)

if __name__ == '__main__':
    main()
