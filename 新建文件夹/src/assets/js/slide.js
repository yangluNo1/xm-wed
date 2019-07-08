
function fn (){

    var mySiema = new Siema({//下面要用到Siema，就要声明为全局变量
        loop: true,
   });
   //声明的时候还可以传这些参
   /*new Siema({
          selector: '.siema',//选择器
          duration: 200,//滑动转换持续时间（以ms为单位）
          easing: 'ease-out',//与CSS中的transition-timing-function相同
          perPage: 1,//要显示的幻灯片的数量
          startIndex: 0,//起始滑块的索引（从零开始）
          draggable: true,//使用拖动和触摸滑动
          threshold: 20,//触摸和鼠标拖动阈值（以px为单位）
          loop: false,//循环幻灯片
    });*/


    document.querySelector('.boxbtn div:nth-child(1)').addEventListener('click', () => mySiema.goTo(0));
    document.querySelector('.boxbtn div:nth-child(2)').addEventListener('click', () => mySiema.goTo(1));
    document.querySelector('.boxbtn div:nth-child(3)').addEventListener('click', () => mySiema.goTo(2));
    document.querySelector('.boxbtn div:nth-child(4)').addEventListener('click', () => mySiema.goTo(3));

  }
  module.exports = fn
