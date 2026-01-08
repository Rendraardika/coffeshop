import React from "react";
import { useNavigate } from "react-router-dom";

export default function SectionCard({
  title,
  subtitle,
  ctaText,
  ctaTo,
  image,
  badge,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!ctaTo) return;

    // kalau ada hash (#daftar-menu) tetap aman
    navigate(ctaTo);

    // optional: paksa scroll ke hash (kadang RR tidak auto scroll)
    const hash = String(ctaTo).split("#")[1];
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  };

  return (
    <article className="sectionCard">
      <div className="sectionImgWrap">
        <img src={image} alt={title} className="sectionImg" />
        {badge && <span className="sectionBadge">{badge}</span>}
      </div>

      <div className="sectionBody">
        <h3 className="sectionTitle">{title}</h3>
        <p className="sectionSubtitle">{subtitle}</p>

        {/* TETAP BUTTON biar CSS tidak berubah */}
        <button className="btn-outline wFull" type="button" onClick={handleClick}>
          {ctaText}
        </button>
      </div>
    </article>
  );
}
