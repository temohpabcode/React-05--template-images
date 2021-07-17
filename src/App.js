import React from 'react';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import FooterSection from './Components/FooterSection';
import FeatureSection from './Components/FeatureSection';
import CardSection from './Components/CardSection';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <FeatureSection />
      <HeroSection />
      <CardSection />
      <FooterSection />
    </div>
  );
}

export default App;
