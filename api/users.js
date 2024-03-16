import WebApi from "./webApi";

class WebApiUser {
  static login(data) {
    return WebApi.ApisType(`/users/login`, "post", data);
  }

  static createUser(data) {
    return WebApi.ApisType(`/users`, "post", data);
  }
  static getUsers() {
    return WebApi.ApisType(`/users`, "get");
  }

  static deleteUser(id) {
    return WebApi.ApisType(`/users/${id}`, "delete");
  }
}

export default WebApiUser;
