# Academic homepage refresh — September 13, 2026

## Content and sources

- Current identity and research interests: explicitly supplied by Hyunggyu Min for this update; Won Lab affiliation and educational history also appear in the existing assets/CV.pdf.
- Published articles: exact titles, author order, year, and DOI verified against publisher-deposited Crossref records:
  - https://doi.org/10.1016/j.cell.2024.12.022
  - https://doi.org/10.1038/s41598-023-27586-4
  - https://doi.org/10.1016/j.jff.2022.105293
- CROP-seq preprint: https://pubmed.ncbi.nlm.nih.gov/42327190/ and https://doi.org/10.64898/2026.06.09.731172 (June 10, 2026). Listed as a preprint, not as an accepted journal article.
- Software: public GitHub repositories under https://github.com/HGmin1159. The Nanopore MPRA mapping description follows its README; the current plasmid-specific limitation is retained.

## Changes

- Replaced the study-card landing page with a researcher introduction, three current research areas, publication/software links, and a compact study/personal archive entry point.
- Primary navigation: Research, Publications, Software, CV, Blog, Personal.
- Updated shared author biography and site metadata; removed outdated expected-degree language and the Statistics typo from the landing page by replacing the old education panel.
- All study categories remain linked from Blog. Poems retains its original URL and content and is also linked from the landing page and Personal.
- SOP was already deleted in commit 9f3f3667, leaving a broken homepage link. Personal now links to its preserved original in Git history (commit 5e4eef13); no PDF is recreated or republished.
- Fixed the shared author photo path, which pointed to missing avatar.jpg, using existing avatar2.jpg.
- Existing CV PDF is unchanged. A new CV page provides current educational context and points to updated publication records.
- Existing Minimal Mistakes Mint theme and article styles retained. Landing-page additions are scoped to .research-home.

## User confirmation TODOs

- [ ] Confirm any journal acceptance/publication after the June 2026 CROP-seq preprint; only its public preprint status is asserted.
- [ ] Provide approved titles, author lists/order, and status for any manuscripts in preparation. The Publications source has a placeholder comment; no fictional manuscript entries appear on the public site.
- [ ] Confirm final name, public repository, release status, documentation, and citation for the mZINB/CROP-seq DEG package. ZiPert and ZiPEX are undecided candidates, not published package names. The public page uses a generic in-development description.

## Proposed CV updates — do not overwrite the PDF before review

- Use “PhD student in Biostatistics” for the ongoing degree to avoid implying completion.
- Use the exact Cell title: “Massively parallel reporter assay investigates shared genetic variants of eight psychiatric disorders”; add DOI 10.1016/j.cell.2024.12.022.
- Update the CROP-seq entry to the publicly available title “Perturbation of genes linked to common schizophrenia risk variants identifies cilia programs” and add its June 2026 preprint DOI. Confirm journal status separately instead of carrying forward “Under review Cell” as a current assertion.
- Add publication years, full titles, and DOIs to the clinical/microbiome entries.
- Consider adding regulatory genomics, statistical methodology, MPRA, and CROP-seq to the research interests; place earlier interests afterward.
- Add GitHub and the public Nanopore MPRA mapping pipeline; add new packages only after their details are confirmed.
- Preserve the existing CV as a dated archival copy if a revised PDF is later supplied.

This file lives in docs/, already excluded from the public Jekyll build.

## Validation

- Local Jekyll 3.9.5 build succeeds with the checked-in Minimal Mistakes theme. Preview-only configuration disables remote-theme fetching and the unused gist plugin; the production configuration is retained.
- The original revision was built with the same local setup. Both builds have the same pre-existing warnings for five images stored under _posts and for pagination without index.html.
- Static internal href/src checking: 379 unresolved page/reference pairs before; 344 after; zero new unresolved references, and zero on the new landing/research/publications/software/CV/blog/personal pages. Remaining archive issues predate this update.
- All 114 tracked files under _posts (including assets), all 15 poems, and assets/CV.pdf are byte-identical to the original revision.
- All linked public software repositories, Won Lab, and the historical SOP link return HTTP 200.
- Browser verification at 390px: no horizontal overflow; responsive menu exposes CV, Blog, and Personal; landing image loads.
