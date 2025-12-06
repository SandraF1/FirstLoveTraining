import { Link } from "react-router-dom";
import NavLink from "../components/NavLink";

export default function Story05() {
  return (
    <main>
      <h1>Jungle James</h1>
      <div className="homeContainer">
        <section className="textColumn">
          <h2>Story</h2>
          <p>
            James made the arduous journey to Machu Picchu and it was certainly
            worth his while. He reached the top of the stairs wheezing and took
            out the official rubric. A technical marvel? Tick. The cultural
            sophistication of an era? Double tick. Overall, worthy of digital
            preservation? Ten out of ten. His job was done, and all that
            remained was to catch the next flight back to Sydney and finalise
            the report.
          </p>

          <p>RE: Digital preservation of Machu Picchu</p>
          <p>
            I have recently visited the historical site of Machu Picchu. The
            ancient architecture is relatively well-preserved and is a feat of
            civil engineering. The site is fairly remote, so digital
            preservation will allow many thousands of people to experience it
            virtually, without making the long journey there. This may also
            prevent the site being over-visited. I recommend...{" "}
          </p>
        </section>

        <section className="textColumn">
          <h2>Question</h2>
          <ol>
            <li>What do you think will happen next?</li>
          </ol>
        </section>
      </div>

      <NavLink
        back={{ to: "/Story04", label: "Back" }}
        next={{ to: "/Story06", label: "Continue" }}
      />
    </main>
  );
}
