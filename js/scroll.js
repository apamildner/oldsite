  $(document).ready(function() {



      //This handles the calls from the footer navigation.
      var currentHash = location.hash;
      console.log(currentHash);


      if (currentHash == "#about") {



          var offset = $("#aboutanchor").offset().top;


          $("html, body").animate({
              scrollTop: offset-270
          }, 1300);
      }

      if (currentHash == "#portfolio") {



          var offset = $("#portfolioanchor").offset().top;

          $("html, body").animate({
              scrollTop: offset-80
          }, 1300);

      }


      if (currentHash == "#contact") {


          var offset = $("#contactanchor").offset().top;


          $("html, body").animate({
              scrollTop: offset
          }, 1300);



      };







      $('.about').click(function(e) {


          e.preventDefault();

          var offset = $("#aboutanchor").offset().top;




          $("html, body").animate({
              scrollTop: offset - 270
          }, 1300);
      });

      //----------------------------------------------- End Footer Nav Handling.


      $('.portfolio').click(function(e) {
          e.preventDefault();

          var offset = $("#portfolioanchor").offset().top;




          $("html, body").animate({
              scrollTop: offset-80
          }, 1300);
      });


      $('#home').click(function(e) {
          e.preventDefault();



          $("html, body").animate({
              scrollTop: 0
          }, 1300);
      });

      $('.contact').click(function(e) {
          e.preventDefault();

          var offset = $("#contactanchor").offset().top;



          $("html, body").animate({
              scrollTop: offset
          }, 1300);
      });



  });
