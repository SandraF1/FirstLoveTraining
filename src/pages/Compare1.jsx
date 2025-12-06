import React from "react";

import { Link } from "react-router-dom";
import MPText from "./MPText";
import GWText from "./GWText";
import NavLink from "../components/NavLink";
import MPArticle from "./MPArticle";
import GWArticle from "./GWArticle";

function Compare1() {
  return (
    <main>
      <header>
        <h1 id="page-title">Compare and contrast</h1>

        <p>How are they similar? How are they different?</p>
      </header>
      <div className="homeContainer">
        <section className="textColumn">
          <h2>Machu Picchu</h2>
          <MPArticle />
        </section>
        <section className="textColumn">
          <h2>The Great Wall</h2>
          <GWArticle />
        </section>
      </div>

      <NavLink
        next={{ to: "/Compare2", label: "Continue to next comparison" }}
        aria-label="Continue to next comparison page"
      />
    </main>
  );
}

export default Compare1;
