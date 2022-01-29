import React from 'react';
import '../style/header.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import logo from '../Data/logoChristoumiv2-removebg-preview.png';

import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header class ="bar">
    <div>
      <nav>
        <div className="container">
          <Typography class = "typography">
              <img class = "logo" src={logo} alt="Logo"/>
              <Box><h2> Welcome to Christoumi - Vers l'avenir </h2></Box>
          </Typography>
          <div class="menu-appbar">
            <ul className="navbar">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="pricing">
                  Pricing
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/team">
                  Team
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    </header>
  );
}

export default Header;

