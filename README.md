# Castonfactory Website

Modern corporate website for Castonfactory company built with Next.js 15.5.9.

## Features

- 🎨 Modern, premium design with dark theme
- ✨ Smooth animations and transitions
- 📱 Fully responsive across all devices
- ⚡ Built with Next.js 15.5.9 (secure version)
- 🎯 SEO optimized
- 🔒 No security vulnerabilities (CVE-2025-55182 compliant)

## Project Structure

```
castonfactory/
├── src/
│   ├── app/
│   │   ├── contact/          # Contact Us page with FAQ
│   │   ├── privacy/          # Privacy Policy page
│   │   ├── legal/            # Legal Notice page
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Main landing page
│   │   └── globals.css       # Global styles
│   └── components/
│       ├── Header.tsx         # Header with navigation
│       ├── Footer.tsx         # Footer with links
│       ├── HeroSection.tsx    # Hero/Slogan section
│       ├── OurBusiness.tsx    # Business introduction
│       ├── Portfolio.tsx      # Portfolio showcase
│       ├── AboutUs.tsx        # Company information
│       └── LocationSection.tsx # Location & contact info
├── package.json
├── next.config.js
└── tsconfig.json
```

## Page Structure

### Main Page
- **Header**: Navigation menu with smooth scroll
- **슬로건 (Hero)**: Company slogan and call-to-action
- **Our Business**: Service offerings
- **Portfolio**: Project showcase
- **About Us**: Company introduction and values
- **Location**: Office location and contact details
- **Footer**: Links to Privacy, Legal, Contact

### Contact Us Page
- FAQ section with expandable questions
- Customer support contact information
- Email, phone, and live chat options

### Additional Pages
- Privacy Policy (개인정보처리방침)
- Legal Notice (법적고지)

## Getting Started

### Prerequisites

Make sure you have Node.js installed (version 18 or higher recommended).

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Customization

All content uses placeholder text (Lorem Ipsum) that can be easily replaced:

1. **Text Content**: Edit the component files in `src/components/`
2. **Colors**: Modify CSS variables in `src/app/globals.css`
3. **Images**: Add images to `/public` folder and update image paths
4. **Map**: Integrate Google Maps or Naver Maps API in `LocationSection.tsx`

## Technology Stack

- **Framework**: Next.js 15.5.9
- **Language**: TypeScript
- **Styling**: CSS Modules + Vanilla CSS
- **Fonts**: Inter (Google Fonts)

## Security

This project uses Next.js 15.5.9, which is a secure version that addresses CVE-2025-55182 vulnerability.

## License

© 2024 Castonfactory. All rights reserved.
