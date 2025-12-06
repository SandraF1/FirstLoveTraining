import { Link } from "react-router-dom";
import NavLink from "../components/NavLink";

export default function Project03() {
  return (
    <main>
      <h1>Interview a local: Choose a site</h1>
      <p>Use your notes to ask and answer interview questions about a site.</p>
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
        back={{ to: "/Project02", label: "Back" }}
        next={{ to: "/Project04", label: "Continue" }}
      />
    </main>
  );
}
