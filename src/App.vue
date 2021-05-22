<template>
  <div id="app">
    <Header />
    <NavBar />
    <router-view />
  </div>
</template>
<script>
import Header from './components/home/Header';
import NavBar from './components/home/NavBar';
import { mapActions } from 'vuex';
export default {
  components: {
    Header,
    NavBar,
  },
  created() {
    const loginUser = JSON.parse(localStorage.getItem('loginUser'));
    if (loginUser) {
      this.setLogin(loginUser);
    }
  },
  methods: {
    ...mapActions(['setLogin']),
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');
* {
  font-family: 'Nanum Gothic', sans-serif;
}
#app {
  height: auto;
}
.container {
  margin-left: 3%;
  margin-right: 3%;
}
.flex-box {
  display: flex;
  justify-content: center;
  align-items: center;
}
.button {
  background-color: #b6c9f0; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 0px 10px;
  cursor: pointer;
}
.button:hover {
  opacity: 0.8;
}
.danger {
  background-color: #e93b81;
}
</style>
