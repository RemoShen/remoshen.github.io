import "./Header.css";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <div className="menuContainer">
        <div className="name">
          <h1>Remo Shen</h1>
        </div>
        <ul className="menu">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/research"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              RESEARCH
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              ABOUT ME
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
