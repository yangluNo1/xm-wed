<template>

<div class="Wkbody">
    <div class="title">
            <h2>厦门小提大作婚纱摄影客片大赏</h2>
            
    </div>
    <div class="imagesxq">
           <div class="content">
                            <div class="clearfix img-gather" id="thumbs" v-for="im in images" :key="im.index">
                    <a :href="im.src"  title="图片一">
                      <!-- <div :style="{'background': 'url('+im.src+') no-repeat center center'}"></div>-->
                      <img :src="im.src" width="900px"/>
                    </a>
                    </div>
            </div>         
    </div>
    
</div>
</template>

<script>
import  imag from '../../../assets/js/images.js';

import  '../../../assets/js/touchTouch.jquery'
export default {
 name: 'Wkbody',
 mounted:function(){
imag()
 },
 data(){
return{images:[{id:0,src:require("../../../assets/1.jpg")},
{id:0,src:require("../../../assets/1.jpg")},
{id:0,src:require("../../../assets/1.jpg")},
{id:0,src:require("../../../assets/1.jpg")},
{id:0,src:require("../../../assets/1.jpg")}

]}
 },
 components:{
   
 }
}
</script>
<style scoped="">
@charset "utf-8";

.content{
    width: 100%;
    height: auto;
    display: flow-root;
    }

img {
	border: 0;
	vertical-align: top;
	border: 0
}

a {
	text-decoration: none;
    cursor: pointer;
    display: block;
}

.img-gather {
	margin-top: 8px;
	height: auto
}

.img-gather a {
	float: left;
	width: 100%;
	height: auto;
    margin-right: 1.4%;
    background-size:100% 100%;
}

#thumbs {
	width: 100%;
	margin: 8px;
	text-align: center
}

#thumbs a {
	border-radius: 4px;
	margin-bottom: 15px;
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	-moz-background-size: cover;
	-webkit-background-size: cover
}

@media screen and (max-width:960px) {
	#thumbs {
		width: auto
	}

	#bsaHolder {
		display: none
	}
}

.imagesxq a{
    display: block;
  
}
.imagesxq{
        font-size: 16px;
    color: #666;
    border-top: 1px dotted #d2d2d2;
    padding-top: 20px;
    margin-top: 10px;
    width: 95%;
    margin:0 auto;
    height: auto;
   
}
.title h2{
    margin-left: 50px;
}
.Wkbody .title{
    width: 100%;
    height: 100px;
    line-height: 100px;
}
.Wkbody{
    width: 980px;
    height: auto;
    margin: 0 auto;
    background: #fff;
}
</style>
