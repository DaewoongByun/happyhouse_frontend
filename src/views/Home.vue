<template>
  <div class="home">
    <search-bar></search-bar>
  </div>
</template>

<script>
import SearchBar from '../components/home/SearchBar';
export default {
  name: 'Home',
  components: {
    SearchBar,
  },
};
</script>
