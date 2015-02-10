  

  $(document).ready(function() {



//This handles the calls from the footer navigation.
    var currentHash= location.hash;
    console.log(currentHash);
   

    if(currentHash=="#about"){


   



          $("html, body").animate({
              scrollTop: 2300
          }, 1300);
        }

        if (currentHash=="#portfolio") {



          

            $("html, body").animate({
              scrollTop: 3600
          }, 1300);

          }


            if (currentHash=="#contact") {



          

            $("html, body").animate({
              scrollTop: 4000
          }, 1300);



        };
        
   





      $('.about').click(function(e) {


          e.preventDefault();




          $("html, body").animate({
              scrollTop: 2300
          }, 1300);
      });

    //----------------------------------------------- End Footer Nav Handling.


      $('.portfolio').click(function(e) {
          e.preventDefault();
          



          $("html, body").animate({
              scrollTop: 3600
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



          $("html, body").animate({
              scrollTop: 4000
          }, 1300);
      });



  });
