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
    async getTopics() {
      const { data } = await axiosInstance("/content/topics");
      return data;
    },
    async getDataById(id) {
      const { data } = await axiosInstance(`/content/${id}`);
      return data;
    },
    async createContent(contentData) {
      const access_token = localStorage.getItem("access_token");
      const { title, hotline, contentFill, topic, type } = contentData;
      const data = await axiosInstance.post(
        "/content",
        {
          title,
          hotline,
          contentFill,
          topic,
          type,
        },
        { headers: { access_token } }
      );
      console.log(data, "ini dari store");
    },
    async followingUser() {
      const access_token = localStorage.getItem("access_token");
      const { data } = await axiosInstance.post(
        "/user/following",
        {},
        { headers: { access_token } }
      );
      return data;
    },
    async summarizeContent(id) {
      const { data } = await axiosInstance.post(`/content/summarize/${id}`);
      return data;
    },
  },
});
