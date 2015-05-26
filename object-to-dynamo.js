module.exports = function (object) {
	var dynamoObject = {};
	Object.keys(object).forEach(function(key) {
		if(typeof object[key] === "string") {
			dynamoObject[key] = {"S" : object[key]};
		}
		else if(typeof object[key] === "number") {
			dynamoObject[key] = {"N": object[key]};
		}
		else if(Array.isArray(object[key])) {
			var containsNumber = object[key].some(function(item) {
				if(typeof item === "object"){
					throw new Error("You can not have an object or array as an item in an array");
				}
				return (typeof item === "number");
			});
			dynamoObject[key] = containsNumber ? {"NS": object[key]} : {"SS": object[key]}
		}
		else {
			throw new Error("The type of key " + key + "in your object is not valid" );
		}
	});

	return dynamoObject;
};
