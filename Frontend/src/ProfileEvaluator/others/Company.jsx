import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const CompanyRoleDisplay = () => {
  const companiesData = [
    {
      companyName: "Company A",
      employmentDates: "Jan 2022 - Dec 2024",
      roles: [
        { roleName: "Software Engineer", roleDates: "Jan 2022 - Dec 2023" , location: "New York, NY"},
        { roleName: "Senior Engineer", roleDates: "Jan 2023 - Dec 2024" , location: "New York, NY"}
      ]
    },
    {
      companyName: "Company B",
      employmentDates: "Jan 2019 - Present",
      roles: [
        { roleName: "Lead Developer", roleDates: "Jan 2019 - Dec 2021" , location: "New York, NY"},
        { roleName: "Engineering Manager", roleDates: "Jan 2022 - Present" , location: "New York, NY"}
      ]
    }
  ];

  const [selectedCompany, setSelectedCompany] = useState(companiesData[0]);

  const [expandedCompany, setExpandedCompany] = useState(null);

  const navigate = useNavigate();

  const handleCardClick = () => {
    // Pass only the roleName, not the event object
    navigate('/role');
  };

  const toggleCompany = (index) => {
    setExpandedCompany(expandedCompany === index ? null : index);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-8">
      {/* Company Section */}
      <div className="w-full md:w-1/3 pr-4">
        <div className="flex justify-center mb-4 rounded-lg border border-gray-300 bg-gradient-to-r from-white to-gray-100 py-4 px-6 shadow-md hover:shadow-xl cursor-pointer transition-shadow duration-300 ease-in-out text-2xl font-bold text-blue-600">
          Companies
        </div>
        <div className="space-y-4">
          {companiesData.map((company, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg shadow-md border ${
                expandedCompany === index
                  ? "bg-gradient-to-r from-white to-gray-100 border-blue-400"
                  : "border border-gray-300 bg-gradient-to-r from-white to-gray-100"
              } cursor-pointer hover:shadow-lg transition-all duration-300`}
              onClick={() => setSelectedCompany(company)}
            >
              <div
                className="flex justify-between items-center"
                
              >
                <h3 className="text-xl font-semibold">{company.companyName}</h3>
                {/* <span className="text-2xl">{expandedCompany === index ? "-" : "+"}</span> */}
              </div>
              <p className="text-gray-600">{company.employmentDates}</p>

              {/* Display roles only if this company is expanded */}
              {expandedCompany === index && (
                <div className="mt-4">
                  <h4 className="text-lg font-bold text-blue-600">Roles:</h4>
                  <div className="mt-2 space-y-2">
                    {company.roles.map((role, roleIndex) => (
                      <div
                        key={roleIndex}
                        className="p-4 rounded-lg bg-white border border-blue-300 shadow-md hover:shadow-xl"
                        onClick={handleCardClick}
                      >
                        <h5 className="text-md font-semibold">{role.roleName}</h5>
                        <p className="text-gray-600">{role.roleDates}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Role Section */}
      <div className="w-full md:w-2/3 bg-white rounded-lg shadow-lg p-6 mt-6 md:mt-0">
  <h2 className="flex justify-center text-2xl font-bold text-blue-600 mt-2 mb-4">
    Roles at {selectedCompany.companyName}
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:mt-8">
    {selectedCompany.roles.map((role, index) => (
      <div
        key={index}
        className="text-center p-4 md:py-8 border hover:border-2 rounded-lg shadow-xl transition ease-out duration-300 delay-150 hover:-translate-y-1 hover:scale-105 hover:border-blue-500 cursor-pointer"
        onClick={handleCardClick}
      >
        <h3 className="text-xl font-semibold ">{role.roleName}</h3>
        <p className="text-gray-600">{role.location}</p> 
        <p className="text-gray-600">{role.roleDates}</p>
        <div className="flex justify-between mt-[2vh] px-4">
        <button className="rounded-full bg-blue-500 py-2 px-6 text-center font-semibold text-white outline-none hover:bg-blue-800">Edit</button>
        <button className="rounded-full bg-blue-500 py-2 px-4 text-center font-semibold text-white outline-none hover:bg-blue-800">Delete</button>
        </div>       
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default CompanyRoleDisplay;
