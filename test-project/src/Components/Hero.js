import React from 'react';
import backgroundImage from '../computer.webp';

const HeroSection = () => {
  return (
    <div
      className="hero-section d-flex justify-content-center align-items-center position-relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '80vh',
      }}
    >
      {/* Overlay with increased opacity */}
      <div
        className="overlay position-absolute"
        style={{
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
        }}
      ></div>

      {/* Content */}
      <div className="text-left position-absolute px-3 text-white" style={{ bottom: '180px', left: '20px' }}>
        <h4 className="display-5 fw-bold mb-4">Computer Engineering</h4>
        <h4 className="">142,765 Computer Engineers follow this</h4>
      </div>
    </div>
  );
};

export default HeroSection;
