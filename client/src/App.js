import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import "./global.css"
import RegistrationPage from "./pages/RegistrationPage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/register" element={<RegistrationPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
