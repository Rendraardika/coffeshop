import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Status menu HP (buka/tutup)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navWrap ${scrolled ? "navShadow" : ""}`}>
      <div className="container nav">
        {/* --- 1. BRAND --- */}
        <Link className="brand" to="/" aria-label="Warung Kopi Mbah Mu">
          <div className="brandMark" aria-hidden="true">
            <img
              className="brandLogoInner"
              src="/images/hero-kopi.jpg"
              alt="Logo Warung Kopi Mbah Mu"
            />
          </div>
          <div className="brandText">
            <div className="brandName">Warung Kopi Mbah Mu</div>
            {/* Tagline disembunyikan di CSS HP biar rapi */}
            <div className="brandTagline">kopi rumahan • hangat • akrab</div>
          </div>
        </Link>

        {/* --- 2. TOMBOL HAMBURGER (Baru) --- */}
        {/* Hanya muncul di HP lewat CSS */}
        <button 
          className="navToggle" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Buka Menu"
        >
          {/* Ikon Garis Tiga (SVG) */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" /> // Ikon X (Close)
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" /> // Ikon Hamburger
            )}
          </svg>
        </button>

        {/* --- 3. NAV LINKS (Menu Tengah) --- */}
        {/* Tambahkan class 'open' jika menuOpen = true */}
        <nav className={`navLinks ${menuOpen ? "open" : ""}`} aria-label="Navigasi utama">
          <NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/menu" onClick={() => setMenuOpen(false)}>Menu</NavLink>
          <NavLink to="/warung" onClick={() => setMenuOpen(false)}>Warung</NavLink>
          <NavLink to="/tentang" onClick={() => setMenuOpen(false)}>Tentang</NavLink>
          
          {/* Tombol Pesan juga kita masukkan ke menu dropdown di HP biar akses mudah */}
          <div className="mobileAction">
            <Link className="btn btnPrimary w-full" to="/menu" onClick={() => setMenuOpen(false)}>
              Pesan Sekarang
            </Link>
          </div>
        </nav>

        {/* --- 4. RIGHT (Desktop Only) --- */}
        <div className="navRight desktopOnly">
          <Link className="navFind" to="/warung">
            <span className="dot" aria-hidden="true" />
            Cari Warung
          </Link>
          <Link className="btn btnPrimary" to="/menu">
            Pesan Sekarang
          </Link>
        </div>
      </div>
    </header>
  );
}