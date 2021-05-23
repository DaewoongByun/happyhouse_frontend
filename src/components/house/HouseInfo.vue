<template>
  <div id="house-info" class="flex-box">
    <template v-if="!isLoading">
      <div class="flex-box noresult" v-if="houseinfos.length == 0">검색 결과가 없습니다.</div>
      <house-info-item
        v-for="(houseinfo, i) in houseinfos"
        :key="i"
        :houseinfo="houseinfo"
        :idx="i"
      ></house-info-item>
    </template>
    <div class="loading-bar" v-if="isLoading">
      <b-icon icon="arrow-clockwise" animation="spin" font-scale="4"></b-icon>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import HouseInfoItem from './HouseInfoItem';
export default {
  name: 'HouseInfo',
  computed: {
    ...mapGetters(['houseinfos', 'isLoading']),
  },
  components: {
    HouseInfoItem,
  },
};
</script>

<style scoped>
#house-info {
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
</style>
