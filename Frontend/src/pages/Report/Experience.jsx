import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Function to calculate duration in years (adjusted for months)
const calculateYears = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const years = end.getFullYear() - start.getFullYear();
  const months = end.getMonth() - start.getMonth();
  return (
    years + (months >= 0 ? months / 12 : (months + 12) / 12).toFixed(1) / 10
  );
};

const Colors = ["#007EE8", "#FF684E", "#FFBE24", "#FFBFFF", "#0B0550"];

const Experience = ({ data }) => {
  // Transform data to aggregate years of experience per role within each company
  const chartData = data.map((item) => {
    const companyData = { company: item.company };

    item.roles.forEach((role) => {
      const years = calculateYears(role.startDate, role.endDate);
      companyData[role.jobTitle] = years; // Use jobTitle as the key for each role's years
    });

    return companyData;
  });

  // Get a list of unique job titles across all companies for the stacked segments
  const uniqueJobTitles = [
    ...new Set(data.flatMap((item) => item.roles.map((role) => role.jobTitle))),
  ];
  console.log(uniqueJobTitles, "uni");

  return (
    <div className="main h-[30rem] w-full bg-[#FF684E]/10 mt-10 font-metropolis">
      <div className="container h-full w-full flex flex-row items-center justify-center">
        <div className="left h-full w-1/3 flex justify-center ">
          <div className="md:mt-12 w-fit h-fit flex flex-col items-start justify-center text-justify ">
            <p className="text-4xl font-semibold text-black">Gathered </p>
            <p className="text-4xl font-semibold text-primary">Experience</p>
            <p className="text-4xl font-semibold text-primary">Data:</p>
            <p className="font-bold text-lg text-black mt-6">
              (Company or Industry wise)
            </p>
          </div>
        </div>
        <div className="right h-full w-2/3  flex items-center justify-center">
          <ResponsiveContainer width="90%" height="90%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="company" />
              <YAxis
                label={{ value: "Years", angle: -90, position: "insideLeft" }}
              />
              <Tooltip />

              {/* <Legend /> */}

              {/* Create a stacked bar for each unique job title */}
              {uniqueJobTitles.map((jobTitle, index) => (
                <Bar
                  key={index}
                  dataKey={jobTitle} // Each role stacks within the same company bar
                  fill={Colors[index % Colors.length]} // Random color for each role
                  // fill={generateColorFromString(jobTitle)}
                  name={jobTitle}
                  barSize={80}
                  stackId="a" // Set the same stackId to stack bars within a single company
                />
              ))}
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Experience;
