

# LUXORA FURNITURE — Premium Landing Page

## Overview
A cinematic, dark-luxury furniture store landing page with parallax effects, smooth inertia scrolling (Lenis.js), and rich Framer Motion animations.

## Design System
- **Colors**: Charcoal `#0f0e0d`, Cream `#f5f0e8`, Gold `#c9a96e`
- **Fonts**: Cormorant Garamond (headings), DM Sans (body)
- **Feel**: High-end editorial magazine aesthetic

## Key Features

### 1. Smooth Scrolling & Global Effects
- Lenis.js for buttery inertia/momentum scrolling integrated with Framer Motion RAF
- Gold scroll progress bar at top
- Custom cursor (desktop) — small circle with lag
- Page load sequence: logo fade → navbar slide → hero reveal

### 2. Navbar
- Fixed glassmorphism navbar (backdrop-blur, semi-transparent)
- "LUXORA" gold logo, smooth-scroll nav links (Home, Collection, About, Services, Contact)
- Shrinks on scroll down with transition
- Mobile hamburger menu

### 3. Hero Section (100vh)
- Auto-rotating furniture showcase (5 items, 3s interval, crossfade transitions)
- Items: luxury sofa, marble dining table, king bed, bookshelf, accent armchair
- Unsplash images, each slide shows name + tagline + price
- Heading: "Crafted for Living. Designed for Legacy."
- Gold-bordered CTA with hover fill animation
- Parallax background at 0.5x scroll speed

### 4. Collection Section
- 6 product cards in responsive grid
- 3D tilt hover effect on each card
- Staggered entrance animation on scroll
- Image, name, category, price, wishlist button

### 5. About Section
- Split layout: parallax image left, text right
- "Where Craft Meets Soul" heading
- 3 animated counters (500+ Designs, 12 Years, 10k+ Homes) that count up on viewport entry

### 6. Services Section
- 4 service cards with icons (Interior Design, Custom Furniture, Delivery, Assembly)
- Horizontal scroll on mobile
- Subtle glow on hover

### 7. Contact Section
- Dark full-width section
- Email input + CTA button
- Address, phone, email with icons
- Animated underline hovers

### 8. Footer
- Logo, tagline, social icons, copyright

## Parallax & Animation Details
- Section headings slide in from left/right on scroll
- Product cards scale up on viewport entry
- Floating geometric shapes at different scroll speeds for depth
- All powered by Framer Motion useScroll + useTransform

## Technical Approach
- Install: `framer-motion`, `lenis`
- Google Fonts loaded via index.html
- All sections as separate components
- Lazy-loaded Unsplash images
- Fully responsive (mobile + tablet + desktop)
- `will-change: transform` on animated elements for 60fps

