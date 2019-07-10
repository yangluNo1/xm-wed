<template>

<div class="Exhibitions">
    <protopnav v-on:childByValue="childByValue"></protopnav>
    <div class="jianjie">
        <div class="touxiang">
            <img :src="txss"/>
        </div>
        <div class="dianpujieshao">
            <ul>
                <li><strong>{{dianpus.stopname}}</strong></li>
                <li><div class="dianpujieshao-rzbox clearfix">
                    <dl class="dianpujieshao-tongji ">
                            <dd class="renqi">
                            人气{{dianpus.renqi}}w </dd>
                            <dd class="pinglun">
                            评论{{dianpus.pinglun}} </dd>
                            <dd class="zuopin">
                            作品{{dianpus.zuopin}} </dd>
                    </dl>
                    </div>
                </li>
                <li><p class="dianpujieshao-address clearfix">
                        <span class="titfl">地址</span>
                        <span class="addpr">{{dianpus.dizhi}}</span>
                        <a href="javascript:;" class="mdialog" data-url="" data-width="750" data-height="320" title="还在抄写地址电话吗？点一下，短信免费发给您">
                        <i class="sendphone"></i>
                        <span class="fasong">发送到手机</span>
                        </a>
                    </p>
                </li>
                <li><p class="dianpujieshao-logotxt clearfix">
                    <span class="titfl">
                    电话
                    </span>
                    <span>
                    {{dianpus.phone}} </span>
                    <a href="javascript:void(0);" class="sixin" onclick="WedIM.show();" style="margin-left: 10px;">
                        <i class="kf2"></i>
                        <span>在线咨询</span></a>
                    </p>
                </li>
                
            </ul>
            
        </div>
    </div>
    <productnav></productnav>
   <div class="exposition">
      位置: <router-link to="/">首页</router-link>&gt;<router-link :to="this.$route.path">{{commonTitle}}</router-link>
   </div>
</div>
</template>

<script>
import protopnav from '../protopnav';
import productnav from '../productnav';

export default {
 name: 'Exhibitions',

 data(){
return{dianpus:{id:1,stopname:"厦门大提大作婚纱摄影工作室",renqi:123,pinglun:1201,zuopin:142,dizhi:"[思明区] 滨海街道黄厝溪头下71号",phone:1888888888,touxiang:require("../../../assets/5.jpg")}
    ,commonTitle:"",txss:""
}
 },
   created(){
      
    var routePath = this.$route.path;
    //this.routeList.push(routePath);
    switch(routePath){
    	case '/home':
        this.commonTitle = '首页';
        break;     
        case '/jingpinzhekou':
        this.commonTitle = '精品折扣';
        break;
        case '/zuopinjingxuan':
        this.commonTitle = '作品精选';
        break;
        case '/youhuihuodong':
        this.commonTitle = '优惠活动';
        break;
        case '/gongsijianjie':
        this.commonTitle = '公司简介';
        break;
       
    }
}, methods: {
   childByValue: function (childValue) {
    // childValue就是子组件传过来的值
    this.txss = childValue
   }
  },
 components:{
   protopnav,
   productnav
 }
}
</script>
<style scoped="">
.kf2{
        width: 16px;
    height: 16px;
    margin-right: 5px;
    background: url(../../../assets/kf2.gif) no-repeat;
    background-size: 100% 100%;
    float: left;
}

.mdialog,.sixin{
    width: 200px;
    display: block;
    float: left;
    margin-left: 15px;
  
}
.mdialog :hover{
    color: red;
    background: #333;
}
/* .dianpujieshao-address i:hover{
        background: url(../../../assets/pub_shopbasic_icon.png) no-repeat scroll 0 -181px transparent;
  width: 15px;
    height: 15px;
    margin-top: 3px;
    margin-right: 5px;
    display: block;
    float: left;
   
    -webkit-transition: all .1s ease-in,ease-out .2s;
} */
.dianpujieshao-address i{
        background: url(../../../assets/pub_shopbasic_icon.png) no-repeat scroll 0 -181px transparent;
    width: 15px;
    height: 15px;
    margin-top: 3px;
    margin-right: 5px;
    display: block;
    float: left;
   
    -webkit-transition: all .1s ease-in,ease-out .2s;
}
.dianpujieshao-address .fasong{
color: #666;
font-size: 14px;
float: left;
display: block;
}
.dianpujieshao-address .titfl{
     color: #999;
    font-size: 15px;
    float: left;
    display: block;
    margin-right: 10px;
}
.dianpujieshao-address .addpr,.dianpujieshao-logotxt span{
        overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #333;
    font-size: 14px;
    float: left;

}
.dianpujieshao-address,.dianpujieshao-logotxt{
    color: #666;
    float: left;
}
.dianpujieshao .renqi{
    margin-left: -40px;
    background:url(../../../assets/pub_shopbasic_icon.png) no-repeat scroll 0 -64px transparent;
}
.dianpujieshao .pinglun{
    background:url(../../../assets/pub_shopbasic_icon.png) no-repeat scroll 0 -96px transparent;
}
.dianpujieshao .zuopin{
    background:url(../../../assets/pub_shopbasic_icon.png) no-repeat scroll 0 -130px transparent;
}
.dianpujieshao li{
    width: 100%;
    float: left;
}
.dianpujieshao-tongji{
 margin-left: 40px;
}
.dianpujieshao-tongji dd{
        width: 80px;
       height: 16px;
    line-height: 16px;
    padding-left: 10px;
    color: #999;
    float: left;
    font-size: 12px;
   text-align: center;
}
ul,li{
    list-style: none;
   
}
.dianpujieshao strong{
        font-size: 20px;
    color: #333;
    margin-right: 10px;
    font-weight: 400;
}
.dianpujieshao{
    width: 60%;
    float: left;
    height: 200px;
    margin: 10 auto;
 
}
a{
    list-style: none;
    text-decoration: none;
}
.exposition a{
 color: #999;
}
.exposition{
    color: #999;
    font-size: 12px;
    height: 20px;
    line-height: 20px;
    margin-left: auto;
    margin-right: auto;
    padding: 10px 0;
    text-align: left;
    width: 960px;
}
.jianjie{
    width:980px;
    margin: 0 auto;
    background: #fff;
    height: 200px;

}
.touxiang{
    width: 200px;
    height: 200px;
     float: left;
}
.touxiang img{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 20px
}
</style>
