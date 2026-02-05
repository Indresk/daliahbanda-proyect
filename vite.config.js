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
      target: 'es2022',  // ← Production target
      minify: 'terser',  // ← Minifica development chunks
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
      // ✅ Solo en SSR build, excluye React Router dev chunks
      noExternal: isSSRBuild 
        ? ['react', 'react-dom']
        : undefined
    }
  }
})