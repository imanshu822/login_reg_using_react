import React from "react";
import "./cardButton.css";
import { useNavigate } from "react-router-dom";
function CardButton(props) {
  const navigate = useNavigate();
  return (
    <div
      className="card"
      onClick={() => {
        if (props.id === "1") navigate("/dashboard/reportIncidents");
      }}
    >
      <div
        className="glass"
        style={{ border: `2px solid ${props.color}`, borderRadius: "15px" }}
      >
        <img src={`./images/${props.image}`} alt={props.name} />
        <div className="text">
          <p style={{ color: `${props.color}` }}>{props.name}</p>
        </div>
      </div>
    </div>
  );
}

export default CardButton;
