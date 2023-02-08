import { defineStore } from "pinia";

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const useUserStore = defineStore("user", {
  state: () => ({}),
  getters: {},
  actions: {
    async login(userData) {
      const { email, password } = userData;
      console.log(userData, "ini dari store");
      const { data } = await axiosInstance.post("/user/login", {
        email,
        password,
      });
      return data.access_token;
    },
    async register(userData) {
      const { email, password, name } = userData;
      const { data } = await axiosInstance.post("/user/register", {
        email,
        password,
        name,
      });
      return data;
    },
  },
});
