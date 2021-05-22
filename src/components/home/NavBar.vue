<template>
  <div id="navbar" class="container">
    <div class="navbar__space"></div>
    <div class="navbar__item">매매 검색</div>
    <div class="navbar__space"></div>
    <div class="navbar__item">자유 게시판</div>
    <div class="navbar__space"></div>
    <div class="navbar__item">공지사항</div>
    <div class="navbar__space"></div>
    <div class="navbar__item">관심 아파트</div>
    <div class="navbar__space"></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style scoped>
#navbar {
  height: 60px;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
}
.navbar__space {
  flex: 1;
}
.navbar__item {
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.navbar__item:hover {
  background-color: #bccab0;
}
</style>
