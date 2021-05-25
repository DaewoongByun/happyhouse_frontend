<template>
  <div id="house" class="container flex-box">
    <compare v-if="isCompare" :compareList="compareList" @exitCompare="exitCompare" />
    <template v-if="!isCompare">
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
            <house-info
              @compare="compare"
              @compareReset="compareReset"
              :compareList="compareList"
            />
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
        <div class="house__bottom__chart flex-box">
          <chart />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
  import SearchBar from "../components/home/SearchBar.vue";
  import SelectBar from "../components/house/SelectBar.vue";
  import HouseInfo from "../components/house/HouseInfo.vue";
  import HouseDeal from "../components/house/HouseDeal.vue";
  import Compare from "../components/house/Compare.vue";

  import Map from "../components/house/Map.vue";
  import Chart from "../components/house/Chart.vue";
  import { mapActions } from "vuex";
  export default {
    name: "House",
    components: {
      SearchBar,
      SelectBar,
      HouseInfo,
      HouseDeal,
      Map,
      Chart,
      Compare,
    },
    data() {
      return {
        isCompare: false,
        compareList: [],
      };
    },
    methods: {
      ...mapActions(["destroy"]),
      compare: function (compareList) {
        this.compareList = compareList;
        this.isCompare = true;
      },
      exitCompare: function () {
        this.isCompare = false;
      },
      compareReset: function () {
        this.compareList = [];
      },
    },
    destroyed() {
      this.destroy();
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
    margin-right: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  .house__top__selectBar {
    height: 100%;
    flex: 6;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .house__mid {
    width: 100%;
    height: 600px;
    margin-bottom: 20px;
    margin-top: 20px;
  }
  .house__mid__apt {
    height: 100%;
    flex: 4;
    margin-right: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  .house__mid__apt__info {
    height: 100%;
    flex: 1;
    border-right: 1px solid rgba(27, 31, 35, 0.15);
    padding: 5px;
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
    width: 100%;
    height: auto;
  }
</style>
