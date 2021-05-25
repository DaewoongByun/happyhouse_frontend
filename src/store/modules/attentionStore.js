import axios from "axios";
const attentionStore = {
  namespaced: true,
  state: {
    attentionList: [],
    orderedAttentionList: [],
    attentionDeals: [],
    selectedAttention: {},
    isLoading: false,
    mapCenter: {
      lat: 36.35513321021629,
      lng: 127.29836175576918,
    },
    selectedAttentionName: "",
  },
  getters: {
    attentionList: (state) => state.attentionList,
    attentionDeals: (state) => state.attentionDeals,
    selectedAttention: (state) => state.selectedAttention,
    isLoading: (state) => state.isLoading,
    mapCenter: (state) => state.mapCenter,
    selectedAttentionName: (state) => state.selectedAttentionName,
    orderedAttentionList: (state) => state.orderedAttentionList,
  },
  mutations: {
    GET_ATTENTION_LIST(state, data) {
      state.attentionList = data;
      state.orderedAttentionList = JSON.parse(JSON.stringify(data));
    },
    SET_ATTENTION_DEALS(state, data) {
      state.attentionDeals = data.dealInfos;
      state.selectedAttentionName = data.aptName;
      state.selectedAttention = data;
    },
    SET_MAP_CENTER(state, center) {
      state.mapCenter = center;
    },
    ORDER_BY_RANK(state, rank) {
      if (rank.length === 0) {
        state.orderedAttentionList = state.attentionList;
      } else {
        state.orderedAttentionList.sort(function (info1, info2) {
          const scores1 = info1.houseScore;
          const scores2 = info2.houseScore;
          let score1 = 0;
          let score2 = 0;
          for (let i = 0; i < rank.length; i++) {
            score1 = score1 + scores1[`${rank[0]}score`] * Math.pow(1000, 2 - i);
            score2 = score2 + scores2[`${rank[0]}score`] * Math.pow(1000, 2 - i);
          }
          return score2 - score1;
        });
      }
    },
    DESTROY(state) {
      state.attentionDeals = [];
      state.selectedAttention = {};
      state.selectedAttentionName = "";
    },
    DELETE_ATTENTION(state, info) {
      for (let i = 0; i < state.attentionList.length; i++) {
        if (state.attentionList[i].no == info.no) {
          state.attentionList.splice(i, 1);
          break;
        }
      }
      state.orderedAttentionList = JSON.parse(JSON.stringify(state.attentionList));
    },
  },
  actions: {
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
    orderByRank({ commit }, rank) {
      commit("ORDER_BY_RANK", rank);
    },
    setMapCenter({ commit }, center) {
      commit("SET_MAP_CENTER", center);
    },
    setAttentionDeals({ commit }, data) {
      commit("SET_ATTENTION_DEALS", data);
    },
    getAttentionList({ commit, state }) {
      const loginUser = JSON.parse(localStorage.getItem("loginUser"));
      const url = `http://localhost:8000/member/attention`;
      state.isLoading = true;
      axios({
        method: "get",
        url: url,
        headers: {
          Authorization: loginUser.token,
        },
      })
        .then((response) => {
          commit("GET_ATTENTION_LIST", response.data.attention);
          state.isLoading = false;
        })
        .catch((error) => {
          console.log(error);
          state.isLoading = false;
        });
    },
  },
};

export default attentionStore;
