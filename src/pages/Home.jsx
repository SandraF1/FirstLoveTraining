import React from "react";
import WordCloud from "../images/WordCloud.png";
import { Link } from "react-router-dom";
import NavLink from "../components/NavLink";

function Home() {
  return (
    <main>
      <header>
        <h1 id="page-title">Guess the topic</h1>

        <p>
          Look at the word cloud below. What is the main topic? Can you explain
          the most important concepts related to the topic, using some of the
          key words below?
        </p>
      </header>
      <figure>
        <img
          src={WordCloud}
          alt="Word cloud with various key words for guessing the topic"
          width="1200"
        />
      </figure>

      <NavLink
        next={{
          to: "/LearningOutcomes",
          label: "Continue to learning outcomes",
        }}
      />
    </main>
  );
}

export default Home;
