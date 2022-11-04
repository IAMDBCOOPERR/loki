import "./navbar.css";
const Navbar = () => {
  return (
    <nav id="nav">
      <ul>
        <li className="logo_list">
          <span id="logo" className="logo_red space">
            TIME
          </span>
          <span id="logo" style={{ margin: "2.5px" }} className="space">
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
};

export default Navbar;
