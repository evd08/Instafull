import React, { useState } from 'react';

export default function CommentForm(props){
  const [comment, setComment] = useState('');

  function update(e) {
    setComment(e.target.value)
  }

  function handleSubmit() {
    props.createComment({ body: comment, user_id: props.currentUserId, post_id: props.postId })
    setComment('');
  }


  return (
    <div className="outer-comment-form">
      <div className="inner-comment-form">
        <textarea placeholder="Add a comment..." name="" id="comment-textbox" onChange={update} value={comment}></textarea>
        <button onClick={handleSubmit} className="comment-post-button">Post</button>
      </div>
    </div>
  )
}