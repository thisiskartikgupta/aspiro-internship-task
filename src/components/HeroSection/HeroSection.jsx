
import React from 'react';

import PlaySVG from '../../assets/svg/play.svg';
import HighlightSVG from '../../assets/svg/hero_highlight.svg';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">

      <div className="heading">BEST DESTINATIONS AROUND THE WORLD</div>
      <div className="subheading">
        Travel, enjoy<br/>and live a new<br/>and full life
      </div>
      <div className="content">
        <div>Built Wicket longer admire do barton vanity itself do in it.</div>
        <div>Preferred to sportsmen it engrossed listening. Park gate</div>
        <div>sell they west hard for the.</div>
      </div>

      <div className="container">
        <button className="find-out-more">Find Out More</button>
        <img className="play-btn" src={PlaySVG}/>
        <div className="play-description">Play Demo</div>
      </div>
      <img className="highlight" src={HighlightSVG}/>
    </div>
  );
};

export default HeroSection;
