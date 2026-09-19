# Verification — 2026-09-20

Sample materials v9: framing lowered another 20 units. Offline build passed. All 12 presets validated, saved, reloaded and restored with exact configuration equality; 16 accessory choices rendered. Three languages at 320/390/1440 passed width checks. Full regression passed PNG dimensions, standalone SVG, transparent-background pixels, history/dedup/clear, corrupt/quota handling and no browser errors. Inspected 12-avatar contact sheet and desktop editor. Original vector approximations support corresponding combinations, not pixel-identical copies. Not pushed or deployed.

Height correction v8: lowered v7 character by 55 canvas units and restored facial offset -68. Wider cheeks and shorter bangs retained. Offline build and both reference-preset export/history/mobile checks passed; exported composition visually inspected. Local only.

Higher face revision: all framing moved up 70, facial detail offset changed from -68 to -88, face radii 390/395 at 500,811, front hair vertically shortened around crown. Both reference presets passed actual exports and persistence/mobile checks. Full browser regression and ear/accessory contact sheet checked; intentional top cropping is allowed by the latest request. Local only.

Reference-width follow-up: horizontal radius increased again to 390 (height 375); right cap contour and side locks widened below the crown. Exported crystal preset inspected to verify fuller visible cheek and unchanged eyes. Both presets passed PNG/SVG download, restore and mobile/language checks after the final contour adjustment. Exact width identity is not quantitatively verified.

Face enlargement revision: face radii changed to 355/375, with slightly wider front-hair framing and unchanged eye anchors. Offline build and reference-preset checks passed (actual PNG/SVG downloads, restore, mouth compatibility, three languages at 320px). Inspected the enlarged face and hair junctions in exported images. Local only.

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

## Reference ensemble revision - 2026-09-20

Offline build produces nine assets. Full Edge regression passed for all ten accessory choices, existing options, history, three languages, SVG/PNG dimensions and transparency, and mobile widths 320/390. Additional checks downloaded both new ensembles as actual SVG and 1024 PNG, restored their accessory and mouth flags after reload, verified the mouth toggle and legacy missing-mouth normalization, and checked each preset at 320px in all three languages. Exported images were visually inspected: top ahoge and pleats are visible, 17-degree eyes follow the references, and rear ribbons/crystals do not cover the face. Hair contours, shading, ruffle shapes and embroidery remain visibly different from the source rasters; exact visual equality is not claimed. Local revision only, no push/deployment performed.

## Lower-left framing revision — 2026-09-20

Changed the shared character group to rotate 14 degrees clockwise, enlarge and offset toward the left. Background rendering is outside this group. Rabbit ears use a smaller character scale for top clearance. Existing stored options remain valid and re-render with this framing. Re-ran the offline build and browser regression suite, including real PNG/SVG downloads, history restoration and mobile layouts. Inspected revised desktop/mobile screenshots; adjusted vertical placement to keep both eyes visible. This revision is local, not pushed or deployed.

## Layered illustration revision — 2026-09-20

Added `hair.js:illustratedHair` and included it in the eight-asset static build. Replaced flat front silhouettes with curved overlapping locks, highlights and shadows; enlarged eyes, moved all facewear with eyes, refined the pleated headband, and switched initial demonstration to blue hair/black background. Existing saved selections still validate. Offline build and full Edge regression suite passed after changes. Inspected desktop/mobile previews and an eight-variant contact sheet covering hair, cat/fox/rabbit ears, glasses, eyepatch, crown and maid headband. Adjusted right blush onto the face and ear clearance. Artwork remains original editable vectors, not a pixel-exact recreation of either supplied image. Not pushed or deployed.
