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
 
 
 /**********************
 jquery-ui             *
 **********************/
function RaiseInform(str,type,length){
    if(length==undefined) length=1000;
    else length=2000;
    $(".inform-box").css("width", SetToastWidth(type));
    $(".inform-txt").text(str);
    $(".inform-box" ).toggle("puff");
    setTimeout(function() {
        $(".inform-box" ).toggle( "puff");
    }, length);
}
//设置Toast宽度
function SetToastWidth(type){
    //type会对应长度
    //默认1
    if(type==1) return "120px";
    else if(type==2) return "240px";
    else if(type==3) return "360px";
}

var show_jquery_ui = function(){
	RaiseInform("哈哈",2);
};



 /**********************
assignment.html        *
 **********************/
 var getPermission = function(){
	 
	 //$("#xixi").replaceWith('<button class="btn  btn-primary">haha!</button>');
 };
 
 var haha = "xixi";
 var now = 10;
 var addAssignment = function(){
	 /*$("#assignmentDiv").append('<h4>'+haha+'</h4>');
	 $("#assignmentDiv").append('<div class="progress"><div class="progress-bar progress-bar-danger progress-bar-striped active" role="progressbar" aria-valuenow="'+now+'" aria-valuemin="0" aria-valuemax="100" style="min-width: 2em; width: '+now+'%;">'+now+'%</div></div>');*/
	 alert($("#datenow").val());
 };