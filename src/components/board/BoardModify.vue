<template>
    <div id="Board_Article" class="container">
        <div class="article__head">
            <div class="article__head__top">
                <div class="article__title">
                    <input class="head_top_title" v-model.trim="article.title" ref="input" />
                </div>
            </div>
            <div class="article__head__bottom">
                <div class="article__user">{{article.user}}</div>
            </div>
        </div>
        <div class="article__content">
            <textarea v-model.trim="article.content"/>
        </div>
        <div  class="footer flex-box">
            <b-button variant="outline-primary" @click="modifyArticle">수정</b-button>
            <b-button variant="outline-danger" @click="$router.push(`/board/${article.no}`)">취소</b-button>
            <b-button variant="outline-info" @click="$router.push('/board')">목록</b-button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';
export default {
    name:'BoardModify',
    data() {
        return {
            article: '',
        }
    },
    created(){
        this.getArticle(this.$route.params.no);
        
    },
    computed:{
        ...mapGetters(['loginUser']),
    },
    methods: {
        getArticle(no){
            axios({
                method:'get',
                url : 'http://localhost:8000/board/'+no,
                headers: {
                    'Authorization': this.loginUser.token,
                },
            })
            .then((Response) =>{
                //console.log(Response.data.article);
                let article = Response.data.article;
                let content = article.content;
                let replaced_content = content.replace(/<br>/g, '\n');
                article.content = replaced_content;
                this.article = article;
            }).catch((error) =>{
                console.dir(error);
            });
        },
        modifyArticle(){
            axios({
                method : 'put',
                url : 'http://localhost:8000/board/'+ this.article.no,
                data : this.article,
                headers: {
                    'Authorization': this.loginUser.token,
                },
            })
            .then(() =>{
                alert("수정되었습니다.");
                this.$router.push(`/board/${this.article.no}`);
            })
            .catch((error)=>{
                console.dir(error);
            })
        }
    },
}
</script>

<style scoped>
#Board_Article{
    height: 600px; 
}
input {
  width: 100%;
  border: none;
}
textarea {
  width: 100%;
  border: none;
  resize: none;
}
.article__head{
    padding: 10px;
    border-bottom: 1px solid #e3e3eb;
}
.article__head__top{
    justify-content: space-between;
}
.article__title{
    font-size: 28px;
}
.article__user {
  font-size: 16px;
  color: gray;
}
.article__content {
  display: flex;
  padding: 20px;
  border-bottom: 1px solid #e3e7eb;
  min-height: 200px;
}
</style>