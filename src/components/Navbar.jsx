import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav aria-label="Головна навігація">
      <ul>
        <li>
          <Link to="/">Головна</Link>
        </li>

        <li>
          <Link to="/about">Про нас</Link>
        </li>

        <li>
          <Link to="/login">Логін</Link>
        </li>

        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
}