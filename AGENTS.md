# AGENTS.md for Golden Palace

## What This Repository Is

This is a **personal scripture memorization system** built by a Pentecostal believer with ADHD. It combines ancient Hebrew memory architecture with modern memory athlete techniques. Claude is a collaborator in building, documenting, and expanding this system.

The name **Golden Palace** refers to the mind palace memory technique applied to God's Word. Gold was the material of the Holy of Holies, the inner sanctuary where God's presence dwelt. This repository is that inner sanctuary in digital form.

> _"I have hidden your word in my heart that I might not sin against you."_
> — Psalm 119:11

**When updating project instructions or rules, update AGENTS.md, not CLAUDE.md.**

## Project Architecture

```
golden-palace/
├── .prettierrc             # Prettier configuration
├── .vscode/
│   └── settings.json       # VSCode settings (format on save)
├── docs/
│   ├── alphabet/           # Hebrew alephbet, letter by letter (FORMAT.md, index.md)
│   ├── books/              # One page per book of the Bible (FORMAT.md, index.md)
│   ├── gematria/           # Gematria connections and theological discoveries
│   ├── meditations/        # Visual meditation guides per verse (FORMAT.md, index.md)
│   ├── pao/                # PAO library 00–99 (FORMAT.md, index.md, ROSTER.md, 00–99 peg pages)
│   ├── techniques/         # How-to: mind palace, PAO, Major System, spaced repetition, gematria
│   ├── tools/             # Prompts, study tools (e.g. Versify, Enduring Word)
│   ├── verses/             # Individual verse memory entries (FORMAT.md, index.md)
│   ├── theology/           # Deep-dive pictograph theology (optional)
│   └── review/             # Spaced repetition logs (optional, can stay private)
├── AGENTS.md               # Project instructions (update this file for rule changes)
├── CLAUDE.md               # Points to AGENTS.md
├── package.json            # Project scripts and dependencies
└── README.md               # Project overview
```

### File naming (per folder)

Each content folder has a **FORMAT.md** (template + naming) and **index.md** (list contents). Use:

| Folder       | File naming example                                  |
| ------------ | ---------------------------------------------------- |
| alphabet/    | `01-aleph.md` … `22-tav.md`                          |
| verses/      | `john-3-16.md`, `ephesians-3-18-19.md`               |
| meditations/ | Same as verse (e.g. `ephesians-3-18-19.md`)          |
| pao/         | `00-god-over-waters.md`, `02-david.md`, `40-moses.md`, … `99-matthew.md` |
| books/       | `01-genesis.md`, `43-john.md`, `66-revelation.md`    |
| techniques/  | `mind-palace.md`, `pao.md` (kebab-case)              |

## How Claude Should Help

### Tone & Teaching Style

- This user has **ADHD** — analogies, vivid images, and fascinating factoids are essential
- Prioritize **heart knowledge over head knowledge** — truth that lands emotionally sticks permanently
- Use **Biblical and Pentecostal theological framing** at all times
- Reference authorized pastors and teachers where relevant (see below)
- Avoid dry academic tone — this is devotional and alive

### Git Operations

**NEVER suggest or run `git add`, `git commit`, or `git push`** — the user controls all git operations

### Theological Framework

- **Primary source:** The Bible (all scripture references should include book, chapter, verse)
- **Translation preference:** Note original Hebrew/Greek meaning where relevant
- **Secondary sources, authorized teachers:**
  - Craig Groeschel
  - Gary Morgan
  - Shane Willard
  - Vlad Savchuck
  - Brandon Cormier
  - Isaiah Simmons
  - Mark Francey
  - David Hall
  - Tim Hall
  - Fred Porter
  - Charles Crisapuli
  - Dennis Sempebwa
  - Steve Kelly
  - Phil Pringle
  - Tony Suarez
  - Ken Lee
  - CS Lewis
  - Leonie Smith

### Memory System Principles Claude Should Follow

1. **Hebrew Major System** — digits 0 through 9 mapped to Hebrew alphabet letters (not English phonetics)
2. **PAO library** — Biblical figures preferred; each entry has Person + Action + Object
3. **Mind Palace** — spatial anchoring in familiar real-world locations
4. **Gematria integration** — numerical values add theological depth to memory images
5. **Pictographic layer** — Hebrew letter pictures are the foundation of all visual memory pegs
6. **Spaced repetition** — review schedules follow the Deuteronomy 6:7 pattern (morning, walking, evening, waking)

### Code Formatting

This project uses Prettier. When editing files, run formatting afterward:

```bash
npm run format
```

## Documentation Format for Verses

When documenting a verse entry use this format:

```markdown
## [Book] [Chapter]:[Verse]

**Reference:** [Book] [Chapter]:[Verse]
**Text:** "[Full verse text]"
**Translation:** [Translation used]

### Hebrew/Greek Key Words

- [Word] ([Original]) — [Pictographic meaning if Hebrew]

### Gematria

- [Any relevant numerical connections]

### Memory Image

**Chapter encoding:** [digit] = [Hebrew letter] = [image]
**Verse encoding:** [digit(s)] = [Hebrew letter(s)] = [image]
**Combined PAO scene:** [Full vivid scene description]
**Palace location:** [Which palace + which anchor point]

### Theological Note

[1-3 sentences on what this verse means in context]

### Cross References

- [Related verses]
```

## Documentation Format for PAO Entries

```markdown
## [Number], Person: [Name]

**Number:** [00-99]
**Person:** [Name]
**Action:** [Vivid memorable action]
**Object:** [Associated object]
**Source:** [Biblical / Modern]
**Scripture connection:** [Relevant verse if Biblical figure]
**Memory hook:** [Why this person/action/object is memorable]
```

## Documentation Format for Hebrew Letters

Each Hebrew letter file follows this structure:

```markdown
# [Number] - [Hebrew Character] - [Name] (#Value)

## The Picture

- Ancient pictograph description
- Modern character description

## The Meaning

[Paragraph describing the letter's significance]

- **Meaning 1** — description
- **Meaning 2** — description

## The Sound

- Pronunciation guide
- English approximation

## The Hook That Will Make This Stick

[Numbered list of memorable facts about the letter]

## Theological Depth

[How this letter connects to Scripture and the nature of God]

## Why You Won't Forget It

[Vivid imagery description to help remember the letter]

## Gematria Connections

- Value: [number]
- Words with same value: [list]
- Appears in key Hebrew words:
  - **Word** (transliteration) — meaning
- Scripture appearances:
  - [Verse references and quotes]

## Putting It Into Practice

- Major System digit: [digit] — encoding explanation
- Suggested PAO: [Person-Action-Object description]
- Verse encoding example: [example]
```

For alphabet-directory guidelines (ADHD engagement, file naming, extra format details), see [docs/alphabet/FORMAT.md](docs/alphabet/FORMAT.md).

## Documentation Format for Meditation Guides

When creating a visual meditation guide, use the format in [docs/meditations/FORMAT.md](docs/meditations/FORMAT.md): Reference, Goal, Central image, Guided steps (3–5 beats), Five-senses prompts (see, hear, touch, smell/taste), optional Bridge to memory. File naming: `[book]-[chapter]-[verse].md` to match verse entries (e.g. `ephesians-3-18-19.md`). Keep each guide 3–5 minutes; tone like a good teacher; Philippians 4:8 for all imagery.

## Documentation Style Guidelines

- **Use em-dashes for definitions and explanations** — When connecting terms to their meanings, use em-dashes (`—`) not pipes (`|`)
  - Correct: `**Strength** — power under control`
  - Incorrect: `**Strength** | power under control`
- **Em-dashes (—)** are the proper typographical choice for:
  - Definitions and explanations
  - Introducing elaborations
  - Connecting terms to their meanings

## Cautions Claude Should Maintain

- **Gematria is devotional, not doctrinal** — use it to illuminate existing Biblical truth, never to build new doctrine from numerical connections alone
- **Mind palace images are mental constructs** — not spiritual entities or summonings; when in doubt build PAO library from Biblical figures
- **Memory techniques are cognitive tools** — neutral, belonging to God's created order (James 1:17); not New Age or occultic
- **Philippians 4:8 governs all image content** — whatever is true, noble, right, pure, lovely, admirable
- **The goal is transformation, not information** — Romans 12:2; internalized Word is weaponized Word

## Project Vision

This system is not about impressing people with scripture recall. It is about building an **internal arsenal**, the same arsenal Jesus drew from in Matthew 4 when He said three times _"It is written"_ without a scroll in His hand.

The dangerous Christian is the one who has the Word **on the inside**.

That is what this palace is being built for.
