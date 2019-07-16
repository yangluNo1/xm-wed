<template>
  <div id="home">

    <Header></Header>
    <Slides></Slides>
    <mains></mains>
    <Discount></Discount>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from "./home/Headers.vue";
  import Footer from "./home/Footer.vue";
  import Slides from "./home/Slides.vue";
  import mains from "./home/Mains.vue";
  import Discount from "./home/Discount.vue";

  export default {
    name: 'home',
    mounted() {
      var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
      // GET /someUrl
      this.$http.get(api)
        .then(function (res) {
            //console.log(res.body.result)
            this.apps = res.body.result;
            console.log(this.apps)
          }

        )

    },
    data() {
      return {
        apps: []
      }
    },

    components: {
      Header,
      Footer,
      Slides,
      mains,
      Discount
    }
  }

</script>

<style scoped="">
  body {
    background: #f5f5f5;
  }

  #home {
   
    margin: 0 auto;
    background: #ffffff;
  }
  .footer {
    width: 1080px;
    background: #e3e2e2;
    position: relative;
    bottom: 0;
    margin: 0 auto;
  }
</style>
