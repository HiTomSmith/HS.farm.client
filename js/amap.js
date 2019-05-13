var gaode={
	
	regeo:function(lnglat,cb){
		
		var url="http://restapi.amap.com/v3/geocode/regeo?output=json&key=fd3854001538c90ce26f05b627b18c96&location="+ lnglat.lng +","+lnglat.lat+"&poitype=&radius=&extensions=base&batch=false&roadlevel=0";
		mui.ajax(url, {
			data: {},
			dataType: 'json', //	服务器返回json格式数据
			timeout: 30000, //	超时时间设置为10秒；
			type: "GET", //	HTTP请求类型
			success: function(res) {
				
				cb(res);
				
			},
			error: function(xhr, type, err) {
				
				//	wnd.toast("网络错误：" + type);
				if(option.error) {
					console.log(wnd.his_host + option.api)
					option.error(type);
				}
			}
		});
		
	}
	
};
