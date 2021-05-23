<template>
  <div id="house-info-item" class="flex-box">
    <div class="name-container flex-box" @click="showDeals">
      <div class="name">{{ houseinfo.aptName }}</div>
      <div class="buildyear">건축년도: {{ houseinfo.buildYear }}</div>
    </div>
    <div class="icon-container flex-box">
      <div class="icon">
        <b-icon icon="star" aria-hidden="true"></b-icon>
      </div>
      <div class="icon">
        <b-icon icon="check-square" aria-hidden="true"></b-icon>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'HouseInfoItem',
  props: ['houseinfo', 'idx'],
  methods: {
    ...mapActions(['setHouseDeals']),
    showDeals: function () {
      const data = {
        name: this.houseinfo.aptName,
        deals: this.houseinfo.dealInfos,
      };
      this.setHouseDeals(data);
    },
  },
};
</script>

<style scoped>
#house-info-item {
  width: 100%;
  height: 120px;
  flex-direction: column;
  border-bottom: 1px solid black;
}
.name-container {
  flex: 7;
  width: 100%;
  flex-direction: column;
  padding: 5px;
  cursor: pointer;
}
.name {
  width: 100%;
  font-size: 20px;
  font-weight: 600;
}
.buildyear {
  width: 100%;
  font-size: 13px;
}
.icon-container {
  flex: 3;
  justify-content: flex-end;
  padding: 5px;
  width: 100%;
}
.icon {
  margin: 0px 3px;
  cursor: pointer;
}
</style>
