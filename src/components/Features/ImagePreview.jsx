import React from 'react';

const ImagePreview = ({ src, index, total }) => {
  const baseClasses = 'w-full h-auto rounded-xl shadow-2xl';
  const positionClasses = total > 1
    ? index === 0
      ? 'md:w-[400px] xl:w-[350px] 2xl:w-[300px] md:absolute md:-right-[150px] top-0 md:top-1/2 md:transform md:-translate-y-1/2 md:-rotate-[0.2rad]'
      : 'md:w-[400px] xl:w-[350px] 2xl:w-[300px] md:absolute md:-right-[50px] top-0 md:top-1/2 md:transform md:-translate-y-1/2'
    : 'md:w-[820px] xl:w-[750px] 2xl:w-[800px] md:absolute md:-right-[100px] xl:-right-[150px] top-0 md:top-1/2 md:transform md:-translate-y-1/2 md:-rotate-[0.2rad]';

  return (
    <img 
      src={src} 
      className={`${baseClasses} ${positionClasses}`}
      alt={`Preview ${index}`}
    />
  );
};

export default ImagePreview;