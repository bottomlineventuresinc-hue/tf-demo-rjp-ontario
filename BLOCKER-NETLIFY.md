# Netlify deploy blocker — hs-006-rjp

No `NETLIFY_AUTH_TOKEN` and no `netlify` CLI login on this box (2026-09-13 PT).

Local build is complete under:
`/workspace/xhtml-templates/template-factory/builds/hs-006-rjp/`

When auth is available:
```
cd /workspace/xhtml-templates/template-factory/builds/hs-006-rjp
npx netlify deploy --dir=. --auth=$NETLIFY_AUTH_TOKEN
```
Then write the draft URL to `PREVIEW-URL.txt`.
