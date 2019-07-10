<template>

<div class="Wkzhekou">
    <Exhibitions></Exhibitions>
        <div class="wkzhekoubox">
            <div class="title">
                    <span>厦门韩匠全球旅拍婚纱摄影作品精选</span> 
            </div>

             <div class="zhekou">
           
                <div class="zhekoubox" v-for="ps in 6" :key="ps">
                    <router-link to="/jianjie/jingpin" class="zhekouboxa">
                    <img src="//pic11.wed114.cn/pic/20190704/2019070411105318211504x450_300_0.jpg" width="100%" height="75%"/>
                    <div class="zhekoujianjie">
                            <router-link class="zhekoubt" to="/jianjie/jingpin">【店长推荐】消费透明/产品包邮/送全新婚纱</router-link>
                            <span class="jiage">￥6788</span> <span class="yuanjia">￥7788</span>
                            <span class="shoucang"><i></i>12</span>                   
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
.title{
    font-size: 18px;
        padding: 10px;
        font-weight: 400px;
        padding-top: 20px;
}
.wkzhekoubox{
     width: 980px;
    height: auto;
    margin: 20px auto;
    background: #fff;
    display: flow-root;
}
.zhekouboxa{
    list-style: none;
    text-decoration: none;
}
.zhekoubox{
    width: 290px;
    height: 270px;
    border:1px solid #cccccc;
    margin: 10px;
    float: left
   
}
.zhekou{
    width: 980px;
    height: 700px;
    background: #fff;
    margin: 0 auto;
    margin-top: 10px;
}
.icon{
        background: url(../../../assets/pub_shopbasic_icon.png) no-repeat scroll 0 -389px transparent;
    height: 36px;
    line-height: 14px;
    text-align: center;
    width: 43px;
    position: absolute;
    top: 1px;
    right: 20px;
    color: #fff;
    font-size: 12px;
    padding-top: 3px;
    z-index: 9;
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
.zhekoujianjie span{
      list-style: none;
  

   
    height: 30px;
    line-height: 30px;
   
     
    font-weight: 700;
    margin-left: 15px;
}
.zhekoujianjie .jiage{
     font-size: 18px;
     color: #ff4163;
}
.zhekoujianjie .yuanjia{
text-decoration:line-through;
    font-size: 12px;
    color: #999;
    margin-left: 20px;
    font-weight: 400;
    display: inline-block;
}
.zhekoujianjie .shoucang i{
        width: 15px;
    height: 15px;
    background: url(../../../assets/pub_shopbasic_icon.png) no-repeat -68px -225px transparent;
    float: left;

}
.zhekoujianjie .shoucang{
    float: right;
    margin-right: 30px;
        font-size: 12px;
    color: #999;
      margin-top: 5px;
    line-height: 20px;
  
}
.zhekoubt{
     list-style: none;
    text-decoration:none;
    display: block;
    width: 90%;
    height: 30px;
    line-height: 30px;
    color: #666;
     font-size: 16px;
    font-weight: 400;
    margin-left: 15px;
        overflow: hidden;
    word-break: break-all;
}
</style>
