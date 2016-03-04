// JavaScript Document


$(function ()
 { 
 	/**************************
	监听屏幕并相应改变导航栏属性
	**************************/
	 
	  var lock = false;
	
	  $(window).scroll(function()
	  {
		  
		  if ($(window).scrollTop()>450&&$(window).scrollTop()<900)
		  {
			  if(lock===false){
				  $("#navigation_bar").fadeOut(400,function(){
					  
					  if(document.body.clientWidth<520){
					  $("#nav_bar_a1").css("display","inline-block");
					  $("#nav_bar_ul").css("display","none");
					  $("#nav_bar_a1").css("width","100%");
					  }
					  
					  $("#navigation_bar a").css("color","rgba(0,0,0,0.80)");
					  $(this).fadeIn(400);
					  lock=true;			  
				  });
			  }
		  }
		  if($(window).scrollTop()>900)
		  {
			  if(lock===true){
				  $("#navigation_bar").fadeOut(400,function(){
					  
					  if(document.body.clientWidth<520){
					  $("#nav_bar_a1").css("display","none");
					  $("#nav_bar_ul").css("display","inline-block");
					  $("#nav_bar_ul").css("width","100%");
					  }
					  
					  $("#navigation_bar a").css("color","rgba(130,218,255,1.00)");
					  $(this).fadeIn(400);
					  lock=false;
				  });
			  }
		  }
		  if($(window).scrollTop()<450)
	  	  {   
			  $("#navigation_bar a").css("color","rgba(255,255,255,1.0)");			  
			  lock=false;
		  }
				  	 
	  });
	  
	  //当点击跳转链接后，回到页面顶部位置
	  $("#scrollToTop").click(function()
	  {
		  $('body,html').animate({scrollTop:0},1000);
		  return false;
	  }); 
	  
	  //alert(document.body.clientWidth);
	  
	   $(window).scroll(function()
	  {
		  if($(window).scrollTop()<100){
			 $("#about_me_left").fadeOut(1000);
		  }
		  else{
			 $("#about_me_left").fadeIn(1000);
		  }
	  });
	  
	/* var width = document.getElementById("haha").offsetWidth;  /*获取div当前width*/
	/* alert(width);
	 $("#like_star div").css("height",width+"px");*/

 });// JavaScript Document 
 		