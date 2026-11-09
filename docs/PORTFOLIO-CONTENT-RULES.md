# Portfolio Content & Navigation Rules

## Project introduction vs product narrative

The first small line beneath a featured project name introduces the project itself. It answers what it is, whether it is a personal or team project, its platform/scope, and where useful its stage. It must not be replaced by an abstract benefit slogan.

Use product language in the deeper case narrative: user context, problem, product opportunity, product decisions, trade-offs, experience, outcomes, and evidence.

## Project ownership and collaboration

- Personal project: state that it is personal, explain its concrete concept/scope, platform and maturity. Do not imply a shipped product if it is an architecture exploration or prototype.
- Team project: explain the team/project context, how the owner joined, and the work personally undertaken after joining. Attribute team results honestly.
- Open-source collaboration: present sustained product and engineering collaboration without inventing employment, official maintainer, or formal team title.

## Current featured order and homepage copy

1. Personal Context Keyboard — personal project, Android + Windows, personal context capture/organization and permissioned reuse by AI tools.
2. VIVIC — team project; SuKeSong Hackathon Life & Office track, fourth place; owner met the team at the competition and was invited to join after the competition, then took over and improved product experience and Agent decision flow.
3. AWRP × Linear — AWRP task handoff prototype, later Linear workflow adaptation, DeepSeek Super-agent as a third-party reference, and current productization exploration. Do not describe the standalone product as already built.

The approved exact draft and source feedback are in `docs/portfolio-reviews/2026-11-10.md`.

## Visuals

Every visual must have a clear job: explain a product journey, system relationship, user task, or product outcome. Use actual screenshots only when they genuinely demonstrate the claim. AI-generated visuals may be used for editorial metaphors and explanatory diagrams, but must never impersonate real UI, product screenshots, PR screenshots, or source evidence. Label illustrative assets clearly.

## Navigation and page integrity

- Every featured project card must open its own detail page.
- Every detail page must offer a visible return-to-work/home control.
- Direct URL/hash entry, refresh, browser back and browser forward must work.
- Test all routes after every deployment; HTTP 200 alone is not sufficient for a JS-rendered detail page.

## Version history

Every iteration gets:
1. a Git commit on the portfolio working branch;
2. a version note under `docs/portfolio-versions/` recording date, source commit, scope, decisions and QA;
3. an immutable source snapshot when the version is accepted/released.

Never overwrite an accepted version snapshot. The working branch can continue evolving independently.
