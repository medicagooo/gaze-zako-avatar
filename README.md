# gaze zako avatar

Original fixed-position vector sticker avatar creator. Simplified Chinese, English and Japanese. No account, backend, external fonts or runtime network dependencies.

## Run

Open `index.html` in a modern browser. For stable history storage, use the same browser and origin; `file:` storage behavior varies between browsers. Production uses the Cloudflare Pages HTTPS origin.

## Cloudflare Pages

- Framework preset: None
- Build command: `npm run build`
- Build output directory: `dist`
- Run `npm --offline run build` locally, then upload `dist` through Pages Direct Upload, or connect a Git repository with this directory as its root.
- No environment variables, Functions, database or secrets are required.
- This project has not been deployed. Publishing requires a separately confirmed Cloudflare target.
- Official references: https://developers.cloudflare.com/pages/framework-guides/deploy-anything/ and https://developers.cloudflare.com/pages/get-started/direct-upload/

## Behavior

- Eight hairstyles, five ear choices including none, eight hair accessory choices including none, seven facewear choices including none, eight backgrounds.
- Fixed square composition: enlarged head leans clockwise and peeks from the lower-left corner. All character layers move together while the background remains fixed. Rabbit ears use a smaller scale for top clearance. Previously saved history options also use the new framing. Color palettes plus custom colors, optional different eye colors. Eyepatch side refers to screen coordinates.
- PNG: 512, 1024 or 2048 pixels. SVG: standalone vector shapes with no raster image, font or remote references. Transparent export contains no checkerboard.
- Preview changes are temporary. Create saves validated options in localStorage (`gaze-zako-avatar.history.v1`). Identical visible configurations are deduplicated. History can be restored, downloaded or deleted. Clearing all history requires confirmation.
- History is local to browser/origin. Browser-data deletion loses it. There is no cross-device synchronization. Storage failures are surfaced, and damaged stored data is not silently overwritten.
- Language preference uses `gaze-zako-avatar.language`; unsupported browser languages default to English.

## Implementation

`app.js:renderAvatar` is the sole renderer used by current preview, sticker tiles, saved history and both exports. SVG paths are original artwork drawn for this project. `validConfig` restricts stored numeric choices and hex colors before rendering. `persist` updates visible history only after storage succeeds. `download` rasterizes exactly the same SVG onto a transparent canvas for PNG.

`hair.js:illustratedHair` provides the layered front locks and side strands called by `renderAvatar`. Both scripts are required in the build. All details remain closed editable vector paths. The facial group lifts eyes, blush, glasses and eyepatch together; accessory anchors remain on the crown. Ear/crown variants reserve additional top clearance. The default demonstration is blue shoulder-length hair, dark eyes and black background, with no ears/accessories. Existing saved selections are preserved.

Artwork uses fixed anchors with rear hair, ears, face, front hair, eyes/blush, facewear and accessory layers. Add new choices by extending `LIMITS`, all three translated name lists and the renderer together. Never interpolate unvalidated stored strings into SVG/HTML.

UI line icons are adapted from Lucide (ISC license; see `LICENSE-ICONS`).
