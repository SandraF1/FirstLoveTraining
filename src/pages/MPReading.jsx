import React from "react";
import MachuPicchuPixabay from "../images/MachuPicchuPixabay.jpg";
import { Link } from "react-router-dom";
import MPArticle from "./MPArticle";
import NavLink from "../components/NavLink";

function MPReading() {
  return (
    <main>
      <h1>Machu Picchu</h1>

      <div className="homeContainer">
        <section className="textColumn">
          <MPArticle />
        </section>
        <section className="imageColumn">
          <img src={MachuPicchuPixabay} alt="Machu Picchu" width="600" />
        </section>
      </div>

      <NavLink next={{ to: "/MPVocab", label: "Continue to vocabulary" }} />
    </main>
  );
}

export default MPReading;
