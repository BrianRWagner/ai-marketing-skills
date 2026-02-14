# youtube-summarizer

Fetch YouTube transcripts and generate structured summaries with key insights.

## Best For

- Fast executive briefings from video content
- Competitive intelligence from interviews and podcasts
- Knowledge capture from long-form YouTube material

## What It Does

- Detects YouTube URLs and extracts video IDs
- Pulls transcript + metadata through MCP tooling
- Produces a concise, structured summary format

## Install

```bash
mkdir -p "$HOME/.codex/skills"
cp -R youtube-summarizer "$HOME/.codex/skills/youtube-summarizer"
```

## Dependencies

- MCP YouTube transcript server at `/root/clawd/mcp-server-youtube-transcript`
- Node.js runtime for transcript-fetch commands

## Typical Output

- Video metadata (title, channel, views, publish date)
- Main thesis
- 3-5 key insights
- Practical takeaway
