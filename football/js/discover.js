$(function() {
	var wHeight = $(window).height(),
		hHeight = $(".header").height(),
		sHeight = $(".soso").height(),
		fHeight = $(".footer").height();
	//$(".main").height(wHeight - hHeight - sHeight - fHeight - 45);
	$("#main").height(wHeight - hHeight - sHeight - fHeight - 45);
	var myscroll = new iScroll("main", {
		vScrollbar: false
	});
	$.ajax({
		url: "http://localhost:8080/Proxy/FootBall/user/json/queryall.do",
		data: {
			"loginsuserid": localStorage.getItem("id"),
			"page.pageNo": 1
		},
		success: function(d) {
			var oData = JSON.parse(d).data.userlist;
			for (var i = 0; i < oData.length; i++) {
				var img = oData[i].avatarpath;
				var h3 = oData[i].nickname;
				var p = oData[i].signnature;
				var name = oData[i].id;
				var pkq = $("<div class='pkq'></div>");
				var oDiv = $("<div></div>");
				var oImg = $("<img src='" + "http://101.200.173.217:8080/FootBall" + img + "' />");
				var oH3 = $("<h3>" + h3 + "</h3>");
				var oP = $("<p>" + p + "</p>");
				var guan = $("<div name='" + name + "' class='guan'>关注</div>")
				oDiv.append(oImg);
				oDiv.append(oH3);
				oDiv.append(oP);
				oDiv.append(guan);
				pkq.append(oDiv);
				$(".main").append(pkq);
				oImg[0].onload = function() {
					myscroll.refresh();
				}
			}
		}
	});
	//var oGuan = $(".guan");
	//for (var j = 0; j < oGuan.length; j++) {)
		$(".main").delegate(".guan", "click",function() {
//			alert(9)
			//			console.log(oGuan[j])
			$.ajax({
				url: "http://localhost:8080/Proxy/FootBall/attention/json/follow.do",
				data: {
					"loginsuserid": localStorage.getItem("id"),
					"tagetuserid": $(".guan").attr("name")
				},
				success: function(c) {
					var da = JSON.parse(c);
					console.log(da);
				}
			});
		})
	//}
	myscroll.refresh();
})