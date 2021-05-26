<template>
  <div id="home" class="flex-box">
    <div :class="y > 0 ? 'small-img' : 'img'">
      <div class="home-text" ref="homeText">
        <div class="home-text__title typing-demo">
          쾌락과 궁전 속을 거니는 것도<br />언제나 초라한 내 집보다 편안하지는 않다.
        </div>
        <div class="home-text__sub">-J.H.페인 즐거운 나의 집 중-</div>
      </div>
      <div class="arrow" :class="y > 0 ? 'invisible' : ''">
        <b-icon
          icon="arrow-down"
          animation="cylon-vertical"
          font-scale="4"
          style="color: white"
        ></b-icon>
      </div>
    </div>
    <div class="home__searchbar">
      <search-bar></search-bar>
    </div>
    <div class="home__logo flex-box" :class="y > 0 ? '' : 'invisible2'">
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
    data() {
      return {
        y: 0,
      };
    },
    methods: {
      handleScroll() {
        this.y = window.scrollY;
        if (this.y > 0) {
          this.$refs.homeText.classList.add("disappear");
          this.$refs.homeText.classList.add("invisible");
        } else {
          this.$refs.homeText.classList.remove("invisible");
          this.$refs.homeText.classList.remove("disappear");
          this.$refs.homeText.classList.add("appear");
        }
      },
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll);
      this.handleScroll();
    },
    destroyed() {
      window.removeEventListener("scroll", this.handleScroll);
    },
  };
</script>

<style scoped>
  #home {
    min-height: 800px;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
  }
  .home__searchbar {
    height: 50px;
    width: 100%;
    margin-top: 20px;
  }

  .img {
    width: 100%;
    height: 1000px;
    background-image: url("../assets/house/wallpaper6.jpg");
    transition-duration: 1s;
    position: fixed;
    top: 0;
    z-index: 2;
  }
  .small-img {
    width: 1200px;
    height: 360px;
    background-image: url("../assets/house/wallpaper6.jpg");
    transition-duration: 1s;
  }
  .arrow {
    position: fixed;
    bottom: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .invisible2 {
    display: none;
  }
  .invisible {
    display: none;
    transition-delay: 0.8s;
  }
  .home-text__title {
    font-size: 50px;
    text-shadow: 2px 1px 0px white;
  }
  .home-text__sub {
    font-size: 30px;
  }
  .home-text {
    position: fixed;
    left: 100px;
    top: 20%;
    color: black;
    font-weight: 600;
    display: flex;
    flex-direction: column;
  }
  .appear {
    animation: fade-in 0.8s;
    animation-fill-mode: forwards;
    display: flex;
  }

  .disappear {
    animation: fade-out 0.8s;
    animation-fill-mode: forwards;
  }
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
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
  .typing-demo {
    width: 100%;
    animation: typing 2s steps(22), blink 0.5s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
  }

  @keyframes typing {
    from {
      width: 0;
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
</style>
