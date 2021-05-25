/* eslint-disable */
<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>
<script>
<<<<<<< HEAD
import Header from "./components/home/Header";
import { mapActions } from "vuex";
import Footer from "./components/home/Footer";
export default {
  components: {
    Header,
    Footer,
  },

  created() {
    const loginUser = JSON.parse(localStorage.getItem("loginUser"));
    if (loginUser) {
      this.setLogin(loginUser);
    }
  },
  methods: {
    ...mapActions(["setLogin"]),
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap");

* {
  font-family: "Nanum Gothic", sans-serif;
  box-sizing: border-box;
}
#app {
  height: auto;
  background-color: white;
  padding-top: 75px;
}
.container {
  margin-left: 3%;
  margin-right: 3%;
}
.flex-box {
  display: flex;
  justify-content: center;
  align-items: center;
}
.button {
  background-color: #b6c9f0; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 0px 10px;
  cursor: pointer;
}
.button:hover {
  opacity: 0.8;
}
.danger {
  background-color: #e93b81;
}
*::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  background: #ffffff;
}
*::-webkit-scrollbar-thumb {
  border-radius: 3.5px;
  background-color: #ced4da;
}
*::-webkit-scrollbar-thumb:hover {
  background-color: #adb5bd;
}
*::-webkit-scrollbar-track {
  background: #ffffff;
}
=======
  import Header from "./components/home/Header";
  import NavBar from "./components/home/NavBar";
  import { mapActions } from "vuex";
  import Footer from "./components/home/Footer";
  export default {
    components: {
      Header,
      NavBar,
      Footer,
    },

    created() {
      const loginUser = JSON.parse(localStorage.getItem("loginUser"));
      if (loginUser) {
        this.setLogin(loginUser);
      }
    },
    methods: {
      ...mapActions(["setLogin"]),
    },
  };
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap");
  * {
    font-family: "Nanum Gothic", sans-serif;
    box-sizing: border-box;
  }
  #app {
    height: auto;
  }
  .container {
    margin-left: 0%;
    margin-right: 0%;
  }
  .flex-box {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .button {
    background-color: #b6c9f0; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 0px 10px;
    cursor: pointer;
  }
  .button:hover {
    opacity: 0.8;
  }
  .danger {
    background-color: #e93b81;
  }
  *::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background: #ffffff;
  }
  *::-webkit-scrollbar-thumb {
    border-radius: 3.5px;
    background-color: #ced4da;
  }
  *::-webkit-scrollbar-thumb:hover {
    background-color: #adb5bd;
  }
  *::-webkit-scrollbar-track {
    background: #ffffff;
  }
>>>>>>> cssbasic
</style>
/* eslint-disable */
