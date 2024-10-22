import { useState } from "react";
import "./App.css";
import MultiStepForm from "./pages/Index";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Basic/Dashboard";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/form" element={<MultiStepForm />} />
        <Route path="/form/:id" element={<MultiStepForm />} />
        <Route path="/dash" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
