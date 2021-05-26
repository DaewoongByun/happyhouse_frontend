<template>
  <div id="compare" class="flex-box">
    <div class="info">
      <div>대형마트, 편의점, 학교, 지하철, 병원 : 가장 가까운 거리</div>
      <div>문화시설 : 반경 20km 내 개수</div>
      <div>카페 : 반경 1km 내 개수</div>
    </div>
    <div class="table-container flex-box">
      <div class="category-container flex-box">
        <div class="address">주소</div>
        <div class="name">이름</div>
        <div class="mart">대형마트</div>
        <div class="conv">편의점</div>
        <div class="school">학교</div>
        <div class="subway">지하철</div>
        <div class="culture">문화시설</div>
        <div class="cafe">카페</div>
        <div class="hospital">병원</div>
      </div>
      <div class="house-container flex-box" v-for="(house, i) in houseList" :key="i">
        <div class="address">{{ house.address }}</div>
        <div class="name">{{ house.houseInfo.aptName }}</div>
        <div class="mart">{{ house.houseInfo.houseValue.martvalue }}(m)</div>
        <div class="conv">{{ house.houseInfo.houseValue.convvalue }}(m)</div>
        <div class="school">{{ house.houseInfo.houseValue.schoolvalue }}(m)</div>
        <div class="subway">{{ house.houseInfo.houseValue.subwayvalue }}(m)</div>
        <div class="culture">{{ house.houseInfo.houseValue.culturevalue }}(개)</div>
        <div class="cafe">{{ house.houseInfo.houseValue.cafevalue }}(개)</div>
        <div class="hospital">{{ house.houseInfo.houseValue.hospitalvalue }}(m)</div>
      </div>
    </div>
    <div class="button-container">
      <div class="button" @click="exitCompare">뒤로가기</div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    name: "Compare",
    props: ["compareList"],
    methods: {
      exitCompare: function () {
        this.$emit("exitCompare");
      },
    },
    data() {
      return {
        houseList: [],
      };
    },
    created() {
      const loginUser = JSON.parse(localStorage.getItem("loginUser"));
      const url = `http://localhost:8000/search/compare`;
      const codes = this.compareList.toString();
      axios({
        method: "get",
        url: url,
        headers: {
          Authorization: loginUser.token,
        },
        params: {
          codes: codes,
        },
      })
        .then((response) => {
          this.houseList = response.data.compareList;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  };
</script>

<style scoped>
  #compare {
    width: 100%;
    height: 1000px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .table-container {
    width: 100%;
    justify-content: flex-start;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  .category-container {
    flex-direction: column;
    border-right: 1px solid rgb(0 0 0 / 24%);
  }
  .house-container {
    flex-direction: column;
    flex: 1;
    border-right: 1px solid rgb(0 0 0 / 24%);
  }
  .category-container > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 50px;
    border-bottom: 1px solid rgb(0 0 0 / 24%);
  }
  .house-container > div {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid rgb(0 0 0 / 24%);
  }
  .button-container {
    margin-top: 10px;
  }
</style>
