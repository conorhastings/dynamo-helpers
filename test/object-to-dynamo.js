3var should = require("should");
var dynamoToObject = require("../dynamo-to-object");
var objectToDynamo = require("../object-to-dynamo");

var dynamoObject = {
	cool: {"S": "teen"},
	wow: {"N": 2},
	conor: {SS: ["really", "cool", "guy"]},
	numbers: {NS: [1, 2, 3]}
 };

 var object = {
	cool: "teen",
	wow: 2,
	conor: ["really", "cool", "guy"],
	numbers: [1, 2, 3]
};

describe("Tests for turning a standard object into a dynamo object", function() {
    it("should have a keys length of 4", function(){
    	var transformedObject = objectToDynamo(object);
    	var keysLength = Object.keys(transformedObject).length;
        keysLength.should.equal(4);
    });

    it("the transformed object should equal the predefined dynamo object variable", function(){
    	var transformedObject = objectToDynamo(object);
    	transformedObject.should.eql(dynamoObject);
    });

   	it("should turn an object to a standard object then turn it back into a dynamo object and equal the original dynamo object", function(){
        var testObject = dynamoToObject(dynamoObject);
    	var testDynamoObject = objectToDynamo(testObject);
    	testDynamoObject.should.eql(dynamoObject);
    });
});
