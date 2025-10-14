# FitZone Gym Landing Page

A modern, responsive gym landing page built with React, TypeScript, and styled-components. Designed for mobile-first experience with smooth animations and professional UI/UX.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with tablet and desktop optimizations
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Performance Optimized**: Built with React best practices and TypeScript
- **Accessibility**: WCAG compliant with proper semantic HTML and ARIA labels
- **SEO Ready**: Semantic structure and meta tags optimized for search engines
- **Animation Library**: Framer Motion for smooth, performant animations

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Styled Components** for component styling
- **Framer Motion** for animations
- **React Icons** for consistent iconography
- **Google Fonts** (Poppins & Montserrat)

## 📱 Sections

- **Header**: Fixed navigation with mobile hamburger menu
- **Hero**: Eye-catching intro with CTA buttons and floating stats
- **Services**: Grid of gym services with icons and descriptions  
- **Pricing**: Membership plans with feature comparisons
- **Contact**: Contact form with business information
- **Footer**: Links, social media, and business details

## 🎨 Design System

### Colors
- Primary: #FF6B35 (Orange)
- Secondary: #1A1A1A (Dark)
- Accent: #FFD700 (Gold)
- Grays: Light, Medium, Dark variants

### Typography
- Primary: Poppins (body text)
- Secondary: Montserrat (headings)
- Responsive font sizes with mobile optimization

### Breakpoints
- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+
- Wide: 1200px+

## 📂 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── common/          # Generic components (Button, Card, Container)
│   └── sections/        # Page sections (Header, Hero, etc.)
├── styles/              # Styling system
│   ├── theme.ts         # Design system tokens
│   ├── GlobalStyles.ts  # Global CSS styles
│   └── styled.d.ts      # TypeScript declarations
├── types/               # TypeScript type definitions
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
└── assets/              # Static assets
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd gym-landing
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Available Scripts

- `npm start` - Development server
- `npm run build` - Production build
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 🎯 Best Practices Implemented

### Code Organization
- **Component-based architecture** with clear separation of concerns
- **Custom hooks** for reusable logic
- **TypeScript interfaces** for type safety
- **Barrel exports** for clean imports

### Performance
- **Code splitting** ready structure
- **Optimized animations** with Framer Motion
- **Responsive images** with proper sizing
- **Semantic HTML** for better accessibility

### Styling
- **Design system** with consistent tokens
- **Mobile-first** responsive design
- **CSS-in-JS** with styled-components
- **Theme-based** styling approach

### User Experience
- **Smooth scrolling** navigation
- **Loading states** and transitions
- **Form validation** and feedback
- **Accessibility** features

## 🔧 Customization

### Changing Colors
Update the theme in `src/styles/theme.ts`:

```typescript
export const theme = {
  colors: {
    primary: '#YOUR_COLOR',
    // ... other colors
  }
}
```

### Adding Sections
1. Create component in `src/components/sections/`
2. Add to `src/components/sections/index.ts`
3. Import and use in `src/App.tsx`

### Modifying Content
- Update service data in `Services.tsx`
- Modify pricing plans in `Pricing.tsx`
- Change contact info in `Contact.tsx`

## 📱 Mobile Optimization

- **Touch-friendly** button sizes (44px minimum)
- **Optimized font sizes** for mobile readability
- **Simplified navigation** with hamburger menu
- **Fast loading** with optimized assets
- **Responsive images** that scale properly

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Popular Platforms
- **Netlify**: Drag and drop `build` folder
- **Vercel**: Connect GitHub repository
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3**: Upload build folder to S3 bucket

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.