import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "8c7cf881-da0d-4489-b909-854b770ad947",
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

  getUser() {
    return instance.get(`auth/me`).then((response) => {
      return response.data;
    });
  },

  userDelete(id) {
    return instance.delete(`follow/${id}`).then((response) => {
      return response.data;
    });
  },

  userPost(id) {
    return instance.post(`follow/${id}`, {}).then((response) => {
      return response.data;
    });
  },
};
