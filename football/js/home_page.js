window.onload = function() {
	var wHeight = $(window).height(),
		hHeight = $(".header").height(),
		nHeight = $(".nav").height(),
		fHeight = $(".footer").height();
	$(".list").height(wHeight - hHeight - nHeight - fHeight - 10);
	$(".main2").height(wHeight - hHeight - fHeight);
	var myscroll = new iScroll("wrapper",{
		probeType: 3,
		vScrollbar:false
	});
	var myscroll2 = new iScroll("main2",{
		vScrollbar:false
	});
	$("#hot").click(function(){
		$(".main").css("display","block").siblings().css("display","none");
		$(this).addClass("actives").siblings().removeClass("actives");
		myscroll.refresh();
	})
	$("#follow").click(function(){
		$(".main2").css("display","block").siblings().css("display","none");
		$(this).addClass("actives").siblings().removeClass("actives");
		myscroll2.refresh();
//		myscroll.refresh();
//		myscroll.scrollTo(0,0,0);
	})
	$.ajax({
			async:true, 
			url:"http://localhost:8080/Proxy/FootBall/tweet/json/query/hotspot.do",
			data:{"category":1},
			success:function(d){
				var oDate = JSON.parse(d).data.tweetlist;
				for(var i = 0;i<oDate.length;i++){
					var img = oDate[i].defaultFileName;
					var conten = oDate[i].content;
					var oDl = $(document.createElement("dl"));
					var oDt = $(document.createElement("dt"));
					var oDd = $(document.createElement("dd"));
					var oImg = $("<img src='" + "http://101.200.173.217:8080/FootBall" + oDate[i].defaultFilePath + img +"' />");
					oDt.append(oImg);
					oDd.html(conten);
					oDl.append(oDt); 
					oDl.append(oDd); 
					$(".pige1").append(oDl);
 					//oDt.html("<img src=http://101.200.173.217:8080/FootBall/upload/files/20150715/thumbnail"+img+"/>");
					oImg[0].onload = function(){
						myscroll.refresh();
					}
					//$(".pige").appendChild(oDl)
					//oDl.appendTo(pige)
				}
//				    console.log($(".user").height());
//				    console.log($(".user"))
//				    //myscroll.refresh();
//					console.log(pige);
			}
		});
	$(".nav > ul").children().click(function(){     
		var pige = $(".pige");
		$(this).addClass("lActives").siblings().removeClass("lActives");
		var index = $(this).index();
		console.log(index)
		$(".list > .user").children().eq($(this).index()).css("display","block").siblings().css("display","none").empty();
		$.ajax({
			async:true, 
			url:"http://localhost:8080/Proxy/FootBall/tweet/json/query/hotspot.do",
			data:{"category":index+1},
			success:function(d){
				pige.empty();
				var oDate = JSON.parse(d).data.tweetlist;
				for(var i = 0;i<oDate.length;i++){
					var img = oDate[i].defaultFileName;
					var conten = oDate[i].content;
					var oDl = $(document.createElement("dl"));
					var oDt = $(document.createElement("dt"));
					var oDd = $(document.createElement("dd"));
					var oImg = $("<img src='" + "http://101.200.173.217:8080/FootBall" + oDate[i].defaultFilePath + img +"' />");
					oDt.append(oImg);
					oDd.html(conten);
					oDl.append(oDt); 
					oDl.append(oDd); 
					pige.append(oDl);
 					//oDt.html("<img src=http://101.200.173.217:8080/FootBall/upload/files/20150715/thumbnail"+img+"/>");
					oImg[0].onload = function(){
						myscroll.refresh();
					}
					//$(".pige").appendChild(oDl)
					//oDl.appendTo(pige)
				}
				    console.log($(".user").height());
				    console.log($(".user"))
				    //myscroll.refresh();
					console.log(pige);
			}
		});
//		myscroll.refresh();
		myscroll.scrollTo(0,0,0);
	})

	myscroll.slideDown(function(){
		alert(1)
	})
		

};