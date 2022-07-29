import React from 'react';
import {getProviders, signIn as signIntoProvider} from 'next-auth/react';
import Header from '../../components/header';

const signin = ({providers}) => {
  return (
    <div className='h-screen'>
      <Header />
      <div className='flex flex-col items-center overflow-y-hidden h-[90%] justify-center space-y-8'>
        <img src='/Instagram_logo.png' alt="logo" className='xl:w-80 w-36'/>
        {Object.values (providers).map (provider => (
          <div key={provider.name}>
            <button
              onClick={() => signIntoProvider (provider.id, {callbackUrl: '/'})}
              className="bg-sky-500 font-semibold text-white px-4 py-2 rounded-lg xl:text-2xl text-xl"
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps () {
  const providers = await getProviders ();

  return {
    props: {
      providers: providers,
    },
  };
}

export default signin;
