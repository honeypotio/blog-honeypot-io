$(function() {
  var $grid;

  if($(window).width() > 768) {
    $grid = $('.js-post-listing').packery({
      gutter: 0,
      itemSelector: '.js-post-listing-item'
    });
    $grid.imagesLoaded().progress( function() {
      $grid.packery();
    });
  }

});
