$(function() {
	var wHeight = $(window).height(),
		hHeight = $(".header").height(),
		nHeight = $(".soso").height(),
		fHeight = $(".footer").height();
	$(".main").height(wHeight - hHeight - nHeight - fHeight - 45);
	var myscroll = new iScroll("information",{
		vScrollbar:false
	});
	oAjax("http://localhost:8080/Proxy/FootBall/user/json/userinfo.do",localStorage.getItem("id"))
	$(".main ul").children().click(function() {
		$(this).addClass("pkqActives").siblings().removeClass("pkqActives");
		var index = $(this).index();
		$(".main > #information > div").children().eq($(this).index()).css("display", "block").siblings().css("display", "none");
	});
	$(".main ul").children().eq(1).click(function(){
		$.ajax({
			url:"http://localhost:8080/Proxy/FootBall/attention/json/queryall/followed.do",
			data:{"loginsuserid":localStorage.getItem("id")},
			success:function(x){
				var xda = JSON.parse(x);
				console.log(xda);
			}
		});
	})
	$(".main ul").children().eq(2).click(function(){
		$.ajax({
			url:"http://localhost:8080/Proxy/FootBall/attention/json/queryall/fans.do",
			data:{"loginsuserid":localStorage.getItem("id")},
			success:function(y){
				var yda = JSON.parse(y);
				console.log(yda);
			}
		});
	})
	function oAjax (url,id){
		$.ajax({
			url:url,
			data:{id:localStorage.getItem("id")},
			success:function(d){
				var da = JSON.parse(d).data;
				$(".pkq h3").html(da.userinfo.nickname);
				$(".pkq p").html(da.userinfo.signnature);
			}
		});
	}
})