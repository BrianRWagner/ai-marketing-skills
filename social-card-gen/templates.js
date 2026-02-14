'use strict';

const PLATFORM_CONFIGS = {
  twitter: {
    name: 'Twitter',
    characterLimit: 280,
    tone: 'punchy',
    toneGuideline: 'Lead with the hook, keep it tight, and make every sentence earn space.',
    hashtagStrategy: 'Use 1-3 topical hashtags. Keep them short and specific.',
    ctaFormat: 'Short imperative CTA (e.g., Read more:, Try this:, What do you think?)'
  },
  linkedin: {
    name: 'LinkedIn',
    characterLimit: 3000,
    tone: 'professional',
    toneGuideline: 'Use a clear business outcome, practical framing, and credible language.',
    hashtagStrategy: 'Use 2-5 industry hashtags at the end. Prefer category tags over memes.',
    ctaFormat: 'Professional prompt CTA (e.g., What are you seeing in your team?)'
  },
  reddit: {
    name: 'Reddit',
    characterLimit: null,
    tone: 'authentic',
    toneGuideline: 'Write like a real person: direct, candid, and discussion-friendly.',
    hashtagStrategy: 'Avoid hashtag spam. Usually 0 hashtags; optionally one if it adds context.',
    ctaFormat: 'Open-ended discussion question (e.g., Curious how others approach this.)'
  }
};

const STOPWORDS = new Set([
  'a', 'an', 'the', 'and', 'or', 'but', 'if', 'then', 'than', 'that', 'this', 'those', 'these',
  'to', 'for', 'of', 'on', 'in', 'at', 'with', 'by', 'from', 'as', 'is', 'are', 'was', 'were',
  'be', 'been', 'being', 'it', 'its', 'into', 'about', 'over', 'under', 'after', 'before',
  'we', 'you', 'they', 'our', 'your', 'their', 'i', 'he', 'she', 'them', 'us', 'can', 'could',
  'should', 'would', 'will', 'just', 'very', 'more', 'most', 'much', 'many', 'also'
]);

function extractKeywords(text, maxKeywords = 6) {
  const words = (text || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((word) => word.length > 2 && !STOPWORDS.has(word));

  const counts = new Map();
  for (const word of words) {
    counts.set(word, (counts.get(word) || 0) + 1);
  }

  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, maxKeywords)
    .map(([word]) => word);
}

function toHashtag(term) {
  const cleaned = term.replace(/[^a-z0-9]/gi, ' ').trim();
  if (!cleaned) return '';

  const parts = cleaned.split(/\s+/);
  const formatted = parts
    .map((part, index) => {
      if (index === 0) return part.toLowerCase();
      return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
    })
    .join('');

  return `#${formatted}`;
}

function enforceCharacterLimit(text, limit) {
  if (!limit || text.length <= limit) return text;

  const suffix = '...';
  const hardLimit = Math.max(0, limit - suffix.length);
  const trimmed = text.slice(0, hardLimit);
  const safeTrimmed = trimmed.slice(0, Math.max(0, trimmed.lastIndexOf(' ')));
  const output = (safeTrimmed || trimmed).trimEnd();
  return `${output}${suffix}`;
}

function buildHashtags(platform, keywords) {
  if (!keywords.length) return '';

  if (platform === 'twitter') {
    return keywords.slice(0, 3).map(toHashtag).filter(Boolean).join(' ');
  }

  if (platform === 'linkedin') {
    return keywords.slice(0, 4).map(toHashtag).filter(Boolean).join(' ');
  }

  if (platform === 'reddit') {
    return ''; // Reddit style avoids hashtag clutter by default.
  }

  return '';
}

function buildCTA(platform, sourceUrl) {
  if (platform === 'twitter') {
    return sourceUrl ? `Read more: ${sourceUrl}` : 'Thoughts?';
  }

  if (platform === 'linkedin') {
    return sourceUrl
      ? `Full details: ${sourceUrl}\n\nWhat are you seeing in your team?`
      : 'What are you seeing in your team?';
  }

  if (platform === 'reddit') {
    return sourceUrl
      ? `If you want the full context: ${sourceUrl}\n\nCurious how others here handle this.`
      : 'Curious how others here handle this.';
  }

  return '';
}

function renderTemplate(platform, context) {
  const config = PLATFORM_CONFIGS[platform];
  if (!config) {
    throw new Error(`Unsupported platform: ${platform}`);
  }

  const hashtags = buildHashtags(platform, context.keywords || []);
  const cta = buildCTA(platform, context.sourceUrl);

  let text;
  if (platform === 'twitter') {
    const tailLines = [hashtags, cta].filter(Boolean);
    const tail = tailLines.join('\n');
    const reserved = tail ? tail.length + 2 : 0; // account for separating newlines
    const maxBodyLength = Math.max(0, (config.characterLimit || 280) - reserved);
    const body = enforceCharacterLimit(
      [context.hook, context.corePoint].filter(Boolean).join(' ').trim(),
      maxBodyLength
    );
    text = tail ? `${body}\n\n${tail}` : body;
  } else if (platform === 'linkedin') {
    text = `${context.title}\n\n${context.professionalSummary}\n\n${hashtags}`.trim();
    text = `${text}\n\n${cta}`.trim();
  } else {
    text = `${context.redditIntro}\n\n${context.redditBody}\n\n${cta}`.trim();
  }

  return enforceCharacterLimit(text, config.characterLimit);
}

module.exports = {
  PLATFORM_CONFIGS,
  extractKeywords,
  enforceCharacterLimit,
  renderTemplate
};
