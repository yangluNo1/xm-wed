<template>

<div class="Wkjingxuan">
    <Exhibitions></Exhibitions>
        <div class="wkjingxuanbox">
            <div class="title">
                    <span>厦门韩匠全球旅拍婚纱摄影作品精选</span> 
            </div>

        <div class="jingxuan">
           
            
                <div class="jingxuanbox" v-for="ps in 6" :key="ps">
                    <router-link to="/jianjie/Wkmain" class="zhekouboxa">
                    <img src="//pic11.wed114.cn/pic/20190704/2019070411105318211504x450_300_0.jpg" width="100%" height="85%"/>
                    <div class="jingxuanjianjie">
                            <router-link class="jingxuanbt" to="/jianjie/Wkmain">【店长推荐】消费透明/产品包邮/送全新婚纱</router-link >
                            <span class="chakan"><i></i>12</span>                   
                    </div> 
                    </router-link>
                </div>     
                <!--分页器-->
                <div class="pageinfo">
                    <ul class="pagelist">
                         <li><a href="">首页</a></li>
                        <li><a href="">上一页</a></li>
                            <li v-for="page in 6" :key="page.index"><a href="">1</a></li>
                          <li><a href="">下一页</a></li>
                           <li><a href="">尾页</a></li>
                           

                    </ul>
                </div>
        </div>
    </div>
</div>
</template>
<script>
import Exhibitions from '../Exhibition/Exhibitions'
export default {
 name: 'Wkjingxuan',

 data(){
return{images:[{id:0,src:require("../../../assets/1.jpg")},
{id:0,src:require("../../../assets/1.jpg")},
{id:0,src:require("../../../assets/1.jpg")},
{id:0,src:require("../../../assets/1.jpg")},
{id:0,src:require("../../../assets/1.jpg")}

]}
 },
 components:{
   Exhibitions
 }
}
</script>
<style scoped="">
.cur{
    border: 1px solid red;
}
.pageinfo a{
    color: #666;
    list-style: none;
    text-decoration: none;
    padding: 0px 10px;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    text-align: center;
    border: 1px solid #999;
    margin-right: 3px;
    
}
.pageinfo{
    width: 50%;
      margin: 0 auto;
}
.pageinfo , .pagelist{
    list-style: none;
    float: left;
  
}
.title{
    font-size: 18px;
        padding: 10px;
        font-weight: 400px;
        padding-top: 20px;
}
.wkjingxuanbox{
     width: 980px;
    height: auto;
    margin: 20px auto;
    background: #fff;
    display: flow-root;
}
.jingxuanbox{
    width: 290px;
    height: 320px;
    margin: 10px;
    background: #fff;
 float: left;
}

.jingxuanjianjie{
    
height: 50px;
}
.jingxuanbt{
    float: left;
 list-style: none;
    text-decoration:none;
    display: block;
    width:80%;
    height: 30px;
    line-height: 30px;
    color: #666;
     font-size: 14px;
    font-weight: 400;
  
        overflow: hidden;
    word-break: break-all;

}
.jingxuanjianjie .shoucang{
float: left;

}
.chakan i{
        font-size: 12px;
    float: left;
    background: url(../../../assets/all-icon-img.png) no-repeat scroll -110px -66px transparent;
    width: 14px;
    height: 20px;
    margin-top: -5px;
}
.chakan{
    margin-right: 20px;
     float: right;
        font-size: 12px;
    color: #999;
        margin-top: 5px;
    line-height: 20px;
}
</style>
