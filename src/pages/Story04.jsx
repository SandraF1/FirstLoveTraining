import { Link } from "react-router-dom";
import NavLink from "../components/NavLink";

export default function Story04() {
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
            remained was to...
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
        back={{ to: "/Story03", label: "Back" }}
        next={{ to: "/Story05", label: "Continue" }}
      />
    </main>
  );
}
