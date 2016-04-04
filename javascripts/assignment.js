// JavaScript Document


var allItem;  /*help page turning*/
var help;  /*obj listItem*/
var upPage = function(){
	if((allItem-10>0)||(allItem-10==0)){
		allItem -=10;
	}
	else{
		allItem=0;
	}
	
	$("#pager2").removeClass("disabled");
	if(allItem==0){
		$("#pager1").addClass("disabled");
	}

	$("#assignmentDivInside").empty();
	for(var i=allItem;i<allItem+10;i++)
	{

		var listItem = '<div id='+help[i].id+' ><div>';
	
				
		$("#assignmentDivInside").append(listItem);				
				
				
		$("#"+help[i].id).append('<img src="images/iconfont-edit.png" id='+help[i].process+"change"+help[i].id+'  style="float:right;position:relative; top:30px;margin-left:30px;" onClick="changeAssignment(this)"><br />');
				
		$("#"+help[i].id).append('<h4>'+help[i].assignment+'</h4>');
				
		$("#"+help[i].id).append('<h6 style="font-style:italic;">'+help[i].startdate+" to "+help[i].enddate+'</h6>');
				
		if(help[i].process<20||help[i].process==20){
			$("#"+help[i].id).append('<div class="progress"><div class="progress-bar progress-bar-danger progress-bar-striped active" role="progressbar" aria-valuenow="'+help[i].process+'" aria-valuemin="0" aria-valuemax="100" style="min-width: 2em; width: '+help[i].process+'%;">'+help[i].process+'%</div></div>');
		}
		if(help[i].process>20&&(help[i].process<50||help[i].process==50)){
			$("#"+help[i].id).append('<div class="progress"><div class="progress-bar progress-bar-warning progress-bar-striped active" role="progressbar" aria-valuenow="'+help[i].process+'" aria-valuemin="0" aria-valuemax="100" style="min-width: 2em; width: '+help[i].process+'%;">'+help[i].process+'%</div></div>');
		}
		if(help[i].process>50&&(help[i].process<80||help[i].process==80)){
			$("#"+help[i].id).append('<div class="progress"><div class="progress-bar progress-bar-info progress-bar-striped active" role="progressbar" aria-valuenow="'+help[i].process+'" aria-valuemin="0" aria-valuemax="100" style="min-width: 2em; width: '+help[i].process+'%;">'+help[i].process+'%</div></div>');
		}
		else if(help[i].process>80){
			$("#"+help[i].id).append('<div class="progress"><div class="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" aria-valuenow="'+help[i].process+'" aria-valuemin="0" aria-valuemax="100" style="min-width: 2em; width: '+help[i].process+'%;">'+help[i].process+'%</div></div>');
		}
	}

};
var nextPage = function(){
    
	$("#pager1").removeClass("disabled");
    allItem +=10;
    var helpnextPage;
	if((allItem+10>help.length)||(allItem+10==help.length)){
		
		allItem = help.length-10;
		helpnextPage = help.length;
		$("#pager2").addClass("disabled");
	}
	else{
		helpnextPage = allItem+10;
	}
	$("#assignmentDivInside").empty();
	for(var i=allItem;i<helpnextPage;i++)
	{

		var listItem = '<div id='+help[i].id+' ><div>';
				
		$("#assignmentDivInside").append(listItem);				
				
				
		$("#"+help[i].id).append('<img src="images/iconfont-edit.png" id='+help[i].process+"change"+help[i].id+'  style="float:right;position:relative; top:30px;margin-left:30px;" onClick="changeAssignment(this)"><br />');
				
		$("#"+help[i].id).append('<h4>'+help[i].assignment+'</h4>');
				
		$("#"+help[i].id).append('<h6 style="font-style:italic;">'+help[i].startdate+" to "+help[i].enddate+'</h6>');
				
		if(help[i].process<20||help[i].process==20){
			$("#"+help[i].id).append('<div class="progress"><div class="progress-bar progress-bar-danger progress-bar-striped active" role="progressbar" aria-valuenow="'+help[i].process+'" aria-valuemin="0" aria-valuemax="100" style="min-width: 2em; width: '+help[i].process+'%;">'+help[i].process+'%</div></div>');
		}
		if(help[i].process>20&&(help[i].process<50||help[i].process==50)){
			$("#"+help[i].id).append('<div class="progress"><div class="progress-bar progress-bar-warning progress-bar-striped active" role="progressbar" aria-valuenow="'+help[i].process+'" aria-valuemin="0" aria-valuemax="100" style="min-width: 2em; width: '+help[i].process+'%;">'+help[i].process+'%</div></div>');
		}
		if(help[i].process>50&&(help[i].process<80||help[i].process==80)){
			$("#"+help[i].id).append('<div class="progress"><div class="progress-bar progress-bar-info progress-bar-striped active" role="progressbar" aria-valuenow="'+help[i].process+'" aria-valuemin="0" aria-valuemax="100" style="min-width: 2em; width: '+help[i].process+'%;">'+help[i].process+'%</div></div>');
		}
		else if(help[i].process>80){
			$("#"+help[i].id).append('<div class="progress"><div class="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" aria-valuenow="'+help[i].process+'" aria-valuemin="0" aria-valuemax="100" style="min-width: 2em; width: '+help[i].process+'%;">'+help[i].process+'%</div></div>');
		}
	} 
	
};


$(document).ready(function() {
	
	
	if(decodeURI(request("scrollTop"))){
		$('body,html').animate({scrollTop:decodeURI(request("scrollTop"))},500);
	}
	
	$.ajax({
		type:"GET",
		url:"php/getAssignment.php",
		success: function(data){
			
			 var obj = JSON.parse(data);
			 help = obj;
			 
			 allItem = obj.length;
			 
			 
			for(var i=allItem-10;i<obj.length;i++)   /*先显示最新的8个*/
			{

				var listItem = '<div id='+obj[i].id+' ><div>';
				
				$("#assignmentDivInside").append(listItem);				
				
				
				$("#"+obj[i].id).append('<img src="images/iconfont-edit.png" id='+obj[i].process+"change"+obj[i].id+'  style="float:right;position:relative; top:30px;margin-left:30px;" onClick="changeAssignment(this)"><br />');
				
				$("#"+obj[i].id).append('<h4>'+obj[i].assignment+'</h4>');
				
				$("#"+obj[i].id).append('<h6 style="font-style:italic;">'+obj[i].startdate+" to "+obj[i].enddate+'</h6>');
				
				if(obj[i].process<20||obj[i].process==20){
					$("#"+obj[i].id).append('<div class="progress"><div class="progress-bar progress-bar-danger progress-bar-striped active" role="progressbar" aria-valuenow="'+obj[i].process+'" aria-valuemin="0" aria-valuemax="100" style="min-width: 2em; width: '+obj[i].process+'%;">'+obj[i].process+'%</div></div>');
				}
				if(obj[i].process>20&&(obj[i].process<50||obj[i].process==50)){
				$("#"+obj[i].id).append('<div class="progress"><div class="progress-bar progress-bar-warning progress-bar-striped active" role="progressbar" aria-valuenow="'+obj[i].process+'" aria-valuemin="0" aria-valuemax="100" style="min-width: 2em; width: '+obj[i].process+'%;">'+obj[i].process+'%</div></div>');
				}
				if(obj[i].process>50&&(obj[i].process<80||obj[i].process==80)){
				$("#"+obj[i].id).append('<div class="progress"><div class="progress-bar progress-bar-info progress-bar-striped active" role="progressbar" aria-valuenow="'+obj[i].process+'" aria-valuemin="0" aria-valuemax="100" style="min-width: 2em; width: '+obj[i].process+'%;">'+obj[i].process+'%</div></div>');
				}
				else if(obj[i].process>80){
				$("#"+obj[i].id).append('<div class="progress"><div class="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" aria-valuenow="'+obj[i].process+'" aria-valuemin="0" aria-valuemax="100" style="min-width: 2em; width: '+obj[i].process+'%;">'+obj[i].process+'%</div></div>');
				}

			}
			allItem-=10;
			$("#pager2").addClass("disabled");
		},
		error: function(){
			alert("ajax error");
		}
	});

});




function request(paras) {
	var url = location.href;
	//alert(url);
	var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
	var paraObj = { };
	for (i = 0; j = paraString[i]; i++) {
		paraObj[j.substring(0, j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=") + 1, j.length);
	}
	var returnValue = paraObj[paras.toLowerCase()];
	if (typeof (returnValue) == "undefined") {
		return "";
	} else {
		return returnValue;
	}
}




var addAssignment = function(){

	var startdate = $("#startdate").val();
	var enddate = $("#enddate").val();
	var assignment = $("#assignment").val();
	
	$.ajax({
		type:"POST",
		url:"php/addAssignment.php",
		data:{startdate:startdate,enddate:enddate,assignment:assignment},
		success: function(){
			var top = $(window).scrollTop();
			window.location.href = 'assignment.php?scrollTop='+top+'';
		},
		error: function(){
			alert("addAssignment error");
		}
	});
};

var changeAssignment = function(obj){
	var abj = obj;
	var it = obj.id;
	var percent = it.split("change")[0];
	it = it.split("change")[1];
    obj = "#"+it+" h4";
	
	var originalContent = $(obj).text();
	$(obj).replaceWith('<input type="text" id="helper1" class="form-control" style="width:83%" value="'+originalContent+'"><input type="number" class="form-control" id="helper2" style="width:20%; margin-bottom:10px; margin-top:10px;"  value="'+percent+'">');
	
	$(abj).replaceWith('<button class="btn btn-primary"  style="float:right;position:relative; top:40px;margin-left:30px; width:15%;" onClick="sureChange('+it+')">OK!</button><br />');
};
var sureChange = function(obj){


	var assignment = $("#helper1").val();
	var process = $("#helper2").val();

	$.ajax({
		type:"POST",
		url:"php/updateAssignment.php",
		data:{id:obj,assignment:assignment,process:process},
		success: function(){
			var top = $(window).scrollTop();
			window.location.href = 'assignment.php?scrollTop='+top+'';
		},
		error: function(){
			alert("updateAssignment error");
		}
	});
	
};


