<template>
  <div class="errorbox">
    <div class="errorbg">
      <div class="errorcontext">
        <p>404 Not Found!</p>
        <router-link to="/" class="fanhui">返回首页</router-link>
      </div>
    </div>
    <footers></footers>
  </div>
</template>

<script>
  import footers from './home/Footer';
  export default {
    data() {
      return{}
    },
    components: {
      footers
    }
  }

</script>

<style scoped>
  .errorbox .errorcontext .fanhui {
    list-style: none;
    text-decoration: none;
    text-align: center;
    margin: 0 auto;
    border-radius: 5px;
    font-size: 18px;
    width: 128px;
    background: #ff4163;
    color: #fff;
    display: block;
    padding: 10px 0;
    font-size: 16px;
    cursor: pointer;
  }

  .errorbox .errorcontext p:nth-child(1) {
    font-size: 2em;
    text-align: center;
    color: #295b6a
  }

  .errorbg .errorcontext {

    width: 100%;

    padding-top: 20px;

  }

  .errorbox .footer {
    width: 100%;
    position: absolute;
    bottom: 0;
    margin: 0 auto;
  }

  .errorbox .errorbg {
    width: 100%;
    height: 725px;
    background: url('../assets/4042_02.jpg') no-repeat center 0;
  }

</style>
