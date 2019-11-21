var oBc = document.getElementById('na-vc');
var sCr = document.documentElement.scrollTop;
window.onscroll = function(){
	if(sCr=true){
		oBc.style.opacity = 0.5;
		console.log(sCr)
	}else{
		oBc.style.opacity = 1;
	}
}
