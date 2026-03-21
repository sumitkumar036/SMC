# 🚀 React + TypeScript + Vite Template

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

A highly opinionated, **production-ready** starter template designed to skip the boilerplate and get straight to building.

---

## 🛠 Tech Stack

| Tool | Description |
| :--- | :--- |
| **Framework** | [React 18+](https://reactjs.org/) |
| **Build Tool** | [Vite](https://vitejs.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) |
| **Icons** | [Lucide React](https://lucide.dev/) |

---

## 📂 Project Structure

```text
src/
├── 🎨 assets/      # Images, fonts, and static files
├── 🧱 components/  # Reusable UI components
├── 🎣 hooks/       # Custom React hooks
├── 📄 pages/       # Page/View components
├── 🌐 services/    # API calls and data fetching
├── 🪄 styles/      # Global CSS and Tailwind config
├── 🛠️ utils/       # Helper functions and constants
└── 🧬 App.tsx      # Main application entry
```

## 🚀 Getting Started
#### 1. Use this Template
###### Click the Use this template button at the top of this repository.

#### 2. Setup
```bash
npm install
npm run dev
```

<p align="center"> Built with ❤️ by Sumit </p>

---


### 2\. The `vite.config.ts`

This tells **Vite** how to handle the `@/` shortcut so you don't have to write `../../components`.

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
3. The tsconfig.json
This tells TypeScript that @/ is a valid path so it doesn't show red squiggly lines. Add this inside your compilerOptions:

JSON
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
    // ... rest of your config
  }
}
