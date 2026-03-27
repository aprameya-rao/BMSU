import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import Alumni from "./pages/Alumni";
import Home from "./pages/Home";
import Campuses from "./pages/Campuses"; 
import CampusTemplate from "./pages/CampusTemplate"; // NEW: The dynamic individual campus page
import CampusLife from "./pages/CampusLife";
import Contact from "./pages/Contact";
import Placements from "./pages/Placements";
import Privacy from "./pages/Privacy";
import Research from "./pages/Research";
import Student from "./pages/Student";
import Terms from "./pages/Terms";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/about" replace />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/alumni" element={<Alumni />} />
        
        {/* The main campuses grid page */}
        <Route path="/campuses" element={<Campuses />} />
        
        {/* The dynamic route for individual campuses */}
        <Route path="/campuses/:campusId" element={<CampusTemplate />} />
        
        <Route path="/campus-life" element={<CampusLife />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/research" element={<Research />} />
        <Route path="/student" element={<Student />} />
        <Route path="/students" element={<Student />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer />
    </>
  );
}