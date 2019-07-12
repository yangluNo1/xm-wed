<template>
    <div class="search">
        <Headers></Headers>
        <div class="searchbox">
            <div class="position">
                <a href="">首页:</a>
            </div>
          
            <div class="search-list">
                  <div class="tishi"><span>您没有输入关键词，以下是平台为您推荐的商家信息</span></div>
               <div class="list">
                    <ul>
                        <li v-for="search in searchs" :key="search.index">
                            <div class="imgbox">
                                <router-link :to="{name:'jingpin',params:{id:search}}">
                                <img :src="search.images" width="100%" height="100%"/>
                                </router-link>
                            </div>
                            <div class="jieshao">
                                    <span class="biaoti"><router-link :to="{name:'jingpin',params:{id:search}}">{{search.dianming}}</router-link></span>
                                    <span class="dizhi">{{search.dizhi}}</span>
                                    <span class="yuanjia">￥{{search.xianjia}}起</span>
                                    <span class="nr">{{search.nr}}</span>
                                          
                            </div>
                        </li>

                    </ul>
                </div>
                <div class="huodong">
                    <div class="tuijian"><span>|</span><span>活动推荐</span></div>
                    <ul>
                        <li v-for="hd in huodong" :key="hd.index">
                            <div>
                                <router-link :to="{name:'jingpin',params:{id:hd}}"><img :src="hd.images" width="100%"/></router-link>
                                <span class="bt"> <router-link :to="{name:'jingpin',params:{id:hd}}">{{hd.title}}</router-link></span>
                                <span class="dianpu"> <router-link :to="{name:'jingpin',params:{id:hd}}">{{hd.stopname}}</router-link><i></i><strong>123</strong></span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  import Headers from "./Headers";
export default {
    name:"search",
    data(){
        return{
            searchs:[{id:1,dianming:"厦门卡卡服装设计师",title:"【店长推荐】消费透明/产品包邮/送全新婚纱",href:"/jianjie/jingpin",dizhi:"滨海街道黄盾溪头下71号",xianjia:'5555',yuanjia:"1000",shoucang:23,nr:"内容",images:require("../../assets/5.jpg")}],
            huodong:[{id:1,title:"【全国包邮】-【限时抢购】",stopname:"厦门卡卡服装设计师",href:"/jianjie/jingpin",dizhi:"滨海街道黄盾溪头下71号",xianjia:'5555',yuanjia:"1000",shoucang:23,images:require("../../assets/6.jpg")}]
        }
    },components:{
        Headers
    }
}
</script>
<style scoped>
.dianpu strong{
    font-size: 12px;
    color: #999;
    float: right;
    line-height: 20px;
}
.dianpu i{
        width: 15px;
    height: 15px;
    background: url(../../assets/pub_shopbasic_icon.png) no-repeat -68px -225px transparent;
    float: right;
}
.dianpu a{
    font-size: 12px;
    color: #666;
    float: left;
    padding: 5px;
}
a,ul,li{
     list-style: none;
    text-decoration: none;
}
.bt a:hover,.biaoti a:hover{
    
    color: red;
}
.bt a,.biaoti a{
   
    color: #333;
}
.huodong .bt{
    font-size: 14px;
    overflow:hidden;
    word-break:keep-all;
    white-space:nowrap;
    text-overflow:ellipsis;
    width: 100%;
    display: block;
    font-weight: 700;
}
.huodong li{
    margin: 10px;
    border: 1px solid #e7e7e7;
    width: 248px;
}
.huodong span:nth-child(1){
    color: red;
    padding-right: 5px;
    font-weight: 800;
    height: 20px;
}
.list{
    
     float: left;
    width:75%
}
.huodong{
    float: left;
    width:25%;
   
  margin-top: 20px;
}
.nr{
    font-size: 14px;
}
.jieshao span{
    margin-bottom:10px;
    display: block;
}
.jieshao .biaoti{
    width: 98%;
    height: 30px;
    font-size: 20px;
    font-weight: 500;
    display: block;
    
    line-height: 30px;
}
.yuanjia{
    font-size: 12px;
   
    padding-top: 10px;
    color: #ff4163;
    font-weight: 700;
    height: 17px;
    line-height: 17px;
}
.dizhi{
    width:100%;
    
    font-size: 12px;
    color: #333;
   
    display: block;
}
.jieshao{
     width:50%;
     height: 150px;
    
    margin: 20px;
      float: left;
}
.imgbox{
    width:30%;
    height: 150px;
   
    margin: 20px;
    float: left;
}
.list li{
   
    height: 200px;
    border: 1px solid #e7e7e7;
    margin: 20px;
}
ul,li{
    list-style: none;
    margin: 0;
    padding: 0;
}
.tishi{
    
    color: red;
    height: 30px;
    background: #f4f4f4;
    border: 5px solid #f3ebeb;
    line-height: 30px;
    font-size: 14px;
    padding-left: 10px;
    font-weight: 700;
}
.searchbox{
    width:1080px;
    height: 600px;
    margin: 0 auto;
}
.position a{
    list-style: none;
    text-decoration: none;
    color: #999;
    font-size: 14px;
}
.position{
    width: 100%;
    float: left;
    padding-left: 10px;
    height: 30px;
}
.search-list{
width: 100%;

background: #fff;
float: left;
display: flow-root;
}
</style>
