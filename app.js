
//////////////////////////////////////////////
// forEach()

const arr = [1,2,3];

Array.prototype.forEachImplementation = function(fn){
	if(typeof fn !=='function'){
		console.log('error');
	}
	const len = this.length;
	for (let i=0; i<len; i++){
		fn(this[i], i, this)
	}
}

function forEachTest(){
	function fn(element, index, array){
		console.log(`forEach: Element${index}: ${element} of an array: ${array}`)
	}
	arr.forEachImplementation(fn);
}

forEachTest();

//////////////////////////////////////////////
// map()

Array.prototype.mapImplementation = function(fn){
	if(typeof fn !=='function'){
		console.log('error');
	}
	let array = [];
	const len = this.length;
	for (let i=0; i<len; i++){
		array[i] = fn(this[i], i, this);
	}
	return array
}

function mapTest(){
	function fn(element, index, array){
		return element * index - array[0];
	}

	const newArray = arr.mapImplementation(fn);
	console.log(`Map: old array: ${arr}, new array: ${newArray}`);
}

mapTest();

//////////////////////////////////////////////
// reduce()

Array.prototype.reduceImp = function(fn, init){
	if(typeof fn !== 'function'){
		console.log('error');
	}
	let prev, start;
	if(typeof init === 'undefined'){
		prev = this[0];
		// starts from index 1 as index 0 (prev) is already counted in and should not be included as the element of iteration 
		start = 1;
	} else {
		prev = init;
		start = 0;
	}
	const len = this.length;
	for(let i=start; i<len; i++){
		const result = fn(prev, this[i], this);
		prev = result;
	}
	return prev
}

function reduceTest(){
	function fn(prev, curr, index, array){
		return prev + curr
	}
	const result = arr.reduceImp(fn);
	console.log(`Reduce: ${result}`);
}

reduceTest();