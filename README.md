## React + Vite + Tailwind CSS

terminal

`npm install -D tailwindcss@3 postcss autoprefixer`\
`npx tailwindcss init -p`

tailwind.config.js

```
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

vite.config.js

```
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: "./postcss.config.js",
  },
});
```

App.jsx

```
import "./App.css";
```

App.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
