import React from "react";
import avatar from "../../assets/images/avatar.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBell } from "@fortawesome/free-solid-svg-icons";
import { NavBar } from "./style";

export default function Navbar() {
  return (
    <div>
      <NavBar>
        <FontAwesomeIcon className="icon" icon={faEnvelope} />
        <FontAwesomeIcon className="icon" icon={faBell} />
        <div className="user">
          <span>John Doe</span>
          <img src={avatar} alt="" className="avatar" />
        </div>
      </NavBar>
    </div>
  );
}
