<template>
   <el-carousel :interval="5000" arrow="always" height="500px" >
    <el-carousel-item v-for="item in items" :key="item.id">
  
      <img :src="item.idView" height="500px" width="100%"/>
    </el-carousel-item>
  </el-carousel>
</template>


 <script>

  var data;
export default {
  name: 'Sildes',
  mounted:function(){

  },
  data () {
    return {
      items: [{id:0,idView:require("../../assets/logo.png")},
      {id:1,idView:require("../../assets/logo.png")},

{id:2,idView:require("../../assets/logo.png")}
      
      ]
    }
  }
}
</script> 

<style scoped="">
.el-carousel{
width: 1080px;
margin: 0 auto;

}
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
