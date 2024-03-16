import WebApi from "./webApi";
class WebApiPost {
  static createPost(data) {
    return WebApi.ApisType(`/posts`, "post", data);
  }
  static getPosts() {
    return WebApi.ApisType(`/posts`, "get");
  }

  static filterPosts(query) {
    return WebApi.ApisType(`/posts${query}`, "get");
  }

  static deletePost() {
    return WebApi.ApisType(`/posts`, "get");
  }
}

export default WebApiPost;
