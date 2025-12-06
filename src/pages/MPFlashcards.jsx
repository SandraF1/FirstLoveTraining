import React, { useState } from "react";
import NavLink from "../components/NavLink";

function Flashcards() {
  const items = [
    {
      word: "Nestled",
      definition: "Positioned snugly or comfortably within something",
    },
    { word: "Iconic", definition: "Widely recognized and well-established" },
    {
      word: "Ingenuity",
      definition: "Cleverness, skill, or originality in solving problems",
    },
    { word: "Precisely", definition: "Exactly or accurately" },
    { word: "Seamlessly", definition: "Smoothly and without interruptions" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(true);

  const handleNext = () => {
    setFlipped(true); // Reset flip when moving to next card
    setCurrentIndex((prev) => (prev + 1) % items.length); // Loop back to start
  };

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  const currentItem = items[currentIndex];

  return (
    <main>
      <h1>Vocabulary flashcards</h1>
      <div className="homeContainer">
        <section className="textColumn">
          <h2>Flashcards</h2>
          <div className="flashcard-container">
            <button
              className="flashcard"
              onClick={handleFlip}
              aria-live="polite"
            >
              {flipped ? currentItem.definition : currentItem.word}
            </button>

            <button className="next-button" onClick={handleNext}>
              Next
            </button>
          </div>

          <p aria-live="polite">
            Card {currentIndex + 1} of {items.length}
          </p>
        </section>

        <section className="textColumn">
          <h2>Match the words</h2>

          <ol>
            <li>Seamlessly</li>
            <li>Nestled</li>
            <li>Precisely</li>
            <li>Iconic</li>
            <li>Ingenuity</li>
          </ol>
        </section>
      </div>

      <NavLink
        back={{ to: "/MPGrammarPredict", label: "Back to grammar exercise" }}
      />
    </main>
  );
}

export default Flashcards;
