<template>
  <div id="map"></div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
  export default {
    name: "Map",
    mounted() {
      if (window.kakao && window.kakao.maps) {
        this.initMap();
      } else {
        const script = document.createElement("script");
        script.onload = () => kakao.maps.load(this.initMap);
        const my_api_key = "351d34cf7df2286c1ca151087dbb867c";
        script.src = `http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${my_api_key}`;
        document.head.appendChild(script);
      }
    },
    methods: {
      ...mapActions(["setHouseDeals"]),
      initMap() {
        if (this.houseinfos.length === 0) {
          const container = document.querySelector("#map");
          const options = {
            center: new kakao.maps.LatLng(this.mapCenter.lat, this.mapCenter.lng),
            level: 3,
          };
          const map = new kakao.maps.Map(container, options);
        } else {
          const container = document.querySelector("#map");
          const options = {
            center: new kakao.maps.LatLng(this.mapCenter.lat, this.mapCenter.lng),
            level: 5,
          };
          const map = new kakao.maps.Map(container, options);
          this.houseinfos.forEach((info) => {
            const markerPosition = new kakao.maps.LatLng(info.lat, info.lng);
            // 마커를 생성합니다
            const marker = new kakao.maps.Marker({
              position: markerPosition,
              title: info.aptName,
            });
            // 마커가 지도 위에 표시되도록 설정합니다
            marker.setMap(map);
          });
        }
      },
    },
    computed: {
      ...mapGetters(["houseinfos", "mapCenter"]),
    },
    watch: {
      mapCenter: function () {
        if (this.houseinfos.length === 0) {
          this.initMap();
          return;
        }
        const container = document.querySelector("#map");
        const options = {
          center: new kakao.maps.LatLng(this.mapCenter.lat, this.mapCenter.lng),
          level: 3,
        };
        const map = new kakao.maps.Map(container, options);
        this.houseinfos.forEach((info) => {
          const markerPosition = new kakao.maps.LatLng(info.lat, info.lng);
          // 마커를 생성합니다
          const marker = new kakao.maps.Marker({
            position: markerPosition,
            title: info.aptName,
          });
          // 마커가 지도 위에 표시되도록 설정합니다
          marker.setMap(map);
        });
      },
      houseinfos: function () {
        if (this.houseinfos.length === 0) {
          this.initMap();
          return;
        }
        const container = document.querySelector("#map");
        const options = {
          center: new kakao.maps.LatLng(this.mapCenter.lat, this.mapCenter.lng),
          level: 6,
        };
        const map = new kakao.maps.Map(container, options);
        this.houseinfos.forEach((info) => {
          const markerPosition = new kakao.maps.LatLng(info.lat, info.lng);
          // 마커를 생성합니다
          const marker = new kakao.maps.Marker({
            position: markerPosition,
            title: info.aptName,
          });
          // 마커가 지도 위에 표시되도록 설정합니다
          marker.setMap(map);
        });
      },
    },
  };
</script>

<style scoped>
  #map {
    width: 100%;
    height: 100%;
  }
</style>
