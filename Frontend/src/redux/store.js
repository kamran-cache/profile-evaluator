import { configureStore } from "@reduxjs/toolkit";
import personalInfo from "./personalInfoSlice";
import experienceSlice from "./experienceSlice";
import authorshipSlice from "./authorshipSlice";
import visaSlice from "./visaSlice";
import educationSlice from "./educationSlice";
import awardsSlice from "./awardsSlice";
import scholarshipSlice from "./scholarshipSlice";
import pressReleaseSlice from "./pressReleaseSlice";
import judgingSlice from "./judgingSlice";
import CriticalRoleSlice from "./AdditionalForms/CriticalRoleSlice";
import AuthorshipSlice2 from "./AdditionalForms/AuthorshipSlice2";
import JudgingSlice2 from "./AdditionalForms/JudgingSlice2";
import PressReleaseSlice2 from "./AdditionalForms/PressReleaseSlice2";
import ExibitionSlice from "./AdditionalForms/ExibitionSlice";
import FinalMeritsSlice2 from "./AdditionalForms/FinalMeritsSlice2";

export const store = configureStore({
  reducer: {
    personalInfo: personalInfo,
    experience: experienceSlice,
    authorship: authorshipSlice,
    visa: visaSlice,
    education: educationSlice,
    awards: awardsSlice,
    scholarships: scholarshipSlice,
    pressRelease: pressReleaseSlice,
    judging: judgingSlice,
    projects : CriticalRoleSlice,
    authorships : AuthorshipSlice2,
    judging: JudgingSlice2,
    press: PressReleaseSlice2,
    exibition: ExibitionSlice,
    merits: FinalMeritsSlice2,
  },
});
