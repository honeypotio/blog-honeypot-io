$(function() {
  var $grid;

  if($(window).width() > 768) {
    $grid = $('.js-post-listing').masonry({
      gutter: 0,
      itemSelector: '.js-post-listing-item'
    });
    $grid.imagesLoaded().progress( function() {
      $grid.masonry('layout');
    });
  }

});
