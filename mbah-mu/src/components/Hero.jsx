import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container heroGrid">
        {/* kiri: teks */}
        <div className="heroText">
          <div className="heroKicker">Warung Kopi Tradisional</div>

          <h1 className="heroTitle">
            Ngopi sederhana,
            <br />
            rasa yang ngangenin.
          </h1>

          <p className="heroDesc">
            Di Warung Kopi Mbah Mu, kami bikin kopi dengan cara rumahan: tubruk,
            susu, dan varian hangat lain yang cocok buat rehat sebentar.
            Suasananya santai — cocok buat ngobrol, nugas, atau sekadar diam.
          </p>

          <div className="heroActions">
            {/* FIX: tadinya button -> Link */}
            <Link className="btn btnPrimary" to="/menu#daftar-menu">
              Lihat Menu Hari Ini
            </Link>

            {/* FIX: ke warung */}
            <Link className="btn btnGhost" to="/warung">
              Lihat Warung
            </Link>
          </div>

          <div className="heroMeta">
            <div className="metaItem">
              <div className="metaNum">4.8</div>
              <div className="metaLabel">Rating pelanggan</div>
            </div>
            <div className="metaDivider" />
            <div className="metaItem">
              <div className="metaNum">06.00–23.00</div>
              <div className="metaLabel">Jam buka</div>
            </div>
            <div className="metaDivider" />
            <div className="metaItem">
              <div className="metaNum">Murah</div>
              <div className="metaLabel">Harga warung</div>
            </div>
          </div>
        </div>

        {/* kanan: gambar */}
        <div className="heroMedia" aria-label="Foto kopi">
          <div className="heroCard">
            <img
              src="/images/bar.png"
              alt="Seduhan kopi hangat khas warung"
              className="heroImg"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
