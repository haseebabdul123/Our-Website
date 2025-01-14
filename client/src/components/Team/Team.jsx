import React, { useRef } from 'react'
import "./Team.css"
import left from "../../assets/left.png"
import right from "../../assets/right.png"
import teamMembers from '../../data/TeamData'
const Team = () => {
          const slider = useRef()
            let tx = 0
            const slideBack = () =>{
                if(tx > -60){
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
   

    
  return (
    <div className="team-section">
    <img src={right} alt="right" className='right' onClick={slideBack}/>
     <img src={left} alt="left" className='left' onClick={slideNext} />
      <div className="team-cards">
        <ul ref={slider}>
          <li>
        {teamMembers.map((member , index) => (
          <div
            key={index}
            className="team-card"
          >
            <img src={member.image} alt={member.name} className="team-image" />
            <div className="team-member">    
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            </div>
        
          </div>
        ))}
        </li>
        </ul>
      </div>
    </div>
  )
}

export default Team