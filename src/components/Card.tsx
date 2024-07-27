import Image from "next/image";
import Link from "next/link";
import fs from "fs";

// https://neo-brutalism-ui-library.vercel.app/components/card
export default async function Card(props: Page) {
  // path to html file
  const link = `html/${props.page}.html`;

  // convert time from 1721406522002 to Fri Jul 19 2024
  const time = new Date(props.time).toDateString();

  // split site.com+hello-world.html to site.com
  const host = props.page.split("+")[0];

  // split site.com+hello-world to hello world
  const title = props.page
    .split("+")[1]
    .replace(/[/-]/g, " ")
    .trim();

  // prettier-ignore
  const colors = ["bg-red-200","bg-orange-200","bg-amber-200","bg-yellow-200","bg-lime-200","bg-emerald-200","bg-cyan-200","bg-sky-200","bg-violet-200","bg-yellow-200","bg-green-200","bg-teal-200","bg-fuchsia-200","bg-blue-200","bg-indigo-200","bg-purple-200","bg-pink-200","bg-rose-200"];
  const bgColor = colors[Math.floor(Math.random() * colors.length)];

  // set image to /img/logo.svg or fallback
  const imgExists = fs.existsSync(`${process.cwd()}/public/img/${host}.jpg`);
  const image = imgExists ? `/img/${host}.jpg` : "/img/logo.svg";

  return (
    <article className="border-black border-2 rounded-md shadow-[5px_5px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]">
      {/* top half */}
      <figure className="border-black border-b-2">
        <Link href={link}>
          {/* background justify=horizontal items=vertical */}
          <div className={`h-36 flex justify-center items-center ${bgColor}`}>
            {/* rounded image */}
            <div className="w-32 h-32 overflow-hidden rounded-full border-black border-2 shadow-[5px_5px_0px_rgba(0,0,0,1)]  hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]">
              <Image
                className="object-cover"
                src={image}
                alt={props.page}
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(255, 255, 255, 0.80)",
                }}
              />
            </div>
          </div>
        </Link>
      </figure>

      {/* bottom half */}
      <figure className="h-60 bg-slate-100">
        {/* title */}
        <div className="px-6 py-5 h-44">
          <Link href={link}>
            <h1 className="text-3xl hover:underline break-words">
              {title.slice(0, 60)}
              {title.length > 60 ? "..." : ""}
            </h1>
          </Link>
        </div>
        {/* footer */}
        <Link
          target="_blank"
          href={`https://${host}`}
          className="hover:underline px-6"
        >
          {host || ""}
        </Link>
        <div className="px-6 pb-5">{time == "Invalid Date" ? "" : time}</div>
      </figure>
    </article>
  );
}
