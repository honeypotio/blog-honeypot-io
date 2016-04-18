//= require jquery
//= require jquery.cookiebar

(function($) {
  $(document).on('ready', function() {
    $.cookieBar({
      acceptText: '&times;',
      message: '<span>Honeypot uses cookies to make your experience better.</span>',
      policyButton: true,
      policyText: 'More info',
      policyURL: '/pages/legal_notice#privacy_policy'
    });
  });
})(jQuery);
