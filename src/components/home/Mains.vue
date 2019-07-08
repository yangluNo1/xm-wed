<template>

  <div class="main">
    <div class="mainbox mainboxno">
      <div class="mainconttit">
        <h3> 品牌 </h3>
        <strong> 厦门婚纱摄影推荐，选品牌，更放心 </strong>
      </div>
    </div>
 <div class="swiper-container">
    <div class="swiper-wrapper">

      <div class="swiper-slide col-sm-3" v-for="ii in temes" :key="ii.index"> 

           <a :href="ii.href" rel="nofollow" target="_blank" :title="ii.id">
                    <img :src="ii.src" width="259" height="460" :alt="ii.title" :title="ii.title" />
                    </a> 
      </div>
      
    </div>
    <!-- Add Pagination -->
  
    <!-- Add Arrows -->
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>

  </div>

</template>


<script>
import  layer from '../../assets/js/layer.js';

  export default {
      
  mounted:function(){
layer();
  },
    data() {
      return {
        temes: [{id:0,href:"/jianjie",src:require("../../assets/1.jpg"),title:"123"},
        {id:0,href:"/jianjie",src:require("../../assets/2.jpg"),title:"123"},
        {id:0,href:"/jianjie",src:require("../../assets/1.jpg"),title:"123"},
        {id:0,href:"/jianjie",src:require("../../assets/2.jpg"),title:"123"},
        {id:0,href:"/jianjie",src:require("../../assets/1.jpg"),title:"123"},
        {id:0,href:"/jianjie",src:require("../../assets/2.jpg"),title:"123"},
        {id:0,href:"/jianjie",src:require("../../assets/1.jpg"),title:"123"}]
      
    }
  }
  }
</script>


<style scoped="">

.swiper-slide swiper-slide-next{
  margin-right: 0px;
}
   .swiper-container {
      width: 100%;
      height: 500px;
      margin: 20px auto;
    }
    .swiper-slide {
      text-align: center;
      font-size: 18px;
     

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }

  .main {
    display: block;
    width: 1080px;
    margin: 0 auto;
  }

  .mainbox {
    padding-bottom: 0;
    border-bottom: 0;
    margin: 0 auto;
  }

  .mainconttit {
    float: left;
  }

  .mainconttit h3 {
    font-size: 24px;
    color: #333;
    float: left;
  }

  .mainconttit strong {
    padding-left: 15px;
    padding-top: 12px;
    color: #999;
    font-weight: 400;
    float: left;
    font-style: normal;
    line-height: 60px;
    font-size:14px;
  }




</style>
