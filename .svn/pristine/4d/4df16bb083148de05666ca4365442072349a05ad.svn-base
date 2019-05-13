(function(_){
	var customerList = null;
	var pesticideList = null;

	var dataItem = {
		CropTypes : {}
	};
	_.dataUnit = {
		loadData : function(cb){
			var queryData = {};
			var loadCount = 1;
			var loaded = 0;
			function onLoaded(){
				if(loaded >= loadCount){
					_.storage('dataItem', dataItem);
					if(cb)	cb(dataItem);
				}
			}
			_.dataUnit.loadTypes('CropTypes', function(data){
				loaded++;
				onLoaded();
			})
		
		},
		loadTypes : function(enCode, cb){
			var option = {
					api: '/dataItem/list',
					data: {
						enCode : enCode
					},
					success: function(data) {
						//获得结果
						dataItem[enCode] = data.result;
						cb(data.result)
					},
					error: function(data) {
						cb(data);
					}
			}
			console.log(JSON.stringify(option.data));
			_.post(option);
		},
		getTypes : function(enCode){
			dataItem = _.storage_json('dataItem');
			if(!enCode)return dataItem;
			return dataItem[enCode];
		},
		getCustomerList : function(name, mobile, cb){
			var queryData = {};
			if(name)queryData['FullName'] = name;
			if(mobile)queryData['Mobile'] = mobile;
			var option = {
					api: '/customerManage/customerList',
					data: {
						"page": 1,
						"rows": 100,
						"sidx": "CustomerId",
						"sord": "asc",
						"queryData": JSON.stringify(queryData)
					},
					success: function(data) {
						//获得结果
						console.log(JSON.stringify(data.result.rows));
						customerList = data.result.rows;
						cb(customerList);
					},
					error: function(data) {
						cb(customerList);
					}
			}
			console.log(JSON.stringify(option.data));
			_.post(option);
		},
		getPesticideList:function(cb){
			var option = {
				api:'/goods/list',
				data:{Category:"药剂"},
				success: function(data) {
					//获得结果
					pesticideList = data.result;
					cb(pesticideList);
				},
				error: function(data) {
					cb("无法取得药剂信息");
				}
			}
			_.post(option);
		},
		getPriceList:function(cb) {
			var option = {
				api: '/price/list',
				data: {
					"page": 1,
					"rows": 20,
					"sidx": "OrganizeId",
					"sord": "asc",
					"queryData": JSON.stringify({})
				},
				success: function(data) {
					//获得结果
					prices = data.result.rows;
					cb(prices);
				},
				error: function(data) {
					cb(prices);
					app.toast("获取计算单价失败");
				}
			}
			_.post(option);
		}
	}
})(window.app)

