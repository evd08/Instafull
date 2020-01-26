import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Like from '../likes/like_hooks';
import CommentForm from '../comments/comment_form';
import MenuPost from '../modal/menu_post_modal';

export default function Post(props) {


  let captionClass = props.post.caption ? 'edit-post-list' : 'hide';

  function handleModal() {
    document.querySelector(`#modal-bg-${props.post.id}`).style.visibility = ("visible")
    document.querySelector(`#menu-post-modal-${props.post.id}`).style.visibility = ("visible")
  }

  let btn = props.post.username === props.currentUser.username ?
    <div></div>
    :
    <button onClick={handleModal} className="option-button">...</button>

  return (
    <li className="main-li">
      <div>

        <div className="main-post-header">
          <div className="main-username">
            <div className="user">
              <div className="mini-profile-pic-div">
                <img className="mini-profile-pic" src={props.post.userPic} />
              </div>
              <Link className="post-user-button" to={`/${props.post.username}`}>{props.post.username}</Link>
            </div>
            <div className="follow-user" id={`follow-user-${props.post.user_id}`}>
              <span>•</span>
              <button className="home-follow">Follow</button>
            </div>
          </div>
          {btn}
        </div>

        <img className="main-posts" src={props.post.photoUrl} />
        <br />

        <div className="below-post-div">
          <Like 
            deleteLike={props.deleteLike} 
            createLike={props.createLike} 
            likeId={props.post.likeId} 
            data={props.data} 
            countLikes={props.post.countLikes}
            fetchLikes={props.fetchLikes}
          />

          <div className={captionClass}>
            <p className="comment-text">
              <Link className="option-button" to={`/${props.post.username}`}>{props.post.username}</Link>
              {props.post.caption}
            </p>
          </div>

          <div className="main-post-caption-div">
            <ul className="comment-text">
            {props.comments.map((comment) => (
              props.post.id === comment.post_id ?
                <li>
                  <p className="option-button"><a href={`/#/${comment.username}`}>{comment.username}</a></p>
                  {comment.body}
                  <br/>
                </li>
              : null
              
            ))}
            </ul>
          </div>

          <CommentForm 
            createComment={props.createComment}
            deleteComment={props.deleteComment}
            currentUserId={props.data.currentUserId}
            postId={props.data.post_id}
          />
        </div>

        <div className="modal-bg" id={`modal-bg-${props.post.id}`}>
          <div className="menu-post-modal" id={`menu-post-modal-${props.post.id}`}>
            <MenuPost 
              postId={props.post.id}
              userId={props.post.user_id}
              deleteFollow={props.deleteFollow}
            />
          </div>
        </div>

      </div>
    </li>
  )
}