import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { render } from "./dist/server/entry-server.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const template = fs.readFileSync(
  path.join(__dirname, "dist/client/index.html"),
  "utf-8"
);

export default async function handler(req, res) {
  try {
    const { html } = await render(req.url);

    const finalHtml = template.replace("<!--app-html-->", html);

    res.setHeader("Content-Type", "text/html");
    res.status(200).send(finalHtml);
  } catch (err) {
    console.error("SSR ERROR:", err);
    res.status(500).send("SSR failed");
  }
}