<template>
  <div id="Notice_Article" class="container">
    <div class="article__head">
      <div class="article__head__top">
        <div class="article__title">{{ article.title }}</div>
        <div class="article__time">{{ article.regdate }}</div>
      </div>
      <div class="article__head__bottom">
        <div class="article__user">{{ article.user }}</div>
      </div>
    </div>
    <div class="article__content" v-html="article.content"></div>
    <div class="footer flex-box">
      <b-button variant="outline-primary" v-if="checkMyArticle" @click="modifyArticle"
        >수정</b-button
      >
      <b-button variant="outline-danger" v-if="checkMyArticle" @click="deleteArticle"
        >삭제</b-button
      >
      <b-button variant="outline-info" @click="$router.push('/notice')">목록</b-button>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import { mapGetters } from "vuex";

  export default {
    name: "NoticeArticle",
    data() {
      return {
        article: "",
      };
    },
    created() {
      this.getArticle(this.$route.params.no);
    },
    computed: {
      ...mapGetters(["loginUser"]),
    },
    methods: {
      getArticle(no) {
        axios({
          method: "get",
          url: "http://localhost:8000/notice/" + no,
          headers: {
            Authorization: this.loginUser.token,
          },
        })
          .then((Response) => {
            //console.log(Response.data.article);
            this.article = Response.data.article;
          })
          .catch((error) => {
            console.dir(error);
          });
      },
      checkMyArticle() {
        if (this.article.user === this.loginUser.id) {
          return true;
        } else {
          return false;
        }
      },
      modifyArticle() {
        this.$router.push(`/notice/${this.article.no}/modify`);
      },
      deleteArticle() {
        console.log(this.article);
        const x = confirm("정말 삭제하시겠습니까?");
        console.log(x);
        if (x) {
          axios({
            method: "DELETE",
            url: "http://localhost:8000/notice/" + this.article.no,
            headers: {
              Authorization: this.loginUser.token,
            },
          })
            .then((response) => {
              console.log(response);
              this.$router.push("/notice");
            })
            .catch((error) => {
              console.dir(error);
            });
        }
      },
    },
  };
</script>

<style scoped>
  #Notice_Article {
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
  .footer {
    justify-content: flex-end;
  }
  .btn {
    margin: 2px;
  }
</style>
