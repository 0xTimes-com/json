import Nav from "../../components/Nav";

export default function List() {
  return (
    <>
      <Nav />
      <div className="mx-auto max-w-5xl px-5">
        <h1 className="text-5xl mt-10">The List</h1>
        <div className="text-xl my-10">
          The list of the projects we have email subscribed to.
        </div>
        <div className="border-black border-2 rounded-md shadow-[5px_5px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]">
          <iframe
            className="airtable-embed"
            src="https://airtable.com/embed/appWf77mQSrBzhNKL/shrQ39KQf2S1C90NT"
            width="100%"
            height="533"
          ></iframe>
        </div>
        <div className="h-20"></div>
        <div className="border-black border-2 rounded-md shadow-[5px_5px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]">
          <iframe
            src="https://airtable.com/embed/appWf77mQSrBzhNKL/pagz8KdlYHFj8P9yL/form"
            width="100%"
            height="533"
          ></iframe>
        </div>
        <div className="h-20"></div>
      </div>
    </>
  );
}
