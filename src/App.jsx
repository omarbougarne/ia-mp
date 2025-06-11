import './App.css'
import { Routes, Route } from "react-router-dom";
import IAMPHomepage from "./Components/IAMPHomepage";
import About from "./Components/About"
import SignIn from "./Components/SignIn"
import SignUp from "./Components/SignUp"
import { BrowserRouter as Router } from "react-router-dom";
import IAMPCategoriesPage from "./Components/IAMPCategoriesPage"
import IAMPContactPage from "./Components/IAMPContactPage"
import IAMPNavbar from "./Components/IAMPNavbar"
import IAMPFooter from "./Components/IAMPFooter"
import IAMPPricingPage from "./Components/IAMPPricingPage"


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
      <Route path="/IAMPContactPage" element={<IAMPContactPage />} />
      <Route path="/IAMPNavbar" element={<IAMPNavbar />} />

      <Route path="/IAMPCategoriesPage" element={<IAMPCategoriesPage />} />
      <Route path="/IAMPFooter" element={<IAMPFooter />} />
      <Route path="/Pricing" element={<IAMPPricingPage />} />

      
      </Routes>
      </Router>
    </>
  )
}

export default App
