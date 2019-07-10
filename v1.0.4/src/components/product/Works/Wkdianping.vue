<template>

<div class="Wkdianping">
    <Exhibitions></Exhibitions>
       <div class="gongsi">
            <div class="titlt">
                <h3 style="margin-left: 50px;">厦门韩匠全球旅拍婚纱摄影公司简介</h3>
            </div>
            <div class="gongsibody">
                版权申明:未经书面授权请勿转载本站信息!作品版权归所属媒体与作者所有!
            </div>
       </div>
</div>
</template>
<script>
import Exhibitions from '../Exhibition/Exhibitions'
export default {
 name: 'Wkdianping',

 data(){
return{
}
 },
 components:{
   Exhibitions
 }
}
</script>
<style scoped="">
.title h3{
    width:100%;
    padding-left: 50px;
   
}
.gongsibody{
width: 90%;
text-align:center;
margin-top: 50px;
height: 100%;
line-height: 600px;
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
