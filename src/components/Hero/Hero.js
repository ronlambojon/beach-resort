import React from 'react';

const Hero = ({ children, hero='defaultHero' }) => (
  <div>
    <header className={hero}>
      {children}
    </header>
  </div>
);

export default Hero;