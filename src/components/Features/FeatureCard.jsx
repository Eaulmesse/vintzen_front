import React from 'react';

const FeatureCard = ({ title, description, preview, isSmall }) => {
  const imageClasses = isSmall
    ? '-bottom-[60px] h-auto w-[350px] xl:w-[350px] 2xl:w-[300px] md:-right-[60px] rounded-xl relative md:top-10 md:transform md:translate-y-0 -rotate-[0.2rad]'
    : 'h-fit w-[700px] xl:w-[750px] 2xl:w-[800px] rounded-xl absolute md:-right-[100px] xl:-right-[150px] top-0 md:top-1/2 md:transform md:-translate-y-1/2 -rotate-[0.1rad]';

  return (
    <div className="w-custom xl:w-custom-md  m-auto h-fit p-5 my-5 rounded-lg shadow-xl readex-pro relative flex flex-col md:flex-row bg-custom-purple/80 text-white overflow-hidden">
      <div className="w-full md:w-1/3 space-y-5 flex flex-col justify-center items-center md:items-start">
        <p className='text-3xl z-30'>{title}</p>
        <p className='text-sm z-30'>{description}</p>
      </div>
      <div className='w-full md:w-2/3 flex justify-center md:justify-end relative '>
        <img 
          src={preview} 
          className={imageClasses}
          alt={`Preview`}
        />
      </div>
    </div>
  );
};

export default FeatureCard;