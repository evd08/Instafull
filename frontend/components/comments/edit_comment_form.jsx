import React from 'react';

export default function Comment(props){

  function handleCancel() {
    document.querySelector('.modal-bg').style.visibility = "hidden"
    document.querySelector('.update-comment-modal').style.visibility = "hidden"
  }

  function handleSubmit() {
    props.deleteComment(props.commentId)
    handleCancel();
  }

  window.addEventListener('click', e => {
    if ((e.target.className === 'update-comment-modal') && e.target.style.visibility === 'visible') {
      handleCancel()
    }
  })

  return (
    <div className="comment-option-div">
      <button onClick={handleSubmit} className="delete-button">Delete</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  )
}