import React from "react";
import "./HeroSection.css";
import { Link as ScrollLink } from "react-scroll";
const HeroSection = () => {
  return (
    <section className="hero-section container">
      <div className="hero-text">
        <h1>Grow Smarter, <span> Digitally.</span></h1>
        <p>We craft innovative web solutions, stunning designs, and lead-driven strategies to help your business thrive. Partner with us to turn your vision into growth, smarter and faster.</p>
        <button className="btn">
          <ScrollLink to="contact" smooth={true} offset={-300} duration={500}>
                        Get Started
          </ScrollLink>
        </button>
      </div>
  </section>
  );
};

export default HeroSection;
