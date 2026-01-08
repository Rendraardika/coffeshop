import React from "react";
import "../styles/Global.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footerBrand">Warung Kopi Mbah Mu</div>
          <p className="footerDesc">
            Kopi rumahan dengan suasana warung yang hangat. Cocok buat rehat,
            ngobrol, dan nugas.
          </p>
          <div className="footerSmall">
            © {new Date().getFullYear()} Warung Kopi Mbah Mu. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}