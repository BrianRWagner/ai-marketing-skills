# AI Marketing Skills

**Marketing frameworks that AI actually executes.**

Not guides. Not courses. *Skills* — packaged expertise your AI agent loads and follows.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Skills](https://img.shields.io/badge/Skills-5-green.svg)](#available-skills)
[![Compatible](https://img.shields.io/badge/Works%20With-Claude%20Code%20%7C%20OpenClaw%20%7C%20Copilot-purple.svg)](#compatibility)

---

## What Are Agent Skills?

Agent Skills are an [open standard](https://agentskills.ai) for packaging expertise as instructions that AI agents can follow.

**Traditional content:** You read it → You apply it → You forget half of it.

**Agent Skills:** Your agent reads it → Your agent applies it → Every time. Perfectly.

Think of it like giving your AI a playbook written by an expert. Instead of prompting from scratch every time, the skill provides the framework, questions, and output format automatically.

---

## Available Skills

### 🔍 AI Discoverability Audit
Audit how a brand appears in AI-powered search and recommendation systems (ChatGPT, Perplexity, Claude, Gemini).

**Use when:** "How do I show up in ChatGPT?", "AI search visibility", "AEO audit"

→ [ai-discoverability-audit/SKILL.md](./ai-discoverability-audit/SKILL.md)

---

### 🎯 Positioning Basics
Core positioning framework for founders and marketers. Clarify who you're for, what you do, and why you're different.

**Use when:** "Help me with positioning", "Who is this for?", "What makes us different?"

→ [positioning-basics/SKILL.md](./positioning-basics/SKILL.md)

---

### 📄 Homepage Audit
Quick conversion audit for any homepage or landing page. Get actionable feedback in minutes.

**Use when:** "Review my homepage", "Why isn't my page converting?", "Audit my landing page"

→ [homepage-audit/SKILL.md](./homepage-audit/SKILL.md)

---

### 💡 Content Idea Generator
Generate content ideas based on your positioning and ICP. Multiple frameworks for different content types.

**Use when:** "What should I post?", "Content ideas", "Blog topics", "LinkedIn content"

→ [content-idea-generator/SKILL.md](./content-idea-generator/SKILL.md)

---

### 📚 Marketing Principles
Apply timeless marketing and business principles from the masters (Drucker, Ogilvy, Godin, Buffett, Munger, Bezos, Jobs).

**Use when:** "First principles thinking", "Should I do X?", "What would work here?", strategic decisions

→ [marketing-principles/SKILL.md](./marketing-principles/SKILL.md)

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
cp -r ai-marketing-skills/ai-discoverability-audit ~/.claude/skills/
```

### Step 3: Use It

Once installed, just ask your AI to help with that topic. The skill activates automatically based on keywords.

**Examples:**
- "Help me with positioning for my SaaS product"
- "Audit my homepage: [url]"
- "How does my brand show up in ChatGPT?"
- "Generate content ideas for my target customer"

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

Deeper frameworks with templates, implementation playbooks, and advanced techniques:

| Skill | Description | Price |
|-------|-------------|-------|
| `ai-discoverability-complete` | Full audit + implementation guide | $49 |
| `positioning-deep-dive` | Complete positioning system | $49 |
| `linkedin-thought-leadership` | Ghostwriting + voice matching | $39 |
| `landing-page-optimizer` | Full CRO framework | $39 |
| `email-sequence-builder` | Drip campaigns + templates | $29 |

*Join the waitlist: [brianrwagner.com/skills](https://brianrwagner.com/skills)*

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
