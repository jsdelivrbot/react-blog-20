import Axios from "axios";

export const FETCH_POSTS = "FETCH_POSTS";
export const CREATE_POST = "CREATE_POST";
export const FETCH_POST = "FETCH_POST";

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=RUBYRULEZ123"

export const fetchPosts = () => {
  const request = Axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return ({
    type: FETCH_POSTS,
    payload: request
  });
}

export const createPost = (values, callback) => {
  const request = Axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());

  return {
    type: CREATE_POST,
    pauload: request
  }
}

export const fetchPost = (id) => {
  const request = Axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)

  return ({
    type: FETCH_POST,
    payload: request
  });
}
