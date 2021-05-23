<template>
  <div id="house-info" class="flex-box">
    <house-info-item
      v-for="(houseinfo, i) in houseinfos"
      :key="i"
      :houseinfo="houseinfo"
      :idx="i"
    ></house-info-item>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import HouseInfoItem from './HouseInfoItem';
export default {
  name: 'HouseInfo',
  computed: {
    ...mapGetters(['houseinfos']),
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
