# QWEN.md — Instructions for Qwen

## Your Role

You are a **code implementer**, not a designer.

- **DO NOT design anything.** All visual decisions — colors, fonts, spacing, radius, shadows, component styling — are already defined in `DESIGN.md`.
- If a value or rule is missing from `DESIGN.md`, **ask me**. Do not guess, invent, or use defaults from your training data.
- You do not have creative freedom over visuals. Your job is to translate the design into code, exactly as specified.

## Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS + CSS Modules (for complex components only)
- **Language**: JavaScript (`.jsx`, `.js`)
- **Icons**: Lucide

## Folder and File Structure

Follow this structure exactly. Do not reorganize or rename folders.

src/
├── app/ # Next.js App Router
│ ├── layout.jsx # Root layout (Navbar, Footer)
│ ├── page.jsx # Home page
│ ├── globals.css # Tailwind directives + base styles
│ └── (routes)/ # Additional route groups as needed
│
├── components/
│ ├── ui/ # Primitive, reusable components
│ │ ├── Button/
│ │ │ ├── Button.jsx
│ │ │ ├── Button.module.css # only if styles can't be done in Tailwind
│ │ │ └── index.js # barrel export
│ │ ├── Card/
│ │ ├── Input/
│ │ └── ...
│ │
│ └── sections/ # Page-level composed sections
│ ├── Hero/
│ ├── ArchiveGrid/
│ ├── SidebarFilters/
│ └── ...
│
├── lib/ # Shared utilities
│ ├── utils.js
│ └── constants.js
│
├── hooks/ # Global custom hooks
│ └── useArchive.js
│
└── public/ # Static assets (images, fonts)


### Structure Rules

1. **One component per folder.** Every component lives in its own directory.
2. **Component file name matches folder name.** `Button/Button.jsx`, not `Button/index.jsx`.
3. **Use `index.js` for barrel exports** inside each component folder. Import as `@/components/ui/Button`.
4. **PascalCase for all component folders and files.**
5. **camelCase for all non-component files** (`utils.js`, `useArchive.js`).
6. **Max 3 levels of nesting.** Do not create `components/ui/forms/inputs/TextInput/`. Flatten it.
7. **Colocate what changes together.** Component-specific hooks, styles, or sub-components live inside the component folder.
8. **Do not create new top-level folders** without asking me first.

## Naming Conventions

| Item | Convention | Example |
|------|-----------|---------|
| Component folders | PascalCase | `Button/`, `ArchiveGrid/` |
| Component files | PascalCase | `Button.jsx`, `ArchiveGrid.jsx` |
| Hooks | camelCase, `use` prefix | `useArchive.js`, `useFilters.js` |
| Utilities | camelCase | `formatDate.js` |
| Constants | UPPER_SNAKE_CASE | `MAX_ITEMS` |
| CSS Modules | PascalCase, `.module.css` | `Button.module.css` |
| Non-component files | camelCase | `archiveService.js` |

## Imports

- Use **absolute imports** with `@/` alias pointing to `src/`.
- Never use relative imports like `../../../../`. If going up more than one level, use `@/`.
- No file extensions in imports: `import { Button } from '@/components/ui/Button'`.
- Import from barrel files, not from deep paths.

## Code Style

- **Functional components only.** No class components.
- **Arrow functions**: `const Button = () => { ... }`.
- **Named exports everywhere** — except Next.js `page.jsx` and `layout.jsx`, which require default exports.
- **2 spaces** for indentation.
- **Single quotes** for JS, **double quotes** for JSX attributes.
- **No `any`-equivalent shortcuts.** Write clean, explicit code.

## Styling Rules

- **Tailwind utility classes are the default.** Use them for layout, spacing, typography, and color.
- **CSS Modules only for complex components** that can't be cleanly expressed with Tailwind (e.g., multi-state animations, complex grid systems, pseudo-element tricks).
- **Never use inline styles** (`style={{ ... }}`) unless the value is dynamic and can't be a class.
- **Never use `!important`.**
- All colors, spacing, radius, and typography **must come from `DESIGN.md`**. Do not invent values.
- If a Tailwind class doesn't exist for a design token, use a CSS variable or arbitrary value syntax `[value]` — but ask first.
- Google Fonts must be loaded via `next/font/google`, not `@import url(...)`.
- If `@import` is ever used in CSS, it must be the first line of the file — before Tailwind and all other rules.

## Design Tokens & Tailwind Integration

- All design tokens (colors, fonts, radius, spacing) must be defined **once** in `@theme` inside `src/app/globals.css`.
- **Never define design tokens in `:root`.** They must live in `@theme` so Tailwind recognizes them natively.
- Use the exact token names from `DESIGN.md`, mapped to Tailwind's expected namespaces:
  - Colors → `--color-*` (e.g., `--color-yellow-300: #DDAD4C`)
  - Fonts → `--font-*` (e.g., `--font-heading: "Crimson Text", serif`)
  - Radius → `--radius-*` (e.g., `--radius-sm: 4px`)
  - Spacing → `--spacing` (base unit `8px`)
- In components, use **Tailwind utility classes** generated from these tokens (`bg-yellow-300`, `font-heading`, `rounded-sm`).
- **Never use arbitrary value syntax** like `bg-[#DDAD4C]` or `text-[14px]` when a token exists.
- **Never hardcode hex values, font names, or pixel values** inside components.
- CSS Modules (when used) must reference tokens via `var(--color-*)` or `var(--font-*)`, never raw values.

## What NOT to Do

- ❌ Do not invent design tokens, colors, fonts, or spacing. Use only what's in `DESIGN.md`.
- ❌ Do not create new top-level folders without asking.
- ❌ Do not add dependencies without asking.
- ❌ Do not put multiple components in one file (except tiny sub-components inside a compound component).
- ❌ Do not use inline styles, `!important`, or hardcoded design values.
- ❌ Do not refactor or "improve" code outside the scope of my request.
- ❌ Do not use default exports (except Next.js pages/layouts).
- ❌ Do not use relative imports that climb more than one level.

## Workflow

1. **Read `DESIGN.md`** before writing any UI code.
2. **If a design value is missing, ask me.** Do not guess.
3. **Implement one component or feature at a time.**
4. **Before creating a new file or folder**, check this document. If unsure, ask.
5. **Before adding a dependency**, ask.
6. You may create new files/folders that clearly fit the established patterns without asking. Anything outside those patterns requires confirmation.

## Strictness Level

**Moderate.** Follow established patterns freely. Ask before:
- Adding dependencies
- Creating new top-level folders
- Deviating from the folder structure above
- Introducing any design value not in `DESIGN.md`