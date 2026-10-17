# FIELD NOTES — personal poetry & photography website

A small, retro-internet-inspired static website. It uses plain HTML, CSS, and JavaScript—no build tools, frameworks, server, or paid hosting are required.

## Files

- `index.html` — homepage, introduction, About Me section, and links to both collections.
- `poetry.html` — sample poem entries to replace with your own writing.
- `photography.html` — six visual placeholder tiles to replace with your own photographs.
- `styles.css` — all layout, colors, responsive styles, and the early-2000s visual treatment.
- `script.js` — clock, a clearly labeled local-only visit counter, and placeholder tile interaction.
- `assets/icons/moth.svg` — tiny favicon.
- `assets/photos/` — put your own image files here.

## Preview it on your computer

1. Download and extract this folder.
2. Open `index.html` in a browser.
3. Use the navigation links to open the Poetry and Photography pages.

No install or internet connection is needed for a local preview.

## Personalize the homepage

Open `index.html` in a text editor (VS Code is a good free choice). Find the `ABOUT_ME.TXT` section and replace the starter bio with your own writing. You can also change `FIELD NOTES` and the subtitle in the header across all three HTML files. Keep the filenames and links unchanged unless you update the navigation links too.

## Add poems

In `poetry.html`, find the `poem-list` section. Replace the text inside each `.poem-record` with your poem title, optional subtitle, and poem text. Use `<br>` to make a line break inside a stanza and start a new `<p>` for each stanza. Example:

```html
<div class="poem-text">
  <p>first line of the poem<br>second line of the poem<br>third line of the poem</p>
  <p>the next stanza starts here<br>and continues on the next line</p>
</div>
```

To add a poem, copy one complete `<article class="poem-record"> ... </article>` block and paste it before the closing `</div>` for `.poem-list`. Change the record number and its title. Remove any starter notes after you finish editing.

## Add photographs

1. Put your image files in `assets/photos/`. Prefer compressed JPG or WebP files so the website loads quickly. Use descriptive filenames, such as `forest-path.jpg`.
2. In `photography.html`, find the placeholder `<button class="photo-tile">` block you want to replace.
3. Replace the placeholder scene span with an image. For example:

```html
<img class="real-photo" src="assets/photos/forest-path.jpg" alt="A narrow path through a quiet forest">
```

4. Keep the `.photo-tile-info` block below it and change the filename and caption to match your photo.
5. Repeat for other photos. Use meaningful alt text that briefly describes each image.

The image styling is already included. Clicking a tile will open the site’s image-detail dialog when a real image is added. Only post photos you took or have permission to publish.

## Publish it free with GitHub Pages

1. Sign in at https://github.com/ and create a **public** repository named `yourusername.github.io` (replace `yourusername` with your GitHub username).
2. Upload all the files and folders from this project. Make sure `index.html` is at the top level of the repository, not buried inside an extra folder.
3. In the repository, open **Settings → Pages**. Under the build/deployment source, select **Deploy from a branch**, choose `main` and `/ (root)`, then save.
4. After GitHub finishes publishing, the site should appear at `https://yourusername.github.io/`.

GitHub's official guide: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

GitHub Pages is a static host. This site has no database, accounts, or server-side features. Anyone can read a public site, so check your content and remove private details before publishing.

## Design notes

The aesthetic is inspired by personal web pages from the early 2000s: compact monospace labels, beveled borders, dark panels, old-school directory links, status readouts, and a deliberately handmade layout. It takes broad stylistic inspiration from old internet mystery/horror games without using their content, logos, or assets.
