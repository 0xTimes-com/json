import fs from "fs";

// loop through html files to update meta.json
export default async function setPages(): Promise<Page[]> {
  // pages from public/html
  const pages = (await fs.readdirSync("public/html")).map((page) => {
    return {
      href: "/html/" + page, // 1722193351391+dimo.zone+Welcome-to-DIMO.html
      host: page.split("+")[1], // dimo.zone
      title: page.split("+")[2].split(".html")[0].replace(/\-/g, " ").trim(), // Welcome-to-DIMO
      time: Number(page.split("+")[0]), // 1722193351391
    };
  });
  return pages;
}
