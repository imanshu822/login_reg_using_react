import React, { useState } from "react";
import FormInput from "../comps/FormInput";
import "./register.css";
import FormSelect from "../comps/FormSelect";
import Axios from "axios";
import FormSelectState from "../comps/FormSelectState";
import FormSelectCity from "../comps/FormSelectCity";
import { useNavigate } from "react-router-dom";

function Register() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    agencyId: "",
    postalCode: "",
    type: "",
    state: "",
    city: "",
  });

  const inputs = [
    {
      id: 1,
      name: "agencyId",
      type: "text",
      placeholder: "Agency ID",
      errorMessage:
        "AgencyId should be 3-16 characters and shouldn't include any special characters!",
      label: "Agency ID",
      required: true,
      pattern: "^[A-Za-z0-9]{3,16}$",
      title:
        "AgencyId should be 3-16 characters and shouldn't include any special characters!",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Please enter a valid email address!",
      label: "Email",
      required: true,
      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      title: "Please enter a valid email address!",
    },
    {
      id: 3,
      name: "mobile",
      type: "number",
      placeholder: "Contact Number",
      label: "Contact Number",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];
  const navigate = useNavigate();
  // Function to make the API call
  const registerAgency = async () => {
    try {
      const response = await Axios.post(
        "http://localhost:4000/api/user/register",
        values
      );
      // Handle the response, e.g., display a success message
      if (response.status === 200) {
        alert("Registration Successfull");
        navigate("/login");
      }
      console.log("Registration successful:", response.data);
    } catch (error) {
      // Handle errors, e.g., display an error message
      console.error("Registration failed:", error);
      alert("Registration failed");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerAgency();
    // navigate to login page
    // Call the API function
    // Optionally, you can redirect to another page or perform other actions upon successful registration.
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Register Agency</h1>
        <div className="details">
          <div className="agency-details">
            <FormSelect
              key={6}
              name={"type"}
              type={"text"}
              placeholder={"Agency Type"}
              label={"Pin Code"}
              onChange={onChange}
              required={true}
            />
            <FormSelectState
              key={8}
              name={"state"}
              type={"text"}
              placeholder={"States"}
              label={"State"}
              onChange={onChange}
              required={true}
            />
            <FormSelectCity
              key={8}
              name={"city"}
              type={"text"}
              placeholder={"City"}
              label={"City"}
              onChange={onChange}
              required={true}
            />

            <FormInput
              key={6}
              name={"postalCode"}
              type={"number"}
              placeholder={"Pin Code"}
              label={"Pin Code"}
              onChange={onChange}
              required={true}
            />
            <FormInput
              key={7}
              name={"name"}
              type={"text"}
              placeholder={"Agency Name"}
              label={"Agency Name"}
              onChange={onChange}
              required={true}
            />
          </div>
          <div className="agency-admin">
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
          </div>
        </div>
        <div className="locationCheck">
          <input type="checkbox" required />
          <label htmlFor="lCheckbox">
            Save current location as Agency Location
          </label>
        </div>
        <button type="submit">Submit</button>
        <div className="login-text">
          Already have an account?
          <a
            className="login-btn font-bold"
            onClick={() => {
              navigate("/login"); // Use navigate to go to the login page
            }}
          >
            Login
          </a>
        </div>
      </form>
    </div>
  );
}

export default Register;
