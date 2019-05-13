/* eslint-disable */
// Provide your access token
const accessToken = 'pk.eyJ1IjoibWFwc29mc3VtaXQiLCJhIjoiY2l1ZDF3dHE5MDAxZDMwbjA0cTR3dG50eSJ9.63Xci-GKFikhAobboF0DVQ';

// set mapbox tile layer
const mapboxTiles1 = L.tileLayer('http://mt3.google.cn/vt/lyrs=y&hl=zh-CN&gl=cn&x={x}&y={y}&z={z}');

const map2 = L.map('example2', {
	zoomControl: false, //隐藏默认缩放按钮
	attributionControl: false, //隐藏copyright
	maxZoom: "18", //最大显示层级
	minZoom: "4", //最小显示层级
//	tapTolerance:500,
//	inertia:true,
//	inertiaThreshold:0,
//	markerZoomAnimation:true,
//	fadeAnimation:false,
//	zoomAnimationThreshold:4,
//	zoomAnimation:true,
//	zoomAnimationThreshold:1000,
}).setView([31.25, 121.45], 10).addLayer(mapboxTiles1);

function test() {
	//alert(a);
	L.circleMarker([31.25, 121.45], {
		radius: 100
	}).addTo(map2);
	const m1 = L.circleMarker([31.25, 121.55], {
		radius: 10
	});
	const m2 = L.marker([31.25, 122.45]);
	const m3 = L.marker([31.25, 121.35]); //, {pmIgnore: true}

	const mGroup = L.layerGroup([m3, m2, m1]).addTo(map2);
	mGroup.pm.enable();

}

map2.on('pm:create', function(e) {
	// alert('pm:create event fired. See console for details');
	const shape = e.shape;

	const layer = e.layer;
	if(shape == "Poly") {
		//console.log(layer._latlngs); //多边形坐标

		var s = (L.GeometryUtil.geodesicArea(layer._latlngs[0])/666.0).toFixed(2);

		var marker = L.marker([layer._latlngs[0][0]['lat'],layer._latlngs[0][0]['lng']])
	    	.addTo(map2)
	    	.bindPopup('<p>'+s+'亩</p>')
	    	.openPopup();
	    $("#draw").css({
			"background":"white"
		});
		Area(s,layer._latlngs);
		
	} else if(shape == "Marker") {
		console.log(layer._latlng);  //标记点坐标
	} else if(shape == "Line") {
		console.log(layer._latlngs); //线坐标
	} else if(shape == "Circle") {
		console.log(layer._latlng); //圆心
		console.log(layer._mRadius); //半径
	}

	layer.on('pm:cut', function(ev) {
		console.log('cut event on layer');
		console.log(ev);
	});

	//alert(JSON.stringify(layer._latlngs));

});
map2.on('pm:cut', function(e) {
	console.log('cut event on map');
	console.log(e);
});
map2.on('pm:remove', function(e) {
	//console.log('pm:remove event fired. See console for details');
	// alert('pm:remove event fired. See console for details');
	console.log(e);
});
map2.on('pm:drawstart', function(e) {
	console.log('pm:drawstart');
	console.log(e);

});

map2.on('pm:edit', function(e) {
	console.log(e);
});

map2.on('accuratepositionprogress', onAccuratePositionProgress);
map2.on('accuratepositionfound', onAccuratePositionFound);
map2.on('accuratepositionerror', onAccuratePositionError);

//map2.findAccuratePosition({
//	maxWait: 10000,
//	desiredAccuracy: 20
//});

function onAccuratePositionError(e) {
	//addStatus(e.message, 'error');
}

function onAccuratePositionProgress(e) {
	//var message = 'Progressing … (Accuracy: ' + e.accuracy + ')';
	//addStatus(message, 'progressing');
}

//定位成功后
function onAccuratePositionFound(e) {
	//var message = 'Most accurate position found (Accuracy: ' + e.accuracy + ')';
	//addStatus(message, 'done');

	//console.log(JSON.stringify(e.latlng));
	//坐标变换
	var temp =  WGS84_to_GCJ02.creatNew().transform(e.latlng.lat, e.latlng.lng);
	console.log(JSON.stringify(temp));
	map2.setView(temp);  
	//L.marker(temp).addTo(map2);   
} 
//
//map2.pm.addControls({
//  drawMarker: true,
//  drawPolygon: true,
//  editPolygon: true,
//  drawPolyline: true,
//  deleteLayer: true
//  
//});

///绘制MARKER
//var sss=XHX_flymarker.creatNew(map2,[31.25, 121.45],"sss");

//绘制区域
//var area = XHX_region.creatNew(map2, [
//	[31.30, 121.45],
//	[31.50, 121.45],
//	[31.25, 121.80]
//], "22"); 


//Map
//绘制轨迹
//var area=XHX_track.creatNew(map2,[[31.30, 121.45],[31.50, 121.45],[31.25, 121.80]],"22");
//console.log(area.getArea());
//
map2.on('selectRegion', onselectRegion);
////点击区域获取地块对象
function onselectRegion(e) {
	//var message = 'Progressing … (Accuracy: ' + e.accuracy + ')';
	//addStatus(message, 'progressing');
	//	var lat = e.target._latlngs[0][0];
	//	console.log(lat['lat'],lat['lng']);
	//	var marker = L.marker([lat['lat'],lat['lng']])
	//  .addTo(map2)
	//	console.log(lat);
}
//坐标变换
//var temp =  WGS84_to_GCJ02.creatNew().transform(31.3, 121.45);
//temp.transform(31.3, 121.45);
//console.log(temp); 
//
////开始绘图
function drawRegion(cb){
	var area = map2.pm.Draw.Poly.toggle();
};