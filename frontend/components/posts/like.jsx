// import React from 'react';
// import { connect } from 'react-redux';
// import { fetchLike, deleteLike } from '../../actions/likes_actions';

// class Like extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             liked: false,
//         }

//         this.toggleLike = this.toggleLike.bind(this);
//     }

//     toggleLike(e){
//         e.preventDefault();
//         this.setState(this.state.liked ? {liked: false} : {liked: true})
//     }

//     render() {

//         let likeButton = this.state.liked ? 
//             <svg fill="teal" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z" /></svg>
//             : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.516 3c2.382 0 4.487 1.564 4.487 4.712 0 4.963-6.528 8.297-10.003 11.935-3.475-3.638-10.002-6.971-10.002-11.934 0-3.055 2.008-4.713 4.487-4.713 3.18 0 4.846 3.644 5.515 5.312.667-1.666 2.333-5.312 5.516-5.312zm0-2c-2.174 0-4.346 1.062-5.516 3.419-1.17-2.357-3.342-3.419-5.515-3.419-3.403 0-6.484 2.39-6.484 6.689 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-4.586-3.414-6.689-6.484-6.689z" /></svg>
//         return(
//             <div>
//                 <button onClick={this.toggleLike}>
//                     {likeButton}
//                 </button>
//             </div>
//         )
//     }
// }

// // const mapStateToProps = (state, ownProps) => ({
// //     likes: state.entities.likes,
// //     postId: state.entities.posts[ownProps.match.params.postId].id,
// //     user_id: state.session.id,
// // })

// // const mapDispatchToProps = dispatch => {
// //     return{
// //         fetchLike: likeId => dispatch(fetchLike(likeId)),
// //         deleteLike: likeId => dispatch(deleteLike(likeId)),
// //     }
// // }


// // export default connect(mapStateToProps, mapDispatchToProps)(Like)

// export default Like;