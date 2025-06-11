import './App.css'
import { Routes, Route } from "react-router-dom";
import IAMPHomepage from "./Components/IAMPHomepage";
import About from "./Components/About"
import { BrowserRouter as Router } from "react-router-dom";

function App() {


  return (
    <>
    <Router>
    <Routes>
      {/* Route for the Home page */}
  
  <Route path="/IAMPHomepage" element={<IAMPHomepage />} />
      <Route path="/About" element={<About />} />
      </Routes>
      </Router>
    </>
  )
}

export default App
