import { useEffect, useCallback } from "react";
import "./Menu.scss";
import { Link, NavLink } from "react-router-dom";
import { useGlobalData } from "../../../hooks/useGlobalData";
export default function Menu() {
  const { MenuOpen, setMenuOpen } = useGlobalData();
  const closeMenu = useCallback(() => {
    window.innerWidth >= 1000 && setMenuOpen(false);
  }, [setMenuOpen]);
  useEffect(() => {
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, [closeMenu]);
  const close = () => {
    setTimeout(() => {
      setMenuOpen(false);
    }, 200);
  };
  return (
    <>
      {MenuOpen && (
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
      )}
    </>
  );
}
