/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;
var t = TrelloPowerUp.iframe();

var IDESelector = document.getElementById("ide");

t.render(function () {
	return Promise.all([t.get("board", "ide")])
		.spread(function (savedIde) {
			if (savedIde && /[a-z]+/.test(savedIde)) {
				IDESelector.value = savedIde;
			}
		})
		.then(function () {
			t.sizeTo("#content").done();
		});
});

document.getElementById("save").addEventListener("click", function () {
	return t.set("board", "ide", IDESelector.value).then(function () {
		t.closePopup();
	});
});
