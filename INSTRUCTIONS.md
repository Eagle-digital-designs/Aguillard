# The Hartwell Family History Website
## Instructions & Reference Guide

---

## What You Have

```
family-tree-website/
├── index.html                ← Main family tree page (open this in a browser)
├── PERSON-TEMPLATE.html      ← Copy this to create any new person's page
├── INSTRUCTIONS.md           ← This file
├── assets/
│   └── family-data.js        ← THE MASTER DATA FILE — all people and relationships
└── people/
    └── william-hartwell.html ← Example completed story page
```

---

## Navigating the Tree

Open `index.html` in any modern browser. No server required — it works as local files.

| Action | How |
|--------|-----|
| **Pan** | Click and drag on the background |
| **Zoom** | Mouse wheel, or use the +/− buttons (bottom right) |
| **Re-centre** | Click the **⌂ Center Tree** button (top bar) |
| **Open a person's story** | Click any person card; if a story page exists, it opens immediately |
| **Hover for details** | Hover over a card to see full name and birthplace |

---

## Importing from Family Echo (GEDCOM)

If you already have a tree built in Family Echo, you can import it automatically instead of entering everyone by hand.

### How to export from Family Echo
1. Log in to [familyecho.com](https://www.familyecho.com) and open your tree
2. Click on **any person** to open the sidebar panel
3. Scroll to the bottom of the sidebar and click **"Download / export this family…"**
4. Select **GEDCOM** and click **Download** — you'll receive a `.ged` file

### How to import it into your website
1. Open `gedcom-import.html` in your browser (it's in the root of your website folder)
2. Drag and drop your `.ged` file onto the upload area (or click to browse)
3. The tool will instantly parse the file and show you a preview table of all people found
4. Click **Copy to Clipboard** to copy the generated code
5. Open `assets/family-data.js` in a text editor and **replace its entire contents** with the copied code
6. Save, then open `index.html` — your full tree will appear

### What gets imported
| GEDCOM Data | Imported As |
|------------|-------------|
| First & last names | `firstName`, `lastName` |
| Birth year | `birth` |
| Death year | `death` |
| Birthplace | `birthPlace` |
| Gender (M/F) | `gender` |
| Family links (HUSB/WIFE/CHIL) | Union relationships |
| Marriage year | `married` on the union |

### What you'll need to add manually after importing
- **Taglines** — the one-sentence description shown on each card
- **Photos** — add image files to `assets/photos/` and update the `photo` field
- **Story pages** — create a `people/firstname-lastname.html` for each person using `PERSON-TEMPLATE.html`
- **Notes/bios** — any longer biographical text from GEDCOM notes is included as a comment in the code for reference

---

## Adding a New Person

### Step 1 — Add them to the data file

Open `assets/family-data.js` in any text editor. Find the `people: { }` block and add a new entry by copying this template:

```js
"pXX": {
  id: "pXX",               // Give them the next number: p13, p14, etc.
  firstName: "Jane",
  lastName: "Smith",
  maidenName: "Jones",     // Optional — delete this line if not applicable
  birth: "1930",
  death: "2001",           // Leave as "" if still living
  birthPlace: "Chicago, IL",
  gender: "female",        // "male" | "female" | "other"
  photo: "",               // Path to photo once you add one — see Photos section
  pageFile: "people/jane-smith.html",  // Link to their story page
  tagline: "One memorable sentence about this person."
},
```

**Important:** Make sure each `id` is unique and matches across the file. The last entry before the closing `}` of `people` should NOT have a trailing comma if it's the very last item, but it's safest to always include one in JavaScript objects.

---

### Step 2 — Link them to a union (marriage/relationship)

Still in `family-data.js`, find the `unions: { }` block and either add them to an existing union's `children` array, or create a new union:

```js
// Adding to an existing union's children:
"u2": {
  children: ["p7", "p9", "pXX"]  // ← add the new person's id here
}

// Creating a brand-new union:
"u5": {
  id: "u5",
  partner1: "pXX",       // One person's id
  partner2: "pYY",       // Other person's id (use null if unknown/single parent)
  married: "1965",       // Year as a string, or ""
  divorced: null,        // Year as a string if applicable, or null
  children: ["pZZ"]      // Array of child ids, or [] if no children
},
```

---

### Step 3 — Create their story page

1. Copy `PERSON-TEMPLATE.html` to `people/firstname-lastname.html`
   - Use lowercase, hyphens instead of spaces
   - Example: `people/jane-smith.html`

2. Open the file in a text editor and search for every line marked `← EDIT`

3. Fill in:
   - The `<title>` tag
   - The breadcrumb name
   - The hero section (name, dates, tagline, vitals)
   - The life story sections (replace placeholder text)
   - The timeline items
   - The vital records fact box
   - The family connection links at the bottom

4. Delete the yellow `edit-note` warning boxes once you're done

---

## Editing an Existing Person

Everything lives in two places:

| What to change | Where |
|----------------|-------|
| Name, dates, birthplace, tagline | `assets/family-data.js` → find their `id` |
| Story, timeline, photo, quotes | Their `people/firstname-lastname.html` file |
| Marriage / children connections | `assets/family-data.js` → the `unions` block |

After saving `family-data.js`, refresh `index.html` in the browser to see changes.

---

## Adding Photos

### On the tree cards
1. Save the image to `assets/photos/firstname-lastname.jpg` (or .png)
2. In `family-data.js`, set `photo: "assets/photos/firstname-lastname.jpg"` for that person
3. Recommended size: **200×200px**, square crop

### On a person's story page
1. Save larger photos to `assets/photos/`
2. In the person's HTML file, replace the placeholder `<div>` inside `.hero-photo` with:
   ```html
   <img src="../assets/photos/firstname-lastname.jpg" alt="Person Name">
   ```
3. For the photo strip in the story, replace placeholder `<div>` blocks with:
   ```html
   <img src="../assets/photos/another-photo.jpg" alt="Description">
   ```

---

## Renaming the Family

To personalise the website for your family instead of "Hartwell":

1. **Header title** — In `index.html`, find `The <span>Hartwell</span> Family History` and change it
2. **Browser tab** — Change the `<title>` tag in `index.html`
3. **Footer text** — In each person's HTML, update the footer text
4. **Data file** — No changes needed; the family name is cosmetic only

---

## Adding a New Generation or Branch

The tree layout automatically detects generations based on parent-child relationships. To add an entirely new branch:

1. Add each new person to `people: {}` in `family-data.js`
2. Create a union connecting them to the tree (even if just one partner is in the existing tree)
3. The tree will re-draw automatically on next page load

If the tree looks cramped, the card spacing can be adjusted in `index.html` — find these lines near the top of the `<script>` block:
```js
const H_GAP = 40;    // horizontal space between sibling cards
const V_GAP = 130;   // vertical space between generations
```
Increase these numbers for more breathing room.

---

## Using the "Add Person" Button

The **+ Add Person** button in the top-right of the tree generates a code snippet you can copy directly into `family-data.js`. It does **not** automatically save to the file — you must paste the code yourself. This is intentional, since HTML files cannot write to your hard drive directly.

Workflow:
1. Click **+ Add Person** and fill in the form
2. Click **Save & Show Code**
3. Copy the generated code block
4. Paste it into the `people: { }` section of `assets/family-data.js`
5. Follow Steps 2 and 3 above to link them to a union and create their page

---

## Publishing Online

To share this with family online, you have a few free options:

### GitHub Pages (free, recommended)
1. Create a free account at github.com
2. Create a new repository (can be private or public)
3. Upload all files maintaining the same folder structure
4. Go to Settings → Pages → Source: main branch
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Netlify (free)
1. Create a free account at netlify.com
2. Drag and drop the `family-tree-website` folder onto their dashboard
3. You get an instant live URL (customisable)

### Local network sharing
Open `index.html` directly in a browser and share the folder via Dropbox, Google Drive, or a USB drive.

---

## Frequently Asked Questions

**Q: The tree looks jumbled — cards are overlapping.**
A: This usually means two people are both listed as "root" (no parent union). Check that your unions are complete — every person except the oldest generation should appear in a union's `children` array.

**Q: I added someone but they don't appear on the tree.**
A: Make sure their `id` matches exactly between the `people` entry and any union they appear in. IDs are case-sensitive.

**Q: Can I add more than two partners for a person?**
A: Yes — create multiple union entries where that person appears as `partner1` or `partner2`. The tree will draw all of them.

**Q: How do I show a person who was adopted or has unknown parents?**
A: Add them as a root person (don't list them in any union's `children` array). You can note the adoption in their story page.

**Q: Can I change the colour scheme or fonts?**
A: Yes. Open `index.html` and edit the CSS variables at the top of the `<style>` block:
```css
:root {
  --ink:       #2a1f14;   /* main text colour */
  --gold:      #b8892a;   /* accent colour */
  --parchment: #f5ede0;   /* card background */
  --cream:     #faf6ef;   /* page background */
}
```
The same variables exist in each person page and the template.

---

*This website was built as a static HTML/CSS/JS project — no database, no server, no subscriptions. Every file is yours to keep, edit, and share.*
