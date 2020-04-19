
export const fetchPosts = (userId, page) => {
    return $.ajax({
        url: `/api/users/${userId}/posts`,
        method: 'GET',
        data: {page}
    })
}

export const fetchPost = postId => {
    return $.ajax({
        url: `/api/posts/${postId}`,
        method: 'GET'
    })
}

export const createPost = postInfo => {
    return $.ajax({
        url: `/api/posts`,
        method: 'POST',
        data: postInfo,
        contentType: false,
        processData: false,
    })
}

export const updatePost = post => {
    return $.ajax({
        url:`/api/posts/${post.id}`,
        method: 'PATCH',
        data: {post}
    })
}

export const deletePost = postId => {
    return $.ajax({
        url: `/api/posts/${postId}`,
        method: 'DELETE'
    })
}