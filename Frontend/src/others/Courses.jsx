import React from 'react';

const courses = [
  { name: "Experience", progress: 80 },
  { name: "Awards ", progress: 65 },
  { name: "Judging", progress: 50 },
  { name: "Education", progress: 90 },
];

const CoursesSection = () => {
  return (
    <div className="w-full p-6">
      {courses.map((course, index) => (
        <div
          key={index}
          className="flex justify-between items-center bg-blue-100 rounded-full p-4 mb-4 w-full"
        >
          {/* Course Name */}
          <div className="text-lg font-semibold ml-[1rem] text-blue-900">{course.name}</div>

          {/* Progress Bar */}
          <div className="flex items-center w-1/2">
            <div className="w-full bg-gray-300 rounded-full h-3">
              <div
                className="bg-blue-500 h-3 rounded-full"
                style={{ width: `${course.progress}%` }}
              />
            </div>
            <span className="ml-4 text-blue-900 font-medium">{course.progress}%</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoursesSection;
