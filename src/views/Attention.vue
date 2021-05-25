<template>
  <div id="attention" class="flex-box container">
    <compare v-if="isCompare" :compareList="compareList" @exitCompare="exitCompare" />
    <template v-if="!isCompare">
      <div class="attention__top flex-box">
        <div class="attention__top__searchBar flex-box"></div>
        <div class="attention__top__selectBar flex-box">
          <select-bar />
        </div>
      </div>
      <div class="attention__mid flex-box">
        <div class="attention__mid__apt flex-box">
          <div class="attention__mid__apt__info flex-box">
            <attention-info
              @compare="compare"
              @compareReset="compareReset"
              :compareList="compareList"
            />
          </div>
          <div class="attention__mid__apt__deal flex-box">
            <attention-deal />
          </div>
        </div>
        <div class="attention__mid__map flex-box">
          <Map />
        </div>
      </div>
      <div class="attention__bottom flex-box">
        <div class="attention__bottom__chart flex-box">
          <chart />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import SelectBar from '../components/attention/SelectBar';
import HouseInfo from '../components/attention/HouseInfo';
import HouseDeal from '../components/attention/HouseDeal';
import Map from '../components/attention/Map';
import Chart from '../components/attention/Chart';
import Compare from '../components/attention/Compare';

export default {
  name: 'Attention',
  data() {
    return {
      isCompare: false,
      compareList: [],
    };
  },
  methods: {
    ...mapActions('attentionStore', ['destroy']),
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
  components: {
    SelectBar,
    'AttentionInfo': HouseInfo,
    'AttentionDeal': HouseDeal,
    Map,
    Chart,
    Compare,
  },
  destroyed() {
    this.destroy();
  },
};
</script>

<style scoped>
#attention {
  margin-top: 20px;
  height: auto;
  flex-direction: column;
}
.attention__top {
  width: 100%;
  height: 150px;
}
.attention__top__searchBar {
  height: 100%;
  flex: 4;
  align-items: flex-start;
}
.attention__top__selectBar {
  height: 100%;
  flex: 6;
}

.attention__mid {
  width: 100%;
  height: 600px;
  margin-bottom: 20px;
}
.attention__mid__apt {
  height: 100%;
  flex: 4;
}
.attention__mid__apt__info {
  height: 100%;
  flex: 1;
}
.attention__mid__apt__deal {
  height: 100%;
  flex: 1;
}
.attention__mid__map {
  flex: 6;
  height: 100%;
}
.attention__bottom {
  width: 100%;
}
.attention__bottom__chart {
  width: 100%;
  height: auto;
}
</style>
