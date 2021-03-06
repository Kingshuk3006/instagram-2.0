import React, { useState } from 'react';
import Image from 'next/image';
import {BsInstagram} from 'react-icons/bs';
import {BiSearch} from 'react-icons/bi';
import {AiFillHome} from 'react-icons/ai';
import {HiOutlinePaperAirplane} from 'react-icons/hi';
import {GrUploadOption} from 'react-icons/gr';
import {HiOutlineUserGroup} from 'react-icons/hi';
import {FaRegHeart} from 'react-icons/fa';
import {GiHamburgerMenu} from 'react-icons/gi';
import {useSession, signIn, signOut} from 'next-auth/react'
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';
import DrawerSection from './DrawerSection';

const Header = () => {
  const {data: session, status} = useSession()
  console.log(session)
  // console.log(session)
  const [open, setOpen] = useRecoilState(modalState)
  const [anchorEl, setAnchorEl] = useState (null);
  const opendrawer = Boolean (anchorEl);
  const handleClick = event => {
    setAnchorEl (event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl (null);
  };
  return (
    <div>
      <nav className="flex items-center justify-between py-2 bg-slate-50 px-4 md:px-8 lg:px-16 xl:px-28 z-100 border-b-zinc-200 border-b">
        <div className="relative w-32 h-18 hidden md:block">
          <img src="/Instagram_logo.png" layout="fill" objectFit="contain" />
        </div>
        <div className="md:hidden">
          <BsInstagram className="text-2xl" />
        </div>
        <div className="hidden md:block">
          <div className="flex items-center space-x-2 border border-black rounded-md hover:bg-zinc-100 ">
            <BiSearch className="h-5 w-5 mx-2" />
            <input
              type="text"
              className="py-2 pr-4 text-md placeholder:text-md rounded-md focus:outline-none text-sm md:text-md hover:bg-zinc-100"
              placeholder="Search"
            />
          </div>
        </div>

        <div className="flex flex-row items-center justify-end space-x-4 child:text-2xl">
        <Link href="/">
          <AiFillHome className="hover:scale-125 ease-in-out duration-200 hidden" />
        </Link>
          {session ? <div className='flex flex-row items-center justify-end space-x-4 child:text-2xl'><div className="relative hidden md:block">
            <HiOutlinePaperAirplane className="hover:scale-125 ease-in-out duration-200 rotate-45" />
            <div className="absolute -top-3 -right-1 text-sm bg-red-500 rounded-full h-5 w-5 text-white flex items-center justify-center animate-pulse">
              3
            </div>
          </div>
          <div className="md:hidden">
          <DrawerSection />
          </div>
          <GrUploadOption className="hover:scale-125 ease-in-out duration-200" onClick={()=> setOpen(true)}/>
          <HiOutlineUserGroup className="hover:scale-125 ease-in-out duration-200 hidden md:block" />
          <FaRegHeart className="hover:scale-125 ease-in-out duration-200 hidden md:block" />
          
          <img
            src={session?.user?.image ? session.user.image : '/user.png'}
            alt="person"
            className="w-10 h-10 cursor-pointer rounded-full object-cover"
          /></div> : <h1 className='font-semibold cursor-pointer text-xl' onClick={()=> signIn()}>Sign In</h1>}
        </div>
      </nav>
    </div>
  );
};

export default Header;
