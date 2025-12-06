import { Link } from "react-router-dom";
import NavLink from "../components/NavLink";

export default function Story02() {
  return (
    <main>
      <h1>Jungle James</h1>
      <div className="homeContainer">
        <section className="textColumn">
          <h2>Story</h2>
          <p>
            ‘Machu Picchu, here I come!’ he said to himself. He packed
            binoculars, some high-density protein bars and mosquito repellent.
            He was all set to climb the magnificent stone stairs. So he was just
            a little disappointed when...
          </p>
        </section>
        <section className="textColumn">
          <h2>Question</h2>
          <p>What do you think will happen next?</p>
        </section>
      </div>

      <NavLink
        back={{ to: "/Story01", label: "Back" }}
        next={{ to: "/Story03", label: "Continue" }}
      />
    </main>
  );
}
