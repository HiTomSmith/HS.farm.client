(function(_){
	
	/*
	 task_record = {
	 	"@task_id" : {
	 		"@uav_id" : {
	 			gps_record : [],
	 			spray_record : []
	 		},
	 		"@uav_id" : {
	 			gps_record : [],
	 			spray_record : []
	 		}
	 	},
	 	"@task_id" : {
	 		"@uav_id" : {
	 			gps_record : [],
	 			spray_record : []
	 		},
	 		"@uav_id" : {
	 			gps_record : [],
	 			spray_record : []
	 		}
	 	}
	 }
	 * **/
	var task_record = {};
	_.dataTask = {
		setGpsData : function(taskId, uavId, list, submit_cb){
			//初始化GPS数据变量
			_.dataTask.getGpsData(taskId, uavId);
			//
			task_record[taskId][uavId]["gps_record"] = list;
			
			task_record[taskId][uavId]['gps_submit'] = false;
			
			_.storage('tasks', task_record);
			
			if(submit_cb && typeof(submit_cb)=="function")_.dataTask.submitGpsData(taskId, uavId, list, submit_cb);
			
		},
		getGpsData : function(taskId, uavId){
			if(!task_record[taskId])task_record[taskId] = {};
			if(!task_record[taskId][uavId])task_record[taskId][uavId] = {};
			if(!task_record[taskId][uavId]["gps_record"])task_record[taskId][uavId]["gps_record"] = [];
			return task_record[taskId][uavId]["gps_record"];
		},
		submitGpsData : function(taskId, uavId, list, cb){
			if(list && typeof(list)=="function"){
				cb = list;
				list = _.dataTask.getGpsData(taskId, uavId);
			}
			
			if(list.length <= 0){
				cb && cb(false, '没有发现任何定位数据');
				return;
			}
			//提交到服务器
			var option = {
				api: '/record/gps/savelist',
				data: list,
				waiting : {show : true, text : '正在提交定位数据...'},
				success: function(data) {
					task_record[taskId][uavId]['gps_submit'] = true;
					_.storage('tasks', task_record);
					cb && cb(true, '上传定位数据成功！');
				},
				error: function(data) {
					cb && cb(false, '上传定位数据失败！');
				}
			}
			_.post(option);
		},
		setSprayData : function(taskId, uavId, list, submit_cb){
			//初始化喷洒数据变量
			_.dataTask.getSprayData(taskId, uavId);
			
			//
			task_record[taskId][uavId]["spray_record"] = list;
			
			task_record[taskId][uavId]['spray_submit'] = false;
			
			_.storage('tasks', task_record);
			
			if(submit_cb && typeof(submit_cb)=="function")_.dataTask.submitSprayData(taskId, uavId, list, submit_cb);
		},
		getSprayData : function(taskId, uavId){
			if(!task_record[taskId])task_record[taskId] = {};
			if(!task_record[taskId][uavId])task_record[taskId][uavId] = {};
			if(!task_record[taskId][uavId]["spray_record"])task_record[taskId][uavId]["spray_record"] = [];
			return task_record[taskId][uavId]["spray_record"];
		},
		submitSprayData : function(taskId, uavId, list, cb){
			if(list && typeof(list)=="function"){
				cb = list;
				list = _.dataTask.getSprayData(taskId, uavId);
			}
			
			if(list.length <= 0){
				cb && cb(false, '没有发现任何喷洒数据');
				return;
			}
			//提交到服务器
			var option = {
				api: '/record/spray/savelist',
				data: list,
				waiting : {show : true, text : '正在提交喷洒数据...'},
				success: function(data) {
					task_record[taskId][uavId]['spray_submit'] = true;
					_.storage('tasks', task_record);
					cb && cb(true, '上传喷洒数据成功！');
				},
				error: function(data) {
					cb && cb(false, '上传喷洒数据失败！');
				}
			}
			_.post(option);
		},
		getTaskData : function(taskId, uavId){
			task_record = _.storage_json('tasks');
			if(!task_record[taskId] || !task_record[taskId][uavId]){
				_.dataTask.getGpsData(taskId, uavId);
				_.dataTask.getSprayData(taskId, uavId);
			}
			
			return task_record[taskId][uavId];

		}
	}
})(window.app)

