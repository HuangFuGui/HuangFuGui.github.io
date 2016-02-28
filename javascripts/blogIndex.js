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
				  $("#blogIndex_header").fadeOut(400,function(){
					  $(this).css("background-color","rgba(50, 50, 50, 0.08)");
					  $("#blogIndex_header a").css("color","#000000");	
					  $(this).fadeIn(400);
					  lock=true;			  
				  });
			  }
		  }
		  if($(window).scrollTop()>900)
		  {
			  if(lock==true){
				  $("#blogIndex_header").fadeOut(400,function(){
					  $(this).css("background-color","rgba(0,255,219,0.08)");
					  $("#blogIndex_header a").css("color","rgba(0,0,0,1.00)");
					  $(this).fadeIn(400);
					  lock=false;
				  });
			  }
		  }
		  else if($(window).scrollTop()<450)
	  	  {
			  $("#blogIndex_header a").css("color","#FFFFFF");
			  $("#blogIndex_header").css("background-color","rgba(150, 150, 150, 0)");
			  lock=false;
		  }
				  	 
	  });
	  //当点击跳转链接后，回到页面顶部位置
	  	  $("#scrollToTop").click(function()
	  {
		  $('body,html').animate({scrollTop:0},1000);
		  return false;
	  }); 
	  
	  $('[data-toggle="tooltip"]').tooltip();
 });