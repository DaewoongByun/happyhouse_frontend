<template>
  <div id="search-bar" class="container flex-box">
    <input
      type="text"
      @keyup="change"
      @focus="focus"
      @blur="blur"
      v-model="searchWord"
      placeholder="검색어를 입력하세요"
    />

    <div v-if="listShow" class="list-container">
      <div class="list-item flex-box" v-if="list.length === 0">결과가 없습니다.</div>
      <div class="list-item flex-box" v-for="(item, i) in list" :key="i" @click="search(item)">
        {{ i }} {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';
export default {
  name: 'SearchBar',
  data() {
    return {
      searchWord: '',
      list: [],
      codes: [],
      listShow: false,
    };
  },
  computed: {
    ...mapGetters(['loginUser']),
  },
  methods: {
    change: function () {
      console.log(this.searchWord);
      const url = `http://localhost:8000/search/${this.searchWord}`;
      axios({
        method: 'get',
        url: url,
        headers: {
          'Authorization': this.loginUser.token,
        },
      })
        .then((response) => {
          this.list = response.data.addresses;
          this.codes = response.data.codes;
        })
        .catch((error) => {
          console.log(error);
          this.list = [];
        });
    },
    focus: function () {
      this.listShow = true;
    },
    blur: function () {
      setTimeout(() => {
        this.listShow = false;
      }, 100);
    },
    search: function (item) {
      const dong = item.split(' ')[2];
      console.log(dong);
    },
  },
};
</script>

<style scoped>
#search-bar {
  margin-top: 20px;
  flex-direction: column;
}
input {
  height: 40px;
  width: 70%;
}
.list-container {
  width: 70%;
  padding: 0px 10px;
  box-sizing: border-box;
  max-height: 200px;
  overflow-y: auto;
}
.list-item {
  border-bottom: 1px solid black;
  height: 30px;
  justify-content: flex-start;
  margin-bottom: 5px;
  cursor: pointer;
}
.list-item:hover {
  background-color: whitesmoke;
}
</style>
