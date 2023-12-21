import "./Header.scss";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import * as types from "../../../redux/actionType";
export default function Header() {
  const dispatch = useDispatch();
  const { menuReducer, darkReducer } = useSelector((store) => store);
  const Dark = darkReducer.dark;
  const Open = menuReducer.menu;
  return (
    <header className="Header">
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
        <div
          className={`themeBox ${Dark && "dark"}`}
          onClick={() => {
            dispatch({ type: types.DARK.start, payload: !Dark });
          }}
        >
          <div className="ball"></div>
        </div>
        <div
          className="menuToggle"
          onClick={() => dispatch({ type: types.MENU.start, payload: !Open })}
        >
          <MdOutlineMenu />
        </div>
      </div>
    </header>
  );
}
