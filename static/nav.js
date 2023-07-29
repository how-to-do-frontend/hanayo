// yes i made a whole file for this but at least i didnt make a whole file for 1 color override
$(document).scroll(function () {
    var toggle = $("#toggle-mobile-navbar")
  
    var nav = $("#navbar");
    nav.toggleClass('scrolled', $(this).scrollTop() > 0 && !toggle.attr('checked'));
  });