import { Link } from "react-router-dom";
import NavLink from "../components/NavLink";

export default function PetraGrammarPredict() {
  return (
    <main>
      <header>
        <h1>Petra Grammar Predict</h1>
        <h2>Explain the relationship between the clauses</h2>
      </header>

      <p>
        Established by the Nabataeans around the 4th century BCE, it served as a
        crucial trading hub linking the Arabian Peninsula with the
        Mediterranean.
      </p>
      <p>Meaning:</p>

      <NavLink
        back={{ to: "/PetraComprehension", label: "Back to comprehnesion" }}
        next={{ to: "/PetraMemory", label: "Continue to memory task" }}
      />
    </main>
  );
}
