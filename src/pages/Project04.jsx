import { Link } from "react-router-dom";
import NavLink from "../components/NavLink";

// src/components/HeritageEvaluation.jsx
import React from "react";

console.log("Project04 component:", Project04);

export default function Project04() {
  const evaluationData = [
    {
      criteria: "Cultural and historical significance",
      notes: "Reflects the ancient Inca royal culture",
      score: 3, // strong
    },
    {
      criteria: "Risk of loss or damage",
      notes: "At risk from over-tourism",
      score: 2, // average
    },
    {
      criteria: "Educational value",
      notes: "Provides a window into Inca culture circa 15 AD.",
      score: 3,
    },
    {
      criteria: "Feasibility of digital capture",
      notes: "Will require aerial photography.",
      score: 2,
    },
    {
      criteria: "Uniqueness and comparative value",
      notes:
        "Provides a snapshot of 15th century Inca royal culture, not commonly found elsewhere",
      score: 3,
    },
  ];

  return (
    <main>
      <h1>Heritage Site Digital Preservation Evaluation Rubric</h1>
      <table>
        <caption>Evaluation of heritage site for digital preservation </caption>
        <thead>
          <tr>
            <th scope="col">Criteria</th>
            <th scope="col">Notes</th>
            <th scope="col">Score</th>
          </tr>
        </thead>
        <tbody>
          {evaluationData.map((item, index) => (
            <tr key={index}>
              <td>{item.criteria}</td>
              <td>{item.notes}</td>
              <td>
                {item.score === 1
                  ? "Weak"
                  : item.score === 2
                  ? "Average"
                  : "Strong"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <NavLink
        back={{ to: "/Project03", label: "Back" }}
        next={{ to: "/Project05", label: "Continue" }}
      />
    </main>
  );
}
