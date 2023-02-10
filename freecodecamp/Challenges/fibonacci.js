function sumFibs (num) {
	var a = 1;
	var b = 1;
	var c = 0;
	
	var totalImpair = a + b;
	
	while (c <= num) {
		
		c = a + b;
		
		if (c % 2 !== 0) {
			console.log(c);
			totalImpair += c;
		}
		console.log(c);
		a = b;
		b = c;
	}
	return totalImpair;
}

console.log(sumFibs(4));




