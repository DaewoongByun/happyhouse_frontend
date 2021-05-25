<template>
  <div id="my-page-default" class="flex-box">
    <div class="input-container flex-box">
      <label for="">아이디</label>
      <input type="text" v-model="id" />
    </div>
    <div class="input-container flex-box">
      <label for="">이름</label>
      <input type="text" v-model="name" />
    </div>
    <div class="input-container flex-box">
      <label for="">이메일</label>
      <input type="text" v-model="email" />
    </div>
    <div class="input-container flex-box">
      <label for="">휴대전화 번호</label>
      <input type="text" v-model="tel" />
    </div>
    <div class="button-container flex-box">
      <button class="button" @click="modify">수정</button>
      <button class="button danger" @click="deleteMember">삭제</button>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
  import axios from "axios";
  export default {
    name: "MyPageDefaeult",
    data() {
      return {
        id: "",
        tel: "",
        name: "",
        email: "",
      };
    },
    computed: {
      ...mapGetters(["loginUser"]),
    },
    methods: {
      ...mapActions(["logout"]),
      modify: function () {
        const url = `http://localhost:8000/member/mypage/${this.loginUser.id}`;
        axios({
          method: "put",
          url: url,
          data: {
            email: this.email,
            tel: this.tel,
            name: this.name,
          },
          headers: {
            Authorization: this.loginUser.token,
          },
        })
          .then((response) => {
            alert("수정 완료");
            console.log(response);
            this.$router.push("/");
          })
          .catch((error) => {
            console.log(error);
          });
      },
      deleteMember: function () {
        const url = `http://localhost:8000/member/mypage/${this.loginUser.id}`;
        axios({
          method: "delete",
          url: url,
          headers: {
            Authorization: this.loginUser.token,
          },
        })
          .then((response) => {
            alert("삭제 완료");
            console.log(response);
            this.logout();
            this.$router.push("/");
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    created() {
      const url = `http://localhost:8000/member/mypage/${this.loginUser.id}`;
      console.log(this.loginUser.id);
      axios({
        method: "get",
        url: url,
        headers: {
          Authorization: this.loginUser.token,
        },
      })
        .then((response) => {
          this.id = response.data.user.id;
          this.name = response.data.user.name;
          this.email = response.data.user.email;
          this.tel = response.data.user.tel;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  };
</script>

<style scoped>
  #my-page-default {
    flex-direction: column;
    height: 100%;
    width: 100%;
    background-color: whitesmoke;
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
