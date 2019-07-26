<template>

  <div class="Exmian">

    <Exhibitions></Exhibitions>
    <Exhibitionsbody></Exhibitionsbody>
    <footers></footers>
  </div>
  
</template>

<script>
  import Exhibitions from './Exhibitions';
  import Exhibitionsbody from './Exhibitionsbody';
    import footers from '../../home/Footer';
  export default {
    name: 'Exmian',

    data() {
      return {
        pronavs: []
      }
    },
    components: {
      Exhibitions,
      Exhibitionsbody,
      footers
    }
  }

</script>
<style scoped>

.footer {
   width: 100%;
    position: absolute;

    margin: 0 auto;
  }
</style>
