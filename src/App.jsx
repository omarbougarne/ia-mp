import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import IAMPHomepage from "./components/IAMPHomepage";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      {/* Route for the Home page */}
  
      <Route path="/IAMPHomepage" element={<IAMPHomepage />} />
    </Routes>
    </>
  )
}

export default App
