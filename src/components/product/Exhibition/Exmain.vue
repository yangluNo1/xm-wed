<template>

<div class="Exmian">

    <Exhibitions></Exhibitions>
    <Exhibitionsbody></Exhibitionsbody>
</div>
</template>

<script>
import Exhibitions from './Exhibitions';
import Exhibitionsbody from './Exhibitionsbody';
export default {
 name: 'Exmian',

 data(){
return{pronavs:[
]}
 },
 components:{
   Exhibitions,
   Exhibitionsbody
 }
}
</script>
<style scoped="">

</style>
