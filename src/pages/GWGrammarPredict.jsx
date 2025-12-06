import { Link } from "react-router-dom";
import NavLink from "../components/NavLink";

export default function GWGrammarPredict() {
  return (
    <main aria-labelledby="page-title">
      <header>
        <h1 id="page-title">Machu Picchu Grammar</h1>
        <h2>Explain the relationship between the clauses</h2>
      </header>

      <div className="grammar-item">
        <p>
          Stretching over 20,000 kilometers across northern China, the Great
          Wall is an extraordinary feat of engineering and endurance.
        </p>
        <p>Meaning:</p>
      </div>
      <NavLink
        back={{ to: "/GWComprehension", label: "Back to comprehension" }}
      />
    </main>
  );
}
