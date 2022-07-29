import React, {useEffect} from 'react';
import {FiMoreHorizontal} from 'react-icons/fi';
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai';
import {AiOutHeart} from 'react-icons/ai';
import {RiChat3Line} from 'react-icons/ri';
import {HiOutlinePaperAirplane} from 'react-icons/hi';
import {RiBookmarkLine} from 'react-icons/ri';
import {useState} from 'react';
import {BsEmojiSmile} from 'react-icons/bs';
import Moment from 'react-moment';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore';
import {db} from '../firebase';
import {useSession} from 'next-auth/react';

const Post = ({caption, img, userImg, username, id}) => {
  const {data: session, status} = useSession ();
  // console.log(session)
  const [comment, setComment] = useState ('');
  const [comments, setComments] = useState ([]);
  const [loading, setLoading] = useState (false);
  const [hasliked, setHasLiked] = useState (false);
  const [likes, setLikes] = useState ([]);
  // console.log (postData);
  const addComment = async e => {
    e.preventDefault ();
    if (loading) {
      return;
    }
    setLoading (true);
    const commentToSend = comment;
    setComment ('');

    await addDoc (collection (db, 'posts', id, 'comments'), {
      comment: commentToSend,
      username: session.user.username,
      userimg: session.user.image,
      timestamp: serverTimestamp (),
    });
    setLoading (false);
  };

  const likePost = async () => {
    if (hasliked) {
      await deleteDoc (doc (db, 'posts', id, 'likes', session.user.uid));
    } else {
      await setDoc (doc (db, 'posts', id, 'likes', session.user.uid), {
        username: session.user.username,
      });
    }
  };

  useEffect (
    () => {
      return onSnapshot (
        query (
          collection (db, 'posts', id, 'comments'),
          orderBy ('timestamp', 'desc')
        ),
        snapshot => {
          setComments (snapshot.docs);
        }
      );
    },
    [db, id]
  );

  useEffect (
    () => {
      return onSnapshot (collection (db, 'posts', id, 'likes'), snapshot => {
        setLikes (snapshot.docs);
      });
    },
    [db, id]
  );
  console.log (likes);

  useEffect (
    () => {
      setHasLiked (
        likes.findIndex (like => like.id === session.user.uid) !== -1
      );
    },
    [likes]
  );

  //  console.log(hasliked)

  return (
    <div className="border rounded-md my-4">
      <div className="flex flex-row justify-between items-center px-4 my-2">
        <div className="space-x-4 flex items-center">
          <div className="border-red-500 border-2 w-fit rounded-full flex items-center justify-center">
            <img
              src={userImg}
              alt="userImage"
              className="rounded-full p-0.5 object-cover w-12 h-12"
            />
          </div>
          <h1 className="font-semibold text-sm">{username}</h1>
        </div>

        <FiMoreHorizontal className="text-xl" />
      </div>
      <div>
        <img src={img} alt="userImage" className="h-96 w-full object-contain" />
      </div>
      <div className="text-3xl flex justify-between px-4 my-4">
        <div className=" flex space-x-4">
          {hasliked
            ? <AiFillHeart className="text-red-500 hover:scale-125 transition-all duration-300" onClick={likePost}/>
            : <AiOutlineHeart
                className={`hover:scale-125 transition-all duration-300}`}
                onClick={likePost}
              />}
          <RiChat3Line className="-rotate-90 hover:text-zinc-500" />
          <HiOutlinePaperAirplane className="hover:text-zinc-500" />
        </div>
        <RiBookmarkLine />
      </div>
      <p className='-my-3 font-medium px-4'>{likes.length} likes</p>
      <div className="flex px-4 my-4 text-md">
        <span className="font-semibold mr-1">{username}</span>
        <p className="">{caption}</p>
      </div>
      <div className="px-6 py-2">
        {comments.length > 0 &&
          <div className="space-y-3 overflow-scroll scrollbar-thin scrollbar-track-blue-400">
            {comments.map (comment => {
              return (
                <div className="flex items-center justify-between" key={comment.data ().timestamp}>
                  <div className="flex items-center justify-start space-x-2">
                    <img
                      src={comment.data ().userimg}
                      alt="image"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex justify-start space-x-2">
                      <span className="font-medium">
                        {comment.data ().username}
                      </span>
                      <span>{comment.data ().comment}</span>
                    </div>
                  </div>
                  <Moment fromNow className="text-sm opacity-50">
                    {comment.data ().timestamp?.toDate ()}
                  </Moment>
                </div>
              );
            })}
          </div>}
      </div>
      <form className="flex justify-between items-center space-x-4 px-4 py-4 border-t ">
        <BsEmojiSmile className="text-2xl" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="w-full focus:outline-none"
          onChange={e => {
            setComment (e.target.value);
          }}
          value={comment}
        />
        <button
          className={`font-semibold ${loading ? 'text-sky-300' : 'text-sky-500'}`}
          onClick={addComment}
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default Post;
