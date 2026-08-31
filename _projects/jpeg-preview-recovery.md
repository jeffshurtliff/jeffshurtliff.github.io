---
title: JPEG Preview Recovery
summary: An MIT-licensed Python tool that recovers usable images from damaged JPEG files by extracting complete embedded previews.
description: JPEG Preview Recovery is Jeff Shurtliff's open-source Python tool for safely extracting intact previews from damaged JPEG files.
type: open-source
featured: false
order: 25
technologies:
  - Python
  - Pillow
  - JPEG
  - File Recovery
  - Command-Line Tools
links:
  - label: GitHub
    url: https://github.com/jeffshurtliff/jpeg-preview-recovery
---

## Problem

Some damaged JPEG files can no longer display their full-size images even though they still contain complete, usable previews. Recovering those previews by hand is slow, and a careless workflow can overwrite originals or mistake incomplete image data for a successful recovery.

## Approach

I created JPEG Preview Recovery as a local Python command-line tool that scans each source file for additional JPEG data, validates and fully decodes each candidate, and extracts the usable preview with the largest pixel area. It preserves the selected preview's original JPEG bytes, opens source files for reading only, never overwrites a different output, supports dry runs and recursive batches, and records results and checksums in a CSV report.

## What it demonstrates

- Binary-file analysis and defensive recovery from partially corrupted data
- Safe batch processing with explicit limits, conflict handling, and symlink protection
- Practical command-line design for macOS and Windows users
- Test-driven validation across malformed inputs, progressive JPEGs, repeated runs, and interrupted or mixed-result batches

## Public context

JPEG Preview Recovery is an independent open-source project released under the MIT License. It extracts surviving embedded previews; it is not a full-resolution JPEG repair tool, memory-card recovery utility, or replacement for professional data recovery. The public repository is the authoritative source for current features, requirements, usage, and limitations.
