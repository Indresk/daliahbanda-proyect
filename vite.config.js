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
      minify: 'esbuild',  // ✅ Vercel compatible
      target: 'es2022',
      sourcemap: false,   // ✅ Production
      ...(isSSRBuild ? {
        ssr: 'src/entry-server.jsx',
        outDir: 'dist/server',
        rollupOptions: {
          external: [
            'react-router',
            'react-router-dom'
          ],
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