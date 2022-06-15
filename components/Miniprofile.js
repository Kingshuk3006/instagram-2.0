import React from 'react';

const Miniprofile = () => {
  return (
    <div className='px-4'>
      <div className="flex justify-between my-4 items-center text-md">
        <div className="flex items-center space-x-4">
          <img
            src="/person.jpg"
            className="w-16 h-16 rounded-full object-cover "
          />
          <div>
            <h1 className='font-semibold'>Kingshuk Sarkar</h1>
            <h1 className='text-zinc-700'>Welcome to instagram</h1>
          </div>
        </div>

        <button className='text-sm text-sky-500 font-bold'>Sign out</button>
      </div>

    </div>
  );
};

export default Miniprofile;
