import React, { useState } from 'react'
import cross from '../../assets/cross.png'
import './Login.css'
import {  useAuth } from '../../store/auth'
import Navbar from '../NavBar/Navbar'
import { toast } from 'react-toastify'
import { Navigate } from 'react-router-dom'

const Login = () => {

  const [isLoginPopupVisible, setLoginPopupVisible] = useState(false);
  const [user , setUser] = useState({
    email:"",
    password:"",
  })

  const handleChange = (e) =>{
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name] : value,
    })
  }


  const {storeToken , API} = useAuth()
  const handleSubmit = async (e) =>{
    e.preventDefault()
    
    try {
      let response = await fetch(`${API}/api/auth/login` , {
        method:"POST",
         headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(user)
      })

      const responseData = await response.json();
      console.log(responseData);
      
      if (response.ok) {
      
        toast.success("Login successfully");
        setLoginPopupVisible(false)
        
        storeToken(responseData.token)
        setUser({  email: "",password: "" });
      } else {
        toast.error(responseData.extraDetails ? responseData.extraDetails : responseData.message );
        console.log("Invalid Credentials");
      }
    } catch (error) {
      console.error("Error", error);
    }
    
  }

  

  const handleSignInClick = () => {
    setLoginPopupVisible(true);
  };

  const handleClosePopup = () => {
    setLoginPopupVisible(false);
  };

  return (
    <div className="App">
        <Navbar onSignInClick={handleSignInClick}/>
      {isLoginPopupVisible && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <div className="log">
            <h2>Login</h2>
            <img src={cross} alt="" onClick={handleClosePopup}/>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" name='email' id="email" value={user.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name='password' value={user.password} onChange={handleChange} required />
              </div>
              <button type="submit"  className="login-button">
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Login 