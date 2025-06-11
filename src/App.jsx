import './App.css'
import { Routes, Route } from "react-router-dom";
import IAMPHomepage from "./Components/IAMPHomepage";
import About from "./Components/About"
import SignIn from "./Components/SignIn"
import SignUp from "./Components/SignUp"
import Benefits from "./Components/Benefits"
import OurHistory from "./Components/OurHistory"
import AdmissionPolicy from "./Components/AdmissionPolicy"
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
      <Route path="/about" element={<About />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/benefits" element={<Benefits />} />
      <Route path="/our-history" element={<OurHistory />} />
      <Route path="/admission-policy" element={<AdmissionPolicy />} />
      <Route path="/IAMPContactPage" element={<IAMPContactPage />} />
      <Route path="/IAMPCategoriesPage" element={<IAMPCategoriesPage />} />
      </Routes>
      </Router>
    </>
  )
}

export default App
