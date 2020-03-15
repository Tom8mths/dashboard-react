import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.scss";

import Routes from "./routes/index";
import Navbar from "./components/navbar";
import SideBar from "./components/sidebar";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <SideBar />
        <Switch>
          <Routes />
        </Switch>
      </div>
    </Router>
  );
}
