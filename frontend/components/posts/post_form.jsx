import React from 'react';
import Navbar from '../navbar/navbar_container';

class PostForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currentUser: this.props.post.currentUser,
            caption: this.props.post.caption,
            photoFile: null,
            photoUrl: null,
            posts: this.props.posts,
            post: this.props.post
        }

        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCaption = this.handleCaption.bind(this);
    }

    handleFile(e) {
        // debugger
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({
                    photoFile: file,
                    photoUrl: fileReader.result}
                );
        };

        if (file){
            fileReader.readAsDataURL(file);
        };
    }

    componentDidMount() {
        this.props.fetchPosts();
    }

    handleCaption(e) {
        this.setState({caption: e.currentTarget.value});
    }

    handleSubmit(e) {
        e.preventDefault();

        let formData = new FormData();

        formData.append('post[caption]', this.state.caption);
        if (this.state.photoFile) {
            formData.append('post[photo]', this.state.photoFile);
        }
        this.props.createPost(formData);
        this.props.history.push('/');

    }

    render() {

        const preview = this.state.photoUrl ? <img src={this.state.photoUrl}/> : null;

        return (
            <div>
                <div>
                    <Navbar />
                </div>

                <div className="profile-div">
                    <form onSubmit={this.handleSubmit}>
                        <p>Upload a photo</p>
                        <input type="file" onChange={this.handleFile}/>
                        <br/>
                        {preview}
                        <br/>
                        <textarea  
                            id="post-body" 
                            placeholder="Add a caption"
                            onChange={this.handleCaption}
                        />
                        <br/>
                        <input 
                            type="submit" 
                            className="auth-button"
                            value="Create a new post"
                        />
                    </form>
                </div>
            </div>
        )
    }
}

export default PostForm;