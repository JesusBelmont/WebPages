$(document).ready(function(){

	$("#banner").css({"height":$(window).height()/2 + "px"});

	var flag = false;
	var scroll;

	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if(scroll > 200){
			if(!flag){
				$("#logo").css({"margin-top": "-5px", "width": "50px","height":"50px"});

				$("header").css({"background-color": "transparent"});
				flag = true;
			}
		}else{
			if(flag){
				$("#logo").css({"margin-top": "150px", "width": "176px","height":"175px"});

				$("header").css({"background-color": "transparent"});
				flag = false;
			}
		}


	});

});
