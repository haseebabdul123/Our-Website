import React, { useRef } from "react";
import left from "../../assets/left.png";
import right from "../../assets/right.png";
import "./Testimonials.css";
import testimonialsData from "../../data/TestimonialsData";

const Testimonials = () => {

  const slider = useRef(null); 
  let tx = 0; 
  
  const slideBack = () => {
    if (slider.current) {
      const cardWidth = slider.current.children[0].offsetWidth + 35; 
      const visibleWidth = slider.current.parentElement.offsetWidth; 
      const maxTranslateX = visibleWidth - slider.current.scrollWidth; 
      const slideStep = cardWidth * 0.1; 
  
      if (tx > maxTranslateX) {
        tx -= slideStep; 
        if (tx < maxTranslateX) tx = maxTranslateX; 
        slider.current.style.transition = 'transform 0.2s ease'; 
        slider.current.style.transform = `translateX(${tx}px)`; 
      }
    }
  };
  
  const slideNext = () => {
    if (slider.current) {
      const cardWidth = slider.current.children[0].offsetWidth + 35; // Card width + gap
      const slideStep = cardWidth * 0.1; // Small step slide for smooth effect (half of the card width)
  
      // Move forward by a small step instead of large jump
      if (tx < 0) {
        tx += slideStep; // Move forward slowly
        if (tx > 0) tx = 0; // Ensure tx doesn't exceed the 0 limit
        slider.current.style.transition = 'transform 0.2s ease'; // Smooth transition effect
        slider.current.style.transform = `translateX(${tx}px)`; // Apply the slide
      }
    }
  };
  
  return (
    <div className="test-section">
      <img src={left} alt="left" className="left" onClick={slideNext} />
      <div className="test-cards">
        <ul ref={slider}>
          <li>
            {testimonialsData.map((service) => (
              <div key={service.id} className="test-card">
                <div className="user-info">
                  {/* <img src={service.icon} alt={service.clientName} /> */}
                  <h3>{service.clientName}</h3>
                  <span>{service.location}</span>
                  <div>{service.rating}</div>
                </div>
                <p>{service.review}</p>
              </div>
            ))}
          </li>
        </ul>
      </div>
      <img src={right} alt="right" className="right" onClick={slideBack} />
    </div>
  );
};

export default Testimonials;
