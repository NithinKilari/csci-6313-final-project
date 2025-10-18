# CSCI 6313 - Final Exam Project | Data Analyst Portfolio

This project is a multi-page personal portfolio for a Data Analyst, created to fulfill all requirements for the CSCI 6313 final examination.

**Author:** Nithin Kilari

## Live Demo

https://nithinkilari.github.io/csci-6313-final-project/

---

## Project Features

This project meets all five requirements of the final exam.

### Part 01: Semantic HTML & External CSS
* The site is built with a clean, semantic HTML5 structure, including `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>` tags.
* All styling is handled by a single external `style.css` file, which uses CSS variables for an easy-to-manage, professional light-mode theme.

### Part 02: Form with Client-Side Validation
* A "Client Settings" page (`form.html`) provides a logical context for the required form.
* **Password Validation:** The "New Password" field uses a precise regex pattern to enforce the "min 9 chars, 2 uppercase, 1 special symbol" rule.
* **JS Logic:** The form uses JavaScript to prevent submission on invalid fields, check for matching passwords, and show dynamic success/error messages.
* **UX Improvement:** Includes a "show/hide" password toggle (eye icon) for usability.

### Part 03: Google Map with Top 5 Places
* A "Location Explorer" page (`map.html`) integrates the Google Maps JS API and the Places Library.
* A search bar allows users to perform a `textSearch` for any location.
* The top 5 results are fetched and displayed in a responsive grid of cards.
* **Advanced Features:** Cards include ratings (with stars), total number of reviews, and open/closed status.
* **Interactivity:** Clicking a card pans the map and triggers the corresponding marker's info window.

### Part 04: SEO & WCAG (Accessibility)
* **SEO:** The main page (`index.html`) includes a meaningful `<title>`, `<meta name="description">`, and a proper `<h1>` / `<h2>` heading structure.
* **WCAG:** The site is fully keyboard-accessible, uses `alt` text for all images, and the color theme meets WCAG 4.5:1 contrast ratios.

### Part 05: GitHub Hosting
* All project source code (HTML, CSS, JS) is hosted in this repository.
* The site is deployed and publicly accessible via GitHub Pages.

---

## Documentation (Screenshots)

### Part 01: Home page (desktop + mobile)
![Screenshot_18-10-2025_65122_](https://github.com/user-attachments/assets/4e7ee689-bca6-4b1e-8762-1d2c7c706563)
<img width="1889" height="923" alt="image" src="https://github.com/user-attachments/assets/a8ebdb26-e3f7-47a8-a71e-cfc8f0567cd3" />


### Part 02: Form invalid + valid states
<img width="1278" height="933" alt="Screenshot 2025-10-18 064421" src="https://github.com/user-attachments/assets/e698f3e5-7c83-47ab-8d88-317843a9c3de" />
<img width="1380" height="923" alt="Screenshot 2025-10-18 064448" src="https://github.com/user-attachments/assets/9c6f5198-93df-4de2-9985-37e0fcbc3467" />


### Part 03: Map with 5 results + cards
![Screenshot_18-10-2025_6509_](https://github.com/user-attachments/assets/26592605-abbc-405c-8df6-88c784de3471)


### Part 04: Lighthouse/WAVE report
<img width="811" height="845" alt="image" src="https://github.com/user-attachments/assets/cf21e1be-6600-463b-b3a5-d61d0294369e" />


### Part 05: Deployed site (URL bar visible)
<img width="1919" height="943" alt="image" src="https://github.com/user-attachments/assets/e45a1a5b-5156-4f37-b7fb-0688217cf2b8" />
<img width="1662" height="980" alt="image" src="https://github.com/user-attachments/assets/b870f9fd-786c-4a31-bfcc-36fc90ac278d" />

