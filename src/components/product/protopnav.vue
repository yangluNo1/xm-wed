<template>
  <div class="protopbox" >
        <div class="toplogobox">
            <div class="toplogo fl">
                <a href="/" title="wed114结婚网">
                <img src="//static3.wed114.cn/shop/vip/images/logo_03.png" alt="Wed114结婚网" /></a>
            </div>
            <div class="fr toptxt">
                <a rel="nofollow" href="" target="_blank" title="商家中心">商家中心</a>
                <a href="" title="厦门首页" rel="nofollow">门户首页</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
 name: 'protopnav',
 data(){
return{pronavs:[
]}
 },
 components:{
   
 }
}
</script>
<style scoped="">
.protopbox{
width: 100%;
height: 50px;
background: black;

}
.toplogobox{
    width: 980px;
    margin: 0 auto;
    height: 50px;
}
.toplogo{
float: left;
height: 50px;
line-height: 50px;
}
.toptxt{
    float: right;
   height: 50px;
line-height: 50px;
}
.toptxt a{
     list-style: none;
    color: aliceblue;
    font-size: 14px;
   height: 50px;
   text-decoration: none;
   
}
</style>
