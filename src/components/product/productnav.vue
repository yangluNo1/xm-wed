<template>
  <div class="pronavbox">

    <ul>
      <li v-for="pnav in pronavs" :key="pnav.index" :id="pnav.id">
        <router-link :to="pnav.href">{{pnav.name}}</router-link>
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    name: 'pronavbox',
    data() {
      return {
        pronavs: [{
            id: 1,
            name: "首页",
            href: "/home"
          },
          {
            id: 2,
            name: "精品折扣",
            href: "/jingpinzhekou"
          },
          {
            id: 3,
            name: "作品精选",
            href: "/zuopinjingxuan"
          },
          {
            id: 4,
            name: "优惠活动",
            href: "/youhuihuodong"
          },
          {
            id: 5,
            name: "公司简介",
            href: "/gongsijianjie"
          },
        ]
      }
    },

    components: {

    }
  }

</script>
<style scoped="">
  .pronavbox {
    background: rgb(226, 35, 83);
    width: 980px;
    margin: 0 auto;
    height: 40px;

  }

  .pronavbox ul {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  .pronavbox li {
    list-style: none;
    float: left;
    width: 100px;
    text-align: center;
    z-index: 99;

  }

  .pronavbox a:hover {

    background: #e6062f;
  }

  .pronavbox a {
    text-decoration: none;
    color: #fff;
    font-size: 14px;
    font-family: '宋体';
    font-weight: 1000;
    line-height: 40px;
    text-align: center;
    width: 100px;

    display: block;
  }

  .router-link-active {
    background: #e6062f;
  }

</style>
