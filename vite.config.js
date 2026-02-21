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
        jsxImportSource: 'react'
      })
    ],
    build: {
      ...(isBuild && !isSSR && {
        outDir: 'dist/client'
      }),
      ...(isSSR && {
        ssr: true,
        outDir: 'dist/server',
        target: 'node18',
        rollupOptions: {
          output: {
            format: 'esm',
            inlineDynamicImports: true
          }
        },
        minify: false 
      })
    },
    ssr: {
      noExternal: []
    },
    experimental: {
      renderBuiltUrl: false
    }
  }
})
