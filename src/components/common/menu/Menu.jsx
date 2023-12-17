import { useEffect } from "react";
import "./Menu.scss";
import { Link, NavLink } from "react-router-dom";
export default function Menu({ setToggle }) {
  const closeMenu = () => {
    window.innerWidth >= 1000 && setToggle(false);
  };
  useEffect(() => {
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);
  const close = () => {
    setTimeout(() => {
      setToggle(false);
    }, 200);
  };
  return (
    <aside className="Menu">
      <h2>
        <Link to="/" onClick={close}>
          YOUN
        </Link>
      </h2>
      <ul>
        <li>
          <NavLink to="/department" activeClassName={"on"} onClick={close}>
            Department
          </NavLink>
        </li>
        <li>
          <NavLink to="/youtube" activeClassName={"on"} onClick={close}>
            Youtube
          </NavLink>
        </li>
        <li>
          <NavLink to="/gallery" activeClassName={"on"} onClick={close}>
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink to="/community" activeClassName={"on"} onClick={close}>
            Community
          </NavLink>
        </li>
        <li>
          <NavLink to="/members" activeClassName={"on"} onClick={close}>
            Members
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName={"on"} onClick={close}>
            Contact
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}
