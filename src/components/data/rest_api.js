import Requests from "./requests";

const BASE_URL = "http://localhost:8000";

class RestApi {
  getPost(id) {
    const url = `${BASE_URL}/posts/${id}`;
    return Requests.get(url);
  }

  getPosts() {
    const url = `${BASE_URL}/posts`;
    return Requests.get(url);
  }

  getComments() {
    const url = `${BASE_URL}/comments`;
    return Requests.get(url);
  }
}

export default new RestApi();
