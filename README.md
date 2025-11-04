# React + Vite + TanStack Router + Tailwind CSS Boilerplate

A modern, clean boilerplate for React applications with the latest tools and best practices.

## 🚀 Features

- **⚡ Vite** - Lightning fast build tool and dev server
- **⚛️ React 19** - Latest React with new features
- **🧭 TanStack Router** - Type-safe routing with file-based routing
- **🎨 Tailwind CSS 4** - Modern utility-first CSS framework
- **📝 TypeScript** - Full type safety
- **🔧 ESLint** - Code linting and formatting
- **📁 Clean Architecture** - Well-organized folder structure

## 📦 What's Included

```
src/
├── common/           # Shared layout components
│   ├── MainLayout.tsx
│   ├── MainLayoutHeader.tsx
│   ├── MainLayoutMain.tsx
│   └── MainLayoutFooter.tsx
├── pages/            # Page components
│   └── HomePage.tsx
├── routes/           # TanStack Router configuration
│   └── routes.tsx
├── index.css         # Global styles with Tailwind
└── main.tsx          # Application entry point
```

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite
- **Routing**: TanStack Router
- **Styling**: Tailwind CSS 4
- **Package Manager**: pnpm
- **Linting**: ESLint

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Use this template** (click "Use this template" button on GitHub)

2. **Clone your new repository**
   ```bash
   git clone https://github.com/yourusername/your-project-name.git
   cd your-project-name
   ```

3. **Install dependencies**
   ```bash
   pnpm install
   ```

4. **Start development server**
   ```bash
   pnpm dev
   ```

5. **Open your browser** to `http://localhost:5173`

## 📝 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

## 🎨 Styling

This boilerplate uses **Tailwind CSS 4** with minimal setup:

- Clean CSS reset in `src/index.css`
- No opinionated styling - add your own Tailwind classes
- Tailwind configured via Vite plugin

## 🧭 Routing

Uses **TanStack Router** with:

- Type-safe routing
- Layout-based architecture
- Centralized route configuration in `src/routes/routes.tsx`

### Adding New Routes

1. Create a new page component in `src/pages/`
2. Import and add the route in `src/routes/routes.tsx`

Example:
```tsx
export const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

// Add to routeTree
const routeTree = rootRoute.addChildren([homeRoute, aboutRoute]);
```

## 🏗️ Project Structure

- **`src/common/`** - Shared layout components and utilities
- **`src/pages/`** - Individual page components
- **`src/routes/`** - Router configuration
- **No barrel exports** - Direct imports for better clarity

## 🔧 Customization

### Layout Components

The layout is split into modular components:
- `MainLayout` - Main wrapper
- `MainLayoutHeader` - Header section
- `MainLayoutMain` - Main content with Router Outlet
- `MainLayoutFooter` - Footer section

### Styling

Add your own Tailwind classes to customize the appearance. The boilerplate includes minimal styling to get you started.

## 📄 License

MIT License - feel free to use this for any project!

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

**Happy coding! 🎉**
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
