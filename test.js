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

describe('jQuery Reliability Tests', function(){
	
	for(var i = 0; i < 1000; i++ ) {
		describe('Test .text() reliability', function(){
			it('$( "div.demo-container" ).text()', function(){

				//some jQuery!
				var test = $( "div.demo-container" ).text();
				
				//Check functional
				unitjs
				  .string(test)
				  .contains('Demonstration Box');
			});
		});
	}

	for(var i = 0; i < 1000; i++) {
		describe('Test .text() reliability', function() {
			it('$("p").val("hello")', function() {
				$("p").text("My first paragraph.");
				$("p").text("hello");
				
				var test = $("p").text();
				
				unitjs
					.string(test)
					.contains('hello');
			});
		});
	}
	
	for(var i = 0; i < 1000; i++) {
		describe('Test AJAX get call reliability', function() {
			it("$.get(http://httpbin.org/)", function() {
				
				var test;
				$.get("http://httpbin.org/", function(data, status) {
					var test = status;
					unitjs
						.string(test)
						.contains('success');
				});
			});
		});
	}
});