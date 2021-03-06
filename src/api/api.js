import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "73a2a1c5-e2e4-46e8-be72-dcfd6a68279b",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },

  getProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => {
      return response.data;
    });
  },

  userDelete(id) {
    return instance.delete(`follow/${id}`).then((response) => {
      return response.data;
    });
  },

  userPost(id) {
    return instance.post(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
};

export const authAPI = {
  getUser() {
    return instance.get(`auth/me`).then((response) => {
      return response.data;
    });
  },
};
