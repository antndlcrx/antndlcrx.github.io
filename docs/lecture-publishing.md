# Publishing an intensive lecture

The collection at `/course/lectures/` extends the core course. Lecture pages use the existing `frontier` module track and `CourseLayout`, so they share its typography, navigation and teaching blocks.

## Tatiana Shavrina, 2026

- Page: `/course/frontier/shavrina-evaluation/`
- Source: `src/content/modules/frontier/shavrina-evaluation.mdx`
- Original deck: `public/materials/lectures/2026/shavrina-llm-agents-and-evaluation.pdf`
- Illustrated excerpt: PDF page 47, rendered without alteration to `public/img/lectures/2026/shavrina-valid-submissions.png`.
- Notes are an editorial companion based on the slides, not a recording transcript. The interactive survey example and practical evaluation protocol are additions by Oxford LLMs. This lecture has no problem set.
- Recording and final thumbnail are still needed. No video duration, captions, or chapter timestamps have been inferred from slide numbers.

## Connect the recording

1. Upload the final recording to the Oxford LLMs YouTube channel. Use the draft title and description in `youtube-shavrina-2026.txt`. Review captions against the actual audio and add chapters using verified recording timestamps.
2. Add the resulting HTTPS YouTube URL to the lecture frontmatter as `video`. Watch, youtu.be, embed, live, and Shorts URL formats are accepted. The page normalises it to a watch link.
3. Put the final thumbnail in `public/img/lectures/2026/` and add its site-relative path as `thumbnail`. Without custom artwork, a linked video uses YouTube's standard preview. Without a video URL, the page clearly says “Recording forthcoming” and has no inactive play button.
4. Review the notes with the recording and update the reading estimate if necessary. Change `status` from `draft` to `published` when editorial review is complete. As with existing modules, both drafts and published entries produce pages; `planned` entries do not.
5. Run `npm run build`, review desktop and mobile, and deploy using the existing GitHub Pages workflow. The link in the YouTube description should be used when the page is live.

## Add the next lecture

Copy the MDX entry into `src/content/modules/frontier/` with a unique filename, ID, and order. Keep `track: frontier` and `layer: appendix`. Supply speaker, edition, description, objectives, slides, and reading estimate. `speakerRole`, `speakerImage`, `video`, and `thumbnail` are optional. Add original slide references, guided notes, a concrete research example, and reflection questions. Problem sets are optional and are omitted from Tatiana's lecture. Distinguish editorial additions from the speaker's material.

The lecture index and sidebar populate from the collection. Add a contextual link from the relevant core module and update the workshop materials entry. Register any new interactive widget in `src/lib/content-checks.ts`. Keep numerical claims tied to their source and date; do not silently turn a lecture snapshot into a current leaderboard.
