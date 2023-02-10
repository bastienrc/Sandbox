function firstNumber(num) {
	var sum = 0;
	
	for (i = 1; i < num; i++) {
		sum += i;
	}
	
	return sum;
}

console.log(firstNumber(10));