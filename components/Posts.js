import React, {useEffect} from 'react';
import Post from './Post';
import {useState} from 'react';
import {collection, onSnapshot, orderBy, query} from 'firebase/firestore';
import {Snapshot} from 'recoil';
import {db} from '../firebase';
import {data} from 'autoprefixer';

const Posts = () => {
  const [posts, setPosts] = useState ([]);

  useEffect (
    () => {
      return onSnapshot (
        query (collection (db, 'posts'), orderBy ('timestamp', 'desc')),
        snapshot => {
          setPosts (snapshot.docs);
        }
      );
    },
    [db]
  );

  return (
    <div>
      {posts.map (post => {
        return (
          <Post
            key={post.uid}
            id={post.id}
            username={post.data ().username}
            userImg={post.data ().profileImg}
            img={post.data ().image}
            caption={post.data ().caption}
          />
        );
      })}
    </div>
  );
};

export default Posts;
