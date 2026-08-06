<div align="center">

# Md. Ferdous Hasan — Portfolio

**Software Quality Assurance Engineer**

A modern, responsive personal portfolio showcasing professional experience, projects, certifications, and technical skills — built with Next.js and Tailwind CSS.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?logo=vercel)](https://ferdoushasan-portfolio.vercel.app)

[Live Demo](https://ferdoushasan-portfolio.vercel.app) · [Report an Issue](https://github.com/fer-doushasan/my_portfolio/issues)

</div>

---

## Overview

This repository contains the source code for my personal portfolio website — a single-page application built to present my professional journey as a Software Quality Assurance Engineer, along with hands-on development experience in Next.js, React, and API testing.

## Features

- **Responsive Hero & Navigation** — Fixed nav with active-section highlighting, smooth-scroll links, and a fully responsive layout across mobile, tablet, and desktop.
- **About** — Snapshot stats and a summary of professional strengths.
- **Experience Timeline** — Expandable cards detailing role, responsibilities, tech stack, and domain (SaaS, ERP, Web Solutions) per company.
- **Technical Skills** — Categorized skill groups (Manual/Automation/API Testing, Tools, Development, Databases, etc.).
- **Projects** — Featured QA and development projects with live/GitHub links.
- **Certificates & Learning** — Professional development timeline with course details.
- **Education** — Academic background with expandable highlights and coursework.
- **Functional Contact Form** — Submissions are sent directly to a real inbox via a Next.js API route + Nodemailer (Gmail SMTP), with reply-to set to the visitor's email.

## Tech Stack

| Category | Technology |
|---|---|
| Framework | [Next.js](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| UI Library | React 19 |
| Styling | Tailwind CSS 4 |
| Email | Nodemailer (Gmail SMTP) |
| Deployment | Vercel |

## Getting Started

### Prerequisites

- Node.js 18.18 or later
- npm (or yarn / pnpm / bun)

### Installation

```bash
git clone https://github.com/fer-doushasan/my_portfolio.git
cd my_portfolio
npm install
```

### Environment Variables

The contact form requires a Gmail account with an **App Password** (not your regular password) to send emails via SMTP.

Create a `.env.local` file in the project root:

```bash
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password
```

> To generate an App Password: enable **2-Step Verification** on your Google Account, then go to **Google Account → Security → App passwords** and generate one for this project.

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
src/
├── app/
│   ├── api/contact/route.ts   # Contact form email handler (Nodemailer)
│   ├── page.tsx                # Main portfolio page (all sections)
│   ├── layout.tsx              # Root layout & metadata
│   ├── globals.css             # Global styles & theme variables
│   └── icon.svg                # Favicon
└── public/                     # Static assets (images, resume PDF)
```

## Deployment

This project is deployed on [Vercel](https://vercel.com). When deploying your own copy, make sure to add `GMAIL_USER` and `GMAIL_APP_PASSWORD` under **Project Settings → Environment Variables**, then redeploy.

## Contact

**Md. Ferdous Hasan**
Software Quality Assurance Engineer

- Email: [ferdoushasan382@gmail.com](mailto:ferdoushasan382@gmail.com)
- LinkedIn: [fer-doushasan](https://linkedin.com/in/fer-doushasan)
- GitHub: [@fer-doushasan](https://github.com/fer-doushasan)

---

<div align="center">

© 2026 Md. Ferdous Hasan

</div>
