describe('jQuery Tests', function(){
	
	describe('jQuery Performance Tests', function(){
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
			  
			console.log('$( "div.demo-container" ).text() :' + diff);
			
		});
		
		it('$( "div.demo-container" ).html()', function(){
			
			var start = new Date().getTime();
			
			//some jQuery!
			var example = $( "div.demo-container" ).html();
			
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
			  
			console.log('$( "div.demo-container" ).html() :' + diff);
			
		});
		
		it('$("#test2").val()', function(){
			
			var start = new Date().getTime();
			
			//some jQuery!
			var example = $("#test2").val();
			
			var end = new Date().getTime();
			
			var diff = end - start;
			
			//Check functional
			unitjs
			  .string(example)
			  .contains('Mickey Mouse');
			
			//Check timing!!!
			unitjs
			  .number(diff)
			  .isLessThan(5);
			  
			console.log('$("#test2").val() :' + diff);
			
		});
		
		it('$("#w3s").attr("href")', function(){
			
			var start = new Date().getTime();
			
			//some jQuery!
			var example = $("#w3s").attr("href");
			
			var end = new Date().getTime();
			
			var diff = end - start;
			
			//Check functional
			unitjs
			  .string(example)
			  .contains('w3schools');
			
			//Check timing!!!
			unitjs
			  .number(diff)
			  .isLessThan(5);
			  
			console.log('$("#w3s").attr("href") :' + diff);
			
		});
		
		it('$("#w3s2").attr("href", "http://www.w3schools.com/jquery");', function(){
			
			var start = new Date().getTime();
			
			//some jQuery!
			$("#w3s2").attr("href", "http://www.w3schools.com/jquery");
			
			var end = new Date().getTime();
			
			var diff = end - start;
			
			var example = $("#w3s2").attr("href");
			
			//Check functional
			unitjs
			  .string(example)
			  .contains('jquery');
			
			//Check timing!!!
			unitjs
			  .number(diff)
			  .isLessThan(5);
			  
			console.log('$("#w3s2").attr("href", "http://www.w3schools.com/jquery"); :' + diff);
			
		});
		
		it('$("#test3").append(" <b>Appended text</b>.");', function(){
			
			var start = new Date().getTime();
			
			//some jQuery!
			$("#test3").append(" <b>Appended text</b>.");
			
			var end = new Date().getTime();
			
			var diff = end - start;
			
			var example = $( "#test3" ).text();
			
			//Check functional
			unitjs
			  .string(example)
			  .contains('Appended text');
			
			//Check timing!!!
			unitjs
			  .number(diff)
			  .isLessThan(5);
			  
			console.log('$("#test3").append(" <b>Appended text</b>.") :' + diff);
			
		});
		
		it('$("#test3").prepend(" <b>Prepended text</b>.");', function(){
			
			var start = new Date().getTime();
			
			//some jQuery!
			$("#test3").prepend(" <b>Prepended text</b>.");;
			
			var end = new Date().getTime();
			
			var diff = end - start;
			
			var example = $( "#test3" ).text();
			
			//Check functional
			unitjs
			  .string(example)
			  .contains('Prepended text');
			
			//Check timing!!!
			unitjs
			  .number(diff)
			  .isLessThan(5);
			  
			console.log('$("#test3").prepend(" <b>Prepended text</b>.") :' + diff);
			
		});
		
		it('$("#test").hide()', function(){
			
			var start = new Date().getTime();
			
			//some jQuery!
			$("#test").hide();
			
			var end = new Date().getTime();
			
			var diff = end - start;
			
			var result = $("#test").is(":visible"); 
			
			//Check functional
			unitjs
			  .bool(result)
			  .isFalse();
			
			//Check timing!!!
			unitjs
			  .number(diff)
			  .isLessThan(5);
			  
			console.log('$("#test").hide() :' + diff);
			
		});
		
		it('$("#test").show()', function(){
			
			var start = new Date().getTime();
			
			//some jQuery!
			$("#test").show();
			
			var end = new Date().getTime();
			
			var diff = end - start;
			
			var result = $("#test").is(":visible"); 
			
			//Check functional
			unitjs
			  .bool(result)
			  .isTrue();
			
			//Check timing!!!
			unitjs
			  .number(diff)
			  .isLessThan(5);
			  
			console.log('$("#test").show() :' + diff);
			
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