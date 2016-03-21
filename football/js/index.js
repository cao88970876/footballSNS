$(function() {
	var btn = $("#btn");
	btn.on("tap", function(e) {
		var usnm = $("#username").val(),
			pwd = $("#pwd").val(),
			box = $(".box"),
			rusnm = /^[0-9]{11}$/,
			rpwd = /^[a-z0-9_-]{6,18}$/;
		e.preventDefault();
		if (rusnm.test(usnm) && rpwd.test(pwd)) {
			$.ajax({
				url: "http://localhost:8080/Proxy/FootBall/user/json/login.do",
				data: {
					"loginname": usnm,
					"password": pwd
				},
				success: function(d) {
					var oDate = JSON.parse(d);
					var oId = oDate.data.loginuser.id;
					if (oDate.ecode == 200) {
						console.log(oId);
						localStorage.setItem("usnm", usnm);
						localStorage.setItem("pwd", pwd);
						localStorage.setItem("id",oId);
						location.href = "home_page.html";
					} else {
						if (oDate.ecode == 500) {
							box.css("opacity", 1);
							setTimeout(function() {
								box.css("opacity", 0)
							}, 2000);
						}
					}
				}
			});
		} else {
			box.css("opacity", 1);
			setTimeout(function() {
				box.css("opacity", 0)
			}, 2000);
		}
	})
})