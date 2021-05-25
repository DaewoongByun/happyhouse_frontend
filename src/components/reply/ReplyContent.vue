<template>
  <div id="reply-content" v-bind:class="classcheck">
    <div class="reply__content" v-html="item.content" v-if="modifyflag"></div>
    <div class="reply__content__modify flex-box" v-else>
      <textarea v-model.trim="item.content" />
      <b-button class="reply__modify__btn" @click="modifyReply">등록</b-button>
    </div>
    <div class="reply__bottom flex-box">
      <div class="reply__user">{{ item.user }}</div>
      <div class="reply__regdate">{{ item.regdate }}</div>
      <div class="reply__btn flex-box" v-if="checkMe()">
        <a href="" v-if="checkMe()" @click.prevent="doModifyReply">수정</a>
        <a href="" v-if="item.upNo == 0" @click.prevent="addReply">답글</a>

        <a href="" @click.prevent="deleteReply" class="delete__reply">삭제</a>
      </div>
    </div>
    <div v-if="openflag">
      <ReplyWrite :boardNo="item.boardNo" :up="item.no" />
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import { mapGetters } from "vuex";
  import ReplyWrite from "../reply/ReplyWrite";
  export default {
    name: "ReplyContent",
    props: ["item"],
    data() {
      return {
        openflag: false,
        modifyflag: true,
      };
    },
    components: {
      ReplyWrite,
    },
    computed: {
      ...mapGetters(["loginUser"]),
      classcheck() {
        return {
          re__reply: this.item.upNo > 0,
        };
      },
    },
    methods: {
      checkMe() {
        if (this.item.user === this.loginUser.id) {
          return true;
        } else {
          return false;
        }
      },
      deleteReply() {
        let flag = confirm("삭제하시겠습니까?");
        console.log(flag);
        if (flag) {
          axios({
            method: "delete",
            url: "http://localhost:8000/board/reply/" + this.item.no,
            headers: {
              Authorization: this.loginUser.token,
            },
          })
            .then(() => {
              alert("삭제되었습니다.");
              location.reload();
            })
            .catch((error) => {
              console.dir(error);
            });
        }
      },
      addReply() {
        this.openflag = this.openflag ? false : true;
      },
      doModifyReply() {
        this.modifyflag = this.modifyflag ? false : true;
      },
      modifyReply() {
        // console.log(this.item);
        axios({
          method: "put",
          url: "http://localhost:8000/board/reply/" + this.item.no,
          headers: {
            Authorization: this.loginUser.token,
          },
          data: this.item,
        })
          .then(() => {
            location.reload();
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
  };
</script>

<style scoped>
  #reply-content {
    width: 90%;
    min-height: 100px;
  }
  .reply__content {
    font-size: 20px;
  }
  textarea {
    font-size: 20px;
    height: 60px;
    flex: 8;
  }
  .reply__modify__btn {
    height: 60px;
    flex: 1;
    margin: 3px;
  }
  .re__reply {
    margin-left: 50px;
  }
  .reply__bottom {
    font-size: 16px;
    justify-content: flex-start;
  }
  .reply__user {
    margin-right: 5px;
    min-width: 60px;
    border-right: 1px solid black;
    color: gray;
  }
  .reply__regdate {
    margin-left: 5px;
    color: gray;
  }
  a {
    text-decoration: none;
    margin-left: 5px;
  }
  a.delete__reply {
    margin-left: 5px;
    color: red;
    font-size: 1rem;
  }
  a.delete__reply:hover {
    text-decoration: underline;
    color: brown;
  }
</style>
