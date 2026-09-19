# Verification — 2026-09-20

- Windows native, Node.js, PowerShell, headless Microsoft Edge through Playwright.
- `npm --offline run build`: passed, seven static deployable assets in `dist/`, no dependency download.
- `npm --offline run check`: passed.
- Automated browser checks against the built `dist/index.html`: every hairstyle/ear/accessory/facewear/background selection rendered; no browser exceptions.
- Generation history: save, duplicate prevention, reload persistence, heterochromia/color restoration, clear cancellation and confirmed clear passed.
- Corrupt history preserved without silent overwrite; simulated storage quota failure left visible history unchanged.
- Chinese/English/Japanese selection and document language passed. No horizontal page overflow at 320px and 390px in all three languages.
- Actual SVG and PNG downloads passed. PNG IHDR dimensions verified at 512, 1024, 2048. SVG contains no image elements or preview checkerboard.
- Canvas rasterization with transparent background: top-left RGBA [0,0,0,0], face interior [255,240,229,255].
- Desktop and mobile screenshots inspected. Narrow-screen tiles adjusted to three columns, category navigation wraps to two rows.

Scope limits: Cloudflare publication, remote CI, real Safari/iOS and Firefox were not tested. History depends on the browser origin and is not a backup service. Artwork is an original geometric interpretation of the provided visual reference, not a copy of its rendered characters.

## Lower-left framing revision — 2026-09-20

Changed the shared character group to rotate 14 degrees clockwise, enlarge and offset toward the left. Background rendering is outside this group. Rabbit ears use a smaller character scale for top clearance. Existing stored options remain valid and re-render with this framing. Re-ran the offline build and browser regression suite, including real PNG/SVG downloads, history restoration and mobile layouts. Inspected revised desktop/mobile screenshots; adjusted vertical placement to keep both eyes visible. This revision is local, not pushed or deployed.

## Layered illustration revision — 2026-09-20

Added `hair.js:illustratedHair` and included it in the eight-asset static build. Replaced flat front silhouettes with curved overlapping locks, highlights and shadows; enlarged eyes, moved all facewear with eyes, refined the pleated headband, and switched initial demonstration to blue hair/black background. Existing saved selections still validate. Offline build and full Edge regression suite passed after changes. Inspected desktop/mobile previews and an eight-variant contact sheet covering hair, cat/fox/rabbit ears, glasses, eyepatch, crown and maid headband. Adjusted right blush onto the face and ear clearance. Artwork remains original editable vectors, not a pixel-exact recreation of either supplied image. Not pushed or deployed.
