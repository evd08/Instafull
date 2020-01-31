import React, { useState } from 'react';

export default function EditPost(props) {
  const [id] = useState(props.post.id);
  const [caption, setCaption] = useState(
    props.post.caption !== "" ? props.post.caption : ""
    );

  function update(e) {
    setCaption(e.currentTarget.value)
  }

  function handleCancel() {
    document.querySelector('.modal-bg').style.visibility = "hidden"
    document.querySelector('.update-post-modal').style.visibility = "hidden"
  }

  window.addEventListener('click', e => {
    if ((e.target.className === 'update-post-modal') && e.target.style.visibility === 'visible') {
      handleCancel()
    }
  })

  function handleSubmit() {
    let post = {id: id, caption: caption}
    props.updatePost(post)
    handleCancel()
  }

  function handleDelete() {
    props.deletePost(props.post.id)
      .then(props.history.push(`/${props.post.username}`))
  }
  
  return (
    <div className="edit-post-div">
      <h3 className="edit-post-text">Update Post</h3>
      <br/>
      <div>
        <img src={props.post.photoUrl} alt="post"/>
      </div>
      <br/><br/>
      <h3 className="edit-post-text">Caption</h3>
      <br/>
      <textarea onChange={update} placeholder={caption} name="caption" id="" cols="30" rows="5"></textarea>
      <br/><br/>
      <div className="edit-option-button">
        <button onClick={handleCancel} className="edit-post-button">Cancel</button>
        <button onClick={handleDelete} className="redBG-button">Delete</button>
        <button onClick={handleSubmit} className="edit-post-button">Submit</button>
      </div>
    </div>
  )
}