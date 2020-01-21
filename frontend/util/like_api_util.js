export const fetchLikes = () => {
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

export const createLike = (like) => {
    return $.ajax({
        url: `api/likes`,
        method: 'POST',
        data: {like},
    })
}

export const deleteLike = (data) => {
    return $.ajax({
        url: `api/likes/${data.post_id}`,
        method: 'DELETE',
        data: {data}
    })
}
