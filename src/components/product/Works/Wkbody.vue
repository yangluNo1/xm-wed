<template>

  <div class="Wkbody">

    <div class="title">
      <h2>{{images[0].title}}</h2>
      <span class="plbox">
        <a href="" title="">
          <em class="pl"></em>
          <span class="shoucang">{{images[0].shoucang}}</span>
        </a>


        <a :plain="true" @click="open" type="none"> <em class="xh"></em>
          <span class="dianzan">{{images[0].dianzan}}</span>
        </a>
      </span>
    </div>
    <div class="imagesxq">
      <div class="content">
        <div class="clearfix img-gather" id="thumbs" v-for="im in images" :key="im.index">
          <a :href="im.src" title="图片一">
            <!-- <div :style="{'background': 'url('+im.src+') no-repeat center center'}"></div>-->
            <img :src="im.src" width="900px" />
          </a>
        </div>

      </div>
      <div class="like" :plain="true" @click="open" type="none">我喜欢</div>
      <div class="relevant">
        <div>
          <span class="keneng">您可能喜欢的作品：</span>
          <span class="zhankai" id="zhankai" @click="onopen()">展开</span>
        </div>
        <div class="zuopinbox">

          <router-link v-for="zuopin in zuopins[0]" :key="zuopin.index" :to="zuopin.url">
            <img :src="zuopin.images" :alt="zuopin.title" width="160px">
          </router-link>

          <div class="zp1" style="display:none">
            <router-link v-for="zuopin in zuopins[1]" :key="zuopin.index" :to="zuopin.url">
              <img :src="zuopin.images" :alt="zuopin.title" width="160px">
            </router-link>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import imag from '../../../assets/js/images.js';

  import '../../../assets/js/touchTouch.jquery'

  var userid = 0;
  export default {
    name: 'Wkbody',
    mounted: function () {
      imag()
    },
    methods: {
      open() {
        if (this.userid != this.images[0].dianzan) {

          this.$message({
            message: '点赞成功',
            type: 'success'
          });
          this.userid = this.images[0].dianzan + 1;
          this.images[0].dianzan = this.userid;
        } else {
          this.$message({
            message: '您已经点赞',
            type: 'warning'
          });
        }
      },
      onopen() {

        var inner = document.getElementsByClassName('zhankai')[0].innerHTML;

        if (inner == "展开") {

          document.getElementsByClassName("zp1")[0].style.display = "block";
          document.getElementsByClassName('zhankai')[0].innerHTML = "收起";

        } else {
          document.getElementsByClassName("zp1")[0].style.display = "none";
          document.getElementsByClassName('zhankai')[0].innerHTML = "展开";
        }
      }
    },
    data() {
      return {
        images: [{
            id: 1,
            title: "厦门小提大作婚纱摄影客片大赏",
            dianzan: 123,
            shoucang: 123,
            src: require("../../../assets/1.jpg")
          },
          {
            id: 2,
            title: "厦门小提大作婚纱摄影客片大赏",
            dianzan: 123,
            shoucang: 123,
            src: require("../../../assets/1.jpg")
          },
          {
            id: 3,
            title: "厦门小提大作婚纱摄影客片大赏",
            dianzan: 123,
            shoucang: 123,
            src: require("../../../assets/1.jpg")
          },
          {
            id: 4,
            title: "厦门小提大作婚纱摄影客片大赏",
            dianzan: 123,
            shoucang: 123,
            src: require("../../../assets/1.jpg")
          },
          {
            id: 5,
            title: "厦门小提大作婚纱摄影客片大赏",
            dianzan: 123,
            shoucang: 123,
            src: require("../../../assets/1.jpg")
          }
        ],
        zuopins: [
          [{
              id: 1,
              title: "厦门小提大作婚纱摄影客片大赏",
              url: "/jianjie/Wkmain",
              images: require("../../../assets/6.jpg")
            },
            {
              id: 1,
              title: "厦门小提大作婚纱摄影客片大赏",
              url: "/jianjie/Wkmain",
              images: require("../../../assets/6.jpg")
            },
            {
              id: 1,
              title: "厦门小提大作婚纱摄影客片大赏",
              url: "/jianjie/Wkmain",
              images: require("../../../assets/6.jpg")
            },
            {
              id: 1,
              title: "厦门小提大作婚纱摄影客片大赏",
              url: "/jianjie/Wkmain",
              images: require("../../../assets/6.jpg")
            },
            {
              id: 1,
              title: "厦门小提大作婚纱摄影客片大赏",
              url: "/jianjie/Wkmain",
              images: require("../../../assets/6.jpg")
            }
          ],
          [{
              id: 1,
              title: "厦门小提大作婚纱摄影客片大赏",
              url: "/jianjie/Wkmain",
              images: require("../../../assets/6.jpg")
            },
            {
              id: 1,
              title: "厦门小提大作婚纱摄影客片大赏",
              url: "/jianjie/Wkmain",
              images: require("../../../assets/6.jpg")
            },
            {
              id: 1,
              title: "厦门小提大作婚纱摄影客片大赏",
              url: "/jianjie/Wkmain",
              images: require("../../../assets/6.jpg")
            }
          ]
        ]
      }
    },
    components: {

    }
  }

</script>
<style scoped="">
  @charset "utf-8";

  .zhankai {
    float: right;
    color: #666;
    font-size: 12px;
    cursor: pointer;
  }

  .zuopinbox {
    margin-top: 20px;
  }

  .zuopinbox a {
    margin: 10px;
    float: left;
  }

  .keneng {
    color: #666;
    font-size: 12px;

  }

  .relevant {
    width: 97%;
    margin: 0 auto;
    display: flow-root;
    margin-top: 50px;
  }

  .like {
    background: #ff4163;
    height: 36px;
    line-height: 36px;
    color: #fff;
    text-align: center;
    width: 160px;
    padding-left: 6px;
    font-size: 16px;
    border-radius: 20px;
    margin: 0 auto;

  }

  .plbox {
    width: 13%;
    height: 30px;
    margin-top: 50px;
    display: block;
    float: left;
    font-size: 14px;
  }

  .title a,
  el-button {
    float: left;
    list-style: none;
    text-decoration: none;
    display: block;
    color: black;
    height: 30px;
    line-height: 30px;
    margin-left: 15px;
  }

  .xh {
    display: block;
    background: url(../../../assets/all-icon-img.png) no-repeat scroll -89px -101px transparent;
    width: 14px;
    margin-right: 3px;

  }

  .pl {
    display: block;
    background: url(../../../assets/all-icon-img.png) no-repeat scroll -89px -66px transparent;
    width: 14px;
    margin-right: 3px;
  }

  .pl,
  .xh {
    display: block;
    float: left;
    height: 30px;
    padding: 0;
    line-height: 30px;
    margin-right: 5px;
    border-radius: 2px;
    text-align: center;

  }

  .content {
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
    background-size: 100% 100%;
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

  .imagesxq a {
    display: block;

  }

  .imagesxq {
    font-size: 16px;
    color: #666;
    border-top: 1px dotted #d2d2d2;
    padding-top: 20px;
    margin-top: 10px;
    width: 95%;
    margin: 0 auto;
    height: auto;

  }

  .title h2 {
    width: 80%;
    margin-left: 50px;
    float: left;
  }

  .Wkbody .title {
    width: 100%;
    height: 100px;
    line-height: 100px;

  }

  .Wkbody {
    width: 980px;
    height: auto;
    margin: 0 auto;
    background: #fff;
  }

</style>
