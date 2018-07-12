import axios from 'axios';

export const FETCH_USERS = 'fetch_users';
export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const FETCH_USER = 'fetch_user';
export const FETCH_USER_POSTS = 'fetch_user_posts';

const ROOT_URL = 'https://jsonplaceholder.typicode.com';

export function fetchUsers() {
  const request = axios.get(`${ROOT_URL}/users`);

  // return{
  //   type: FETCH_USERS,
  //   payload: request
  // };

  return (dispatch) => {
    request.then(({data}) => {
      console.log(data);
      dispatch({ type: FETCH_USERS, payload: data })
    });
  }
}


export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts`);

  // return{
  //   type: FETCH_POSTS,
  //   payload: request
  // };

  return (dispatch) => {
    request.then(({data}) => {
      dispatch({ type: FETCH_POSTS, payload: data })
    });
  }
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}`);

  // return {
  //   type: FETCH_POST,
  //   payload: request
  // }
  return (dispatch) => {
    request.then(({data}) => {
      console.log(data);
      console.log("333333");
      dispatch({ type: FETCH_POST, payload: data })
    });
  }
}

export function fetchUser(id){
  const request = axios.get(`${ROOT_URL}/users?id=${id}`);
  // return {
  //   type: FETCH_USER,
  //   payload: reque st
  // }

  return (dispatch) => {    
    request.then(({data}) => {
      console.log("fetch user == ", data);
      dispatch({ type: FETCH_USER, payload: data })
    });
  }
}

export function fetchUserPosts(user_id) {
    const request = axios.get(`${ROOT_URL}/posts?userId=${user_id}`);
    
    // return {
    //   type: FETCH_USER_POSTS,
    //   payload: request
    // }

    return (dispatch) => {
      request.then(({data}) => {
        console.log(data);
        dispatch({ type: FETCH_USER_POSTS, payload: data })
      });
    }
}
