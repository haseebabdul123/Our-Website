import React, { useState } from "react";
import "./Contact.css"
import mail from '../../assets/mail-icon.png'
import phone from '../../assets/phone-icon.png'
import location from '../../assets/location-icon.png'
import { useAuth } from "../../store/auth";
import { toast } from "react-toastify";
const Contact = () => {

  const defaultContactForm = {
    username:"",
    email:"",
    message:""
  }
  const [contact , setContact] = useState(defaultContactForm)
  const [userData , setUserData] = useState(true)

  const {user , API} = useAuth()

  if(userData && user){
    setContact({
      username:user.username,
      email:user.email,
      message:"",
    })
    setUserData(false)
  }
    const handleInput = (e) =>{
      let name = e.target.name;
      let value = e.target.value;

      setContact({
        ...user , 
        [name] : value
      })
    }

    const handleSubmit = async (e) =>{
      e.preventDefault()

      try {
        const response = await fetch(`${API}/api/form/contact`, {
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          }
          ,
          body: JSON.stringify(contact)
        })
        if(response.ok){
          toast.success("Message sent succesfully")
          setContact(defaultContactForm)
        }
      } catch (error) {
        toast.error("Faild to send Message")
          
      }

      
    }
  return (
    <div className="contact">
      <div className="contact-col">
        <h2>{
          user ? `Hii, ${contact.username}😊`
          : `Welcome to Our Website`
          }</h2>
        <p>We welcome your feedback, questions, and ideas. Reach out through our contact form or find our details below. Your input is essential as we work to provide innovative and outstanding digital solutions for your business.</p>
        <ul>
          <li><img src={mail} alt="" />abdulhaseeb8997@gmail.com</li>
          <li><img src={phone} alt="" />+92 3179737416</li>
          <li><img src={location} alt="" />Nowshera Peshawar</li>
        </ul>
      </div>
      <div className="contact-col">
      <h3>Get in Touch with Us!</h3>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" name="username" placeholder="Enter your name" value={contact.username} onChange={handleInput} required/>
          <label>Email</label>
          <input type="text" name="email" placeholder="Enter your email" value={contact.email} onChange={handleInput} required/>
          <label>Message</label>
          <textarea name="message" id="" rows="6" value={contact.message} onChange={handleInput} placeholder="How can we help you? Feel free to get in touch!" required></textarea>
          <button type="submit" className="btn dark-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
