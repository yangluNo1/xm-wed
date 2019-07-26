<template>

  <div class="Wkmian">
    <Exhibitions></Exhibitions>
    <Wkbody v-on:childByValue="childByValue"></Wkbody>
    <footers></footers>
    <div class="titleboxflxed" style="display:none">
      <div class="ttmian">
        <div class="ttbox">
          <span class="title">{{imagess[0].title}}</span>
          <span class="jiagett">参考价格: ¥ <span class="jiage">12888</span></span>
        </div>
        <div class="btn">
          <p class="dangqi" v-on:click="zxopen()">
            咨询档期
          </p>
          <p class="zixun" v-on:click="zxopen()">
            在线咨询
          </p>
        </div>
      </div>
    </div>
    <zxdangqi ref="child"></zxdangqi>
  </div>
</template>

<script>
  import Exhibitions from '../Exhibition/Exhibitions';
  import Wkbody from './Wkbody';
  import footers from '../../home/Footer';
  import zxdangqi from '../Zxdangqi';

  export default {
    name: 'Wkmian',
    data() {
      return {
        pronavs: [{}],
        dialogTableVisible: false,
        dialogFormVisible: false,
        imagess: [{}]
      }
    },
    mounted() {
      // 开启滚动监听
      window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
      childByValue: function (images) {
        // childValue就是子组件传过来的值
        this.imagess = images;
        console.log("shuju" + this.imagess[0].title)
      },
      zxopen() {
        this.dialogFormVisible = true;
        this.$refs.child.parentMsg(this.dialogFormVisible)
      },
      // 关闭广告


      // 滚动监听 滚动触发的效果写在这里
      handleScroll() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

        if (scrollTop >= 150) {
          document.getElementsByClassName('titleboxflxed')[0].style.display = "block";
        } else {
          document.getElementsByClassName('titleboxflxed')[0].style.display = "none";
        }
      }

    },
    components: {
      Exhibitions,
      Wkbody,
      footers,
      zxdangqi
    }
  }

</script>
<style scoped="">
  .titleboxflxed {
    position: fixed;
    width: 100%;
    height: 100px;
    top: 0;
    background: #fff;
    z-index: 99;
    overflow: hidden;
  }

  .titleboxflxed .ttmian {
    width: 980px;
    margin: 0 auto;
  }

  .titleboxflxed .ttbox {
    float: left;

  }

  .titleboxflxed .ttbox .title {
    font-size: 20px;
    overflow: hidden;
    display: block;
    padding: 10px 0;
  }

  .titleboxflxed .ttbox .jiagett {
    font-size: 18px;
    overflow: hidden;
    color: #ff5c5c;
  }

  .titleboxflxed .ttbox .jiagett .jiage {
    font-size: 30px;

  }

  .titleboxflxed .btn {
    float: right;
    margin-top: 20px;
  }

  .titleboxflxed .btn .dangqi {
    line-height: 38px;
    height: 38px;
    width: 130px;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    background: #ff4163;
    color: #fff;
    border-radius: 3px;
    margin-right: 20px;
    float: left;
  }

  .titleboxflxed .btn .zixun {
    line-height: 38px;
    height: 38px;
    width: 130px;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    border: 1px solid #ff4163;
    background: #fff2f2;
    color: #ff5c5c;
    border-radius: 3px;
    margin-right: 20px;
    float: left;
  }

</style>
