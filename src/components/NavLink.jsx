import { Link } from "react-router-dom";

export default function NavLink({ back, next }) {
  return (
    <nav className="navLinks" aria-label="Page navigation">
      {back && (
        <Link
          className="navLink back"
          to={back.to}
          aria-label={`Go back: ${back.label}`}
        >
          <span className="arrow" aria-hidden="true">
            ←
          </span>
          <span className="linkText">{back.label}</span>
        </Link>
      )}

      {next && (
        <Link
          className="navLink next"
          to={next.to}
          aria-label={`Go forward: ${next.label}`}
        >
          <span className="linkText">{next.label}</span>
          <span className="arrow" aria-hidden="true">
            →
          </span>
        </Link>
      )}
    </nav>
  );
}
