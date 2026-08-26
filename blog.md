---
title: Writing
eyebrow: Ideas in practice
lead: >-
  Practical notes on enterprise platforms, Salesforce architecture, leadership, automation, security, and responsible AI-assisted engineering.
description: >-
  Writing by Jeff Shurtliff about enterprise business applications, Salesforce, leadership, automation, security, and open-source engineering.
permalink: /blog/
---

{% if site.posts.size > 0 %}
<div class="post-list">
  {% for post in site.posts %}
    <article>
      <p class="post-date">{{ post.date | date: "%B %-d, %Y" }}</p>
      <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
      <p>{{ post.description }}</p>
      <a class="text-link" href="{{ post.url | relative_url }}">Read article <span aria-hidden="true">→</span></a>
    </article>
  {% endfor %}
</div>
{% else %}
<p>Long-form writing will appear here as articles are ready for publication. In the meantime, explore the <a href="{{ '/projects/' | relative_url }}">projects and case studies</a>.</p>
{% endif %}
