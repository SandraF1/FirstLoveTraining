import React from "react";
import PetraPexels from "../images/PetraPexels.jpg";
import { Link } from "react-router-dom";
import NavLink from "../components/NavLink";

function PetraMemory() {
  return (
    <main>
      <header>
        <h1>Petra</h1>

        <h2>Can you remember the text?</h2>
      </header>

      <div className="homeContainer">
        <section className="textColumn">
          <p>Petra, ...</p>
        </section>
        <section className="imageColumn">
          <img src={PetraPexels} alt="Petra" width="600" />
        </section>
      </div>

      <NavLink
        back={{
          to: "/PetraGrammarPredict",
          label: "Back to grammar prediction",
        }}
      />
    </main>
  );
}

export default PetraMemory;
