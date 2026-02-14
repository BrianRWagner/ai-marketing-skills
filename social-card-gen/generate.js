#!/usr/bin/env node
'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { extractKeywords, renderTemplate, PLATFORM_CONFIGS } = require('./templates');

function printHelp() {
  console.log(`social-card-gen\n\nUsage:\n  node generate.js [options]\n\nInput options (use one):\n  --text "..."           Raw text input\n  --file ./path.md        Read content from local file\n  --url https://...       Read content from URL\n\nOutput options:\n  --platforms list        Comma-separated: twitter,linkedin,reddit (default: all)\n  --outdir ./dir          Write files to directory (default: current directory)\n  --stdout                Print generated cards to stdout instead of files\n  --prefix output-        Output filename prefix (default: output-)\n  --title "Custom title" Override title extraction\n\nExamples:\n  node generate.js --text "We reduced deploy time by 42%" --stdout\n  node generate.js --file examples/input-example.md --outdir examples\n  node generate.js --url https://example.com/post --platforms twitter,linkedin --stdout\n`);
}

function parseArgs(argv) {
  const options = {
    platforms: ['twitter', 'linkedin', 'reddit'],
    outdir: process.cwd(),
    stdout: false,
    prefix: 'output-'
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];

    if (arg === '--help' || arg === '-h') {
      options.help = true;
      continue;
    }

    if (arg === '--text') {
      options.text = argv[++i];
      continue;
    }

    if (arg === '--file') {
      options.file = argv[++i];
      continue;
    }

    if (arg === '--url') {
      options.url = argv[++i];
      continue;
    }

    if (arg === '--platforms') {
      options.platforms = (argv[++i] || '')
        .split(',')
        .map((s) => s.trim().toLowerCase())
        .filter(Boolean);
      continue;
    }

    if (arg === '--outdir') {
      options.outdir = argv[++i];
      continue;
    }

    if (arg === '--stdout') {
      options.stdout = true;
      continue;
    }

    if (arg === '--prefix') {
      options.prefix = argv[++i] || 'output-';
      continue;
    }

    if (arg === '--title') {
      options.title = argv[++i];
      continue;
    }

    if (!arg.startsWith('--') && !options.text && !options.file && !options.url) {
      options.text = arg;
      continue;
    }

    throw new Error(`Unknown or incomplete argument: ${arg}`);
  }

  return options;
}

function stripMarkdownAndHtml(input) {
  return (input || '')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/^>\s?/gm, '')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

function toSentences(text) {
  return text
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 20);
}

function firstNonEmptyLine(raw) {
  const line = (raw || '')
    .split(/\r?\n/)
    .map((l) => l.trim())
    .find(Boolean);
  if (!line) return 'Content update';
  return line.replace(/^#{1,6}\s+/, '').trim();
}

function composeContext(rawInput, cleanedText, options) {
  const sentences = toSentences(cleanedText);
  const s1 = sentences[0] || cleanedText;
  const s2 = sentences[1] || '';
  const s3 = sentences[2] || '';
  const title = options.title || firstNonEmptyLine(rawInput).slice(0, 90);
  const keywords = extractKeywords(cleanedText, 8);

  return {
    title,
    hook: `Quick take: ${s1}`,
    corePoint: [s2, s3].filter(Boolean).join(' '),
    professionalSummary: [s1, s2, s3].filter(Boolean).join(' '),
    redditIntro: `I just read this and wanted to sanity-check my take: ${s1}`,
    redditBody: [s2, s3].filter(Boolean).join(' '),
    sourceUrl: options.url || '',
    keywords
  };
}

async function readFromStdinIfAvailable() {
  if (process.stdin.isTTY) return '';

  return new Promise((resolve, reject) => {
    let data = '';
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', (chunk) => {
      data += chunk;
    });
    process.stdin.on('end', () => resolve(data));
    process.stdin.on('error', reject);
  });
}

async function loadInput(options) {
  if (options.text) {
    return options.text;
  }

  if (options.file) {
    return fs.readFileSync(path.resolve(options.file), 'utf8');
  }

  if (options.url) {
    const response = await fetch(options.url);
    if (!response.ok) {
      throw new Error(`Failed to fetch URL (${response.status}): ${options.url}`);
    }
    return response.text();
  }

  const stdinValue = await readFromStdinIfAvailable();
  if (stdinValue.trim()) {
    return stdinValue;
  }

  throw new Error('No input provided. Use --text, --file, --url, or pipe data via stdin.');
}

function validatePlatforms(platforms) {
  const supported = new Set(Object.keys(PLATFORM_CONFIGS));
  const invalid = platforms.filter((p) => !supported.has(p));

  if (invalid.length > 0) {
    throw new Error(`Unsupported platforms: ${invalid.join(', ')}`);
  }

  if (platforms.length === 0) {
    throw new Error('No platforms selected. Use --platforms twitter,linkedin,reddit');
  }
}

function writeOutputs(results, options) {
  if (options.stdout) {
    for (const { platform, text } of results) {
      process.stdout.write(`\n=== ${platform.toUpperCase()} ===\n${text}\n`);
    }
    return;
  }

  fs.mkdirSync(path.resolve(options.outdir), { recursive: true });
  for (const { platform, text } of results) {
    const fileName = `${options.prefix}${platform}.txt`;
    const filePath = path.join(path.resolve(options.outdir), fileName);
    fs.writeFileSync(filePath, `${text}\n`, 'utf8');
  }
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  if (options.help) {
    printHelp();
    return;
  }

  validatePlatforms(options.platforms);

  const rawInput = await loadInput(options);
  const cleanedText = stripMarkdownAndHtml(rawInput);
  if (!cleanedText) {
    throw new Error('Input resolved to empty text after cleaning.');
  }

  const context = composeContext(rawInput, cleanedText, options);
  const results = options.platforms.map((platform) => ({
    platform,
    text: renderTemplate(platform, context)
  }));

  writeOutputs(results, options);
}

main().catch((err) => {
  console.error(`Error: ${err.message}`);
  process.exit(1);
});
