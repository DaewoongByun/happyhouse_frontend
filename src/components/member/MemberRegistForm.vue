<template>
  <div id="regist-form" class="container flex-box">
    <div class="regist-box flex-box">
      <div class="input-container flex-box">
        <input type="text" placeholder="아이디" v-model="id" />
      </div>
      <div class="input-container flex-box">
        <input type="text" placeholder="이름" v-model="name" />
      </div>
      <div class="input-container flex-box">
        <input type="password" placeholder="비밀번호(최소 8자)" v-model="password" minlength="8" />
      </div>
      <div class="input-container flex-box">
        <input
          type="password"
          placeholder="비밀번호 확인"
          v-model="passwordConfirm"
          minlength="8"
        />
      </div>
      <div class="input-container flex-box">
        <input type="text" placeholder="휴대전화 번호" v-model="tel" />
      </div>
      <div class="input-container flex-box">
        <input type="text" placeholder="이메일" v-model="email" />
      </div>
      <div class="button-container flex-box">
        <button class="button" @click="regist">회원 가입</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "MemberRegistForm",
  data() {
    return {
      id: "",
      password: "",
      passwordConfirm: "",
      name: "",
      email: "",
      tel: "",
    };
  },
  methods: {
    emptyCheck: function () {
      if (
        !this.id ||
        !this.password ||
        !this.passwordConfirm ||
        !this.name ||
        !this.email ||
        !this.tel
      )
        return false;
      return true;
    },
    regist: function () {
      if (!this.emptyCheck()) {
        alert("모든 항목을 입력하세요");
        return;
      }
      axios({
        method: "post",
        url: "http://localhost:8000/member/regist",
        data: {
          id: this.id,
          password: this.password,
          name: this.name,
          email: this.email,
          tel: this.tel,
        },
      })
        .then((response) => {
          alert("회원가입 성공");
          console.log(this.$router.push("/"));
          console.dir(response);
        })
        .catch((error) => {
          alert("가입실패");
          console.dir(error);
        });
    },
  },
};
</script>

<style scoped>
#regist-form {
  height: 600px;
  margin-top: 20px;
}
.regist-box {
  flex-direction: column;
  width: 400px;
  height: 600px;
  justify-content: space-between;
}
.input-container {
  flex: 1;
  width: 100%;
}
.button-container {
  flex: 1;
  width: 100%;
}
input {
  width: 90%;
  height: 30px;
}
</style>
