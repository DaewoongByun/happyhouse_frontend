<template>
  <div id="NoticeSearchBar" class="Container flex-box">
    <select class="SearchSelector" v-model="key">
      <option value="title" selected>제목</option>
      <option value="user">작성자</option>
      <option value="content">제목+내용</option>
    </select>
    <input type="text" placeholder="검색어를 입력하세요" v-model="word" @keyup.enter="searchWord" />
    <button @click="searchWord">검색</button>
  </div>
</template>

<script>
  import { mapActions } from "vuex";
  export default {
    name: "NoticeSearchBar",
    data() {
      return {
        key: "title",
        word: "",
      };
    },
    methods: {
      ...mapActions(["getNoticeList"]),
      searchWord() {
        this.$router.push("/notice");
        const map = {
          key: this.key,
          word: this.word,
        };
        if (this.word.length > 0) {
          this.getNoticeList(map);
        } else {
          this.getNoticeList();
        }
        this.word = "";
      },
    },
  };
</script>

<style scoped>
  #NoticeSearchBar {
    margin-top: 20px;
  }
  input {
    height: 40px;
    width: 70%;
  }
  .SearchSelector {
    height: 40px;
    width: 100px;
  }
  button {
    height: 40px;
    width: 70px;
    background-color: #e7e7e7;
    border-radius: 8px;
    transition-duration: 0.2s;
  }
  button:hover {
    background-color: #4caf50; /* Green */
    color: white;
  }
</style>
