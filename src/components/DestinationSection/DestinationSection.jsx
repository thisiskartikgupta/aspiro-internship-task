
import React from 'react';

import DestinationRomeSVG from '../../assets/svg/destination_rome.svg';
import DestinationLondonSVG from '../../assets/svg/destination_london.svg';
import DestinationEuropeSVG from '../../assets/svg/destination_europe.svg';
import DestinationDecoreSVG from '../../assets/svg/destination_decore.svg';

import './DestinationSection.css';

const DestinationSection = () => {
  return (
    <div id="destination" className="destination-section">

      <div className="category">Top Selling</div>
      <div className="subheading">Top Destinations</div>
      <img className="decore-svg" src={DestinationDecoreSVG}/>

      <div className="card-container">
        <div className="destination-card">
          <img className="destination-card" src={DestinationRomeSVG}/>
        </div>

        <div className="destination-card">
          <img className="destination-card" src={DestinationLondonSVG}/>
        </div>

        <div className="destination-card">
          <img className="destination-card" src={DestinationEuropeSVG}/>
        </div>
      </div>
    </div>
  );
};

export default DestinationSection;
