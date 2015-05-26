module.exports = function(dynamoObject) {
	var standardObject = {};
	Object.keys(dynamoObject).forEach(function(key){
		if(dynamoObject[key].S) {
			standardObject[key] = dynamoObject[key].S;
		}
		else if(dynamoObject[key].N) {
			standardObject[key] = dynamoObject[key].N;
		}
		else if(dynamoObject[key].SS) {
			standardObject[key] = dynamoObject[key].SS;
		}
		else if(dynamoObject[key].NS) {
			standardObject[key] = dynamoObject[key].NS;
		}
	})
	return standardObject;
};
