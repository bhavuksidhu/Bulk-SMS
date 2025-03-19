import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import "./global.css"
import RegistrationPage from "./pages/RegistrationPage";
import TamplatePage from "./pages/TemplatePage";
import CSVReaderPage from "./pages/CSVReaderPage";
import AuthComponent from "./components/AuthComponent";
const App = () => {
  const isLoggedIn = localStorage.getItem("credential");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthComponent Component={isLoggedIn?CSVReaderPage:LoginPage}/>}/>
        <Route path="/register" element={<AuthComponent Component={RegistrationPage}/>}/>
        <Route path="/template"element={<AuthComponent Component={TamplatePage}/>}/>
        <Route path="/file-upload" element={<AuthComponent Component={CSVReaderPage}/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
