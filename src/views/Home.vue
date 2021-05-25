<template>
  <div id="home">
    <search-bar></search-bar>
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
  height: 600px;
}
</style>
