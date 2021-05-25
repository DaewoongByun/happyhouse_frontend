<template>
  <div id="house-info-item" class="flex-box">
    <div class="name-container flex-box" @click="showDeals">
      <div class="name">{{ houseinfo.aptName }}</div>
      <div class="buildyear">건축년도: {{ houseinfo.buildYear }}</div>
    </div>
    <div class="icon-container flex-box">
      <div class="icon" @click="delAttention">
        <b-icon
          icon="star-fill"
          aria-hidden="true"
          v-if="houseinfo.attention"
          style="color: gold"
        ></b-icon>
        <b-icon icon="star" aria-hidden="true" v-if="!houseinfo.attention"></b-icon>
      </div>
      <div class="icon" @click="compareToggle">
        <b-icon icon="check-square" aria-hidden="true" v-if="isCompare"></b-icon>
        <b-icon icon="square" aria-hidden="true" v-if="!isCompare"></b-icon>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from "vuex";
  export default {
    name: "HouseInfoItem",
    props: ["houseinfo", "idx", "isCompare"],
    methods: {
      ...mapActions("attentionStore", ["setAttentionDeals", "setMapCenter", "deleteAttention"]),
      showDeals: function () {
        const data = this.houseinfo;
        this.setAttentionDeals(data);
        const center = {
          lat: this.houseinfo.lat,
          lng: this.houseinfo.lng,
        };
        this.setMapCenter(center);
      },
      delAttention: function () {
        const answer = confirm("관심목록에서 삭제하시겠습니까");
        if (answer) {
          this.deleteAttention(this.houseinfo);
        }
      },
      compareToggle: function () {
        if (this.isCompare) {
          this.$emit("deleteCompare", this.houseinfo.no);
        } else {
          this.$emit("addCompare", this.houseinfo.no);
        }
      },
    },
  };
</script>

<style scoped>
  #house-info-item {
    width: 98%;
    height: 120px;
    flex-direction: column;
    box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
    padding: 5px;
    margin-bottom: 10px;
    margin-left: 3px;
    margin-right: 3px;
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
