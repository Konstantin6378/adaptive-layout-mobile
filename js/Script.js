const swiper = new Swiper('.section-hero__list__swiper', {
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  // slidesPerView: 1,
  // loop: true,
  // пагинация
  pagination: {
  el: '.swiper-pagination',
  clickable: true
  },
  });


$( function() {
  $( "#accordion" ).accordion({
    heightStyle: "content",
  });
} );

$( ".selector" ).accordion({
  collapsible: true

});

// Getter
var collapsible = $( ".selector" ).accordion( "option", "collapsible" );

// Setter
$( ".selector" ).accordion( "option", "collapsible", true );

$( ".selector" ).accordion({
  icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-close" }
});

// Getter
var icons = $( ".selector" ).accordion( "option", "icons" );

// Setter
$( ".selector" ).accordion( "option", "icons", { "header": "ui-icon-plus", "activeHeader": "ui-icon-close" } );


document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.section-we-work__nav__item').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.section-we-work__list__item__contant').forEach(function(tabContent) {
        tabContent.classList.remove('section-we-work__list__item__contant--active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('section-we-work__list__item__contant--active')
    })
  })
  })

