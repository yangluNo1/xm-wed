<template>
  <div class="footer">
    <!-- <div class="box">
       <div class="youqing">
         <span class="bt">友情链接:</span>
         <ul>
           <li><a href="http://www.baidu.com">百度</a></li>
         </ul>
       </div>
     </div> -->
    <div class="banquan">
      {{copyright}}
    </div>
  </div>

</template>
<script>
  var data =
    "© 2008-2019 卡卡全球旅拍 | 蜀ICP备08107937号-1 |  关于我们  - 联系我们  - 招贤纳士  - 广告服务  - 商家入驻  - 免责声明 - 联系电话：028-84520690";
  export default {
    name: 'Footer',
    data() {
      return {
        copyright: data
      }
    }
  }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="">
  /* .youqing .bt{
  font-size: 18px;
  font-weight: 700;
  padding-left: 20px;
  width: 100%;
  display: block;
  height: 50px;
  line-height: 50px;
}
.footer .box{
  width: 100%;
  height: 200px;
} */


  .banquan {
    width: 100%;
    height: 50px;
    position: relative;
    bottom: 0;
    text-align: center;
    line-height: 50px;
    font-size: 12px;

  }

  ul,
  li,
  a {
    list-style: none;
    text-decoration: none;
  }

</style>
