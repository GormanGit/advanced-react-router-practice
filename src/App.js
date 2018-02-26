import React from "react";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import Charts from "./components/Charts";
import Tables from "./componentsTables";
import Settings from "./components/Settings";
import Wall from "./components/Wall";
import Marquee from "./components/Marquee";
import Profiles from "./components/Profiles";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";






import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div> 
      <div id="wrapper">
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <TopNav />
          <SideNav />
        </nav>
        <div style={{backgroundColor: "white"}}>
          {/* PUT YOUR ROUTES HERE */}
          <Switch>
            <Route path="/charts" components={Charts} />
            <Route path="/tables" components={Tables} />
            <Route path="/settings" components={Settings} />
            <Route path="/wall" components={Wall} />
            <Route path="/profiles" components={Profiles} />
            <Route path="/marquee/:text" components={Marquee} />
            <Route path="/profile/:id" components={Profile} />
            <Route path="/" component={Dashboard} />
          </Switch>
        </div>
      </div>
    </div>
    </BrowserRouter>

  );
}


export default App;
