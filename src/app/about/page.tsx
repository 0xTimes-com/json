import Nav from "../../components/Nav";

export default function About() {
  return (
    <>
      <Nav />
      <div className="mx-auto max-w-5xl my-5">
        <div className="text-5xl p-4">The Times</div>
        <div className="text-xl p-4">
          In 1785, John Walter founded the newspaper `The Daily Universal
          Register`. This name was chosen to provide a wide range of information
          to its readers. However, the name was somewhat cumbersome. Three years
          later, the newspaper rebraded as `The Times`. The name conveys the
          idea of timely news and information.
        </div>
        <div className="text-xl p-4">
          Now in this era, notable `Time` organizations include:
        </div>
        <ul className="text-xl p-4">
          <li>- The New York Times</li>
          <li>- Los Angeles Times</li>
          <li>- New Roman Times 😉</li>
        </ul>

        <div className="text-5xl p-4">The 0x</div>
        <div className="text-xl p-4">
          The prefix <code>0</code>x has a specific meaning in computer science.
          0x is used to indicate a hexadecimal (base-16) number. Hexadecimal
          provides a compact way to represent binary values. Each hexadecimal
          digit corresponds to four binary digits (bits), making it easier to
          read and write large binary numbers.
        </div>
        <div className="text-xl p-4">
          <code>0</code>x is used in:
        </div>
        <ul className="text-xl p-4">
          <li>
            - EVM addresses. <code>0</code>x followed by 40 hexadecimal
            characters.
          </li>
          <li>
            - Smart contract functions: “<code>0</code>x” followed by the first
            4 bytes of the hash of the function.
          </li>
        </ul>

        <div className="text-5xl p-4">
          The <code>0</code>xTimes
        </div>
        <div className="text-xl p-4">
          <code>0</code>xTimes archives the latest email news on blockchain
          technology.
        </div>
        <div className="text-xl p-4">How it works under the hood:</div>
        <ul className="text-xl p-4">
          <li>
            - We email subscribe to newsletters from the best and newest
            blockchain projects.
          </li>
          <li>
            - For every new email, we immediately archive it on our website.
          </li>
          <li>
            - Our website will display the latest news in reverse chronological
            order.
          </li>
          <li>- Our site is then backed up on the permanent web.</li>
        </ul>

        <div className="text-5xl p-4">Design</div>
        <div className="text-xl p-4">
          Our design is heavily inspired by Neobrutalism.
        </div>
        <div className="text-xl p-4">Design choices:</div>
        <ul className="text-xl p-4">
          <li>- spectrums.framer.website</li>
          <li>- font Syne</li>
          <li>- max 60 char title</li>
          <li>- default tailwind colors </li>
        </ul>
      </div>
    </>
  );
}
