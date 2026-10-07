import "./Header.css";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <div className="menuContainer">
        <div className="menuInner">
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
                PUBLICATION
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/talks"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                EVENTS / NEWS
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
