# [Dylan Purbrick](https://dylan-pk.github.io/dylan-purbrick/) | Mechatronic Engineering Portfolio
![Build Status](https://github.com/dylan-pk/dylan-purbrick/actions/workflows/deploy.yml/badge.svg)

A high-performance personal portfolio designed with an industrial, mechatronic aesthetic. This site serves as a central hub for professional documentation, academic reflections, and technical project logs, including automotive conversions and robotics development.

## 🛠 Tech Stack

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [Astro 5.0](https://astro.build/) | Static Site Generation (SSG) for high-speed performance. |
| **Components** | [React](https://reactjs.org/) | Interactive elements like the `ProjectSlideshow`. |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS for a custom industrial design language. |
| **Automation** | GitHub Actions | Automated build, deployment, and workflow management. |
| **Deployment** | GitHub Pages | Reliable static hosting. |

## 🚀 Key Engineering Features

### 1. Direction-Aware Navigation System
The site features a custom-engineered navigation drivetrain. Instead of traditional "Next/Prev" buttons, the system uses:
* **Boundary Sensing**: Monitors `scrollY` coordinates to trigger transitions when the user hits the "top" or "bottom" of a page.
* **Gestural Logic**: Implements "Pull-to-Previous" on mobile and scroll-wheel intent on desktop to allow for fluid, sequential browsing through the resume and projects.

### 2. Industrial Design Language
The UI is built on a custom **128px Engineering Grid** background with a fixed **96px Sidebar Chassis**. 
* **Precision Tabs**: Vertical navigation tabs with "Mechanical Engagement" (hover expansion and seamless active-state seams).
* **Mobile Adaptivity**: A responsive layout that converts vertical tabs into a horizontal scroll-bar on narrow viewports to maintain legibility.

### 3. Automated "Janitor" Pipeline
To maintain a clean development environment, the GitHub Actions workflow includes a specialized `prune-history` job.
* **Function**: Uses the GitHub CLI (`gh`) to automatically delete old workflow runs, retaining only the 4 most recent "known-good" snapshots.
* **Logic**: Maps database IDs and applies a slice filter to prevent storage bloat in the repository.

### 4. Swipe-Enabled Project Galleries
Project documentation is showcased via a React-based slideshow component featuring:
* **Touch Sensors**: Native swipe detection for mobile users.
* **Safety Interlocks**: Event propagation controls to prevent gallery interactions from accidentally triggering parent links.

## 📂 Project Structure

```bash
├── src/
│   ├── components/      # React & Astro components (Slideshow, Nav, etc.)
│   ├── layouts/         # The main 'chassis' of the site
│   ├── pages/           # Individual routes (Home, Resume, Projects)
│   └── styles/          # Global CSS and Industrial Grid definitions
├── public/              # Static assets (Images, Icons, PDFs)
└── .github/workflows/   # The CI/CD "Janitor" & Deployment logic
```

## 🛠 Development & Build

### Installation
```bash
npm install --legacy-peer-deps
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

## 📬 Contact
**Dylan Purbrick** *Undergraduate Mechatronic Engineer* [Email](mailto:dylan.m.purbrick@gmail.com) | [LinkedIn](https://www.linkedin.com/in/dylan-purbrick-5b326027a/)
