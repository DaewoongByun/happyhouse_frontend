<template>
  <div id="navbar" class="container">
    <div class="navbar__content flex-box">
      <div class="navbar__space"></div>
      <div class="navbar__item" @click="$router.push('/house')">매매 검색</div>
      <div class="navbar__space"></div>
      <div class="navbar__item" @click="$router.push('/board')">자유 게시판</div>
      <div class="navbar__space"></div>
      <div class="navbar__item" @click="$router.push('/notice')">공지사항</div>
      <div class="navbar__space"></div>
      <div class="navbar__item" @click="$router.push('/attention')">관심 아파트</div>
      <div class="navbar__space"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
#navbar {
  height: 60px;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
}
.navbar__content {
  width: 100%;
  height: 100%;
  box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
}
.navbar__space {
  flex: 1;
}
.navbar__item {
  flex: 2;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.navbar__item:hover {
  background-color: #bccab0;
}
</style>
