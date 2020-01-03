import React, { useEffect, useState } from 'react';
import Navbar from '../navbar/navbar_container';
import EditPost from './edit_post_form_hooks';
import CommentForm from '../comments/comment_form';
import EditCommentForm from '../comments/edit_comment_form';
import { Link } from 'react-router-dom';

export default function PostPreview(props) {
  const [commentId, setCommentId] = useState();

  function handleClick(e) {
    e.preventDefault();
    // props.deletePost(props.post.id);
    document.querySelector('.modal-bg').style.visibility = "visible"
    document.querySelector('.update-post-modal').style.visibility = "visible"
  }

  function handleComment(id) {
    // e.preventDefault();
    setCommentId(id)
    document.querySelector('.modal-bg').style.visibility = "visible"
    document.querySelector('.update-comment-modal').style.visibility = "visible"
  }
  
  // useEffect(() => {
  //   props.fetchComments();
  // });

  let captionClass = props.post.caption ? 'edit-post-list' : 'hide'

  return (
    <div className="outer-show-div">
      <Navbar />
      <div className="post-preview-main-div">

        <div className="post-preview-div">

          <div className="post-preview-img-div">
            <img className="post-preview-img" src={props.post.photoUrl} alt="" />
          </div>

          <div className="edit-div">
            <div className="post-preview-username-div">
              <div className="user">
                <div className="mini-profile-pic-div">
                  <img className="mini-profile-pic" src={props.currentUser.picUrl} />
                </div>
                <p className="post-user-button">{props.currentUser.username}</p>
              </div>
              <div className="option-button">
                <button
                  className="post-preview-button"
                  onClick={handleClick}
                >
                  ...
                </button>
              </div>
            </div>

            {/* <div className={captionClass}> */}

              {/* <div className="edit-page-caption">
                <div className="option-button">
                  <a className="edit-username" href="/#/users/page">{props.currentUser.username}</a>
                </div>
                <div className="comment-text">{props.post.caption}</div>
              </div> */}
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
                  <div className="comment-div">
                    <li>
                      <p className="option-button">{comment.username}</p>
                      {comment.body}
                      <br />
                    </li>
                    < button
                      className = "post-preview-button"
                      onClick = { () => handleComment(comment.id) }
                    >
                    ...
                    </button>
                  </div>
                    : null
                ))}
              </ul>
            </div>

            {/* </div> */}

            <CommentForm
              createComment={props.createComment}
              deleteComment={props.deleteComment}
              currentUserId={props.currentUser.id}
              postId={props.post.id}
            />
          </div>
        </div>

      </div>

      <div className="modal-bg">
        
      <div className="update-post-modal">
        <EditPost
          deletePost={props.deletePost}
          updatePost={props.updatePost}
          post={props.post}
        />
      </div>
      
      <div className="update-comment-modal">
        <EditCommentForm 
          post={props.post}
          commentId={commentId}
          deleteComment={props.deleteComment}
        />
      </div>
      </div>

    </div>
  )
}
