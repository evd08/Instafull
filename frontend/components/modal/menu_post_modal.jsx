import React, { useState } from 'react';

export default function MenuPost(props) {

  

  function handleCancel() {
    document.querySelector(`#modal-bg-${props.postId}`).style.visibility = ("hidden")
    document.querySelector(`#menu-post-modal-${props.postId}`).style.visibility = ("hidden")
  }

  function handleUnfollow() {
    // debugger
    // document.querySelector(`#follow-user-${props.userId}`).style.visibility = "visible"
    props.deleteFollow({ followed_id: props.userId })
    handleCancel();
  }

// debugger
  return (
      <div className="menu-post-div">
        <button onClick={handleUnfollow}>Unfollow</button>
        <button><a href={`/#/posts/${props.postId}/edit`}>Go to post</a></button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
  )
}