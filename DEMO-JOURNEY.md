# RJP demo journey (hs-006-rjp)

Live: https://bottomlineventuresinc-hue.github.io/tf-demo-rjp-ontario/

## What this demo shows

Maria can click the whole customer journey on the draft site without paying.

### A) Sticky claim / change bar

- Label: Draft · RJP General Contracting
- **Claim this site · $297** → real Stripe `https://buy.stripe.com/cNieVdg1peCq9subRr1gs02` (new tab)
- **Request a change** → modal (message required)
- **Preview rest of journey (demo)** and **I paid / simulate purchase** → post-pay flow, no charge

### B) Live change with spinner

1. Submit change closes the modal
2. Full-screen spinner: “Working on updates to your site…” / “Updating the draft for RJP. Hang tight.”
3. After ~2.5-4s a visible edit lands (cycles: hero lede, H1 emphasis, first service line) plus an “Updated just now” chip
4. Spinner clears; bar returns: “Draft updated. More changes? Or claim it.”
5. Change log stored in `localStorage` (`tf_rjp_change_log_v1`). No AI/backend.

### C) Post-purchase journey (demo)

1. Payment confirmed (demo) · setup $297 noted · hosting $99/mo next
2. Onboarding: website yes → Path A; no → domain yes Path B / no Path C (3 ideas → fake shortlist ~$14/yr)
3. Collect billing email/phone, utility checkbox, terms
4. Deploy spinner with DNS / SSL / NAP ticks (~3s)
5. Success: live URL (this Pages draft) + sample SMS and email bubbles
6. Hosting CTA → `https://buy.stripe.com/8x2fZhaH52TI0VY7Bb1gs03`
7. “What if they don't pay?” expand shows suspend park sample

### D) Sample outreach

Floating **See SMS / email journey**: first touch → preview → soft claim → bump, filled with RJP / Robert / Ontario and this preview URL. Not sent.

## Files

- `css/demo-journey.css` · `js/demo-journey.js`
- Overlay markup lives in `index.html` (does not replace Copperline sections)

## Reset

Browser console: `TFDemoRJP.reset()`
