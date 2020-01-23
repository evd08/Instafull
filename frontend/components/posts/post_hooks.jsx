import React from 'react';
import { Link } from 'react-router-dom';
import Like from '../likes/like_hooks';
import CommentForm from '../comments/comment_form';
import MenuPost from '../modal/menu_post_modal';

export default function Post(props) {

  let captionClass = props.post.caption ? 'edit-post-list' : 'hide';

  function handleModal() {
    document.querySelector('.modal-bg').style.visibility = ("visible")
    document.querySelector('.menu-post-modal').style.visibility = ("visible")
  }

  return (
    <li className="main-li">
      <div>

        <div className="main-post-header">
          <div className="user">
            <div className="mini-profile-pic-div">
              <img className="mini-profile-pic" src={props.currentUser.picUrl} />
            </div>
            <Link className="post-user-button" to={`/${props.post.username}`}>{props.post.username}</Link>
          </div>
          <button onClick={handleModal} className="option-button">...</button>
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
              <Link className="option-button" to={`/users/${props.post.user_id}`}>{props.post.username}</Link>
              {props.post.caption}
            </p>
          </div>

          <div className="main-post-caption-div">
            <ul className="comment-text">
            {props.comments.map((comment) => (
              props.post.id === comment.post_id ?
                <li>
                  <p className="option-button">{comment.username}</p>
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

        <div className="modal-bg">
          <div className="menu-post-modal">
            <MenuPost 
              postId={props.post.id}
            />
          </div>
        </div>

      </div>
    </li>
  )
}