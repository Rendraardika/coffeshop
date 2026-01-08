import React from 'react';
import "../styles/Global.css";

export default function Kopi() {
  return (
    <>
      {/* --- HERO SECTION --- */}
      <section className="hero-section">
        <div className="container hero-container">
          
          {/* Kolom Kiri: Teks */}
          <div className="hero-text">
            <span className="page-badge">Menu Andalan</span>
            <h1 className="page-title">Kopi Rumahan,<br />Rasa yang Ngangenin.</h1>
            <p className="page-desc">
              Dari tubruk klasik sampai kopi susu hangat. 
              Diseduh sederhana, dinikmati pelan-pelan sambil cerita.
            </p>
            <button className="btn-primary">Pesan Sekarang</button>
          </div>

          {/* Kolom Kanan: Gambar Utama */}
          <div className="hero-image-wrapper">
            <img 
              src="/images/Hot.png" 
              alt="Segelas Kopi Panas" 
              className="hero-img" 
            />
          </div>
        </div>
      </section>

      {/* --- FEATURES SECTION --- */}
      <section className="features-section">
        <div className="container">
          <div className="info-grid">
            
            {/* Card 1: Biji Pilihan (Ini yang tadi diedit) */}
            <div className="info-card">
              {/* PERHATIKAN DISINI: Ada pembuka dan penutup div */}
              <div className="card-img-full">
                <img src="/images/robusta.jpg" alt="Biji Kopi" />
              </div> {/* <--- Pastikan penutup ini ada! */}
              
              <h3 className="info-title">Biji Pilihan</h3>
              <p className="info-text">
                Robusta dampit untuk rasa kuat, atau arabika gayo untuk aroma wangi.
              </p>
            </div>

            {/* Card 2 */}
            <div className="info-card">
              <div className="card-icon">
                <img src="/images/bar.png" alt="Cara Seduh" />
              </div>
              <h3 className="info-title">Cara Seduh</h3>
              <p className="info-text">
                Tubruk khas warung—tanpa mesin, jujur, pekat, dan hangat.
              </p>
            </div>

            {/* Card 3 */}
            <div className="info-card">
              <div className="card-icon">
                <img src="/images/gula.png" alt="Request Gula" />
              </div>
              <h3 className="info-title">Bisa Request</h3>
              <p className="info-text">
                Tentukan manismu: Manis normal, less sugar, atau tanpa gula.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}