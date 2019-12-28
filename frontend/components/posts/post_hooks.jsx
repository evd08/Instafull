import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Like from './like_hooks';
import CommentForm from '../comments/comment_form'

export default function Post(props) {

  let like = props.post.countLikes < 2 ? "like" : "likes";
  let captionClass = props.post.caption ? 'main-post-caption-div' : 'hide';

  return (
    <li className="main-li">
      <div>

        <div className="main-post-header">
          <div className="user">
            <div className="mini-profile-pic-div">
              <img className="mini-profile-pic" src={props.currentUser.picUrl} />
            </div>
            <Link className="post-user-button" to="/users/page">{props.post.username}</Link>
          </div>
          <button className="option-button">...</button>
        </div>

        <img className="main-posts" src={props.post.photoUrl} />
        <br />

        <div className="below-post-div">
          <Like 
            deleteLike={props.deleteLike} 
            createLike={props.createLike} 
            likeId={props.post.likeId} 
            data={props.data} 
          />

          <div className="count-likes">
            <p>{props.post.countLikes} {like}</p>
          </div>

          <div className={captionClass}>
            <p className="comment-text">
              <Link className="option-button" to={`/users/${props.post.user_id}`}>{props.post.username}</Link>
              {props.post.caption}
            </p>
          </div>

          <div>
            
          </div>

          <CommentForm 
            createComment={props.createComment}
            deleteComment={props.deleteComment}
            currentUserId={props.data.currentUserId}
            postId={props.data.post_id}
          />
        </div>

      </div>
    </li>
  )
}