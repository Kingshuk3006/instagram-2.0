import React from 'react';
import Image from 'next/image';
import {BsInstagram} from 'react-icons/bs';
import {BiSearch} from 'react-icons/bi';
import {AiFillHome} from 'react-icons/ai';
import {HiOutlinePaperAirplane} from 'react-icons/hi';
import {GrUploadOption} from 'react-icons/gr';
import {HiOutlineUserGroup} from 'react-icons/hi';
import {FaRegHeart} from 'react-icons/fa';
import {GiHamburgerMenu} from 'react-icons/gi';

const Header = () => {
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
          <AiFillHome className="hover:scale-125 ease-in-out duration-200 hidden md:block" />
          <div className="relative hidden md:block">
            <HiOutlinePaperAirplane className="hover:scale-125 ease-in-out duration-200 rotate-45" />
            <div className="absolute -top-3 -right-1 text-sm bg-red-500 rounded-full h-5 w-5 text-white flex items-center justify-center animate-pulse">
              3
            </div>
          </div>
          <GrUploadOption className="hover:scale-125 ease-in-out duration-200 hidden md:block" />
          <HiOutlineUserGroup className="hover:scale-125 ease-in-out duration-200 hidden md:block" />
          <FaRegHeart className="hover:scale-125 ease-in-out duration-200 hidden md:block" />
          <GiHamburgerMenu className="md:hidden" />
          <img
            src="/person.jpg"
            alt="person"
            className="w-10 h-10 cursor-pointer rounded-full object-cover"
          />
        </div>
      </nav>
    </div>
  );
};

export default Header;
