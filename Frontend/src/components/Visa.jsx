import React from "react";

const Visa = () => {
  return (
    <>
      <select className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
            <option value="">-- select one --</option>
        <optgroup label="Nonimmigrant Visas">
          <option value="B-1">B-1: Business Visitor</option>
          <option value="B-2">B-2: Tourist Visitor</option>
          <option value="F-1">F-1: Student Visa</option>
          <option value="H-1B">H-1B: Specialty Occupations</option>
          <option value="H-2A">H-2A: Temporary Agricultural Workers</option>
          <option value="H-2B">H-2B: Temporary Non-Agricultural Workers</option>
          <option value="J-1">J-1: Exchange Visitor</option>
          <option value="L-1">L-1: Intracompany Transferee</option>
          <option value="O-1">
            O-1: Individuals with Extraordinary Ability or Achievement
          </option>
          <option value="P-1">
            P-1: Internationally Recognized Athletes or Entertainers
          </option>
          <option value="R-1">R-1: Religious Workers</option>
          <option value="TN/TD">
            TN/TD: NAFTA Professionals (Canada and Mexico)
          </option>
        </optgroup>
        <optgroup label="Immigrant Visas">
          <option value="IR-1">IR-1: Spouse of a U.S. Citizen</option>
          <option value="IR-2">
            IR-2: Unmarried Child Under 21 Years of Age of a U.S. Citizen
          </option>
          <option value="IR-5">
            IR-5: Parent of a U.S. Citizen who is at least 21 years old
          </option>
          <option value="EB-1">EB-1: Priority Workers</option>
          <option value="EB-2">
            EB-2: Professionals with Advanced Degrees or Exceptional Ability
          </option>
          <option value="EB-3">
            EB-3: Skilled Workers, Professionals, and Other Workers
          </option>
          <option value="EB-5">EB-5: Immigrant Investors</option>
        </optgroup>
        <optgroup label="Other Visa Categories">
          <option value="K-1">K-1: Fiancé(e) of a U.S. Citizen</option>
          <option value="U">U: Victims of Criminal Activity</option>
          <option value="T">T: Victims of Human Trafficking</option>
          <option value="DV">DV: Diversity Immigrant Visa Program</option>
        </optgroup>
      </select>
    </>
  );
};

export default Visa;
