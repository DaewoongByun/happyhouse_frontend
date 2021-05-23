<template>
  <div id="house" class="container flex-box">
    <div class="house__top flex-box">
      <div class="house__top__searchBar flex-box">
        <search-bar></search-bar>
      </div>
      <div class="house__top__selectBar flex-box">
        <select-bar />
      </div>
    </div>
    <div class="house__mid flex-box">
      <div class="house__mid__apt flex-box">
        <div class="house__mid__apt__info flex-box">
          <house-info />
        </div>
        <div class="house__mid__apt__deal flex-box">
          <house-deal />
        </div>
      </div>
      <div class="house__mid__map flex-box">
        <Map />
      </div>
    </div>
    <div class="house__bottom flex-box">
      <div class="house__bottom__chart flex-box"></div>
    </div>
  </div>
</template>

<script>
import SearchBar from '../components/home/SearchBar.vue';
import SelectBar from '../components/house/SelectBar.vue';
import HouseInfo from '../components/house/HouseInfo.vue';
import HouseDeal from '../components/house/HouseDeal.vue';
import Map from '../components/house/Map.vue';
export default {
  name: 'House',
  components: {
    SearchBar,
    SelectBar,
    HouseInfo,
    HouseDeal,
    Map,
  },
};
</script>

<style scoped>
#house {
  margin-top: 20px;
  height: auto;
  flex-direction: column;
}
.house__top {
  width: 100%;
  height: 150px;
}
.house__top__searchBar {
  height: 100%;
  flex: 4;
  align-items: flex-start;
}
.house__top__selectBar {
  height: 100%;
  flex: 6;
}

.house__mid {
  width: 100%;
  height: 600px;
}
.house__mid__apt {
  height: 100%;
  flex: 4;
}
.house__mid__apt__info {
  height: 100%;
  flex: 1;
}
.house__mid__apt__deal {
  height: 100%;
  flex: 1;
}
.house__mid__map {
  flex: 6;
  height: 100%;
}
.house__bottom {
  width: 100%;
}
.house__bottom__chart {
}
</style>
