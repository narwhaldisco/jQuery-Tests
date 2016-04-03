describe('jQuery Tests', function(){
	
	describe('Simple Examples', function(){
		it('$( "div.demo-container" ).text()', function(){
			
			var start = new Date().getTime();
			
			//some jQuery!
			var example = $( "div.demo-container" ).text();
			
			var end = new Date().getTime();
			
			var diff = end - start;
			
			//Check functional
			unitjs
			  .string(example)
			  .contains('Demonstration Box');
			
			//Check timing!!!
			unitjs
			  .number(diff)
			  .isLessThan(5);
			
		});
	});
});