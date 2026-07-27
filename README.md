# MoonShine Interactive — ESPERANCE

> **Creating stories worth remembering.**  
> Official showcase website for **ESPERANCE**, an original story-driven third-person cyberpunk action-adventure game developed by MoonShine Interactive in Chennai, India.

---

## Overview Of the website

MoonShine Interactive is an independent game development studio based in Chennai. *ESPERANCE* is set in **Silver City**—a futuristic society governed by an all-pervasive artificial intelligence core where mandatory comfort and emotional control suppress human choice. 

This repository contains the interactive studio and game web application, featuring a dark cyberpunk aesthetic, dynamic canvas effects, synthesized Web Audio interactions, and a 3D character viewport sandbox.

---

## Features

- **Interactive Atmospheric Rain (`CyberRainCanvas`)**  
  Procedural cyberpunk red rain rendered on an HTML5 canvas. Features dynamic cursor magnetic attraction within a localized radius, adjusting droplet density, velocity, and brightness dynamically. Moves behind page content as the user scrolls.

- **Character Roster & 3D Model Extrusion (`Character3DModelViewer`)**  
  Interactive character dossier inspection viewer. Samples 2D concept captures and extrudes pixel depth data into interactive 3D voxel models, point-cloud particles, and wireframe meshes with 360° mouse orbital rotation controls.

- **Developer Prototype Sandbox (`DevView`)**  
  Toggleable developer view accessible via the menu drawer (`DEV: ON / OFF`). Hosts experimental UI prototypes, particle telemetry counters, and rendering metric counters.

- **Synthesized UI Audio Engine (`cyberAudio`)**  
  Built with the native Web Audio API to deliver instant, zero-dependency audio feedback for UI clicks, hover events, and view transitions. Can be toggled on/off in the top menu.

- **Responsive Multi-Page Routing**  
  Single-Page Application (SPA) architecture supporting smooth hash-based navigation:
  - **Home / ESPERANCE**: Story overview, world introduction, and concept art gallery.
  - **Studio**: Mission statement and core principles of MoonShine Interactive.
  - **Team**: Highlight grid of the 13-person studio roster.
  - **Trailer & Screenshots**: Lightbox media gallery and video preview.
  - **Contact**: Inquiries and press contact info.

---

## Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Custom CSS tokens
- **Graphics & Animation**: HTML5 2D Canvas + WebGL 3D pixel depth projection
- **Audio**: Web Audio API (Synthesized UI audio)
- **Icons & Typography**: Google Fonts (Inter, Outfit, Material Symbols)

---

## Project Structure

```
├── public/                # Static assets
├── src/
│   ├── assets/            # High-res concept art & branding images
│   ├── components/        # React components
│   │   ├── Character3DModelViewer.jsx  # Interactive 3D depth-extruded voxel viewer
│   │   ├── CharactersShowcase.jsx      # Character dossier selection grid
│   │   ├── ContactView.jsx             # Studio contact page
│   │   ├── CyberRainCanvas.jsx         # Full-screen interactive rain canvas
│   │   ├── DevView.jsx                 # Developer sandbox & telemetry hub
│   │   ├── Footer.jsx                  # Global footer component
│   │   ├── GamesView.jsx               # Home page & main story sections
│   │   ├── LightboxModal.jsx           # High-resolution image modal
│   │   ├── Navbar.jsx                  # Global menu drawer & HUD controls
│   │   ├── ScreenshotsView.jsx         # Media gallery view
│   │   ├── StudioView.jsx              # Studio history & core pillars
│   │   ├── TeamView.jsx                # Team roster display
│   │   └── TrailerModal.jsx            # Video trailer preview modal
│   ├── utils/
│   │   └── audioEngine.js              # Web Audio API synthesizer
│   ├── App.jsx            # Main app router & layout manager
│   ├── main.jsx           # React entry point
│   └── index.css          # Core CSS design system & utility classes
├── package.json
└── vite.config.js
```

---

## Getting Started

### Prerequisites

- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/moonshine-interactive/esperance-web.git
   cd esperance-web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the local development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

Build the optimized static assets for deployment:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

---

## Developer Controls

- **Dev Mode Toggle**: Open the **MENU** drawer (top right) and click **`DEV: OFF`** to switch on the developer sandbox. This reveals the **`DEV // PROTOTYPE HUB`** page containing the 3D character voxel model viewer and real-time canvas metrics.
- **Audio Toggle**: Click **`AUDIO: OFF`** in the menu drawer to enable UI sound effects.

---

## License

Confidential — For Internal & Development Use  
© MoonShine Interactive. All rights reserved.
