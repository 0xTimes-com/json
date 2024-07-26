import Nav from "../components/Nav";
import Card from "../components/Card";
import Banner from "../components/Banner";
import setPages from "../utils/setPages";
import pages from "../utils/pages.json";

export default async function Home() {
  await setPages();

  return (
    <>
      <Nav />
      <div className="dot">
        <div className="container mx-auto max-w-7xl my-5">
          <div className="p-5 gap-x-5 gap-y-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="grid-col-1 md:col-span-2">
              <Banner />
            </div>
            {pages.map((page, index) => (
              <Card key={index} {...page} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
