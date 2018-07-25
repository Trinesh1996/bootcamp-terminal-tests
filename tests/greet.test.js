let assert = require("assert");
let greet = require("../greet.js");



describe('The greet function', function(){

    it('should greet Andrew correctly', function(){
        assert.equal('Hello, Andre', greet('Andre'));
    });
    it('should greet Karen correctly', function(){
        // this test will fail - can you fix it?
        assert.equal('Hello, Karen', greet('Karen'));
    });
});


describe('The other greet function', function(){
	
	it("Should return a greeting to Michael correctly", function(){
		assert.equal("Hello, Michael", greet("Michael"));
	})

	it("Should return a greeting to Jinny correctly", function(){
		assert.equal("Hello, Jinny", greet("Jinny"));
	})
})