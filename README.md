# Kanue Ventures

A modern, responsive website for Kanue Ventures - a family-owned investment firm based in South Kashmir, building sustainable value in future-ready businesses across critical sectors.

## 🌟 Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Parallax effects and scroll-based animations for enhanced visual experience
- **Interactive UI**: Engaging user interface with modern components from shadcn-ui
- **Contact Form**: Integrated contact form with email functionality via edge functions
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support for better social media sharing
- **Dark/Light Mode**: Theme support with semantic color tokens

## 🚀 Tech Stack

- **Framework**: [React 18](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn-ui](https://ui.shadcn.com/)
- **Backend**: Lovable Cloud (Supabase)
- **Forms**: React Hook Form with Zod validation
- **Routing**: React Router v6
- **Icons**: Lucide React

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd kanue-ventures
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:8080`

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn-ui components
│   ├── Hero.tsx        # Hero section with parallax
│   ├── AboutAnimated.tsx
│   ├── FocusAreasAnimated.tsx
│   ├── ApproachAnimated.tsx
│   ├── ContactForm.tsx
│   └── ...
├── hooks/              # Custom React hooks
├── pages/              # Page components
├── lib/                # Utility functions
├── integrations/       # Third-party integrations
└── index.css           # Global styles and design tokens
```

## 🎨 Design System

The project uses a comprehensive design system with semantic color tokens defined in `index.css` and `tailwind.config.ts`. All components follow the design system for consistency.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Deployment

The site is deployed via Lovable Cloud. Frontend changes require clicking "Update" in the publish dialog, while backend changes deploy automatically.

## 📧 Contact

For inquiries about Kanue Ventures, please use the contact form on the website or visit our office in South Kashmir.

## 📄 License

Copyright © 2025 Kanue Ventures. All rights reserved.
