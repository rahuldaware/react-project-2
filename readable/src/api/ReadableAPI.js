const api = "http://localhost:3001"

let token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept' : 'application/json',
  'Authorization' : token
}

export const getCategories = () =>
    fetch(`${api}/categories`, { headers })
    .then(res => res.json())

export const getCategoryPosts = (category) =>
    fetch(`${api}/${category}/posts`, {headers })
    .then(res => res.json())

export const getAllPosts = () =>
    fetch(`${api}/posts`, {headers})
    .then(res => res.json())

export const addPost = (post) =>
    fetch(`${api}/posts`,{
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    }).then(res => res.json())

export const getSinglePost = (id) =>
    fetch(`${api}/posts/${id}`, { headers })
    .then(res => res.json())

export const addVoteToPost = (id, option) =>
    fetch(`${api}/posts/${id}`,{
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({"option": option})
    }).then(res => res.json())

export const updatePost = (id, body) =>
    fetch(`${api}/posts/${id}`,{
      method: 'PUT',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(res => res.json())

export const deletePost = (id) =>
    fetch(`${api}/posts/${id}`,{
      method: 'DELETE',
      headers: {...headers}
    }).then(res => res.json())

export const getComments = (id) =>
    fetch(`${api}/posts/${id}/comments`,{headers})
      .then(res => res.json())

export const addComment = (body) =>
    fetch(`${api}/comments`,{
      method: 'POST',
      headers: {...headers,
      'Content-Type': 'application/json'},
      body: JSON.stringify(body)
    }).then(res => res.json())

export const getSingleComment = (id) =>
    fetch(`${api}/comments/${id}`,{headers})
    .then(res => res.json())

export const addVoteToComment = (id, option) =>
    fetch(`${api}/comments/${id}`, {
      method: 'POST',
      headers: {...headers,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({"option": option})
    }).then(res => res.json())

export const updateComment = (id, body) =>
    fetch(`${api}/comments/${id}`, {
      method: 'PUT',
      headers: {...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(res => res.json())

export const deleteComment = (id) =>
    fetch(`${api}/comments/${id}`,{
      method: 'DELETE',
      headers: {...headers},
    }).then(res => res.json())
