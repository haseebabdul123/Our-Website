import React, { useEffect } from "react";
import { useAuth } from "../../store/auth";
import { useNavigate } from "react-router-dom"; // For redirection after logout

const Logout = () => {
  const { LogoutUser } = useAuth();
  const navigate = useNavigate(); // Hook for programmatic navigation

  useEffect(() => {
    LogoutUser(); // Call the logout function
    navigate("/"); // Redirect to the home page or another route
  }, [LogoutUser, navigate]); // Include navigate in the dependency array

  return (
    <div className="log-out">
      <p>You are being logged out...</p>
    </div>
  );
};

export default Logout;
