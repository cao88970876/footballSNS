$(function(){
		var btn = $("#btn");
		btn.on("click",function(e){
			var	usnm = $("#user").val(),
				pwd = $("#pwd").val(),
				nknm = $("#nickname").val(),
				box = $(".box"),
				rusnm = /^[0-9]{11}$/,
				rpwd = /^[a-z0-9_-]{6,18}$/;
				rnknm = /^[\u4e00-\u9fa5]*$/;
			e.preventDefault();
			if(rusnm.test(usnm) && rpwd.test(pwd) && rnknm.test(nknm)){
				$.ajax({
					url:"http://localhost:8080/Proxy/FootBall/user/json/reg.do",
					data:{"loginname":usnm , "password":pwd , "nickname":nknm},
					success:function(d){
						var oDate = JSON.parse(d);
						if(oDate.ecode==200){
							location.href = "index.html";
							
						}else if(oDate.ecode==500){
							box.css("opacity", 1);
							setTimeout(function() {
								box.css("opacity", 0)
							}, 2000);
						}
					}
				});
			}
		})
})