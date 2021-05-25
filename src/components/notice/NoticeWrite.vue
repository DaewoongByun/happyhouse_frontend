<template>
  <div id="notice_write" class="container flax-box">
    <div class="article__head">
      <div class="article__head__top">
        <input class="article__title" v-model.trim="article.title" ref="input" placeholder="제목" />
      </div>
      <div class="article__head__bottom"></div>
    </div>
    <div class="article__content">
      <textarea v-model.trim="article.content" placeholder="내용" />
    </div>
    <div class="footer flex-box">
      <b-button variant="outline-primary" @click="writeArticle">완료</b-button>
      <b-button variant="outline-danger" @click="$router.push('/notice')">취소</b-button>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  // import axios from 'axios';
  export default {
    data() {
      return {
        article: {
          title: "",
          user: "",
          content: "",
        },
      };
    },
    methods: {
      writeArticle() {
        const loginUser = JSON.parse(localStorage.getItem("loginUser"));
        const user = loginUser.id;
        this.article.user = user;
        console.log(this.article);
        axios({
          method: "POST",
          url: "http://localhost:8000/notice",
          headers: {
            Authorization: loginUser.token,
          },
          data: this.article,
        })
          .then(() => {
            alert("공지사항 작성 완료");
            this.$router.push("/notice");
          })
          .catch((error) => {
            console.dir(error);
            alert("공지사항 작성 실패. 확인해주세요.");
          });
      },
    },
  };
</script>

<style scoped>
  #notice_write {
    height: 600px;
  }
  .article__head {
    padding: 10px;
    border-bottom: 1px solid #e3e3eb;
  }
  .article__head__top {
    justify-content: space-between;
  }
  .article__title {
    font-size: 28px;
  }
  .article__time {
    font-size: 12px;
    color: gray;
    display: flex;
    align-items: flex-end;
  }
  .article__user {
    font-size: 16px;
    color: gray;
  }
  .article__content {
    display: flex;
    padding: 20px;
    border-bottom: 1px solid #e3e7eb;
    min-height: 200px;
  }
  input {
    width: 100%;
    border: none;
  }
  textarea {
    width: 100%;
    border: none;
    resize: none;
  }
</style>
