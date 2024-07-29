
import React from 'react';
import Hero from '../components/Hero'; // Adjust path to components folder
import Features from '../components/Features'; // Adjust path to components folder
import Events from '../components/Events';

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <Features />
      <Events />
    </div>
  );
}

