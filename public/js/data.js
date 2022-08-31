new Glider(document.querySelector('.glider'), {
   slidesToShow: 5,
   slidesToScroll: 5,
   draggable: true,
   dots: '.dots2',
   arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
   }
});

new Glider(document.querySelector('.carousel_banner_animation'), {
   slidesToShow: 1,
   dots: '.dots1',
   draggable: true,
   arrows: {
      prev: '.btn_prev',
      next: '.btn_next'
   }
});