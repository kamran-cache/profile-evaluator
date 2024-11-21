import { useState, useEffect } from "react";
import "./App.css";
import MultiStepForm from "./pages/Index";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Basic/Dashboard";
import Login from "./pages/Login";
import CriticalRole from "./pages/additionalForms/CriticalRole";
import Judging from "./pages/additionalForms/Judging2";
import Authorship2 from "./pages/additionalForms/Authorship2";
import CompanyRoleDisplay from "./others/Company";
import CompanyRoleDisplayAlt from "./others/Company2";
import PressRelease2 from "./pages/additionalForms/PressRelease2";
import Exibition2 from "./pages/additionalForms/Exibition2";
import FinalMerits2 from "./pages/additionalForms/FinalMerits2";
import ToDoList from "./others/todo";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getData } from "./utils/Data";
import { store } from "./redux/store";
import { fetchProfile } from "./redux/profileData";
import Dashboard2 from "./pages/Dashboard2";
import Section1 from "./pages/Report/Section1";
import Report from "./pages/Report/Report";
import Awards from "./pages/additionalForms/Awards";
function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.profile.profile);
  const userStatus = useSelector((state) => state.profile.status);
  const { id } = useParams();
  const userId = useSelector((state) => state.application.userId);
  console.log(userId, id, "id");
  // useEffect(() => {
  //   if (userStatus === "idle") {
  //     dispatch(getData(userId, dispatch));
  //   }
  // }, [userId, dispatch]);
  console.log("App.jsx user:", user, userStatus);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/form" element={<MultiStepForm />} />
        <Route exact path="/form/:id" element={<MultiStepForm />} />
        <Route exact path="/dash" element={<Dashboard />} />
        <Route exact path="/dash/:id" element={<Dashboard />} />
        <Route exact path="/role/:id/:c_id/:r_id" element={<CriticalRole />} />
        <Route exact path="/judging/:id/:j_id" element={<Judging />} />
        <Route exact path="/authorship/:id/:au_id" element={<Authorship2 />} />
        <Route exact path="/awards/:id" element={<Awards />} />
        <Route exact path="/awards/:id/:c_id" element={<Awards />} />
        <Route exact path="/company" element={<CompanyRoleDisplay />} />
        <Route exact path="/company2" element={<CompanyRoleDisplayAlt />} />
        <Route exact path="/pr/:id/:pr_id" element={<PressRelease2 />} />
        <Route exact path="/exibition/:id/:e_id" element={<Exibition2 />} />
        <Route exact path="/final/:id/:f_id" element={<FinalMerits2 />} />
        <Route exact path="/todo" element={<ToDoList />} />
        <Route exact path="/dash2/:id" element={<Dashboard2 />} />
        <Route exact path="/report/:id" element={<Report />} />
      </Routes>
    </>
  );
}

export default App;
