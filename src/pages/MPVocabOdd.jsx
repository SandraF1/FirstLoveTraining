import React from "react";
import { Link } from "react-router-dom";
import NavLink from "../components/NavLink";

function MPVocabOdd() {
  const wordsData = [
    {
      word: "Nestled",
      examples: [
        "Nestled in the mountains",
        "Nestled between the cushions",
        "Nestled in the river",
      ],
    },
    {
      word: "Iconic",
      examples: ["An iconic brand", "An iconic idea", "An iconic image"],
    },
    {
      word: "Ingenuity",
      examples: [
        "The ingenuity of deceit",
        "The ingenuity of the civilisation",
        "The ingenuity of the human race",
      ],
    },
    {
      word: "Precisely",
      examples: [
        "Precisely engineered",
        "Precisely decided",
        "Precisely planned",
      ],
    },
    {
      word: "Seamlessly",
      examples: ["Seamlessly plotted", "Seamlessly sung", "Seamlessly made"],
    },
  ];

  return (
    <main>
      <h1>Find the odd one out</h1>

      <table>
        <caption>Examples of words with one odd example each</caption>
        <thead>
          <tr>
            <th scope="col">Word</th>
            <th scope="col">Examples</th>
          </tr>
        </thead>
        <tbody>
          {wordsData.map((item, index) => (
            <tr key={index}>
              <td>{item.word}</td>
              <td>{item.examples.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <NavLink
        back={{
          to: "/MPVocab",
          label: "Go to Machu Picchu vocabulary",
        }}
        next={{ to: "/MPGrammar", label: "Continue to grammar" }}
      />
    </main>
  );
}

export default MPVocabOdd;
