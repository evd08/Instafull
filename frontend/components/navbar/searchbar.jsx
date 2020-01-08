import React, { useState, useEffect } from 'react';

export default function searchbar(props) {
  const [result, setResult] = useState("");

  function handleUpdate(e) {
    if(e.currentTarget.value == ""){
      let list = ""
    }
    props.fetchSearch({username: e.currentTarget.value})
      .then(res => {
        setResult(Object.values(res.users))
      })
  }

  // function handleProfile() {

  // }

  // debugger

  let list = result ?       
    <ul className="searchList">
      {result.map((user) => (
        <li>
          {/* <Link to="/"> */}
          <div>
            <img className="profile-pic-img" src={user.picUrl} alt="profilePicture"/>
          </div>
            <p className="post-user-button">{user.username}</p>
          {/* </Link> */}
        </li>
      ))}
    </ul> : null

  return (
    <div>
      <div className="nav-profile-div">
        <input 
          type="text"
          placeholder="search"
          onChange={handleUpdate}
        />
        </div>
        {list}
    </div>
  )
}