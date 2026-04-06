# Dutchlingo

Dutchlingo is a Dutch learning web app focused on a simple guided course flow for beginners.

The current product direction is:
- beginner onboarding first
- structured `A1` progression
- structured `A2` progression
- one logical next step at a time
- local progress persistence in a JSON file during local development

## Current Flow

The app is designed around a clean course path:

1. `Home`
2. `Course`

Inside the course:
- new users start with onboarding
- onboarding teaches a few basic Dutch words and first sentence patterns
- after onboarding, learners move through `A1` stage by stage
- once `A1` is completed, the app unlocks `A2`
- each stage contains units with:
  - vocabulary
  - sentence formation
  - guided drills
  - practice exercises
  - short learning tips between stages

## Levels

### A1

`A1` currently includes:
- onboarding
- introductions and home
- routine and shopping
- time and negation
- transport, health, work, and forms
- social contact, hobbies, and weather

### A2

`A2` currently includes:
- appointments and past events
- health and housing
- travel and writing
- municipality, listening, and reading
- opinions, phone calls, and instructions

## Tech Stack

- React
- Vite
- local file-backed progress persistence through a lightweight Vite API

## Running Locally

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Progress Persistence

Progress is saved locally in:

[`data/progress.json`](/Users/rahulnigam/Documents/Vibe%20Projects/Dutchlingo/data/progress.json)

Behavior:
- during local development, the app reads and writes progress through `/api/progress`
- if that local API is unavailable, the app falls back to browser `localStorage`

The progress file is intentionally ignored in git.

## Project Structure

Key files:

- [src/App.jsx](/Users/rahulnigam/Documents/Vibe%20Projects/Dutchlingo/src/App.jsx): main app flow
- [src/data/curriculum.js](/Users/rahulnigam/Documents/Vibe%20Projects/Dutchlingo/src/data/curriculum.js): onboarding, A1, A2, syllabus data
- [src/components/ExerciseEngine.jsx](/Users/rahulnigam/Documents/Vibe%20Projects/Dutchlingo/src/components/ExerciseEngine.jsx): guided exercise runner
- [src/components/LessonWorkbench.jsx](/Users/rahulnigam/Documents/Vibe%20Projects/Dutchlingo/src/components/LessonWorkbench.jsx): lesson focus and sentence-building UI
- [src/hooks/useCourseProgress.js](/Users/rahulnigam/Documents/Vibe%20Projects/Dutchlingo/src/hooks/useCourseProgress.js): progress loading and saving
- [vite.config.js](/Users/rahulnigam/Documents/Vibe%20Projects/Dutchlingo/vite.config.js): Vite config and local progress API

## Git

Repository remote:

[https://github.com/rahulnigam-tech/Dutchlingo.git](https://github.com/rahulnigam-tech/Dutchlingo.git)

## Next Improvements

Planned improvements that would add the most value:
- richer onboarding with word-by-word audio and pronunciation pacing
- stronger mastery logic per syllabus objective
- more listening and writing depth across A1 and A2
- final stage completion transitions
