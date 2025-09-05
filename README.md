# Headphones Landing Page

A simple responsive landing page for a headphone company. The project demonstrates:

- Responsive navigation bar with hamburger menu (mobile view).
- Hero section with background image.
- Features section.
- Results/Stats with animations.
- Contact form.
- Footer with social icons.

---

## 🚀 Features

- **Responsive Navbar** with toggleable hamburger menu.
- **Smooth Scroll** for navigation links.
- **Modern Layout** using CSS Grid & Flexbox.
- **Animations** for sections (fade-in, from-left, from-right).
- **Custom Colors** via CSS variables.

---

## 📂 Project Structure

```
project/
│── index.html        # Main HTML file
│── styles.css        # Styling
│── script.js         # JavaScript (hamburger toggle, animations)
│── images/           # Image assets
│── README.md         # Project documentation
```

---

## 🛠️ Technologies

- **HTML5**
- **CSS3** (Flexbox, Grid, Media Queries)
- **JavaScript (ES6)**
- **Font Awesome** (icons)
- **Google Fonts** (Source Sans 3)

---

## 📖 Usage

1. Clone the repository or download the files.
2. Open `index.html` in your browser.
3. Resize the browser window to test responsive navigation.

---

## 📱 Hamburger Menu

- On desktop: menu items are shown inline.
- On mobile (`≤480px`): a hamburger icon (`☰`) appears.
- Clicking the icon toggles the navigation menu.

**JavaScript Logic (script.js):**

```js
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("menu").classList.toggle("hide");
});
```

**CSS (hide class):**

```css
.hide {
  display: none !important;
}
```

---

## 📸 Screenshots

_(Add screenshots of your project here)_

---

## 📌 Notes

- Update images in `/images/` to customize.
- Change `--primary` variable in `styles.css` to modify theme color.
- Make sure to include **Font Awesome CDN** in `<head>`:

```html
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
/>
```

---

## 📄 License

This project is for learning/demo purposes. You can modify and use it freely.
