<template>
  <div id="house-info" class="flex-box">
    <template v-if="!isLoading">
      <div class="flex-box noresult" v-if="orderedHouseinfos.length == 0">
        검색 결과가 없습니다.
      </div>
      <div class="button-container flex-box" v-if="orderedHouseinfos.length > 0">
        <div class="button flex-box compare-btn" @click="compare">비교하기</div>
      </div>
      <div class="info-item">
        <house-info-item
          v-for="(houseinfo, i) in orderedHouseinfos"
          :key="i"
          :houseinfo="houseinfo"
          :idx="i"
          :isCompare="compareList.includes(houseinfo.no) ? true : false"
          @addCompare="addCompare"
          @deleteCompare="deleteCompare"
        ></house-info-item>
      </div>
    </template>

    <div class="loading-bar" v-if="isLoading">
      <b-icon icon="arrow-clockwise" animation="spin" font-scale="4"></b-icon>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  import HouseInfoItem from "./HouseInfoItem";
  export default {
    name: "HouseInfo",
    computed: {
      ...mapGetters(["houseinfos", "orderedHouseinfos", "isLoading"]),
    },
    components: {
      HouseInfoItem,
    },
    watch: {
      isLoading: function () {
        this.$emit("compareReset");
      },
    },
    props: ["compareList"],
    methods: {
      addCompare: function (no) {
        this.compareList.push(no);
      },
      deleteCompare: function (no) {
        for (let i = 0; i < this.compareList.length; i++) {
          if (this.compareList[i] == no) {
            this.compareList.splice(i, 1);
            break;
          }
        }
      },
      compare: function () {
        if (this.compareList.length > 0) {
          this.$emit("compare", this.compareList);
        }
      },
    },
  };
</script>

<style scoped>
  #house-info {
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
  }
  .compare-btn {
  }
  .button-container {
    width: 100%;
    padding: 10px;
    justify-content: flex-end;
  }
  .info-item {
    overflow-y: auto;
    width: 100%;
  }
</style>
