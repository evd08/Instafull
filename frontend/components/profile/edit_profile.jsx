import React, { useState } from 'react';

export default function EditProfile(props) {
  const [name, setName] = useState(props.currentUser.name);
  const [username, setUsername] = useState(props.currentUser.username);
  const [email, setEmail] = useState(props.currentUser.email);

  const preview = props.currentUser.picUrl ? <img className="edit-profile-pic-img" src={props.currentUser.picUrl} /> :
    <svg className="edit-profile-pic-img" fill="gray" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z" /></svg>;

  function updateName(e) {
    setName(e.target.value);
  }
  function updateUsername(e) {
    setUsername(e.target.value);
  }
  function updateEmail(e) {
    setEmail(e.target.value);
  }

  function handleSubmit() {
    const formData = new FormData();
    formData.append('user[name]', name) 
    formData.append('user[username]', username)
    formData.append('user[email]', email)
    formData.append('user[id]', props.currentUser.id)
    debugger
    props.updateUser(formData)
      .then(() => window.location.reload(false))
  }

  return (
    <div className="edit-profile-div">

      <div className="edit-profile-preview">
        <div className="edit-preview-img">
          {preview}
        </div>
        {props.currentUser.username}
      </div>

      <form className="edit-profile-form">
        <label>Name
          <input type="text" placeholder={props.currentUser.name} onChange={updateName} />
        </label>
        <label>Username
          <input type="text" placeholder={props.currentUser.username} onChange={updateUsername} />
        </label>
        <label>Email
          <input type="text" placeholder={props.currentUser.email} onChange={updateEmail} />
        </label>
        <button onClick={handleSubmit}>Update</button>
      </form>

    </div>
  )
}