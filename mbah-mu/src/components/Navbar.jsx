import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navWrap ${scrolled ? "navShadow" : ""}`}>
      <div className="container nav">
        {/* BRAND */}
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
            <div className="brandTagline">kopi rumahan • hangat • akrab</div>
          </div>
        </Link>

        {/* NAV */}
        <nav className="navLinks" aria-label="Navigasi utama">
          {/* HOME */}
          <NavLink to="/" end>
            Home
          </NavLink>

      
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/warung">Warung</NavLink>
          <NavLink to="/tentang">Tentang</NavLink>
        </nav>

        {/* RIGHT */}
        <div className="navRight">
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
