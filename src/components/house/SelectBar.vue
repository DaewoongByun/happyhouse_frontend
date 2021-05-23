<template>
  <div id="select-bar" class="flex-box">
    <div class="title">상세검색</div>
    <div class="select flex-box">
      <label
        ><input type="checkbox" value="mart" @change="change" v-model="rank" ref="mart" />
        대형마트</label
      >
      <label
        ><input type="checkbox" value="conv" @change="change" v-model="rank" ref="conv" />
        편의점</label
      >
      <label
        ><input type="checkbox" value="school" @change="change" v-model="rank" ref="school" />
        학교</label
      >
      <label
        ><input type="checkbox" value="subway" @change="change" v-model="rank" ref="subway" />
        지하철</label
      >
      <label
        ><input type="checkbox" value="culture" @change="change" v-model="rank" ref="culture" />
        문화시설</label
      >
      <label
        ><input type="checkbox" value="cafe" @change="change" v-model="rank" ref="cafe" />
        카페</label
      >
      <label
        ><input type="checkbox" value="hospital" @change="change" v-model="rank" ref="hospital" />
        병원</label
      >
    </div>
    <div class="rank flex-box">
      <span
        >1순위 : <span class="category-name">{{ category[rank[0]] }}</span></span
      >
      <span
        >2순위 : <span class="category-name">{{ category[rank[1]] }}</span></span
      >
      <span
        >3순위 : <span class="category-name">{{ category[rank[2]] }}</span></span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectBar',
  data() {
    return {
      rank: [],
      category: {
        mart: '대형마트',
        cafe: '카페',
        hospital: '병원',
        culture: '문화시설',
        conv: '편의점',
        school: '학교',
        subway: '지하철',
      },
    };
  },
  methods: {
    change: function (e) {
      console.log(this.rank);
      if (this.rank.length > 3) {
        setTimeout(() => {
          this.$refs[e.target.value].checked = false;
          this.rank.pop();
        }, 100);
      }
    },
    unCheckAll: function () {
      this.rank.forEach((item) => {
        this.$refs[item].checked = false;
      });
      this.rank.forEach((item) => {
        this.$refs[item].checked = false;
      });
    },
  },
};
</script>

<style scoped>
#select-bar {
  flex-direction: column;
  height: 100px;
  width: 100%;
  justify-content: space-between;
}
.title {
  font-size: 25px;
  font-weight: 700;
}
.select {
  width: 100%;
  justify-content: space-around;
}
.rank {
  width: 80%;
  justify-content: space-around;
}
.category-name {
  font-weight: 600;
  font-size: 18px;
}
</style>
