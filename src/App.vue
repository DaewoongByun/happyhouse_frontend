<template>
  <div id="app">
    <Header />
    <NavBar />
    <router-view />
  </div>
</template>
<script>
import Header from './components/Header';
import NavBar from './components/NavBar';
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
#app {
  height: auto;
}
.container {
  margin-left: 10%;
  margin-right: 10%;
}
.flex-box {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
