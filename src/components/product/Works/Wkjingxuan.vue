<template>
  <div class="Wkjingxuan">
    <Exhibitions></Exhibitions>
    <div class="wkjingxuanbox">
      <div class="title">
        <span>厦门韩匠全球旅拍婚纱摄影作品精选</span>
      </div>
      <div class="jingxuan">
        <div class="jingxuanbox" v-for="ps in 6" :key="ps">
          <router-link to="/jianjie/Wkmain" class="zhekouboxa">
            <img src="http://pic11.wed114.cn/pic/20190704/2019070411105318211504x450_300_0.jpg" width="100%" height="85%" />
            <div class="jingxuanjianjie">
              <router-link class="jingxuanbt" to="/jianjie/Wkmain">【店长推荐】消费透明/产品包邮/送全新婚纱</router-link>
              <span class="chakan"><i></i>12</span>
            </div>
          </router-link>
        </div>
        <!--分页器-->
        <div class="pageinfo">
          <ul class="pagelist">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
              :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100"
              layout="total, sizes, prev, pager, next, jumper" :total="900">
            </el-pagination>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Exhibitions from '../Exhibition/Exhibitions'
  export default {
    name: 'Wkjingxuan',

    data() {
      return {
        images: [{
            id: 0,
            src: require("../../../assets/1.jpg")
          },
          {
            id: 0,
            src: require("../../../assets/1.jpg")
          },
          {
            id: 0,
            src: require("../../../assets/1.jpg")
          },
          {
            id: 0,
            src: require("../../../assets/1.jpg")
          },
          {
            id: 0,
            src: require("../../../assets/1.jpg")
          }
        ],
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    components: {
      Exhibitions
    }
  }

</script>
<style scoped="">
  .cur {
    border: 1px solid red;
  }

  /* .pageinfo a{
    color: #666;
    list-style: none;
    text-decoration: none;
    padding: 0px 10px;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    text-align: center;
    border: 1px solid #999;
    margin-right: 3px;
    
}
.pageinfo{
    width: 50%;
      margin: 0 auto;
} */
  .pageinfo,
  .pagelist {
    list-style: none;
    float: left;
    width: 100%;
    margin: 10px auto;
    text-align: center
  }

  .title {
    font-size: 18px;
    padding: 10px;
    font-weight: 400px;
    padding-top: 20px;
    padding-left: 20px;
    font-family: '楷體'
  }

  .wkjingxuanbox {
    width: 980px;
    height: auto;
    margin: 20px auto;
    background: #fff;
    display: flow-root;
  }

  .jingxuanbox {
    width: 290px;
    height: 320px;
    margin: 10px;
    background: #fff;
    float: left;
    margin-left: 20px;
    border: 1px solid #e8e8e8;
  }
  .jingxuanbox:hover{
    border: 1px solid #cb1032;
  }
  .jingxuanjianjie {

    height: 50px;
  }

  .jingxuanbt {
    float: left;
    list-style: none;
    text-decoration: none;
    display: block;
    width: 80%;
    height: 30px;
    line-height: 30px;
    color: #666;
    font-size: 14px;
    font-weight: 400;

    overflow: hidden;
    word-break: break-all;

  }

  .jingxuanjianjie .shoucang {
    float: left;

  }

  .chakan i {
    font-size: 12px;
    float: left;
    background: url(../../../assets/all-icon-img.png) no-repeat scroll -110px -66px transparent;
    width: 14px;
    height: 20px;
    margin-top: -5px;
  }

  .chakan {
    margin-right: 20px;
    float: right;
    font-size: 12px;
    color: #999;
    margin-top: 5px;
    line-height: 20px;
  }

</style>
