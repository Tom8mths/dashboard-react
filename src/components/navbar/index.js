import React from "react";
import avatar from "../../assets/images/avatar.jpg";

import { faEnvelope, faBell, faBars } from "@fortawesome/free-solid-svg-icons";
import { NavBar, Search, RightNav, StyledIcon } from "./style";

export default function Navbar() {
  return (
    <div>
      <NavBar>
        <h1>FRONTEND DASHBOARD</h1>
        <h2>FD</h2>
        <Search>
          <form action="/action_page.php">
            <input
              placeholder="Search"
              type="search"
              id="search"
              name="search"
            />
            <input type="submit" value="Search" />
          </form>
        </Search>
        <RightNav>
          <ul>
            <li>
              <StyledIcon className="icon" icon={faEnvelope} />
            </li>
            <li>
              <StyledIcon className="icon" icon={faBell} />
            </li>
          </ul>
          <div className="user">
            <span>John Doe</span>
            <img src={avatar} alt="" className="avatar" />
          </div>
          <div className="toggle">
            <StyledIcon className="icon" icon={faBars} />
          </div>
        </RightNav>
      </NavBar>
    </div>
  );
}
