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

export const createFollow = (followId) => {
  return $.ajax({
    url: `api/follows`,
    method: 'POST',
    data: { followId },
  })
}

export const deleteFollow = (followId) => {
  return $.ajax({
    url: `api/follows/${followId}`,
    method: 'DELETE',
  })
}