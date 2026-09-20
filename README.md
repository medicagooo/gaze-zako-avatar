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

- Thirteen hairstyles, eight ear choices, twenty-two hair accessories, eleven facewear choices, eleven mouth choices and eleven pupil styles; counts include none where applicable. Eight backgrounds. Skin presets display the current avatar in seven tones, with a custom picker.
- Initial/reset avatar reproduces the supplied `gaze-zako-avatar-1789870427847.svg`: crystal ensemble, blue hair, slit pupils, smile and pink dotted background. It remains fully editable. Existing gallery presets retain their original expressions and backgrounds.
- Sharing buttons below Create open a preview dialog. `share.js` always uses `https://zako.medicago.top`. Native file sharing includes a PNG plus site address when supported; fallback provides image download and link copy. X, WhatsApp and Telegram composition links share text/URL only, requiring manual attachment for images. WeChat/QQ use the system picker or download/copy fallback. No recipient is selected and no message is sent automatically.
- Fourteen localized thumbnail presets include the reference-sheet combinations, Lilac ribbons and Sage glasses. Sage glasses combines layered brown side fringe, two-tone sage eyes, dark lower-rim glasses, white outlined bow/double bars and a white background. Each component remains independently editable. Selecting a preset replaces current editable options; Create saves it to history. `PRESETS` in app.js supplies configurations; `sampleAccessory` in accessories.js supplies vector shapes for previews, history and exports.
- New material IDs append without reassigning saved choices: hair 12 in `illustratedHair` uses long-straight rear hair and the existing accessory anchors; facewear 10 shares the lifted eye group; pupil 10 derives its lighter lower half from the selected eye color without highlights; accessory 21 renders through the front accessory pass. History and both exporters use these same functions.
- Crystal bow and moon rose maid presets set coordinated colors and accessories. These are original vector interpretations, not exact copies of the reference images.
- Fixed square composition: enlarged head leans clockwise and peeks from the lower-left corner. All character layers move together while the background remains fixed. Rabbit ears use a smaller scale for top clearance. Previously saved history options also use the new framing. Color palettes plus custom colors, optional different eye colors. Eyepatch side refers to screen coordinates.
- PNG: 512, 1024 or 2048 pixels. SVG: standalone vector shapes with no raster image, font or remote references. Transparent export contains no checkerboard.
- Preview changes are temporary. Create saves validated options in localStorage (`gaze-zako-avatar.history.v1`). Identical visible configurations are deduplicated. History can be restored, downloaded or deleted. Clearing all history requires confirmation.
- History is local to browser/origin. Browser-data deletion loses it. There is no cross-device synchronization. Storage failures are surfaced, and damaged stored data is not silently overwritten.
- Language preference uses `gaze-zako-avatar.language`; unsupported browser languages default to English.

## Implementation

`app.js:renderAvatar` is the sole renderer used by current preview, sticker tiles, saved history and both exports. SVG paths are original artwork drawn for this project. `validConfig` restricts stored numeric choices and hex colors before rendering. `persist` updates visible history only after storage succeeds. `download` rasterizes exactly the same SVG onto a transparent canvas for PNG.

`hair.js:illustratedHair` provides the layered front locks and side strands called by `renderAvatar`. `accessories.js:referenceAccessory` provides rear/front ensemble passes, with tails behind the hair and ornaments in front. All three artwork scripts plus share.js are required in the build. The character rotates 17 degrees; eyes, blush, mouth, glasses and eyepatch share the lifted facial group. Cat, fox and rabbit use identical face framing; long ears deliberately crop at the canvas boundary. Crown framing stays separate. The default matches the user-supplied crystal/pink-dots/slit/smile SVG; preset gallery configurations remain independent.

`app.js:eyeShape` and `mouthShape` provide ten pupil styles and eleven mouth choices (including none), selectable under Eyes and the dedicated Mouth tab. `EXPRESSION_LIMITS` validates new optional numeric fields. Missing `mouthStyle` migrates old `mouth:true` to the original wavy mouth (1), otherwise none (0); missing `pupil` uses solid eyes (0). Explicit styles take precedence and the legacy mouth flag stays synchronized. Shared rendering preserves these options in history and PNG/SVG downloads. Run `node scripts/check-expressions.cjs` for migration, bounds and framing checks.

Artwork uses fixed anchors with rear hair, ears, face, front hair, eyes/blush, facewear and accessory layers. Add new choices by extending `LIMITS`, all three translated name lists and the renderer together. Never interpolate unvalidated stored strings into SVG/HTML.

Current framing raises the face and exposes more forehead/cheek by shortening front hair around its crown anchor. Hair and ear tips may intentionally extend above the square canvas. Facial details and facewear move up together; saved options re-render with this composition.

UI line icons are adapted from Lucide (ISC license; see `LICENSE-ICONS`).
