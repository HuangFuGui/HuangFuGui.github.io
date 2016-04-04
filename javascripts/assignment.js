// JavaScript Document


$(function()
{
	
	$.ajax({
		type:"GET",
		url:"php/getAssignment.php",
		success: function(data){
			var obj = JSON.parse(data);
			alert(obj);
		},
		error: function(){
			alert("ajax error");
		}
	});
});