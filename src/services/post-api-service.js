import TokenService from "../services/token-service";
import config from "../config";

const PostApiService = {
  getPosts() {
    return fetch(`${config.API_ENDPOINT}/posts`, {
      headers: {}
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getPost(postId) {
    return fetch(`${config.API_ENDPOINT}/posts/${postId}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getPostComments(postId) {
    return fetch(`${config.API_ENDPOINT}/posts/${postId}/comments`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  createPost(title, summary, type) {
    return fetch(`${config.API_ENDPOINT}/posts`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        title,
        summary,
        type
      })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default PostApiService;
