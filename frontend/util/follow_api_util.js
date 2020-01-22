export const fetchFollows = () => {
  return $.ajax({
    url: `api/follows`,
    method: 'GET',
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
  return $.ajax({
    url: `api/follows/${data.followed_id}`,
    method: 'DELETE',
  })
}