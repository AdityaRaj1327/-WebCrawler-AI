WebCrawler AI - React + TypeScript + Tailwind CSS
A modern, fully-typed React application with Tailwind CSS for intelligent web scraping powered by AI using the OpenRouter API.

Features
✅ React 18 with TypeScript
✅ Tailwind CSS for styling (no custom CSS needed!)
✅ Vite for blazing fast builds
✅ Lucide React icons
✅ Type-safe components with proper interfaces
✅ Clean, modern UI with gradient backgrounds
✅ Responsive design
✅ Loading states and error handling
Project Structure
webcrawler-ai/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── InputForm.tsx
│   │   ├── Results.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── index.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
Installation
Step 1: Create a new Vite project
bash
npm create vite@latest webcrawler-ai -- --template react-ts
cd webcrawler-ai
Step 2: Install dependencies
bash
npm install
npm install -D tailwindcss postcss autoprefixer
npm install lucide-react
Step 3: Initialize Tailwind CSS
bash
npx tailwindcss init -p
Step 4: Copy all provided files
Copy all the provided files into your project:

src/components/ - All component .tsx files
src/App.tsx - Main app component
src/index.tsx - Entry point
src/index.css - Tailwind imports
tailwind.config.js - Tailwind configuration
postcss.config.js - PostCSS configuration
tsconfig.json - TypeScript configuration
vite.config.ts - Vite configuration
index.html - HTML entry point
Step 5: Configure API Key
Open src/App.tsx and replace 'YOUR_API_KEY_HERE' with your actual OpenRouter API key:

typescript
'Authorization': 'Bearer YOUR_API_KEY_HERE',
Get your API key from: https://openrouter.ai/

Usage
Development
Start the development server:

bash
npm run dev
Open your browser and navigate to http://localhost:5173

Build for Production
bash
npm run build
The built files will be in the dist/ folder.

Preview Production Build
bash
npm run preview
Component Overview
App.tsx
Main application component that manages state and API calls. Uses Tailwind utility classes for layout.

Header.tsx
Header component with gradient background using Tailwind's gradient utilities:

bg-gradient-to-r from-blue-600 to-purple-600
InputForm.tsx
Form component with:

Tailwind form styling
Focus states (focus:ring-2 focus:ring-blue-500)
Disabled states
Error display
Loading button states
Results.tsx
Results display with:

Loading spinner animation
Gradient accent bar
Responsive padding and margins
Footer.tsx
Simple footer with centered text and Tailwind typography utilities.

Tailwind CSS Features Used
Gradients
tsx
className="bg-gradient-to-r from-blue-600 to-purple-600"
className="bg-gradient-to-b from-blue-600 to-purple-600"
className="bg-gradient-to-br from-blue-50 via-white to-purple-50"
Spacing & Layout
tsx
className="max-w-4xl mx-auto px-4 py-8"
className="space-y-6"
className="flex items-center gap-3"
Typography
tsx
className="text-3xl font-bold"
className="text-sm font-semibold text-gray-700"
Borders & Shadows
tsx
className="rounded-2xl shadow-lg"
className="border border-gray-300 rounded-lg"
Interactive States
tsx
className="hover:from-blue-700 hover:to-purple-700"
className="focus:ring-2 focus:ring-blue-500 focus:border-transparent"
className="disabled:opacity-50 disabled:cursor-not-allowed"
Animations
tsx
className="animate-spin"  // For loading spinners
className="transition-all"  // Smooth transitions
TypeScript Interfaces
OpenRouterResponse
typescript
interface OpenRouterResponse {
  choices?: {
    message: {
      content: string;
    };
  }[];
}
InputFormProps
typescript
interface InputFormProps {
  url: string;
  setUrl: (url: string) => void;
  objective: string;
  setObjective: (objective: string) => void;
  error: string;
  loading: boolean;
  onSubmit: () => void;
}
ResultsProps
typescript
interface ResultsProps {
  loading: boolean;
  result: string;
}
Customization
Tailwind Theme
To customize colors, fonts, or other design tokens, edit tailwind.config.js:

javascript
export default {
  theme: {
    extend: {
      colors: {
        primary: '#your-color',
      },
      fontFamily: {
        sans: ['Your Font', 'sans-serif'],
      },
    },
  },
}
API Configuration
Update the API endpoint or model in src/App.tsx:

typescript
body: JSON.stringify({
  model: 'openai/gpt-3.5-turbo', // Change model here
  messages: [...]
})
Scripts
npm run dev - Start development server (Vite)
npm run build - Build for production (TypeScript check + Vite build)
npm run lint - Run ESLint
npm run preview - Preview production build locally
Technologies
React 18.2 - UI library
TypeScript 5.2 - Type safety
Vite 5 - Build tool and dev server
Tailwind CSS 3.4 - Utility-first CSS framework
PostCSS - CSS processing
Lucide React - Icon library
OpenRouter API - AI-powered web crawling
Why Tailwind CSS?
✅ No custom CSS files needed (except index.css for Tailwind imports)
✅ Utility-first approach for rapid development
✅ Consistent design system out of the box
✅ Responsive design made easy
✅ Great performance (unused styles are purged)
✅ Easy to customize via config
✅ Excellent VS Code IntelliSense support
Browser Support
Modern browsers with ES2020 support:

Chrome/Edge (latest)
Firefox (latest)
Safari (latest)
License
MIT

Support
Tailwind CSS Docs: https://tailwindcss.com/docs
React Docs: https://react.dev/
TypeScript Docs: https://www.typescriptlang.org/docs/
Vite Docs: https://vitejs.dev/
OpenRouter API: https://openrouter.ai/docs
Tips
Use Tailwind's IntelliSense extension for VS Code for autocomplete
Customize your Tailwind theme in tailwind.config.js
Use the Tailwind CSS docs for reference: https://tailwindcss.com
Keep components small and focused for better reusability
Use TypeScript interfaces for all props to catch errors early
