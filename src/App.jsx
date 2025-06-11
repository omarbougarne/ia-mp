import './App.css'
import { Routes, Route } from "react-router-dom";
// import IAMPHomepage from "./components/IAMPHomepage";
import AboutUs from "./Components/aboutUs"

function App() {


  return (
    <>
    <Routes>
      {/* Route for the Home page */}
  
      {/* <Route path="/IAMPHomepage" element={<IAMPHomepage />} /> */}
      <Route path="/about" element={<AboutUs />} />
    </Routes>
    </>
  )
}

export default App
