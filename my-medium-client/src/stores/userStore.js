import { defineStore } from "pinia";

import axios from "axios";
import { errorNotification, successNotification } from "@/utility/notification";

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
      const { email, password, name, job } = userData;
      const { data } = await axiosInstance.post("/user/register", {
        email,
        password,
        name,
        job,
      });
      return data;
    },

    async userChangeStatusMember() {
      const access_token = localStorage.getItem("access_token");
      const { data } = await axiosInstance.patch(
        "/user/status",
        {},
        { headers: { access_token } }
      );
      return data;
    },
    async userPayment() {
      try {
        const access_token = localStorage.getItem("access_token");
        const { data } = await axiosInstance.post(
          "/user/payment",
          {},
          { headers: { access_token } }
        );
        const token = data.transactionToken;
        const changeStatus = this.userChangeStatusMember;
        window.snap.pay(token, {
          onSuccess: function (result) {
            changeStatus();
            successNotification("Payment Success");
          },
          onError: function (result) {
            alert("payment failed!");
          },
          onClose: function () {
            alert("you closed the popup without finishing the payment");
          },
        });
      } catch (err) {
        errorNotification(err.response.data.message);
      }
    },
  },
});
