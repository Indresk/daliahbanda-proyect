import fs from "fs" 
import path from "path" 
import { fileURLToPath } from "url" 
import { render } from "../dist/server/entry-server.js" 
const __dirname = path.dirname(fileURLToPath(import.meta.url)) 
export default async function handler(req, res) { try { const templatePath = path.resolve( __dirname, "../dist/client/index.html" ) 
    const template = fs.readFileSync(templatePath, "utf-8") 
    const { html } = render(req.url) 
    const finalHtml = template.replace( "<!--app-html-->", html ) 
    res.setHeader("Content-Type", "text/html") 
    res.status(200).send(finalHtml) } 
    catch (error) { console.error(error) 
        res.status(500).send("SSR Error") } 
    }