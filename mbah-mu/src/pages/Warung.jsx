import React from 'react';
import "../styles/Global.css";

export default function Warung() {
  return (
    <>
      {/* --- HERO SECTION (Deskripsi & Foto Utama) --- */}
      <section className="warung-hero">
        <div className="container warung-hero-container">
          
          {/* BAGIAN KIRI: TEKS DIPERBANYAK */}
          <div className="warung-text">
            <span className="page-badge">Lokasi & Suasana</span>
            
            <h1 className="page-title">Tempat rehat, ngobrol, dan nugas.</h1>
            
            {/* Paragraf 1: Fokus pada suasana/vibes */}
            <p className="page-desc">
              Suasana santai khas warung kopi lawas: hangat, sederhana, dan akrab. 
              Di sini, waktu terasa berjalan lebih lambat. Kami menawarkan ruang tenang 
              untuk kamu yang ingin menjauh sejenak dari hiruk-pikuk kota atau sekadar 
              mencari inspirasi baru.
            </p>

            {/* Paragraf 2: Fokus pada fungsi (nugas/nongkrong) & produk */}
            <p className="page-desc" style={{marginTop: '15px'}}>
              Nikmati seduhan kopi tubruk yang pekat atau kopi susu gula aren yang lembut. 
              Datang sendiri untuk fokus mengerjakan skripsi sangat boleh, datang rame-rame 
              untuk diskusi panjang sampai malam juga oke. Anggap saja rumah simbah sendiri.
            </p>

            <div className="cta-group">
               {/* Jika ingin menambahkan tombol di masa depan, taruh di sini */}
            </div>
          </div>
          
          {/* BAGIAN KANAN: GAMBAR */}
          <div className="warung-image">
            <img src="/images/lawas.png" alt="Suasana Warung" className="img-main" />
          </div>

        </div>
      </section>

      {/* --- INFO CARDS (Jam, Fasilitas, Alamat) --- */}
      <section className="info-section">
        <div className="container">
          <div className="info-grid">
            
            {/* Card 1: Jam Buka */}
            <div className="info-card highlight-card">
              <div className="card-header">
                <span className="emoji-icon">⏰</span>
                <h3>Jam Buka</h3>
              </div>
              <ul className="info-list">
                <li><strong>Senin - Minggu</strong></li>
                <li>06.00 - 23.00 WIB</li>
                <li className="note">*Buka setiap hari (kecuali Lebaran)</li>
              </ul>
            </div>

            {/* Card 2: Fasilitas */}
            <div className="info-card">
              <div className="card-header">
                <span className="emoji-icon">⚡</span>
                <h3>Fasilitas Nugas</h3>
              </div>
              <div className="facilities-icons">
                <div className="facility-item">
                  <span className="icon">📶</span> Free WiFi
                </div>
                <div className="facility-item">
                  <span className="icon">🔌</span> Banyak Colokan
                </div>
                <div className="facility-item">
                  <span className="icon">🪑</span> Kursi Nyaman
                </div>
                <div className="facility-item">
                  <span className="icon">🕌</span> Musholla
                </div>
              </div>
            </div>

            {/* Card 3: Alamat */}
            <div className="info-card">
              <div className="card-header">
                <span className="emoji-icon">📍</span>
                <h3>Lokasi</h3>
              </div>
              <p className="address-text">
                 Jl. Raya ITS, Keputih, Kec. Sukolilo, Surabaya, Jawa Timur 60111<br/>
               
              </p>
              <p className="vibes-text">
                <em>"Vibes tenang, cocok buat meeting santai atau ngerjain skripsi."</em>
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* --- MAP SECTION --- */}
      <section className="map-section">
        <div className="container">
          <h2>Cari kami di sini</h2>
          <div className="map-container">
            <iframe 
              title="Lokasi Warung"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.692015694268!2d112.79165431477494!3d-7.275841794748197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa10ea2ae883%3A0xbe22c55d60ef09c7!2sUniversitas%20Pembangunan%20Nasional%20%22Veteran%22%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1625642435671!5m2!1sid!2sid" 
              width="100%" 
              height="400" 
              style={{border:0, borderRadius: '15px'}} 
              allowFullScreen="" 
              loading="lazy">
            </iframe>
          </div>
        </div>
      </section>
    </>
  );
}