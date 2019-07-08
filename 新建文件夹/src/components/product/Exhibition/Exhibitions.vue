<template>

<div class="Exhibitions">
    <protopnav></protopnav>
    <div class="jianjie">
        <div class="touxiang">
            <img src="https://pic9.wed114.cn/201704/2017040515240779226503.jpg"/>
        </div>
        <div class="dianpujieshao">
            <ul>
                <li><strong>厦门大提大作婚纱摄影工作室</strong></li>
                <li><div class="dianpujieshao-rzbox clearfix">
                    <dl class="dianpujieshao-tongji ">
                            <dd class="renqi">
                            人气225.1w </dd>
                            <dd class="pinglun">
                            评论1084 </dd>
                            <dd class="zuopin">
                            作品2142 </dd>
                    </dl>
                    </div>
                </li>
                <li><p class="dianpujieshao-address clearfix">
                        <span class="titfl">地址</span>
                        <span class="addpr">[思明区] 滨海街道黄厝溪头下71号</span>
                        <a href="javascript:;" class="mdialog" data-url="" data-width="750" data-height="320" title="还在抄写地址电话吗？点一下，短信免费发给您">
                        <i class="sendphone"></i>
                        <span>发送到手机</span>
                        </a>
                    </p>
                </li>
                <li><p class="dianpujieshao-logotxt clearfix">
                    <span class="titfl">
                    电话
                    </span>
                    <span>
                    15280267073 </span>
                    <a href="javascript:void(0);" class=" sixin" onclick="WedIM.show();" style="margin-left: 10px;">
                        <i class="kf2"></i>
                        <span>在线咨询</span></a>
                    </p>
                </li>
                
            </ul>
            
        </div>
    </div>
    <productnav></productnav>
   <div class="exposition">
位置: <a href="/" title="厦门小提大作婚纱摄影工作室">厦门小提大作婚纱摄影工作室</a>
&gt;
<a href="/home" title="厦门小提大作婚纱摄影工作室-精品折扣">精品折扣</a>
&gt;
【店长推荐】消费透明/产品包邮/送全新婚纱
   </div>
</div>
</template>

<script>
import protopnav from '../protopnav';
import productnav from '../productnav';

export default {
 name: 'Exhibitions',
 data(){
return{pronavs:[
]}
 },
 components:{
   protopnav,
   productnav
 }
}
</script>
<style scoped="">
.dianpujieshao-address .addr{
        overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.dianpujieshao-address,.dianpujieshao-logotxt{
    color: #666;
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
 
       height: 16px;
    line-height: 16px;
    padding-left: 10px;
    color: #999;
    float: left;
    font-size: 12px;
   
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
    width: 50%;
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
