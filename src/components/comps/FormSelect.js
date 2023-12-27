import React from "react";
import "./formSelect.css";
function FormSelect(props) {
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  return (
    <div className="formSelect">
      <label>Agency Type</label>
      <select
        {...inputProps}
        id={id}
        name="type"
        placeholder={props.placeholder}
        required
        onChange={onChange}
      >
        <option class="disabled">Select Agency Type</option>
        <option value="NDRF">National Disaster Response Force</option>
        <option value="SDRF">State Disaster Response Force</option>
        <option value="DDMT">District Disaster Management Team</option>
        <option value="ULB">Urban Local Body</option>
        <option value="Fire">Fire and Emergency Service</option>
        <option value="Health">Health and Medical Team</option>
        <option value="CAA">Civil Aviation Authority</option>
        <option value="ICG">Indian Coast Guard</option>
        <option value="NGO">Non-Governmental Organization</option>
      </select>
    </div>
  );
}

export default FormSelect;
