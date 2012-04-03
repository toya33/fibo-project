
var month = 0;
var a = 1;
var b = 0;
var w = 0;
while(month < 24){
	w = a;
	a = a+b;
	b=w;
	month = month+1;
	console.log("rabbit :" + a);
}