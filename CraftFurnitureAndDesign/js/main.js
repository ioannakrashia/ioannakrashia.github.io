$(function() {
        
// Navigation menu //
    
    $('.menu-link').bigSlide({
    });
        

// Carousel homepage //
 
  $("#owl-demo").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem: true,
      autoPlay: true
      
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
    

// Gallery with thumbnails //
    
    $('.aniimated-thumbnials').lightGallery({
        thumbnail:true,
        animateThumb: true
    });   

    var $grid = $('.grid').masonry({
      // options
      itemSelector: '.grid-item',
      columnWidth: 10
    });
    // layout Masonry after each image loads
    $grid.imagesLoaded().progress( function() {
      $grid.masonry('layout');
    });

    
    
});