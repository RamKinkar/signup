function homeIconClick(img){
	document.getElementById("icon1").style.opacity= "1";
	document.getElementById("icon2").style.opacity= "0.4";
	document.getElementById("icon3").style.opacity= "0.4";
}

function dashboardIconClick(img){
	document.getElementById("icon2").style.opacity= "1";
	document.getElementById("icon1").style.opacity= "0.4";
	document.getElementById("icon3").style.opacity= "0.4";
}

function personIconClick(img){
	document.getElementById("icon1").style.opacity= "0.4";
	document.getElementById("icon2").style.opacity= "0.4";
	document.getElementById("icon3").style.opacity= "1";
}