import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/Home/HeroSection";
import OffersSection from "./Components/Home/OffersSection";
import DoctorsSection from "./Components/Home/DoctorsSection";
import ServicesSection from "./Components/Home/ServicesSection";
import Stats from "./Components/Home/Stats";
import Location from "./Components/Home/Location.jsx";
import Footer from "./Components/Footer";
import Form from "./Components/Home/Form";
import Gallery from "./Pages/Gallery";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsConditions from "./Pages/TermsConditions";
import FAQ from "./Pages/FAQ";
import Support from "./Pages/Support";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Doctors from "./Pages/Doctors";
import Contact from "./Pages/Contact";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <OffersSection />
              <DoctorsSection />
              <ServicesSection />
              <Stats />
              <Location />
              <Form />
            </>
          }
        />

        <Route path="/gallery" element={<Gallery />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
