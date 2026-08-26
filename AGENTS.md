# AGENTS.md

## Purpose

This repository is a public professional portfolio. Changes must remain suitable for recruiters, hiring managers, and other public visitors.

## Architecture

- Use Jekyll pages for primary navigation routes.
- Use `_projects` for open-source projects and public professional case studies.
- Use `_posts` for published writing; keep private drafts outside the repository.
- Extend the pinned Minimal Light remote theme through local layouts, includes, Sass, and JavaScript.
- Use `relative_url` or `absolute_url` for internal paths. Never add root- or page-relative paths that fail on nested routes.

## Content accuracy and privacy

- Publish only supported facts. Preserve qualifiers such as "approximately," "more than," and "over."
- Do not invent metrics, credentials, scope, product ownership, adoption, or business outcomes.
- Keep proprietary implementation detail and raw career evidence outside Git history.
- Never add transition documents, application packages, private notes, identifiers, credentials, secrets, or absolute local paths.
- Treat `.gitignore` as a guardrail, not a privacy boundary. Review staged files before every commit.
- Require Jeff's final review before publishing a new professional case study or changing the résumé.

## Design and accessibility

- Dark mode is the default; light mode must remain fully usable.
- Maintain WCAG 2.2 AA contrast, visible focus indicators, semantic landmarks, keyboard navigation, useful alternative text, and reduced-motion support.
- Use the brand red-orange for controls and decoration. Use the lighter accessible accent for normal-sized link or focus text on dark surfaces.
- Keep icons local and label icon-only controls for assistive technology.

## Validation

Before requesting review, run:

```bash
./scripts/build-site
bundle exec jekyll doctor
bundle exec htmlproofer ./_site --disable-external
```

Also inspect desktop, tablet, mobile, print, dark, and light rendering. Audit tracked and staged files for private material.

## Publication

- Work on a feature branch and use a pull request.
- Do not commit generated `_site` output.
- Deployment is performed by GitHub Actions only from `main` after checks pass.
- Do not add a `CNAME` file unless a custom-domain change is explicitly approved.
