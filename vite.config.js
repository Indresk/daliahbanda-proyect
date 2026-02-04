import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const isBuild = command === "build";
  return{
  plugins: [
    tailwindcss(),
    react()],
    ...(isBuild && {
      build: {
        outDir: "dist/client"
      },
      ssr: {
        noExternal: ["react", "react-dom"]
      }
    })
  };
});
