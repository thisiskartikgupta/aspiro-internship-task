
import React from 'react';

import ServicesSectionSVG from '../../assets/svg/services_section.svg';
import ServicesSVG1 from '../../assets/svg/services_1.svg';
import ServicesSVG2 from '../../assets/svg/services_2.svg';
import ServicesSVG3 from '../../assets/svg/services_3.svg';
import ServicesSVG4 from '../../assets/svg/services_4.svg';
import ServicesBottomSVG from '../../assets/svg/services_bottom.svg';

import './ServicesSection.css';

const ServicesSection = () => {
  const data = [
    {
      title: 'Calculated Weather',
      description:
      'Built Wicket longer admire do barton vanity itself do in it.',
    },
    {
      title: 'Best Flights',
      description:
      'Engrossed listening. Park gate sell they west hard for the.',
    },
    {
      title: 'Local Events',
      description:
      'Barton vanity itself do in it. Preferred to men it engrossed listening.',
    },
    {
      title: 'Customization',
      description:
       'We deliver outsourced aviation services for military customers',
    },
  ];

  return (
    <div id="services" className="services-section">

      <div className="category">CATEGORY</div>
      <div className="subheading">We Offer Best Services</div>

      <img className="svg" src={ServicesSectionSVG}/>
      <img className="bottom-svg" src={ServicesBottomSVG}/>

      <div className="card-container">

        <div className="card">
          <img className="card-svg-1" src={ServicesSVG1}/>
          <div className="title">{data[0].title}</div>
          <div className="description">{data[0].description}</div>
        </div>

        <div className="card">
          <img className="card-svg-2" src={ServicesSVG2}/>
          <div className="title">{data[1].title}</div>
          <div className="description">{data[1].description}</div>
        </div>

        <div className="card">
          <img className="card-svg-3" src={ServicesSVG3}/>
          <div className="title">{data[2].title}</div>
          <div className="description">{data[2].description}</div>
        </div>

        <div className="card">
          <img className="card-svg-4" src={ServicesSVG4}/>
          <div className="title">{data[3].title}</div>
          <div className="description">{data[3].description}</div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
