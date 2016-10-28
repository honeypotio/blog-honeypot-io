$(function() {
  $.cookieBar({
    acceptText: '&times;',
    message: '<span>Honeypot uses cookies to make your experience better.</span>',
    policyButton: true,
    policyText: 'More info',
    policyURL: 'https://www.honeypot.io/pages/legal_notice#privacy_policy'
  });

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

  if ($('.post').length > 0) {
    var $startElement = $('.js-sticky-container'),
        $stopElement = $('.js-scroll-stop'),
        coverOffset = $('.js-post-cover').offset().top,
        stickyClass = 'post__sticky--stick',
        offset = 50,
        textPadding = 16,
        startSticky = $startElement.offset().top - offset,
        postPosition = $('.post__content'),
        scrollTop, stopOffset, stopSticky;

    $('.post').imagesLoaded(function() {
      stopSticky = $('.js-scroll-stop').offset().top - offset - textPadding - $startElement.height();
    });

    $(window).scroll(function(){
      scrollTop = $(window).scrollTop();
      if (scrollTop > startSticky && scrollTop < stopSticky) {
        $startElement.addClass(stickyClass)
          .attr('style', null)
          .css({
            left: (postPosition.offset().left - 51) + 'px'
          });
      }
      else if(scrollTop > stopSticky) {
        stopOffset = $stopElement.offset().top - coverOffset - $startElement.height() - textPadding;
        $startElement.removeClass(stickyClass);
        $startElement.css({
          top: stopOffset + 'px',
          position: 'absolute',
          left: '-51px'
        });
      } else {
        $startElement.removeClass(stickyClass).attr('style', null);
      }
    });
  }
});
