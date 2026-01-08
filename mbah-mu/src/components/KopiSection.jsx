import React from "react";

export default function KopiSection() {
  return (
    <section className="container section" id="kopi" aria-label="Kopi">
      <div className="sectionHead">
        <div className="sectionKicker">Kopi</div>
        <h2 className="sectionTitle">Kopi rumahan, racikan warung</h2>
        <p className="sectionDesc">
          Fokus kami: rasa yang “ngena” dan konsisten. Dari tubruk klasik sampai kopi susu,
          semuanya dibuat dengan takaran sederhana yang bisa kamu request sesuai selera.
        </p>
      </div>

      <div className="infoGrid">
        <div className="infoCard">
          <div className="infoTitle">Biji & Seduh</div>
          <p className="infoText">
            Pilih robusta untuk rasa kuat, arabika untuk aroma lebih wangi. Seduh tubruk
            untuk karakter “warung” yang khas.
          </p>
        </div>

        <div className="infoCard">
          <div className="infoTitle">Level Manis</div>
          <p className="infoText">
            Kamu bisa pilih: normal / less sugar / no sugar. Kopi susu pakai gula aren
            biar rasanya hangat dan tidak “menusuk”.
          </p>
        </div>

        <div className="infoCard">
          <div className="infoTitle">Panas atau Es</div>
          <p className="infoText">
            Sebagian menu tersedia versi panas dan es. Untuk cuaca panas, es kopi susu
            paling aman.
          </p>
        </div>
      </div>
    </section>
  );
}
