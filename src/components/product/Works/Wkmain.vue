<template>

<div class="Wkmian">
    <Exhibitions></Exhibitions>
    <Wkbody></Wkbody>
</div>
</template>

<script>
import Exhibitions from '../Exhibition/Exhibitions';
import Wkbody from './Wkbody';
export default {
 name: 'Wkmian',
 data(){
return{pronavs:[
]}
 },
 components:{
   Exhibitions,
  Wkbody
 }
}
</script>
<style scoped="">

</style>
