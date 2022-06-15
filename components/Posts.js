import React from 'react';
import Post from './Post';

const DUMMY_DATA = [
  {
    id: 1,
    username: 'Kingshuk Sarkar',
    userImage: '/person.jpg',
    postImage: '/postImage.jpg',
    tag: 'Frisky Friday!!',
  },
  {
    id: 1,
    username: 'Kingshuk Sarkar',
    userImage: '/person.jpg',
    postImage: '/postImage.jpg',
    tag: 'Frisky Friday!!',
  },
  {
    id: 1,
    username: 'Kingshuk Sarkar',
    userImage: '/person.jpg',
    postImage: '/postImage.jpg',
    tag: 'Frisky Friday!!',
  },
  {
    id: 1,
    username: 'Kingshuk Sarkar',
    userImage: '/person.jpg',
    postImage: '/postImage.jpg',
    tag: 'Frisky Friday!!',
  },
  {
    id: 1,
    username: 'Kingshuk Sarkar',
    userImage: '/person.jpg',
    postImage: '/postImage.jpg',
    tag: 'Frisky Friday!!',
  },
];

const Posts = () => {
  return (
    <div>
      {DUMMY_DATA.map (postData => {
        return <Post postData={postData} />;
      })}
    </div>
  );
};

export default Posts;
