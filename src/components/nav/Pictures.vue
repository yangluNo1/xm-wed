<template>
  <div class="Pictures">

    <div class="Picturesnav">
      <a href="/" target="_blank" class="logo"><img src="http://static3.wed114.cn/shop/vip/images/logo_03.png" /></a>
      <div class="piccity">
        厦门<a href="">【切换城市】</a>
      </div>
      <form id="form_search" method="get" action="https://xm.wed114.cn/zanye/search_1.html">
        <div class="zanyesrh clearfix">
          <div class="zysrhipt">
            <input type="text" name="k" value="" placeholder="搜索">
          </div>
          <a href="javascript:void(0)" class="zysrhiptbtn" id="form_submit" title=""><span></span></a>
        </div>
      </form>
    </div>
    <div class="Picturesmain">
      <div class="Picturesxinxi">
        <ul class="tuijain">
          <span class="h">推荐商家</span>
          <li><a href="">厦门薇漫一婚纱摄影</a></li>
          <li><a href="">厦门薇漫一婚纱摄影</a></li>
          <li><a href="">厦门薇漫一婚纱摄影</a></li>
          <li><a href="">厦门薇漫一婚纱摄影</a></li>
          <li><a href="">厦门薇漫一婚纱摄影</a></li>

        </ul>
        <ul class="fl">
          <span class="flt">全部分类</span>
          <li><a href="">厦门</a></li>
          <li><a href="">厦门</a></li>
          <li><a href="">厦门</a></li>
          <li><a href="">厦门</a></li>
          <li><a href="">厦门</a></li>
          <li><a href="">厦门</a></li>
        </ul>
      </div>
      <div class="Picturesbox" v-for="ff in tupians" :key="ff.index">

        <a target="_blank" @click="openshow()"><img :src="ff.images[0]" width="100%" height="100%"/>
        </a>
        <div class="phototit">
          <h4>
            <router-link to="/jianjie/Wkmain" class="shop_link" target="_blank">
              厦门倾国倾城婚纱摄影【客片欣赏】 </router-link>
          </h4>
        </div>
      </div>
    </div>
    <div class="shows">
      <div class="showbox">
        <el-carousel height="950px" :autoplay="false">
          <span class="el-icon-close picclose" @click="openfisrt()"></span>

          <el-carousel-item v-for="tp in tupians" :key="tp.index">

            <img :src="tp.images[0]" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="showphonebox">
        <div>
          <p class="bt">钟爱米兰基地场景分享 9张</p>
          <p class="dd"><span>地点：</span><span>基地</span></p>
          <p class="cp"><span>出品：</span><span>厦门钟爱米兰婚纱摄影</span></p>
          <p class="ms"><span>描述：</span><span>基地场景分享</span></p>
        </div>
        <div class="lxbox">
          <p style="float:left"><img src="http:////pic9.wed114.cn/201709/2017092920582232.jpg" alt=""></p>
          <p style="float:left;width:55%">厦门钟爱米兰婚纱摄影</p>
          <p style="float:left;">关注（33）</p>
        </div>
      </div>
    </div>
    <!--分页器-->
        <div class="pageinfo">
          <ul class="pagelist">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
              :current-page="currentPage3" :page-sizes="[100, 200, 300, 400]" :page-size="100"
              layout="total, sizes, prev, pager, next, jumper" :total="900">
            </el-pagination>
          </ul>
        </div>
  <footers></footers>
  </div>
</template>

<script>
  import footers from '../home/Footer'
  export default {
    name: 'Pictures',
    data() {
      return {
        tupians: [{
            id: 1,
            title: '厦门倾国倾城婚纱摄影【客片欣赏】',
            images: [require('../../assets/6.jpg'), '../../assets/6.jpg', '../../assets/6.jpg', '../../assets/6.jpg']
          },
          {
            id: 1,
            title: '厦门倾国倾城婚纱摄影【客片欣赏】',
            images: [require('../../assets/6.jpg'), '../../assets/6.jpg', '../../assets/6.jpg', '../../assets/6.jpg']
          },
          {
            id: 1,
            title: '厦门倾国倾城婚纱摄影【客片欣赏】',
            images: [require('../../assets/6.jpg'), '../../assets/6.jpg', '../../assets/6.jpg', '../../assets/6.jpg']
          },
          {
            id: 1,
            title: '厦门倾国倾城婚纱摄影【客片欣赏】',
            images: [require('../../assets/6.jpg'), '../../assets/6.jpg', '../../assets/6.jpg', '../../assets/6.jpg']
          }

        ],
        pictures: [{}],
          currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      }
    },
    mounted() {
      console.log("1" + this.tupians[0].images[0])
    },
    methods: {
      openfisrt() {

        document.getElementsByClassName("shows")[0].style.display = "none";
      },
      openshow() {

        document.getElementsByClassName("shows")[0].style.display = "block";
      },
        handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    components: {
      footers
    }
  }

</script>
<style>
.pageinfo,
  .pagelist {
    list-style: none;
    float: left;
    width: 100%;
    margin: 30px auto;
    text-align: center
  }
  .footer {
    width: 100%;
    position: relative;
    bottom: 0;
  }

  .cp span:nth-child(2) {
    color: #269075;
  }

  .lxbox p:nth-child(3):hover {
    border: 1px solid #269075;
  }

  .lxbox p:nth-child(3) {
    font-size: 12px;
    color: #999;
    margin-left: 20px;
    height: 22px;
    line-height: 22px;
    text-align: center;
    display: block;
    padding: 0 15px;
    height: 22px;
    margin-right: 10px;
  }

  .lxbox p:nth-child(2) {
    font-size: 14px;
    margin-left: 20px;
    color: #269075;
  }

  .showphonebox p {
    padding-bottom: 5px;
    color: #444;
    line-height: 22px;
  }

  .lxbox img {
    width: 80px;
    height: 80px;
  }

  .el-carousel {
    width: 100%;
    margin: 0 auto;

  }

  .showphonebox .bt {
    font-size: 18px;

  }

  .el-carousel__arrow--left {
    position: absolute;
    left: 0;
    z-index: 100;
    color: #fff;
    display: block;
    font-size: 38px;
  }

  .el-carousel__arrow--right {
    position: absolute;
    right: 50px;
    z-index: 100;
    color: #fff;
    display: block;
    font-size: 38px;
  }

  .picclose {
    width: 30px;
    height: 30px;
    float: right;
    font-size: 28px;
    margin: 50px;
    color: #fff;
    display: block;
    cursor: pointer;
    z-index: 99;
    position: relative;
  }

  @-webkit-keyframes zoom {
    from {
      -webkit-transform: scale(0)
    }

    to {
      -webkit-transform: scale(1);
    }
  }

  @keyframes zoom {
    from {
      -webkit-transform: scale(0)
    }

    to {
      -webkit-transform: scale(1);
    }
  }

  .el-carousel__item {
    display: flex;
  }

  .el-carousel__item img {
    margin: 0 auto;
    align-items: center;
    align-self: center;
    max-width: 100%;
    -webkit-animation-name: zoom;
    -webkit-animation-duration: 0.6s;
    animation-name: zoom;
    animation-duration: 0.6s;
  }

  .el-carousel__indicators {
    display: none;
  }

</style>

<style scpoed>
  .showphonebox {
    width: 20%;
    height: 100%;
    background: #fff;
    position: fixed;
    z-index: 50;
    right: 0;
    padding: 50px;
  }


  .shows {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 99;
    top: 0;
    display: none;
    overflow: auto;
    /* Enable scroll if needed */
    background-color: rgb(0, 0, 0);
    /* Fallback color */
    background-color: rgba(0, 0, 0, 0.9);

  }

  .showbox {
    width: 75%;
    overflow: hidden;
    height: 100%;



    position: absolute;
    z-index: 50;
  }

  .tuijain {
    margin-bottom: 20px;
  }

  .zanyesrh {
    width: 345px;
    float: left;
    background: #353535;
    border-radius: 2px;
    border: 0;
    margin-top: 13px;
    height: 26px;
    overflow: hidden;
    margin-left: 44px;
    padding: 0 10px;
  }

  .Picturesnav form {
    margin: 0;
    padding: 0;
  }

  .zysrhiptbtn span {
    background: url(../../assets/all-icon-img1.png) no-repeat scroll 0 -1787px transparent;
    display: block;
    width: 14px;
    height: 14px;
    overflow: hidden;
    margin-top: 7px;
  }

  .zysrhipt {
    background: #353535;


    display: block;
    float: left;
  }

  .zanyesrh input {
    display: inline;
    background: #353535;
    width: 325px;
    height: 25px;
    border: 0;
    color: #c8cccf;
    font-size: 14px;
    float: left;
    outline: none;

  }

  .piccity a {
    list-style: none;
    text-decoration: none;
    color: #999;
    font-size: 14px;
  }

  .piccity {
    float: left;
    color: #fff;
    margin-left: 20px;
    font-size: 14px;
  }

  .Picturesnav .logo {
    margin-left: 50px;
    width: 150px;
    height: 50px;
    float: left;
    line-height: 55px;
  }

  .Picturesxinxi {
    border: 1px solid #e6e6e6;
    width: 300px;
    height: 580px;
    float: left;
  }

  .fl li {
    float: left;
    padding: 0 30px;
    margin-bottom: 10px;
  }

  .tuijain li,
  .tuijain span,
  .fl span {
    text-align: left;
    display: block;
    line-height: 50px;
    padding-left: 10px
  }



  .Picturesxinxi li:hover {
    background: #e6e6e6;
  }

  ul,
  li,
  a {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    color: #71767a;
  }

  .Picturesxinxi .h {
    color: #000;
    font-size: 16px;
  }

  .phototit a {
    list-style: none;
    text-decoration: none;
    color: #fff;
    display: block;
    font-size: 14px;
    display: inline-block;
    font-weight: 400;
  }

  .phototit {
    text-shadow: 0 0 1px #000;
    position: absolute;
    bottom: 10px;
    left: 10px;
    height: 50px;
  }

  .Picturesnav {
    background: black;
    width: 100%;
    height: 50px;
    line-height: 50px;
    overflow: hidden;
  }

  .Picturesbox {
    width: 280px;
    height: 280px;
    margin: 10px;
    position: relative;
    float: left;
    overflow: hidden;
  }

  .Picturesmain {
    /* float: left; */
    overflow: hidden;
    padding-left: 50px;
  }

  body,
  html {
    background: #fff;
  }

</style>
