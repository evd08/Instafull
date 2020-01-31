import React, { useState } from 'react';

export default function CommentForm(props){
  const [comment, setComment] = useState('');

  function update(e) {
    setComment(e.target.value)
    
    // const lines = Math.floor(comment.length / 24);
    // document.getElementById("comment-textbox").style.height = `${18*(lines+1)}px`;
    // const commentStyle = document.getElementsByClassName("comment-text")[0].style;
    // // /\d+/
    // if (Number(commentStyle.minHeight.match(/[0-9]+/)) > 200) {
    //   commentStyle.minHeight = `${440-(18*lines)}px`;
    // }
  }

  function handleSubmit() {
    props.createComment({ body: comment, user_id: props.currentUserId, post_id: props.postId })
    setComment('');
  }


  return (
    <div className="outer-comment-form">
      <div className="inner-comment-form">
        {/* <input type="text" placeholder="Add a comment..." name="" id="comment-textbox" onChange={update} /> */}
        <textarea placeholder="Add a comment..." name="" id="comment-textbox" onChange={update} value={comment}></textarea>
        <button onClick={handleSubmit} className="comment-post-button">Post</button>
      </div>
    </div>
  )
}