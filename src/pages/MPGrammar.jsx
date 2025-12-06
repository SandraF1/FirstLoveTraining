import React from "react";

import { Link } from "react-router-dom";
import MPArticle from "./MPArticle";
import NavLink from "../components/NavLink";

function MPGrammar() {
  return (
    <main>
      <h1>Machu Picchu grammar</h1>

      <div className="homeContainer">
        <section className="textColumn">
          <MPArticle />
        </section>
        <section className="textColumn">
          <h2>Grammar</h2>
          <p>Can you find:</p>
          <ol>
            <li>
              2 sentences beginning with the past participle (verb three)?
            </li>
            <li>2 sentences beginning with the passive voice?</li>
            <li>
              1 phrase beginning with the present participle (an ING word?)
            </li>
          </ol>
        </section>
      </div>

      <NavLink
        back={{
          to: "/MPGrammarExplanation",
          label: "Back to grammar explanation",
        }}
        next={{
          to: "/MPGrammarPredict",
          label: "Continue to grammar prediction",
        }}
      />
    </main>
  );
}

export default MPGrammar;
