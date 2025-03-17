import React, { useState } from "react";
import Input from "../components/Input";
import axios from "axios";
import {useNavigate} from "react-router-dom"

const LoginPage = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login",data);
      console.log(res.data);
      navigate("/register");
    } catch (error) {
      console.log(error);
    }
    
  }
  return (
    <div>
      <div className="form">
        <h3 className="text-center">Login</h3>
        <Input type="email" onChange={handleChange} name="email" />
        <Input type="password" onChange={handleChange}  name="password" />
        <button onClick={handleSubmit} className="btn btn-block form-btn" type="submit">
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
