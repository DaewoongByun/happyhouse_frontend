<template>
  <div id="house-deal" class="flex-box">
    <div class="button-container flex-box">
      <div class="radio flex-box" @click="setTrade">
        <div class="radio__icon">
          <b-icon
            icon="circle-fill"
            aria-hidden="true"
            v-if="isTrade"
            style="color: darkseagreen"
          ></b-icon>
          <b-icon icon="circle" aria-hidden="true" v-if="!isTrade"></b-icon>
        </div>
        <div class="radio__text">매매</div>
      </div>
      <div class="radio flex-box" @click="setRent">
        <div class="radio__icon">
          <b-icon
            icon="circle-fill"
            aria-hidden="true"
            v-if="isRent"
            style="color: darkseagreen"
          ></b-icon>
          <b-icon icon="circle" aria-hidden="true" v-if="!isRent"></b-icon>
        </div>
        <div class="radio__text">전/월세</div>
      </div>
    </div>
    <div class="name flex-box">{{ selectedHouseName }}</div>
    <div class="deals flex-box">
      <house-deal-item
        v-for="(housedeal, i) in visibleDeals"
        :key="i"
        :housedeal="housedeal"
        :dealType="isTrade ? 'trade' : 'rent'"
      />
    </div>
  </div>
</template>

<script>
import HouseDealItem from "./HouseDealItem";
import { mapGetters } from "vuex";
export default {
  name: "HouseDeal",
  data() {
    return {
      isTrade: true,
      isRent: false,
      visibleDeals: [],
    };
  },
  components: {
    HouseDealItem,
  },
  computed: {
    ...mapGetters(["housedeals", "selectedHouseName"]),
  },
  watch: {
    housedeals: function () {
      this.updateVisibleDeals();
    },
  },
  methods: {
    setTrade() {
      this.isTrade = true;
      this.isRent = false;
      this.updateVisibleDeals();
    },
    setRent() {
      this.isTrade = false;
      this.isRent = true;
      this.updateVisibleDeals();
    },
    updateVisibleDeals() {
      if (this.isTrade) {
        this.visibleDeals = this.housedeals.filter((deal) => deal.type.includes("Trade"));
      } else if (this.isRent) {
        this.visibleDeals = this.housedeals.filter((deal) => deal.type.includes("Rent"));
      }
    },
  },
  created() {
    this.updateVisibleDeals();
  },
};
</script>

<style scoped>
#house-deal {
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
}
.button-container {
  justify-content: space-around;
  width: 100%;
  height: 40px;
}
.name {
  height: 30px;
  width: 100%;
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: 600;
  padding: 10px;
}
.deals {
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  overflow-y: auto;
}

.radio {
  cursor: pointer;
}
.radio__icon {
  margin-right: 7px;
}
</style>
