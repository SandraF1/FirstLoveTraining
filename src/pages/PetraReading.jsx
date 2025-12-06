import React from "react";
import PetraPexels from "../images/PetraPexels.jpg";
import { Link } from "react-router-dom";
import PetraArticle from "./PetraArticle";
import NavLink from "../components/NavLink";

function PetraReading() {
  return (
    <main>
      <h1>Petra</h1>
      <div className="homeContainer">
        <section className="textColumn">
          <h2>Petra of Jordan</h2>
          <PetraArticle />
        </section>
        <section className="imageColumn" aria-labelledby="petra-image">
          <h2 id="petra-image" className="sr-only">
            Image of Petra
          </h2>

          <img src={PetraPexels} alt="Petra" width="600" />
        </section>
      </div>

      <NavLink
        next={{ to: "/PetraComprehension", label: "Continue to comprehension" }}
      />
    </main>
  );
}

export default PetraReading;
