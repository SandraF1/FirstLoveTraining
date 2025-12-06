import { Link } from "react-router-dom";
import NavLink from "../components/NavLink";

export default function Story06() {
  return (
    <main>
      <h1>Jungle James</h1>
      <div className="homeContainer">
        <section className="textColumn">
          <h2>Story</h2>
          <p>
            I have recently visited the historical site of Machu Picchu. The
            ancient architecture is relatively well-preserved and is a feat of
            civil engineering. The site is fairly remote, so digital
            preservation will allow many thousands of people to experience it
            virtually, without making the long journey there. This may also
            prevent the site being over-visited. I recommend an aerial capture
            of the site with drones.
          </p>
          <p>
            The report was submitted and the proud day finally arrived. Machu
            Picchu was preserved forever on the internet, reaching one million
            subscribers in a month. Jungle James had done his job.
          </p>
        </section>

        <section className="textColumn">
          <h2>Questions</h2>
          <ol>
            <li>What do you think will happen next?</li>
            <li>Can you retell the story in your own words?</li>
          </ol>
        </section>
      </div>

      <NavLink back={{ to: "/Story05", label: "Back" }} />
    </main>
  );
}
