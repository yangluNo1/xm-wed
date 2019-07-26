<template>
  <div class="Discount">
    <div class="Discountbox clearifx">
      <div class="Discounttit clearifx">
        <h3> 特惠 </h3>
        <strong> 厦门婚纱摄影特惠，手快有手慢无啊亲~ </strong>
      </div>
      <div class="Discountmore">
        <router-link to="/jingpinzhekou" title="特惠" target="_blank">更多</router-link>
      </div>
    </div>
    <div class="tehuimainbox">
      <div id="tehuimainbox" style="overflow: hidden;">
        <div class="" style="overflow: hidden; position: relative; width: 1080px; height: 580px;">
          <div class="" style="position: relative; left: 0px; width: 1080px; height: 580px;">
            <div class="tehuibox clearfix " style="">
              <ul class="slider1" :style="{  transform: 'translateX' + '(' + currentOffset + 'px' + ')'}">

                <li class="slide" v-for="pro in product" :key="pro.index" v-on:click="que(pro)">
                  <p class="picpx">

                    <router-link :to="{name:'jingpin',params:{id:pro}}" target="_blank">
                      <img :src="pro.images" :alt="pro.title" :title="pro.id" />

                    </router-link>
                  </p>
                  <p class="miaoshubox"> <span class="pb5">
                      <router-link :to="{name:'jingpin',params:{id:pro}}" target="_blank"> {{pro.title}}</router-link>
                    </span>
                    <span class="mscont">{{pro.describe}}</span> </p>
                  <p class="miaoshujiage clearfix"> <span class="jiage"><em>￥</em><b>{{pro.xianjia}}.00</b></span>
                    <span class="yuyuegift">预约有礼</span> <span class="mendian">门店价 ￥{{pro.yuanjia}}.00</span>
                  </p>
                  <div class="msbgbox">
                    <p class="msbg clearfix"> <span class="follow">已有<em>{{pro.shoucang}}</em>对新人关注</span> <span
                        class="flcompany">{{pro.flcompany}}</span> </p>
                  </div>
                </li>

              </ul>
            </div>

          </div>
        </div>
        <a class="pinpaiLarrow sprev snav" href="javascript:;" title="上一个" @click="moveCarousel(-1)"
          :disabled="atHeadOfList"></a>
        <a class="pinpaiRarrow snext snav" href="javascript:;" title="下一个" @click="moveCarousel(1)"
          :disabled="atEndOfList"></a>
      </div>
    </div>
  </div>
</template>
<script>
  var product;
  export default {
    mounted: function () {

    },
    data() {
      return {
        product: [{
            id: 0,
            hrefs: "/jianjie/jingpin",
            images: require("../../assets/2.jpg"),
            title: "【店长推荐】消费透明/产品包邮/送全新婚纱",
            describe: "性价比高，无隐形消费",
            xianjia: "1588",
            yuanjia: "5588",
            shoucang: 105,
            flcompany: "厦门苏禾婚纱摄影工作室"
          },
          {
            id: 1,
            hrefs: "/jianjie/jingpin",
            images: require("../../assets/2.jpg"),
            title: "【店长推荐】消费透明/产品包邮/送全新婚纱",
            describe: "性价比高，无隐形消费",
            xianjia: "2588",
            yuanjia: "5588",
            shoucang: 105,
            flcompany: "厦门苏禾婚纱摄影工作室"
          },
          {
            id: 2,
            hrefs: "/jianjie/jingpin",
            images: require("../../assets/2.jpg"),
            title: "【店长推荐】消费透明/产品包邮/送全新婚纱",
            describe: "性价比高，无隐形消费",
            xianjia: "3588",
            yuanjia: "5588",
            shoucang: 105,
            flcompany: "厦门苏禾婚纱摄影工作室"
          },
          {
            id: 3,
            hrefs: "/jianjie/jingpin",
            images: require("../../assets/2.jpg"),
            title: "【店长推荐】消费透明/产品包邮/送全新婚纱",
            describe: "性价比高，无隐形消费",
            xianjia: "4588",
            yuanjia: "5588",
            shoucang: 105,
            flcompany: "厦门苏禾婚纱摄影工作室"
          },
           {
            id: 3,
            hrefs: "/jianjie/jingpin",
            images: require("../../assets/2.jpg"),
            title: "【店长推荐】消费透明/产品包邮/送全新婚纱",
            describe: "性价比高，无隐形消费",
            xianjia: "4588",
            yuanjia: "5588",
            shoucang: 105,
            flcompany: "厦门苏禾婚纱摄影工作室"
          },
           {
            id: 3,
            hrefs: "/jianjie/jingpin",
            images: require("../../assets/2.jpg"),
            title: "【店长推荐】消费透明/产品包邮/送全新婚纱",
            describe: "性价比高，无隐形消费",
            xianjia: "4588",
            yuanjia: "5588",
            shoucang: 105,
            flcompany: "厦门苏禾婚纱摄影工作室"
          }
        ],
        currentOffset: 0,
        windowSize: 3,
        paginationFactor: 367
      }

    },

    computed: {
      atEndOfList() {
      
        return this.currentOffset <= (this.paginationFactor * -1) * (this.product.length - this.windowSize);
      },
      atHeadOfList() {
        return this.currentOffset === 0;
      },
    },
    methods: {
      que(pro) {
        sessionStorage.setItem('objStr', JSON.stringify(pro))
        this.$router.go(0)
      },
      moveCarousel(direction) {
        // Find a more elegant way to express the :style. consider using props to make it truly generic
        if (direction === 1 && !this.atEndOfList) {

          this.currentOffset -= this.paginationFactor;
        } else if (direction === -1 && !this.atHeadOfList) {
          this.currentOffset += this.paginationFactor;
        }
      },
    }
  }

</script>
<style>
  body {
    font-family: 微软雅黑, microsoft yahei, Arial, Helvetica, sans-serif, 宋体;
  }

</style>

<style scoped="">

  .slider1 {
    transition: all 0.5s;
    margin: 0;
    padding: 0;
    display: inline-flex;
  }

  a {
    list-style: none;
    text-decoration: none;
  }

  .Discount {
    display: block;
    width: 1080px;
    margin: 0 auto;

  }

  .Discountbox {
    margin: 0 auto;
    padding-bottom: 5px;
    border-bottom: 2px solid #e9e9e9;
    height: 32px;
  }

  .Discounttit {
    float: left;
    height: 32px;
    line-height: 32px;
  }

  .Discounttit h3 {
    font-size: 24px;
    color: #333;
    float: left;
    margin: 0px;
  }

  .Discounttit strong {
    padding-left: 15px;
    padding-bottom: 12px;
    color: #999;
    font-weight: 400;
    float: left;
    font-style: normal;
    margin-bottom: 20px;
    font-size: 14px;
  }

  .Discountmore a {
    color: #999;
    ;
    font-size: 12px;
    text-decoration: none;
    margin-right: 0px;
    float: right;
  }

  .el-carousel {
    position: relative;
    padding-top: 20px;
    width: 1080px;
  }

  .pinpaibox {
    width: 1080px;
    overflow: hidden;
  }

  .pinpaibox ul {
    margin: 0;
    padding: 0;
    list-style: none;
    max-width: 1080px;
  }

  .pinpaibox li {
    list-style: none;
    float: left;
    margin: 5px;
    display: inline;
    word-wrap: inherit
  }

  .tehuimainbox {
    position: relative;
    padding-top: 20px;
    _width: 1080px;
    _height: 360px
  }

  .tehuibox {
    width: 1080px;
    margin: 0 auto;
    position: absolute;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 99;
  }

  .tehuibox ul {
    /* width: 1390px */
  }

  .tehuibox li {
    float: left;
    margin-right: 25px;
    width: 340px;
    border: 1px solid #e9e9e9;
    /*padding-top: 20px;e9e9e9*/
    overflow: hidden
  }

  .tehuibox li p.picpx {
    padding: 0 20px
  }

  .tehuibox li img {
    width: 100%;
    height: 200px;

  }

  .tehuibox li:hover {
    border-bottom-color: #ff4163;
    box-shadow: 0 -1px 0 #ff4163 inset
  }

  .miaoshubox {
    padding: 0px 20px
  }

  .miaoshubox span {
    display: block;
    color: #999
  }

  .miaoshubox .pb5 {
    height: 27px;
    line-height: 27px;
    overflow: hidden
  }

  .miaoshubox .mscont {
    line-height: 19px;
    height: 19px;
    overflow: hidden;
    font-size: 14px;
    padding-left: 10px;
  }

  .miaoshubox a {
    color: #333;
    font-size: 16px;
    font-weight: 700
  }

  .miaoshubox a:hover {
    color: #ff4163
  }

  .miaoshujiage {
    padding-left: 20px;

  }

  .miaoshujiage em {
    color: #ff4163;

  }

  .miaoshujiage b {
    color: #ff4163;
    font-size: 22px
  }

  .miaoshujiage span {
    display: block;
    float: left;

  }

  .miaoshujiage span.jiage {
    margin-right: 10px;

  }

  .miaoshujiage span.yuyuegift {
    background: #ff4163;
    color: #fff;
    padding: 0 5px;
    margin-top: 5px;
    margin-right: 10px;
    font-size: 14px;
  }

  .flcompany {
    float: right;
    overflow: hidden;
    line-height: 35px;
    height: 35px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: right;

  }

  .miaoshujiage span.mendian {

    text-decoration: line-through;
    font-family: 宋体, 微软雅黑, microsoft yahei, Arial, Helvetica, sans-serif;
    color: #999;
    margin-top: 8px;
    font-size: 14px;

  }

  .msbgbox {
    border-top: 1px solid #ededed;
    float: left;
    margin-top: 10px;
    width: 100%;
  }

  .msbg {
    background: #fafafa;
    height: 35px;
    line-height: 35px;
    margin: 1px;
    padding: 0 25px;
    color: #999
  }

  .msbg span {
    font-size: 12px;
    color: #999
  }

  .follow {
    float: left;
    height: 35px;
    line-height: 35px;
    overflow: hidden;
    width: 138px
  }

  .msbgbox span.follow em {
    padding: 0 5px;
    color: #ff4163
  }

  .msbgbox span.commentfr {
    float: right
  }

  .msbgbox span.commentfr em {
    padding-right: 5px
  }

  .msbgbox span a {
    color: #999;
    font-size: 12px
  }

  .msbgbox span a:hover {
    color: #ff4163
  }

  .pinpaiLarrow {
    position: absolute;
    top: 32%;
    left: -50px;
    display: block;
    width: 46px;
    height: 46px;
    background: url(../../assets/newindex.png) no-repeat scroll -101px -92px transparent;
    z-index: 100
  }

  .pinpaiLarrow:hover,
  .pinpaiRarrow:hover {
    opacity: .7
  }

  .pinpaiRarrow {
    position: absolute;
    top: 32%;
    right: -50px;
    display: block;
    width: 46px;
    height: 46px;
    background: url(../../assets/newindex.png) no-repeat scroll 0 -92px transparent;
    z-index: 100
  }

</style>
