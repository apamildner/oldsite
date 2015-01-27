
var clientWidth= $( window ).width();





$(document).ready(function(){

    $(window).scroll(function(){
        if ($(window).scrollTop() > 250){
            toggleTopMenu();
        }

          if ($(window).scrollTop() < 250){
          	if(!(clientWidth<1600)){
          		 bringBackOriginalMenu();

          	}
           
        }

    });


    //This is the autotrigger responsive menu

    $(window).resize(function(){

    	if(clientWidth<1600){

    		toggleTopMenu();
    	
    		
    	}

    	else{
    		bringBackOriginalMenu();
    	}


    });
});


function toggleTopMenu() {
	$(".main-nav ul").animate().stop();
	$(".main-nav ul").animate({ width:"100%", margin:0, height:"65px" }, 500);
	$(".main-nav").css("padding","0px");
	$(".shadow").css("visibility","hidden");

	$(".main-nav ul").css("border-radius","0px");
	$(".main-nav ul li").css("margin-top","0px");
	$(".main-nav ul i").css("margin-top","3px");
	$(".main-nav ul").css("position","fixed");

	






	};



	function bringBackOriginalMenu() {
		$(".main-nav ul").animate().stop();
	$(".main-nav").css("padding","40.5px");
	$(".shadow").css("visibility","visible");
	$(".main-nav ul").css({
    "marginTop": "0",
    "marginRight": "auto",
    "marginBottom": "0",
    "marginLeft": "auto"
})

	$(".main-nav ul").css("border-top-left-radius","5px");
	$(".main-nav ul").css("border-top-right-radius","5px");
	$(".main-nav ul li").css("margin-top","40px");
	$(".main-nav ul i").css("margin-top","40px");
	$(".main-nav ul").css("position","relative");

	$(".main-nav ul").animate({ width:"70%", height:"150px" }, 000);






	};


	


