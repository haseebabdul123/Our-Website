import React from "react";
import { Navigate, NavLink, Outlet } from "react-router-dom";
import "./admin.css";
import { useAuth } from "../../store/auth";

const AdminLayout = () => {

         const {user , isLoading}  = useAuth()

         if(isLoading){
          return <h1>Loading ....</h1>
         }
         if(!user.isAdmin){
          return <Navigate to="/"/>
         }
  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <ul>
          <li>
            <NavLink
              to="/admin/users"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/contacts"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contacts
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
