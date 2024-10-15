import React, { useState } from 'react';
import './ProgressBar.css'; // Add some custom styling

const formsList = [
  { id: 1, name: "Personal Details" },
  { id: 2, name: "VISA Information" },
  { id: 3, name: "Experience" },
  { id: 4, name: "Education" }
];

const ProgressBar = () => {
  const [completedSteps, setCompletedSteps] = useState([]);

  const handleComplete = (id) => {
    if (!completedSteps.includes(id)) {
      setCompletedSteps([...completedSteps, id]);
    }
  };

  return (
    <div className="progress-container">
      <div className="progress-bar">
        {formsList.map((form, index) => (
          <div key={form.id} className="progress-step">
            <div className={`step-circle ${completedSteps.includes(form.id) ? 'completed' : ''}`}>
              {completedSteps.includes(form.id) ? '✓' : index + 1}
            </div>
            <div className="step-line"></div>
          </div>
        ))}
      </div>

      <div className="form-list">
        {formsList.map((form) => (
          <div key={form.id} className="form-item h-[3rem]">
            <div>
            {form.name} 
            {completedSteps.includes(form.id) && <span className="completed-badge">Completed</span>}
            </div>
            <button onClick={() => handleComplete(form.id)}>Mark as Completed</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;