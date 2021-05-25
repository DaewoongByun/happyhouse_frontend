<template>
  <div id="search-bar" class="flex-box">
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
      <div class="list-item flex-box" v-for="(item, i) in list" :key="i" @click="search(item, i)">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "SearchBar",
  data() {
    return {
      searchWord: "",
      list: [],
      codes: [],
      listShow: false,
    };
  },
  computed: {
    ...mapGetters(["loginUser"]),
  },
  methods: {
    ...mapActions(["setHouseinfos"]),
    change: function () {
      console.log(this.searchWord);
      const url = `http://localhost:8000/search/address/${this.searchWord}`;
      axios({
        method: "get",
        url: url,
        headers: {
          Authorization: this.loginUser.token,
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
      }, 200);
    },
    search: function (item, i) {
      const city = item.split(" ")[0];
      const gugun = item.split(" ")[1];
      const dong = item.split(" ")[2];
      const code = this.codes[i];
      console.log(code + " " + dong);
      this.searchWord = item;
      this.setHouseinfos({ dong, code, city, gugun });
      this.$router.push("/house");
    },
  },
};
</script>

<style scoped>
  #search-bar {
    margin-top: 20px;
    flex-direction: column;
    width: 100%;
  }
  input {
    height: 40px;
    width: 70%;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  input:focus {
    outline: none;
  }
  .list-container {
    width: 70%;
    padding: 0px 10px;
    box-sizing: border-box;
    max-height: 200px;
    overflow-y: auto;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  .list-item {
    border-bottom: 1px solid rgba(0, 0, 0, 0.24);
    height: 50px;
    justify-content: flex-start;
    margin-bottom: 5px;
    cursor: pointer;
  }
  .list-item:hover {
    background-color: whitesmoke;
  }
</style>
