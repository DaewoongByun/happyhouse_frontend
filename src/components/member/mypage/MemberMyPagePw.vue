<template>
  <div id="my-page-pw" class="flex-box">
    <div class="input-container flex-box">
      <label for="">현재 비밀번호</label>
      <input type="password" placeholder="현재 비밀번호" v-model="currentPassword" />
    </div>
    <div class="input-container flex-box">
      <label for="">새로운 비밀번호</label>
      <input type="password" placeholder="새로운 비밀번호" v-model="newPassword" />
    </div>
    <div class="input-container flex-box">
      <label for="">새로운 비밀번호 확인</label>
      <input
        type="password"
        placeholder="새로운 비밀번호 확인"
        v-model="newPasswordConf"
        @keyup="check"
      />
      <div v-if="messageShow">불일치</div>
    </div>
    <div class="button-container flex-box">
      <button class="button" @click="modify">수정</button>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import { mapActions, mapGetters } from "vuex";
  export default {
    name: "MyPagePw",
    data() {
      return {
        currentPassword: "",
        newPassword: "",
        newPasswordConf: "",
      };
    },
    computed: {
      ...mapGetters(["loginUser"]),
    },
    methods: {
      ...mapActions(["logout"]),
      inputClear: function () {
        this.currentPassword = "";
        this.newPassword = "";
        this.newPasswordConf = "";
      },
      modify: function () {
        const url = `http://localhost:8000/member/pass/${this.loginUser.id}`;
        axios({
          method: "put",
          url: url,
          data: {
            password: this.currentPassword,
            newPassword: this.newPassword,
          },
          headers: {
            Authorization: this.loginUser.token,
          },
        })
          .then((response) => {
            alert("수정 완료");
            //console.log(response);
            this.logout();
            this.$router.push("/");
          })
          .catch((error) => {
            //console.log(error);
            alert("비밀번호를 확인하세요");
            this.inputClear();
          });
      },
    },
  };
</script>

<style scoped>
  #my-page-pw {
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
  label {
    flex: 3;
  }
  input {
    flex: 7;
    height: 30px;
  }
  .input-container {
    flex: 1;
    width: 100%;
    padding: 0px 20px;
    box-sizing: border-box;
  }
  .button-container {
    flex: 1;
    width: 100%;
    justify-content: flex-end;
    padding: 0px 20px;
  }
</style>
