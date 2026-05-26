# Rangga Saputra — Game Dev Portfolio

Portfolio website built with vanilla HTML, CSS, and JavaScript.
No build tools, no dependencies — open `index.html` and it works.

---

## 📁 Folder Structure

```
rangga-portfolio/
├── index.html          ← Main page structure
├── css/
│   └── style.css       ← All styles (colors, layout, animations)
├── js/
│   ├── games-data.js   ← ✏️  Edit this to update game content
│   └── main.js         ← Interactive logic (modal, filter, animations)
└── assets/
    ├── gifs/           ← Drop your gameplay GIFs here
    │   ├── icarus.gif
    │   ├── khodam.gif
    │   └── ...
    └── og-preview.png  ← Social media preview image (optional)
```

---

## ✏️ How to Update Content

### Add a GIF / Video Preview

1. Put your `.gif` or `.webp` file in `assets/gifs/`
2. Open `js/games-data.js`
3. Find the game entry and set the `gif` field:

```js
icarus: {
  gif: 'assets/gifs/icarus.gif',   // ← add this line
  ...
}
```

The card and modal will both automatically use the file.

### Update a Game's Info

All game content lives in `js/games-data.js`.
Each game has these editable fields:

| Field | What it controls |
|---|---|
| `title` | Card heading and modal title |
| `desc` | Short description on card |
| `fullDesc` | Longer description in modal |
| `contribs` | Bullet list in modal |
| `achievements` | Pills in modal |
| `links[].url` | Replace `'#'` with real URLs |
| `gif` | Path to your GIF/image |

### Add a New Game

Copy any existing block in `games-data.js`, give it a new key,
and fill in the fields. The card will appear automatically.

---

## 🌐 Deploying to GitHub Pages

### First-time setup

```bash
# 1. Create a new repo on github.com — name it:
#    ranggasap.github.io   (for username site, URL = https://ranggasap.github.io)
#    OR any name           (URL = https://ranggasap.github.io/repo-name)

# 2. Push this folder
git init
git add .
git commit -m "initial portfolio"
git remote add origin https://github.com/Ranggasap/ranggasap.github.io.git
git push -u origin main
```

### Enable GitHub Pages

1. Go to your repo → **Settings** → **Pages**
2. Under **Source** → select **Deploy from a branch**
3. Branch: `main` / folder: `/ (root)`
4. Click **Save**

Your site will be live at `https://ranggasap.github.io` in ~1 minute.

### Update the site later

```bash
git add .
git commit -m "update game info"
git push
```

GitHub Pages auto-redeploys on every push.

---

## 📬 Activating the Contact Form

The form currently shows a toast message. To receive real emails:

**Option A — Formspree (easiest, free tier available)**
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form → copy your endpoint URL
3. In `index.html`, find the `<form>` tag and change it to:
   ```html
   <form class="contact-form" action="https://formspree.io/f/YOUR_ID" method="POST">
   ```
4. Remove the `onsubmit="handleSubmit(event)"` attribute

**Option B — EmailJS (stays on frontend, no backend)**
1. Sign up at [emailjs.com](https://emailjs.com)
2. Connect your Gmail/Outlook
3. Add their SDK and update `handleSubmit()` in `main.js`

---

## 🎨 Customising Colors

All colors are CSS variables at the top of `css/style.css`:

```css
:root {
  --teal-main:    #1D9E75;   /* primary accent */
  --cream:        #F5F0E8;   /* page background */
  --ink:          #1A1A18;   /* dark sections / text */
  ...
}
```

Change `--teal-main` to any color to update the whole theme instantly.
