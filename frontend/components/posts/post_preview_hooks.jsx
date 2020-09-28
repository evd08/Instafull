import React, { useEffect, useState } from 'react';
import Navbar from '../navbar/navbar_container';
import EditPost from './edit_post_form_hooks';
import CommentForm from '../comments/comment_form';
import EditCommentForm from '../comments/edit_comment_form';
import Like from '../likes/like_hooks';

export default function PostPreview(props) {
  const [commentId, setCommentId] = useState();

  function handleClick(e) {
    e.preventDefault();
    document.querySelector('.modal-bg').style.visibility = "visible"
    document.querySelector('.update-post-modal').style.visibility = "visible"
  }

  function handleComment(id) {
    setCommentId(id)
    document.querySelector('.modal-bg').style.visibility = "visible"
    document.querySelector('.update-comment-modal').style.visibility = "visible"
  }
  
  useEffect(() => {
    if (!props.post) {
      props.fetchPost(props.match.params.postId)
      props.fetchComments()
    }
  });

  useEffect(() => {
    if (props.post && !Object.keys(props.user).length) {
      props.fetchUser(props.post.user_id);
    }
  })

  let postMenu;
  if(props.post) {

    postMenu =
      props.user.username === props.currentUser.username ? (
        <button className="post-preview-button" onClick={handleClick}>
          ...
        </button>
      ) : (
        <div></div>
      );
  }

  if (!props.post) return <div></div>

  const preview = props.user.picUrl ? <img className="mini-profile-pic" src={props.user.picUrl} /> :
    <svg className="profile-pic-img" fill="gray" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z" /></svg>
    
    return (
      <div className="outer-show-div">
        <Navbar />
        <div className="post-preview-main-div">
          <div className="post-preview-div">
            <div className="post-preview-img-div">
              <img
                className="post-preview-img"
                src={props.post.photoUrl}
                alt=""
              />
            </div>

            <div className="edit-div">
              <div className="post-preview-username-div">
                <div className="post-preview-username-wrapper">
                  <div className="user">
                    <div className="mini-profile-pic-div">
                      <a href={`/#/${props.post.username}`}>
                        {preview}
                      </a>
                    </div>
                    <a href={`/#/${props.post.username}`}>
                      <p className="post-user-button">{props.user.username}</p>
                    </a>
                  </div>
                  <div className="option-button">{postMenu}</div>
                </div>
              </div>

              <div className="main-post-caption-div">
                <ul className="comment-text">
                  {props.post.caption ? 
                  (<li>
                    <p className="option-button"><a href={`/#/${props.post.username}`}>{props.post.username}</a></p>
                    <p className="comment-body">{props.post.caption}</p>
                  </li>) : (<div></div>)
                  }
                  {props.comments.map(comment =>
                    props.post.id === comment.post_id ? (
                      <div className="comment-div">
                        <li>
                          <p className="option-button"><a href={`/#/${comment.username}`}>{comment.username}</a></p>
                          <p className="comment-body">{comment.body}</p>
                          <br />
                        </li>
                        {props.user.username === props.currentUser.username || props.currentUser.username === comment.username ? (
                          <button
                            className="post-preview-button"
                            onClick={() => handleComment(comment.id)}
                          >
                            ...
                          </button>
                        ) : (
                          <div></div>
                        )}
                      </div>
                    ) : (<div></div>)
                  )}
                </ul>
              </div>

              <Like
                deleteLike={props.deleteLike}
                createLike={props.createLike}
                likeId={props.post.likeId}
                data={props.data}
                countLikes={props.post.countLikes}
                fetchLikes={props.fetchLikes}
              />

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
              history={props.history}
            />
          </div>

          <div className="update-comment-modal">
            <EditCommentForm
              post={props.post}
              commentId={commentId}
              deleteComment={props.deleteComment}
              fetchComments={props.fetchComments}
            />
          </div>
        </div>
      </div>
    );
}
