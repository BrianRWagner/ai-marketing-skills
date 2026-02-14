# Last 30 Days Research

**Know what's working RIGHT NOW, not last quarter.**

7-minute trend reports across Reddit, X, and web. Real community sentiment. Actionable intelligence. Copy-paste-ready prompts.

## The Problem

You need to know what's working NOW:
- Google Search → Articles from 2022-2023 (outdated)
- ChatGPT → Training data months/years old (generic advice)
- Manual research → 2-3 hours reading 30+ sources (exhausting)
- Perplexity → Searches web but misses Reddit + X conversations

**Result:** You make decisions based on old information or spend hours researching manually.

## The Solution

**/last30days** - Multi-platform intelligence engine with 30-day freshness filter.

### What You Get

✅ **30-day recency** - Only recent content, not 2023 blog posts  
✅ **Multi-platform synthesis** - Reddit (discussions) + X (signals) + Web (articles) in one pass  
✅ **Pattern detection** - Highlights themes mentioned 3+ times  
✅ **Sentiment analysis** - Community vibe (hype, skepticism, working)  
✅ **Copy-paste outputs** - Ready prompts and action ideas  
✅ **7-minute reports** - vs 2-3 hours manual research  

### Why This vs Alternatives?

| Tool | Coverage | Recency | Synthesis | Speed |
|------|----------|---------|-----------|-------|
| Google Search | Web only | Mixed | None | Manual |
| Perplexity | Web + some forums | Good | Some | Fast |
| ChatGPT | Knowledge cutoff | Old | Good | Fast |
| Manual Reddit | Reddit only | Good | Manual | Slow |
| **This skill** | **Reddit + X + Web** | **30 days** | **Auto** | **7 min** |

## Real Results

**B2B SaaS marketer** (3 months using skill):

- Research time: 2-3 hrs/topic → 7-10 min/topic
- Reports created: 2-3/quarter → 10/quarter
- Time saved: ~20 hours/month
- Team impact: Became go-to intelligence source

**Quote:** "I'd miss patterns reading manually. The skill catches things across platforms I'd never connect."

## Quick Start

### Install

```bash
cp -r last30days $HOME/.openclaw/skills/
```

### Verify Setup

```bash
/last30days --check-setup
```

Should show:
- ✅ Brave Search: Available
- ✅ Bird CLI: Available (for X)
- ✅ Reddit Insights: Available or fallback

### Use

```bash
# Standard research
/last30days "AI prompting best practices"

# Deep dive (fetches full articles)
/last30days "Notion vs Obsidian" --deep

# Reddit-focused
/last30days "cold email strategies" --reddit-only

# Quick brief (top 3 patterns)
/last30days "content marketing trends" --quick
```

## Example Outputs

### Example 1: Prompt Research

**Query:** `/last30days Claude prompting techniques`

**Output (abbreviated):**

```markdown
## Top Patterns Discovered

1. **XML Tags for Structure** (12 mentions)
   - "XML tags changed my workflow. 3× more accurate."
   - Anthropic's own docs now recommend this

2. **Examples Over Instructions** (9 mentions)
   - "Show, don't tell" — 2-3 examples beat long instructions

3. **Chain of Thought** (7 mentions)
   - "Think step-by-step" improves reasoning quality

## Copy-Paste Prompt

<context>[Your context]</context>
<task>[Your task]</task>
<examples>
Example 1: [Show output style]
Example 2: [Edge case]
</examples>

Think step-by-step before answering.
```

---

### Example 2: Competitive Intel

**Query:** `/last30days Cursor vs GitHub Copilot developers`

**Output (abbreviated):**

```markdown
## Reddit Sentiment

| Subreddit | Sentiment | Key Insight |
|-----------|-----------|-------------|
| r/programming | 🟢 Positive on Cursor | "Cursor's context awareness is unmatched" |
| r/vscode | 🟡 Mixed | "Copilot cheaper, Cursor smarter" |

## Action Ideas

1. **Positioning opportunity:** "Context-aware coding" angle resonating
2. **Pain point:** Developers frustrated by Copilot's limited context
3. **Messaging:** "Understands your entire codebase, not just one file"
```

---

### Example 3: Content Strategy

**Query:** `/last30days LinkedIn content strategies 2026`

**Output (abbreviated):**

```markdown
## Top Patterns

1. **"Teach in Public" posts dominate** (22 mentions)
   - Educational content > thought leadership by 4-5×

2. **Carousels are fading** (14 mentions)
   - Engagement down 40-60% since December

3. **Comment engagement = reach** (16 mentions)
   - "30 min/day commenting doubled my impressions"

## Action Ideas

- Shift to educational threads (Problem → Solution → Result)
- Abandon carousels (algo deprioritizing)
- Allocate 30 min/day to strategic commenting
```

## What Makes This Powerful

### 1. Multi-Platform Pattern Detection

Finds themes across:
- **Reddit** - Detailed discussions, practitioner experiences ("here's what worked")
- **X/Twitter** - Real-time signals, expert takes, trending conversations
- **Web** - Recent articles, data, tactical guides

### 2. Automatic Synthesis

You don't read 30 sources manually. The skill:
- Identifies patterns (mentioned 3+ times)
- Extracts key quotes (highly upvoted, retweeted)
- Assesses sentiment (hype, adoption, skepticism)
- Creates actionable outputs (prompts, ideas)

### 3. 30-Day Freshness Filter

**Only recent content:**
- Web search: `freshness=pm` (past month)
- Reddit: Last 30 days filter
- X: Current trending discussions

**No 2022 blog posts. No outdated tactics. Current intelligence only.**

## Common Use Cases

| Goal | Example Query | Value |
|------|---------------|-------|
| **Content ideas** | "AI productivity tools" | Topics getting engagement NOW |
| **Competitive research** | "Notion vs Coda users" | User sentiment, pain points |
| **Positioning** | "project management frustrations" | Language customers actually use |
| **Product validation** | "AI writing tool pain points" | Real problems to solve |
| **Marketing tactics** | "cold outreach working 2026" | What's working in market |

## Modes

### Standard Mode (7 min)
```bash
/last30days "topic"
```
- Web + Reddit + X synthesis
- Top patterns + prompts + actions

### Deep Dive Mode (12-15 min)
```bash
/last30days "topic" --deep
```
- Fetches top 5 full articles
- More detailed quotes and data

### Reddit-Only Mode (5 min)
```bash
/last30days "topic" --reddit-only
```
- Focus exclusively on Reddit
- Best for: Community sentiment

### Quick Brief Mode (3 min)
```bash
/last30days "topic" --quick
```
- Top 3 patterns only
- No deep synthesis

## Output Structure

Every report includes:

1. **Top Patterns** - Themes mentioned 3+ times
2. **Reddit Sentiment** - Subreddit discussions + top quotes
3. **X/Twitter Signal** - Trending themes + notable voices
4. **Web Highlights** - Most shared articles + common tactics
5. **Copy-Paste Prompt** - Ready to use based on research
6. **Action Ideas** - Specific opportunities with evidence
7. **Source List** - All links for verification

## Pro Tips

1. **Be specific** - "AI writing tools for marketers" > "AI"
2. **Add context** - "for B2B SaaS" or "for developers" helps
3. **Run monthly** - Track trends, spot shifts early
4. **Export to Notion** - Build a trends database
5. **Share with team** - Intelligence is valuable when distributed

## Who This Is For

✅ **Marketers** - Content trends, messaging, positioning  
✅ **Product managers** - User pain points, competitive intel  
✅ **Founders** - Market validation, strategy signals  
✅ **Content creators** - What's resonating, fresh angles  
✅ **Strategists** - Current tactics, community sentiment  

## Requirements

- **Brave Search API** - Built into OpenClaw (no setup)
- **Bird CLI** - For X/Twitter search (install if needed)
- **Reddit Insights** - Optional MCP server (falls back to web if unavailable)

Verify with: `/last30days --check-setup`

## What You'll Notice After Using This

- ✅ Decisions based on current data, not guesses
- ✅ Pattern recognition you'd miss reading manually
- ✅ Research time cut by 85% (2+ hours → 7 minutes)
- ✅ Copy-paste-ready outputs (no further synthesis needed)
- ✅ Team starts asking you for trend intelligence

## Limitations

**This skill does NOT:**
- Access paywalled content (public sources only)
- Provide academic-level depth (speed over exhaustiveness)
- Replace domain expertise (synthesizes existing knowledge)
- Guarantee 100% completeness (samples popular discussions)

**Best for:** Fast, directional intelligence for decisions and strategy.

## Installation & Usage

```bash
# Install
cp -r last30days $HOME/.openclaw/skills/

# Verify setup
/last30days --check-setup

# First research
/last30days "your topic"

# Deep dive
/last30days "your topic" --deep

# Quick brief
/last30days "your topic" --quick
```

## Coming Soon

- **Trend tracking** - Compare month-over-month patterns
- **Export to Notion** - One-click trend database sync
- **Slack integration** - Auto-post weekly trend reports
- **Custom source weights** - Prioritize Reddit vs X vs Web

## License

MIT License - Use freely, commercially or personally.

## Contributing

Improvements or new data sources? Submit via GitHub issues.

Built by **theflohart** to replace 2-hour research sessions with 7-minute intelligence.

---

**Stop relying on old information.**

**7-minute trend reports. Current signals. Actionable intelligence.**