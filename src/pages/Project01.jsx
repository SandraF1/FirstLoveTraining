import { Link } from "react-router-dom";
import NavLink from "../components/NavLink";

export default function Project01() {
  return (
    <main>
      <h1>Research questions</h1>

      <ol>
        <li>
          What is the history of this site, and how has it been used over time?
          <ul>
            <li>Part of a royal estate</li>
            <li>The home of an Inca ruler and his servants</li>
            <li>Also used for agriculture, to support the local inhabitants</li>
          </ul>
        </li>

        <li>
          What cultural or social events are associated with this site?
          <ul>
            <li>
              Place of worship, as indicated by the ruins of the temple of the
              sun
            </li>
            <li>The royal feast of the sun was held annually</li>
          </ul>
        </li>

        <li>
          What changes or threats has the site experienced over time?
          <ul>
            <li>
              The site was inhabited for only 80 years, before it was
              mysteriously abandoned
            </li>
            <li>Today, it is a highly popular tourist attraction</li>
          </ul>
        </li>

        <li>
          What makes this site special or meaningful to people?
          <ul>
            <li>The site is a testament to Inca ingenuity</li>
            <li>
              Specifically, the use of terrace farming and the stone masonry are
              feats of ancient engineering.
            </li>
          </ul>
        </li>

        <li>
          What stories, legends, or personal memories are connected to the site?
          <ul>
            <li>
              According to legend, the population of the city was wiped out when
              the Spanish conquistadors invaded and infected the locals with
              smallpox, which they had never encountered before and therefore
              had no immunity to.
            </li>
          </ul>
        </li>
      </ol>
      <p>
        Source:{" "}
        <a href="https://en.wikipedia.org/wiki/Machu_Picchu">
          Wikipedia: Machu Picchu
        </a>
      </p>

      <NavLink next={{ to: "/Project02", label: "Continue" }} />
    </main>
  );
}
