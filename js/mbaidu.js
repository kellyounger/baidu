function showWeatherDetail(){
	var weather=document.getElementById("weather");
	var wOutline=document.getElementById("weatherOutline");
	 wOutline.onclick=function(){
	 	weather.className="expand";
	 }
}
function closeWeatherDetail(){
	var weather=document.getElementById("weather");
	var wOutline=document.getElementById("weatherOutline");
	var wDetailStatus=document.getElementsByClassName("weatherDetailStatus")[0];
	 wDetailStatus.onclick=function(){
	 	weather.className="";
	 }
}
//function closeWeatherD(){
//	var wOutline=document.getElementById("weatherOutline");
//	var wDetail=document.getElementsByClassName("weatherDetail")[0];
//	var closePane=document.getElementById("closeWeatherDetail");
//	closePane.onclick=function(){
//		wDetail.style.display="none";
//	 	wOutline.style.display="block";
//	}
//}
//function closeWeatherD(){
//	closeWeatherDetail();
//}
var click="1";
function more(){
	if(click=="1"){
		showNav();
		click="2";
	}else if(click=="2"){
		hideNav();
		click="1";
	}
}
function showNav(){
	var navs=document.getElementById("navs");
	var fDiv=navs.getElementsByTagName("div")[0];
	var sDiv=navs.getElementsByTagName("div")[1];
	var navsA=fDiv.getElementsByTagName("a")[5];
	var navsAi=navsA.getElementsByTagName("i")[0];
		this.className="iconfont icon-xiangxia";
		sDiv.style.display="block";
}
function hideNav(){
	var navs=document.getElementById("navs");
	var fDiv=navs.getElementsByTagName("div")[0];
	var sDiv=navs.getElementsByTagName("div")[1];
	var navsA=fDiv.getElementsByTagName("a")[5];
	var navsAi=navsA.getElementsByTagName("i")[0];
	 this.className="iconfont icon-iconfont40";
	 sDiv.style.display="none";
}
//$("navs div:eq(0) a:eq(5) i").toggle(function(){
//	$(this).addClass("icon-0xiangxia");
//	$("navs div:eq(1)").addClass("expand");
//})

	
	var click="1";
function editTitle(){
	if(click=="1"){
		showEditTitle();
		click="2";
	}else if(click=="2"){
		hideEditTitle();
		click="1";
	}
}
	function showEditTitle(){
	var nav=document.getElementById("nav");
	var norT=nav.getElementsByClassName("normalTitle")[0];
	var nortA=norT.getElementsByTagName("a")[0];
	var btn=nortA.getElementsByTagName("i")[0];
	var pop=nortA.getElementsByTagName("ul")[0];
			pop.style.display="block";		
	}
	function hideEditTitle(){
		var nav=document.getElementById("nav");
	var norT=nav.getElementsByClassName("normalTitle")[0];
	var nortA=norT.getElementsByTagName("a")[0];
	var btn=nortA.getElementsByTagName("i")[0];
	var pop=nortA.getElementsByTagName("ul")[0];
		pop.style.display="none";	
	}
//	document.onclick=function(){
//		hideEditTitle();
//	}

window.onload=function(){
	showWeatherDetail();
	closeWeatherDetail();
	showEditCon();
}
function showEditCon(){
	var pop=document.getElementsByClassName("pop")[0];
	var popLi=pop.getElementsByTagName("li")[0];
	var popLiT=pop.getElementsByTagName("li")[2];
	var nav=document.getElementById("nav");
	var back=document.getElementsByClassName("editTitle")[0].getElementsByClassName("fa")[0];
	var closeBtn=nav.getElementsByClassName("plusCon")[0].getElementsByTagName("i");
	var len=closeBtn.length;
	console.log(len)
	    popLi.onclick=function(){
	    	nav.className="";
	    	nav.className="plusItem edit";
	    	pop.style.display="none";
	    }
	    back.onclick=function(){
	    	nav.className="plusItem";
	    }
	    popLiT.onclick=function(){
	    	nav.style.display="none";
	    }
	    for (var i in closeBtn){
	    	closeBtn[i].onclick=function(){
	    		this.parentNode.style.display="none";
	    	}
	    }
};

var click="1";
function toggle(){
	if(click=="1"){
		toggleUp();
		click="2";
	}else if(click=="2"){
		toggleDown();
		click="1";
	}
}
function toggleUp(){
	var toggleBtn=document.getElementsByClassName("toggle")[0];
	var toggleSpan=toggleBtn.getElementsByTagName("span")[0].getElementsByTagName("span")[0];
	var toggleI=toggleBtn.getElementsByTagName("i")[0];
	console.log(toggleI)
	var plusCon=document.getElementById("lifeService").getElementsByClassName("plusCon")[0];
	console.log(plusCon)
		plusCon.className="plusCon expand";
		toggleI.style.webkitTransform="rotateX(180deg)";
		toggleSpan.innerHTML="收起";

}
function toggleDown(){
	var toggleBtn=document.getElementsByClassName("toggle")[0];
	var toggleSpan=toggleBtn.getElementsByTagName("span")[0].getElementsByTagName("span")[0];
	var toggleI=toggleBtn.getElementsByTagName("i")[0];
	console.log(toggleI)
	var plusCon=document.getElementById("lifeService").getElementsByClassName("plusCon")[0];
	console.log(plusCon)
		plusCon.className="plusCon";
		toggleI.style.webkitTransform="rotateX(0)";
		toggleSpan.innerHTML="展示全部";

}
$.ajax({
		data:"",
		type:"get",
		url:"json/test.json",
		async:true,
		success:function(data){
			var flag;
		    var arr = data.news_hot;
		    console.log(arr);
		    var num = arr.length;
//		    var imgLable=$("#timeHotC p span")
		    var add = 0;
		    var dataA = $("#timeHotC p a")	
		    for (var i = 0; i < 6; i++) {
		        $(dataA[i]).text(arr[i].title);
//		        console.log(arr[i].valueOf().title);
		        flag = 6;
		        if((arr[i].valueOf().hot)==1){
		        	dataA.prepend("<img src='img/hot.png' />");
		        }
		        
		    }
		    function putData(flag) {
		        for (var i = 0; i < 6; i++) {
		            $(dataA[i]).text(arr[i + flag].title);
		            if (i == 5) {
		                flag = flag + i + 1
		            }
		            if((arr[i].hot)==1){
		        	dataA.prepend("<img src='img/hot.png' width='100%' height='100%'/>");
		        }
		        }
		        return flag;
		    }
		    $("#changeAnother").click(change);
		    function change() {
		        // console.log(flag);
		        if (flag == (add + flag) && flag != num) {
		            flag=putData(flag)
		        } else {
		            flag=putData(0);
		        }
		    }
		
				}
	});
	
$.ajax({
	type:"get",
	url:"http://wthrcdn.etouch.cn/weather_mini",
	async:true,
	data: {"city":"北京"},
	dataType: "jsonp",
	success:function(data){
		var wNum=$(".weatherNum,.weatherDetailTemperature p:eq(0)");
		var pos=$(".weatherStatus p:eq(0),.weatherDetailGps span:eq(1)");
		var info=$(".weatherDetailTemperature span");
		var tepm=$(".weatherDdetailSky p");
		var days=$("#weatherForecast p:first-child");
		var wencha=$("#weatherForecast p:last-child");
		console.log(data.data);
		wNum.text(data.data.wendu);
		pos.text(data.data.city);
		info.text(data.data.forecast[0].type+" "+data.data.forecast[0].fengli);
		tepm.text(data.data.forecast[0].low);
		for(i=0;i<4;i++){
					$(days[i]).text(data.data.forecast[i].date.slice(-3));
					$(wencha[i]).text(data.data.forecast[i].high.slice(-3,-1)+"°/"+data.data.forecast[i].low.slice(-3,-1)+"°");
					$(days[0]).text("今天");
					$(days[1]).text("明天");
				}
	}
});