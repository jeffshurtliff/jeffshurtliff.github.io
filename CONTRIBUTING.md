# Contributing

Thank you for helping improve this professional portfolio. All changes must be accurate, publication-safe, accessible, and reproducible.

## Workflow

1. Create a branch with the `codex/` prefix or another approved feature prefix.
2. Make the smallest coherent change.
3. Build and validate the site locally.
4. Review the staged diff for private information and unsupported career claims.
5. Open a pull request and allow the GitHub Pages build checks to complete.

## Project documents

Every file in `_projects` must include:

```yaml
title: Project title
summary: One-sentence public summary
type: open-source # or case-study
featured: true
order: 10
technologies:
  - Technology
links: # optional
  - label: GitHub
    url: https://example.com
```

Professional case studies should use the headings Problem, Responsibility, Actions, Outcome, and Public context. Remove proprietary implementation details and retain all qualifiers attached to metrics.

Every file in `_posts` must include:

```yaml
title: Post title
date: 2026-08-25 12:00:00 -0600
description: Concise search and social description
tags:
  - Topic
```

Do not commit sensitive material under `_drafts`; this repository intentionally ignores that directory. Keep working drafts outside the repository until they are approved for publication.

## Validation

```bash
./scripts/build-site
bundle exec jekyll doctor
bundle exec htmlproofer ./_site --disable-external
git ls-files
git diff --cached
```

Check all changed routes in both color themes and at mobile and desktop widths.
