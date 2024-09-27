import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MultiStepForm from './pages/Index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <FormPage/> */}
      <MultiStepForm/>
    </>
  )
}

export default App
