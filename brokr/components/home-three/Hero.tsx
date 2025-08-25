"use client";
import React, { useEffect, useState } from "react";
import hero1 from "@/public/images/home-three-hero-1.png";
import hero2 from "@/public/images/home-three-hero-2.png";
import hero3 from "@/public/images/home-three-hero-3.png";
import playButton from "@/public/images/home-three-hero-play-btn.png";
import Image from "next/image";
import ModalVideo from "react-modal-video";
import Link from "next/link";
const Hero = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className="hero-three" style={{direction:"rtl"}}>
      <div className="container">
        <div className="row gy-4 align-items-center">
          <div data-aos="fade-in" className="col-lg-6 hero-content">
            <h2 className="text-white fw-semibold mb-3 display-3 mb-lg-4">מצא את הברוקר המושלם בשבילך – במהירות ובקלות</h2>
            <p className="text-white mb-40">השווה בין ברוקרים מובילים, קבל מידע אמין, ובחר את המתאים ביותר לצרכים הפיננסיים שלך – הכול במקום אחד ובתוך דקות ספורות.</p>
           
         
          </div>
          <div data-aos="fade-in" className="col-lg-6">
            <div className="row align-items-end g-3 hero-three-img">
              <div className="col-md-6">
                <Image src={hero1} className="img-fluid" alt="hero" />
              </div>
              <div className="col-md-6 d-flex gap-3 flex-column">
                <Image src={hero2} alt="hero" />
                <Image src={hero3} alt="hero" />
              </div>
              <div onClick={() => setOpen(true)} className="hero-video">
                <div className="f-center">
                  <Image src={playButton} className="play-btn" alt="" />
                  <i className="ph ph-play-fill fs-4 text-secondary position-absolute"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo channel="youtube" youtube={{ mute: 0, autoplay: 0 }} isOpen={isOpen} videoId="fDgzr5xSYNE" onClose={() => setOpen(false)} />
    </section>
  );
};

export default Hero;
