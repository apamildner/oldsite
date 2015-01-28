  
var isScrolling= false;
//Note to self: Add boolean to prevent slowdown.
  $(document).ready(function() {

      $('#about').click(function(e) {


          e.preventDefault();




          $("html, body").animate({
              scrollTop: 1900
          }, 1300);
      });


      $('#portfolio').click(function(e) {
          e.preventDefault();



          $("html, body").animate({
              scrollTop: 3000
          }, 1300);
      });


      $('#home').click(function(e) {
          e.preventDefault();



          $("html, body").animate({
              scrollTop: 0
          }, 1300);
      });



  });
