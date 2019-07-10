<template>

<div class="Wkgongsi">
    <Exhibitions></Exhibitions>
       <div class="gongsi">
            <div class="titlt">
                <h3 style="margin-left: 50px;">厦门韩匠全球旅拍婚纱摄影公司简介</h3>
            </div>
            <div class="gongsibody">
                <p>
                   &nbsp;&nbsp; &nbsp;&nbsp;微朵丽环球旅拍-明星网红95后选择的旅拍品牌，拥有独立样片研发团队全球原创样片客片匠心创作：文艺清新、青春少女、唯美自然、纪实幸福感、电影剧情风，吃住玩拍一站式旅游婚纱摄影服务！
                </p>
                
            </div>
            <div class="banquanshenming">
                 <span>版权申明:未经书面授权请勿转载本站信息!作品版权归所属媒体与作者所有!</span>
             </div>
       </div>
       <Footer></Footer>
</div>
</template>
<script>
import Exhibitions from '../Exhibition/Exhibitions'
import Footer from '../../home/Footer'
export default {
 name: 'Wkgongsi',

 data(){
return{
}
 },
 components:{
   Exhibitions,
   Footer
 }
}
</script>
<style scoped="">
.banquanshenming{
    width: 100%;
float: left;
text-align: center;
font-family: '宋体';
font-weight: 700;
color: black;
}
.gongsibody p{
    width: 80%;
    margin: 0 auto;
    text-align: left;
    line-height: 30px;
    
}
.title h3{
    width:100%;
    padding-left: 50px;
   
}
.gongsibody{
width: 100%;
text-align:center;
margin-top: 50px;
height: 70%;

}
.title{
    font-size: 18px;
        padding: 10px;
        font-weight: 400px;
        padding-top: 20px;
        padding-left: 50px;
        float: left;
        height: 100px;
        
}
.gongsi{
    background: #fff;
    width:980px;
    height: 500px;
    display: flow-root;
    margin: 0 auto;
}
</style>
