

var menuToggled=false;
  



$(document).ready(function(){



	$(".fa-bars").click(function(){
		$(".fa-bars").animate().stop();
		$(this).css("color","#6599FF");

		if(!menuToggled){
         

		$(" .dropdown-container").animate({  "margin-top":"65px",  }, 300);
		menuToggled=true;

	}else{

		menuToggled=false;
		$(this).css("color","black");
		$(" .dropdown-container").animate({  "margin-top":"-555px",  }, 300);

	}



	});

 

    $(window).scroll(function(){
        if ($(window).scrollTop() > 250){
            toggleTopMenu();
        }

          if ($(window).scrollTop() < 250){
          	if(!($( window ).width()<1600)){
          		 bringBackOriginalMenu();

          	}
           
        }

    });




    //This is the autotrigger responsive menu


      $(window).resize(function(){

        if($( window ).width()<1600){

            toggleTopMenu();
        
            
        }

        else{
            bringBackOriginalMenu();
        }


    });


});


function toggleTopMenu() {
	$(".main-nav .menu-wrapper").animate().stop();
	$(".main-nav .menu-wrapper").animate({ width:"100%", margin:0, height:"65px" }, 500);
	$(".main-nav").css("padding","0px");
	$(".shadow").css("visibility","hidden");

	$(".main-nav .menu-wrapper").css("border-radius","0px");
	$(".main-nav .menu-wrapper li").css("margin-top","0px");
	$(".main-nav .menu-wrapper i").css("margin-top","3px");
	$(".main-nav .menu-wrapper").css("position","fixed");

	






	};



	function bringBackOriginalMenu() {
		$(".main-nav .menu-wrapper").animate().stop();
	$(".main-nav").css("padding","40.5px");
	$(".shadow").css("visibility","visible");
	$(".main-nav .menu-wrapper").css({
    "marginTop": "0",
    "marginRight": "auto",
    "marginBottom": "0",
    "marginLeft": "auto"
});

	$(".main-nav .menu-wrapper").css("border-top-left-radius","5px");
	$(".main-nav .menu-wrapper").css("border-top-right-radius","5px");
	$(".main-nav .menu-wrapper li").css("margin-top","40px");
	$(".main-nav .menu-wrapper i").css("margin-top","40px");
	$(".main-nav .menu-wrapper").css("position","relative");

	$(".main-nav .menu-wrapper").animate({ width:"70%", height:"150px" }, 000);






	};


	


