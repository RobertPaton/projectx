(function() {
	TweenMax.to("#recordTop", 2, {rotation:180, ease:Linear.easeNone, repeat: -1});

	TweenMax.staggerFrom("#title", 2, {y:"-200", autoAlpha:0, ease:Elastic.easeOut}, 0.05);
})();

$(document).scroll(function(){
    if($(this).scrollTop()>=$('#panel3').position().top){
        TweenMax.staggerFrom("#call", 2, {x:"-500", autoAlpha:0}, 0.05);
        TweenMax.staggerFrom("#date", 3, {autoAlpha:0});
    }
})