import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Services from "./components/Services/Services";
import Title from "./components/Title/Title";
import Team from "./components/Team/Team";
import Testimonials from "./components/Testimonials/Testimonials";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import Logout from "./components/LogOut/Logout";
import AdminLayout from "./components/layout/Admin-Panal";
import AdminUsers from "./pages/AdminUsers";
import AdminContacts from "./pages/AdminContacts";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar /> 
      <Login />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* Hero and Sectioned Layout */}
              <HeroSection />
              <div className="container">
                <Title subTitle="Our Services" title="What We Do" />
                <Services />
                <Title subTitle="Our Works" title="Portfolio & Project" />
                <Projects />
                <Title subTitle="Our Team" title="Creative Staff" />
                <Team />
                <Title subTitle="Testimonials" title="What Clients Say?" />
                <Testimonials />
                <Title subTitle="Let's Talk" title="We develop digital future" />
                <Contact />
              </div>
            </>
          }
        />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<Error/>}/>
        <Route path="/admin" element={<AdminLayout />}>
        <Route path="users" element={<AdminUsers />} />
        <Route path="contacts" element={<AdminContacts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
