<template>
  <div class="pronavbox">
      
        <ul>
            <li v-for="pnav in pronavs" :key="pnav.index">
                <router-link to="pnav.href">{{pnav.name}}</router-link>
            </li>
        </ul>
            
  </div>
</template>

<script>
export default {
 name: 'pronavbox',
 data(){
return{pronavs:[
    {id:0,name:"首页",href:"/"},
    {id:0,name:"精品折扣",href:"/home"},
    {id:0,name:"作品精选",href:"/"},
    {id:0,name:"优惠活动",href:"/"},
    {id:0,name:"公司简介",href:"/"},
]}
 },
 components:{
   
 }
}
</script>
<style scoped="">
.pronavbox{
    background: #ff4163;
    width: 980px;
    margin: 0 auto;
    height: 40px;

}
.pronavbox ul{
    width: 100%;
    height: 100%;
margin: 0;
padding: 0;
}
.pronavbox li{
    list-style: none;
    float: left;
    width: 100px;
     text-align: center;
      z-index: 99;
     
      }
.pronavbox li:hover{
   
    background: #e6062f;
}
.pronavbox li:nth-child(1){
    background: #e6062f;
}
.pronavbox li a{
    text-decoration: none;
    color: #fff;
    font-size: 14px;
   font-family: '宋体';
   font-weight: 1000;
    line-height: 40px;
    text-align: center;
    
}
</style>
