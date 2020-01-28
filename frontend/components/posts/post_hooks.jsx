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

  function handleFollow(id) {
    props.createFollow({followed_id: id})
    document.querySelectorAll(`#follow-user-${id}`).forEach(el => el.style.visibility = 'hidden')
  }

  let btn = props.post.username === props.currentUser.username ?
    <div></div>
    :
    <button onClick={handleModal} className="option-button">...</button>

  const preview = props.post.userPic ? <img className="mini-profile-pic" src={props.post.userPic} /> :
    <svg className="profile-pic-img" fill="gray" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z" /></svg>
    
  return (
    <li className="main-li">
      <div>

        <div className="main-post-header">
          <div className="main-username">
            <div className="user">
              <div className="mini-profile-pic-div">
                {preview}
              </div>
              <Link className="post-user-button" to={`/${props.post.username}`}>{props.post.username}</Link>
            </div>
            <div className="follow-user" id={`follow-user-${props.post.user_id}`}>
              <span>•</span>
              <button onClick={() => handleFollow(props.post.user_id)} className="home-follow">Follow</button>
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
                <li key={comment.id}>
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