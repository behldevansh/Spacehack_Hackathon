import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingSection from "./components/LandingSection";
import Footer from "./components/Footer";
import Card from "./components/Card";
import OurMission from "./components/OurMission";
import OurVission from "./components/OurVission";

export default function App() {
  return (
    // <div>
    //   <Navbar />
    //   <LandingSection />
    //   <OurMission />
    //   <OurVission />
    //   <Card />
    //   <Footer />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
        <Route path="/" element={<Navbar />}>

      <Routes/>
    <BrowserRouter/>
  );
}
