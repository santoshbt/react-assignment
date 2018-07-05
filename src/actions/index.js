import axios from 'axios';

export const FETCH_USERS = 'fetch_users';
export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'https://jsonplaceholder.typicode.com';

export function fetchUsers() {
  const request = axios.get(`${ROOT_URL}/users`);

  return{
    type: FETCH_USERS,
    payload: request
  };
}


export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts`);

  return{
    type: FETCH_POSTS,
    payload: request
  };
}
