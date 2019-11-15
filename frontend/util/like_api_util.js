export const fetchLikes = () => {
    // debugger
    return $.ajax({
        url: `api/likes`, 
        method: 'GET',
    })
}

export const fetchLike = likeId => {
    return $.ajax({
        url: `api/likes/${likeId}`,
        method: 'GET'
    })
}

// like = {post_id: ...}
export const createLike = (like) => {
    // debugger;
    return $.ajax({
        url: `api/likes`,
        method: 'POST',
        data: {like},
    })
}

export const deleteLike = (likeId) => {
    return $.ajax({
        url: `api/likes/${likeId}`,
        method: 'DELETE',
    })
}