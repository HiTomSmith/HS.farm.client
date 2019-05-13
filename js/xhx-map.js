// 项目
function XHX_PlantProject() {
	this.plantprojectid;
	this.projectname;
	this.projectperson;
	this.projectdispatch;
	this.starttime;
	this.endtime;
	this.contacts;
	this.contactstel;
	this.introduction;
	this.quantity;
	this.region;
	this.createdate;
	this.deletemark;
	this.enabledmark;
	this.description;
	this.organizeid;
	this.projectpersonid;
	this.provinceid;
	this.cityid;
	this.countyid;
	this.address;
	this.geocoding;
}

//任务
function XHX_ProjectTask() {
	this.projecttaskid;
	this.plantprojectid;
	this.taskcord;
	this.taskname;
	this.tasktype;
	this.starttime;
	this.endtime;
	this.quantity;
	this.region;
	this.taskperson;
	this.createdate;
	this.deletemark;
	this.enabledmark;
	this.description;
	this.organizeid;
	this.medicamentype;
	this.croptype;
	this.taskpersonid;
	this.provinceid;
	this.cityid;
	this.countyid;
	this.address;
	this.geocoding;

}
//任务分包
function XHX_TaskDistribution() {
	this.taskdistributionid;
	this.projecttaskid;
	this.quantity;
	this.region;
	this.undertaker;
	this.isbear;
	this.price;
	this.workdescription;
	this.liaison;
	this.liaisontype;
	this.examine;
	this.distributiontype;
	this.expirationtime;
	this.createdate;
	this.deletemark;
	this.enabledmark;
	this.description;
	this.organizeid;
	this.undertakerid;
	this.provinceid;
	this.cityid;
	this.countyid;
	this.address;
	this.taskname;
	this.geocoding;
	this.tasktype;

}

//作业量
function XHX_WorkNumber() {
	this.worknumberid;
	this.datarecordid;
	this.workpersonid;
	this.projectid;
	this.teamid;
	this.imei;
	this.spraylength;
	this.sprayarea;
	this.regionarea;
	this.spray;
	this.spraytime;
	this.region;
	this.location;
	this.geocoding;
	this.createdate;
	this.deletemark;
	this.enabledmark;
	this.description;
};

//作业轨迹
function XHX_DataRecord() {
	this.datarecordid;
	this.userid;
	this.taskid;
	this.worknumberid;
	this.projectid;
	this.teamid;
	this.imei;
	this.begintime;
	this.endtime;
	this.sprayminute;
	this.spraywidth;
	this.pesticideamount;
	this.isspray;
	this.createdate;
	this.deletemark;
	this.enabledmark;
	this.description;
};

//gps点
function XHX_GpsRecord() {
	this.gpsrecordid;
	this.imei;
	this.lng;
	this.lat;
	this.height;
	this.speed;
	this.isspray1;
	this.isspray2;
	this.spray1;
	this.spray2;
	this.gpstime;
	this.createdate;
	this.deletemark;
	this.enabledmark;
	this._description;
	//绘制轨迹
	this.draw = function(ssss) {
		this.Console("draw");

	}
};

// 轨迹  --单个任务轨迹
var XHX_track = {
	creatNew: function(map, point_arr, recordid) {
		var polyline = L.polyline(point_arr, {
			color: '#f7e61c',
			opacity: 1,
			weight: 3,
			clickable: false
		}).addTo(map);
		polyline.id = recordid;
		polyline.type="track";
		return polyline;
	},
	gettrack:function(map,recordid){
		
		var polyline;
		for(var l in map._layers){
			
			if (map._layers[l].id==recordid){
				polyline= map._layers[l];
				break;
			}
		}
		
		return polyline
	},
	removetrack:function(map,recordid){
	
		var polyline;
		for(var l in map._layers){
			
			if (map._layers[l].id==recordid){
				polyline= map._layers[l];
				break;
			}
		}
		map.removeLayer(polyline);
	},
	removealltrack:function(map){
	
		var polyline;
		for(var l in map._layers){
			
			if (map._layers[l].type=='track' && map._layers[l].id!='track'){
				map.removeLayer(map._layers[l]);
			}
		}
		
	},
	getalltrack:function(map){
		var polyline=[];
		for(var l in map._layers){
			
			if (map._layers[l].type=='track' && map._layers[l].id!='track'){
				
				 for(var j in map._layers[l]._latlngs){
				 	polyline.push(map._layers[l]._latlngs[j]);
				 }
			
			}
		}
		
		return polyline
	}

};

//区域
var XHX_region = {

	creatNew: function(map, point_arr, recordid) {
		var polygon = L.polygon(point_arr, {
			color: 'green',
			opacity: 0.5,
			weight: 3,
			clickable: false
		}).addTo(map);
		polygon.id = recordid;
		polygon.type = "region";
		polygon.getArea = function(LatLngs) {

			var area = L.GeometryUtil.geodesicArea(polygon.getLatLngs()[0])
			return(area / 666.0).toFixed(2);
		};
		polygon.onselectRegion = function(pos) {

			this.fire('accuratepositionfound', pos);
		};
		//polygon.fire('selectRegion', polygon);
		polygon.on('click', onselectRegion, polygon);
		return polygon;
	},
	removeregion:function(map,recordid){
	
		var polyline;
		for(var l in map._layers){
			
			if (map._layers[l].id==recordid){
				polyline= map._layers[l];
				break;
			}
		}
		map.removeLayer(polyline);
	},
	removeallregion:function(map){
	
		var polyline;
		for(var l in map._layers){
			
			if (map._layers[l].type=='region'){
				map.removeLayer(map._layers[l]);
			}
		}
		
	},
	
	

}

//飞机位置
var XHX_flymarker = {
	creatNew: function(map, point, recordid) {
		if(mark) {
			map.removeLayer(mark);
		};
		var mark = L.marker(point, {
			draggable: false, // 使图标可拖拽
			title: "1",
			opacity: 1,
			clickable: true,
			icon: L.divIcon({
				className: 'leaflet-icon',
				iconSize: [5, 20],
				html: '<img src="../../img/XzUav.png"  style="width: 26px; height:26px;position: relative;bottom: 0px" /><p style="color: #000000;top: 0px;text-shadow:1PX 1PX 1PX #FFFFFF"></p>'
			})
		}).addTo(map);
		mark.id = recordid;
		return mark;
	},

creatIcon: function(map, point, recordid,html1){
		if(mark) {
			map.removeLayer(mark);
		};
		var mark = L.marker(point, {
			draggable: false, // 使图标可拖拽
			title: "1",
			opacity: 1,
			clickable: true,
			icon: L.divIcon({
				className: 'leaflet-icon',
				iconSize: [5, 20],
				html: html1,
			})
		}).addTo(map);
		mark.id = recordid;
		return mark;
	}

}

//实时面积计算
//1.获取最后一次轨迹的结束时间，
//2.获取当前定位信息
//3.分离喷洒区段
//4.获取喷幅，计算面积
function ConstantlyArea(GpsRecords, SprayWidth) {

	//喷洒段
	var spraylist = [];

	var gpsRs = [];

	//分离喷洒区段
	for(var i in GpsRecords) {
		if(GpsRecords[i].IsSpray1 == 1) {
			gpsRs.push(GpsRecords[i]);
		} else {
			if(gpsRs.length > 0) {
				//for(int j=0;j<gpsRs.length;j++){
				//}

				var temp = [];

				for(var j = 0; j < gpsRs.length; j++) {
					temp.push(gpsRs[j]);
				}

				spraylist.push(temp);
				//清空

				gpsRs.splice(0, gpsRs.length);

			}
		}

	}

	var juli = 0;
	for(var i in spraylist) {
		for(var j = 0; j < spraylist[i].length - 1; j++) {

			juli = juli + getFlatternDistance(parseFloat(spraylist[i][j].Lat), parseFloat(spraylist[i][j].Lng), parseFloat(spraylist[i][j + 1].Lat), parseFloat(spraylist[i][j + 1].Lng));

		}

	}

	return SprayWidth * juli / 666.66;
}

/**
 * approx distance between two points on earth ellipsoid
 * @param {Object} lat1
 * @param {Object} lng1
 * @param {Object} lat2
 * @param {Object} lng2
 */
function getFlatternDistance(lat1, lng1, lat2, lng2) {
	var EARTH_RADIUS = 6378137.0; //单位M

	var radLat1 = getRad(lat1);
	var radLat2 = getRad(lat2);

	var a = radLat1 - radLat2;
	var b = getRad(lng1) - getRad(lng2);

	var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
	s = s * EARTH_RADIUS;
	s = Math.round(s * 10000) / 10000.0;

	return s;

}

function getRad(d) {
	var PI = Math.PI;
	return d * PI / 180.0;
}