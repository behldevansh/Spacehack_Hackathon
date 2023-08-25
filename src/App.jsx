import React from "react";
import Navbar from "./components/Navbar.jsx";
import LandingSection from "./components/LandingSection.jsx";
import Footer from "./components/Footer.jsx";
import Card from "./components/Card.jsx";
import OurMission from "./components/OurMission.jsx";
import OurVission from "./components/OurVission.jsx";

export default function App() {
  return (
    <div>
      <Navbar />
      <LandingSection />
      <OurMission />
      <OurVission />
      <Card />
      <Footer />
    </div>
  );
}
