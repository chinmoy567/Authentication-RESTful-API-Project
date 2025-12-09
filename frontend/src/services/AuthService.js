import axios from "axios";

class AuthService {
  url = import.meta.env.VITE_API_URL;

  configMultipartData = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  configJsonData = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Register method
  register(formData) {
    return axios.post(
      this.url + "register",
      formData,
      this.configMultipartData
    );
  }

  // Login method
  login(formData) {
    return axios.post(this.url + "login", formData, this.configJsonData);
  }

  // Store user data in local storage after login
  loginUser(data) {
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("accessToken", data.accessToken);
    localStorage.setItem("refreshToken", data.refreshToken);
    localStorage.setItem("tokenType", data.tokenType);
    localStorage.setItem("user", JSON.stringify(data.user));
  }

  // Logout method
  logoutUser() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("tokenType");
    localStorage.removeItem("user");
  }
  // Check if user is logged in
  isLoggedIn() {
    return localStorage.getItem("isLoggedIn") === "true";
  }

  getUserData() {
    return JSON.parse(localStorage.getItem("user"));
  }
  
}
export default new AuthService();


