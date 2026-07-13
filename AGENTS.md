<!-- BEGIN:nextjs-agent-rules -->

# Next.js Version Awareness

This project may use a newer Next.js version than the model's training data. Before changing framework-level behavior, routing, metadata, caching, Server Actions, Route Handlers, middleware, or configuration, inspect the installed Next.js documentation or source in `node_modules/next/dist/docs/` when available. Prefer the current project implementation and official package documentation over assumptions.

<!-- END:nextjs-agent-rules -->

# CodDock Web — AI Agent Operating Guide

## 1. Project Context

CodDock Web is the frontend application for CodDock, a project-based developer growth platform that helps aspiring and early-career developers move from fragmented learning to structured skill development, real-world portfolio projects, community feedback, and career readiness.

Core product journey:

```txt
Learn → Build → Grow → Earn
```

Primary users:

- University students studying CS, Software Engineering, IT, or related fields
- Self-taught developers learning through online resources
- Fresh graduates preparing for internships or junior roles
- Junior developers improving their skills and portfolios
- Career switchers entering software development
- Developers interested in freelancing or remote work

Current product focus:

- Landing page and early access positioning
- User onboarding
- Structured learning roadmaps
- Project-based learning experience
- Community/forum interface
- Dashboard shell and user progress UI
- Developer profile and proof-of-work presentation

Do not describe CodDock as a generic course marketplace, coding challenge clone, or roadmap directory. The product should feel like a focused developer growth system built around direction, execution, accountability, and portfolio proof.

---

## 2. Frontend Stack

Primary stack:

| Area       | Technology                                    |
| ---------- | --------------------------------------------- |
| Framework  | Next.js App Router                            |
| Language   | TypeScript                                    |
| Styling    | Tailwind CSS                                  |
| UI System  | shadcn/ui                                     |
| Icons      | lucide-react                                  |
| Forms      | React Hook Form where useful                  |
| Validation | Zod                                           |
| Font       | PolySans via `next/font/local` when available |

Core frontend principles:

- Use Server Components by default.
- Use `"use client"` only when state, effects, browser APIs, event handlers, or client hooks are required.
- Keep route files focused on routing, layout, metadata, and page composition.
- Keep reusable UI components in `components/`.
- Keep feature-specific UI, constants, schemas, and helper logic in `features/{featureName}/`.
- Keep global constants in `constants/`.
- Keep shared TypeScript types in `types/`.
- Keep reusable hooks in `hooks/`.
- Keep utility functions small, pure, and predictable.
- Avoid large, mixed-responsibility files.

Recommended project shape:

```txt
src/
├── app/
├── components/
│   ├── ui/
│   └── shared/
├── constants/
├── features/
│   ├── onboarding/
│   ├── roadmaps/
│   ├── projects/
│   ├── community/
│   └── dashboard/
├── hooks/
├── lib/
├── providers/
├── types/
└── utils/
```

Suggested feature folder shape:

```txt
features/{featureName}/
├── components/
├── constants/
├── schemas/
├── types/
├── utils/
└── index.ts
```

Use this structure only when the feature is large enough to justify it. Do not create empty folders for decoration.

---

## 3. Design System Rules

CodDock should feel modern, minimal, professional, and premium. The interface should be clean, spacious, trustworthy, and suitable for a serious SaaS/startup product.

Visual direction:

- Modern SaaS
- Linear/Vercel-style polish
- Apple-level simplicity
- Calm, confident, and conversion-focused
- Minimal but visually impressive
- Strong hierarchy without clutter

Brand color:

```txt
#2563eb
```

Use the brand color selectively:

- Primary CTAs
- Active states
- Small highlights
- Icons
- Focus states
- Subtle accents

Do not overuse blue. The design should remain balanced and premium.

When using shadcn theming, prefer semantic tokens:

```txt
bg-background
bg-card
bg-muted
bg-accent
text-foreground
text-muted-foreground
text-primary
border-border
ring-ring
```

Avoid unnecessary hardcoded colors such as:

```txt
bg-[#050505]
text-zinc-400
border-[#171717]
```

Use hardcoded colors only when explicitly required for a brand-specific element.

Typography guidance:

- Use PolySans as the primary product font when available.
- Use one font family consistently.
- Use font weight and spacing to create hierarchy.
- Avoid excessive tiny text.
- Avoid overusing bold weights.

Recommended text hierarchy:

```txt
Hero heading: text-5xl to text-7xl, font-semibold/bold, tracking-tight
Section heading: text-3xl to text-5xl, font-semibold, tracking-tight
Page heading: text-2xl to text-4xl, font-semibold, tracking-tight
Card title: text-base to text-lg, font-medium/semibold
Body: text-sm to text-base, text-muted-foreground, leading-relaxed
Sidebar/nav: text-sm or text-xs, font-medium
Metadata/badges: text-xs only
```

---

## 4. Component Rules

Use shadcn/ui components as the base for interactive UI whenever practical:

- Button
- Card
- Dialog
- Dropdown Menu
- Navigation Menu
- Sheet
- Tabs
- Input
- Textarea
- Select
- Badge
- Avatar
- Separator
- Scroll Area

Guidelines:

- Keep components small and composable.
- Do not duplicate shadcn primitives unnecessarily.
- Do not create custom accessibility-heavy primitives when shadcn already provides them.
- Prefer composition over prop-heavy components.
- Extract repeated UI only after it appears more than once or is clearly reusable.
- Keep server-safe components free of client hooks.
- Do not add `"use client"` to a file unless the file truly needs it.

Naming:

```txt
PascalCase for components
camelCase for variables/functions
kebab-case for route segments
SCREAMING_SNAKE_CASE for enum-like constants only when useful
```

---

## 5. Routing and App Router Rules

Use `src/app/` for route structure only:

```txt
app/
├── layout.tsx
├── page.tsx
├── globals.css
├── (marketing)/
├── (auth)/
├── (dashboard)/
└── onboarding/
```

Rules:

- Keep pages primarily responsible for composition.
- Keep business/UI logic inside feature modules when it grows.
- Use route groups to organize layouts without affecting URLs.
- Use loading, error, and not-found files where they improve UX.
- Use metadata exports for SEO-relevant pages.
- Keep public marketing pages fast, polished, and accessible.

Example:

```txt
app/(dashboard)/layout.tsx       # dashboard shell
app/(dashboard)/dashboard/page.tsx
app/(dashboard)/roadmaps/page.tsx
app/(dashboard)/projects/page.tsx
app/(dashboard)/community/page.tsx
```

---

## 6. Dashboard Layout Rules

The dashboard shell should behave like an application interface, not a long marketing page.

Required behavior:

- Header remains fixed in the application viewport.
- Sidebar remains fixed in the application viewport.
- Only the main dashboard content area scrolls.
- Mobile sidebar should open through a sheet/drawer-style interaction.
- Avoid layouts that make the screen feel zoomed out or overly stretched.

Recommended layout model:

```txt
h-screen
overflow-hidden

Header: fixed height
Body: calc(100vh - headerHeight)
Sidebar: full height
Main: overflow-y-auto
```

Use semantic shadcn theme tokens instead of hardcoded dashboard colors unless a specific brand accent is required.

---

## 7. Product Domain Concepts

Important frontend domain concepts:

```txt
User
CareerProfile
OnboardingProfile
Roadmap
RoadmapStage
RoadmapTopic
Project
ProjectMilestone
ProjectSubmission
CommunityPost
CommunityComment
DeveloperProfile
ProgressState
```

Current onboarding profile shape:

```ts
type OnboardingProfile = {
  background:
    | "university-student"
    | "self-taught"
    | "fresh-graduate"
    | "junior-developer"
    | "career-switcher"
    | "other";

  goals: string[];

  path:
    | "frontend"
    | "backend"
    | "fullstack"
    | "mobile"
    | "ai-engineering"
    | "data-ml"
    | "not-sure";

  skillLevel:
    | "complete-beginner"
    | "understand-basics"
    | "follow-tutorials"
    | "build-with-help"
    | "build-independently"
    | "professional-experience";

  blockers: string[];
};
```

Onboarding should be used to personalize:

- Recommended roadmap
- Starting stage
- Project difficulty
- Community spaces
- Next action

Do not ask onboarding questions unless the product can use the answer.

---

## 8. MVP Product Priorities

Current MVP priority:

1. Landing page
2. Early access/waitlist UI
3. Onboarding flow
4. Dashboard shell
5. Roadmap pages
6. Project-based learning pages
7. Community/forum pages
8. Developer profile/progress UI

Do not prioritize:

- Complex gamification
- Advanced AI tools
- Payment flows
- Company dashboards
- Hiring marketplace UI
- Overly broad roadmap categories
- Heavy admin panels
- Mobile-specific UI

The MVP should prove that users understand the value proposition and want to follow roadmaps, build projects, and participate in community feedback.

---

## 9. Roadmaps and Projects UX

Roadmaps should not feel like static checklists. They should guide users through stages, outcomes, and proof-of-work.

A strong roadmap page should include:

- Track overview
- Target audience
- Duration estimate
- Skill outcomes
- Stages
- Topics
- Project milestones
- Recommended resources
- Completion criteria
- Next recommended action

A strong project page should include:

- Project overview
- Problem statement
- Requirements
- Suggested tech stack
- Feature checklist
- Milestones
- Deployment guidance
- README/case study guidance
- Submission CTA

The project-based learning experience is the strongest differentiator. Treat it as a core product surface, not a secondary content page.

---

## 10. Community UX

The community should be structured around execution and feedback, not generic discussion.

Recommended community categories:

- Project Submissions
- Portfolio Reviews
- Roadmap Help
- Debugging Help
- Accountability
- Freelancing & Jobs
- Announcements

Avoid making the community look empty. For prototypes, use realistic mock content that reflects actual CodDock use cases.

Examples:

- “Please review my booking system project”
- “How should I structure my GitHub README?”
- “Which roadmap should I follow for freelancing?”
- “I built my first Next.js dashboard — feedback needed”

---

## 11. Data and Mocking Rules

During frontend-first development, mock data is acceptable.

Rules:

- Keep mock data in constants or feature-level data files.
- Do not hardcode large mock objects directly inside page components.
- Structure mock data close to the expected future API response shape.
- Keep IDs, slugs, and timestamps realistic.
- Use TypeScript types for mock data.

Example:

```txt
features/roadmaps/constants/roadmaps.ts
features/projects/constants/projects.ts
features/community/constants/posts.ts
```

When real APIs are introduced later, replace mock data at the data boundary rather than rewriting the UI from scratch.

---

## 12. Forms and Validation

Use forms carefully. Keep them fast, simple, and low-friction.

Guidelines:

- Use React Hook Form for non-trivial forms.
- Use Zod for runtime validation.
- Keep validation messages clear and human.
- Disable submit buttons during pending states.
- Show success and error states clearly.
- Avoid asking for unnecessary personal data.

Onboarding forms should be optimized for completion, not data collection.

---

## 13. TypeScript Rules

- Use strict TypeScript.
- Avoid `any`.
- Prefer `unknown` when the type is genuinely unknown.
- Define reusable domain types in `types/` or feature-level `types/` files.
- Do not over-abstract simple types.
- Avoid large global type files that become dumping grounds.
- Keep component prop types close to the component unless shared.

Allowed exception:

- Temporary `TODO` types may be used only when clearly marked and replaced quickly.

---

## 14. Accessibility and UX Rules

- Use semantic HTML.
- Use accessible shadcn primitives when available.
- Ensure buttons are buttons and links are links.
- Add useful `aria-label`s for icon-only buttons.
- Maintain visible focus states.
- Avoid tiny click targets.
- Keep color contrast readable in both light and dark themes.
- Do not rely on color alone to communicate state.
- Keep mobile navigation usable.

---

## 15. Performance Rules

- Keep marketing pages lightweight.
- Optimize images with `next/image` where appropriate.
- Use `next/font/local` for local fonts when possible.
- Do not load unnecessary font variants.
- Avoid large client components.
- Avoid unnecessary animation libraries unless they meaningfully improve UX.
- Prefer CSS transitions for simple interactions.
- Do not move large static content into client components without reason.

Recommended font loading:

```txt
PolySans Neutral → 400
PolySans Median  → 500
PolySans Bulky   → 700
```

Use `style: "normal"` for normal font files. Do not use custom style names like `"neutral"`, `"median"`, or `"bulky"` as CSS font styles.

---

## 16. Environment Variables

Frontend environment variables exposed to the browser must use the `NEXT_PUBLIC_` prefix.

Rules:

- Do not commit `.env` files.
- Do not expose secrets in frontend code.
- Do not place private API keys in client components.
- Keep `.env.example` updated when environment variables are introduced.

Common frontend examples:

```txt
NEXT_PUBLIC_APP_URL=
NEXT_PUBLIC_ANALYTICS_ID=
```

Only add environment variables when the application actually needs them.

---

## 17. Commands

Use the package manager already configured in the project. If the project uses `pnpm`, prefer:

```bash
pnpm install
pnpm dev
pnpm build
pnpm lint
```

If the project uses `npm`, use:

```bash
npm install
npm run dev
npm run build
npm run lint
```

Do not assume workspace/root commands exist.

---

## 18. Git and Code Change Rules

When modifying code:

- Keep changes focused.
- Avoid unrelated refactors.
- Do not rewrite working files without a clear reason.
- Preserve existing naming conventions unless improving consistency intentionally.
- Explain breaking changes clearly.
- Do not delete useful code without confirming it is unused.
- Prefer small, reviewable changes.

Before major rewrites, create a backup branch or commit.

---

## 19. AI Agent Behavior Rules

When assisting with this project:

- Prioritize practical, production-oriented frontend code.
- Avoid generic SaaS templates.
- Keep CodDock's product strategy in mind.
- Prefer clean, maintainable architecture over clever abstractions.
- Do not introduce backend-specific implementation details into this frontend guide.
- Do not introduce monorepo assumptions.
- Do not introduce Docker, CI/CD, database, ORM, or server architecture instructions unless the user specifically asks in a separate context.
- Use shadcn theme tokens unless the user explicitly requests custom hardcoded colors.
- Keep the UI premium, minimal, and calm.
- When asked for code, provide complete files when practical.
- When modifying existing code, preserve the user's structure unless there is a clear technical reason to change it.

---

## 20. Absolute Restrictions

- No `any` unless explicitly justified and temporary.
- No unnecessary `"use client"`.
- No hardcoded secrets.
- No committed `.env` files.
- No backend/server/database assumptions in frontend files.
- No monorepo/workspace assumptions.
- No excessive hardcoded colors that fight shadcn theming.
- No decorative empty folders.
- No overbuilt abstractions for MVP features.
- No generic, cluttered, low-trust UI.
