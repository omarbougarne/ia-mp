import './App.css'
import { Routes, Route } from "react-router-dom";
import IAMPHomepage from "./Components/IAMPHomepage";
import AboutUs from "./Components/AboutUs"
import { BrowserRouter as Router } from "react-router-dom";
import IAMPCategoriesPage from "./Components/IAMPCategoriesPage"
import IAMPContactPage from "./Components/IAMPContactPage"

function App() {


  return (
    <>
    <Router>
    <Routes>
      {/* Route for the Home page */}
  
  <Route path="/IAMPHomepage" element={<IAMPHomepage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/IAMPContactPage" element={<IAMPContactPage />} />

      <Route path="/IAMPCategoriesPage" element={<IAMPCategoriesPage />} />
      </Routes>
      </Router>
    </>
  )
}

export default App
