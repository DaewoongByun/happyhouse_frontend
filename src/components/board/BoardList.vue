<template>
  <div id="Board_List">
      <div>
     <b-table-simple responsive id="boardTable">
         <b-thead>
             <b-tr>
                 <b-th>번호</b-th>
                 <b-th class="board__title">글 제목</b-th>
                 <b-th>작성자</b-th>
                 <b-th>작성 시간</b-th>
             </b-tr>
         </b-thead>
         <b-tbody>
            <BoardItem
                v-for="(item, index) in boardlist.slice(perPage * (currentPage - 1), perPage * currentPage)"
                :key="index"
                :item="item"
            />
         </b-tbody>
     </b-table-simple>
     </div>
     <b-pagination
        v-model="currentPage"
        :total-rows="boardlength"
        :per-page="perPage"
        aria-controls="boardTable"
        align="center"
      ></b-pagination>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import BoardItem from './BoardListItem';
export default {
    name: "BoardList",
    data() {
        return {
            currentPage: 1,
            perPage: 10,
        }
    },
    computed:{
    ...mapGetters(['boardlist', 'boardlength']),
    },
    components:{
        BoardItem,
    },
    created(){
        // console.log("boardList vue created");
        this.getBoardList();
    },
    methods:{
        ...mapActions(['getBoardList']),
        
    }
}
</script>

<style>
#Board_List{
    margin-top: 30px;
    min-height: 600px;
}

.board__item:hover{
    background-color: blue;
}
.board__title{
    width:600px;
}
</style>