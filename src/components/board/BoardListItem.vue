<template>
  <tr class="board__item" @click="getDetail">
    <td>{{ item.no }}</td>
    <td>{{ item.title }}</td>
    <td>{{ item.user }}</td>
    <td>{{ item.regdate }}</td>
  </tr>
</template>

<script>
  export default {
    name: "BoardListItem",
    props: ["item"],
    data() {
      return {};
    },
    methods: {
      getDetail() {
        this.$router.push(`/board/${this.item.no}`);
      },
    },
  };
</script>

<style></style>
