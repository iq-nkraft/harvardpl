(function ($) {
	$(window).load(function() {
	
		var dloop  = $('.node-type-landing-page .landing-page-box');
		var dcount = dloop.length;
		var cssVar = 0;
		
		//Quick condition to catch anything divisible by 4 and reformat it to be a 4 column grid
		if((dcount % 4) === 0){
			cssVar = 3;
		}
		
		switch(dcount){
			case 2:
			cssVar = 2;
				break;
			case 4:
			cssVar = 2;	
				break;
			default:
			cssVar = 3;
			
		}
		
		if(cssVar !== 0){
			cssVar = 'inner_' + cssVar;
			var arr = [];
			dloop.each(function(){
				$(this).addClass(cssVar);
				var h = $(this).height();		
				arr.push(h);				
			});
			arr.sort();
			var big = arr.pop();			
			dloop.each(function(){
				 $(this).height(big);
			});
		}
		
	});
})(jQuery);