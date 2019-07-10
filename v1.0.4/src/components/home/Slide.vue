  <template> 
  <div class="headerbox clearfix"> 
   <div class="adLbox"> 
    <div class="adpicbox "> 
     <div class="adpic clearfix" id="ten_ad"> 
      <ul id="ten_adu" style="overflow: hidden;"> 
       <div class="slidesjs-container"> 
        <div class="slidesjs-control"> 
         <li class="slidesjs-slide" slidesjs-index="0"> <a href="" title="" rel="nofollow" target="_blank"> <img src="https://pic18.wed114.cn/20190625/2019062517524969977321.jpg" width="1120" height="500" alt="" title="" /> </a> </li> 
         <li class="slidesjs-slide" slidesjs-index="1"> <a href="" title="" rel="nofollow" target="_blank"> <img src="https://pic18.wed114.cn/20190620/2019062014002289699754.jpg" width="1120" height="500" alt="" title="" /> </a> </li> 
         <li class="slidesjs-slide" slidesjs-index="2"> <a href="" title="" rel="nofollow" target="_blank"> <img src="https://pic18.wed114.cn/20190608/2019060814101281239712.jpg" width="1120" height="500" alt="" title="" /> </a> </li> 
        </div> 
       </div> 
       <a class="arLblack sprev snav" id="sprev" href="javascript:;"></a> 
       <a class="arRblack snext snav" id="snext" href="javascript:;"></a> 
      </ul> 
     </div> 
     <div class="adpicbtn clearfix"> 
      <ul id="ten_adnum"> 
       <li class="slidesjs-pagination-item"><a href="#" data-slidesjs-item="0" class=""></a></li> 
       <li class="slidesjs-pagination-item"><a href="#" data-slidesjs-item="1" class="active"></a></li> 
       <li class="slidesjs-pagination-item"><a href="#" data-slidesjs-item="2" class=""></a></li> 
      </ul> 
     </div> 
    
    </div> 
   </div> 
  </div> 
 
  </template> 
  <script>
import  layer from '../assets/js/layer.js';
  var data;
export default {
  name: 'silde',

  mounted:function(){
layer();
  },
  data () {
    return {
      msg: data
    }
  }
}
</script> 
  <!-- Add "scoped" attribute to limit CSS to this component only --> 
  <style scoped="">
.adpicbox {
	width:1120px;
	height:500px;
  position:relative;
  margin: 0 auto;
	z-index:991
}
.adpicbox a.arLblack {
	background:url(../assets/newglobal.png) no-repeat scroll 0 -1121px transparent;
	z-index:11;
	display:block;
	position:absolute;
	top:50%;
	left:45px;
	width:46px;
	height:46px;
	margin-top:-10px;
	_margin-top:-100px
}
.adpicbox a.arLblack:hover {
	background:url(../assets/newglobal.png) no-repeat scroll -70px -1121px transparent;
	z-index:11
}
.adpicbox a.arRblack {
	background:url(../assets/newglobal.png) no-repeat scroll 0 -1192px transparent;
	z-index:11;
	display:block;
	position:absolute;
	top:50%;
	right:45px;
	width:46px;
	height:46px;
	margin-top:-10px;
	_margin-top:-100px
}
.adpicbox a.arRblack:hover {
	background:url(../assets/newglobal.png) no-repeat scroll -70px -1192px transparent;
	z-index:11
}
.adpic {
width:1120px;
	height:500px;
  overflow:hidden;
  margin-left: -20px
}
.adpic li {
width:1120px;
	height:500px;
	float:left
}
.adpic li img {
width:1120px;
	height:500px
}
.adpicbtn {
	position:absolute;
	bottom:15px;
	_bottom:180px;
	left:50%;
	margin-left:-30px;
	/*background:rgba(255,255,255,.3);*/
	-ms-filter:"progid:DXImageTransform.Microsoft.gradient(GradientType=1,startColorstr=#8fffffff,endColorstr=#8fffffff)";
	filter:progid:DXImageTransform.Microsoft.gradient(GradientType=1,startColorstr=#5fffffff,endColorstr=#5fffffff);
	border-radius:10px;
	padding:2px;
	text-align:center;
	z-index:11
}
.adpicbtn li {
	display:inline-block;
	_display:block;
	_float:left
}
.adpicbtn li a {
	width:12px;
	height:12px;
	border-radius:12px;
	background:#aaa;
	display:block;
	margin:0 2px
}
.adpicbtn li a.active {
	background:#ff4163
}
.adpicbtn li a:hover {
	background:#ff4163
}


</style> 
