import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";

import Menu from "./pages/Menu";
import Warung from "./pages/Warung";
import Tentang from "./pages/Tentang";
import Pesan from "./pages/Pesan";

export default function App() {
  return (
    <div className="page">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        
          <Route path="/menu" element={<Menu />} />
          <Route path="/warung" element={<Warung />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/pesan" element={<Pesan />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
