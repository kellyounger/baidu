$.ajax({
		data:{"city":"北京"},
		dataType:"jsonp",
		type:"get",
		url:"http://wthrcdn.etouch.cn/weather_mini",
		async:true,
		success:function(data){
			var wNum=$(".weatherNum,.weatherDetailTemperature p:eq(0)");
		var pos=$(".weatherStatus p:eq(0),.weatherDetailGps span:eq(1)");
		var info=$(".weatherDetailTemperature span");
		var tepm=$(".weatherDdetailSky p");
			var days=$("#weatherForecast p:first-child");
			var wencha=$("#weatherForecast p:last-child");
			
			console.log(data);
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