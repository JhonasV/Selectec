import axios from "axios";
class AuthService {
  get() {
    return axios.get("/api/v1/auth/currentuser", {
      headers: {
        authorization: `bearer ${localStorage.getItem("selectec-token") || ""}`,
      },
    });
  }

  login(credentials) {
    return axios.post("/api/v1/auth/login", credentials);
  }

  signin(values) {
    return axios.post("/api/v1/auth/register", values);
  }

  saveToken(token) {
    localStorage.setItem("selectec-token", token);
  }

  getToken() {
    return localStorage.getItem("selectec-token");
  }

  removeToken() {
    localStorage.removeItem("selectec-token");
  }

  logOut() {
    this.removeToken();
  }

  isAutenticated() {
    return this.getToken() !== null;
  }
}

export default new AuthService();
