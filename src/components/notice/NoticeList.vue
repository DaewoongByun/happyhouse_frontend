<template>
  <div id="Notice_List">
    <div>
      <b-table-simple responsive id="noticeTable" caption-top>
        <template v-if="num == null" #table-caption>This is a table caption at the top.</template>
        <b-thead>
          <b-tr>
            <b-th>번호</b-th>
            <b-th>글 제목</b-th>
            <b-th>작성자</b-th>
            <b-th>작성 시간</b-th>
          </b-tr>
        </b-thead>
        <b-tbody>
          <NoticeItem
            v-for="(item, index) in noticelist.slice(
              perPage * (currentPage - 1),
              perPage * currentPage
            )"
            :key="index"
            :item="item"
          />
        </b-tbody>
      </b-table-simple>
    </div>
    <b-pagination
      v-if="num == null"
      v-model="currentPage"
      :total-rows="noticelength"
      :per-page="perPage"
      aria-controls="noticeTable"
      align="center"
    ></b-pagination>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
  import NoticeItem from "./NoticeListItem";
  export default {
    name: "NoticeList",
    props: ["num"],
    data() {
      return {
        currentPage: 1,
        perPage: 10,
      };
    },
    computed: {
      ...mapGetters(["noticelist", "noticelength"]),
    },
    components: {
      NoticeItem,
    },
    created() {
      this.getNoticeList();
      if (this.num == 3) {
        this.perPage = this.num;
      } else {
        this.perPage = 10;
      }
    },
    mounted() {},
    methods: {
      ...mapActions(["getNoticeList"]),
    },
  };
</script>

<style>
  #Notice_List {
    margin-top: 30px;
    min-height: 600px;
    width: 100%;
  }
  #noticeTable {
    text-align: center;
  }
  .Notice__item {
    cursor: pointer;
    height: 50px;
  }
  .Notice__item:hover {
    background-color: whitesmoke;
  }
  .Notice__title {
    width: 600px;
  }
</style>
