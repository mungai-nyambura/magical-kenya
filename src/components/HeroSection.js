import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/elephants.mp4' autoPlay loop muted />
      <h1>ADVENTURE AWAITS AT MAGICAL KENYA</h1>
      <p>What are you waiting for?</p>
    </div>
  );
}

export default HeroSection;
