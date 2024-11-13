import React, { useEffect } from "react";
import Section1 from "./Section1";
import { store } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../utils/Data";
import { useParams } from "react-router-dom";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Work from "./Work";
import Experience from "./Experience";
import Achievement from "./Achievement";
import ProfileSummary from "./ProfileSummary";
import Strength from "./Strength";
import Navbar from "./navbar";
import Weakness from "./Weakness";
import VisaReadiness from "./VisaReadiness";
const Report = () => {
  const dispatch = useDispatch();
  console.log(store.getState());
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getData(id, dispatch);
      console.log(store.getState(), "data", "user");
    }
    console.log(store.getState(), "datauseEffect", "user");
  }, [id, dispatch]);

  const personalData = useSelector((state) => state.personalInfo.personalInfo);
  const visaData = useSelector((state) => state.visa);
  const educationData = useSelector((state) => state.education.educations);
  const experienceData = useSelector((state) => state.experience.experiences);
  const awardsData = useSelector((state) => state.awards.awards);

  console.log(experienceData, "kfe");

  return (
    <div>
      <Navbar />
      <Section1 data={personalData} />
      <Section2 data={visaData} />
      <Section3 data={educationData} />
      <Work data={experienceData} />
      <Experience data={experienceData} />
      <Achievement data={awardsData} />
      <ProfileSummary />
      <Strength />
      <Weakness />
      <VisaReadiness />
    </div>
  );
};

export default Report;
