function imageDelay(){
	var x = document.getElementById("box");
	var y = x.getElementsByClassName("showHidden");
	var i;
	for(i = 0; i < y.length; i++){
		y[i].style.visibility = "visible";
	}
}
setTimeout("imageDelay()", 2000);

document.getElementById("reload").addEventListener("click", function(){
	location.reload();
});