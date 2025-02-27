var UseIdGetName = {
	//userid获取name
	getUserName: function(userid, cb) {
		var userName = "";
		var option = {
			api: '/BaseManage/User/GetFormJson',
			data: {
				keyValue: userid
			},
			success: function(data) {
				var result = JSON.parse(data);
				if(result){
					userName = result['RealName'];
				};
				cb(userName);
			},
			error: function(data) {
				app.toast('失败')
			}
		};
		app.post3_2(option);
	},
	//UserId 获取用户信息
	getUsers: function(userid, cb) {
		var userName = "";
		var option = {
			api: '/BaseManage/User/GetFormJson',
			data: {
				keyValue: userid
			},
			success: function(data) {
				var result = JSON.parse(data);
				if(result){
					userName = result['RealName'];
				};
				cb(result);
			},
			error: function(data) {
				app.toast('失败')
			}
		};
		app.post3_2(option);
	},
	//分包主键取任务名称
	getTaskDistribution: function(DistributionId, cb) {
		var option = {
			api: '/XhxManage/XHX_TaskDistribution/GetFormJson',
			data: {
				keyValue: DistributionId
			},
			success: function(data) {
				var result = JSON.parse(data);
				userName = result['TaskName'];
				cb(userName);
			},
			error: function(data) {
				app.toast('失败')
			}
		};
		app.post3_2(option);
	},
	///获取分包任务
	getTaskDistributionTask:function(entity,cb){
		var option = {
			api: '/XhxManage/XHX_TaskDistribution/GetPageListJson',
			data:entity,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('失败')
			}
		};
		app.post3_2(option);
	},
	//获取分包任务
	getTaskTask:function(entity,cb){
		var option = {
			api: '/XhxManage/XHX_TaskDistribution/GetListJson',
			data:entity,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('失败')
			}
		};
		app.post3_2(option);
	},
	//获取分包任务 实体 
	getTaskTaskEntity:function(entity,cb){
		var option = {
			api: '/XhxManage/XHX_TaskDistribution/GetFormJson',
			data:entity,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('失败')
			}
		};
		app.post3_2(option);
	},
	//获取作业量表
	getTaskWorker:function(entity,cb){
		var option = {
			api: '/XhxManage/XHX_WorkNumber/GetListJson',
			data:entity,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('失败')
			}
		};
		app.post3_2(option);
	},
	
	//服务站获取任务申请记录
	SStaskApply:function(entity,cb){
		var option = {
			api: '/XhxManage/XHX_TaskSeeRecord/GetPageListJson',
			data:entity,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('失败')
			}
		};
		app.post3_2(option);
	},
	//获取App所有用户
	getBaseMange:function(entity,cb){
		var option = {
			api: '/BaseManage/User/GetListByOrganizeId',
			data:entity,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('失败')
			}
		};
		app.post3_2(option);
	},

	
	

};

var UseIdGetList = {
	//获取团队列表
	getTeamLists:function(entity, cb){
		var option = {
			api: '/XhxManage/XHX_Team/GetPageListJson',
			data:entity,
			success: function(data) {
				var result = JSON.parse(data);
				var rows = result['rows'];
				cb(result);
			},
			error: function(data) {
				app.toast('失败')
			}
		};
		app.post3_2(option);
	},
	//获取团队主键
	getTeamId: function(userid, cb) {
		var option = {
			api: '/XhxManage/XHX_Team/GetPageListJson',
			data: {
				"page": 1,
				"rows": 100,
				"sidx": "UserId",
				"sord": "asc",
				"queryJson": JSON.stringify({
					UserId:userid
				})
			},
			success: function(data) {
				var result = JSON.parse(data);
				var rows = result['rows'];
				cb(rows[0]['TeamId']);
			},
			error: function(data) {
				app.toast('失败')
			}
		};
		app.post3_2(option);
	},
	//获取团队成员列表，
	getTeamList: function(_teamId, cb) {
		var option = {
			api: '/XhxManage/XHX_Team/GetDetailsJson',
			data: {
				keyValue: _teamId
			},
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('失败')
			}
		};
		app.post3_2(option);
	},
	///分页获取任务执行者数据表列表
	getTaskExecute: function(_teamId, cb) {
		var option = {
			api: '/XhxManage/XHX_TaskExecute/GetPageListJson',
			data: {
				"page": 1,
				"rows": 100,
				"sidx": "TeamId",
				"sord": "desc",
				"queryJson": JSON.stringify({
					TeamId: _teamId,
				})
			},
			success: function(data) {
				var result = JSON.parse(data);
				var rows = result['rows'];
				cb(rows);
			},
			error: function(data) {

			},
		};
		app.post3_2(option);
	},
	//列表获取任务执行者
	ListgetTaskExecute: function(entity, cb) { 
		var option = {
			api: '/XhxManage/XHX_TaskExecute/GetListJson',
			data:entity,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {

			},
		};
		app.post3_2(option);
	},
	//获取任务执行者试图 GetExecuteWorkNumber
	getTaskExecuteView: function(sendData, cb) {
		var option = {
			api: '/XhxManage/XHX_Users/GetExecuteWorkNumber',
			data: {
				queryJson: JSON.stringify(sendData)
			},
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {

			},
		};
		app.post3_2(option);
	},
	//获取任务执行者列表
	GetTaskExecute: function(sendData, cb) { 
		var option = {
			api: '/XhxManage/XHX_Users/GetTaskExecute',
			data: sendData,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {

			},
		};
		app.post3_2(option);
	},

	//获取团队名称
	getTeamName: function(_teamId, cb) {
		var option = {
			api: '/XhxManage/XHX_Team/GetFormJson',
			data: {
				keyValue: _teamId
			},
			success: function(data) {
				var result = JSON.parse(data);
				var entity = result['entity']['TeamName'];
				cb(entity);
			},
			error: function(data) {

			},
		};
		app.post3_2(option);
	},
	
	//获取创建或者领取的任务
	getMyTaskList:function(enity,cb){
		var option = {
			api: '/XhxManage/XHX_Team/GetWorkNumber_Team',
			data:enity,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {

			},
		};
		app.post3_2(option);
	},
	//获取用户使用的设备
	getUserEquipment: function(entity, cb) {
		plus.nativeUI.showWaiting();
		var option = {
			api: '/XhxManage/XHX_Users/View_User_Equipments',
			data: entity,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
				plus.nativeUI.closeWaiting();
			},
			error: function() {
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_2(option);
	},
	//、获取用户所属者设备
	getTheEquipment: function(entity, cb) {
		var option = {
			api: '/XhxManage/XHX_Users/View_User_Equipments',
			data:entity,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
			},
		};
		app.post3_2(option);
	},
	//查找XHX库存设备
	getEquipmentStock:function(entity, cb){
		var option = {
			api: '/XhxManage/XHX_Equipment/GetListJson',
			data:entity,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				
			},
		};
		app.post3_2(option);
	},
	//查找XHX载体
	getXHX_CarrierStock:function(entity, cb){
		var option = {
			api: '/XhxManage/XHX_Carrier/GetListJson',
			data:entity,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				
			},
		};
		app.post3_2(option);
	},
	//用用户主键查找团队成员信息
	getUserIdTeamPreson:function(entiy, cb){
		var option = {
			api: '/XhxManage/XHX_TeamPerson/GetListJson',
			data:entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function() {},
		};
		app.post3_2(option);
	},
	//获取当前用户团队下所有的队员
	getUserTeamTeamPreson: function(entiy, cb) {
		var option = {
			api: '/XhxManage/XHX_Users/TeamUserMobileService',
			data: {
				queryJson: JSON.stringify(entiy)
			},
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function() {},
		};
		app.post3_2(option);
	},
	
	//获取当前用户团队下所有的队员
	GetTeamWork: function(entiy, cb) {
		var option = {
			api: '/XhxManage/XHX_Users/GetTeamWork',
			data: entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function() {},
		};
		app.post3_2(option);
	},
	
	//获取是否有人派送设备
	getIsSendUav:function(entiy, cb){
		var option = {
			api: '/XhxManage/XHX_WorkUsers/GetWorkUserName',
			data:entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function() {},
		};
		app.post3_2(option);
	},
	//获取任务列表
	GetTeamNum:function(entiy, cb){
		var option = {
			api: '/XhxManage/XHX_Users/GetTeamNum',
			data:entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result); 
			},
			error: function() {},
		};
		app.post3_2(option);
	}, 
	//获取已完成任务列表
	GetFinshTask:function(entiy, cb){
		var option = {
			api: '/XhxManage/XHX_Users/GetFinshTask',
			data:entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result); 
			},
			error: function() {},
		};
		app.post3_2(option);
	}, 
	//获取任务列表
	GetTask:function(entiy, cb){
		var option = {
			api: '/XhxManage/XHX_Users/GetTask',
			data:entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result); 
			},
			error: function() {},
		};
		app.post3_2(option);
	},
	//团队战绩，个人战绩
	GetRecord:function(entiy,cb){ 
		var option = {
			api: '/XhxManage/XHX_Users/GetTeamUserNum',
			data:entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function() {},
		};
		app.post3_2(option);
	},
	//获取地块信息
	GetFieldId:function(entiy,cb){
		var option = {
			api: '/XhxManage/XHX_Field/GetListJson',
			data:entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function() {},
		};
		app.post3_2(option);
	},
	//获取地块列表
	GetMassif:function(entiy,cb){
		var option = {
			api: '/XhxManage/XHX_Field/GetListJson',
			data:entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function() {},
		};
		app.post3_2(option);
	},
	//获取收货地址列表
	GetAddress:function(entiy,cb){
		var option = {
			api: '/BaseManage/UserInfoAddressAdmin/GetPageListJson',
			data:entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function() {},
		};
		app.post3_4(option);
	},
	//获取申请记录
	GetTaskSeeRecord:function(entiy,cb){
		var option = {
			api: '/XhxManage/XHX_TaskSeeRecord/GetListJson',
			data:entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function() {},
		};
		app.post3_2(option);
	},
	//获取用户所有设备
	getUserDevice:function(entity, cb){
		var option = {
			api: '/XhxManage/XHX_Carrier/GetUserEquipment',
			data:entity,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				
			},
		};
		app.post3_2(option);
	},
	//添加设备
	addEquipment:function(entity, cb){
		var option = {
			api: '/XhxManage/XHX_Carrier/AddLeaseEquipment',
			data:entity,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				
			},
		};
		app.post3_1(option);
	},
};

//获取作物种类 // 药剂种类
var MedicamentCrops = {
	//作物种类
	Crop: function(cb) {
		var option = {
			api: '/SystemManage/DataItemDetail/GetDataItemListJson',
			data: {
				"EnCode": "CropTypes"
			},
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('获取作物种类失败!');
			}
		};
		app.post3_2(option);
	},
	//药剂种类
	Medicament: function(cb) {
		var option = {
			api: '/SystemManage/DataItemDetail/GetDataItemListJson',
			data: {
				"EnCode": "medicament"
			},
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('获取作物种类失败!');
			}
		};
		app.post3_2(option);
	},
	//计量单位
	MeasureUnit: function(cb) {
		var option = {
			api: '/SystemManage/DataItemDetail/GetDataItemListJson',
			data: {
				"EnCode": "GoodsUnit"
			},
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('获取计量单位失败!');
			}
		};
		app.post3_2(option);
	},
	//品牌
	GoodBrand: function(cb) {
		var option = {
			api: '/AccountCenter/GoodsBrandName/GetPageListJson',
			data: {
				"EnCode": "GoodsType"
			},
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('获取品牌失败!');
			}
		};
		app.post3_2(option);
	},
	//包装类型
	packageType: function(cb) {
		var option = {
			api: '/SystemManage/DataItemDetail/GetDataItemListJson',
			data: {
				"EnCode": "PackType"
			},
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('获取包装类型失败!');
			}
		};
		app.post3_2(option);
	},
	//剂型
	DrugType: function(cb) {
		var option = {
			api: '/SystemManage/DataItemDetail/GetDataItemListJson',
			data: {
				"EnCode": "AgentiaType"
			},
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('获取剂型失败!');
			}
		};
		app.post3_2(option);
	},
	//使用作物
	UsePlant: function(cb) {
		var option = {
			api: '/SystemManage/DataItemDetail/GetDataItemListJson',
			data: {
				"EnCode": "Crop"
			},
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('获取使用作物失败!');
			}
		};
		app.post3_2(option);
	},
	//天气状况
	getWeather: function(cb) {
		var option = {
			api: '/SystemManage/DataItemDetail/GetDataItemListJson',
			data: {
				"EnCode": "Weather"
			},
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('获取天气状况失败!');
			}
		};
		app.post3_4(option);
	},
	//飞行模式
	getPlanMode: function(cb) {
		var option = {
			api: '/SystemManage/DataItemDetail/GetDataItemListJson',
			data: {
				"EnCode": "PlanMode"
			},
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('获取飞行模式失败!');
			}
		};
		app.post3_4(option);
	},
	//飞行姿态
	getPlanAttitude: function(cb) {
		var option = {
			api: '/SystemManage/DataItemDetail/GetDataItemListJson',
			data: {
				"EnCode": "PlayAttitude"
			},
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('获取飞行姿态失败!');
			}
		};
		app.post3_4(option);
	},
	//落地姿态
	getDropAttitude: function(cb) {
		var option = {
			api: '/SystemManage/DataItemDetail/GetDataItemListJson',
			data: {
				"EnCode": "DropAttitude"
			},
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('获取落地姿态失败!');
			}
		};
		app.post3_4(option);
	},
};

//获取租赁信息
var getLeaseInterface = {
	//获取续租情况
	getRenew:function(entity,cb){
		var option = {
			api: '/PlanManage/LeaseTableRenew/GetListJson',
			data:entity,
			success: function(data) {
				var result = JSON.parse(data);
				console.log(result)
				cb(result);
			},
			error: function(data) {
				
			}
		};
		app.post3_4(option);
	},
	
	//获取续租列表
	getRenewList:function(entity,cb){
		var option = {
			api: '/PlanManage/LeaseTableRenew/GetListJson',
			data:entity,
			success: function(data) {
				var result = JSON.parse(data);
				console.log(result)
				cb(result);
			},
			error: function(data) {
				
			}
		};
		app.post3_4(option);
	},
	//删除续租订单
	delRenewOrder:function(entity,cb){
		var option = {
			api: '/PlanManage/LeaseTableRenew/RemoveForm',
			data:entity,
			success: function(data) {
				var result = JSON.parse(data);
				console.log(result)
				cb(result);
			},
			error: function(data) {
				
			}
		};
		app.post3_3(option);
	},
	
	
	//获取套餐主表
	getLeaseMain:function(cb){
		var option = {
			api: '/BillingManage/Billing_PriceList/spliList',
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				
			}
		};
		app.post3_4(option);
	},
	//获取套餐从表
	getLeaseChild:function(cb){
		var option = {
			api: '/BillingManage/Billing_Group/GetDetailsJson',
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				
			}
		};
		app.post3_4(option);
	},
	//获取飞机库存
	getUavStock:function(entity,cb){
		var option = {
			api: '/StockManage/UavStock/GetPageListJson',
			data:entity,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				
			}
		};
		app.post3_4(option);
	},
	//获取销售公司
	getOrganize:function(entity,cb){
		var option = {
			api: '/BaseManage/Organize/GetOrganize',
			data:entity,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				
			}
		};
		app.post3_4(option);
	},
	//分页获取租赁单列表
	getLease:function(entity,cb){
		var option = {
			api: '/PlanManage/LeaseTable/GetPageListJson',
			data:entity,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				
			}
		};
		app.post3_4(option);
	},
	//获取入库单列表
	getInSotck:function(entity,cb){
		var option = {
			api: '/StockManage/UavStockIn/GetPageListJson',
			data:entity,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				
			}
		};
		app.post3_4(option);
	},
	//获取入库单列表从表列表
	getInSotckDetails:function(entity,cb){
		var option = {
			api: '/StockManage/UavStockIn/GetDetailsJson',
			data:entity,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				
			}
		};
		app.post3_4(option);
	},
	//获取无人机出库单列表
	getOutStock:function(entity,cb){
		var option = {
			api: '/StockManage/UavStockOut/GetPageListJson',
			data:entity,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				
			}
		};
		app.post3_4(option);
	},
	//获取无人机出库从表列表
	getOutStockDetails:function(entity,cb){
		var option = {
			api: '/StockManage/UavStockOut/GetDetailsJson',
			data:entity,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				
			}
		};
		app.post3_4(option);
	},
		//获取无人机入库从表列表
	getInStockDetails:function(entity,cb){
		var option = {
			api: '/StockManage/UavStockIn/GetDetailsJson',
			data:entity,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				
			}
		};
		app.post3_4(option);
	},
	//物流单
	getExpress:function(entity,cb){
		var option = {
			api: '/PlanManage/Express/GetPageListJson',
			data:entity,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				
			}
		};
		app.post3_4(option);
	},
	//获取无人机检验单列表
	getUavSend:function(entity,cb){
		var option = {
			api: '/StockManage/Acceptance/GetPageListJson',
			data:entity,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				
			}
		};
		app.post3_4(option);
	},
	//获取维修单主表
	getRepairMain:function(entity,cb){
		var option = {
			api: '/TaskManage/Repair/GetPageListJson',
			data:entity,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				
			}
		};
		app.post3_4(option);
	},
	//获取维修单从表
	getRepairFrom:function(entity,cb){
		var option = {
			api: '/TaskManage/Repair/GetDetailsJson',
			data:entity,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				
			}
		};
		app.post3_4(option);
	},
	//获取配件名称
	getPartsName:function(entity,cb){
		var option = {
			api: '/SystemManage/DataItemDetail/GetDataItemListJson',
			data:entity,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				
			}
		};
		app.post3_4(option);
	},
	//配件付费类型
	getPartsType:function(entity,cb){
		var option = {
			api: '/SystemManage/DataItemDetail/GetDataItemListJson',
			data:entity,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				
			}
		};
		app.post3_4(option);
	},
	//获取库存配件列表
	getPartsList:function(entity,cb){
		var option = {
			api: '/StockManage/PartsStock/GetListJson',
			data:entity,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				
			}
		};
		app.post3_4(option);
	},
	//获取商品列表
	getCommodity:function(entity,cb){
		var option = {
			api: '/AccountCenter/Commodity/GetPageListJson',
			data:entity,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				
			}
		};
		app.post3_4(option);
	},	
	//获取企业单条数据 /BaseManage/Organize/GetFormJson
	getEnterprise:function(entity,cb){
		var option = {
			api: '/BaseManage/Organize/GetFormJson',
			data:entity,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				
			}
		};
		app.post3_4(option);
	},
	//获取企业列表 /BaseManage/Organize/GetTreeListJson
	getEnterpriseList:function(entity,cb){
		var option = {
			api: '/BaseManage/Organize/GetOrganize',
			data:entity,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				var result = JSON.parse(data);
				cb(result);
			}
		};
		app.post3_4(option);
	},
	//获取在租赁中的无人机列表
	// OrganizeId：用户所属组织机构id
	getLeaseingRecord:function(entity,cb){
		var option = {
			api: '/PlanManage/LeaseTable/UserLeaseUav',
			data:entity,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				
			}
		};
		app.post3_4(option);
	},
	
	// 获取用户租赁单数量状态统计
	getUserLeaseUavNumber:function(entity,cb){
		var option = {
			api: '/LeaseTable/UserLeaseUavNumber',
			data:entity,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				
			}
		};
		app.post3_4(option);
	},
	

	/*token登录认证*/
	loginAuthentication:function(entity,cb){
		var option = {
			api: '/Login/SynchronousUI',
			data:entity,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				
			}
		};
		app.post3_3(option);
	},
	/*获取续租时长费用*/
	getRenewFee:function(cb){
		var option = {
			api: '/BillingManage/Billing_Group/GetDetailXuZu',
//			data:entity,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				
			}
		};
		app.post3_4(option);
	},
	//
	
	
};

//设备
var EquipmentObj = {
	//获取设备信息LIST
	EquipmentList:function(enity,cb){
		var option = {
			api:'/XhxManage/XHX_Users/GetCompanyOwner',
			data:enity,
			success:function(data){
				var result = JSON.parse(data);
				cb(result);
			},
			error:function(data){
				
			},
		};
		app.post3_2(option);
	},
	//获取设备所属者
	XHX_Owner:function(enity,cb){
		var option = {
			api:'/XhxManage/XHX_Owner/GetListJson',
			data:enity,
			success:function(data){
				var result = JSON.parse(data);
				cb(result);
			},
			error:function(data){
				
			},
		};
		app.post3_2(option);
	},
};

//绘制轨迹
var DrawObj = {
	//开始绘制
	StartDraw:function(enity,cb){
		var option = {
			api:'/XhxManage/XHX_GpsRecord/Getsh',
			data:enity,
			success:function(data){
				var result = JSON.parse(data);
				cb(result);
			},
			error:function(data){
				
			},
		};
		app.post3_2(option);
	},
};

//获取当前版本信息
var Edition = {
	Update:function(cb){
		var option = {
			api:'/Login/GetNewVersions',
			success:function(data){
				cb(data);
			},
			error:function(data){
				cb(data);
			},
		};
		app.post3_2(option);
	}
};

//后台管理接口
var Backstage = {
	//财务充值列表
	FinanceList:function(enity,cb){
		var option = {
			api:'/BillingManage/Billing_AccountDetails/GetPageListJson',
			data:enity,
			success:function(data){
				cb(data);
			},
			error:function(data){
				cb(data);
			},
		};
		app.post3_4(option);
	},
};

//		$.ajax({
//			type:"get",
//			url:"http://47.92.128.46:8081/VU/GetPageListJson",
//			data:{
//				"page": 1,
//				"rows": 1,
//				"sidx": "CreatTime",
//				"sord": "desc",
//				"queryJson": JSON.stringify({
//					
//				})
//			},
//			async:true,
//			success:function(data){
//				cb(data);
//			},
//			error:function(data){
//				cb(data);
//			}
//		});
//	

//药剂，厂家。品牌，电池等接口
var Orders = {
	//品牌列表
	OrdersBrand:function(enity,cb){
		var option = {
			api:'/AccountCenter/GoodsBrandName/GetPageListJson',
			data:enity,
			success:function(data){
				var result = JSON.parse(data);
				cb(result);
			},
			error:function(data){
				
			},
		};
		app.post3_4(option);
	},
	//用户优惠卷折扣，福利比等deng
	WelfareB:function(enity,cb){
		console.log(JSON.stringify(enity))
		var option = {
			api:'/AccountCenter/UserWelfare/GetUserWelfare',
			data:enity,
			success:function(data){
				var result = JSON.parse(data);
				cb(result);
			},
			error:function(data){
				cb(data);
			},
		};
		app.post3_4(option);
	},
	//订单列表
	OrderLists:function(enity,cb){
		var option = {
			api:'/AccountCenter/GoodOrder/GetPageListJson',
			data:enity,
			success:function(data){
				var result = JSON.parse(data);
				cb(result);
			},
			error:function(data){
				cb(data);
			},
		};
		app.post3_4(option);
	},	
	//获取订单类型
	OrderType:function(enity,cb){
		var option = {
			api:'/AccountCenter/OrderType/GetListJson',
			data:enity,
			success:function(data){
				var result = JSON.parse(data);
				cb(result);
			},
			error:function(data){
				cb(data);
			},
		};
		app.post3_4(option);
	},
	//获取商品列表
	CommodityList:function(enity,cb){
		var option = {
			api:'/AccountCenter/Commodity/GetListJson',
			data:enity,
			success:function(data){
				var result = JSON.parse(data);
				cb(result);
			},
			error:function(data){
				cb(data);
			},
		};
		app.post3_4(option);
	},
	//获取订单消费明细
	OrderDetail:function(enity,cb){
		var option = {
			api:'/AccountCenter/OrderDeductions/GetPageListJson',
			data:enity,
			success:function(data){
				var result = JSON.parse(data);
				cb(result);
			},
			error:function(data){
				cb(data);
			},
		};
		app.post3_4(option);
	},
	//获取订单消费明细
	//enity={GoodsOrderId=?}
	OrderDetailList:function(enity,cb){
		var option = {
			api:'/AccountCenter/OrderDeductions/GetListJson',
			data:enity,
			success:function(data){
				var result = JSON.parse(data);
				cb(result);
			},
			error:function(data){
				cb(data);
			},
		};
		app.post3_4(option);
	},
	
	OrderDetailListTo:function(enity,cb){
		var option = {
			api:'/AccountCenter/OrderDeductions/GetDetailsJson',
			data:enity,
			success:function(data){
				var result = JSON.parse(data);
				cb(result);
			},
			error:function(data){
				cb(data);
			},
		};
		app.post3_4(option);
	},
	//获取用户订单从表明细
	GetOrderDetails:function(enity,cb){
		var option = {
			api:'/AccountCenter/GoodOrder/GetDetailsJson',
			data:enity,
			success:function(data){
				var result = JSON.parse(data);
				cb(result);
			},
			error:function(data){
				cb(data);
			},
		};
		app.post3_4(option);
	},
	//获取计量单位
	getMeasurementLists:function(enity,cb){
		var option = {
			api:'/SystemManage/DataItemDetail/GetDataItemListJson',
			data:enity,
			success:function(data){
				var result = JSON.parse(data);
				cb(result);
			},
			error:function(data){
				cb(data);
			},
		};
		app.post3_4(option);
	},
	//获取生产厂家
	getGoodsManufactor:function(enity,cb){
		var option = {
			api:'/BaseManage/Organize/GetTreeJson',
			data:enity,
			success:function(data){
				var result = JSON.parse(data);
				cb(result);
			},
			error:function(data){
				cb(data);
			},
		};
		app.post3_4(option);
	},
	//获取电池数量
	//entity={userId:?}
	BatteryOrderNum:function(entity,cb){		
		var option = {
			api:'/AccountCenter/GoodOrder/GetBatteryNum',
			data:entity,
			success:function(data){
				var result = JSON.parse(data);
				cb(result);
			},
			error:function(data){
				cb(data);
			},
		};
		app.post3_4(option);
	},
	//获取未完成订单
	GetOrders:function(entity,cb){		
		var option = {
			api:'/AccountCenter/GoodOrder/GetOrders',
			data:entity,
			success:function(data){ 
				var result = JSON.parse(data);
				cb(result);
			},
			error:function(data){
				cb(data);
			},
		};
		app.post3_4(option);
	},
	//获取厂家订单列表
	GetFactoryOrders:function(entity,cb){		
		var option = {
			api:'/AccountCenter/GoodOrder/GetFactoryOrders',
			data:entity,
			success:function(data){ 
				var result = JSON.parse(data);
				cb(result);
			},
			error:function(data){
				cb(data);
			},
		};
		app.post3_4(option);
	},
	//获取单个药剂订单
	GetDrugerOrders:function(entity,cb){		
		var option = {
			api:'/AccountCenter/GoodOrder/GetFormJson',
			data:entity,
			success:function(data){
				var result = JSON.parse(data);
				cb(result);
			},
			error:function(data){
				cb(data);
			},
		};
		app.post3_4(option);
	},
	
	//获取用户电池、药剂福利卷的使用情况
	//userId:用户id
	GetBattery_Commodity:function(entity,cb){		
		var option = {
			api:'/AccountCenter/GoodOrder/GetBattery_Commodity',
			data:entity,
			success:function(data){
				var result = JSON.parse(data);
				cb(result);
			},
			error:function(data){
				cb(data);
			},
		};
		app.post3_4(option);
	},
};

var PartsManageByGet={
	//删除商品
	DeletePartsById:function(entity,cb){
		plus.nativeUI.showWaiting();			
		var option = {
			api: '/PartsManage/PartsList/RemoveForm',
			data:entity,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			},
		};r
		app.post3_3(option);
	},	
	//获取配件列表
	getPartsListJson:function(entity,cb){
		var option = {
			api: '/PartsManage/PartsList/GetPageListJson',
			data:entity,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				
			}
		};
		app.post3_4(option);
	},
	//获取配件订单列表
	getPartsOrderList:function(entity,cb){
		var option = {
			api: '/PartsManage/PartsOrder/GetPageListJson',
			data:entity,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				
			}
		};
		app.post3_4(option);
	},
	//获取配件订单详情列表
	getPartsOrderDetailList:function(entity,cb){		
		var option = {
			api: '/PartsManage/PartsOrder/GetFormJson',
			data:entity,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				
			}
		};
		app.post3_4(option);
	},
	//查询商品
	getSearchGoods:function(entity,cb){
		var option = {
			api: '/PartsManage/PartsList/GetSearch',
			data:entity,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				
			}
		};
		app.post3_4(option);
	}
};


var XHX_IMEI={
	
	//获取用户作业量汇总
	getUserWorkSummary:function(entity,cb){
		var option = {
			api: '/XhxManage/XHX_Users/GetUserDayWorkNumSummary',
			data:entity, 
			success: function(data) {
				console.log(data); 
				var res= JSON.parse(data);
				cb(res);								
			},
			error: function(data) {
				app.toast('失败');
			}   
		}; 
		app.post3_2(option);
		
	},
	
	
	//获取用户设备作业量汇总
	GetUserImeiWorkNumSummary:function(entity,cb){
		var option = {
			api: '/XhxManage/XHX_Users/GetUserImeiWorkNumSummary',
			data:entity, 
			success: function(data) {
				console.log(data); 
				var res= JSON.parse(data); 
				cb(res);								
			},
			error: function(data) { 
				app.toast('失败');
			}   
		}; 
		app.post3_2(option);
		
	},	
	//获取用户设备作业量汇总
	GetWorkUserDayWorkNumList:function(entity,cb){
		var option = {
			api: '/XhxManage/XHX_Users/GetWorkUserDayWorkNumList',
			data:entity, 
			success: function(data) {
				console.log(data); 
				var res= JSON.parse(data);
				cb(res);								
			},
			error: function(data) {
				app.toast('失败');
			}   
		}; 
		app.post3_2(option);
		
	},	
	
	//获取设备作业量汇总
	GetIMEIDayWorkNumSummary:function(entity,cb){
		var option = {
			api: '/XhxManage/XHX_Users/GetIMEIDayWorkNumSummary',
			data:entity, 
			success: function(data) {
				console.log(data); 
				var res= JSON.parse(data);
				cb(res);								
			},
			error: function(data) {
				app.toast('失败');
			}   
		}; 
		app.post3_2(option);
		
	},
	//获取飞手设备作业量汇总
	GetWorkUserIMEIDayWorkNumList:function(entity,cb){
		var option = {
			api: '/XhxManage/XHX_Users/GetWorkUserIMEIDayWorkNumList',
			data:entity, 
			success: function(data) {
				console.log(data); 
				var res= JSON.parse(data);
				cb(res);								
			},
			error: function(data) {
				app.toast('失败');
			}   
		}; 
		app.post3_2(option);
	},
	//获取设备的作业记录
	//entity:queryJson;
	GetXHX_EquipmentWork:function(entity,cb){
		var option = {
			api: '/XhxManage/XHX_Users/GetXHX_EquipmentWork',
			data:entity, 
			success: function(data) {
				console.log(data); 
				var res= JSON.parse(data);
				cb(res);								
			},
			error: function(data) {
				app.toast('失败');
			}   
		}; 
		app.post3_2(option);
		
	},
	//获取任务轨迹
	GetTaskRecord:function(entity,cb){
		var option = {
			api: '/XhxManage/XHX_Users/GetTaskRecord',
			data:entity, 
			success: function(data) {
				console.log(data); 
				var res= JSON.parse(data);
				cb(res);								
			},
			error: function(data) {
				app.toast('失败');
			}   
		}; 
		app.post3_2(option);
	},
	//获取任务评估记录
	GetTaskEstimateRecord:function(entity,cb){
		var option = {
			api: '/XhxManage/XHX_Users/GetTaskEstimateRecord',
			data:entity, 
			success: function(data) {
				console.log(data); 
				var res= JSON.parse(data);
				cb(res);								
			},
			error: function(data) {
				app.toast('失败');
			}   
		}; 
		app.post3_2(option);
	},
	//获取区域轨迹
	GetRegionTrack:function(entity,cb){
		var option = {
			api: '/XhxManage/XHX_Users/GetRegionTrack',
			data:entity, 
			success: function(data) {
				console.log(data); 
				var res= JSON.parse(data);
				cb(res);								
			},
			error: function(data) {
				app.toast('失败');
			}   
		}; 
		app.post3_2(option);
	},
	
	
	//获取评估轨迹
	TempEstimate:function(entity,cb){
		var option = {
			api: '/XhxManage/XHX_Users/TempEstimate',
			data:entity, 
			success: function(data) {
				console.log(data); 
				var res= JSON.parse(data);
				cb(res);								
			},
			error: function(data) {
				app.toast('失败');
			}   
		}; 
		app.post3_2(option);
	}
};

//获取时间
function getTime(s){
	var n = new Date();
	var YMR= (n.getFullYear()+s)+"-"+(n.getMonth()+1)+"-"+n.getDate();
	return YMR;
}
