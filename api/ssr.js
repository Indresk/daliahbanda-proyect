import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
import { render } from "./render.js"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default async function handler(req, res) {
  try {
    const templatePath = path.resolve(__dirname, "./template.html")
    const template = fs.readFileSync(templatePath, "utf-8")

    const rendered = render(req.url)

    const html = template
      .replace("<!--app-head-->", rendered.head ?? "")
      .replace("<!--app-html-->", rendered.html ?? "")

    res.status(200)
    res.setHeader("Content-Type", "text/html")
    res.end(html)
  } catch (error) {
    console.error("SSR ERROR:", error)
    res.status(500).send("SSR Error")
  }
}
