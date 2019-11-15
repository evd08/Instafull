import React from 'react';

class ProfilePic extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            avatarFile: null
        };

        // this.handleFile = this.handleFile.bind(this);
        // this.handleCancel = this.handleCancel.bind(this);
    }

    // handleFile(e) {
    //     const file = e.currentTarget.files[0];
    //     this.setState({ avatarFile: file }, () => {
    //         const formData = new FormData();
    //         formData.append('user[avatar]', this.state.avatarFile);
    //         this.props.updateUserAvatar(this.props.currentUser.id, formData);
    //         this.props.closeModal();
    //         this.setState({ avatarFile: null });
    //     });
    // }

    handleProfilePic(e) {
        const file = e.currentTarget.files[0];
        this.setState(() => {
            const formData = new FormData();
            formData.append('user[pic]', file);
            this.props.updateUser(this.props.currentUser, formData);
            this.props.closeModal();
            this.setState({ pic: null });
        });
    }

    handleCancel() {
        this.props.closeModal();
    }

    render() {
        debugger
        return (
            <div className="upload-photo-div">
            {/* // <div className="upload-avatar-modal" >
            //     <h3 className="change-title">Change Profile Photo</h3>

            //     <label htmlFor="file-upload" className="file-upload">Upload Photo</label>
            //     <input onChange={this.handleFile} id="file-upload" type="file" className="file-default" />

            //     <button onClick={this.handleCancel} className="modal-button">Cancel</button>
            // </div> */}
            <h3 className="modal-child">hello</h3>
            </div>
        )
    }

}


export default ProfilePic;