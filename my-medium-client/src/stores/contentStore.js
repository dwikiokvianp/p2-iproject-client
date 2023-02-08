import { defineStore } from "pinia";

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const useContentStore = defineStore("content", {
  state: () => ({
    content: [],
  }),
  getters: {},
  actions: {
    async getData() {
      const { data } = await axiosInstance("/content");
      return data;
    },
    async register(userData) {},
  },
});
