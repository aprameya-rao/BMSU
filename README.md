# BMS University Website (Frontend)
A modern, responsive frontend for BMS University built with Vite + React + TypeScript.  
This project focuses on a clean layout, consistent typography, sharp rectangular UI, and shared header/footer across all pages.

## Tech Stack
- Vite
- React
- TypeScript (TSX)
- Tailwind (via CDN in `index.html`)

## Key Features
- Common navbar and footer across all pages
- Consistent font across the entire site
- Sharp edges (no rounded corners)
- Landing page video background with forward/reverse loop
- React Router based page navigation
- Scroll-to-top behavior on route changes

## Pages
- Home
- About
- Academics
- Admissions
- Placements
- Campuses (contains branches)
- Students
- Campus Life
- Alumni
- Contact
- Research
- Privacy Policy
- Terms of Service

## Setup Instructions
1. Clone the repo:
         git clone https://github.com/aprameya-rao/BMSU.git -b anish
2. Install dependencies:
         npm install
3. Run the development server:
         npm run dev

## Project Structure
- `src/` React source code
- `src/pages/` Individual page components
- `src/components/` Shared layout components (Header, Footer, ScrollToTop)
- `public/` Static assets (logos, video)

## Additional Ideas (Mandatory)
- Add a 3D Google‑style campus view for every campus.
- Build an admin dashboard for easy content updates.
- Add multilingual support (Kannada/English) for accessibility and broader reach.
