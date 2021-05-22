<template>
  <div id="my-page-pw" class="flex-box">
    <div class="input-container flex-box">
      <label for="">현재 비밀번호</label>
      <input type="text" placeholder="" />
    </div>
    <div class="input-container flex-box">
      <label for="">새로운 비밀번호</label>
      <input type="text" placeholder="" />
    </div>
    <div class="input-container flex-box">
      <label for="">새로운 비밀번호 확인</label>
      <input type="text" placeholder="" />
    </div>
    <div class="button-container flex-box">
      <button>수정</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyPagePw',
};
</script>

<style scoped>
#my-page-pw {
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
