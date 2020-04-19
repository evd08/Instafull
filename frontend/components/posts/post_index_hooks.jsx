// post index hooks version. Working! not updated on the infinite scroll

// import React, { useEffect, useState } from 'react';
// import PostContainer from './post_container';
// import Navbar from '../navbar/navbar_container';
// import Loader from 'react-loader-spinner';

// export default function PostIndex(props) {

//   const [loading, setLoad] = useState(true)

//   useEffect(() => {
//     // if (loading) {
//       props.fetchFollows(props.currentUser.id)
//       .then((res) => {
//         // let ids = [];
//         // res.follows.followed.forEach(el => ids.push(el.followed_id))
//         let ids = res.follows.followed.map(({ followed_id }) => followed_id)
//         ids.push(props.currentUser.id)
//         props.fetchPosts(ids)
//       })
//       .then(() => {
//         props.fetchComments()
//         setLoad(false)
//       })
//     // }
//   }, [])

//   return loading ? (
//     <Loader
//       type="Bars"
//       color="#00BFFF"
//       className="loading"
//     />
//   ) : (
//       <div>
//         <Navbar />
//         <div className="main-div">
//           <ul className="main-ul-div">
//             {props.posts.map(post => (
//               <PostContainer
//                 key={post.id}
//                 post={post}
//                 currentUser={props.currentUser.username}
//               />
//             ))}
//           </ul>
//         </div>
//       </div>
//     );
// }
