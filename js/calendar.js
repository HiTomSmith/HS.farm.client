$(function() {
    var oDate = new Date();
    var dayNum = 0;
    var oYear = oDate.getFullYear();
    var oMonth = oDate.getMonth() + 1;
    var oDay = oDate.getDate();
    var currentYear = oDate.getFullYear();
    var currentMonth = oDate.getMonth() + 1;
    var currentDay = oDate.getDate();

    var bBtn = true;//开关
    //生成主体框架
    $("#data-con").append('<div class="data-header"><div class="prev-mon"><</div><div class="next-mon">></div><div class="current-mon"><span class="year"></span>年<span class="month"></span>月</div></div>');
    $("#data-con").append('<table cellpadding="0" cellspacing="0"><thead><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th><th>日</th></thead><tbody></tbody></table>');

    //判断月份的天数
    if (oMonth == 1 || oMonth == 3 || oMonth == 5 || oMonth == 7 || oMonth == 8 || oMonth == 10 || oMonth == 12) {
        dayNum = 31;
    }
    else if (oMonth == 4 || oMonth == 6 || oMonth == 9 || oMonth == 11) {
        dayNum = 30;
    }
    else if (oMonth == 2 && isLeapYear(year)) {
        dayNum = 29;
    }
    else {
        dayNum = 28;
    }
    //生成td
    for (var i = 0; i < 7; i++) {
        var oTbody = $("#data-con").find("tbody");
        for (var i = 0; i < 6; i++) {
            var oTr = document.createElement('tr');
            for (var j = 0; j < 7; j++) {
                var oTd = document.createElement('td');
                $(oTr).append(oTd);
            }
            $(oTbody).append(oTr);
        }
        $("#data-con").find("table").append(oTbody);

    }

    //插入日期
    function showDate(year, month) {
        //判断是否润年  
        function isLeapYear(year) {
            if (year % 4 == 0 && year % 100 != 0) {
                return true;
            }
            else {
                if (year % 400 == 0) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
        $(".year").text(oYear);
        $(".month").text(oMonth);

        //设置当月第一天的星期数
        var aTd = $("#data-con").find('td');
        $(aTd).text('');
        $(aTd).removeClass("current");
        oDate.setFullYear(year);
        oDate.setMonth(month - 1);
        oDate.setDate(1);
        
        

        switch (oDate.getDay()) {//+'<span>日</span>'
            case 0:
                for (var i = 0; i < dayNum; i++) {
                	 var s = '0';
                    if(i<9){
                        a = i+1;
                        b = s+a;
                    }else{
                        b = i+1;
                    };
                    $(aTd).eq(i + 6).html(b + '<br/><span>日</span>');
                }
                break;
            case 1:
                for (var i = 0; i < dayNum; i++) {
                	 var s = '0';
                    if(i<9){
                        a = i+1;
                        b = s+a;
                    }else{
                        b = i+1;
                    };
                    $(aTd).eq(i).html(b+'<br/><span>日</span>');
                }
                break;
            case 2:
                for (var i = 0; i < dayNum; i++) {
                	 var s = '0';
                    if(i<9){
                        a = i+1;
                        b = s+a;
                    }else{
                        b = i+1;
                    };
                    $(aTd).eq(i + 1).html(b +'<br/><span>日</span>');
                }
                break;
            case 3:
                for (var i = 0; i < dayNum; i++) {
                	 var s = '0';
                    if(i<9){
                        a = i+1;
                        b = s+a;
                    }else{
                        b = i+1;
                    };
                    $(aTd).eq(i + 2).html(b+'<br/><span>日</span>');
                }
                break;
            case 4:
                for (var i = 0; i < dayNum; i++) {
                	 var s = '0';
                    if(i<9){
                        a = i+1;
                        b = s+a;
                    }else{
                        b = i+1;
                    };
                    $(aTd).eq(i + 3).html(b +'<br/><span>日</span>');
                }
                break;
            case 5:
                for (var i = 0; i < dayNum; i++) {
                    var s = '0';
                    if(i<9){
                        a = i+1;
                        b = s+a;
                    }else{
                        b = i+1;
                    };
                    $(aTd).eq(i + 4).html(b+'<br/><span>日</span>');
                }
                break;
            case 6:
                for (var i = 0; i < dayNum; i++) {
                	 var s = '0';
                    if(i<9){
                        a = i+1;
                        b = s+a;
                    }else{
                        b = i+1;
                    };
                    $(aTd).eq(i + 5).html(b+'<br/><span>日</span>');
                }
                break;
        }
    }
    showDate(oDate.getFullYear(), oDate.getMonth() + 1);//初始化日期
    //下一月
    $(".next-mon").on("click", function() {
        ++oMonth;
        if (oMonth > 12) {
            oMonth = 1;
            ++oYear;
            $(".year").text(oYear);
        }
        $(".month").text(oMonth);
        showDate(oYear, oMonth);


        if (oYear >= currentYear) {
            if (oMonth >= currentMonth) {
                $("#data-con").find('td').removeClass("disable");
            }
            if (oYear == currentYear && oMonth == currentMonth) {
                for (var i = 0; i < $("#data-con").find('td').length; i++) {
                    if ($("#data-con").find('td').eq(i).text() == currentDay) {
                        $("#data-con").find('td').eq(i).addClass("current");
                    }
                    if ($("#data-con").find('td').eq(i).text() < currentDay) {
                        $("#data-con").find('td').eq(i).addClass("disable");
                    }
                }
            }
        }
        if ($("#data-con").find(".select-box").length) {

            $("#select-box").hide()
        };
		

    });

    //上一月
    $(".prev-mon").on("click", function() {
        --oMonth;
        if (oMonth < 1) {
            oMonth = 12;
            --oYear;
            $(".year").text(oYear);
        }
        $(".month").text(oMonth);
        showDate(oYear, oMonth);


        if (oYear == currentYear) {
            if (oMonth < currentMonth) {
                $("#data-con").find('td').addClass("disable");
            }

            if (oMonth == currentMonth) {
                for (var i = 0; i < $("#data-con").find('td').length; i++) {
                    if ($("#data-con").find('td').eq(i).text() == currentDay) {
                        $("#data-con").find('td').eq(i).addClass("current");
                    }
                    if ($("#data-con").find('td').eq(i).text() < currentDay) {
                        $("#data-con").find('td').eq(i).addClass("disable");
                    }
                }
            }
        }
        if ($("#data-con").find(".select-box").length) {

            $("#select-box").hide()
        }
		
    });

    //当前日期样式
    function showStyle(currentYear, currentMonth) {
        var aTd = $("#data-con").find('td');
        for (var i = 0; i < $(aTd).length; i++) {
            if (currentYear == $(".year").text() && currentMonth == $(".month").text()) {
                if ($(aTd).eq(i).text() == oDay) {
                    $(aTd).eq(i).addClass("current");
                }
            }
            if (currentYear == $(".year").text() && currentMonth >= $(".month").text()) {
                if ($(aTd).eq(i).text() < oDay) {
                    $(aTd).eq(i).addClass("disable");
                }
            }
        }
		
		
    }
    showStyle(oDate.getFullYear(), oDate.getMonth() + 1);
    
    ///当前日期的样式 oMonth oYear oMonth
   // oDate  Date.parse(yser+'-'+month+'-'+$("#data-con").find('td').eq(i).html().substr(0,2));
    var yser = $(".year").text();
    var month = $(".month").text();
    $("#data-con").find('td').each(function(i){
    	if(Date.parse(oYear+'-'+oMonth+'-'+oDay)==Date.parse(yser+'/'+month+'/'+$("#data-con").find('td').eq(i).html().substr(0,2))){
    		$("#data-con").find('td').eq(i).css({
    			"background":"black",
    			"color":"white"
    		});
    		//console.log('相了')
    	};
        $("#data-con").find('td').eq(i).on('click',function(){
            if($("#data-con").find('td').eq(i).text()){
            	console.log(yser+'-'+month+'-'+$("#data-con").find('td').eq(i).html().substr(0,2));
            };
        });
    });

    $("#data-con").on("click", "#close", function() {
        $("div").remove(".select-box");
    });

    $(document).on("click",function(){
        $("div").remove(".select-box");
    });
})
