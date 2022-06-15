import React from 'react';
import {useEffect} from 'react';
import Story from './Story';

const Stories = ({photo}) => {
  console.log(photo)
  return <div className='flex space-x-4 overflow-x-scroll py-4 scrollbar-thumb-gray-900 scrollbar-track-gray-100 scrollbar-thin mx-2 px-2 md:mx-0 border rounded-sm'>{photo.map((item)=>{
    return <Story image={item.url} title={item.title}/>
  })}</div>;
};

export default Stories;
