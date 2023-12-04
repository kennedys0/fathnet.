import React from 'react';

import config from '../config/index.json';

const MainHeroImage = () => {
  const { mainHero } = config;
  return (
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        className="h-85 w-full object-cover sm:h-100 md:h-100 lg:w-full lg:h-full"
        src={mainHero.img}
        alt="Family"
      />
    </div>
  );
};

export default MainHeroImage;
