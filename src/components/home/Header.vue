<template>
  <div id="header" class="container-fluid">
    <div class="header__title">
      <div @click="goHome" class="header__title__text">HAPPY HOUSE</div>
    </div>
    <div class="header__nav flex-box">
      <div class="navbar__item__container flex-box">
        <div class="navbar__item flex-box" @click="goSearch">매매 검색</div>
        <div class="line line1" :class="viewNum == 1 ? 'visible' : 'invisible'"></div>
      </div>
      <div class="navbar__item__container flex-box">
        <div class="navbar__item flex-box" @click="goBoard">자유 게시판</div>
        <div class="line line2" :class="viewNum == 2 ? 'visible' : 'invisible'"></div>
      </div>
      <div class="navbar__item__container flex-box">
        <div class="navbar__item flex-box" @click="goNotice">공지사항</div>
        <div class="line line3" :class="viewNum == 3 ? 'visible' : 'invisible'"></div>
      </div>
      <div class="navbar__item__container flex-box">
        <div class="navbar__item flex-box" @click="goAttention">관심 아파트</div>
        <div class="line line4" :class="viewNum == 4 ? 'visible' : 'invisible'"></div>
      </div>
    </div>
    <div class="header__member">
      <template v-if="!loginUser.id">
        <div class="header__member__item" @click="goLogin">로그인</div>
        <div class="header__member__item" @click="goRegist">회원가입</div>
      </template>
      <template v-if="loginUser.id">
        <div class="header__member__item" @click.prevent="goMyPage">
          <b-icon icon="person-fill" aria-hidden="true"></b-icon>
          {{ loginUser.id }}
        </div>
        <div class="header__member__item" @click.prevent="doLogout">로그아웃</div>
      </template>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";

  export default {
    name: "Header",
    computed: {
      ...mapGetters(["loginUser"]),
    },
    methods: {
      ...mapActions(["logout"]),
      doLogout: function () {
        this.logout();
        this.$router.push({ name: "Home" });
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
