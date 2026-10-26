# CSI Group website (Next.js)

The site is generated from the Claude Design export, so it renders exactly as designed.

## How it works

- `design-source/` holds the design files exported from Claude Design (`*.dc.html` and the design system).
- `scripts/build-ds.mjs` turns the design system bundle into `src/ds/` (components and token CSS).
- `scripts/convert-dc.mjs` converts each `.dc.html` into a React component in `src/site/*.generated.tsx`.
- `src/site/SiteRoot.tsx` hosts the converted site and maps its pages onto real URLs (`src/site/routes.ts`).
- `src/site/runtime.tsx` runs the design's logic classes and sends form submissions to `/api/lead`.
- `src/app/api/lead/route.ts` receives leads. It only logs the source for now. TODO: forward to HubSpot.

## Changing the design

Re-export from Claude Design, replace the files in `design-source/`, then:

```bash
node scripts/build-ds.mjs
node scripts/convert-dc.mjs PillarsWheel "design-source/Pillars Wheel.dc.html" src/site/PillarsWheel.generated.tsx
node scripts/convert-dc.mjs CallbackForm "design-source/Callback Form.dc.html" src/site/CallbackForm.generated.tsx
node scripts/convert-dc.mjs MemberPortal "design-source/Member Portal.dc.html" src/site/MemberPortal.generated.tsx
node scripts/convert-dc.mjs CSIGroupWebsite "design-source/CSI Group Website.dc.html" src/site/CSIGroupWebsite.generated.tsx
```

Do not edit `*.generated.tsx` or `src/ds/` by hand.

## Run

```bash
npm run dev      # development
npm run build    # production build
```

`handbuilt-v1-backup.zip` is the earlier hand-written version of the site, kept for reference.
