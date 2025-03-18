import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import "./global.css"
import RegistrationPage from "./pages/RegistrationPage";
import TamplatePage from "./pages/TamplatePage";
import CSVReader from "./pages/CSVReader";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/register" element={<RegistrationPage/>}/>
        <Route path="/template" element={<TamplatePage/>}/>
        <Route path="/file-upload" element={<CSVReader/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
