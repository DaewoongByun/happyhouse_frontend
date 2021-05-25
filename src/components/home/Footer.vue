<template>
  <div id="footer" class="container flex-box">
    <div class="footer__img flex-box">
        <div><img id="ssafy_logo" src="../../assets/ssafy_logo.png" /></div>
    </div>
    
    
    <div class="footer__body">
        <div class="footer__url">
            <ul class="part__list">
                <li>
                    <a href="https://www.ssafy.com/ksp/jsp/swp/etc/swpPolicy.jsp" target="_blank">이용 약관 </a>
                </li>  
                <li>
                    <a href="https://www.ssafy.com/ksp/jsp/swp/etc/swpPrivacy.jsp" target="_blank"> 개인 정보 처리 방침 |</a>        
                </li>  
            </ul>
            
        </div>
        <div class="footer__content">
            <div class="footer__text">
                고객센터 02-3429-5100 | 평일 상담시간 09:00 ~ 18:00 <br>
                이메일 문의 : ssafy@ssafy.com<br>
	        	본 사이트의 콘텐츠는 저작권법의 보호를 받는 바 무단 전재, 복사, 배포 등을 금합니다.
	        </div>
            <div class="footer__copyright">
                Copyright © SAMSUNG All Rights Reserved.
            </div>
        </div>
    </div>
        
  </div>
</template>
    
<script>
export default {

}
</script>

<style scoped>
#footer{
    /* background-color: #332221; */
    height: 150px;
    margin: 20px;
    border-top: 1px solid #8c99a8;
}
li, ul{
    list-style: none;
}
.part__list li{
    display: inline-block;
    position: relative;
    text-decoration: none;
    color : black;
}
.part__list li ::before{
    position : relative;
    left: 1px;
    content: " | ";
}
.part__list li a{
    color: black;
    text-decoration: none;
}
.footer__img{
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
#ssafy_logo{
    width: 70%;
    height: inherit;
}
.footer__body{
    flex: 9;
    height: 100%;
}

.footer__url{
    height: 2rem;
    display: flex;
    padding: 10px;
}
.footer__text{
    height: 40%;
    color:#8c99a8;
    margin-top: 15px;
    font-size: 12px;

}
.footer__copyright{
    color:#8c99a8 ;
    
}

</style>