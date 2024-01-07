import "./Header.scss";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import { useGlobalData } from "../../../hooks/useGlobalData";
import DarkMode from "../darkMode/DarkMode";
export default function Header() {
  const { MenuOpen, setMenuOpen, Dark, setDark } = useGlobalData();
  return (
    <header className="Header myScroll">
      <h1>
        <Link to="/">YOUN</Link>
      </h1>
      <ul>
        <li>
          <NavLink to="/department" activeClassName={"on"}>
            Department
          </NavLink>
        </li>
        <li>
          <NavLink to="/youtube" activeClassName={"on"}>
            Youtube
          </NavLink>
        </li>
        <li>
          <NavLink to="/gallery" activeClassName={"on"}>
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink to="/community" activeClassName={"on"}>
            Community
          </NavLink>
        </li>
        <li>
          <NavLink to="/members" activeClassName={"on"}>
            Members
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName={"on"}>
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="tabletBtns">

        <DarkMode />
        <div className="menuToggle" onClick={() => setMenuOpen(!MenuOpen)}>
          <MdOutlineMenu />
        </div>
      </div>
    </header>
  );
}
