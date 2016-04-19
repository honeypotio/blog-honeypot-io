var ScrollHandler = {
  init: function() {}
};

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
  $('.popup').click(function(event) {
    var width  = 575,
        height = 400,
        left   = ($(window).width() - width) / 2,
        top    = ($(window).height() - height) / 2,
        url    = this.href,
        opts   = 'status=1' +
                ',width='  + width  +
                ',height=' + height +
                ',top='    + top    +
                ',left='   + left;

    window.open(url, 'twitter', opts);
    return false;
  });

  var $startElement = $('.js-sticky-container'),
      $stopElement = $('.js-scroll-stop'),
      coverOffset = $('.js-post-cover').offset().top,
      stickyClass = 'post__sticky--stick',
      offset = 50,
      startSticky = $startElement.offset().top - offset,
      stopSticky = $stopElement.offset().top - $startElement.height() - offset,
      postPosition = $('.post__content'),
      scrollTop, stopOffset;

  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
    if (scrollTop > startSticky && scrollTop < stopSticky) {
      $startElement.addClass(stickyClass)
        .attr('style', null)
        .css({
          left: (postPosition.offset().left - 100) + 'px'
        });
    }
    else if(scrollTop > stopSticky) {
      stopOffset = $stopElement.offset().top - coverOffset;
      $startElement.removeClass(stickyClass);
      $startElement.css({
        top: stopOffset + 'px',
        position: 'absolute',
        left: '-100px'
      });
    } else {
      $startElement.removeClass(stickyClass).attr('style', null);
    }
  });

});
