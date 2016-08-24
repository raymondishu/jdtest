window.onload=function() {
	var search=document.getElementsByClassName("header")[0];
	var banner=document.getElementsByClassName("banner")[0];
	var height=banner.offsetHeight;
	window.onscroll=function(){
		var top=document.body.scrollTop;
		if(top>height){
			search.style.background="rgba(201,21,35,0.85)";
		}else{
			var op=top/height*0.85;
			search.style.background="rgba(201,21,35,"+op+")";
		}
	}
}
var secindkill=function(){
	var parentTime=document.getElementsByClassName('sk_time')[0];
	var timeKist=parentTime.getElementsByClassName('num');
	//console.log(timeKist.length);
	var times=4*60*60;
	setInterval(function(){
		times=times-1;
		var h=Math.floor(times/(60*60));
		var m=Math.floor((times-h*3600)/(60));
		var s=times%60;
		//console.log(h+" "+m+" "+s);
		timeKist[0].innerHTML=h>10?Math.floor(h/10):0;
		timeKist[1].innerHTML=h%10;
		timeKist[2].innerHTML=m>10?Math.floor(m/10):0;
		timeKist[3].innerHTML=m%10;
		timeKist[4].innerHTML=s>10?Math.floor(s/10):0;
		timeKist[5].innerHTML=s%10;
	}, 1000);
}
secindkill();