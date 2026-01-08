import React from "react";
import Hero from "../components/Hero";
import SectionCard from "../components/SectionCard";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="container sectionGrid">
        <SectionCard
          title="Kopi Tubruk Mbah Mu"
          subtitle="Kental, wangi, dan hangat."
          ctaText="Lihat Menu"
          ctaTo="/menu#daftar-menu"
          image="/images/tubruk.png"
          badge="Paling Laris"
        />
        <SectionCard
          title="Ngopi Santai di Warung"
          subtitle="Tempat ngobrol dan rehat."
          ctaText="Lihat Lokasi"
          ctaTo="/warung"
          image="/images/lawas.png"
          badge="Suasana"
        />
      </section>
    </>
  );
}
