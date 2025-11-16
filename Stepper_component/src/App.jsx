import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Stepper from './components/Stepper'

function App() {

const data = [
  {
    label: "Basic Information",
    content: "Name: Alex Carter, Age: 29, Occupation: Software Developer"
  },
  {
    label: "Contact Details",
    content: "Email: alex.carter@example.com, Phone: +1 (555) 482-1937"
  },
  {
    label: "Education",
    content: "B.Sc. in Computer Science, University of Washington (2014–2018)"
  },
  {
    label: "Work Experience",
    content: "3+ years at TechNova Solutions focusing on full-stack development, API design, and cloud infrastructure."
  },
  {
    label: "Skills & Interests",
    content: "Skills: JavaScript, React, Node.js, Docker. Interests: Hiking, photography, and building DIY smart-home devices."
  }
];



  return (
    <Stepper data={data}/>
  )
}

export default App
