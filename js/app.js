﻿(function(wnd) { //"http://192.168.8.168";//"http://192.168.1.144";


//	wnd.host_root = "http://47.92.128.46:8081";//http://plant.szhappy.cn:8083
//  wnd.his_root = "http://47.92.128.46:8082"; 
//  wnd.his_root = "http://192.168.1.198";    
    // wnd.host_root = "http://192.168.1.615"; 
//  wnd.host_root = "http://192.168.1.174:8081";
	
//	wnd.host_root = "http://47.92.73.107:8085";//http://plant.szhappy.cn:8083
	wnd.his_root = "http://47.92.73.107:8085"; //http://47.92.128.46:8082
	wnd.host_root = "http://47.92.73.107:8087"
//	wnd.host_root = "http://192.168.1.174:8081";  
//  wnd.his_root = "http://47.92.128.46:8087";
//  wnd.host_root = "http://47.92.128.46:8084"


//	wnd.his_root = "http://192.168.1.115";
//  wnd.host_root = "http://192.168.1.115:8081"
    
    wnd.req_host=wnd.host_root

	//http: //47.92.128.46:8082 47.92.73.107:8081

	wnd.his_host = wnd.his_root;
	app.debug = false;

	wnd.appkey = 'fd3854001538c90ce26f05b627b18c96';

	//	==================== ==================================================================================
	//	=====嗨森农业个推数据			   ==============================

	//AppID： inaPfCxQJvAaVvsxI2yMy7
	//AppSecret： OcvcdIwEHN6OcBMBak4Sx7
	//AppKey： 22mbJQpV0880oL5CZsV7p6
	//MasterSecret： 8gMRrvqqha95Ff7Gxe93D9

	//	==================== ==================================================================================
	//	=====植保小黑侠个推数据			   ==============================

	//AppID： vnBASj2iH46hHZCmFD4Yv7
	//AppSecret： hn9yURZ1Jv6n5fm6XRD5D9
	//AppKey： QhLPOku4ms6TosFivwowB2
	//MasterSecret： N6GVAxjFMG6HdoO3XhdPC6

	//	==================== ==================================================================================
	//	===============================				UTS 跟系统相关的			   ==============================
	wnd.isMobile = $.isMobile();
	wnd.base64 = $.base64();
	//wnd.md5=$.md5(); 
	wnd.stock = null;

	wnd.ready = function(cb) {
		if(wnd.isMobile) {
			console.log('手机端')
			mui.plusReady(function() {
				wnd.stock = plus.storage;
			})
			mui.plusReady(cb);

		} else {
			console.log('浏览器');
			wnd.stock = localStorage;
			$(cb);
		}

	}

	wnd.act_navigate = function() {
		$(".mui-navigate-right").on('tap', function() {
			span = $("span", $(this));
			if(span.attr("data-type") == "tel") {
				plus.device.dial(span.html(), false);
			}
		});
	}

	wnd.accountInfo = function(key) {
		loginInfo = wnd.storage_json("login");
		console.log(key)
		if(key) {
			console.log(JSON.stringify(loginInfo))
			return loginInfo[key];
		}
		return loginInfo;
	}
	wnd.isLogin = function() {
		return wnd.accountInfo("token") ? true : false;
	}

	wnd.rootImage = function(image, isBackground) {
		result = image;
		if(!image || image.length <= 0) {
			result = "../images/logo.png";
		} else {
			image = image.toLowerCase();
			if(image.substr(0, 4) != "http") {
				result = wnd.img_host + image;
			}
		}

		if(isBackground == true) {
			return 'url(' + result + ')';
		}
		return result;
	}

	wnd.checkInput = function(keys) {
		for(i = 0; i < keys.length; i++) {
			field = $("#" + keys[i]);
			if(field.val() == "") {
				wnd.toast(field.attr("placeholder"));
				return false;
			}
		}
		return true;
	}

	wnd.getGeocode = function(cb) {
		if(!plus || !plus.geolocation) return;
		plus.geolocation.getCurrentPosition(cb, function(e) {
			wnd.toast('获取位置信息失败！' + e.message);
		}, {
			geocode: true,
			provider: 'amap'
		});
	}
	//	XXXXXXXXXXXXXXXXXXXXXXXXX 消息订阅 XXXXXXXXXXXXXXXXXXXXXXXXXXX //

	wnd.MSG = {
		ON_USERINFO_CHANGE: "ON_USERINFO_CHANGE",
		ON_CUSTOMER_ADDRESSBOOK_CHANGE: "ON_CUSTOMER_ADDRESSBOOK_CHANGE",
		ON_CUSTOMER_CUSTOMER_CHANGE: "ON_CUTOMER_CUSTOMER_CHANGE"
	};

	wnd.fire = function(msg, params) {
		var wvs = plus.webview.all();
		for(var i = 1; i < wvs.length; i++) {
			mui.fire(wvs[i], msg, params);
		}
	}

	wnd.subscribe = function(msg, callback) {
		window.addEventListener(msg, function(event) {
			callback(event.detail);
		});
	}
	wnd.clear = function() {
		wnd.stock.clear();
	}
	wnd.outLogin = function() {
		wnd.stock.removeItem('username');
		wnd.stock.removeItem('psd');
	}

	//	====================================================================================
	//	====================================================================================

	wnd.ajax = function(option) {
		var _opts = {
			waiting: {
				show: true,
				text: '加载中...'
			}
		}
		option = $.extend(_opts, option);
		bShowWaiting = option.waiting;
		if(bShowWaiting.show) {
			wnd.showWaiting(bShowWaiting.text);
		}
		var user = wnd.isLogin() ? wnd.accountInfo() : {
			userid: "",
			token: ""
		};
		var req_data = {
			data: option.data || {},
			platform: "",
			userid: user.userid,
			token: user.token
		}
		//console.log(JSON.stringify(req_data));
		req_data = $.base64().encode(JSON.stringify(req_data));
		//console.log(req_data);
		//console.log(wnd.req_host + option.api);
		mui.ajax(wnd.his_host + option.api, {
			data: req_data,
			dataType: 'json', //	服务器返回json格式数据
			timeout: 30000, //	超时时间设置为10秒；
			type: option.type, //	HTTP请求类型
			success: function(res) {
				if(bShowWaiting.show) {
					wnd.closeWaiting();
				}

				if(res.status.code != "0") {
					if(res.status.code == "1") {
						wnd.outLogin();
						wnd.restart();
						return;
					}
					if(option.silence != true) {
						if(res.status.desc) {
							console.log(JSON.stringify(res));
							//wnd.toast(res.status.desc);
						} else {
							//		wnd.toast("服务器请求错误！");
						}
					}
					if(option.error) {
						option.error(res.status.desc);
					}
				} else {
					if(option.success) {
						option.success(res);
					}
				}
			},
			error: function(xhr, type, err) {
				if(bShowWaiting.show) {
					wnd.closeWaiting();
				}
				//	wnd.toast("网络错误：" + type);
				if(option.error) {
					console.log(wnd.his_host + option.api)
					option.error(type);
				}
			}
		});
	}

	//无加载对话框
	wnd.ajax1 = function(option) {
		var _opts = {
			waiting: {
				show: false,
				text: '加载中...'
			}
		}
		option = $.extend(_opts, option);
		bShowWaiting = option.waiting;
		if(bShowWaiting.show) {
			wnd.showWaiting(bShowWaiting.text);
		}
		var user = wnd.isLogin() ? wnd.accountInfo() : {
			userid: "",
			token: ""
		};
		var req_data = {
			data: option.data || {},
			platform: "",
			userid: user.userid,
			token: user.token
		}
		//console.log(JSON.stringify(req_data));
		req_data = $.base64().encode(JSON.stringify(req_data));
		mui.ajax(wnd.his_host + option.api, {
			data: req_data,
			dataType: 'json', //	服务器返回json格式数据
			timeout: 30000, //	超时时间设置为10秒；
			type: option.type, //	HTTP请求类型
			success: function(res) {
				if(bShowWaiting.show) {
					wnd.closeWaiting();
				}

				if(res.status.code != "0") {
					if(res.status.code == "1") {
						wnd.outLogin();
						wnd.restart();
						return;
					}
					if(option.silence != true) {
						if(res.status.desc) {
							console.log(JSON.stringify(res));
							//wnd.toast(res.status.desc);
						} else {
							//		wnd.toast("服务器请求错误！");
						}
					}
					if(option.error) {
						option.error(res.status.desc);
					}
				} else {
					if(option.success) {
						option.success(res);
					}
				}
			},
			error: function(xhr, type, err) {
				if(bShowWaiting.show) {
					wnd.closeWaiting();
				}
				//	wnd.toast("网络错误：" + type);
				if(option.error) {
					console.log(wnd.his_host + option.api)
					option.error(type);
				}
			}
		});
	}

	//	method, data, callback, notip
	wnd.get = function(option) {
		option.type = 'get';
		wnd.ajax(option);
	}

	wnd.get2 = function(option) {
		option.type = 'get';
		option.data || (option.data = {});

		userInfo = wnd.storage_json("login");
		option.data.token = userInfo.token + plus.device.uuid

		wnd.ajax(option);
	}

	wnd.post = function(option) {
		option.type = 'post';
		wnd.ajax(option);
	}

	wnd.post1 = function(option) {
		option.type = 'post';
		wnd.ajax1(option);
	}

	wnd.post2 = function(option) {
		option.type = 'post';
		option.data || (option.data = {});

		userInfo = wnd.storage_json("login");
		option.data.token = userInfo.token + plus.device.uuid
		wnd.ajax(option);
	}

	wnd.upload = function(api, images, keys, callback, error) {
		url = wnd.req_host + api;

		uploadOption = {
			method: "POST",
			blocksize: 204800,
			priority: 100
		};

		var task = plus.uploader.createUpload(url, uploadOption, function(t, status) {
			//	上传完成
			if(status == 200) {
				console.log(t.responseText);
				res = JSON.parse(t.responseText);
				if(res.code < 0) {
					//	wnd.toast(res.error ? res.error : "上传文件错误");
					if(error)
						error({
							code: -1,
							error: "状态错误"
						});
				} else {
					callback(res.data);
				}
			} else {
				if(error)
					error({
						code: -1,
						error: "状态错误"
					});
			}
		});

		for(i = 0; i < images.length; i++) {
			task.addFile(images[i].file, {
				key: images[i].name
			});
		}

		for(j = 0; j < keys.length; j++) {
			task.addData(keys[j].key, keys[j].value);
			console.log("ADD Param:" + keys[j].key + "=" + keys[j].value);
		}

		task.start();
		return true;
	}

	wnd.upload2 = function(api, images, keys, callback, error) {
		userInfo = wnd.storage_json("login");
		if(userInfo && userInfo.token) {
			token = userInfo.token + plus.device.uuid;

			if(!keys) {
				keys = [];
			}

			keys.push({
				key: "token",
				value: token
			});

			return wnd.upload(api, images, keys, callback, error);
		}
		return false;
	}

	//	*********************************************************************************************  //
	//	*********************************************************************************************  //
	//	*****************************************  通用方法   ******************************************  //

	wnd.isMobileNumber = function(number) {
		var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
		if(!myreg.test(number)) {
			return false;
		}
		return true;
	}

	wnd.fmtFloat = function(srcNumber) {
		srcNumber = parseFloat(srcNumber).toFixed(2);

		var txtNumber = '' + srcNumber;
		if(isNaN(txtNumber) || txtNumber == "") {
			return 0.00;
		} else {
			var rxSplit = new RegExp('([0-9])([0-9][0-9][0-9][0-9][,.])');
			var arrNumber = txtNumber.split('.');
			arrNumber[0] += '.';
			do {
				arrNumber[0] = arrNumber[0].replace(rxSplit, '$1,$2');
			} while (rxSplit.test(arrNumber[0]));

			if(arrNumber.length > 1) {
				return arrNumber.join('');
			} else {
				return arrNumber[0].split('.')[0];
			}
		}
	}

	wnd.toFloat = function(srcNumber) {
		if(!srcNumber || (typeof(srcNumber) == "string" && srcNumber.length <= 0)) {
			return 0.0;
		}

		srcNumber = srcNumber.replace(/,/g, '');
		res = parseFloat(srcNumber);
		if(isNaN(res)) {
			return 0.00;
		} else
			return res;
	}

	wnd.inArray = function(arr, key, value) {
		for(i = 0; i < arr.length; i++) {
			if(arr[i][key] == value) {
				return true;
			}
		}
		return false;
	}

	wnd.parseArray = function(str) {
		try {
			res = JSON.parse(str);
			if($.isArray(res)) {
				return res;
			}
		} catch(err) {
			wnd.toast(e.message);
		}
		return null;
	}

	//	------------------------------------------------------------------------------------

	wnd.storage_json = function(key) {
		//		console.log(key)
		res = wnd.stock.getItem(key);
		if(res) {
			return JSON.parse(res);
		}
		return {};
	}

	wnd.storage_array = function(key) {
		res = wnd.stock.getItem(key);
		if(res) {
			return JSON.parse(res);
		}
		return [];
	}

	wnd.storage = function(key, value) {
		if(value) {
			if(typeof(value) == 'object') {
				value = JSON.stringify(value);
			}
			wnd.stock.setItem(key, value);
		} else {
			return wnd.stock.getItem(key);
		}
	}

	wnd.storage_remove = function(key) {
		wnd.stock.removeItem(key);
	}

	//	====================================================================================
	//	====================================================================================

	wnd.showWaiting = function(showText, opts) {
		opts = opts || {};
		plus.nativeUI.showWaiting(showText, opts);
	}

	wnd.closeWaiting = function() {
		plus.nativeUI.closeWaiting();
	}

	wnd.toast = function(s) {
		plus.nativeUI.toast(s);
	}
	wnd.exit = function() {
		plus.runtime.quit();
	}
	wnd.restart = function() {
		plus.runtime.restart();
	}

	//	====================================================================================
	//	************************************************************************************

	wnd.showKeyboard = function() {
		if(plus.os.name == "iOS") {
			var webView = plus.webview.currentWebview().nativeInstanceObject();
			webView.plusCallMethod({
				"setKeyboardDisplayRequiresUserAction": false
			});
		} else {
			var Context = plus.android.importClass("android.content.Context");
			var InputMethodManager = plus.android.importClass("android.view.inputmethod.InputMethodManager");
			var main = plus.android.runtimeMainActivity();
			var imm = main.getSystemService(Context.INPUT_METHOD_SERVICE);
			imm.toggleSoftInput(0, InputMethodManager.SHOW_FORCED);
			imm.showSoftInput(main.getWindow().getDecorView(), InputMethodManager.SHOW_IMPLICIT);
		}
	}

	wnd.wndOpen = function(id, page, params) {
		mui.openWindow({
			url: page,
			id: id,
			waiting: {
				autoShow: false,
			},
			extras: params
		});
	}

	wnd.urlOpen = function(id, page, params) {
		mui.openWindow({
			url: wnd.web_host + page,
			id: id,
			waiting: {
				autoShow: false,
			},
			extras: params
		});
	}

	wnd.wndOpenNew = function(id, page, params) {
		mui.openWindow({
			url: page,
			id: id,
			createNew: true,
			waiting: {
				autoShow: false,
			},
			extras: params
		});
	}

	wnd.urlOpenNew = function(id, page, params) {
		mui.openWindow({
			url: page,
			id: id,
			createNew: true,
			waiting: {
				autoShow: false,
			},
			extras: params
		});
	}

	wnd.fireWndOpen = function(selector, pid, page, params) {
		$(selector).on('tap', function() {
			wnd.wndOpenNew(pid, page, params);
		});
	}

	wnd.fireUrlOpen = function(selector, pid, page, params) {
		$(selector).on('tap', function() {
			wnd.urlOpenNew(pid, page, params);
		});
	}

	wnd.fireOpenURL = function(selector, url) {
		$(selector).on('tap', function() {
			plus.runtime.openURL(url);
		});
	}

	wnd.fireOpenFile = function(selector, file) {
		$(selector).on('tap', function() {
			plus.runtime.openFile(file);
		});
	}

	wnd.fireOpenApp = function(selector, app) {
		$(selector).on('tap', function() {
			plus.runtime.fireOpenApp(app);
		});
	}

	wnd.formatDate = function(dt, fomrat) {
		var str = fomrat;
		var Week = ['日', '一', '二', '三', '四', '五', '六'];

		str = str.replace(/yyyy|YYYY/, dt.getFullYear());
		str = str.replace(/yy|YY/, (dt.getYear() % 100) > 9 ? (dt.getYear() % 100).toString() : '0' + (dt.getYear() % 100));

		var m = dt.getMonth() + 1;
		str = str.replace(/MM/, m > 9 ? m.toString() : '0' + m);
		str = str.replace(/M/g, m);

		str = str.replace(/w|W/g, Week[dt.getDay()]);

		str = str.replace(/dd|DD/, dt.getDate() > 9 ? dt.getDate().toString() : '0' + dt.getDate());
		str = str.replace(/d|D/g, dt.getDate());

		str = str.replace(/hh|HH/, dt.getHours() > 9 ? dt.getHours().toString() : '0' + dt.getHours());
		str = str.replace(/h|H/g, dt.getHours());
		str = str.replace(/mm/, dt.getMinutes() > 9 ? dt.getMinutes().toString() : '0' + dt.getMinutes());
		str = str.replace(/m/g, dt.getMinutes());

		str = str.replace(/ss|SS/, dt.getSeconds() > 9 ? dt.getSeconds().toString() : '0' + dt.getSeconds());
		str = str.replace(/s|S/g, dt.getSeconds());

		return str;
	}

	wnd.formatFileSize = function(size) {
		if(size > 1024 * 1024 * 1024) {
			return(size / 1024.0 / 1024.0 / 1024.0).toFixed(2) + " GB";
		} else if(size > 1024 * 1024) {
			return(size / 1024.0 / 1024.0).toFixed(2) + " MB";
		} else if(size > 1024) {
			return(size / 1024.0).toFixed(2) + " KB";
		} else {
			return size + " Byte";
		}
	}

	wnd.ajax3 = function(option) {
		var user = wnd.isLogin() ? wnd.accountInfo() : {
			userid: "",
			token: ""
		};

		console.log("小黑侠token：" + JSON.stringify(user));
		var req_data = {
			data: option.data || {},
			platform: "",
			userid: user.userid, //user.userid,
			token: user.token //user.token
		}

		//req_data = JSON.stringify(req_data);//$.base64().encode(JSON.stringify(req_data));
		//console.log(req_data);
		//console.log(wnd.req_host + option.api);
		mui.ajax(wnd.req_host + option.api, {
			data: option.data,
			dataType: 'JSON', //	服务器返回json格式数据
			timeout: 30000000, //	超时时间设置为10秒；
			type: option.type, //	HTTP请求类型
			success: function(res) {
				wnd.closeWaiting();
				var res = JSON.parse(res);
				if(res != null) {
					if(typeof res.type != undefined) {
						if(res.type == 4) {
							//alert(JSON.stringify(res) + '----------------XHX');
//							wnd.toast('登录过期，重新登录！');
//							wnd.storage("autoLogin", "false");
//							wnd.outLogin();
//							wnd.restart();
//							return;
                            app.CustomClose("osaction")
						};
					}
				};
				if(option.success) {
					option.success(JSON.stringify(res));
				}
			},
			headers: {
				"Access-Control-Allow-Headers": "X-Requested-With",
				"apikey": "2a4469adb23039b30b55b5970e34f5ac",
				"userid": user.userid,
				"token": user.token
			},
			error: function(xhr, type, err) {
				console.log(JSON.stringify(xhr));
				console.log(type)
				console.log(err)
				if(option.error) {
					console.log(wnd.req_host + option.api);

					console.log(JSON.stringify(xhr));

					option.error(type);
				}
			}
		});
	}

	wnd.post3_1 = function(option) {
		option.type = 'post';
		wnd.ajax3(option);
	}

	wnd.post3_2 = function(option) {
		option.type = 'get';
		wnd.ajax3(option);
	}

	wnd.ajax4 = function(option) {
		var _opts = {
			waiting: {
				show: true,
				text: '加载中...'
			}
		}
		option = $.extend(_opts, option);
		console.log("option:"+JSON.stringify(option))
		bShowWaiting = option.waiting;

		var user = wnd.isLogin() ? wnd.accountInfo() : {
			userid: "",
			token: ""
		};
		var req_data = {
			data: option.data || {},
			platform: "",
			userid: user.userid,
			token: user.token
		}
		
		console.log(JSON.stringify(user));
		
		mui.ajax(wnd.his_host + option.api, {
			data: option.data,
			dataType: 'JSON', //	服务器返回json格式数据
			timeout: 300000, //	超时时间设置为30秒；
			type: option.type, //	HTTP请求类型
			success: function(res) {
				wnd.closeWaiting();
				console.log(res);
				var res = JSON.parse(res);
				if(res != null) {
					if(typeof res.type != undefined) {
						if(res.type == 4) {
							//alert(JSON.stringify(res) + '---------------------lSEAGE');

//							wnd.toast('登录过期，重新登录！');
//							wnd.storage("autoLogin", "false");
//							wnd.outLogin();
//							wnd.restart();
//							return;
                            app.CustomClose("osaction")

						};
					}
				};
				if(option.success) {
					option.success(JSON.stringify(res));
				}
			},
			headers: {
				"Access-Control-Allow-Headers": "X-Requested-With",
				"apikey": "2a4469adb23039b30b55b5970e34f5ac",
				"userid": user.userid,
				"token": user.token
			},
			error: function(xhr, type, err) {
				wnd.closeWaiting();
				console.log(JSON.stringify(xhr))
				console.log(type)
				console.log(err)
				if(option.error) {
					console.log(wnd.his_host + option.api);

					console.log(JSON.stringify(xhr));

					option.error(type);
				}
			}
		});
	}

	wnd.post3_3 = function(option) {
		option.type = 'post';
		wnd.ajax4(option);
	}

	wnd.post3_4 = function(option) {
		option.type = 'get';
		wnd.ajax4(option);
	}

	wnd.guid = function() {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			var r = Math.random() * 16 | 0,
				v = c == 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		});
	};

}(window.app = {}));

//	===============================================================================
//	*******************************************************************************
/*									缓存处理类									 */

function pullRefresh(option) {
	This = this;

	This.data = [];
	This.id_small = 0;
	This.id_large = 0;

	This.option = option;
	This.option.object_id = "#" + This.option.object_id;

	This.getSetting = function() {
		return {
			container: This.option.object_id,
			down: {
				contentdown: "下拉可以刷新",
				contentover: "释放立即刷新",
				contentrefresh: "正在刷新...",
				callback: This.pulldownRefresh
			},
			up: {
				contentrefresh: "正在加载...",
				contentnomore: "没有更多数据了",
				callback: This.pullupRefresh
			}
		}
	}

	//	下拉加载具体业务实现
	This.pulldownRefresh = function() {
		setTimeout(function() {
			data = {
				last_id: This.id_large,
				type_id: 1
			};
			mui.extend(data, This.option.load_data);

			app.get2({
				method: This.option.load_method,
				data: data,
				success: function(data) {
					mui(This.option.object_id).pullRefresh().endPulldownToRefresh();

					if(data.length > 0) {
						This.id_large = data[data.length - 1].id;
						if(This.id_small == 0) {
							This.id_small = data[0].id;
						}

						for(i = data.length - 1; i >= 0; i++) {
							This.option.callback(data[i], true);
						}
					}
				},
				error: function() {
					mui(This.option.object_id).pullRefresh().endPulldownToRefresh();
				}
			})
		}, 500);
	}

	//	上拉加载具体业务实现
	This.pullupRefresh = function() {
		setTimeout(function() {
			data = {
				last_id: This.id_small,
				type_id: -1
			};
			mui.extend(data, This.option.load_data);

			app.get2({
				method: This.option.load_method,
				data: data,
				success: function(data) {
					if(data.length > 0) {
						console.log(This.option.object_id);
						mui(This.option.object_id).pullRefresh().endPullupToRefresh(false);

						This.id_small = data[data.length - 1].id;
						if(This.id_large == 0) {
							This.id_large = data[0].id;
						}

						for(i = 0; i < data.length; i++) {
							This.option.callback(data[i], false);
						}
					} else {
						mui(This.option.object_id).pullRefresh().endPullupToRefresh(true);
					}
				},
				error: function() {
					mui(This.option.object_id).pullRefresh().endPullupToRefresh(true);
				}
			});
		}, 1500);
	}

	This.start = function(interval) {
		setTimeout(function() {
			console.log("starting...");
			mui(This.option.object_id).pullRefresh().pullupLoading();
		}, 500);
	}
}
/*    按钮屏蔽通用方法           n要屏蔽的秒数，name要屏蔽的按钮                                      */
function btnsShield(n, name) {
	var btn = document.getElementById(name);
	btn.setAttribute('disabled', 'disabled');
	var run1 = setInterval(function() {
		n--;
		if(n == 0) {
			clearTimeout(run1);
			btn.removeAttribute("disabled");
		}
	}, 1000)
};

//*           链接跳转通用屏蔽事件                   					*//
var a = 0;

function Shield_Url(fn) {
	a++;
	if(a == 1) {
		fn();
	};
	setTimeout(function() {
		a = 0;
	}, 400)
}

////打开或关闭窗口////
function closeOrOpenWindow(page) {
	var Homep = plus.webview.getWebviewById('Homep');
	var Lease = plus.webview.getWebviewById('Lease');
	var Task = plus.webview.getWebviewById('Task');
	var User = plus.webview.getWebviewById('User'); //closeOrOpenWindow 
	var menu = plus.webview.getWebviewById('menu');
	var Bpage = plus.webview.getWebviewById('Bpage');
	var page_left = parseInt(page.getStyle().left);
	//关闭菜单
	page.evalJS("$('header').css({'background':'white','transition':'1s',});$('.btnsShield').fadeOut('slow');");

	if(page_left > 10) {
		$("header").animate({
			'background': 'white'
		});
		closeMenu(menu, page); //747474
		if(Homep) {
			mui.fire(Homep, 'slider', {
				"slider": "close"
			});
			Homep.evalJS("$('.mengbi').fadeOut('slow')");
		};

		if(Lease) {
			mui.fire(Lease, 'slider', {
				"slider": "close"
			});
			Lease.evalJS("$('.mengbi').fadeOut('slow')");
		};

		if(Task) {
			mui.fire(Task, 'slider', {
				"slider": "close"
			});
			Task.evalJS("$('.mengbi').fadeOut('slow')");
		};

		if(User) {
			mui.fire(User, 'slider', {
				"slider": "close"
			});
			User.evalJS("$('.mengbi').fadeOut('slow')");
		};

		if(Bpage) {
			mui.fire(Bpage, 'slider', {
				"slider": "close"
			});
			Bpage.evalJS("$('.mengbi').fadeOut('slow')");
		};

		return false;
	}
	//打开菜单
	page.evalJS("$('header').css({'background':'rgba(116,116,116,0.6)','transition':'1s',});$('.btnsShield').fadeIn('slow');");
	plus.webview.startAnimation({
		view: menu,
		styles: {
			fromLeft: "-70%",
			toLeft: "0"
		}
	}, {
		view: page,
		styles: {
			fromLeft: "0",
			toLeft: "70%"
		}
	});

	if(Homep) {
		Homep.evalJS("$('.mengbi').fadeIn('slow')");
		mui.fire(Homep, 'slider', {
			"slider": "open"
		});
	};
	if(Lease) {
		Lease.evalJS("$('.mengbi').fadeIn('slow')");
		mui.fire(Lease, 'slider', {
			"slider": "open"
		});
	};
	if(Task) {
		Task.evalJS("$('.mengbi').fadeIn('slow')");
		mui.fire(Task, 'slider', {
			"slider": "open"
		});
	};
	if(User) {
		User.evalJS("$('.mengbi').fadeIn('slow')");
		mui.fire(User, 'slider', {
			"slider": "open"
		});
	};

	if(Bpage) {
		Bpage.evalJS("$('.mengbi').fadeIn('slow')");
		mui.fire(Bpage, 'slider', {
			"slider": "open"
		});
	};
}

//关闭菜单
function closeMenu(menu, page) {
	plus.webview.startAnimation({
		view: menu,
		styles: {
			fromLeft: "0",
			toLeft: "-70%"
		}
	}, {
		view: page,
		styles: {
			fromLeft: "70%",
			toLeft: "0"
		}
	});
};

/*自定义控件*/
(function(app, $, mui) {
	/*时间查询HTML标签*/
	app.contentHTML = function(id) {
		if($('body').attr('search')) {
			return false;
		};
		var $html = $(
			'<ul class="mui-table-view  SHTML">' +
			'<li class="mui-table-view-cell mui-media list searchFather">' +
			'<div class="mui-input-row search">' +
			'<label class=""></label>' +
			'<input type="text" class="mui-input-clear" placeholder="请选择日期"  name="LiaisonType" readonly="readonly" id="SrarchStart">' +
			'<label class=""> 至 </label>' +
			'<input type="text" class="mui-input-clear" placeholder="请选择日期"  name="LiaisonType" readonly="readonly" id="SrarchEnd">' +
			'<button id="search">查询</button>' +
			'</div>' +
			'</li>' +
			'</ul>'
		);
		$(id).before($html);
		$('body').attr('search', true);

		//开始
		$("#SrarchStart").on('tap', function() {
			var spicker = new mui.DtPicker({
				type: "date",
				beginDate: new Date('2017-08-08'),
				endDate: new Date('2020-11-30')
			});
			spicker.show(function(item) {
				$("#SrarchStart").val(item.text);
			});
		});
		//结束
		$("#SrarchEnd").on('tap', function() {
			var spicker = new mui.DtPicker({
				type: "date",
				beginDate: new Date($("#SrarchStart").val()),
				endDate: new Date(2020, 11, 30)
			});
			spicker.show(function(item) {
				$("#SrarchEnd").val(item.text);
			});
		});

	};
	/*自定义搜索控件*/
	app.CustomHTML = function(id) {
		if($('body').attr('search')) {
			return false;
		};
		var $html = $(
			'<ul class="mui-table-view  SHTML">' +
			'<li class="mui-table-view-cell mui-media list searchFather">' +
			'<div class="mui-input-row search">' +
			'<div class="mui-input-row search">' +
			'<label class=""></label>' +
			'<input type="text" class="mui-input-clear" placeholder="请输入关键字查询"  name="LiaisonType" id="SrarchStart">' +
			'<button id="search">查询</button>' +
			'</div>' +
			'</li>' +
			'</ul>'
		);
		$(id).before($html);
		$('body').attr('search', true);
	};
	
//	/*设置页面距底部安全距离*/
//	app.SafeBottom = function(){
//		if(plus.os.name == "islphonex()") {
//			var  SAFE_BOTTOM_DISTANCE=34;
//		}
//	}
//	
//	
//	/*设置页面导航条高度*/
//	app.SafeNavBar = function(){
//		
//		if(plus.os.name == "islphonex()") {
//			
//		} else {
//			
//		}
//	}

	/*返回关闭*/
	app.CustomClose = function(osaction) {
		
		if(osaction == "osaction") {
			
			plus.webview.currentWebview().close();
			//plus.runtime.quit();
			console.log(plus.os.name)
			if(plus.os.name == "Android") {
				//mui.back();
				plus.runtime.quit();

				//plus.bridge.execSync("");

			} else {
				//调用第三方应用程序

				var bridge = plus.bridge;
				var success = function(msg) {
					alert("onSuccess,msg = " + msg);
				};
				var failed = function(msg) {
					alert("onFailed,msg = " + msg);
				}
				//获取回调的id
				var callbackId = bridge.callbackId(success, failed);
				//注意，这里要跟原生开发的人定好回调id在参数列表中的索引位置
				plus.bridge.exec("customPlugin", "testFunctionAsync", [callbackId, "close"]);

			}

		} 
	}

	/*自定义搜索控件*/
	app.QueryHTML = function(id) {
		if($('body').attr('search')) {
			return false;
		};
		var $html = $(
			'<div class="mui-input-row search">' +
			'<input type="text" class="mui-input-clear" placeholder="请输入关键字查询"  name="LiaisonType" id="SrarchStart">' +
			'<button id="search">查询</button>' +
			'</div>'
		);
		$html.appendTo($(id));
		//		$(id).before($html);
		$('body').attr('search', true);
	};

	app.DeleteSearch = function() {
		if($('body').attr('search')) {
			$(".SHTML").remove();
		};
		$('body').removeAttr('search');
	};
	/*自定义未读消息*/
	app.UnreadMessage = function(length) {
		var $html = $(
			'<div class="UnreadMessage">' +
			'<span class="mesText">未读消息（' + length + '）</span>' +
			'<span class="iconfont closeMessage">&#xe6f3;</span>' +
			'</div>'
		);
		$('.mui-content').after($html);
		$(".UnreadMessage").animate({
			'right': "0px"
		}, 500);
		//未读消息点击
		$html.on('tap', function() {
			mui.openWindow({
				id: 'MyMessage',
				url: '../Message/MyMessage.html',
			});
			$(".UnreadMessage").remove();
			return false;
		});
		//关闭未读消息
		$(".closeMessage").on('tap', function() {
			$(".UnreadMessage").animate({
				'right': "-200px"
			}, 300);
			return false;
		});
	}
})(app, jQuery, mui);