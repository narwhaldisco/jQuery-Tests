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

		it('Number', function(){
			
			var angle = getRpmAngle(5000);
			unitjs
			  .number(angle);
			
		});

		it('Expressive', function(){
			var str = 'Hi';
			unitjs
				.when('the text changes', function(){
					str = 'hello world';
				})
				.then(function(){
					unitjs
						.string(str)
							.startsWith('Hi')
				})
			;
		});
	});

	describe('RPM Tests', function(){

		it('getRpmAngle', function(){
			var angle = getRpmAngle(5000);
			
			unitjs
			  .number(angle).is(1.47262125);
			
			angle = getRpmAngle(0);
			
			unitjs
			  .number(angle).is(3.92699);
		});

		it('getSpeedAngle', function(){
			
			speed = 50;
			
			var angle = getSpeedAngle();
			
			unitjs
			  .number(angle).is(2.7488900000000003);
			  
			speed = 200;
			
			angle = getSpeedAngle();
			
			unitjs
			  .number(angle).is(-0.7854099999999997);
		});
		
		it('setRPM', function(){
			
			var must = unitjs.must;
			
			var s = document.getElementById("number");
			s.value = "";
			
			setRpm();
			
			(currentRpm).must.be.equal(idle);

		});
	});

	describe('Sinon', function(){
		it('spy on getRpmFromSpeed', function(){
			var s = document.getElementById("number");
			s.value = "800";
			setRpm();

			var sinon = unitjs.sinon;

			var spy = sinon.spy(window, "getRpmFromSpeed");
			calcAccel();

			spy.called.must.be.equal(true);

			setGear(2);
			unitjs.should(spy.callCount).be.equal(2);

			// restore the original function
			getRpmFromSpeed.restore();
		});

		it('stub for getRpmFromSpeed', function(){
			var stub = sinon.stub(window, "getRpmFromSpeed");
			stub.returns(0);

			var speedBefore = speed;
			calcAccel();
			unitjs.number(speed).isEqualTo(speedBefore + 0.1);

			setGear(3);
			unitjs.assert.equal(targetRpm, 0);

			getRpmFromSpeed.restore();
		});

		it('mock of getRpmFromSpeed', function(){
			var mockGear = gear;
			var mock = sinon.mock(window);
			mock.expects("getRpmFromSpeed").once().withExactArgs(mockGear);

			calcAccel();
			setGear(3);

			mock.verify();
			mock.restore();
		});
	});
});