## dynamo-helpers

`npm install dynamo-helpers`

a simple helper library that takes a standard JS object, and turns it into an object that can be inserted into dynamodb and turns an object from dynamodb back into a standard JS object. 

## Example

### objectToDynamo

```js
var dynamoHelpers = require("dyanmo-helpers");

var object = {
	cool: "teen",
	wow: 2,
	conor: ["really", "cool", "guy"],
	numbers: [1, 2, 3]
};

var dynamoObject = dynamoHelpers.objectToDynamo(object); 
/* returns
* {
*	cool: {"S": "teen"},
*	wow: {"N": 2},
*	conor: {SS: ["really", "cool", "guy"]},
*	numbers: {NS: [1, 2, 3]}
* }
*/

```

### dynamoToObject

```js
var dynamoHelpers = require("object2dynamo");

var dynamoObject = {
	cool: {"S": "teen"},
	wow: {"N": 2},
	conor: {SS: ["really", "cool", "guy"]},
	numbers: {NS: [1, 2, 3]}
 };

var object = dynamoHelpers.dynamoToObject(dynamoObject);

/* returns 
* {
*	cool: "teen",
*	wow: 2,
*	conor: ["really", "cool", "guy"],
*	numbers: [1, 2, 3]
* }
*/
```

## Test 

npm test to run tests.



