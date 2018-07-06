import axios from 'axios';

export const FETCH_USERS = 'fetch_users';
export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const FETCH_USER = 'fetch_user';
export const FETCH_USER_POSTS = 'fetch_user_posts';

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

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}`);

  return {
    type: FETCH_POST,
    payload: request
  }
}

export function fetchUser(id){
  const request = axios.get(`${ROOT_URL}/users?id=${id}`);

  return {
    type: FETCH_USER,
    payload: request
  }
}

export function fetchUserPosts(user_id) {
    const request = axios.get(`${ROOT_URL}/posts?userId=${user_id}`);
    console.log(request);
    console.log("2222222222");
    
    return {
      type: FETCH_USER_POSTS,
      payload: request
    }
}
