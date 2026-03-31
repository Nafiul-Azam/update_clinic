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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
