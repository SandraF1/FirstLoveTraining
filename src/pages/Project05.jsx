import { Link } from "react-router-dom";
import NavLink from "../components/NavLink";

export default function Project05() {
  return (
    <main>
      <h1>Report</h1>
      <p>
        The citadel of Machu Picchu is a highly significant site. This is
        because it provides a snapshot of royal Inca culture, not commonly found
        in other sites. In ancient terms, it is a marvel of agricultural
        technology and stone masonry. Also, since it was inhabited only by an
        Inca ruler and his servants, it is a highly specific subset of heritage
        site.
      </p>

      <p>
        Even today, people still marvel at the terraces and buildings, which
        accommodate the steep slopes of the hills. The site is not easily
        accessible, but still at risk from over-tourism.
      </p>

      <p>
        I recommend that the site be captured by drones and aerial photography.
        I also recommend that three-dimensional virtual replicas be made of the
        pottery and other artefacts, along with visualisations of the various
        temples, so that people can enjoy simulated tours of the site.
      </p>

      <NavLink back={{ to: "/Project04", label: "Go back" }} />
    </main>
  );
}
