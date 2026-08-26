---
title: SalesPyForce
summary: An MIT-licensed Python SDK that makes Salesforce REST API integrations easier to build, reuse, and maintain.
description: SalesPyForce is Jeff Shurtliff's open-source Python SDK for Salesforce REST API integrations.
type: open-source
featured: true
order: 10
technologies:
  - Python
  - Salesforce
  - REST APIs
  - OAuth
  - PyPI
links:
  - label: GitHub
    url: https://github.com/jeffshurtliff/salespyforce
  - label: Documentation
    url: https://salespyforce.readthedocs.io/en/latest/
  - label: PyPI
    url: https://pypi.org/project/salespyforce/
---

## Problem

Enterprise Salesforce integrations repeatedly need the same authentication, request, error-handling, and object-access foundations. Reimplementing those foundations increases delivery time and maintenance risk.

## Approach

I created SalesPyForce while building a production-oriented integration that synchronized partner-training data into Salesforce. I separated the reusable API foundation from the business-specific workflow, documented it, licensed it under MIT, and published it to PyPI.

## What it demonstrates

- Turning a real enterprise integration need into a reusable engineering asset
- Salesforce API design, authentication, packaging, and documentation
- Maintainable Python interfaces suitable for automation and integration work
- A bias toward sharing general-purpose tooling instead of leaving it embedded in one project

## Public context

SalesPyForce is an independent open-source project. Its public repository and documentation are the authoritative sources for current features and usage.
