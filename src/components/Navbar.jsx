import React from "react";
import { NavLink } from "react-router-dom";


const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "green",
    textDecoration: "none",
    color: "white",
  };
  

function NavBar() {


    return (
     <div>
          <NavLink to="/" 
  
            style={linkStyles}
          
            activeStyle={{
              background: "darkblue",
          }}
          >
  
  Home
        </NavLink>
        <NavLink
          to="/about"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
  
  
  About
        </NavLink>
        <NavLink
          to="/login"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
  
  Login
        </NavLink>
  
  
          <h1>Navigation</h1>
        </div>
    );
}


export default NavBar;    