<p align="center"><img src="./site-avatar.svg" width="160" height="160" alt="gaze zako avatar site avatar"></p>

<h1 align="center">gaze zako avatar</h1>

<p align="center">A little head peeking from the corner. A sticker avatar made by you.</p>

<p align="center"><a href="./README.md">简体中文</a> · <strong>English</strong> · <a href="./README.ja.md">日本語</a></p>

<p align="center"><a href="https://zako.medicago.top/">Try it online</a> · <a href="https://github.com/medicagooo/gaze-zako-avatar">GitHub</a></p>

## About

**gaze zako avatar** is a lightweight sticker avatar creator. Combine hairstyles, skin tones, eyes, ears, hair accessories, facewear, mouths and backgrounds to create a cute partial-face portrait, with live previews, saved combinations and downloads.

Built with plain HTML, CSS, JavaScript and SVG, it renders and exports avatars entirely in your browser. No account, backend, database or AI API is needed. The soft pink, rounded interface works on phones and desktops and supports Simplified Chinese, English and Japanese.

## Features

- **19 editable presets**: Crystal, Moon maid, Lilac ribbons, Sage glasses, Blue bonnet, Sakura ribbons, Golden gem elf, Shrine ribbons, Mint sailor and more. Every component remains editable.
- **A rich material library**: 15 hairstyles, 8 ear options, 29 hair accessories, 12 facewear options, 11 mouth options and 11 pupil styles. Counts include “None” where available.
- **Custom colors**: Change hair, skin, eyes and accessory colors, including different colors for each eye. Seven skin tones appear as avatar thumbnails; eyepatches can cover either eye.
- **10 backgrounds**: Black, white, transparent, Tiffany with white dots, pink with white dots, the transgender flag, pink, blue, misty blue and a sakura shrine at night.
- **Live preview and two export formats**: Standalone SVG artwork or PNG at 512 / 1024 / 2048 pixels. Transparent exports do not contain the preview checkerboard.
- **Local history**: Create an avatar to save its configuration, then restore, download or delete it. Clearing all history requires confirmation. Identical configurations are deduplicated.
- **Sharing options**: WeChat, QQ, X (Twitter), WhatsApp and Telegram, including the site address. Direct image sharing depends on browser and platform support; image download and link copying are provided when needed.

Avatars use fixed-position vector components, not random AI generation. Reference-inspired designs are interpreted in the project's own vector style. Heads peek diagonally from the lower-left corner; long hair and ears may extend beyond the canvas.

## Run Locally

Open the repository's `index.html` in a modern browser. No runtime dependencies need to be installed.

History is stored locally in the current browser and site, with no cross-device synchronization. Clearing browser data removes it. Storage behavior for `file:` URLs varies; use the HTTPS site for regular use. The UI detects your browser language, allows manual switching and falls back to English for unsupported languages.

With Node.js and npm installed, build offline:

```powershell
npm --offline run build
```

Output is written to `dist/`. No `npm install`, environment variables, database or secrets are required.

## Deploy to Cloudflare Pages

### Connect GitHub

1. Fork this repository or place the project in your own GitHub repository.
2. Create a **Pages** project under Cloudflare **Workers & Pages**, import a Git repository and connect GitHub.
3. Select the repository, apply the settings below and deploy.

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Framework preset | `None` |
| Root directory | Leave blank when the project is at the repository root |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Environment variables | None required |

Pages provides a `*.pages.dev` address and automatically builds and deploys subsequent pushes to the production branch. See [Cloudflare's static HTML guide](https://developers.cloudflare.com/pages/framework-guides/deploy-anything/).

### Custom Domain

Add a domain you own under the Pages project's **Custom domains**, then follow the DNS setup wizard. This site uses `zako.medicago.top`; use your own domain for your deployment. Associate the domain with Pages before completing its DNS records. See [custom domain documentation](https://developers.cloudflare.com/pages/configuration/custom-domains/).

The sharing address is defined in `share.js`. Replace `https://zako.medicago.top` there when hosting your own instance so shared links point to your site.

### Other Static Hosts

Upload the contents of the locally built `dist/` directory to a static hosting service. No server application is required. On other hosts, configure response headers equivalent to `_headers` yourself.

## Development

| File | Purpose |
| --- | --- |
| `app.js` | Options, translations, presets, history and shared rendering/export |
| `hair.js` | Layered vector hairstyles |
| `accessories.js` | Front/rear ornaments and accessory ensembles |
| `share.js` | Sharing controls and site links |
| `site-avatar.svg` | Website avatar and favicon, independent of editor selections |
| `scripts/build.cjs` | Copies static assets into `dist/` |

`renderAvatar` serves previews, option thumbnails, history and exports. When adding materials, update limits, all three translated name lists and artwork together. Append IDs to preserve saved configurations. `validConfig` validates stored options and migrates missing expression fields in older records. Cat, fox and rabbit ears share the same face position, allowing long ears to crop at the canvas boundary.

```powershell
node scripts/check-expressions.cjs
node scripts/validate-registry.cjs
```

UI line icons are adapted from Lucide. See [LICENSE-ICONS](./LICENSE-ICONS).
