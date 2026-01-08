import React from "react";

const MENU = [
  { name: "Kopi Tubruk", desc: "Robusta/arabika, tubruk klasik, wangi dan nendang.", price: "8.000" },
  { name: "Kopi Susu Mbah Mu", desc: "Kopi + susu + gula aren, creamy tapi tetap kopi.", price: "12.000" },
  { name: "Es Kopi Susu", desc: "Versi dingin yang segar, cocok siang hari.", price: "13.000" },
  { name: "Americano Warung", desc: "Hitam pahit ringan, buat yang suka clean taste.", price: "15.000" },
  { name: "Teh Tarik", desc: "Teh susu ditarik, manis dan hangat.", price: "10.000" },
  { name: "Jahe Susu", desc: "Hangat, pedas jahe lembut—cocok malam.", price: "12.000" },
  { name: "Kopi Jahe", desc: "Kopi hangat dengan sentuhan jahe.", price: "10.000" },
  { name: "Coklat Kental", desc: "Coklat hangat, kental, dan nyaman.", price: "12.000" },
];

export default function MenuSection() {
  return (
    <section className="container section" id="menu" aria-label="Menu">
      <div className="sectionHead">
        <div className="sectionKicker">Menu</div>
        <h2 className="sectionTitle">Menu Kopi Warung</h2>
        <p className="sectionDesc">
          Pilihan sederhana khas warung. Bisa panas atau es (beberapa item),
          dan bisa request gula normal / less / tanpa gula.
        </p>
      </div>

      <div className="menuGrid">
        {MENU.map((item) => (
          <article key={item.name} className="menuCard">
            <div className="menuTop">
              <h3 className="menuName">{item.name}</h3>
              <div className="menuPrice">Rp {item.price}</div>
            </div>
            <p className="menuDesc">{item.desc}</p>

            <button className="btn btnGhost btnFull" type="button">
              Pesan
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
