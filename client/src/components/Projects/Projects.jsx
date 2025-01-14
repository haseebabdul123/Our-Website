import React, { useRef } from 'react'
import left from "../../assets/left.png"
import right from "../../assets/right.png"
import "./Projects.css"
import Title from '../Title/Title'
const Projects = () => {

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
    const projectData = [
        {
          id: 1,
          icon: "♞",
          title: "Content Strategy",
          description: "We help you create content that aligns perfectly with your brand and engages your audience.",
         
        },
        {
            id: 2,
            icon: "♞",
            title: "Content Strategy",
            description: "We help you create content that aligns perfectly with your brand and engages your audience.",
           
          },
        {
            id: 3,
            icon: "♞",
            title: "Content Strategy",
            description: "We help you create content that aligns perfectly with your brand and engages your audience.",
           
        },
        
        {
            id: 4,
            icon: "♞",
            title: "Content Strategy",
            description: "We help you create content that aligns perfectly with your brand and engages your audience.",
           
        }
        ,
        {
            id: 5,
            icon: "♞",
            title: "Content Strategy",
            description: "We help you create content that aligns perfectly with your brand and engages your audience.",
           
        }
      ];
  return (
    
    <div className="projects-container">
       <img src={right} alt="right" className='right' onClick={slideBack}/>
               <img src={left} alt="left" className='left' onClick={slideNext} />
               <div className="project-cards">
      <ul ref={slider}>
      <li>
    {projectData.map((project) => (
      <div className="card" key={project.id}>
        <div className="face face1">
          <div className="content">
            <div className="icon">{project.icon}</div>
            <h3>{project.title}</h3>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
            <p>{project.description}</p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
    ))}
    </li>
    </ul>
    </div>
  </div>
    
  )
}

export default Projects