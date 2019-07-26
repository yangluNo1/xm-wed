<template>
  <div id="app">
    <router-view></router-view>
  <div class="clearfix navRbtn">
<ul>
<li>
<a class="sixin" href="javascript:;" onclick="WedIM.show();" title="在线客服">
<i class="iconfont"></i>
</a>
</li>
<li>
<a class="ordericon mdialog" data-url="https://xm.wed114.cn/shop/appointment_65078.html?type=1" data-width="750" data-height="320" title="在线预约" href="javascript:;"></a>
</li>
<li><a class="backtop" href="#" title="回到顶部"></a></li>
</ul>
</div>
  </div>
</template>

<script>

  export default {
    name: 'App',
    data() {
       return{}
    },components:{
      
    }
  
  }

</script>

<style>
  html,
  body {
    background: #eeeeee;
    padding: 0;
    margin: 0;
  }
.navRbtn {
    background: #fff;
    box-shadow: 0 1px 1px #ddd;
    position: fixed;
    bottom: 105px;
    left: 50%;
    margin-left: 600px;
    width: 52px;
    height: auto;
    overflow: hidden;
    z-index: 999;
}
.navRbtn ul {
    margin: 0;
    padding: 0;
    list-style: none;
    width: 52px
}
.navRbtn li {
    border-bottom: 1px solid #ddd;
    margin: 0;
    padding: 0;
    list-style: none;
}
.navRbtn li a.sixin {
    background: url(./assets/global-icon.png?20171205) no-repeat scroll -24px -1342px transparent;
    overflow: hidden;
    width: 18px;
    height: 18px;
    overflow: hidden;
    margin: 11px 17px;
}
.navRbtn li a.ordericon {
    background: url(./assets/global-icon.png?20171205) no-repeat scroll 0 -784px transparent;
    overflow: hidden;
    width: 18px;
    height: 18px;
    overflow: hidden;
    margin: 11px 17px;
}
.navRbtn li a.backtop {
    background: url(./assets/global-icon.png?20171205) no-repeat scroll 0 -1005px transparent;
    overflow: hidden;
    width: 18px;
    height: 18px;
    overflow: hidden;
    margin: 11px 17px;
    }
    .navRbtn li a {
    display: block;
    width: 52px;
    height: 40px;
}
</style>
