import React from "react";
import MachuPicchuPixabay from "../images/MachuPicchuPixabay.jpg";
import MPWordMatchQuiz from "./MPQuiz";
import { Link } from "react-router-dom";
import NavLink from "../components/NavLink";

function MPVocab() {
  return (
    <main>
      <header>
        <h1>Machu Picchu vocabulary quiz</h1>
      </header>
      <div className="homeContainer">
        <section className="textColumn" aria-labelledby="vocab-text">
          <p id="vocab-text">
            <strong>Nestled</strong> high in the Andes Mountains, Machu Picchu
            is one of the most <strong>iconic</strong> examples of Inca
            architecture and <strong>ingenuity</strong>. Constructed in the 15th
            century, this ancient citadel remained hidden from the outside world
            until its rediscovery in 1911 by Hiram Bingham. The site is renowned
            for its sophisticated dry-stone construction, which uses
            <strong>precisely</strong> cut stones that fit together without
            mortar. Visitors are often amazed by the way the terraces, temples,
            and plazas <strong>seamlessly</strong> integrate with the steep,
            rugged landscape. Machu Picchu also holds significant cultural and
            spiritual importance for the indigenous people of Peru, symbolizing
            the ingenuity and resilience of the Inca civilization.
          </p>
        </section>
        <section className="quizColumn" aria-labelledby="vocab-quiz">
          <h2 id="vocab-quiz" className="sr-only">
            Vocabulary quiz
          </h2>
          <MPWordMatchQuiz />
        </section>
      </div>

      <NavLink
        back={{ to: "/MPReading", label: "Back to Machu Picchu reading" }}
        next={{
          to: "/MPVocabOdd",
          label: "Continue to vocabulary odd one out",
        }}
      />
    </main>
  );
}

export default MPVocab;
