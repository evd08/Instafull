
# Background
InstaPlaces, a clone of Instagram application, a photo sharing application where users can also search and follow other users, and comment and like other user’s posts. 

[Live Link](http://insta-clone08.herokuapp.com/#/)

# Technologies:

* Ruby on Rails
* PostgreSQL
* SCSS
* React
* Redux
* AWS S3
* Heroku

# Features
Secure user authentication using BCrypt. A demo user was created for anyone who wants to take a peek of what the app can do.

### CRUD (Create, Read, Update, Delete) Cycle
Users can post a new photo with a caption and later on can edit that caption and they can also delete their own post and comments on their own post and on other user’s post. AWS S3 is being used to saved the posts.

![ezgif com-video-to-gif](https://user-images.githubusercontent.com/53169926/73900068-6bfd6a00-4843-11ea-8d66-7175ab865352.gif)

Liking, leaving a comment and deleting a post: 

![ezgif com-video-to-gif (1)](https://user-images.githubusercontent.com/53169926/73900075-6f90f100-4843-11ea-8fde-7add5d4b32c8.gif)

#### User's profile page
Only one component was being used for current user's profile and other users profile. A conditional statement was added to know if buttons and accesibility has to be given to the current user.
```javascript
handleClick() {
    if (this.state.btn === 'Edit Profile') {
        document.querySelector('.modal-bg').style.visibility = "visible"
        document.querySelector('.update-user-modal').style.visibility = "visible"
    } 
    else if (this.state.btn === 'Following') {
        this.setState({ followerCount: this.state.followerCount-1 })
        this.setState({ btn: "Follow" })
        this.setState({ set: true })
        this.props.deleteFollow({ followed_id: this.props.otherUser.id })
    } else if (this.state.btn === 'Follow') {
        this.setState({ followerCount: this.state.followerCount+1 })
        this.setState({ btn: "Following" })
        this.setState({ set: true })
        this.props.createFollow({followed_id: this.props.otherUser.id})
    }
}
```
     

### Search bar
Implemented a search bar to search for other users to follow. Results are based on users input.
It is possible to Unfollow users from the home page and follow them right after unfollowing. Deleting currennt user's comment can be deleted on post preview.

![search](https://user-images.githubusercontent.com/53169926/73901479-c3053e00-4847-11ea-8b96-22982849fc1f.gif)


This is a snippet of the searchbar react hooks component. "list" is a variable where the results are being saved if there is one and it will be showed "No results found." if there's none. list will only be shown if there is a user input in the search bar.
```javascript
let list = search ? 
  (result.length > 0 ? 
    <ul className="searchList">
      {result.map((user) => (
        <Link key={user.id} onClick={handleSearchbar} to={`/${user.username}`}>
          <li>
            <div className="mini-profile-pic-div">
              {user.picUrl ? <img className="profile-pic-img" src={user.picUrl} /> :
                <svg className="profile-pic-img" fill="gray" xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 
                18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-
                3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-
                1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z" /></svg>
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
```
