<template>
  <div id="chart" class="flex-box" v-if="selectedHouseInfo.aptName">
    <template>
      <GChart
        :settings="{ packages: ['bar'] }"
        :data="chartData"
        :options="chartOptions"
        :createChart="(el, google) => new google.charts.Bar(el)"
      />
    </template>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  import { GChart } from "vue-google-charts";
  export default {
    name: "Chart",
    computed: {
      ...mapGetters(["selectedHouseInfo", "selectedCity", "selectedGugun"]),
    },
    methods: {
      changeData() {
        console.log("아파트선택");
        console.log(this.selectedHouseInfo);
        const data = [
          [
            "",
            `${this.selectedCity} ${this.selectedGugun} 평균`,
            `${this.selectedHouseInfo.aptName}`,
          ],
          [
            "가장 가까운 대형마트(m)",
            Math.round(this.selectedHouseInfo.houseValue.avgValue.martvalue),
            Math.round(this.selectedHouseInfo.houseValue.martvalue),
          ],
          [
            "가장 가까운 편의점(m)",
            Math.round(this.selectedHouseInfo.houseValue.avgValue.convvalue),
            Math.round(this.selectedHouseInfo.houseValue.convvalue),
          ],
          [
            "가장 가까운 학교(m)",
            Math.round(this.selectedHouseInfo.houseValue.avgValue.schoolvalue),
            Math.round(this.selectedHouseInfo.houseValue.schoolvalue),
          ],
          [
            "가장 가까운 지하철(m)",
            Math.round(this.selectedHouseInfo.houseValue.avgValue.subwayvalue),
            Math.round(this.selectedHouseInfo.houseValue.subwayvalue),
          ],
          [
            "가장 가까운 병원(m)",
            Math.round(this.selectedHouseInfo.houseValue.avgValue.hospitalvalue),
            Math.round(this.selectedHouseInfo.houseValue.hospitalvalue),
          ],
          [
            "20km 이내 문화시설 개수(개)",
            Math.round(this.selectedHouseInfo.houseValue.avgValue.culturevalue),
            Math.round(this.selectedHouseInfo.houseValue.culturevalue),
          ],
          [
            "1km 이내 카페 개수(개)",
            Math.round(this.selectedHouseInfo.houseValue.avgValue.cafevalue),
            Math.round(this.selectedHouseInfo.houseValue.cafevalue),
          ],
        ];
        this.chartData = data;
        const options = {
          chart: {
            title: "카테고리별 점수 비교",
          },
          bars: "horizontal",
          height: 600,
          width: 1000,
        };
        this.chartOptions = options;
      },
    },
    watch: {
      selectedHouseInfo: function () {
        this.changeData();
      },
    },
    components: {
      GChart,
    },
    mounted() {
      this.changeData();
    },
    data() {
      return {
        chartData: [],
        chartOptions: {},
      };
    },
  };
</script>

<style scoped>
  #chart {
    width: 100%;
    margin-bottom: 50px;
    margin-top: 50px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 20px 0px;
  }
</style>
