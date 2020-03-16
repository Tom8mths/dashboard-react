import React from "react";
import "../../assets/variables/Variables.scss";

import { Sidebar, Side, SideItem, SideLink, StyledIcon } from "./style";
import {
  faHome,
  faUsers,
  faProjectDiagram,
  faCalendarAlt,
  faUserCog,
  faComments,
  faLightbulb,
  faPalette,
  faEllipsisV
} from "@fortawesome/free-solid-svg-icons";

export default function SideBar() {
  return (
    <div>
      <Sidebar>
        <Side>
          <SideLink></SideLink>
          <SideItem>
            <SideLink>
              <StyledIcon className="icon" icon={faHome} />
              <span className="link-text">Dashboard</span>
            </SideLink>
          </SideItem>

          <SideItem>
            <SideLink>
              <StyledIcon className="icon" icon={faUsers} />
              <span className="link-text">Users</span>
            </SideLink>
          </SideItem>

          <SideItem>
            <SideLink>
              <StyledIcon className="icon" icon={faProjectDiagram} />
              <span className="link-text">Projects</span>
            </SideLink>
          </SideItem>

          <SideItem>
            <SideLink>
              <StyledIcon className="icon toggle" icon={faEllipsisV} />
            </SideLink>
          </SideItem>

          <SideItem>
            <SideLink>
              <StyledIcon className="icon" icon={faCalendarAlt} />
              <span className="link-text">Events</span>
            </SideLink>
          </SideItem>

          <SideItem>
            <SideLink>
              <StyledIcon className="icon" icon={faUserCog} />
              <span className="link-text">Preferences</span>
            </SideLink>
          </SideItem>

          <SideItem>
            <SideLink>
              <StyledIcon className="icon" icon={faComments} />
              <span className="link-text">Feedback</span>
            </SideLink>
          </SideItem>

          <SideItem>
            <SideLink>
              <StyledIcon className="icon" icon={faLightbulb} />
              <span className="link-text">Suggestions</span>
            </SideLink>
          </SideItem>

          <SideItem>
            <SideLink>
              <StyledIcon className="icon" icon={faPalette} />
              <span className="link-text">Themes</span>
            </SideLink>
          </SideItem>
        </Side>
      </Sidebar>
    </div>
  );
}
