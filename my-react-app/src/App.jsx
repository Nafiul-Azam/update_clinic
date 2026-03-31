import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/Home/HeroSection";
import OffersSection from "./Components/Home/OffersSection";
import DoctorsSection from "./Components/Home/DoctorsSection";
import ServicesSection from "./Components/Home/ServicesSection";
import Stats from "./Components/Home/Stats";
import Location from "./Components/Home/Location.jsx";
import Footer from "./Components/Footer";
import Form from "./Components/Home/Form";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <OffersSection />
      <DoctorsSection />
      <ServicesSection />
      <Stats />
      <Location />
      <Form />
      <Footer />
    </>
  );
}

export default App;
