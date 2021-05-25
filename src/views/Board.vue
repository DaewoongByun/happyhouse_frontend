<template>
  <div id="board" class="container flex-box">
    <div class="Board__top flex-box">
      <div class="Board__header">
        <h1>자유게시판</h1>
      </div>
      <div class="Board__searchBar">
        <BoardSearchBar />
      </div>
    </div>
    <div class="Board__mid flex-box">
      <router-view />
    </div>
    <div class="Board__bottom flex-box">
      <div class="Board__Pagenation"></div>
      <div class="Board__writeBtn">
        <button class="btn__write" @click="writeArticle">글쓰기</button>
      </div>
    </div>
  </div>
</template>

<script>
  import BoardSearchBar from "../components/board/BoardSearchBar";
  export default {
    name: "Notice",
    components: {
      BoardSearchBar,
    },
    methods: {
      writeArticle() {
        this.$router.push("/board/write");
      },
    },
  };
</script>

<style scoped>
  #board {
    margin-top: 20px;
    height: auto;
    flex-direction: column;
  }
  .Board__top {
    width: 100%;
    height: 100px;
  }
  .Board__header {
    flex: 5;
    justify-items: center;
  }
  h1 {
    display: inline-block;
  }
  .Board__searchBar {
    flex: 3;
    justify-items: flex-end;
  }
  .Board__mid {
    width: 100%;
    min-height: 600px;
  }
  .Board__bottom {
    width: 100%;
    height: 50px;
  }
  .Board__Pagenation {
    flex: 7;
    justify-content: center;
  }
  .Board__writeBtn {
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
