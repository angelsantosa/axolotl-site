$(function() {
  var	$window = $(window),
  $body = $('body'),
  $lake = $('#lake'),
  $header = $('#header');

  $('.scrolly')
  				.scrolly({
  					speed: 1500,
  					offset: $header.outerHeight()
  				});
          
  if ($lake.length > 0
			&&	$header.hasClass('bg-transparent')) {

				$window.on('resize', function() { $window.trigger('scroll'); });

				$lake.scrollex({
					bottom:		$header.outerHeight() + 1,
					terminate:	function() {
            $header.removeClass('bg-transparent');
            $header.addClass('bg-wlight');
          },
					enter:		function() {
            $header.addClass('bg-transparent');
            $header.removeClass('bg-wlight');
          },
					leave:		function() {
            $header.removeClass('bg-transparent');
            $header.addClass('bg-wlight');
          }
				});

			}
});
