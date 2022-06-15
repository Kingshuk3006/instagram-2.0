import React from 'react';
import {FiMoreHorizontal} from 'react-icons/fi';
import {AiOutlineHeart} from 'react-icons/ai';
import {AiFillHeart} from 'react-icons/ai';
import {RiChat3Line} from 'react-icons/ri';
import {HiOutlinePaperAirplane} from 'react-icons/hi';
import {RiBookmarkLine} from 'react-icons/ri';
import { useState } from 'react';
import { BsEmojiSmile } from "react-icons/bs";


const Post = ({postData}) => {

  const [comment, setComment] = useState("")
  // console.log (postData);
  return (
    <div className="border rounded-md my-4">
      <div className="flex flex-row justify-between items-center px-4 my-2">
        <div className="space-x-4 flex items-center">
          <div className="border-red-500 border-2 w-fit rounded-full flex items-center justify-center">
            <img
              src={postData.userImage}
              alt="userImage"
              className="rounded-full p-0.5 object-cover w-12 h-12"
            />
          </div>
          <h1 className="font-semibold text-sm">{postData.username}</h1>
        </div>

        <FiMoreHorizontal className="text-xl" />
      </div>
      <div>
        <img
          src={postData.postImage}
          alt="userImage"
          className="h-96 w-full object-cover"
        />
      </div>
      <div className="text-3xl flex justify-between px-4 my-4">
        <div className=" flex space-x-4">
          <AiFillHeart className="hover:text-zinc-500" />
          <RiChat3Line className="-rotate-90 hover:text-zinc-500" />
          <HiOutlinePaperAirplane className="hover:text-zinc-500" />
        </div>
        <RiBookmarkLine />
      </div>
      <div className='flex px-4 my-4 text-sm'>
        <span className='font-semibold mr-1'>{postData.username}</span>
        <p>{postData.tag}</p>
      </div>
      <form className='flex  justify-between items-center space-x-4 px-4 py-4 border-t'>
      <BsEmojiSmile className='text-2xl' />
      <input type="text" placeholder="Add a comment..." className='w-full focus:outline-none' onChange={(e)=>{ setComment(e.target.value)}}/>
      <button className={`font-semibold ${comment == ""? 'text-sky-300': 'text-sky-500'}`}>Post</button>
      </form>

    </div>
  );
};

export default Post;
