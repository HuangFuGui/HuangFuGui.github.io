// JavaScript Document


$(function ()
 {
	 
	/**************************
	监听屏幕并相应改变导航栏属性
	**************************/
	  $(window).scroll(function()
	  {
		  if ($(window).scrollTop()>450)
		  {
			  $("#blogIndex_header a").css("color","#000000");
			  $("#blogIndex_header").css("background-color","rgba(50, 50, 50, 0.1)");
		  }
		  else 
	  	  {
			  $("#blogIndex_header a").css("color","#FFFFFF");
			  $("#blogIndex_header").css("background-color","rgba(150, 150, 150, 0)");
		  }
				  	 
	  });
	  //当点击跳转链接后，回到页面顶部位置
	  	  $("#scrollToTop").click(function()
	  {
		  $('body,html').animate({scrollTop:0},1000);
		  return false;
	  });
 });