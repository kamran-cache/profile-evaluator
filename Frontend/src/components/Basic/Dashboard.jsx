import React from 'react'
import { useState } from 'react'
import ProgressBar from './ProgressBar'

const Dashboard = () => {
    const [steps, setSteps] = useState([
        { label: 'Form 1', completed: true },
        { label: 'Form 2', completed: false },
        { label: 'Form 3', completed: false },
      ]);
  return (
    <>
        <div className="flex flex-col justify-center items-center w-full h-screen"> 
            <h1 className='mb-6'>Dashboard</h1>
            <ProgressBar steps={steps} />
        </div>
  
    </>
  )
}

export default Dashboard