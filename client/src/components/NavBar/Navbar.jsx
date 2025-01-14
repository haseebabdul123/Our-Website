import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import "./Navbar.css";
import cross from '../../assets/cross.png';
import logo from "../../assets/2.png";
import { useAuth } from "../../store/auth";
import { toast } from "react-toastify";

const Navbar = ({ onSignInClick }) => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const { storeToken, isLoggedIn , API } = useAuth();
  const [sticky, setSticky] = useState(false);
  const [isRegistrationPopupVisible, setRegistrationPopupVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleRegisterClick = () => setRegistrationPopupVisible(true);
  const handleCloseRegisterPopup = () => setRegistrationPopupVisible(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();
      
      if (response.ok) {
        toast.success("Registered Successfully");
        setRegistrationPopupVisible(false);
        storeToken(res_data.token); 
        setUser({ username: "", email: "", phone: "", password: "" });
      } else {
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message );
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <div className="header">
      {isRegistrationPopupVisible && (
        <div className="popup-overlay" onClick={handleCloseRegisterPopup}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <div className="log">
              <h2>Register</h2>
              <img src={cross} alt="close" onClick={handleCloseRegisterPopup} />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">User Name</label>
                <input
                  type="text"
                  name="username"
                  value={user.username}
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="number"
                  name="phone"
                  value={user.phone}
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleInput}
                  required
                />
              </div>
              <button type="submit" className="login-button">
                Register
              </button>
            </form>
          </div>
        </div>
      )}
      <nav className={`container ${sticky ? "dark-nav" : ""}`}>
        {/* <img src={logo} alt="logo" className="logo" /> */}
        <div className="logo">WigWag</div>
        <div className={`menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <ScrollLink to="hero-section" smooth={true} offset={0} duration={500}>
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="services-section" smooth={true} offset={-260} duration={500}>
                Services
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="projects-container" smooth={true} offset={-260} duration={500}>
                Projects
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="team-section" smooth={true} offset={-215} duration={500}>
                Team
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="test-section" smooth={true} offset={-300} duration={500}>
                Testimonials
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="contact" smooth={true} offset={-300} duration={500}>
                Contact Us
              </ScrollLink>
            </li>
            {isLoggedIn ? (
              <li className="btn1">
                <RouterLink to="/logout">Log Out</RouterLink>
              </li>
            ) : (
              <>
                <li className="btn1" onClick={handleRegisterClick}>
                  Sign Up
                </li>
                <li className="btn1" onClick={onSignInClick}>
                  Sign In
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
