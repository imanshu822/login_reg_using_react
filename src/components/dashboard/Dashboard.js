import React from "react";
import "./dashboard.css";
import SideNavBar from "./side-nav-bar/SideNavBar";
import CardButton from "./card-botton/CardButton";

function Dashboard() {
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

          <div className="box-one">
            <div className="left">
              <div className="top">
                <CardButton
                  id={"1"}
                  name={"Report Incidents"}
                  color={"red"}
                  image={"createIndidents.png"}
                />
                <CardButton
                  name={"Request Resources"}
                  color={"brown"}
                  image={"resources.png"}
                />
                <CardButton
                  name={"Request Agency"}
                  color={"green"}
                  image={"agency.png"}
                />
                <CardButton
                  name={"View Incidents"}
                  color={"blue"}
                  image={"bg2.png"}
                />
              </div>

              <div className="bottom">
                <div className="bleft">
                  {/* <CardButton /> */}
                  {/* <CardButton /> */}
                </div>
                <div className="bright">map</div>
              </div>
            </div>
            <div className="right">
              <div className="agents">agents</div>
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

export default Dashboard;
