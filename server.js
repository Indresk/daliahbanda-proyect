import fs from "fs";
import path from "path";
import { render } from "../dist/server/entry-server.js";

export default async function handler(req, res) {
  try {
    const template = fs.readFileSync(
      path.resolve("dist/client/index.html"),
      "utf-8"
    );

    const { html } = await render(req.url);

    const finalHtml = template.replace("<!--app-html-->", html);

    res.setHeader("Content-Type", "text/html");
    res.status(200).send(finalHtml);
  } catch (err) {
    console.error("SSR ERROR:", err);
    res.status(500).send("SSR failed");
  }
}
