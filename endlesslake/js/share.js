function play68_submitScore(score) {
	updateShareScore(score);
	Play68.shareFriend();
	//setTimeout( function() { Play68.shareFriend(); }, 1000 )
}
function updateShare(score) {
	var descContent = "无尽之湖";
	if(score > 0)
		shareTitle = '我在“无尽之湖”玩了' + score +'分，传说1000分之后就有机会见到湖怪！';
	else
		shareTitle = "无尽之湖 - 玩一把";
	appid = '';
	Play68.setShareInfo(shareTitle,descContent);
	document.title = shareTitle;
}
