


function toggleTopMenu() {
	$(".main-nav").css("padding","0px");
	$(".shadow").css("visibility","hidden");

	$(".main-nav ul").css("border-radius","0px");
	$(".main-nav ul li").css("margin-top","0px");
	$(".main-nav ul i").css("margin-top","3px");
	$(".main-nav ul").css("position","fixed");

	$(".main-nav ul").animate({ width:"100%", margin:0, height:"65px" }, 200);






	};


	//$('li').click(toggleTopMenu);


