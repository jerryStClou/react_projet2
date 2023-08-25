import React from 'react'
import { Link } from 'react-router-dom'
import classes from "./Navbar.module.css";

export default function Navbar() {
  return (
    
        <nav className={classes.navbar}>
            <Link to="/">Accueil</Link>
            <Link to="/contact">Contact</Link>
          </nav>
    
  )
}
