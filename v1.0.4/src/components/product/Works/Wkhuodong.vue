<template>

<div class="Wkhuodong">
    <Exhibitions></Exhibitions>
       <div class="huodong">
            <div class="titlt">
                <h3 style="margin-left: 25px;">厦门薇漫一婚纱摄影优惠活动</h3>
            </div>
            <div class="huodongbox">
              <ul>
                  <li v-for="dp in dianpus" :key="dp.index">
                           <div class="imgbox">
                             <router-link to="/jianjie/jingpin">
                               <img :src="dp.imgs" alt="dp.title" width="100%" height="100%">
                            </router-link>
                          </div>
                          <div class="hdjianjie">
                                <p class="bt"> <router-link to="/jianjie/jingpin">{{dp.title}}</router-link></p>
                                <p class="time">结束日期：{{dp.time}}</p>
                                <p class="chanshu">{{dp.chanshu}}</p>
                                <p class="renshu">已有<span>{{dp.xqrenshu}}</span>人感兴趣</p>
                                <router-link to="/jianjie/jingpin"><span class="chakan">查看详情</span></router-link>
                          </div>
                  </li>
                  
              </ul>
                
            </div>
            
       </div>
       <Footer></Footer>
</div>
</template>
<script>
import Exhibitions from '../Exhibition/Exhibitions'
import Footer from '../../home/Footer'
export default {
 name: 'Wkhuodong',

 data(){
return{
    dianpus:[{id:1,title:"产品包邮/送全新婚纱/送蜜月酒店",time:"2019-07-11",chanshu:"产品包邮/送全新婚纱/送蜜月酒店",xqrenshu:188,imgs:require("../../../assets/5.jpg")}]
}
 },
 components:{
   Exhibitions,
   Footer
 }
}
</script>
<style scoped="">
.chakan{
      line-height: 38px;
    height: 38px;
    width: 130px;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    background: #ff4163;
    color: #fff;
    border-radius: 3px;
    display: block;
    cursor: pointer;
}
.renshu{
    font-size: 14px;
    color: #666;
}
.renshu span{
      font-size: 16px;
    color: #ff4163; 
}
.hdjianjie .chanshu{
    font-size: 12px;
    color: #ff4163;

}
.hdjianjie .time{
    font-size: 12px;
}
.hdjianjie .bt{
    font-size: 20px;
    font-weight: 700;
    
}
.bt a{
color: #333;
}
.hdjianjie p{
    text-align: left;
}
.huodongbox .hdjianjie{
    width: 50%;
    margin: 10px;
height: 230px;
margin-left: 20px;
float: left;
}
.huodongbox .imgbox{
    float: left;
width: 40%;
margin: 10px;
height: 210px;

}
.huodongbox ul{
    width: 100%;
    margin: 0;
    padding: 0;
}
.huodongbox li{
    width: 98%;
    
    height: 230px;
    margin: 10px;
    }
ul,li,a{
    list-style: none;
    text-decoration: none;
}
.title h3{
    width:100%;
    padding-left: 10px;
   
}
.huodongbox{
width: 100%;
text-align:center;
margin-top: 20px;
display: flow-root;
height: 500px;
}
.title{
    font-size: 18px;
        padding: 10px;
        font-weight: 400px;
        padding-top: 20px;
        padding-left: 10px;
        float: left;
        height: 100px;
        
}
.huodong{
    background: #fff;
    width:980px;
   
    display: flow-root;
    margin: 0 auto;
}
</style>
