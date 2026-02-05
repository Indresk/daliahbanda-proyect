import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
import { render } from "../dist/server/entry-server.js"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default async function handler(req, res) {
  try {
    const templatePath = path.resolve(__dirname, "../dist/client/index.html")
    const template = fs.readFileSync(templatePath, "utf-8")
    
    const url = (req.originalUrl || req.url || '/').replace(process.env.BASE || '/', '/');
    // ✅ render con hydrationData (igual que server.js)
    const rendered = await render(url)

    const html = template
      .replace("<!--app-head-->", rendered.head ?? "")
      .replace("<!--app-html-->", rendered.html ?? "")
      .replace(
        `<!--app-initial-props-->`, 
        `<script>window.__INITIAL_DATA__=${JSON.stringify(rendered.hydrationData || {})}</script>`
      )

    res.status(200).setHeader("Content-Type", "text/html")
    res.end(html)
  } catch (error) {
    console.error("SSR ERROR:", error)
    res.status(500).send("SSR Error")
  }
}

// import fs from "fs"
// import path from "path"
// import { fileURLToPath } from "url"
// import { render } from "../dist/server/entry-server.js"

// const __dirname = path.dirname(fileURLToPath(import.meta.url))

// export default async function handler(req, res) {
//   try {
//     // Resolve template path explicitly (serverless-safe)
//     const templatePath = path.resolve(
//       __dirname,
//       "../dist/client/index.html"
//     )

//     const template = fs.readFileSync(templatePath, "utf-8")

//     // Render app
//     const rendered = await render(req.url)

//     const html = template
//       .replace("<!--app-head-->", rendered.head ?? "")
//       .replace("<!--app-html-->", rendered.html ?? "")

//     res.status(200).setHeader("Content-Type", "text/html")
//     res.end(html)
//   } catch (error) {
//     console.error("SSR ERROR:", error)
//     res.status(500).send("SSR Error")
//   }
// }