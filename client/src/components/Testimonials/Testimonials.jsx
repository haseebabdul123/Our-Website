import React, { useRef } from 'react'
import left from "../../assets/left.png"
import right from "../../assets/right.png"
import haseeb from "../../assets/haseeb.jpeg"
import afnan from "../../assets/afnan.jpg"
import rayyan from "../../assets/rayyan.jpg"
import "./Testimonials.css"
import Title from '../Title/Title'
const Testimonials = () => {

    const slider = useRef()
    let tx = 0
    const slideBack = () =>{
        if(tx > -50){
            tx -= 25
        }
            slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideNext = () =>{
        if(tx < 0){
            tx += 25
        }
            slider.current.style.transform = `translateX(${tx}%)`
    }
      const testimonialsData = [
        {
          id: 1,
          icon: afnan ,
          name: "Content Strategy",
          contury:"Pakistan",
          description: "We help you create content that aligns perfectly with your brand and engages your audience We help you create content that aligns perfectly  with your We help you create content that aligns perfectly  with your brand and engages your audience. brand and engages your audience..",
        },
        {
            id: 2,
            icon: haseeb ,
            name: "Content Strategy",
            contury:"Pakistan",
            description: "We help you create content that aligns perfectly with your brand and engages your audience.We help you create content that aligns perfectly We help you create content that aligns perfectly  with your brand and engages your audience. with your brand and engages your audience.",
          },
          {
            id: 3,
            icon: rayyan ,
            name: "Content Strategy",
            contury:"Pakistan",
            description: "We help you create content that aligns perfectly with your brand and engages your audience.We help you create contentWe help you create content that aligns perfectly  with your brand and engages your audience. that aligns perfectly  with your brand and engages your audience.",  
          },
          {
            id: 4,
            icon: "♞" ,
            name: "Content Strategy",
            contury:"Pakistan",
            description: "We help you create content We help you create content that aligns perfectly  with your brand and engages your audience. that aligns perfectly  with your brand and engages your audienceWe help you create content that aligns perfectly  with your brand and engages your audience.",  
          }
      ];
  return (
    <div className="test-section">
        <img src={right} alt="right" className='right' onClick={slideBack}/>
         <img src={left} alt="left" className='left' onClick={slideNext} />
    <div className="test-cards">
    <ul ref={slider}>
        <li>
      {testimonialsData.map((service) => (
        <div
          key={service.id}
          className='test-card'
        >
        <div className="user-info">
        <img src={service.icon} alt="" />
          <h3>{service.name}</h3>
          <span>{service.contury}</span>
          </div>
          <p>{service.description}</p>
        
        </div>
        

      ))}
        </li>
        </ul>
    </div>
  </div>
  )
}

export default Testimonials