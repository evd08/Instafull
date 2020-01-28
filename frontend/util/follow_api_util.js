export const fetchFollows = userId => {
  return $.ajax({
    url: `api/follows`,
    method: 'GET',
    data: {userId},
  })
}

export const fetchFollow = followId => {
  return $.ajax({
    url: `api/follows/${followId}`,
    method: 'GET'
  })
}

export const createFollow = (follow) => {
  return $.ajax({
    url: `api/follows`,
    method: 'POST',
    data: {follow},
  })
}

export const deleteFollow = (data) => {
  // debugger
  return $.ajax({
    url: `api/follows/${data.followed_id}`,
    method: 'DELETE',
  })
}