import React from 'react';

class Main extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            posts: this.props.posts,
            like: false
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

        )
    }
}

