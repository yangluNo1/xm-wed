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
                  <img :src="search.images" width="100%" height="100%" />
                </router-link>
              </div>
              <div class="jieshao">
                <span class="biaoti">
                  <router-link :to="{name:'jingpin',params:{id:search}}">{{search.dianming}}</router-link>
                </span>
                <span class="dizhi">{{search.dizhi}}</span>
                <span
                  style=" width: 355px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;color: #88c5c0;font-size:12px;margin-bottom:0px">0对新人在30天内预约过该商家</span>
                <span class="yuanjia">￥{{search.xianjia}}起</span>
                <span class="daodian">到 店 礼<em></em></span><span class="nr">{{search.nr}}</span>

              </div>
            </li>

          </ul>
        </div>
        <div class="huodong">
          <div class="tuijian"><span style="padding-left:20px;">|</span><span>活动推荐</span></div>
          <ul>
            <li v-for="hd in huodong" :key="hd.index">
              <div>
                <router-link :to="{name:'jingpin',params:{id:hd}}"><img :src="hd.images" width="100%" /></router-link>
                <span class="bt">
                  <router-link :to="{name:'jingpin',params:{id:hd}}">{{hd.title}}</router-link>
                </span>
                <span class="dianpu">
                  <router-link :to="{name:'jingpin',params:{id:hd}}">{{hd.stopname}}</router-link>
                  <i></i><strong>123</strong>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <footers></footers>
  </div>
</template>
<script>
  import Headers from "./Headers";
  import footers from './Footer'
  export default {
    name: "search",
    data() {
      return {
        searchs: [{
          id: 1,
          dianming: "厦门卡卡服装设计师",
          title: "【店长推荐】消费透明/产品包邮/送全新婚纱",
          href: "/jianjie/jingpin",
          dizhi: "滨海街道黄盾溪头下71号",
          xianjia: '5555.00',
          yuanjia: "1000.00",
          shoucang: 23,
          nr: "点进来有优惠",
          images: require("../../assets/5.jpg")
        }],
        huodong: [{
          id: 1,
          title: "【全国包邮】-【限时抢购】",
          stopname: "厦门卡卡服装设计师",
          href: "/jianjie/jingpin",
          dizhi: "滨海街道黄盾溪头下71号",
          xianjia: '5555.00',
          yuanjia: "1000.00",
          shoucang: 23,
          images: require("../../assets/6.jpg")
        }]
      }
    },
    components: {
      Headers,
      footers
    }
  }

</script>
<style scoped>
  .footer {
    width: 1080px;
    position: absolute;
    bottom: 0;
    margin: 0 auto;
  }

  .daodian em {
    position: absolute;
    border: 5px solid #fff;
    border-right: 4px solid #ff4163;
    top: 4px;
    left: -9px;
  }

  .daodian {
    background: #ff4163;
    color: #fff;
    padding: 0 5px;
    margin-right: 10px;
    position: relative;
    float: left;
    display: block;
    font-size: 13px;
  }

  .dianpu strong {
    font-size: 12px;
    color: #999;
    float: right;
    line-height: 20px;
  }

  .dianpu i {
    width: 15px;
    height: 15px;
    background: url(../../assets/pub_shopbasic_icon.png) no-repeat -68px -225px transparent;
    float: right;
  }

  .dianpu a {
    font-size: 12px;
    color: #999;
    float: left;
    padding: 5px;
  }

  a,
  ul,
  li {
    list-style: none;
    text-decoration: none;
  }

  .bt a:hover,
  .biaoti a:hover,
  .dianpu a:hover {

    color: #ff4163;
  }

  .bt a,
  .biaoti a {

    color: #333;
  }

  .huodong .bt {
    font-size: 15px;
    overflow: hidden;
    word-break: keep-all;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
    display: block;

  }

  .huodong li {
    margin: 10px;
    border: 1px solid #e7e7e7;
    width: 248px;
    padding: 10px;
    overflow: hidden;
  }

  .huodong span:nth-child(1) {
    color: red;
    padding-right: 5px;
    font-weight: 800;
    height: 20px;
  }

  .list {

    float: left;
    width: 71%;
    margin-top: 30px;
  }

  .huodong {
    float: left;
    width: 25%;

    margin-top: 20px;
  }

  .nr {
    font-size: 12px;
    color: #666;
  }

  .jieshao span {
    margin-bottom: 10px;
    display: block;
  }

  .jieshao .biaoti {
    width: 98%;
    height: 30px;
    font-size: 17px;
    font-weight: bold;
    display: block;

    line-height: 30px;
  }

  .yuanjia {
    font-size: 12px;

    padding-top: 10px;
    color: #ff4163;
    font-weight: 700;
    height: 17px;
    line-height: 17px;
  }

  .dizhi {
    width: 100%;

    font-size: 12px;
    color: #333;

    display: block;
  }

  .jieshao {
    width: 50%;
    padding-left: 10px;
    overflow: hidden;
    margin: 10px;
    float: left;
  }

  .imgbox {
    width: 30%;
    height: 150px;
    overflow: hidden;
    margin: 10px 0;
    float: left;
  }

  .list li {


    overflow: hidden;
    border: 1px solid #e7e7e7;
    padding: 0 10px;
    margin: 20px;
  }

  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .tishi {
    height: 30px;
    background: #f4f4f4;
    border: 5px solid #f3ebeb;
    line-height: 30px;
    font-size: 14px;
    padding-left: 10px;
    font-weight: 700;
  }

  .search {
    background: #fff;
    width: 1080px;
    margin: 0 auto;
  }

  .searchbox {
    width: 1080px;
    height: 600px;
    margin: 0 auto;
  }

  .position a {
    list-style: none;
    text-decoration: none;
    color: #999;
    font-size: 14px;
  }

  .position {
    width: 100%;
    float: left;
    padding-left: 10px;
    height: 30px;
  }

  .search-list {
    width: 100%;

    background: #fff;
    float: left;
    display: flow-root;
  }

</style>
