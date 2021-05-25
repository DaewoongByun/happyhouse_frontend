<template>
  <div id="notice" class="container flex-box">
    <div class="Notice__top flex-box">
      <div class="Notice__header">
        <h1>공지사항</h1>
      </div>
      <div class="Notice__searchBar">
        <NoticeSearchBar />
      </div>
    </div>
    <div class="Notice__mid flex-box">
      <router-view />
    </div>
    <div class="Notice__bottom flex-box">
      <div class="Notice__Pagenation"></div>
      <div class="Notice__writeBtn">
        <button class="btn__write" @click="writeArticle" v-if="check()">글쓰기</button>
      </div>
    </div>
  </div>
</template>

<script>
  import NoticeSearchBar from "@/components/notice/NoticeSearchBar";
  export default {
    name: "Notice",
    components: {
      NoticeSearchBar,
    },
    data() {
      return {};
    },
    computed: {},
    methods: {
      writeArticle() {
        this.$router.push("/notice/write");
      },
      check() {
        if (JSON.parse(localStorage.getItem("loginUser")).id === "ssafy") {
          return true;
        } else {
          return false;
        }
      },
    },
    created() {
      console.log("notice vue created");
    },
  };
</script>

<style scoped>
  #notice {
    margin-top: 20px;
    height: auto;
    flex-direction: column;
  }
  .Notice__top {
    width: 100%;
    height: 100px;
  }
  .Notice__header {
    flex: 5;
    justify-items: center;
  }
  h1 {
    display: inline-block;
  }
  .Notice__searchBar {
    flex: 3;
    justify-items: flex-end;
  }
  .Notice__mid {
    width: 100%;
    min-height: 600px;
  }
  .Notice__bottom {
    width: 100%;
    height: 50px;
  }
  .Notice__Pagenation {
    flex: 7;
    justify-content: center;
  }
  .Notice__writeBtn {
    flex: 0;
    justify-content: flex-end;
  }
  .btn__write {
    height: 50px;
    width: 100px;
    background-color: #4caf50;
    border-radius: 8px;
    transition-duration: 0.4s;
    color: white;
  }
</style>
