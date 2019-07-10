<template>

<div class="Exmian">
    <Exhibitions></Exhibitions>
    <Exhibitionsbody></Exhibitionsbody>
</div>
</template>

<script>
import protopnav from '../protopnav';
import productnav from '../productnav';
import Exhibitions from './Exhibitions';
import Exhibitionsbody from './Exhibitionsbody';
export default {
 name: 'Exmian',
 data(){
return{pronavs:[
]}
 },
 components:{
   protopnav,
   productnav,
   Exhibitions,
   Exhibitionsbody
 }
}
</script>
<style scoped="">

</style>
