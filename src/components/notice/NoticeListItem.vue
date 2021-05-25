<template>
  <tr class="Notice__item" @click="getDetail">
    <td>{{ item.no }}</td>
    <td>{{ item.title }}</td>
    <td>{{ item.user }}</td>
    <td v-b-tooltip.hover="`${item.regdate}`">{{ date }}</td>
  </tr>
</template>

<script>

  export default {
    name: "NoticeListItem",
    props: ["item"],
    data() {
      return {
        date: "",
      };
    },
    created() {
      this.date = this.timeForToday(this.item.regdate);
    },
    methods: {
      getDetail() {
        this.$router.push(`/notice/${this.item.no}`);
      },
      timeForToday(value) {
        const today = new Date();
        const timeValue = new Date(value);

        const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
        if (betweenTime < 1) return "방금전";
        if (betweenTime < 60) {
          return `${betweenTime}분전`;
        }

        const betweenTimeHour = Math.floor(betweenTime / 60);
        if (betweenTimeHour < 24) {
          return `${betweenTimeHour}시간전`;
        }

        const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
        if (betweenTimeDay < 365) {
          return `${betweenTimeDay}일전`;
        }

        return `${Math.floor(betweenTimeDay / 365)}년전`;
      },
    },
  };

</script>

<style></style>
