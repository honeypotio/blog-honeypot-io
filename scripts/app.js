$(function() {

  var $grid = $('.js-post-listing').packery({
    gutter: 0,
    itemSelector: '.js-post-listing-item'
  });
  $grid.imagesLoaded().progress( function() {
    $grid.packery();
  });

});
