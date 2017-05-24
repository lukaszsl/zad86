var a = 0,
	b = 0,
	value = 0;

value = (a*a) + 2*(a*b) + (b*b);

if(value!==0){
	var isPositive = value<0 ? 'The value is negative!' : 'The value is positive!';
}
else{
	isPositive = 'The value is 0';
}

console.log(isPositive);