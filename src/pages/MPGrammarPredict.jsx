import { Link } from "react-router-dom";
import NavLink from "../components/NavLink";

export default function MPGrammarPredict() {
  return (
    <main>
      <header>
        <h1>MP Grammar Predict</h1>
        <h2>Explain the relationship between the clauses</h2>
      </header>

      <ol>
        <li>
          <p>
            Nestled high in the Andes Mountains, Machu Picchu is one of the most
            iconic examples of Inca architecture and ingenuity.
          </p>
          <p>
            Meaning: Machu Picchu is amazing <strong>because</strong> it was
            built high up in the mountains.
          </p>
        </li>

        <li>
          <p>
            Constructed in the 15th century, this ancient citadel remained
            hidden from the outside world until its rediscovery in 1911.
          </p>
          <p>Meaning: ...</p>
        </li>

        <li>
          <p>
            Machu Picchu also holds significant cultural and spiritual
            importance for the indigenous people of Peru, symbolizing the
            ingenuity and resilience of the Inca civilization.
          </p>
          <p>Meaning: ...</p>
        </li>
      </ol>

      <NavLink
        back={{
          to: "/MPGrammarExplanation",
          label: "Back to grammar explanation",
        }}
        next={{ to: "/MPFlashcards", label: "Continue to flashcards" }}
      />
    </main>
  );
}
