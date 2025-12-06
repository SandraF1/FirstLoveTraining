import { Link } from "react-router-dom";
import NavLink from "../components/NavLink";

export default function Project02() {
  return (
    <main>
      <h1>Research questions: Choose a site</h1>
      <ol>
        <li>
          What is the history of this site, and how has it been used over time?
        </li>
        <li>What cultural or social events are associated with this site?</li>

        <li>What changes or threats has the site experienced over time?</li>

        <li>What makes this site special or meaningful to people?</li>

        <li>
          What stories, legends, or personal memories are connected to the site?
        </li>
      </ol>



      <NavLink
        back={{ to: "/Project01", label: "Back" }}
        next={{ to: "/Project03", label: "Continue" }}
      />
    </main>
  );
}
