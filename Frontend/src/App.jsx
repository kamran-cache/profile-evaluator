import { useState } from 'react'
import './App.css'
import MultiStepForm from './pages/Index'
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Basic/Dashboard';
import CriticalRole from './pages/additionalForms/CriticalRole';
import Judging from './pages/additionalForms/Judging2';
import Authorship2 from './pages/additionalForms/Authorship2';
import CompanyRoleDisplay from './others/Company';
import CompanyRoleDisplayAlt from './others/Company2';
import PressRelease2 from './pages/additionalForms/PressRelease2';
import Exibition2 from './pages/additionalForms/Exibition2';
import FinalMerits2 from './pages/additionalForms/FinalMerits2';
import ToDoList from './others/todo';

function App() {

  return (
    <>
     <Routes>
        <Route path="/" element={<MultiStepForm/>} />
        <Route path="/dash" element={<Dashboard/>} />
        <Route path="/role" element={<CriticalRole/>} />
        <Route path="/judging" element={<Judging/>} />
        <Route path="/authorship" element={<Authorship2/>} />
        <Route path="/company" element={<CompanyRoleDisplay/>} />
        <Route path="/company2" element={<CompanyRoleDisplayAlt/>} />
        <Route path="/pr" element={<PressRelease2/>} />
        <Route path="/exibition" element={<Exibition2/>} />
        <Route path="/final" element={<FinalMerits2/>} />
        <Route path="/todo" element={<ToDoList/>} />



      </Routes>
    </>
  )
}

export default App
