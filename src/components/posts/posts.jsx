import React from 'react';
import './posts.css';

const Posts = () => {
  return (
    <div>
      <section className='posts-container'>
        <p className='text-box text-md'>
          <span id='posts'>123</span>
          <span>Posts</span>
        </p>

        <p className='text-box text-md'>
          <span id='posts'>123</span>
          <span>Followers</span>
        </p>

        <p className='text-box text-md'>
          <span id='posts'>123</span>
          <span>Following</span>
        </p>
      </section>
    </div>
  )
}

export default Posts;