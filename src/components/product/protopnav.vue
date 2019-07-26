<template>
  <div>
    <div class="protopbox">
      <div class="toplogobox" style="z-index:99;position:relative">
        <div class="toplogo fl">
          <router-link to="/" title="卡卡全球旅拍">
            <img src="@/assets/logo_03.png" alt="卡卡全球旅拍" /></router-link>
        </div>
        <div class="fr toptxt">
          <router-link rel="nofollow" to="/home" target="_blank" title="商家中心">商家中心</router-link>
          <router-link to="/" title="厦门首页" rel="nofollow">门户首页</router-link>
        </div>
      </div>

    </div>
    <div class="guashi">
      <div class="h1"></div>
      <div class="imgboxs"><img :src="pronavs[0].touxiang" alt=""></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'protopnav',

    data() {
      return {
        pronavs: [{
          userid: 1,
          names: "厦门大提大作婚纱摄影工作室",
          renqi: "321.232w",
          pinglun: "2540",
          zuopin: "1232",
          touxiang: require("../../assets/5.jpg")
        }]
      }
    },
    created() {
      this.$emit("childByValue", this.pronavs[0].touxiang)

    }
  }

</script>
<style scoped="">
  .guashi img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
  }

  .guashi .imgboxs {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    border: 2px solid #fefefe;
    margin: 0 auto;
  }

  .guashi .h1 {
    width: 2px;
    height: 100px;
    background: #fefefe;
    margin: 0 auto;
    z-index: 20;
    position: relative;
  }

  .guashi {
    width: 300px;
    height: 200px;

    position: fixed;
    top: 0;
    left: -5%;
    z-index: 20;

  }

  @media screen and (min-width: 1500px) {
    .guashi {
      width: 300px;
      height: 200px;

      position: fixed;
      top: 0;
      left: 5%;


      z-index: 20;

    }
  }

  @media screen and (max-width: 1280px) {
    .guashi {
      width: 300px;
      height: 200px;

      position: fixed;
      top: 0;
      left: -50%;


      z-index: 20;

    }
  }

  .protopbox {
    min-width: 980px;
    height: 50px;
    background: black;
    position: relative;
    z-index: 99;

  }

  .toplogobox {
    width: 980px;
    margin: 0 auto;
    height: 50px;
  }

  .toplogo {
    float: left;
    height: 50px;
    line-height: 50px;
  }

  .toptxt {
    float: right;
    height: 50px;
    line-height: 50px;
  }

  .toptxt a {
    list-style: none;
    color: aliceblue;
    font-size: 14px;
    height: 50px;
    text-decoration: none;

  }

</style>
