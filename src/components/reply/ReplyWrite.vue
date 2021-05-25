<template>
  <div id="reply-write">
    <div class="write__content">
      <textarea v-model.trim="content" placeholder="댓글을 입력해주세요" />
    </div>
    <div class="write__btn">
      <b-button @click="writeReply">입력</b-button>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import { mapGetters } from "vuex";
  export default {
    name: "ReplyWrite",
    props: ["boardNo", "up"],
    data() {
      return {
        content: "",
        upNo: this.up,
        user: "",
      };
    },
    computed: {
      ...mapGetters(["loginUser"]),
    },
    methods: {
      writeReply() {
        const reply = {
          boardNo: this.boardNo,
          content: this.content,
          upNo: this.upNo,
          user: this.loginUser.id,
        };
        axios({
          method: "post",
          url: "http://localhost:8000/board/reply",
          data: reply,
          headers: {
            Authorization: this.loginUser.token,
          },
        })
          .then(() => {
            alert("댓글 작성 완료");
            location.reload();
            //this.$router.push(`/board/${this.boardNo}`);
          })
          .catch((error) => {
            console.dir(error);
          });
      },
    },
  };
</script>

<style>
  textarea {
    width: 100%;
    resize: none;
  }
</style>
