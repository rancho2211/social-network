import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return (

    <div className={classes.item}>

      <img src='https://insideout.band/wp-content/uploads/2017/03/social-media.png' />
     {props.message }

      <div>
        <span> Like </span> {props.likesCount}

      </div>
    </div>
  )

}

export default Post;