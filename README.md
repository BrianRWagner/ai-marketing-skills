# AI Marketing Skills

**Marketing frameworks that AI actually executes.**

Not guides. Not courses. *Skills* — packaged expertise your AI agent loads and follows.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Skills](https://img.shields.io/badge/Skills-17-green.svg)](#available-skills)
[![Compatible](https://img.shields.io/badge/Works%20With-Claude%20Code%20%7C%20OpenClaw%20%7C%20Copilot-purple.svg)](#compatibility)

---

## What Are Agent Skills?

Agent Skills are an [open standard](https://agentskills.ai) for packaging expertise as instructions that AI agents can follow.

**Traditional content:** You read it → You apply it → You forget half of it.

**Agent Skills:** Your agent reads it → Your agent applies it → Every time. Perfectly.

Think of it like giving your AI a playbook written by an expert. Instead of prompting from scratch every time, the skill provides the framework, questions, and output format automatically.

---

## Available Skills

### Strategy & Positioning

#### 🎯 Positioning Basics
Core positioning framework for founders and marketers. Clarify who you're for, what you do, and why you're different.

**Use when:** "Help me with positioning", "Who is this for?", "What makes us different?"

→ [positioning-basics/SKILL.md](./positioning-basics/SKILL.md)

---

#### 🔍 AI Discoverability Audit
Audit how a brand appears in AI-powered search and recommendation systems (ChatGPT, Perplexity, Claude, Gemini).

**Use when:** "How do I show up in ChatGPT?", "AI search visibility", "AEO audit"

→ [ai-discoverability-audit/SKILL.md](./ai-discoverability-audit/SKILL.md)

---

#### 📚 Marketing Principles
Apply timeless marketing and business principles from the masters (Drucker, Ogilvy, Godin, Buffett, Munger, Bezos, Jobs).

**Use when:** "First principles thinking", "Should I do X?", "What would work here?", strategic decisions

→ [marketing-principles/SKILL.md](./marketing-principles/SKILL.md)

---

### Content & Authority

#### 💼 LinkedIn Authority Builder
Build a LinkedIn content system for thought leadership. Positioning, content pillars, formats, and posting rhythm.

**Use when:** "LinkedIn strategy", "Build my presence", "Content system", "Thought leadership"

→ [linkedin-authority-builder/SKILL.md](./linkedin-authority-builder/SKILL.md)

---

#### 💡 Content Idea Generator
Generate content ideas based on your positioning and ICP. Multiple frameworks for different content types.

**Use when:** "What should I post?", "Content ideas", "Blog topics", "LinkedIn content"

→ [content-idea-generator/SKILL.md](./content-idea-generator/SKILL.md)

---

#### 🎙️ Voice Extractor
Extract and document someone's authentic writing voice from samples. Create voice guides for AI training or ghostwriting.

**Use when:** "Capture my voice", "Voice guide", "Write like me", "Train AI on my style"

→ [voice-extractor/SKILL.md](./voice-extractor/SKILL.md)

---

#### 🧹 De-AI-ify
Remove AI-generated jargon and restore human voice to text. Built from analyzing 1,000+ AI vs human content pieces.

**Use when:** "This sounds like AI", "Make it human", "Remove AI voice", "De-robotify this"

→ [de-ai-ify/SKILL.md](./de-ai-ify/SKILL.md)

---

#### 📱 Social Card Generator
Generate platform-specific social post variants (Twitter, LinkedIn, Reddit) from one source input. No API dependency.

**Use when:** "Turn this into social posts", "Repurpose for Twitter/LinkedIn", "Create social variants"

→ [social-card-gen/SKILL.md](./social-card-gen/SKILL.md)

---

### Research & Intelligence

#### 🔬 Last 30 Days Research
Research any topic across Reddit, X, and web from the last 30 days. Current trends, real community sentiment, and actionable insights in 7 minutes vs 2 hours manual research.

**Use when:** "What are people saying about X?", "Current trends in Y", "Market research", "Community sentiment"

→ [last30days/SKILL.md](./last30days/SKILL.md)

---

#### 🔎 Reddit Insights
Search and analyze Reddit content using semantic AI search. Find user pain points, discover niche markets, validate business ideas with real user feedback.

**Use when:** "Search Reddit for...", "What does Reddit think about?", "Find pain points", "Validate this idea"

→ [reddit-insights/SKILL.md](./reddit-insights/SKILL.md)

---

#### 🎬 YouTube Summarizer
Fetch YouTube video transcripts, generate structured summaries with key insights and metadata. Supports full transcript delivery.

**Use when:** "Summarize this YouTube video", "Get transcript from...", "Key takeaways from this video"

→ [youtube-summarizer/SKILL.md](./youtube-summarizer/SKILL.md)

---

### Conversion & Sales

#### 📄 Homepage Audit
Quick conversion audit for any homepage or landing page. Get actionable feedback in minutes.

**Use when:** "Review my homepage", "Why isn't my page converting?", "Audit my landing page"

→ [homepage-audit/SKILL.md](./homepage-audit/SKILL.md)

---

#### 📧 Cold Outreach Sequence
Build personalized cold outreach sequences for LinkedIn and email. Research, connection requests, follow-ups, and conversion.

**Use when:** "Cold outreach", "LinkedIn messages", "Prospecting sequence", "Sales emails"

→ [cold-outreach-sequence/SKILL.md](./cold-outreach-sequence/SKILL.md)

---

#### 📊 Case Study Builder
Turn client wins into formatted case studies for proposals, social proof, and sales conversations.

**Use when:** "Write a case study", "Document results", "Client success story", "Build social proof"

→ [case-study-builder/SKILL.md](./case-study-builder/SKILL.md)

---

#### ⭐ Testimonial Collector
Systematically gather and format client testimonials for social proof.

**Use when:** "Get testimonials", "Social proof", "Client quotes", "Build credibility"

→ [testimonial-collector/SKILL.md](./testimonial-collector/SKILL.md)

---

### Productivity & Operations

#### 📅 Plan My Day
Generate an energy-optimized, time-blocked daily plan based on circadian rhythm research and GTD principles.

**Use when:** "Plan my day", "Time block today", "What should I work on?", "Daily schedule"

→ [plan-my-day/SKILL.md](./plan-my-day/SKILL.md)

---

#### 📧 Newsletter Creation & Curation
Industry-adaptive B2B newsletter creation with stage, role, and geography-aware workflows.

**Use when:** "Create a newsletter", "Curate content for newsletter", "B2B newsletter", "Weekly digest"

→ [newsletter-creation-curation/SKILL.md](./newsletter-creation-curation/SKILL.md)

---

## How to Use These Skills

### Step 1: Choose Your AI Tool

These skills work with any AI that can read instructions:

| Tool | Where to Put Skills |
|------|---------------------|
| **Claude Code** | `~/.claude/skills/` |
| **OpenClaw** | `~/.openclaw/skills/` |
| **GitHub Copilot** | `.github/skills/` in your repo |
| **VS Code Copilot** | `.github/skills/` in your workspace |
| **ChatGPT/Claude (manual)** | Paste SKILL.md content into your prompt |

### Step 2: Install the Skill

**Option A: Clone the whole repo**
```bash
git clone https://github.com/BrianRWagner/ai-marketing-skills.git
```

**Option B: Copy individual skills**
```bash
# Clone first
git clone https://github.com/BrianRWagner/ai-marketing-skills.git

# Copy what you need (example: Claude Code)
cp -r ai-marketing-skills/positioning-basics ~/.claude/skills/
cp -r ai-marketing-skills/voice-extractor ~/.claude/skills/
```

### Step 3: Use It

Once installed, just ask your AI to help with that topic. The skill activates automatically based on keywords.

**Examples:**
- "Help me with positioning for my SaaS product"
- "Audit my homepage: [url]"
- "Extract my voice from these writing samples"
- "Build me a LinkedIn content strategy"
- "What are people saying about [topic] on Reddit?"
- "Summarize this YouTube video"
- "This sounds too AI — make it human"

The AI will follow the skill's framework instead of generic responses.

---

## Compatibility

| Platform | Status | Notes |
|----------|--------|-------|
| Claude Code | ✅ Full Support | Native skills folder |
| OpenClaw | ✅ Full Support | Native skills folder |
| GitHub Copilot | ✅ Full Support | Via .github/skills |
| VS Code Copilot | ✅ Full Support | Via workspace |
| ChatGPT | ⚠️ Manual | Paste SKILL.md content |
| Claude.ai | ⚠️ Manual | Paste SKILL.md content |
| Cursor | ✅ Full Support | Via rules/context |

---

## Pro Skills (Coming Soon)

Premium skills with deeper frameworks, implementation playbooks, and advanced techniques are in the works.

👉 Check [brianrwagner.com/skills](https://brianrwagner.com/skills) for updates.

---

## About

Created by **Brian Wagner** — AI Marketing Architect

15+ years building marketing systems for Fortune 500s and startups. Now packaging that expertise for the AI era.

- 🌐 [brianrwagner.com](https://brianrwagner.com)
- 🐦 [@BrianRWagner](https://twitter.com/BrianRWagner)
- 💼 [LinkedIn](https://linkedin.com/in/brianrwagner)

---

## Contributing

Found an issue? Have an improvement?

1. Fork the repo
2. Make your changes
3. Submit a PR

All contributions welcome. Let's make these skills better together.

---

## License

MIT — Use freely. Attribution appreciated.

---

*Marketing frameworks that AI actually executes.* 🔱
