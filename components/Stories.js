import React from 'react';
import {useEffect} from 'react';
import Story from './Story';
import stories from '../database/stories'

const Stories = () => {

  // console.log(photo)
  return <div className='flex space-x-4 overflow-x-scroll py-4 scrollbar-thumb-gray-900 scrollbar-track-gray-100 scrollbar-thin mx-2 px-2 md:mx-0 border rounded-sm'>{stories.map((item, i)=>{
    return <Story image={item.image} title={item.title} key={i}/>
  })}</div>;
};

export default Stories;
