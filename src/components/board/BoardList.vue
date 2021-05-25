<template>
  <div id="Board_List">
    <div>
      <b-table-simple responsive id="boardTable">
        <b-thead>
          <b-tr>
            <b-th style="width: 8.33%">번호</b-th>
            <b-th style="width: 50%">글 제목</b-th>
            <b-th style="width: 25%">작성자</b-th>
            <b-th style="width: 16.66%">작성 시간</b-th>
          </b-tr>
        </b-thead>
        <b-tbody>
          <BoardItem
            v-for="(item, index) in boardlist.slice(
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
      :total-rows="boardlength"
      :per-page="perPage"
      aria-controls="boardTable"
      align="center"
    ></b-pagination>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
  import BoardItem from "./BoardListItem";
  export default {
    name: "BoardList",
    props: ["num"],
    data() {
      return {
        currentPage: 1,
        perPage: 10,
      };
    },
    computed: {
      ...mapGetters(["boardlist", "boardlength"]),
    },
    components: {
      BoardItem,
    },
    created() {
      // console.log("boardList vue created");
      this.getBoardList();
      if (this.num == 3) {
        this.perPage = this.num;
      } else {
        this.perPage = 10;
      }
    },
    methods: {
      ...mapActions(["getBoardList"]),
    },
  };
</script>

<style>
  #Board_List {
    margin-top: 30px;
    min-height: 600px;
    width: 100%;
  }
  #boardTable {
    text-align: center;
  }
  .board__item {
    cursor: pointer;
    height: 50px;
  }

  .board__item:hover {
    background-color: whitesmoke;
  }

</style>
