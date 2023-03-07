/**
 * javascript functions
 * anonymous functions: assigned to a variable, passed as an argument to another function, or returned from a function.
 * callback functions: simply call back
 *
 */
function multiply(x,y,callback)
{
	let result = x*y;
	callback(result);

}
multiply(3,6,function(result){
	console.log(result);

}
);
