import React from 'react';

export default function MenuPost(props) {

  function handleCancel() {
    document.querySelector('.modal-bg').style.visibility = "hidden"
    document.querySelector('.menu-post-modal').style.visibility = "hidden"
    document.querySelector('.unfollow-user-modal').style.visibility = "hidden"
  }

  function handleUnfollow() {
    document.querySelector('.menu-post-modal').style.visibility = "hidden"
    document.querySelector('.unfollow-user-modal').style.visibility = "visible"
  }

  function handleSubmit() {
    // props.removeFollow() //followId
  }

  return (
    // <div>
      <div className="menu-post-div">
        <button onClick={handleUnfollow}>Unfollow</button>
        <button>Go to post</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>

    //   <div className="unfollow-user-modal">
    //     <button onClick={handleSubmit}>Unfollow</button>
    //     <button onClick={handleCancel}>Cancel</button>
    //   </div>
    // </div>
  )
}