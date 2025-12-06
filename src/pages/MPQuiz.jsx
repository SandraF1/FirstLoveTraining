import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function MPWordMatchQuiz() {
  const items = [
    {
      word: "Nestled",
      definition: "Positioned snugly or comfortably within something",
    },
    {
      word: "Iconic",
      definition: "Widely recognized and well-established as representative",
    },
    {
      word: "Ingenuity",
      definition: "Cleverness, skill, or originality in solving problems",
    },
    { word: "Precisely", definition: "Exactly or accurately" },
    { word: "Seamlessly", definition: "Smoothly and without interruption" },
  ];

  // Shuffle function
  function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
  }

  const [shuffledWords, setShuffledWords] = useState([]);
  const [shuffledDefs, setShuffledDefs] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [marks, setMarks] = useState({});
  const [score, setScore] = useState(null);
  const [feedback, setFeedback] = useState("");
  // Shuffle on mount
  useEffect(() => {
    setShuffledWords(shuffle(items));
    setShuffledDefs(shuffle(items));
  }, []);

  // Handle dropdown selection
  const handleSelect = (index, value) => {
    setSelectedAnswers((prev) => ({ ...prev, [index]: value }));
  };

  // Check answers
  const checkAnswers = () => {
    let tempMarks = {};
    let correctCount = 0;

    shuffledWords.forEach((item, index) => {
      if (selectedAnswers[index] === item.word) {
        tempMarks[index] = "✓";
        correctCount++;
      } else {
        tempMarks[index] = "✗";
      }
    });

    setMarks(tempMarks);
    setScore(correctCount);

    let feedbackText = shuffledWords
      .map(
        (item, index) =>
          `Word ${index + 1}: ${
            tempMarks[index] === "✓" ? "Correct" : "Incorrect"
          }`
      )
      .join(". ");
    feedbackText += `You got ${correctCount} out of ${shuffledWords.length} correct`;
    setFeedback(feedbackText);
  };

  return (
    <main>
      <div className="quizContainer">
        <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
          {/* Word list */}
          <section>
            <h3>Words</h3>
            {shuffledWords.map((item, index) => (
              <p key={index}>
                {index + 1}. <strong>{item.word}</strong>
              </p>
            ))}
          </section>

          {/* Definitions list */}
          <section>
            <h3>Definitions</h3>
            {shuffledWords.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <label>
                  <span style={{ width: "25px" }}>
                    {index + 1}.{item.word}
                  </span>
                  <select
                    className="select"
                    value={selectedAnswers[index] || ""}
                    onChange={(e) => handleSelect(index, e.target.value)}
                  >
                    <option className="option" value="">
                      --Select definition--
                    </option>
                    {shuffledDefs.map((d, i) => (
                      <option key={i} value={d.word}>
                        {d.definition}
                      </option>
                    ))}
                  </select>
                </label>
                <span
                  style={{
                    marginLeft: "10px",
                    fontWeight: "bold",
                    color: marks[index] === "✓" ? "green" : "red",
                  }}
                >
                  {marks[index]}
                </span>
              </div>
            ))}
          </section>

          {/* Check answers button */}
          <button
            onClick={checkAnswers}
            style={{
              marginTop: "10px",
              padding: "8px 16px",
              cursor: "pointer",
            }}
          >
            Check Answers
          </button>

          {/* Result */}
          {score !== null && (
            <p style={{ marginTop: "10px", fontWeight: "bold" }}>
              You got {score} out of {items.length} correct!
            </p>
          )}

          {/* Hidden screen reader region for live feedback */}
          <span
            aria-live="polite"
            style={{ position: "absolute", left: "-9999px" }}
          >
            {feedback}
          </span>
        </div>
      </div>
    </main>
  );
}

export default MPWordMatchQuiz;
