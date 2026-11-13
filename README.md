# SkillNexis Week 1 — Frontend Fundamentals

A responsive React + Vite application that combines the three core Week 1 deliverables and the extra practice-set tasks:

1. Personal portfolio website (About, Education, Projects, Contact)
2. Five reusable React components: `Header`, `Footer`, `Card`, `Button`, and `Form`
3. React Blog UI powered by local JSON data, with live search and category filtering
4. Extra practice: responsive e-commerce storefront with category filters and demo cart state

## Tech stack

- React (functional components, props, state, events, hooks)
- Vite
- HTML5 semantic elements
- CSS3 (Flexbox, Grid, responsive media queries)
- JavaScript ES6+
- JSON data

## Run locally

Make sure Node.js (LTS) is installed. Open this folder in VS Code, then run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

To create a production build:

```bash
npm run build
npm run preview
```

## Project structure

```text
skillnexis-week1-project/
├── public/
├── src/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Footer.jsx
│   │   ├── Form.jsx
│   │   └── Header.jsx
│   ├── data/
│   │   └── posts.json
│   ├── pages/
│   │   ├── Blog.jsx
│   │   ├── Portfolio.jsx
│   │   └── Store.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Features to demonstrate

- Switch between Portfolio, Blog, and Store from the top navigation.
- Browse the extra e-commerce practice page, filter product categories, and add sample products to a demo cart.
- Navigate to About, Education, Skills, Projects, and Contact sections.
- Submit the contact form to see client-side validation and a confirmation message. This is a frontend demo; it does not send messages to a backend.
- Search blog posts by title, excerpt, or category.
- Filter posts by category and clear filters when no result is found.
- Open an article and return to the complete blog listing.

## Before submission

- Verify your name, education, project descriptions, and links.
- Run `npm install` and `npm run build` and resolve any errors.
- Capture screenshots of the portfolio, reusable components/contact form, blog listing, and search/filter result.
- Push the project folder to your GitHub repository and add the repository URL to your submission form.

## Assignment mapping

| Week 1 requirement | Implementation |
|---|---|
| Personal portfolio | `src/pages/Portfolio.jsx` |
| About, Education, Projects, Contact | Portfolio sections |
| Header component | `src/components/Header.jsx` |
| Footer component | `src/components/Footer.jsx` |
| Card component | `src/components/Card.jsx` |
| Button component | `src/components/Button.jsx` |
| Form component | `src/components/Form.jsx` |
| Dynamic rendering with props/state | Component props, form state, page state |
| Blog posts from JSON | `src/data/posts.json` |
| Search and filter | `src/pages/Blog.jsx` |
| E-commerce practice landing page | `src/pages/Store.jsx` |
| Flexbox and Grid layouts | `src/styles.css` |
| Responsive navigation and form validation | `Header.jsx`, `Form.jsx` |
