<template>
  <div id="app">
    <protopnav></protopnav>
    <div class="lunbobox">
      <el-carousel height="500px" direction="horizontal" :autoplay="true">
        <el-carousel-item v-for="item in items" :key="item.index">
          <img :src="item.path" width="100%" height="100%" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="chanpinbox">
      <el-carousel height="250px" direction="horizontal" :autoplay="true">
        <el-carousel-item v-for="item in items" :key="item.index">
          <i class="icon"></i>
          <img :src="item.path" width="100%" height="100%" />
        </el-carousel-item>
      </el-carousel>
      <div class="chanpinms">
        <div class="chanpinmsname">
          <h3 style="color:#333;"> 厦门薇漫一婚纱摄影
            <!-- <ul class="pro-shopbox-rzlist ">
<li>
<a class="gticon" target="_blank" title="个体认证" href="https://www.wed114.cn/shimingrenzheng.html">
<em style="display: none;">该商家已通过个体认证！</em>
<i style="display: none;"></i>
</a>
</li>
<li>
<a class="tjicon" target="_blank" title="推荐商家" href="https://www.wed114.cn/adsplan.html">
<em style="display: none;">推荐商家！</em>
<i style="display: none;"></i>
</a>
</li>
</ul> -->
          </h3>
        </div>
        <div class="pro-shopbox-rzbox clearfix">

          <ul class="pro-shopbox-tongji ">
            <li class="renqi">
              人气1687 </li>
            <li class="pinglun">
              评论131 </li>
            <li class="zuopin">
              作品85 </li>
          </ul>
        </div>
        <div class="address">
          <span>地址</span><strong>[思明区] 黄厝溪头下三个厦大人遇书房2楼</strong>
        </div>
        <div class="phone">
          <span>电话</span><strong>1888888888</strong>
        </div>
        <div class="pro-basic-yybtn clearfix">
          <a data-url="" class="mdialog" data-width="750" data-height="320" href="javascript:"
            v-on:click="zxopen()">咨询档期</a>
          <span><i></i>预订成功包单程机票+全新新娘定制婚纱一套</span>
        </div>
      </div>

    </div>

    <zxdangqi ref="child"></zxdangqi>

    <productnav></productnav>
    <div class="zhekou">
      <a class="zhekoutit" href="" title="厦门苏禾婚纱摄影工作室-精品折扣" target="_blank">精品折扣</a>
      <router-link class="zklink" to="/jingpinzhekou">更多</router-link>
      <div class="zhekoubox" v-for="zhekou in zhekous" :key="zhekou.index">
        <router-link :to="{name:'jingpin',params:{id:zhekou}}" class="zhekouboxa">
          <img :src="zhekou.src" width="100%" height="75%" />
          <div class="zhekoujianjie">
            <router-link class="zhekoubt" to="/jianjie/jingpin">{{zhekou.title}}</router-link>
            <span class="jiage">￥{{zhekou.xianjia}}</span> <span class="yuanjia">￥{{zhekou.yuanjia}}</span>
            <span class="shoucang"><i></i>12</span>
          </div>
        </router-link>
      </div>

    </div>

    <div class="jingxuan">
      <a class="jingxuantit" href="" title="厦门苏禾婚纱摄影工作室-精品折扣" target="_blank">作品精选</a>
      <router-link class="jxlink" to="/zuopinjingxuan">更多</router-link>
      <div class="jingxuanbox" v-for="ps in 6" :key="ps">
        <router-link to="/jianjie/Wkmain" class="zhekouboxa">
          <img src="http://pic11.wed114.cn/pic/20190704/2019070411105318211504x450_300_0.jpg" width="100%" height="85%" />
          <div class="jingxuanjianjie">
            <router-link class="jingxuanbt" to="/jianjie/Wkmain">【店长推荐】消费透明/产品包邮/送全新婚纱</router-link>
            <span class="chakan"><i></i>12</span>
          </div>
        </router-link>
      </div>

    </div>
  </div>
</template>


<script>
  import productnav from './productnav';
  import protopnav from './protopnav';
  import zxdangqi from './Zxdangqi'
  export default {
    name: "protopbox",
    components: {
      productnav,
      protopnav,
      zxdangqi
    },
    data() {
      return {
        items: [{
            id: 0,
            path: require("../../assets/3.jpg")
          },
          {
            id: 1,
            path: require("../../assets/2.jpg")
          },
          {
            id: 2,
            path: require("../../assets/2.jpg")
          }
        ],
        zhekous: [{
            id: 0,
            title: "【店长推荐】消费透明/产品包邮/送全新婚纱",
            xianjia: '2324',
            yuanjia: "1000",
            shoucang: 23,
            src: require("../../assets/6.jpg")
          },
          {
            id: 1,
            title: "【店长推荐】消费透明/产品包邮/送全新婚纱",
            xianjia: '1111',
            yuanjia: "1000",
            shoucang: 23,
            src: require("../../assets/5.jpg")
          },
          {
            id: 2,
            title: "【店长推荐】消费透明/产品包邮/送全新婚纱",
            xianjia: '2222',
            yuanjia: "1000",
            shoucang: 23,
            src: require("../../assets/6.jpg")
          },
          {
            id: 3,
            title: "【店长推荐】消费透明/产品包邮/送全新婚纱",
            xianjia: '3333',
            yuanjia: "1000",
            shoucang: 23,
            src: require("../../assets/6.jpg")
          },
          {
            id: 4,
            title: "【店长推荐】消费透明/产品包邮/送全新婚纱",
            xianjia: '4444',
            yuanjia: "1000",
            shoucang: 23,
            src: require("../../assets/6.jpg")
          },
          {
            id: 5,
            title: "【店长推荐】消费透明/产品包邮/送全新婚纱",
            xianjia: '5555',
            yuanjia: "1000",
            shoucang: 23,
            src: require("../../assets/6.jpg")
          }
        ],
        dialogTableVisible: false,
        dialogFormVisible: false


      }
    },
    methods: {
      zxopen() {
        this.dialogFormVisible = true
        this.$refs.child.parentMsg(this.dialogFormVisible)
      }
    }

  }

</script>


<style scoped="">
  .zhekouboxa {
    list-style: none;
    text-decoration: none;
  }

  .zhekoubox,
  .jingxuanbox {
    width: 290px;
    height: 270px;
    border: 1px solid #cccccc;
    margin: 10px;
    float: left
  }

  .zhekou {
    width: 980px;
    height: 700px;
    background: #fff;
    margin: 0 auto;
    margin-top: 10px;
  }

  .icon {
    background: url(../../assets/pub_shopbasic_icon.png) no-repeat scroll 0 -389px transparent;
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

  .chanpinbox {
    width: 980px;
    height: 300px;
    background: #ffffff;
    margin: 20px auto;
  }

  .lunbobox .el-carousel {
    width: 980px;
    margin: 0 auto;
    margin-top: 20px
  }

  .chanpinbox .el-carousel {
    width: 40%;

  }

  .chanpinms {

    float: right;
    position: relative;
    width: 545px;
    height: 300px;
    margin-top: -250px;

  }

  .pro-shopbox-tongji ul {
    width: 100%;
    height: 100%;
  }

  .pro-shopbox-tongji li {
    height: 16px;
    line-height: 16px;
    padding-left: 20px;
    color: #999;
    float: left;
    font-size: 12px;
    margin-right: 20px;
    list-style: none;
  }

  .pro-shopbox-tongji .renqi {
    margin-left: -40px;
    background: url(../../assets/pub_shopbasic_icon.png) no-repeat scroll 0 -64px transparent;
  }

  .pro-shopbox-tongji .pinglun {
    background: url(../../assets/pub_shopbasic_icon.png) no-repeat scroll 0 -96px transparent;
  }

  .pro-shopbox-tongji .zuopin {
    background: url(../../assets/pub_shopbasic_icon.png) no-repeat scroll 0 -130px transparent;
  }

  .pro-basic-yybtn {
    width: 100%;
    height: 50px;
    ;
  }

  .pro-basic-yybtn a {
    text-decoration: none;
    width: 130px;
    height: 38px;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    background: #ff4163;
    color: #fff;
    border-radius: 3px;
    margin-right: 20px;
    display: block;
    line-height: 38px;
    margin-top: 50px;
  }

  .pro-basic-yybtn i {
    float: left;
    width: 12px;
    height: 12px;
    margin-right: 5px;
    margin-top: 6px;
    display: block;
    background: url(../../assets/pub_shopbasic_icon.png) no-repeat scroll -91px -203px transparent;
  }

  .pro-basic-yybtn span {
    display: block;
    float: right;
    color: #999;
    font-size: 14px;
    line-height: 26px;
    height: 26px;
    border: 1px solid #f4f4f4;
    padding: 0 10px;
    color: #6f6f6f;
    margin-right: 75px;
    margin-top: -30px;
    position: relative;
    font-size: 12px;
  }

  .pro-shopbox-rzbox {
    width: 100%;
    height: 40px;
  }

  .address {


    padding-right: 15px;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    height: 30px;
  }

  .address span,
  .phone span {
    float: left;
    color: #6f6f6f;
    font-size: 16px;
    font-family: '宋体';
    font-weight: 600;
  }

  .address strong,
  .phone strong {

    margin-left: 20px;
    float: left;
    color: #999;
    font-size: 14px;
    font-family: '宋体';

  }

  .phone {
    padding-right: 15px;
    max-width: 315px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #6f6f6f;
    font-size: 16px;
    font-family: '宋体';
    font-weight: 600px;
    height: 30px;
  }

  .zhekoutit,
  .jingxuantit {
    list-style: none;
    text-decoration: none;
    font-size: 18px;
    font-weight: 700;
    color: #303030;
    width: 150px;
    height: 50px;
    display: block;
    line-height: 50px;
    text-align: center;
  }

  .zklink,
  .jxlink {
    list-style: none;
    text-decoration: none;
    font-size: 12px;
    font-weight: 700;
    color: #999;
    display: block;
    float: right;
    margin-top: -25px;
    margin-right: 25px;
  }

  .zhekoubox,
  .jingxuanbox {
    margin-left: 20px;
  }

  .zhekoubox:hover,
  .jingxuanbox:hover {
    border: 1px solid #ff4163;
  }

  .zhekoubt {
    list-style: none;
    text-decoration: none;
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

  .zhekoujianjie span {
    list-style: none;



    height: 30px;
    line-height: 30px;


    font-weight: 700;
    margin-left: 15px;
  }

  .zhekoujianjie .jiage {
    font-size: 18px;
    color: #ff4163;
  }

  .zhekoujianjie .yuanjia {
    text-decoration: line-through;
    font-size: 12px;
    color: #999;
    margin-left: 20px;
    font-weight: 400;
    display: inline-block;
  }

  .zhekoujianjie .shoucang i,
  .jingxuanjianjie .shoucang i {
    width: 15px;
    height: 15px;
    background: url(../../assets/pub_shopbasic_icon.png) no-repeat -68px -225px transparent;
    float: left;

  }

  .zhekoujianjie .shoucang {
    float: right;
    margin-right: 30px;
    font-size: 12px;
    color: #999;
    margin-top: 5px;
    line-height: 20px;

  }

  .jingxuan {
    width: 980px;
    height: 600px;
    margin: 20px auto;
    background: #fff;
  }

  .jingxuanjianjie {

    height: 50px;
  }

  .jingxuanbt {
    float: left;
    list-style: none;
    text-decoration: none;
    display: block;
    width: 80%;
    height: 30px;
    line-height: 30px;
    color: #666;
    font-size: 14px;
    font-weight: 400;

    overflow: hidden;
    word-break: break-all;

  }

  .jingxuanjianjie .shoucang {
    float: left;

  }

  .chakan i {
    font-size: 12px;
    float: left;
    background: url(../../assets/all-icon-img.png) no-repeat scroll -110px -66px transparent;
    width: 14px;
    height: 20px;
    margin-top: -5px;
  }

  .chakan {
    margin-right: 20px;
    float: right;
    font-size: 12px;
    color: #999;
    margin-top: 5px;
    line-height: 20px;
  }

</style>
