import React from "react";
import GreatWallPublicDomainPictures from "../images/GreatWallPublicDomainPictures.jpg";
import { Link } from "react-router-dom";
import GWArticle from "./GWArticle";
import NavLink from "../components/NavLink";

function GWReading() {
  return (
    <main>
      <h1 id="page-title">The Great Wall of China</h1>

      <div className="homeContainer">
        <section className="textColumn">
          <GWArticle />
        </section>
        <aside className="imageColumn">
          <img
            src={GreatWallPublicDomainPictures}
            alt="Panoramic view of the Great Wall"
            width="600"
          />
        </aside>
      </div>

      <NavLink
        next={{ to: "/GWComprehension", label: "Continue to questions" }}
      />
    </main>
  );
}

export default GWReading;
