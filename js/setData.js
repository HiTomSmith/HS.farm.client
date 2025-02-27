var TaskObj = {
	//全体发布任务
	ALLReleaseTask: function(entiy, cb) {
		plus.nativeUI.showWaiting();
		var option = {
			api: '/XhxManage/XHX_TaskDistribution/TeamCheck',
			data: entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('发布失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_1(option);
	},
	//扫码执行任务
	ScanCode: function(entiy, cb) {
		plus.nativeUI.showWaiting();
		var option = {
			api: '/XhxManage/XHX_TaskDistribution/SaveForms',
			data: entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('发布失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_1(option);
	},
	//服务站发布任务
	StationTask: function(entiy, cb) {
		plus.nativeUI.showWaiting();
		var option = {
			api: '/XhxManage/XHX_TaskDistribution/SaveForm',
			data: entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('发布失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_1(option);
	},
	//指定飞手发布任务
	AppointReleaseTask: function(entiy, cb) {
		plus.nativeUI.showWaiting();
		var option = {
			api: '/XhxManage/XHX_TaskExecute/SaveForm',
			data: entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_1(option);
	},
	//结束任务
	UserEndTask: function(entiy, cb) {
		plus.nativeUI.showWaiting();
		var option = {
			api: '/XhxManage/XHX_TaskDistribution/EndTask',
			data: entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_1(option);
	},
	//绑定设备
	BindXHX: function(entiy, cb) {
		plus.nativeUI.showWaiting();
		var option = {
			api: '/XhxManage/XHX_TaskExecute/SetIMEI',
			data: entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_1(option);
	},
	//同意成为任务执行者 
	AgreeTaskExecutor: function(entiy, cb) {
		plus.nativeUI.showWaiting();
		var option = {
			api: '/XhxManage/XHX_TaskExecute/Check',
			data: entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_1(option);
	},
	//拒绝成为任务执行者
	RefuseTaskExecutor: function(entiy, cb) {
		plus.nativeUI.showWaiting();
		var option = {
			api: '/XhxManage/XHX_TaskExecute/RemoveForm',
			data: entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_1(option);
	},
	///同意或者拒绝加入团队
	ISTeam: function(entiy, cb) {
		plus.nativeUI.showWaiting();
		var option = {
			api: '/XhxManage/XHX_Team/YesAgree',
			data: entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_1(option);
	},
	//、接收或拒绝设备
	ISEquipment: function(entiy, cb) {
		plus.nativeUI.showWaiting();
		var option = {
			api: '/XhxManage/XHX_Carrier/IsYseWordXHX2',
			data: entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_1(option);
	},
	///申请项目任务
	ApplyProJect: function(entiy, cb) {
		plus.nativeUI.showWaiting();
		var option = {
			api: '/XhxManage/XHX_TaskSeeRecord/SaveForms',
			data: entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_1(option);
	},
	///审批当前用户成为任务执行者
	ApplyTrue: function(entiy, cb) {
		plus.nativeUI.showWaiting();
		var option = {
			api: '/XhxManage/XHX_TaskSeeRecord/Check',
			data: entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_1(option);
	},
	//保存地块
	SaveMassif: function(entiy, cb) {
		plus.nativeUI.showWaiting();
		var option = {
			api: '/XhxManage/XHX_Field/SaveForm',
			data: entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_1(option);
	},
	//删除地块
	RemoveMassif: function(entiy, cb) {
		plus.nativeUI.showWaiting();
		var option = {
			api: '/XhxManage/XHX_Field/RemoveForm',
			data: entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_1(option);
	},
	////保存载体或更新
	SaveCarrier: function(entiy, cb) {
		plus.nativeUI.showWaiting();
		var option = {
			api: '/XhxManage/XHX_Carrier/SaveForm',
			data: entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_1(option);
	},
	//添加修改收货地址
	SaveAddress: function(entiy, cb) {
		plus.nativeUI.showWaiting();
		var option = {
			api: '/BaseManage/UserInfoAddressAdmin/AddressSaveWhere',
			data:entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_3(option);
	},

	//删除地址
	DeleteAddress: function(entiy, cb) {
		plus.nativeUI.showWaiting();
		var option = {
			api: '/BaseManage/UserInfoAddressAdmin/RemoveForm',
			data: entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_3(option);
	},
	
	//直接拉入团队(不需要审批)
	InvitationTeam:function(entiy, cb){
		plus.nativeUI.showWaiting();
		var option = {
			api: '/XHxManage/XHX_TeamPerson/SaveForm',
			data: entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_1(option);
	},
	//直接拉入团队(不需要审批)
	InvitationPerson:function(entiy, cb){
		plus.nativeUI.showWaiting();
		var option = {
			api: '/XHxManage/XHX_TeamPerson/AddPerson',
			data: entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_1(option);
	},
	//植保站重新设置队长
	SetCaptain:function(entiy, cb){
		plus.nativeUI.showWaiting();
		var option = {
			api: '/XHxManage/XHX_Team/SetTeamId?keyValue='+entiy.keyValue,
			data: entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_1(option);
	
	},
	//直接删除团队
	RemoveTeam:function(entiy, cb){
		plus.nativeUI.showWaiting();
		var option = {
			api: '/XHxManage/XHX_Team/RemoveForm',
			data: entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_1(option);
	},
	//删除单个队员
	RemoveTeamPreson:function(entiy, cb){
		plus.nativeUI.showWaiting();
		var option = {
			api: '/XHxManage/XHX_Team/SignOut',
			data: entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_1(option);
	},
};
//租赁接口
var LeaseInterface = {
	//申请续租 
	Renew:function(entiy,cb){
		plus.nativeUI.showWaiting();
		var option = {
			api: '/PlanManage/LeaseTable/Renew',
			data: entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_3(option);
	},
	//添加租赁设备
	SetLeaseOwner:function(entiy,cb){
		plus.nativeUI.showWaiting();
		var option = {
			api: '/XhxManage/XHX_Owner/SetLeaseOwner',
			data: entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_1(option);
	},
	//移除租赁设备
	DeleteLeaseOwner:function(entiy,cb){
		plus.nativeUI.showWaiting();
		var option = {
			api: '/XhxManage/XHX_Owner/DeleteLeaseOwner',
			data: entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_1(option);
	},
	//保存租赁单
	SaveLeaseTable:function(entiy,cb){
		plus.nativeUI.showWaiting();
		var option = {
			api: '/PlanManage/LeaseTable/Save',
			data: entiy,
			success: function(data) {
				console.log(JSON.stringify(data))
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_3(option);
	},	
	//、添加租赁用户
	SaveLeaseUser:function(entiy,cb){
		plus.nativeUI.showWaiting();
		var option = {
			api: '/BaseManage/User/SaveForms',
			data: entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_3(option);
	},
	//财务充值
	Reacharge:function(entiy,cb){
		plus.nativeUI.showWaiting();
		var option = {
			api: '/BillingManage/Billing_AccountDetails/Recharge',
			data: entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_3(option);
	},
	//业务审核
	BusinessAudit:function(entiy,cb){
		plus.nativeUI.showWaiting();
		var option = {
			api: '/PlanManage/LeaseTable/Checks',
			data: entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_3(option);
	},
	//财务审核出库
	OutStock:function(entiy,cb){
		plus.nativeUI.showWaiting();
		var option = {
			api: '/PlanManage/LeaseTable/Check',
			data: entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_3(option);
	},
	//更换SN
	ResetSnOutStock:function(entiy,cb){
		plus.nativeUI.showWaiting();
		var option = {
			api: '/StockManage/UavStockOut/LeaseTableSN',
			data: entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_3(option);
	},
	//审批出库
	OutStockEntity:function(entiy,cb){
		plus.nativeUI.showWaiting();
		var option = {
			api: '/StockManage/UavStockOut/CheckEntity',
			data: entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_3(option);
	},
	
	//审核出库
	StockOutCheck:function(entiy,cb){
		plus.nativeUI.showWaiting();
		var option = {
			api: '/StockManage/UavStockOut/StockOutCheck',
			data: entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_3(option);
	},
	
	
	
	//审批入库
	InStockEntity:function(entiy,cb){
		plus.nativeUI.showWaiting();
		var option = {
			api: '/StockManage/UavStockIn/CheckEntity',
			data: entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_3(option);
	},
	//创建物流单
	CreateExp:function(entiy,cb){
		plus.nativeUI.showWaiting();
		var option = {
			api: '/PlanManage/Express/SaveForm',
			data: entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_3(option);
	},
	//物流单发货
	SendExp:function(entiy,cb){
		plus.nativeUI.showWaiting();
		var option = {
			api: '/PlanManage/Express/FromCheck',
			data: entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_3(option);
	},
	//物流单收货
	ToExp:function(entiy,cb){
		plus.nativeUI.showWaiting();
		var option = {
			api: '/PlanManage/Express/ToCheck',
			data: entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_3(option);
	},
	//激活无人机
	Activation:function(entiy,cb){
		plus.nativeUI.showWaiting();
		var option = {
			api: '/PlanManage/LeaseTable/Activation',
			data: entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_3(option);
	},
	//保存配件
	SaveParts:function(entiy,cb){
		plus.nativeUI.showWaiting();
		var option = {
			api: '/StockManage/PartsStock/SaveForm',
			data: entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_3(option);
	},
	//开始维修
	StartRepair:function(entiy,cb){
		plus.nativeUI.showWaiting();
		var option = {
			api: '/TaskManage/Repair/SaveForm',
			data: entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_3(option);
	},
	//开始维修审核
	RepairExamine:function(entiy,cb){
		plus.nativeUI.showWaiting();
		var option = {
			api: '/TaskManage/Repair/Check',
			data: entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_3(option);
	},
	//维修完成
	RepairEnd:function(entiy,cb){
		plus.nativeUI.showWaiting();
		var option = {
			api: '/TaskManage/Repair/Complete',
			data: entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_3(option);
	},
	//审批续租 /PlanManage/LeaseTableRenew/CheckEntity
	RenewCheck:function(entiy,cb){
		plus.nativeUI.showWaiting();
		var option = {
			api: '/PlanManage/LeaseTableRenew/CheckEntity',
			data: entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_3(option);
	},
	//上传图片
	UploadPicture:function(entiy,cb){
		plus.nativeUI.showWaiting();
		var option = {
			api: '/StockManage/Acceptance/CheckAcceptance',
			data: entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_3(option);
	},
	
	//上传试飞照片
	StartUsing:function(entiy,cb){
		plus.nativeUI.showWaiting();
		var option = {
			api: '/StockManage/Acceptance/StartUsing',
			data: entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_3(option);
	},
	
	//无人机发货
	UanSend:function(entiy,cb){
		plus.nativeUI.showWaiting();
		var option = {
			api: '/PlanManage/Express/DeliverGoods',
			data: entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_3(option);
	},
	//维修扣款
	repairPament:function(entiy,cb){
		plus.nativeUI.showWaiting();
		var option = {
			api: '/TaskManage/Repair/RepairPay',
			data: entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_3(option);
	},
	/*确认收货*/
	confirmGooder:function(entiy,cb){
		plus.nativeUI.showWaiting();
		var option = {
			api: '/PlanManage/LeaseTable/SignFor ',
			data: entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_3(option);
	},
	/*退租*/
	RentRefund:function(entiy,cb){
		plus.nativeUI.showWaiting();
		var option = {
			api: '/PlanManage/LeaseTable/RentRefund',
			data: entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_3(option);
	},
};

//hs添加租赁设备
var hs = {
	AddEq:function(entity, cb) {
		var option = { //Hx.Application.Web
			api: '/XhxManage/XHX_Owner/SetCarrierOwner',
			data: entity,
			success: function(data) {
				var result = eval("(" + data + ")");
				plus.nativeUI.closeWaiting();
				cb(result);
			},
			error: function(data) {
				app.toast('账户不存在')
			},
		}
		app.post3_1(option);
	},
};


//登录入口
var Login = {
	In: function(entity, cb) {
		var option = { //Hx.Application.Web
			api: '/Login/CheckLogin',
			data: entity,
			success: function(data) {
				var result = eval("(" + data + ")");
				plus.nativeUI.closeWaiting();
				cb(result);
			},
			error: function(data) {
				plus.nativeUI.closeWaiting();
				app.toast('账户不存在');
				app.storage("autoLogin", "false");
				app.outLogin();
				app.restart();
			},
		}
		app.post3_1(option);
	},
	//保存用户CID
	CIDIn:function(){
		var CID = plus.push.getClientInfo().clientid; 
		console.log(CID+'-----------------------------------------------------------这叫CID'); // 38824dcb04d9337b62ee842b5cd52772   0e78608ba17ffbf33d4fe7d7ac76ee01
		var UserInfo = app.accountInfo('info');
		var option = {
			api: '/Login/RegisterUser',
			data:{
				userEntity:JSON.stringify({
					UserId:UserInfo.UserId,
					SimpleSpelling:CID,
				})
			},
			success: function(data) {},
			error: function(data) {},
		}
		app.post3_1(option);
		Login.LeaseCid();
	},
	//
	LeaseCid:function(){
		var CID = plus.push.getClientInfo().clientid; 
		console.log(CID+'-----------------------------------------------------------这叫CID'); // 38824dcb04d9337b62ee842b5cd52772   0e78608ba17ffbf33d4fe7d7ac76ee01
		
		var UserInfo = app.accountInfo('info');
		var option = {
			api: '/Login/GetCid',
			data:{ 
				userid:UserInfo.UserId, 
				cid:CID,
			},
			success: function(data) {
			},
			error: function(data) {
			},
		}
		app.post3_3(option);
	}
};


//、通用弹出框
var dialog = {
	//普通对话框
	Dialogbox: function(title, content, cb) {
		var index = null;
		var $html = $(
			'<div class="dialogBG" id="dialogcolse" style="position:fixed;width:100%;height:100%;background: #747474;top:0;z-index: 11102;opacity: 0.8;"></div>' +
			'<div class="dialogBox" style="width:90%;height:220px;background: #EEF1EF;position: fixed;z-index:11103;top:130px;margin-left: 5%;border-radius: 4px;">' +
			'<div style="max-height:40px !important;min-height:40px !important;line-height: 40px;border-bottom: 1px solid  #15AE3F;background:  #15AE3F;color:white;text-align: left;padding-left:20px;overflow: hidden;"><span id="topH" style="color:white">' + title + '</span><span class="iconfont shut" style="margin-left:20%;transform:rotate(45deg);float: right;margin-right: 16px;color:white">&#xe6e0;</span></div>' +
			'<div class="MessageContent" style="width:80%; margin: 0 auto;padding-top:40px;height:130px;text-align: center;">' + content + '</div>' +
			'<div class="dialogBtns" style="width:100%;text-align: center;">' +
			'<button  style="background: #DCDDDC;width:120px;border-radius: 46px;border:none;margin-right:10px;" id="close">取消</button> ' +
			'<button  style="background:  #15AE3F;width:120px;border-radius: 46px;color: white;border:none;margin-left:10px;" id="save">确定</button>' +
			'</div>' +
			'</div>'
		);
		$html.appendTo($('body'));
		$html.find('#close').on('tap', function() {
			btnsShield(3, 'close');
			index = 0;
			cb(index);
		});
		$html.find('.shut').on('tap', function() {
			index = 0;
			cb(3);
			dialog.CloseLogBox();
		});
		$('#dialogcolse').on('tap', function() {
			btnsShield(3, 'dialogcolse');
			index = 0;
			cb(3);
			dialog.CloseLogBox();
		});
		$html.find('#save').on('tap', function() {
			btnsShield(3, 'save');
			index = 1;
			cb(index);
		});
		$("#mangerName").on('tap', function() {
			cycleList.show(function(item){
				$("#mangerName").val(item[0]['text']).attr('days',item[0]['value']);
			});
		});
	},
	SpecialBox: function(title, content, cb) {
		var index = null;
		var $html = $(
			'<div class="dialogBG" id="dialogcolse" style="position:fixed;width:100%;height:100%;background: #747474;top:0;z-index: 11102;opacity: 0.8;"></div>' +
			'<div class="dialogBox" style="width:90%;height:220px;background: #EEF1EF;position: fixed;z-index:11103;top:130px;margin-left: 5%;border-radius: 4px;">' +
			'<div style="max-height:40px !important;min-height:40px !important;line-height: 40px;border-bottom: 1px solid  #15AE3F;background:  #15AE3F;color:white;text-align: left;padding-left:20px;overflow: hidden;"><span id="topH" style="color:white">' + title + '</span><span class="iconfont shut" style="margin-left:20%;transform:rotate(45deg);float: right;margin-right: 16px;color:white">&#xe6e0;</span></div>' +
			'<div class="MessageContent" style="width:80%; margin: 0 auto;padding-top:40px;height:130px;text-align: center;">' + content + '</div>' +
			'<div class="dialogBtns" style="width:100%;text-align: center;">' +
			'<button  style="background: #DCDDDC;width:120px;border-radius: 46px;border:none;margin-right:10px;" id="close">人工处理</button> ' +
			'<button  style="background:  #15AE3F;width:120px;border-radius: 46px;color: white;border:none;margin-left:10px;" id="save">开始检查</button>' +
			'</div>' +
			'</div>'
		);
		$html.appendTo($('body'));
		$html.find('#close').on('tap', function() {
			btnsShield(3, 'close');
			index = 0;
			cb(index);
		});
		$html.find('.shut').on('tap', function() {
			index = 0;
			cb(3);
			dialog.CloseLogBox();
		});
		$('#dialogcolse').on('tap', function() {
			btnsShield(3, 'dialogcolse');
			index = 0;
			cb(3);
			dialog.CloseLogBox();
		});
		$html.find('#save').on('tap', function() {
			btnsShield(3, 'save');
			index = 1;
			cb(index);
		});
		$("#mangerName").on('tap', function() {
			cycleList.show(function(item){
				$("#mangerName").val(item[0]['text']).attr('days',item[0]['value']);
			});
		});
	},
	CloseLogBox: function() {
		$(".dialogBG,.dialogBox").remove();
	}
};

//订单相关接口
var SetOrder = {
	//用户确认
	UserConfirm:function(enity,cb){
		var option = {
			api:'/AccountCenter/GoodOrder/UserConfirm',
			data:enity,
			success:function(data){
				var result = JSON.parse(data);
				cb(result);
			},
			error:function(data){
				cb(data);
			},
		};
		app.post3_3(option);
	},
	//提交订单主表，
	SaveOrder:function(enity,cb){
		var option = {
			api:'/AccountCenter/GoodOrder/Saves',
			data:enity,
			success:function(data){
				var result = JSON.parse(data);
				cb(result);
			},
			error:function(data){
				cb(data);
			},
		};
		app.post3_3(option);
	},

	//提交订单主表，
	SettlementSheet:function(enity,cb){
		var option = {
			api:'/AccountCenter/GoodOrder/SettlementSheet',
			data:enity,
			success:function(data){
				var result = JSON.parse(data);
				cb(result);
			},
			error:function(data){
				cb(data);
			},
		};
		app.post3_3(option);
	},

	//提交订单主从表
	SaveOrderForms:function(enity,cb){
		console.log(JSON.stringify(enity)); 
		var option = {
			api:'/AccountCenter/GoodOrder/SaveForm',
			data:enity, 
			success:function(data){
				var result = JSON.parse(data);
				console.log(result)
				cb(result);
			},  
			error:function(data){
				console.log(JSON.stringify(data))
				cb(data);
			},
		};
		app.post3_3(option);
	},		
	
	//提交订单主从表
	ModifyPrice:function(enity,cb){
		console.log(JSON.stringify(enity)); 
		var option = {
			api:'/AccountCenter/GoodOrder/ModifyPrice',
			data:enity, 
			success:function(data){
				var result = JSON.parse(data);
				console.log(result)
				cb(result);
			},  
			error:function(data){
				console.log(JSON.stringify(data))
				cb(data);
			},
		};
		app.post3_3(option);
	},
	
	//清空从表
	ClearOrderDetails:function(enity,cb){
		var option = {
			api:'/AccountCenter/GoodOrder/RemoveFormDetail',
			data:enity,
			success:function(data){
				var result = JSON.parse(data);
				cb(result);
			},
			error:function(data){
				cb(data);
			},
		};
		app.post3_3(option);
	},

	//改变订单状态
	EditOrderStatus:function(enity,cb){
		var option = {
			api:'/AccountCenter/GoodOrder/AuditStatus',
			data:enity,
			success:function(data){
				var result = JSON.parse(data);
				cb(result);
			},
			error:function(data){
				cb(data);
			},
		};
		app.post3_3(option);
	},
	
	//生成结算单
	GenerateSettlement:function(enity,cb){		
		var option = {
			api:'/AccountCenter/GoodOrder/SettlementSheet',
			data:enity,
			success:function(data){
				var result = JSON.parse(data);
				cb(result);
			},
			error:function(data){
				cb(data);
			},
		};
		app.post3_3(option);
	},
	//用户扣款
	UserPayment:function(enity,cb){		
		var option = {
			api:'/AccountCenter/GoodOrder/Chargebacks',
			data:enity,
			success:function(data){
				var result = JSON.parse(data);
//				console.log(result)
				cb(result);
			},
			error:function(data){
				cb(data);
			},
		};
		app.post3_3(option);
	},
	//给厂家付款
	ToManufactorPayment:function(enity,cb){
		var option = {
			api:'/AccountCenter/GoodOrder/Payment',
			data:enity,
			success:function(data){
				var result = JSON.parse(data);
				cb(result);
			},
			error:function(data){
				cb(data);
			},
		};
		app.post3_3(option);
	},
	//电池订单审核
	BatteryOrderCheck:function(enity,cb){
		var option = {
			api:'/AccountCenter/GoodOrder/CheckBattery',
			data:enity,
			success:function(data){
				var result = JSON.parse(data);
				cb(result);
			},
			error:function(data){
				cb(data);
			},
		};
		app.post3_3(option);
	},
	//电池分期扣款
	BatteryFQPayment:function(enity,cb){
		var option = {
			api:'/AccountCenter/GoodOrder/BatteryStaging',
			data:enity,
			success:function(data){
				var result = JSON.parse(data);
				cb(result);
			},
			error:function(data){
				cb(data);
			},
		};
		app.post3_3(option);
	},
	//电池发货
	BatteryFHDelivery:function(enity,cb){
		var option = {
			api:'/AccountCenter/GoodOrder/BatteryDelivery',
			data:enity,
			success:function(data){
				var result = JSON.parse(data);
				cb(result);
			},
			error:function(data){
				cb(data);
			},
		};
		app.post3_3(option);
	},
	//货单不相符
	GoodsAgreement:function(enity,cb){
		var option = {
			api:'/PlanManage/LeaseTable/ConformityGoods',
			data:enity,
			success:function(data){
				var result = JSON.parse(data);
				cb(result);
			},
			error:function(data){
				cb(data);
			},
		};
		app.post3_3(option);
	},
};

//////没有数据背景图///////
var NoData = {
	bgImg:function(name,src){
		//判断当前系统为Ios的时候
		if(mui.os.ios){
			if(name=='bottom'){
				$("."+name+"").css({
					'background-image':'url('+src+')',
					'background-repeat':'no-repeat',
					'background-repeat':'no-repeat',
					'background-attachment':'fixed',
					'background-position':'center 300px',
					'background-size':'40% auto'
				});
			}else{
				$("."+name+"").css({
					'background-image':'url('+src+')',
					'background-repeat':'no-repeat',
					'background-repeat':'no-repeat',
					'background-attachment':'fixed',
					'background-position':'center',
					'background-size':'40% auto'
				});
			};
		}else if(mui.os.android){
			if(name=='bottom'){
				$("."+name+"").css({
					'background-image':'url('+src+')',
					'background-repeat':'no-repeat',
					'background-repeat':'no-repeat',
					'background-attachment':'fixed',
					'background-position':'center',
					'background-size':'30% auto'
				});
			}else{
				$("."+name+"").css({
					'background-image':'url('+src+')',
					'background-repeat':'no-repeat',
					'background-repeat':'no-repeat',
					'background-attachment':'fixed',
					'background-position':'center',
					'background-size':'40% auto'
				});
			};
		};
	},
	ClearImg:function(name){
		$("."+name+"").css({
			'background-image':'none',
		})
	},
};
//JSON对象去重
var deleteJSON = {
	_objIsInArray: function(obj, arr) {
		var tmpStatus = false;
		for(var j = 0; j < arr.length; j++) {
			if(obj.TaskDistributionId == arr[j].TaskDistributionId) {
				return j;
				break;
			} else {
				tmpStatus = false;
			}
		}
		if(!tmpStatus) {
			return -1;
		}
	}
};

//预加载6个主页
//var Preloading = {
//	Start:function(){
//		//预加载主页page
//		var page =  mui.preload({
//			url:'./html/page.html',
//			id:'page',
//		});	
//		
//		//预加载Homep
//		var Homep =  mui.preload({
//			url:'./html/PageChildren/Homep.html',
//			id:'Homep',
//			styles:{
//				bottom: '70px', //子页面底部位置
//				width: '100%',
//				top: "44px",
//			}
//		});
//		
//		//预加载 Lease
//		var Lease =  mui.preload({
//			url:'./html/PageChildren/Lease.html',
//			id:'Lease',
//			styles:{
//				width: '100%', //子页面底部位置
//				left: "100%",
//				bottom: '70px',
//				top: "44px",
//			}
//		});
//		
//		//预加载 Task
//		var Task =  mui.preload({
//			url:'./html/PageChildren/Task.html',
//			id:'Task',
//			styles:{
//				width: '100%',
//				left: "300%",
//				bottom:'70px', //子页面底部位置
//				top: "44px",
//			}
//		});
//		
//		//预加载 User
//		var User =  mui.preload({
//			url:'./html/PageChildren/User.html',
//			id:'User',
//			styles:{
//				width: '100%',
//				left: "400%",
//				bottom: '70px', //子页面底部位置
//				top: "44px",
//			}
//		});
//		console.log(JSON.stringify(plus.webview.all()))
//		return false;
//	},
//};

var Preloading = {
	Start:function(){
		mui.init({preloadPages:[
			{
				url:"./html/page.html",
				id:"page",
				subpages:[
				{
				url: './html/PageChildren/Homep.html', //子页面HTML地址，支持本地地址和网络地址
				id: 'Homep', //子页面标志
				styles: {
					bottom: '70px', //子页面底部位置
					width: '100%',
					top: "44px",
				}
			},
			{
				url: './html/PageChildren/Lease.html', //子页面HTML地址，支持本地地址和网络地址
				id: 'Lease', //子页面标志
				styles: {
					width: '100%',
					left: "100%",
					bottom: '70px', //子页面底部位置
					top: "44px",
				}
			},
			{
				url: './html/PageChildren/Task.html', //子页面HTML地址，支持本地地址和网络地址
				id: 'Task', //子页面标志
				styles: {
					width: '100%',
					left: "300%",
					bottom: '70px', //子页面底部位置
					top: "44px",
				}
			},
			{
				url: './html/PageChildren/User.html', //子页面HTML地址，支持本地地址和网络地址
				id: 'User', //子页面标志
				styles: {
					width: '100%',
					left: "400%",
					bottom: '70px', //子页面底部位置
					top: "44px",
				}
			},
			],
			}
			],
		preloadLimit:6})
	},
};
var Medicament={
	CreateBrand:function(entiy,cb ){
		plus.nativeUI.showWaiting();
			
		var option = {
			api: '/AccountCenter/GoodsBrandName/SaveForm',
			data:entiy,
			success: function(data) {
				plus.nativeUI.closeWaiting();
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_3(option);
		
	
	},
	DeleteBrand:function(entiy,cb ){
		plus.nativeUI.showWaiting();
			
		var option = {
			api: '/AccountCenter/GoodsBrandName/RemoveForm',
			data:entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_3(option);
		
	
	},
	SaveGood:function(entiy,cb ){
		plus.nativeUI.showWaiting();
			
		var option = {
			api: '/AccountCenter/Commodity/SaveForm',
			data:entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				//alert(JSON.stringify(data));
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_3(option);
		
	
	},
	//删除商品
	DeleteCommodity:function(entity,cb){
		plus.nativeUI.showWaiting();
			
		var option = {
			api: '/AccountCenter/Commodity/RemoveForm',
			data:entity,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_3(option);
	},
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
		};
		app.post3_3(option);
	},
	//删除订单
	DeleteOder:function(entity,cb){
		plus.nativeUI.showWaiting();
			
		var option = {
			api: '/AccountCenter/GoodOrder/RemoveForm',
			data:entity,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			}
		};
		app.post3_3(option);
	},
	//签收订单
	SingnOder:function(entity,cb){
		plus.nativeUI.showWaiting();
			
		var option = {
			api: '/AccountCenter/GoodOrder/BatteryReceipt',
			data:entity,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			}
		};
		app.post3_3(option);
	},
	
	//上传商品图片
	SaveBrandImg:function(entiy,cb ){
		console.log(JSON.stringify(entiy));
		plus.nativeUI.showWaiting();
		var option = {
			api: '/AccountCenter/Commodity/UploadFileApp',
			data:entiy,
			success: function(data) {
				var result = JSON.parse(data);
				console.log(JSON.stringify(result));
				cb(result);
			},
			error: function(data) {
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_3(option);
		
	
	},
};

var PartsManageBySet={
	//新增配件
	AddParts:function(entiy,cb){		
		plus.nativeUI.showWaiting();
		var option = {
			api: '/PartsManage/PartsList/SaveForm',
			data: entiy,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_3(option);
	},
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
		};
		app.post3_3(option);
	},	
	//上传商品图片
	SaveBrandImg:function(entiy,cb ){
		console.log(JSON.stringify(entiy));
		plus.nativeUI.showWaiting();
		var option = {
			api: '/AccountCenter/Commodity/UploadFileApp',
			data:entiy,
			success: function(data) {
				var result = JSON.parse(data);
				console.log(JSON.stringify(result));
				cb(result);
			},
			error: function(data) {
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_3(option);
	},
	//保存配件订单信息
	SavePartsTable:function(entiy,cb){	
		plus.nativeUI.showWaiting();
		var option = {
			api: '/PartsManage/PartsOrder/SaveForm',
			data: entiy,
			success: function(data) {
				console.log(JSON.stringify(data))
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				console.log(JSON.stringify(data))
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_3(option);
	},
	//删除订单详情表中的商品
	DeletePartsDetailById:function(entity,cb){
		plus.nativeUI.showWaiting();			
		var option = {
			api: '/PartsManage/PartsList/RemoveDetailForm',
			data:entity,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				app.toast('操作失败');
				plus.nativeUI.closeWaiting();
			},
		};
		app.post3_3(option);
	},	
	//更新订单状态
	UpdateOrderStatus:function(entity,cb){		
		var option = {
			api: '/PartsManage/PartsOrder/UpdateOrderStatus',
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
	//更改物流信息
	UpdateOrderExpress:function(entity,cb){		
		var option = {
			api: '/PartsManage/PartsOrder/UpdateOrderExpress',
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
	//更新订单状态
	//entity={keyValue:?}
	DeletePartsOrder:function(entity,cb){		
		var option = {
			api: '/PartsManage/PartsOrder/RemoveForm',
			data:entity,
			success: function(data) {
				var result = JSON.parse(data);
				cb(result);
			},
			error: function(data) {
				
			}
		};
		app.post3_3(option);
	}
};


