import React, { useState } from "react";
import "./Services.css"; 
import servicesData from "../../data/ServicesData";
const Services = () => {
  const [activeCard, setActiveCard] = useState(1);
  

  return (
    <div className="services-section">
      <div className="services-cards">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className={`service-card ${activeCard === service.id ? "active" : ""}`}
            onMouseEnter={() => setActiveCard(service.id)}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  

     
  );
};

export default Services;
