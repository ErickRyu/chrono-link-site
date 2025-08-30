# ChronoLink Development Guidelines

## Project Overview
ChronoLink is a Next.js 15 website showcasing a physical timer device with BLE connectivity. The site features dual design systems - a vibrant TRMNL-inspired style and a minimalist Balmuda premium style.

## Tech Stack
- **Framework**: Next.js 15.5.2 with Turbopack
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Icons**: Lucide React

## Key Commands

### Development
```bash
npm run dev      # Start development server with Turbopack
npm run build    # Production build
npm start        # Run production server
npm run lint     # Run ESLint
```

### Testing
```bash
# No test framework configured yet
# Consider adding: npm test
```

## Design Systems

### 1. Default Style (TRMNL-Inspired)
- Location: `/` main pages
- Characteristics: Vibrant gradients, grid layouts, marketing-focused
- Key colors: Blue gradients, orange accents
- Components: Hero.tsx, Features.tsx, Pricing.tsx

### 2. Balmuda Premium Style
- Location: `/balmuda` route
- Characteristics: Extreme minimalism, monochrome, philosophical
- Key colors: Black, white, grays
- Components: BalmudaHero.tsx, BalmudaPhilosophy.tsx

## Important Files

### Core Configuration
- `app/globals.css` - Tailwind CSS v4 with @theme directive
- `postcss.config.mjs` - Uses @tailwindcss/postcss plugin
- `next.config.ts` - Next.js configuration

### Main Pages
- `app/page.tsx` - Homepage with marketing components
- `app/about/page.tsx` - Company information
- `app/product/page.tsx` - Product details
- `app/balmuda/page.tsx` - Premium style showcase

## Development Guidelines

### Component Creation
1. Check existing components for patterns
2. Follow established naming conventions (PascalCase)
3. Use TypeScript for all components
4. Maintain consistent styling approach per design system

### Styling Rules
- Use Tailwind CSS classes exclusively
- Follow mobile-first responsive design
- Maintain consistent spacing (8px grid system)
- Use semantic HTML elements

### State Management
- Use React hooks for local state
- Consider Context API for global state if needed
- Keep components focused and single-purpose

### Performance
- Leverage Next.js server components where possible
- Use dynamic imports for heavy components
- Optimize images with Next.js Image component
- Keep bundle size minimal

## Product Information

### ChronoLink Device
- Physical timer with BLE connectivity
- ADHD-friendly design
- PC synchronization via Bluetooth
- Tactile dial interface
- Screen blocking during focus sessions

### Key Metrics
- 237 beta testers
- 4.8/5.0 satisfaction rating
- 89% concentration improvement
- 76% reduced phone usage

### Target Audience
- ADHD individuals
- Remote workers
- Students
- Productivity enthusiasts

## Marketing Elements
- Real-time backer counter
- Early bird pricing tiers
- Urgency banners (48-hour limited)
- Social proof testimonials
- Interactive animations

## Code Conventions

### Imports
```typescript
// React/Next imports first
import { useState } from 'react';
// External libraries
import { ChevronRight } from 'lucide-react';
// Local components
import Hero from '@/components/Hero';
// Utilities last
import { cn } from '@/lib/utils';
```

### Component Structure
```typescript
export default function ComponentName() {
  // State declarations
  // Event handlers
  // Effects
  // Render
  return (
    <section>
      {/* Component content */}
    </section>
  );
}
```

## Common Patterns

### Responsive Grid
```jsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
```

### Container Width
```jsx
<div className="max-w-7xl mx-auto px-8">
```

### Animation Classes
```jsx
className="transition-all duration-300 hover:scale-105"
```

## Deployment Checklist
- [ ] Run `npm run build` successfully
- [ ] Test all pages and interactions
- [ ] Verify responsive design on mobile
- [ ] Check meta tags and SEO
- [ ] Validate all links
- [ ] Test form submissions
- [ ] Verify analytics setup

## Future Enhancements
- Add testing framework (Jest/Vitest)
- Implement i18n for Korean/English
- Add CMS integration
- Set up CI/CD pipeline
- Add animation library (Framer Motion)
- Implement A/B testing
- Add blog section
- Create admin dashboard

## Troubleshooting

### Tailwind CSS v4 Issues
If styles not applying:
1. Check `@theme` directive in globals.css
2. Verify postcss.config.mjs uses @tailwindcss/postcss
3. Restart dev server after changes

### Build Errors
- Clear `.next` folder: `rm -rf .next`
- Clear node_modules: `rm -rf node_modules && npm install`
- Check for TypeScript errors: `npx tsc --noEmit`

## Contact
- Project: ChronoLink
- Email: rkggmdii+chronolink@gmail.com
- Website: https://chronolink.co.kr (planned)