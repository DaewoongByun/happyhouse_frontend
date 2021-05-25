<template>
  <div id="home">
    <search-bar></search-bar>
    <div style="height: 800px"></div>
    <div class="home__logo flex-box">
      <div class="home__logo__icon slide-in-elliptic-top-fwd">
        <img src="../assets/vue.png" class="logo__icon" />
      </div>
      <div class="home__logo__icon slide-in-elliptic-top-fwd">
        <img src="../assets/mysql.png" class="logo__icon" />
      </div>
      <div class="home__logo__icon slide-in-elliptic-top-fwd">
        <img src="../assets/spring boot.png" class="logo__icon" />
      </div>
    </div>
    <div class="home__board flex-box container">
      <div class="home__list">
        <h2 style="text-align: center">공지사항</h2>
        <NoticeList :num="3" />
      </div>
      <div class="home__list">
        <h2 style="text-align: center">자유게시판</h2>
        <BoardList :num="3" />
      </div>
    </div>
  </div>
</template>

<script>
  import SearchBar from "../components/home/SearchBar";
  import NoticeList from "../components/notice/NoticeList";
  import BoardList from "../components/board/BoardList";
  export default {
    name: "Home",
    components: {
      SearchBar,
      NoticeList,
      BoardList,
    },
  };
</script>

<style scoped>
  #home {
    min-height: 600px;
  }
  .home__logo__icon {
    margin: 90px;
  }
  .logo__icon {
    height: 100px;
  }
  .home__board {
    width: 1500px;
  }
  .home__list {
    margin: 20px;
    flex: 5;
  }
  .slide-in-elliptic-top-fwd {
    -webkit-animation: slide-in-elliptic-top-fwd 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: slide-in-elliptic-top-fwd 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  @-webkit-keyframes slide-in-elliptic-top-fwd {
    0% {
      -webkit-transform: translateY(-600px) rotateX(-30deg) scale(0);
      transform: translateY(-600px) rotateX(-30deg) scale(0);
      -webkit-transform-origin: 50% 100%;
      transform-origin: 50% 100%;
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0) rotateX(0) scale(1);
      transform: translateY(0) rotateX(0) scale(1);
      -webkit-transform-origin: 50% 1400px;
      transform-origin: 50% 1400px;
      opacity: 1;
    }
  }
  @keyframes slide-in-elliptic-top-fwd {
    0% {
      -webkit-transform: translateY(-600px) rotateX(-30deg) scale(0);
      transform: translateY(-600px) rotateX(-30deg) scale(0);
      -webkit-transform-origin: 50% 100%;
      transform-origin: 50% 100%;
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0) rotateX(0) scale(1);
      transform: translateY(0) rotateX(0) scale(1);
      -webkit-transform-origin: 50% 1400px;
      transform-origin: 50% 1400px;
      opacity: 1;
    }
  }
</style>
