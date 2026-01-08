import React from "react";

export default function TentangSection() {
  return (
    <section className="container section" id="tentang" aria-label="Tentang">
      <div className="sectionHead">
        <div className="sectionKicker">Tentang</div>
        <h2 className="sectionTitle">Cerita singkat Warung Kopi Mbah Mu</h2>
        <p className="sectionDesc">
          Warung ini lahir dari kebiasaan sederhana: bikin kopi yang enak tanpa ribet.
          Kami ingin orang yang datang pulang dengan hati lebih tenang—meski cuma habis satu gelas.
        </p>
      </div>

      <div className="aboutGrid">
        <div className="aboutCard">
          <h3 className="aboutTitle">Misi</h3>
          <p className="aboutText">
            Menyajikan kopi rumahan dengan harga warung, rasa konsisten, dan suasana akrab.
          </p>
        </div>

        <div className="aboutCard">
          <h3 className="aboutTitle">Nilai</h3>
          <p className="aboutText">
            Ramah • sederhana • jujur dalam rasa. Kalau kurang manis/kurang kuat, bisa request.
          </p>
        </div>

        <div className="aboutCard">
          <h3 className="aboutTitle">Kontak</h3>
          <p className="aboutText">
            WhatsApp: 08xx-xxxx-xxxx <br />
            Instagram: @mbahmu.kopi
          </p>
        </div>
      </div>
    </section>
  );
}
