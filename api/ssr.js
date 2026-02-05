import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import fs from 'node:fs/promises'
import express from 'express'

// Constants
const isProduction = process.env.NODE_ENV === 'production'
const base = process.env.BASE || '/'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


// Cached production assets
// const templateHtml = isProduction
//   ? await fs.readFile(join(__dirname, '../dist/client/index.html'), 'utf-8')
//   : ''

// Create http server → EXPORTAR app
export const app = express()  // ← AGREGAR 'export'

// Add Vite or respective production middlewares
/** @type {import('vite').ViteDevServer | undefined} */
let vite
if (!isProduction) {
  const { createServer } = await import('vite')
  vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    base,
  })
  app.use(vite.middlewares)
} else {
  const compression = (await import('compression')).default
  const sirv = (await import('sirv')).default
  app.use(compression())
  app.use(base, sirv('./dist/client', { extensions: [] }))
}

// Serve HTML
app.use(/.*$/, async (req, res) => {
  try {
    const url = req.originalUrl.replace(base, '')

    let template
    let render
    if (!isProduction) {
      template = await fs.readFile('./index.html', 'utf-8')
      template = await vite.transformIndexHtml(url, template)
      render = (await vite.ssrLoadModule('/src/entry-server.jsx')).render
    } else {
      const templatePath = join(__dirname, '../dist/client/index.html')
      template = await fs.readFile(templatePath, 'utf-8')
      //template = templateHtml
      render = (await import('./dist/server/entry-server.js')).render
    }

    const rendered = await render(url,req)

    const html = template
      .replace(`<!--app-head-->`, rendered.head ?? '')
      .replace(`<!--app-html-->`, rendered.html ?? '')
      .replace(
        `<!--app-initial-props-->`, 
        `<script>window.__INITIAL_DATA__=${JSON.stringify(rendered.hydrationData || {})}</script>`
      )

    res.status(200).set({ 'Content-Type': 'text/html' }).send(html)
  } catch (e) {
    vite?.ssrFixStacktrace(e)
    console.log(e.stack)
    res.status(500).end(e.stack)
  }
})