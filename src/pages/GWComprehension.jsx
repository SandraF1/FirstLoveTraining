import React from "react";
import GreatWallPublicDomainPictures from "../images/GreatWallPublicDomainPictures.jpg";
import { Link } from "react-router-dom";
import GWArticle from "./GWArticle";
import NavLink from "../components/NavLink";

function GWComprehension() {
  return (
    <main>
      <h1>The Great Wall of China</h1>

      <div className="homeContainer">
        <section className="textColumn">
          <h2>The Great Wall</h2>
          <GWArticle />
        </section>
        <aside className="textColumn">
          <h2>Questions</h2>
          <p>
            Why do you think the Great Wall is remarkable? Can you give at least
            3 reasons?
          </p>
          <p>
            Think about how the Great Wall is remarkable in these different
            ways:
          </p>
          <ol>
            <li>Physically/in terms of engineering</li>
            <li>Historically and culturally</li>
            <li>As part of Chinese history and human history more broadly</li>
            <li>In terms of military strategy</li>
            <li>Ecologically</li>
          </ol>
        </aside>
      </div>

      <NavLink
        back={{ to: "/GWReading", label: "Back to reading" }}
        next={{
          to: "/GWGrammarPredict",
          label: "Continue to grammar exercise",
        }}
      />
    </main>
  );
}

export default GWComprehension;
