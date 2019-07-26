<template>
  <div class="headerbox clearfix">
    <div class="headsbox">
    <div class="headerlogo">
      <span><a class="logopic" href="/" title="卡卡旅拍摄影"></a></span>
      <span class="city"> 全国<a href="">[切换]</a> </span>
    </div>
    <!--搜索框-->
    <div class="headersrh">
      <form name="search_fm" id="search_fm" action="/search" method="get" target="_self">
        <input class="srhipt" type="text" name="k" value="" placeholder="搜，您感兴趣的商家信息..." />
        <input class="srhbtn" type="button" value="" onclick="document.search_fm.submit();" />
      </form>
    </div>

    <div class="headerfollow">
      <div class="headerfoltxt">
        关注我们：
      </div>
      <div id="snsiconbox" class="clearfix bshare-custom">
        <ul id="snsiconinner" class="bdsharebuttonbox">
          <!--微博：https://e.weibo.com/wed114gb-->
          <li> <a class="bshare-qzone bds_qzone" href="#" data-cmd="qzone" target="_blank" title="卡卡全球旅拍的QQ认证空间"
              rel="nofollow"></a> </li>
          <!--微博：https://user.qzone.qq.com/448133112-->
          <li> <a class="bshare-sinaminiblog bds_tsina" href="#" data-cmd="tsina" target="_blank" title="卡卡全球旅拍的新浪微博"
              rel="nofollow"></a> </li>
          <!--微博-->
          <li class="wx"> <a class="headertweixin" href="javascript:;" @mouseover="shows()" @mouseout="hides()"> </a>
          </li>

        </ul>
      </div>
    </div>
    </div>
    <HeaderNav></HeaderNav>
    <div class="weixinerweima">
      <img src="https://static3.wed114.cn/city/images/ttbg.jpg" alt="">
    </div>
  </div>

</template>

<script>
  import HeaderNav from "./HeaderNav.vue";

  var data;
  export
  default {
    name: 'Header',
    beforeCreate() {
      window._bd_share_main = "";
    },
    components: {
      HeaderNav
    },
    methods: {
      shows() {
        document.getElementsByClassName("weixinerweima")[0].style.display = "block";
      },
      hides() {
        document.getElementsByClassName("weixinerweima")[0].style.display = "none";
      }
    },
    data() {
      return {
        msg: data
      }
    },
    mounted() {
      const s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=';
      document.body.appendChild(s);
    }
  }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>

<style scoped>
  .headsbox{
    padding: 0 20px;
  }
  .weixinerweima {

    width: 180px;
    height: 180px;
    position: absolute;
    top: 70px;
    right: 20px;
    display: none;
    cursor: pointer;
    box-shadow: 0 1px 3px #ddd;
    z-index: 999;

  }

  ul {
    margin: 0;
    padding: 0
  }

  .headerbox {

    position: relative;
    height: 95px;
    width: 1080px;
    margin: 0 auto;
    padding: 25px 0
  }

  .headerlogo {
    float: left;
    width: 390px;
    height: 58px
  }

  .headerlogo span {
    display: block;
    float: left
  }

  .headerlogo span a.logopic {
    background: url(../../assets/newglobal.png) no-repeat scroll 0 -562px transparent;
    width: 230px;
    height: 58px;
    display: inline-block
  }

  .headerlogo span.city {
    padding-left: 25px;
    color: #666;
    font-size: 16px;
    font-weight: 700;
    padding-top: 25px
  }

  .headerlogo span.city a {
    padding-left: 5px;
    font-size: 12px;
    font-weight: 400;
    color: #999
  }

  .headerlogo span.city a:hover {
    color: #ff4163
  }

  .headersrh {
    padding: 17px 0 0 55px;
    float: left
  }

  .headersrh input {
    float: left;
    display: block;
    border: 1px solid #e8e8e8;
    background: #fff
  }

  .headersrh input.srhipt {
    height: 23px;
    line-height: 23px;
    padding: 5px;
    width: 230px;
    color: #aaa
  }

  .headersrh input.srhbtn {
    background: url(../../assets/newglobal.png) no-repeat scroll 24px -488px transparent;
    width: 64px;
    height: 35px;
    border-left: 0;
    cursor: pointer;
    background-color: #fafafa
  }

  .headersrh input.srhbtn:hover {
    background-color: #eee
  }

  .headerfollow {
    float: right;
    padding-top: 25px
  }

  .headerfoltxt {
    color: #666;
    margin-left: 20px;
    float: left;
    line-height: 20px
  }

  .bshare-custom .bshare-sinaminiblog {
    background: url(../../assets/newglobal.png) no-repeat scroll 0px -920px transparent;
    display: block;
    padding-left: 20px;
    margin: 0;
    height: 20px;

  }

  .headerxinlangweibo {
    background: url(../../assets/newglobal.png) no-repeat scroll -31px -323px transparent;
    display: block;

    height: 20px
  }

  .bshare-custom .bshare-qzone {
    background: url(../../assets/newglobal.png) no-repeat scroll -64px -323px transparent;
    display: block;
    padding-left: 20px;
    margin: 0;
    height: 20px
  }

  .headertweixin {
    background: url(../../assets/newglobal.png) no-repeat scroll -95px -323px transparent;
    display: block;
    padding-left: 20px;
    margin: 0;
    height: 20px
  }

  #snsiconbox {
    width: 120px;
    height: 20px;
    float: left
  }

  #snsiconinner {
    float: left;
    height: 20px;
    width: 120px
  }

  #snsiconbox li {
    float: left;
    display: block;
    margin-left: 10px;
    opacity: .7
  }

  .headertweixin {
    position: relative
  }

</style>
