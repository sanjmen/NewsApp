import RestApi from "./rest_api";

let instance;

class DataSource {
  constructor() {
    if (!instance) {
      this.listeners = [];
      instance = this;
    }

    return instance;
  }

  getPosts() {
    console.log("get posts");
    return RestApi.getPosts();
  }

  getPost(postId) {
    console.log("get post");
    return RestApi.getPost(postId);
  }

  getComments(postId) {
    console.log("get comments");
    return RestApi.getComments();
  }

  addChangeListener(func) {
    console.log("add change listener");
    this.listeners.push(func);
  }

  dataChange() {
    console.log("data change");
    this.listeners.forEach(func => func());
  }
}

export default new DataSource();
