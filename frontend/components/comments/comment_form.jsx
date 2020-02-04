import React, { useState, useEffect } from 'react';

export default function CommentForm(props){
  const [comment, setComment] = useState('');

  useEffect(()=>{
    document.getElementById('comment-textbox').addEventListener('keypress', submitOnEnter)
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
    console.log(e)
    console.log(comment);
    let txt = document.getElementById('comment-textbox').value

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
        <textarea placeholder="Add a comment..." name="" id="comment-textbox" onChange={update} value={comment}></textarea>
        <button type="submit" className="comment-post-button">Post</button>
      </form>
    </div>
  )
}












// const lines = Math.floor(comment.length / 24);
// document.getElementById("comment-textbox").style.height = `${18*(lines+1)}px`;
// const commentStyle = document.getElementsByClassName("comment-text")[0].style;
// // /\d+/
// if (Number(commentStyle.minHeight.match(/[0-9]+/)) > 200) {
//   commentStyle.minHeight = `${440-(18*lines)}px`;
// }