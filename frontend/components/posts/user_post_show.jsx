import React from 'react'
import Navbar from '../navbar/navbar_container'

class UserPostShow extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div className="outer-show-div"> 
                {/* <div className="profile-div"> */}
                    <Navbar />
                {/* </div> */}

                <div className="profile-div">
                    <div>
                        {/* img profile pic */}
                        <img src="https://img.icons8.com/officel/16/000000/user.png" />
                    </div>

                    <div>
                        {/* username */}
                        <p>{this.props.currentUser.username}</p>
                    </div>

                    <div>
                        {/* upload photo button */}
                        <input type="file"/>
                        {/* num of posts, followers, following */}
                        <p>number of posts, followers, following</p>
                    </div>
                </div>

                <div className="profile-post-div">
                    {/* posts */}
                    <p>future posts</p>
                </div>
                
            </div>
        )
    }
}

export default UserPostShow;