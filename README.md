# Landon's Little Corner of the Web

A deliberately old-school personal website inspired by raw 1990s homepages: Times New Roman, blue underlined links, simple bordered sections, a visitor counter, a scrolling welcome message, and an under-construction badge. It uses plain HTML, CSS, and a tiny bit of JavaScript. No frameworks, build steps, paid hosting, or tracking services.

## Publish on GitHub Pages

1. Download and unzip this folder.
2. Open your existing `YOUR-USERNAME.github.io` repository on GitHub.
3. Replace the old website files with the contents of this folder. Upload the files and the `assets` folder's contents so `index.html`, `styles.css`, and `assets/` are all at the repository root level.
4. Commit the changes. GitHub Pages should publish the update automatically if it is already enabled.
5. Wait a minute or two, then refresh your site. If the old version remains, hard-refresh with `Ctrl + F5`.

## What is `assets/`?

`assets/` is where the website keeps extra files that aren't HTML, CSS, or JavaScript. This version includes:

- `assets/icons/moth.svg` — the little moth browser-tab icon and homepage decoration.
- `assets/buttons/under-construction.svg` — a handmade retro badge.
- `assets/photos/` — a place for your own photographs. It contains this guide so GitHub will keep the otherwise-empty folder.

GitHub does not preserve empty folders. A folder needs at least one file inside it to appear in your repository.

## Add your own photographs

1. Open `assets/photos/` in your repository.
2. Choose **Add file → Upload files** and upload an image you own or have permission to share.
3. Edit `photography.html` and replace one of the colored placeholder panels with an image. Example:

```html
<figure class="box">
  <img src="assets/photos/my-photo.jpg" alt="A short description of the photograph" style="width:100%;height:160px;object-fit:cover">
  <figcaption><strong>MY-PHOTO.JPG</strong><br><span class="small">A caption goes here.</span></figcaption>
</figure>
```

Make sure the filename and capitalization match exactly; GitHub Pages is case-sensitive.

## Personalize it

- Replace the sample text on `index.html` with your own introduction.
- Replace the starter poems on `poetry.html` with your own writing.
- Add photos to `photography.html` using the instructions above.
- Update the “Last updated” date when you make a meaningful change.

The counter only counts visits in the current browser on the current device. It is not a real global visitor count.
