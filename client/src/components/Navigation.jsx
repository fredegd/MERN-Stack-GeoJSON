import { NavLink } from "react-router-dom";
import "../App.css";

export default function Navigation() {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/properties">Properties</NavLink>
        <NavLink to="/properties/insert-property">Add&nbsp;Properties</NavLink>
      </nav>
    </div>
  );
}
