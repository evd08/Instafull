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
            // posts: this.props.posts,
            // post: this.props.post
        }

        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCaption = this.handleCaption.bind(this);
    }
    
    // componentDidMount() {
    //     this.props.fetchPosts();
    // }

    handleCaption(e) {
        this.setState({caption: e.currentTarget.value});
    }

    handleFile(e) {
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

        const preview = this.state.photoUrl ? <img className="post-preview-img" src={this.state.photoUrl}/> : null;

        return (
            <div>
                <div>
                    <Navbar />
                </div>

                <div className="post-preview-main-div">

                    <form className="post-preview-div" onSubmit={this.handleSubmit}>
                        <div className="post-preview-img-div">
                            <div className="post-preview-img">
                                {preview}
                            </div>
                        </div>

                        <div className="edit-div">
                            <div className="upload-photo-div">
                                <p className="upload">Upload a photo</p>
                                <div justify-content="center"><input type="file" onChange={this.handleFile} /></div>
                            </div>

                            <div className="add-comment-div">
                                <textarea
                                    className="add-caption"
                                    placeholder="Add a caption"
                                    onChange={this.handleCaption}
                                />
                            </div>
  
                            <div className="submit-button-div">
                                <input
                                    type="submit"
                                    className="auth-button"
                                    value="Create a new post"
                                />
                            </div>
                        </div>

                    </form>
                </div>

            </div>

            
        )
    }
}

export default PostForm;