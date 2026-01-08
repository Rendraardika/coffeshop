import React from "react";
import { Link } from "react-router-dom";

export default function Tentang() {
  return (
    <>
      {/* --- HERO SECTION --- */}
      <section className="about-hero">
        <div className="hero-overlay">
          <div className="container hero-content">
            <span className="page-badge-white">Tentang Kami</span>

            <h1 className="hero-title">
              Lebih dari Sekadar Kopi,
              <br />
              Ini Cerita Tentang Pulang.
            </h1>

            <p className="hero-desc">
              Warung Kopi Mbah Mu: kopi rumahan, suasana sederhana, dan tempat di
              mana setiap obrolan bermakna.
            </p>

           
          </div>
        </div>
      </section>

      {/* --- STORY SECTION --- */}
      <section className="section-story">
        <div className="container story-container">
          {/* Kolom Teks */}
          <div className="story-text">
            <h2 className="section-title">Berawal dari Warung Kecil</h2>

            <p className="text-body">
              Warung Kopi Mbah Mu lahir dari kebiasaan sederhana: menyeduh kopi
              untuk keluarga dan tetangga di teras rumah. Tidak ada mesin mahal,
              hanya teko air panas dan saringan kain.
            </p>

            <p className="text-body">
              Dari obrolan pagi tentang harga cabai, cerita sore pulang kerja,
              hingga diskusi mahasiswa tengah malam, kopi kami selalu menjadi
              pengikatnya.
            </p>

            <p className="quote-text">
              <em>
                "Kami percaya kopi tidak harus mahal. Yang penting hangat, jujur
                rasanya, dan disajikan dengan niat baik."
              </em>
            </p>
          </div>

          {/* Kolom Gambar */}
          <div className="story-image">
            {/* kalau belum punya foto khusus, pakai OIP dulu */}
            <img src="/images/Cappuccino.png" alt="Suasana Warung Kopi Mbah Mu" />
          </div>
        </div>
      </section>

      {/* --- STATS BANNER --- */}
      <section className="stats-banner">
        <div className="container stats-grid">
          <div className="stat-item">
            <div className="stat-num">2019</div>
            <div className="stat-label">Mulai Berdiri</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">4.8</div>
            <div className="stat-label">Rating Pelanggan</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">1000+</div>
            <div className="stat-label">Cangkir Disajikan</div>
          </div>
        </div>
      </section>

      {/* --- VALUES SECTION --- */}
      <section className="section-values">
        <div className="container">
          <h2 className="section-title center-text">Nilai yang Kami Pegang</h2>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">☕</div>
              <h3>Kopi Jujur</h3>
              <p>
                Biji pilihan, seduhan manual sederhana, tanpa gimmick
                berlebihan. Rasa apa adanya.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">🏡</div>
              <h3>Suasana Rumahan</h3>
              <p>
                Warung yang nyaman untuk semua. Mau ngobrol, nugas, atau melamun,
                semua boleh.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Akrab & Terbuka</h3>
              <p>
                Di sini tidak ada sekat antara barista dan pembeli. Kita semua
                teman ngopi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="section-cta">
        <div className="container cta-box">
          <h2>Singgah dan Rasakan Sendiri</h2>
          <p>Pintu kami selalu terbuka. Datang kapan saja, kopi selalu siap.</p>

          <div className="cta-buttons">
            <Link className="btn-primary" to="/menu">
              Lihat Menu
            </Link>
            <Link className="btn-outline" to="/warung">
              Cek Lokasi
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
