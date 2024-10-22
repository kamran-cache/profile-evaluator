import React, { useState } from "react";

const CompanyRoleDisplayAlt = () => {
  const companiesData = [
    {
      companyName: "Company A",
      employmentDates: "Jan 2015 - Dec 2018",
      roles: [
        { roleName: "Software Engineer", roleDates: "Jan 2015 - Dec 2016" },
        { roleName: "Senior Engineer", roleDates: "Jan 2017 - Dec 2018" }
      ]
    },
    {
      companyName: "Company B",
      employmentDates: "Jan 2019 - Present",
      roles: [
        { roleName: "Lead Developer", roleDates: "Jan 2019 - Dec 2021" },
        { roleName: "Engineering Manager", roleDates: "Jan 2022 - Present" }
      ]
    }
  ];

  const [selectedCompany, setSelectedCompany] = useState(companiesData[0]);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gradient-to-br from-purple-300 via-blue-400 to-teal-500 p-8 text-white">
      {/* Company Section */}
      <div className="md:w-1/3 h-full pr-6">
        <h2 className="text-3xl font-bold mb-6">Companies</h2>
        <div className="flex overflow-x-auto space-x-4 pb-4">
          {companiesData.map((company, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-64 p-6 rounded-lg shadow-xl bg-opacity-30 backdrop-blur-md transition-all duration-300 ${
                selectedCompany.companyName === company.companyName
                  ? "bg-white text-blue-900"
                  : "bg-white/20 hover:bg-white/40"
              } cursor-pointer`}
              onClick={() => setSelectedCompany(company)}
            >
              <h3 className="text-xl font-semibold">{company.companyName}</h3>
              <p className="text-sm">{company.employmentDates}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Role Section */}
      <div className="md:w-2/3 bg-white/20 backdrop-blur-lg rounded-lg shadow-lg p-6 h-full overflow-y-auto">
        <h2 className="text-3xl font-bold text-white mb-4">
          Roles at {selectedCompany.companyName}
        </h2>
        <div className="space-y-4">
          {selectedCompany.roles.map((role, index) => (
            <div key={index} className="bg-blue-100 p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-blue-900">{role.roleName}</h3>
              <p className="text-blue-700">{role.roleDates}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyRoleDisplayAlt;
