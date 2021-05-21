import "./Sidebar.css";
import logo from "../../assets/logo.png";
import { useState } from "react";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <h4>Artemis</h4>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <h4>Main</h4>
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-home"></i>
          <a href="/">Dashboard</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-bar-chart" aria-hidden="true"></i>
          <a href="/overview">Discover</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-building-o"></i>
          <a href="#/">Users</a>
        </div>
        <div className="sidebar__link" id="no-change">
          <i className="fa fa-wrench"></i>
          <a href="#/">Documents</a>
          {/* Documents */}
          <div className="right-dropdown">
            <button onClick={() => setDropdown(!dropdown)}>
              <i className="fa fa-chevron-down" aria-hidden="true"></i>
            </button>
          </div>
          {dropdown && (
            <div className="dropdown-links">
              <div className="dropdown-link">
                <i className="fa fa-folder-open"></i>
                <a href="#/">Document1</a>
              </div>
              <div className="dropdown-link">
                <i className="fa fa-folder-open"></i>
                <a href="#/">Document2</a>
              </div>
              <div className="dropdown-link">
                <i className="fa fa-folder-open"></i>
                <a href="#/">Document3</a>
              </div>
            </div>
          )}
        </div>
        <div className="sidebar__link">
          <i className="fa fa-archive"></i>
          <a href="#/">Applications</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-file-pdf-o"></i>
          <a href="#/">Pages</a>
        </div>
        <h4>Secondary</h4>
        <div className="sidebar__link">
          <i className="fa fa-question"></i>
          <a href="#/">Support Center</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-sign-out"></i>
          <a href="#/">Inbox</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-files-o"></i>
          <a href="#/">File Manager</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-folder-open"></i>
          <a href="#/">Data List</a>
        </div>
        <br />
        <div className="sidebar__link">
          <i className="fa fa-cog"></i>
          <a href="#/">Settings</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-sign-out"></i>
          <a href="#/">Logout</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
