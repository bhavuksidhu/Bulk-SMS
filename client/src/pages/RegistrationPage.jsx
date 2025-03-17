import React, { useState } from "react";
import Input from "../components/Input";
import customFetch from "../utils/helper";
import axios from "axios";

const RegistrationPage = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordError, setPasswordError] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((pre) => ({ ...data, [name]: value }));
    setPasswordError("");
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    if(data.password!==data.confirmPassword) setPasswordError("Password does not match..");
    else{
     try {
      const res = await axios.post("/api/v1/auth/register",data);
      console.log(res?.data);
     } catch (error) {
      console.log(error?.response?.data?.msg)
     }
    }
  };
  return (
    <div>
      <div className="form">
        <h3 className="text-center">Registration</h3>
        <Input type="text" onChange={handleChange} name="name" />
        <Input type="email" onChange={handleChange} name="email" />
        <Input type="password" onChange={handleChange} name="password" />
        <Input
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          labelText="confirm password"
        />
        <p className="error">{passwordError}</p> 
        <br></br>
        <button
          onClick={handleSubmit}
          className="btn btn-block form-btn"
          type="submit"
        >
          Reister
        </button>
      </div>
    </div>
  );
};

export default RegistrationPage;
