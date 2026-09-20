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