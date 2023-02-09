import { defineStore } from "pinia";
import jwt_decode from "jwt-decode";

import axios from "axios";
import { errorNotification, successNotification } from "@/utility/notification";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const useUserStore = defineStore("user", {
  state: () => ({ isLogin: false, isUserPremium: false }),
  getters: {},
  actions: {
    async login(userData) {
      const { email, password } = userData;
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
      this.isUserPremium = "premium";
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
            successNotification("You are premium user now");
          },
          onError: function (result) {
            errorNotification("payment failed!");
          },
          onClose: function () {
            errorNotification(
              "you closed the popup without finishing the payment"
            );
          },
        });
      } catch (err) {
        errorNotification(err.response.data.message);
      }
    },
    async followUser(id) {
      try {
        const access_token = localStorage.getItem("access_token");
        await axiosInstance.post(
          `/user/${id}`,
          {},
          { headers: { access_token } }
        );
        successNotification("Success Follow User");
      } catch (err) {
        errorNotification(err.response.data.message);
      }
    },
    async premiumUserGetData() {
      try {
        const access_token = localStorage.getItem("access_token");
        const { data } = await axiosInstance.get("/user/premium", {
          headers: { access_token },
        });
        return data;
      } catch (err) {
        errorNotification(err.response.data.message);
      }
    },
    async isPremium() {
      try {
        const access_token = localStorage.getItem("access_token");
        const data = jwt_decode(access_token);
        this.isUserPremium = data.statusMember;
      } catch (err) {
        errorNotification(err);
      }
    },
    async getFollowingUser() {
      try {
        const access_token = localStorage.getItem("access_token");
        const { data } = await axiosInstance("/user/following", {
          headers: { access_token },
        });
        return data;
      } catch (err) {
        errorNotification(err.response.data.message);
      }
    },
  },
});
