import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function searchbar(props) {
  const [result, setResult] = useState("");
  const [search, setSearch] = useState("");

  function handleUpdate(e) {
    if(e.currentTarget.value == ""){
      handleSearchbar();
    }
    setSearch(e.currentTarget.value)
    props.fetchSearch({username: e.currentTarget.value})
      .then(res => { setResult(Object.values(res.users)) })
      if(document.querySelector('.searchList')) {
        document.querySelector('.searchList').style.visibility = "visible"
      }
  }

  function handleSearchbar() {
    document.querySelector('.searchList').style.visibility = "hidden"
    document.getElementById('txtbox').value = ""
    setResult("")
  }

  useEffect(() => {
    window.addEventListener('click', function (e) {
      if ((e.target.className !== 'searchList') && document.getElementById('txtbox').value !== "") {
        handleSearchbar();
      }
    })
  })

  let list = search ? 
  (result.length > 0 ? 
    <ul className="searchList">
      {result.map((user) => (
        <Link key={user.id} onClick={handleSearchbar} to={`/${user.username}`}>
          <li>
            <div className="mini-profile-pic-div">
              {user.picUrl ? <img className="profile-pic-img" src={user.picUrl} /> 
              :<svg className="profile-pic-img" fill="gray" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z" /></svg>
              }
            </div>
            <p className="post-user-button">{user.username}</p>
          </li>
        </Link>
      ))}
    </ul> 
    : 
    <ul className="searchList">
      <li className="no-user-list" key="Not Found">No results found.</li>
    </ul>) 
  : 
  (null)

  return (
    <div className="searchbar">
      <div className="nav-profile-div">
        <input 
          type="text"
          placeholder="search"
          autoComplete="off"
          onChange={handleUpdate}
          id="txtbox"
        />
        </div>
        {list}
    </div>
  )
}