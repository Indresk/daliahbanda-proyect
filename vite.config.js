// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command, mode }) => {
  const isSSRBuild = mode === 'ssr'
  
  return {
    plugins: [
      tailwindcss(),
      react()
    ],
    build: {
      // ✅ Esbuild por default (Vercel lo tiene)
      minify: 'esbuild',
      target: 'es2022',
      ...(isSSRBuild ? {
        ssr: 'src/entry-server.jsx',
        outDir: 'dist/server',
        rollupOptions: {
          output: {
            entryFileNames: 'entry-server.js'
          }
        }
      } : {
        outDir: 'dist/client'
      })
    },
    ssr: {
      noExternal: ['react', 'react-dom']
    }
  }
})