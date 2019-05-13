	
	$(function(){
		$.getclientdata();
	})
	var clientdataItem = [];
	var clientorganizeData = [];
	var clientdepartmentData = [];
	var clientpostData = [];
	var clientroleData = [];
	var clientuserGroup = [];
	var clientuserData = [];
	var clientgoodsData = [];
	var authorizeMenuData = [];
	var authorizeButtonData = [];
	var authorizeColumnData = [];
	var clientteamdata = [];
	var clienttddata = [];
	var topOrganize = {};
	$.getclientdata = function () {
    $.ajax({
        url:"http://192.168.1.10:8088/ClientData/GetClientDataJson",
        type: "post",
        dataType: "json",
        async: false,
        success: function (data) {
        	alert(data);
            topOrganize = data.topOrganize;
            clientdataItem = data.dataItem;
            clientorganizeData = data.organize;
            clientdepartmentData = data.department;
            clientpostData = data.post;
            clientroleData = data.role;
            clientuserGroup = data.userGroup;
            clientuserData = data.user;
            clientgoodsData = data.goods;
            authorizeMenuData = data.authorizeMenu;
            authorizeButtonData = data.authorizeButton;
            authorizeColumnData = data.authorizeColumn;
            clientteamdata = data.getteam;
            clienttddata = data.gettd;
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
        	console.log(JSON.stringify(XMLHttpRequest));
        	console.log(textStatus);
        	console.log(errorThrown);
        }
    });
  }