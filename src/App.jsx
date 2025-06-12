import './App.css'
import { Routes, Route } from "react-router-dom";
import IAMPHomepage from "./Components/IAMPHomepage";
import About from "./Components/About"
import SignIn from "./Components/SignIn"
import SignUp from "./Components/SignUp"
import { BrowserRouter as Router } from "react-router-dom";
import IAMPCategoriesPage from "./Components/IAMPCategoriesPage"
import IAMPContactPage from "./Components/IAMPContactPage"
import IAMPBlogPage from "./Components/IAMPBlogPage"

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
        </Routes>
      </Router>
    </>
  )
}

export default App