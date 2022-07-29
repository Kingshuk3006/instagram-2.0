import React from 'react';
import {useSession, signIn, signOut} from 'next-auth/react';

const Miniprofile = () => {
  const {data: session, status} = useSession ();
  return (
    <div className='px-4'>
      <div className="flex justify-between my-4 items-center text-md">
        <div className="flex items-center space-x-4">
          <img
            src={session?.user?.image}
            className="w-16 h-16 rounded-full object-cover "
          />
          <div>
            <h1 className='font-semibold text-lg'>{session.user.name}</h1>
            <h1 className='text-zinc-700 opacity-50'>Welcome to instagram</h1>
          </div>
        </div>

        <button className=' text-sky-500 font-bold cursor-pointer text-base' onClick={()=> signOut()}>Sign out</button>
      </div>

    </div>
  );
};

export default Miniprofile;
