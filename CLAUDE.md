# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Insightec Exablate Prime SPA (Single Page Application) built with Vite. The application is a professional medical device product page designed with Apple-style aesthetics to showcase the Exablate Prime MR-Guided Focused Ultrasound system.

## Development Commands

### Core Development
- `npm install` - Install dependencies
- `npm run dev` - Start development server on port 3000 with auto-open
- `npm run build` - Build for production (outputs to `dist/` with sourcemaps)
- `npm run preview` - Preview production build locally

### Prerequisites
- Node.js v14 or higher
- npm or yarn

## Architecture

### Single Page Application Structure
The application is built as a vanilla JavaScript SPA using Vite. The entire application renders into a single `#app` div with template-based HTML generation.

**Core Files:**
- `index.html` - Entry point with SF Pro Display font loading
- `src/main.js` - Application entry, DOM generation, and event handling
- `src/style.css` - Complete styling with Apple-inspired design system
- `vite.config.js` - Vite configuration with port 3000 and auto-open

### Application Sections
The SPA is structured as a single-scroll marketing page with these main sections:
1. **Navigation** - Fixed header with blur backdrop effects
2. **Hero Section** - Product introduction with 3D device mockup
3. **Features Grid** - Four capability cards with hover animations
4. **Technical Specifications** - Two-column layout with visual elements
5. **Clinical Applications** - Treatment categories and FDA approvals
6. **System Components Gallery** - Interactive component showcase
7. **Contact Section** - Call-to-action with dark theme
8. **Footer** - Comprehensive site navigation and legal info

### Design System
- **Color Palette**: Apple-inspired grays (#1d1d1f, #fbfbfd, #f5f5f7) with accent blue (#0071e3)
- **Typography**: System fonts with SF Pro Display fallback, precise font weights and spacing
- **Layout**: CSS Grid and Flexbox with 1200px max-width container
- **Interactions**: Smooth scrolling, hover animations, 3D transforms, backdrop blur
- **Responsive**: Mobile-first with breakpoint at 768px

### JavaScript Functionality
- Smooth scroll navigation between sections
- Navbar scroll effects (blur intensifies on scroll)
- Interactive gallery component selection
- All interactions use vanilla JavaScript with event delegation

### Content Focus
The application presents the Exablate Prime as a premium medical device for:
- Essential Tremor treatment (FDA approved)
- Parkinson's Disease tremor treatment
- Sub-millimetric precision targeting
- MRI-guided focused ultrasound technology
- Incisionless neurosurgery platform

## Development Notes

### Style Architecture
The CSS is organized in logical sections: Reset → Navigation → Hero → Features → Specs → Clinical → Gallery → Contact → Footer → Responsive → Animations. Each section uses consistent naming conventions and Apple-style visual hierarchy.

### Asset Management
- Static assets go in `public/` directory
- Vite handles asset optimization and bundling
- No external image dependencies currently - uses CSS gradients and geometric shapes

### Browser Compatibility
- Modern ES6+ features used throughout
- CSS uses modern properties (CSS Grid, backdrop-filter, CSS custom properties)
- Designed for modern browsers with graceful degradation
- after each code change , make sure to commit and push it