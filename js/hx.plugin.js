document.addEventListener("plusready",
function() {
	// 声明的JS“扩展插件别名”
	var _BARCODE = 'bluetooth',
	B = window.plus.bridge;
	var bluetooth = {
		init: function(successCallback, errorCallback) {
			var success = typeof successCallback !== 'function' ? null: function(args) {
				successCallback(args);
			},
			fail = typeof errorCallback !== 'function' ? null: function(code) {
				errorCallback(code);
			};
			callbackID = B.callbackId(success, fail);
			
			return B.exec(_BARCODE, "init", [callbackID,""]);
		},
		search: function(key, successCallback, errorCallback) {
			var success = typeof successCallback !== 'function' ? null: function(args) {
				successCallback(args);
			},
			fail = typeof errorCallback !== 'function' ? null: function(code) {
				errorCallback(code);
			};
			callbackID = B.callbackId(success, fail);
			
			return B.exec(_BARCODE, "search", [callbackID,key]);
		},
		connect: function(id,successCallback, errorCallback) {
			var success = typeof successCallback !== 'function' ? null: function(args) {
				successCallback(args);
			},
			fail = typeof errorCallback !== 'function' ? null: function(code) {
				errorCallback(code);
			};
			callbackID = B.callbackId(success, fail);
			return B.exec(_BARCODE, "connect", [callbackID,id]);
		},
		disconnect: function(force,successCallback, errorCallback) {
			var success = typeof successCallback !== 'function' ? null: function(args) {
				successCallback(args);
			},
			fail = typeof errorCallback !== 'function' ? null: function(code) {
				errorCallback(code);
			};
			callbackID = B.callbackId(success, fail);
			return B.exec(_BARCODE, "disconnect", [callbackID,force]);
		},
		read: function(msg, successCallback, errorCallback) {
			var success = typeof successCallback !== 'function' ? null: function(args) {
				successCallback(args);
			},
			fail = typeof errorCallback !== 'function' ? null: function(code) {
				errorCallback(code);
			};
			callbackID = B.callbackId(success, fail);
			return B.exec(_BARCODE, "read", [callbackID, msg]);
		}
	};
	window.plus.bluetooth = bluetooth;
},
true);
