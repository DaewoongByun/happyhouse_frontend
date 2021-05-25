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
      ...mapGetters(["loginUser", "viewNum"]),
    },
    methods: {
      ...mapActions(["logout", "setViewNum"]),
      doLogout: function () {
        this.logout();
        this.$router.push({ name: "Home" });
      },
      goHome: function () {
        this.$router.push("/");
        this.setViewNum(0);
      },
      goSearch: function () {
        this.$router.push("/house");
        this.setViewNum(1);
      },
      goBoard: function () {
        this.$router.push("/board");
        this.setViewNum(2);
      },
      goNotice: function () {
        this.$router.push("/notice");
        this.setViewNum(3);
      },
      goAttention: function () {
        this.$router.push("/attention");
        this.setViewNum(4);
      },
      goLogin: function () {
        this.$router.push("/member/login");
        this.setViewNum(0);
      },
      goRegist: function () {
        this.$router.push("/member/regist");
        this.setViewNum(0);
      },
      goMyPage: function () {
        this.$router.push("/member/mypage");
        this.setViewNum(0);
      },
    },
    watch: {
      viewNum: function () {
        console.log("viewNum change");
        if (this.viewNum == 0) {
          for (let i = 1; i <= 4; i++) {
            this.$refs[`line${i}`].classList.push("invisible");
          }
        }
      },
    },
  };
</script>

<style scoped>
  #header {
    height: 75px;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.24);
    position: fixed;
    top: 0px;
    background-color: white;
    z-index: 9999;
  }

  .header__title {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: 600;
    flex: 1;
  }
  .header__title__text {
    cursor: pointer;
  }
  .header__nav {
    flex: 4;
    height: 100%;
    font-weight: 600;
  }
  .navbar__item__container {
    width: auto;
    height: 100%;
    flex-direction: column;
  }
  .line {
    height: 3px;
    background-color: black;
    margin-top: 5px;
  }
  .line1 {
    width: 80px;
  }
  .line2 {
    width: 90px;
  }
  .line3 {
    width: 70px;
  }
  .line4 {
    width: 90px;
  }
  .visible {
    background-color: black;
    transition-duration: 0.5s;
  }
  .invisible {
    background-color: white;
    transition-duration: 0.5s;
  }
  .navbar__item {
    width: 120px;
    font-size: 18px;
    cursor: pointer;
  }
  .navbar__item:hover {
    transform: scale(1.15);
    transition-duration: 0.5s;
  }
  .header__member {
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
  }
  .header__member__item {
    cursor: pointer;
    margin-left: 20px;
    min-width: 100px;
  }
  .header__member__item:hover {
    color: #758c61;
  }
  img {
    height: 90px;
  }
</style>
