---
title: Projects
eyebrow: Selected work
lead: >-
  Open-source engineering and confidentiality-safe case studies showing how I connect platform strategy, architecture, teams, and measurable outcomes.
description: >-
  Explore Jeff Shurtliff's open-source Python projects and selected enterprise platform case studies.
permalink: /projects/
---

{% assign sorted_projects = site.projects | sort: "order" %}
<div class="project-grid">
  {% for project in sorted_projects %}
    {% include project-card.html project=project %}
  {% endfor %}
</div>
