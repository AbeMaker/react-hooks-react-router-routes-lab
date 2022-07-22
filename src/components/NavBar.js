import React from "react";
import { NavLink } from "react-router-dom";


const NavBar = () => {
  return (
    
    <div className="navbar">
      
      
      <NavLink to="/">Home Page  </NavLink>
      <NavLink to="/movies">Movies Page  </NavLink>
      <NavLink to="/directors">Directors Page  </NavLink>
      <NavLink to="/actors">Actors Page  </NavLink>
      
      
    </div>
    
  );
};

export default NavBar;