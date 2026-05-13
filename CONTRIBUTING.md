# Contributing to FreshScan AI

Thank you for your interest in contributing. Please read this document before opening an issue or pull request.

---

## Table of Contents

- [Getting Started](#getting-started)
- [Branch Naming](#branch-naming)
- [Commit Message Conventions](#commit-message-conventions)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Code Style](#code-style)
- [Testing](#testing)
- [Review Timeline](#review-timeline)
- [Issue Labels](#issue-labels)
- [Contact](#contact)

---

## Getting Started

Follow the setup steps in [README.md](README.md) to get your local environment running before contributing.

---

## Branch Naming

Use the following conventions when creating branches:

| Type | Pattern | Example |
|---|---|---|
| New feature | `feat/<short-description>` | `feat/scan-history-export` |
| Bug fix | `fix/<short-description>` | `fix/map-marker-overlap` |
| Documentation | `docs/<short-description>` | `docs/update-setup-guide` |
| Refactor | `refactor/<short-description>` | `refactor/inference-pipeline` |
| Chore | `chore/<short-description>` | `chore/update-dependencies` |

---

## Commit Message Conventions

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.

```
<type>(<optional scope>): <short summary>
```

Allowed types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

**Examples:**

```
feat(scanner): add confidence threshold display
fix(auth): handle OAuth redirect on mobile
docs: update backend setup instructions
chore: upgrade fastapi to 0.111
```

Rules:
- Use the imperative mood in the summary ("add" not "added", "fix" not "fixed")
- Keep the summary line under 72 characters
- Do not end the summary line with a period

---

## Pull Request Guidelines

Before opening a pull request:

- Ensure your branch is up to date with `main`
- Run `npm run lint` and fix all errors
- Run the backend tests with `python -m pytest backend/` and ensure they pass
- Keep each PR focused on a single change

**PR description must include:**

1. **What** — a clear summary of the change
2. **Why** — the motivation or problem being solved
3. **How** — a brief description of the implementation approach
4. **Screenshots** — if the change affects the UI

Use this template when opening a PR:

```markdown
## Summary
<!-- What does this PR do? -->

## Motivation
<!-- Why is this change needed? Link the related issue if applicable. Closes #<issue> -->

## Implementation Notes
<!-- How did you approach the problem? Any trade-offs or decisions worth noting? -->

## Screenshots (if applicable)
<!-- Before / after screenshots for UI changes -->

## Checklist
- [ ] `npm run lint` passes
- [ ] Backend tests pass (`python -m pytest backend/`)
- [ ] No `.env` files or credentials committed
- [ ] Branch is up to date with `main`
```

---

## Code Style

**Frontend (TypeScript / React):**

- Follow the existing TypeScript strict mode configuration in `tsconfig.app.json`
- Use functional components and hooks; no class components
- Keep components in `src/components/` and pages in `src/pages/`
- Use Tailwind utility classes consistent with the existing design system in `src/index.css`
- Do not introduce new dependencies without discussion in an issue first

**Backend (Python / FastAPI):**

- Follow PEP 8
- Type-annotate all function signatures
- Keep route handlers thin; move business logic to dedicated modules
- Do not add dependencies to `requirements.txt` without discussion in an issue first

**General:**

- Do not commit `__pycache__/`, `.pyc` files, macOS `._*` metadata files, or build artifacts
- Do not commit `.env` or any file containing credentials or secrets

---

## Testing

**Frontend:**

There are currently no frontend unit tests. If you add a utility function or a complex hook, include a test file alongside it (Vitest is available).

**Backend:**

```bash
cd backend
python -m pytest
```

Tests live in `backend/test_auth.py`, `backend/auto_test.py`, and `backend/test_pipeline.py`. Add tests for any new endpoint or inference logic you introduce.

---

## Review Timeline

- Assignment requests on issues: responded to within **24 hours**
- Pull request reviews: within **48 hours** of submission

If you have not received a response after 48 hours, tag the maintainer in a comment or reach out via Discord.

---

## Issue Labels

| Label | When to use |
|---|---|
| `good first issue` | Self-contained tasks suitable for new contributors |
| `bug` | Something is broken or behaves incorrectly |
| `feature` | A new capability or enhancement |
| `help wanted` | Maintainer is actively seeking external input |
| `documentation` | Changes or additions to docs only |

When opening an issue, apply the most relevant label and provide enough context for someone to start working without asking for clarification.

---

## Contact

| Channel | Handle / Address |
|---|---|
| Discord | `Razen04` |
| Email | karanrathore23@zohomail.in |
