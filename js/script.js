//Function creating a clone of the top navigation bar that stays at the top of the screen
$(document).ready(function() {
  var $header = $("header"),
      $clone = $header.before($header.clone().addClass("clone"));

  $(window).on("scroll", function() {
    var fromTop = $("body").scrollTop();
    $('body').toggleClass("down", (fromTop > 200));
  });
});

//Function to create a smooth scroll between the different anchors of homepage
$(function() {
  $('.smoothScroll').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 750);
        return false;
      }
    }
  });
});

//Function using Google Maps API to print the map
function initMap() {
	var uci = {lat: 33.645990, lng: -117.840120};
	var map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 5,
	  center: uci
	});
	var marker = new google.maps.Marker({
	  position: uci,
	  map: map
});
}

