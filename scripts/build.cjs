'use strict';
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const output = path.join(root, 'dist');
fs.mkdirSync(output, { recursive: true });
for (const name of ['index.html', 'app.js', 'hair.js', 'styles.css', 'responsive.css', '_headers', '_redirects', 'LICENSE-ICONS']) {
  fs.copyFileSync(path.join(root, name), path.join(output, name));
}
console.log('Built 8 static assets in dist/ (no network or package installation required).');
