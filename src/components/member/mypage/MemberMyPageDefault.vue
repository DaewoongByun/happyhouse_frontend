<template>
  <div id="my-page-default" class="flex-box">
    <div class="input-container flex-box">
      <label for="">아이디</label>
      <input type="text" placeholder="" />
    </div>
    <div class="input-container flex-box">
      <label for="">이름</label>
      <input type="text" placeholder="" />
    </div>
    <div class="input-container flex-box">
      <label for="">이메일</label>
      <input type="text" placeholder="" />
    </div>
    <div class="input-container flex-box">
      <label for="">휴대전화 번호</label>
      <input type="text" placeholder="" />
    </div>
    <div class="button-container flex-box">
      <button>수정</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyPageDefaeult',
};
</script>

<style scoped>
#my-page-default {
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: red;
}
label {
  flex: 3;
}
input {
  flex: 7;
}
</style>
