import React from "react";
import {Link} from "react-router-dom";

function SideNav() {
  return (
    <div className="collapse navbar-collapse navbar-ex1-collapse">
      <ul className="nav navbar-nav side-nav">
        <li className="active">

          <Link to="/"> <i className="fa fa-fw fa-dashboard" />
            Dashboard
          </Link>

        </li>
        <li>
          <Link to="/Charts">

            <i className="fa fa-fw fa-bar-chart-o" /> Charts
          </Link>
        </li>
        <li>
          <Link to="/Tables">
            <i className="fa fa-fw fa-table" /> Tables
          </Link>
        </li>
        <li>
          <Link to="/Settings">
            <i className="fa fa-fw fa-table" /> Settings
          </Link>
        </li>
        <li>
          <Link to="/Wall">
            <i className="fa fa-fw fa-table" /> Wall
          </Link>
        </li>
        <li>
          <Link to="/Profiles">
            <i className="fa fa-fw fa-table" /> Profiles
          </Link>
        </li>
        <li>
          <Link to="/Marquee/WellHelloWorld">
            <i className="fa fa-fw fa-table" /> Marquee
          </Link>
        </li>

      </ul>
    </div>);  
}

export default SideNav;
