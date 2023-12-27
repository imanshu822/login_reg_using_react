import React, { useState } from "react";
import Axios from "axios";
import FormInput from "../comps/FormInput";
import "./login.css";
import { useNavigate } from "react-router-dom"; // Uncomment this line

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    agencyId: "",
  });

  const inputs = [
    {
      id: 1,
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
      id: 2,
      name: "agencyId",
      type: "agencyId",
      placeholder: "agencyId",
      label: "Agency Id",
      required: true,
      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      title: "Please enter a valid Agency ID!",
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
  ];

  const navigate = useNavigate(); // Use navigate to perform navigation

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.post(
        "http://localhost:4000/api/user/login",
        values
      );

      console.log("Login successful:", response.data);
      if (response.status === 200) {
        navigate("/dashboard"); // Use navigate to go to the dashboard page
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Agency Login</h1>
        <div className="details">
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
        <button type="submit">Login</button>
        <div className="login-text">
          New User?
          <a
            className="login-btn font-bold"
            onClick={() => {
              navigate("/register"); // Use navigate to go to the register page
            }}
          >
            SignUp
          </a>
        </div>
      </form>
    </div>
  );
}

export default Login;
