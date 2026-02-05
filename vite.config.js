// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command, mode }) => {
  const isBuild = command === 'build'
  const isSSR = mode === 'ssr'

  return {
    plugins: [
      tailwindcss(),
      react({
        // ✅ Fix para SSR dev
        jsxImportSource: 'react'
      })
    ],
    build: {
      ...(isBuild && !isSSR && {
        outDir: 'dist/client'
      }),
      ...(isSSR && {
        ssr: true,
        outDir: 'dist/server'
      })
    },
    ssr: {
      // ✅ SSR dev: React JSX externo (evita module error)
      noExternal: isBuild 
        ? ['react', 'react-dom', 'react-router-dom']
        : []
    },
    optimizeDeps: {
      include: ['react', 'react-dom']
    }
  }
})
