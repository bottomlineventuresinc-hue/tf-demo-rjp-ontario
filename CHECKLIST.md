# Site customization checklist · RJP General Contracting (hs-006-rjp)
Wave 1 · Copperline · claim/$297 + hosting/$99 bar required. Rebuilt 2026-09-25 (CR 2026-09-25b, CEO change request).

Before preview send:
- [x] Business name everywhere (title, wordmark, footer, schema)
- [x] City / service area
- [x] Phone click-to-call is the main CTA (tel-only; no public email)
- [x] Address per packet (FARM-PACKETS-WAVE1.md)
- [x] Hours: Call for hours (not invented)
- [x] Services list matches packet
- [x] Logo: wordmark from business name only (no image logo)
- [x] Stock photos fit the trade and the job label (each opened and checked)
- [x] Contact form action="#"
- [x] Mobile pass (responsive Copperline CSS retained)
- [x] No em dashes anywhere (html, js, css)
- [x] Sample B/As labeled typical of this kind of job, no prices
- [x] No dollar amounts other than $297 and $99
- [x] Distinct H1 for city/trade
- [x] No license numbers or license-board text on page
- [x] No stock face as owner or crew
- [x] No invented guarantee, quote hold, callback time, payment schedule, insurance claim, or years in business
- [x] No same-name domain owned by someone else linked or offered
- [x] No stray control characters; all sections present
- [x] Stripe claim URL on bar: https://buy.stripe.com/cNieVdg1peCq9subRr1gs02
- [x] Stripe hosting URL on bar and in journey: https://buy.stripe.com/8x2fZhaH52TI0VY7Bb1gs03
- [x] Preview URL on GitHub Pages (same repo as before)

Owner first name in human spots: Robert
NAP/phone per packet: 329 E Bonnie Brae Ct, Ontario CA 91764 · 909-240-9990
lang: en-US · geo: CA

## Change request 2026-09-25 (CR 2026-09-25b)
CEO-approved second change request (Waves 1 to 7). The prior build failed the rule audit
(hosting link missing from the claim bar, sample dollar amounts, first hero button not the phone,
invented promises on guarantee length, quote hold time, deposit, callback speed and free visits,
plus stray control characters or missing sections on some).
Rebuilt on the Wave 11 generator (hs-007 full section layout, Wave 11 css/js, verified CC0 photos).
Locked lead-specific corrections kept: Phone 909-240-9990; RJP journey/demo overlay (tf-bar, change modal, claim, purchase, onboarding, deploy, outreach FAB) kept working with localStorage tf_rjp_change_log_v1 and TFDemoRJP.
Lead notes: Phone 909-240-9990 locked. Journey overlay kept (same localStorage keys tf_rjp_*_v1 and TFDemoRJP.reset()). SVG logo replaced by a text wordmark. rjpcontracting.com is registered, dropped from ideas.
Prior folder backed up at ops/cr-2026-09-25b/backup/hs-006-rjp/.

## PASS
Quality self-check PASS 2026-09-25 PT (CR 2026-09-25b rebuild). Same URL. Re-frozen under the CR.

## Change request 2026-09-25c (coverage)
CEO change request 2026-09-25c. Coverage towns chosen by the builder were removed. The page now names only
the home city (Ontario) plus areas the packet itself lists. Packet line: "Coverage: Ontario / Inland Empire".
Extra areas kept from the packet: none. Region label: Inland Empire (plain description, from the packet).
Sample-job locations, coverage copy, the outside-the-city answer, demo lede and outreach line all use the home city only.
Follow-up 2026-09-25 PT: Scout confirmed W1-W10 packet Coverage lines were inferred from location, not sourced. Original packet line "Ontario / Inland Empire / Upland / Fontana area" reduced to the home city only.
Re-rendered through the same generator; republished to the same repo with a normal commit. Re-frozen 2026-09-25 PT.
