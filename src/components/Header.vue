<template>
  <div id="header" class="container">
    <div class="header__logo">
      <div>SSAFY</div>
    </div>
    <div class="header__title">
      <div>HAPPY HOUSE</div>
    </div>
    <div class="header__member">
      <template v-if="!loginUser.id">
        <div @click="$router.push('/member/login')">로그인</div>
        <div @click="$router.push('/member/regist')">회원가입</div>
      </template>
      <template v-if="loginUser.id">
        <div>{{ loginUser.id }}님 안녕하세요</div>
        <div @click="doLogout">로그아웃</div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Header',
  computed: {
    ...mapGetters(['loginUser']),
  },
  methods: {
    ...mapActions(['logout']),
    doLogout: function () {
      this.logout();
      this.$router.push({ name: 'Home' });
    },
  },
};
</script>

<style scoped>
#header {
  height: 100px;
  display: flex;
  justify-content: center;
}
.header__logo {
  flex: 2;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header__title {
  flex: 8;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header__member {
  flex: 2;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
