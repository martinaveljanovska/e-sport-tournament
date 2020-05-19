$(function () {
	var paywall = new InplayerPaywall('ddd49fd0-fe60-4596-b656-4745c0527f27', [{ id: 101433 }]);

	$(".inplayer-paywall-logout").parent().hide();
	paywall.on("authenticated", function () {
		$(".inplayer-paywall-login").parent().hide();
		$(".inplayer-paywall-logout").parent().show();
	});

	paywall.on("logout", function () {
		location.reload();
	});

	paywall.on("inject", function () {
		$(".inplayer-paywall").addClass("responsive-iframe");
	});

})
