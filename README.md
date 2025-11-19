# BVM Royal Concept Limited Website

A modern, responsive website for BVM Royal Concept Limited - Premium Laundry Soap Manufacturer.

## Quick Start

### Option 1: Open Directly in Browser (Simplest)
Simply double-click `index.html` or right-click and select "Open with" your preferred browser.

**Note:** Some features may require a local server for best results (see options below).

### Option 2: Using Python (Recommended)
If you have Python installed:

1. Open a terminal/command prompt in this folder
2. Run:
   ```bash
   python server.py
   ```
   Or for Python 3:
   ```bash
   python3 server.py
   ```
3. The website will automatically open in your browser at `http://localhost:8000`

### Option 3: Using Node.js
If you have Node.js installed:

1. Open a terminal/command prompt in this folder
2. Run:
   ```bash
   npm start
   ```
   Or directly:
   ```bash
   node server.js
   ```
3. The website will automatically open in your browser at `http://localhost:8000`

### Option 4: Using PHP (if installed)
```bash
php -S localhost:8000
```

### Option 5: Using Live Server (VS Code Extension)
If you're using VS Code:
1. Install the "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

## File Structure

```
Bvm-Royal-Concept-Website/
├── index.html          # Main HTML file
├── styles.css          # Stylesheet
├── script.js           # JavaScript functionality
├── server.py           # Python local server
├── server.js           # Node.js local server
├── package.json        # Node.js package configuration
└── README.md           # This file
```

## Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Modern UI with smooth animations
- ✅ Auto-sliding hero carousel
- ✅ Mobile-friendly navigation menu
- ✅ Contact form (front-end only)
- ✅ Smooth scrolling navigation
- ✅ No database required

## Customization

1. **Update Contact Information:**
   - Edit phone numbers and email in `index.html`
   - Look for placeholder text like `+234 XXX XXX XXXX`

2. **Add Product Images:**
   - Replace the placeholder divs in product cards with actual `<img>` tags
   - Add your product images to an `images/` folder

3. **Modify Colors:**
   - Edit CSS variables in `styles.css`:
     ```css
     :root {
         --primary-color: #1a73e8;
         --secondary-color: #ff6b35;
     }
     ```

4. **Update Content:**
   - All text content is in `index.html`
   - Simply edit the HTML to change any text

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Edge
- Safari
- Opera

## Notes

- The website uses Font Awesome icons from a CDN. An internet connection is required for icons to display.
- For completely offline use, you can download Font Awesome and link to local files.
- The contact form is front-end only and will show an alert when submitted (no actual email sending).

## Support

For any issues or questions, please contact the development team.

---

© 2025 BVM Royal Concept Limited. All rights reserved.

