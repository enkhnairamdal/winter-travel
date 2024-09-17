import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Purpose from '../Purpose';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Purpose/>
      <Footer />
    </>
  );
}

export default Home;