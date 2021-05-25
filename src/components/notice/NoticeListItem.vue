<template>
  <tr class="Notice__item" @click="getDetail">
    <td>{{ item.no }}</td>
    <td>{{ item.title }}</td>
    <td>{{ item.user }}</td>
    <td>{{ item.regdate }}</td>
  </tr>
</template>

<script>
  export default {
    name: "NoticeListItem",
    props: ["item"],
    data() {
      return {};
    },
    methods: {
      getDetail() {
        this.$router.push(`/notice/${this.item.no}`);
      },
    },
  };
</script>

<style></style>
