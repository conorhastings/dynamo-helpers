var should = require("should");
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

describe("Tests for turning a dynamo object into a standard object", function() {
    it("should have a keys length of 4", function(){
    	var transformedObject = dynamoToObject(dynamoObject);
    	var keysLength = Object.keys(transformedObject).length;
        keysLength.should.equal(4);
    });

    it("the transformed object should equal the predefined object variable", function(){
    	var transformedObject = dynamoToObject(dynamoObject);
    	transformedObject.should.eql(object);
    });

   	it("should turn an object to a dynamo object then turn it back and equal the original object", function(){
    	var testDynamoObject = objectToDynamo(object);
    	var testObject = dynamoToObject(testDynamoObject);
    	testObject.should.eql(object);
    });
});
