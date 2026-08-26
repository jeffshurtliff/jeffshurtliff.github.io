# Jeff Shurtliff - Professional Portfolio

This repository contains the source for [jeffshurtliff.github.io](https://jeffshurtliff.github.io) ([shurt.us](https://shurt.us)), a recruiter-facing professional portfolio built with Jekyll and the [Minimal Light](https://github.com/yaoyao-liu/minimal-light) theme.

The site presents Jeff's enterprise business applications leadership, Salesforce platform experience, open-source Python work, selected professional case studies, résumé, and future writing.

## Local development

The site matches the GitHub Pages runtime with Ruby 3.3.4, Jekyll 3.10.0, and `github-pages` 232.

### macOS setup

Use a user-managed Ruby through rbenv. Do not use `sudo` with `rbenv`, `gem`, or `bundle`; doing so invokes or modifies macOS's system Ruby instead of the project Ruby.

Install and initialize rbenv for zsh:

```bash
brew install rbenv ruby-build
rbenv init
exec zsh
```

The `rbenv init` command updates the appropriate shell startup file. `exec zsh` starts a fresh shell so the change takes effect immediately. If rbenv was already configured, `rbenv init` exits without duplicating the configuration.

From the repository directory, install the project Ruby and Bundler versions:

```bash
rbenv install -s 3.3.4
rbenv local 3.3.4

ruby -v
which ruby

gem install bundler -v 2.5.11
rbenv rehash
bundle _2.5.11_ install
```

The verification commands should report Ruby 3.3.4 and a Ruby path under `~/.rbenv/shims/ruby`. They must not report Ruby 2.6 or `/usr/bin/ruby`.

Start the local site:

```bash
bundle exec jekyll serve
```

Open <http://127.0.0.1:4000> to preview the site.

### Troubleshooting rbenv

If `ruby -v` still reports macOS Ruby 2.6 after `rbenv local 3.3.4`, rbenv is not initialized in the current shell. Initialize it for the current terminal, then verify the selected executables:

```bash
eval "$(rbenv init - zsh)"
rbenv rehash

ruby -v
which ruby
which gem
which bundle
```

All three paths should be under `~/.rbenv/shims/`. Once that is true, rerun the version-pinned Bundler installation without `sudo`:

```bash
gem install bundler -v 2.5.11
bundle _2.5.11_ install
bundle exec jekyll serve
```

The `FilePermissionError` for `/Library/Ruby/Gems/2.6.0` is a diagnostic that the system Ruby is still active. Installing Bundler 2.4.22 into that system Ruby would not fix this project because the site requires Ruby 3.3.4.

Run the same checks used by continuous integration:

```bash
./scripts/build-site
bundle exec jekyll doctor
bundle exec htmlproofer ./_site --disable-external
```

## Architecture

- Jekyll pages provide Home, Experience, Projects, Résumé, Writing, and 404 routes.
- The `_projects` collection stores open-source projects and confidentiality-safe professional case studies.
- Standard Jekyll posts power the writing section and RSS feed.
- Local layouts and Sass extend the pinned Minimal Light remote theme.
- GitHub Actions validates pull requests and deploys approved changes from `main`.

## Public repository safety

This is a public repository. Only publication-safe material belongs in Git history. Raw career evidence, job-application material, transition documents, unpublished drafts, credentials, and local paths must remain outside the repository. `.gitignore` is a guardrail, not a privacy boundary.

See [CONTRIBUTING.md](CONTRIBUTING.md) for content schemas and validation requirements and [CONTENT-LICENSE.md](CONTENT-LICENSE.md) for rights covering career copy, the résumé, photographs, and personal branding.
