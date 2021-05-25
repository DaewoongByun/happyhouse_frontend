<template>
  <div id="home">
    <div class="home__searchbar">
      <search-bar></search-bar>
    </div>
    <div>
      <img id="backimg" src="../assets/house/wallpaper6.jpg" />
    </div>
  </div>
</template>

<script>
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
    min-height: 600px;
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
</style>
