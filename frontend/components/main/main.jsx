import React from 'react';
import Navbar from '../navbar/navbar_container';
import PostIndex from '../posts/post_index_container';

class Main extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            posts: this.props.posts,
            // like: false
        }
    }

    render() {


        const profileMain = (
            <div>
                <div>
                     {/* profile picture */}
                </div>
        
                <div>
                    {/* username and name */}
                </div>
            </div>
        )
        
        
        const followMain = (
            <div>
                <div>
                    <button>
                        {/* followers button */}
                    </button>
        
                    <button>
                        {/* following button */}
                    </button>
                </div>
        
                <ul>
                    <div>
                        {/* <li> posts </li> */}
                    </div>
                </ul>
            </div>
        )

        return (
            <div>
                <Navbar />
                <PostIndex />
            </div>
        )
    }
}

export default Main;