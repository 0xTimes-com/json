import fs from "fs";
import path from "path";
import pages from "./pages.json";

// loop through html files to update meta.json
export default async function setPages(): Promise<void> {
  // pages from public/html
  const publicPages = (await fs.readdirSync("public/html")).map((val) =>
    val.replace(".html", "")
  );
  // pages from pages.json
  const jsonPages = pages.map((page) => page.page);

  // add pages
  for (let publicPage of publicPages) {
    if (jsonPages.indexOf(publicPage) === -1) {
      pages.push({ page: publicPage, time: Date.now() });
    }
  }

  // remove pages
  for (let page of pages) {
    if (publicPages.indexOf(page.page) === -1) {
      pages.splice(pages.indexOf(page), 1);
    }
  }

  // update pages.json
  const filePath = path.resolve(process.cwd(), "src/utils", "pages.json");
  return fs.writeFileSync(filePath, JSON.stringify(pages, null, 2));
}
