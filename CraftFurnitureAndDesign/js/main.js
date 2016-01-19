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
 
    
// Instafeed - currently not working //
    
    var feed = new Instafeed({
        get: 'tagged',
        tagName: 'awesome',
        clientId: 'YOUR_CLIENT_ID'
    });
    feed.run();
    

// Gallery with thumbnails //
    
    $('.aniimated-thumbnials').lightGallery({
        thumbnail:true,
        animateThumb: true
    }); 

    $('.grid').masonry({
      // options
      itemSelector: '.grid-item',
      columnWidth: 10
    });    

    
    
});