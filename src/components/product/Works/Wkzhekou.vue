<template>

  <div class="Wkzhekou">
    <Exhibitions></Exhibitions>
    <div class="wkzhekoubox">
      <div class="title">
        <span>厦门韩匠全球旅拍婚纱摄影作品精选</span>
      </div>

      <div class="zhekou">

        <div class="zhekoubox" v-for="zhekou in zhekous" :key="zhekou.index">
          <router-link :to="{name:'jingpin',params:{id:zhekou}}" class="zhekouboxa">
            <img :src="zhekou.src" width="100%" height="75%" />
            <div class="zhekoujianjie">
              <router-link class="zhekoubt" :to="{name:'jingpin',params:{id:zhekou}}">{{zhekou.title}}</router-link>
              <span class="jiage">￥{{zhekou.xianjia}}</span> <span class="yuanjia">￥{{zhekou.yuanjia}}</span>
              <span class="shoucang"><i></i>{{zhekou.shoucang}}</span>
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
        zhekous: [{
            id: 0,
            title: "【店长推荐】消费透明/产品包邮/送全新婚纱",
            xianjia: '2324',
            yuanjia: "1000",
            shoucang: 23,
            src: require("../../../assets/6.jpg")
          },
          {
            id: 1,
            title: "【店长推荐】消费透明/产品包邮/送全新婚纱",
            xianjia: '1111',
            yuanjia: "1000",
            shoucang: 23,
            src: require("../../../assets/6.jpg")
          },
          {
            id: 2,
            title: "【店长推荐】消费透明/产品包邮/送全新婚纱",
            xianjia: '2222',
            yuanjia: "1000",
            shoucang: 23,
            src: require("../../../assets/6.jpg")
          },
          {
            id: 3,
            title: "【店长推荐】消费透明/产品包邮/送全新婚纱",
            xianjia: '3333',
            yuanjia: "1000",
            shoucang: 23,
            src: require("../../../assets/6.jpg")
          },
          {
            id: 4,
            title: "【店长推荐】消费透明/产品包邮/送全新婚纱",
            xianjia: '4444',
            yuanjia: "1000",
            shoucang: 23,
            src: require("../../../assets/6.jpg")
          },
          {
            id: 5,
            title: "【店长推荐】消费透明/产品包邮/送全新婚纱",
            xianjia: '5555',
            yuanjia: "1000",
            shoucang: 23,
            src: require("../../../assets/6.jpg")
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
  .title {
    font-size: 18px;
    font-weight: 500;
    padding-top: 20px;
    padding-left: 20px;
    font-family: '楷體'
  }

  .wkzhekoubox {
    width: 980px;
    height: auto;
    margin: 20px auto;
    background: #fff;
    display: flow-root;
  }

  .zhekouboxa {
    list-style: none;
    text-decoration: none;
  }

  .zhekoubox {
    width: 290px;
    height: 270px;
    border: 1px solid #cccccc;
    margin: 10px;
    float: left;
    margin-left: 20px;
  }
  /* .zhekoubox:hover{
    border: 1px solid #cb1032;
  } */
  .zhekou {
    width: 980px;
    height: 700px;
    background: #fff;
    margin: 0 auto;
    margin-top: 10px;
  }

  .icon {
    background: url(../../../assets/pub_shopbasic_icon.png) no-repeat scroll 0 -389px transparent;
    height: 36px;
    line-height: 14px;
    text-align: center;
    width: 43px;
    position: absolute;
    top: 1px;
    right: 20px;
    color: #fff;
    font-size: 12px;
    padding-top: 3px;
    z-index: 9;
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
   .pageinfo{
    width: 100%;
      margin: 0 auto;
} 
} */

  .pageinfo,
  .pagelist {
    list-style: none;
    float: left;
    width: 100%;
    margin: 10px auto;
    text-align: center
  }

  .zhekoujianjie span {
    list-style: none;



    height: 30px;
    line-height: 30px;


    font-weight: 700;
    margin-left: 15px;
  }

  .zhekoujianjie .jiage {
    font-size: 18px;
    color: #ff4163;
  }

  .zhekoujianjie .yuanjia {
    text-decoration: line-through;
    font-size: 12px;
    color: #999;
    margin-left: 20px;
    font-weight: 400;
    display: inline-block;
  }

  .zhekoujianjie .shoucang i {
    width: 15px;
    height: 15px;
    background: url(../../../assets/pub_shopbasic_icon.png) no-repeat -68px -225px transparent;
    float: left;

  }

  .zhekoujianjie .shoucang {
    float: right;
    margin-right: 30px;
    font-size: 12px;
    color: #999;
    margin-top: 5px;
    line-height: 20px;

  }

  .zhekoubt {
    list-style: none;
    text-decoration: none;
    display: block;
    width: 90%;
    height: 30px;
    line-height: 30px;
    color: #666;
    font-size: 16px;
    font-weight: 400;
    margin-left: 15px;
    overflow: hidden;
    word-break: break-all;
  }

</style>
