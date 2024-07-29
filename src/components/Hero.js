import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../images/hackathon.jpg'; 

export default function Hero() {
    const heroStyle = {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '70vh', // Adjust height as needed
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      color: 'white',
      padding: '2rem',
    };
  
    return (
      <div className="hero" style={heroStyle}>
        <h1>Welcome to the Hackathon Management System</h1>
        <p>Manage your hackathons efficiently and effortlessly.</p>
        <Link to="/register" className="hero__cta">Get Started</Link>
      </div>
    );
  }
  
