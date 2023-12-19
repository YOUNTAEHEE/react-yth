import { useEffect } from "react";
import "./Menu.scss";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as types from "../../../redux/action";
export default function Menu() {
  const dispatch = useDispatch();
  const Open = useSelector((store) => store.menuReducer.menu);
  const closeMenu = () => {
    window.innerWidth >= 1000 &&
      dispatch({ type: types.MENU.start, payload: false });
  };
  useEffect(() => {
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);
  const close = () => {
    setTimeout(() => {
      dispatch({ type: types.MENU.start, payload: false });
    }, 200);
  };
  return (
    <>
      {Open && (
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
