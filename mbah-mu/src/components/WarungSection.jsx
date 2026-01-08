import React from "react";

export default function WarungSection() {
  return (
    <section className="container section" id="warung" aria-label="Warung">
      <div className="sectionHead">
        <div className="sectionKicker">Warung</div>
        <h2 className="sectionTitle">Suasana santai buat rehat & ngobrol</h2>
        <p className="sectionDesc">
          Warung Kopi Mbah Mu dibuat untuk nyaman: duduk sebentar, ngobrol ringan,
          atau nugas tanpa tekanan.
        </p>
      </div>

      <div className="warungGrid">
        <div className="warungCard">
          <div className="warungLabel">Jam Buka</div>
          <div className="warungValue">06.00 – 23.00</div>
          <div className="warungNote">Bisa berubah saat hari besar.</div>
        </div>

        <div className="warungCard">
          <div className="warungLabel">Fasilitas</div>
          <div className="warungValue">Colokan • WiFi • Tempat duduk</div>
          <div className="warungNote">Tanya ke kasir untuk password WiFi.</div>
        </div>

        <div className="warungCard">
          <div className="warungLabel">Lokasi</div>
          <div className="warungValue">Dekat kampus / perumahan</div>
          <div className="warungNote">Nanti bisa kamu ganti alamat aslinya.</div>
        </div>
      </div>
    </section>
  );
}
