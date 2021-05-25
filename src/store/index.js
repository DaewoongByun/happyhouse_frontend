import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loginUser: {
      id: '',
      token: '',
    },
    loginResult: '',
    houseinfos: [],
    housedeals: [],
    selectedHouseName: '',
    isLoading: false,
    noticelist: [],
    boardlist: [],
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
    }
  },
  mutations: {
    LOGIN(state, data) {
      state.loginUser.id = data.id;
      state.loginUser.token = data.token;
      state.loginResult = 'success';
      localStorage.setItem('loginUser', JSON.stringify(state.loginUser));
    },
    LOGIN_FAILED(state) {
      state.loginResult = 'failed';
    },
    LOGOUT(state) {
      state.loginUser.id = '';
      state.loginUser.token = '';
      state.loginResult = '';
      localStorage.removeItem('loginUser');
    },
    SET_HOUSEINFOS(state, data) {
      state.houseinfos = data.houseinfo;
      state.housedeals = [];
      state.selectedHouseName = '';
      console.log(state.houseinfos);
    },
    SET_HOUSE_DEALS(state, data) {
      state.housedeals = data.deals;
      state.selectedHouseName = data.name;
      console.log(`${state.selectedHouseName} 선택`);
      console.log(state.housedeals);
    },

    SET_NOTICE_LIST(state, data) {
      state.noticelist = data.board;
    },
    SET_BOARD_LIST(state, data) {
      state.boardlist = data.board;
    }
  },
  actions: {
    setHouseDeals({ commit }, data) {
      commit('SET_HOUSE_DEALS', data);
    },
    setHouseinfos({ commit, state }, search) {
      state.isLoading = true;
      const url = `http://localhost:8000/search/apt/${search.code}/${search.dong}`;
      axios({
        method: 'get',
        url: url,
        headers: {
          'Authorization': state.loginUser.token,
        },
      })
        .then((response) => {
          commit('SET_HOUSEINFOS', response.data);
          state.isLoading = false;
        })
        .catch((error) => {
          console.log(error);
          state.isLoading = false;
        });
    },
    setLogin({ commit }, loginUser) {
      commit('LOGIN', loginUser);
    },
    login({ commit }, inputData) {
      console.log('loginAction');
      console.log(inputData);
      axios({
        method: 'post',
        url: 'http://localhost:8000/member/login',
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
          commit('LOGIN', loginUser);
        })
        .catch(function (error) {
          commit('LOGIN_FAILED');
          console.dir(error);
        });
    },
    logout({ commit }) {
      console.log('logoutAction');
      commit('LOGOUT');
    },
    getNoticeList({ commit, state }, params=null) {
      //console.log("getNoticeList");
      axios({
        method: 'get',
        url: 'http://localhost:8000/notice',
        headers: {
          'Authorization': state.loginUser.token,
        },
        params : params,
      })
        .then((response) => {
        console.dir(response);
        commit('SET_NOTICE_LIST', response.data);
      })
        .catch(function (error) {
        console.dir(error);
      });
    },
    getBoardList({ commit, state }, params = null) {
      axios({
        method: 'get',
        url: 'http://localhost:8000/board',
        headers: {
          'Authorization': state.loginUser.token,
        },
        params : params,
      })
        .then((response) => {
        console.dir(response);
        commit('SET_BOARD_LIST', response.data);
      })
        .catch(function (error) {
          console.dir(error);
      });
    }
  },
  modules: {},
});
