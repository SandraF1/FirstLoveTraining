import React from "react";

import { Link } from "react-router-dom";
import PetraArticle from "./PetraArticle";
import NavLink from "../components/NavLink";

function PetraComprehension() {
  return (
    <main>
      <h1>Petra</h1>
      <div className="homeContainer">
        <section className="textColumn">
          <PetraArticle />
        </section>

        <section className="rightColumn">
          <h2>Note-taking</h2>
          <p>
            Take brief notes and describe Petra from your notes. The categories
            below may help you.
          </p>
          <ul>
            <li>Physical aspects</li>
            <li>Historical aspects</li>
            <li>Cultural aspects</li>
            <li>Civil engineering aspects/Architectural aspects</li>
            <li>Geographical aspects</li>
          </ul>
        </section>
      </div>

      <NavLink
        back={{ to: "/PetraReading", label: "Back to reading" }}
        next={{
          to: "/PetraGrammarPredict",
          label: "Continue to grammar prediction",
        }}
      />
    </main>
  );
}

export default PetraComprehension;
