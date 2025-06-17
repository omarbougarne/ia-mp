import './App.css'
import './index.css';
import { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter as Router, useLocation } from "react-router-dom";

import IAMPHomepage from "./Components/IAMPHomepage";
import About from "./Components/About"
import SignIn from "./Components/SignIn"
import SignUp from "./Components/SignUp"
import Benefits from "./Components/Benefits"
import OurHistory from "./Components/OurHistory"
import AdmissionPolicy from "./Components/AdmissionPolicy"
import IAMPCategoriesPage from "./Components/IAMPCategoriesPage"
import IAMPContactPage from "./Components/IAMPContactPage"
import IAMPBlogPage from "./Components/IAMPBlogPage"
import IAMPNavbar from "./Components/IAMPNavbar"
import IAMPFooter from "./Components/IAMPFooter"
import IAMPPricingPage from "./Components/IAMPPricingPage"
import IAMPPartnersPage from "./Components/IAMPPartnersPage"
import Membership from "./Components/Membership";
import Profile from "./Components/Profile";
import Loading from './Components/Loading';

// Create a wrapper to monitor location changes
const AppRoutes = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 400); // Delay for smoother UX
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <>
      {loading && <Loading />}
      <Routes>
        <Route path="/" element={<IAMPHomepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/our-history" element={<OurHistory />} />
        <Route path="/admission-policy" element={<AdmissionPolicy />} />
        <Route path="/IAMPContactPage" element={<IAMPContactPage />} />
        <Route path="/IAMPNavbar" element={<IAMPNavbar />} />
        <Route path="/IAMPCategoriesPage" element={<IAMPCategoriesPage />} />
        <Route path="/IAMPFooter" element={<IAMPFooter />} />
        <Route path="/Pricing" element={<IAMPPricingPage />} />
        <Route path="/IAMPPartnersPage" element={<IAMPPartnersPage />} />
        <Route path="/Membership" element={<Membership />} />
        <Route path="/blog" element={<IAMPBlogPage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
