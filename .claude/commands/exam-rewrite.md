Rewrite the chapter file at: $ARGUMENTS

This is for a **written exam focused on understanding** (not memorization).

You have **full creative freedom** to restructure the chapter for the best exam-prep result. You can:
- **Restructure** sections entirely — reorder, merge, split, or rename sections if it creates a better logical flow
- **Group** related concepts that are scattered across the chapter into unified sections
- **Remove** anything that is pure filler: specific statistics, historical trivia, lengthy illustrative examples that aren't directly testable
- **Add** brief clarifying sentences, transition lines, or summary tables if they help connect concepts
- **Combine** overlapping or redundant explanations into a single concise version
- **Concise** everything — say in one sentence what the original says in a paragraph

The goal is the clearest, most scannable structure for exam review. Don't preserve the original structure out of loyalty — rebuild it if a better structure exists.

## Content Rules

1. **Cut** filler: statistics, historical trivia, verbose examples that aren't testable
2. **Keep** formal definitions, named frameworks, named models, and citations (author, year)
3. **Keep** the "why" and relationships between concepts — these are what a written exam tests
4. **Keep** all formulas and their practical meaning
5. **Compress** verbose bullet lists into compact **tables** (property | meaning)
6. **Compress** multi-paragraph examples into 1-2 sentences making the same point
7. **Reorder** freely: put foundational frameworks first, then details that build on them
8. **Merge** sections that cover the same concept from different angles into one cohesive section

## Diagrams

Use raw HTML diagrams in `.md` files. Use `02-information-economy.md` as reference for working patterns.

- **When to use:** Hierarchies, flows, layered models — anywhere a visual communicates structure faster than text
- **Avoid duplication:** Don't restate what the diagram already shows
- **Colors:** Keep neutral (grays/borders). Only use color when it encodes meaning. No arbitrary color per cell.
- **Keep simple:** Prefer vertical flows with arrow characters (↓ ↘ ↙ ↻) over SVG-heavy positioned layouts. Don't use overlapping/absolute-positioned elements.

### Tailwind JIT does NOT work in `.md` files

Tailwind JIT skips classes that only appear in `.md` files. **Use inline `style` for all layout properties.** Only use Tailwind classes that also exist in `.astro` files.

**Always inline `style`:** `width`, `height`, `grid-template-columns`, `white-space`, `position`, `display:grid`

**Safe Tailwind classes** (exist in .astro): `flex`, `flex-col`, `flex-1`, `grid`, `items-center`, `items-start`, `justify-center`, `gap-*`, `w-full`, `max-w-sm/md/lg/2xl`, `rounded-lg`, `rounded-full`, `border`, `border-2`, `text-xs`, `text-sm`, `font-medium`, `font-semibold`, `font-bold`, `italic`, `text-center`, `px-*`, `py-*`, `my-*`, `bg-*`, `text-*`, `dark:bg-*`, `dark:text-*`, `dark:border-*`, `opacity-50`, `overflow-x-auto`

```html
<!-- WRONG — grid-cols-3, w-48, whitespace-nowrap won't generate -->
<div class="grid grid-cols-3 w-48 whitespace-nowrap">

<!-- RIGHT — inline style for layout, Tailwind for colors/spacing -->
<div class="grid" style="grid-template-columns:repeat(3,minmax(0,1fr)); width:12rem; white-space:nowrap;">
```

## Formatting Conventions

| Pattern | Use For |
|---------|---------|
| `> **Definition:**` blockquotes | Formal definitions and key takeaways |
| `> **Important:**` blockquotes | Warnings, common exam pitfalls |
| **Bold** | Key terms on first occurrence |
| Tables | Structured comparisons, multi-dimensional concepts, property lists |
| HTML+Tailwind diagrams | Hierarchies, flows, layered models, tree structures |
| `---` horizontal rules | Visual separators between major parts |
| Numbered lists | Ordered sequences, hierarchies |
| Bullet lists | Only when items are truly unstructured |

## Process

1. Read the chapter file completely first
2. Identify what is testable understanding vs filler
3. Rewrite in place, keeping the same frontmatter unchanged
4. Aim for ~40% reduction in line count while preserving every testable concept
5. After rewriting, run `npm run build` to verify no errors
