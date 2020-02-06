import React from 'react';

export default function MenuPost(props) {

  function handleCancel() {
    document.querySelector(`#modal-bg-${props.postId}-user-${props.userId}`).style.visibility = ("hidden")
    document.querySelector(`#menu-post-modal-${props.postId}-user-${props.userId}`).style.visibility = ("hidden")
  }

  function handleUnfollow() {
    document.querySelectorAll(`#follow-user-${props.userId}`).forEach(el => el.style.visibility = 'visible')
    props.deleteFollow({ followed_id: props.userId })
    handleCancel();
  }


  window.addEventListener('click', e => {
    if ((e.target.className === 'menu-post-modal') && e.target.style.visibility === 'visible'){
      handleCancel()
    }
  })


  let following = true
  if (document.querySelector(`#follow-user-${props.userId}`)) {
    document.querySelector(`#follow-user-${props.userId}`).style.visibility === "hidden" || 
        document.querySelector(`#follow-user-${props.userId}`).style.visibility === "" ? 
    following=true : following=false
  }
  
  return following ? (
    <div className="menu-post-div">
      <button onClick={handleUnfollow}>Unfollow</button>
      <a href={`/#/posts/${props.postId}/edit`}><button>Go to post</button></a>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  ):(
    <div className="menu-post-div">
      <a href={`/#/posts/${props.postId}/edit`}><button>Go to post</button></a>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  )
}