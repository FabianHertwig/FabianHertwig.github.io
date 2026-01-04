# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal blog (fabianhertwig.com) built with Jekyll and GitHub Pages using the Minimal Mistakes theme.

## Development Commands

```bash
# Install dependencies (run from docs/ directory)
cd docs
bundle install

# Serve locally with drafts
bundle exec jekyll serve --drafts

# Serve without drafts
bundle exec jekyll serve
```

Ruby version is managed via `.ruby-version` (rbenv). Install with:
```bash
rbenv install 3.1.3
rbenv local 3.1.3
gem install bundler
```

## Project Structure

- `docs/` - Jekyll site root (all Jekyll commands run from here)
  - `_posts/` - Blog posts (YYYY-MM-DD-title.md format)
  - `_pages/` - Static pages (about, privacy, impressum)
  - `_config.yml` - Site configuration
  - `_includes/` - Custom HTML includes (cookie consent)
  - `_data/` - Navigation and other data files
  - `assets/` - Images and JavaScript
- `writing_style_guide.md` - **Must follow when writing blog content**

## Writing Blog Posts

**Always follow `writing_style_guide.md`** - it contains specific voice guidelines, banned words/phrases, and structural patterns to avoid.

Key points:
- Voice: Curious scientist explaining to a smart friend over coffee
- Channel: Tim Urban, Vsauce, Karpathy, Bryson, Feynman, Sagan
- Avoid LLM tells: "Additionally", "crucial", "delve", "landscape", "pivotal", "testament", etc.
- No formulaic patterns: rule of three, "Not only... but...", challenges-and-outlook endings
- Be specific, name sources, admit uncertainty

Post front matter example:
```yaml
---
title: "Post Title"
categories:
  - Category
tags:
  - tag1
  - tag2
---
```

## Integrations

- **Comments**: Giscus (GitHub Discussions-based)
- **Analytics**: Google Analytics (cookie-consented, ID in `_config.yml`)
- **Theme**: Remote theme `mmistakes/minimal-mistakes`
