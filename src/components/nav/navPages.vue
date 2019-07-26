<template>
  <div class="navPage">
    <Headers></Headers>
    <div class="shaixuanbox">
      <div class="cation-content">
        <div style="height:50px"></div>
        <!-- 可以删除 -->
        <div class="cation-middle">
          <div class="crumbs"></div>
          <dl class="cation-list">
            <dt>类型</dt>
            <dd class="lx">
              <a href="#" rel="" name="huxing" v-for="lx in lxList" :key="lx.name" :class="{active : active == lx.name}"
                @click="selected(lx.name)" class="all on">{{lx.name}}</a>
            </dd>
          </dl>
          <dl class="cation-list">
            <dt>区域</dt>
            <dd class="qy">
              <a href="#" rel="" name="mianji" v-for="item in wpList" :key="item.name"
                :class="{active2 : active2 == item.name}" @click="selected2(item.name)" class="all on">{{item.name}}</a>
            </dd>
          </dl>
        </div>
        <div class="paixu">
          <a class="zh" :class="{'paixuactive':0 ==checkindex}" @click="selected3(0)">综合排序</a>
          <a class="bz" :class="{'paixuactive':1 ==checkindex}" @click="selected3(1)">保障</a>
          <a class="zp" :class="{'paixuactive':2 ==checkindex}" @click="selected3(2)">作品</a>
          <a class="rq" :class="{'paixuactive':3 ==checkindex}" @click="selected3(3)">人气</a>
        </div>
        <div class="case_list">
          <ul>
            <li v-for="search in searchs" :key="search.index">
              <div class="img">
                <router-link :to="{name:'jingpin',params:{id:search}}">
                  <img :src="search.images" />
                </router-link>
              </div>
              <div class="jianjie">
                <p class="title">
                  <router-link :to="{name:'jingpin',params:{id:search}}">厦门韩匠全球旅拍婚纱摄影</router-link>
                </p>
                <p class="dz">黄厝216号韩匠婚纱摄影</p>
                <p class="jiage">￥3299.00起</p>
                <p class="inpostcont">
                  <span>优惠活动<em></em></span>
                  <router-link :to="{name:'jingpin',params:{id:search}}">【一价全包】全国包邮+全新婚纱+酒店住宿+接机</router-link>
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div class="huodongbox">
          <ul>
            <li class="hdboxbt"><i></i>厦门婚庆活动推荐</li>
            <li v-for="sh in searchs" :key="sh.index">
              <div class="hdimgbox">
                <router-link :to="{name:'jingpin',params:{id:sh}}"> <img :src="sh.images" /></router-link>
                <P class="dm">
                  <router-link :to="{name:'jingpin',params:{id:sh}}">{{sh.dianming}}</router-link>
                </P>
                <P class="tt">
                  <router-link :to="{name:'jingpin',params:{id:sh}}"><span class="ttspan">{{sh.title}}</span>
                  </router-link><span class="view"><i></i>25015</span>
                </P>
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
  import Headers from "../home/Headers";
  import footers from '../home/Footer'
  export
  default {
    name: 'navPage',
    components: {
      Headers,
      footers
    },
    data() {
      return {
        checkindex: 0,
        searchs: [{
            id: 1,
            dianming: "厦门卡卡服装设计师",
            title: "【店长推荐】消费透明/产品包邮/送全新婚纱",
            href: "/jianjie/jingpin",
            dizhi: "滨海街道黄盾溪头下71号",
            xianjia: '5555',
            yuanjia: "1000",
            shoucang: 23,
            nr: "内容",
            images: require("../../assets/5.jpg")
          },
          {
            id: 1,
            dianming: "厦门卡卡服装设计师",
            title: "【店长推荐】消费透明/产品包邮/送全新婚纱",
            href: "/jianjie/jingpin",
            dizhi: "滨海街道黄盾溪头下71号",
            xianjia: '5555',
            yuanjia: "1000",
            shoucang: 23,
            nr: "内容",
            images: require("../../assets/5.jpg")
          },
          {
            id: 1,
            dianming: "厦门卡卡服装设计师",
            title: "【店长推荐】消费透明/产品包邮/送全新婚纱",
            href: "/jianjie/jingpin",
            dizhi: "滨海街道黄盾溪头下71号",
            xianjia: '5555',
            yuanjia: "1000",
            shoucang: 23,
            nr: "内容",
            images: require("../../assets/5.jpg")
          },
          {
            id: 1,
            dianming: "厦门卡卡服装设计师",
            title: "【店长推荐】消费透明/产品包邮/送全新婚纱",
            href: "/jianjie/jingpin",
            dizhi: "滨海街道黄盾溪头下71号",
            xianjia: '5555',
            yuanjia: "1000",
            shoucang: 23,
            nr: "内容",
            images: require("../../assets/5.jpg")
          }
        ],
        wpList: [{
            name: '不限'
          },
          {
            name: '海沧区'
          },
          {
            name: '湖里区'
          },
          {
            name: '集美区'
          },
          {
            name: '思明区'
          },
          {
            name: '同安区'
          },
          {
            name: '翔安区'
          }
        ],
        lxList: [{
            name: '不限'
          },
          {
            name: '婚纱摄影'
          },
          {
            name: '摄影工作室'
          },
          {
            name: '儿童摄影'
          }
        ],
        active: '',
        active2: '',
        active3: ''
      }
    },
    methods: {
      selected(name) {
        this.active = name;
      },
      selected2(name) {
        this.active2 = name;
      },
      selected3(index) {
        this.checkindex = index;
      }
    },
    mounted() {
      this.active = '不限';
      this.active2 = '不限';
      this.checkindex = 0
    }
  }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .case_list .inpostcont a {
    font-size: 12px;
    display: block;
    line-height: 28px;
    height: 28px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .dz {
    color: #999;
    font-size: 12px;
  }
  .jiage {
    color: #ff4163;
    font-size: 12px;
  }
  .jianjie .title {
    font-size: 20px;
  }
  .case_list .jianjie {
    width: 50%;
    float: left;
    padding-top: 20px;
  }
  .inpostcont span {
    background: #ff4163;
    color: #fff;
    padding: 0 5px;
    margin-right: 10px;
    position: relative;
    float: left;
    display: block;
    line-height: 28px;
    height: 28px;
    font-size: 14px;
  }
  .inpostcont span em {
    position: absolute;
    border: 5px solid #fff;
    border-right: 4px solid #ff4163;
    top: 4px;
    left: -9px;
  }
  .case_list li {

    width: 100%;
    margin-bottom: 10px;
    border: 1px solid #e6e6e6;
    border-collapse: collapse;
  }
  .paixu {
    width: 100%;
    height: 30px;
    line-height: 30px;
    margin: 20px auto;
    padding-left: 40px;
  }
  .paixu a:nth-child(1) {
    background: none;
  }
  .zh {
    margin-right: 20px;
  }
  .hdimgbox .dm {
    color: #333;
    font-size: 16px;
    font-weight: 400;
    padding-left: 5px;
    margin-bottom: 10px;
  }
  .hdimgbox .view i {
    width: 15px;
    height: 15px;
    background: url(../../assets/pub_shopbasic_icon.png) no-repeat -68px -225px transparent;
    float: left;
  }
  .hdimgbox .view {
    font-size: 12px;
    color: #999;
    float: right;
    line-height: 20px;
  }
  .hdimgbox .ttspan {
    color: #999;
    font-size: 12px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 80%;
    display: block;
    float: left;
  }

  .hdimgbox img {
    width: 100%;
    height: 180px;
  }

  .hdimgbox {

    margin: 0 10px;
    margin-bottom: 20px;
    height: 240px;
    padding: 5px;
    border-collapse: collapse;

  }

  .bz,
  .zp,
  .rq {
    background: url(../../assets/newsheying.png) no-repeat scroll 30px -212px transparent;
    padding-right: 15px;
    color: #666;
  }

  .paixuactive {
    color: #ff4163;
    background: url(../../assets/newsheying.png) no-repeat scroll -40px -214px;
  }

  .paixu a {

    font-size: 14px;
  }

  .active,
  .active2 {

    margin-top: 10px;
    height: 28px;
    background: #ff4163;
    line-height: 28px;
    color: #fff;
    font-weight: 600;
  }

  .shaixuanbox {
    width: 100%;

  }

  .navPage {
    width: 1080px;
    margin: 0 auto;
    background: #fff;
    display: flow-root;

  }

  html,
  body {
    background: #fff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  img {
    border: 0;
  }

  a {
    text-decoration: none;
    color: #4c4c4c;
  }

  /* 必要布局样式css */

  .cation-content {
    width: 1080px;
    margin: 0 auto;
    padding: 0;
  }

  .cation-middle {
    line-height: 48px;
    font-size: 14px;
    margin-top: 20px;
  }

  .cation-middle .crumbs {
    padding-left: 35px;
    color: #444;
    font-size: 16px;
    line-height: 48px;

  }

  .cation-list {
    overflow: hidden;
    width: 1180px;
    margin: 0 auto;
  }

  .cation-list dt {
    float: left;
    width: 120px;
    font-weight: 700;
    line-height: 48px;
    position: relative;
    color: #4c4c4c;
    text-align: center;
    font-size: 14px;

  }

  .cation-list:last-child dt {
    border-bottom: none;
  }

  .cation-list:last-child dd {
    border-bottom: none;
  }

  .cation-list dd {

    overflow: hidden;

  }

  .cation-list dd a {

    font-size: 12px;

    text-align: left;
    padding-left: 20px;
    padding-right: 20px;
    margin-left: 10px;
    display: inline-block;
    float: left;

  }


  .cation-list dd a.on {


    margin-right: 10px;
  }

  .cation-list a:hover {
    /* color: red; */
    font-weight: 600;

  }

  .huodongbox {
    width: 28%;
    float: left;
  }

  .huodongbox li:not(:first-child) {
    border: 1px solid #e6e6e6;
    margin: 10px;
  }

  .hdboxbt {
    padding: 20px;
    font-size: 18px;

  }

  .hdboxbt i {
    width: 3px;
    height: 20px;
    background: #ff4163;
    float: left;
    margin-right: 10px;
  }

  .case_list {
    width: 70%;
    float: left;
    overflow: hidden;
    /*	padding-top: 20px;*/
    margin-left: 15px;
  }

  li,
  ul,
  a {
    list-style: none;
    text-decoration: none;
  }

  .case_list ul li {
    padding: 15px;
    float: left;
    margin-right: 15px;
    overflow: hidden;

  }

  .case_list ul li:nth-child(3n) {
    margin-right: 0;
  }

  .case_list ul li .img {
    float: left;
    /* width: 40%; */
    height: 225px;
    overflow: hidden;
  }

  .case_list ul li img {
    width: 100%;
    height: 225px;
    display: block;
  }

  .case_list ul li img:hover {
    transform: scale(1.05);
    cursor: pointer;
    transition: all linear .5s;
  }

  .case_list ul li p {
    float: left;

    width: 100%;

    border-top: none;
    height: 48px;
    line-height: 48px;
    padding: 0 20px;

  }

</style>
