<template>

<div class="Exhibitionsbody">
    <div class="exmain">
        <div class="eximgbox">
            <div class="eximgboxbg">
               <div class="moveBody">
                    <section>
                        <div class="siema boxTxt">
                            <div class="box bg1" v-for="eximg in eximgs" :key="eximg.index">
                                <img :src="eximg.src" />
                            </div>
                             
                        </div>
                        <div class="boxbtn">
                            <div class="part1 bg1" v-for="eximg in eximgs" :key="eximg.index">
                                <img :src="eximg.src" width="68px" height="68px"/>
                              
                            </div>
   
                        </div>
                    </section>
                </div>
            </div>
        </div>
        <div class="exjianjie">
            <p class="extit"><span class="extitle">{{dianpus.title}}</span>
            <span class="extityd">预订送情侣酒店+机票补贴+婚纱一件</span> 
</p> 
            <p class="exshic">
                <span class="jiage">￥{{dianpus.xianjia}}.00</span>
                <span class="shichangjia">市场价：￥{{dianpus.yuanjia}}.00</span>
            </p>
             <p class="sxlippin">
                <span class="lipini">到店礼</span>
                <span class="lipin">
预定成功到店赠送10寸精美摆台一个</span>
            </p>
            <p class="guanzhu">
                <span>已有<em>{{dianpus.shoucang}}</em>人关注该折扣</span>
            </p>
              <p class="yudingbox">
                <a class="yuding" @click="zxopen()">咨询档期</a>
                 <a class="kefu" @click="zxopen()">在线咨询</a>
            </p>
        </div>
        <zxdangqi ref="child"></zxdangqi>
        <div class="exjieshaomain">
            <div class="jieshao">
                <span>产品介绍</span>
               
            </div>

                <div id="tx_detail" class="new-priceshow-box clearfix tab-box"> 
                <dl> 
                    <dt> 
                    <strong>造型</strong> 
                    </dt> 
                    <dd> 
                    <ul class="clearfix"> 
                    <li> <b>造型数量：</b> <p>4 套 </p> </li> 
                    <li> <b>服装说明：</b> <p>首席团队创作型摄影老师和团队工作人员全程5对1拍摄1天 婚纱、礼服、特色服全场任选5套 (男.女各4套) </p> </li> 
                    <li> <b>造型说明：</b> <p>拍摄前天专业化妆老师根据你们气质挑选符合的服装，饰品、假睫毛、粉扑 专业新娘水晶妆面一次，整体专业造型4款 新郎妆面及发型随新娘造型更换 </p> </li> 
                    </ul> 
                    </dd> 
                </dl> 
                <dl> 
                    <dt> 
                    <strong>场景</strong> 
                    </dt> 
                    <dd> 
                    <ul class="clearfix"> 
                    <li> <b>场景搭配：</b> <p>内外景搭配 </p> </li> 
                    <li> <b>内景数量：</b> <p>1 个 </p> </li> 
                    <li> <b>内景说明：</b> <p>2000平米摄影基地场景任选 </p> </li> 
                    <li> <b>外景数量：</b> <p>3 个 </p> </li> 
                    <li> <b>外景说明：</b> <p>提供厦门名胜外景点任选不限 环岛路无敌大海景\音乐广场\南湖公园 \忠仑公园\ 湿地公园\市花梅海岭\文曾路\中山路\西提咖啡街\ 百家村建筑\鼓浪屿\中山公园\ 曾厝垵\夜景\鼓浪屿 嘉庚龙舟池\2000多平米室内实景拍摄等任选 特色场景：天空之城，房车，直升机，马场，跑车，游艇，婚礼现场，热气球，大象，四季花海，滑翔机，休闲酒吧，植物园，水下（礁石）美人鱼任选其一 </p> </li> 
                    </ul> 
                    </dd> 
                </dl> 
                <dl> 
                    <dt> 
                    <strong>拍摄</strong> 
                    </dt> 
                    <dd> 
                    <ul class="clearfix"> 
                    <li> <b>拍摄天数：</b> <p>1 天 </p> </li> 
                    <li> <b>拍摄张数：</b> <p>200 张 </p> </li> 
                    <li> <b>精修张数：</b> <p>40 张 </p> </li> 
                    <li> <b>入册张数：</b> <p>40 张 </p> </li> 
                    </ul> 
                    </dd> 
                </dl> 
                <dl> 
                    <dt> 
                    <strong>成品</strong> 
                    </dt> 
                    <dd> 
                    <ul class="clearfix"> 
                    <li> <b>相册数量：</b> <p>2 本 </p> </li> 
                    <li> <b>相册说明：</b> <p>20寸璃彩水晶相册一本 14寸璃彩水晶相册一本 </p> </li> 
                    <li> <b>相框数量：</b> <p>7 个 </p> </li> 
                    <li> <b>相框说明：</b> <p>88寸巨幅电影明星海报一张 48寸欧式宽屏油画框一张 30寸时尚纳米框一张 20寸时尚纳米框一张 10寸风尚格林摆台一张 10寸白玉烤瓷一张 7寸时尚纳米一张 </p> </li> 
                    <li> <b>其他成品：</b> <p>精美谢卡10张DVD动感电子音乐相册一碟 </p> </li> 
                    </ul> 
                    </dd> 
                </dl> 
                <dl> 
                    <dt> 
                    <strong>其他</strong> 
                    </dt> 
                    <dd> 
                    <ul class="clearfix"> 
                    <li> <b>套餐赠品：</b> <p>1：提供2天1晚精品酒店住宿 2：当天咨询并下单：送全新婚纱一件（不需要可换成24寸纳米相框） 3：所以产品包邮 4：24小时接机服务 5：提供拍摄当天化妆定妆精华液 6：送电子微信请柬一份 7：送10寸精美摆台一个 8：拍摄当天外景专用车一对一服务 </p> </li> 
                    <li> <b>补充说明：</b> <p>1、拍摄过程中所产生的（车费/午餐/停车费）均由本公司承担 2、本单无任何隐形消费，成品邮寄所产生的费用，顾客自理。 3、国家法定假日，本单所赠送酒店均根据实际情况补余差价 </p> </li> 
                    </ul> 
                    </dd> 
                </dl> 
                <dl> 
                    <dt> 
                    <strong>图文详情</strong> 
                    </dt> 
                    <dd> 
                            <img v-for="eximg in eximgs" :key="eximg.index" :src="eximg.src" width="100%" height="500px"/>
                    </dd> 
                </dl> 
                </div>

        </div>
    </div>


</div>


</template>

<script>
import '../../../assets/js/siema.min'
import  slides from '../../../assets/js/slide';
import zxdangqi from '../Zxdangqi'
export default {
    name: 'Exhibitionsbody',
    data(){
        return{
            eximgs:[{id:1,src:require('../../../assets/1.jpg')},
                    {id:2,src:require('../../../assets/2.jpg')},
                    {id:3,src:require('../../../assets/3.jpg')},
                    {id:4,src:require('../../../assets/4.jpg')}],
                    dianpus:this.$route.params.id,
                    dialogTableVisible: false,
                    dialogFormVisible: false
                }
    },
    mounted:function(){
            slides();
            console.log(this.dianpus)
    },
    methods:{
          zxopen(){
            this.dialogFormVisible = true
            this.$refs.child.parentMsg(this.dialogFormVisible)
        }
    },
    components:{
        zxdangqi
    }
}
</script>



<style scoped="">  
dt,dd,ul,li{
    margin: 0;
    padding: 0;
}
.new-priceshow-box {
    padding-top: 0;
    width: 98%;
    margin: 0 auto;
}

.new-priceshow-box img.full {
	width: 100%;
	text-align: center
}

.new-priceshow-box dl {
	color: #666;
	font-size: 14px;
    padding: 5px 25px;
  
}

.new-priceshow-box dt {
	border-bottom: 1px dashed #ccc
}

.new-priceshow-box dt strong {
	font-size: 18px;
	color: #333;
	font-weight: 700;
	line-height: 40px
}

.new-priceshow-box dd {
    padding-top: 15px;
    
  
}

.new-priceshow-box dd li {
	line-height: 30px;
	float: left;
    width: 100%;
    list-style: none;
    
}

.new-priceshow-box dd b {
	float: left;
	width: 80px;
	color: #333;
    font-weight: 400;
    
}

.new-priceshow-box dd p {
	float: left;
	margin-top: -1px;
}

.fixTopTxtj {
	display: block;
	position: fixed;
	top: 20px;
	margin-top: 0;
	z-index: 200
}
.exjieshaomain{
    width: 100%;
    
    float: left;
    background-color: #fff;
    margin-top: 50px;
}
.jieshao span{
   display: block;
    float: left;
    height: 36px;
    line-height: 36px;
    position: relative;
    margin-left: 20px;
    text-align: center;
    color: #444;
    font-size: 18px;

}
.exjieshaomain .jieshao{
        border: 1px solid #eee;
    height: 36px;
    line-height: 36px;
    margin-bottom: 15px;
    background: #f6f6f6;
    width: 98%;
    margin: 0 auto;
}
.yudingbox{
    float: left;
    width: 100%;
    height: 100px;;
}
.kefu{
        border: 1px solid #ff4163;
    background: #fff2f2;
    color: #ff5c5c;
    display: block;
     list-style: none;
    text-decoration: none;
    line-height: 38px;
    height: 38px;
    width: 130px;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    border-radius: 3px;
    margin-right: 200px;
    float: right
}
.kefu:hover, .yuding:hover{
    opacity: 0.7;
}
.yuding{
    float: left;
    list-style: none;
    text-decoration: none;
    display: block;
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
}
.guanzhu em{
    color: #ff4163;
    font-family: '楷体';
    font-weight: 600;
    margin: 5px;
}
.guanzhu{
  
    color: #444;
    font-size: 14px;
}
.lipin{
        line-height: 24px;
    height: 24px;
    display: block;
    overflow: hidden;
    color: #444;
    font-size: 12px;
}
.sxlippin{
     width: 100%;
    height: 30px;
        float: left;
}
.exshic{
    width: 100%;
    height: 30px;
    float: left;
}
.lipini{
        float: left; 
    font-size: 13px;
    color: #ff4163;
    line-height: 24px;
    height: 24px;
}
.exjianjie .shichangjia{
    float: left;
    color: #999;
    text-decoration: line-through;
    font-size: 12px;
    font-weight: 400;
    margin-left: 20px;
    padding-top: 10px;
}
.exjianjie .jiage{
      font-size: 30px;
    font-weight: 500;
    color: #ff4163;
    position: relative;
    float: left;
}
.exjianjie .extitle{
    width: 100%;
    float: left;
}
.extityd{
    font-weight: 400;
    font-size: 12px;
    color: #999;
    float: left;   
    margin-left: 20px;
    margin-top: 5px;
}
.extit{
       font-weight: 400;
    font-size: 20px;
    color: #333;
    float: left;
    width: 100%;
}

.exjianjie{
    width: 50%;
    float: right;
    margin-top: -365px;
    margin-right: 30px;
}
  .moveBody{
      width: 410px;
      height: 342px;;
	        margin-left: 20px;
      padding-top: 20px;

  }
  .siema img{
	  width: 410px;
      height: 342px;;
  }
.boxbtn div{
    float: left;
    display: block;
    width: 68px;
    height: 68px;
	border-radius:1px;
	margin: 10px 4px;
	border: 1px solid #ccc;
	
	font-size:16px;

    outline: none;
	cursor:pointer;
}

.boxbtn div:hover{
	border: 1px solid red;
}
img{
    cursor:pointer;
}
.exmain{
    width: 980px;
    height: 1600px;
    margin: 0 auto;
    background: #fff;
}

</style>
