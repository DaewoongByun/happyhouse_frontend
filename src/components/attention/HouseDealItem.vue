<template>
  <div id="house-deal-item" class="flex-box">
    <div class="price-container flex-box">
      <div class="key" v-if="dealType == 'trade'">거래 금액 :</div>
      <div class="key" v-if="dealType == 'rent'">보증금 :</div>
      <div class="value">{{ housedeal.dealAmount }}</div>
      <div class="small">(만원)</div>
    </div>
    <div class="price-container flex-box" v-if="housedeal.rentMoney > 0">
      <div class="key" v-if="dealType == 'rent'">월세 :</div>
      <div class="value">{{ housedeal.rentMoney }}</div>
      <div class="small">(만원)</div>
    </div>
    <div class="date-container flex-box">
      <div class="key">거래 날짜 :</div>
      <div class="value">
        {{ housedeal.dealYear }}.{{ housedeal.dealMonth }}.{{ housedeal.dealday }}
      </div>
    </div>
    <div class="area-container flex-box">
      <div class="key">평수 :</div>
      <div class="value">{{ housedeal.area }}</div>
    </div>
    <div class="floor-container flex-box">
      <div class="key">층수 :</div>
      <div class="value">{{ housedeal.floor }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HouseDealItem",
  props: ["housedeal", "dealType"],
};
</script>

<style scoped>
#house-deal-item {
  width: 100%;
  height: 120px;
  flex-direction: column;
  border-bottom: 1px solid black;
  padding: 5px;
  align-items: flex-start;
}
.small {
  font-size: 12px;
}
</style>
