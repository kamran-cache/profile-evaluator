import { useState } from 'react'
import './App.css'
import MultiStepForm from './pages/Index'
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Basic/Dashboard';

function App() {

  return (
    <>
     <Routes>
        <Route path="/" element={<MultiStepForm/>} />
        <Route path="/dash" element={<Dashboard/>} />
      </Routes>
    </>
  )
}

export default App
