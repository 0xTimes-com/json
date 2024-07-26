import fs from "fs";

// loop through html files to update meta.json
export default async function setPages(): Promise<void> {
  const pages = await fs.readdirSync("public/html");

  // create meta.json
  const meta = pages
    .map((source) => ({
      source,
      time: fs.statSync(`public/html/${source}`).birthtime.getTime(),
    }))
    .sort((a, b) => b.time - a.time)
    .map((file) => {
      return {
        source: file.source,
        destination: `/html/${file.source}`,
        time: file.time,
      };
    });

  // write to public/json/meta.json
  return fs.writeFileSync(
    `./meta.json`,
    JSON.stringify(meta)
  );
}
