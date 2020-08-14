import React, { useState, useEffect } from 'react';

export default function CommentForm(props){
  const [comment, setComment] = useState('');

  useEffect(()=>{
    
    document.getElementById(`comment-textbox-${props.postId}`).addEventListener('keypress', submitOnEnter)
  }, [])

  function submitOnEnter(event) {
    if(event.keyCode === 13) {
      event.preventDefault();
      handleSubmit(event)
    }
  }
  
  function update(e) {
    setComment(e.target.value)
  }
  
  function handleSubmit(e) {
    // console.log(e)
    // console.log(comment);
    let txt = document.getElementById(`comment-textbox-${props.postId}`).value

    if (txt === "") {
      alert("Please type a comment")
    } else {
      props.createComment({ body: txt, user_id: props.currentUserId, post_id: props.postId })
      setComment('');
    }
    
  }
  
  return (
    <div className="outer-comment-form">
      <form onSubmit={handleSubmit} className="inner-comment-form">
        <textarea placeholder="Add a comment..." name="" className="comment-textbox" id={`comment-textbox-${props.postId}`} onChange={update} value={comment}></textarea>
        <button type="submit" className="comment-post-button">Post</button>
      </form>
    </div>
  )
}