import { Link } from "react-router-dom";
import "./navextra.css";
export default function Navextra() {
  return (
    <nav className="nav-extra">
      <ul>
        {" "}
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <li>
            <i style={{ fontSize: "14px" }} className="fa fa-chevron-left"></i>
            &nbsp;Home
          </li>
        </Link>
        <li>
          <span className="time-space">TIME&nbsp;</span>

          <span className="time-space" style={{ color: "red" }}>
            PASS
          </span>
        </li>
        <li>
          <div id="logo">
            <i
              className="fa fa-search"
              style={{ font_size: "24px", color: "white", marginRight: "6px" }}
            ></i>
          </div>
        </li>
      </ul>
    </nav>
  );
}
