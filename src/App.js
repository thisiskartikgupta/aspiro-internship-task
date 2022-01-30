
import React from 'react';

import NavBar from './components/NavBar/Navbar';

import HeroSection from './components/HeroSection/HeroSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import DestinationSection from
  './components/DestinationSection/DestinationSection';
import BookATripSection from './components/BookATripSection/BookATripSection';
import SubscribeSection from './components/SubscribeSection/SubscribeSection';

import Footer from './components/Footer/Footer';
import HeroEllipseSVG from './assets/svg/hero_ellipse.svg';
import HeroCurveSVG from './assets/svg/hero_curve.svg';
import HeroTravellerSVG from './assets/svg/hero_traveller.svg';
import FooterDecoreSVG from './assets/svg/footer_decore.svg';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <img className="ellipse" src={HeroEllipseSVG}/>
      <img className="hero-curve" src={HeroCurveSVG}/>
      <img className="hero-traveller" src={HeroTravellerSVG}/>
      <nav>
        <NavBar/>
      </nav>
      <main>
        <HeroSection/>
        <ServicesSection/>
        <DestinationSection/>
        <BookATripSection/>
        <SubscribeSection/>
      </main>

      <footer>
        <Footer/>
        <div className="all-rights-reserved">All rights reserved@jadoo.co</div>
      </footer>
      <img className="footer-decore" src={FooterDecoreSVG}/>
    </div>
  );
};

export default App;
