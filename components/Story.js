import React from 'react';
import Image from 'next/image';

const Story = ({image, title}) => {
  return (
    <div className='flex flex-col items-start space-y-2'>
    <div className='w-16 h-16 flex items-center justify-center rounded-full border-red-500 border-2 hover:scale-110 duration-300'>
      <img src={image} layout="fill" className='w-14 h-14 object-cover rounded-full'/>
    </div>
      <p className='text-sm truncate w-16'>{title}</p>
    </div>
  );
};

export default Story;
