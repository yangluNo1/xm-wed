<template>
  <div class="Pictures">
    <div class="Picturesnav">

    </div>
    <div class="Picturesmain">
      <div class="Picturesxinxi">

      </div>
      <div class="Picturesbox" v-for="ff in tupians" :key="ff.index">

         <router-link to="//static3.wed114.cn/city/zanye/load.html" target="_blank"><img :src="ff.images[0]" /></router-link>
        <div class="phototit">
          <h4>
            <router-link to="/jianjie/Wkmain" class="shop_link" target="_blank" >
              厦门倾国倾城婚纱摄影【客片欣赏】 </router-link >
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Pictures',
    data() {
      return {
        tupians: [{
            id: 1,
            title: '厦门倾国倾城婚纱摄影【客片欣赏】',
            images: [require('../../assets/6.jpg'), '../../assets/6.jpg', '../../assets/6.jpg', '../../assets/6.jpg']
          },
          {
            id: 1,
            title: '厦门倾国倾城婚纱摄影【客片欣赏】',
            images: [require('../../assets/6.jpg'), '../../assets/6.jpg', '../../assets/6.jpg', '../../assets/6.jpg']
          },
          {
            id: 1,
            title: '厦门倾国倾城婚纱摄影【客片欣赏】',
            images: [require('../../assets/6.jpg'), '../../assets/6.jpg', '../../assets/6.jpg', '../../assets/6.jpg']
          },
          {
            id: 1,
            title: '厦门倾国倾城婚纱摄影【客片欣赏】',
            images: [require('../../assets/6.jpg'), '../../assets/6.jpg', '../../assets/6.jpg', '../../assets/6.jpg']
          }

        ]
      }
    },
    mounted() {
      console.log("1" + this.tupians[0].images[0])
    }
  }

</script>

<style>
  .Picturesxinxi {
    border: 1px solid rgb(238, 233, 233);
    width: 300px;
    height: 580px;
    float: left;
  }

  .phototit a {
    list-style: none;
    text-decoration: none;
    color: #fff;
    display: block;
    font-size: 14px;
    display: inline-block;
    font-weight: 400;
  }

  .phototit {
    text-shadow: 0 0 1px #000;
    position: absolute;
    bottom: 10px;
    left: 10px;
    height: 50px;
  }

  .Picturesnav {
    background: black;
    width: 100%;
    height: 50px;
  }

  .Picturesbox {
    width: 280px;
    height: 280px;
    margin: 10px;
    position: relative;
    float: left;
    overflow: hidden;
  }

  .Picturesmain {
    float: left;
    display: flow-root;
    padding-left: 50px;
  }

  body,
  html {
    background: #fff;
  }

</style>
