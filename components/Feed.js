import React from 'react';
import Posts from './Posts';
import Stories from './Stories';
import Miniprofile from './Miniprofile';
import Suggestions from './Suggestions';
import {useSession, signIn, signOut} from 'next-auth/react';

const Feed = () => {
  const {data: session, status} = useSession ();
  return (
    <main
      className={`${session ? 'grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto' : 'flex flex-col h-[80vh] justify-center items-center'}`}
    >
      {session &&
        <section className="col-span-2">
          <Stories />
          <Posts />
        </section>}
      {session &&
        <section className={`hidden xl:block`}>
          <Miniprofile />
          <Suggestions />
        </section>}
      {!session &&
        <div className="flex flex-col h-[80vh] justify-center items-center">
          <img src="Instagram_logo.png" className="xl:w-fit w-36" />
          <h1 className="xl:text-7xl md:text-4xl text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-pink-600 to-blue-700 pb-8">
            Sign In to get Started
          </h1>
        </div>}

    </main>
  );
};

export default Feed;
