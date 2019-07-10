
<template> 
   <div class="pubnav-container clearfix" id="app"> 
    <div class="pubnav clearfix"> 
     <div class="pubLnavbox"> 
      <ul> 

       <li v-for="nav in Navigation" :key="nav.index"> 
          <router-link :to ="nav.href" :title="nav.title">
         {{nav.value}}
          </router-link>
      </li> 
       
      </ul> 
     </div> 
     <div class="pubRnavbox"> 
      <ul> 
      </ul> 
     </div> 
    </div> 
   </div> 
  </template> 
  <script>


  var data;
export default {
  name: 'HeaderNav',
  data () {
    return {
      Navigation: [
        {id:0,href:"/",title:"厦门婚纱摄影",value:"首页"},
        {id:1,href:"/home",title:"厦门婚纱摄影排名",value:"婚纱摄影"},
        {id:2,href:"/home",title:"厦门婚礼策划",value:"婚礼策划"},
        {id:3,href:"/home",title:"厦门婚纱礼服",value:"婚纱礼服"},
        {id:4,href:"/home",title:"厦门新娘跟妆",value:"新娘跟妆"},
        {id:5,href:"/home",title:"厦门婚宴酒店",value:"婚宴酒店"},
        {id:6,href:"/home",title:"厦门婚纱摄影团购",value:"聚优惠"},
        {id:7,href:"/home",title:"精选美图",value:"精选美图"},
        {id:8,href:"/home",title:"婚嫁百科",value:"婚嫁百科"},
        {id:9,href:"/home",title:"电子请帖",value:"电子请帖"}
        ]
    }
  }
}
</script> 
  <!-- Add "scoped" attribute to limit CSS to this component only --> 
  <style scoped="">

  li,ol{
    list-style: none;
    text-align: center;
 
  }
.pubnav {
	width:100%;
	margin:0 auto;
	height:40px;
	font-size:15px;
   background:black;
  margin-top: 80px
}
.allnav {
	width:228px;
	float:left;
	position:relative
}
.pubLnavbox {
	float:left;
	overflow:hidden;
	width: 100%;
height: 100%;
}
.pubLnavbox ul{
width: 100%;
height: 100%;
  margin: 0px;
    padding: 0px;
}
.pubLnavbox li {
  float:left;
  margin: 0px;
  padding: 0px;
}
.pubLnavbox li a {
	display:block;
	float:left;
	color:#fff;
	width:100px;
  text-align:center;
  text-decoration:none;
  height: 40px;
  line-height: 40px
}
.pubLnavbox li a.current {
	background:#da2c4c;
	color:#fff
}
.pubLnavbox li a:hover {
	background:#da2c4c;
	color:#fff
}

</style> 
