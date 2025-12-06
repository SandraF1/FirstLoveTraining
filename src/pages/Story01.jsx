import { Link } from "react-router-dom";
import NavLink from "../components/NavLink";

export default function Story01() {
  return (
    <main>
      <h1>Jungle James</h1>
      <div className="homeContainer">
        <section className="textColumn">
          <h2>Story</h2>
          <p>
            James had always wanted to be an explorer. What could be more exotic
            than hang gliding over the rainforest, scuba-diving with whales or
            trekking across dunes of sand? So when he got his first assignment,
            he was thrilled.
          </p>
        </section>

        <section className="textColumn">
          <h2>Questions</h2>
          <ol>
            <li>What sort of person is James?</li>
            <li>What do you think will happen next?</li>
          </ol>
        </section>
      </div>

      <NavLink next={{ to: "/Story02", label: "Continue" }} />
    </main>
  );
}
