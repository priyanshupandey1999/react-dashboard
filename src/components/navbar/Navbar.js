import "./Navbar.css";
import avatar from "../../assets/avatar.svg";

const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="navbar__left">
        <i className="fa fa-search" aria-hidden="true"></i>
        <input type="text" placeholder="Type to search..."></input>
      </div>
      <div className="navbar__right">
        <a href="#/">
          <i className="fa fa-cog" aria-hidden="true"></i>
        </a>
        <a href="#/">
          <i className="fa fa-twitch" aria-hidden="true"></i>
        </a>
        <a href="#/">
          <i className="fa fa-bell-o" aria-hidden="true"></i>
        </a>
        <div className="profile">
          <h5>Thomas Brown</h5>
          <h6>Developer</h6>
        </div>
        <a href="#/">
          <img width="30" src={avatar} alt="avatar" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
