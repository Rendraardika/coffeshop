// src/pages/Menu.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Global.css";

const MENU_ITEMS = [
  // --- Kategori: Kopi ---
  {
    id: "kopi-tubruk",
    category: "signature",
    name: "Kopi Tubruk",
    desc: "Hitam, pekat, ampas turun perlahan.",
    price: 8000,
    img: "/images/tubruk.png",
    tag: "Paling Laris",
  },
  {
    id: "kopi-hitam",
    category: "signature",
    name: "Kopi Hitam",
    desc: "Pahitnya pas, aromanya kuat, cocok buat rehat.",
    price: 12000,
    img: "/images/robusta.png",
    tag: "Favorit",
  },
  {
    id: "es-kopi-aren",
    category: "signature",
    name: "Es Kopi Gula Aren",
    desc: "Kekinian tapi tetap dengan sentuhan klasik.",
    price: 15000,
    img: "/images/aren.jpg",
    tag: null,
  },

  // --- Kategori: Camilan ---
  {
    id: "pisang-goreng",
    category: "snack",
    name: "Pisang Goreng",
    desc: "Manis, renyah, teman terbaik kopi hitam.",
    price: 10000,
    img: "/images/pis.png",
    tag: "Wajib Coba",
  },
  {
    id: "roti-bakar",
    category: "snack",
    name: "Roti Bakar",
    desc: "Isi coklat keju melimpah.",
    price: 12000,
    img: "/images/roti.png",
    tag: null,
  },
  {
    id: "mendoan-hangat",
    category: "snack",
    name: "Mendoan Hangat",
    desc: "Gurih asin, pas buat yang laper nanggung.",
    price: 8000,
    img: "/images/mendoa.jpg",
    tag: null,
  },
];

export default function Menu() {
  const drinks = MENU_ITEMS.filter((item) => item.category === "signature");
  const snacks = MENU_ITEMS.filter((item) => item.category === "snack");

  // Kartu Menu (tanpa tombol Pesan)
  const MenuCard = ({ item }) => (
    <article className="menu-card">
      <div className="card-image-wrapper">
        <img className="menu-img" src={item.img} alt={item.name} />
        {item.tag && <div className="menu-tag">{item.tag}</div>}
      </div>

      <div className="card-content">
        <div className="menu-header">
          <h3 className="menu-name">{item.name}</h3>
          <span className="menu-price">
            Rp {new Intl.NumberFormat("id-ID").format(item.price)}
          </span>
        </div>

        <p className="menu-desc">{item.desc}</p>
      </div>
    </article>
  );

  return (
    <>
      {/* HERO ala "Tentang" (background + overlay) */}
      <section className="menu-hero-bg">
        <div className="menu-hero-overlay">
          <div className="container menu-hero-content">
            <span className="page-badge-white">Daftar Menu</span>

            <h1 className="menu-hero-title">
              Perut Kenyang,
              <br />
              Hati Senang.
            </h1>

            <p className="menu-hero-desc">
              Racikan kopi otentik dan jajanan pasar yang bikin kangen rumah.
              Pilih yang kamu suka, yang penting hangat.
            </p>

           
          </div>
        </div>
      </section>

      {/* KONTEN MENU */}
      <section id="daftar-menu" className="container section">
        <h2 className="category-title">☕ Aneka Kopi</h2>
        <div className="menu-grid">
          {drinks.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section className="container section">
        <h2 className="category-title">🍌 Teman Ngopi (Camilan)</h2>
        <div className="menu-grid">
          {snacks.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}
