<template>
  <div id="my-page" class="container flex-box">
    <div class="my-page__nav flex-box">
      <div
        class="my-page__nav__item flex-box"
        @click="
          index = 1;
          checked = true;
        "
        :class="checked ? 'colored' : ''"
      >
        회원 정보 수정
      </div>
      <div
        class="my-page__nav__item flex-box"
        @click="
          index = 2;
          checked = false;
        "
        :class="checked ? '' : 'colored'"
      >
        비밀번호 변경
      </div>
    </div>
    <div class="my-page__content flex-box">
      <my-page-default v-if="index === 1"></my-page-default>
      <my-page-pw v-if="index === 2"></my-page-pw>
    </div>
  </div>
</template>

<script>
  import MyPageDefault from "./mypage/MemberMyPageDefault";
  import MyPagePw from "./mypage/MemberMyPagePw";
  export default {
    name: "MemberMyPage",
    data() {
      return {
        index: 1,
        checked: true,
      };
    },
    components: {
      MyPageDefault,
      MyPagePw,
    },
  };
</script>

<style scoped>
  #my-page {
    margin-top: 30px;
    height: 600px;
  }
  .my-page__nav {
    flex-direction: column;
    height: 100%;
    flex: 1;
    justify-content: flex-start;
  }
  .my-page__nav__item {
    height: 50px;
    width: 90%;
    cursor: pointer;
    border-bottom: 1px solid rgba(0, 0, 0, 0.24);
    font-size: 20px;
    font-weight: 600;
  }
  .my-page__nav__item:hover {
    background: #e1e1e1;
  }
  .my-page__content {
    height: 100%;
    flex: 3;
  }
  .colored {
    background: #e1e1e1;
  }
</style>
