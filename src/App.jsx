import './App.css'
import './index.css'; // or './App.css' depending on your setup
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
import IAMPBlogPage from "./Components/IAMPBlogPage"
import IAMPNavbar from "./Components/IAMPNavbar"
import IAMPFooter from "./Components/IAMPFooter"
import IAMPPricingPage from "./Components/IAMPPricingPage"
import IAMPPartnersPage from "./Components/IAMPPartnersPage"
import Membership from "./Components/Membership"

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Route par défaut pour la page d'accueil */}
          <Route path="/" element={<IAMPHomepage />} />
          
          {/* Autres routes */}
          <Route path="/IAMPHomepage" element={<IAMPHomepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<SignIn />} /> {/* Correction de "singin" en "signin" */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/IAMPContactPage" element={<IAMPContactPage />} />
          <Route path="/IAMPCategoriesPage" element={<IAMPCategoriesPage />} />
          
          {/* Nouvelle route pour la page de blog */}
          <Route path="/blog" element={<IAMPBlogPage />} />
          <Route path="/partners" element={<IAMPPartnersPage />} />
           <Route path="/Membership" element={<Membership />} />
        </Routes>
      </Router>
    </>
  )
}

export default App