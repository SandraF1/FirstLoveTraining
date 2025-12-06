import React from "react";

import { Link } from "react-router-dom";
import MPText from "./MPText";
import GWText from "./GWText";
import PetraText from "./PetraText";
import GWArticle from "./GWArticle";
import PetraArticle from "./PetraArticle";

function Compare2() {
  return (
    <main>
      <header>
        <h1 id="page-title">Compare and contrast</h1>
        <p>How are they similar? How are they different?</p>{" "}
      </header>
      <div className="homeContainer">
        <section className="textColumn">
          <h2>The Great Wall</h2>
          <GWArticle />
        </section>
        <section className="textColumn">
          <h2>Petra of Jordan</h2>
          <PetraArticle />
        </section>
      </div>
    </main>
  );
}

export default Compare2;
