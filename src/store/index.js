import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import attentionStore from "./modules/attentionStore.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    attentionStore: attentionStore,
  },
  state: {
    loginUser: {
      id: "",
      token: "",
    },
    loginResult: "",
    houseinfos: [],
    orderedHouseinfos: [],
    housedeals: [],
    selectedHouseName: "",
    selectedHouseInfo: {},
    isLoading: false,
    selectedCity: "",
    selectedGugun: "",
    mapCenter: {
      lat: 36.35513321021629,
      lng: 127.29836175576918,
    },
    noticelist: [],
    boardlist: [],
    viewNum: 0,
  },
  getters: {
    loginUser: (state) => {
      return state.loginUser;
    },
    loginResult: (state) => {
      return state.loginResult;
    },
    houseinfos: (state) => {
      return state.houseinfos;
    },
    housedeals: (state) => {
      return state.housedeals;
    },
    selectedHouseName: (state) => {
      return state.selectedHouseName;
    },
    isLoading: (state) => {
      return state.isLoading;
    },
    orderedHouseinfos: (state) => {
      return state.orderedHouseinfos;
    },
    mapCenter: (state) => {
      return state.mapCenter;
    },
    selectedHouseInfo: (state) => {
      return state.selectedHouseInfo;
    },
    selectedCity: (state) => {
      return state.selectedCity;
    },
    selectedGugun: (state) => {
      return state.selectedGugun;
    },
    noticelist: (state) => {
      return state.noticelist;
    },
    noticelength: (state) => {
      return state.noticelist.length;
    },
    boardlist: (state) => {
      return state.boardlist;
    },
    boardlength: (state) => {
      return state.boardlist.length;
    },
    viewNum: (state) => state.viewNum,
  },
  mutations: {
    SET_VIEW_NUM(state, num) {
      state.viewNum = num;
    },
    LOGIN(state, data) {
      state.loginUser.id = data.id;
      state.loginUser.token = data.token;
      state.loginResult = "success";
      localStorage.setItem("loginUser", JSON.stringify(state.loginUser));
    },
    LOGIN_FAILED(state) {
      state.loginResult = "failed";
    },
    LOGOUT(state) {
      state.loginUser.id = "";
      state.loginUser.token = "";
      state.loginResult = "";
      localStorage.removeItem("loginUser");
    },
    SET_HOUSEINFOS(state, data) {
      state.houseinfos = data.houseinfo;
      state.orderedHouseinfos = data.houseinfo;
      if (state.houseinfos.length == 0) {
        state.mapCenter = {
          lat: 36.35513321021629,
          lng: 127.29836175576918,
        };
      } else {
        state.mapCenter = {
          lat: state.houseinfos[0].lat,
          lng: state.houseinfos[0].lng,
        };
      }
      state.housedeals = [];
      state.selectedHouseName = "";
      state.selectedHouseInfo = {};
      console.log(state.houseinfos);
    },
    SET_HOUSE_DEALS(state, data) {
      state.housedeals = data.dealInfos;
      state.selectedHouseName = data.aptName;
      state.selectedHouseInfo = data;
      console.log(`${state.selectedHouseName} 선택`);
      console.log(state.housedeals);
      console.log(state.selectedHouseInfo);
    },
    ORDER_BY_RANK(state, rank) {
      if (rank.length === 0) {
        state.orderedHouseinfos = state.houseinfos;
      } else {
        state.orderedHouseinfos.sort(function (info1, info2) {
          const scores1 = info1.houseScore;
          const scores2 = info2.houseScore;
          let score1 = 0;
          let score2 = 0;
          for (let i = 0; i < rank.length; i++) {
            score1 = score1 + scores1[`${rank[0]}score`] * Math.pow(1000, 2 - i);
            score2 = score2 + scores2[`${rank[0]}score`] * Math.pow(1000, 2 - i);
          }
          console.log("score1 : " + score1);
          console.log("score2 : " + score2);
          return score2 - score1;
        });
      }
    },
    SET_MAP_CENTER(state, center) {
      state.mapCenter = center;
    },
    ADD_ATTENTION(state, houseinfo) {
      for (let i = 0; i < state.houseinfos.length; i++) {
        if (state.houseinfos[i].no == houseinfo.no) {
          state.houseinfos[i].attention = true;
          break;
        }
      }
      for (let i = 0; i < state.orderedHouseinfos.length; i++) {
        if (state.orderedHouseinfos[i].no == houseinfo.no) {
          state.orderedHouseinfos[i].attention = true;
          break;
        }
      }
    },
    DESTROY(state) {
      state.houseinfos = [];
      state.orderedHouseinfos = [];
      state.housedeals = [];
      state.selectedHouseName = "";
      state.selectedHouseInfo = {};
      state.isLoading = false;
      state.selectedCity = "";
      state.selectedGugun = "";
      state.mapCenter = {
        lat: 36.35513321021629,
        lng: 127.29836175576918,
      };
    },
    DELETE_ATTENTION(state, info) {
      for (let i = 0; i < state.houseinfos.length; i++) {
        if (state.houseinfos[i].no == info.no) {
          state.houseinfos[i].attention = false;
          break;
        }
      }
      state.orderedhouseinfos = JSON.parse(JSON.stringify(state.houseinfos));
    },

    SET_NOTICE_LIST(state, data) {
      state.noticelist = data.board;
    },
    SET_BOARD_LIST(state, data) {
      state.boardlist = data.board;
    },
  },
  actions: {
    setViewNum({ commit }, num) {
      commit("SET_VIEW_NUM", num);
    },
    deleteAttention({ commit }, info) {
      const loginUser = JSON.parse(localStorage.getItem("loginUser"));
      const url = `http://localhost:8000/member/attention/${info.no}`;
      axios({
        method: "delete",
        url: url,
        headers: {
          Authorization: loginUser.token,
        },
      })
        .then((response) => {
          console.log(response);
          if (response.data == "Success") {
            commit("DELETE_ATTENTION", info);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    destroy({ commit }) {
      commit("DESTROY");
    },
    addAttention({ commit }, houseinfo) {
      const loginUser = JSON.parse(localStorage.getItem("loginUser"));
      const url = `http://localhost:8000/member/attention/${houseinfo.no}`;
      axios({
        method: "post",
        url: url,
        headers: {
          Authorization: loginUser.token,
        },
      })
        .then((response) => {
          if (response.data == "Success") {
            commit("ADD_ATTENTION", houseinfo);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    setMapCenter({ commit }, center) {
      commit("SET_MAP_CENTER", center);
    },
    orderByRank({ commit }, rank) {
      commit("ORDER_BY_RANK", rank);
    },
    setHouseDeals({ commit }, data) {
      commit("SET_HOUSE_DEALS", data);
    },
    setHouseinfos({ commit, state }, search) {
      state.isLoading = true;
      state.selectedCity = search.city;
      state.selectedGugun = search.gugun;
      const url = `http://localhost:8000/search/apt/${search.code}/${search.dong}`;
      axios({
        method: "get",
        url: url,
        headers: {
          Authorization: state.loginUser.token,
        },
      })
        .then((response) => {
          commit("SET_HOUSEINFOS", response.data);
          state.isLoading = false;
        })
        .catch((error) => {
          console.log(error);
          state.isLoading = false;
        });
    },
    setLogin({ commit }, loginUser) {
      commit("LOGIN", loginUser);
    },
    login({ commit }, inputData) {
      console.log("loginAction");
      console.log(inputData);
      axios({
        method: "post",
        url: "http://localhost:8000/member/login",
        data: {
          id: inputData.id,
          password: inputData.password,
        },
      })
        .then(function (response) {
          console.dir(response);
          const loginUser = {
            id: inputData.id,
            token: response.data,
          };
          commit("LOGIN", loginUser);
        })
        .catch(function (error) {
          commit("LOGIN_FAILED");
          console.dir(error);
        });
    },
    logout({ commit }) {
      console.log("logoutAction");
      commit("LOGOUT");
    },
    getNoticeList({ commit, state }, params = null) {
      //console.log("getNoticeList");
      axios({
        method: "get",
        url: "http://localhost:8000/notice",
        headers: {
          Authorization: state.loginUser.token,
        },
        params: params,
      })
        .then((response) => {
          console.dir(response);
          commit("SET_NOTICE_LIST", response.data);
        })
        .catch(function (error) {
          console.dir(error);
        });
    },
    getBoardList({ commit, state }, params = null) {
      axios({
        method: "get",
        url: "http://localhost:8000/board",
        headers: {
          Authorization: state.loginUser.token,
        },
        params: params,
      })
        .then((response) => {
          console.dir(response);
          commit("SET_BOARD_LIST", response.data);
        })
        .catch(function (error) {
          console.dir(error);
        });
    },
  },
});
