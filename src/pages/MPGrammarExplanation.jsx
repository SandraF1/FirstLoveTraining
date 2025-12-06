import React from "react";
import { Link } from "react-router-dom";
import NavLink from "../components/NavLink";

function MPGrammarExplanation() {
  // Sample data for the table
  const grammarData = [
    {
      grammar: "Past Participle",
      meaning:
        "Often used before the main clause, adding information about the subject of the clause",
      example:
        "Nestled in the mountains, the resort was far from human contact.",
    },
    {
      grammar: "Passive Voice",
      meaning:
        "Often used to rearrange word order to make the subject of the sentence more prominent",
      example:
        "The terraces were built by the Incas. (Emphasis on the terraces)",
    },
    {
      grammar: "Present Participle",
      meaning:
        "Often used after a main clause to add more information about the preceding clause",
      example:
        "The fields were carefully sown in the spring, ensuring a plentiful harvest for the summer",
    },
  ];

  return (
    <main>
      <section className="grammar-explanation">
        <header>
          <h1>Machu Picchu Grammar Explanation</h1>
        </header>

        <table className="grammar-table">
          <thead>
            <tr>
              <th scope="col">Grammar</th>
              <th scope="col">Meaning</th>
              <th scope="col">Example</th>
            </tr>
          </thead>
          <tbody>
            {grammarData.map((item, index) => (
              <tr key={index}>
                <td>{item.grammar}</td>
                <td>{item.meaning}</td>
                <td>{item.example}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <NavLink
          back={{ to: "/MPVocabOdd", label: "back to vocabulary exercise" }}
          next={{
            to: "/MPGrammarPredict",
            label: "Continue to grammar exercise",
          }}
        />
      </section>
    </main>
  );
}

export default MPGrammarExplanation;
