<template>
  <div id="home">
    <div class="home__searchbar">
      <search-bar></search-bar>
    </div>
    <div id="backimg">
      <!-- <img id="backimg" src="../assets/house/wallpaper6.jpg" /> -->
    </div>
  </div>
</template>

<script>
  let nystories = document.querySelector("div").offsetTop;
  window.onscroll = function () {
    if (window.pageYOffset > 0) {
      let opac = window.pageYOffset / nystories;
      console.log(opac);
      document.getElementById("backimg").style.background =
        "linear-gradient(rgba(255, 255, 255, " +
        opac +
        "), rgba(255, 255, 255, " +
        opac +
        ")), url(../assets/house/wallpaper6.jpg)";
    }
  };
  import SearchBar from "../components/home/SearchBar";
  export default {
    name: "Home",
    components: {
      SearchBar,
    },
  };
</script>

<style scoped>
  #home {
    min-height: 1000px;
  }
  .home__searchbar {
    height: 50px;
  }
  img {
    width: 100%;
    height: 700px;
  }
  img:hover {
    filter: brightness(60%);
    transition: filter 1s;
  }

  #backimg {
    height: 700px;
    width: 100%;
    background-image: url("../assets/house/wallpaper6.jpg");
    background-repeat: no-repeat;
    background-attachment: fixed !important;
    background-size: 100% !important;
    background-position: center top !important;
    padding: 1rem;
    padding-top: 45%;
    color: #fff;
  }
</style>
