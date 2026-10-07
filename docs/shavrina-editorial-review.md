# Tatiana Shavrina lecture companion: editorial review

7 October 2026. Three sequential writer/critic rounds, requested by the Oxford LLMs team. The writer owned the lecture MDX; a separate critic reviewed coherence, technical accuracy, student value, source fidelity and attribution. Components and browser verification were handled alongside the writing.

## Round 1: an argument through the lecture

Replaced the short overview with a connected narrative: a preferred health answer can still fail; physician-defined criteria make those failures measurable; research agents add execution and resources; benchmark credibility determines what can be claimed. Retained the lecture's four evaluation axes. Clearly attributed the lecture to Tatiana and the notes and added illustrations to Oxford LLMs.

The critic accepted the larger format because its sections contribute to that argument. Required more concrete AIRS results, an explanation of normalisation, a primary SWE-bench link and narrower language about Arena's participating raters.

## Round 2: evidence and exploration

Added HealthBench's rubric/grader distinction and three failure slices, a sourced interactive historical chart, an original rubric illustration, collapsible original slides, three selected AIRS task results and on-demand current benchmark views. Separated historical results, synthetic examples and externally maintained data.

The critic accepted the expanded evidence and its placement. Required exact HealthBench next-response wording, AIRS invalid-run treatment and task-level VSR averaging, accurate slide labels, and clear source-loading fallbacks. Recommended response vignettes so the rubric demonstrates observable behaviour rather than just score toggles.

## Round 3: precise definitions and reader experience

Added signed rubric-score response vignettes, clarified custom checkbox exploration, corrected HealthBench's measurement unit, explained invalid AIRS runs receiving zero normalised score and VSR averaging per task, and placed the aggregate HealthBench source beside its definitions. Corrected original slide titles.

Final critic verdict: accepted, with no material prose, fidelity, attribution or teaching-content fixes remaining. Desktop and mobile screenshots confirmed readable hierarchy and useful interactions. The optional mobile AIRS table scroll hint was added, along with keyboard access to the scrolling region. All three requested rounds are complete.

## Evidence conventions

- The original 99-page presentation remains the primary lecture record. No transcript, recording timestamps or video URL were invented.
- HealthBench experts define/validate criteria; a model grader applies them. Weighted scores and error rates have different denominators. Neither directly measures patient outcomes.
- The original HealthBench slices retain 2025 system-card results. A common chart scale supports comparisons within a slice; an observed zero does not prove failure is impossible.
- Rubric criteria, weights and response vignettes are Oxford LLMs inventions. Raw signed scores may be negative; the actual HealthBench evaluator clips aggregated means, not each raw response score.
- AIRS lecture charts compare 27 model/scaffold configurations. The public repository currently publishes a different comparison. Its fetched leaderboard is not substituted for lecture results.
- Selected AIRS improvements are against the slide's cited reference results, not a claim about today's best results or general scientific superiority.

## Technical verification

Astro production build passes. Browser checks cover rubric presets and negative scores, all HealthBench slice values, the synthetic task-mix ranking reversal, real SWE-bench and LiveCodeBench frame contents, real AIRS source rows, source-fetch failure fallback, local links and anchors, and absence of a problem set. Responsive checks at 1440, 768, 390 and 320 pixels show no page overflow. Original rendered slide excerpts and desktop/mobile screenshots were inspected.

Recording URL and final thumbnail remain the publishing inputs needed from the team.
