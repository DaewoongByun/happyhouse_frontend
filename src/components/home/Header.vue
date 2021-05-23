<template>
  <div id="header" class="container">
    <div class="header__logo">
      <div><img src="../../assets/logo.png" /></div>
    </div>
    <div class="header__title">
      <div @click="$router.push('/')" class="header__title__text">HAPPY HOUSE</div>
    </div>
    <div class="header__member">
      <template v-if="!loginUser.id">
        <div class="header__member__item" @click="$router.push('/member/login')">로그인</div>
        <div class="header__member__item" @click="$router.push('/member/regist')">회원가입</div>
      </template>
      <template v-if="loginUser.id">
        <div class="header__member__item" @click.prevent="$router.push('/member/mypage')">
          {{ loginUser.id }}
        </div>
        <div class="header__member__item" @click.prevent="doLogout">로그아웃</div>
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
  font-size: 40px;
  font-weight: 600;
}
.header__title__text {
  cursor: pointer;
}
.header__member {
  flex: 2;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  font-size: 13px;
}
.header__member__item {
  cursor: pointer;
  margin-bottom: 10px;
}
.header__member__item:hover {
  color: #758c61;
}
img {
  height: 90px;
}
</style>
