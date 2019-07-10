
function fn (){
  new Swiper(".swiper-container", {
		
    //默认功能属性
    speed: 250,
    slidesPerView:4,
    spaceBetween: 0,
    slidesPerGroup:4,
    loop: true,
    autoplay: false,
    
    //分页索引
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    
    //分页按钮
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }

  });

}
module.exports = fn