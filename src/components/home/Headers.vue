<template> 
   <div class="headerbox clearfix"> 
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
     <div class="clearfix" id="snsiconbox"> 
      <ul id="snsiconinner"> 
       <!--微博：https://e.weibo.com/wed114gb-->
       <li> <a class="headerxinlangweibo" href="" target="_blank" title="wed114结婚网的新浪微博" rel="nofollow"></a> </li> 
       <!--微博：https://user.qzone.qq.com/448133112-->
       <li> <a class="headerqqkongjian" href="" target="_blank" title="wed114结婚网的QQ认证空间" rel="nofollow"></a> </li> 
       <!--微博-->
       <li> <a class="headertweixin" href="javascript:;"> <span class="weixinerweima" ></span> </a> </li> 
      </ul> 
     </div> 
    </div> 
<HeaderNav></HeaderNav>

   </div> 

  </template> 
  <script>
  import HeaderNav from "./HeaderNav.vue";
   
  var data;
export default {
  name: 'Header',
  components:{
        HeaderNav
    },
  data () {
    return {
      msg: data
    }
  }
}
</script> 
  <!-- Add "scoped" attribute to limit CSS to this component only --> 
  <style scoped="scoped">
	  .weixinerweima {
    background: url(../../assets/newglobal.png) no-repeat;
    width: 180px;
    height: 180px;
    position: absolute;
    top: 25px;
    right: 0;
    display: none;
    cursor: pointer;
    box-shadow: 0 1px 3px #ddd;
    z-index: 999;
}
  ul{margin: 0;
  padding: 0}
.headerbox {
   
   position: relative;
	height:60px;
	width:1080px;
	margin:0 auto;
	padding:25px 0
}
.headerlogo {
	float:left;
	width:390px;
	height:58px
}
.headerlogo span {
	display:block;
	float:left
}
.headerlogo span a.logopic {
	background:url(../../assets/newglobal.png) no-repeat scroll 0 -562px transparent;
	width:230px;
	height:58px;
	display:inline-block
}
.headerlogo span.city {
	padding-left:25px;
	color:#666;
	font-size:16px;
	font-weight:700;
	padding-top:25px
}
.headerlogo span.city a {
	padding-left:5px;
	font-size:12px;
	font-weight:400;
	color:#999
}
.headerlogo span.city a:hover {
	color:#ff4163
}
.headersrh {
	padding:17px 0 0 55px;
	float:left
}
.headersrh input {
	float:left;
	display:block;
	border:1px solid #e8e8e8;
	background:#fff
}
.headersrh input.srhipt {
	height:23px;
	line-height:23px;
	padding:5px;
	width:230px;
	color:#aaa
}
.headersrh input.srhbtn {
	background:url(../../assets/newglobal.png) no-repeat scroll 24px -488px transparent;
	width:64px;
	height:35px;
	border-left:0;
	cursor:pointer;
	background-color:#fafafa
}
.headersrh input.srhbtn:hover {
	background-color:#eee
}
.headerfollow {
	float:right;
	padding-top:25px
}
.headerfoltxt {
	color:#666;
	margin-left:20px;
	float:left;
	line-height:20px
}
.headertxweibo {
	background:url(../../assets/newglobal.png) no-repeat scroll 0 -323px transparent;
	display:block;
	width:20px;
	height:20px;
	position:relative
}
.headerxinlangweibo {
	background:url(../../assets/newglobal.png) no-repeat scroll -31px -323px transparent;
	display:block;
	width:20px;
	height:20px
}
.headerqqkongjian {
	background:url(../../assets/newglobal.png) no-repeat scroll -64px -323px transparent;
	display:block;
	width:20px;
	height:20px
}
.headertweixin {
	background:url(../../assets/newglobal.png) no-repeat scroll -95px -323px transparent;
	display:block;
	width:20px;
	height:20px
}
#snsiconbox {
	width:120px;
	height:20px;
	float:left
}
#snsiconinner {
	float:left;
	height:20px;
	width:120px
}
#snsiconbox li {
    float:left;
	display:block;
	margin-left:10px;
	opacity:.7
}
.headertweixin {
	position:relative
}

</style> 
