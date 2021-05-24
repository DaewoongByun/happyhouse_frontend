<template>
  <div id="Notice_List">
      <div>
     <b-table-simple responsive id="noticeTable">
         <b-thead>
             <b-tr>
                 <b-th>번호</b-th>
                 <b-th class="Notice__title">글 제목</b-th>
                 <b-th>작성자</b-th>
                 <b-th>작성 시간</b-th>
             </b-tr>
         </b-thead>
         <b-tbody>
            <NoticeItem
                v-for="(item, index) in noticelist.slice(perPage * (currentPage - 1), perPage * currentPage)"
                :key="index"
                :item="item"
            />
         </b-tbody>
     </b-table-simple>
     </div>
     <b-pagination
        v-model="currentPage"
        :total-rows="noticelength"
        :per-page="perPage"
        aria-controls="noticeTable"
        align="center"
      ></b-pagination>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import NoticeItem from './NoticeListItem';
export default {
    name: "NoticeList",
    data() {
        return {
            currentPage: 1,
            perPage: 10,
        }
    },
    computed:{
    ...mapGetters(['noticelist', 'noticelength']),
    },
    components:{
        NoticeItem,
    },
    created(){
        console.log("noticeList vue created");
        this.getNoticeList();
    },
    methods:{
        ...mapActions(['getNoticeList']),
        
    }
}
</script>

<style>
#Notice_List{
    margin-top: 30px;
    min-height: 600px;
}

.Notice__item:hover{
    background-color: blue;
}
.Notice__title{
    width:600px;
}
</style>