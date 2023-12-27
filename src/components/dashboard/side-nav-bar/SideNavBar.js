import React from "react";
import "./sideNavBar.css";
function SideNavBar() {
  return (
    <div className="header">
      <div className="side-nav">
        <div className="user">
          <img src="../images/user.png" alt="user" className="user-img" />
          <div>
            <h2>Anshu</h2>
            <p>imanshu822@gmail.com</p>
          </div>
          <img src="../images/star.png" alt="star-img" className="star-img" />
        </div>
        <ul>
          <li>
            <img src="../images/dashboard.png" alt="dashboard" />
            <p>Dashboard</p>
          </li>
          <li>
            <img src="../images/reports.png" alt="dashboard" />
            <p>Incident</p>
          </li>
          <li>
            <img src="../images/rewards.png" alt="rewards" />
            <p>Resources</p>
          </li>
          <li>
            <img src="../images/projects.png" alt="projects" />
            <p>Agency</p>
          </li>
          <li>
            <img src="../images/members.png" alt="members" />
            <p>Agents</p>
          </li>
          <li>
            <img src="../images/messages.png" alt="messages" />
            <p>Messages</p>
          </li>
          <li>
            <img src="../images/map.png" alt="video-chat" />
            <p>Live Location</p>
          </li>

          <li>
            <img src="../images/setting.png" alt="setting" />
            <p>Settings</p>
          </li>
        </ul>
        <ul>
          <li>
            <img src="../images/help.png" alt="logout" />
            <p>Help</p>
          </li>
          <li>
            <img src="../images/logout.png" alt="logout" />
            <p>Log Out</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideNavBar;
