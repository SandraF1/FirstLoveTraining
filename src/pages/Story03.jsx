import { Link } from "react-router-dom";
import NavLink from "../components/NavLink";

export default function Story03() {
  return (
    <main>
      <h1>Jungle James</h1>
      <div className="homeContainer">
        <section className="textColumn">
          <h2>Question</h2>
          <p>
            ‘Machu Picchu, here I come!’ he said to himself. He packed
            binoculars, some high-density protein bars and mosquito repellent.
            He was all set to climb the magnificent ziggurats. So he was just a
            little disappointed when he was told to first interview the local
            people. He purchased waterproof notebook and added it to his kit.
            Not that there was a lake atop the terraces, but it might rain
            heavily.
          </p>
          <p>
            At last, he located a guide, who was fluent in English. James took
            out his notebook and began to probe. ‘When was Machu Picchu built?’
            ‘No one knows exactly, sir. It’s been here for a long time, but was
            forgotten and then rediscovered.’ ‘What is unusual about it?’ ‘The
            terraces are cut into the side of the hill. This captures rainfall
            and creates farming land.’ ‘I see. And how do I get there?’ ‘You
            walk there from the nearest city.’
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
        back={{ to: "/Story02", label: "Back" }}
        next={{ to: "/Story04", label: "Continue" }}
      />
    </main>
  );
}
