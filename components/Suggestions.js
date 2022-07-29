import React from 'react';
import faker from 'faker';
import suggestions from '../database/suggestion';
import {data} from 'autoprefixer';

const Suggestions = () => {
  // console.log(Data)
  return (
    <div className="px-4 mt-10">
      <h1 className="flex justify-between items-center py-4">
        <span className="text-lg font-medium opacity-80">
          Suggestions for you
        </span>
        <span className="font-bold">See All</span>
      </h1>
      <div className="space-y-3">
        {suggestions.map (user => {
          return (
            <div className="flex space-x-4 items-center justify-between" key={user.name}>
              <div className='flex items-center justify-start space-x-4'>
                <div className="w-16">
                  <img
                    src={user.image}
                    className="rounded-full w-16 h-16 object-cover"
                  />
                </div>
                <div>
                  <h1 className="font-semibold text-lg">{user.name}</h1>
                  <p className="opacity-60">{user.bio}</p>
                </div>
              </div>
              <div>
                <button className="bg-sky-200 text-sky-600 px-4 py-1 font-semibold rounded-md">
                  Follow
                </button>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Suggestions;
