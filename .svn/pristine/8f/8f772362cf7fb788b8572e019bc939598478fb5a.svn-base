var WGS84_to_GCJ02 = {
	creatNew: function() {
		var w84 = {};
		var a = 6378245.0;
		var ee = 0.00669342162296594323;

		w84.outOfChina = function(lat, lon) {

			if(lon < 72.004 || lon > 137.8347)
				return true;
			if(lat < 0.8293 || lat > 55.8271)
				return true;

			return false;

		};

		w84.transform = function(wgLat, wgLon) {

			if(w84.outOfChina(wgLat, wgLon)) {
				return [wgLat, wgLon];
			};
			dLat = w84.transformLat(wgLon - 105.0, wgLat - 35.0);
			dLon = w84.transformLon(wgLon - 105.0, wgLat - 35.0);
			radLat = wgLat / 180.0 * Math.PI;
			magic = Math.sin(radLat);
			magic = 1 - ee * magic * magic;
			sqrtMagic = Math.sqrt(magic);
			dLat = (dLat * 180.0) / ((a * (1 - ee)) / (magic * sqrtMagic) * Math.PI);
			dLon = (dLon * 180.0) / (a / sqrtMagic * Math.cos(radLat) * Math.PI);
			mgLat = wgLat + dLat;
			mgLon = wgLon + dLon;

			return [mgLat, mgLon];

		};

		w84.transformLat = function(x, y) {

			var ret = -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * x * y + 0.2 * Math.sqrt(Math.abs(x));
			ret += (20.0 * Math.sin(6.0 * x * Math.PI) + 20.0 * Math.sin(2.0 * x * Math.PI)) * 2.0 / 3.0;
			ret += (20.0 * Math.sin(y * Math.PI) + 40.0 * Math.sin(y / 3.0 * Math.PI)) * 2.0 / 3.0;
			ret += (160.0 * Math.sin(y / 12.0 * Math.PI) + 320 * Math.sin(y * Math.PI / 30.0)) * 2.0 / 3.0;

			return ret;

		};

		w84.transformLon = function(x, y) {

			var ret = 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * Math.sqrt(Math.abs(x));
			ret += (20.0 * Math.sin(6.0 * x * Math.PI) + 20.0 * Math.sin(2.0 * x * Math.PI)) * 2.0 / 3.0;
			ret += (20.0 * Math.sin(x * Math.PI) + 40.0 * Math.sin(x / 3.0 * Math.PI)) * 2.0 / 3.0;
			ret += (150.0 * Math.sin(x / 12.0 * Math.PI) + 300.0 * Math.sin(x / 30.0 * Math.PI)) * 2.0 / 3.0;

			return ret;

		};

		w84.transformLatLog = function(latlogs) {

			var gps = [];

			for(var j in latlogs) {

				//console.log(JSON.stringify(obj[j]));

				temp = w84.transform(obj[j].Lat, obj[j].Lng);
				// console.log(JSON.stringify(temp));
				gps.push([temp[0], temp[1]]);
			}

			return gps;
		};

		return w84;
	}

}
