<template>
  <div id="login-form" class="container flex-box">
    <div class="login-box flex-box">
      <div class="input-container flex-box">
        <input type="text" placeholder="아이디" v-model="id" />
      </div>
      <div class="input-container flex-box">
        <input type="password" placeholder="패스워드" v-model="password" @keyup.enter="doLogin" />
      </div>
      <div class="button-container flex-box">
        <button class="button" @click="doLogin">로그인</button>
      </div>
      <template v-if="loginResult === 'success'">{{ $router.push("/") }}</template>
      <template v-if="loginResult === 'failed'">로그인 실패</template>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from "vuex";
  export default {
    name: "MemberLoginForm",
    data() {
      return {
        id: "",
        password: "",
      };
    },
    computed: {
      ...mapGetters(["loginResult"]),
    },
    methods: {
      ...mapActions(["login"]),
      doLogin: function () {
        if (!this.id || !this.password) {
          alert("아이디와 패스워드를 입력하세요");
          return;
        }
        //console.log("login");
        this.login({ id: this.id, password: this.password });
        //console.log(this.loginResult);
      },
    },
  };
</script>

<style scoped>
  #login-form {
    height: 600px;
  }
  .login-box {
    width: 400px;
    height: 400px;
    flex-direction: column;
    justify-content: space-between;
  }
  .input-container {
    flex: 1;
    width: 100%;
  }
  .button-container {
    flex: 1;
  }
  input {
    width: 90%;
    height: 30px;
  }
</style>
