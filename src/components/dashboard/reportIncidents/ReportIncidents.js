import React from "react";
import SideNavBar from "../side-nav-bar/SideNavBar";
import CardButton from "../card-botton/CardButton";

function ReportIncidents() {
  return (
    <div className="container">
      <div className="blur">
        <div className="side-bar">
          <SideNavBar />
        </div>

        <div className="area">
          <div className="header">
            <h3>Home</h3>
            <div className="search">
              <input type="text" />
              <button>Search</button>
            </div>
            <div className="breadcrumb">
              <p>
                <a href="#">ResQ</a>
              </p>
              <p>/</p>
              <p>Home</p>
            </div>
          </div>

          <div className="footer">
            <p>2023 © ResQConnect Devs</p>
            <p>Problem Statement: 1440, SIH 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReportIncidents;
